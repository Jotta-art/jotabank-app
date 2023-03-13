import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {LoginModule} from "./components/login/login.module";
import {HomeModule} from "./components/home/home.module";
import {RegisterModule} from "./components/register/register.module";
import {AccountModule} from "./components/account/account.module";

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, BrowserModule, RouterOutlet, AppRoutingModule, HomeModule, LoginModule, RegisterModule, AccountModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
