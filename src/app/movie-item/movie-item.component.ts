import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-movie-item]',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() movieData:any;
  constructor() { }

  ngOnInit(): void {
  }

}
