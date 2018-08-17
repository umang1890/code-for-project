import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { user } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

email_id:string;
password:string;
user_name:string;
mobile_no:string;
city:string;
gender:string='male';
address:string;



  constructor(private _user:UserService,private _route:Router) { }

  ngOnInit() {
  }

signup(){

  this._user.signup(new user(this.email_id,this.password,this.user_name,this.mobile_no,this.city,this.gender,this.address)).subscribe(
    (data:any)=>{
      console.log(data);
this._route.navigate(['']);
    }
  );
}

}
