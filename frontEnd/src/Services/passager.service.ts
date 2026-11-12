import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Passager } from 'src/Models/passager.model';
import { Variable } from 'src/Models/variable.model';

const baseUrl = (new Variable().baseUrl);
@Injectable({
  providedIn: 'root'
})
export class PassagerService {

  constructor(private http:HttpClient ) { }

  add(data:Passager){
    return this.http.post<any>(baseUrl+"/passager/add",data);
  }

  get(id:number){
    return this.http.get<any>(baseUrl+"/passager/get?id="+id);
  }

  getAll(){
    return this.http.get(baseUrl+"/passager/getAll");
  }

  update(data:Passager){
    return this.http.put<any>(baseUrl+"/passager/update",data);
  }
  delete(id:number){
    return this.http.delete<any>(baseUrl+"/passager/delete?id="+id);
  }
}
