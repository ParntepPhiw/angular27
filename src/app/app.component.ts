import { Component, OnInit, ViewChild } from '@angular/core';
import { SkillComponent } from './skill/skill.component';
import { ContactComponent } from './contact/contact.component';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private backendService: BackendService) {}

  @ViewChild('skillList')
  skillList: SkillComponent;
  @ViewChild('contactList')
  contactList: ContactComponent;

  ngOnInit(): void {
    this.skillList.skills = this.backendService.getSkills();
    this.contactList.contacts = this.backendService.getContacts();
  }
}
