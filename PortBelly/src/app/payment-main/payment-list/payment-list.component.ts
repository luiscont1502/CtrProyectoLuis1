import { Component, OnInit, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { faListAlt, faEye, faPencilAlt,faUserPlus, faTrash,faPlus } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert2';
import { Payment } from 'src/app/models/payment';
import {PaymentsService} from 'src/app/Services/payments.service';
@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {
  faListAlt = faListAlt;
  faUserPlus=faUserPlus;
  faEye = faEye;
  faPencilAlt = faPencilAlt;
  faTrash=faTrash;
  faPlus=faPlus;
payment:Payment[];
@Input() flagToReload;
@Output() paymentToUpdate=new EventEmitter<Payment>();
@Output() reloadComplete=new EventEmitter<Boolean>();

  constructor(private paymentsService:PaymentsService) { }

  ngOnInit(): void {
    this.list();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.flagToReload.currentValue) {
      if (this.flagToReload) {
        this.list();
      }
    }
  }
  list(): void {
    this.paymentsService.list().subscribe(
      result => {
        this.payment = result;
        this.reloadComplete.emit(true);
      }
    )
  }
  update(p: Payment): void {
    let anio=p.pgo_fven.split("-")[0];
    let mes= p.pgo_fven.split("-")[1];
    p.anio=Number(anio);
    p.mes=Number(mes);


    this.paymentToUpdate.emit(p);

    console.log(this.paymentToUpdate.emit(p));
  }
  delete(payment: Payment): void {
    swal.fire({
      title: '¿Está seguro de continuar?',
      text: "El registro de " + payment.pgo_nom + " será eliminado.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.paymentsService.delete(payment).subscribe(
          result => console.log(result)
        )
      }
    })
  }


}
