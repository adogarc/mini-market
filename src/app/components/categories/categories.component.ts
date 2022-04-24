import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories:any[]=[];
  formulario!:FormGroup;

  constructor(
    private categoriesservice:CategoriesService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario=this.fb.group({
      id:[],
      categoryName:[,Validators.required]
    })

    this.getAll();
  }
  getAll(){
    this.categoriesservice.getAll().subscribe((data:any)=>this.categories=data);
  }
  create(){
    console.log('los valores: ',this.formulario.value);
    if(this.formulario.invalid){
      this.formulario.markAllAsTouched();
      return;
    }
    this.categoriesservice.Create(this.formulario.value).subscribe(()=>{
      this.getAll();})
  }

}
