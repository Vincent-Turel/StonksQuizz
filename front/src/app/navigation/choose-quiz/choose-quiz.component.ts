import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChooseQuizService } from '../../../services/carousel.service';
import { Quiz } from '../../../models/quiz.model';

@Component({
    selector: 'app-choose-quiz',
    templateUrl: './choose-quiz.component.html',
    styleUrls: ['./choose-quiz.component.scss'],
})
export class ChooseQuizComponent implements OnInit {
    constructor(
        private route: Router,
        public chooseQuizService: ChooseQuizService
    ) {}

    ngOnInit(): void {}

    onSubmitTheme(url: string): void {
        const quizzes: Quiz[] = this.chooseQuizService._items as Quiz[];
        const quiz = quizzes.find((q) => q.imgUrl === url);
        this.route.navigate([
            'connected/quiz-play/' + quiz.id + '/question/' + 1,
        ]);
    }
}
