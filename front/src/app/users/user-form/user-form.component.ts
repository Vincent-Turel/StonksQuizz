import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NotCompletedFieldsDialogComponent } from '../../dialogs/not-completed-fields-dialog/not-completed-fields-dialog.component';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
    userForm: FormGroup;

    constructor(
        private userService: UserService,
        private formBuilder: FormBuilder,
        private router: Router,
        private dialog: MatDialog
    ) {
        this.userForm = this.formBuilder.group({
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
        });
    }

    ngOnInit(): void {}

    createUser(): void {
        const inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName(
            'input'
        );

        for (let i = 0; i < inputs.length; i++) {
            if (inputs.item(i).value === '') {
                this.dialog
                    .open(NotCompletedFieldsDialogComponent)
                    .afterClosed()
                    .subscribe((response) => {
                        if (response) {
                            this.clearAll();
                        }
                    });
                return;
            }
        }

        // this.actualUser = this.userForm.getRawValue() as User;
        this.userService.createUser(
            this.userForm.getRawValue().firstName,
            this.userForm.getRawValue().lastName
        );
        this.router.navigate(['not-connected/choose-handicap']);
    }

    clearAll(): void {
        const inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName(
            'input'
        );
        for (let i = 0; i < inputs.length; i++) {
            inputs.item(i).value = '';
        }
    }
}
