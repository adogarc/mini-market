import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { categories} from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http:HttpClient
  ) { }
  
  getAll():Observable<any>{
    return this.http.get<any>('http://localhost:8000/products/all');
  }
  Create(data: any){
    return this.http.post('http://localhost:8000/products/add', data);
  }
 getCategory():Observable<categories[]>{
    return this.http.get<categories[]>('http://localhost:8000/products/all');
  }
}
