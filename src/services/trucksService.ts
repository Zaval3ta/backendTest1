import { ITrucksRepository, ITrucksService, ITrucks } from "types/trucksTypes";
import { Query } from "types/repositoryTypes";

export class TrucksService implements ITrucksService {
  private TrucksRepository: ITrucksRepository;

  constructor(TrucksRepository: ITrucksRepository) {
    this.TrucksRepository = TrucksRepository;
  }

  async createTrucks(trucks: ITrucks): Promise<ITrucks> {
    return this.TrucksRepository.create(trucks);
  }

  async findTrucks(query?: Query): Promise<ITrucks[]> {
    return this.TrucksRepository.find(query);
  }

  async findTrucksById(id: string): Promise<ITrucks | null> {
    return this.TrucksRepository.findById(id);
  }

  async updateTrucks(id: string, trucks: Partial<ITrucks>): Promise<ITrucks | null> {
    return this.TrucksRepository.update(id, trucks);
  }

  async deleteTrucks(id: string): Promise<boolean> {
    return this.TrucksRepository.delete(id);
  }
}