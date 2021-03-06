import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  public API = "b921d4e3092482d3b460e22ec2c02694"

  constructor(private http: HttpClient) { }

  getWeather = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?id=6167863&units=metric&appid=${this.API}`;
    return this.http.get(url, this.jwt()).pipe(map(x => x));
  }

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


