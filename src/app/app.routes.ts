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
        path: 'p-s-corte-laser',
        loadComponent: () => import('./dashboard/page-services/p-s-corte-laser/p-s-corte-laser.component')
    },
    {
        path: 'p-s-d-vehicular',
        loadComponent: () => import('./dashboard/page-services/p-s-d-vehicular/p-s-d-vehicular.component')
    },
    {
        path: 'p-s-instalacion',
        loadComponent: () => import('./dashboard/page-services/p-s-instalacion/p-s-instalacion.component')
    },
    {
        path: 'p-s-letreros',
        loadComponent: () => import('./dashboard/page-services/p-s-letreros/p-s-letreros.component')
    },
    {
        path: 'p-s-marketing',
        loadComponent: () => import('./dashboard/page-services/p-s-marketing/p-s-marketing.component')
    },
    {
        path: 'p-s-p-personalizados',
        loadComponent: () => import('./dashboard/page-services/p-s-p-personalizados/p-s-p-personalizados.component')
    },
    { path: '', redirectTo: '/page-home', pathMatch: 'full' },
    { path: '**', redirectTo: '/page-home', pathMatch: 'full' },
];
