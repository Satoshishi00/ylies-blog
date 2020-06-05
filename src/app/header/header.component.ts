import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  toogleContactForm(): void {
    let contactForm = document.getElementById('app-contact-container');
    contactForm.classList.toggle('displayFlex');
  }
}
