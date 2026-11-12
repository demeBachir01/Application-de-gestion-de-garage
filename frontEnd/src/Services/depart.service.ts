import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Depart } from 'src/Models/depart.model';
import { Variable } from 'src/Models/variable.model';
const baseUrl = (new Variable().baseUrl);
@Injectable({
  providedIn: 'root'
})
export class DepartService {

  constructor(private http:HttpClient) { }
  add(data:Depart){
    return this.http.post<any>(baseUrl+"/depart/add",data);
  }
  get(id:number){
    return this.http.get<any>(baseUrl+"/depart/get?id="+id);
  }
  getAll(){
    return this.http.get<any>(baseUrl+"/depart/getAll")
  }
  update(data:Depart){
    return this.http.put<any>(baseUrl+"/depart/update",data);
  }
  delete(id:number){
    return this.http.delete<any>(baseUrl+"/depart/delete?id="+id);
  }
}
