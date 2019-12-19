(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n<footer>\n  <div class=\"navbar bg-main text-center p-1 text-white d-flex justify-content-center\">\n    @copyright\n  </div>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/add-more/add-more.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/add-more/add-more.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center align-items-center\">\r\n  <button class=\"add-more-icon mr-2\" [disabled]=\"quantity <= 1\" (click)=\"remove()\">\r\n    <i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\r\n  </button>\r\n  <input type=\"text\" [(ngModel)]=\"quantity\" class=\"form-control col-4 text-center\">\r\n  <button class=\"add-more-icon ml-2\" (click)=\"add()\">\r\n    <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/cart/cart.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/cart/cart.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"checkout\" [routerLink]=\"'/checkout'\">\r\n  <i class=\"fa fa-shopping-cart text-white\"></i>\r\n  <span class=\"badge badge-danger\" *ngIf=\"cart.length > 0\">{{ totalProducts }}</span>\r\n</a>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/filter/filter.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/filter/filter.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-3\">\r\n  <ng5-slider [(value)]=\"minValue\" [(highValue)]=\"maxValue\" (userChangeEnd)=\"onUserChangeEnd($event)\"\r\n    [options]=\"options\"></ng5-slider>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <div class=\"navbar bg-main\">\r\n    <div class=\"container d-flex justify-content-between\">\r\n      <a [routerLink]=\"'/'\" class=\"navbar-brand d-flex align-items-center logo\">\r\n        <i class=\"fa fa-star\"></i>\r\n      </a>\r\n      <div class=\"ml-auto\">\r\n        <span class=\"mr-3\">\r\n          <app-search></app-search>\r\n        </span>\r\n        <span *ngIf=\"!shouldHideCartIcon\">\r\n          <app-cart></app-cart>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/product/product.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/product/product.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <img class=\"w-100\" src=\"{{item.img_url}}\">\r\n  <div>\r\n    {{item.name}}\r\n  </div>\r\n  <div class=\"d-flex justify-content-between my-2\">\r\n    <span class=\"font-weight-bold\">\r\n      <i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{item.price}}\r\n    </span>\r\n    <span>{{item.discount}}</span>\r\n    <span class=\"text-success font-weight-bold\">{{((item.discount/item.price)*100).toFixed(0)}}% off</span>\r\n  </div>\r\n  <div class=\"text-center\">\r\n    <button class=\"btn btn-warning btn-sm font-weight-bold\" (click)=\"addToCart(item)\">Add to Card</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/search/search.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/search/search.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"search-container\">\r\n  <input (keyup)=\"onChange($event.target.value)\" type=\"text\" placeholder=\"Search...\">\r\n  <div class=\"search\">\r\n    <i class=\"fa fa-search text-white ml-2\"></i>\r\n  </div>\r\n</span>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sortby/sortby.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sortby/sortby.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"sortby d-none d-lg-block\">\r\n  <span class=\"font-weight-bold\">Sort By</span>\r\n  <a class=\"ml-4 pointer\" [ngClass]=\"{'active-sortby' : isCurretSorting('HIGH_LOW')}\"\r\n    (click)=\"doSorting('HIGH_LOW')\">Price --\r\n    High Low</a>\r\n  <a class=\"ml-4 pointer\" [ngClass]=\"{'active-sortby' : isCurretSorting('LOW_HIGH')}\"\r\n    (click)=\"doSorting('LOW_HIGH')\">Price -- Low\r\n    High</a>\r\n  <a class=\"ml-4 pointer\" [ngClass]=\"{'active-sortby' : isCurretSorting('DISCOUNT')}\"\r\n    (click)=\"doSorting('DISCOUNT')\">Discount</a>\r\n</span>\r\n\r\n<div class=\"d-block d-md-none\">\r\n  <div class=\"p-2\">\r\n    <h6 class=\"mb-23\">Sort Options</h6>\r\n    <form [formGroup]=\"userForm\">\r\n      <div class=\"form-check\">\r\n        <input class=\"form-check-input\" type=\"radio\" [value]=\" SortBy.HIGH_LOW\" formControlName=\"sortOption\"\r\n          name=\"sortOption\" id=\"highLow\">\r\n        <label class=\"form-check-label\" for=\"highLow\">\r\n          Price -- High Low\r\n        </label>\r\n      </div>\r\n      <div class=\"form-check\">\r\n        <input class=\"form-check-input\" type=\"radio\" [value]=\"SortBy.LOW_HIGH\" formControlName=\"sortOption\"\r\n          name=\"sortOption\" id=\"lowHigh\">\r\n        <label class=\"form-check-label\" for=\"lowHigh\">\r\n          Price -- Low High\r\n        </label>\r\n      </div>\r\n      <div class=\"form-check\">\r\n        <input class=\"form-check-input\" type=\"radio\" [value]=\"SortBy.DISCOUNT\" formControlName=\"sortOption\"\r\n          name=\"sortOption\" id=\"discount\">\r\n        <label class=\"form-check-label\" for=\"discount\">\r\n          Discount\r\n        </label>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"row border-top m-0\">\r\n    <div class=\"col-6 pl-0 text-center border-right\">\r\n      <button type=\"button\" class=\"btn btn-link btn-sm p-0 pb-1 font-weight-bold\" data-dismiss=\"modal\">Cancel</button>\r\n    </div>\r\n    <div class=\"col-6 pr-0 text-center\">\r\n      <button type=\"button\" class=\"btn btn-link btn-sm font-weight-bold pb-1 p-0\"\r\n        (click)=\"doSorting(radioSelected)\">Apply</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/checkout/checkout.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/checkout/checkout.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div *ngIf=\"checkoutProducts.length === 0\" class=\"text-center w-100 p-5\">\r\n    <div class=\"d-flex justify-content-center\">\r\n      <div class=\"h2\">\r\n        <i class=\"fa fa fa-shopping-cart\"></i>\r\n        Your Shopping Cart is Empty\r\n      </div>\r\n    </div>\r\n    <a [routerLink]=\"'/'\" class=\"btn btn-outline-primary mt-3\">Continue Shopping</a>\r\n  </div>\r\n  <div class=\"col-md-8 mt-3\">\r\n    <div *ngFor=\"let item of checkoutProducts | productFilter: searchQuery\">\r\n      <div class=\"border p-2 mb-2 bg-white\">\r\n        <div class=\"row d-flex justify-content-center align-items-center\">\r\n          <div class=\"col-4 col-md-3 col-lg-3\">\r\n            <img class=\"w-100\" src=\"{{item.img_url}}\">\r\n          </div>\r\n          <div class=\"col-8 col-md-9 col-lg-9\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4 col-12\">\r\n                <span class=\"d-block\">{{item.name}}</span>\r\n                <div class=\"d-flex justify-content-between my-2\">\r\n                  <span class=\"font-weight-bold\">\r\n                    <i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{item.price}}\r\n                  </span>\r\n                  <span>{{item.discount}}</span>\r\n                  <span class=\"text-success font-weight-bold\">{{((item.discount/item.price)*100).toFixed(0)}}%\r\n                    off</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-12 col-md-4\">\r\n                <app-add-more [product]=\"item\" (qantityChange)=\"onQantityChange($event)\"></app-add-more>\r\n              </div>\r\n              <div class=\"col-12 col-md-4 text-left\">\r\n                <button class=\"btn btn-link px-0\" (click)=\"removeFromCart(item)\">Remove</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4 mt-3\">\r\n    <div class=\"bg-white\" *ngIf=\"checkoutProducts.length > 0\">\r\n      <h6 class=\"text-uppercase mb-1 border-bottom p-2\">Price Details</h6>\r\n      <div class=\"p-2\" *ngFor=\"let item of checkoutProducts\">\r\n        <div class=\"row\">\r\n          <span class=\"col-7\">Price ({{item.quantity}} Item)</span>\r\n          <span class=\"col-1\">:</span>\r\n          <span class=\"col-4 text-right\"><i class=\"fa fa-rupee mr-1\"></i>{{item.price * item.quantity}}</span>\r\n        </div>\r\n        <div class=\"row pt-2\">\r\n          <span class=\"col-7\">Discount</span>\r\n          <span class=\"col-1\">:</span>\r\n          <span class=\"col-4 text-right\"><i class=\"fa fa-rupee mr-1\"></i>{{item.discount * item.quantity}}</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"p-2 border-top\">\r\n        <div class=\"row font-weight-bold\">\r\n          <span class=\"col-8\">Totol Payable</span>\r\n          <span class=\"col-4 text-right\"><i class=\"fa fa-rupee mr-1\"></i>{{totalPrice - discount}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/product-list/product-list.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/product-list/product-list.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-2 d-none d-sm-block\">\r\n    <div class=\"py-3 d-none d-lg-block\">\r\n      <span class=\"font-weight-bold d-block\">Filter</span>\r\n      <app-filter (applyFilterEvent)=\"onApplyFilter($event)\"></app-filter>\r\n      <div class=\"text-center\">\r\n        <button class=\"btn btn-primary btn-sm font-weight-bold\" (click)=\"applyFilter()\">Apply</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-10 col-12\">\r\n    <div class=\"py-3 d-none d-lg-block\">\r\n      <app-sortby></app-sortby>\r\n    </div>\r\n    <div class=\"d-block d-md-none font-weight-bold d-flex justify-content-around\">\r\n      <span class=\"py-3 d-block\" data-toggle=\"modal\" data-target=\"#sortBy\">\r\n        <i class=\"fa fa-sort mr-2\"></i>\r\n        Sort By</span>\r\n      <span class=\"py-3 d-block\" data-toggle=\"modal\" data-target=\"#filter\"><i class=\"fa fa-filter mr-2\"></i>Filer</span>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"sortBy\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog mt-5 d-flex justify-content-center\" role=\"document\">\r\n        <div class=\"col-9\">\r\n          <div class=\"modal-content rounded-0\">\r\n            <div class=\"modal-body p-0\">\r\n              <app-sortby></app-sortby>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal fade\" id=\"filter\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog mt-5 d-flex justify-content-center\" role=\"document\">\r\n        <div class=\"col-9\">\r\n          <div class=\"modal-content rounded-0\">\r\n            <div class=\"modal-body p-0\">\r\n              <div class=\"p-2\">\r\n                <h6 class=\"mb-23\">Filter Options</h6>\r\n                <app-filter (applyFilterEvent)=\"onApplyFilter($event)\"></app-filter>\r\n              </div>\r\n              <div class=\"row border-top m-0\">\r\n                <div class=\"col-6 pl-0 text-center border-right\">\r\n                  <button type=\"button\" class=\"btn btn-link btn-sm p-0 pb-1 font-weight-bold\"\r\n                    data-dismiss=\"modal\">Cancel</button>\r\n                </div>\r\n                <div class=\"col-6 pr-0 text-center\">\r\n                  <button type=\"button\" class=\"btn btn-link btn-sm font-weight-bold pb-1 p-0\"\r\n                    (click)=\"applyFilter()\">Apply</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <div class=\"product\" *ngFor=\"let item of products\">\r\n        <app-product [item]=\"item\"></app-product>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _views_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/checkout/checkout.component */ "./src/app/views/checkout/checkout.component.ts");
/* harmony import */ var _views_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/product-list/product-list.component */ "./src/app/views/product-list/product-list.component.ts");





