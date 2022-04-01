import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ReviewService } from 'src/app/Shared/Services/review.service';
import { now } from 'moment';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  public today: any;
  interval: any;
  OpenSideNav: boolean;
  MenuItems: string[];
  Page: string;
  Temp: any;
  MinTemp: any;
  MaxTemp: any;
  FeelTemp: any;

  constructor(private reviewService: ReviewService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.today = now();
    this.MenuItems = ["About Us", "Our Services", "Our Customers"];
    this.OpenSideNav = false;
    this.Page = "Home";


    setInterval(() => {
      this.today = now();
    }, 1000);
  }

  changePage(page) {
    this.Page = page;
    this.OpenSideNav = false;
  }

  toggle() {
    if (this.OpenSideNav) {
      this.OpenSideNav = false;
    } else {
      this.OpenSideNav = true;
    }
  }


  getWeather() {
    this.reviewService.getWeather().subscribe((response) => {
      if (response) {
        this.Temp = response['main']['temp'];
        this.MinTemp = response['main']['temp_min'];
        this.MaxTemp = response['main']['temp_max'];
        this.FeelTemp = response['main']['feels_like'];


      } else {
      }
    });
  }


}
