import { Component, OnInit } from '@angular/core';
import { dishclass } from "../resturant/dish";
import { DishService } from "../adminservice/dish.service";
@Component({
  selector: 'app-adddish',
  templateUrl: './adddish.component.html',
  styleUrls: ['./adddish.component.css']
})
export class AdddishComponent implements OnInit {

  constructor(public _data:DishService) { }
arrdish:dishclass[]=[];
dish_id:number;
dish_img: string;
  dish_name: string;
  dish_price:number;
  cusine_id:number;
selectedfile:File=null;
  onChange(value)
  {
    this.selectedfile =<File>value.target.files[0];
  }
  ngOnInit() {
  }
onadddish(){
  const fd=new FormData();

    fd.append('dish_name',this.dish_name);
    fd.append('dish_price',this.dish_price.toString());
    fd.append('image',this.selectedfile,this.selectedfile.name);
    fd.append('cusine_id',this.cusine_id.toString());
    this._data.adddish(fd).subscribe(
    (data:any)=>{
      console.log(data);
      alert("data add");
    }
  )
}
}
