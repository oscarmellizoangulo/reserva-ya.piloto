import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocationsPage } from '../locations/locations';

@Component({
  selector: 'page-selector-products',
  templateUrl: 'selector-products.html',
})
export class SelectorProductsPage {
  products:any = [
    {name: 'Prestamos'},
    {name: 'CDTs'},
    {name: 'Inversiones'},
    {name: 'Tarjetas'}
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectorProductsPage');
  }

  showLocations(product){
    this.navCtrl.push(LocationsPage);
  }

}
