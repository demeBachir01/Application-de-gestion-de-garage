import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Garage } from 'src/Models/garage.model';
import { Variable } from 'src/Models/variable.model';
const baseUrl = (new Variable().baseUrl);
@Injectable({
  providedIn: 'root'
})
export class GarageService {

  constructor(private http:HttpClient) { }
  add(data:Garage){
    return this.http.post<any>(baseUrl+"/garage/add",data);
  }
  get(id:number){
    return this.http.get<any>(baseUrl+"/garage/get?id="+id);
  }
  getAll(){
    return this.http.get<any>(baseUrl+"/garage/getAll");
  }
  update(data:Garage){
    return this.http.put<any>(baseUrl+"/garage/update",data);
  }
  delete(id:number){
    return this.http.delete<any>(baseUrl+"/garage/delete?id="+id);
  }
}
