import {NgModule} from "@angular/core";
import {RegisterComponent} from "./component/register.component";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CardModule} from "primeng/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ChipsModule} from "primeng/chips";
import {ButtonModule} from "primeng/button";
import {RouterLink} from "@angular/router";
import {RegisterRoutingModule} from "./register-routing.module";

@NgModule({
  declarations: [
    RegisterComponent
  ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        CardModule,
        FormsModule,
        ChipsModule,
        ButtonModule,
        RouterLink,
        RegisterRoutingModule,
        ReactiveFormsModule
    ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule {

}

