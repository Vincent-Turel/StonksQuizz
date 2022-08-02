import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewQuizService } from '../../../services/new-quiz.service';
import { MatDialog } from '@angular/material/dialog';
import { NoCheckAnswerComponent } from '../../dialogs/no-check-answer/no-check-answer.component';
import { EmptyAnswerComponent } from '../../dialogs/empty-answer/empty-answer.component';
import { TooManyCaractereTitleComponent } from '../../dialogs/too-many-caractere-title/too-many-caractere-title.component';

@Component({
    selector: 'app-modif-open-question',
    templateUrl: './modif-open-question.component.html',
    styleUrls: ['./modif-open-question.component.scss'],
})
export class ModifOpenQuestionComponent implements OnInit {
    rep01: HTMLElement;
    rep02: HTMLElement;
    rep03: HTMLElement;
    rep04: HTMLElement;
    title: HTMLInputElement;

    constructor(
        private route: Router,
        private modif: NewQuizService,
        private dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.title = document.getElementById('input') as HTMLInputElement;
        this.rep01 = document.getElementById('answer1');
        this.rep02 = document.getElementById('answer2');
        this.rep03 = document.getElementById('answer3');
        this.rep04 = document.getElementById('answer4');
        this.title.placeholder = this.modif.question.label;
        this.printAnswer(this.rep01, 0);
        this.printAnswer(this.rep02, 1);
        this.printAnswer(this.rep03, 2);
        this.printAnswer(this.rep04, 3);
    }

    printAnswer(rep: HTMLElement, nb: number): void {
        if (nb < this.modif.question.answers.length) {
            rep.innerText = this.modif.question.answers[nb].value;
            if (this.modif.question.answers[nb].isCorrect) {
                rep.style.background = '#b6d7a8';
            }
        } else {
            rep.style.color = 'white';
        }
    }

    update(): void {
        if (this.title.value !== '' && this.title.value.length < 108) {
            this.modif.question.label = this.title.value;
        }
    }

    desc(): void {
        this.update();
        this.route.navigateByUrl(
            '/connected/edit-quiz-menu/modif-quiz/modif-question/description'
        );
    }

    modifAnswer(nb: number): void {
        this.update();
        this.modif.idAnswer = nb;
        this.route.navigateByUrl(
            'connected/edit-quiz-menu/modif-quiz/modif-question/open-question/answer'
        );
    }

    verifTrueAnswer(): boolean {
        let checkAns = true;
        for (let i = 0; i < this.modif.question.answers.length; i++) {
            if (this.modif.question.answers[i].isCorrect) {
                checkAns = false;
            }
        }
        return checkAns;
    }

    resetBack(): void {
        this.route.navigateByUrl(
            '/connected/edit-quiz-menu/modif-quiz/modif-question'
        );
    }

    validate(): void {
        if (this.title.value.length > 108) {
            this.dialog.open(TooManyCaractereTitleComponent).afterClosed();
            return;
        }
        if (this.modif.question.answers.length < 2) {
            this.dialog.open(EmptyAnswerComponent).afterClosed();
            return;
        }
        if (this.verifTrueAnswer()) {
            this.dialog.open(NoCheckAnswerComponent).afterClosed();
            return;
        }
        this.update();
        this.modif.newActualQuiz.questions[
            this.modif.idQuestion
        ] = this.modif.question;
        this.route.navigateByUrl(
            '/connected/edit-quiz-menu/modif-quiz/modif-question'
        );
    }

    delete(): void {
        const tab = this.modif.newActualQuiz.questions;
        this.modif.newActualQuiz.questions = [];
        for (let i = 0; i < tab.length; i++) {
            if (this.modif.idQuestion !== i) {
                this.modif.newActualQuiz.questions.push(tab[i]);
            }
        }
        this.route.navigateByUrl(
            '/connected/edit-quiz-menu/modif-quiz/modif-question'
        );
    }
}
