import { NgModule } from '@angular/core';
import { HomeComponent } from './component/home.component';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [HomeComponent],
    imports: [CommonModule, HomeRoutingModule, CardModule, ButtonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
