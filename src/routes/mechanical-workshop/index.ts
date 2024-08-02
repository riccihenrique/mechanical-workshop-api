import express from 'express';
import { ControllerMiddleware } from '../../shared/middlewares/controller-middleware';
import { makeCreateMechanicalWorkshopController, makeDeleteMechanicalWorkshopController, makeGeographicalSearchMechanicalWorkshopController, makeListMechanicalWorkshopController, makeUpdateMechanicalWorkshopController } from '../../app/factories/controllers/mechanical-workshop';
import { CreateMechanicalWorkshopValidator, GeographicalSearchMechanicalWorkshopValidator, UpdateMechanicalWorkshopValidator } from '../../app/validators/mechanical-workshop';
import { makeFindByIdMechanicalWorkshopController } from '../../app/factories/controllers/mechanical-workshop/find-by-id';

const mechanicalWorkshopRouter = express.Router();

mechanicalWorkshopRouter.post('/', CreateMechanicalWorkshopValidator.validate, ControllerMiddleware(makeCreateMechanicalWorkshopController()));
mechanicalWorkshopRouter.put('/:id',  UpdateMechanicalWorkshopValidator.validate, ControllerMiddleware(makeUpdateMechanicalWorkshopController()));
mechanicalWorkshopRouter.delete('/:id', ControllerMiddleware(makeDeleteMechanicalWorkshopController()));


mechanicalWorkshopRouter.get('/geographical-search', GeographicalSearchMechanicalWorkshopValidator.validate, ControllerMiddleware(makeGeographicalSearchMechanicalWorkshopController()));
mechanicalWorkshopRouter.get('/:id', ControllerMiddleware(makeFindByIdMechanicalWorkshopController()));
mechanicalWorkshopRouter.get('/', ControllerMiddleware(makeListMechanicalWorkshopController()));

export { mechanicalWorkshopRouter };

