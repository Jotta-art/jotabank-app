import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  // {
  //   path: 'testar',
  //   loadChildren: () =>
  //     import('./components/home/home.module').then((mod) => mod.HomeModule), TODO Descobrir a melhor forma, a forma como está hoje ou criando as rotas aqui no app-routing
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
