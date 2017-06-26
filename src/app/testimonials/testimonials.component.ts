import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Testimonial } from '../models/testimonial';
import { AF } from '../providers/af';


@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  test1: string;
  test2: string;
  test3: string;
  test4: string;
  public testimonials: FirebaseListObservable<any>;
  public testArr: Array<Testimonial> = new Array<Testimonial>();

  constructor(public afService: AF) {
    this.testimonials = this.afService.testimonials;
    this.afService.testimonials.subscribe(
      items => {
        items.forEach(item => {
          console.log('Item:', item);
          this.testArr.push(item);
        });
      },
      error => console.log('Error: ', error),
      () => console.log(this.testArr.length), 
    );

      
  }

  ngOnInit() {
    // console.log(this.test1.nativeElement.value);
    this.test1 = "ahhahhh";

    
  }


}
