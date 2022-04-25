import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { products } from 'src/app/models/products';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any[]=[];
  productSelected={
    id:0,
    productName:'',
    price:'',
    expiationDate:''
  };
  formulario!:FormGroup;
  UpdateForm!:FormGroup;

  constructor(
    private productservice:ProductsService,
    private fb:FormBuilder
  ) { 
  }
  ngOnInit(): void {
    this.formulario=this.fb.group({
      id:[],
      productName:[,Validators.required],
      price:[],
      expiationDate:[]
    })
    this.UpdateForm=this.fb.group({
      id:[],
      productName:[],
      price:[],
      expiationDate:[]
    })
    this.getAll();
  }
  getAll(){
    this.productservice.getAll().subscribe((data:any)=>this.products=data);
  }
  create(){
    if(this.formulario.invalid){
      this.formulario.markAllAsTouched();
      return;
    }
    console.log(this.formulario.value.productName)
    this.productservice.Create(this.formulario.value).subscribe(()=>{
      this.getAll();})
  }
  onSelect(selectedItem: any) {
    
    this.productSelected=selectedItem;
    const form=this.productSelected;
    this.UpdateForm.value.id=selectedItem.id;
    this.UpdateForm.value.productName=selectedItem.productName;
    this.UpdateForm.value.price=selectedItem.price;
    this.UpdateForm.value.expiationDate=selectedItem.expiationDate;
    console.log(this.UpdateForm.value);
  }
  update(){
    this.productSelected.productName=this.UpdateForm.value.productName;
    this.productSelected.price=this.UpdateForm.value.price;
    this.productSelected.expiationDate=this.UpdateForm.value.expiationDate;
   this.productservice.update(this.productSelected).subscribe(()=>{
     this.getAll();})
  }
  delete(id:any){
    this.productservice.delete(id).subscribe(()=>{
      this.getAll();});
  }


}
