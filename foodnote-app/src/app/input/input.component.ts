import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  month = '10';
  day   = '27';
  date  = 'Fri';

  // 3デフォルト値を設定
  asa = '';
  hiru = '';
  yoru = '';
}
