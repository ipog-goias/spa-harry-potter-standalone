import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { of, isObservable, Observable } from 'rxjs';
import { Character } from './character.model';
import { CharactersService } from './characters.service';
import { CharacterDetailResolver } from './character-detail.resolver';

describe('CharacterDetailResolver', () => {
  let serviceSpy: jasmine.SpyObj<CharactersService>;
  let state: RouterStateSnapshot;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CharactersService', ['getCharacterById']);
    
    TestBed.configureTestingModule({
      providers: [
        { provide: CharactersService, useValue: spy }
      ]
    });

    serviceSpy = TestBed.inject(CharactersService) as jasmine.SpyObj<CharactersService>;
    state = {} as RouterStateSnapshot; // Cria um objeto vazio para o RouterStateSnapshot
  });

  it('should resolve character by ID', (done) => {
    const mockCharacter: Character = {
        id: '1',
        name: 'Harry Potter',
        alternate_names: [],
        species: 'human',
        gender: 'male',
        house: 'Gryffindor',
        dateOfBirth: '31-07-1980',
        yearOfBirth: 1980,
        wizard: true,
        ancestry: 'half-blood',
        eyeColour: 'green',
        hairColour: 'black',
        wand: { wood: 'holly', core: 'phoenix feather', length: 11 },
        patronus: 'stag',
        hogwartsStudent: true,
        hogwartsStaff: false,
        actor: 'Daniel Radcliffe',
        alive: true,
        image: 'https://image.url',
        alternate_actors: []
    };

    // Simula o valor retornado pelo serviço
    serviceSpy.getCharacterById.and.returnValue(of(mockCharacter));

    // Simula o ActivatedRouteSnapshot com o ID
    const routeSnapshot = new ActivatedRouteSnapshot();
    routeSnapshot.params = { id: '1' };

    // Chama o resolver com os dois argumentos: route e state
    const result = CharacterDetailResolver(routeSnapshot, state);

    // Verifica se o resultado é um Observable antes de chamar subscribe
    if (isObservable(result)) {
      (result as Observable<Character>).subscribe(character => {
        expect(character).toEqual(mockCharacter);
        expect(serviceSpy.getCharacterById).toHaveBeenCalledWith('1');
        done();
      });
    } else {
      fail('Expected an Observable but got a different type');
      done();
    }
  });
});
