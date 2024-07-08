import { Match } from "../../src/domain/entities/Match";
import { InitGameHandler } from "../../src/shared/utils/handlers/InitGameHandler";

describe("Init Game Handler", () => {
  it("should start a new match and push the current match to matches array", () => {
    const handler = new InitGameHandler();
    const currentMatch = new Match();

    const matches: Match[] = [];
    const line = "InitGame";

    const newMatch = handler.handle(line, currentMatch, matches);

    expect(matches.length).toBe(1);
    expect(matches[0]).toBe(currentMatch);
    expect(newMatch).toEqual(new Match());
  });
});
