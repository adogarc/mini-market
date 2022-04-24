import { Component, OnInit } from '@angular/core';
import {users} from '../../models/users';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {

  public page_title:String;

  constructor(
  ) { 
    this.page_title='Login';
  }

  ngOnInit(): void {
  }


}
