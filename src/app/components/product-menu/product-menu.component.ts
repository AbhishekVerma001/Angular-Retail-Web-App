import { Router } from '@angular/router';
import { AUTHENTICATED_USER, TOKEN, LoginService } from './../../services/login.service';
import { ProductCategory } from './../../common/product-category';
import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.css']
})
export class ProductMenuComponent {
  //isLoggedIn:boolean;
  productCategories:ProductCategory[]=[];
  constructor(private productService: ProductService,
    public loginService:LoginService,
    private router:Router) { }


  ngOnInit() {
    this.listProductCategories();
  }


  listProductCategories() {

   
    
    this.productService.getProductCategories().subscribe(
      data => {
        console.log('Product Categories=' + JSON.stringify(data));
        this.productCategories = data;
      }
    );
  }
  logout(){

    this.loginService.logout();
    // sessionStorage.removeItem(AUTHENTICATED_USER);
    // sessionStorage.removeItem(TOKEN);
    // this.loginService.isLoggedIn=this.loginService.checkLoggedInStatus();
    this.router.navigateByUrl('/login');

  }
}
