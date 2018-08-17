import { Component, OnInit } from '@angular/core';
import { DishService } from "../adminservice/dish.service";
import { Router } from "@angular/router";
import { dishclass } from "../resturant/dish";
@Component({
  selector: 'app-alldish',
  templateUrl: './alldish.component.html',
  styleUrls: ['./alldish.component.css']
})
export class AlldishComponent implements OnInit {

  arrdish:dishclass[]=[];
  constructor(public _data:DishService,public _route:Router) { }
dish_id:number;
  ngOnInit() {
    this._data.getalldish().subscribe(
      (data:dishclass[])=>{
        this.arrdish=data;
      }
    )


  }
  updatedish(item:dishclass){

this._route.navigate(['updatedish',item.dish_id])
  }
  ondeletedish(item:dishclass){
    this._data.deletedish(item).subscribe(
      (data:any)=>{
        alert("data is delete");
      }
    )
  }

}
