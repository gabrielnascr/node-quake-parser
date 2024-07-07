import { Match } from "../entities/Match";

export interface ILogRepository {
  getMatches(): Promise<Match[]>;
}
