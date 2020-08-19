import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-main/products-list/products-list.component';
import { ProductsCreateComponent } from './products-main/products-create/products-create.component';
import { ProductsMarketComponent } from './products-main/products-market/products-market.component';
import { ProductsViewComponent } from './products-main/products-view/products-view.component';
import { CategoriesMainComponent } from './categories-main/categories-main.component';
import { PromotionMainComponent } from './promotion-main/promotion-main.component';
import { ProductInCartAddComponent } from './product-in-cart-main/product-in-cart-add/product-in-cart-add.component';
import { ProductInCartListComponent } from './product-in-cart-main/product-in-cart-list/product-in-cart-list.component';
import { UsersCreateComponent } from './users-main/users-create/users-create.component';
const routes: Routes = [
  {path: '',redirectTo:'/',pathMatch:'full'},
  {path:'tienda', component:ProductsMarketComponent},
  {path: 'productos',component:ProductsListComponent},
  {path:'productos/crear',component:ProductsCreateComponent},
  {path:'productos/ver/:id',component:ProductsViewComponent},
  {path:'categorias',component:CategoriesMainComponent},
{path: 'promociones', component: PromotionMainComponent},
{path: 'productoencarrito/add/:id', component: ProductInCartAddComponent},
{path: 'carritopersonal', component: ProductInCartListComponent},
{path: 'usuario',component:UsersCreateComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
