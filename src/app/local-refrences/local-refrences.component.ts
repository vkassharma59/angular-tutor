import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-local-refrences',
  templateUrl: './local-refrences.component.html',
  styleUrls: ['./local-refrences.component.css']
})
export class LocalRefrencesComponent implements OnInit {

  @ViewChild('serverContentInputEle') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverName: HTMLInputElement){
    console.log(serverName.value)
    console.log(this.serverContentInput.nativeElement.value)
  }

}
