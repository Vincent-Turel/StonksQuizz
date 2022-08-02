import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-exit-undefined-user',
    templateUrl: './exit-undefined-user.component.html',
    styleUrls: ['./exit-undefined-user.component.scss'],
})
export class ExitUndefinedUserComponent {
    constructor(private dialogRef: MatDialogRef<boolean>) {}

    approve(): void {
        this.dialogRef.close(true);
    }
}
