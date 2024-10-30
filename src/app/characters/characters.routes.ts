import { Routes } from "@angular/router";
import { CharacterDetailResolver } from "./character-detail.resolver";
import { CharactersListComponent } from "./characters-list/characters-list.component";
import { CharactersListResolver } from "./characters-list.resolver";
import { CharactersDetailComponent } from "./characters-detail/characters-detail.component";

export const routes: Routes = [
    {
      path: '',
      component: CharactersListComponent,
      resolve: { characters: CharactersListResolver }
    },
    {
      path: ':id',
      component: CharactersDetailComponent,
      resolve: { character: CharacterDetailResolver }
    }
  ];