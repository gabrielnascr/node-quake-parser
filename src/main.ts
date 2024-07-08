import { GetMatchesUseCase } from "./application/use-cases/Match/implementations/GetMaches";
import { LogRepository } from "./infra/repositories/LogRepository";
import { ExpressAdapter } from "./presentation/adapters/ExpressAdapter";
import { MatchesController } from "./presentation/http/controllers/MatchesControllers";

const logRepository = new LogRepository();
const getMatchesUseCases = new GetMatchesUseCase(logRepository);

const httpServer = new ExpressAdapter();

new MatchesController(httpServer, getMatchesUseCases);

httpServer.listen(3000);
