import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Theme } from '../models/quiz.model';
import { AsyncSubject, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private url = 'http://localhost:9428/api/themes';

    private _themes: Theme[] = null;

    public themes$: BehaviorSubject<Theme[]> = new BehaviorSubject(
        this._themes
    );

    constructor(private http: HttpClient) {}

    getThemesFromServer(): AsyncSubject<true | any> {
        const initialized: AsyncSubject<boolean> = new AsyncSubject();
        this.http.get<Theme[]>(this.url).subscribe(
            (themes) => {
                this._themes = themes;
                this.themes$.next(this._themes);
                console.log('got data !');
                console.log(this._themes);
                initialized.next(true);
                initialized.complete();
            },
            (error) => {
                console.log('Failed to load quizzes : ', error);
                initialized.next(false);
                initialized.complete();
            }
        );
        return initialized;
    }

    findThemeOfQuizId(id: number): Theme {
        for (let i = 0; i < this._themes.length; i++) {
            if (this._themes[i].quizzes.find((quiz) => (quiz.id = id))) {
                return this._themes[i];
            }
        }
    }

    get themes(): Theme[] {
        return this._themes;
    }
}
