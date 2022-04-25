import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { categories } from 'src/app/models/categories';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories:any[]=[];
  categorySelected={
    id:0,
    categoryName:''
  };
  formulario!:FormGroup;
  UpdateForm!:FormGroup;
  

  constructor(
    private categoriesservice:CategoriesService,
    private fb:FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formulario=this.fb.group({
      id:[],
      categoryName:[,Validators.required]
    });
    this.UpdateForm=this.fb.group({
      id:[],
      categoryName:[]
    })

    this.getAll();
  }
  getAll(){
    this.categoriesservice.getAll().subscribe((data:any)=>this.categories=data);
  }
  create(){
    if(this.formulario.invalid){
      this.formulario.markAllAsTouched();
      return;
    }
    console.log(this.formulario.value.categoryName)
    this.categoriesservice.Create(this.formulario.value).subscribe(()=>{
      this.getAll();})
  }
  onSelect(selectedItem: any) {
    
    this.categorySelected=selectedItem;
    const form=this.categorySelected;
    this.UpdateForm.value.id=selectedItem.id;
    this.UpdateForm.value.categoryName=selectedItem.categoryName;
    console.log(this.UpdateForm.value);
  }
  update(){
    this.categorySelected.categoryName=this.UpdateForm.value.categoryName;
   this.categoriesservice.update(this.categorySelected).subscribe(()=>{
     this.getAll();})
  }
  delete(id:any){
    this.categoriesservice.delete(id).subscribe(()=>{
      this.getAll();});
  }

}
