import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";
import { user } from "../signup/user";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {


  public email_id: string;
  public password: string;
arr:user[]=[]
  constructor(private _xyz: UserService, private _route: Router) {}

  ngOnInit() {}
  forgetpass(){
    this._route.navigate(['forgotpass']);
  }

  login1() {
    this._xyz.login11(new user(this.email_id, this.password))
      .subscribe((data: user[]) => {
        console.log(data);
        if (data.length == 1)
         {
          localStorage.setItem('email_id',this.email_id);
         this._route.navigate(['resturant']);
        } else {
          alert("please enter password");

        }
        console.log(this.email_id);
      });
  }
}
