import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {

  constructor(private http:Http) { }

  currencyURL = " https://exchangeratesapi.io/api/latest?base="; 

  currencies:string[] = ["USD","GBP","EUR","AUD"];

  /**
   * Get Currencies
   * @desc gets the list of currencies
   * @param none
   * @memberof CurrencyService
   */
  getCurrencies() :string[] 
  {
    return this.currencies;
  }

    /**
   * Get Currency Exchange Rate
   * @desc gets the list of exchnages rates for provided base currency
   * @param {string} currency
   * @memberof CurrencyService
   */
   getCurrencyExchRate(currency) { 

   return this.http.get(this.currencyURL + currency)
         .map((res: Response) => res.json())
       .catch(error => Observable.throw(error.json()));
   }
}
