import { ResolveFn } from '@angular/router';

export const spellsResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
