import { Match } from "../../../domain/entities/Match";
import { EventHandler } from "../EventHandlers";

export class ShutdownGameHandler implements EventHandler {
  handle(
    line: string,
    currentMatch: Match | null,
    matches: Match[]
  ): Match | null {
    if (currentMatch) matches.push(currentMatch);
    return null;
  }
}
