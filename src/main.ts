import { GetReportUseCase } from "./application/use-cases/Match/implementations/GetReport";
import { LogRepository } from "./infra/repositories/LogRepository";
import { ExpressAdapter } from "./presentation/adapters/ExpressAdapter";
import { MatchesController } from "./presentation/http/controllers/MatchesControllers";

const logRepository = new LogRepository();

const getReportUseCase = new GetReportUseCase(logRepository);

const httpServer = new ExpressAdapter();

new MatchesController(httpServer, getReportUseCase);

httpServer.listen(3000);
