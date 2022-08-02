import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { Router } from '@angular/router';
import { AccessibilityService } from '../../../services/accessibility.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
    @Input() user: User;

    constructor(
        private route: Router,
        private accessibilityService: AccessibilityService
    ) {}

    ngOnInit(): void {}

    selectUser(): void {
        this.accessibilityService.chooseActualUser(this.user);
        this.route.navigate(['connected/home-screen']);
    }
}
