import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const matModules = [
  MatIconModule,
  MatDialogModule,
  MatInputModule,
  MatProgressSpinnerModule,
];

@NgModule({
  imports: matModules,
  exports: matModules,
})
export class MaterialModule {}
