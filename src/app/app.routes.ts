import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: 'characters',
      title: 'Characters of Harry Potter',
      loadChildren: () => import('./characters/characters.routes').then(r => r.routes)
    },
    {
      path: 'dashboard',
      title: 'Dashboard of Harry Potter',
      loadComponent: () => import('./characters/characters-dashboard/characters-dashboard.component').then(c => c.CharactersDashboardComponent)
    },
    {
      path: 'datatable',
      title: 'Datatable of Harry Potter',
      loadComponent: () => import('./characters/characters-content-list-filter/characters-content-list-filter.component').then(c => c.CharactersContentListFilterComponent)
    },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }

]; 
