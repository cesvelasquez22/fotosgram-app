import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials, TokenResponse } from '@fotosgram/types';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient, private storage: StorageService) {
    this.storage.init();
  }

  get token() {
    return this.storage.get('token');
  }

  signIn({ email, password }: Partial<Credentials>) {
    return this.http
      .post<TokenResponse>(`${environment.apiUrl}/users/login`, {
        email,
        password,
      })
      .pipe(
        catchError((error) => {
          this.storage.remove('token');
          throw error;
        }),
        tap(({ token }) => {
          this.storage.set('token', token);
        })
      );
  }

  signUp({ email, password, name, avatar }: Partial<Credentials>) {
    return this.http
      .post<TokenResponse>(`${environment.apiUrl}/users`, {
        email,
        password,
        name,
        avatar,
      })
      .pipe(
        catchError((error) => {
          this.storage.remove('token');
          throw error;
        }),
        tap(({ token }) => {
          this.storage.set('token', token);
        })
      );
  }
}
