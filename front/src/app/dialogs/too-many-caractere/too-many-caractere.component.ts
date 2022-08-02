import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-to-many-caractere',
    templateUrl: './too-many-caractere.component.html',
    styleUrls: ['./too-many-caractere.component.scss'],
})
export class TooManyCaractereComponent {
    constructor(private dialogRef: MatDialogRef<boolean>) {}

    approve(): void {
        this.dialogRef.close(true);
    }
}
