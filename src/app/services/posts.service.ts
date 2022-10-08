import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostResponse } from '@fotosgram/types';
import { environment } from 'src/environments/environment';
import { filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private page = 0;
  constructor(private http: HttpClient) {}

  getPosts(pull = false) {
    if (pull) {
      this.page = 0;
    }
    this.page++;
    return this.http.get<PostResponse>(`${environment.apiUrl}/posts`, {
      params: {
        page: this.page,
      },
    });
  }
}
