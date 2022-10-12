import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarsupComponent } from './navbarsup.component';

describe('NavbarsupComponent', () => {
  let component: NavbarsupComponent;
  let fixture: ComponentFixture<NavbarsupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarsupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarsupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
