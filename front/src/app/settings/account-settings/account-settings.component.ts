import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';

@Component({
    selector: 'app-account-settings',
    templateUrl: './account-settings.component.html',
    styleUrls: ['./account-settings.component.scss'],
})
export class AccountSettingsComponent implements OnInit {
    user: User;
    newFirstName: string;
    newLastName: string;

    constructor(private route: Router, private userService: UserService) {
        this.user = this.userService.newActualUser;
        this.newFirstName = this.user.firstName;
        this.newLastName = this.user.lastName;
    }

    ngOnInit(): void {}

    goSettingsMenu(): void {
        this.userService.newActualUser.firstName = this.newFirstName;
        this.userService.newActualUser.lastName = this.newLastName;
        this.userService
            .saveUser()
            .then(() => this.route.navigate(['connected/settings']));
    }

    deleteUser(): void {
        this.userService.deleteUser().then(() => {
            this.route.navigate(['not-connected/log-in']);
        });
    }
}
