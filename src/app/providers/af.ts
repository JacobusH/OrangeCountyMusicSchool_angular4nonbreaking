import {Injectable} from '@angular/core';
// import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import {AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Testimonial } from '../models/testimonial';

@Injectable()
export class AF {
  public messages: FirebaseListObservable<any>;
  public announcements: FirebaseListObservable<any>;
  public testimonials: FirebaseListObservable<any>;
  public testimonialsRecent: FirebaseListObservable<any>;
  public teachers: FirebaseListObservable<any>;
  public users: FirebaseListObservable<any>;
  public user: Observable<firebase.User>;
  public displayName: string;
  public email: string;

  private currentDate: string;

  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth) {
      this.messages = this.db.list('messages');
      this.announcements = this.db.list('announcements');
      this.testimonials = this.db.list('testimonials');
      this.teachers = this.db.list('teachers');
      this.testimonialsRecent = this.db.list('testimonials', {
        query: {
        limitToLast: 3
      }});

      this.user = this.afAuth.authState;
  }

  getCurrentDate() {
    const dt = new Date(Date.now());
    return dt.getFullYear() + '/' + (dt.getMonth() + 1) + '/' + dt.getDate();
  }

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  sendMessage(text) {
    const message = {
      message: text,
      displayName: this.displayName,
      email: this.email,
      timestamp: this.getCurrentDate()
    };
    this.messages.push(message);
  }

  saveAnnouncement(text) {
    const announcement = {
      announcement: text,
      timestamp: this.getCurrentDate()
    };
    this.announcements.push(announcement);
  }

  saveTestimonial(testimonial: Testimonial) {
    this.testimonials.push(testimonial);
  }

  // saveTeacher(text) {
  //   const teacher = {
  //     teacher: text,
  //     timestamp: this.getCurrentDate()
  //   };
  //   this.teachers.push(teacher);
  // }

}
