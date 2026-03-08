
export class Orchestrator {
  constructor(agents, config={}) {
    this.agents = agents;
    this.MAX_ACTIONS_PER_TICK = config.maxActions || 50;
    this.MAX_DEPTH = config.maxDepth || 3;
    this.cooldowns = new Map();
  }

  processTick(worldState, blackboard) {
    blackboard.clearProposals();

    for (const agent of this.agents) {
      agent.evaluate(worldState, blackboard);
    }

    const actions = this.resolve(blackboard.proposals);
    return actions;
  }

  resolve(actions) {
    const sorted = actions.sort((a,b)=>b.priority-a.priority);
    const finalActions = [];
    const used = new Set();

    for (const a of sorted) {
      if(finalActions.length >= this.MAX_ACTIONS_PER_TICK) break;
      if(a.cooldownKey && this.cooldowns.has(a.cooldownKey)) continue;

      const key = a.type + ":" + (a.targetId||"global");
      if(used.has(key)) continue;

      finalActions.push(a);
      used.add(key);

      if(a.cooldownKey) this.cooldowns.set(a.cooldownKey, Date.now());
    }

    return finalActions;
  }
}
