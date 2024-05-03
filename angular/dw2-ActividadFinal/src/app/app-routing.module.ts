import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component'; // Importa el componente DashboardComponent
import { HeroesComponent } from './heroes/heroes.component'; // Importa el componente HeroesComponent
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // Importa el componente HeroDetailComponent

// Define las rutas de la aplicación
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Ruta por defecto redirige al dashboard
  { path: 'dashboard', component: DashboardComponent }, // Ruta para el dashboard, usa el DashboardComponent
  { path: 'detail/:id', component: HeroDetailComponent }, // Ruta para los detalles del héroe, usa el HeroDetailComponent
  { path: 'heroes', component: HeroesComponent } // Ruta para la lista de héroes, usa el HeroesComponent
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ], // Importa y configura las rutas principales de la aplicación
  exports: [ RouterModule ] // Exporta el RouterModule para que otras partes de la aplicación puedan acceder a las rutas
})
export class AppRoutingModule {} // Define el módulo de enrutamiento de la aplicación
