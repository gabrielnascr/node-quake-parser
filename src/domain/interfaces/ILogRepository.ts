import { Match } from "../entities/Match";
import { Ranking } from "../entities/Ranking";

export interface ILogRepository {
  getMatches(): Match[];
  getPlayerRanking(): Ranking;
}
