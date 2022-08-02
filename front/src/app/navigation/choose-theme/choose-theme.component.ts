import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChooseThemeService } from '../../../services/carousel.service';
import { Theme } from '../../../models/quiz.model';
import { QuizService } from '../../../services/quiz.service';

@Component({
    selector: 'app-choose-theme',
    templateUrl: './choose-theme.component.html',
    styleUrls: ['./choose-theme.component.scss'],
})
export class ChooseThemeComponent implements OnInit {
    constructor(
        private route: Router,
        public chooseThemeService: ChooseThemeService,
        private quizService: QuizService
    ) {}

    ngOnInit(): void {}

    onSubmitTheme(url: string): void {
        const themes: Theme[] = this.chooseThemeService._items as Theme[];
        const themeId = themes.find((t) => t.imgUrl === url).id;
        this.quizService.initializeQuizzesByThemeId(themeId);
        this.route.navigate(['connected/choose-quiz']);
    }
}
