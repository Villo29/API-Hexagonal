import { Employee } from '../entities/employee';

export interface EmployeeRepository {
	findById(id: string): Promise<Employee | null>;
	findAll(): Promise<Employee[]>;
	create(employee: Employee): Promise<Employee>;
	update(id: string, employee: Partial<Employee>): Promise<Employee | null>;
	delete(id: string): Promise<boolean>;
}