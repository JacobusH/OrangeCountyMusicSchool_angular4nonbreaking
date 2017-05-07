import { Component, OnInit, OnDestroy , Input, Output, EventEmitter } from '@angular/core';
import {MailingList} from './mailing-list';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mailing-list',
  templateUrl: './mailing-list.component.html',
  styleUrls: ['./mailing-list.component.css']
})
export class MailingListComponent implements OnInit, OnDestroy {
  submitted = false;
  model = new MailingList('', '', '', '', '');
  id: string;
  private sub: any;

  @Input()
  emailAddress: string;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];
       this.model = new MailingList('', '', '', '', this.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  onSubmit() {
    this.submitted = true;
  }


}
