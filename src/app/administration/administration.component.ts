import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {AF} from '../providers/af';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  public newAnnouncement: string;
  public announcements: FirebaseListObservable<any>;
  public newTestimonial: string;
  public testimonials: FirebaseListObservable<any>;

  constructor(public afService: AF) {
    this.announcements = this.afService.announcements;
    this.testimonials = this.afService.testimonials;
  }

  ngOnInit() {
  }

  saveAnnouncement() {
    console.log('new announcement: ', this.newAnnouncement);
    this.afService.saveAnnouncement(this.newAnnouncement);
  }

  saveTestimonails() {
    console.log('new testimonial: ', this.newTestimonial);
    this.afService.saveTestimonial(this.newTestimonial);
  }


}
