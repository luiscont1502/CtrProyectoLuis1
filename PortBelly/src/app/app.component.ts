import { Component } from '@angular/core';
import { faPhone,faEnvelope,faLock,faShoppingCart,faStar,faUser} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faTwitter,faLinkedin,faWhatsapp} from '@fortawesome/fontawesome-free-brands'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faLock=faLock;
  faShoppingCart=faShoppingCart;
  faStart=faStar;
  faUser=faUser;
  faFacebook=faFacebook;
  faTwitter=faTwitter;
  faLinkedin=faLinkedin;
  faWhatsapp=faWhatsapp;
  faPhone=faPhone;
  faEnvelope=faEnvelope;
  title = 'PortBelly';
  nombre='Usuario';

get isAdmin(){
  return this.nombre =="Usuario";
}

}
