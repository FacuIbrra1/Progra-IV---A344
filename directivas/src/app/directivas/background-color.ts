import { Directive, ElementRef, inject, input, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]',
})
export class BackgroundColor implements OnInit {
  appBackgroundColor = input('');
  defaultColor = input('');

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);



  constructor() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
  
  ngOnInit(): void {
    
    if (this.appBackgroundColor() === '') {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.defaultColor());
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.appBackgroundColor());
    }
  }
}
