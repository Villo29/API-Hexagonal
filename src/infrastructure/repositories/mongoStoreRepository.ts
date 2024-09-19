import { StoreRepository } from '../../domain/repositories/storeRepository';
import StoreModel, { IStore } from '../database/storeModel';
import { Store } from '../../domain/entities/store';

export class MongoStoreRepository implements StoreRepository {
	async findById(id: string): Promise<Store | null> {
		const store = await StoreModel.findById(id).exec();
		return store ? new Store(store.id, store.name, store.address, store.location) : null;
	}

	async findAll(): Promise<Store[]> {
		const stores = await StoreModel.find().exec();
		return stores.map(store => new Store(store.id, store.name, store.address, store.location));
	}

	async create(store: Store): Promise<Store> {
		const newStore = new StoreModel(store);
		await newStore.save();
		return new Store(newStore.id, newStore.name, newStore.address, store.location);
	}

	async update(id: string, store: Partial<Store>): Promise<Store | null> {
		const updatedStore = await StoreModel.findByIdAndUpdate(id, store, { new: true }).exec();
		return updatedStore ? new Store(updatedStore.id, updatedStore.name, updatedStore.address, updatedStore.location) : null;
	}

	async delete(id: string): Promise<boolean> {
		const result = await StoreModel.findByIdAndDelete(id).exec();
		return result !== null;
	}
}