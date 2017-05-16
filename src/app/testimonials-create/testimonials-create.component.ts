import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AF } from '../providers/af';
import { Testimonial} from '../models/testimonial';

@Component({
  selector: 'app-testimonials-create',
  templateUrl: './testimonials-create.component.html',
  styleUrls: ['./testimonials-create.component.css']
})
export class TestimonialsCreateComponent implements OnInit {
  public testimonials: FirebaseListObservable<any>;
  private model = new Testimonial('', '',  '');


  test = new Testimonial('test text', 'test author', new Date().getDate().toString());

  constructor(public afService: AF) {
    this.testimonials = this.afService.testimonialsRecent;
  }

  ngOnInit() {
  }

  saveTestimonial() {
    console.log('new testimonial: ', this.model);
    this.afService.saveTestimonial(this.model);
  }

}
