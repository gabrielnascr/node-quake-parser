import { Match } from "../../domain/entities/Match";
import { Ranking } from "../../domain/entities/Ranking";
import { ILogRepository } from "../../domain/interfaces/ILogRepository";
import { readFile } from "../../shared/utils/fileReader";
import { parseLogData } from "../../shared/utils/parseLog";
import { resolve } from "path";

export class LogRepository implements ILogRepository {
  private parsedLog = parseLogData(
    readFile(resolve("src", "data", "game.log"))
  );

  getMatches(): Match[] {
    const matches = this.parsedLog.matches;
    return matches;
  }

  getPlayerRanking(): Ranking {
    const ranking = this.parsedLog.ranking;
    return ranking;
  }
}
