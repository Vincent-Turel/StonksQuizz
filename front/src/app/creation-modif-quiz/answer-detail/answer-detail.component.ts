import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewQuizService } from '../../../services/new-quiz.service';
import { MatDialog } from '@angular/material/dialog';
import { TooManyCaractereComponent } from '../../dialogs/too-many-caractere/too-many-caractere.component';
import { NotCompletedFieldsDialogComponent } from '../../dialogs/not-completed-fields-dialog/not-completed-fields-dialog.component';

@Component({
    selector: 'app-answer-detail',
    templateUrl: './answer-detail.component.html',
    styleUrls: ['./answer-detail.component.scss'],
})
export class AnswerDetailComponent implements OnInit {
    detail: HTMLInputElement;

    constructor(
        private route: Router,
        private newQuiz: NewQuizService,
        private dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.detail = document.getElementById('input') as HTMLInputElement;
    }

    validate(): void {
        if (this.detail.value === '') {
            this.dialog.open(NotCompletedFieldsDialogComponent).afterClosed();
            return;
        }
        if (this.detail.value.length > 109) {
            this.dialog.open(TooManyCaractereComponent).afterClosed();
            return;
        }
        this.newQuiz.setQuestionOnQuiz(this.detail.value);
        this.route.navigateByUrl(
            '/connected/edit-quiz-menu/new-quiz-theme/config-new-quiz/question'
        );
    }
}
