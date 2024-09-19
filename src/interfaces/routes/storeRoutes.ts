import { Router } from 'express';
import { StoreController } from '../controllers/storeController';
import { StoreService } from '../../application/services/storeService';
import { MongoStoreRepository } from '../../infrastructure/repositories/mongoStoreRepository';

const storeRepository = new MongoStoreRepository();
const storeService = new StoreService(storeRepository);
const storeController = new StoreController(storeService);
const router = Router();

const apiVersion = '/api/v1'; // versión de la API

router.post(`${apiVersion}/stores`, (req, res) => storeController.createStore(req, res));
router.get(`${apiVersion}/stores/:id`, (req, res) => storeController.getStoreById(req, res));
router.get(`${apiVersion}/stores`, (req, res) => storeController.getAllStores(req, res));
router.put(`${apiVersion}/stores/:id`, (req, res) => storeController.updateStore(req, res));
router.delete(`${apiVersion}/stores/:id`, (req, res) => storeController.deleteStore(req, res));

export default router;