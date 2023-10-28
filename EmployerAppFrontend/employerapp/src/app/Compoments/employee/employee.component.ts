// employee.component.ts
import { Component } from '@angular/core';
import { Employee } from 'src/app/Models/employee.model';


@Component({
 selector: 'app-employee',
 templateUrl: './employee.component.html',
 styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
 employee: Employee = {
   id: 1,
   name: 'John Doe',
   department: 'IT',
   position: 'Software Developer',
   email: '',
   phone: ''
 };
}