const routes = [
    { path: '', component: _views_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"] },
    { path: 'checkout', component: _views_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_3__["CheckoutComponent"] },
    { path: 'product-list', component: _views_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm2015/ng5-slider.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/reducer */ "./src/app/store/reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/filter/filter.component */ "./src/app/components/filter/filter.component.ts");
/* harmony import */ var _components_sortby_sortby_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/sortby/sortby.component */ "./src/app/components/sortby/sortby.component.ts");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/product/product.component */ "./src/app/components/product/product.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/components/cart/cart.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _views_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/checkout/checkout.component */ "./src/app/views/checkout/checkout.component.ts");
/* harmony import */ var _views_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/product-list/product-list.component */ "./src/app/views/product-list/product-list.component.ts");
/* harmony import */ var _components_add_more_add_more_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/add-more/add-more.component */ "./src/app/components/add-more/add-more.component.ts");
/* harmony import */ var _store_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./store/effects */ "./src/app/store/effects.ts");
/* harmony import */ var _pipes_product_filter_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pipes/product-filter.pipe */ "./src/app/pipes/product-filter.pipe.ts");






















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_11__["FilterComponent"],
            _components_sortby_sortby_component__WEBPACK_IMPORTED_MODULE_12__["SortByComponent"],
            _components_product_product_component__WEBPACK_IMPORTED_MODULE_13__["ProductComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
            _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_15__["CartComponent"],
            _components_search_search_component__WEBPACK_IMPORTED_MODULE_16__["SearchComponent"],
            _views_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_17__["CheckoutComponent"],
            _views_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_18__["ProductListComponent"],
            _components_add_more_add_more_component__WEBPACK_IMPORTED_MODULE_19__["AddMoreComponent"],
            _pipes_product_filter_pipe__WEBPACK_IMPORTED_MODULE_21__["ProductFilterPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            ng5_slider__WEBPACK_IMPORTED_MODULE_3__["Ng5SliderModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot({ shoping: _store_reducer__WEBPACK_IMPORTED_MODULE_7__["ShopingReducer"] }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([_store_effects__WEBPACK_IMPORTED_MODULE_20__["ShopingEffects"]]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/add-more/add-more.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-more/add-more.component.ts ***!
  \***********************************************************/
/*! exports provided: AddMoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMoreComponent", function() { return AddMoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddMoreComponent = class AddMoreComponent {
    constructor() {
        this.qantityChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    remove() {
        this.quantity--;
        this.product.quantity = this.quantity;
        this.qantityChange.emit(this.product);
    }
    add() {
        this.quantity++;
        this.product.quantity = this.quantity;
        this.qantityChange.emit(this.product);
    }
    ngOnInit() {
        this.quantity = this.product.quantity;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AddMoreComponent.prototype, "product", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AddMoreComponent.prototype, "qantityChange", void 0);
AddMoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-more',
        template: __webpack_require__(/*! raw-loader!./add-more.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/add-more/add-more.component.html"),
        styles: [__webpack_require__(/*! ./add-more.scss */ "./src/app/components/add-more/add-more.scss")]
    })
], AddMoreComponent);



