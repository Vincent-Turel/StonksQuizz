import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
import { AccessibilityService } from '../../services/accessibility.service';

@Directive({
    selector: '[appSlowClick]',
})
export class SlowClickDirective {
    @Output() throttleClick = new EventEmitter();

    constructor(private accessibilityService: AccessibilityService) {}

    @HostListener('click', ['$event'])
    clickInEvent(event): void {
        if (this.accessibilityService.clickTimeout) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            this.throttleClick.emit(event);
            this.accessibilityService.setClickTimeout();
        }
    }
}
