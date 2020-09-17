import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantListComponent } from './restaurants-list/restaurants-list.component';
import { RegisterComponent } from './register/register.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'restaurants-list', component: RestaurantListComponent },
  { path: 'restaurant-details/:restaurantId', component: RestaurantDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
