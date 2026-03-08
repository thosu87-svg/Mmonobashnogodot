
import { Agent } from './BaseAgent.js';

export class EconomyAgent extends Agent {
  constructor() {
    super("economy");
  }

  evaluate(world, blackboard) {
    if(world.marketInflation > 0.7) {
      blackboard.propose({
        type: "spawn_traders",
        priority: 8,
        sourceAgent: this.name,
        cooldownKey: "spawn_traders"
      });
    }
  }
}
