import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-teacher-carousel',
  templateUrl: './teacher-carousel.component.html',
  styleUrls: ['./teacher-carousel.component.css']
})
export class TeacherCarouselComponent implements OnInit {
  @Input() datasource;
  selectedTeacher = null;

  constructor() { }

  ngOnInit() {
  }

  setSelectedTeacher(teacher) {
    this.selectedTeacher = teacher;
  }

}
