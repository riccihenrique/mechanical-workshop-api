import { NextFunction, Request, Response } from "express";

export interface IValidatorBase {
  validate(req: Request, res: Response, next: NextFunction): void;
}