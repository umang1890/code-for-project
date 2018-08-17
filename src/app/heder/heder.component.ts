import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { user } from '../signup/user';
@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.css']
})
export class HederComponent implements OnInit {
email_id:string;


  constructor(public _router:Router,public _rout:ActivatedRoute,public _abc:UserService) { }

view(){
  this._router.navigate(['viewprofile',this.email_id]);
}
changepass(){
  this._router.navigate(['changepassword',this.email_id]);
}
logout(){
  this._router.navigate(['login',this.email_id]);
}

  ngOnInit() {
  }

}
