import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChefgeneralComponent } from './home-chefgeneral.component';

describe('HomeChefgeneralComponent', () => {
  let component: HomeChefgeneralComponent;
  let fixture: ComponentFixture<HomeChefgeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeChefgeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeChefgeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
