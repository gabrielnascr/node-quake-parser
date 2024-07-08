import { HttpServer } from "./HttpServer";
import express, { Request, Response } from "express";

export class ExpressAdapter implements HttpServer {
  app: any;

  constructor() {
    this.app = express();
    this.app.use(express.json());
  }

  register(method: any, url: string, callback: Function): void {
    this.app[method](
      url.replace(/\{|\}/g, ""),
      async (req: Request, res: Response) => {
        try {
          const output = await callback(req.params, req.body);
          return res.send(output);
        } catch (e: any) {
          res.status(422).json({
            message: e.message,
          });
        }
      }
    );
  }

  listen(port: number): void {
    this.app.listen(port);
  }
}
