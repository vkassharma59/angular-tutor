import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onInervaleFired(element: number){
    if( element % 2 === 0 ) {
      this.evenNumbers.push(element);
    } else {
      this.oddNumbers.push(element);
    }
  }
}
