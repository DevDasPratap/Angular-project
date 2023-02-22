import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public width: number=0

  constructor() { }

  ngOnInit(): void {
     this.width = (window.innerWidth > 0) ? window.innerWidth : screen.width;  
  }

}
