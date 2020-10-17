import { Component, OnInit } from '@angular/core';
import { contact } from './contact';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})

export class ContactPageComponent implements OnInit {

  one: contact = {
    name: 'Sudhansh Peddabomma',
    email: 'sudhansh@cse.iitb.ac.in/190050118@iitb.ac.in',
    roll: 190050118
  };
  two: contact = {
    name: 'Surapaneni Sai Vigna',
    email: 'vigna@cse.iitb.ac.in/190050121@iitb.ac.in',
    roll: 190050121
  }
  constructor() { }

  ngOnInit(): void {
  }

}