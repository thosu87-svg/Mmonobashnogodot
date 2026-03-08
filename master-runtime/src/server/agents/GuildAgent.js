import { BaseAgent } from './BaseAgent.js';

export class GuildAgent extends BaseAgent {
  constructor() {
    super("guild");
  }

  evaluate(world, blackboard) {
    if (world.metrics.guildActivity < 0.25) {
  blackboard.propose({
    type: "trigger_guild_call",
    priority: 3,
    sourceAgent: this.name,
    cooldownKey: "trigger_guild_call",
    cooldownMs: 9000
  });
}
  }
}
