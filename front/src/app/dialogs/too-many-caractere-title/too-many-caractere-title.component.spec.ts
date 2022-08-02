import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooManyCaractereTitleComponent } from './too-many-caractere-title.component';

describe('ToManyCaractereTitleComponent', () => {
    let component: TooManyCaractereTitleComponent;
    let fixture: ComponentFixture<TooManyCaractereTitleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TooManyCaractereTitleComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TooManyCaractereTitleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
