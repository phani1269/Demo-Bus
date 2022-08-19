import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { BUSComponent } from './bus/bus.component';
import { HomeComponent } from './home/home.component';
import { JourneyDetailsComponent } from './journey-details/journey-details.component';
import { SelectSeatsComponent } from './select-seats/select-seats.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'bus',component: BUSComponent},
  //{path:'availablebuses',component: AvailableBusesComponent},
  {path:'seats/:busID',component: SelectSeatsComponent},
  {path:'booking',component:BookingComponent},
  {path:'journeydetails',component:JourneyDetailsComponent},
  {path:'ticket',component:TicketComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
