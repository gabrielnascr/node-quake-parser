export class Match {
  total_kills: number;
  players: Set<string>;
  kills: { [key: string]: number };

  constructor() {
    this.total_kills = 0;
    this.players = new Set<string>();
    this.kills = {};
  }
}
