import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-empty-quiz-alert',
    templateUrl: './empty-quiz-alert.component.html',
    styleUrls: ['./empty-quiz-alert.component.scss'],
})
export class EmptyQuizAlertComponent {
    constructor(private dialogRef: MatDialogRef<boolean>) {}

    approve(): void {
        this.dialogRef.close(true);
    }
}
