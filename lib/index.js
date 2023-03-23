"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allLeagues = void 0;
// declare var require: any;
const info = require("./info.json");
let leagues = Object.keys(info);
function allLeagues() {
  // Returns data for all top 5 football leagues in Europe
  return leagues;
}
exports.allLeagues = allLeagues;

//# sourceMappingURL=index.js.map
