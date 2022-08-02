import { Question } from './question.model';

export interface Theme {
    id: number;
    name: string;
    imgUrl: string;
    quizzes: Quiz[];
}

export interface Quiz {
    id: number;
    name: string;
    imgUrl: string;
    questions: Question[];
    creationDate?: Date;
}
