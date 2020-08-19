import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import {  FormBuilder,FormGroup ,Validators} from '@angular/forms';
import { faUserPlus, faIdCard, faSave,faTimes,faTag} from '@fortawesome/free-solid-svg-icons';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit {
  faTimes=faTimes;
  faTag=faTag;
  faIdCard = faIdCard;
  faSave = faSave;
  @Input() categorias : Categoria;
  @Input() title : string;
  @Output() flagToReload = new EventEmitter<Boolean>();
  form: FormGroup;
  submitted: boolean = false;
  constructor(private categoriasService:CategoriasService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombres: ['', [Validators.required]],
    });
  }
  get f(){
    return this.form.controls;
  }
  onSubmit() : void {

    this.submitted = true;

    if(this.form.invalid){
      console.error('Error en formulario');
      return;
    }

    this.categoriasService.create(this.categorias).subscribe(
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
    this.categorias= new Categoria();
    window.location.reload();
  }



}
