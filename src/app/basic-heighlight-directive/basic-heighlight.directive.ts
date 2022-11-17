import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[addBasicHighlight]'
})

export class BasicHighlightText implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2){}

  ngOnInit(): void {

    this.elementRef.nativeElement.style.backgroundColor = 'blue';
    this.elementRef.nativeElement.style.color = '#777';
    this.elementRef.nativeElement.style.paddingTop = '15px';
    this.elementRef.nativeElement.style.paddingBottom = '15px';
    this.elementRef.nativeElement.style.paddingLeft = '15px';

    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#e7e7e7');
    this.renderer.setStyle(this.elementRef.nativeElement, 'border-radius', '5px');
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', '2px solid #ddd');
  }

  //@HostListerner('event name') function name can be anything
  @HostListener('mouseover') mouseover(eventData: Event){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#ccc');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#e7e7e7');
  }
}
