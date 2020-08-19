import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import {faDollarSign, faRuler, faPager, faSave, faTimes,faCartPlus } from '@fortawesome/free-solid-svg-icons';
import {  faTag, faGripVertical, faImage, faList} from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import {CategoriasService} from 'src/app/services/categorias.service';
import {PromocionService} from 'src/app/services/promocion.service';
import { ImageService } from 'src/app/services/image.service';
import { Categoria } from 'src/app/models/categoria';
import { Promocion } from 'src/app/models/promocion';
@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css'],
  providers: [ImageService]
})
export class ProductsCreateComponent implements OnInit {
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
  image: Variable ;
  caption: Variable ;
  categorias:Categoria[];
  promocion:Promocion[];
  public nCategorias='Categrias';
  @Input() product: Product;
  @Input() title: string;
  @Output() flagToReload = new EventEmitter<boolean>();
  public formProduct: FormGroup;
  submitted = false;
  imageUrl = '/assets/img/UploadImage.png';
  fileToUpload: File = null;
  constructor(private imageService: ImageService, private productService: ProductService, private formBuilder: FormBuilder
  ,private categoriasService:CategoriasService,private promocionService:PromocionService) { }

  ngOnInit(): void {
    this.listCategoria();
    this.listPromocion();
    this.product = new Product();
    this.formProduct = this.formBuilder.group({
      prd_img: ['', [Validators.required]],
      cat_id: ['', [Validators.required]],
      prm_id: ['', [Validators.required]],
      prd_nom: ['', [Validators.required]],
      prd_tal: ['', [Validators.required]],
      prd_crt: ['', [Validators.required]],
      prd_cnt: ['', [Validators.required]],
      prd_prc: ['', [Validators.required]]
    });

  }

  public register(): void {
    const user = this.formProduct.value;
    console.log(user);
  }
  onSubmit(): void {

    this.submitted = true;

    if (this.formProduct.invalid){
      console.error('Error en formulario');
      return;
    }
    this.imageService.postFile(this.product.prd_nom, this.fileToUpload).subscribe(data => {
      this.product.prd_img = data;
      console.log(data);
      this.productService.create(this.product).subscribe(
        result => {
           this.submitted = false;
           console.log(result);
           this.flagToReload.emit(true);
         }
       );
    });
  }
  onReset(): void {
    this.submitted = false;
    this.formProduct.reset();
    this.product = new Product();
  }
  handleFileInput(file: FileList): void{
    this.fileToUpload = file.item(0);
    // Show image preview
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }
  //---------------------Listar-----------------------
  //-------------------------------------------------
  listCategoria(): void{
    this.categoriasService.list().subscribe(
      result=>{
        this.categorias=result;
      }
    )
   }
   listPromocion(): void{
    this.promocionService.list().subscribe(
      result=>{
        this.promocion=result;
      }
    )
   }
}
