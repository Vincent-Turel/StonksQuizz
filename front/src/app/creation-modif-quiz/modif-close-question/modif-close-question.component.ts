import { Component, OnInit } from '@angular/core';
import { NewQuizService } from '../../../services/new-quiz.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TooManyCaractereTitleComponent } from '../../dialogs/too-many-caractere-title/too-many-caractere-title.component';

@Component({
    selector: 'app-modif-close-question',
    templateUrl: './modif-close-question.component.html',
    styleUrls: ['./modif-close-question.component.scss'],
})
export class ModifCloseQuestionComponent implements OnInit {
    isTrue: boolean;
    input: HTMLInputElement;
    checkTrue: HTMLInputElement;
    checkFalse: HTMLInputElement;

    constructor(
        private modif: NewQuizService,
        private route: Router,
        private dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.input = document.getElementById('input') as HTMLInputElement;
        this.input.placeholder = this.modif.question.label;
        this.checkFalse = document.getElementById('rep02') as HTMLInputElement;
        this.checkTrue = document.getElementById('rep01') as HTMLInputElement;
        this.checkTrue.checked = this.modif.question.answers[0].isCorrect;
        this.checkFalse.checked = this.modif.question.answers[1].isCorrect;
        console.log(this.modif.question);
    }

    fctTrue(): void {
        this.isTrue = true;
        if (this.checkFalse.checked === true) {
            this.checkFalse.checked = false;
        }
        if (this.checkTrue.checked === false) {
            this.isTrue = false;
            this.checkFalse.checked = true;
        }
    }

    fctFalse(): void {
        this.isTrue = false;
        if (this.checkTrue.checked === true) {
            this.checkTrue.checked = false;
        }
        if (this.checkFalse.checked === false) {
            this.isTrue = true;
            this.checkTrue.checked = true;
        }
    }

    desc(): void {
        this.update();
        this.route.navigateByUrl(
            '/connected/edit-quiz-menu/modif-quiz/modif-question/description'
        );
    }

    update(): void {
        if (this.input.value !== '' && this.input.value.length < 109) {
            this.modif.question.label = this.input.value;
        }
        if (this.checkTrue.checked === true) {
            this.modif.question.answers[0].isCorrect = true;
            this.modif.question.answers[1].isCorrect = false;
        } else {
            this.modif.question.answers[1].isCorrect = true;
            this.modif.question.answers[0].isCorrect = false;
        }
    }

    validate(): void {
        if (this.input.value.length > 108) {
            this.dialog.open(TooManyCaractereTitleComponent).afterClosed();
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