/***/ }),

/***/ "./src/app/components/add-more/add-more.scss":
/*!***************************************************!*\
  !*** ./src/app/components/add-more/add-more.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-more-icon {\n  border: 2px solid #ebebeb;\n  padding: 2px 8px;\n  border-radius: 50%;\n  background: none;\n  cursor: pointer; }\n  .add-more-icon :focus {\n    outline: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtbW9yZS9EOlxcc2hvcHBpbmctY2FydC9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWRkLW1vcmVcXGFkZC1tb3JlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx5QkFIa0I7RUFJbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0VBTGpCO0lBT0ksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGQtbW9yZS9hZGQtbW9yZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHdoaXRlU21va2U6ICNlYmViZWI7XHJcblxyXG4uYWRkLW1vcmUtaWNvbiB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJHdoaXRlU21va2U7XHJcbiAgcGFkZGluZzogMnB4IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/cart/cart.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/cart/cart.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkout {\n  position: relative; }\n  .checkout .badge {\n    border-radius: 50%;\n    position: absolute;\n    top: -3px;\n    right: -15px;\n    font-size: 11px !important;\n    padding: 3px 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJ0L0Q6XFxzaG9wcGluZy1jYXJ0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjYXJ0XFxjYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCLEVBQUE7RUFEcEI7SUFHSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tvdXQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAuYmFkZ2Uge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtM3B4O1xyXG4gICAgcmlnaHQ6IC0xNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAzcHggNXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/cart/cart.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/cart/cart.component.ts ***!
  \***************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");



let CartComponent = class CartComponent {
    constructor(store) {
        this.store = store;
        this.cart = [];
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('shoping')).subscribe((data) => {
            const products = data.cart;
            const uniqeProductIds = products.reduce((obj, v) => {
                obj[v.id] = (obj[v.id] || 0) + 1;
                return obj;
            }, {});
            const flags = [];
            const output = [];
            const l = products.length;
            let i;
            for (i = 0; i < l; i++) {
                if (flags[products[i].id]) {
                    continue;
                }
                flags[products[i].id] = true;
                output.push(products[i]);
            }
            output.forEach((e) => {
                for (const key in uniqeProductIds) {
                    if (parseInt(key, 10) === e.id) {
                        e.quantity = uniqeProductIds[key];
                    }
                }
            });
            this.cart = output;
        });
    }
    get totalProducts() {
        return this.cart.reduce((prev, cur) => {
            return prev + cur.quantity;
        }, 0);
    }
    ngOnInit() { }
};
CartComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/cart/cart.component.html"),
        styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/components/cart/cart.component.scss")]
    })
], CartComponent);



/***/ }),

