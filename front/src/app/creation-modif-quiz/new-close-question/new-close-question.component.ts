import { Component, OnInit } from '@angular/core';
import { NewQuizService } from '../../../services/new-quiz.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NotCompletedFieldsDialogComponent } from '../../dialogs/not-completed-fields-dialog/not-completed-fields-dialog.component';

@Component({
    selector: 'new-close-question',
    templateUrl: './new-close-question.component.html',
    styleUrls: ['./new-close-question.component.scss'],
})
export class NewCloseQuestionComponent implements OnInit {
    isTrue: boolean;
    isChecked: string;
    title: HTMLElement;

    checkTrue: HTMLInputElement;
    checkFalse: HTMLInputElement;

    constructor(
        private route: Router,
        private newQuiz: NewQuizService,
        private dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.isChecked = 'none';
        this.title = document.getElementById('question');
        this.title.innerText = this.newQuiz.question.label;
        this.checkFalse = document.getElementById('rep02') as HTMLInputElement;
        this.checkTrue = document.getElementById('rep01') as HTMLInputElement;
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
        this.isChecked = 'yes';
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
        this.isChecked = 'yes';
    }

    validate(): void {
        if (this.isChecked === 'none') {
            this.dialog.open(NotCompletedFieldsDialogComponent).afterClosed();
            return;
        }
        this.newQuiz.setAnswerClose(this.isTrue);
        this.route.navigateByUrl(
            '/connected/edit-quiz-menu/new-quiz-theme/config-new-quiz/question/answer-detail'
        );
    }

    back(): void {
        if (this.newQuiz.isModifQuiz) {
            this.route.navigateByUrl(
                '/connected/edit-quiz-menu/modif-quiz/modif-question'
            );
        } else {
            this.route.navigateByUrl(
                '/connected/edit-quiz-menu/new-quiz-theme/config-new-quiz/new-quiz-recap'
            );
        }
    }
}
