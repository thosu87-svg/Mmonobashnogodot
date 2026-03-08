export class Blackboard {
  constructor() {
    this.facts = {};
    this.proposals = [];
    this.metrics = {};
  }

  reset() {
    this.proposals = [];
    this.metrics = {};
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
}
