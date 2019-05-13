import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8000';

  constructor(private http: Http) { }

  getExample() {
    return this.http.get(`${this.baseUrl}/example`);
  }

  getEvents() {
    return this.http.get(`${this.baseUrl}/event`);
  }
  getEventDetail(id: number) {
    return this.http.get(`${this.baseUrl}/event/${id}`);

  }

}
