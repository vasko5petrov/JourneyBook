webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n  <flash-messages></flash-messages>\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app';
        this.router.events.filter(function (e) { return e.constructor.name === 'RoutesRecognized'; })
            .pairwise().subscribe(function (e) {
            localStorage.setItem('prev', e[0].urlAfterRedirects);
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export OrderBy */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_journeys_journeys_journeys_component__ = __webpack_require__("../../../../../src/app/components/journeys/journeys/journeys.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_journeys_add_journey_add_journey_component__ = __webpack_require__("../../../../../src/app/components/journeys/add-journey/add-journey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_journeys_edit_journey_edit_journey_component__ = __webpack_require__("../../../../../src/app/components/journeys/edit-journey/edit-journey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_journeys_journey_journey_component__ = __webpack_require__("../../../../../src/app/components/journeys/journey/journey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_journeys_journey_image_journey_image_component__ = __webpack_require__("../../../../../src/app/components/journeys/journey-image/journey-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_journeys_map_journeys_map_component__ = __webpack_require__("../../../../../src/app/components/journeys-map/journeys-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_modal_confirm_modal_component__ = __webpack_require__("../../../../../src/app/components/modal/confirm-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_loader_loader_component__ = __webpack_require__("../../../../../src/app/components/loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_daterangepicker__ = __webpack_require__("../../../../ng2-daterangepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_daterangepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ng2_daterangepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_order_pipe__ = __webpack_require__("../../../../ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_journeys_service__ = __webpack_require__("../../../../../src/app/services/journeys.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'journeys', component: __WEBPACK_IMPORTED_MODULE_8__components_journeys_journeys_journeys_component__["a" /* JourneysComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'journeys/map', component: __WEBPACK_IMPORTED_MODULE_13__components_journeys_map_journeys_map_component__["a" /* JourneysMapComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'add-journey', component: __WEBPACK_IMPORTED_MODULE_9__components_journeys_add_journey_add_journey_component__["a" /* AddJourneyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'edit-journey/:id', component: __WEBPACK_IMPORTED_MODULE_10__components_journeys_edit_journey_edit_journey_component__["a" /* EditJourneyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'journeys/:id', component: __WEBPACK_IMPORTED_MODULE_11__components_journeys_journey_journey_component__["a" /* JourneyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'edit-journey/:id/image', component: __WEBPACK_IMPORTED_MODULE_12__components_journeys_journey_image_journey_image_component__["a" /* JourneyImageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'users/register', component: __WEBPACK_IMPORTED_MODULE_16__components_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'users/login', component: __WEBPACK_IMPORTED_MODULE_17__components_login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '*', redirectTo: '' }
];
var OrderBy = (function () {
    function OrderBy() {
    }
    OrderBy.prototype.transform = function (array, orderBy, asc) {
        var _this = this;
        if (asc === void 0) { asc = true; }
        if (!orderBy || orderBy.trim() == "") {
            return array;
        }
        //ascending
        if (asc) {
            return Array.from(array).sort(function (item1, item2) {
                return _this.orderByComparator(item1[orderBy], item2[orderBy]);
            });
        }
        else {
            //not asc
            return Array.from(array).sort(function (item1, item2) {
                return _this.orderByComparator(item2[orderBy], item1[orderBy]);
            });
        }
    };
    OrderBy.prototype.orderByComparator = function (a, b) {
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            //Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase())
                return -1;
            if (a.toLowerCase() > b.toLowerCase())
                return 1;
        }
        else {
            //Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0; //equal each other
    };
    return OrderBy;
}());
OrderBy = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: 'orderBy'
    })
], OrderBy);

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_journeys_journeys_journeys_component__["a" /* JourneysComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_journeys_add_journey_add_journey_component__["a" /* AddJourneyComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_journeys_journey_journey_component__["a" /* JourneyComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_journeys_edit_journey_edit_journey_component__["a" /* EditJourneyComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_journeys_journey_image_journey_image_component__["a" /* JourneyImageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_modal_confirm_modal_component__["a" /* ConfirmComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_journeys_map_journeys_map_component__["a" /* JourneysMapComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_loader_loader_component__["a" /* LoaderComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_login_login_component__["a" /* LoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_19__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyCmzwn1Ap8Y9_Zso9ee5iJ8OiHFXTKfR5c',
                libraries: ["places"]
            }),
            __WEBPACK_IMPORTED_MODULE_20_ng2_daterangepicker__["Daterangepicker"],
            __WEBPACK_IMPORTED_MODULE_21_ng2_bootstrap_modal__["BootstrapModalModule"],
            __WEBPACK_IMPORTED_MODULE_22_ng2_order_pipe__["Ng2OrderModule"],
            __WEBPACK_IMPORTED_MODULE_23_ngx_pagination__["a" /* NgxPaginationModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_24__services_journeys_service__["a" /* JourneysService */],
            __WEBPACK_IMPORTED_MODULE_25__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_26__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_14__components_modal_confirm_modal_component__["a" /* ConfirmComponent */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home_bg {\r\n  margin: 0 auto;\r\n  width: 500px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n\t<h1>JourneyBook</h1>\r\n  <p>Keep a nice album of your journeys.</p>\r\n</div>\r\n<img src=\"images/home_background.jpg\" class=\"img-responsive home_bg\">\r\n<div class=\"row\">\r\n\t<h3 class=\"text-center\">Welcome to my custom MEAN Stack application build from scratch.</h3>\r\n\t<div class=\"col-md-4\">\r\n\t\t<h3>Express Backend</h3>\r\n\t\t<p>A rock solid Node.js/Express server using Mongoose to organize models and query the database</p>\r\n\t</div>\r\n\t<div class=\"col-md-4\">\r\n\t\t<h3>Angular-CLI</h3>\r\n\t\t<p>Angular-CLI to generate components, services and more. Local dev server and easy compilation</p>\r\n\t</div>\r\n\t<div class=\"col-md-4\">\r\n\t\t<h3>Google Maps API</h3>\r\n\t\t<p>Full featured Google Maps RESTful API</p>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/journeys-map/journeys-map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sebm-google-map-container {\r\n      height: 60vh;\r\n    }\r\n    .star-rating-list {\r\n    \tcolor: gold;\r\n      font-size: 20px;\r\n    }\r\n.panel-body {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/journeys-map/journeys-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"journeys\">\r\n  <h2 class=\"page-header\">Journeys Map</h2>\r\n  <div class=\"panel panel-primary\" *ngIf=\"journeys.length != 0\">\r\n      <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" class=\"panel-body\" [scrollwheel]=\"true\" [zoom]=\"zoom\" style=\"padding: 0;\">\r\n        <agm-marker *ngFor=\"let m of journeys; let i = index\"\r\n        [latitude]=\"m.location.lat\"\r\n        [longitude]=\"m.location.lng\"\r\n        [markerDraggable]=\"false\"\r\n        (markerClick)=\"clickedMarker(infoWindow)\"\r\n        [iconUrl]=\"setMarkerIcon(m)\">\r\n          <agm-info-window class=\"infoWindow\" #infoWindow>\r\n            <div class=\"m-thumbnail\">\r\n              <img *ngIf=\"m.imageUrl == 'defaultImage.png'\" src=\"uploads/{{m.imageUrl}}\" class=\"img-responsive\" width=\"200px;\">\r\n              <img *ngIf=\"m.imageUrl != 'defaultImage.png' && m.imageUrl.substr(0, 4) != 'http'\" src=\"api/images/{{m.imageUrl}}\" class=\"img-responsive\" width=\"200px;\">\r\n              <img *ngIf=\"m.imageUrl.substr(0, 4) == 'http'\" src=\"{{m.imageUrl}}\" class=\"img-responsive\" width=\"200px;\">\r\n            </div>\r\n            <a [routerLink]=\"['/journeys/'+m._id]\"><strong>{{m.title}}</strong></a><br>\r\n            <p>{{m.location.place}}</p>\r\n          </agm-info-window>\r\n        </agm-marker>\r\n      </agm-map>\r\n  </div>\r\n  <div class=\"col-xs-12\" *ngIf=\"journeys.length === 0\">\r\n    <h4 class=\"text-center\">No journeys found.</h4>\r\n    <p class=\"text-center\"><a [routerLink]=\"['/add-journey']\" class=\"btn btn-warning\"><i class=\"fa fa-plus\" style=\"font-size: 14px!important;\"></i> Add Journey</a></p>\r\n  </div>\r\n</div>\r\n<data-loader *ngIf=\"!journeys\"></data-loader>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/journeys-map/journeys-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JourneysMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_journeys_service__ = __webpack_require__("../../../../../src/app/services/journeys.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JourneysMapComponent = (function () {
    function JourneysMapComponent(mapsAPILoader, journeysService) {
        this.mapsAPILoader = mapsAPILoader;
        this.journeysService = journeysService;
    }
    JourneysMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.journeysService.getJourneys().subscribe(function (journeys) {
            _this.journeys = journeys;
            _this.zoom = 6;
            for (var i = 0; i < journeys.length; i++) {
                _this.latitude = journeys[i].location.lat;
                _this.longitude = journeys[i].location.lng;
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    JourneysMapComponent.prototype.clickedMarker = function (data) {
        if (data === void 0) { data = undefined; }
        if (this.IW) {
            this.IW.close();
        }
        this.IW = data;
    };
    JourneysMapComponent.prototype.setMarkerIcon = function (m) {
        if (m.type === "Mountain") {
            return "images/mountain_pin.png";
        }
        else if (m.type === "Monuments") {
            return "images/monuments_pin.png";
        }
        else if (m.type === "Sea") {
            return "images/sea_pin.png";
        }
        else if (m.type === "Spa") {
            return "images/spa_pin.png";
        }
        else {
            return "images/pin.png";
        }
    };
    return JourneysMapComponent;
}());
JourneysMapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-journeys-map',
        template: __webpack_require__("../../../../../src/app/components/journeys-map/journeys-map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/journeys-map/journeys-map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* MapsAPILoader */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_journeys_service__["a" /* JourneysService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_journeys_service__["a" /* JourneysService */]) === "function" && _b || Object])
], JourneysMapComponent);

var _a, _b;
//# sourceMappingURL=journeys-map.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/journeys/add-journey/add-journey.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".choose_file{\r\n}\r\n.choose_file input[type=\"file\"]{\r\n    -webkit-appearance:none;\r\n    position:absolute;\r\n    top:0; left:0;\r\n    opacity:0;\r\n}\r\n\r\n.inputfile {\r\n\twidth: 0.1px;\r\n\theight: 0.1px;\r\n\topacity: 0;\r\n\toverflow: hidden;\r\n\tposition: absolute;\r\n\tz-index: -1;\r\n}\r\n.inputfile + label {\r\n    font-weight: 700;\r\n    display: inline-block;\r\n}\r\n.inputfile + label {\r\n\tcursor: pointer; /* \"hand\" cursor */\r\n}\r\n.inputfile:focus + label {\r\n\toutline: 1px dotted #000;\r\n\toutline: -webkit-focus-ring-color auto 5px;\r\n}\r\n.inputfile + label * {\r\n\tpointer-events: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/journeys/add-journey/add-journey.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-md-6 col-md-offset-3\">\r\n\t\t<h2 class=\"page-header\">Add Journey</h2>\r\n\t\t<form (submit)=\"onAddJourneySubmit()\" (keydown.enter)=\"$event.preventDefault()\" class=\"form-wrap\">\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"title\">Title</label>\r\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"title\" name=\"title\" id=\"title\" class=\"form-control\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t  \t<label for=\"location\">Location</label>\r\n\t\t    <input [(ngModel)]=\"location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" #search type=\"text\" name=\"location\" class=\"form-control\" id=\"location\">\r\n\t\t  </div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"duration\">Duration</label>\r\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"dateLabel\" class=\"form-control\" id=\"duration\" required name=\"duration\" daterangepicker [options]=\"options\" (applyDaterangepicker)=\"selectedDate($event)\" (cancelDaterangepicker)=\"selectedDate($event)\" (hideDaterangepicker)=\"selectedDate($event)\" />\r\n\t\t\t\t<!-- <input type=\"text\" [(ngModel)]=\"duration\" name=\"duration\" id=\"duration\" class=\"form-control\"> -->\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n        <label>Type</label>\r\n        <select type=\"text\" name=\"type\" [(ngModel)]=\"type\" class=\"form-control\">\r\n\t\t\t\t\t<option value=\"none\" selected>None</option>\r\n          <option value=\"Monuments\">Monuments</option>\r\n          <option value=\"Mountain\">Mountain</option>\r\n          <option value=\"Sea\">Sea</option>\r\n          <option value=\"Spa\">Spa</option>\r\n        </select>\r\n      </div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label>Rating</label>\r\n\t      <div class=\"star-rating\">\r\n\t        <fieldset required>\r\n\t          <input type=\"radio\" id=\"star5\" name=\"rating\" [(ngModel)]=\"rating\" value=\"5\" /><label for=\"star5\" title=\"Outstanding\">5 stars</label>\r\n\t          <input type=\"radio\" id=\"star4\" name=\"rating\" [(ngModel)]=\"rating\" value=\"4\" /><label for=\"star4\" title=\"Very Good\">4 stars</label>\r\n\t          <input type=\"radio\" id=\"star3\" name=\"rating\" [(ngModel)]=\"rating\" value=\"3\" /><label for=\"star3\" title=\"Good\">3 stars</label>\r\n\t          <input type=\"radio\" id=\"star2\" name=\"rating\" [(ngModel)]=\"rating\" value=\"2\" /><label for=\"star2\" title=\"Poor\">2 stars</label>\r\n\t          <input type=\"radio\" id=\"star1\" name=\"rating\" [(ngModel)]=\"rating\" value=\"1\" /><label for=\"star1\" title=\"Very Poor\">1 star</label>\r\n\t        </fieldset>\r\n\t      </div>\r\n\t\t\t</div>\r\n\t\t\t<!-- <div class=\"form-group\">\r\n\t\t\t    <label for=\"imageFile\">Image</label>\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<input type=\"file\" [(ngModel)]=\"imageFile\" name=\"imageFile\" id=\"imageFile\" class=\"inputfile\" (change)=\"onChangeImageFile($event)\"/>\r\n\t\t\t\t\t<label for=\"imageFile\" class=\"btn btn-warning\"><i class=\"fa fa-image\"></i> <strong>Choose image</strong></label>\r\n\t\t\t\t\t<button *ngIf=\"imgReader\" type=\"button\" class=\"btn btn-danger\" (click)=\"removeImageFile()\">Remove image</button>\r\n\t\t\t</div>\r\n\t\t\t<div [hidden]=\"!imgReader\">\r\n          <div *ngIf=\"imgReader\" class=\"img-wrapper\">\r\n            <img class=\"img-responsive\" src=\"{{imgReader}}\">\r\n          </div>\r\n      </div> -->\r\n\t\t\t<hr>\r\n\t\t\t<input type=\"submit\" value=\"Add\" class=\"btn btn-primary btn-block\">\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/journeys/add-journey/add-journey.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddJourneyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_daterangepicker__ = __webpack_require__("../../../../ng2-daterangepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_daterangepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_daterangepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_journeys_service__ = __webpack_require__("../../../../../src/app/services/journeys.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddJourneyComponent = (function () {
    function AddJourneyComponent(router, journeysService, validateService, flashMessage, mapsAPILoader, ngZone, daterangepickerOptions) {
        this.router = router;
        this.journeysService = journeysService;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.daterangepickerOptions = daterangepickerOptions;
        this.daterange = {};
        this.options = {
            locale: { format: 'YYYY-MM-DD' },
            alwaysShowCalendars: false,
        };
        // image: any;
        // imgReader: string;
        this.messageTimeout = 3000;
        this.daterangepickerOptions.settings = {
            locale: { format: 'YYYY-MM-DD' },
            alwaysShowCalendars: false
        };
    }
    AddJourneyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        //create search FormControl
        //this.searchControl = new FormControl();
        //set current position
        //this.setCurrentPosition();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement);
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    // for(let i = 0; i < place.photos.length; i++) {
                    //   console.log(place.photos[i].getUrl({'maxWidth': 1600, 'maxHeight': 1200}));
                    // }
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.location_obj = {
                        address: place["formatted_address"],
                        place: place.name,
                        lat: _this.latitude,
                        lng: _this.longitude
                    };
                    _this.location = place["formatted_address"];
                });
            });
        });
    };
    AddJourneyComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
            });
        }
    };
    AddJourneyComponent.prototype.selectedDate = function (value) {
        if (value == undefined) {
            console.log("Erorr");
        }
        else {
            this.daterange.start = value.picker.startDate;
            this.daterange.end = value.picker.endDate;
            this.daterange.label = value.event.target.value;
            this.diffDays = Math.round(Math.abs((this.daterange.start - this.daterange.end) / (24 * 60 * 60 * 1000)));
            this.dateLabel = this.daterange.start.format('YYYY-MM-DD') + ' - ' + this.daterange.end.format('YYYY-MM-DD');
            this.duration = {
                days: this.diffDays,
                dateLabel: this.dateLabel,
                start: Date.parse(this.daterange.start),
                end: Date.parse(this.daterange.end)
            };
        }
    };
    // removeImageFile() {
    //   this.image = null;
    //   this.imgReader = null;
    // }
    //
    // onChangeImageFile(event) {
    // 	let image = event.srcElement.files[0];
    // 	this.image = image;
    //   let reader = new FileReader();
    //   reader.onload = () => {
    //     this.imgReader = reader.result;
    //   }
    //
    //   if(this.image && this.image.type == 'image/jpeg') {
    //     reader.readAsDataURL(this.image);
    //   } else {
    //     this.flashMessage.show('This file will not be uploaded! Please select an image file!', {cssClass: 'alert-danger', timeout: this.messageTimeout});
    //     this.image = null;
    //     this.imgReader = null;
    //   }
    // }
    AddJourneyComponent.prototype.onAddJourneySubmit = function () {
        var _this = this;
        if (this.type == "" || this.type == undefined) {
            this.type = "None";
        }
        if (this.rating == "" || this.rating == undefined) {
            this.rating = "Not rated";
        }
        var journey = {
            title: this.title,
            location: this.location_obj,
            duration: this.duration,
            type: this.type,
            rating: this.rating
        };
        // if(this.image) {
        // 	this.journeysService.uploadImage(this.image).subscribe(res => {
        // 		if(res.success) {
        // 			journey['imageUrl'] = res.file;
        //
        // 	    this.journeysService.addJourney(journey).subscribe(data => {
        // 	      if(data.success) {
        // 	      	this.flashMessage.show(data.message, {cssClass: 'alert-success', timeout: this.messageTimeout});
        // 	        this.router.navigate(['/journeys']);
        // 	      } else {
        // 	      	for(let i=0; i<data.message.length; i++) {
        // 		  			this.flashMessage.show(data.message[i].message, {cssClass: 'alert-danger', timeout: this.messageTimeout});
        // 		  		}
        // 	      }
        // 	    });
        // 		} else {
        // 	  	if(!this.validateService.validateImage(res)) {
        // 	  		this.flashMessage.show('File size too big!', {cssClass: 'alert-danger', timeout: this.messageTimeout});
        // 	  		return false;
        // 	  	}
        // 		}
        // 	});
        // } else {
        journey['imageUrl'] = 'defaultImage.png';
        this.journeysService.addJourney(journey).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.message, { cssClass: 'alert-success', timeout: _this.messageTimeout });
                _this.router.navigate(['/edit-journey/' + data.id + '/image']);
            }
            else {
                for (var i = 0; i < data.message.length; i++) {
                    _this.flashMessage.show(data.message[i].message, { cssClass: 'alert-danger', timeout: _this.messageTimeout });
                }
            }
        });
        // }
    };
    return AddJourneyComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], AddJourneyComponent.prototype, "searchElementRef", void 0);
AddJourneyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-journey',
        template: __webpack_require__("../../../../../src/app/components/journeys/add-journey/add-journey.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/journeys/add-journey/add-journey.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_journeys_service__["a" /* JourneysService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_journeys_service__["a" /* JourneysService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_validate_service__["a" /* ValidateService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* MapsAPILoader */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_daterangepicker__["DaterangepickerConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_daterangepicker__["DaterangepickerConfig"]) === "function" && _h || Object])
], AddJourneyComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=add-journey.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/journeys/edit-journey/edit-journey.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".choose_file{\r\n}\r\n.choose_file input[type=\"file\"]{\r\n    -webkit-appearance:none;\r\n    position:absolute;\r\n    top:0; left:0;\r\n    opacity:0;\r\n}\r\n\r\n.inputfile {\r\n\twidth: 0.1px;\r\n\theight: 0.1px;\r\n\topacity: 0;\r\n\toverflow: hidden;\r\n\tposition: absolute;\r\n\tz-index: -1;\r\n}\r\n.inputfile + label {\r\n    font-weight: 700;\r\n    display: inline-block;\r\n}\r\n.inputfile + label {\r\n\tcursor: pointer; /* \"hand\" cursor */\r\n}\r\n.inputfile:focus + label {\r\n\toutline: 1px dotted #000;\r\n\toutline: -webkit-focus-ring-color auto 5px;\r\n}\r\n.inputfile + label * {\r\n\tpointer-events: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/journeys/edit-journey/edit-journey.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"journey\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 col-sm-12\">\r\n      <h2 class=\"page-header\">\r\n        Edit {{journey.title}}\r\n      </h2>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 col-md-offset-3\">\r\n      <form (submit)=\"onEditJourneySubmit()\" (keydown.enter)=\"$event.preventDefault()\" class=\"form-wrap\">\r\n        <div class=\"form-group\">\r\n  \t\t\t\t<label for=\"title\">Title</label>\r\n  \t\t\t\t<input type=\"text\" [(ngModel)]=\"journey.title\" name=\"title\" id=\"title\" class=\"form-control\">\r\n  \t\t\t</div>\r\n        <div class=\"form-group\">\r\n  \t\t    <label for=\"location_input\">Location</label>\r\n  \t\t    <input [(ngModel)]=\"journey.location.address\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" #editSearch name=\"location\" class=\"form-control\" (focus)=\"onFocusLocationInput()\" id=\"location_input\">\r\n  \t\t  </div>\r\n        <div class=\"form-group\">\r\n  \t\t\t\t<label for=\"duration\">Duration</label>\r\n  \t\t\t\t<input type=\"text\" [(ngModel)]=\"journey.duration.dateLabel\" class=\"form-control\" id=\"duration\" required name=\"duration\" daterangepicker [options]=\"options\" (applyDaterangepicker)=\"selectedDate($event)\" (cancelDaterangepicker)=\"selectedDate($event)\" (hideDaterangepicker)=\"selectedDate($event)\" />\r\n  \t\t\t\t<!-- <input type=\"text\" [(ngModel)]=\"duration\" name=\"duration\" id=\"duration\" class=\"form-control\"> -->\r\n  \t\t\t</div>\r\n        <div class=\"form-group\">\r\n          <label>Type</label>\r\n          <select type=\"text\" name=\"type\" [(ngModel)]=\"journey.type\" class=\"form-control\">\r\n  \t\t\t\t\t<option value=\"none\" selected>None</option>\r\n            <option value=\"Monuments\">Monuments</option>\r\n            <option value=\"Mountain\">Mountain</option>\r\n            <option value=\"Sea\">Sea</option>\r\n            <option value=\"Spa\">Spa</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n  \t\t\t\t<label>Rating</label>\r\n  \t      <div class=\"star-rating\">\r\n  \t        <fieldset required>\r\n  \t          <input type=\"radio\" id=\"star5\" name=\"rating\" [(ngModel)]=\"journey.rating\" value=\"5\" /><label for=\"star5\" title=\"Outstanding\">5 stars</label>\r\n  \t          <input type=\"radio\" id=\"star4\" name=\"rating\" [(ngModel)]=\"journey.rating\" value=\"4\" /><label for=\"star4\" title=\"Very Good\">4 stars</label>\r\n  \t          <input type=\"radio\" id=\"star3\" name=\"rating\" [(ngModel)]=\"journey.rating\" value=\"3\" /><label for=\"star3\" title=\"Good\">3 stars</label>\r\n  \t          <input type=\"radio\" id=\"star2\" name=\"rating\" [(ngModel)]=\"journey.rating\" value=\"2\" /><label for=\"star2\" title=\"Poor\">2 stars</label>\r\n  \t          <input type=\"radio\" id=\"star1\" name=\"rating\" [(ngModel)]=\"journey.rating\" value=\"1\" /><label for=\"star1\" title=\"Very Poor\">1 star</label>\r\n  \t        </fieldset>\r\n  \t      </div>\r\n  \t\t\t</div>\r\n        <!-- <div class=\"form-group\">\r\n  \t\t\t    <label for=\"imageFile\">Image</label>\r\n  \t\t\t\t\t<br>\r\n  \t\t\t\t\t<input type=\"file\" [(ngModel)]=\"imageFile\" name=\"imageFile\" id=\"imageFile\" class=\"inputfile\" (change)=\"onChangeImageFile($event)\"/>\r\n  \t\t\t\t\t<label for=\"imageFile\" class=\"btn btn-warning\"><i class=\"fa fa-image\"></i> <strong>Choose image</strong></label>\r\n  \t\t\t\t\t<button *ngIf=\"!imgReader && oldImage && oldImage != 'defaultImage.png'\" type=\"button\" class=\"btn btn-danger\" (click)=\"removeCurrentImage()\">Remove image</button>\r\n  \t\t\t</div>\r\n  \t\t\t<div [hidden]=\"!imgReader\">\r\n            <div *ngIf=\"imgReader\" class=\"img-wrapper\">\r\n              <img class=\"img-responsive\" src=\"{{imgReader}}\">\r\n            </div>\r\n        </div>\r\n        <div [hidden]=\"!oldImage\">\r\n            <div *ngIf=\"!imgReader\" class=\"img-wrapper\">\r\n      \t\t\t\t<img *ngIf=\"journey.imageUrl === 'defaultImage.png'\" src=\"http://localhost:3000/uploads/{{journey.imageUrl}}\" class=\"img-responsive\">\r\n              <img *ngIf=\"journey.imageUrl != 'defaultImage.png'\" class=\"img-responsive\" src=\"http://localhost:3000/api/images/{{oldImage}}\">\r\n            </div>\r\n        </div> -->\r\n  \t\t\t<hr>\r\n  \t\t\t<input type=\"submit\" value=\"Save\" class=\"btn btn-primary btn-block\">\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/journeys/edit-journey/edit-journey.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditJourneyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_daterangepicker__ = __webpack_require__("../../../../ng2-daterangepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_daterangepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_daterangepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_journeys_service__ = __webpack_require__("../../../../../src/app/services/journeys.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditJourneyComponent = (function () {
    function EditJourneyComponent(router, activatedRoute, journeysService, validateService, flashMessage, mapsAPILoader, ngZone, daterangepickerOptions) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.journeysService = journeysService;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.daterangepickerOptions = daterangepickerOptions;
        // image: any;
        // imgReader: any;
        // oldImage: any;
        this.daterange = {};
        this.options = {
            locale: { format: 'YYYY-MM-DD' },
            alwaysShowCalendars: false,
        };
        this.messageTimeout = 3000;
        this.daterangepickerOptions.settings = {
            locale: { format: 'YYYY-MM-DD' },
            alwaysShowCalendars: false
        };
    }
    EditJourneyComponent.prototype.selectedDate = function (value) {
        if (value == undefined) {
            console.log("Erorr");
        }
        else {
            this.daterange.start = value.picker.startDate;
            this.daterange.end = value.picker.endDate;
            this.daterange.label = value.event.target.value;
            this.diffDays = Math.round(Math.abs((this.daterange.start - this.daterange.end) / (24 * 60 * 60 * 1000)));
            this.dateLabel = this.daterange.start.format('YYYY-MM-DD') + ' - ' + this.daterange.end.format('YYYY-MM-DD');
            this.journey.duration.days = this.diffDays;
            this.journey.duration.dateLabel = this.dateLabel;
            this.journey.duration.start = Date.parse(this.daterange.start);
            this.journey.duration.end = Date.parse(this.daterange.start);
        }
    };
    // onChangeImageFile(event) {
    // 	let image = event.srcElement.files[0];
    // 	this.image = image;
    //   let reader = new FileReader();
    //   reader.onload = () => {
    //     this.imgReader = reader.result;
    //   }
    //   if(event.srcElement.files[0] && event.srcElement.files[0].type == 'image/jpeg') {
    //     reader.readAsDataURL(this.image);
    //   } else {
    //     this.flashMessage.show('This file will not be uploaded! Please select an image file!', {cssClass: 'alert-danger', timeout: this.messageTimeout});
    //     this.image = null;
    //     this.imgReader = null;
    //     return false;
    //   }
    // }
    //
    // removeCurrentImage() {
    //   this.oldImage = 'defaultImage.png';
    //   this.image = 'defaultImage.png';
    // }
    EditJourneyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            if (params['id']) {
                _this.journeyId = params['id'];
            }
            else {
                _this.router.navigate(['/journeys']);
            }
        });
        this.journeysService.getJourney(this.journeyId).subscribe(function (journey) {
            if (journey.success) {
                _this.journey = journey.journey;
                // this.oldImage = journey.journey.imageUrl;
            }
            else {
                _this.router.navigate(['/journeys']);
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    EditJourneyComponent.prototype.onFocusLocationInput = function () {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement);
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.location_obj = {
                        address: place["formatted_address"],
                        place: place.name,
                        lat: _this.latitude,
                        lng: _this.longitude
                    };
                    _this.journey.location = _this.location_obj;
                });
            });
        }).catch(function (err) {
            console.log(err);
        });
    };
    EditJourneyComponent.prototype.onEditJourneySubmit = function () {
        var _this = this;
        if (this.journey.location.address === '') {
            this.journey.location.address = this.journey.location.place;
        }
        else if (this.journey.location.address != '' && typeof (this.location_obj) === 'undefined') {
            this.journey.location.address = this.journey.location.place;
        }
        var updatedJourney = {
            id: this.journey._id,
            title: this.journey.title,
            location: this.journey.location,
            duration: this.journey.duration,
            type: this.journey.type,
            rating: this.journey.rating,
            imageUrl: this.journey.imageUrl,
        };
        // if(this.image) {
        //   if(this.image === 'defaultImage.png') {
        //     this.journeysService.deleteImage(this.journey.imageUrl).subscribe(data => {
        //       if(data.success) {
        //         // console.log(data.message);
        //       } else {
        //         // console.log(data.message);
        //       }
        //     });
        //     updatedJourney.imageUrl = 'defaultImage.png';
        //     this.journeysService.editJourney(updatedJourney).subscribe(data => {
        //       if(data.success) {
        //         this.flashMessage.show(data.message, {cssClass: 'alert-success', timeout: this.messageTimeout});
        //         this.router.navigate(['/journeys/' + this.journey._id]);
        //       } else {
        //         for(let i=0; i<data.message.length; i++) {
        //           this.flashMessage.show(data.message[i].msg, {cssClass: 'alert-danger', timeout: this.messageTimeout});
        //         }
        //         return false;
        //       }
        //     });
        //   }
        // 	this.journeysService.uploadImage(this.image).subscribe(res => {
        // 		if(res.success) {
        //       updatedJourney.imageUrl = res.file;
        //       if (typeof(this.journey.imageUrl) != 'undefined') {
        //         if(this.journey.imageUrl != 'defaultImage.png') {
        //           this.journeysService.deleteImage(this.journey.imageUrl).subscribe(data => {
        //             if(data.success) {
        //               // console.log(data.message);
        //             } else {
        //               // console.log(data.message);
        //             }
        //           });
        //         }
        //       }
        //
        //       this.journeysService.editJourney(updatedJourney).subscribe(data => {
        //         if(data.success) {
        //           this.flashMessage.show(data.message, {cssClass: 'alert-success', timeout: this.messageTimeout});
        //           this.router.navigate(['/journeys/' + this.journey._id]);
        //         } else {
        //           for(let i=0; i<data.message.length; i++) {
        //             this.flashMessage.show(data.message[i].msg, {cssClass: 'alert-danger', timeout: this.messageTimeout});
        //           }
        //           return false;
        //         }
        //       });
        // 		} else {
        // 	  	if(!this.validateService.validateImage(res)) {
        // 	  		this.flashMessage.show('File size too big!', {cssClass: 'alert-danger', timeout: this.messageTimeout});
        // 	  		return false;
        // 	  	}
        // 		}
        // 	});
        // } else {
        this.journeysService.editJourney(updatedJourney).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.message, { cssClass: 'alert-success', timeout: _this.messageTimeout });
                _this.router.navigate(['/journeys/' + _this.journey._id]);
            }
            else {
                for (var i = 0; i < data.message.length; i++) {
                    _this.flashMessage.show(data.message[i].message, { cssClass: 'alert-danger', timeout: _this.messageTimeout });
                }
                return false;
            }
        });
        // }
    };
    return EditJourneyComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("editSearch"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], EditJourneyComponent.prototype, "searchElementRef", void 0);
EditJourneyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-journey',
        template: __webpack_require__("../../../../../src/app/components/journeys/edit-journey/edit-journey.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/journeys/edit-journey/edit-journey.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_journeys_service__["a" /* JourneysService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_journeys_service__["a" /* JourneysService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_validate_service__["a" /* ValidateService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* MapsAPILoader */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_daterangepicker__["DaterangepickerConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_daterangepicker__["DaterangepickerConfig"]) === "function" && _j || Object])
], EditJourneyComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=edit-journey.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/journeys/journey-image/journey-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".choose_file{\r\n}\r\n.choose_file input[type=\"file\"]{\r\n    -webkit-appearance:none;\r\n    position:absolute;\r\n    top:0; left:0;\r\n    opacity:0;\r\n}\r\n\r\n.inputfile {\r\n\twidth: 0.1px;\r\n\theight: 0.1px;\r\n\topacity: 0;\r\n\toverflow: hidden;\r\n\tposition: absolute;\r\n\tz-index: -1;\r\n}\r\n.inputfile + label {\r\n    font-weight: 700;\r\n    display: inline-block;\r\n}\r\n.inputfile + label {\r\n\tcursor: pointer; /* \"hand\" cursor */\r\n}\r\n.inputfile:focus + label {\r\n\toutline: 1px dotted #000;\r\n\toutline: -webkit-focus-ring-color auto 5px;\r\n}\r\n.inputfile + label * {\r\n\tpointer-events: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/journeys/journey-image/journey-image.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"journey\" class=\"row\">\r\n\t<div class=\"col-md-6 col-md-offset-3\">\r\n\t\t<h2 class=\"page-header\"><span *ngIf=\"newJourney\">Add</span><span *ngIf=\"!newJourney\">Change</span> Image for \"{{journey.title}}\"</h2>\r\n\t\t<form (submit)=\"onAddJourneyImageSubmit()\" (keydown.enter)=\"$event.preventDefault()\" class=\"form-wrap\">\r\n      <input style=\"display: none;\" [(ngModel)]=\"location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" #search type=\"text\" name=\"location\" class=\"form-control\" id=\"location\">\r\n      <div class=\"form-group\">\r\n          <label for=\"imageFile\">Image</label>\r\n          <br>\r\n          <input type=\"file\" [(ngModel)]=\"imageFile\" name=\"imageFile\" id=\"imageFile\" class=\"inputfile\" (change)=\"onChangeImageFile($event)\"/>\r\n          <label for=\"imageFile\" class=\"btn btn-warning\"><i class=\"fa fa-image\"></i> <strong>Choose image</strong></label>\r\n          <button *ngIf=\"!imgReader && oldImage && oldImage != 'defaultImage.png'\" type=\"button\" class=\"btn btn-danger\" (click)=\"removeCurrentImage()\">Remove image</button>\r\n          <button *ngIf=\"this.photosUrls.length != 0\" type=\"button\" class=\"btn btn-success pull-right\" (click)=\"imageFromLocation()\">Random image from this location</button>\r\n      </div>\r\n      <div [hidden]=\"!imgReader\">\r\n          <div *ngIf=\"imgReader\" class=\"img-wrapper\">\r\n            <img class=\"img-responsive\" src=\"{{imgReader}}\">\r\n          </div>\r\n      </div>\r\n      <div [hidden]=\"!oldImage\">\r\n          <div *ngIf=\"!imgReader\" class=\"img-wrapper\">\r\n            <img *ngIf=\"oldImage == 'defaultImage.png'\" class=\"img-responsive\" src=\"uploads/{{oldImage}}\">\r\n            <img *ngIf=\"oldImage != 'defaultImage.png' && oldImage.substr(0, 4) != 'http'\" class=\"img-responsive\" src=\"api/images/{{oldImage}}\">\r\n            <img *ngIf=\"oldImage.substr(0, 4) == 'http'\" class=\"img-responsive\" src=\"{{oldImage}}\">\r\n          </div>\r\n      </div>\r\n\t\t\t<a [routerLink]=\"['/journeys/'+journeyId]\" class=\"btn btn-link pull-right\"><span *ngIf=\"newJourney\">Skip</span><span *ngIf=\"!newJourney\">Go back</span></a> <input type=\"submit\" value=\"Add Image\" class=\"btn btn-primary pull-right\">\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/journeys/journey-image/journey-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JourneyImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_journeys_service__ = __webpack_require__("../../../../../src/app/services/journeys.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JourneyImageComponent = (function () {
    function JourneyImageComponent(router, activatedRoute, journeysService, validateService, flashMessage, mapsAPILoader) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.journeysService = journeysService;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.mapsAPILoader = mapsAPILoader;
        this.photosUrls = [];
        this.messageTimeout = 3000;
    }
    JourneyImageComponent.prototype.onChangeImageFile = function (event) {
        var _this = this;
        var image = event.srcElement.files[0];
        this.image = image;
        var reader = new FileReader();
        reader.onload = function () {
            _this.imgReader = reader.result;
        };
        if (event.srcElement.files[0] && event.srcElement.files[0].type == 'image/jpeg') {
            reader.readAsDataURL(this.image);
        }
        else {
            this.flashMessage.show('This file will not be uploaded! Please select an image file!', { cssClass: 'alert-danger', timeout: this.messageTimeout });
            this.image = null;
            this.imgReader = null;
            return false;
        }
    };
    JourneyImageComponent.prototype.removeCurrentImage = function () {
        this.oldImage = 'defaultImage.png';
        this.image = 'defaultImage.png';
    };
    JourneyImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            if (params['id']) {
                _this.journeyId = params['id'];
            }
            else {
                _this.router.navigate(['/journeys']);
            }
        });
        this.journeysService.getJourney(this.journeyId).subscribe(function (res) {
            if (res.success) {
                _this.journey = res.journey;
                _this.oldImage = res.journey.imageUrl;
                _this.previousUrl = localStorage.getItem('prev');
                if (_this.previousUrl != '/add-journey') {
                    _this.newJourney = false;
                }
                else {
                    _this.newJourney = true;
                }
                _this.mapsAPILoader.load().then(function () {
                    var geocoder = new google.maps.Geocoder();
                    geocoder.geocode({ 'address': _this.journey.location.address }, function (res, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            var placesService = new google.maps.places.PlacesService(_this.searchElementRef.nativeElement);
                            placesService.getDetails({
                                placeId: res[0].place_id
                            }, function (placeResult, status) {
                                var photos = placeResult.photos;
                                if (photos) {
                                    photos.forEach(function (photo) {
                                        _this.photosUrls.push(photo.getUrl({
                                            maxWidth: 1200,
                                            maxHeight: undefined
                                        }));
                                    });
                                }
                            });
                        }
                    });
                });
            }
            if (!res.success) {
                _this.router.navigate(['/journeys']);
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    JourneyImageComponent.prototype.imageFromLocation = function () {
        this.image = null;
        var randomPhoto = this.photosUrls[Math.floor(Math.random() * this.photosUrls.length)];
        this.imgReader = randomPhoto;
        if (this.photosUrls.length == 0) {
            this.flashMessage.show('Sorry! There are no images found for this location.', { cssClass: 'alert-danger', timeout: this.messageTimeout });
            this.image = 'defaultImage.png';
            return false;
        }
    };
    JourneyImageComponent.prototype.onAddJourneyImageSubmit = function () {
        var _this = this;
        var journeyWithImg = {
            id: this.journey._id,
            title: this.journey.title,
            location: this.journey.location,
            duration: this.journey.duration,
            type: this.journey.type,
            rating: this.journey.rating,
            imageUrl: this.journey.imageUrl,
        };
        if (this.image) {
            if (this.image === 'defaultImage.png') {
                if (this.journey.imageUrl != 'defaultImage.png' && this.journey.imageUrl.substr(0, 4) != 'http') {
                    this.journeysService.deleteImage(this.journey.imageUrl).subscribe(function (data) {
                        if (data.success) {
                            // console.log(data.message);
                        }
                        else {
                            // console.log(data.message);
                        }
                    });
                }
                journeyWithImg.imageUrl = 'defaultImage.png';
                this.journeysService.editJourney(journeyWithImg).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessage.show(data.message, { cssClass: 'alert-success', timeout: _this.messageTimeout });
                        _this.router.navigate(['/journeys/' + _this.journey._id]);
                    }
                    else {
                        for (var i = 0; i < data.message.length; i++) {
                            _this.flashMessage.show(data.message[i].msg, { cssClass: 'alert-danger', timeout: _this.messageTimeout });
                        }
                        return false;
                    }
                });
            }
            this.journeysService.uploadImage(this.image).subscribe(function (res) {
                if (res.success) {
                    journeyWithImg.imageUrl = res.file;
                    if (typeof (_this.journey.imageUrl) != 'undefined') {
                        if (_this.journey.imageUrl != 'defaultImage.png') {
                            if (_this.journey.imageUrl.substr(0, 4) != 'http') {
                                _this.journeysService.deleteImage(_this.journey.imageUrl).subscribe(function (data) {
                                    if (data.success) {
                                        // console.log(data.message);
                                    }
                                    else {
                                        // console.log(data.message);
                                    }
                                });
                            }
                        }
                    }
                    _this.journeysService.editJourney(journeyWithImg).subscribe(function (data) {
                        if (data.success) {
                            _this.flashMessage.show(data.message, { cssClass: 'alert-success', timeout: _this.messageTimeout });
                            _this.router.navigate(['/journeys/' + _this.journey._id]);
                        }
                        else {
                            for (var i = 0; i < data.message.length; i++) {
                                _this.flashMessage.show(data.message[i].msg, { cssClass: 'alert-danger', timeout: _this.messageTimeout });
                            }
                            return false;
                        }
                    });
                }
                else {
                    if (!_this.validateService.validateImage(res)) {
                        _this.flashMessage.show('File size too big!', { cssClass: 'alert-danger', timeout: _this.messageTimeout });
                        return false;
                    }
                }
            });
        }
        else {
            if (this.imgReader.substr(0, 4) == 'http') {
                journeyWithImg.imageUrl = this.imgReader;
                if (this.journey.imageUrl != 'defaultImage.png' && this.journey.imageUrl.substr(0, 4) != 'http') {
                    this.journeysService.deleteImage(this.journey.imageUrl).subscribe(function (data) {
                        if (data.success) {
                            // console.log(data.message);
                        }
                        else {
                            // console.log(data.message);
                        }
                    });
                }
            }
            this.journeysService.editJourney(journeyWithImg).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show(data.message, { cssClass: 'alert-success', timeout: _this.messageTimeout });
                    _this.router.navigate(['/journeys/' + _this.journey._id]);
                }
                else {
                    for (var i = 0; i < data.message.length; i++) {
                        _this.flashMessage.show(data.message[i].message, { cssClass: 'alert-danger', timeout: _this.messageTimeout });
                    }
                    return false;
                }
            });
        }
    };
    return JourneyImageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], JourneyImageComponent.prototype, "searchElementRef", void 0);
JourneyImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-journey-image',
        template: __webpack_require__("../../../../../src/app/components/journeys/journey-image/journey-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/journeys/journey-image/journey-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_journeys_service__["a" /* JourneysService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_journeys_service__["a" /* JourneysService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__agm_core__["b" /* MapsAPILoader */]) === "function" && _g || Object])
], JourneyImageComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=journey-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/journeys/journey/journey.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".info .star-rating-list {\r\n  font-size: 2em;\r\n}\r\n.panel-heading .panel-title .pull-right a span {\r\n  opacity: 0;\r\n  transition: opacity 0.2s ease-in-out;\r\n}\r\n.panel-heading .panel-title .pull-right a:hover span {\r\n  opacity: 1;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/journeys/journey/journey.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"journey\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12 col-sm-12\">\r\n\t\t\t\t<h2 class=\"page-header\">{{journey.title}}</h2>\r\n\t\t\t\t<blockquote>{{journey.location.place}}</blockquote>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12 col-sm-12 info\">\r\n\t\t\t<div class=\"panel panel-primary\">\r\n\t        <div class=\"panel-heading\">\r\n\t          <h3 class=\"panel-title\">Info</h3>\r\n\t        </div>\r\n\t        <ul class=\"list-group panel-body\">\r\n\t          <li class=\"list-group-item\"><strong><i class=\"fa fa-map-marker\"></i></strong> {{journey.location.address}}</li>\r\n\t          <li class=\"list-group-item\"><strong>\r\n\t            <i class=\"fa fa-calendar\"></i></strong>\r\n\t            {{journey.duration.dateLabel}} - ({{journey.duration.days}} <span *ngIf=\"journey.duration.days !== 1\">days</span><span *ngIf=\"journey.duration.days === 1\">day</span>)\r\n\t          </li>\r\n\t          <li class=\"list-group-item\"><strong>Type:</strong> {{journey.type}}</li>\r\n\t          <li class=\"list-group-item\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"journey.rating === 'Not rated'\">\r\n\t\t\t\t\t\t\t\t<ul class=\"star-rating-list\">\r\n\t\t              <li><i class=\"fa fa-star-o\"></i></li>\r\n\t\t\t            <li><i class=\"fa fa-star-o\"></i></li>\r\n\t\t\t\t          <li><i class=\"fa fa-star-o\"></i></li>\r\n\t\t\t\t\t        <li><i class=\"fa fa-star-o\"></i></li>\r\n\t\t\t\t\t\t      <li><i class=\"fa fa-star-o\"></i></li>\r\n\t\t            </ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t            <ul class=\"star-rating-list\">\r\n\t              <li *ngFor=\"let number of starArr(journey.rating)\">\r\n\t                <i class=\"fa fa-star\"></i>\r\n\t              </li>\r\n\t              <li *ngFor=\"let ostars of starArr(maxRating - journey.rating)\">\r\n\t                <i class=\"fa fa-star-o\"></i>\r\n\t              </li>\r\n\t            </ul>\r\n\t          </li>\r\n\t\t\t\t\t\t<li class=\"list-group-item\">\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['/edit-journey/'+journey._id]\" style=\"text-decoration: none;\"><i class=\"fa fa-pencil\"></i> Edit journey</a><br>\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['/edit-journey/'+journey._id+'/image']\" style=\"text-decoration: none;\" class=\"text-primary\"><i class=\"fa fa-image\"></i> Edit journey image</a>\r\n\t\t\t\t\t\t\t<button (click)=\"showConfirm()\" class=\"btn btn-danger pull-right\" type=\"submit\"><i class=\"fa fa-trash\"></i></button>\r\n\t\t\t\t\t\t</li>\r\n\t        </ul>\r\n\t      </div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-6 col-sm-6\">\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<img *ngIf=\"journey.imageUrl === 'defaultImage.png'\" src=\"uploads/{{journey.imageUrl}}\" class=\"img-responsive\">\r\n\t\t\t  <img *ngIf=\"journey.imageUrl != 'defaultImage.png' && journey.imageUrl.substr(0, 4) != 'http'\" src=\"api/images/{{journey.imageUrl}}\" class=\"img-responsive\">\r\n\t\t\t\t<img *ngIf=\"journey.imageUrl.substr(0, 4) == 'http'\" src=\"{{journey.imageUrl}}\" class=\"img-responsive\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-6 col-sm-6\">\r\n\t\t\t<div class=\"panel panel-primary\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title\">Map</h3>\r\n\t\t\t\t</div>\r\n\t\t\t\t<agm-map [latitude]=\"journey.location.lat\" [longitude]=\"journey.location.lng\" class=\"panel-body\" style=\"padding: 0;\">\r\n\t\t\t\t  <agm-marker [latitude]=\"journey.location.lat\" [longitude]=\"journey.location.lng\"></agm-marker>\r\n\t\t\t\t</agm-map>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<data-loader *ngIf=\"!journey\"></data-loader>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/journeys/journey/journey.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JourneyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_journeys_service__ = __webpack_require__("../../../../../src/app/services/journeys.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_confirm_modal_component__ = __webpack_require__("../../../../../src/app/components/modal/confirm-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_modal__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JourneyComponent = (function () {
    function JourneyComponent(router, activatedRoute, journeysService, flashMessage, dialogService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.journeysService = journeysService;
        this.flashMessage = flashMessage;
        this.dialogService = dialogService;
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.messageTimeout = 3000;
    }
    JourneyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.maxRating = 5;
        this.activatedRoute.params.subscribe(function (params) {
            if (params['id']) {
                _this.journeyId = params['id'];
            }
            else {
                _this.router.navigate(['/journeys']);
            }
        });
        this.journeysService.getJourney(this.journeyId).subscribe(function (res) {
            if (res.success)
                _this.journey = res.journey;
            if (!res.success) {
                _this.router.navigate(['/journeys']);
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    JourneyComponent.prototype.starArr = function (num) {
        var stars = new Array;
        for (var i = 0; i < num; i++) {
            stars.push(i);
        }
        return stars;
    };
    // deleteJourney() {
    //   this.journeysService.deleteJourney(this.journeyId).subscribe(res => {
    //     if(res.success) {
    //       this.journeysService.deleteImage(this.journey.imageUrl).subscribe(res => {
    //         if(res.success) {
    //           this.flashMessage.show(res.message, {cssClass: 'alert-success', timeout: 5000});
    //           this.router.navigate(['/journeys']);
    //         } else {
    //           this.flashMessage.show(res.message, {cssClass: 'alert-danger', timeout: 5000});
    //         }
    //       });
    //     } else {
    //       this.flashMessage.show(res.message, {cssClass: 'alert-danger', timeout: 5000});
    //     }
    //   });
    // }
    JourneyComponent.prototype.showConfirm = function () {
        var _this = this;
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_4__modal_confirm_modal_component__["a" /* ConfirmComponent */], {
            title: 'Delete "' + this.journey.title + '"',
            message: 'Warning! You are about to delete this journey! Click DELETE if you want to delete it.'
        })
            .subscribe(function (isConfirmed) {
            //We get dialog result
            if (isConfirmed) {
                _this.journeysService.deleteJourney(_this.journeyId).subscribe(function (res) {
                    if (res.success) {
                        if (typeof (_this.journey.imageUrl) != 'undefined') {
                            if (_this.journey.imageUrl != 'defaultImage.png' && _this.journey.imageUrl.substr(0, 4) != 'http') {
                                _this.journeysService.deleteImage(_this.journey.imageUrl).subscribe(function (res) {
                                    if (res.success) {
                                        _this.flashMessage.show(res.message, { cssClass: 'alert-success', timeout: _this.messageTimeout });
                                        _this.router.navigate(['/journeys']);
                                    }
                                    else {
                                        _this.flashMessage.show(res.message, { cssClass: 'alert-danger', timeout: _this.messageTimeout });
                                    }
                                });
                            }
                        }
                        _this.flashMessage.show(res.message, { cssClass: 'alert-success', timeout: _this.messageTimeout });
                        _this.router.navigate(['/journeys']);
                    }
                    else {
                        _this.flashMessage.show(res.message, { cssClass: 'alert-danger', timeout: _this.messageTimeout });
                    }
                });
            }
            else {
                return false;
            }
        });
        setTimeout(function () {
            disposable.unsubscribe();
        }, 10000);
    };
    return JourneyComponent;
}());
JourneyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-journey',
        template: __webpack_require__("../../../../../src/app/components/journeys/journey/journey.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/journeys/journey/journey.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_journeys_service__["a" /* JourneysService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_journeys_service__["a" /* JourneysService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_modal__["DialogService"]) === "function" && _e || Object])
], JourneyComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=journey.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/journeys/journeys/journeys.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.panel-heading {\r\n\t height: 140px;\r\n\t background-repeat: no-repeat;\r\n\t background-size: cover;\r\n\t background-position: center;\r\n}\r\n.label.Mountain {\r\n\tbackground-color: #4caf50;\r\n}\r\n.label.Monuments {\r\n\tbackground-color: #e51c23;\r\n}\r\n.label.Sea {\r\n\tbackground-color: #0c84e4;\r\n}\r\n.label.Spa {\r\n\tbackground-color: #ff851b;\r\n}\r\n.progress-bar-none {\r\n\tbackground-color: #999999;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/journeys/journeys/journeys.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"journeys\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12 col-sm-12\">\r\n\t\t\t\t<h2 class=\"page-header\">My Journeys</h2>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-10 col-sm-10\">\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" autocomplete=\"off\" placeholder=\"Search journeys...\" [(ngModel)]=\"search\" name=\"search\" (keyup)=\"searchJourney()\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-2 col-sm-2\">\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<div class=\"btn-group btn-group-justified\">\r\n\t\t\t\t\t  <a (click)=\"sortBy('rating')\" class=\"btn star btn-warning\" title=\"Sort by rating\"><i class=\"fa fa-star\"></i></a>\r\n\t\t\t\t\t  <a (click)=\"sortBy('type')\" class=\"btn btn-warning\" title=\"Sort by type\">Type</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-8 col-md-offset-2\">\r\n\t\t\t<div class=\"progress\" style=\"height: 10px; box-shadow: none;border: none;\">\r\n\t\t\t\t<div class=\"progress-bar progress-bar-success\" title=\"Mountain journeys\" [style.width]=\"typePercent.mountain\"></div>\r\n\t\t\t\t<div class=\"progress-bar progress-bar-danger\" title=\"Monuments journeys\" [style.width]=\"typePercent.monuments\"></div>\r\n\t\t\t\t<div class=\"progress-bar progress-bar-primary\" title=\"Sea journeys\" [style.width]=\"typePercent.sea\"></div>\r\n\t\t\t\t<div class=\"progress-bar progress-bar-warning\" title=\"Spa journeys\" [style.width]=\"typePercent.spa\"></div>\r\n\t\t\t\t<div class=\"progress-bar progress-bar-none\" title=\"No type journeys\" [style.width]=\"typePercent.none\"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<hr>\r\n\t<div class=\"row\">\r\n\t  <div class=\"col-sm-6 col-md-4\" *ngFor=\"let journey of journeys | paginate: { itemsPerPage: itemsPerPage, currentPage: p } | orderBy:order:option date \">\r\n\t  \t<div class=\"panel\">\r\n\t\t\t<a [routerLink]=\"[journey._id]\">\r\n\t\t\t\t<div *ngIf=\"journey.imageUrl === 'defaultImage.png'\" class=\"panel-heading\" [style.background-image]=\"'url(uploads/' + journey.imageUrl + ')'\">\r\n\t\t\t    <!--<img src=\"{{journey.imageUrl}}\"/>-->\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"journey.imageUrl != 'defaultImage.png' && journey.imageUrl.substr(0, 4) != 'http'\" class=\"panel-heading\" [style.background-image]=\"'url(api/images/' + journey.imageUrl + ')'\">\r\n\t\t\t    <!--<img src=\"{{journey.imageUrl}}\"/>-->\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"journey.imageUrl.substr(0, 4) == 'http'\" class=\"panel-heading\" [style.background-image]=\"'url(' + journey.imageUrl + ')'\">\r\n\t\t\t    <!--<img src=\"{{journey.imageUrl}}\"/>-->\r\n\t\t\t\t</div>\r\n\t\t\t</a>\r\n\t\t\t<div class=\"panel-body custom-title\">\r\n\t\t\t\t<h3 class=\"panel-title\">{{journey.title}}</h3>\r\n\t\t\t\t<div *ngIf=\"journey.rating === 'Not rated'\">\r\n\t\t\t\t\t<ul class=\"star-rating-list\">\r\n\t\t\t\t\t\t<li><i class=\"fa fa-star-o\"></i></li>\r\n\t\t\t\t\t\t<li><i class=\"fa fa-star-o\"></i></li>\r\n\t\t\t\t\t\t<li><i class=\"fa fa-star-o\"></i></li>\r\n\t\t\t\t\t\t<li><i class=\"fa fa-star-o\"></i></li>\r\n\t\t\t\t\t\t<li><i class=\"fa fa-star-o\"></i></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<ul class=\"star-rating-list\">\r\n\t\t\t\t\t\t<li *ngFor=\"let number of starArr(journey.rating)\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li *ngFor=\"let ostars of starArr(maxRating - journey.rating)\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-star-o\"></i>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<p><span className=\"label label-default {{journey.type}}\">{{journey.type}}</span></p>\r\n\t\t\t\t<p>{{journey.location.city}}</p>\r\n\t      <p>{{journey.duration.dateLabel}}</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-footer\">\r\n\t\t\t\t<a [routerLink]=\"[journey._id]\" class=\"btn btn-primary btn-block\" role=\"button\">More info</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t    <!-- <div class=\"thumbnail\">\r\n\t      <img src=\"{{journey.imageUrl}}\">\r\n\t      <div class=\"caption\">\r\n\t        <h3>{{journey.title}}</h3>\r\n\t        <p>{{journey.datetime}}</p>\r\n\t        <p><a [routerLink]=\"[journey._id]\" class=\"btn btn-default btn-block\" role=\"button\">Read more</a>\r\n\t      </div>\r\n\t    </div> -->\r\n\t  </div>\r\n\t\t<div class=\"col-xs-12\" *ngIf=\"journeys.length === 0\">\r\n\t\t\t<h4 class=\"text-center\">No journeys found.</h4>\r\n\t\t\t<p class=\"text-center\"><a [routerLink]=\"['/add-journey']\" class=\"btn btn-warning\"><i class=\"fa fa-plus\" style=\"font-size: 14px!important;\"></i> Add Journey</a></p>\r\n\t\t</div>\r\n\t</div>\r\n\t<div *ngIf=\"journeys.length > itemsPerPage\" class=\"text-center\">\r\n\t\t<pagination-controls (pageChange)=\"p = $event\" class=\"my-pagination\"></pagination-controls>\r\n\t</div>\r\n</div>\r\n<data-loader *ngIf=\"!journeys\"></data-loader>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/journeys/journeys/journeys.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JourneysComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_journeys_service__ = __webpack_require__("../../../../../src/app/services/journeys.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JourneysComponent = (function () {
    function JourneysComponent(journeysService) {
        this.journeysService = journeysService;
        this.order = "date";
        this.option = true;
        this.nCnt = 0;
        this.itemsPerPage = 6;
    }
    JourneysComponent.prototype.journeysPercent = function () {
        var totalJourneys = this.journeys.length;
        var typeSea = 0, typeSpa = 0, typeMountain = 0, typeMonuments = 0, typeNone = 0;
        for (var i = 0; i < totalJourneys; i++) {
            if (this.journeys[i].type === "Sea") {
                typeSea++;
            }
            else if (this.journeys[i].type === "Spa") {
                typeSpa++;
            }
            else if (this.journeys[i].type === "Mountain") {
                typeMountain++;
            }
            else if (this.journeys[i].type === "Monuments") {
                typeMonuments++;
            }
            else {
                typeNone++;
            }
        }
        if (totalJourneys === 0) {
            this.typePercent = {
                none: "0%",
                sea: "0%",
                spa: "0%",
                mountain: "0%",
                monuments: "0%"
            };
        }
        else {
            this.typePercent = {
                none: Math.floor((typeNone / totalJourneys) * 100) + "%",
                sea: Math.floor((typeSea / totalJourneys) * 100) + "%",
                spa: Math.floor((typeSpa / totalJourneys) * 100) + "%",
                mountain: Math.floor((typeMountain / totalJourneys) * 100) + "%",
                monuments: Math.floor((typeMonuments / totalJourneys) * 100) + "%"
            };
        }
    };
    JourneysComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.maxRating = 5;
        this.journeysService.getJourneys().subscribe(function (journeys) {
            _this.journeys = journeys;
            _this.journeysPercent();
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    JourneysComponent.prototype.sortBy = function (name) {
        this.order = name;
        this.nCnt = this.nCnt + 1;
        if (this.nCnt % 2) {
            this.option = true;
        }
        else {
            this.option = false;
        }
    };
    JourneysComponent.prototype.searchJourney = function () {
        var _this = this;
        if (this.search != '') {
            this.journeysService.getJourneysByQuery(this.search.toLowerCase()).subscribe(function (journeys) {
                _this.journeys = journeys;
                _this.journeysPercent();
            }, function (err) {
                console.log(err);
                return false;
            });
        }
        else {
            this.journeysService.getJourneys().subscribe(function (journeys) {
                _this.journeys = journeys;
                _this.journeysPercent();
            }, function (err) {
                console.log(err);
                return false;
            });
        }
    };
    JourneysComponent.prototype.starArr = function (num) {
        var stars = new Array;
        for (var i = 0; i < num; i++) {
            stars.push(i);
        }
        return stars;
    };
    return JourneysComponent;
}());
JourneysComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-journeys',
        template: __webpack_require__("../../../../../src/app/components/journeys/journeys/journeys.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/journeys/journeys/journeys.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_journeys_service__["a" /* JourneysService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_journeys_service__["a" /* JourneysService */]) === "function" && _a || Object])
], JourneysComponent);

var _a;
//# sourceMappingURL=journeys.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/loader/loader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img-loader {\r\n  display: block;\r\n  min-width: 20rem;\r\n  min-height: 20.7rem;\r\n}\r\n.loader-wrapper {\r\n  margin: 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin-right: -50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  z-index: 99999;\r\n}\r\n.loader {\r\n  position: relative;\r\n  margin: 0 auto;\r\n  width: 6em;\r\n}\r\n.loader:before {\r\n  content: '';\r\n  display: block;\r\n  padding-top: 100%;\r\n}\r\n.circular {\r\n  -webkit-animation: rotate 2s linear infinite;\r\n          animation: rotate 2s linear infinite;\r\n  height: 100%;\r\n  -webkit-transform-origin: center center;\r\n          transform-origin: center center;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n}\r\n.path {\r\n  stroke-dasharray: 1, 200;\r\n  stroke-dashoffset: 0;\r\n  -webkit-animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;\r\n          animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;\r\n  stroke-linecap: round;\r\n}\r\n\r\n@-webkit-keyframes rotate {\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes rotate {\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n@-webkit-keyframes dash {\r\n  0% {\r\n    stroke-dasharray: 1, 200;\r\n    stroke-dashoffset: 0;\r\n  }\r\n  50% {\r\n    stroke-dasharray: 89, 200;\r\n    stroke-dashoffset: -35px;\r\n  }\r\n  100% {\r\n    stroke-dasharray: 89, 200;\r\n    stroke-dashoffset: -124px;\r\n  }\r\n}\r\n@keyframes dash {\r\n  0% {\r\n    stroke-dasharray: 1, 200;\r\n    stroke-dashoffset: 0;\r\n  }\r\n  50% {\r\n    stroke-dasharray: 89, 200;\r\n    stroke-dashoffset: -35px;\r\n  }\r\n  100% {\r\n    stroke-dasharray: 89, 200;\r\n    stroke-dashoffset: -124px;\r\n  }\r\n}\r\n@-webkit-keyframes color {\r\n  100%,\r\n  0% {\r\n    stroke: #d62d20;\r\n  }\r\n  40% {\r\n    stroke: #0057e7;\r\n  }\r\n  66% {\r\n    stroke: #008744;\r\n  }\r\n  80%,\r\n  90% {\r\n    stroke: #ffa700;\r\n  }\r\n}\r\n@keyframes color {\r\n  100%,\r\n  0% {\r\n    stroke: #d62d20;\r\n  }\r\n  40% {\r\n    stroke: #0057e7;\r\n  }\r\n  66% {\r\n    stroke: #008744;\r\n  }\r\n  80%,\r\n  90% {\r\n    stroke: #ffa700;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"img-loader\">\r\n  <div class=\"loader-wrapper\">\r\n  <div class=\"loader\">\r\n    <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n      <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\"/>\r\n    </svg>\r\n  </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    return LoaderComponent;
}());
LoaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'data-loader',
        template: __webpack_require__("../../../../../src/app/components/loader/loader.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/loader/loader.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoaderComponent);

//# sourceMappingURL=loader.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-6 col-md-offset-3\">\n\t\t<h2 class=\"page-header\">Login</h2>\n\t\t<form (submit)=\"onLoginSubmit()\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"username\">Username</label>\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"username\" name=\"username\" id=\"username\" class=\"form-control\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" id=\"password\" class=\"form-control\">\n\t\t\t</div>\n\t\t\t<input type=\"submit\" value=\"Login\" class=\"btn btn-success btn-block\">\n\t\t</form>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(router, flashMessage, validateService, authService) {
        this.router = router;
        this.flashMessage = flashMessage;
        this.validateService = validateService;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        if (!this.validateService.validateLogin(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('Welcome ' + data.user.name + '. You are now logged in', { cssClass: 'alert-success', timeout: 5000 });
                window.location.reload();
                _this.router.navigate(['/journeys']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['users/login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/modal/confirm-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmComponent = (function (_super) {
    __extends(ConfirmComponent, _super);
    function ConfirmComponent(dialogService) {
        return _super.call(this, dialogService) || this;
    }
    ConfirmComponent.prototype.confirm = function () {
        // we set dialog result as true on click on confirm button,
        // then we can get dialog result from caller code
        this.result = true;
        this.close();
    };
    return ConfirmComponent;
}(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogComponent"]));
ConfirmComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'confirm',
        template: "<div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                   <div class=\"modal-header\">\n                     <button type=\"button\" class=\"close\" (click)=\"close()\" >&times;</button>\n                     <h4 class=\"modal-title\">{{title || 'Confirm'}}</h4>\n                   </div>\n                   <div class=\"modal-body\">\n                     <p>{{message || 'Are you sure?'}}</p>\n                   </div>\n                   <div class=\"modal-footer\">\n                     <button type=\"button\" class=\"btn btn-danger\" (click)=\"confirm()\">DELETE</button>\n                     <button type=\"button\" class=\"btn btn-primary\" (click)=\"close()\" >No</button>\n                   </div>\n                 </div>\n              </div>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"]) === "function" && _a || Object])
], ConfirmComponent);

