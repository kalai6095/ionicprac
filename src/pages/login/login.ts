import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";

import {SignupPage} from "../signup/signup";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') uname;
  @ViewChild('password') password;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signUp() {
    this.navCtrl.push(SignupPage);
  }

  showAlert(title:string,msg: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

  login() {
    if (this.uname.value == undefined || this.uname.value == "" || this.uname.value == null) {
      this.showAlert("Error","Please enter username");
    } else if (this.password.value == undefined || this.password.value == "" || this.password.value == null) {
      this.showAlert("Error","Please enter password");
    } else {
      let p = this.fire.auth.signInWithEmailAndPassword(this.uname.value, this.password.value);
      p.then((data) => {
        this.showAlert("Info","Welcome "+this.uname.value);
        this.navCtrl.setRoot(TabsPage);
      }).catch(error => {
        this.showAlert("Login Failed",error.message);
      })
    }
  }
}
