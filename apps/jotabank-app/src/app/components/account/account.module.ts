import {NgModule} from "@angular/core";
import {AccountComponent} from "./component/account.component";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AccountRoutingModule} from "./account-routing.module";
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";

@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AccountRoutingModule,
    MenubarModule,
    InputTextModule
  ],
  exports: [
    AccountComponent
  ]
})
export class AccountModule {

}
