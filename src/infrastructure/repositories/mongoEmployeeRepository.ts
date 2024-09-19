import { EmployeeRepository } from '../../domain/repositories/employeeRepository';
import { Employee } from '../../domain/entities/employee';
import EmployeeModel, { IEmployee } from '../database/employeeModel';

export class MongoEmployeeRepository implements EmployeeRepository {
	async findById(id: string): Promise<Employee | null> {
		const employee = await EmployeeModel.findById(id).exec();
		return employee ? new Employee(employee.id, employee.name, employee.storeId) : null;
	}

	async findAll(): Promise<Employee[]> {
		const employees = await EmployeeModel.find().exec();
		return employees.map(employee => new Employee(employee.id, employee.name, employee.storeId));
	}

	async create(employee: Employee): Promise<Employee> {
		const newEmployee = new EmployeeModel(employee);
		const savedEmployee = await newEmployee.save();
		return new Employee(savedEmployee.id, savedEmployee.name, savedEmployee.storeId);
	}

	async update(id: string, employee: Partial<Employee>): Promise<Employee | null> {
		const updatedEmployee = await EmployeeModel.findByIdAndUpdate(id, employee, { new: true }).exec();
		return updatedEmployee ? new Employee(updatedEmployee.id, updatedEmployee.name, updatedEmployee.storeId) : null;
	}

	async delete(id: string): Promise<boolean> {
		const result = await EmployeeModel.findByIdAndDelete(id).exec();
		return result !== null;
	}
}