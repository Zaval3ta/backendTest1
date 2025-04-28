import { Query } from "types/repositoryTypes"
import { IUserRepository, IUserService, IUser } from "types/userTypes";
export class UserService implements IUserService {
    private userRepository: IUserRepository;

constructor(userRepository: IUserRepository){
    this.userRepository = userRepository;
}

async createUser(user: IUser): Promise<IUser> {
    return this.userRepository.create(user);
}

async findUsers(query?: Query): Promise<IUser[]> {
    return this.userRepository.find(query);
}

async findUsersById(id: string): Promise<IUser | null> {
    return this.userRepository.findById(id);
}

async findUsersByEmail(email: string): Promise<IUser | null> {
    return this.userRepository.findOne({email})
}

async updateUser(id: string, user: Partial<IUser>): Promise<IUser | null> {
    return this.userRepository.update(id, user);
}

async deleteUser(id: string): Promise<boolean> {
    return this.userRepository.delete(id);
}
}