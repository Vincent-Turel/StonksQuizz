import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewQuizService } from '../../../services/new-quiz.service';
import { MatDialog } from '@angular/material/dialog';
import { NotCompletedFieldsDialogComponent } from '../../dialogs/not-completed-fields-dialog/not-completed-fields-dialog.component';

@Component({
    selector: 'app-select-image',
    templateUrl: './select-image.component.html',
    styleUrls: ['./select-image.component.scss'],
})
export class SelectImageComponent implements OnInit {
    constructor(
        private route: Router,
        private newQuiz: NewQuizService,
        private dialog: MatDialog
    ) {}

    ngOnInit(): void {}

    back(): void {
        if (this.newQuiz.isModifQuiz) {
            this.route.navigateByUrl('/connected/edit-quiz-menu/modif-quiz');
        } else if (this.newQuiz.isEnd) {
            this.route.navigateByUrl(
                '/connected/edit-quiz-menu/new-quiz-theme/config-new-quiz/new-quiz-recap'
            );
        } else {
            this.route.navigateByUrl(
                '/connected/edit-quiz-menu/new-quiz-theme/config-new-quiz'
            );
        }
    }

    validate(): void {
        const url = document.getElementById('url') as HTMLInputElement;
        if (url.value.length === 0) {
            this.dialog.open(NotCompletedFieldsDialogComponent).afterClosed();
            return;
        }
        if (this.newQuiz.isModifQuiz) {
            this.newQuiz.newActualQuiz.imgUrl = url.value;
            this.route.navigateByUrl('/connected/edit-quiz-menu/modif-quiz');
        } else if (this.newQuiz.isEnd) {
            this.newQuiz.newActualQuiz.imgUrl = url.value;
            this.route.navigateByUrl(
                '/connected/edit-quiz-menu/new-quiz-theme/config-new-quiz/new-quiz-recap'
            );
        } else {
            this.newQuiz.setImgUrl(url.value);
            this.route.navigateByUrl(
                '/connected/edit-quiz-menu/new-quiz-theme/config-new-quiz'
            );
        }
    }
}
