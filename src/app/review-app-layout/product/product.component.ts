import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ReviewService } from 'src/app/Shared/Services/review.service';
import { ModalDirective } from 'angular-bootstrap-md';

// import CanvasJS from 'canvasjs';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  @ViewChild('PopUpModal', { static: false }) public PopUpModal: ModalDirective;
  @ViewChild('scrollMe', { static: false }) public scrollMe: ElementRef;
  @ViewChild('modalConfirmDelete', { static: false }) public modalConfirmDelete: ModalDirective;
  public loggedInuserDetails: any = [];

  public SelectProdSubscription: Subscription;
  public InsertProdSubscription: Subscription;
  public unsuccessmsg: string;
  public successmsg: string;
  public Page: string;
  public Data: any[];
  Deaths: string[];
  Recovered: string[];
  Active: string[];
  Confirmed: string[];
  State: string[];
  Deaths_s:any;
  Recovered_s:any;
  Active_s:any;
  Confirmed_s:any;   
  // public barChartOptions: ChartOptions = {
  //   responsive: true,
  // };
  // public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  // public barChartType: ChartType = 'bar';
  // public barChartLegend = true;
  // public barChartPlugins = [];

  // public barChartData: ChartDataSets[] = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  // ];
  imageSrc: any;

  constructor(private reviewService: ReviewService, public _router: Router) {
    this.Page = "Home";
  }

  ngOnInit() {
    // this.loggedInuserDetails = JSON.parse(localStorage.getItem('currentUser'));
    // this.loggedInuserDetails = this.loggedInuserDetails ? this.loggedInuserDetails[0] : null;

     this.Page = "Home";
    
     this.Confirmed_s=  27451 ;
     this.Active_s=  20381 ;
     this.Recovered_s=  6214 ;
     this.Deaths_s=  856 ;

    this.State = [
      "Maharashtra",
      "Gujarat",
      "Delhi",
      "Rajasthan",
      "Madhya Pradesh",
      "Tamil Nadu",
      "Uttar Pradesh",
      "Andhra Pradesh",
      "Telangana",
      "West Bengal",
      "Karnataka",
      "Jammu and Kashmir",
      "Kerala",
      "Punjab",
      "Haryana",
      "Bihar",
      "Odisha",
      "Jharkhand",
      "Uttarakhand",
      "Himachal Pradesh",
      "Chhattisgarh",
      "Assam",
      "Andaman and Nicobar Islands",
      "Chandigarh",
      "Ladakh",
      "Meghalaya",
      "Puducherry",
      "Goa",
      "Manipur",
      "Tripura",
      "Mizoram",
      "Arunachal Pradesh",
      "Nagaland",
      "Dadra and Nagar Haveli",
      "Daman and Diu",
      "Lakshadweep",
      "Sikkim"
    ];
    this.Confirmed = [
      "8068",
      "3301",
      "2625",
      "2152",
      "2090",
      "1885",
      "1793",
      "1097",
      "990",
      "611",
      "503",
      "523",
      "469",
      "313",
      "287",
      "274",
      "103",
      "82",
      "50",
      "40",
      "37",
      "36",
      "33",
      "36",
      "20",
      "12",
      "8",
      "7",
      "2",
      "2",
      "1",
      "1",
      "0",
      "0",
      "0",
      "0",
      "0"
    ];
    this.Active = [
      "6608",
      "2886",
      "1702",
      "1603",
      "1685",
      "841",
      "1503",
      "835",
      "658",
      "488",
      "302",
      "379",
      "123",
      "211",
      "93",
      "216",
      "68",
      "66",
      "24",
      "16",
      "5",
      "8",
      "22",
      "19",
      "4",
      "11",
      "4",
      "0",
      "0",
      "0",
      "1",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0"
    ];
    this.Recovered = [
      "1118",
      "282",
      "869",
      "513",
      "302",
      "1020",
      "261",
      "231",
      "307",
      "105",
      "182",
      "137",
      "342",
      "84",
      "191",
      "56",
      "34",
      "13",
      "26",
      "22",
      "32",
      "27",
      "11",
      "17",
      "16",
      "0",
      "4",
      "7",
      "2",
      "2",
      "0",
      "1",
      "0",
      "0",
      "0",
      "0",
      "0"
    ];
    this.Deaths = [
      "342",
      "133",
      "54",
      "36",
      "103",
      "24",
      "29",
      "31",
      "25",
      "18",
      "19",
      "7",
      "4",
      "18",
      "3",
      "2",
      "1",
      "3",
      "0",
      "2",
      "0",
      "1",
      "0",
      "0",
      "0",
      "1",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0"
    ];
  
  this.Data=[
    {'State':this.State[0],'Confirmed':this.Confirmed[0],'Active':this.Active[0],'Recovered':this.Recovered[0],'Deaths':this.Deaths[0]},
    {'State':this.State[1],'Confirmed':this.Confirmed[1],'Active':this.Active[1],'Recovered':this.Recovered[1],'Deaths':this.Deaths[1]},
    {'State':this.State[2],'Confirmed':this.Confirmed[2],'Active':this.Active[2],'Recovered':this.Recovered[2],'Deaths':this.Deaths[2]},
    {'State':this.State[3],'Confirmed':this.Confirmed[3],'Active':this.Active[3],'Recovered':this.Recovered[3],'Deaths':this.Deaths[3]},
    {'State':this.State[4],'Confirmed':this.Confirmed[4],'Active':this.Active[4],'Recovered':this.Recovered[4],'Deaths':this.Deaths[4]},
    {'State':this.State[5],'Confirmed':this.Confirmed[5],'Active':this.Active[5],'Recovered':this.Recovered[5],'Deaths':this.Deaths[5]},
    {'State':this.State[6],'Confirmed':this.Confirmed[6],'Active':this.Active[6],'Recovered':this.Recovered[6],'Deaths':this.Deaths[6]},
    {'State':this.State[7],'Confirmed':this.Confirmed[7],'Active':this.Active[7],'Recovered':this.Recovered[7],'Deaths':this.Deaths[7]},
    {'State':this.State[8],'Confirmed':this.Confirmed[8],'Active':this.Active[8],'Recovered':this.Recovered[8],'Deaths':this.Deaths[8]},
    {'State':this.State[9],'Confirmed':this.Confirmed[9],'Active':this.Active[9],'Recovered':this.Recovered[9],'Deaths':this.Deaths[9]},
    {'State':this.State[10],'Confirmed':this.Confirmed[10],'Active':this.Active[10],'Recovered':this.Recovered[10],'Deaths':this.Deaths[10]},
    {'State':this.State[11],'Confirmed':this.Confirmed[11],'Active':this.Active[11],'Recovered':this.Recovered[11],'Deaths':this.Deaths[11]},
    {'State':this.State[12],'Confirmed':this.Confirmed[12],'Active':this.Active[12],'Recovered':this.Recovered[12],'Deaths':this.Deaths[12]},
    {'State':this.State[13],'Confirmed':this.Confirmed[13],'Active':this.Active[13],'Recovered':this.Recovered[13],'Deaths':this.Deaths[13]},
    {'State':this.State[14],'Confirmed':this.Confirmed[14],'Active':this.Active[14],'Recovered':this.Recovered[14],'Deaths':this.Deaths[14]},
    {'State':this.State[15],'Confirmed':this.Confirmed[15],'Active':this.Active[15],'Recovered':this.Recovered[15],'Deaths':this.Deaths[15]},
    {'State':this.State[16],'Confirmed':this.Confirmed[16],'Active':this.Active[16],'Recovered':this.Recovered[16],'Deaths':this.Deaths[16]},
    {'State':this.State[17],'Confirmed':this.Confirmed[17],'Active':this.Active[17],'Recovered':this.Recovered[17],'Deaths':this.Deaths[17]},
    {'State':this.State[18],'Confirmed':this.Confirmed[18],'Active':this.Active[18],'Recovered':this.Recovered[18],'Deaths':this.Deaths[18]},
    {'State':this.State[19],'Confirmed':this.Confirmed[19],'Active':this.Active[19],'Recovered':this.Recovered[19],'Deaths':this.Deaths[19]},
    {'State':this.State[20],'Confirmed':this.Confirmed[20],'Active':this.Active[20],'Recovered':this.Recovered[20],'Deaths':this.Deaths[20]},
    {'State':this.State[21],'Confirmed':this.Confirmed[21],'Active':this.Active[21],'Recovered':this.Recovered[21],'Deaths':this.Deaths[21]},
    {'State':this.State[22],'Confirmed':this.Confirmed[22],'Active':this.Active[22],'Recovered':this.Recovered[22],'Deaths':this.Deaths[22]},
    {'State':this.State[23],'Confirmed':this.Confirmed[23],'Active':this.Active[23],'Recovered':this.Recovered[23],'Deaths':this.Deaths[23]},
    {'State':this.State[24],'Confirmed':this.Confirmed[24],'Active':this.Active[24],'Recovered':this.Recovered[24],'Deaths':this.Deaths[24]},
    {'State':this.State[25],'Confirmed':this.Confirmed[25],'Active':this.Active[25],'Recovered':this.Recovered[25],'Deaths':this.Deaths[25]},
    {'State':this.State[26],'Confirmed':this.Confirmed[26],'Active':this.Active[26],'Recovered':this.Recovered[26],'Deaths':this.Deaths[26]},
    {'State':this.State[27],'Confirmed':this.Confirmed[27],'Active':this.Active[27],'Recovered':this.Recovered[27],'Deaths':this.Deaths[27]},
    {'State':this.State[28],'Confirmed':this.Confirmed[28],'Active':this.Active[28],'Recovered':this.Recovered[28],'Deaths':this.Deaths[28]},
    {'State':this.State[29],'Confirmed':this.Confirmed[29],'Active':this.Active[29],'Recovered':this.Recovered[29],'Deaths':this.Deaths[29]},
    {'State':this.State[30],'Confirmed':this.Confirmed[30],'Active':this.Active[30],'Recovered':this.Recovered[30],'Deaths':this.Deaths[30]},
    {'State':this.State[31],'Confirmed':this.Confirmed[31],'Active':this.Active[31],'Recovered':this.Recovered[31],'Deaths':this.Deaths[31]},
    {'State':this.State[32],'Confirmed':this.Confirmed[32],'Active':this.Active[32],'Recovered':this.Recovered[32],'Deaths':this.Deaths[32]},
    {'State':this.State[33],'Confirmed':this.Confirmed[33],'Active':this.Active[33],'Recovered':this.Recovered[33],'Deaths':this.Deaths[33]},
    {'State':this.State[34],'Confirmed':this.Confirmed[34],'Active':this.Active[34],'Recovered':this.Recovered[34],'Deaths':this.Deaths[34]},
    {'State':this.State[35],'Confirmed':this.Confirmed[35],'Active':this.Active[35],'Recovered':this.Recovered[35],'Deaths':this.Deaths[35]},
    {'State':this.State[36],'Confirmed':this.Confirmed[36],'Active':this.Active[36],'Recovered':this.Recovered[36],'Deaths':this.Deaths[36]}
    
  ];
 
  


  }




  scrollToBottom = () => {
    try {
      this.scrollMe.nativeElement.scrollTop = this.scrollMe.nativeElement.scrollHeight;
    } catch (err) { }
  }



  closePopUpModal() {
    this.PopUpModal.hide();
  }



  logout() {
    localStorage.removeItem('isLoggedin');
    localStorage.removeItem('LoggedinUser');
    this._router.navigate(['/review/product']);
    localStorage.clear();
    this.loggedInuserDetails = [];
    this.ngOnInit();
  }

  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent) {
    this.successmsg = '';
    this.unsuccessmsg = '';
  }

  //*****unique id corresponding to the item*****//
  trackByFn(item) {
    return item.id;
  }

  ngOnDestroy() {
    this.SelectProdSubscription ? this.SelectProdSubscription.unsubscribe() : null;
    this.InsertProdSubscription ? this.InsertProdSubscription.unsubscribe() : null;
  }




}
