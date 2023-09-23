import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { SearchComponent } from './search/search.component';
import { PaymentComponent } from './payment/payment.component';
import { BookticketComponent } from './bookticket/bookticket.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { SupportComponent } from './support/support.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { BusseatsComponent } from './busseats/busseats.component';
import { BusbookingsComponent } from './busbookings/busbookings.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'addbus', component: AddBusComponent },
  // { path: 'search', component: SearchComponent },

  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'addbus', component: AddBusComponent },
  { path: 'search', component: SearchComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'bookticket/:id', component: BookticketComponent },
  { path: 'mybookings', component: MybookingsComponent },
  { path: 'support', component: SupportComponent },
  { path: 'buseslist', component: BusListComponent },
  { path: 'busseats/:id', component: BusseatsComponent },
  { path: 'busbookings/:id', component: BusbookingsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

