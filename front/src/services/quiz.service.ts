import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';
import { ThemeService } from './theme.service';

@Injectable({
    providedIn: 'root',
})
export class QuizService {
    private quizzes: Quiz[] = [];

    public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(
        this.quizzes
    );

    constructor(private http: HttpClient, private themeService: ThemeService) {}

    getQuizById(id: number): Quiz | undefined {
        return this.quizzes.find((quiz) => quiz.id === id);
    }

    initializeQuizzesByThemeId(id: number): void {
        this.quizzes = this.themeService.themes.find(
            (t) => t.id === id
        ).quizzes;
        this.quizzes$.next(this.quizzes);
    }

    addQuestion(id: number, question: Question): void {
        this.quizzes.find((quiz) => quiz.id === id).questions.push(question);
    }
}
