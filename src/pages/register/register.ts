import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {LoginPage} from "../login/login";
import {HomePage} from "../home/home";
import { ClientProvider } from "../../services/client-service";


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  email;
  password;
  fullName;
  constructor(public nav: NavController, public clientProvider: ClientProvider) {
  }

  // register and go to home page
  register() {
    this.clientProvider.createUserWithEmailAndPassword(this.email, this.password);
    this.nav.setRoot(LoginPage);
  }

  // go to login page
  login() {
    this.nav.setRoot(LoginPage);
  }
}
