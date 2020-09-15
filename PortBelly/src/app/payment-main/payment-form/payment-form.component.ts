import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {faSignature,faPlus,faIdCard,faSave,faTimes, faVenus } from '@fortawesome/free-solid-svg-icons';
import { Payment } from 'src/app/models/payment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {PaymentsService} from 'src/app/Services/payments.service';
import {DatePipe} from '@angular/common';
import { ConstantPool } from '@angular/compiler';
@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
faPlus=faPlus;
faIdCard=faIdCard;
faSave=faSave;
faTimes=faTimes;

@Input() mes:number;
@Input() anio:number;
@Input() payment:Payment;
@Input() tittle:string;
@Output() flagToReload=new EventEmitter<Boolean>();
form:FormGroup;
submitted:boolean=false;
Mes:Array<string>=['01','02','03','04','05','06','07','08','09','10','11','12'];
Anio: Array<string> = ['20', '21', '22', '23', '24','25','26','27'];
IntPosiPattern = '0+\.[0-9]*[1-9][0-9]*$';
constructor(private paymentService:PaymentsService,private formBuilder:FormBuilder, private datePipe:DatePipe) { }

  ngOnInit(): void {

    this.payment=new Payment();

    this.form=this.formBuilder.group({
      'pgo_ntg':['',[Validators.required, Validators.minLength(15), Validators.maxLength(16)]],
      //pgo_fven:['',[Validators.required]],
      mes:['',[Validators.required]],
      anio:['',[Validators.required]],

      pgo_cseg:['',[Validators.required]],
      pgo_nom:['',[Validators.required]]
    })
  }
  onSubmit() : void {

    this.submitted = true;

    if(this.form.invalid){
      console.error('Error en formulario');
      return;
    }
  //console.log(this.payment.anio+'-'+this.payment.mes+'-01');
  this.payment.pgo_fven='20'+this.payment.anio+'-'+this.payment.mes+'-01';

    this.paymentService.create(this.payment).subscribe(
      result => {
        this.submitted = false;

        console.log(result);
        this.flagToReload.emit(true);
      }
    );
  }
  onReset() : void {
    this.submitted = false;
    this.form.reset();
    this.payment= new Payment();
    window.location.reload();
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}
