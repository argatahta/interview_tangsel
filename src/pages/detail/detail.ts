import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  product = {}
  package 
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loadProduct();
    this.loadPackage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  loadProduct(){
    this.product = this.navParams.data
    console.log(this.product)
  }

  loadPackage(){
    this.package = this.navParams.data.packages.data
    console.log(this.package)
  }

}
