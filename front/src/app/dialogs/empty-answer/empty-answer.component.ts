import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-empty-answer',
    templateUrl: './empty-answer.component.html',
    styleUrls: ['./empty-answer.component.scss'],
})
export class EmptyAnswerComponent {
    constructor(private dialogRef: MatDialogRef<boolean>) {}

    approve(): void {
        this.dialogRef.close(true);
    }
}
