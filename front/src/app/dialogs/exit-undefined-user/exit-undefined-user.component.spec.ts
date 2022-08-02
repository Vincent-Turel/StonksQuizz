import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitUndefinedUserComponent } from './exit-undefined-user.component';

describe('ExitUndefinedUserComponent', () => {
    let component: ExitUndefinedUserComponent;
    let fixture: ComponentFixture<ExitUndefinedUserComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExitUndefinedUserComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExitUndefinedUserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
