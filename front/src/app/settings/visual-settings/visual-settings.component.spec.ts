import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualSettingsComponent } from './visual-settings.component';

describe('VisualSettingsComponent', () => {
    let component: VisualSettingsComponent;
    let fixture: ComponentFixture<VisualSettingsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [VisualSettingsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(VisualSettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
