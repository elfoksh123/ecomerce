import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {


  constructor(private httpclient:HttpClient) { }
  getALLCategories():Observable<any>{
    return this.httpclient.get('https://ecommerce.routemisr.com/api/v1/categories');
  }
  getSpacificCategories(id:string):Observable<any>{
    return this.httpclient.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`);
  }
}
