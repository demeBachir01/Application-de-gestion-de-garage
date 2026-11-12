import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bagage } from 'src/Models/bagage.model';
import { Variable } from 'src/Models/variable.model';
const baseUrl = (new Variable().baseUrl);
@Injectable({
  providedIn: 'root'
})
export class BagageService {

  constructor(private http:HttpClient) { }
  add(data:Bagage){
    return this.http.post<any>(baseUrl+"/bagage/add",data);
  }
  get(id:number){
    return this.http.get<any>(baseUrl+"/bagage/get?id="+id);
  }
  getAll(){
    return this.http.get<any>(baseUrl+"/bagage/getAll");
  }
  update(data:Bagage){
    return this.http.put<any>(baseUrl+"/bagage/update",data);
  }
  delete(id:number){
    return this.http.delete<any>(baseUrl+"/bagage/delete?id="+id);
  }
}
