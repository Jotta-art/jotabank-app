import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './component/home.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  // {path: '/login', component: LoginComponent}, TODO Descobrir a melhor forma, a forma como está hoje ou criando a rota do login aqui no home-routing
];

@NgModule({imports: [RouterModule.forChild(routes)], exports: [RouterModule]})
export class HomeRoutingModule {
}
