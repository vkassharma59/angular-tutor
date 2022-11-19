import { Component, OnInit, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  @ViewChild('name') name: ElementRef;
  @ViewChild('status') status: ElementRef;
  @Output('addAccountClick') addAccountClick = new EventEmitter<{name: string, status: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddAccount(){
    this.addAccountClick.emit({
      name: this.name.nativeElement.value,
      status: this.status.nativeElement.value
    })
  }

}
