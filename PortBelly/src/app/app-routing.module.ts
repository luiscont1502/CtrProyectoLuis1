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
import { ContactanosMainComponent } from './contactanos-main/contactanos-main.component';
import { InicioComponent } from './inicio/inicio.component';
import {AuthGuard} from './guards/auth.guard';
import { UserMainComponent } from './user-main/user-main.component';
import { PaymentFormComponent } from './payment-main/payment-form/payment-form.component';
import { PaymentListComponent } from './payment-main/payment-list/payment-list.component';
import { PaymentMainComponent } from './payment-main/payment-main.component';
import { ClienteMainComponent } from './cliente-main/cliente-main.component';
import { ReportMainComponent } from './report-main/report-main.component';
import { ReportDetailsComponent } from './report-main/report-details/report-details.component';

const routes: Routes = [
  {path:'Inicio',component:InicioComponent},
  {path:'tienda', component:ProductsMarketComponent/*, canActivate: [AuthGuard], data: { permittedRoles: ['Cliente'] },*/},
  {path: 'productos',component:ProductsListComponent/*, canActivate: [AuthGuard],data: { permittedRoles: ['Administrador'] },*/},
  {path:'productos/crear',component:ProductsCreateComponent/*,canActivate: [AuthGuard],data: { permittedRoles: ['Administrador'] },*/},
  {path:'productos/ver/:id',component:ProductsViewComponent/*,canActivate: [AuthGuard],data: { permittedRoles: ['Administrador'] },*/},

  {path:'categorias',component:CategoriesMainComponent/*,canActivate: [AuthGuard],data: { permittedRoles: ['Cliente'] },*/},
{path: 'promociones', component: PromotionMainComponent/*,canActivate: [AuthGuard],data: { permittedRoles: ['Cliente'] },*/},
{path: 'productoencarrito/add/:id', component: ProductInCartAddComponent/*,canActivate: [AuthGuard],data: { permittedRoles: ['Administrador'] },*/},
{path: 'carritopersonal', component: ProductInCartListComponent/*,canActivate: [AuthGuard],data: { permittedRoles: ['Cliente'] },*/},
{path: 'usuario',component:UsersCreateComponent/*, canActivate: [AuthGuard], data: { permittedRoles: ['Cliente'] },*/},
{path: 'contactos',component:ContactanosMainComponent},
{path: 'login', component: UserMainComponent },
{path:'pagos',component:PaymentMainComponent},
{path: 'cliente',component:ClienteMainComponent},
{path:'reporte',component:ReportDetailsComponent},
{path: '**',redirectTo:'Inicio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

