import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  languages = ['English', 'Chinese', 'Indonesian', 'Vietnamese', 'Japanese', 'German']
  selectedLanguageIndex = 1;

  isChecked = false;
  isShowDropdown = false;

  constructor(private page: Page) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

  rememberPassword(event) {
    this.isChecked = event;
    console.log(this.isChecked)
  }

  socialLink(social) {
    console.log(social)
  }

  chooseLanguage() {
    this.isShowDropdown = !this.isShowDropdown
  }

  languageChange(language) {
    this.isShowDropdown = false;
    console.log(language)
  }

}
