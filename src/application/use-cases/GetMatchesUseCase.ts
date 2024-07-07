import { ILogRepository } from "../../domain/interfaces/ILogRepository";
import { Match } from "../../domain/entities/Match";

export class GetMatchesUseCase {
  constructor(private logRepository: ILogRepository) {}

  async execute(): Promise<Match[]> {
    return this.logRepository.getMatches();
  }
}
