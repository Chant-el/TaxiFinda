import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


import { TaxiListComponent } from './taxi-list/taxi-list.component';
import { TaxiEditComponent } from './taxi-edit/taxi-edit.component';
import TaxiService from './shared/api/taxi.service';
import { HomeComponent } from './home/home.component';
import { FindTaxiComponent } from './find-taxi/find-taxi.component';
import { FindRankComponent } from './find-rank/find-rank.component';

@NgModule({
  declarations: [
    AppComponent,
    TaxiListComponent,
    TaxiEditComponent,
    HomeComponent,
    FindTaxiComponent,
    FindRankComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
  ],
  providers: [TaxiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
