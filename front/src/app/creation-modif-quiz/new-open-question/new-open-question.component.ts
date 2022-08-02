import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewQuizService } from '../../../services/new-quiz.service';
import { MatDialog } from '@angular/material/dialog';
import { NotCompletedFieldsDialogComponent } from '../../dialogs/not-completed-fields-dialog/not-completed-fields-dialog.component';
import { EmptyAnswerComponent } from '../../dialogs/empty-answer/empty-answer.component';
import { NoCheckAnswerComponent } from '../../dialogs/no-check-answer/no-check-answer.component';
import { TooManyCaractereTitleComponent } from '../../dialogs/too-many-caractere-title/too-many-caractere-title.component';

@Component({
    selector: 'new-open-question',
    templateUrl: './new-open-question.component.html',
    styleUrls: ['./new-open-question.component.scss'],
})
export class NewOpenQuestionComponent implements OnInit {
    whatIsTheAnswer: number;
    isChecked: string;
    numberQuestion: number;

    checkedRep01: HTMLInputElement;
    checkedRep02: HTMLInputElement;
    checkedRep03: HTMLInputElement;
    checkedRep04: HTMLInputElement;

    constructor(
        private route: Router,
        private newQuiz: NewQuizService,
        private dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.isChecked = 'none';
        this.whatIsTheAnswer = 0;
        this.checkedRep01 = document.getElementById(
            'rep01'
        ) as HTMLInputElement;
        this.checkedRep02 = document.getElementById(
            'rep02'
        ) as HTMLInputElement;
        this.checkedRep03 = document.getElementById(
            'rep03'
        ) as HTMLInputElement;
        this.checkedRep04 = document.getElementById(
            'rep04'
        ) as HTMLInputElement;
        this.numberQuestion = 0;
    }

    fctRep01(): void {
        this.whatIsTheAnswer = 1;
        this.checkedRep02.checked = false;
        this.checkedRep03.checked = false;
        this.checkedRep04.checked = false;
        this.isChecked = 'yes';
    }
    fctRep02(): void {
        this.whatIsTheAnswer = 2;
        this.checkedRep01.checked = false;
        this.checkedRep03.checked = false;
        this.checkedRep04.checked = false;
        this.isChecked = 'yes';
    }
    fctRep03(): void {
        this.whatIsTheAnswer = 3;
        this.checkedRep01.checked = false;
        this.checkedRep02.checked = false;
        this.checkedRep04.checked = false;
        this.isChecked = 'yes';
    }
    fctRep04(): void {
        this.whatIsTheAnswer = 4;
        this.checkedRep01.checked = false;
        this.checkedRep02.checked = false;
        this.checkedRep03.checked = false;
        this.isChecked = 'yes';
    }

    nbAnswer(rep: HTMLInputElement, nb: number): number {
        if (rep.value.length !== 0) {
            nb = nb + 1;
        }
        return nb;
    }

    addAnswer(rep: HTMLInputElement, check: HTMLInputElement): void {
        if (rep.value !== '') {
            this.newQuiz.setAnswerOpen(rep.value, check.checked);
        }
    }

    verifTrueAnswer(): boolean {
        let checkAns = true;
        if (this.checkedRep01.checked) {
            checkAns = false;
        }
        if (this.checkedRep02.checked) {
            checkAns = false;
        }
        if (this.checkedRep03.checked) {
            checkAns = false;
        }
        if (this.checkedRep04.checked) {
            checkAns = false;
        }
        return checkAns;
    }

    validate(): void {
        this.numberQuestion = 0;
        const rep01 = document.getElementById('textRep01') as HTMLInputElement;
        const rep02 = document.getElementById('textRep02') as HTMLInputElement;
        const rep03 = document.getElementById('textRep03') as HTMLInputElement;
        const rep04 = document.getElementById('textRep04') as HTMLInputElement;
        this.numberQuestion = this.nbAnswer(rep01, this.numberQuestion);
        this.numberQuestion = this.nbAnswer(rep02, this.numberQuestion);
        this.numberQuestion = this.nbAnswer(rep03, this.numberQuestion);
        this.numberQuestion = this.nbAnswer(rep04, this.numberQuestion);
        if (
            this.isChecked === 'none' ||
            (rep01.value === '' && this.whatIsTheAnswer === 1) ||
            (rep02.value === '' && this.whatIsTheAnswer === 2) ||
            (rep03.value === '' && this.whatIsTheAnswer === 3) ||
            (rep04.value === '' && this.whatIsTheAnswer === 4)
        ) {
            this.dialog.open(NotCompletedFieldsDialogComponent).afterClosed();
            return;
        }
        if (
            rep01.value.length > 30 ||
            rep02.value.length > 30 ||
            rep03.value.length > 30 ||
            rep04.value.length > 30
        ) {
            this.dialog.open(TooManyCaractereTitleComponent).afterClosed();
            return;
        }
        if (this.numberQuestion < 2) {
            this.dialog.open(EmptyAnswerComponent).afterClosed();
            return;
        }

        if (this.verifTrueAnswer()) {
            this.dialog.open(NoCheckAnswerComponent).afterClosed();
            return;
        }

        this.addAnswer(rep01, this.checkedRep01);
        this.addAnswer(rep02, this.checkedRep02);
        this.addAnswer(rep03, this.checkedRep03);
        this.addAnswer(rep04, this.checkedRep04);

        this.route.navigateByUrl(
            '/connected/edit-quiz-menu/new-quiz-theme/config-new-quiz/new-question-recap'
        );
    }
}
