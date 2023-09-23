import { DOCUMENT } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MytripService } from 'src/app/mytrip.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(
    private http: MytripService,
    private toast: ToastrService,
    private router: Router

  ) { }
  ngOnInit(): void {
    const token = localStorage.getItem("token")
    if (token) {
      this.router.navigate(["/"])
    }

  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })


  login() {
    if (this.loginForm.valid) {
      this.http.login(this.loginForm.value).subscribe({
        next: (res: any) => {
          console.log(res)
          this.toast.success("Successfully logged in")
          localStorage.setItem("token", res.token)
          localStorage.setItem("name", res.user.name)
          localStorage.setItem("email", res.user.email)
          localStorage.setItem("role", res.user.role)
          window.location.reload();
        },
        error: (err) => {
          console.log(err)
          this.toast.error(err.error.message)
        }
      })
    }
  }
}
