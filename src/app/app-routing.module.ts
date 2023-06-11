import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ThingsToKnowComponent } from './pages/things-to-know/things-to-know.component';
import { RSVPComponent } from './pages/rsvp/rsvp.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'things-to-know', component: ThingsToKnowComponent},
  {path: 'rsvp', component: RSVPComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
