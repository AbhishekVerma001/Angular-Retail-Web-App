import { requestOptions } from './../common/global';
import { TOKEN } from './login.service';
import { ProductCategory } from './../common/product-category';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
 
 
  // private baseUrl='http://localhost:8081/products';
  // private categoryUrl='http://localhost:8081/product-category';
  private baseUrl='http://localhost:8080/products';
  private categoryUrl='http://localhost:8080/product-category';
  constructor(private httpClient:HttpClient) { } 

  getProductCatalog(categoryId:number,gender:string):Observable<Product[]>{
    if(gender=='None'){
      console.log("url =",this.baseUrl);
      return this.getAllProducts(this.baseUrl+'?size=150');
    }
    

    else if(categoryId==0){
      const url=`${this.baseUrl}/search/findProductsByGender?gender=${gender}`; 
      console.log("url =",url);
      return this.getAllProducts(url);
    }
    
    const searchUrl=`${this.baseUrl}/search/findProductsByGenderAndCategory_Id?gender=${gender}&categoryId=${categoryId}`;
    console.log("url="+searchUrl);
    return this.getAllProducts(searchUrl);
  }
  getAllProducts(searchUrl: string): Observable<Product[]> {

    const data= this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
    //console.log("returned data=",data);
    return data
  }

  getProductCategories():Observable<ProductCategory[]> {
    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
      map(response=>response._embedded.Category)
    );
  }
  searchProducts(searchString: string):Observable<Product[]> {
    const searchUrl=`${this.baseUrl}/search/findByNameContaining?name=${searchString}`;
    console.log("url= "+searchUrl);
    return this.getAllProducts(searchUrl);
  }
  getProduct(id: number):Observable<Product> {
    const url=`${this.baseUrl}/${id}`;
    return this.httpClient.get<Product>(url);
  }
//   getProductListPaginate(Page: number,
//     PageSize: number,
//     gender:string,
//     categoryId: number): Observable<GetResponseProducts> {


// // need to build URL based on category id, page and size
// const searchUrl = `${this.baseUrl}/search/findProductsByGenderAndCategory_Id?gender=${gender}&categoryId=${categoryId}`;
// + `&page=${Page}&size=${PageSize}`;


// return this.httpClient.get<GetResponseProducts>(searchUrl);
// }

}
interface GetResponseProducts{
  _embedded:{
    products:Product[];
  },
  // page:{
  //   size:number,
  //   totalElements:number,
  //   totalPages:number,
  //   number:number
  // }
}

interface GetResponseProductCategory{
  _embedded:{
    Category:ProductCategory[];
  }
}