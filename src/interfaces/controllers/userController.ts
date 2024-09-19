import { Request, Response } from 'express';
import { UserService } from '../../application/services/userService';
import { User } from '../../domain/entities/user';

export class UserController {
    constructor(private userService: UserService) {}

    async createUser(req: Request, res: Response): Promise<void> {
        try {
            const { id, name, email, password } = req.body;
            const newUser = new User(id, name, email, password);
            const createdUser = await this.userService.createUser(newUser);
            res.status(201).json({ message: 'Usuario creado correctamente', user: createdUser }); // 201 Created
        } catch (error: any) {
            res.status(500).json({ message: 'Error al crear el usuario', error: error.message }); // 500 Internal Server Error
        }
    }

    async getUserById(req: Request, res: Response): Promise<void> {
        try {
            const user = await this.userService.getUserById(req.params.id);
            if (!user) {
                res.status(404).send('Usuario no encontrado');
                return;
            }
            res.json({ message: 'Usuario encontrado correctamente', user });
        } catch (error: any) {
            res.status(500).json({ message: 'Error al recuperar el usuario', error: error.message }); // 500 Internal Server Error
        }
    }

    async getAllUsers(req: Request, res: Response): Promise<void> {
        try {
            const users = await this.userService.getAllUsers();
            res.json({ message: 'Lista de usuarios recuperada correctamente', users });
        } catch (error: any) {
            res.status(500).json({ message: 'Error al recuperar la lista de usuarios', error: error.message }); // 500 Internal Server Error
        }
    }

    async updateUser(req: Request, res: Response): Promise<void> {
        try {
            const updatedUser = await this.userService.updateUser(req.params.id, req.body);
            if (!updatedUser) {
                res.status(404).send('Usuario no encontrado');
                return;
            }
            res.json({ message: 'Usuario actualizado correctamente', user: updatedUser });
    	} catch (error: any) {
            res.status(500).json({ message: 'Error al actualizar el usuario', error: error.message }); // 500 Internal Server Error
        }
    }

    async deleteUser(req: Request, res: Response): Promise<void> {
        try {
            const success = await this.userService.deleteUser(req.params.id);
            if (!success) {
                res.status(404).send('Usuario no encontrado');
                return;
            }
            res.json({ message: 'Usuario eliminado correctamente' });
        } catch (error: any) {
            res.status(500).json({ message: 'Error al eliminar el usuario', error: error.message }); // 500 Internal Server Error
        }
    }
}