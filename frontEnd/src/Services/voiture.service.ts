import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Variable } from 'src/Models/variable.model';
import { Voiture } from 'src/Models/voiture.model';

const baseUrl = (new Variable().baseUrl);
const httpOption ={}
@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor(private http:HttpClient) { }

  addVoiture(data : Voiture){
   return  this.http.post<any>(baseUrl+"/voiture/add",data);
  }

  getVoiture(id:number){
    return this.http.get<any>(baseUrl+"/voiture/get?id="+id);
  }

  getAllVoiture(){
    return this.http.get<any>(baseUrl+"/voiture/getAll");
  }

  upDateVoiture(data:Voiture){
    return this.http.put<any>(baseUrl+"voiture/update",data);
  }

  deleteVoiture(id:number){
    return this.http.delete<any>(baseUrl+"voiture/delete?id="+id);
  }

}
