import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import {faDollarSign, faRuler, faPager, faSave, faTimes, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faTag, faGripVertical, faImage, faList,faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import { ImageService } from '../../services/image.service';
import { DomSanitizer } from '@angular/platform-browser';
import { CategoriasService } from 'src/app/services/categorias.service';
import { PromocionService } from 'src/app/services/promocion.service';
@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent implements OnInit {
  faList = faList;
  faCartPlus = faCartPlus;
  faPager = faPager;
  faTag = faTag;
  faRuler = faRuler;
  faGripVertical = faGripVertical;
  faDollarSign = faDollarSign;
  faTimes = faTimes;
  faSave = faSave;
  faImage = faImage;
  faPencilAlt=faPencilAlt;
  product: Product;


  imageUrl = '/assets/img/UploadImage.png';
  base64data: string;
  imageToShow: any = '/assets/img/UploadImage.png';
  constructor(private productService: ProductService,private categoriaService:CategoriasService,private promocionService:PromocionService, private activatedRoute: ActivatedRoute, private imageService: ImageService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getProductFromService();

  }
 // Obtiene el producto segun la id
 getProductFromService(): void{
  this.activatedRoute.params.subscribe(
    params => {
      this.product = new Product();
      if ( params[ "id" ]){
        this.productService.retrive(params["id"]).subscribe(
          result => {this.product = result,
            this.getImageFromService();

          }
        );
      }
    }
  );
}
// Obtien la imagen respecto a ese producto
getImageFromService(): void{
  this.imageService.getProfileImage(this.product.prd_img).subscribe(
    (data: any) => {
      const objectURL = 'data:image/jpeg;base64,' + data;
      this.imageToShow = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    },
    (error) => {
      console.log(error);
    }
  );
}
}
