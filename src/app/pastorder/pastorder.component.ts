import { Component, OnInit } from '@angular/core';
import { PastorderService } from '../restuservice/pastorder.service';
import { billclass } from '../resturant/bill';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pastorder',
  templateUrl: './pastorder.component.html',
  styleUrls: ['./pastorder.component.css']
})
export class PastorderComponent implements OnInit {

  constructor(public _ps:PastorderService,public _route:Router,public _ac:ActivatedRoute) { }
id:string;
pastarr:billclass[]=[];
no:string;
  ngOnInit() {

    this._ps.getpastorder(localStorage.getItem('email_id')).subscribe(
      (data:any)=>{
      //  console.log(data);
     this.pastarr=data;

      }
    );
  }

 pastorderdet(item:billclass){
   console.log(item);
   this._route.navigate(['/pastorderdetails',item.bill_id]);
 }

}
