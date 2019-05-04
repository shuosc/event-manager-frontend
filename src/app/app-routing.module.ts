import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventlistComponent} from './Components/eventlist/eventlist.component';
import {HelpComponent} from './Components/help/help.component';

const routes: Routes = [
  { path: '', redirectTo: '/eventlist', pathMatch: 'full' },
  { path: 'eventlist', component: EventlistComponent},
  { path: 'help', component: HelpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
