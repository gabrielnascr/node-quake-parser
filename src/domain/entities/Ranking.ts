export class Ranking {
  private players: Map<
    string,
    { total_kills: number; total_deaths: number; ranking_position?: number }
  >;

  constructor() {
    this.players = new Map();
  }

  updatePlayer(playerName: string, kills: number, deaths: number) {
    if (!this.players.has(playerName)) {
      this.players.set(playerName, { total_kills: 0, total_deaths: 0 });
    }
    const playerData = this.players.get(playerName)!;
    playerData.total_kills += kills;
    playerData.total_deaths += deaths;
  }

  getPlayerRanking(playerName: string) {
    return this.players.get(playerName);
  }

  getAllPlayers() {
    return Array.from(this.players.keys());
  }

  getRanking() {
    const rankingArray = Array.from(this.players.entries())
      .map(([player, stats]) => {
        return {
          player,
          ...stats,
        };
      })
      .sort((a, b) => b.total_kills - a.total_kills);

    return rankingArray.map((player, index) => ({
      ranking_position: index + 1,
      ...player,
    }));
  }
}
