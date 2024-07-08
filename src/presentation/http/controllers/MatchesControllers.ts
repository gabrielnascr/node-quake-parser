import { HttpServer } from "../../adapters/HttpServer";

export class MatchesController {
  constructor(readonly httpServer: HttpServer) {
    this.httpServer.register(
      "get",
      "/matches",
      async (params: any, body: any) => {
        return "matches";
      }
    );
  }
}
