import { Document } from "mongoose";
import { IRepository, Query } from "./repositoryTypes";

export interface IUser extends Document {
  email: string;
  password: string;
  username?: string;
  comparePassword(password: string): Promise<boolean>;
}
//Busca la informacion
export interface IUserRepository extends IRepository<IUser>{
  findOne(query: Query): Promise<IUser | null>
}
//Logica de servicio/negocio
export interface IUserService {
  createUser(user: IUser): Promise<IUser>;
  findUsers(query?: Query): Promise<IUser[]>;
  findUsersById(id: string): Promise<IUser | null>;
  findUsersByEmail(email: string): Promise<IUser | null>;
  updateUser (id: string, user: Partial<IUser>): Promise<IUser | null>;
  deleteUser(id: string): Promise<boolean>;
}