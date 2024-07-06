import errToJSON from "error-to-json";
import express, { NextFunction, Request, Response } from "express";
import { Router } from "./routes";

class ExpressApp {
  app = express();
  constructor() {
    this.initExpressConfigs();
    this.initRoutes();
    this.initErrorMiddleware();
  }

  initRoutes() {
    this.app.use(Router);
  }

  initExpressConfigs() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  initErrorMiddleware() {
    const errorMiddleware = (err: Error, req: Request, res: Response, _next: NextFunction): void => {
      console.error({
        path: req.path,
        method: req.method,
        data: {
          body: req.body,
          query: req.query,
          params: req.params,
        },
        error: errToJSON(err), 
      });
  
      res.status(500).send({ message: 'Internal server error' });
    }

    this.app.use(errorMiddleware);
  }
}

export const expressAppSingleton = new ExpressApp();