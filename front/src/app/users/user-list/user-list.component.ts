import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
    userList: User[];

    constructor(
        private userService: UserService,
        private route: ActivatedRoute
    ) {
        this.userService.users = this.route.snapshot.data.users;
        this.userService.user$.subscribe((users) => (this.userList = users));
        this.userService.user$.next(this.userService.users);
    }

    ngOnInit(): void {}
}
