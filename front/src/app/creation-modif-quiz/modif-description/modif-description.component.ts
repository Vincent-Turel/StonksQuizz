import { Component, OnInit } from '@angular/core';
import { NewQuizService } from '../../../services/new-quiz.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TooManyCaractereComponent } from '../../dialogs/too-many-caractere/too-many-caractere.component';

@Component({
    selector: 'app-modif-description',
    templateUrl: './modif-description.component.html',
    styleUrls: ['./modif-description.component.scss'],
})
export class ModifDescriptionComponent implements OnInit {
    input: HTMLInputElement;

    constructor(
        private modif: NewQuizService,
        private route: Router,
        private dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.input = document.getElementById('modif') as HTMLInputElement;
        this.input.placeholder = this.modif.question.explanation;
        this.input.value = this.modif.question.explanation;
    }

    validate(): void {
        if (this.input.value !== '') {
            this.modif.question.explanation = this.input.value;
        }
        if (this.input.value.length > 109) {
            this.dialog.open(TooManyCaractereComponent).afterClosed();
            return;
        }
        if (this.modif.question.isClosed) {
            this.route.navigateByUrl(
                '/connected/edit-quiz-menu/modif-quiz/modif-question/close-question'
            );
        } else {
            this.route.navigateByUrl(
                '/connected/edit-quiz-menu/modif-quiz/modif-question/open-question'
            );
        }
    }
}
