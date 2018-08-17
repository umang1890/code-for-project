import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { cusines } from "../resturant/cusinesclass";

@Injectable({
  providedIn: 'root'
})
export class CusineService {
cusineurl="http://localhost:3000/admincusine/";
  constructor(public _http:HttpClient) { }

  getallcusine(){
    return this._http.get(this.cusineurl);
  }
  addcusine(item:cusines){
    let a=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json')
    return this._http.post(this.cusineurl,a,{headers:h});
  }
  updatecusine(item:cusines){
    let a=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json')
    return this._http.put(this.cusineurl+item.cusine_id,a,{headers:h});

  }
  deletecusine(item:cusines){
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.cusineurl+item.cusine_id,{headers:h});
  }
  getcusinebyid(id){
    return this._http.get(this.cusineurl+id);
  }

}
