import { container } from 'tsyringe'

import IHashProvider from './HashProvider/models/IHashProvider';
import BCryptHashProvider from './HashProvider/implementations/BCryptHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);

// toda vez que ele tiver uma importação, uma injeção com o nome 'hashProvider', eu vou retornar uma instancia da classe BcryptHashProvider.
