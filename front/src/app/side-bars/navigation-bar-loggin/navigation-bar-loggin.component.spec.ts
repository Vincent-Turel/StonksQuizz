import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBarLogginComponent } from './navigation-bar-loggin.component';

describe('NavigationBarLogginComponent', () => {
    let component: NavigationBarLogginComponent;
    let fixture: ComponentFixture<NavigationBarLogginComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NavigationBarLogginComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NavigationBarLogginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
