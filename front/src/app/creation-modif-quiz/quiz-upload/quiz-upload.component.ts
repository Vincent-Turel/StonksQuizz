import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewQuizService } from '../../../services/new-quiz.service';

@Component({
    selector: 'quiz-upload',
    templateUrl: './quiz-upload.component.html',
    styleUrls: ['./quiz-upload.component.scss'],
})
export class quizUploadComponent implements OnInit {
    constructor(private route: Router, private newQuiz: NewQuizService) {}

    ngOnInit(): void {}

    validate(): void {
        this.newQuiz.img = '../assets/images/default.png';
        this.newQuiz.stock = '';
        this.newQuiz.isEnd = false;
        this.route.navigateByUrl('/connected/edit-quiz-menu');
    }
}