/***/ "./src/app/components/filter/filter.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/filter/filter.component.ts ***!
  \*******************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _filter_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter.model */ "./src/app/components/filter/filter.model.ts");




let FilterComponent = class FilterComponent {
    constructor(store) {
        this.store = store;
        this.minValue = 0;
        this.maxValue = 1000;
        this.applyFilterEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.options = {
            floor: 0,
            ceil: 1000,
            step: 1,
            minRange: 0,
            maxRange: 1000,
            translate: (value) => {
                return '<i class="fa fa-inr" style="font-size:14px; margin-right:4px;"></i>' + value;
            }
        };
        this.store.select('shoping').subscribe((d) => {
            if (d.filter !== '') {
                this.maxValue = d.filter.max;
                this.minValue = d.filter.min;
            }
        });
    }
    onUserChangeEnd(changeContext) {
        this.filterValue = new _filter_model__WEBPACK_IMPORTED_MODULE_3__["Filter"]();
        this.filterValue.min = changeContext.value;
        this.filterValue.max = changeContext.highValue;
        this.applyFilterEvent.emit(this.filterValue);
    }
};
FilterComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FilterComponent.prototype, "applyFilterEvent", void 0);
FilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filter',
        template: __webpack_require__(/*! raw-loader!./filter.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/filter/filter.component.html")
    })
], FilterComponent);



/***/ }),

