import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FileAttachment } from 'src/app/Shared/Components/file-upload/file-attachment.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

 public API="b921d4e3092482d3b460e22ec2c02694"

  constructor(private http: HttpClient) { }

  /////////////////////////// Authorization ///////////////////////////



  signUp = (AuthModel) => {
    const url = `http://sad2fun.in/php/API/Authentication.php?input=signup&UserName=${AuthModel.UserName}&Email=${AuthModel.Email}&Password=${AuthModel.Password}&CreatedOn=${AuthModel.CreatedOn}&CreatedOn_Local=${AuthModel.CreatedOn_Local}&Timestamp=${AuthModel.Timestamp}&ReferralCode=${AuthModel.ReferralCode}&TimeZone=${AuthModel.TimeZone}&UTC=${AuthModel.UTC}`;
    console.log(url);
    return this.http.get(url, this.jwt()).pipe(map(x => x));
  }



      // 

  // getWeather= () => {
  //   const url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${this.API}`;
  //   return this.http.get(url, this.jwt()).pipe(map(x => x));
  // }

  

  getWeather= () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?id=6167863&units=metric&appid=${this.API}`;
    return this.http.get(url, this.jwt()).pipe(map(x => x));
  }

 ///////////////////////////





  //////////////////////////////////////////////
  public jwt() {
    if (localStorage.getItem('currentUser') && JSON.parse(localStorage.getItem('currentUser'))) {
      return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token
        })
      }
    }
  }



}


