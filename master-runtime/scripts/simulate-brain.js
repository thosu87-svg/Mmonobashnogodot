import { GameWorld } from '../src/server/world/GameWorld.js';
import { WorldBrain } from '../src/server/brain/WorldBrain.js';

const world = new GameWorld();
const brain = new WorldBrain();

world.upsertPlayer('local-test', { x: 12, z: 5 });
world.upsertPlayer('local-test-2', { x: 24, z: 7 });

let ticks = 0;
const handle = setInterval(() => {
  ticks++;
  world.simulate();
  const actions = brain.tick(world);
  world.applyActions(actions);
  console.log(`tick=${ticks}`, actions.map(a => a.type));

  if (ticks >= 12) {
    clearInterval(handle);
    console.log('done');
  }
}, 500);
