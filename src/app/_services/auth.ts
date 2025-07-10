import { Injectable } from '@angular/core';
import { IloginResponse, IuserModel } from '../_models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private ApiUrl = environment.apiUrl + '/auth/local';

  constructor(private httpClient: HttpClient) {}

  // ---------- register a new user---------//
  registerUser(userModel: IuserModel): Observable<any> {
    return this.httpClient.post<any>(`${this.ApiUrl}/register`, { data: userModel });
  }

  // ---------- login ----------//
  loginUser(requestbody: { identifier: string; password: string }): Observable<IloginResponse> {
    return this.httpClient.post<IloginResponse>(this.ApiUrl, {
      identifier: requestbody.identifier,
      password: requestbody.password
    });
  }

  // ---------- save a token---------//
  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // ---------- resieve a token ----------//
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // ---------- log out----------//
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userID'); 
  }

}
