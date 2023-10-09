import { Component } from '@angular/core';
import { ThemeService } from './theme.service';
import {MenuItem} from "primeng/api";
import {InputSwitchOnChangeEvent} from "primeng/inputswitch";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = "fake-cfdi-generator";

  constructor(public themeService: ThemeService) {}

  items: MenuItem[] = [
    {
      label: 'Catalogos',
      icon: 'pi pi-fw pi-file',
      id: 'catalogs',
      routerLink: '/catalogs',
      items: [
        {
          label: 'Contribyentes',
          icon: 'pi pi-fw pi-plus',
          routerLink: '/catalogs/contribuyentes'
        },
        {
          label: 'SAT',
          icon: 'pi pi-fw pi-plus',
          routerLink: '/catalogs/sat',
          items: [
            {
              label: 'Regimenes Fiscales',
              icon: 'pi pi-fw pi-plus',
              routerLink: '/catalogs/sat/regimenes-fiscales'
            },
            {
              label: 'Tipos de Comprobante',
              icon: 'pi pi-fw pi-plus',
              routerLink: '/catalogs/sat/tipos-de-comprobante'
            },
            {
              label: 'Tipos de Relacion',
              icon: 'pi pi-fw pi-plus',
              routerLink: '/catalogs/sat/tipos-de-relacion'
            }
          ]
        }
      ]
    }
  ];

  setTheme($event: InputSwitchOnChangeEvent) {
    this.themeService.darkTheme($event.checked);
  }
}
