import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { ChatComponent } from './chat-list/chat.component';

const routes: Routes = [
  {
    path: '**',
    component: ChatComponent,
  },
];

@NgModule({
  declarations: [ChatComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
  ],
})
export class ChatModule {}
