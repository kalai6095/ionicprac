import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule} from "angularfire2";
import {AngularFireAuthModule} from "angularfire2/auth";

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import  {ProductPage} from "../pages/product/product";
import {GalleryPage} from "../pages/gallery/gallery";
import  {LoginPage} from "../pages/login/login";
import  {SignupPage} from "../pages/signup/signup";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {environment} from "../enviroment/enviroment";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,LoginPage,SignupPage,
    ContactPage,
    ProductPage,
    GalleryPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,LoginPage,SignupPage,
    ContactPage,
    ProductPage,
    GalleryPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
