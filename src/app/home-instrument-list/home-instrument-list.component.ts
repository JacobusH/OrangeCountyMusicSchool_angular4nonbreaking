import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-home-instrument-list',
  templateUrl: './home-instrument-list.component.html',
  styleUrls: ['./home-instrument-list.component.css']
})
export class HomeInstrumentListComponent implements OnInit {
  @Output()
  instrument: EventEmitter<string> = new EventEmitter<string>();



  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  onClick(instrument: string) {
    // this.instrument.emit(instrument);
    this.router.navigateByUrl('/home/' + instrument);
    console.log(instrument);

    $('html, body').animate({
        scrollTop: $('#mailingListRow').offset().top
    }, 2000);

  }



}
