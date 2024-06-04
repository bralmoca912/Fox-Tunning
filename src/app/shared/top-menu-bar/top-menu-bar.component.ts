import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-menu-bar',
  standalone: true,
  imports: [RouterModule, NgClass, RouterLink],
  templateUrl: './top-menu-bar.component.html',
  styles: ''
})
export class TopMenuBarComponent {

  constructor(private router: Router) { }

  anchoDeTrazo: number = 1.5;
  btnRutes: boolean = false;
  btnServices: boolean = false;
  isServiceRoute: boolean = false;

  cambiarAncho() { this.anchoDeTrazo = this.anchoDeTrazo === 1.5 ? 2.5 : 1.5; }
  isActive(route: string): boolean { return this.router.isActive(route, true); }

  optionsRutes() { this.btnRutes = !this.btnRutes; this.btnServices = false }
  optionsServices() { this.btnServices = !this.btnServices }
  routeActivate() { this.btnRutes = this.btnServices = false }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkRoutes();
      }
    });
  }

  checkRoutes(): void {
    const currentRoute = this.router.url;
    if (['/page-services', '/p-s-letreros', '/p-s-marketing', '/p-s-corte-laser', '/p-s-instalacion', '/p-s-d-vehicular', '/p-s-p-personalizados'].includes(currentRoute)) {
      this.isServiceRoute = true;
    } else {
      this.isServiceRoute = false;
    }
  }
}
