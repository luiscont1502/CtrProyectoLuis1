import{Categoria} from './categoria';
import{Promocion} from './promocion';
export class Product {
  prd_id:number;
  cat_id:number;
  prm_id:number;
  prd_nom:string;
  prd_img:string;
  prd_tal:string;
  prd_crt:string;
  prd_prd_dateOfCreated:string;
  prd_cnt:number;
  prd_precio:number;
  Categoria:Categoria;
  Promocion:Promocion;
}
