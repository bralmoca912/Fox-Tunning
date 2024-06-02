import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-menu-bar',
  standalone: true,
  imports: [RouterModule, NgClass],
  templateUrl: './top-menu-bar.component.html',
  styleUrl: './top-menu-bar.component.css'
})
export class TopMenuBarComponent {

  anchoDeTrazo: number = 1.5; // Valor inicial del ancho del trazo
  constructor(private router: Router) { }

  cambiarAncho() { // Pasar el ancho de 1.5 a 2.5
    this.anchoDeTrazo = this.anchoDeTrazo === 1.5 ? 2.5 : 1.5;
  }
  isActive(route: string): boolean { // verificamos si la ruta actual es activa o no
    return this.router.isActive(route, true);
  }
  items = [ // Array de rutas
    { title: 'Inicio', route: '/page-home', icon: 'fas fa-home' },
    { title: 'Servicios', route: '/page-services', icon: 'fa-solid fa-folder-open' },
    { title: 'Nosotros', route: '/page-nosotros', icon: 'fa-solid fa-users' },
  ];
}
