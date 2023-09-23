import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MytripService } from 'src/app/mytrip.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent implements OnInit {
  loggedIn = false;
  admin = false;
  role = localStorage.getItem('role');

  constructor(
    private toast: ToastrService,
    private http: MytripService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.loggedIn = true;
      this.profileForm.patchValue({
        name: localStorage.getItem('name'),
        email: localStorage.getItem('email'),
      });
      if ('admin' == localStorage.getItem('role')) {
        this.admin = true;
      }
    }
  }

  profileForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  });

  passwordForm: FormGroup = new FormGroup({
    oldpassword: new FormControl('', [Validators.required]),
    newpassword: new FormControl('', [Validators.required]),
  });

  updateProfile() {
    this.http.updateProfile(this.profileForm.value).subscribe({
      next: (res: any) => {
        console.log(res);
        this.toast.success('Successfully updated');
        localStorage.setItem('name', res.user.name);
        localStorage.setItem('email', res.user.email);
        window.location.reload();
      },
    });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    this.loggedIn = false;
    this.router.navigate(['']);
    this.toast.success('Successfully logged out');
  }

  updatePassword() {
    this.http.updatePassword(this.passwordForm.value).subscribe({
      next: (res: any) => {
        console.log(res);
        this.toast.success('Successfully updated');
        this.passwordForm.reset();
        window.location.reload();
      },
      error: (err) => {
        this.toast.error(err.error.message);
      },
    });
  }
}
