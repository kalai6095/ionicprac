import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {AngularFireAuth} from "angularfire2/auth";
import {AlertController} from "ionic-angular";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {


  @ViewChild('email') email;
  @ViewChild('password') password;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  showAlert(title: string, msg: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }


  register() {
    let p = this.fire.auth.createUserWithEmailAndPassword(this.email.value, this.password.value);
    p.then(() => {
      this.showAlert('Info', 'Registration Success');
      this.navCtrl.pop();
    }).catch(error => {
      this.showAlert('Error', error.message);
    });
  }

}
