import { IGetReportUseCase } from "../../../application/use-cases/Match/GetReport";
import { HttpServer } from "../../adapters/HttpServer";

export class MatchesController {
  constructor(
    readonly httpServer: HttpServer,
    readonly getReportUseCase: IGetReportUseCase
  ) {
    this.httpServer.register(
      "get",
      "/matches/report",
      async (params: any, body: any) => {
        const output = await this.getReportUseCase.execute();
        return output;
      }
    );
  }
}
