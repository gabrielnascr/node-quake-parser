import { IGetMatchesUseCase } from "../../../application/use-cases/Match/GetMatches";
import { HttpServer } from "../../adapters/HttpServer";

export class MatchesController {
  constructor(
    readonly httpServer: HttpServer,
    readonly getMatchesUseCase: IGetMatchesUseCase
  ) {
    this.httpServer.register(
      "get",
      "/matches",
      async (params: any, body: any) => {
        const output = await this.getMatchesUseCase.execute();
        return output;
      }
    );
  }
}
