import { Component, ViewEncapsulation } from '@angular/core';
import { AccessibilityService } from '../services/accessibility.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    title = 'starter-quiz';

    constructor(private accessibilityService: AccessibilityService) {
        this.accessibilityService.contrast$.subscribe((value) =>
            this.changeContrast(value + '%')
        );
        this.accessibilityService.brightness$.subscribe((value) =>
            this.changeBrightness(value + '%')
        );
        this.accessibilityService.font$.subscribe((value) =>
            this.changeFont(value + 'em')
        );
    }

    isConnected(): boolean {
        return (
            window.location.href.toString().slice(22, 35) === 'not-connected'
        );
    }

    changeBrightness(value: string): void {
        document.documentElement.style.setProperty('--brightness', value);
    }

    changeContrast(value: string): void {
        document.documentElement.style.setProperty('--contrast', value);
    }

    changeFont(value: string): void {
        document.documentElement.style.setProperty('--font', value);
    }
}
