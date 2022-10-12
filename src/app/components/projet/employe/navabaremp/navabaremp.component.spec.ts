import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavabarempComponent } from './navabaremp.component';

describe('NavabarempComponent', () => {
  let component: NavabarempComponent;
  let fixture: ComponentFixture<NavabarempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavabarempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavabarempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
