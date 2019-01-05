import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarPage } from '../calendar/calendar';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultantsPage');
  }

  showCalendar(product){
    this.navCtrl.push(CalendarPage);
  }

}
