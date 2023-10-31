import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-project',
 templateUrl: './projet.component.html',
 styleUrls: ['./projet.component.css']
})
export class ProjectComponent implements OnInit {
 title = 'My Project';
 description = 'This is a description of my project.';

 constructor() { }

 ngOnInit(): void {
 }
}