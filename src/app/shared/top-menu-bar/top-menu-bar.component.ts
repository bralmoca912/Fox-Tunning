import { Component } from '@angular/core';

@Component({
  selector: 'app-top-menu-bar',
  standalone: true,
  imports: [],
  templateUrl: './top-menu-bar.component.html',
  styleUrl: './top-menu-bar.component.css'
})
export class TopMenuBarComponent {

  anchoDeTrazo: number = 1.5; // Valor inicial del ancho del trazo

  cambiarAncho() {
    this.anchoDeTrazo = this.anchoDeTrazo === 1.5 ? 2.5 : 1.5; // Cambiar el valor del ancho del trazo
  }

}
