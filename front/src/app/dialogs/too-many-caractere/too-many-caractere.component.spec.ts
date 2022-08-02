import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooManyCaractereComponent } from './too-many-caractere.component';

describe('ToManyCaractereComponent', () => {
    let component: TooManyCaractereComponent;
    let fixture: ComponentFixture<TooManyCaractereComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TooManyCaractereComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TooManyCaractereComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
