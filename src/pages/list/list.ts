import { Component} from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail'


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage  {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;

  products = []

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    this.loadProduct();
  }


  loadProduct() {

    let header = new Headers({ "Authorization": "Bearer " + "$2y$10$zlwCGDlNG9oYMg9WMj03gu.cEFx4djrktLLqL3t5BaqRrJFGqybNa"});
    let options = new RequestOptions({ headers: header });

    this.http.get('http://wiztalk.co/api/vendor/listproduct', options)
    .subscribe(
    result => {
      console.log(result.json());
      this.products = result.json();
    },
    error => {
      console.log(error)
    }
    )
  }


  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(DetailPage, item);
  }
}
