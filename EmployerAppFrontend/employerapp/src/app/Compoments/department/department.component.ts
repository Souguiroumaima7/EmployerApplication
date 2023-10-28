// department.component.ts
import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';



@Component({
 selector: 'app-department',
 templateUrl: './department.component.html',
 styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
 departments!: Department[];

 constructor(private departmentService: DepartmentService) { }

 ngOnInit(): void {
    this.getDepartments();
 }

 getDepartments(): void {
    this.departmentService.getDepartments()
      .subscribe(departments => this.departments = departments);
 }
}