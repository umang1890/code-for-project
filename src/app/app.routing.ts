import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { PastorderComponent } from './pastorder/pastorder.component';
import { ResturantComponent } from './resturant/resturant.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { AdminsideComponent } from './adminside/adminside.component';
import { AddcusineComponent } from './addcusine/addcusine.component';
import { AllcusineComponent } from './allcusine/allcusine.component';
import { AlldishComponent } from './alldish/alldish.component';
import { UpdatecusineComponent } from './updatecusine/updatecusine.component';
import { AdddishComponent } from './adddish/adddish.component';
import { UpdatedishComponent } from './updatedish/updatedish.component';



 const arr:Routes=[
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'viewprofile',component:ViewprofileComponent},
  {path:'changepass',component:ChangepassComponent},
  {path:'editprofile',component:EditprofileComponent},
  {path:'forgotpass',component:ForgotpassComponent},
  {path:'product',component:ProductComponent},
{path:'prodetails/:id',component:ProductdetailsComponent},
{path:'product_details/:id',component:ProductdetailsComponent},
{path:'pastorder',component:PastorderComponent},
{path:'resturant',component:ResturantComponent},
{path:'pastorderdetails/:id',component:OrderdetailsComponent},
{path:'admin',component:AdminsideComponent},
{path:'addcusine',component:AddcusineComponent},
{path:'adminside',component:AdminsideComponent},
{path:'allcusine',component:AllcusineComponent},
{path:'alldish',component:AlldishComponent},
{path:'updatecusine/:id',component:UpdatecusineComponent},
{path:'adddish',component:AdddishComponent},
{path:'updatedish/:id',component:UpdatedishComponent}



];
export const routing = RouterModule.forRoot(arr);
