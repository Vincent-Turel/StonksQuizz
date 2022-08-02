import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
    selector: 'app-choose-handicap',
    templateUrl: './choose-handicap.component.html',
    styleUrls: ['./choose-handicap.component.scss'],
})
export class ChooseHandicapComponent implements OnInit {
    visualHandicap: boolean;
    motorHandicap: boolean;
    yesVisualButton: HTMLElement;
    yesMotorButton: HTMLElement;
    noVisualButton: HTMLElement;
    noMotorButton: HTMLElement;

    constructor(private route: Router, private userService: UserService) {
        this.visualHandicap = true;
        this.motorHandicap = true;
    }

    ngOnInit(): void {
        this.yesVisualButton = document.getElementById('yes-visual');
        this.yesMotorButton = document.getElementById('yes-motor');
        this.noVisualButton = document.getElementById('no-visual');
        this.noMotorButton = document.getElementById('no-motor');
        this.yesMotorButton.className = 'chosen-button';
        this.yesVisualButton.className = 'chosen-button';

        const toTransform: HTMLCollectionOf<HTMLDivElement> = document.getElementsByTagName(
            'div'
        );

        for (let i = 0; i < toTransform.length; i++) {
            if (
                toTransform.item(i).className.toString() === 'handicap-buttons'
            ) {
                toTransform.item(i).style.marginLeft = '-2vw';
            }
        }
    }

    back(): void {
        this.route.navigate(['not-connected/register']);
    }

    validate(): void {
        this.userService.updateWithChooseHandicap(
            this.visualHandicap,
            this.motorHandicap
        );
        if (this.visualHandicap) {
            this.route.navigateByUrl(
                'not-connected/register-visual-settings/' + this.motorHandicap
            );
        } else {
            if (this.motorHandicap) {
                this.route.navigateByUrl(
                    'not-connected/register-motor-settings'
                );
            } else {
                this.userService
                    .postTheNewUser()
                    .then(() =>
                        this.route.navigateByUrl('connected/home-screen')
                    );
            }
        }
    }

    yesVisual(): void {
        this.visualHandicap = true;
        this.yesVisualButton.className = 'chosen-button';
        this.noVisualButton.className = 'button';
    }

    noVisual(): void {
        this.visualHandicap = false;
        this.yesVisualButton.className = 'button';
        this.noVisualButton.className = 'chosen-button';
    }

    yesMotor(): void {
        this.motorHandicap = true;
        this.yesMotorButton.className = 'chosen-button';
        this.noMotorButton.className = 'button';
    }

    noMotor(): void {
        this.motorHandicap = false;
        this.yesMotorButton.className = 'button';
        this.noMotorButton.className = 'chosen-button';
    }
}
