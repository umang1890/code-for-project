import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { cusines } from '../resturant/cusinesclass';
@Injectable({
  providedIn: 'root'
})
export class CusinesService {

url:string="http://localhost:3000/cusinename/";
urldish:string="http://localhost:3000/dishname/";
usrldishbyid:string="http://localhost:3000/dishnamebyid/";

//billtbl
urlbill:string="http://localhost:3000/billtbl";
urlbilldetails:string="http://localhost:3000/billdetails";



  constructor(public _http:HttpClient) { }

  getbill()
  {
    return this._http.get(this.urlbill);
  }
  addbill(item)
  {
    let body=JSON.stringify(item);
    let billhead=new HttpHeaders().set('Content-Type','application/json');
     return this._http.post(this.urlbill,body,{headers:billhead});

  }
  addbilldetails(item){
    let body=JSON.stringify(item);

    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.urlbilldetails,body,{headers:head});
  }
getallcusines()
{
  return this._http.get(this.url);

}

getdishbydishid(id:number){

  return this._http.get(this.usrldishbyid+id);
}
getalldish()
{
  return this._http.get(this.urldish);
}
 getdishbydishname(name:string){
  return this._http.get(this.urldish+"/"+name);
   }

}
