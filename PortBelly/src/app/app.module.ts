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
import { ContactanosMainComponent } from './contactanos-main/contactanos-main.component';
//google maps de angular
import { GoogleMapsModule} from '@angular/google-maps';
import { DatePipe } from '@angular/common';
//message
import { MessageService } from './services/message.service';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { UserMainComponent } from './user-main/user-main.component';
import { UserSignInMainComponent } from './user-main/user-sign-in-main/user-sign-in-main.component';
import { UserSignUpMainComponent } from './user-main/user-sign-up-main/user-sign-up-main.component';
import { UserSignInFormComponent } from './user-main/user-sign-in-main/user-sign-in-form/user-sign-in-form.component';
import { UserSignUpFormComponent } from './user-main/user-sign-up-main/user-sign-up-form/user-sign-up-form.component';
import { PaymentMainComponent } from './payment-main/payment-main.component';
import { PaymentFormComponent } from './payment-main/payment-form/payment-form.component';
import { PaymentListComponent } from './payment-main/payment-list/payment-list.component';
import { TipoFechaPipe } from './shared/tipo-fecha.pipe';
import { ReportMainComponent } from './report-main/report-main.component';
import { ProductsEditComponent } from './products-main/products-edit/products-edit.component';

import {NgxStripeModule} from 'ngx-stripe';
import { NgxFileDropModule } from 'ngx-file-drop';
import { ClienteMainComponent } from './cliente-main/cliente-main.component';
import { PieChartComponent } from './report-main/pie-chart/pie-chart.component';
import { ChartsModule } from 'ng2-charts';
import { ReportDetailsComponent } from './report-main/report-details/report-details.component';
import { BarChartComponent } from './report-main/bar-chart/bar-chart.component';

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
    ContactanosMainComponent,
    InicioComponent,
    FooterComponent,
    UserMainComponent,
    UserSignInMainComponent,
    UserSignUpMainComponent,
    UserSignInFormComponent,
    UserSignUpFormComponent,
    PaymentMainComponent,
    PaymentFormComponent,
    PaymentListComponent,
    TipoFechaPipe,
    ReportMainComponent,
    ProductsEditComponent,
    ClienteMainComponent,
    PieChartComponent,
    ReportDetailsComponent,
    BarChartComponent,



  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    ChartsModule,
    NgxFileDropModule,
    NgxStripeModule.forRoot('pk_test_51HOS6pLhIET9gHWLGJdFB5a8UfCdZknGfi7HgfieaXSznHII8HMGHm4jngswuBvmEFU5SCt9LXH2dBUYpRfxjCkT00z0d52cND'),
  ],
  providers: [
    DatePipe,
    ProductService, {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceInterceptor,
      multi: true,

    },MessageService,
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
