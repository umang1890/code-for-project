import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { routing } from './app.routing';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { ProductComponent } from './product/product.component';
import { HederComponent } from './heder/heder.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ResturantComponent } from './resturant/resturant.component';
import { PastorderComponent } from './pastorder/pastorder.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { ValiddemoComponent } from './validdemo/validdemo.component';
import { AdminsideComponent } from './adminside/adminside.component';
import { CraditDirective } from './cradit.directive';
import { CareditcardComponent } from './careditcard/careditcard.component';
import { AddcusineComponent } from './addcusine/addcusine.component';
import { AllcusineComponent } from './allcusine/allcusine.component';
import { AlldishComponent } from './alldish/alldish.component';
import { UpdatecusineComponent } from './updatecusine/updatecusine.component';
import { AdddishComponent } from './adddish/adddish.component';
import { UpdatedishComponent } from './updatedish/updatedish.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { MaterialdemoComponent } from './materialdemo/materialdemo.component';
import { MatButtonModule,MatIconModule, MatFormFieldModule,MatCheckbox, MatCheckboxModule, MatRadioGroupBase, MatRadioModule } from "@angular/material";



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ViewprofileComponent,
    EditprofileComponent,
    ChangepassComponent,
    ForgotpassComponent,
    ProductComponent,
    HederComponent,
    ProductdetailsComponent,
    ResturantComponent,
    PastorderComponent,
    OrderdetailsComponent,
    ValiddemoComponent,
    AdminsideComponent,
    CraditDirective,
    CareditcardComponent,
    AddcusineComponent,
    AllcusineComponent,
    AlldishComponent,
    UpdatecusineComponent,
    AdddishComponent,
    UpdatedishComponent,
    MaterialdemoComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    MatButtonModule,MatIconModule,MatInputModule, MatFormFieldModule,MatCheckboxModule,MatRadioModule



  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
