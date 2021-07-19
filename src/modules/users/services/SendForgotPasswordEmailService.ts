import { injectable, inject } from 'tsyringe';
import path from 'path'

import AppError from '@shared/errors/AppError';
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider'
import IUsersRepository from '../repositories/IUsersRepository'
import IUserTokensRepositoty from '../repositories/IUserTokensRepository'

interface Request {
  email: string;
}

@injectable()
class SendForgotPasswordEmailService {

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('MailProvider')
    private mailProvider: IMailProvider,

    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokensRepositoty,
  ) { }

  public async execute({ email }: Request): Promise<void> {
    const user = await this.usersRepository.findByEmail({ email });

    if (!user) {
      throw new AppError('User does not exists')
    }

    const { token } = await this.userTokensRepository.generate(user.id);

    const forgotPasswordTemplate = path.resolve(__dirname, '..', 'templates', 'forgot_password.hbs')

    await this.mailProvider.sendMail({
      to: {
        name: user.name,
        email: user.email,
      },
      from: {
        name: 'Lucas',
        email: 'lucas.dev@gmail.com',
      },
      subject: '[GoBarber] Recuperação de senha',
      templateData: {
        file: forgotPasswordTemplate,
        variables: {
          name: user.name,
          link: `${process.env.APP_WEB_URL}/reset_password?token=${token}`,
        },
      },
    });

  }
}
export default SendForgotPasswordEmailService;
