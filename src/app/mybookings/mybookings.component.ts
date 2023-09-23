import { Component, OnInit } from '@angular/core';
import { MytripService } from '../mytrip.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css'],
})
export class MybookingsComponent implements OnInit {
  tableData: any;

  constructor(private http: MytripService, private toast: ToastrService) {}

  ngOnInit() {
    this.getBookings();
  }

  getBookings() {
    this.http.getMyBookings().subscribe({
      next: (res: any) => {
        console.log(res);
        this.tableData = res;
      },
    });
  }
}
