import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SelectSeatsComponent } from './select-seats/select-seats.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BUSComponent } from './bus/bus.component';
import { BookingComponent } from './booking/booking.component';
import { JourneyDetailsComponent } from './journey-details/journey-details.component';
import { TicketComponent } from './ticket/ticket.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectSeatsComponent,
    HeaderComponent,
    FooterComponent,
    BUSComponent,
    BookingComponent,
    JourneyDetailsComponent,
    TicketComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2OrderModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
