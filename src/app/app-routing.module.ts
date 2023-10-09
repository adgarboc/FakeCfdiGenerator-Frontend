import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {path: 'catalogs', loadChildren: () => import('./modules/catalogs/catalogs.module').then(m => m.CatalogsModule)},
  {
    path: '**',
    loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule),
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
