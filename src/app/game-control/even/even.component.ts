import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  @Input() element: any;

  constructor() { }

  ngOnInit(): void {
  }

}
