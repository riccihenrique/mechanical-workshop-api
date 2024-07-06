import { NextFunction, Request, Response } from "express";
import { IBaseController } from "../interfaces/ControllerBase";

export const ControllerMiddleware = (controller: IBaseController) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body, query, params, headers } = req;
      const {
        statusCode,
        data,
      } = await controller.execute({ body, query, params, headers });

      res.status(statusCode).json(data);
    } catch (error) {
     next(error); 
    }
  }
}