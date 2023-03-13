import {RouterModule, Routes} from "@angular/router";
import {AccountComponent} from "./component/account.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: 'account', component: AccountComponent}
];

@NgModule({imports: [RouterModule.forChild(routes)], exports: [RouterModule]})
export class AccountRoutingModule {

}
