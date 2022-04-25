import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any[]=[];
  formulario!:FormGroup;

  constructor(
    private userservice:UserService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario=this.fb.group({
      id:[],
      idRol:[],
      userName:[,Validators.required],
      password:[]
    })

    this.getAll();
  }
  getAll(){
    this.userservice.getAll().subscribe((data:any)=>this.users=data);
  }
  create(){
    console.log('los valores: ',this.formulario.value);
    if(this.formulario.invalid){
      this.formulario.markAllAsTouched();
      return;
    }
    this.userservice.Create(this.formulario.value).subscribe(()=>{
      this.getAll();})
  }

}
