import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-menu-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './top-menu-bar.component.html',
  styleUrl: './top-menu-bar.component.css'
})
export class TopMenuBarComponent {

  anchoDeTrazo: number = 1.5; // Valor inicial del ancho del trazo

  cambiarAncho() {
    this.anchoDeTrazo = 2.5; // Cambiar el valor del ancho del trazo
  }

}
