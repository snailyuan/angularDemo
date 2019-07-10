import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class CartComponent {
  items;
  constructor(
    private CartService: CartService
  ) {
    this.items = this.CartService.getItems();
  }

}