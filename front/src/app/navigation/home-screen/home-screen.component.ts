import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';

@Component({
    selector: 'app-home-screen',
    templateUrl: './home-screen.component.html',
    styleUrls: ['./home-screen.component.scss'],
})
export class HomeScreenComponent implements OnInit {
    user: User;
    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.user = this.userService.getCurrentUser();
        console.log(this.user);
        const quizFinis = document.getElementById('green-card');
        const quizCree = document.getElementById('blue-card');
        const scoreCard = document.getElementById('purple-card');

        quizFinis.style.background = '#b6d7a8';
        quizCree.style.background = '#9fc5f8';
        scoreCard.style.background = '#9F76A9';

        quizFinis.style.marginRight = '-0.4em';
        quizCree.style.marginRight = '-0.4em';
        scoreCard.style.marginRight = '-0.4em';
    }
}
