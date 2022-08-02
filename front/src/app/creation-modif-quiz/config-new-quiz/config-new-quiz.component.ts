import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewQuizService } from '../../../services/new-quiz.service';
import { MatDialog } from '@angular/material/dialog';
import { NotCompletedFieldsDialogComponent } from '../../dialogs/not-completed-fields-dialog/not-completed-fields-dialog.component';
import { TooManyCaractereTitleComponent } from '../../dialogs/too-many-caractere-title/too-many-caractere-title.component';

@Component({
    selector: 'app-config-new-quiz',
    templateUrl: './config-new-quiz.component.html',
    styleUrls: ['./config-new-quiz.component.scss'],
})
export class ConfigNewQuizComponent implements OnInit {
    img: HTMLImageElement;
    input: HTMLInputElement;

    constructor(
        private route: Router,
        private newQuiz: NewQuizService,
        private dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.img = document.getElementById('imgQ') as HTMLImageElement;
        this.input = document.getElementById('input') as HTMLInputElement;
        if (this.newQuiz.img.length !== 0) {
            this.img.src = this.newQuiz.img;
        }
        if (this.newQuiz.stock !== '') {
            this.input.value = this.newQuiz.stock;
            this.input.placeholder = this.newQuiz.stock;
        }
    }

    goQuestion(): void {
        if (this.input.value === '') {
            this.dialog.open(NotCompletedFieldsDialogComponent).afterClosed();
            return;
        }
        if (this.input.value.length > 30) {
            this.dialog.open(TooManyCaractereTitleComponent).afterClosed();
            return;
        }
        this.newQuiz.setQuiz(
            this.input.value.length +
                this.newQuiz.newActualQuizTheme.name.length +
                Math.floor(Math.random() * 100000),
            this.input.value
        );
        this.route.navigate([
            '/connected/edit-quiz-menu/new-quiz-theme/config-new-quiz/question',
        ]);
    }

    picture(): void {
        if (this.input.value !== '' && this.input.value.length < 31) {
            this.newQuiz.stock = this.input.value;
        }
        this.newQuiz.isEnd = false;
        this.route.navigateByUrl(
            '/connected/edit-quiz-menu/new-quiz-theme/config-new-quiz/picture'
        );
    }
}
