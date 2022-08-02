import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-no-check-answer',
    templateUrl: './no-check-answer.component.html',
    styleUrls: ['./no-check-answer.component.scss'],
})
export class NoCheckAnswerComponent {
    constructor(private dialogRef: MatDialogRef<boolean>) {}

    approve(): void {
        this.dialogRef.close(true);
    }
}
