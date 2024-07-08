import { Match } from "../../../domain/entities/Match";
import { EventHandler } from "../EventHandlers";

export class InitGameHandler implements EventHandler {
  handle(
    line: string,
    currentMatch: Match | null,
    matches: Match[]
  ): Match | null {
    if (currentMatch) matches.push(currentMatch);
    return new Match();
  }
}
