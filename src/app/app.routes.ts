import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: 'characters',
      title: 'Characters of Harry Potter',
      loadChildren: () => import('./characters/characters.routes').then(r => r.routes)
    },
    //{ path: '', redirectTo: 'characters', pathMatch: 'full' }
];