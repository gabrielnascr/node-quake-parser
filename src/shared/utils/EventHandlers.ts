import { Match } from "../../domain/entities/Match";
import { Ranking } from "../../domain/entities/Ranking";

export interface EventHandler {
  handle(
    line: string,
    currentMatch: Match | null,
    matches: Match[],
    ranking: Ranking
  ): Match | null;
}
