import { Router } from 'express';
import { UserController } from '../controllers/userController';
import { UserService } from '../../application/services/userService';
import { MongoUserRepository } from '../../infrastructure/repositories/mongoUserRepository';

const userRepository = new MongoUserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);
const router = Router();

const apiVersion = '/api/v1'; // Ruta base con versión de la API

router.post(`${apiVersion}/usuarios`, (req, res) => userController.createUser(req, res));
router.get(`${apiVersion}/usuarios/:id`, (req, res) => userController.getUserById(req, res));
router.get(`${apiVersion}/usuarios`, (req, res) => userController.getAllUsers(req, res));
router.put(`${apiVersion}/usuarios/:id`, (req, res) => userController.updateUser(req, res));
router.delete(`${apiVersion}/usuarios/:id`, (req, res) => userController.deleteUser(req, res));

export default router;