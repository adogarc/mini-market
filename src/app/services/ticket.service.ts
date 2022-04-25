import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ticket } from '../models/tickets';

@Injectable({
    providedIn: 'root'
  })
  export class Ticketservice {
  
    constructor(
      private http:HttpClient
    ) { }
    
    getAll():Observable<any>{
      return this.http.get<any>('http://localhost:8000/tickets/all');
    }
  }
  