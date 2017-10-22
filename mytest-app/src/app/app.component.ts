import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mytestアプリ';

  //class の中に全ての処理を書く
  flg = true;
  func() {
    if (this.flg) {
      this.title = 'タイトルがかわるんだぜ';
    } else {
      this.title = 'Mytestアプリ';
    }
    this.flg = !this.flg;
  }
}
