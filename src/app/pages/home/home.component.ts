import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products/products.service';
import { error } from 'console';
import { Hiproduct } from '../../shared/interface/hiproduct';
import { CategoriesService } from '../../core/services/category/categories.service';

@Component({
  selector: 'app-home',
  imports: [],
  // import { ProductsService } from './../../core/services/products/products.service';
// templimport { CategoriesService } from './../../core/services/category/categories.service';
templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private readonly productsService=inject(ProductsService);
  private readonly categoriesService=inject(CategoriesService)
  products:Hiproduct[]=[];
  getProductData():void{
    this.productsService.getAllProducts().subscribe({
      next:(res)=>{
        console.log(res.data);
        this.products = res.data;
      },
      error:(err)=>
      {
        console.log(err);
        
      }
    })
  }
  getCategoryData():void{
    this.categoriesService.getALLCategories().subscribe({
      next:(res)=>{
        console.log(res);
        

      },
      error:(err)=>{
        console.log(err);
        

      }
    })
  }
  ngOnInit(): void {
    this.getProductData();
    this.getCategoryData();
   
  }

}
