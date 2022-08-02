import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
    selector: 'app-not-completed-fields-dialog',
    templateUrl: './not-completed-fields-dialog.component.html',
    styleUrls: ['./not-completed-fields-dialog.component.scss'],
})
export class NotCompletedFieldsDialogComponent {
    constructor(private dialogRef: MatDialogRef<boolean>) {}

    approve(): void {
        this.dialogRef.close(true);
    }
}
