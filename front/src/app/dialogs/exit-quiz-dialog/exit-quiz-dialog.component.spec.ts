import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitQuizDialogComponent } from './exit-quiz-dialog.component';

describe('ExitQuizDialogComponent', () => {
    let component: ExitQuizDialogComponent;
    let fixture: ComponentFixture<ExitQuizDialogComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExitQuizDialogComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExitQuizDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
