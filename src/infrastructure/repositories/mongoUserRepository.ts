import { UserRepository } from '../../domain/repositories/userRepository';
import { User } from '../../domain/entities/user';
import { Store } from '../../domain/entities/store';
import UserModel from '../database/userModel';

export class MongoUserRepository implements UserRepository {
    async findById(id: string): Promise<User | null> {
        const user = await UserModel.findById(id).exec();
        return user ? new User(user.id, user.name, user.email, user.password) : null;
    }

    async findAll(): Promise<User[]> {
        const users = await UserModel.find().exec();
        return users.map(user => new User(user.id, user.name, user.email, user.password));
    }

    async create(user: User): Promise<User> {
        const newUser = new UserModel(user);
        await newUser.save();
        return new User(newUser.id, newUser.name, newUser.email, newUser.password);
    }

    async update(id: string, user: Partial<User>): Promise<User | null> {
      const updatedUser = await UserModel.findByIdAndUpdate(id, user, { new: true }).exec();
      return updatedUser ? new User(updatedUser.id, updatedUser.name, updatedUser.email, updatedUser.password) : null;
    }

    async delete(id: string): Promise<boolean> {
        const result = await UserModel.findByIdAndDelete(id).exec();
        return result !== null;
    }

    async findStoresByUserId(userId: string): Promise<Store[]> {
        const user = await UserModel.findById(userId).populate('stores').exec();
        return user ? user.stores : [];
    }
}