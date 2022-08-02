import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewQuizService } from '../../../services/new-quiz.service';

@Component({
    selector: 'new-question-recap',
    templateUrl: './new-question-recap.component.html',
    styleUrls: ['./new-question-recap.component.scss'],
})
export class NewQuestionRecapComponent implements OnInit {
    title: HTMLElement;
    rep1: HTMLElement;
    rep2: HTMLElement;
    rep3: HTMLElement;
    rep4: HTMLElement;

    constructor(private route: Router, private newQuiz: NewQuizService) {}

    ngOnInit(): void {
        this.title = document.getElementById('question');
        this.title.innerText = this.newQuiz.question.label;
        this.rep1 = document.getElementById('answer1');
        this.rep2 = document.getElementById('answer2');
        this.rep3 = document.getElementById('answer3');
        this.rep4 = document.getElementById('answer4');
        this.printAnswer(this.rep1, 0);
        this.printAnswer(this.rep2, 1);
        this.printAnswer(this.rep3, 2);
        this.printAnswer(this.rep4, 3);
    }

    printAnswer(rep: HTMLElement, nb: number): void {
        if (nb < this.newQuiz.question.answers.length) {
            rep.innerText = this.newQuiz.question.answers[nb].value;
            if (this.newQuiz.question.answers[nb].isCorrect) {
                rep.style.background = '#b6d7a8';
            }
        } else {
            rep.style.color = 'white';
        }
    }

    validate(): void {
        this.route.navigateByUrl(
            '/connected/edit-quiz-menu/new-quiz-theme/config-new-quiz/question/answer-detail'
        );
    }

    back(): void {
        if (this.newQuiz.isModifQuiz) {
            this.route.navigateByUrl(
                '/connected/edit-quiz-menu/modif-quiz/modif-question'
            );
        } else {
            this.route.navigateByUrl(
                '/connected/edit-quiz-menu/new-quiz-theme/config-new-quiz/new-quiz-recap'
            );
        }
    }
}
