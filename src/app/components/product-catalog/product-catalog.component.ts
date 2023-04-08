import { LoginService } from './../../services/login.service';
import { CartService } from './../../services/cart.service';
import { CartItem } from './../../common/cart-item';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog-grid.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent implements OnInit {


  products: Product[] = [];
  currentCategoryId:number=0;
  //previousCategoryId: number=1;
  Gender:string="None";
  //previousGender:string="Men";
  searchMode:boolean =false;

  // PageNumber: number = 1;
  // PageSize: number = 10;
  // TotalElements: number = 0;
  

  constructor(private productService: ProductService,
    private cartService:CartService,
    public loginService:LoginService,
    private route:ActivatedRoute,
    private router:Router) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.listProducts();
    })
    
  }


  listProducts() {
    if(!this.loginService.checkLoggedInStatus()){
      alert(`Please Login to Continue`);
      this.router.navigateByUrl('/login');
    }
    this.searchMode = this.route.snapshot.paramMap.has('searchString');


    if (this.searchMode) {
      this.getSearchProducts();
    }
    else {
      this.getProductsByGenderAndCategoryId();
    }

  }
  

  getSearchProducts() {


    const searchString: string = this.route.snapshot.paramMap.get('searchString')!;


    // now search for the products using keyword
    this.productService.searchProducts(searchString).subscribe(
      data => {
        console.log("data= ",data);
        this.products = data;
      }
    )
  }

  getProductsByGenderAndCategoryId() {


    
    const hasGender:boolean=this.route.snapshot.paramMap.has('gender');
    const hasCategoryId:boolean=this.route.snapshot.paramMap.has('id');
    this.Gender="None";
    this.currentCategoryId=0;

    if(hasGender){
      this.Gender=this.route.snapshot.paramMap.get('gender')!;
      
      if(hasCategoryId){
        this.currentCategoryId=+this.route.snapshot.paramMap.get('id')!;
        
      }
    }
    console.log("id="+this.currentCategoryId+" gender="+this.Gender);
    this.productService.getProductCatalog(this.currentCategoryId,this.Gender).subscribe(
      data => {
        this.products = data;
      }
    )
    // if(this.previousGender==this.Gender){
    //   if (this.previousCategoryId != this.currentCategoryId) {
    //     this.PageNumber = 1;
    //     this.previousCategoryId = this.currentCategoryId;
    //   }
    //   //else
    // }
    // else{
    //       this.previousGender=this.Gender;
    //       this.previousCategoryId = this.currentCategoryId;
    //       this.PageNumber = 1;
    // }


    


    // console.log(`currentCategoryId=${this.currentCategoryId}, thePageNumber=${this.PageNumber},gender=${this.Gender}`);


    // // now get the products for the given category id
    // this.productService.getProductListPaginate(this.PageNumber - 1,
    //                                            this.PageSize,
    //                                            this.Gender,
    //                                            this.currentCategoryId)
    //                                            .subscribe(
    //                                             data => {
    //                                               this.products = data._embedded.products;
    //                                               this.PageNumber = data.page.number + 1;
    //                                               this.PageSize = data.page.size;
    //                                               this.TotalElements = data.page.totalElements;
    //                                             }                                    
    //                                            );
  

  }


  addToCart(product: Product) {
   
    console.log(`Adding to cart: ${product.name}, ${product.unitPrice}`);


    // TODO ... do the real work
    const theCartItem = new CartItem(product);


    this.cartService.addToCart(theCartItem);
  }

   



}
