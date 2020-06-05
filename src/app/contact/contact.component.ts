import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from '../http.service';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: '',
      email: '',
      message: '',
    });
  }

  updateInputValues(event): void {
    switch (event.target.name) {
      case 'name':
        let name = event.target.value;
        console.log(`name : ${name}`);
        this.contactForm.get('name').setValue(name);
        break;
      case 'email':
        let email = event.target.value;
        console.log(`email : ${email}`);
        this.contactForm.get('email').setValue(email);
        break;
      case 'message':
        let message = event.target.value;
        console.log('message :', message);
        this.contactForm.get('message').setValue(message);
    }
    // if (event.target.name.length > 0) {
    //   let name = event.target.value;
    //   console.log(`name : ${name}`);
    //   this.contactForm.get('name').setValue(name);
    // }

    // if (event.target.email.length > 0) {
    //   let email = event.target.value;
    //   console.log(`email : ${email}`);
    //   this.contactForm.get('email').setValue(email);
    // }

    // if (event.target.message > 0) {
    //   let message = event.target.value;
    //   console.log('message :', message);
    //   this.contactForm.get('message').setValue(message);
    // }
  }

  onSubmit() {
    let name = this.contactForm.get('name').value;
    let email = this.contactForm.get('email').value;
    let message = this.contactForm.get('message').value;

    if (!this.isEmailAddress(email)) {
      alert('FORMULAIRE INVALIDE : EMAIL INCORRECT');
    } else {
      let text = `<h2>${name}</h2><h3>${email}</h3><p>${message}</p>`;
      this.sendMail(text);
      alert('Votre message a bien été envoyé !');
      console.log('mail envoyé : ' + text);
      document.getElementById('app-contact-container').style.display = 'none';
    }
  }

  closeModal(event): void {
    event.preventDefault();
    document
      .getElementById('app-contact-container')
      .classList.toggle('displayFlex');
  }

  sendMail(text): void {
    this.httpService.sendMail(text);
  }

  isEmailAddress(str) {
    let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return str.match(pattern);
  }
}