/***/ "./src/app/components/filter/filter.model.ts":
/*!***************************************************!*\
  !*** ./src/app/components/filter/filter.model.ts ***!
  \***************************************************/
/*! exports provided: Filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return Filter; });
class Filter {
}


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let HeaderComponent = class HeaderComponent {
    constructor(router, location) {
        this.router = router;
        this.location = location;
        this.shouldHideCartIcon = false;
        this.router.events.subscribe(val => {
            this.shouldHideCartIcon = this.location.path() !== '';
        });
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html")
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/product/product.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/product/product.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/actions */ "./src/app/store/actions.ts");




let ProductComponent = class ProductComponent {
    constructor(store) {
        this.store = store;
        this.inCart = false;
    }
    addToCart(item) {
        this.store.dispatch(new src_app_store_actions__WEBPACK_IMPORTED_MODULE_3__["AddToCart"](item));
        this.inCart = true;
    }
    ngOnInit() { }
};
ProductComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductComponent.prototype, "item", void 0);
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        template: __webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/product/product.component.html")
    })
], ProductComponent);



/***/ }),

/***/ "./src/app/components/search/search.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-container {\n  position: relative;\n  width: 300px; }\n  .search-container .search {\n    position: absolute;\n    margin: auto;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    width: 30px;\n    transition: all 1s;\n    z-index: 4; }\n  .search-container .search:hover {\n      cursor: pointer; }\n  .search-container input {\n    position: absolute;\n    margin: auto;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    width: 50px;\n    height: 30px;\n    outline: none;\n    border: none;\n    transition: all 1s;\n    opacity: 0;\n    z-index: 5;\n    border-bottom: 1px solid #fff;\n    background: none; }\n  .search-container input:hover {\n      cursor: pointer; }\n  .search-container input:focus {\n      width: 200px;\n      opacity: 1;\n      cursor: text;\n      padding: 0 5px;\n      color: #fff;\n      border-radius: 0px; }\n  .search-container input:focus ~ .search {\n      z-index: 6; }\n  .search-container input::-webkit-input-placeholder {\n      color: white;\n      opacity: 0.5; }\n  .search-container input::-moz-placeholder {\n      color: white;\n      opacity: 0.5; }\n  .search-container input::-ms-input-placeholder {\n      color: white;\n      opacity: 0.5; }\n  .search-container input::placeholder {\n      color: white;\n      opacity: 0.5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvRDpcXHNob3BwaW5nLWNhcnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNlYXJjaFxcc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTtFQUZkO0lBSUksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVUsRUFBQTtFQVhkO01BYU0sZUFBZSxFQUFBO0VBYnJCO0lBaUJJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixnQkFBZ0IsRUFBQTtFQTlCcEI7TUFnQ00sZUFBZSxFQUFBO0VBaENyQjtNQW1DTSxZQUFZO01BQ1osVUFBVTtNQUNWLFlBQVk7TUFDWixjQUFjO01BQ2QsV0FBVztNQUNYLGtCQUFrQixFQUFBO0VBeEN4QjtNQTJDTSxVQUFVLEVBQUE7RUEzQ2hCO01BOENNLFlBQVk7TUFDWixZQUFZLEVBQUE7RUEvQ2xCO01BOENNLFlBQVk7TUFDWixZQUFZLEVBQUE7RUEvQ2xCO01BOENNLFlBQVk7TUFDWixZQUFZLEVBQUE7RUEvQ2xCO01BOENNLFlBQVk7TUFDWixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICAuc2VhcmNoIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgICB6LWluZGV4OiA0O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgaW5wdXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBjdXJzb3I6IHRleHQ7XHJcbiAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgfVxyXG4gICAgJjpmb2N1cyB+IC5zZWFyY2gge1xyXG4gICAgICB6LWluZGV4OiA2O1xyXG4gICAgfVxyXG4gICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.service */ "./src/app/components/search/search.service.ts");



