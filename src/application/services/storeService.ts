import { StoreRepository } from '../../domain/repositories/storeRepository';
import { Store } from '../../domain/entities/store';

export class StoreService {
	constructor(private storeRepository: StoreRepository) {}

	async getStoreById(id: string): Promise<Store | null> {
		return this.storeRepository.findById(id);
	}

	async getAllStores(): Promise<Store[]> {
		return this.storeRepository.findAll();
	}

	async createStore(store: Store): Promise<Store> {
		return this.storeRepository.create(store);
	}

	async updateStore(id: string, store: Partial<Store>): Promise<Store | null> {
		return this.storeRepository.update(id, store);
	}

	async deleteStore(id: string): Promise<boolean> {
		return this.storeRepository.delete(id);
	}
}