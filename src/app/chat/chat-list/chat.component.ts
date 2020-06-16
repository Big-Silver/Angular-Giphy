import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { GifDialogComponent } from '../../shared/components/gif-dialog/gif-dialog.component';
import { Message } from '../../core/models/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, AfterViewInit {
  @ViewChild('scrollChat') private scrollChat: ElementRef;

  messages: Message[] = [];
  chatForm: FormGroup;

  constructor(
    private cd: ChangeDetectorRef,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.chatForm = this.fb.group({
      input: ['', Validators.compose([Validators.required])],
    });
    this.messages = [
      {
        type: 'text',
        send: true,
        message: 'Hello!',
      },
      {
        type: 'text',
        send: false,
        message: 'Hi',
      },
    ];
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
    setTimeout(() => {
      this.scrollToBottom();
    }, 100);
  }

  submit() {
    if (this.chatForm.status === 'VALID') {
      this.messages.push({
        type: 'text',
        send: true,
        message: this.chatForm.value.input,
      });
      this.chatForm.reset();
      setTimeout(() => {
        this.scrollToBottom();
      }, 100);
    }
  }

  openGifModal() {
    const dialogRef = this.dialog.open(GifDialogComponent);

    dialogRef.componentInstance.selectEvent.subscribe((res) => {
      this.messages.push({
        type: 'gif',
        send: true,
        message: res.images.preview_gif.url,
      });
      setTimeout(() => {
        this.scrollToBottom();
      }, 100);
    });
  }

  scrollToBottom(): void {
    try {
      this.scrollChat.nativeElement.scrollTop = this.scrollChat.nativeElement.scrollHeight;
    } catch (err) {}
  }
}
