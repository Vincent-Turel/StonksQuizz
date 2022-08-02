import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
    constructor(private route: Router) {}

    ngOnInit(): void {}

    goVisualSettings(): void {
        this.route.navigate(['connected/settings/visual']);
    }

    goMotorSettings(): void {
        this.route.navigate(['connected/settings/motor']);
    }

    goAccountSettings(): void {
        this.route.navigate(['connected/settings/account']);
    }
}
