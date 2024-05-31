import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageServicesComponent } from './page-services/page-services.component';
import { TopMenuBarComponent } from '../shared/top-menu-bar/top-menu-bar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, PageHomeComponent, PageServicesComponent, TopMenuBarComponent],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export class DashboardComponent {

}
