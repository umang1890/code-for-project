import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { user } from "../signup/user";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-changepass",
  templateUrl: "./changepass.component.html",
  styleUrls: ["./changepass.component.css"]
})
export class ChangepassComponent implements OnInit {
  email_id: string;
  password: string;
  newpassword: string;
  confirmpassword: string;

  constructor(
    public _abc: UserService,
    public _route: Router,
    public rout: ActivatedRoute
  ) {}

  change() {
    this._abc.databypass(this.password).subscribe((data: any) => {
      console.log(data);
      if (data.lenght >= 1) {
        if (this.newpassword == this.confirmpassword) {
          this._abc.changepass(new user(this.email_id, this.newpassword)).subscribe((data: any) => {
              console.log(data);
              this._route.navigate(['']);
            });
        }
        else {
          alert("check new password and confirm password");
        }
      }
    });
  }

  ngOnInit() {
    this.email_id = this.rout.snapshot.params['email_id'];
  }
}
