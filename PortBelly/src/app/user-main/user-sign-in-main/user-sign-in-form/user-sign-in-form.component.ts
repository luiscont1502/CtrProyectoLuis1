import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faSave, faTimes, faUser, faEnvelopeOpenText, faKey,faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../../services/usuario.service';
import { LoginService } from '../../../services/login.service';
import { Usuario, Login } from 'src/app/models/usuario';
@Component({
  selector: 'app-user-sign-in-form',
  templateUrl: './user-sign-in-form.component.html',
  styleUrls: ['./user-sign-in-form.component.css']
})
export class UserSignInFormComponent implements OnInit {
  faEnvelopeOpenText = faEnvelopeOpenText;
  faSignInAlt=faSignInAlt;
  faKey = faKey;
  faTimes = faTimes;
  faSave = faSave;
  faUser = faUser;
  public formUser: FormGroup;
  @Input() user: Usuario;
  usuario: Login = new Login();
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  submitted = false;
  constructor(private formBuilder: FormBuilder, private auth: LoginService) { }

  ngOnInit(): void {
    // this.user = new Usuario();
    this.usuario= new Login();
    this.formUser = this.formBuilder.group({
      // uso_usu: ['', [Validators.required]],
      uso_cor: ['', [Validators.required]],
      uso_con: ['', [Validators.required]],
    });
  }
  get f(): any {
    return this.formUser.controls;
  }
  public register(): void {
    // Puede causar conflictos de identidad
    const user = this.formUser.value;
    console.log(user);
  }
  onSubmit(): void {
    this.submitted = true;

    if (this.formUser.invalid) {
      Swal.fire({
        title: 'Error',
        text: 'Error en formulario',
        icon: 'error',
      });
      console.error('Error en formulario');
      return;
    }
    // Swal.showLoading();
    console.log(this.usuario.correo);

    this.auth.login(this.usuario).subscribe(resp => {
      this.auth.verificarRol();
      // Swal.close();
    },
      (err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Error al autenticar',
          text: 'Usuario o contraseña incorrecto'
        });
      });
  }
  onReset(): void {
    this.formUser.reset();
    this.user = new Usuario();
  }
}
