import { Employee } from "./employee.model";

describe('Employee', () => {
  it('should create an instance', () => {
    expect(new Employee(1, 'John Doe', 'IT', 'Manager', 'johndoe@example.com', '1234567890')).toBeTruthy();
  });
});
