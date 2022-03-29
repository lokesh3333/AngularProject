import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import {  IQuotes} from 'src/app/Shared/Modals/review.model';
import { ReviewService } from 'src/app/Shared/Services/review.service';
import { ModalDirective } from 'angular-bootstrap-md';
import { DatePipe } from '@angular/common';
import { now } from 'moment';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {  
  public QuoteModel: IQuotes = <IQuotes>{};

  public today: any;
  interval:any;
  constructor(private reviewService: ReviewService,
    private datePipe: DatePipe
    ) { }

  ngOnInit() {
    this.today=now();

    setInterval(()=> { 
      this.today=now();
     },  1000);
  }
  getWeather(){
     this.reviewService.getWeather().subscribe((response) => {
      if (response && response["successful"]) {
    
      } else {
      }
    });
  }
 

}
