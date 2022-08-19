import { Component, OnInit } from '@angular/core';
import { Ibook, Ibus, IbusId, Iroutept, ISeat, Isubmit } from '../models/bus';
import { DataService } from '../services/data.service';

import * as  alertyfy from 'alertifyjs';

@Component({
  selector: 'app-journey-details',
  templateUrl: './journey-details.component.html',
  styleUrls: ['./journey-details.component.css']
})
export class JourneyDetailsComponent implements OnInit {

  Date:any
  bus={} as IbusId;
  seat =[] as ISeat[];
  BookingData={} as Ibook;
  TotalAmount=0;
  Age=0;
  DiscountAmount=0;
  submit={} as Isubmit;
  BoardingPts={} as Iroutept;
  DropingPts={} as Iroutept; 

  constructor(private _dataService:DataService) { }

  ngOnInit(): void {
   this.seat =  JSON.parse( localStorage.getItem('selectedSeats') || "{}");
   this.BookingData=JSON.parse(localStorage.getItem('BookingForm')||"{}");
   this.bus = JSON.parse(localStorage.getItem('bus')||'{}');
   this.TotalAmount = JSON.parse(localStorage.getItem('TotalAmount')||"{}");
   this.Date = JSON.parse(localStorage.getItem('date')||"{}");
   this.BoardingPts=JSON.parse(localStorage.getItem('BoardingPoints')||'{}');
   this.DropingPts=JSON.parse(localStorage.getItem('DroppingPoints')||'{}');


   console.log(this.bus);
   console.log(this.bus.busID);
   console.log(this.BookingData);
   console.log(this.BookingData.PassengerName);

    this.Age=this.BookingData.Age;
    if(this.Age>60){
      this.DiscountAmount=this.TotalAmount-(0.2*this.TotalAmount);

    }
    else if (this.Age<12) {
      this.DiscountAmount=this.TotalAmount-(0.1*this.TotalAmount);
    }

    else {
      this.DiscountAmount=this.TotalAmount;
    }
  }

  PostData(obj:any){
    this._dataService.sendDataToWebApi("api/BusBooking/Booking",obj).subscribe({
      next: data => {
       // Alertify.success('Hello world!');
      
      },
      error: err => {
        console.log(err);
      },
      complete: () => console.log("completed")
    });
  }

  SubmitData(){
    this.seat.forEach((element:any) => {
      this.submit.UserID=1002;
  this.submit.TravelDate=this.Date;
  this.submit.Name=this.BookingData.PassengerName;
  this.submit.Age = this.BookingData.Age;
  this.submit.Gender=this.BookingData.Gender;
  this.submit.MobileNo=this.BookingData.MobileNumber;
  this.submit.BookingAmount=element.Price;
  this.submit.SeatNumber=element.name;
  this.submit.SeatType= element.Type;
  this.submit.BusID= this.bus.busID;
  this.submit.BoardingPoint=this.BoardingPts.routePoint;
  this.submit.DropingPoint=this.DropingPts.routePoint;

  this.PostData(this.submit);
    });
  alertyfy.success("Data Saved");

  

  }


  

}
