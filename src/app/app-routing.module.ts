import { NgModule } from '@angular/core';

import { ExperienceComponent } from './routes/experience/experience.component';
import { EductionComponent } from './routes/eduction/eduction.component';
import { PortfolioComponent } from './routes/portfolio/portfolio.component';
import { ContactComponent } from './routes/contact/contact.component';
import { AboutComponent } from './routes/about/about.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'experience', component: ExperienceComponent },
  { path: 'education', component: EductionComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
