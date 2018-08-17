import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { user } from '../signup/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {
email_id:string;
password:string;
arr:user[]=[]

constructor(public _abc:UserService,private _route:Router) { }




forgotpass(){
this._abc.databypass(new user(this.email_id,this.password)).subscribe(
  (data:any)=>{

    console.log(data);

    if(data.length>=1){
      this._route.navigate(['forgotpass',this.email_id]);
    }
    else
    alert("your email id or password is incorrect");
  }
);
}

  ngOnInit() {
  }

}
