export interface IGetReportUseCase {
  execute: () => Promise<Output>;
}

type Output = {
  matches: {
    total_kills: number;
    players: Array<string>;
    kills: { [key: string]: number };
  }[];
  ranking: {
    total_kills: number;
    total_deaths: number;
    ranking_position: number;
    player: string;
  }[];
};
