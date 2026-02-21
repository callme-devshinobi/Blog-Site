import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  form = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
    setTimeout(() => {
      this.submitted = false;
      this.form = { name: '', email: '', subject: '', message: '' };
    }, 4000);
  }
}