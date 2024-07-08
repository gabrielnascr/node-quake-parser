import { parseLogData } from "../../src/shared/utils/parseLog";

describe("parseLogData", () => {
  it("should parse a log file and return an array of Match objects", () => {
    const logData = `
      InitGame: 0
      Kill: 1 2 3: Luiz killed Patrick by MOD_RAILGUN
      Kill: 2 3 4: Patrick killed Gabriel by MOD_ROCKET
      ShutdownGame: 5
      InitGame: 2
      Kill: 1 2 3: Gabriel killed Patrick by MOD_RAILGUN
      Kill: 2 3 4: Luiz killed Gabriel by MOD_ROCKET
      Kill: 5 6 7: João killed Luiz by MOD_ROCKET
      Kill: 1022 2 22: <world> killed Patrick by MOD_TRIGGER_HURT
      ShutdownGame: 8
    `;

    const { matches } = parseLogData(logData);

    expect(matches.length).toBe(2);
    const match1 = matches[0];
    expect(match1.total_kills).toBe(2);
    expect(match1.players.size).toBe(3);
    expect(match1.players.has("Luiz")).toBe(true);
    expect(match1.players.has("Patrick")).toBe(true);
    expect(match1.players.has("Gabriel")).toBe(true);
    expect(match1.kills["Luiz"]).toBe(1);
    expect(match1.kills["Patrick"]).toBe(1);
    expect(match1.kills["Gabriel"]).toBe(0);

    const match2 = matches[1];

    expect(match2.total_kills).toBe(4);
    expect(match2.players.size).toBe(4);
    expect(match2.players.has("Luiz")).toBe(true);
    expect(match2.players.has("Patrick")).toBe(true);
    expect(match2.players.has("Gabriel")).toBe(true);
    expect(match2.players.has("João")).toBe(true);

    expect(match2.kills["Luiz"]).toBe(1);
    expect(match2.kills["Patrick"]).toBe(-1);
    expect(match2.kills["Gabriel"]).toBe(1);
    expect(match2.kills["João"]).toBe(1);
  });

  it("should handle empty log data", () => {
    const logData = "";
    const { matches } = parseLogData(logData);
    expect(matches.length).toBe(0);
  });
});