let SearchComponent = class SearchComponent {
    constructor(searchService) {
        this.searchService = searchService;
    }
    onChange(query) {
        this.searchService.onSearch(query);
    }
};
SearchComponent.ctorParameters = () => [
    { type: _search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/search/search.component.html"),
        styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/components/search/search.component.scss")]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/components/search/search.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/search/search.service.ts ***!
  \*****************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let SearchService = class SearchService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    onSearch(query) {
        this.subject.next({ query });
    }
    clearSearch() {
        this.subject.next();
    }
    getSearch() {
        return this.subject.asObservable();
    }
};
SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], SearchService);



/***/ }),

/***/ "./src/app/components/sortby/sortby.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/sortby/sortby.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-sortby {\n  color: #007bff !important;\n  text-decoration: underline; }\n\n.sortby {\n  display: inline-block; }\n\n.sortby a {\n    cursor: pointer !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb3J0YnkvRDpcXHNob3BwaW5nLWNhcnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNvcnRieVxcc29ydGJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLDBCQUEwQixFQUFBOztBQUU1QjtFQUNFLHFCQUFxQixFQUFBOztBQUR2QjtJQUdJLDBCQUEwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zb3J0Ynkvc29ydGJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZS1zb3J0Ynkge1xyXG4gIGNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLnNvcnRieSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/sortby/sortby.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/sortby/sortby.component.ts ***!
  \*******************************************************/
/*! exports provided: SortByComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortByComponent", function() { return SortByComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/actions */ "./src/app/store/actions.ts");
/* harmony import */ var _sortby_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sortby.constant */ "./src/app/components/sortby/sortby.constant.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let SortByComponent = class SortByComponent {
    constructor(store) {
        this.store = store;
        this.SortBy = _sortby_constant__WEBPACK_IMPORTED_MODULE_4__["SortBy"];
        this.store.select('shoping').subscribe((d) => {
            this.sortBy = d.sorting;
        });
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            sortOption: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]()
        });
    }
    doSorting(sortBy) {
        const sorting = sortBy ? sortBy : this.userForm.value.sortOption;
        this.store.dispatch(new src_app_store_actions__WEBPACK_IMPORTED_MODULE_3__["DoSorting"](sorting));
        $('#sortBy').modal('hide');
    }
    isCurretSorting(sortBy) {
        return sortBy === this.sortBy;
    }
    ngOnInit() { }
};
SortByComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
SortByComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sortby',
        template: __webpack_require__(/*! raw-loader!./sortby.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sortby/sortby.component.html"),
        styles: [__webpack_require__(/*! ./sortby.component.scss */ "./src/app/components/sortby/sortby.component.scss")]
    })
], SortByComponent);



/***/ }),

/***/ "./src/app/components/sortby/sortby.constant.ts":
/*!******************************************************!*\
  !*** ./src/app/components/sortby/sortby.constant.ts ***!
  \******************************************************/
/*! exports provided: SortBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortBy", function() { return SortBy; });
const SortBy = {
    HIGH_LOW: 'HIGH_LOW',
    LOW_HIGH: 'LOW_HIGH',
    DISCOUNT: 'DISCOUNT'
};


/***/ }),

/***/ "./src/app/pipes/product-filter.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/product-filter.pipe.ts ***!
  \**********************************************/
/*! exports provided: ProductFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilterPipe", function() { return ProductFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductFilterPipe = class ProductFilterPipe {
    transform(list, filterText) {
        return list ? list.filter(item => item.name.search(new RegExp(filterText, 'i')) > -1) : [];
    }
};
ProductFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'productFilter'
    })
], ProductFilterPipe);



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get('https://api.myjson.com/bins/qzuzi');
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ "./src/app/store/actions.ts":
/*!**********************************!*\
  !*** ./src/app/store/actions.ts ***!
  \**********************************/
