import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

// providers
import {AF} from './providers/af';

import { AlertModule } from 'ngx-bootstrap';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { MailingListComponent } from './mailing-list/mailing-list.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TeachersComponent } from './teachers/teachers.component';
import { FAQComponent } from './faq/faq.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ResourcesComponent } from './resources/resources.component';
import { ContactComponent } from './contact/contact.component';
import { HomeMessageComponent } from './home-message/home-message.component';
import { HomeVideoComponent } from './home-video/home-video.component';
import { HomeInstrumentListComponent } from './home-instrument-list/home-instrument-list.component';
import { TestimonialsCreateComponent } from './testimonials-create/testimonials-create.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdministrationComponent } from './administration/administration.component';
import { AnnouncementAdminComponent } from './announcement-admin/announcement-admin.component';
import { GalleryCarouselComponent } from './gallery-carousel/gallery-carousel.component';
import { TeacherCarouselComponent } from './teacher-carousel/teacher-carousel.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyCFToauOWTjn55Oc2e6L1YkCt5ZGzbMXV8',
  authDomain: 'ocmusicschool-11817.firebaseapp.com',
  databaseURL: 'https://ocmusicschool-11817.firebaseio.com',
  storageBucket: 'ocmusicschool-11817.appspot.com',
  messagingSenderId: '202663817255'
};

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: AdministrationComponent }  
];


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    AnnouncementsComponent,
    MailingListComponent,
    GalleryComponent,
    TeachersComponent,
    FAQComponent,
    TestimonialsComponent,
    ResourcesComponent,
    ContactComponent,
    HomeMessageComponent,
    HomeVideoComponent,
    HomeInstrumentListComponent,
    TestimonialsCreateComponent,
    LoginPageComponent,
    AdministrationComponent,
    AnnouncementAdminComponent,
    GalleryCarouselComponent,
    TeacherCarouselComponent
  ],
  imports: [
    AlertModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    // BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AF],
  bootstrap: [AppComponent]
})
export class AppModule { }
