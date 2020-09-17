import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantListComponent } from './restaurants-list/restaurants-list.component';
import { RegisterComponent } from './register/register.component';
import { RestaurantService } from './services/restaurant-service.service';
import { LocationService } from './services/location.service';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { StorageService } from './services/storage-service.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    RegisterComponent,
    RestaurantDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [LocationService, RestaurantService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
