import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MytripService } from '../mytrip.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.css'],
})
export class BookticketComponent implements OnInit {
  link = this.service.baseUrl;
  busDetails: any;
  seats :any
  availableSeats: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MytripService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getBusDetails(this.route.snapshot.params['id']);
  }

  getBusDetails(id: string) {
    this.service.getBusDetails(id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.busDetails = data;
        let x=[]
        for (let i = 1; i <= this.busDetails.totalSeats; i++) {
       console.log(i);
       x.push(i)
       this.seats=x
        }

        this.getUnBookedSeats(id);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  getUnBookedSeats(id: string) {
    this.service.getUnBookedSeats(id).subscribe({
      next: (data: any) => {
        this.availableSeats = data;
        console.log(data);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  wishedSeat: any = [];

  selectSeat(seat: any) {
    if (this.wishedSeat.includes(seat)) {
      this.wishedSeat.splice(this.wishedSeat.indexOf(seat), 1);
    } else {
      this.wishedSeat.push(seat);
    }
  }

  bookTicket() {
    let data = {
      busId: this.busDetails._id,
      seatNumbers: this.wishedSeat,
    };
    this.service.bookTicket(data).subscribe({
      next: (data: any) => {
        console.log(data);
        this.toastr.success('Ticket Booked Successfully');
        this.getBusDetails(this.route.snapshot.params['id']);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  checkSelected(item: any) {
    if (this.wishedSeat.includes(item)) {
      return true;
    } else {
      return false;
    }
  }

  checkAvailable(item: any) {
    if (this.availableSeats.includes(item)) {
      return true;
    } else {
      return false;
    }
  }
}
