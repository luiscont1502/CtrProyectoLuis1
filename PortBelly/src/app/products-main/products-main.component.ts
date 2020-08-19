import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-products-main',
  templateUrl: './products-main.component.html',
  styleUrls: ['./products-main.component.css']
})
export class ProductsMainComponent implements OnInit {
  mainProducto:Product;
  mainTitle:string;
  mainReload : boolean;
  constructor() { }

  ngOnInit(): void {
this.onInit();

  }
onInit(): void{
  this.mainProducto=new Product();
  this.mainTitle = "Registro de nuev@ Producto";
    this.mainReload = false;
}
toUpdate($event: Product) : void{

  console.log($event);
 this.mainProducto=$event;
 this.mainTitle="Editar de registro de "+$event.prd_nom+" "+$event.prd_crt ;
}

}
