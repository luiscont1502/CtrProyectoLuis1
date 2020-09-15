import { Component, OnInit } from '@angular/core';
import { Payment } from '../models/payment';
@Component({
  selector: 'app-payment-main',
  templateUrl: './payment-main.component.html',
  styleUrls: ['./payment-main.component.css']
})
export class PaymentMainComponent implements OnInit {
mainPayment:Payment;
mainTitle:string;
mainReload:boolean;
  constructor() { }

  ngOnInit(): void {
  }

  onInit() : void {
    this.mainPayment = new Payment();
    this.mainTitle = "Registro de nueva Categoria";
    this.mainReload = false;
  }
  toUpdate($event) : void{

    this.mainPayment = $event;
     this.mainPayment.pgo_nom;
     console.log(this.mainPayment.anio);
     console.log(this.mainPayment.mes);
     console.log(this.mainPayment);
     this.mainTitle = "Editando registro de "+$event.cat_nom ;

   }
   toReload($event) : void {
    this.onInit();
    console.log($event);
    this.mainReload = $event;
  }
  reloadDone($event){
    this.mainReload = !$event;
  }

}
