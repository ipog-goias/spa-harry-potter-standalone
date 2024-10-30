import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { spellsResolver } from './spells.resolver';

describe('spellsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => spellsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
