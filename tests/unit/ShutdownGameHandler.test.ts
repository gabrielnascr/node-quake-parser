import { Match } from "../../src/domain/entities/Match";
import { ShutdownGameHandler } from "../../src/shared/utils/handlers/ShutdownGameHandler";

describe("Shutdown Game Handler", () => {
  it("should end the current match and return null", () => {
    const handler = new ShutdownGameHandler();
    const currentMatch = new Match();
    const matches: Match[] = [];

    const line = "ShutdownGame";

    const newMatch = handler.handle(line, currentMatch, matches);
    expect(matches.length).toBe(1);
    expect(newMatch).toBeNull();
  });
});
