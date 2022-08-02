import { Component, OnInit } from '@angular/core';
import { Answer, Question } from '../../../../models/question.model';
import { QuizService } from '../../../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-question-form',
    templateUrl: './question-form.component.html',
    styleUrls: ['./question-form.component.scss'],
})
export class QuestionFormComponent implements OnInit {
    questionForm: FormGroup;

    constructor(
        private quizService: QuizService,
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder
    ) {
        this.questionForm = this.formBuilder.group({
            label: ['', [Validators.required]],
            answers: this.formBuilder.array([]),
        });
    }

    ngOnInit(): void {}

    onSubmit(): void {
        const answers: Answer[] = this.answers.getRawValue() as Answer[];
        const newQuestion: Question = {
            label: this.questionForm.value.label,
            answers,
            isClosed: true,
            explanation: '',
            imgUrl: '',
        };
        console.log('Adding new question', newQuestion);
        this.quizService.addQuestion(
            +this.activatedRoute.snapshot.params.id,
            newQuestion
        );
        this.questionForm.reset();
        this.answers.clear();
    }

    get answers(): FormArray {
        return this.questionForm.get('answers') as FormArray;
    }

    onAddAnswer(): void {
        this.answers.push(this.createAnswer());
    }

    createAnswer(): FormGroup {
        return this.formBuilder.group({
            value: '',
            isCorrect: false,
        });
    }
}
