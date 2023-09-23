import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MytripService {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:3000/';
  token = localStorage.getItem('token');
  //array upto 40 seats//

  login(data: loginForm) {
    return this.http.post(`${this.baseUrl}user/login`, data);
  }

  register(data: registerForm) {
    return this.http.post(`${this.baseUrl}user/register`, data);
  }
  updateProfile(data: profileForm) {
    return this.http.put(`${this.baseUrl}user/`, data, {
      headers: { authorization: '' + localStorage.getItem('token') },
    });
  }
  addBus(data: any) {
    return this.http.post(`${this.baseUrl}bus/`, data, {
      headers: { authorization: '' + localStorage.getItem('token') },
    });
  }
  getBuses(origin: string, destination: string, departureDate: string) {
    return this.http.get(
      `${this.baseUrl}bus/searchByBothAndDate?origin=${origin}&destination=${destination}&departureDate=${departureDate}`,
      { headers: { authorization: '' + localStorage.getItem('token') } }
    );
  }
  getUnBookedSeats(busId: string) {
    return this.http.get(`${this.baseUrl}booking/unbooked/${busId}`, {
      headers: { authorization: '' + localStorage.getItem('token') },
    });
  }
  getBusDetails(busId: string) {
    return this.http.get(`${this.baseUrl}bus/${busId}`, {
      headers: { authorization: '' + localStorage.getItem('token') },
    });
  }
  bookTicket(data: any) {
    return this.http.post(`${this.baseUrl}booking/`, data, {
      headers: { authorization: '' + localStorage.getItem('token') },
    });
  }
  getMyBookings() {
    return this.http.get(`${this.baseUrl}booking/`, {
      headers: { authorization: '' + localStorage.getItem('token') },
    });
  }

  getAllBuses() {
    return this.http.get(`${this.baseUrl}bus/`, {
      headers: { authorization: '' + localStorage.getItem('token') },
    });
  }

  getBookingsByBusId(busId: string) {
    return this.http.get(`${this.baseUrl}booking/bus/${busId}`, {
      headers: { authorization: '' + localStorage.getItem('token') },
    });
  }

  updatePassword(data: any) {
    return this.http.put(`${this.baseUrl}user/changepassword`, data, {
      headers: { authorization: '' + localStorage.getItem('token') },
    });
  }
}

export interface loginForm {
  email: string;
  password: string;
}
export interface registerForm {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}
export interface profileForm {
  name: string;
  email: string;
}

