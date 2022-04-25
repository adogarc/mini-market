import { Component } from '@angular/core';
import { CategoriesService } from './services/categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CategoriesService]
})
export class AppComponent {
  title = 'mini-market';
  public categories: any;
  constructor(
    private _categoryService:CategoriesService
  ){}

  ngOnInit(){
    this.getCategories();
  }
  getCategories(){
    this._categoryService.getAll().subscribe(
      response=>{
        this.categories=response.categories
      }
    )
  }
}
