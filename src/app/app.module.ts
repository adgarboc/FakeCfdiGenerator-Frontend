import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DropdownModule} from "primeng/dropdown";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {InputTextareaModule} from "primeng/inputtextarea";
import {RadioButtonModule} from "primeng/radiobutton";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {CheckboxModule} from "primeng/checkbox";
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import {MenubarModule} from "primeng/menubar";
import {InputSwitchModule} from "primeng/inputswitch";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        InputTextModule,
        CheckboxModule,
        ButtonModule,
        RadioButtonModule,
        InputTextareaModule,
        DropdownModule,
        FormsModule,
        AppRoutingModule,
        MenubarModule,
        InputSwitchModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
