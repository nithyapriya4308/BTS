import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { SupportComponent } from './support/support.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { BookticketComponent } from './bookticket/bookticket.component';
import { BusseatsComponent } from './busseats/busseats.component';
import { BusbookingsComponent } from './busbookings/busbookings.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { AdminNavComponent } from './Navbars/admin-nav/admin-nav.component';
import { MainNavComponent } from './Navbars/main-nav/main-nav.component';
import { PassengerNavComponent } from './Navbars/passenger-nav/passenger-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule ,} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaymentComponent,
    RegisterComponent,
    SearchComponent,
    MybookingsComponent,
    SupportComponent,
    AddBusComponent,
    BookticketComponent,
    BusseatsComponent,
    BusbookingsComponent,
    BusListComponent,
    AdminNavComponent,
    MainNavComponent,
    PassengerNavComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule, BrowserAnimationsModule,
    ToastrModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
