import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticaded from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '@modules/appointments/infra/http/controllers/AppointmentsController'
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController'

const appointmentsRouter = Router();
const apointmentsController = new AppointmentsController();
const providerAppointmentsController = new ProviderAppointmentsController();


appointmentsRouter.use(ensureAuthenticaded); // Middlewares de autenticação do token

appointmentsRouter.post('/',
  celebrate({
    [Segments.BODY]: {
      provider_id: Joi.string().uuid().required(),
      date: Joi.date(),
    },
  }),
  apointmentsController.create,
);
appointmentsRouter.get('/me', providerAppointmentsController.index);

export default appointmentsRouter;
