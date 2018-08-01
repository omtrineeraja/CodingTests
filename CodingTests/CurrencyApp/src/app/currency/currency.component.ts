import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../Services/currency.service';
import { CurrencyRate } from '../Model/CurrencyRate'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  id_currency: string = "";
  exchangeRates: any = "";
  rates: CurrencyRate[] = [];
  currencies: string[];
  currencyForm: FormGroup;
  currencyRate = new CurrencyRate();



  constructor(private currencyService: CurrencyService, private fb: FormBuilder) {
    //loads the currencies in dropdown
    this.currencies = this.currencyService.getCurrencies();
    //loads the exchanges rates for the selected currency
    this.id_currency = this.currencies[0];
    this.callCurrencyService(this.id_currency);
  }

  ngOnInit() {
    this.createForm();
  }

  /**
   * createForm
   * @desc Method to create form
   * @param none
   * @memberof CurrencyComponent
   */
  createForm() {
    this.currencyForm = this.fb.group({
      'currency': this.currencies[0],
      'exrate': [null, Validators.required]
    });

  }


  /**
     * call Currency Service
     * @desc calls service method to get the exchange rates
     * @param {string} currency
     * @memberof CurrencyComponent
     */
  callCurrencyService(currency: string) {

    this.id_currency = currency;
    //fetching the data from session if its available else make an API call
    let result = JSON.parse(this.getItem('ExchangeRates' + this.id_currency));
    if (result) {
      this.exchangeRates = result;
      this.parseExchangeRates(this.exchangeRates);
      console.log("calling from session");
    }
    else {
      console.log("calling from API");
      this.currencyService.getCurrencyExchRate(this.id_currency.toUpperCase())
        .subscribe(
          resp => {
            this.exchangeRates = resp;
            this.setItem('ExchangeRates' + this.id_currency, JSON.stringify(resp));
            this.setItem('currency', this.id_currency);
            //parsing the rates in json to array
            this.parseExchangeRates(this.exchangeRates);
          }
        ),
        error => {
          console.log("Error. The callCurrencyService result JSON value is as follows:");
          console.log(error);
        };
    }
  }

  /**
     * Parse Exchange Rates
     * @desc parses the rates json and inserts into array
     * @param {any} exchangeRates
     * @memberof CurrencyComponent
     */
  parseExchangeRates(exchangeRates: any) {
    console.log(this.exchangeRates.rates);
    this.rates = [];
    for (var cu in exchangeRates.rates) {
      if (cu) {
        var cuVal = exchangeRates.rates[cu];
        var parsedObject = {
          "rate": cuVal,
          "currency": cu
        };

        this.rates.push(parsedObject);
        //filter the selected currency from the list
        this.rates = this.rates.filter(obj => obj.currency != this.id_currency);

      }
    }
  }

  /**
   * addExchangeRate
   * @desc Add currency and exchange rate
   * @param {post} formcontrols value
   * @memberof CurrencyComponent
   */
  addExchangeRate(post) {
    this.currencyRate.currency = post.currency;
    this.currencyRate.rate = post.exrate;
      this.rates.push(this.currencyRate);
      this.createForm();
  }

  /**
   * setItem
   * @desc stores Item in session
   * @param {srting},{string} Key, value
   * @memberof CurrencyComponent
   */
  public setItem(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }

  /**
   * getItem
   * @desc gets Item value in session based on key
   * @param {srting} Key
   * @memberof CurrencyComponent
   */
  public getItem(key: string): string {
    return sessionStorage.getItem(key);
  }


}
