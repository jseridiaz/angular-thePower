import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'courses',
    loadComponent: () =>
      import('./pages/courses/courses.component').then(
        (c) => c.CoursesComponent
      ),
  },
  {
    path: 'course/:id',
    loadComponent: () =>
      import('./pages/inscription/inscription.component').then(
        (c) => c.InscriptionComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
];
