import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuizMainComponent } from './edit-quiz-main.component';

describe('EditQuizMainComponent', () => {
    let component: EditQuizMainComponent;
    let fixture: ComponentFixture<EditQuizMainComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EditQuizMainComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EditQuizMainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
