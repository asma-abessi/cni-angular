import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesuperviseurComponent } from './listesuperviseur.component';

describe('ListesuperviseurComponent', () => {
  let component: ListesuperviseurComponent;
  let fixture: ComponentFixture<ListesuperviseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListesuperviseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesuperviseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
