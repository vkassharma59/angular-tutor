import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>;
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>;

  newServerName: string = '';
  newServerContent: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(){
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint(){
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }
}
