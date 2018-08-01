export class CurrencyRate{
    public currency:string;
    public  rate:number;

    constructor(currency: string = null, rate: number = null) {
        this.currency= currency;
        this.rate= rate;
      }

  
}