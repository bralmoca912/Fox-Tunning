import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.css'
})
export default class PageHomeComponent {

  showAlert: boolean = true;

  ngOnInit(): void {
    // Mostrar la alerta durante 5 segundos
    setTimeout(() => {
      this.showAlert = false; // Ocultar la alerta después de 5 segundos
    }, 10000);
  }

}
