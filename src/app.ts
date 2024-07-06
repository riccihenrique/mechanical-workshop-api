import errToJSON from "error-to-json";
import express, { NextFunction, Request, Response } from "express";
import { Router } from "./routes";
import { databaseSingleton } from "./database";

class ExpressApp {
  app = express();
  constructor() {
    this.initExpressConfigs();
    this.initRoutes();
    this.initErrorMiddleware();

    this.initDatabase();
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

  initDatabase() {
    databaseSingleton.init();
  }
}

export const expressAppSingleton = new ExpressApp();