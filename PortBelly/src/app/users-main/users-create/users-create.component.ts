import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {faUser,faKey,faUsers,faSignature,faEnvelope,faSave,faTimes} from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {
faSave=faSave;
faTimes=faTimes;
faUser=faUser;
faKey=faKey;
faUsers=faUsers;
faSignature=faSignature;
faEnvelope=faEnvelope;
submited=false;
@Input() user:User;
@Input() title:string;
@Output() flagToReload=new EventEmitter<Boolean>();
form:FormGroup;

  constructor(private userService:UserService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.user=new User();
    this.form=this.formBuilder.group({
      uso_usu: ['', [Validators.required]],
      uso_nom: ['', [Validators.required]],
      uso_rol: ['', [Validators.required]],
      uso_con: ['', [Validators.required]],
      uso_cor: ['', [Validators.required]],
    })
  }
  get f(){
    return this.form.controls;
  }
onSubmit():void{
  this.submited=true;
  if(this.form.invalid){
  console.error('Error en el formulario');
  return;
  }else{
    this.userService.create(this.user).subscribe(
      result=>{
        this.submited=true;
        console.log(result);
        this.flagToReload.emit(true);
      }

    )
  }

}
}
