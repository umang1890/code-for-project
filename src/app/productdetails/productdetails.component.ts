import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { product } from '../product/product';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {


  p_id:number;
  p_name:string;
  p_price:number;
  image:string;
  cid:number;
  similer:product[]=[];
  constructor(public _data:ProductService,public _router:Router,public ar:ActivatedRoute) { }

  onsimilercilck(item:product){
    this._router.navigate(['/product_details',item.p_id])
  }

  ngOnInit() {

    this.ar.params.subscribe(
      (x:Params)=>{
        this.p_id=x['id'];
        console.log(x);
        console.log(this.p_id);

        this._data.getproductbyproductid(this.p_id).subscribe(
          (data:product[])=>{
            this.p_name=data[0].p_name;
            this.cid=data[0].cid;
            this.image=data[0].image;
            this.p_price=data[0].p_price;

            this._data.getproductbycatid(this.cid,this.p_id).subscribe(
              (data:product[])=>{

                this.similer=data;

              }

            );
          }
        );
      }
    );
  }

}
