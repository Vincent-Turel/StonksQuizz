import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
    constructor(private route: Router, private elementRef: ElementRef) {}

    ngOnInit(): void {}

    goSettings(): void {
        this.route.navigate(['connected/settings']);
    }

    goEditQuizMenu(): void {
        this.route.navigate(['connected/edit-quiz-menu']);
    }

    goChooseTheme(): void {
        this.route.navigate(['connected/choose-theme']);
    }

    goHomeScreen(): void {
        this.route.navigate(['connected/home-screen']);
    }

    tooBig(): boolean {
        const text = this.elementRef.nativeElement.getElementsByTagName(
            'span'
        )[0];
        const size = window.getComputedStyle(text).fontSize;
        return parseFloat(size) < 40;
    }
}
