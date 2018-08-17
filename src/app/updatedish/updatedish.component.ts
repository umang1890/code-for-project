import { Component, OnInit } from '@angular/core';
import { DishService } from "../adminservice/dish.service";
import { dishclass } from "../resturant/dish";
import { Router,ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-updatedish',
  templateUrl: './updatedish.component.html',
  styleUrls: ['./updatedish.component.css']
})
export class UpdatedishComponent implements OnInit {

  constructor(public _data:DishService,public _ar:ActivatedRoute) { }
dish_id:number;
dish_name:string;
dish_price:number;
cusine_id:number;
arrdish:dishclass[]=[];
  ngOnInit() {
    this.dish_id=this._ar.snapshot.params['id'];
    this._data.getdishbyid(this.dish_id).subscribe(
      (data:dishclass[])=>{
        this.arrdish=data;
        //this.dish_id=data[0].dish_id;
        this.dish_name=data[0].dish_name;
        this.dish_price=data[0].dish_price;

        //this.cusine_id=data[0].cusine_id;
      }
    )

  }

}
