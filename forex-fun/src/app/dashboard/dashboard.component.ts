import { ICurrencyExchangeDto } from '../../models/ICurrencyDto';
import { CurrencyService } from './../../services/currency.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currencyList: ICurrencyExchangeDto = null;
  loading: boolean = true;

  constructor(private currencyService: CurrencyService) { }

  getDefaults() {
    this.loading = true;
    let self = this; // TODO should be using bind

    this.currencyService.getCurrencies(["USD", "EUR", "AUD"])
      .then((res: ICurrencyExchangeDto) => {
        self.currencyList = res;
      })
      .catch(er => {
        console.log(er)
      })
      .finally(() => {
        self.loading = false
      });
  }

  ngOnInit() {
    this.getDefaults();
  }

}
