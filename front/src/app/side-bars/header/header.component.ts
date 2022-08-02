import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessibilityService } from '../../../services/accessibility.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    constructor(
        private route: Router,
        private accessibilityService: AccessibilityService
    ) {}

    ngOnInit(): void {}

    goHomeScreen(): void {
        this.route.navigate(['home-screen']);
    }

    goLogIn(): void {
        this.accessibilityService.reset();
        this.route.navigate(['log-in']);
    }
}
