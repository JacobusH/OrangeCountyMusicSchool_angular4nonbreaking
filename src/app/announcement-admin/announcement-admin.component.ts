import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {AF} from '../providers/af';

@Component({
  selector: 'app-announcement-admin',
  templateUrl: './announcement-admin.component.html',
  styleUrls: ['./announcement-admin.component.css']
})
export class AnnouncementAdminComponent implements OnInit {
  public newAnnouncement: string;
  public announcements: FirebaseListObservable<any>;

  constructor(public afService: AF) {
    this.announcements = this.afService.announcements;
  }

  ngOnInit() {
  }

  saveAnnouncement() {
    console.log('new announcement: ', this.newAnnouncement);
    this.afService.saveAnnouncement(this.newAnnouncement);
  }
}
