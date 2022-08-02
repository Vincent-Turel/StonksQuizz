import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-to-many-caractere-title',
    templateUrl: './too-many-caractere-title.component.html',
    styleUrls: ['./too-many-caractere-title.component.scss'],
})
export class TooManyCaractereTitleComponent {
    constructor(private dialogRef: MatDialogRef<boolean>) {}

    approve(): void {
        this.dialogRef.close(true);
    }
}
