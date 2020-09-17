import { Injectable } from '@angular/core';
import { HttpService } from './http-service.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const USER_KEY = ['user-key', '2992de5d38229d6ddc7514fda07d8430'];
@Injectable({
    providedIn: 'root'
})

export class RestaurantService {
    constructor(
        private httpService: HttpService,
    ) {
    }
    public getNearByRestaurants(latitude: string, longitude: string): Observable<ArrayBuffer> {
        const url = `https://developers.zomato.com/api/v2.1/geocode?`;
        let headers = new HttpHeaders();
        headers = headers.append(USER_KEY[0], USER_KEY[1]);
        return this.httpService.get(`${url}lat=${latitude}&lon=${longitude}`, { headers });
    }
    public getRestaurantDetails(restaurantId: number): Observable<ArrayBuffer> {
        const url = `https://developers.zomato.com/api/v2.1/restaurant?`;
        let headers = new HttpHeaders();
        headers = headers.append(USER_KEY[0], USER_KEY[1]);
        return this.httpService.get(`${url}res_id=${restaurantId}`, { headers });
    }
}
