import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { CalendarPage } from '../calendar/calendar';
import { ConsultantsPage } from '../consultants/consultants';
declare var google;
/*import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions
  //CameraPosition,
  //MarkerOptions,
  //Marker
} from '@ionic-native/google-maps';*/

@Component({
  selector: 'page-locations',
  templateUrl: 'locations.html',
})
export class LocationsPage {

  @ViewChild("map") mapElement;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
  }

  ngOnInit() {
    console.log('ionViewDidLoad LocationsPage');
    this.loadMap();
  }
  goToPage(){
    this.navCtrl.push(ConsultantsPage);
  }
  loadMap() {
    let coords = new google.maps.LatLng(45, 100);

    this.geolocation.getCurrentPosition().then((resp) => {
      coords = {lat: resp.coords.latitude, lng: resp.coords.longitude}
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);

      let mapOptions: google.maps.MapOptions = {
        center: coords,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  
      //var myLatLng = { lat: 45, lng: 100 };
  
      var marker = new google.maps.Marker({
        position: coords,
        map: this.map,
        title: 'Hello World!!!!'
      });

      var parent = this;

      marker.addListener('click', function() {
        parent.goToPage();
      });
      //google.maps.event.addListener(marker, 'click', this.goToPage());
      var circle = new google.maps.Circle({
        'center': coords,
        'radius': 300,
        'strokeColor' : '#0B336A',
        'strokeWidth': 5,
        'fillColor' : '#ffffff',
        'opacity' : .4,
        map: this.map
      });

     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
  }
  
}
