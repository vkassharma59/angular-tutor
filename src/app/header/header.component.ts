import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

  @Output() navigationCurrentLink = new EventEmitter<string>();

  constructor(){}

  ngOnInit(): void {}

  onNavlinkClick(pageName: string){
    this.navigationCurrentLink.emit(pageName);
  }
}
