import { Component, OnDestroy, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant-service.service';
import { LocationService } from '../services/location.service';
import { Router } from '@angular/router';
import { ILocation, IRestaurantsList, NearbyRestaurant } from './restaurant-list.interface';
import { RestaurantListModel } from './restaurant-list.model';
import { Subscription } from 'rxjs';
import { UtilityFunctions } from '../shared/utility-functions';

@Component({
  selector: 'app-home',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.scss']
})
export class RestaurantListComponent implements OnInit, OnDestroy {
  public restaurantsList: NearbyRestaurant[];
  private subscriptions: Subscription[] = [];
  constructor(
    private restaurantService: RestaurantService,
    private locationService: LocationService,
    private router: Router
  ) { }
  ngOnInit() {
    const restaurantListModel = new RestaurantListModel(this.locationService, this.restaurantService);
    this.subscriptions.push(restaurantListModel.getLocation()
      .subscribe((location: ILocation) => {
        this.getNearByRestaurants(restaurantListModel, location);
      }, error => {
        console.log(error);
      }));
  }
  private getNearByRestaurants(restaurantListModel: IRestaurantsList, location: ILocation) {
    this.subscriptions.push(restaurantListModel.getNearByRestaurants('' + location.coords.latitude, '' + location.coords.longitude)
      .subscribe((res: any) => {
        this.restaurantsList = res.nearby_restaurants;
      }, error => {
        console.log(error);
      }));
  }
  public getRestaurantDetails(restaurantID: number) {
    this.router.navigate(['/restaurant-details', restaurantID]);
  }
  ngOnDestroy() {
    UtilityFunctions.unSubscribeSubscriptions(this.subscriptions);
  }
}
