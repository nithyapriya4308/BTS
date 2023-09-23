import { Component } from '@angular/core';
import { MytripService } from '../mytrip.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent {
  link=this.http.baseUrl;

  buses: any

  constructor(
    private http: MytripService,
  ) { }

  ngOnInit(): void {
    this.getBuses();
  }

  getBuses() {
    this.http.getAllBuses().subscribe({
      next: (res: any) => {
        console.log(res);
        this.buses = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

}
