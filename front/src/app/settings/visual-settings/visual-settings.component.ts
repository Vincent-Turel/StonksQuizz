import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessibilityService } from '../../../services/accessibility.service';

@Component({
    selector: 'app-visual-settings',
    templateUrl: './visual-settings.component.html',
    styleUrls: ['./visual-settings.component.scss'],
})
export class VisualSettingsComponent implements OnInit {
    constructor(
        private route: Router,
        public accessibilityService: AccessibilityService
    ) {}

    ngOnInit(): void {}

    goSettingsMenu(): void {
        this.accessibilityService.updateUserSettings();
        this.route.navigate(['connected/settings']);
    }

    onBrightnessChange(value: number): void {
        this.accessibilityService.changeBrightness(value);
    }

    onContrastChange(value: number): void {
        this.accessibilityService.changeContrast(value);
    }

    onFontChange(value: number): void {
        this.accessibilityService.changeFont(value);
    }

    triggerFocusOut(id: number): void {
        const element: HTMLElement = document.getElementById(
            'slider' + id
        ) as HTMLElement;
        element.blur();
    }
}
