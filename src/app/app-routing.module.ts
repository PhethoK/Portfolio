import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.components';
import { SkillsComponent } from './skills/skills.component';
import { SchoolComponent } from './school/school.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: 'header',
    component: HeaderComponent,
  },

  {
    path: 'intro',
    component: IntroComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'skill',
    component: SkillsComponent,
  },
  {
    path: 'school',
    component: SchoolComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
