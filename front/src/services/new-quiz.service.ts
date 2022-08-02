import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quiz, Theme } from '../models/quiz.model';
import { Question } from '../models/question.model';
import { ThemeService } from './theme.service';

@Injectable({
    providedIn: 'root',
})
export class NewQuizService {
    isModifQuiz: boolean;
    newActualQuizTheme: Theme;
    newActualQuiz: Quiz;
    question: Question;
    idQuestion: number;
    idAnswer: number;
    img = '../assets/images/default.png';
    stock = '';
    isEnd = false;

    private url = 'http://localhost:9428/api/quizzes';

    constructor(private http: HttpClient, private themeService: ThemeService) {}

    setTheme(theme: Theme): void {
        this.newActualQuizTheme = theme;
        this.isModifQuiz = false;
    }

    setQuiz(idNb: number, newName: string): void {
        this.newActualQuiz = {
            id: idNb,
            imgUrl: this.img,
            name: newName,
            questions: [],
            creationDate: new Date(),
        };
    }

    setQuestion(newName: string, close: boolean): void {
        this.question = {
            label: newName,
            answers: [],
            isClosed: close,
            explanation: 'none',
            imgUrl: 'none',
        };
    }

    setAnswerClose(isTrue: boolean): void {
        this.question.answers.push({ value: 'Bien sûr !', isCorrect: isTrue });
        this.question.answers.push({
            value: 'Je ne pense pas...',
            isCorrect: !isTrue,
        });
    }

    setAnswerOpen(answer: string, isTrue: boolean): void {
        this.question.answers.push({ value: answer, isCorrect: isTrue });
    }

    setQuestionOnQuiz(detail: string): void {
        const pushQuestion: Question = this.question;
        pushQuestion.explanation = detail;
        this.newActualQuiz.questions.push(pushQuestion);
    }

    setImgUrl(input: string): void {
        this.img = input;
    }

    async postNewQuiz(): Promise<void> {
        const mergedObject = {
            ...JSON.parse(JSON.stringify(this.newActualQuiz)),
            theme: this.newActualQuizTheme.id,
        };
        console.log(mergedObject);
        this.http.post(this.url, mergedObject).subscribe(() => {
            console.log('posted');
            this.themeService.getThemesFromServer();
        });
    }
}
