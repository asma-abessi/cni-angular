import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesTacheComponent } from './gestion-des-tache.component';

describe('GestionDesTacheComponent', () => {
  let component: GestionDesTacheComponent;
  let fixture: ComponentFixture<GestionDesTacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDesTacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDesTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
