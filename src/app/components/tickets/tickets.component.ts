import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ticketservice} from '../../services/ticket.service';

@Component({
  selector: 'tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  tickets:any[]=[];
  

  constructor(
    private ticketservice:Ticketservice
  ) {}

  ngOnInit(): void {
  }
  getAll(){
    this.ticketservice.getAll().subscribe((data:any)=>this.tickets=data);
  }

}
