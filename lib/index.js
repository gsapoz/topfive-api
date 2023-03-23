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
//when you're finished, run npm tsc to convert this to javascript, that will create lib folder
// https://www.youtube.com/watch?v=Nh9xW2-ZOEU
// https://www.youtube.com/watch?v=vSxoV1KUF-A
//# sourceMappingURL=index.js.map