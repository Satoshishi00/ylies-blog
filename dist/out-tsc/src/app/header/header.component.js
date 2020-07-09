import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() { }
    toogleContactForm() {
        let contactForm = document.getElementById('app-contact-container');
        contactForm.classList.toggle('displayFlex');
    }
};
HeaderComponent = __decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.sass'],
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map