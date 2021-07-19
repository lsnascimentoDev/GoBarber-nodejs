import User from '@modules/users/infra/typeorm/entities/User';
import ICreateUserDTO from "../dtos/ICreateUsersDTO";
import IFindEmail from '@modules/users/dtos/IFindEmailDTO';
import ResetPasswordService from '../services/ResetPasswordService';
import IFindAllProvidersDTO from '../dtos/IFindAllProvidersDTO'

export default interface IUsersRepository {
  findAllProviders(data: IFindAllProvidersDTO): Promise<User[]>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: IFindEmail): Promise<User | undefined>;
  create(date: ICreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
}
