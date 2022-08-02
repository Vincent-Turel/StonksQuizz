import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewQuizService } from '../../../services/new-quiz.service';
import { MatDialog } from '@angular/material/dialog';
import { EmptyQuizAlertComponent } from '../../dialogs/empty-quiz-alert/empty-quiz-alert.component';
import { TooManyCaractereTitleComponent } from '../../dialogs/too-many-caractere-title/too-many-caractere-title.component';

@Component({
    selector: 'new-quiz-recap',
    templateUrl: './new-quiz-recap.component.html',
    styleUrls: ['./new-quiz-recap.component.scss'],
})
export class NewQuizRecapComponent implements OnInit {
    title: HTMLInputElement;
    text: HTMLElement;
    img: HTMLImageElement;

    constructor(
        private route: Router,
        private newQuiz: NewQuizService,
        private dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.title = document.getElementById('titleQuiz') as HTMLInputElement;
        this.title.value = this.newQuiz.newActualQuiz.name;
        this.title.placeholder = this.newQuiz.newActualQuiz.name;
        this.text = document.getElementById('rec');
        this.text.innerText =
            'Quiz avec ' +
            this.newQuiz.newActualQuiz.questions.length +
            ' questions. Votre quiz est terminé !';
        this.img = document.getElementById('img') as HTMLImageElement;
        this.img.src = this.newQuiz.newActualQuiz.imgUrl;
    }

    changeName(): void {
        if (this.title.value !== '' && this.title.value.length < 31) {
            this.newQuiz.newActualQuiz.name = this.title.value;
        }
    }

    validate(): void {
        if (this.newQuiz.newActualQuiz.questions.length === 0) {
            this.dialog.open(EmptyQuizAlertComponent).afterClosed();
            return;
        }
        if (this.title.value.length > 30) {
            this.dialog.open(TooManyCaractereTitleComponent).afterClosed();
            return;
        }
        this.newQuiz
            .postNewQuiz()
            .then(() =>
                this.route.navigateByUrl(
                    '/connected/edit-quiz-menu/new-quiz-theme/config-new-quiz/upload-quiz'
                )
            );
    }

    goBack(): void {
        this.changeName();
        this.route.navigateByUrl(
            '/connected/edit-quiz-menu/new-quiz-theme/config-new-quiz/question'
        );
    }

    picture(): void {
        this.changeName();
        this.route.navigateByUrl(
            '/connected/edit-quiz-menu/new-quiz-theme/config-new-quiz/picture'
        );
    }
}
