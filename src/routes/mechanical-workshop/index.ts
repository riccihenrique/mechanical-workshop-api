import express from 'express';
import { ControllerMiddleware } from '../../shared/middlewares/controller-middleware';
import { makeCreateMechanicalWorkshopController, makeDeleteMechanicalWorkshopController, makeListMechanicalWorkshopController, makeUpdateMechanicalWorkshopController } from '../../app/factories/controllers/mechanical-workshop';
import { CreateMechanicalWorkshopValidator, GeographicalSearchMechanicalWorkshopValidator, UpdateMechanicalWorkshopValidator } from '../../app/validators/mechanical-workshop';

const mechanicalWorkshopRouter = express.Router();

mechanicalWorkshopRouter.post('/', CreateMechanicalWorkshopValidator.validate, ControllerMiddleware(makeCreateMechanicalWorkshopController()));
mechanicalWorkshopRouter.get('/', ControllerMiddleware(makeListMechanicalWorkshopController()));
mechanicalWorkshopRouter.put('/:id',  UpdateMechanicalWorkshopValidator.validate, ControllerMiddleware(makeUpdateMechanicalWorkshopController()));
mechanicalWorkshopRouter.delete('/:id', ControllerMiddleware(makeDeleteMechanicalWorkshopController()));
mechanicalWorkshopRouter.get('/geographical-search', GeographicalSearchMechanicalWorkshopValidator.validate, ControllerMiddleware(makeCreateMechanicalWorkshopController()));

export { mechanicalWorkshopRouter };

