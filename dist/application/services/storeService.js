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
exports.StoreService = void 0;
class StoreService {
    constructor(storeRepository) {
        this.storeRepository = storeRepository;
    }
    getStoreById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.storeRepository.findById(id);
        });
    }
    getAllStores() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.storeRepository.findAll();
        });
    }
    createStore(store) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.storeRepository.create(store);
        });
    }
    updateStore(id, store) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.storeRepository.update(id, store);
        });
    }
    deleteStore(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.storeRepository.delete(id);
        });
    }
}
exports.StoreService = StoreService;
