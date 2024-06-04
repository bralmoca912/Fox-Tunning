import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-menu-bar',
  standalone: true,
  imports: [RouterModule, NgClass, RouterLink],
  templateUrl: './top-menu-bar.component.html',
  styles: ''
})
export class TopMenuBarComponent {

  constructor(private router: Router) { }

  anchoDeTrazo: number = 1.5; // Valor inicial del ancho del trazo
  btnRutes: boolean = false;
  btnServices: boolean = false;
  btnRouteServices: boolean = false;

  cambiarAncho() { this.anchoDeTrazo = this.anchoDeTrazo === 1.5 ? 2.5 : 1.5; }
  isActive(route: string): boolean { return this.router.isActive(route, true); }

  optionsRutes() { this.btnRutes = !this.btnRutes; this.btnServices = false }
  optionsServices() { this.btnServices = !this.btnServices }
  routeActivate() { this.btnRutes = this.btnServices = false; this.btnRouteServices = false; }
  routeServiceActive() { this.btnRutes = this.btnServices = false; this.btnRouteServices = true }

  // items = [ // Array de rutas
  //   { title: 'Inicio', route: '/page-home', icon: 'fas fa-home' },
  //   {
  //     title: 'Servicios', route: '/page-services', icon: 'fa-solid fa-folder-open',
  //     children: [
  //       { title: 'Todos los Servicios', route: '/page-services/impresion-vinil', icon: 'fa fa-check' }
  //     ]
  //   },
  //   { title: 'Nosotros', route: '/page-nosotros', icon: 'fa-solid fa-users' },
  // ];
}
