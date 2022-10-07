import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PostResponse } from '../types/post.types';

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
