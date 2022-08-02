import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appAutoWidth]',
})
export class AutoWidthDirective {
    constructor(private el: ElementRef) {}

    @HostListener('keyup') onKeyUp(): void {
        this.resize();
    }

    @HostListener('focus') onFocus(): void {
        this.resize();
    }

    private resize(): void {
        this.el.nativeElement.setAttribute(
            'size',
            this.el.nativeElement.value.length
        );
    }
}
