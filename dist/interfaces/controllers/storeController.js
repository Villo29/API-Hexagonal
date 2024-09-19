"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreController = void 0;
class StoreController {
    constructor(storeService) {
        this.storeService = storeService;
    }
    getStoreById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const store = yield this.storeService.getStoreById(req.params.id);
                if (!store) {
                    res.status(404).send('Tienda no encontrada');
                    return;
                }
                res.json({ message: 'Tienda encontrada correctamente', store });
            }
            catch (error) {
                res.status(500).json({ message: 'Error al recuperar la tienda', error: error.message });
            }
        });
    }
    getAllStores(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const stores = yield this.storeService.getAllStores();
                res.json({ message: 'Tiendas recuperadas correctamente', stores });
            }
            catch (error) {
                res.status(500).json({ message: 'Error al recuperar las tiendas', error: error.message });
            }
        });
    }
    createStore(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const store = yield this.storeService.createStore(req.body);
                res.status(201).json({ message: 'Tienda creada correctamente', store });
            }
            catch (error) {
                res.status(500).json({ message: 'Error al crear la tienda', error: error.message });
            }
        });
    }
    updateStore(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const store = yield this.storeService.updateStore(req.params.id, req.body);
                if (!store) {
                    res.status(404).send('Tienda no encontrada');
                    return;
                }
                res.json({ message: 'Tienda actualizada correctamente', store });
            }
            catch (error) {
                res.status(500).json({ message: 'Error al actualizar la tienda', error: error.message });
            }
        });
    }
    deleteStore(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const success = yield this.storeService.deleteStore(req.params.id);
                if (!success) {
                    res.status(404).send('Tienda no encontrada');
                    return;
                }
                res.json({ message: 'Tienda eliminada correctamente' });
            }
            catch (error) {
                res.status(500).json({ message: 'Error al eliminar la tienda', error: error.message });
            }
        });
    }
}
exports.StoreController = StoreController;
