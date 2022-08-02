import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterVisualSettingsComponent } from './register-visual-settings.component';

describe('RegisterVisualSettingsComponent', () => {
    let component: RegisterVisualSettingsComponent;
    let fixture: ComponentFixture<RegisterVisualSettingsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RegisterVisualSettingsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RegisterVisualSettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
