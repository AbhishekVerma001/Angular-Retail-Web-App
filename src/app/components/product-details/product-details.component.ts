import { CartItem } from './../../common/cart-item';
import { CartService } from './../../services/cart.service';
import { Product } from 'src/app/common/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product!:Product;
  constructor(private productService: ProductService,
    private cartService :CartService,
    private  route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getProductDetails();
    })
  }


  getProductDetails() {


    // get the "id" param string. convert string to a number using the "+" symbol
    const id: number = +this.route.snapshot.paramMap.get('id')!;


    this.productService.getProduct(id).subscribe(
      data => {
        console.log("product details:",data);
        this.product = data;
      }
    )
  }

  addToCart() {


    console.log(`Adding to cart: ${this.product.name}, ${this.product.unitPrice}`);
    const theCartItem = new CartItem(this.product);
    this.cartService.addToCart(theCartItem);
   
  }


}


