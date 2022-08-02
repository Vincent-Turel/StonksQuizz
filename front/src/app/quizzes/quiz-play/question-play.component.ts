import { Component, OnInit, HostListener } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { Answer } from '../../../models/question.model';
import { QuizPlayService } from '../../../services/quiz-play.service';
import { LocationStrategy } from '@angular/common';
import { AccessibilityService } from '../../../services/accessibility.service';

@Component({
    selector: 'app-question-play',
    templateUrl: './question-play.component.html',
    styleUrls: ['./question-play.component.scss'],
})
export class QuestionPlayComponent implements OnInit {
    selected: HTMLElement = null;

    constructor(
        private quizService: QuizService,
        private activatedRoute: ActivatedRoute,
        private location: LocationStrategy,
        public quizPlayService: QuizPlayService,
        private accessibilityService: AccessibilityService
    ) {
        history.pushState(null, null, window.location.href);
        this.location.onPopState(() => {
            history.pushState(null, null, window.location.href);
        });
    }

    ngOnInit(): void {
        const idQuiz = +this.activatedRoute.snapshot.params.id1;
        this.quizPlayService.setupQuestions(idQuiz);
    }

    @HostListener('window:popstate', ['$event'])
    onPopState(): void {
        this.quizPlayService.back();
    }

    get answers(): Answer[] {
        return this.quizPlayService.getAnswers();
    }

    get question(): string {
        return this.quizPlayService.getQuestion().label;
    }

    get image(): string {
        return this.quizPlayService.getQuestion().imgUrl;
    }

    get isOpenQuestion(): boolean {
        return !this.quizPlayService.isClosedQuestion();
    }

    onSubmitAnswer(answer: Answer, event: any): void {
        if (this.isSelected(event)) {
            this.quizPlayService.submitAnswer(answer);
        }
    }

    onNextQuestion(event: any): void {
        if (this.isSelected(event)) {
            this.quizPlayService.nextQuestion(
                +this.activatedRoute.snapshot.params.id2
            );
        }
    }

    onShowAnswer(event: any): void {
        if (this.isSelected(event)) {
            this.quizPlayService.showAnswer();
        }
    }

    onReturn(event: any): void {
        if (this.isSelected(event)) {
            this.quizPlayService.return();
        }
    }

    onRetry(event: any): void {
        if (this.isSelected(event)) {
            this.quizPlayService.retry();
        }
    }

    onEnd(event: any): void {
        if (this.isSelected(event)) {
            this.quizPlayService.end();
        }
    }

    isSelected(event: any): boolean {
        if (!this.accessibilityService.clickConfirmation) {
            return true;
        } else {
            if (this.selected === event.target) {
                this.selected.classList.replace('selectedItem', 'item');
                this.selected = null;
                return true;
            } else {
                if (this.selected !== null) {
                    this.selected.classList.replace('selectedItem', 'item');
                }
                this.selected = event.target;
                this.selected.classList.replace('item', 'selectedItem');
                return false;
            }
        }
    }

    hasImage(): boolean {
        return this.image !== undefined;
    }
}
