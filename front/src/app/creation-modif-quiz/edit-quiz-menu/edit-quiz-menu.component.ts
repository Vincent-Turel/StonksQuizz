import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-edit-quiz-menu',
    templateUrl: './edit-quiz-menu.component.html',
    styleUrls: ['./edit-quiz-menu.component.scss'],
})
export class EditQuizMenuComponent implements OnInit {
    constructor(private route: Router, private elementRef: ElementRef) {}

    ngOnInit(): void {}

    goEditQuiz(): void {
        this.route.navigate([this.route.url + '/edit-quiz']);
    }

    goNewQuizTheme(): void {
        this.route.navigate([this.route.url + '/new-quiz-theme']);
    }

    getImgHeight(): string {
        const text = this.elementRef.nativeElement.getElementsByTagName(
            'h1'
        )[1];
        const size = window.getComputedStyle(text).fontSize;
        return 50 - parseFloat(size) / 3 + '%';
    }
}
