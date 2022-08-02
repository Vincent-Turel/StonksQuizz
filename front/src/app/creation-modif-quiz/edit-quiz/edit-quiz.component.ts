import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewQuizService } from '../../../services/new-quiz.service';
import { Quiz } from '../../../models/quiz.model';
import { ChooseQuizModifService } from '../../../services/carousel.service';

@Component({
    selector: 'app-edit-quiz',
    templateUrl: './edit-quiz.component.html',
    styleUrls: ['./edit-quiz.component.scss'],
})
export class EditQuizComponent implements OnInit {
    constructor(
        private route: Router,
        private modif: NewQuizService,
        public chooseQuizModifService: ChooseQuizModifService
    ) {}
  int x;
    ngOnInit(): void {}

    validate(url: string): void {
        const quizzes: Quiz[] = this.chooseQuizModifService._items as Quiz[];
        console.log(quizzes.find((quiz) => quiz.imgUrl === url));
        this.modif.newActualQuiz = quizzes.find((quiz) => quiz.imgUrl === url);
        this.modif.isModifQuiz = true;
        this.route.navigateByUrl('/connected/edit-quiz-menu/modif-quiz');
    }
}
