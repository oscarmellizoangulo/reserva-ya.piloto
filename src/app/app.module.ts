import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';

import {ActivityService} from "../services/activity-service";
import {TripService} from "../services/trip-service";
import {WeatherProvider} from "../services/weather";

import {MyApp} from "./app.component";

import {SettingsPage} from "../pages/settings/settings";
import {CheckoutTripPage} from "../pages/checkout-trip/checkout-trip";
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {NotificationsPage} from "../pages/notifications/notifications";
import {RegisterPage} from "../pages/register/register";
import {SearchLocationPage} from "../pages/search-location/search-location";
import {TripDetailPage} from "../pages/trip-detail/trip-detail";
import {TripsPage} from "../pages/trips/trips";
import {LocalWeatherPage} from "../pages/local-weather/local-weather";

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AuthProvider } from "../services/auth-service";

import { NgCalendarModule  } from "ionic2-calendar";
import { SelectorProductsPage } from "../pages/selector-products/selector-products";
import { LocationsPage } from "../pages/locations/locations";
import { GoogleMaps } from '@ionic-native/google-maps';
import { CalendarPage } from "../pages/calendar/calendar";
import { Geolocation } from '@ionic-native/geolocation';
import { ConsultantsPage } from "../pages/consultants/consultants";
import { ClientProvider } from "../services/client-service";
// import services
// end import services
// end import services

// import pages
// end import pages

export const firebaseConfig = {
  apiKey: "AIzaSyDZ4NpABH9btcLnzXKgv81hsUYG79xP_bA",
  authDomain: "reservaya-192916.firebaseapp.com",
  databaseURL: "https://reservaya-192916.firebaseio.com",
  projectId: "reservaya-192916",
  storageBucket: "reservaya-192916.appspot.com",
  messagingSenderId: "185081747636"
}


@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage,
    CalendarPage,
    SelectorProductsPage,
    LocationsPage,
    ConsultantsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: '__ionic3_start_theme',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgCalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage,
    CalendarPage,
    SelectorProductsPage,
    LocationsPage,
    ConsultantsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    ActivityService,
    TripService,
    WeatherProvider,
    AuthProvider,
    GoogleMaps,
    Geolocation,
    ClientProvider
  ]
})

export class AppModule {
}
