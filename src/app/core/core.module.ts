import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ChatAPIService } from './services/chat-api.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [ChatAPIService],
})
export class CoreModule {}
