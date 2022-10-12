import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListepointageComponent } from './listepointage.component';

describe('ListepointageComponent', () => {
  let component: ListepointageComponent;
  let fixture: ComponentFixture<ListepointageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListepointageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListepointageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
