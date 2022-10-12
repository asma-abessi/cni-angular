import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAvanceComponent } from './liste-avance.component';

describe('ListeAvanceComponent', () => {
  let component: ListeAvanceComponent;
  let fixture: ComponentFixture<ListeAvanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAvanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
