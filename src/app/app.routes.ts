import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'page-fav',
        loadComponent: () => import('./dashboard/page-fav/page-fav.component'),
    },
    {
        path: 'page-home',
        loadComponent: () => import('./dashboard/page-home/page-home.component'),
    },
    {
        path: 'page-nosotros',
        loadComponent: () => import('./dashboard/page-nosotros/page-nosotros.component'),
    },
    {
        path: 'page-services',
        loadComponent: () => import('./dashboard/page-services/page-services.component'),
    },
    {
        path: 'impresion-vinil',
        loadComponent: () => import('./dashboard/page-services/impresion-vinil/impresion-vinil.component')
    },
    {
        path: 'decor-vehiculos',
        loadComponent: () => import('./dashboard/page-services/decor-vehiculos/decor-vehiculos.component')
    },
    {
        path: 'corte-laser',
        loadComponent: () => import('./dashboard/page-services/corte-laser/corte-laser.component')
    },
    { path: '', redirectTo: '/page-home', pathMatch: 'full' },
    { path: '**', redirectTo: '/page-home', pathMatch: 'full' },
];
