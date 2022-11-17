import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Output() intervalFired = new EventEmitter<number>();
  interval: any;

  gameCounterArr: any = [];
  counter: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  startGame(){
    this.interval = setInterval(()=> {
      this.gameCounterArr.push(this.counter++);
      this.intervalFired.emit(this.counter);
    }, 1000);
  }

  endGame(){
    clearInterval(this.interval);
  }
}
