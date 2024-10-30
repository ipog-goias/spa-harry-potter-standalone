import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from './character.model';
import { CharactersService } from './characters.service';

export const CharactersListResolver: ResolveFn<Observable<Character[]>> = () => {
  const service = inject(CharactersService);
  return service.getCharacters();
};
