import { Injectable } from '@angular/core';
import { IuserModel } from '../_models/user.model';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private ApiUrl = 'http://localhost:1337/api/users';

  constructor(private httpClient: HttpClient){}

  //----------Add new user----------//
registerUser(userModel: IuserModel): Observable<any> {
  return this.httpClient.post<any>(this.ApiUrl, { data: userModel });
}

}