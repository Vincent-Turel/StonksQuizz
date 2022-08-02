import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifOpenQuestionComponent } from './modif-open-question.component';

describe('ModifOpenQuestionComponent', () => {
    let component: ModifOpenQuestionComponent;
    let fixture: ComponentFixture<ModifOpenQuestionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ModifOpenQuestionComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ModifOpenQuestionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
