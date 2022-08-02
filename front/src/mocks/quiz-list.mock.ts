import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

export const QUESTION_ACTOR: Question = {
    label: 'Jean Gabin a joué dans...',
    answers: [
        {
            value: 'Les Tuches II',
            isCorrect: false,
        },
        {
            value: 'La Grande Illusion',
            isCorrect: true,
        },
        {
            value: 'Mission Impossible',
            isCorrect: false,
        },
        {
            value: "Bienvenue chez les Ch'tis",
            isCorrect: false,
        },
    ],
    isClosed: false,
    explanation:
        "Le film est sorti en 1937 et il s'appelait La Grande Illusion",
    imgUrl: '',
};

export const QUESTION_SPORT: Question = {
    label: 'Therry Henry a joué lors de la finale de la coupe du monde 2006 ?',
    answers: [
        {
            isCorrect: true,
        },
        {
            isCorrect: false,
        },
    ],
    isClosed: true,
    explanation: "Il l'a joué cette finale le filou",
    imgUrl: '',
};

export const QUIZ_LIST: Quiz[] = [
    {
        id: 0,
        name: 'Les Acteurs', // What's happening if I change this value..?
        imgUrl: null,
        questions: [QUESTION_ACTOR, QUESTION_SPORT],
        creationDate: new Date(),
    },
    {
        id: 1,
        name: 'Le Football',
        imgUrl: null,
        questions: [QUESTION_SPORT],
    },
];
