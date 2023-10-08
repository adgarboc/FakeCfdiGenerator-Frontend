import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import {PanelMenuModule} from "primeng/panelmenu";
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {AutoCompleteModule} from "primeng/autocomplete";
import {FormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SidebarModule,
    ButtonModule,
    PanelMenuModule,
    MenubarModule,
    InputTextModule,
    AutoCompleteModule,
    FormsModule,
    DropdownModule
  ]
})
export class HomeModule { }
