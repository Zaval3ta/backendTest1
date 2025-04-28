import { Query, IRepository } from "./repositoryTypes";

export interface ITrucks extends Document {
  year: string;
  color: string;
  plates: string;
}

export interface ITrucksRepository extends IRepository<ITrucks> {}

export interface ITrucksService {
  createTrucks(Trucks: ITrucks): Promise<ITrucks>;
  findTrucks(query?: Query): Promise<ITrucks[]>;
  findTrucksById(id: string): Promise<ITrucks | null>;
  updateTrucks(id: string, Trucks: Partial<ITrucks>): Promise<ITrucks | null>;
  deleteTrucks(id: string): Promise<boolean>;
}