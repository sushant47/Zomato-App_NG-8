import { Observable } from 'rxjs';
import { IRestaurantBasicDetails, IRestaurantLocation, IRestaurantObject, IUserRating } from '../restaurants-list/restaurant-list.interface';
import { RestaurantService } from '../services/restaurant-service.service';

export class RestaurantDetailsModel implements IRestaurantObject {
    R: IRestaurantBasicDetails;
    id: string;
    name: string;
    location: IRestaurantLocation;
    average_cost_for_two: number;
    cuisines: string;
    thumb: string;
    user_rating: IUserRating;
    constructor(private restaurantService: RestaurantService) {

    }
    public getRestaurantDetails?(restaurantId: number): Observable<ArrayBuffer> {
        return this.restaurantService.getRestaurantDetails(restaurantId);
    }

}
