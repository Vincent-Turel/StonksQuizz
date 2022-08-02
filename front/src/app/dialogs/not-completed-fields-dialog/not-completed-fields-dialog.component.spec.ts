import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotCompletedFieldsDialogComponent } from './not-completed-fields-dialog.component';

describe('NotCompletedFieldsDialogComponent', () => {
    let component: NotCompletedFieldsDialogComponent;
    let fixture: ComponentFixture<NotCompletedFieldsDialogComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NotCompletedFieldsDialogComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NotCompletedFieldsDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
