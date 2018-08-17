import { Component, OnInit } from '@angular/core';
import { CusineService } from "../adminservice/cusine.service";
import { cusines } from "../resturant/cusinesclass";
import { Router } from "@angular/router";
@Component({
  selector: 'app-addcusine',
  templateUrl: './addcusine.component.html',
  styleUrls: ['./addcusine.component.css']
})
export class AddcusineComponent implements OnInit {

  constructor(public _route:Router ,public _data:CusineService) { }


  ngOnInit() {
  }
  cusine_id:number;
  cusine_name:string;
onback(){
  this._route.navigate(['adminside']);
}

insertcusine(){
 this._data.addcusine(new cusines(this.cusine_name)).subscribe(
   (data:any)=>{
console.log(data);
     alert("data add");
   }
 );
}
}
