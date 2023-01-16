import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient
  ) { }

  get(){
    const header = {
      headers: new HttpHeaders()
      .set('Basic', `${environment.api_token}`)
    }

    return this.http.get(environment.baseUrl + "empleados", header)
  } 
  getMov(){
    const header = {
      headers: new HttpHeaders()
      .set('Basic', `${environment.api_token}`)
    }

    return this.http.get(environment.baseUrl + "movimientos", header)
  } 

  getInv(){
    const header = {
      headers: new HttpHeaders()
      .set('Basic', `${environment.api_token}`)
    }

    return this.http.get(environment.baseUrl + "inventarios", header)
  } 

  getPol(){
    const header = {
      headers: new HttpHeaders()
      .set('Basic', `${environment.api_token}`)
    }

    return this.http.get(environment.baseUrl + "polizas", header)
  } 
  
  getid(id: any){
    const header = {
      headers: new HttpHeaders()
      .set('Basic', `${environment.api_token}`)
    }
    return this.http.get(environment.baseUrl + "inventarios/" + id, header)
  }
  
  delete(id: any){
    const header = {
      headers: new HttpHeaders()
      .set('Basic', `${environment.api_token}`)
      .set('Access-Control-Allow-Origin', '*')
    }
    const valo = this.http.delete(environment.baseUrl + id, header);
    console.log(valo);
    return valo;
  }

  post(url: any, body: any){
    const header = {
      headers: new HttpHeaders()
      .set('Basic', `${environment.api_token}`)
      .set('Access-Control-Allow-Origin', '*')
      .set('Content-Type', 'application/json')
    }

    return this.http.post(environment.baseUrl + url, body, header);
  }
  
  put(url:any, id: any, body: any){
    const header = {
      headers: new HttpHeaders()
      .set('Basic', `${environment.api_token}`)
      .set('Access-Control-Allow-Origin', '*')
      .set('Content-Type', 'application/json')
    }

    return this.http.put(environment.baseUrl + url + '/' + id, body, header);
  }
}
