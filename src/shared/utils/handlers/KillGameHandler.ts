import { Match } from "../../../domain/entities/Match";
import { Ranking } from "../../../domain/entities/Ranking";
import { EventHandler } from "../EventHandlers";

export class KillHandler implements EventHandler {
  handle(
    line: string,
    currentMatch: Match | null,
    matches: Match[],
    ranking: Ranking
  ): Match | null {
    const killLine = line.match(
      /Kill:\s\d+\s\d+\s\d+:\s(.+?)\skilled\s(.+?)\sby\s(.+)/
    );

    if (killLine && currentMatch) {
      const killerPlayer = killLine[1];
      const killedPlayer = killLine[2];

      currentMatch.total_kills += 1;
      if (killerPlayer !== "<world>") {
        currentMatch.players.add(killerPlayer);
        currentMatch.kills[killerPlayer] =
          (currentMatch.kills[killerPlayer] || 0) + 1;

        ranking.updatePlayer(killerPlayer, 1, 0);
        ranking.updatePlayer(killedPlayer, 0, 1);
      }

      if (!(killedPlayer in currentMatch.kills)) {
        currentMatch.kills[killedPlayer] = 0;
      }

      currentMatch.players.add(killedPlayer);

      if (killerPlayer === "<world>") {
        currentMatch.kills[killedPlayer] =
          (currentMatch.kills[killedPlayer] || 0) - 1;

        ranking.updatePlayer(killedPlayer, -1, 0);
      }
    }
    return currentMatch;
  }
}