/*! exports provided: ActionTypes, AddToCart, DoSorting, DoFilter, GetItems, RemoveFromCart, LoadItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToCart", function() { return AddToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoSorting", function() { return DoSorting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoFilter", function() { return DoFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetItems", function() { return GetItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveFromCart", function() { return RemoveFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadItems", function() { return LoadItems; });
/* harmony import */ var _components_filter_filter_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/filter/filter.model */ "./src/app/components/filter/filter.model.ts");

var ActionTypes;
(function (ActionTypes) {
    ActionTypes["Add"] = "[Product] Add to cart";
    ActionTypes["Remove"] = "[Product] Remove from cart";
    ActionTypes["LoadItems"] = "[Products] Load items from server";
    ActionTypes["LoadSuccess"] = "[Products] Load success";
    ActionTypes["DoSorting"] = "[Products] Do Sorting";
    ActionTypes["DoFilter"] = "[Products] Do Filter";
})(ActionTypes || (ActionTypes = {}));
class AddToCart {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.Add;
    }
}
AddToCart.ctorParameters = () => [
    { type: undefined }
];
class DoSorting {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.DoSorting;
    }
}
DoSorting.ctorParameters = () => [
    { type: String }
];
class DoFilter {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.DoFilter;
    }
}
DoFilter.ctorParameters = () => [
    { type: _components_filter_filter_model__WEBPACK_IMPORTED_MODULE_0__["Filter"] }
];
class GetItems {
    constructor() {
        this.type = ActionTypes.LoadItems;
    }
}
class RemoveFromCart {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.Remove;
    }
}
RemoveFromCart.ctorParameters = () => [
    { type: undefined }
];
class LoadItems {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.LoadSuccess;
    }
}
LoadItems.ctorParameters = () => [
    { type: Array }
];


/***/ }),

/***/ "./src/app/store/effects.ts":
/*!**********************************!*\
  !*** ./src/app/store/effects.ts ***!
  \**********************************/
/*! exports provided: ShopingEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopingEffects", function() { return ShopingEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions */ "./src/app/store/actions.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");







let ShopingEffects = class ShopingEffects {
    constructor(actions$, productService) {
        this.actions$ = actions$;
        this.productService = productService;
        this.loadProduct$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].LoadItems), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(() => this.productService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(products => {
            return { type: _actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].LoadSuccess, payload: products };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"]))));
    }
};
ShopingEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], ShopingEffects.prototype, "loadProduct$", void 0);
ShopingEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ShopingEffects);



/***/ }),

/***/ "./src/app/store/reducer.ts":
/*!**********************************!*\
  !*** ./src/app/store/reducer.ts ***!
  \**********************************/
/*! exports provided: initialState, ShopingReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopingReducer", function() { return ShopingReducer; });
/* harmony import */ var _components_sortby_sortby_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/sortby/sortby.constant */ "./src/app/components/sortby/sortby.constant.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/store/actions.ts");


const initialState = {
    items: [],
    cart: [],
    sorting: _components_sortby_sortby_constant__WEBPACK_IMPORTED_MODULE_0__["SortBy"].HIGH_LOW,
    filter: ''
};
function ShopingReducer(state = initialState, action) {
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].LoadSuccess:
            return Object.assign({}, state, { items: [...action.payload] });
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].DoSorting:
            return Object.assign({}, state, { sorting: action.payload });
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].DoFilter:
            return Object.assign({}, state, { filter: action.payload });
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].Add:
            return Object.assign({}, state, { cart: [...state.cart, action.payload] });
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].Remove:
            return Object.assign({}, state, { cart: [...state.cart.filter(item => item.id !== action.payload.id)] });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/views/checkout/checkout.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/checkout/checkout.component.ts ***!
  \******************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/actions */ "./src/app/store/actions.ts");
/* harmony import */ var src_app_components_search_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/search/search.service */ "./src/app/components/search/search.service.ts");





