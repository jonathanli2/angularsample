import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive ({
  selector: '[appBasicHighlight]'
})

export class BasicHighLightDirective implements OnInit {
  constructor(private elementRef: ElementRef, private render: Renderer2) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.render.setStyle(this.elementRef.nativeElement, 'color', 'white');
  }

}
