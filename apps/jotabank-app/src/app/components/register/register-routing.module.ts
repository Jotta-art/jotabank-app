import {RouterModule, Routes} from "@angular/router";
import {RegisterComponent} from "./component/register.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: 'register', component: RegisterComponent}
];

@NgModule({imports: [RouterModule.forChild(routes)], exports: [RouterModule]})
export class RegisterRoutingModule {

}
