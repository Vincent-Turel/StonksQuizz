import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewQuizService } from '../../../services/new-quiz.service';
import { MatDialog } from '@angular/material/dialog';
import { NotCompletedFieldsDialogComponent } from '../../dialogs/not-completed-fields-dialog/not-completed-fields-dialog.component';
import { TooManyCaractereTitleComponent } from '../../dialogs/too-many-caractere-title/too-many-caractere-title.component';

@Component({
    selector: 'questions',
    templateUrl: './new-question.component.html',
    styleUrls: ['./new-question.component.scss'],
})
export class NewQuestionComponent implements OnInit {
    openQuestion: HTMLElement; // true
    closeQuestion: HTMLElement; // false
    whatTypeQuestion: boolean;

    constructor(
        private route: Router,
        private newQuiz: NewQuizService,
        private dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.openQuestion = document.getElementById('open');
        this.closeQuestion = document.getElementById('close');
        this.whatTypeQuestion = false;
        this.newQuiz.isEnd = true;
    }

    closeQuestionFct(): void {
        this.openQuestion.style.background = 'white';
        this.closeQuestion.style.background = '#b6d7a8';
        this.whatTypeQuestion = false;
    }

    openQuestionFct(): void {
        this.openQuestion.style.background = '#b6d7a8';
        this.closeQuestion.style.background = 'white';
        this.whatTypeQuestion = true;
    }

    exit(): void {
        this.route.navigateByUrl(
            '/connected/edit-quiz-menu/modif-quiz/modif-question'
        );
    }

    validate(): void {
        const title = document.getElementById('input') as HTMLInputElement;
        if (title.value === '') {
            this.dialog.open(NotCompletedFieldsDialogComponent).afterClosed();
            return;
        }
        if (title.value.length > 108) {
            this.dialog.open(TooManyCaractereTitleComponent).afterClosed();
            return;
        }
        this.newQuiz.setQuestion(title.value, !this.whatTypeQuestion);
        if (this.whatTypeQuestion) {
            this.route.navigateByUrl(
                'connected/edit-quiz-menu/new-quiz-theme/config-new-quiz/question/new-open-question'
            );
        } else {
            this.route.navigateByUrl(
                'connected/edit-quiz-menu/new-quiz-theme/config-new-quiz/question/new-close-question'
            );
        }
    }
}
