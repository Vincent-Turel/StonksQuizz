import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { USERS } from '../mocks/user-list.mock';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    newActualUser: User;
    visualHandicap = true;
    motorHandicap = true;
    users = USERS;
    user$ = new BehaviorSubject<User[]>(this.users);

    private url = 'http://localhost:9428/api/users/';

    constructor(private http: HttpClient) {}

    createUser(firstName: string, lastName: string): void {
        this.newActualUser = new User(
            0,
            firstName,
            lastName,
            100,
            100,
            1.0,
            100,
            false,
            0,
            0,
            0
        );
        console.log('creation : ');
        console.log(this.newActualUser);
    }

    updateWithChooseHandicap(
        visualHandicap: boolean,
        motorHandicap: boolean
    ): void {
        this.visualHandicap = visualHandicap;
        this.motorHandicap = motorHandicap;
    }

    updateWithVisualHandicap(
        brightness: number,
        contrast: number,
        textSize: number
    ): void {
        this.newActualUser.brightness = brightness;
        this.newActualUser.contrast = contrast;
        this.newActualUser.textSize = textSize;
    }

    updateWithMotorHandicap(
        clickTolerance: number,
        clickConfirmation: boolean
    ): void {
        this.newActualUser.clickTolerance = clickTolerance;
        this.newActualUser.clickConfirmation = clickConfirmation;
    }

    getCurrentUser(): User {
        return this.newActualUser;
    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.url);
    }

    setCurrentUser(actualUser: User): void {
        this.newActualUser = actualUser;
    }

    async postTheNewUser(): Promise<void> {
        console.log('post');
        this.http
            .post(this.url, JSON.parse(JSON.stringify(this.newActualUser)))
            .subscribe((o) => {
                this.newActualUser.id = Object(o).id as number;
            });
    }

    async deleteUser(): Promise<void> {
        this.http.delete(this.url + this.newActualUser.id).subscribe(() => {
            console.log('deleted');
        });
    }

    async saveUser(): Promise<void> {
        this.http
            .put(
                this.url + this.newActualUser.id,
                JSON.parse(JSON.stringify(this.newActualUser))
            )
            .subscribe(() => {
                console.log('updated');
            });
    }

    checkUserIsntUndefined(): void {
        if (typeof this.newActualUser === 'undefined') {
        }
    }
}
