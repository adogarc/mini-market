import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { users } from "../models/users";

@Injectable({
    providedIn: 'root'
})
export class UserService{

    constructor(
        private http: HttpClient
    ){}
    
    getAll():Observable<any>{
        return this.http.get<any>('http://localhost:8000/users/all')
      }
      Create(users:any):Observable<any>{
        users.id=0
        let json =JSON.stringify(users);
        let params=json;
        const httpOptions = {
          headers: new HttpHeaders({'Content-Type': 'application/json'})
        }
        return this.http.post<users>('http://localhost:8000/users/add', params,httpOptions);
      }
      update(users:any):Observable<any>{
        let json =JSON.stringify(users);
        let params=json;
        const httpOptions = {
          headers: new HttpHeaders({'Content-Type': 'application/json'})
        }
        return this.http.post<users>('http://localhost:8000/categories/add', params,httpOptions);
      }
      delete(users:any):Observable<any>{
        
        return this.http.delete<users>(`http://localhost:8000/categories/`+users);
      }
    }