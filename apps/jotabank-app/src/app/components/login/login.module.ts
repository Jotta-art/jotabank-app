import {NgModule} from "@angular/core";
import {LoginComponent} from "./component/login.component";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoginRoutingModule} from "./component/login-routing.module";
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    LoginRoutingModule,
    ButtonModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule {

}
