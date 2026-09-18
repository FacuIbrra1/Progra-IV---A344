import { Directive, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appOcultar]',
})
export class Ocultar {

  @Input() appOcultar = false;
  @Input() templateRefAMostrar!: TemplateRef<any>;

  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);

  ngOnChanges() {
    if (this.appOcultar) {
      this.viewContainerRef.clear();
      //  this.viewContainerRef.createEmbeddedView(this.templateRefAMostrar);
    } else {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }



}
