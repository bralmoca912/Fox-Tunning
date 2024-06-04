import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuBarComponent } from './shared/top-menu-bar/top-menu-bar.component';
import FooterComponent from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopMenuBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fox-tunning';
}
