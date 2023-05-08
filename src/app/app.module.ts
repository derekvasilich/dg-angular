import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { LoginComponent } from './login/login.component';
import { PaginationComponent } from './global/pagination/pagination.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VehicleFiltersComponent } from './vehicle-filters/vehicle-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleListComponent,
    VehicleDetailComponent,
    LoginComponent,
    PaginationComponent,
    VehicleFiltersComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
