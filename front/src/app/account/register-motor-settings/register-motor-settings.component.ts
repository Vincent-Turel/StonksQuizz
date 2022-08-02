import { Component, OnInit } from '@angular/core';
import { AccessibilityService } from '../../../services/accessibility.service';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
    selector: 'app-register-motor-settings',
    templateUrl: './register-motor-settings.component.html',
    styleUrls: ['./register-motor-settings.component.scss'],
})
export class RegisterMotorSettingsComponent implements OnInit {
    yesSecondConfirmation: HTMLElement;
    noSecondConfirmation: HTMLElement;
    clickConfirmation = false;
    clickTolerance = 100;

    constructor(
        private route: Router,
        public accessibilityService: AccessibilityService,
        private userService: UserService
    ) {}

    ngOnInit(): void {
        this.yesSecondConfirmation = document.getElementById(
            'yes-confirmation'
        );
        this.noSecondConfirmation = document.getElementById('no-confirmation');
        this.noSecondConfirmation.className = 'chosen-button';
        const toTransform: HTMLCollectionOf<HTMLDivElement> = document.getElementsByTagName(
            'div'
        );

        for (let i = 0; i < toTransform.length; i++) {
            if (
                toTransform.item(i).className.toString() === 'slider-box' ||
                toTransform.item(i).className.toString() === 'handicap-buttons'
            ) {
                toTransform.item(i).style.marginLeft = '-2vw';
            }
        }
    }
    yesConfirmation(): void {
        this.onChangeConfirmation(true);
        this.yesSecondConfirmation.className = 'chosen-button';
        this.noSecondConfirmation.className = 'button';
    }
    noConfirmation(): void {
        this.onChangeConfirmation(false);
        this.yesSecondConfirmation.className = 'button';
        this.noSecondConfirmation.className = 'chosen-button';
    }
    onChangeConfirmation(value: boolean): void {
        this.clickConfirmation = value;
        this.accessibilityService.confirmClick(value);
    }

    onClickToleranceChange(value: number): void {
        this.clickTolerance = value;
        this.accessibilityService.changeThrottleTime(value);
    }

    triggerFocusOut(id: number): void {
        const element: HTMLElement = document.getElementById(
            'slider' + id
        ) as HTMLElement;
        element.blur();
    }

    back(): void {
        this.route.navigate(['not-connected/choose-handicap']);
    }

    validate(): void {
        this.userService.updateWithMotorHandicap(
            this.clickTolerance,
            this.clickConfirmation
        );
        this.userService
            .postTheNewUser()
            .then(() => this.route.navigateByUrl('connected/home-screen'));
    }
}
