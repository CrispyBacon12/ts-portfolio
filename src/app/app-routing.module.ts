import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { homepage } from './templates/templates.module';

const routes: Routes = [
  {
    path: '',
    component: homepage.HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
