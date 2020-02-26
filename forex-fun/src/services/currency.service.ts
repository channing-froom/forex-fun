import axios, { AxiosResponse } from 'axios';
import { Injectable } from '@angular/core';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private baseCurrency: string = "ZAR";
  private apiUrl: string = "http://localhost:3000/api/v1/currency";

  constructor() {}

  /**
   * Request a single currency match from the API
   *
   * @param symbol
   */
  public getCurrency(symbol: string) {
    // todo move api urls to config
    return axios.get(`${this.apiUrl}/${this.baseCurrency}/values/${symbol}`)
      .then(res => res.data);
  }

  /**
   * Request multiple currencies from the API
   *
   * @param symbols
   */
  public getCurrencies(symbols: string[] = []) {
    if (symbols.length == 0) {
      throw error('No symbols defined');
    }

    let currencies = symbols.toString();

    return axios.get(`${this.apiUrl}/${this.baseCurrency}/values/${currencies}`)
      .then(res => res.data);
  }

}
