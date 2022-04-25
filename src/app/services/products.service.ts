import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { products } from '../models/products';

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
  Create(products:any):Observable<any>{
    products.id=0
    let json =JSON.stringify(products);
    let params=json;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.http.post<products>('http://localhost:8000/products/add', params,httpOptions);
  }
  update(products:any):Observable<any>{
    let json =JSON.stringify(products);
    let params=json;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.http.post<products>('http://localhost:8000/products/add', params,httpOptions);
  }
  delete(products:any):Observable<any>{
    return this.http.delete<products>(`http://localhost:8000/products/`+products);
  }
}
