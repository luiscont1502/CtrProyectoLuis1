import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../../services/product.service'
import { Product } from '../../Models/product'
import { faListAlt, faEye, faPencilAlt, faUserPlus, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

import { ImageService } from 'src/app/services/image.service';
import { error } from '@angular/compiler/src/util';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  faListAlt = faListAlt;
  faUserPlus = faUserPlus;
  faEye = faEye;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;
  faPlus = faPlus;
  products: Product[] = [];
  @Output() productoToUpdate = new EventEmitter<Product>();
  constructor(private productService: ProductService, private imageService: ImageService,) { }

  ngOnInit(): void {
    this.list();
  }
  list(): void {

    this.productService.list().subscribe(
      result => {

        this.products = result;
        console.log(this.products);
      }
    )

  }
  delete(p: Product): void {
    Swal.fire({
      title: '¿Está seguro de continuar?',
      text: 'El producto: ' + p.prd_nom + ' con id: ' + p.prd_id + ' será eliminado.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.imageService.deleteFile(p.prd_img).subscribe(res => {
          console.log(res),
          this.productService.delete(p).subscribe(result => console.log(result)),
          this.ngOnInit(),
          this.OnReset();
        }, e => {
          console.log(e);
        }
        );
      }
    });
  }
  OnReset(): void{
    // this.products = [];
    this.ngOnInit();
  }
      //recoge los datos para enviar
      update(p: Product): void {

        this.productoToUpdate.emit(p);
        console.log(this.productoToUpdate.emit(p));
      }
    }
