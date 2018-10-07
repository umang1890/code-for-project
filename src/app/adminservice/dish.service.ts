import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { dishclass } from "../resturant/dish";
@Injectable({
  providedIn: 'root'
})
export class DishService {

dishurl:string="http://localhost:3000/admindish/";

  constructor(public _http:HttpClient) { }
  getalldish(){
   return this._http.get(this.dishurl);
  }
  adddish(dishclass:FormData){
     return this._http.post(this.dishurl,dishclass);

  }
  deletedish(item:dishclass){
    return this._http.delete(this.dishurl+item.dish_id);
  }
updatedish(item:dishclass){
  let body=JSON.stringify(item);
  let h=new HttpHeaders().set('Content-Type','application/json')
  return this._http.put(this.dishurl+item.dish_id,body,{headers:h});
}

  getdishbyid(id){
    return this._http.get(this.dishurl+id);
  }
}
