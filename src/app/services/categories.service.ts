import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { categories } from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http:HttpClient
  ) { }

  getAll():Observable<any>{
    return this.http.get<any>('http://localhost:8000/categories/all');
  }
  Create(categories:any):Observable<any>{
    let json =JSON.stringify(categories);
    let params=json;
    console.log(params);
    return this.http.post<categories>('http://localhost:8000/categories/add', params);
  }
}
