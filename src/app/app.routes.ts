import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageHomeComponent } from './dashboard/page-home/page-home.component';
import { PageServicesComponent } from './dashboard/page-services/page-services.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'page-home',
                title: 'Inicio',
                component: PageHomeComponent
            },
            {
                path: 'page-services',
                title: 'Servicios',
                component: PageServicesComponent
            },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
        ]
    },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
