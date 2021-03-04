import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SkillComponent } from './skill/skill.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { SkillItemComponent } from './skill-item/skill-item.component';
import { ContactItemComponent } from './contact-item/contact-item.component';

import { BackendService } from './backend.service';

const routes: Routes = [
  {
    path: 'aboutme',
    component: AboutComponent
  },
  {
    path: 'skill',
    component: SkillComponent
  },
  {
    path: 'contactme',
    component: ContactComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    SkillComponent,
    ContactComponent,
    AboutComponent,
    PortfolioComponent,
    PageNotFoundComponent,
    SkillItemComponent,
    ContactItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
