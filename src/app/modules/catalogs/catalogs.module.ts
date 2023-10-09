import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogsRoutingModule } from './catalogs-routing.module';
import { CatalogsPageComponent } from './pages/catalogs-page/catalogs-page.component';


@NgModule({
  declarations: [
    CatalogsPageComponent
  ],
  imports: [
    CommonModule,
    CatalogsRoutingModule
  ]
})
export class CatalogsModule { }
