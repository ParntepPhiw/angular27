import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skills: Skill[];

  constructor(private backendService: BackendService) { 
    this.skills = [];
    // this.skills.push({
    //   name: 'Management'
    // });
    // this.skills.push({
    //   name: 'Sales'
    // });
    // this.skills.push({
    //   name: 'HTML & CSS'
    // });
    // this.skills.push({
    //   name: 'JavaScript'
    // });
    // this.skills.push({
    //   name: 'Data Analytics'
    // });
    // this.skills.push({
    //   name: 'Startup'
    // });

  }

  ngOnInit() {
    this.skills = this.backendService.getSkills();
  }

}
