import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessibilityService } from '../../../services/accessibility.service';

@Component({
    selector: 'app-motor-settings',
    templateUrl: './motor-settings.component.html',
    styleUrls: ['./motor-settings.component.scss'],
})
export class MotorSettingsComponent implements OnInit {
    yesButton: HTMLElement;
    noButton: HTMLElement;

    constructor(
        private route: Router,
        public accessibilityService: AccessibilityService
    ) {}

    ngOnInit(): void {
        this.yesButton = document.getElementById('yes-button');
        this.noButton = document.getElementById('no-button');
        if (this.accessibilityService.clickConfirmation === true) {
            this.yesButton.className = 'chosen-button';
        } else {
            this.noButton.className = 'chosen-button';
        }
    }

    goSettingsMenu(): void {
        this.accessibilityService.updateUserSettings();
        this.route.navigate(['connected/settings']);
    }

    onTimingChange(value: number): void {
        this.accessibilityService.changeThrottleTime(value);
    }

    triggerFocusOut(id: number): void {
        const element: HTMLElement = document.getElementById(
            'slider' + id
        ) as HTMLElement;
        element.blur();
    }

    onClickYes(): void {
        this.accessibilityService.confirmClick(true);
        this.yesButton.className = 'chosen-button';
        this.noButton.className = 'button';
    }

    onClickNo(): void {
        this.accessibilityService.confirmClick(false);
        this.yesButton.className = 'button';
        this.noButton.className = 'chosen-button';
    }
}
