import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email: string;
  arr: any;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController) {
    this.email = fire.auth.currentUser.email;
    this.arr = [{
      name: "kalaiselvan.a",
      id: "1"
    }, {
      name: "kalai.a",
      id: "2"
    }]
  }


}
