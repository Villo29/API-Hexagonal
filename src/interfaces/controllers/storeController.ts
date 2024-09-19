import { Request, Response } from 'express';
import { StoreService } from '../../application/services/storeService';

export class StoreController {
	constructor(private storeService: StoreService) {}

	async getStoreById(req: Request, res: Response): Promise<void> {
		try {
			const store = await this.storeService.getStoreById(req.params.id);
			if (!store) {
				res.status(404).send('Tienda no encontrada');
				return;
			}
			res.json({ message: 'Tienda encontrada correctamente', store });
		} catch (error: any) {
			res.status(500).json({ message: 'Error al recuperar la tienda', error: error.message });
		}
	}

	async getAllStores(req: Request, res: Response): Promise<void> {
		try {
			const stores = await this.storeService.getAllStores();
			res.json({ message: 'Tiendas recuperadas correctamente', stores });
		} catch (error: any) {
			res.status(500).json({ message: 'Error al recuperar las tiendas', error: error.message });
		}
	}

	async createStore(req: Request, res: Response): Promise<void> {
		try {
			const store = await this.storeService.createStore(req.body);
			res.status(201).json({ message: 'Tienda creada correctamente', store });
		} catch (error: any) {
			res.status(500).json({ message: 'Error al crear la tienda', error: error.message });
		}
	}

	async updateStore(req: Request, res: Response): Promise<void> {
		try {
			const store = await this.storeService.updateStore(req.params.id, req.body);
			if (!store) {
				res.status(404).send('Tienda no encontrada');
				return;
			}
			res.json({ message: 'Tienda actualizada correctamente', store });
		} catch (error: any) {
			res.status(500).json({ message: 'Error al actualizar la tienda', error: error.message });
		}
	}

	async deleteStore(req: Request, res: Response): Promise<void> {
		try {
			const success = await this.storeService.deleteStore(req.params.id);
			if (!success) {
				res.status(404).send('Tienda no encontrada');
				return;
			}
			res.json({ message: 'Tienda eliminada correctamente' });
		} catch (error: any) {
			res.status(500).json({ message: 'Error al eliminar la tienda', error: error.message });
		}
	}
}