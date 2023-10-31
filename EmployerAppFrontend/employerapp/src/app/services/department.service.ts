// department.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
 providedIn: 'root'
})
export class DepartmentService {
 
 private apiUrl = 'http://localhost:3000/api/departments';

 constructor() { }

;
 }
