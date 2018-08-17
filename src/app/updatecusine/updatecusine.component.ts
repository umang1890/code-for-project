import { Component, OnInit } from '@angular/core';
import { CusineService } from "../adminservice/cusine.service";
import { cusines } from "../resturant/cusinesclass";
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-updatecusine',
  templateUrl: './updatecusine.component.html',
  styleUrls: ['./updatecusine.component.css']
})
export class UpdatecusineComponent implements OnInit {

  constructor(public _data:CusineService,public _ar:ActivatedRoute) { }
cusine_name:string;
cusine_id:number;
arrcusine:cusines[]=[];
  ngOnInit() {
   this.cusine_id=this._ar.snapshot.params['id'];
    console.log(this.cusine_id);
    this._data.getcusinebyid(this.cusine_id).subscribe(
      (data:cusines[])=>
      {
this.arrcusine=data;
 this.cusine_id=data[0].cusine_id;
 this.cusine_name=data[0].cusine_name;
      }
    )


  }
  onupdate(){
    this._data.updatecusine(new cusines(this.cusine_name,this.cusine_id)).subscribe(
      (data:any)=>{
alert("data is update");
      }
    )
    }

}
