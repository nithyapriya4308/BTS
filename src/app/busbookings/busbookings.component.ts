import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MytripService } from '../mytrip.service';

@Component({
  selector: 'app-busbookings',
  templateUrl: './busbookings.component.html',
  styleUrls: ['./busbookings.component.css'],
})
export class BusbookingsComponent {
  constructor(private route: ActivatedRoute, private http: MytripService) {}

  tableData: any

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    this.getBusBookings(this.route.snapshot.params['id']);
  }

  getBusBookings(id: string) {
    this.http.getBookingsByBusId(id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.tableData = data;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
