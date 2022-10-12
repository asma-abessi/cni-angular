import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesAvanceComponent } from './gestion-des-avance.component';

describe('GestionDesAvanceComponent', () => {
  let component: GestionDesAvanceComponent;
  let fixture: ComponentFixture<GestionDesAvanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDesAvanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDesAvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
