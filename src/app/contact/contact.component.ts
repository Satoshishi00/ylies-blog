import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  closeModal(event): void {
    event.preventDefault();
    document.getElementById('app-contact-container').style.display = 'none';
  }
}
