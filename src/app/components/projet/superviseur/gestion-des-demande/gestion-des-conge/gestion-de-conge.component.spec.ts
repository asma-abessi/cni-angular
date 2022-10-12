import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDeCongeComponent } from './gestion-de-conge.component';

describe('GestionDeCongeComponent', () => {
  let component: GestionDeCongeComponent;
  let fixture: ComponentFixture<GestionDeCongeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDeCongeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDeCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
