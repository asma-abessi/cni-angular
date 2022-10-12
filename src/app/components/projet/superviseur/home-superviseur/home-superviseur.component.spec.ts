import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSuperviseurComponent } from './home-superviseur.component';

describe('HomeSuperviseurComponent', () => {
  let component: HomeSuperviseurComponent;
  let fixture: ComponentFixture<HomeSuperviseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSuperviseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSuperviseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
