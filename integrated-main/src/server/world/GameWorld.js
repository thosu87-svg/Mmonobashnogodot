import { ChunkManager } from './ChunkManager.js';

export class GameWorld {
  constructor() {
    this.players = new Map();
    this.npcs = [];
    this.chunkManager = new ChunkManager();
    this.time = 0;
    this.questHooks = 1;
    this.marketBonusActive = false;
    this.metrics = {
      threatLevel: 0.15,
      marketInflation: 0.25,
      lonelyPlayers: 0,
      activeQuestHooks: 1,
      resourceScarcity: 0.25,
      playerEngagement: 0.4,
      suspiciousMovementCount: 0,
      tradeFlow: 0.5,
      guildActivity: 0.1,
      weatherPhase: "clear"
    };
  }

  upsertPlayer(id, patch) {
    const current = this.players.get(id) ?? {
      id,
      x: 0,
      z: 0,
      name: `P-${id.slice(0,4)}`,
      vx: 0,
      vz: 0,
      guild: null,
      lastMoveAt: Date.now(),
      suspicious: false
    };
    const next = { ...current, ...patch, lastMoveAt: Date.now() };
    this.players.set(id, next);
    this.chunkManager.ensureAround(next.x, next.z);
    return next;
  }

  removePlayer(id) {
    this.players.delete(id);
  }

  simulate() {
    this.time += 1;

    const playerCount = this.players.size;
    this.metrics.lonelyPlayers = playerCount > 0 ? Math.max(0, playerCount - Math.floor(playerCount / 2)) : 0;
    this.metrics.activeQuestHooks = this.questHooks;
    this.metrics.playerEngagement = Math.min(1, 0.2 + playerCount * 0.08);
    this.metrics.tradeFlow = this.marketBonusActive ? 0.65 : Math.max(0.1, 0.5 - this.metrics.marketInflation * 0.4);
    this.metrics.guildActivity = Math.min(1, playerCount * 0.05);

    if (this.time % 8 === 0) this.metrics.marketInflation = Math.min(1, this.metrics.marketInflation + 0.08);
    if (this.time % 10 === 0) this.metrics.resourceScarcity = Math.min(1, this.metrics.resourceScarcity + 0.05);
    if (this.time % 12 === 0) this.metrics.threatLevel = Math.min(1, this.metrics.threatLevel + 0.1);
    if (this.time % 15 === 0) this.metrics.weatherPhase = this.metrics.weatherPhase === "clear" ? "storm" : "clear";

    this.loadedChunkCount = this.chunkManager.count;
  }

  applyActions(actions) {
    for (const action of actions) {
      switch (action.type) {
        case "spawn_guards":
          this.npcs.push({ type: "guard", x: 0, z: 0 });
          this.metrics.threatLevel = Math.max(0, this.metrics.threatLevel - 0.15);
          break;
        case "spawn_traders":
          this.npcs.push({ type: "trader", x: 4, z: 4 });
          this.metrics.marketInflation = Math.max(0, this.metrics.marketInflation - 0.2);
          break;
        case "seed_quest_hooks":
          this.questHooks += 2;
          break;
        case "boost_resource_nodes":
          this.metrics.resourceScarcity = Math.max(0, this.metrics.resourceScarcity - 0.15);
          break;
        case "open_market_bonus":
          this.marketBonusActive = true;
          break;
        case "trigger_guild_call":
          this.metrics.guildActivity = Math.min(1, this.metrics.guildActivity + 0.2);
          break;
        case "boost_storm_loot":
          this.questHooks += 1;
          break;
        case "freeze_suspicious_player":
          for (const player of this.players.values()) {
            if (player.suspicious) {
              player.vx = 0;
              player.vz = 0;
            }
          }
          this.metrics.suspiciousMovementCount = 0;
          break;
        default:
          break;
      }
    }
  }

  snapshot() {
    return {
      time: this.time,
      players: Array.from(this.players.values()),
      npcs: this.npcs,
      metrics: this.metrics,
      loadedChunkCount: this.chunkManager.count,
      chunks: Array.from(this.chunkManager.loaded.values()).slice(0, 64)
    };
  }
}
