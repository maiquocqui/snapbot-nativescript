import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  languages = ['English', 'Chinese', 'Indonesian', 'Vietnamese', 'Japanese', 'German']

  constructor(private page: Page) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

  selectLanguage(event) {
    console.log(event)
  }

}
