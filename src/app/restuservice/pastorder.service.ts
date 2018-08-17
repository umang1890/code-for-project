import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class PastorderService {

  pastorderurl:string="http://localhost:3000/pastorder/";
  orderdetailsurl:string="http://localhost:3000/orderdetail/";
  constructor(public _http:HttpClient) { }
  getpastorder(id){
    return this._http.get(this.pastorderurl+id);
  }
  getorderdetails(id)
  {
    return this._http.get(this.orderdetailsurl+id);
  }
}
