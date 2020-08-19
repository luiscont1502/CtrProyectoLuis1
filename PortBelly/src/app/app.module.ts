import { BrowserModule } from '@angular/platform-browser';
//Imports Adicionales Module Reactive module
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//-----------------------------------------------------
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { ServiceInterceptor } from './services/service.interceptor';
import { AppComponent } from './app.component';

import { ProductsMainComponent } from './products-main/products-main.component';
import { ProductsCreateComponent } from './products-main/products-create/products-create.component';
import { ProductsListComponent } from './products-main/products-list/products-list.component';
import { ProductService } from './services/product.service';
import { ImageService } from './services/image.service';
import { CommonModule } from '@angular/common';
import { ProductMarketComponent } from './products-main/product-market/product-market.component';
import { ProductsMarketComponent } from './products-main/products-market/products-market.component';
import { ProductsViewComponent } from './products-main/products-view/products-view.component';
import { CategoriesMainComponent } from './categories-main/categories-main.component';
import { CategoriesListComponent } from './categories-main/categories-list/categories-list.component';
import { CategoriesFormComponent } from './categories-main/categories-form/categories-form.component';
import { UsersMainComponent } from './users-main/users-main.component';
import { UsersListComponent } from './users-main/users-list/users-list.component';
import { TipoPromocionPipe } from './shared/tipo-promocion.pipe';
import { PromotionMainComponent } from './promotion-main/promotion-main.component';
import { PromotionListComponent } from './promotion-main/promotion-list/promotion-list.component';
import { PromotionFormComponent } from './promotion-main/promotion-form/promotion-form.component';
import { ProductInCartMainComponent } from './product-in-cart-main/product-in-cart-main.component';
import { ProductInCartAddComponent } from './product-in-cart-main/product-in-cart-add/product-in-cart-add.component';
import { ProductInCartCreateComponent } from './product-in-cart-main/product-in-cart-create/product-in-cart-create.component';
import { ProductInCartListComponent } from './product-in-cart-main/product-in-cart-list/product-in-cart-list.component';
import { UsersCreateComponent } from './users-main/users-create/users-create.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsMainComponent,
    ProductsCreateComponent,
    ProductsListComponent,
    ProductMarketComponent,
    ProductsMarketComponent,
    ProductsViewComponent,
    CategoriesMainComponent,
    CategoriesListComponent,
    CategoriesFormComponent,
    UsersMainComponent,
    UsersListComponent,
    TipoPromocionPipe,
    PromotionMainComponent,
    PromotionListComponent,
    PromotionFormComponent,
    ProductInCartMainComponent,
    ProductInCartAddComponent,
    ProductInCartCreateComponent,
    ProductInCartListComponent,
    UsersCreateComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ProductService, {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceInterceptor,
      multi: true
    },
    {
      provide: LOCALE_ID,
      useValue : 'es-EC'
    },
    ImageService, {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
