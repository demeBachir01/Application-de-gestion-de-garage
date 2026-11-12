import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/Models/user.model';
import { Variable } from 'src/Models/variable.model';

const baseUrl = new Variable().baseUrl;
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  users : User[]=[];
  authenticatedUser : User | undefined ;


  constructor(private http:HttpClient) { }

  login(email:string, password:string): Observable<any> {
    return this.http.post(baseUrl + "/user/signin", {email, password})
  }

  register(prenom:string,nom:string,adresse:string,numtel:string,email:string,password:string): Observable<any> {
    return this.http.post(baseUrl + "/user/create",{prenom,nom,adresse,numtel,email,password});
  }
  logOut(): Observable<any> {
    return this.http.post(baseUrl + "/user/logout", {});
  }

  public authenticateUser(appUser : User): Observable<boolean>{
    this.authenticatedUser = appUser;
    localStorage.setItem("authUser", JSON.stringify({email:appUser.email, jwt:"gre-token", tel:appUser.password}));
    return of(true);
  }

  public isAuthenticated(){
    return this.authenticatedUser!=undefined;
  }
}
