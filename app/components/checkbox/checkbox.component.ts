import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  options: {
    checked?: boolean;
    text?: string;
    textWrap?: string;
    class?: string;
  }

  @Input('options')
  set setOptions(options) {
    this.options = options;
    this.options.checked = options.checked || false;
    this.options.text = options.text || 'Checkbox label';
    this.options.textWrap = options.textWrap || 'true';
    this.options.class = options.class || '';
  }

  @Output() fnCheck = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  click() {
    this.options.checked = !this.options.checked;
    this.fnCheck.emit(this.options.checked)
  }

}
