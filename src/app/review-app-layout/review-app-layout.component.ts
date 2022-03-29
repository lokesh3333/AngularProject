import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-app-layout',
  templateUrl: './review-app-layout.component.html',
  styleUrls: ['./review-app-layout.component.scss']
})
export class ReviewAppLayoutComponent implements OnInit {
  public data: string[] = [];
  public loggedInuserDetails: any = [];

  constructor(private router: Router) { }

  ngOnInit() {
    // this.loggedInuserDetails = JSON.parse(localStorage.getItem('currentUser'));

    
  }
}
