import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../services/restaurant-service.service';
import { IRestaurantObject } from '../restaurants-list/restaurant-list.interface';
import { RestaurantDetailsModel } from './restaurant-details.model';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit {
  public restaurantDetails: IRestaurantObject = {} as IRestaurantObject;
  constructor(
    private router: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {
    this.router.params.subscribe(params => {
      this.getRestaurantDetails(+ params.restaurantId);
    });
  }

  ngOnInit() {

  }
  private getRestaurantDetails(restaurantId: number) {
    const restaurantDetailsClass = new RestaurantDetailsModel(this.restaurantService);
    restaurantDetailsClass.getRestaurantDetails(+restaurantId)
      .subscribe(data => {
        const restaurantDetails = {};
        restaurantDetails['data'] = data;
        this.restaurantDetails = restaurantDetails['data'];
      });
  }
}
