import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  nations = [{
    text: "+84",
    src: "~/assets/images/languages/vie.png"
  }]

  constructor() { }

  ngOnInit() {
  }

  checkTap() {
    console.log('checked')
  }

}
