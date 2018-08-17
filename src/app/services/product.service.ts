import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { product } from '../product/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
url:string="http://localhost:3000/product/";
prourl:string="http://localhost:3000/prodetails/";
similerurl:string="http://localhost:3000/prod_catid/";

constructor(public _http:HttpClient) { }



getproductbyproductid(id:number){
  return this._http.get(this.prourl+id);
}
getproductbycatname(c_name:string){
  return this._http.get(this.url+c_name);
}

  productview(){
    return this._http.get(this.url);
  }
  getproductbycatid(cid:number,p_id:number){
  return this._http.get(this.similerurl+cid+"/"+p_id);
  }
}
