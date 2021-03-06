import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository'
import IHashProvider from '../providers/HashProvider/models/IHashProvider'

import User from '../infra/typeorm/entities/User';

interface Request {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {

  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) { }

  public async execute({ name, email, password }: Request): Promise<User> {
    const checkUserExists = await this.userRepository.findByEmail({ email });

    if (checkUserExists) {
      //console.log('esse aqui' + checkUserExists)
      throw new AppError('Email address already used');
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = await this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });


    return user;
  }
}
export default CreateUserService;
