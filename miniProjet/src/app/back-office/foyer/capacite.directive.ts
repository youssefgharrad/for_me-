// capacite.directive.ts
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCapacite]',
})
export class CapaciteDirective {
  @Input() set appCapacite(capacite: number) {
    if (capacite > 200) {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'color');
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
