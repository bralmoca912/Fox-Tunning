import { Routes } from '@angular/router';
import PageHomeComponent from './dashboard/page-home/page-home.component';
import PageServicesComponent from './dashboard/page-services/page-services.component';

export const routes: Routes = [
    {
        path: 'page-fav',
        title: 'Favoritos',
        loadComponent: () => import('./dashboard/page-fav/page-fav.component'),
    },
    {
        path: 'page-home',
        title: 'Inicio',
        loadComponent: () => import('./dashboard/page-home/page-home.component'),
    },
    {
        path: 'page-nosotros',
        title: 'Nosotros',
        loadComponent: () => import('./dashboard/page-nosotros/page-nosotros.component'),
    },
    {
        path: 'page-services',
        title: 'Servicios',
        loadComponent: () => import('./dashboard/page-services/page-services.component'),
    },
    { path: '', redirectTo: '/page-home', pathMatch: 'full' },
    { path: '**', redirectTo: '/page-home', pathMatch: 'full' },
];
