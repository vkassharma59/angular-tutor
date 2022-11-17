import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[addBasicHighlight]'
})

export class BasicHighlightText implements OnInit {
  constructor(private elementRef: ElementRef){}

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'blue';
    this.elementRef.nativeElement.style.color = '#fff';
    this.elementRef.nativeElement.style.paddingTop = '20px';
    this.elementRef.nativeElement.style.paddingBottom = '20px';
    this.elementRef.nativeElement.style.paddingLeft = '20px';
  }
}
