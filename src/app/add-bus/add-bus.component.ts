import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MytripService } from 'src/app/mytrip.service';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent {
  busImage: any;

  constructor(
    private http: MytripService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    const token = localStorage.getItem("token")
    if (!token) {
      window.location.href = "/login"

    } else {
      const role = localStorage.getItem("role")
      if (role != "admin") {
        window.location.href = "/"
        this.toastr.error("You are not authorized to access this page")
      }
    }
  }

  myForm: FormGroup = new FormGroup({
    busNo: new FormControl('', [Validators.required,]),
    busName: new FormControl('', [Validators.required,]),
    type: new FormControl('', [Validators.required,]),
    origin: new FormControl('', [Validators.required,]),
    destination: new FormControl('', [Validators.required]),
    departureDate: new FormControl('', [Validators.required,]),
    departureTime: new FormControl('', [Validators.required,]),
    arrivalDate: new FormControl('', [Validators.required,]),
    arrivalTime: new FormControl('', [Validators.required,]),
    seatsAvailable: new FormControl('', [Validators.required,]),
    fare: new FormControl('', [Validators.required,]),
    duration: new FormControl('', [Validators.required,]),
  });

  addBus() {
    console.log(this.myForm.value)

    if (this.myForm.valid && this.busImage) {
      let formData = new FormData()
      formData.append("busNo", this.myForm.value.busNo)
      formData.append("busName", this.myForm.value.busName)
      formData.append("type", this.myForm.value.type)
      formData.append("origin", this.myForm.value.origin)
      formData.append("destination", this.myForm.value.destination)
      formData.append("departureDate", this.myForm.value.departureDate)
      formData.append("departureTime", this.myForm.value.departureTime)
      formData.append("arrivalDate", this.myForm.value.arrivalDate)
      formData.append("arrivalTime", this.myForm.value.arrivalTime)
      formData.append("seatsAvailable", this.myForm.value.seatsAvailable)
      formData.append("fare", this.myForm.value.fare)
      formData.append("duration", this.myForm.value.duration)
      formData.append("busImage", this.busImage)
      this.http.addBus(formData).subscribe({
        next: (data) => {
          console.log(data)
          this.toastr.success("Bus Added Successfully")
          this.myForm.reset()
          this.busImage = null
        },
        error: (err) => {
          console.log(err)
          this.toastr.error("Bus Not Added")
        }
      })
    }
  }

  fileChoosen(event: any) {
    this.busImage = event.target.files[0]
  }

}
