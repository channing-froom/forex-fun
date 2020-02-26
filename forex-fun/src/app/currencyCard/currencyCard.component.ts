import { Component, OnInit, Input } from '@angular/core';
import { ICurrencyRate } from '../../models/ICurrencyDto';

@Component({
  selector: 'app-currencyCard',
  templateUrl: './currencyCard.component.html',
  styleUrls: ['./currencyCard.component.css']
})
export class CurrencyCardComponent implements OnInit {

  @Input() base: string = null;
  @Input() currency: ICurrencyRate = null;

  constructor() { }

  ngOnInit() {
  }
}
