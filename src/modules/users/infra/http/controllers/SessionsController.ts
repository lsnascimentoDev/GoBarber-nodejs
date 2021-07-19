// index, show, create, update, delete
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import AuthenticationUserService from '@modules/users/services/AuthenticateUserService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticationUser = container.resolve(AuthenticationUserService);

    const { user, token } = await authenticationUser.execute({
      email,
      password,
    });

    return response.json({ user: classToClass(user), token });
  }
}
