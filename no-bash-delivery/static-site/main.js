import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

const statusEl = document.getElementById('status');
const logEl = document.getElementById('log');

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0b1020);

const camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.1, 1000);
camera.position.set(0, 14, 18);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

const hemi = new THREE.HemisphereLight(0xffffff, 0x223355, 1.2);
scene.add(hemi);

const dir = new THREE.DirectionalLight(0xffffff, 1.1);
dir.position.set(10, 20, 8);
scene.add(dir);

const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(120, 120, 12, 12),
  new THREE.MeshStandardMaterial({ color: 0x304d2c })
);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

const grid = new THREE.GridHelper(120, 30, 0x66ccff, 0x335577);
scene.add(grid);

const playerMesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0x66ccff })
);
playerMesh.position.y = 0.5;
scene.add(playerMesh);

const npcMaterial = new THREE.MeshStandardMaterial({ color: 0xffcc66 });
const npcs = new Map();

let playerId = null;
let worldState = null;

const runtimeWsUrl = (window.RUNTIME_CONFIG && window.RUNTIME_CONFIG.wsUrl) ? window.RUNTIME_CONFIG.wsUrl : `ws://${location.host}`;
const ws = new WebSocket(runtimeWsUrl);
ws.addEventListener('open', () => {
  statusEl.textContent = 'verbunden';
});

ws.addEventListener('message', (event) => {
  const data = JSON.parse(event.data);

  if (data.type === 'welcome') {
    playerId = data.id;
  }

  if (data.type === 'state') {
    worldState = data.world;
    renderWorld();
  }
});

function ensureNpc(id, x, z) {
  if (!npcs.has(id)) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1.5, 1), npcMaterial);
    mesh.position.y = 0.75;
    scene.add(mesh);
    npcs.set(id, mesh);
  }
  const mesh = npcs.get(id);
  mesh.position.set(x, 0.75, z);
}

function renderWorld() {
  if (!worldState) return;

  const me = worldState.players.find(p => p.id === playerId);
  if (me) {
    playerMesh.position.set(me.x, 0.5, me.z);
    camera.position.x = me.x + 10;
    camera.position.z = me.z + 14;
    camera.lookAt(me.x, 0, me.z);
  }

  worldState.npcs.forEach((npc, idx) => ensureNpc(`npc-${idx}`, npc.x, npc.z));

  logEl.textContent =
    `Spieler: ${worldState.players.length}\n` +
    `NPCs: ${worldState.npcs.length}\n` +
    `Chunks: ${worldState.loadedChunkCount}\n` +
    `Threat: ${worldState.metrics.threatLevel.toFixed(2)}\n` +
    `Inflation: ${worldState.metrics.marketInflation.toFixed(2)}\n` +
    `Scarcity: ${worldState.metrics.resourceScarcity.toFixed(2)}\n` +
    `Weather: ${worldState.metrics.weatherPhase}`;
}

const keys = new Set();

addEventListener('keydown', (e) => keys.add(e.key.toLowerCase()));
addEventListener('keyup', (e) => keys.delete(e.key.toLowerCase()));

function updateMovement() {
  if (!playerId || !worldState) return;
  const me = worldState.players.find(p => p.id === playerId);
  if (!me) return;

  let x = me.x;
  let z = me.z;
  const speed = 0.25;

  if (keys.has('w') || keys.has('arrowup')) z -= speed;
  if (keys.has('s') || keys.has('arrowdown')) z += speed;
  if (keys.has('a') || keys.has('arrowleft')) x -= speed;
  if (keys.has('d') || keys.has('arrowright')) x += speed;

  ws.send(JSON.stringify({ type: 'move', x, z }));
}

function animate() {
  requestAnimationFrame(animate);
  updateMovement();
  renderer.render(scene, camera);
}
animate();

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});
