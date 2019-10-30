import { Directive, ElementRef, OnInit, Renderer2, Input, HostListener } from '@angular/core';

@Directive ({
  selector: '[appBasicHighlight]'
})

export class BasicHighLightDirective implements OnInit {
  @Input() colorEnter = 'black';
  @Input() colorLeave = 'transparent';
  @HostListener('mouseenter') mouseover(e: Event) {
    console.log('mouseenter event happene', e);
    this.render.setStyle(this.elementRef.nativeElement, 'color', this.colorEnter);
  }

  @HostListener('mouseleave') mouseleave(e: Event) {
    console.log('mouseenter event happene', e);
    this.render.setStyle(this.elementRef.nativeElement, 'color', this.colorLeave);
  }

  constructor(private elementRef: ElementRef, private render: Renderer2) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  //  this.render.setStyle(this.elementRef.nativeElement, 'color', 'white');
  }

}
