import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any[]=[];
  categories:any[]=[];
  formulario!:FormGroup;

  constructor(
    private productservice:ProductsService,
    private categoryservice:CategoriesService,
    private fb:FormBuilder
  ) { 
  }
  ngOnInit(): void {
    this.formulario=this.fb.group({
      id:[],
      productName:[,Validators.required]
    })

    this.getAll();
    this.getAllCategory
  }
  getAll(){
    this.productservice.getAll().subscribe((data:any)=>this.products=data);
  }
  getAllCategory(){
    this.categoryservice.getAll().subscribe((data:any)=>this.categories=data);
  }
  create(){
    console.log('los valores: ',this.formulario.value);
    if(this.formulario.invalid){
      this.formulario.markAllAsTouched();
      return;
    }
    this.productservice.Create(this.formulario.value).subscribe(()=>{
      this.getAll();})
  }


}
