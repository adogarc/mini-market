import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any[]=[];
  constructor(
    private userservice:UserService
  ) { }

  ngOnInit(): void {
    this.userservice.getAll().subscribe((data:any)=>this.users=data);
  }

}
