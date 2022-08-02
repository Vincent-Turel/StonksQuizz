import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMotorSettingsComponent } from './register-motor-settings.component';

describe('RegisterMotorSettingsComponent', () => {
    let component: RegisterMotorSettingsComponent;
    let fixture: ComponentFixture<RegisterMotorSettingsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RegisterMotorSettingsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RegisterMotorSettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
