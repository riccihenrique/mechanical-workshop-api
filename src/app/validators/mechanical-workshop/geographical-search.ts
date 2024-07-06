import { object, string, number, ValidationError } from 'yup';
import { IValidatorBase } from '../../../shared/interfaces/validator-base';
import { Request, Response, NextFunction } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';

class makeGeographicalSearchMechanicalWorkshopValidator implements IValidatorBase {
  validate(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): void {
    const schema = object({
      distance: number().required(),
      latitude: number().required(),
      longitude: number().required(),
    });

    try {
      schema.validateSync(req.body, { abortEarly: false });
      next();
    } catch (error: any) {
      res.status(400).json((error as ValidationError).errors);
    }
  }
}

export const GeographicalSearchMechanicalWorkshopValidator = new makeGeographicalSearchMechanicalWorkshopValidator();