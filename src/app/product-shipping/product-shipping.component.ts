import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './product-shipping.component.html',
  styleUrls: ['./product-shipping.component.css']
})
export class ShipComponent implements OnInit {
  shippingCosts;
  constructor(
    private cartService: CartService
  ) {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

  ngOnInit() {
  }

}