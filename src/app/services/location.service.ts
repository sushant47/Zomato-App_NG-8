import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ILocation } from '../restaurants-list/restaurant-list.interface';
const USER_KEY = ['user-key', '2992de5d38229d6ddc7514fda07d8430'];
const TOM_KEY = ['key', 'DmZD1FmH9GSUPVt3G86dkJgWDEboiA52'];
@Injectable()

export class LocationService {
    constructor() {

    }
    public getLocation(): Observable<ILocation> {
        const geoLocationOptions = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        return new Observable(observer => {
            if (window.navigator && window.navigator.geolocation) {
                window.navigator.geolocation.getCurrentPosition(
                    (position: ILocation) => {
                        localStorage.setItem('data ', JSON.stringify(position));
                        observer.next(position);
                        observer.complete();
                    },
                    (error) => observer.error(error)
                    , geoLocationOptions);
            } else {
                observer.error('Unsupported Browser');
            }
        });
    }
}
