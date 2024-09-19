import { Store } from '../entities/store';

export interface StoreRepository {
    findById(id: string): Promise<Store | null>;
    findAll(): Promise<Store[]>;
    create(store: Store): Promise<Store>;
    update(id: string, store: Partial<Store>): Promise<Store | null>;
    delete(id: string): Promise<boolean>;
}