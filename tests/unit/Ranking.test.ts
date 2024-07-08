import { Ranking } from "../../src/domain/entities/Ranking";

describe("Ranking", () => {
  let ranking: Ranking;

  beforeEach(() => {
    ranking = new Ranking();
  });

  it("should update player ranking correctly", () => {
    ranking.updatePlayer("Luiz", 10, 5);

    const luizRanking = ranking.getPlayerRanking("Luiz");

    expect(luizRanking).toEqual({
      total_kills: 10,
      total_deaths: 5,
    });
  });

  it("should return a ranking correctly", () => {
    ranking.updatePlayer("Luiz", 12, 1);
    ranking.updatePlayer("Gabriel", 1, 1);
    ranking.updatePlayer("Patrick", 14, 1);

    const rankingData = ranking.getRanking();

    expect(rankingData[0].ranking_position).toBe(1);
    expect(rankingData[1].ranking_position).toBe(2);
    expect(rankingData[2].ranking_position).toBe(3);
  });

  it("should return undefined for non-existing player", () => {
    const playerRanking = ranking.getPlayerRanking("NonExistingPlayer");
    expect(playerRanking).toBeUndefined();
  });

  it("should retrieve all players in ranking", () => {
    ranking.updatePlayer("Luiz", 10, 5);
    ranking.updatePlayer("Gabriel", 8, 7);
    ranking.updatePlayer("Patrick", 12, 3);

    const allPlayers = ranking.getAllPlayers();
    expect(allPlayers).toEqual(["Luiz", "Gabriel", "Patrick"]);
  });
});
