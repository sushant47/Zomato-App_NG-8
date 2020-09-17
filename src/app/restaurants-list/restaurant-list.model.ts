import { IRestaurantsList, IRestaurantObject, ILocation } from './restaurant-list.interface';
import { Observable } from 'rxjs';
import { LocationService } from '../services/location.service';
import { RestaurantService } from '../services/restaurant-service.service';

export class RestaurantListModel implements IRestaurantsList {
    restaurant: IRestaurantObject;
    constructor(private locationService: LocationService, private restaurantService: RestaurantService) {

    }
    getLocation?(): Observable<ILocation> {
        return this.locationService.getLocation();
        // .subscribe(data => {
        //     location = data;
        // }, error => {
        //     location = error;
        // });
        // return location;
    }
    getNearByRestaurants?(latitude: string, longitude: string): Observable<ArrayBuffer> {
        // let value;
        return this.restaurantService.getNearByRestaurants(latitude, longitude);
        //     .subscribe((data: ArrayBuffer) => {
        //         value = data;
        //     }, error => {
        //         value = error;
        //     });
        // console.log('typeOf', typeof value);
        // return value;
    }
}
