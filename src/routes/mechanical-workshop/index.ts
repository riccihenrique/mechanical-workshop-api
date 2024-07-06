import express from 'express';
import { ControllerMiddleware } from '../../shared/middlewares/ControllerMiddleware';
import { makeCreateMechanicalWorkshopController, makeDeleteMechanicalWorkshopController, makeListMechanicalWorkshopController, makeUpdateMechanicalWorkshopController } from '../../app/factories/controllers/mechanical-workshop';

const mechanicalWorkshopRouter = express.Router();

mechanicalWorkshopRouter.post('/', ControllerMiddleware(makeCreateMechanicalWorkshopController()));
mechanicalWorkshopRouter.get('/', ControllerMiddleware(makeListMechanicalWorkshopController()));
mechanicalWorkshopRouter.put('/:id', ControllerMiddleware(makeUpdateMechanicalWorkshopController()));
mechanicalWorkshopRouter.delete('/:id', ControllerMiddleware(makeDeleteMechanicalWorkshopController()));
mechanicalWorkshopRouter.get('/geographical-search', ControllerMiddleware(makeCreateMechanicalWorkshopController()));

export { mechanicalWorkshopRouter };

