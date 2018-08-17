import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validdemo',
  templateUrl: './validdemo.component.html',
  styleUrls: ['./validdemo.component.css']
})
export class ValiddemoComponent implements OnInit {

  email_id:string;
password:string;
user_name:string;
mobile_no:string;
city:string;
gender:string='male';
address:string;

  constructor() { }
  onsign()
  {

  }
  ngOnInit() {
  }

}
