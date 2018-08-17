import { Component, OnInit } from '@angular/core';
import { PastorderService } from "../restuservice/pastorder.service";
import { orderdetailsclass } from './orderdetails';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {

  constructor(public _os:PastorderService,public _ar:ActivatedRoute) { }
id:number;
odarr:orderdetailsclass[]=[];
  ngOnInit() {
    this.id=this._ar.snapshot.params['id'];
   console.log(this.id);
    this._os.getorderdetails(this.id).subscribe(
      (data:any)=>{
        this.odarr=data;
      }
    )
  }
}
