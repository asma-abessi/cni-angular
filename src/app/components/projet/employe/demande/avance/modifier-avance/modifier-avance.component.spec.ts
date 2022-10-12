import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierAvanceComponent } from './modifier-avance.component';

describe('ModifierAvanceComponent', () => {
  let component: ModifierAvanceComponent;
  let fixture: ComponentFixture<ModifierAvanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierAvanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierAvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
