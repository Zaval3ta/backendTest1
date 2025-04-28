import { TrucksModel } from "@models/trucks";
import { ITrucksRepository, ITrucks } from "types/trucksTypes";
import { Query } from "types/repositoryTypes";

export class TrucksRepository implements ITrucksRepository {
  async create(data: ITrucks ): Promise<ITrucks > {
    const newPosts = new TrucksModel(data);
    return await newPosts.save();
  }

  async find(query?: Query): Promise<ITrucks[]> {
    return await TrucksModel.find(query || {}).exec();
  }

  async findById(id: string): Promise<ITrucks  | null> {
    return await TrucksModel.findById(id).exec();
  }

  async update(id: string, data: Partial<ITrucks >): Promise<ITrucks  | null> {
    return await TrucksModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<boolean> {
    const deleted = await TrucksModel.findByIdAndDelete(id).exec();
    return deleted !== null;
  }
}