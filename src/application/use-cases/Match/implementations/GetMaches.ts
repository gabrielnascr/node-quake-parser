import { ILogRepository } from "../../../../domain/interfaces/ILogRepository";
import { IGetMatchesUseCase } from "../GetMatches";

export class GetMatchesUseCase implements IGetMatchesUseCase {
  constructor(private logRepository: ILogRepository) {}

  async execute() {
    const matches = this.logRepository.getMatches();
    const ranking = this.logRepository.getPlayerRanking();

    return {
      matches: matches.map((match) => {
        return {
          ...match,
          players: Array.from(match.players),
        };
      }),
      ranking: ranking.getRanking(),
    };
  }
}
