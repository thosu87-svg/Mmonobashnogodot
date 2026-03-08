
export class Blackboard {
  constructor() {
    this.facts = {};
    this.proposals = [];
  }

  setFact(key, value) {
    this.facts[key] = value;
  }

  getFact(key) {
    return this.facts[key];
  }

  propose(action) {
    this.proposals.push(action);
  }

  clearProposals() {
    this.proposals = [];
  }
}
