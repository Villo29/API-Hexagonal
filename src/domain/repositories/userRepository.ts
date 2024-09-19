import { User } from '../entities/user';
import { Store } from '../entities/store';

export interface UserRepository {
	findById(id: string): Promise<User | null>;
	findAll(): Promise<User[]>; // Nuevo método
	create(user: User): Promise<User>;
	update(id: string, user: Partial<User>): Promise<User | null>;
	delete(id: string): Promise<boolean>;
	findStoresByUserId(userId: string): Promise<Store[]>; // Nuevo método
}