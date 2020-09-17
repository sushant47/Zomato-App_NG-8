import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
    constructor() {

    }
    public setData(name: string, content: string) {
        localStorage.setItem(name, content);
    }
    public getData(name: string) {
        return localStorage.getItem(name);
    }
}
