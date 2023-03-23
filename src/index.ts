// declare var require: any;
const info = require("./info.json");
let leagues = Object.keys(info);

export interface League {
  name: string;
  image?: string;
  clubs: string[];
}

export interface Club {
  name: string;
  image: string;
  players: string[];
}

export function allLeagues(): string[] {
  // Returns data for all top 5 football leagues in Europe
  return leagues;
}
