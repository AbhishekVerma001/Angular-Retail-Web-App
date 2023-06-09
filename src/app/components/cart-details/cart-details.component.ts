import { CartService } from './../../services/cart.service';
import { CartItem } from './../../common/cart-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {


  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;


  constructor(private cartService: CartService) { }


  ngOnInit(): void {
    this.listCartDetails();
  }


  listCartDetails() {


    // get cart items
    this.cartItems = this.cartService.cartItems;


    // subscribe to cart totalPrice
    this.getTotalPrice();

    // this.cartService.totalPrice.subscribe(
    //   data => this.totalPrice = data
    // );


    // subscribe to cart totalQuantity
    this.getTotalQuantity();
    // this.cartService.totalQuantity.subscribe(
    //   data => this.totalQuantity = data
    // );


    // compute cart total price and quantity
    this.cartService.computeCartTotals();
  }
  getTotalPrice(){
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );
  }

  getTotalQuantity(){
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );
  }

  incrementQuantity(theCartItem: CartItem) {
    this.cartService.addToCart(theCartItem);
  }


  decrementQuantity(theCartItem: CartItem) {
    this.cartService.decrementQuantity(theCartItem);
  }


  remove(theCartItem: CartItem) {
    this.cartService.remove(theCartItem);
  }

}
