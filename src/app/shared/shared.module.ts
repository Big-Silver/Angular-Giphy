import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { GifDialogComponent } from './components/gif-dialog/gif-dialog.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  declarations: [GifDialogComponent, MessageComponent],
  exports: [GifDialogComponent, MessageComponent],
})
export class SharedModule {}
