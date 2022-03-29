import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaxiListComponent } from './taxi-list/taxi-list.component';
import { TaxiEditComponent } from './taxi-edit/taxi-edit.component';
import { HomeComponent } from './home/home.component';
import { FindTaxiComponent } from './find-taxi/find-taxi.component';
import { FindRankComponent } from './find-rank/find-rank.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: "taxi-edit", component:TaxiEditComponent},
  { path: "taxi-list", component:TaxiListComponent},
  { path: "find-taxi", component:FindTaxiComponent},
  { path: "find-rank", component:FindRankComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
