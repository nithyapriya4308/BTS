import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PassengerService {
  constructor(private client: HttpClient) { }

  private URL = 'http://localhost:5000/passenger';
  private LOGIN = 'http://localhost:5000/passenger/login';

  headers: HttpHeaders = new HttpHeaders({
    'content-Type': 'application/json',
  });

  login(passenger: any) {
    return this.client.post(`${this.LOGIN}`, passenger, {
      headers: this.headers,
    });
  }

  getPassengers() {
    return this.client.get(`${this.URL}`, {
      headers: this.headers,
    });
  }

  getPassenger(id: number) {
    return this.client.get(`${this.URL}/${id}`, {
      headers: this.headers,
    });
  }

  addPassenger(passenger: any) {
    return this.client.post(`${this.URL}`, passenger, {
      headers: this.headers,
    });
  }

  updatePassenger(passenger: any) {
    return this.client.patch(`${this.URL}/${passenger.id}`, {
      headers: this.headers,
    });
  }

  deletePassenger(id: number) {
    return this.client.delete(`${this.URL}/${id}`, { headers: this.headers });
  }
}
