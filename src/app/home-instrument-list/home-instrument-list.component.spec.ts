import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInstrumentListComponent } from './home-instrument-list.component';

describe('HomeInstrumentListComponent', () => {
  let component: HomeInstrumentListComponent;
  let fixture: ComponentFixture<HomeInstrumentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeInstrumentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInstrumentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
