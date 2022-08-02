import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyQuizAlertComponent } from './empty-quiz-alert.component';

describe('EmptyQuizAlertComponent', () => {
    let component: EmptyQuizAlertComponent;
    let fixture: ComponentFixture<EmptyQuizAlertComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EmptyQuizAlertComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EmptyQuizAlertComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
