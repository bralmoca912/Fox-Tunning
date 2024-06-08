import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page-services',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './page-services.component.html',
  styleUrl: './page-services.component.css'
})
export default class PageServicesComponent {

}
