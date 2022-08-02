import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root',
})
export class AccessibilityService {
    private _contrast = 100;
    private _brightness = 100;
    private _font = 1;

    private _clickTimeout = null;
    private _throttleTime = 100;
    private _clickConfirmation = false;

    public contrast$: BehaviorSubject<number> = new BehaviorSubject(
        this._contrast
    );
    public brightness$: BehaviorSubject<number> = new BehaviorSubject(
        this._brightness
    );
    public font$: BehaviorSubject<number> = new BehaviorSubject(this._font);

    public thottleTime$: BehaviorSubject<number> = new BehaviorSubject(
        this._throttleTime
    );

    public clickConfirmation$: BehaviorSubject<boolean> = new BehaviorSubject(
        this._clickConfirmation
    );

    constructor(private userService: UserService) {}

    changeContrast(value: number): void {
        this._contrast = value;
        this.contrast$.next(this._contrast);
    }

    changeBrightness(value: number): void {
        this._brightness = value;
        this.brightness$.next(this._brightness);
    }

    changeFont(value: number): void {
        this._font = value;
        this.font$.next(this._font);
    }

    changeThrottleTime(value: number): void {
        this._throttleTime = value;
        this.thottleTime$.next(this._throttleTime);
    }

    confirmClick(value: boolean): void {
        this._clickConfirmation = value;
        this.clickConfirmation$.next(this._clickConfirmation);
    }

    get contrast(): number {
        return this._contrast;
    }

    get brightness(): number {
        return this._brightness;
    }

    get font(): number {
        return this._font;
    }

    get throttleTime(): number {
        return this._throttleTime;
    }

    get clickConfirmation(): boolean {
        return this._clickConfirmation;
    }

    get clickTimeout(): any {
        return this._clickTimeout;
    }

    public setClickTimeout(): void {
        clearTimeout(this._clickTimeout);
        this._clickTimeout = setTimeout(() => {
            this._clickTimeout = null;
        }, this._throttleTime * 10);
    }

    public updateUserSettings(): void {
        this.userService.newActualUser.brightness = this.brightness;
        this.userService.newActualUser.contrast = this.contrast;
        this.userService.newActualUser.textSize = this.font;
        this.userService.newActualUser.clickTolerance = this.throttleTime;
        this.userService.newActualUser.clickConfirmation = this.clickConfirmation;
        this.userService.saveUser();
    }

    public chooseActualUser(actualUser: User): void {
        if (typeof actualUser.brightness === 'undefined') {
            if (
                typeof this.userService.newActualUser === 'undefined' ||
                typeof this.userService.newActualUser.brightness === 'undefined'
            ) {
                actualUser.brightness = 100;
            } else {
                actualUser.brightness = this.userService.newActualUser.brightness;
            }
        }
        this.userService.setCurrentUser(actualUser);
        this.changeContrast(this.userService.newActualUser.contrast);
        this.changeFont(this.userService.newActualUser.textSize);
        this.changeThrottleTime(this.userService.newActualUser.clickTolerance);
        this.confirmClick(this.userService.newActualUser.clickConfirmation);
    }

    public reset(): void {
        this.changeBrightness(100);
        this.changeContrast(100);
        this.changeFont(1);
        this.changeThrottleTime(100);
        this.confirmClick(false);
    }
}
