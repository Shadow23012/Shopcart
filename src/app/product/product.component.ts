import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{
  @Input() producto!: Product;

  compartir() {
    window.alert('The product has been shared!');
  }

  onNotify(){
    window.alert('seras notificado cuando el producto este en venta')
  }

  display: boolean = false;
	showDialog() {
    console.log ("desplegado");
        this.display = true;
      }

  
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
      ) { }


      addToCart(product: Product) {
        this.cartService.addToCart(product);
        window.alert('Your product has been added to the cart!');
      }
  }

