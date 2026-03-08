export interface BrainSnapshot {
  playersOnline: number;
  loadedChunkCount: number;
  marketInflation: number;
  resourceScarcity: number;
  threatLevel: number;
  guildActivity: number;
  activeQuestHooks: number;
  suspiciousMovementCount: number;
  weatherPhase: "clear" | "storm";
}

export class ServiceFieldAdapter {
  static async buildSnapshot(): Promise<BrainSnapshot> {
    return {
      playersOnline: 1,
      loadedChunkCount: 9,
      marketInflation: 0.35,
      resourceScarcity: 0.25,
      threatLevel: 0.2,
      guildActivity: 0.1,
      activeQuestHooks: 2,
      suspiciousMovementCount: 0,
      weatherPhase: "clear"
    };
  }
}
