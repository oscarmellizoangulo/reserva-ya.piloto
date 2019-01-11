import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarPage } from '../calendar/calendar';
import { AuthProvider } from '../../services/auth-service';

@Component({
  selector: 'page-consultants',
  templateUrl: 'consultants.html',
})
export class ConsultantsPage {
  consultants:any = [
    {name: 'Juan Carlos Galindo'},
    {name: 'Roberto Martinez'},
    {name: 'Diana Patricia'},
    {name: 'Ruben Dario'}
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams, public authProvider: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultantsPage');
  }

  showCalendar(product){
    this.authProvider.login();
    this.navCtrl.push(CalendarPage);
  }

}
