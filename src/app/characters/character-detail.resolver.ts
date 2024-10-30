import { inject } from '@angular/core';
import { ResolveFn, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from './character.model';
import { CharactersService } from './characters.service';

export const CharacterDetailResolver: ResolveFn<Observable<Character | undefined>> = (route: ActivatedRouteSnapshot) => {
  const service = inject(CharactersService);
  const characterId = route.paramMap.get('id')!;
  return service.getCharacterById(characterId);
};
