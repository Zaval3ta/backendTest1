import { userModel } from "@models/users";
import { Query } from "types/repositoryTypes";
import { IUserRepository, IUser } from "types/userTypes";

export class UserRepository implements IUserRepository{
  async create(data: IUser): Promise<IUser>{
    const newUser = new userModel(data)
    return await newUser.save();
  }

  async find(query?: Query): Promise<IUser[]> {
    return await userModel.find(query || {}).exec();
  }

  async findById(id: string): Promise<IUser | null> {
    return await userModel.findById(id).exec();
  }

  async findOne(query: Query): Promise<IUser | null> {
    return await userModel.findOne(query)
  }

  async update(id: string, data: Partial<IUser>): Promise<IUser | null> {
    return await userModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<boolean> {
    const deleted = await userModel.findByIdAndDelete(id).exec();
    return deleted !== null;
  }
}