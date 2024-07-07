import { Match } from "../../../domain/entities/Match";

describe("Match Entity", () => {
  test("should create a intance of Match", () => {
    const match = new Match();

    expect(match).toBeInstanceOf(Match);
  });
  test("should start a match with correct initial properties", () => {
    const match = new Match();

    expect(match.kills).toBe(0);
    expect(match.players).toBe({});
    expect(match.total_kills).toBe(0);
  });
});
