import { EmployeeRepository } from '../../domain/repositories/employeeRepository';
import { Employee } from '../../domain/entities/employee';

export class EmployeeService {
	constructor(private employeeRepository: EmployeeRepository) {}

	async getEmployeeById(id: string): Promise<Employee | null> {
		return this.employeeRepository.findById(id);
	}

	async getAllEmployees(): Promise<Employee[]> {
		return this.employeeRepository.findAll();
	}

	async createEmployee(employee: Employee): Promise<Employee> {
		return this.employeeRepository.create(employee);
	}

	async updateEmployee(id: string, employee: Partial<Employee>): Promise<Employee | null> {
		return this.employeeRepository.update(id, employee);
	}

	async deleteEmployee(id: string): Promise<boolean> {
		return this.employeeRepository.delete(id);
	}
}