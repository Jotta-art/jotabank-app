import {NgModule} from "@angular/core";
import {AccountComponent} from "./component/account.component";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AccountRoutingModule} from "./account-routing.module";

@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AccountRoutingModule
  ],
  exports: [
    AccountComponent
  ]
})
export class AccountModule {

}
