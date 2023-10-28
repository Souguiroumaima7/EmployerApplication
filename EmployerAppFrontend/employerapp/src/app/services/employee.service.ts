import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class EmployeeService {

 constructor() { }

 getEmployees() {
    // Return a hardcoded list of employees for demonstration purposes
    return [
      { id: 1, name: 'John Doe', age: 30 },
      { id: 2, name: 'Jane Doe', age: 28 },
      { id: 3, name: 'Sam Smith', age: 35 },
    ];
 }
}