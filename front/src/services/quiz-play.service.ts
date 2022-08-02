import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';
import { QuizService } from './quiz.service';
import { Answer, Question } from '../models/question.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ExitQuizDialogComponent } from '../app/dialogs/exit-quiz-dialog/exit-quiz-dialog.component';

@Injectable({
    providedIn: 'root',
})
export class QuizPlayService {
    private quiz: Quiz;
    private _numQuestion: number;
    private _totalQuestion: number;
    private _countRight: number;
    private _wrongAnswer: boolean;
    private _rightAnswer: boolean;
    private _statusAnswer: boolean;
    private _isOver: boolean;

    constructor(
        private route: Router,
        private quizService: QuizService,
        public dialog: MatDialog
    ) {}

    setupQuestions(idQuiz: number): void {
        const quiz = this.quizService.getQuizById(idQuiz);
        if (quiz === undefined) {
            throw new Error('This quiz of id ' + idQuiz + " doesn't exist : ");
        }
        this.quiz = quiz;
        this._numQuestion = 1;
        this._totalQuestion = this.quiz.questions.length;
        this._countRight = 0;
        this._wrongAnswer = this._rightAnswer = this._statusAnswer = this._isOver = false;
    }

    submitAnswer(answer: Answer): void {
        if (answer.isCorrect) {
            this._rightAnswer = true;
            this._countRight++;
        } else {
            this._wrongAnswer = true;
        }
    }

    showAnswer(): void {
        this._statusAnswer = true;
    }

    return(): void {
        this._wrongAnswer = false;
        this._statusAnswer = false;
    }

    isClosedQuestion(): boolean {
        return this.quiz.questions[this._numQuestion - 1].isClosed;
    }

    getQuestion(): Question {
        return this.quiz.questions[this._numQuestion - 1];
    }

    getAnswers(): Answer[] {
        return this.quiz.questions[this._numQuestion - 1].answers;
    }

    nextQuestion(idQuestion: number): void {
        this._numQuestion = ++idQuestion;
        this._rightAnswer = this._wrongAnswer = this._statusAnswer = false;
        this._isOver = this._numQuestion > this._totalQuestion;
        this.route.navigate([
            'connected/quiz-play/' +
                this.quiz.id +
                '/question/' +
                this._numQuestion,
        ]);
    }

    get isOver(): boolean {
        return this._isOver;
    }
    get statusAnswer(): boolean {
        return this._statusAnswer;
    }
    get rightAnswer(): boolean {
        return this._rightAnswer;
    }
    get wrongAnswer(): boolean {
        return this._wrongAnswer;
    }
    get countRight(): number {
        return this._countRight;
    }
    get totalQuestion(): number {
        return this._totalQuestion;
    }
    get numQuestion(): number {
        return this._numQuestion;
    }
    get explanation(): string {
        return this.quiz.questions[this._numQuestion - 1].explanation;
    }

    end(): void {
        this.route.navigate(['connected/home-screen']);
    }

    retry(): void {
        this.setupQuestions(this.quiz.id);
        this.route.navigate([
            'connected/quiz-play/' + this.quiz.id + '/question/' + 1,
        ]);
    }

    back(): void {
        this.dialog
            .open(ExitQuizDialogComponent)
            .afterClosed()
            .subscribe((response) => {
                if (response) {
                    this.end();
                }
            });
    }
}
