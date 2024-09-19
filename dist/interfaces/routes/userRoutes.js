"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const userService_1 = require("../../application/services/userService");
const mongoUserRepository_1 = require("../../infrastructure/repositories/mongoUserRepository");
const userRepository = new mongoUserRepository_1.MongoUserRepository();
const userService = new userService_1.UserService(userRepository);
const userController = new userController_1.UserController(userService);
const router = (0, express_1.Router)();
const apiVersion = '/api/v1'; // Ruta base con versión de la API
router.post(`${apiVersion}/usuarios`, (req, res) => userController.createUser(req, res));
router.get(`${apiVersion}/usuarios/:id`, (req, res) => userController.getUserById(req, res));
router.get(`${apiVersion}/usuarios`, (req, res) => userController.getAllUsers(req, res));
router.put(`${apiVersion}/usuarios/:id`, (req, res) => userController.updateUser(req, res));
router.delete(`${apiVersion}/usuarios/:id`, (req, res) => userController.deleteUser(req, res));
exports.default = router;
