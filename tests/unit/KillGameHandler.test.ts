import { Match } from "../../src/domain/entities/Match";
import { Ranking } from "../../src/domain/entities/Ranking";
import { KillHandler } from "../../src/shared/utils/handlers/KillGameHandler";

describe("Kill Game Handler", () => {
  it("should handle a kill event and update current match", () => {
    const handler = new KillHandler();
    const currentMatch = new Match();
    const ranking = new Ranking();
    const matches: Match[] = [];

    const line =
      "13:46 Kill: 4 3 7: Dono da Bola killed Oootsimo by MOD_ROCKET_SPLASH";

    const newMatch = handler.handle(line, currentMatch, matches, ranking);

    expect(newMatch).toEqual(currentMatch);
    expect(currentMatch.total_kills).toBe(1);
    expect(currentMatch.players.size).toBe(2);
    expect(currentMatch.kills["Dono da Bola"]).toBe(1);
    expect(currentMatch.kills["Oootsimo"]).toBe(0);
  });
});
