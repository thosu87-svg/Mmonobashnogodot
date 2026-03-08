
import { Agent } from './BaseAgent.js';

export class NavigationAgent extends Agent {
  constructor() {
    super("navigation");
  }

  evaluate(world, blackboard) {
    if(world.playerCount > 50) {
      blackboard.propose({
        type: "expand_chunk_ring",
        priority: 5,
        sourceAgent: this.name
      });
    }
  }
}
