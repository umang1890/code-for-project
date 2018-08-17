import { Component, OnInit } from "@angular/core";
import { cusines } from "./cusinesclass";
import { CusinesService } from "../restuservice/cusines.service";
import { dishclass } from "./dish";
import { billclass } from "./bill";
import { cudishclass } from "./cudish";
import { billdetailsclass } from "./billdetails";
import { billtbldetclass } from "./billtbldet";
import { Router } from '@angular/router';
@Component({
  selector: "app-resturant",
  templateUrl: "./resturant.component.html",
  styleUrls: ["./resturant.component.css"]
})
export class ResturantComponent implements OnInit {
  constructor(public _data: CusinesService,public _route:Router) {}
  diaharr: dishclass[] = [];
  arr: cusines[] = [];
  cudish: cudishclass[] = [];
  qty: number[] = [];

  bdarr: billdetailsclass[] = [];
  billtbldetarr: billtbldetclass[] = [];

  itemnamearr: cudishclass[] = [];
  qtyarr: number[] = [];
  pricearr: number[] = [];

 dish_id: number = 1;
  i: number;
  cusine_name: string;

  dish_img: string;
  dish_name: string;
  totalprice: number = 0;
email_id:string;
  ngOnInit() {
    this._data.getallcusines().subscribe((data: cusines[]) => {
      this.arr = data;
    });


// console.log(this.email_id);
    this._data.getdishbydishname("pizza").subscribe((data: cudishclass[]) => {

      this.cudish = data;
    });

    for (this.i=1; this.i <= 100; this.i++) {
      this.qtyarr.push(this.i);
    }
  }
  onadmin(){
    this._route.navigate(['/admin']);
  }
  onclickpast()
  {
    this._route.navigate(['/pastorder']);
  }
  updateqty(item, i) {
    this.totalprice -= this.pricearr[i];
    this.pricearr[i] = this.qty[i] * item.dish_price;
    this.totalprice += this.pricearr[i];
  }
  onclick(name) {
    this._data.getdishbydishname(name).subscribe((data: cudishclass[]) => {
      this.cudish = data;
    });
  }

  ondishselect(item) {
    this.itemnamearr.push(item);
    this.qtyarr.push(1);
    this.pricearr.push(item.dish_price);
    this.totalprice += item.dish_price;
  }

  ondelete(i) {
    this.totalprice -= this.pricearr[i];
    this.itemnamearr.splice(i, 1);
    this.pricearr.splice(i, 1);
    this.qty.splice(i,1);
   }
   onpayment(){
     this._data.addbill(new billclass(this.totalprice,localStorage.getItem('email_id'))).subscribe(
       (data:any)=>{
         console.log(data);
         for(this.i=0;this.i<this.itemnamearr.length;this.i++){

           console.log(data.insertId);
           console.log(this.itemnamearr[this.i].dish_id,this.qty[this.i],this.pricearr[this.i],data.insertId);
           this.bdarr.push(new billdetailsclass(this.itemnamearr[this.i].dish_id,this.qtyarr[this.i],this.pricearr[this.i],data.insertId));

          }

         this._data.addbilldetails(this.bdarr).subscribe(
           (data:any)=>{
           //  console.log(data);
             alert("record add");
             this.itemnamearr.splice(0,this.itemnamearr.length);
             this.pricearr.splice(0,this.pricearr.length);
             this.qtyarr.splice(0,this.qtyarr.length);
             this.totalprice=0;

           }
         );
       }

     )
   }

}
