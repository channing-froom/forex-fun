import { ICurrencyExchangeDto } from '../models/ICurrencyDto';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CurrencyService } from './currency.service';

describe('Service: Currency', () => {
  let service: CurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyService]
    });

    service = new CurrencyService();
  });

  it('should ...', inject([CurrencyService], (service: CurrencyService) => {
    expect(service).toBeTruthy();
  }));

  it("Should get single result", (done: DoneFn) => {
    service.getCurrency('USD').then((res: ICurrencyExchangeDto) => {
      expect(res).toBeDefined();
      expect(res.base).toEqual("ZAR");
      expect(res.rates.length).toEqual(1);

      done();
    });
  });

  it("Should get multiple result", (done: DoneFn) => {
    service.getCurrencies(['USD', 'EUR']).then((res: ICurrencyExchangeDto) => {
      expect(res).toBeDefined();
      expect(res.base).toEqual("ZAR");
      expect(res.rates.length).toEqual(2);
      expect(res.rates[0].iso).toEqual("EUR");
      expect(res.rates[1].iso).toEqual("USD");

      done();
    });
  });
});
