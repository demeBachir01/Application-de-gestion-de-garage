import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Roles } from 'src/Models/roles.model';
import { Variable } from 'src/Models/variable.model';
const baseUrl = (new Variable().baseUrl);
@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http:HttpClient) { }

  add(data:Roles){
    return this.http.post<any>(baseUrl+"/roles/add",data);
  }
  get(id:number){
    return this.http.get<any>(baseUrl+"/roles/get?id="+id);
  }
  getAll(){
    return this.http.get<any>(baseUrl+"/roles/getAll");
  }
  update(data:Roles){
    return this.http.put<any>(baseUrl+"/roles/update",data);
  }
  delete(id:number){
    return this.http.delete<any>(baseUrl+"roles/delete?id="+id);
  }
}
