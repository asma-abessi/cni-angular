import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSuperviseurComponent } from './ajouter-superviseur.component';

describe('AjouterSuperviseurComponent', () => {
  let component: AjouterSuperviseurComponent;
  let fixture: ComponentFixture<AjouterSuperviseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterSuperviseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterSuperviseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
