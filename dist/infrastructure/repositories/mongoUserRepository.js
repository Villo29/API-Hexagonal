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
exports.MongoUserRepository = void 0;
const user_1 = require("../../domain/entities/user");
const userModel_1 = __importDefault(require("../database/userModel"));
class MongoUserRepository {
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield userModel_1.default.findById(id).exec();
            return user ? new user_1.User(user.id, user.name, user.email, user.password) : null;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield userModel_1.default.find().exec();
            return users.map(user => new user_1.User(user.id, user.name, user.email, user.password));
        });
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = new userModel_1.default(user);
            yield newUser.save();
            return new user_1.User(newUser.id, newUser.name, newUser.email, newUser.password);
        });
    }
    update(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedUser = yield userModel_1.default.findByIdAndUpdate(id, user, { new: true }).exec();
            return updatedUser ? new user_1.User(updatedUser.id, updatedUser.name, updatedUser.email, updatedUser.password) : null;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield userModel_1.default.findByIdAndDelete(id).exec();
            return result !== null;
        });
    }
    findStoresByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield userModel_1.default.findById(userId).populate('stores').exec();
            return user ? user.stores : [];
        });
    }
}
exports.MongoUserRepository = MongoUserRepository;
