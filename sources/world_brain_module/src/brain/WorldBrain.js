
import { Blackboard } from './Blackboard.js';
import { Orchestrator } from './Orchestrator.js';
import { NavigationAgent } from '../agents/NavigationAgent.js';
import { EconomyAgent } from '../agents/EconomyAgent.js';

export class WorldBrain {
  constructor() {
    this.blackboard = new Blackboard();

    this.agents = [
      new NavigationAgent(),
      new EconomyAgent()
      // extend to 13 heuristic domains
    ];

    this.orchestrator = new Orchestrator(this.agents);
  }

  tick(worldState) {
    return this.orchestrator.processTick(worldState, this.blackboard);
  }
}