let CheckoutComponent = class CheckoutComponent {
    constructor(store, searchService) {
        this.store = store;
        this.searchService = searchService;
        this.checkoutProducts = [];
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('shoping')).subscribe((data) => {
            const products = data.cart;
            const uniqeProductIds = products.reduce((obj, v) => {
                obj[v.id] = (obj[v.id] || 0) + 1;
                return obj;
            }, {});
            const flags = [];
            const output = [];
            const l = products.length;
            let i;
            for (i = 0; i < l; i++) {
                if (flags[products[i].id]) {
                    continue;
                }
                flags[products[i].id] = true;
                output.push(products[i]);
            }
            output.forEach((e) => {
                for (const key in uniqeProductIds) {
                    if (parseInt(key, 10) === e.id) {
                        e.quantity = uniqeProductIds[key];
                    }
                }
            });
            this.checkoutProducts = output;
        });
        this.subscription = this.searchService.getSearch().subscribe(data => {
            this.searchQuery = data.query;
        });
    }
    removeFromCart(item) {
        this.store.dispatch(new src_app_store_actions__WEBPACK_IMPORTED_MODULE_3__["RemoveFromCart"](item));
    }
    onQantityChange(product) { }
    get totalPrice() {
        return this.checkoutProducts.reduce((prev, cur) => {
            return prev + (cur.price * cur.quantity);
        }, 0);
    }
    get discount() {
        return this.checkoutProducts.reduce((prev, cur) => {
            return prev + (cur.discount * cur.quantity);
        }, 0);
    }
    ngOnInit() { }
};
CheckoutComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: src_app_components_search_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"] }
];
CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout',
        template: __webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/checkout/checkout.component.html")
    })
], CheckoutComponent);



/***/ }),

/***/ "./src/app/views/product-list/product-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/product-list/product-list.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _components_sortby_sortby_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../components/sortby/sortby.constant */ "./src/app/components/sortby/sortby.constant.ts");
/* harmony import */ var src_app_store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/actions */ "./src/app/store/actions.ts");
/* harmony import */ var src_app_components_search_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/search/search.service */ "./src/app/components/search/search.service.ts");






let ProductListComponent = class ProductListComponent {
    constructor(store, searchService) {
        this.store = store;
        this.searchService = searchService;
        this.products = [];
        this.searchQuery = '';
        this.productClone = [];
        this.store.select('shoping').subscribe((d) => {
            this.products = this.sortProduct(d.items, d.sorting);
            if (d.filter !== '') {
                this.products = this.products.filter((item) => {
                    return item.price <= d.filter.max && item.price >= d.filter.min;
                });
            }
            this.productClone = JSON.parse(JSON.stringify(this.products));
        });
        this.subscription = this.searchService.getSearch().subscribe(data => {
            const filterText = data.query;
            this.products = this.productClone ? this.productClone.filter(item => item.name.search(new RegExp(filterText, 'i')) > -1) : [];
        });
    }
    sortProduct(items, sortBy) {
        let condition1;
        let condition2;
        let key;
        if (sortBy === _components_sortby_sortby_constant__WEBPACK_IMPORTED_MODULE_3__["SortBy"].HIGH_LOW) {
            condition1 = 1;
            condition2 = -1;
            key = 'price';
        }
        else if (sortBy === _components_sortby_sortby_constant__WEBPACK_IMPORTED_MODULE_3__["SortBy"].LOW_HIGH) {
            condition1 = -1;
            condition2 = 1;
            key = 'price';
        }
        else if (sortBy === _components_sortby_sortby_constant__WEBPACK_IMPORTED_MODULE_3__["SortBy"].DISCOUNT) {
            condition1 = 1;
            condition2 = -1;
            key = 'discount';
        }
        return items.sort((a, b) => {
            if (a[key] < b[key]) {
                return condition1;
            }
            if (a[key] > b[key]) {
                return condition2;
            }
            return 0;
        });
    }
    onApplyFilter($event) {
        this.filterValues = $event;
        $('#filter').modal('hide');
    }
    applyFilter() {
        this.store.dispatch(new src_app_store_actions__WEBPACK_IMPORTED_MODULE_4__["DoFilter"](this.filterValues));
        this.products = this.products.filter((item) => {
            return item.price <= this.filterValues.max && item.price >= this.filterValues.min;
        });
    }
    ngOnInit() {
        this.store.dispatch(new src_app_store_actions__WEBPACK_IMPORTED_MODULE_4__["GetItems"]());
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
ProductListComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: src_app_components_search_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"] }
];
ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-list',
        template: __webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/product-list/product-list.component.html")
    })
], ProductListComponent);



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\shopping-cart\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map