import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { user } from '../signup/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

url:string='http://localhost:3000/'
url1:string=''
  constructor(public _http:HttpClient) { }

signup(item:user){
  let a=JSON.stringify(item);
  let h=new HttpHeaders().set('Content-Type','application/json')
  return this._http.post(this.url+"signup/",a,{headers:h});
}
login11(item:user){
  let body=JSON.stringify(item);
  let h=new HttpHeaders().set('Content-Type','application/json')
  return this._http.post(this.url+"login/",body,{headers:h});
}

updateuser(item:user){
  let body=JSON.stringify(item);
  let h=new HttpHeaders().set('Content-Type','application/json')
  return this._http.put(this.url+"login/"+item.email_id,body,{headers:h});
}

changepass(item:user){
  let body=JSON.stringify(item);
  let h=new HttpHeaders().set('Content-Type','application/json')
  return this._http.put(this.url+"login/"+item.email_id,body,{headers:h});
}

databypass(id){
  return this._http.get(this.url+"signup/"+id);
}

getdatabyid(id){
  return this._http.get(this.url+"login/"+id);
}
getalldata(){
  return this._http.get(this.url);
}



}
