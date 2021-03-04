import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts: Contact[];

  constructor(private backendService: BackendService) { 
    this.contacts = [];
    // this.contacts.push({
    //   name: 'Address',
    //   detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cupiditate iure possimus, voluptas quisquam ipsa fugiat voluptates, impedi'
    // });
    // this.contacts.push({
    //   name: 'Mobile Phone',
    //   detail: '0812345678'
    // });
    // this.contacts.push({
    //   name: 'Email',
    //   detail: 'dummy@gmail.com'
    // });
    // this.contacts.push({
    //   name: 'LinkedIn',
    //   detail: '@dummy0011'
    // });
  }

  ngOnInit() {
    this.contacts = this.backendService.getContacts();
  }

}
