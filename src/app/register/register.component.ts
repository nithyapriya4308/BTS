// import { Passenger } from './../../passenger';


import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MytripService } from 'src/app/mytrip.service';
import { PassengerService } from 'src/app/passenger.service';

export interface Passenger {
  id: number | undefined;
  name: String | undefined;
  email: String | undefined;
  password: String | undefined;
  address: String | undefined;
  phoneNumber: number | undefined;
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required])

  })


  constructor(
    private router: Router,
    private toast: ToastrService,
    private http: MytripService
  ) { }
  ngOnInit(): void {
    const token = localStorage.getItem("token")
    if (token) {
      this.router.navigate(["/"])
    }
  }


  savePassenger() {

  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.http.register(this.registerForm.value).subscribe({
        next: (res: any) => {
          this.toast.success("Successfully Created Account")
          this.router.navigate(["/login"])
        },
        error: (err: any) => {
          this.toast.error(err.error.message)
        }
      })
    } else {
      this.toast.warning("Please Fill All The Input Fields")
    }

  }
}
