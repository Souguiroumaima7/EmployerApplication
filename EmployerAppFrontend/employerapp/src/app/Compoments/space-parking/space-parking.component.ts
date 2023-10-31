import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
 selector: 'app-space-parking',
 templateUrl: './space-parking.component.html',
 styleUrls: ['./space-parking.component.css']
})
export class SpaceParkingComponent implements OnInit, AfterViewInit {

 @ViewChild('spaceParkingCanvas') spaceParkingCanvas !: ElementRef;

 constructor() { }

 ngOnInit(): void {
 }

 ngAfterViewInit(): void {
    const canvas = this.spaceParkingCanvas.nativeElement;
    const ctx = canvas.getContext('2d');
    canvas.width = 600 
 }
}