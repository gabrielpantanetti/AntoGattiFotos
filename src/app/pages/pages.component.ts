import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'] 
              ,encapsulation: ViewEncapsulation.None
})
export class PagesComponent implements OnInit{

  constructor() { }

  ngOnInit() {
  } 
}