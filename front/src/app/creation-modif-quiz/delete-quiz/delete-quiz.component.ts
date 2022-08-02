import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NewQuizService } from '../../../services/new-quiz.service';
import { ThemeService } from '../../../services/theme.service';

@Component({
    selector: 'app-delete-quiz',
    templateUrl: './delete-quiz.component.html',
    styleUrls: ['./delete-quiz.component.scss'],
})
export class DeleteQuizComponent implements OnInit {
    private url = 'http://localhost:9428/api/quizzes/';

    deleteStatus: boolean;
    back: HTMLElement;
    confirm: HTMLElement;
    text: HTMLElement;

    constructor(
        private route: Router,
        private http: HttpClient,
        private modif: NewQuizService,
        private themeService: ThemeService
    ) {}

    ngOnInit(): void {
        this.deleteStatus = false;
        this.back = document.getElementById('back');
        this.confirm = document.getElementById('confirm');
        this.text = document.getElementById('text');
    }

    validate(): void {
        if (!this.deleteStatus) {
            this.back.style.visibility = 'hidden';
            this.confirm.style.background = '#b6d7a8';
            this.confirm.innerText = 'Suivant';
            this.text.innerText = 'Quiz supprimé !';
            this.deleteStatus = true;
            this.http
                .delete(this.url + this.modif.newActualQuiz.id)
                .subscribe(() => this.themeService.getThemesFromServer());
        } else {
            this.route.navigateByUrl('/connected/edit-quiz-menu');
        }
    }
}
