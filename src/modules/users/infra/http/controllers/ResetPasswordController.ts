// index, show, create, update, delete
import { Request, Response } from 'express'
import { container } from 'tsyringe'

import ResetPasswordEmailService from '@modules/users/services/ResetPasswordService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { password, token } = request.body;

    const resetPassword = container.resolve(ResetPasswordEmailService);

    await resetPassword.execute({
      token,
      password
    });

    return response.status(204).json();
  }
}
