import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../../../models/question.model';

@Component({
    selector: 'app-question-list',
    templateUrl: './question-list.component.html',
    styleUrls: ['./question-list.component.scss'],
})
export class QuestionListComponent implements OnInit {
    @Input() questionList: Question[];

    constructor() {}

    ngOnInit(): void {}

    deleteQuestion(question: Question): void {
        this.questionList.splice(this.questionList.indexOf(question), 1);
    }
}
