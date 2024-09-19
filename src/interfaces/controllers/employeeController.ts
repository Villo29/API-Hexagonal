import { Request, Response } from 'express';
import { EmployeeService } from '../../application/services/employeeService';

export class EmployeeController {
    constructor(private employeeService: EmployeeService) {}

    async getEmployeeById(req: Request, res: Response): Promise<void> {
        try {
            const employee = await this.employeeService.getEmployeeById(req.params.id);
            if (!employee) {
                res.status(404).send('Empleado no encontrado');
                return;
            }
            res.json({ message: 'Empleado encontrado correctamente', employee });
        } catch (error: any) {
            res.status(500).json({ message: 'Error al recuperar el empleado', error: error.message });
        }
    }

    async getAllEmployees(req: Request, res: Response): Promise<void> {
        try {
            const employees = await this.employeeService.getAllEmployees();
            res.json({ message: 'Empleados encontrados correctamente', employees });
        } catch (error: any) {
            res.status(500).json({ message: 'Error al recuperar los empleados', error: error.message });
        }
    }

    async createEmployee(req: Request, res: Response): Promise<void> {
        try {
            const employee = await this.employeeService.createEmployee(req.body);
            res.status(201).json({ message: 'Empleado creado correctamente', employee });
        } catch (error: any) {
            res.status(500).json({ message: 'Error al crear el empleado', error: error.message });
        }
    }

    async updateEmployee(req: Request, res: Response): Promise<void> {
        try {
            const updatedEmployee = await this.employeeService.updateEmployee(req.params.id, req.body);
            if (!updatedEmployee) {
                res.status(404).send('Empleado no encontrado');
                return;
            }
            res.json({ message: 'Empleado actualizado correctamente', employee: updatedEmployee });
        } catch (error: any) {
            res.status(500).json({ message: 'Error al actualizar el empleado', error: error.message });
        }
    }

    async deleteEmployee(req: Request, res: Response): Promise<void> {
        try {
            const success = await this.employeeService.deleteEmployee(req.params.id);
            if (!success) {
                res.status(404).send('Empleado no encontrado');
                return;
            }
            res.json({ message: 'Empleado eliminado correctamente' });
        } catch (error: any) {
            res.status(500).json({ message: 'Error al eliminar el empleado', error: error.message });
        }
    }
}