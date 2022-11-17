import { Component, SimpleChange, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class AppComponent {

  currentPage: string = 'shopping-list';
  swithchValue: number = 10;

  onNavigationChange(pageName: string){
    this.currentPage = pageName;
  }
}
