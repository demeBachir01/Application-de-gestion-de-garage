import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/Models/user.model';
import { Variable } from 'src/Models/variable.model';

const baseUrl = (new Variable).baseUrl;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  addUser(data:User){
    return this.http.post<any>(baseUrl+"/user/add",data);
  }

  get(id:number){
    return this.http.get<any>(baseUrl+"/user/get?id="+id);
  }
  getAll(){
    return this.http.get<any>(baseUrl+"/user/getAll");
  }
  update(data:User){
    return this.http.put<any>(baseUrl+"/user/update",data);
  }
  delete(id:number){
    return this.http.delete(baseUrl+"/user/delete>id="+id);
  }
}
