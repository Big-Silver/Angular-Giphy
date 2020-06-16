import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { ChatAPIService } from '../../../core/services/chat-api.service';

@Component({
  selector: 'app-gif-dialog',
  templateUrl: './gif-dialog.component.html',
  styleUrls: ['./gif-dialog.component.scss'],
})
export class GifDialogComponent implements OnInit {
  @Output() selectEvent = new EventEmitter<boolean>();

  searchForm: FormGroup;
  isLoading = false;
  images: any[] = [];
  imageNum = 0;
  imageLoadNum = 24;
  searchQuery = 'hello';

  constructor(
    public dialogRef: MatDialogRef<GifDialogComponent>,
    private chatAPI: ChatAPIService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchInput: null,
    });
    this.isLoading = true;
    this.chatAPI
      .searchGifAPI(this.searchQuery, this.imageLoadNum, this.imageNum)
      .subscribe((res) => {
        this.images = res['data'];
        this.imageNum += this.imageLoadNum;
        this.isLoading = false;
      });

    this.searchForm
      .get('searchInput')
      .valueChanges.pipe(
        debounceTime(500),
        tap(() => (this.isLoading = true)),
        switchMap((value) =>
          this.chatAPI.searchGifAPI(value, this.imageLoadNum, 0).pipe(
            finalize(() => {
              this.searchQuery = value;
            })
          )
        )
      )
      .subscribe((res) => {
        this.images = res['data'];
        this.isLoading = false;
        this.imageNum = this.imageLoadNum;
      });
  }

  selectImg(image) {
    this.selectEvent.emit(image);
    this.dialogRef.close(true);
  }

  readMore() {
    if (this.isLoading) {
      return;
    }
    this.chatAPI
      .searchGifAPI(this.searchQuery, this.imageLoadNum, this.imageNum)
      .subscribe((res) => {
        this.images = this.images.concat(res['data']);
        this.imageNum += this.imageLoadNum;
      });
  }
}
