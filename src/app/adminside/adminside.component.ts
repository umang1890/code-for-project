import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-adminside',
  templateUrl: './adminside.component.html',
  styleUrls: ['./adminside.component.css']
})
export class AdminsideComponent implements OnInit {

  constructor(public _route:Router) { }

  ngOnInit() {
  }
  onadddish(){
    this._route.navigate(['adddish']);
  }
  onback(){
    this._route.navigate(['resturant']);
  }
onaddcusine(){
  this._route.navigate(['addcusine']);
}
ondispalycusine(){
  this._route.navigate(['allcusine']);
}
ondisplaydish(){
  this._route.navigate(['alldish']);

}
}
