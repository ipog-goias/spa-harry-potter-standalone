import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersContentListFilterComponent } from './characters-content-list-filter.component';

describe('CharactersContentListFilterComponent', () => {
  let component: CharactersContentListFilterComponent;
  let fixture: ComponentFixture<CharactersContentListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersContentListFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersContentListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
