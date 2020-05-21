import { Component, OnInit } from '@angular/core';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { Country, DataService } from '../services/data.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss'],
})
export class PerformanceComponent implements OnInit {
  private _categoricalSource: ObservableArray<Country>;

  constructor(private _dataService: DataService) { }

  get categoricalSource(): ObservableArray<Country> {
    return this._categoricalSource;
  }

  ngOnInit() {
    this._categoricalSource = new ObservableArray(
      this._dataService.getCategoricalSource()
    );
    console.log(this.categoricalSource);
  }
}
