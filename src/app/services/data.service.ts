import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  WebApiUrl = environment.WebAPIUrl;
 // ApiUrl = environment.ApiUrl;  

 BusID:any;
  journey:any;
  origin: any;
  destination:any;
  TravelDate:any;

  constructor(private _http: HttpClient) { }

  getDataFromWebApi(url: string) {
    //let headers = new HttpHeaders().append("Authorization", "bearer token");
    //return this._http.get(`${this.WebApiUrl}${url}`, { headers: headers });
    return this._http.get(`${this.WebApiUrl}${url}`);
}
getOrigins(url:string){
  return this._http.get(`${this.WebApiUrl}${url}`);
}
getBusDetailswebApi(url:string,Object:any,Object1:any){
  const params = new HttpParams()
  .set('origin', Object)
  .set('destination', Object1);
  return this._http.get(`${this.WebApiUrl}${url}`,{params});
}
getBusById(url:string,Object:any){
  const params = new HttpParams()
  .set('BusID',Object);
  return this._http.get(`${this.WebApiUrl}${url}`,{params});
}

getBookingDetails(BusID:number,TravelDate:string)
{ 
  const url = "api/BusBooking/GetBooking?BusID="
  return this._http.get(`${this.WebApiUrl}${url}${BusID}&TravelDate=${TravelDate}`);
}

sendDataToWebApi(url:string, obj:any){
  return this._http.post(`${this.WebApiUrl}${url}`, obj);
}

// getBusesByOD(url:string){
//   let params1 = new HttpParams().set('origin','org');
//   let params2 = new HttpParams().set('destination','des')
//   return this._http.get(`${this.WebApiUrl}${url}`);
// }
getRoutePointsWebApi(url:string,Object5:any,Object6:any,Object4:any){
  const params = new HttpParams()
  .set('origin', Object5)
  .set('destination', Object6)
  .set('BusID',Object4);
  return this._http.get(`${this.WebApiUrl}${url}`,{params});
}

}

// getJourneyObject(){
//   return this.journey;
// }


