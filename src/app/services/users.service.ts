import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignInResponse } from '@fotosgram/types';
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

  signIn({ email, password }: { email: string; password: string }) {
    return this.http
      .post<SignInResponse>(`${environment.apiUrl}/users/login`, {
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
}
