import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewQuizService } from '../../../services/new-quiz.service';

@Component({
    selector: 'app-modif-question',
    templateUrl: './modif-question.component.html',
    styleUrls: ['./modif-question.component.scss'],
})
export class ModifQuestionComponent implements OnInit {
    slot01: HTMLElement;
    slot02: HTMLElement;
    slot03: HTMLElement;
    button01: HTMLElement;
    button02: HTMLElement;
    button03: HTMLElement;
    score: HTMLElement;
    siNewQuiz: HTMLElement;
    siNewQuizButton: HTMLElement;
    pos: number;
    slot = [];
    button = [];

    constructor(private route: Router, private modif: NewQuizService) {}

    ngOnInit(): void {
        this.slot01 = document.getElementById('slot01');
        this.slot02 = document.getElementById('slot02');
        this.slot03 = document.getElementById('slot03');
        this.slot = [this.slot01, this.slot02, this.slot03];
        this.button01 = document.getElementById('but01');
        this.button02 = document.getElementById('but02');
        this.button03 = document.getElementById('but03');
        this.button = [this.button01, this.button02, this.button03];
        this.score = document.getElementById('nbQs');

        this.siNewQuiz = document.getElementById('siNewQuiz');
        this.siNewQuizButton = document.getElementById('siNewQuizButton');
        if (!this.modif.isModifQuiz) {
            this.siNewQuiz.innerText = 'Vos questions :';
            this.siNewQuizButton.innerText = 'Terminer';
        }

        this.pos = 0;
        this.initSlot();
    }

    hiddenBox(slot: HTMLElement, button: HTMLElement): void {
        slot.style.visibility = 'hidden';
        button.style.visibility = 'hidden';
    }

    updateNbPage(): void {
        let str: string;
        if (Math.ceil(this.modif.newActualQuiz.questions.length / 3) < 10) {
            str =
                '0' +
                (this.pos / 3 + 1) +
                '/0' +
                Math.ceil(this.modif.newActualQuiz.questions.length / 3);
        } else {
            if (this.pos / 3 < 9) {
                str =
                    '0' +
                    (this.pos / 3 + 1) +
                    '/' +
                    Math.ceil(this.modif.newActualQuiz.questions.length / 3);
            } else {
                str =
                    this.pos / 3 +
                    1 +
                    '/' +
                    Math.ceil(this.modif.newActualQuiz.questions.length / 3);
            }
        }
        this.score.innerText = str;
    }

    initSlot(): void {
        for (let i = 0; i < 3; i++) {
            if (i + this.pos < this.modif.newActualQuiz.questions.length) {
                this.slot[i].innerText = this.modif.newActualQuiz.questions[
                    i + this.pos
                ].label;
                this.slot[i].style.display = 'flex';
                this.slot[i].style.fontSize = '30px';
                this.slot[i].style.paddingTop = '10px';
                this.slot[i].style.paddingLeft = '20px';
                this.slot[i].style.visibility = 'visible';
                this.button[i].style.visibility = 'visible';
            } else {
                this.hiddenBox(this.slot[i], this.button[i]);
            }
        }
        this.updateNbPage();
    }

    modifStart(i: number): void {
        this.modif.question = JSON.parse(
            JSON.stringify(this.modif.newActualQuiz.questions[i + this.pos])
        );
        this.modif.idQuestion = i + this.pos;
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

    nextFct(nb: number): void {
        this.pos += nb;
        if (this.pos < 0) {
            while (this.pos < this.modif.newActualQuiz.questions.length) {
                this.pos += 3;
            }
            this.pos -= 3;
        }
        if (this.pos >= this.modif.newActualQuiz.questions.length) {
            this.pos = 0;
        }
        this.initSlot();
    }

    exit(): void {
        if (this.modif.isModifQuiz) {
            this.route.navigateByUrl('/connected/edit-quiz-menu/modif-quiz');
        } else {
            this.route.navigateByUrl(
                '/connected/edit-quiz-menu/new-quiz-theme/config-new-quiz/new-quiz-recap'
            );
        }
    }
}
