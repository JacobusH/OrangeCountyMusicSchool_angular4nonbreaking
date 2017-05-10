import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCarouselComponent } from './teacher-carousel.component';

describe('TeacherCarouselComponent', () => {
  let component: TeacherCarouselComponent;
  let fixture: ComponentFixture<TeacherCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
