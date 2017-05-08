import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images;

  constructor() { 
      this.images = [
        {
          "url":"https://s-media-cache-ak0.pinimg.com/736x/ec/13/a7/ec13a753972c254761be4d9d5666d341.jpg",
          "title":"Aliquam erat volutpat",
          "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
        },
        {
          "url":"https://s-media-cache-ak0.pinimg.com/736x/ec/13/a7/ec13a753972c254761be4d9d5666d341.jpg",
          "title":"Aliquam erat volutpat",
          "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
        },{
          "url":"https://s-media-cache-ak0.pinimg.com/736x/ec/13/a7/ec13a753972c254761be4d9d5666d341.jpg",
          "title":"Aliquam erat volutpat",
          "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
        },{
          "url":"https://s-media-cache-ak0.pinimg.com/736x/ec/13/a7/ec13a753972c254761be4d9d5666d341.jpg",
          "title":"Aliquam erat volutpat",
          "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
        },{
          "url":"https://s-media-cache-ak0.pinimg.com/736x/ec/13/a7/ec13a753972c254761be4d9d5666d341.jpg",
          "title":"Aliquam erat volutpat",
          "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
        },{
          "url":"https://s-media-cache-ak0.pinimg.com/736x/ec/13/a7/ec13a753972c254761be4d9d5666d341.jpg",
          "title":"Aliquam erat volutpat",
          "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
        },{
          "url":"https://s-media-cache-ak0.pinimg.com/736x/ec/13/a7/ec13a753972c254761be4d9d5666d341.jpg",
          "title":"Aliquam erat volutpat",
          "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
        },{
          "url":"https://s-media-cache-ak0.pinimg.com/736x/ec/13/a7/ec13a753972c254761be4d9d5666d341.jpg",
          "title":"Aliquam erat volutpat",
          "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
        },{
          "url":"https://s-media-cache-ak0.pinimg.com/736x/ec/13/a7/ec13a753972c254761be4d9d5666d341.jpg",
          "title":"Aliquam erat volutpat",
          "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
        },{
          "url":"https://s-media-cache-ak0.pinimg.com/736x/ec/13/a7/ec13a753972c254761be4d9d5666d341.jpg",
          "title":"Aliquam erat volutpat",
          "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
        }
      ];

  }

  ngOnInit() {
  }

}
