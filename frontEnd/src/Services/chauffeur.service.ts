import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chauffeur } from 'src/Models/chauffeur.model';
import { Variable } from 'src/Models/variable.model';
const baseUrl = (new Variable().baseUrl);
@Injectable({
  providedIn: 'root'
})
export class ChauffeurService {

  constructor(private http:HttpClient) { }
  add(data:Chauffeur){
    return this.http.post<any>(baseUrl+"/chauffeur/add",data);
  }
  get(id:number){
    return this.http.get<any>(baseUrl+"/chaiffeur/get?id="+id);
  }
  getAll(){
    return this.http.get<any>(baseUrl+"/chauffeur/getAll");
  }
  update(data:Chauffeur){
    return this.http.put<any>(baseUrl+"/chaufeur/update",data);
  }
  delete(id:number){
    return this.http.delete<any>(baseUrl+"/chauffeur/delete?id="+id);
  }
}
