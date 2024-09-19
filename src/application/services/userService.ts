import { UserRepository } from "../../domain/repositories/userRepository";
import { User } from "../../domain/entities/user";

export class UserService {
  constructor(private userRepository: UserRepository) {}

  async createUser(user: User): Promise<User> {
    return this.userRepository.create(user);
  }

  async getUserById(id: string): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.findAll();
	}

  async updateUser(id: string, user: Partial<User>): Promise<User | null> {
    return this.userRepository.update(id, user);
  }

  async deleteUser(id: string): Promise<boolean> {
    return this.userRepository.delete(id);
  }
}
