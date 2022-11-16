import { Component, ContentChild, DoCheck, Input, OnInit, SimpleChange, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, DoCheck, AfterViewInit {

  @Input() element: {type: string, name: string, content: string };
  @Input() serverCnt: number;
  @ContentChild('contentParagraph') content: ElementRef;

  constructor(){
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChange){
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('contentParagraph text '+ this.content);
  }

  ngAfterViewInit(){
    console.log('contentParagraph text '+ this.content.nativeElement.textContent);
  }

  ngDoCheck(){

  }
}
