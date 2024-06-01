import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuBarComponent } from './shared/top-menu-bar/top-menu-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopMenuBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fox-tunning';
}
