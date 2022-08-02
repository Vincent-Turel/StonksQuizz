import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifDescriptionComponent } from './modif-description.component';

describe('ModifDescriptionComponent', () => {
    let component: ModifDescriptionComponent;
    let fixture: ComponentFixture<ModifDescriptionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ModifDescriptionComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ModifDescriptionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
