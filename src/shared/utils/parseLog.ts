import { Match } from "../../domain/entities/Match";
import { getEventHandler } from "./eventMapper";
import { Ranking } from "../../domain/entities/Ranking";

export const parseLogData = (logData: string) => {
  const matches: Match[] = [];
  const lines = logData.split("\n");

  let currentMatch: Match | null = null;
  const ranking = new Ranking();

  lines.forEach((line) => {
    const handler = getEventHandler(line);
    if (handler) {
      currentMatch = handler.handle(line, currentMatch, matches, ranking);
    }
  });

  return {
    matches: matches,
    ranking: ranking,
  };
};

// S - Single Reponsability Principle
// O - Open Closed Principle
// L - Liskov Substitution Principle
// I - Interface Segregation Principle
// D - Dependecy Inversion Principle
