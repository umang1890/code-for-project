import { Component, OnInit } from '@angular/core';
import { CusineService } from "../adminservice/cusine.service";
import { Router } from "@angular/router";
import { cusines } from "../resturant/cusinesclass";
import { AlertPromise } from '../../../node_modules/@types/selenium-webdriver';
@Component({
  selector: 'app-allcusine',
  templateUrl: './allcusine.component.html',
  styleUrls: ['./allcusine.component.css']
})
export class AllcusineComponent implements OnInit {

  constructor(public _data:CusineService,public _route:Router) { }
cusinearr:cusines[]=[];
cusine_id:number;
  ngOnInit() {
    this._data.getallcusine().subscribe(
      (data:cusines[])=>
      {
this.cusinearr=data;
      }
    )
  }

  updatecusine(item:cusines){

    this._route.navigate(['updatecusine',item.cusine_id]);
  }


  ondelete(item:cusines){
    this._data.deletecusine(item).subscribe(
      (data:cusines)=>
      {
alert("data delete");
      }

    )
  }

}
