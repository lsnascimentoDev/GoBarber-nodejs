import { injectable, inject } from 'tsyringe'
import { isAfter, addHours } from 'date-fns'

import AppError from '@shared/errors/AppError'
import IUsersRepository from '../repositories/IUsersRepository'
import IUserTokensReposity from '../repositories/IUserTokensRepository'
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

interface Request {
  password: string;
  token: string;
}

@injectable()
class ResetPasswordService {

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokensReposity,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) { }

  public async execute({ password, token, }: Request): Promise<void> {
    const userToken = await this.userTokensRepository.findByToken(token);

    if (!userToken) {
      throw new AppError('User token does not exists')
    }

    const user = await this.usersRepository.findById(userToken.user_id);

    if (!user) {
      throw new AppError('User does not exists');
    }

    const tokenCreatedAt = userToken.created_at;
    const compareDate = addHours(tokenCreatedAt, 2); //adicionando 2 horas

    if (isAfter(Date.now(), compareDate)) {
      throw new AppError('Token expired');
    }

    user.password = await this.hashProvider.generateHash(password);

    await this.usersRepository.save(user);
  }
}
export default ResetPasswordService;
