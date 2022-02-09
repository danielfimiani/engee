import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

//Custom components
import { VisitsFormComponent } from './visits-form.component';
import { HistoryViewComponent } from '../history-view/history-view.component';

//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
        VisitsFormComponent,
        HistoryViewComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatCardModule,
        ReactiveFormsModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatSnackBarModule,
        MatTableModule,
        MatPaginatorModule,
        MatIconModule
    ],
    exports: [VisitsFormComponent],
    providers: [],
})

export class VisitsModule { }
