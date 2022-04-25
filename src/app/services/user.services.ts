import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

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
      Create(data: any){
        return this.http.post('http://localhost:8000/users/all',data)
      }
    }