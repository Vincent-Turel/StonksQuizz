import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccessibilityService } from '../../../services/accessibility.service';
import { UserService } from '../../../services/user.service';

@Component({
    selector: 'app-register-visual-settings',
    templateUrl: './register-visual-settings.component.html',
    styleUrls: ['./register-visual-settings.component.scss'],
})
export class RegisterVisualSettingsComponent implements OnInit {
    nextMotor = false;
    brightness = 100;
    contrast = 100;
    textSize = 100;

    constructor(
        private route: Router,
        private activatedRoute: ActivatedRoute,
        public accessibilityService: AccessibilityService,
        private userService: UserService
    ) {}

    ngOnInit(): void {
        const toTransform: HTMLCollectionOf<HTMLDivElement> = document.getElementsByTagName(
            'div'
        );

        for (let i = 0; i < toTransform.length; i++) {
            if (toTransform.item(i).className.toString() === 'slider-box') {
                toTransform.item(i).style.marginLeft = '-2vw';
            }
        }
    }

    onBrightnessChange(value: number): void {
        this.brightness = value;
        this.accessibilityService.changeBrightness(value);
    }

    onContrastChange(value: number): void {
        this.contrast = value;
        this.accessibilityService.changeContrast(value);
    }

    onFontChange(value: number): void {
        this.textSize = value;
        this.accessibilityService.changeFont(value);
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
        this.userService.updateWithVisualHandicap(
            this.brightness,
            this.contrast,
            this.textSize
        );
        this.nextMotor =
            this.activatedRoute.snapshot.paramMap.get('motor').toString() ===
            'true';
        if (this.nextMotor) {
            this.route.navigateByUrl('not-connected/register-motor-settings');
        } else {
            this.userService
                .postTheNewUser()
                .then(() => this.route.navigateByUrl('connected/home-screen'));
        }
    }
}
