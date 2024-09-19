import { Router } from 'express';
import { EmployeeController } from '../controllers/employeeController';
import { MongoEmployeeRepository } from '../../infrastructure/repositories/mongoEmployeeRepository';
import { EmployeeService } from '../../application/services/employeeService';

const router = Router();
const employeeRepository = new MongoEmployeeRepository();
const employeeService = new EmployeeService(employeeRepository);
const employeeController = new EmployeeController(employeeService);

const apiVersion = '/api/v1';

router.get(`${apiVersion}/employees/:id`, (req, res) => employeeController.getEmployeeById(req, res));
router.get(`${apiVersion}/employees`, (req, res) => employeeController.getAllEmployees(req, res));
router.post(`${apiVersion}/employees`, (req, res) => employeeController.createEmployee(req, res));
router.put(`${apiVersion}/employees/:id`, (req, res) => employeeController.updateEmployee(req, res));
router.delete(`${apiVersion}/employees/:id`, (req, res) => employeeController.deleteEmployee(req, res));

export default router;