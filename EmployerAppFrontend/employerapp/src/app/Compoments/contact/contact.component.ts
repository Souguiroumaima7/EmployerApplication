import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
 selector: 'app-contact',
 templateUrl: './contact.component.html',
 styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 contact = {
    name: '',
    email: '',
    message: ''
 };

 onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      console.log('Contact form is valid:', contactForm.value);
      // Add code here to send the form data to your server or save it locally
    } else {
      console.log('Contact form is invalid:', contactForm.value);
    }
 }
}