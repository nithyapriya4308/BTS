import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bus } from './bus';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(private client:HttpClient) { }

  private URL ='';
  headers:HttpHeaders = new HttpHeaders({
    'content-Type':'application/json'
  });

  getBus(id:number){
    return this.client.get<Bus>(`${this.URL}/${id}`,{headers:this.headers});
  }
  getBuses(){
    return this.client.get<Bus[]>(`${this.URL}`,{headers:this.headers});
  }

  addBus(bus:Bus){
    return this.client.post<Bus>(`${this.URL}`,{headers:this.headers});
  }

  updateBus(bus:Bus){
    return this.client.patch<Bus>(`${this.URL}/${bus.id}`,{headers:this.headers})
  }

  deleteBus(id:number){
    return this.client.delete(`${this.URL}/${id}`,{headers:this.headers})
  }
}
