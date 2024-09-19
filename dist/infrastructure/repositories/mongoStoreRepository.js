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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoStoreRepository = void 0;
const storeModel_1 = __importDefault(require("../database/storeModel"));
const store_1 = require("../../domain/entities/store");
class MongoStoreRepository {
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const store = yield storeModel_1.default.findById(id).exec();
            return store ? new store_1.Store(store.id, store.name, store.address) : null;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const stores = yield storeModel_1.default.find().exec();
            return stores.map(store => new store_1.Store(store.id, store.name, store.address));
        });
    }
    create(store) {
        return __awaiter(this, void 0, void 0, function* () {
            const newStore = new storeModel_1.default(store);
            yield newStore.save();
            return new store_1.Store(newStore.id, newStore.name, newStore.address);
        });
    }
    update(id, store) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedStore = yield storeModel_1.default.findByIdAndUpdate(id, store, { new: true }).exec();
            return updatedStore ? new store_1.Store(updatedStore.id, updatedStore.name, updatedStore.address) : null;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield storeModel_1.default.findByIdAndDelete(id).exec();
            return result !== null;
        });
    }
}
exports.MongoStoreRepository = MongoStoreRepository;
