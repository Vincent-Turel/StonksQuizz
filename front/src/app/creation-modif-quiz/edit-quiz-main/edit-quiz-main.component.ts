import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewQuizService } from '../../../services/new-quiz.service';
import { MatDialog } from '@angular/material/dialog';
import { TooManyCaractereTitleComponent } from '../../dialogs/too-many-caractere-title/too-many-caractere-title.component';
import { HttpClient } from '@angular/common/http';
import { ThemeService } from '../../../services/theme.service';

@Component({
    selector: 'app-edit-quiz-main',
    templateUrl: './edit-quiz-main.component.html',
    styleUrls: ['./edit-quiz-main.component.scss'],
})
export class EditQuizMainComponent implements OnInit {
    private url = 'http://localhost:9428/api/quizzes/';
    quizName: HTMLInputElement;
    quizPicture: HTMLImageElement;

    constructor(
        private route: Router,
        private modif: NewQuizService,
        private dialog: MatDialog,
        private http: HttpClient,
        private themeService: ThemeService
    ) {}

    ngOnInit(): void {
        this.quizName = document.getElementById('input') as HTMLInputElement;
        this.quizPicture = document.getElementById('imgQ') as HTMLImageElement;
        this.quizName.placeholder = this.modif.newActualQuiz.name;
        this.quizPicture.src = this.modif.newActualQuiz.imgUrl;
    }

    changeName(): void {
        const title = this.quizName.value;
        if (title !== '' && !(this.quizName.value.length > 30)) {
            this.modif.newActualQuiz.name = title;
        }
    }

    changePicture(): void {
        this.changeName();
        this.route.navigateByUrl(
            '/connected/edit-quiz-menu/new-quiz-theme/config-new-quiz/picture'
        );
    }

    changeQuestion(): void {
        this.changeName();
        this.route.navigateByUrl(
            '/connected/edit-quiz-menu/modif-quiz/modif-question'
        );
    }

    delete(): void {
        this.route.navigateByUrl(
            '/connected/edit-quiz-menu/modif-quiz/delete-quiz'
        );
    }

    validate(): void {
        if (this.quizName.value.length > 30) {
            this.dialog.open(TooManyCaractereTitleComponent).afterClosed();
            return;
        }
        this.changeName();
        const mergedObject = {
            ...JSON.parse(JSON.stringify(this.modif.newActualQuiz)),
            theme: this.themeService.findThemeOfQuizId(
                this.modif.newActualQuiz.id
            ).id,
        };
        this.http
            .post(this.url + this.modif.newActualQuiz.id, mergedObject)
            .subscribe(() => this.themeService.getThemesFromServer());
        this.route.navigateByUrl(
            '/connected/edit-quiz-menu/new-quiz-theme/config-new-quiz/upload-quiz'
        );
    }
}
