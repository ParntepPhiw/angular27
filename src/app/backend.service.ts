import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Skill } from './skill';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  skills: Skill[];
  contacts: Contact[];

  constructor() { }

  getContacts(): Contact[] {
    this.contacts = [];
    this.contacts.push({
      name: 'Address',
      detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cupiditate iure possimus, voluptas quisquam ipsa fugiat voluptates, impedi'
    });
    this.contacts.push({
      name: 'Mobile Phone',
      detail: '0812345678'
    });
    this.contacts.push({
      name: 'Email',
      detail: 'dummy@gmail.com'
    });
    this.contacts.push({
      name: 'LinkedIn',
      detail: '@dummy0011'
    });
    return this.contacts;
  }

  getSkills(): Skill[] {
    this.skills = [];
    this.skills.push({
      name: 'Management'
    });
    this.skills.push({
      name: 'Sales'
    });
    this.skills.push({
      name: 'HTML & CSS'
    });
    this.skills.push({
      name: 'JavaScript'
    });
    this.skills.push({
      name: 'Data Analytics'
    });
    this.skills.push({
      name: 'Startup'
    });
    return this.skills;
  }
}
