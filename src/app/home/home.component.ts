import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MytripService } from 'src/app/mytrip.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  buses: any;
  link = this.http.baseUrl;
  globalData: any[] = [];
  indiaCities: any[] = [];
  states: any[] = [];
  submitted: boolean = false;
  returnForm: FormGroup = new FormGroup({
    from: new FormControl('', [Validators.required]),
    to: new FormControl('', [Validators.required]),
    departure: new FormControl('', [Validators.required]),
    return: new FormControl('', [Validators.required]),
    noofpassengers: new FormControl('', [Validators.required]),
    class: new FormControl('', [Validators.required]),
  });
  constructor(private http: MytripService, private router: Router) {}
  ngOnInit(): void {
    // this.getAllGlobalData();
  }
  
  searchForm: FormGroup = new FormGroup({
    origin: new FormControl('', [Validators.required]),
    destination: new FormControl('', [Validators.required]),
    departureDate: new FormControl('', [Validators.required]),
  });

  SearchBus() {
    this.submitted = true;
    if (this.searchForm.valid) {
      this.http
        .getBuses(
          this.searchForm.value.origin,
          this.searchForm.value.destination,
          this.searchForm.value.departureDate
        )
        .subscribe({
          next: (res: any) => {
            console.log(res);
            this.buses = res;
            if (res.length == 0) {
              alert('No buses available for this route');
            }
          },
          error: (err: any) => {
            console.log(err);
          },
        });
    }
  }

  routeToBook(id: any) {
    if (localStorage.getItem('token') === null) {
      alert('Please login to book a ticket');
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/bookticket/', id]);
    }
  }

  getAllGlobalData() {
    // this.client.get(`http://localhost:5000/api/globaldata`).subscribe({
    //   next: (res: any) => {
    //     this.globalData = res;
    //     this.globalData.forEach((e: any) => {
    //       if (e.country === 'India') {
    //         this.states.push(e.states);
    //       }
    //     });
    //   },
    // });
  }
}
