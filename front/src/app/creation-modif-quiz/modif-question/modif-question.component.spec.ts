import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifQuestionComponent } from './modif-question.component';

describe('ModifQuestionComponent', () => {
    let component: ModifQuestionComponent;
    let fixture: ComponentFixture<ModifQuestionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ModifQuestionComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ModifQuestionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
