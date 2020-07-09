import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ContactComponent = class ContactComponent {
    constructor(formBuilder, httpService) {
        this.formBuilder = formBuilder;
        this.httpService = httpService;
    }
    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            name: '',
            email: '',
            message: '',
        });
    }
    updateInputValues(event) {
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
    }
    onSubmit() {
        let name = this.contactForm.get('name').value;
        let email = this.contactForm.get('email').value;
        let message = this.contactForm.get('message').value;
        if (!this.isEmailAddress(email)) {
            alert('FORMULAIRE INVALIDE : EMAIL INCORRECT');
        }
        else {
            let text = `<h2>${name}</h2><h3>${email}</h3><p>${message}</p>`;
            this.sendMail(text);
            alert('Votre message a bien été envoyé !');
            console.log('mail envoyé : ' + text);
            document.getElementById('app-contact-container').style.display = 'none';
        }
    }
    closeModal(event) {
        event.preventDefault();
        document
            .getElementById('app-contact-container')
            .classList.toggle('displayFlex');
    }
    sendMail(text) {
        this.httpService.sendMail(text);
    }
    isEmailAddress(str) {
        let pattern = /^\w{1,16}\.?\w{1,16}@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        return str.match(pattern);
    }
};
ContactComponent = __decorate([
    Component({
        selector: 'app-contact',
        templateUrl: './contact.component.html',
        styleUrls: ['./contact.component.sass'],
    })
], ContactComponent);
export { ContactComponent };
//# sourceMappingURL=contact.component.js.map