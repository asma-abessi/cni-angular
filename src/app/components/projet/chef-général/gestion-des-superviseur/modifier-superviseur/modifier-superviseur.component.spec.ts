import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierSuperviseurComponent } from './modifier-superviseur.component';

describe('ModifierSuperviseurComponent', () => {
  let component: ModifierSuperviseurComponent;
  let fixture: ComponentFixture<ModifierSuperviseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierSuperviseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierSuperviseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
