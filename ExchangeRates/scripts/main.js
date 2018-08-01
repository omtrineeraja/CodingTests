(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Model/CurrencyRate.ts":
/*!***************************************!*\
  !*** ./src/app/Model/CurrencyRate.ts ***!
  \***************************************/
/*! exports provided: CurrencyRate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyRate", function() { return CurrencyRate; });
var CurrencyRate = /** @class */ (function () {
    function CurrencyRate(currency, rate) {
        if (currency === void 0) { currency = null; }
        if (rate === void 0) { rate = null; }
        this.currency = currency;
        this.rate = rate;
    }
    return CurrencyRate;
}());



/***/ }),

/***/ "./src/app/Services/currency.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Services/currency.service.ts ***!
  \**********************************************/
/*! exports provided: CurrencyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyService", function() { return CurrencyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CurrencyService = /** @class */ (function () {
    function CurrencyService(http) {
        this.http = http;
        this.currencyURL = " https://exchangeratesapi.io/api/latest?base=";
        this.currencies = ["USD", "GBP", "EUR", "AUD"];
    }
    /**
     * Get Currencies
     * @desc gets the list of currencies
     * @param none
     * @memberof CurrencyService
     */
    CurrencyService.prototype.getCurrencies = function () {
        return this.currencies;
    };
    /**
   * Get Currency Exchange Rate
   * @desc gets the list of exchnages rates for provided base currency
   * @param {string} currency
   * @memberof CurrencyService
   */
    CurrencyService.prototype.getCurrencyExchRate = function (currency) {
        return this.http.get(this.currencyURL + currency)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json()); });
    };
    CurrencyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], CurrencyService);
    return CurrencyService;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-currency></app-currency>\n<!-- <app-new-currency></app-new-currency> -->\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CurrencyApp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _Services_currency_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services/currency.service */ "./src/app/Services/currency.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _currency_currency_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./currency/currency.component */ "./src/app/currency/currency.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _currency_currency_component__WEBPACK_IMPORTED_MODULE_6__["CurrencyComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [_Services_currency_service__WEBPACK_IMPORTED_MODULE_3__["CurrencyService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/currency/currency.component.html":
/*!**************************************************!*\
  !*** ./src/app/currency/currency.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 align=\"center\"> Currency Exchange Rates</h2>\n<form [formGroup]=\"currencyForm\" (ngSubmit)=\"addExchangeRate(currencyForm.value)\" role=\"form\" class=\"form-inline\" item-width=\"10px\">\n    <div class=\"form-container\" style=\"height:100\">\n        <label style=\"font-size:1em\">Currency</label>\n        <div class=\"form-group\" style=\"padding:20px\">\n            <select formControlName=\"currency\" (change)=\"callCurrencyService($event.target.value)\">\n                <option *ngFor=\"let currency of currencies\" value={{currency}}>\n                    {{currency}}\n                </option>\n            </select>\n        </div>\n        <label style=\"font-size:1em\">Exchange Rate</label>\n        <div class=\"form-group\" style=\"padding:30px\">\n            <input type=\"number\" formControlName=\"exrate\" pattern=\"^(\\d*\\.)?\\d+$\">\n        </div>\n        <div class=\"alert\" *ngIf=\"!currencyForm.controls['exrate'].valid && currencyForm.controls['exrate'].touched\">Provide a valid numeric rate</div>\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!currencyForm.valid\">Add Currency</button>\n    </div>\n</form>\n<div class=\"form-container\">\n    <div>\n        <div *ngIf=exchangeRates>\n            <h3>Base: {{exchangeRates.base}}</h3>\n            <h3>Date: {{exchangeRates.date | date:\"M/d/yyyy\"}}</h3>\n\n            <table class=\"table table bordered\">\n                <thead>\n                    <tr>\n                        <th>Currency</th>\n                        <th>Rates</th>\n                    </tr>\n                </thead>\n                <tbody *ngIf=rates>\n                    <tr *ngFor=\"let cur of rates; let i = index;\">\n                        <td>{{cur.currency }}</td>\n                        <td>{{cur.rate | number : '1.2-2'}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/currency/currency.component.scss":
/*!**************************************************!*\
  !*** ./src/app/currency/currency.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n  display: block;\n  width: 90%;\n  padding: 2em;\n  margin: 2em auto;\n  background: #fff; }\n\n.alert {\n  background: #f2edda;\n  padding: 7px;\n  font-size: .9em;\n  margin-bottom: 20px;\n  display: inline-block;\n  -webkit-animation: 2s alertAnim forwards;\n          animation: 2s alertAnim forwards; }\n\n.column {\n  background-color: lightgrey;\n  border: solid 5px darkgrey;\n  border-radius: 3px;\n  height: 200px;\n  width: 20%; }\n\n.button {\n  margin-top: 3rem; }\n\nh1 {\n  margin-bottom: 2rem;\n  font-weight: bold;\n  font-family: 'Muli';\n  font-size: 2em; }\n\nlabel {\n  display: inline-block; }\n\n@-webkit-keyframes alertAnim {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n@keyframes alertAnim {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n"

/***/ }),

