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

export declare function allTeams(): string[];
export declare function allLeagues(): string[];
