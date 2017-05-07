import {Injectable} from '@angular/core';
// import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import {AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class AF {
  public messages: FirebaseListObservable<any>;
  public announcements: FirebaseListObservable<any>;
  public testimonials: FirebaseListObservable<any>;
  public users: FirebaseListObservable<any>;
  public user: Observable<firebase.User>;
  public displayName: string;
  public email: string;

  private currentDate: string;

  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth) {
      this.messages = this.db.list('messages');
      this.announcements = this.db.list('announcements');
      this.testimonials = this.db.list('testimonials');
  }

  getCurrentDate() {
    const dt = new Date(Date.now());
    return dt.getFullYear() + '/' + (dt.getMonth() + 1) + '/' + dt.getDate();
  }

  /**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  /**
   * Logs out the current user
   */
  logout() {
    return this.afAuth.auth.signOut();
  }

   /**
   * Saves a message to the Firebase Realtime Database
   * @param text
   */
  sendMessage(text) {
    const message = {
      message: text,
      displayName: this.displayName,
      email: this.email,
      timestamp: this.getCurrentDate()
    };
    this.messages.push(message);
  }

  /**
   * Saves an announcment to the Firebase Realtime Database
   * @param text
   */
  saveAnnouncement(text) {
    const announcement = {
      announcement: text,
      timestamp: this.getCurrentDate()
    };
    this.announcements.push(announcement);
  }

   /**
   * Saves a testimonial to the Firebase Realtime Database
   * @param text
   */
  saveTestimonial(text) {
    const testimonial = {
      testimonial: text,
      timestamp: this.getCurrentDate()
    };
    this.testimonials.push(testimonial);
  }

}
