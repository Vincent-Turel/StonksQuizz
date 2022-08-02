import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifCloseQuestionComponent } from './modif-close-question.component';

describe('ModifCloseQuestionComponent', () => {
    let component: ModifCloseQuestionComponent;
    let fixture: ComponentFixture<ModifCloseQuestionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ModifCloseQuestionComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ModifCloseQuestionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
