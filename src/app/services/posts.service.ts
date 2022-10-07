import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostResponse } from '@fotosgram/types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(page = 1) {
    return this.http.get<PostResponse>(`${environment.apiUrl}/posts`, {
      params: {
        page,
      }
    });
  }
}
