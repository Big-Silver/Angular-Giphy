import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../../core/models/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() content: Message;

  constructor() {}

  ngOnInit(): void {
  }

  getPosition(content: Message) {
    return content.send ? 'message-right' : 'message-left';
  }
}
