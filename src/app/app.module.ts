import { HttpIntercepterBasicAuthService } from './services/http-intercepter-basic-auth.service';

import { SignupService } from './services/signup.service';
import { ProductService } from './services/product.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS  } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { Routes, RouterModule} from '@angular/router';
import { ProductMenuComponent } from './components/product-menu/product-menu.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './common/authguard';


const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'cart-details',component:CartDetailsComponent},
  {path:'search/:searchString',component:ProductCatalogComponent},
  {path:'products/:id',component:ProductDetailsComponent},
  {path: 'category/:gender/:id', component: ProductCatalogComponent},
  {path: 'category/:gender', component: ProductCatalogComponent},
  {path: 'category', component: ProductCatalogComponent},
  {path: 'products', component: ProductCatalogComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/products', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    ProductCatalogComponent,
    ProductMenuComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    SignupComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductService,SignupService,HttpClientModule,{
    provide : HTTP_INTERCEPTORS,
    useClass: HttpIntercepterBasicAuthService,
    multi   : true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
