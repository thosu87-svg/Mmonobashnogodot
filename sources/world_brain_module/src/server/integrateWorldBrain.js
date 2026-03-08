
import { WorldBrain } from '../brain/WorldBrain.js';

const brain = new WorldBrain();

export function runWorldTick(worldState) {
  const actions = brain.tick(worldState);

  for(const action of actions){
    console.log("ACTION:", action);
  }

  return actions;
}
