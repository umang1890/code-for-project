import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "../services/product.service";
import { product } from "../product/product";
import { category } from "./cat";
import { CatService } from '../services/cat.service';
import { Cat_Product } from "./cat_product_model";
@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  email_id: string;

  p_id: number;

  p_name: string;
  p_price: number;
  image: string;
  cid: number;
c_name:string;
  flag:boolean=false;
  flag1:boolean=true;

arr1:category[]=[];
arr: product[]=[];

  constructor(
    public _route: ActivatedRoute,
    public _router: Router,
    public _abc: ProductService,
    public _cat:CatService
  ) {}


  ngOnInit() {
    this._cat.getAllcat().subscribe(
      (data:category[])=>{
        this.arr1=data;
      }
    );

    this._abc.productview().subscribe(
      (data: product[]) => {
      console.log(data);
      this.arr = data;
     }
    );
  }

  onAllclick(){
    this._abc.productview().subscribe(
      (data:product[])=>{
        console.log(data);
        this.arr=data;
      }
    );
  }

oncatclick(item:category){
  this._abc.getproductbycatname(item.cname).subscribe(
    (data:Cat_Product[])=>{
      this.arr=data;
    }
  );
}



// cat(){
//    this._abc.productjoin().subscribe(
//    (data:any)=>{
//        console.log(data);
//        this.arr=data;
//      }
//    );

// }

onproductview(item:product){

  this._router.navigate(["/prodetails",item.p_id]);

}
}


