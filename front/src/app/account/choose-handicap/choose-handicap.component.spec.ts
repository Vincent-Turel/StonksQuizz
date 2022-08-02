import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseHandicapComponent } from './choose-handicap.component';

describe('ChooseHandicapComponent', () => {
    let component: ChooseHandicapComponent;
    let fixture: ComponentFixture<ChooseHandicapComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ChooseHandicapComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ChooseHandicapComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