var _a;
//# sourceMappingURL=confirm-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus {\r\n    color: #000000;\r\n    text-decoration: none;\r\n    outline: 0;\r\n    background-color: transparent;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "    <nav class=\"navbar navbar-inverse\">\r\n      <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n          </button>\r\n          <a class=\"navbar-brand\" [routerLink]=\"['/']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">Journey Book</a>\r\n        </div>\r\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\r\n          <ul class=\"nav navbar-nav navbar-left\">\r\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/journeys']\" >Journeys</a></li>\r\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/journeys/map']\">Journeys Map</a></li>\r\n          </ul>\r\n          <ul class=\"nav navbar-nav navbar-right\">\r\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/users/register']\">Sign up</a></li>\r\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/users/login']\">Sign in</a></li>\r\n            <li *ngIf=\"authService.loggedIn()\" class=\"dropdown\">\r\n              <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\"><span *ngIf=\"user\">{{user.name}}</span><span *ngIf=\"!user\">Profile</span>\r\n              <span class=\"caret\"></span></a>\r\n              <ul class=\"dropdown-menu\">\r\n                <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/add-journey']\">Add Journey</a></li>\r\n                <li class=\"divider\"></li>\r\n                <li *ngIf=\"authService.loggedIn()\"><a href=\"#\" (click)=\"onLogoutClick(userData)\">Logout</a></li>\r\n              </ul>\r\n            </li>\r\n          </ul>\r\n        </div><!--/.nav-collapse -->\r\n      </div>\r\n    </nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(router, flashMessage, authService) {
        this.router = router;
        this.flashMessage = flashMessage;
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = localStorage.getItem('id_token');
        if (token) {
            this.authService.getProfile().subscribe(function (profile) {
                _this.user = profile.user;
            }, function (err) {
                console.log(err);
                return false;
            });
        }
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.user = null;
        this.authService.logout();
        this.flashMessage.show('You are logged out.', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-6 col-md-offset-3\">\n\t\t<h2 class=\"page-header\">Register</h2>\n\t\t<form (submit)=\"onRegisterSubmit()\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"name\">Name</label>\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"name\" name=\"name\"id=\"name\" class=\"form-control\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"email\">Email</label>\n\t\t\t\t<input type=\"email\" [(ngModel)]=\"email\" name=\"email\"id=\"email\" class=\"form-control\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"username\">Username</label>\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"username\" name=\"username\" id=\"username\" class=\"form-control\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" id=\"password\" class=\"form-control\">\n\t\t\t</div>\n\t\t\t<input type=\"submit\" value=\"Register\" class=\"btn btn-success btn-block\">\n\t\t</form>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please provide a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/users/login']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/users/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (path) {
        // var route = path.url[0].path;
        // if(this.authService.loggedIn() && route == 'profile' || this.authService.loggedIn() && route == 'dashboard' || this.authService.loggedIn() && route == 'chat') {
        // 	return true;
        // } else if(!this.authService.loggedIn() && route == 'login' || !this.authService.loggedIn() && route == 'register') {
        // 	return true;
        // } else if(this.authService.loggedIn() && route == 'login' || this.authService.loggedIn() && route == 'register') {
        // 	this.router.navigate(['/dashboard']);
        // 	return false;
        // } else {
        // 	this.router.navigate(['/login']);
        // 	return false;
        // }
        if (path.url.length > 1) {
            this.route = '';
            for (var i = 0; i < path.url.length; i++) {
                if ((path.url.length - i) > 1) {
                    this.route += path.url[i].path + '/';
                }
                if ((path.url.length - i) == 1) {
                    this.route += path.url[i].path;
                }
            }
        }
        else {
            this.route = path.url[0].path;
        }
        if (this.authService.loggedIn() && this.route == 'journeys' || this.authService.loggedIn() && this.route == 'journeys/map' || this.authService.loggedIn() && this.route == 'add-journey' || this.authService.loggedIn() && this.route == 'edit-journey/' + path.url[1].path || this.authService.loggedIn() && this.route == 'journeys/' + path.url[1].path || this.authService.loggedIn() && this.route == 'edit-journey/' + path.url[1].path + '/image') {
            return true;
        }
        else if (!this.authService.loggedIn() && this.route == 'users/login' || !this.authService.loggedIn() && this.route == 'users/register') {
            return true;
        }
        else if (this.authService.loggedIn() && this.route == 'users/login' || this.authService.loggedIn() && this.route == 'users/register') {
            this.router.navigate(['/journeys']);
            return false;
        }
        else {
            this.router.navigate(['']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('api/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/journeys.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JourneysService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JourneysService = (function () {
    function JourneysService(http) {
        this.http = http;
    }
    JourneysService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    JourneysService.prototype.getJourneys = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('api/journeys', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    JourneysService.prototype.getJourneysByQuery = function (query) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('api/journeys/search/' + query, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    JourneysService.prototype.addJourney = function (journey) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/journeys/add', journey, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    JourneysService.prototype.editJourney = function (journey) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/journeys/' + journey.id + '/edit', journey, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    JourneysService.prototype.uploadImage = function (image) {
        // let input = new FormData();
        // input.append('imageFile', image);
        // return this.http.post("images/upload", image);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Accept', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var formData = new FormData();
        formData.append('imageFile', image);
        return this.http.post('api/images/upload', formData, options)
            .map(function (res) { return res.json(); });
    };
    JourneysService.prototype.deleteImage = function (imageName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.delete('api/images/delete/' + imageName, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    JourneysService.prototype.getJourney = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('api/journeys/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    JourneysService.prototype.deleteJourney = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.delete('api/journeys/delete/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return JourneysService;
}());
JourneysService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], JourneysService);

var _a;
//# sourceMappingURL=journeys.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateImage = function (res) {
        if (res.message.code == "LIMIT_FILE_SIZE") {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.checkJourneyRequiredFields = function (data) {
        if (data.title === '' || data.title === undefined || data.location === '' || data.location === undefined || data.duration.days === '' || data.duration.days === undefined) {
            return false;
        }
        return true;
    };
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateLogin = function (user) {
        if (user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    return ValidateService;
}());
ValidateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map