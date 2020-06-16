import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const baseURL = environment.baseURL;
const gifAPIKey = environment.giphyKey;

@Injectable({
  providedIn: 'root',
})
export class ChatAPIService {
  constructor(private httpClient: HttpClient) {}

  public searchGifAPI(
    searchQuery: string,
    imageLoadNum: number,
    imageNum: number
  ) {
    return this.httpClient.get(
      `${baseURL}/gifs/search?api_key=${gifAPIKey}&q=${searchQuery}&limit=${imageLoadNum}&offset=${imageNum}&rating=G&lang=en`
    );
  }
}
