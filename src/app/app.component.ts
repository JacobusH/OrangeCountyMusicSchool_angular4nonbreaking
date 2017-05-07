import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AF } from './providers/af';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public isLoggedIn: boolean;
  public displayName: string;

  title = 'app works!';

  constructor(public afService: AF, private router: Router) {
  //  this.afService.afAuth.auth.subscribe(
  //    (auth) => {
  //      if (auth == null) {
  //        console.log('not logged in');

  //        this.isLoggedIn = false;
  //       //  this.router.navigate(['login']); // if we want to navigate to login page
  //      } else {
  //        console.log('Successfully logged in');

  //        // set display name and email
  //        this.afService.displayName = auth.google.displayName;
  //        this.afService.email = auth.google.email;

  //        this.displayName = auth.google.displayName;

  //        this.isLoggedIn = true;
  //      }
  //    }
  //  );
  }

  logout() {
    this.isLoggedIn = false;
    this.afService.logout();
  }

   login() {
    this.afService.loginWithGoogle().then((date) => {
      this.isLoggedIn = true;
    });
  }



}
