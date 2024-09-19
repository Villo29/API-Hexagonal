"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const storeController_1 = require("../controllers/storeController");
const storeService_1 = require("../../application/services/storeService");
const mongoStoreRepository_1 = require("../../infrastructure/repositories/mongoStoreRepository");
const storeRepository = new mongoStoreRepository_1.MongoStoreRepository();
const storeService = new storeService_1.StoreService(storeRepository);
const storeController = new storeController_1.StoreController(storeService);
const router = (0, express_1.Router)();
const apiVersion = '/api/v1'; // versión de la API
router.post(`${apiVersion}/stores`, (req, res) => storeController.createStore(req, res));
router.get(`${apiVersion}/stores/:id`, (req, res) => storeController.getStoreById(req, res));
router.get(`${apiVersion}/stores`, (req, res) => storeController.getAllStores(req, res));
router.put(`${apiVersion}/stores/:id`, (req, res) => storeController.updateStore(req, res));
router.delete(`${apiVersion}/stores/:id`, (req, res) => storeController.deleteStore(req, res));
exports.default = router;