/***/ "./src/app/currency/currency.component.ts":
/*!************************************************!*\
  !*** ./src/app/currency/currency.component.ts ***!
  \************************************************/
/*! exports provided: CurrencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyComponent", function() { return CurrencyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_currency_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/currency.service */ "./src/app/Services/currency.service.ts");
/* harmony import */ var _Model_CurrencyRate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Model/CurrencyRate */ "./src/app/Model/CurrencyRate.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CurrencyComponent = /** @class */ (function () {
    function CurrencyComponent(currencyService, fb) {
        this.currencyService = currencyService;
        this.fb = fb;
        this.id_currency = "";
        this.exchangeRates = "";
        this.rates = [];
        this.currencyRate = new _Model_CurrencyRate__WEBPACK_IMPORTED_MODULE_2__["CurrencyRate"]();
        //loads the currencies in dropdown
        this.currencies = this.currencyService.getCurrencies();
        //loads the exchanges rates for the selected currency
        this.id_currency = this.currencies[0];
        this.callCurrencyService(this.id_currency);
    }
    CurrencyComponent.prototype.ngOnInit = function () {
        this.currencyForm = this.fb.group({
            'currency': this.currencies[0],
            'exrate': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    /**
       * call Currency Service
       * @desc calls service method to get the exchange rates
       * @param {string} currency
       * @memberof CurrencyComponent
       */
    CurrencyComponent.prototype.callCurrencyService = function (currency) {
        var _this = this;
        this.id_currency = currency;
        //fetching the data from session if its available else make an API call
        var result = JSON.parse(this.getItem('ExchangeRates' + this.id_currency));
        if (result) {
            this.exchangeRates = result;
            this.parseExchangeRates(this.exchangeRates);
            console.log("calling from session");
        }
        else {
            console.log("calling from API");
            this.currencyService.getCurrencyExchRate(this.id_currency.toUpperCase())
                .subscribe(function (resp) {
                _this.exchangeRates = resp;
                _this.setItem('ExchangeRates' + _this.id_currency, JSON.stringify(resp));
                _this.setItem('currency', _this.id_currency);
                //parsing the rates in json to array
                _this.parseExchangeRates(_this.exchangeRates);
            }),
                function (error) {
                    console.log("Error. The callCurrencyService result JSON value is as follows:");
                    console.log(error);
                };
        }
    };
    /**
       * Parse Exchange Rates
       * @desc parses the rates json and inserts into array
       * @param {any} exchangeRates
       * @memberof CurrencyComponent
       */
    CurrencyComponent.prototype.parseExchangeRates = function (exchangeRates) {
        var _this = this;
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
                this.rates = this.rates.filter(function (obj) { return obj.currency != _this.id_currency; });
            }
        }
    };
    /**
     * addExchangeRate
     * @desc Add currency and exchange rate
     * @param {post} formcontrols value
     * @memberof CurrencyComponent
     */
    CurrencyComponent.prototype.addExchangeRate = function (post) {
        this.currencyRate.currency = post.currency;
        this.currencyRate.rate = post.exrate;
        this.rates.push(this.currencyRate);
    };
    /**
     * setItem
     * @desc stores Item in session
     * @param {srting},{string} Key, value
     * @memberof CurrencyComponent
     */
    CurrencyComponent.prototype.setItem = function (key, value) {
        sessionStorage.setItem(key, value);
    };
    /**
     * getItem
     * @desc gets Item value in session based on key
     * @param {srting} Key
     * @memberof CurrencyComponent
     */
    CurrencyComponent.prototype.getItem = function (key) {
        return sessionStorage.getItem(key);
    };
    CurrencyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-currency',
            template: __webpack_require__(/*! ./currency.component.html */ "./src/app/currency/currency.component.html"),
            styles: [__webpack_require__(/*! ./currency.component.scss */ "./src/app/currency/currency.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_currency_service__WEBPACK_IMPORTED_MODULE_1__["CurrencyService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], CurrencyComponent);
    return CurrencyComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\CodingTests\CodingTests\CurrencyApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map