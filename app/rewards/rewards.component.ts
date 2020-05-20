import { Component, OnInit } from '@angular/core';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss'],
})
export class RewardsComponent implements OnInit {
  Country: {
    Country?: string;
    Amount?: number;
    SecondVal?: number;
    ThirdVal?: number;
    Impact?: number;
    Year?: number;
  };

  _categoricalSource: ObservableArray<any>;

  constructor() { }

  ngOnInit() {
    this._categoricalSource = new ObservableArray(
      this.getCategoricalSource()
    );
  }

  categoricalSource(): ObservableArray<any> {
    return this._categoricalSource;
  }

  getCategoricalSource() {
    return [
      {
        Country: 'Germany',
        Amount: 15,
        SecondVal: 14,
        ThirdVal: 24,
        Impact: 0,
        Year: 0,
      },
      {
        Country: 'France',
        Amount: 13,
        SecondVal: 23,
        ThirdVal: 25,
        Impact: 0,
        Year: 0,
      },
      {
        Country: 'Bulgaria',
        Amount: 24,
        SecondVal: 17,
        ThirdVal: 23,
        Impact: 0,
        Year: 0,
      },
      {
        Country: 'Spain',
        Amount: 11,
        SecondVal: 19,
        ThirdVal: 24,
        Impact: 0,
        Year: 0,
      },
      {
        Country: 'USA',
        Amount: 18,
        SecondVal: 8,
        ThirdVal: 21,
        Impact: 0,
        Year: 0,
      },
    ];
  }
}
