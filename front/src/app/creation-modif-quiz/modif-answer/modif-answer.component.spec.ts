import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifAnswerComponent } from './modif-answer.component';

describe('ModifAnswerComponent', () => {
    let component: ModifAnswerComponent;
    let fixture: ComponentFixture<ModifAnswerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ModifAnswerComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ModifAnswerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
