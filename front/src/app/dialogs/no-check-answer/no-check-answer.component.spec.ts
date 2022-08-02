import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCheckAnswerComponent } from './no-check-answer.component';

describe('NoCheckAnswerComponent', () => {
    let component: NoCheckAnswerComponent;
    let fixture: ComponentFixture<NoCheckAnswerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NoCheckAnswerComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NoCheckAnswerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
