import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AF } from '../providers/af';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  teachers;
  announcements;

  constructor(public afService: AF) {

    this.teachers = this.afService.teachers;

    this.afService.teachers.subscribe( (teacher) => {
      console.log(teacher);
    });

    this.announcements = this.afService.announcements;

    this.afService.announcements.subscribe( (ann) => {
      console.log(ann);
    });
    
  }


  ngOnInit() {
  }

}
