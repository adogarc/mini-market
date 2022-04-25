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
  userSelected={
    id:0,
    userName:''
  };
  formulario!:FormGroup;
  UpdateForm!:FormGroup;

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
    this.UpdateForm=this.fb.group({
      id:[],
      userName:[]
    })

    this.getAll();
  }
  getAll(){
    this.userservice.getAll().subscribe((data:any)=>this.users=data);
  }
  create(){
    if(this.formulario.invalid){
      this.formulario.markAllAsTouched();
      return;
    }
    console.log(this.formulario.value.userName)
    this.userservice.Create(this.formulario.value).subscribe(()=>{
      this.getAll();})
  }
  onSelect(selectedItem: any) {
    
    this.userSelected=selectedItem;
    const form=this.userSelected;
    this.UpdateForm.value.id=selectedItem.id;
    this.UpdateForm.value.userName=selectedItem.userName;
    console.log(this.UpdateForm.value);
  }
  update(){
    this.userSelected.userName=this.UpdateForm.value.userName;
   this.userservice.update(this.userSelected).subscribe(()=>{
     this.getAll();})
  }
  delete(id:any){
    this.userservice.delete(id).subscribe(()=>{
      this.getAll();});
  }

}
