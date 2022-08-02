import { Injectable } from '@angular/core';
import { Quiz, Theme } from '../models/quiz.model';
import { BehaviorSubject } from 'rxjs';
import { ThemeService } from './theme.service';
import { QuizService } from './quiz.service';

@Injectable()
export abstract class CarouselService {
    _items: Theme[] | Quiz[] = null;
    _numberOfItem: number;

    public item$: BehaviorSubject<Theme[] | Quiz[]> = new BehaviorSubject(
        this._items
    );

    protected constructor() {}
}

@Injectable({
    providedIn: 'root',
})
export class ChooseQuizModifService extends CarouselService {
    constructor(private themeService: ThemeService) {
        super();
        this.themeService.themes$.subscribe((themes: Theme[]) => {
            let quizzes: Quiz[] = [];
            for (let i = 0; i < themes.length; i++) {
                quizzes = quizzes.concat(themes[i].quizzes);
            }
            this._items = quizzes;
            this.item$.next(this._items);
            this._numberOfItem = this._items.length;
        });
    }
}

@Injectable({
    providedIn: 'root',
})
export class ChooseThemeService extends CarouselService {
    constructor(private themeService: ThemeService) {
        super();
        this.themeService.themes$.subscribe((themes: Theme[]) => {
            this._items = JSON.parse(
                JSON.stringify(themes.filter((t) => t.quizzes.length !== 0))
            );
            this.item$.next(this._items);
            this._numberOfItem = this._items.length;
        });
    }
}

@Injectable({
    providedIn: 'root',
})
export class ThemeCreateService extends CarouselService {
    constructor(private themeService: ThemeService) {
        super();
        this.themeService.themes$.subscribe((themes) => {
            this._items = JSON.parse(JSON.stringify(themes));
            this._numberOfItem = this._items.length;
            this.item$.next(this._items);
        });
    }
}

@Injectable({
    providedIn: 'root',
})
export class ChooseQuizService extends CarouselService {
    constructor(private quizService: QuizService) {
        super();
        this.quizService.quizzes$.subscribe((quizzes) => {
            this._items = JSON.parse(JSON.stringify(quizzes));
            this.item$.next(this._items);
            this._numberOfItem = this._items.length;
        });
    }
}
