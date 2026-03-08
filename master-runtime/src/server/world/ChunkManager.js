import { CHUNK_SIZE, VIEW_RADIUS } from '../../shared/constants.js';

export class ChunkManager {
  constructor() {
    this.loaded = new Map();
  }

  key(cx, cz) {
    return `${cx},${cz}`;
  }

  toChunkCoord(value) {
    return Math.floor(value / CHUNK_SIZE);
  }

  ensureAround(x, z) {
    const cx = this.toChunkCoord(x);
    const cz = this.toChunkCoord(z);
    const chunks = [];

    for (let dz = -VIEW_RADIUS; dz <= VIEW_RADIUS; dz++) {
      for (let dx = -VIEW_RADIUS; dx <= VIEW_RADIUS; dx++) {
        const k = this.key(cx + dx, cz + dz);
        if (!this.loaded.has(k)) {
          this.loaded.set(k, {
            x: cx + dx,
            z: cz + dz,
            biome: (Math.abs(cx + dx + cz + dz) % 2 === 0) ? "grass" : "sand"
          });
        }
        chunks.push(this.loaded.get(k));
      }
    }
    return chunks;
  }

  get count() {
    return this.loaded.size;
  }
}
