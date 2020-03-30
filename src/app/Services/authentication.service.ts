import { Injectable } from '@angular/core';
import { UserAuthentication } from '../Models/user-authentication';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiURL: string = 'http://localhost/';

  constructor(private httpClient: HttpClient) { }

  //Get Currently logged in User details
  public GetUserDetails() {
    return this.httpClient.get<UserAuthentication[]>('${this.apiURL}/getuserdetails');
  }

  //Search a user from Active Directory
  public Searchuser(searchCritera: string) {
    return this.httpClient.get<UserAuthentication[]>('${this.apiURL}/searchuser/${searchCritera}');
  }

  //Save a user to DB
  public SaveUser(usersData: UserAuthentication) {
    this.httpClient.post<UserAuthentication[]>('${this.apiURL}/searchuser', usersData);
  }

}
