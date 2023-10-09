import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatalogsPageComponent} from "./pages/catalogs-page/catalogs-page.component";

const routes: Routes = [{ path: '', component: CatalogsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogsRoutingModule { }
