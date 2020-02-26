import { Component, OnInit } from '@angular/core';
import { ICurrencyRate, ICurrencyExchangeDto } from '../../../../common/models/dto/ICurrencyDto';
import { CurrencyService } from 'src/services/currency.service';

@Component({
  selector: 'app-currencySearchForm',
  templateUrl: './currencySearchForm.component.html',
  styleUrls: ['./currencySearchForm.component.css']
})
export class CurrencySearchFormComponent implements OnInit {

  base: string = null;
  currency: ICurrencyRate = null;
  query: string = null;
  loading: boolean = false;
  errorMessage: string = null;


  constructor(private currencyService: CurrencyService) { }

  private validateSearch(value: string) {
    if (value == null) {
      this.errorMessage = "please set a value";

      return false;
    } else if (value.length != 3) {
      this.errorMessage = "Value needs to be a 3 letter currency ISO code";

      return false;
    }

    return true;
  }

  newRequestReset() {
    this.errorMessage = null;
    this.loading = true;
  }

  searchCurrency()
  {
    if (this.loading) {
      this.errorMessage = "There is already a request in progress";

      return;
    }

    let self = this; // todo use bind


    if (this.validateSearch(this.query)) {
      this.newRequestReset();
      let query = this.query.toUpperCase();

      this.currencyService.getCurrency(query)
        .then((res: ICurrencyExchangeDto) => {
          self.base = res.base;
          self.currency = res.rates[0];
        })
        .catch(err => {
          self.errorMessage = "something has gone wrong"
        })
        .finally(() => {
          self.loading = false;
        });
    }
  }

  ngOnInit() {}

}
