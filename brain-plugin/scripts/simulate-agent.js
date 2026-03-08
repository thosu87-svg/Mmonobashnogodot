
import { runWorldTick } from '../src/server/integrateWorldBrain.js';

const world = {
  playerCount: 60,
  marketInflation: 0.8
};

setInterval(()=>{
  runWorldTick(world);
},2000);
