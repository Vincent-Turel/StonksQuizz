import { Component, OnInit } from '@angular/core';
import { Theme } from '../../../models/quiz.model';
import { ThemeCreateService } from '../../../services/carousel.service';
import { Router } from '@angular/router';
import { NewQuizService } from '../../../services/new-quiz.service';

@Component({
    selector: 'app-new-quiz-theme',
    templateUrl: './new-quiz-theme.component.html',
    styleUrls: ['./new-quiz-theme.component.scss'],
})
export class NewQuizThemeComponent implements OnInit {
    constructor(
        private route: Router,
        private newQuiz: NewQuizService,
        public themeCreateService: ThemeCreateService
    ) {}

    ngOnInit(): void {
        this.newQuiz.img = '../assets/images/default.png';
        this.newQuiz.stock = '';
        this.newQuiz.isEnd = false;
    }

    onSubmitTheme(url: string): void {
        const themes: Theme[] = this.themeCreateService._items as Theme[];
        const theme = themes.find((t) => t.imgUrl === url);
        this.newQuiz.setTheme(theme);
        this.route.navigate([this.route.url + '/config-new-quiz']);
    }
}
