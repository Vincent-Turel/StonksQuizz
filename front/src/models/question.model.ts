export interface Answer {
    value?: string;
    isCorrect: boolean;
}

export interface Question {
    label: string;
    answers: Answer[];
    isClosed: boolean;
    explanation: string;
    imgUrl: string;
}
