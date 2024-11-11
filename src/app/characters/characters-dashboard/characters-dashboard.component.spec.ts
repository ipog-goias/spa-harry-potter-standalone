import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersDashboardComponent } from './characters-dashboard.component';

describe('CharactersDashboardComponent', () => {
  let component: CharactersDashboardComponent;
  let fixture: ComponentFixture<CharactersDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
