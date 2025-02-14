import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products/products.service';
import { error } from 'console';
import { Hiproduct } from '../../shared/interface/hiproduct';
import { CategoriesService } from '../../core/services/category/categories.service';
import { Icategory } from '../../shared/interface/icategory';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  imports: [CarouselModule],
 
templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private readonly productsService=inject(ProductsService);
  private readonly categoriesService=inject(CategoriesService);
  custommain: OwlOptions = {
   loop: true,
   mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay:true,
    
    dots: false,
     navSpeed: 700,
    navText: ['', ''],
   items:1,
  nav: false
   }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
  products:Hiproduct[]=[];
  Categories:Icategory[]=[];
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
        console.log(res.data);
        this.Categories = res.data;
        

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
