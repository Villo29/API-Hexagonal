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
exports.UserController = void 0;
const user_1 = require("../../domain/entities/user");
class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, name, email, password } = req.body;
                const newUser = new user_1.User(id, name, email, password);
                const createdUser = yield this.userService.createUser(newUser);
                res.status(201).json({ message: 'Usuario creado correctamente', user: createdUser }); // 201 Created
            }
            catch (error) {
                res.status(500).json({ message: 'Error al crear el usuario', error: error.message }); // 500 Internal Server Error
            }
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userService.getUserById(req.params.id);
                if (!user) {
                    res.status(404).send('Usuario no encontrado');
                    return;
                }
                res.json({ message: 'Usuario encontrado correctamente', user });
            }
            catch (error) {
                res.status(500).json({ message: 'Error al recuperar el usuario', error: error.message }); // 500 Internal Server Error
            }
        });
    }
    getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.userService.getAllUsers();
                res.json({ message: 'Lista de usuarios recuperada correctamente', users });
            }
            catch (error) {
                res.status(500).json({ message: 'Error al recuperar la lista de usuarios', error: error.message }); // 500 Internal Server Error
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedUser = yield this.userService.updateUser(req.params.id, req.body);
                if (!updatedUser) {
                    res.status(404).send('Usuario no encontrado');
                    return;
                }
                res.json({ message: 'Usuario actualizado correctamente', user: updatedUser });
            }
            catch (error) {
                res.status(500).json({ message: 'Error al actualizar el usuario', error: error.message }); // 500 Internal Server Error
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const success = yield this.userService.deleteUser(req.params.id);
                if (!success) {
                    res.status(404).send('Usuario no encontrado');
                    return;
                }
                res.json({ message: 'Usuario eliminado correctamente' });
            }
            catch (error) {
                res.status(500).json({ message: 'Error al eliminar el usuario', error: error.message }); // 500 Internal Server Error
            }
        });
    }
}
exports.UserController = UserController;
