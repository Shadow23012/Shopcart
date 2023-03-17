import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import {CardModule} from 'primeng/card';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import {DialogModule} from 'primeng/dialog'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import {ToastModule} from 'primeng/toast';
import { LoginComponent } from './login/login.component';
import {PasswordModule} from 'primeng/password'
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  imports: [
    BrowserModule,
    CardModule,
    HttpClientModule,
    DialogModule,
    ReactiveFormsModule,
    ToastModule,
    PasswordModule,
    InputTextModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'cart', component: CartComponent},
      { path: 'shipping', component: ShippingComponent },
      { path: 'login', component: LoginComponent}
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductComponent,
    ProductAlertsComponent,
    CartComponent,
    ShippingComponent,
    LoginComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/