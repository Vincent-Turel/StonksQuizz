import { Component, OnInit } from '@angular/core';
import { NewQuizService } from '../../../services/new-quiz.service';
import { Router } from '@angular/router';
import { Answer } from '../../../models/question.model';
import { MatDialog } from '@angular/material/dialog';
import { TooManyCaractereTitleComponent } from '../../dialogs/too-many-caractere-title/too-many-caractere-title.component';

@Component({
    selector: 'app-modif-answer',
    templateUrl: './modif-answer.component.html',
    styleUrls: ['./modif-answer.component.scss'],
})
export class ModifAnswerComponent implements OnInit {
    text: HTMLInputElement;
    check: HTMLInputElement;

    constructor(
        private modif: NewQuizService,
        private route: Router,
        private dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.text = document.getElementById('answer') as HTMLInputElement;
        this.check = document.getElementById('check') as HTMLInputElement;
        if (this.modif.idAnswer < this.modif.question.answers.length) {
            this.text.placeholder = this.modif.question.answers[
                this.modif.idAnswer
            ].value;
            this.text.value = this.modif.question.answers[
                this.modif.idAnswer
            ].value;
            this.check.checked = this.modif.question.answers[
                this.modif.idAnswer
            ].isCorrect;
        }
    }

    checkAction(): void {
        if (this.check.checked) {
            for (let i = 0; i < this.modif.question.answers.length; i++) {
                this.modif.question.answers[i].isCorrect = false;
            }
            if (this.modif.idAnswer < this.modif.question.answers.length) {
                this.modif.question.answers[
                    this.modif.idAnswer
                ].isCorrect = true;
            } else {
                this.modif.question.answers[
                    this.modif.question.answers.length - 1
                ].isCorrect = true;
            }
        }
        if (
            !this.check.checked &&
            this.modif.idAnswer < this.modif.question.answers.length
        ) {
            if (this.modif.question.answers[this.modif.idAnswer].isCorrect) {
                this.modif.question.answers[
                    this.modif.idAnswer
                ].isCorrect = false;
            }
        }
    }

    deleteAnswer(): void {
        const tab = [];
        for (let i = 0; i < this.modif.question.answers.length; i++) {
            if (i !== this.modif.idAnswer) {
                tab.push(this.modif.question.answers[i]);
            }
        }
        this.modif.question.answers = tab;
    }

    modifAnswer(): void {
        if (this.text.value !== '') {
            this.modif.question.answers[
                this.modif.idAnswer
            ].value = this.text.value;
            this.checkAction();
        } else {
            this.deleteAnswer();
        }
    }

    newAnswer(): void {
        if (this.text.value !== '') {
            if (this.text.value.length > 30) {
                this.dialog.open(TooManyCaractereTitleComponent).afterClosed();
                return;
            }
            const newAnswer: Answer = {
                isCorrect: false,
                value: this.text.value,
            };
            this.modif.question.answers.push(newAnswer);
            this.checkAction();
        }
    }

    validate(): void {
        if (this.modif.idAnswer < this.modif.question.answers.length) {
            this.modifAnswer();
        } else {
            this.newAnswer();
        }
        this.route.navigateByUrl(
            '/connected/edit-quiz-menu/modif-quiz/modif-question/open-question'
        );
    }
}
