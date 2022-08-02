import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-exit-quiz-dialog',
    templateUrl: './exit-quiz-dialog.component.html',
    styleUrls: ['./exit-quiz-dialog.component.scss'],
})
export class ExitQuizDialogComponent {
    constructor(private dialogRef: MatDialogRef<boolean>) {}

    approve(): void {
        this.dialogRef.close(true);
    }
}
