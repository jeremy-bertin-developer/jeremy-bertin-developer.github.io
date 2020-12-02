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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _views_resume_page_resume_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/resume-page/resume-page.component */ "./src/app/views/resume-page/resume-page.component.ts");
/* harmony import */ var _views_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/main-page/main-page.component */ "./src/app/views/main-page/main-page.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const appRoutes = [
    { path: '', component: _views_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__["MainPageComponent"] },
    { path: 'resume', component: _views_resume_page_resume_page_component__WEBPACK_IMPORTED_MODULE_0__["ResumePageComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, {
                useHash: true,
                anchorScrolling: 'enabled'
            })
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, {
                        useHash: true,
                        anchorScrolling: 'enabled'
                    })
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'portfolio-cv-angular';
    }
    ngOnInit() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_views_main_page_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/views/main-page/main-header/main-header.component */ "./src/app/views/main-page/main-header/main-header.component.ts");
/* harmony import */ var _app_views_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/views/main-page/main-page.component */ "./src/app/views/main-page/main-page.component.ts");
/* harmony import */ var _app_views_main_page_main_projects_logo_languages_logo_languages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/views/main-page/main-projects/logo-languages/logo-languages.component */ "./src/app/views/main-page/main-projects/logo-languages/logo-languages.component.ts");
/* harmony import */ var _app_views_main_page_main_projects_main_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/views/main-page/main-projects/main-projects.component */ "./src/app/views/main-page/main-projects/main-projects.component.ts");
/* harmony import */ var _core_shared_line_separation_line_separation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/shared/line-separation/line-separation.component */ "./src/app/core/shared/line-separation/line-separation.component.ts");
/* harmony import */ var _core_shared_titles_titles_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/shared/titles/titles.component */ "./src/app/core/shared/titles/titles.component.ts");
/* harmony import */ var _views_resume_page_resume_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/resume-page/resume-page.component */ "./src/app/views/resume-page/resume-page.component.ts");
/* harmony import */ var _views_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/side-navbar/side-navbar.component */ "./src/app/views/side-navbar/side-navbar.component.ts");
/* harmony import */ var _views_resume_page_resume_profile_resume_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/resume-page/resume-profile/resume-profile.component */ "./src/app/views/resume-page/resume-profile/resume-profile.component.ts");
/* harmony import */ var _core_shared_resume_title_resume_title_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/shared/resume-title/resume-title.component */ "./src/app/core/shared/resume-title/resume-title.component.ts");
/* harmony import */ var _views_resume_page_resume_profesional_experiences_resume_profesional_experiences_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/resume-page/resume-profesional-experiences/resume-profesional-experiences.component */ "./src/app/views/resume-page/resume-profesional-experiences/resume-profesional-experiences.component.ts");
/* harmony import */ var _views_resume_page_resume_courses_trainings_resume_courses_trainings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/resume-page/resume-courses-trainings/resume-courses-trainings.component */ "./src/app/views/resume-page/resume-courses-trainings/resume-courses-trainings.component.ts");
/* harmony import */ var _views_resume_page_resume_programming_languages_resume_programming_languages_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/resume-page/resume-programming-languages/resume-programming-languages.component */ "./src/app/views/resume-page/resume-programming-languages/resume-programming-languages.component.ts");
/* harmony import */ var _views_resume_page_resume_studies_resume_studies_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/resume-page/resume-studies/resume-studies.component */ "./src/app/views/resume-page/resume-studies/resume-studies.component.ts");
/* harmony import */ var _views_resume_page_resume_languages_resume_languages_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/resume-page/resume-languages/resume-languages.component */ "./src/app/views/resume-page/resume-languages/resume-languages.component.ts");
/* harmony import */ var _views_resume_page_resume_hobbies_resume_hobbies_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/resume-page/resume-hobbies/resume-hobbies.component */ "./src/app/views/resume-page/resume-hobbies/resume-hobbies.component.ts");
/* harmony import */ var _views_resume_page_resume_testimonies_resume_testimonies_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/resume-page/resume-testimonies/resume-testimonies.component */ "./src/app/views/resume-page/resume-testimonies/resume-testimonies.component.ts");






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _app_views_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__["MainPageComponent"],
        _app_views_main_page_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_4__["MainHeaderComponent"],
        _core_shared_line_separation_line_separation_component__WEBPACK_IMPORTED_MODULE_8__["LineSeparationComponent"],
        _app_views_main_page_main_projects_main_projects_component__WEBPACK_IMPORTED_MODULE_7__["MainProjectsComponent"],
        _core_shared_titles_titles_component__WEBPACK_IMPORTED_MODULE_9__["TitlesComponent"],
        _app_views_main_page_main_projects_logo_languages_logo_languages_component__WEBPACK_IMPORTED_MODULE_6__["LogoLanguagesComponent"],
        _views_resume_page_resume_page_component__WEBPACK_IMPORTED_MODULE_10__["ResumePageComponent"],
        _views_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_11__["SideNavbarComponent"],
        _views_resume_page_resume_profile_resume_profile_component__WEBPACK_IMPORTED_MODULE_12__["ResumeProfileComponent"],
        _core_shared_resume_title_resume_title_component__WEBPACK_IMPORTED_MODULE_13__["ResumeTitleComponent"],
        _views_resume_page_resume_profesional_experiences_resume_profesional_experiences_component__WEBPACK_IMPORTED_MODULE_14__["ResumeProfesionalExperiencesComponent"],
        _views_resume_page_resume_courses_trainings_resume_courses_trainings_component__WEBPACK_IMPORTED_MODULE_15__["ResumeCoursesTrainingsComponent"],
        _views_resume_page_resume_programming_languages_resume_programming_languages_component__WEBPACK_IMPORTED_MODULE_16__["ResumeProgrammingLanguagesComponent"],
        _views_resume_page_resume_studies_resume_studies_component__WEBPACK_IMPORTED_MODULE_17__["ResumeStudiesComponent"],
        _views_resume_page_resume_languages_resume_languages_component__WEBPACK_IMPORTED_MODULE_18__["ResumeLanguagesComponent"],
        _views_resume_page_resume_hobbies_resume_hobbies_component__WEBPACK_IMPORTED_MODULE_19__["ResumeHobbiesComponent"],
        _views_resume_page_resume_testimonies_resume_testimonies_component__WEBPACK_IMPORTED_MODULE_20__["ResumeTestimoniesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _app_views_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__["MainPageComponent"],
                    _app_views_main_page_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_4__["MainHeaderComponent"],
                    _core_shared_line_separation_line_separation_component__WEBPACK_IMPORTED_MODULE_8__["LineSeparationComponent"],
                    _app_views_main_page_main_projects_main_projects_component__WEBPACK_IMPORTED_MODULE_7__["MainProjectsComponent"],
                    _core_shared_titles_titles_component__WEBPACK_IMPORTED_MODULE_9__["TitlesComponent"],
                    _app_views_main_page_main_projects_logo_languages_logo_languages_component__WEBPACK_IMPORTED_MODULE_6__["LogoLanguagesComponent"],
                    _views_resume_page_resume_page_component__WEBPACK_IMPORTED_MODULE_10__["ResumePageComponent"],
                    _views_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_11__["SideNavbarComponent"],
                    _views_resume_page_resume_profile_resume_profile_component__WEBPACK_IMPORTED_MODULE_12__["ResumeProfileComponent"],
                    _core_shared_resume_title_resume_title_component__WEBPACK_IMPORTED_MODULE_13__["ResumeTitleComponent"],
                    _views_resume_page_resume_profesional_experiences_resume_profesional_experiences_component__WEBPACK_IMPORTED_MODULE_14__["ResumeProfesionalExperiencesComponent"],
                    _views_resume_page_resume_courses_trainings_resume_courses_trainings_component__WEBPACK_IMPORTED_MODULE_15__["ResumeCoursesTrainingsComponent"],
                    _views_resume_page_resume_programming_languages_resume_programming_languages_component__WEBPACK_IMPORTED_MODULE_16__["ResumeProgrammingLanguagesComponent"],
                    _views_resume_page_resume_studies_resume_studies_component__WEBPACK_IMPORTED_MODULE_17__["ResumeStudiesComponent"],
                    _views_resume_page_resume_languages_resume_languages_component__WEBPACK_IMPORTED_MODULE_18__["ResumeLanguagesComponent"],
                    _views_resume_page_resume_hobbies_resume_hobbies_component__WEBPACK_IMPORTED_MODULE_19__["ResumeHobbiesComponent"],
                    _views_resume_page_resume_testimonies_resume_testimonies_component__WEBPACK_IMPORTED_MODULE_20__["ResumeTestimoniesComponent"]
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/shared/line-separation/line-separation.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/core/shared/line-separation/line-separation.component.ts ***!
  \**************************************************************************/
/*! exports provided: LineSeparationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineSeparationComponent", function() { return LineSeparationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LineSeparationComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
LineSeparationComponent.ɵfac = function LineSeparationComponent_Factory(t) { return new (t || LineSeparationComponent)(); };
LineSeparationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LineSeparationComponent, selectors: [["app-line-separation"]], decls: 3, vars: 0, consts: [[1, "row"], [1, "col"], [1, "line-separation"]], template: function LineSeparationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".line-separation[_ngcontent-%COMP%] {\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9zaGFyZWQvbGluZS1zZXBhcmF0aW9uL2xpbmUtc2VwYXJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLDBCQUEwQjtFQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2hhcmVkL2xpbmUtc2VwYXJhdGlvbi9saW5lLXNlcGFyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5lLXNlcGFyYXRpb24ge1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineSeparationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-line-separation',
                templateUrl: './line-separation.component.html',
                styleUrls: ['./line-separation.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/shared/resume-title/resume-title.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/shared/resume-title/resume-title.component.ts ***!
  \********************************************************************/
/*! exports provided: ResumeTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeTitleComponent", function() { return ResumeTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _line_separation_line_separation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../line-separation/line-separation.component */ "./src/app/core/shared/line-separation/line-separation.component.ts");



class ResumeTitleComponent {
    constructor() {
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get source() {
        return this._source;
    }
    set source(source) {
        this._source = source;
    }
    ngOnInit() { }
}
ResumeTitleComponent.ɵfac = function ResumeTitleComponent_Factory(t) { return new (t || ResumeTitleComponent)(); };
ResumeTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumeTitleComponent, selectors: [["app-resume-title"]], inputs: { title: "title", source: "source" }, decls: 6, vars: 2, consts: [[1, "py-3"], [1, "ml-3"], [3, "src"]], template: function ResumeTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-line-separation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-line-separation");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.source, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_line_separation_line_separation_component__WEBPACK_IMPORTED_MODULE_1__["LineSeparationComponent"]], styles: ["img[_ngcontent-%COMP%] {\n  width: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9zaGFyZWQvcmVzdW1lLXRpdGxlL3Jlc3VtZS10aXRsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29yZS9zaGFyZWQvcmVzdW1lLXRpdGxlL3Jlc3VtZS10aXRsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgd2lkdGg6IDYwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeTitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resume-title',
                templateUrl: './resume-title.component.html',
                styleUrls: ['./resume-title.component.css']
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/core/shared/titles/titles.component.ts":
/*!********************************************************!*\
  !*** ./src/app/core/shared/titles/titles.component.ts ***!
  \********************************************************/
/*! exports provided: TitlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitlesComponent", function() { return TitlesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TitlesComponent {
    constructor() {
    }
    get titleName() {
        return this._titleName;
    }
    set titleName(titleName) {
        this._titleName = titleName;
    }
    ngOnInit() {
    }
}
TitlesComponent.ɵfac = function TitlesComponent_Factory(t) { return new (t || TitlesComponent)(); };
TitlesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TitlesComponent, selectors: [["app-titles"]], inputs: { titleName: "titleName" }, decls: 4, vars: 1, consts: [[1, "row"], [1, "col-12"], [1, "text-center"]], template: function TitlesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleName);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2hhcmVkL3RpdGxlcy90aXRsZXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitlesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-titles',
                templateUrl: './titles.component.html',
                styleUrls: ['./titles.component.css']
            }]
    }], function () { return []; }, { titleName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/core/util/constants.ts":
/*!****************************************!*\
  !*** ./src/app/core/util/constants.ts ***!
  \****************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
class Constants {
}
Constants.PORJECT_TYPE_JAVASCRIPT = 'javaScript';
Constants.PORJECT_TYPE_HTML_CSS = 'htmlCss';
Constants.PROJECT_TYPE_JQUERY = 'jQuery';
Constants.PROJECT_TYPE_BOOTSTRAP = 'bootstrap';
Constants.PROJECT_TYPE_REACT = 'react';
Constants.PROJECT_TYPE_ANGULAR = 'angular';
Constants.PROJECT_TYPE_JAVA = 'java';
Constants.PROJECT_TYPE_PHP = 'php';
Constants.PROJECT_TYPE_API = 'api';
Constants.ROUTE_RESUME = 'RESUME';
Constants.ROUTE_PROJECT = 'PROJECT';


/***/ }),

/***/ "./src/app/core/util/data-base.ts":
/*!****************************************!*\
  !*** ./src/app/core/util/data-base.ts ***!
  \****************************************/
/*! exports provided: DataBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataBase", function() { return DataBase; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/app/core/util/constants.ts");

class DataBase {
}
DataBase.logosLanguage = [
    {
        src: 'assets/images/logo-js.png',
        alt: 'Javascript Logo',
        type: _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PORJECT_TYPE_JAVASCRIPT
    },
    {
        src: 'assets/images/logo-html-css.png',
        alt: 'Html & Css logo',
        type: _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PORJECT_TYPE_HTML_CSS
    },
    {
        src: 'assets/images/logo-jquery.png',
        alt: 'jQuery Logo',
        type: _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_JQUERY
    },
    {
        src: 'assets/images/logo-bootstrap.png',
        alt: 'Bootstrap Logo',
        type: _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_BOOTSTRAP
    },
    {
        src: 'assets/images/logo-react.png',
        alt: 'React Logo',
        type: _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_REACT
    },
    {
        src: 'assets/images/logo-angular.png',
        alt: 'Angular Logo',
        type: _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_ANGULAR
    },
    {
        src: 'assets/images/logo-java.png',
        alt: 'Java Logo',
        type: _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_JAVA
    },
    {
        src: 'assets/images/logos-php.png',
        alt: 'Php Logo',
        type: _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_PHP
    },
    {
        src: 'assets/images/logos-api.png',
        alt: 'Api Logo',
        type: _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_API
    }
];
DataBase.projects = [
    {
        alt: 'Picture of a Youtube Browser Clone',
        title: 'Youtube Clone',
        projectType: [
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_REACT,
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PORJECT_TYPE_HTML_CSS,
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_BOOTSTRAP,
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_API
        ],
        class: 'card card-project card-project-youtube-clone',
        isShown: null,
        link: 'https://jeremy-bertin-developer.github.io/jeremy-bertin-dveloper.github.io-react-youtube-clone/'
    },
    {
        alt: 'Picture of an Interface to generate randomly a password',
        title: 'Random Password Generator',
        projectType: [
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_REACT,
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PORJECT_TYPE_HTML_CSS,
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_BOOTSTRAP,
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_API
        ],
        class: 'card card-project card-project-random-password',
        isShown: null,
        link: 'https://jeremy-bertin-developer.github.io/jeremy-bertin-developer.github.io-react-random-password/'
    },
    {
        alt: 'Picture of an Interface for chat messenger',
        title: 'Chatbox',
        projectType: [_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_REACT, _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PORJECT_TYPE_HTML_CSS, _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_BOOTSTRAP],
        class: 'card card-project card-project-chat-box',
        isShown: null,
        link: 'https://jeremy-bertin-developer.github.io/jeremy-bertin-dev.github.io-react-chat-box/'
    },
    {
        alt: 'Picture of an Interface for species classification',
        title: 'Species Classification',
        projectType: [
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_REACT,
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PORJECT_TYPE_HTML_CSS,
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_BOOTSTRAP,
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_API
        ],
        class: 'card card-project card-project-species',
        isShown: null,
        link: 'https://jeremy-bertin-developer.github.io/jeremy-bertin-developer.github.io-react-species-classification/'
    },
    {
        alt: 'Picture of the Simpson family',
        title: 'The Simpsons',
        projectType: [
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_REACT,
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PORJECT_TYPE_HTML_CSS,
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_BOOTSTRAP,
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_API
        ],
        class: 'card card-project card-project-simpsons',
        isShown: null,
        link: 'https://jeremy-bertin-developer.github.io/jeremy-bertin-developer.github.io-react-simpsons/'
    },
    {
        alt: 'Picture of an interface to generate random groups',
        title: 'Random Groups Generator',
        projectType: [_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_REACT, _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PORJECT_TYPE_HTML_CSS, _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_BOOTSTRAP],
        class: 'card card-project card-project-random-group',
        isShown: null,
        link: 'https://jeremy-bertin-developer.github.io/jeremy-bertin-developer.github.io-react-random-group-generator/'
    },
    {
        alt: 'Picture of an interface that is a clone of Yelp website',
        title: 'Ravenous Yelp Clone',
        projectType: [_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PORJECT_TYPE_HTML_CSS, _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_REACT, _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_API],
        class: 'card card-project card-project-ravenous',
        isShown: null,
        link: 'https://jeremy-bertin-developer.github.io/jeremy-bertin-developer.github.io-react-ravenous/'
    },
    {
        alt: 'Picture of the interface from the website Unsplash',
        title: 'Unsplash Clone',
        projectType: [
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PORJECT_TYPE_JAVASCRIPT,
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PORJECT_TYPE_HTML_CSS,
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_BOOTSTRAP,
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_API
        ],
        class: 'card card-project card-project-unsplash-clone',
        isShown: null,
        link: 'https://jeremy-bertin-developer.github.io/jeremy-bertin-developer.github.io-unsplash-clone/'
    },
    {
        alt: 'A snake game',
        title: 'Snake game',
        projectType: [_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PORJECT_TYPE_JAVASCRIPT],
        class: 'card card-project card-project-snake',
        isShown: null,
        link: 'https://jeremy-bertin-developer.github.io/jeremy-bertin-developer.github.io-snake-game/'
    },
    {
        alt: 'Picture from New York City',
        title: '1980 House Recordings',
        projectType: [
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PORJECT_TYPE_JAVASCRIPT,
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_JQUERY,
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PORJECT_TYPE_HTML_CSS,
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_BOOTSTRAP
        ],
        class: 'card card-project card-project-1980',
        isShown: null,
        link: 'https://jeremy-bertin-developer.github.io/jeremy-bertin-developer.github.io-1980-house-recordings/'
    },
    {
        alt: 'Picture of a canvas',
        title: 'Canvas',
        projectType: [_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PORJECT_TYPE_HTML_CSS],
        class: 'card card-project card-project-canvas-tag',
        isShown: null,
        link: 'https://jeremy-bertin-developer.github.io/jeremy-bertin-dev.github.io-canvas-tag/'
    },
    {
        alt: 'Picture of a Burger',
        title: 'Gogi Burger',
        projectType: [_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PORJECT_TYPE_JAVASCRIPT, _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PORJECT_TYPE_HTML_CSS, _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_BOOTSTRAP],
        class: 'card card-project card-project-gogi-burger',
        isShown: null,
        link: 'https://jeremy-bertin-developer.github.io/jeremy-bertin-developer.github.io-gogi-burger/'
    },
    {
        alt: 'Picture of a Woman Smiling',
        title: 'Laetitia Hypnose',
        projectType: [
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PORJECT_TYPE_JAVASCRIPT,
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_JQUERY,
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PORJECT_TYPE_HTML_CSS,
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_BOOTSTRAP
        ],
        class: 'card card-project card-project-laetitia-hypnose',
        isShown: null,
        link: 'https://jeremy-bertin-developer.github.io/jeremy-bertin-developer.github.io-laetitia-hypnose/'
    },
    {
        alt: 'Picture of the interface from the website Giphy',
        title: 'Giphy Clone',
        projectType: [
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PORJECT_TYPE_JAVASCRIPT,
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PORJECT_TYPE_HTML_CSS,
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_BOOTSTRAP,
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_API
        ],
        class: 'card card-project card-project-giphy-clone',
        isShown: null,
        link: 'https://jeremy-bertin-developer.github.io/jeremy-bertin-developer.github.io-giphy-clone/'
    },
    {
        alt: 'Picture of the interface to generate random quotes from Chuck Norris',
        title: 'Chuck Norris Quotes',
        projectType: [
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PORJECT_TYPE_JAVASCRIPT,
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PORJECT_TYPE_HTML_CSS,
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_BOOTSTRAP,
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_API
        ],
        class: 'card card-project card-project-chuck-norris-quotes',
        isShown: null,
        link: 'https://jeremy-bertin-developer.github.io/jeremy-bertin-developer.github.io-chuck-no-quotes/'
    },
    {
        alt: 'Picture of the interface to generate random quotes',
        title: 'Random Quotes',
        projectType: [
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PORJECT_TYPE_JAVASCRIPT,
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PORJECT_TYPE_HTML_CSS,
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_BOOTSTRAP,
            _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_API
        ],
        class: 'card card-project card-project-random-quotes',
        isShown: null,
        link: 'https://jeremy-bertin-developer.github.io/jeremy-bertin-developer.github.io-random-quote/'
    },
    {
        alt: 'Picture of a map',
        title: 'World Bucket List',
        projectType: [_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PORJECT_TYPE_HTML_CSS, _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_BOOTSTRAP, _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_API],
        class: 'card card-project card-project-world-bucket-list',
        isShown: null,
        link: ''
    },
    {
        alt: 'Picture of a form',
        title: 'Form',
        projectType: [_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PORJECT_TYPE_HTML_CSS, _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_BOOTSTRAP, _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_PHP],
        class: 'card card-project card-project-form',
        isShown: null,
        link: 'https://jeremy-bertin-developer.github.io/jeremy-bertin-developer.github.io-form-php/'
    },
    {
        alt: 'Picture of five actresses',
        title: 'Top 5 Actresses',
        projectType: [_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PORJECT_TYPE_HTML_CSS, _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_JQUERY],
        class: 'card card-project card-project-top-five-actresses',
        isShown: null,
        link: 'https://jeremy-bertin-developer.github.io/jeremy-bertin-developer.githu.io-top-five-actresses/'
    },
    {
        alt: 'Picture of an interface to look for travels',
        title: 'Travel Agency',
        projectType: [_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PORJECT_TYPE_HTML_CSS],
        class: 'card card-project card-project-travel-agency',
        isShown: null,
        link: 'https://jeremy-bertin-developer.github.io/jeremy-bertin-developer.github.io-travel-agency/'
    },
    {
        alt: 'Picture of an interface that is showing forcast',
        title: 'Wanderlust Forecast',
        projectType: [_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PORJECT_TYPE_HTML_CSS, _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PORJECT_TYPE_JAVASCRIPT, _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECT_TYPE_API],
        class: 'card card-project card-project-wanderlust',
        isShown: null,
        link: 'https://jeremy-bertin-developer.github.io/jeremy-bertin-developer.github.io-wanderlust/'
    }
];
DataBase.profileSkills = [
    {
        paragraph: 'Creative'
    },
    {
        paragraph: 'Eager to learn'
    },
    {
        paragraph: 'Patient'
    },
    {
        paragraph: 'Solution Oriented'
    },
    {
        paragraph: 'Team Worker and motivated by the results.'
    }
];
DataBase.profileAvatars = [
    {
        src: '../assets/images/logo.avatar.creative.png'
    },
    {
        src: '../assets/images/logo.avatar.patient.png'
    },
    {
        src: '../assets/images/logo.avatar.solution.oriented.png'
    },
    {
        src: '../assets/images/logo.avatar.motivated.team.player.png'
    }
];
DataBase.resumeTitle = [
    {
        componentName: 'profile',
        titleLogo: {
            titleName: 'Profile',
            src: '../assets/images/logo.avatar.me.png'
        }
    },
    {
        componentName: 'profesionalXp',
        titleLogo: {
            titleName: 'Profesional Experiences',
            src: 'assets/images/logo.prof.xp.png'
        }
    },
    {
        componentName: 'coursesTrainings',
        titleLogo: {
            titleName: 'Courses & Trainings',
            src: 'assets/images/logo.courses.trainings.png'
        }
    },
    {
        componentName: 'programmingLanguages',
        titleLogo: {
            titleName: 'Programming Languages & Technical Skills',
            src: 'assets/images/logo.code.png'
        }
    },
    {
        componentName: 'studies',
        titleLogo: {
            titleName: 'Studies',
            src: 'assets/images/logo.studies.png'
        }
    },
    {
        componentName: 'hobbiesInterests',
        titleLogo: {
            titleName: 'Hobbies & Interests',
            src: 'assets/images/logo.hobbies.png'
        }
    },
    {
        componentName: 'languages',
        titleLogo: {
            titleName: 'Languages',
            src: 'assets/images/logo.languages.png'
        }
    },
    {
        componentName: 'testimonies',
        titleLogo: {
            titleName: 'Testimonies',
            src: 'assets/images/logo.testimonies.png'
        }
    }
];
DataBase.cardResumeProfesionalExperiencesColLeft = [
    {
        cardClass: 'card border-0 shadow-lg mb-4 rbi-bg',
        imgSrc: 'assets/images/logo.laptop.png',
        header: 'Trainee Frontend Software Engineer',
        paragraphItalic: 'Raifeisen Bank International, 1190 Vienna',
        paragraph: 'March 2020 - Now'
    },
    {
        cardClass: 'card d-lg-none d-xl-none border-0 shadow-lg mb-4',
        imgSrc: 'assets/images/logo.restaurant.png',
        header: 'Restaurant Manager',
        paragraphItalic: 'MIDI Café &amp; Bistrot, 1010 Vienna',
        paragraph: 'September 2017 - December 2018'
    },
    {
        cardClass: 'card border-0 shadow mb-4',
        imgSrc: 'assets/images/logo.cocktail.png',
        header: 'Bar Manager',
        paragraphItalic: 'Steigenberger Hotel ****, 1010 Vienna',
        paragraph: 'June 2016 - August 2017'
    },
    {
        cardClass: 'card d-lg-none d-xl-none border-0 shadow-lg mb-4',
        imgSrc: 'assets/images/logo.cocktail.png',
        header: 'Bar Manager',
        paragraphItalic: 'IQ Bar, 1010 Vienna',
        paragraph: 'June 2015 - May 2016'
    },
    {
        cardClass: 'card border-0 shadow mb-4',
        imgSrc: 'assets/images/logo.cocktail.png',
        header: 'Barkeeper',
        paragraphItalic: 'Le Zefire Stadtpark & The Ring Hotel ****, 1010 Vienna',
        paragraph: 'April 2014 - May 2015'
    },
    {
        cardClass: 'card d-lg-none d-xl-none border-0 shadow-lg mb-4',
        imgSrc: 'assets/images/logo.skis.png',
        header: 'Skishop Manager',
        paragraphItalic: 'Hotel des Neiges ***, Courchevel, France - Every Winter Seasons',
        paragraph: 'December 2013 — March 2014'
    },
    {
        cardClass: 'card border-0 shadow mb-4',
        imgSrc: 'assets/images/logo.tshirt.png',
        header: 'Specialised saler in thermal underwear and sportswear',
        paragraphItalic: 'Odlo Shop, Courchevel, France - Every Winter Seasons',
        paragraph: 'December 2010 — March 2013'
    },
    {
        cardClass: 'card d-lg-none d-xl-none border-0 shadow-lg mb-4',
        imgSrc: 'assets/images/logo.tshirt.png',
        header: 'Specialised saler in thermal underwear and sportswear',
        paragraphItalic: 'Topscore Shop, Montpellier - Every Sommer Seasons',
        paragraph: 'Mai 2011 — Septembre 2013'
    },
    {
        cardClass: 'card border-0 shadow mb-4',
        imgSrc: 'assets/images/logo.house.png',
        header: 'Sales Manager, Specialised Saler',
        paragraphItalic: 'Brico Depot Rouen, Rennes, France',
        paragraph: '2001 - 2010'
    }
];
DataBase.cardResumeProfesionalExperiencesColRight = [
    {
        cardClass: 'card d-none d-sm-none d-md-none d-lg-block d-xl-block border-0 shadow mb-4',
        imgSrc: 'assets/images/logo.restaurant.png',
        header: 'Restaurant Manager',
        paragraphItalic: 'MIDI Café &amp; Bistrot, 1010 Vienna',
        paragraph: 'September 2017 - December 2018'
    },
    {
        cardClass: 'card d-none d-sm-none d-md-none d-lg-block d-xl-block border-0 shadow mb-4',
        imgSrc: 'assets/images/logo.cocktail.png',
        header: 'Bar Manager',
        paragraphItalic: 'IQ Bar, 1010 Vienna',
        paragraph: 'June 2015 - May 2016'
    },
    {
        cardClass: 'card d-none d-sm-none d-md-none d-lg-block d-xl-block border-0 shadow mb-4',
        imgSrc: 'assets/images/logo.skis.png',
        header: 'Skishop Manager',
        paragraphItalic: 'Hotel des Neiges ***, Courchevel, France - Every Winter Seasons',
        paragraph: 'December 2013 — March 2014'
    },
    {
        cardClass: 'card d-none d-sm-none d-md-none d-lg-block d-xl-block border-0 shadow mb-4',
        imgSrc: 'assets/images/logo.tshirt.png',
        header: 'Specialised saler in thermal underwear and sportswear',
        paragraphItalic: 'Topscore Shop, Montpellier - Every Sommer Seasons',
        paragraph: 'Mai 2011 — Septembre 2013'
    }
];
DataBase.cardResumeCoursesTrainings = [
    {
        header: 'Codemaster Bootcamp - Talent Garden - Vienna',
        imgSrc: 'assets/images/TAG.logo.png',
        paragraphItalic: 'November 2019 - Februar 2020'
    },
    {
        header: 'Web & Software Development Courses, Udemy',
        imgSrc: 'assets/images/udemy.logo.copie.png',
        paragraphItalic: '2018 - Now'
    },
    {
        header: 'Web Development Courses, Freecodecamp',
        imgSrc: 'assets/images/freecodecamp.logo.copie.png',
        paragraphItalic: '2018 - Now'
    },
    {
        header: 'Full Stack Web Development Course, Codecademy',
        imgSrc: 'assets/images/logo.codecademy.png',
        paragraphItalic: '2018 - Now'
    }
];
DataBase.programmingLanguagesLogos = [
    {
        imgSrc: 'assets/images/logo-angular.png',
        header: 'Angular'
    },
    {
        imgSrc: 'assets/images/logo-react.png',
        header: 'React'
    },
    {
        imgSrc: 'assets/images/logo-js.png',
        header: 'javaScript'
    },
    {
        imgSrc: 'assets/images/logo-typescript.png',
        header: 'TypeScript'
    },
    {
        imgSrc: 'assets/images/logo.rxjs.png',
        header: 'RxJs'
    },
    {
        imgSrc: 'assets/images/logo-html-css.png',
        header: 'Html & CSS'
    },
    {
        imgSrc: 'assets/images/logo-jquery.png',
        header: 'jQuery'
    },
    {
        imgSrc: 'assets/images/logo-bootstrap.png',
        header: 'Bootstrap'
    },
    {
        imgSrc: 'assets/images/logo.angular.material.png',
        header: 'Angular Material'
    },
    {
        imgSrc: 'assets/images/logo-java.png',
        header: 'Java'
    },
    {
        imgSrc: 'assets/images/logos-php.png',
        header: 'Php'
    },
    {
        imgSrc: 'assets/images/logo-mocha.png',
        header: 'Mocha'
    },
    {
        imgSrc: 'assets/images/logo.jasmine.copie.png',
        header: 'Jasmine'
    },
    {
        imgSrc: 'assets/images/logo.git.copie.png',
        header: 'Git'
    },
    {
        imgSrc: 'assets/images/github.png',
        header: 'GitHub'
    },
    {
        imgSrc: 'assets/images/logo.npm.png',
        header: 'npm'
    },
    {
        imgSrc: 'assets/images/logo.cmd.line.png',
        header: 'Cmd Line'
    },
    {
        imgSrc: 'assets/images/logos-api.png',
        header: 'Api Integration'
    },
    {
        imgSrc: 'assets/images/logo.responsive.png',
        header: 'Responsive Web Design'
    },
    {
        imgSrc: 'assets/images/logo.ui.ux.png',
        header: 'UI / UX Principles'
    },
    {
        imgSrc: 'assets/images/logo.seo.png',
        header: 'SEO & Speed Optimisation'
    },
    {
        imgSrc: 'assets/images/logo.jira.png',
        header: 'Jira'
    },
    {
        imgSrc: 'assets/images/logo.confluence.png',
        header: 'Confluence'
    },
    {
        imgSrc: 'assets/images/logo.bitbucket.png',
        header: 'Bitbucket'
    }
];
DataBase.resumeCardStudies = [
    {
        imgSrc: 'assets/images/logo.carpentry.png',
        headerTitle: 'Artist Profession School Specialised in Carpentry',
        paragraphOne: 'St Quentin, France',
        paragraphTwo: 'September 1999 - June 2000'
    },
    {
        imgSrc: 'assets/images/logo.carpentry.png',
        headerTitle: 'Carpentry School and Related Materials',
        paragraphOne: 'Rouen, France',
        paragraphTwo: 'May 1997 - June 1999'
    }
];
DataBase.resumeHobbiesLogos = [
    {
        imgSrc: 'assets/images/logo.programming.png',
        headerTitle: 'Programming'
    },
    {
        imgSrc: 'assets/images/logo.new.techno.png',
        headerTitle: 'Discovering new technologies'
    },
    {
        imgSrc: 'assets/images/logo.design.png',
        headerTitle: 'Design'
    },
    {
        imgSrc: 'assets/images/logo.gaming.png',
        headerTitle: 'Gaming'
    },
    {
        imgSrc: 'assets/images/logo.records.png',
        headerTitle: 'Records Collector'
    },
    {
        imgSrc: 'assets/images/logo.djing.png',
        headerTitle: 'Djing'
    },
    {
        imgSrc: 'assets/images/logo.music.png',
        headerTitle: 'Music production'
    },
    {
        imgSrc: 'assets/images/logo.reading.png',
        headerTitle: 'Reading'
    },
    {
        imgSrc: 'assets/images/logo.bartending.png',
        headerTitle: 'Mixology & Barkeeping'
    },
    {
        imgSrc: 'assets/images/logo.helping.png',
        headerTitle: 'Helping others'
    },
    {
        imgSrc: 'assets/images/logo.learning.png',
        headerTitle: 'Learning new things'
    },
    {
        imgSrc: 'assets/images/logo.travelling.png',
        headerTitle: 'Travelling'
    }
];
DataBase.resumeCardLanguages = [
    {
        srcImg: 'assets/images/logo.france.png',
        paragraph: 'Mother tongue'
    },
    {
        srcImg: 'assets/images/logo.england.png',
        paragraph: 'Fluent'
    },
    {
        srcImg: 'assets/images/logo.austria.png',
        paragraph: 'Between B1 & B2'
    },
    {
        srcImg: 'assets/images/logo.russia.png',
        paragraph: 'Currently learning A1'
    }
];
DataBase.resumeCardTestimonies = [
    {
        imgSrc: 'assets/images/valentin.buisson.jpeg',
        headerTitle: 'Valentin Buisson',
        paragraphOne: 'Frontend Application Architect Senior Software Engineer',
        paragraphTwo: 'Jérémy is really motivated and proactive. He is always eager to learn new things and improve himself. I have known him when he was starting to get into computer science and I am impressed by how fast he was learning as he was constantly doing and showing me more and more complex projects he worked on. I really think that kind of attitude will make him a really valuable resource for any company',
        link: 'https://www.linkedin.com/in/valentinbuisson/'
    },
    {
        imgSrc: '../../../assets/images/philippe.beaulieu.jpeg',
        headerTitle: 'Philippe Beaulieu',
        paragraphOne: 'Guest & Service and Quality ManagerThe Ring Hotel Vienna',
        paragraphTwo: 'Jeremy has been always somebody engaged and creative into his work',
        link: 'https://www.linkedin.com/in/philippe-beaulieu-3b458a35/'
    },
    {
        imgSrc: '../../../assets/images/markus.posch.jpg',
        headerTitle: 'Markus Posh',
        paragraphOne: 'Barmanager Steigenberg Hotel',
        paragraphTwo: 'I ve learned interested and creative things with Jeremy',
        link: ''
    },
    {
        imgSrc: '../../../assets/images/harry.mitchell.jpeg',
        headerTitle: 'Harry Mitchell',
        paragraphOne: 'Corporate Leadership TraineeHyatt Regency Sydney',
        paragraphTwo: 'Jeremy helped me to have a good and efficient organisation at work',
        link: 'https://www.linkedin.com/in/harrymitchell10/'
    },
    {
        imgSrc: '../../../assets/images/logo.avatar.max.png',
        headerTitle: 'Maximilian Schegolev',
        paragraphOne: 'General Manager, IQ Bar Wien',
        paragraphTwo: 'Jeremy was very creative, very friendly and was always ready to learn new things',
        link: ''
    },
    {
        imgSrc: '../../../assets/images/americo.da.silva.jpeg',
        headerTitle: 'Americo Da Silva',
        paragraphOne: 'Barmanager Le Zefire Bar – The Ring Hotel Wien',
        paragraphTwo: 'Mr. Bertin has great leadership, teamwork and organisation skills that he gave in to his work. He showed also great resilience on deadline pressure',
        link: 'https://www.linkedin.com/in/am%C3%A9rico-jos%C3%A9-peixoto-da-silva-a92610a4/'
    }
];
DataBase.linksSideNavbar = [
    {
        sectionId: 'profile',
        linkName: 'Profile'
    },
    {
        sectionId: 'profesional-xp',
        linkName: 'Profesional Experiences'
    },
    {
        sectionId: 'courses-trainings',
        linkName: 'Courses & Trainings'
    },
    {
        sectionId: 'programming-languages',
        linkName: 'Programming Languages & Technical Skills'
    },
    {
        sectionId: 'studies',
        linkName: 'Studies'
    },
    {
        sectionId: 'languages',
        linkName: 'Languages'
    },
    {
        sectionId: 'hobbies-interests',
        linkName: 'Hobbies'
    },
    {
        sectionId: 'testimonies',
        linkName: 'Testimonies'
    }
];


/***/ }),

/***/ "./src/app/views/main-page/main-header/main-header.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/main-page/main-header/main-header.component.ts ***!
  \**********************************************************************/
/*! exports provided: MainHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainHeaderComponent", function() { return MainHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MainHeaderComponent {
    constructor() {
    }
    ngOnInit() { }
}
MainHeaderComponent.ɵfac = function MainHeaderComponent_Factory(t) { return new (t || MainHeaderComponent)(); };
MainHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainHeaderComponent, selectors: [["app-main-header"]], decls: 20, vars: 0, consts: [[1, "row"], [1, "col-12"], [1, "card", "text-center", "border-0"], [1, "card-body"], ["src", "assets/images/me-bw.jpg", 1, "rounded-circle", "img-fluid", "border", "shadow", "d-flex", "float-none", "profile-picture"], [1, "col-12", "text-center"], ["role", "group", 1, "btn-group", "d-flex", "justify-content-center", "align-items-center", "text-center"], ["type", "button", 1, "btn", "btn-block", "text-center"], ["href", "https://github.com/jeremy-bertin-developer", "target", "blank"], [1, "fa", "fa-github", "float-lg-right", "text-center", "logo-github"], ["href", "https://www.linkedin.com/in/jeremy-bertin-dev/", "target", "blank"], [1, "fa", "fa-linkedin-square", "float-lg-left", "text-center", "logo-linkedin"]], template: function MainHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Jeremy Bertin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Fullstack Trainee Software Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".profile-picture[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    border-style: none;\n    width: 200px;\n  }\n\n  .logo-github[_ngcontent-%COMP%] {\n    font-size: 60px;\n    color: #24292e;\n  }\n\n  .logo-linkedin[_ngcontent-%COMP%] {\n    font-size: 60px;\n    color: #0e76a8;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFpbi1wYWdlL21haW4taGVhZGVyL21haW4taGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9tYWluLXBhZ2UvbWFpbi1oZWFkZXIvbWFpbi1oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLXBpY3R1cmUge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cblxuICAubG9nby1naXRodWIge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBjb2xvcjogIzI0MjkyZTtcbiAgfVxuICBcbiAgLmxvZ28tbGlua2VkaW4ge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBjb2xvcjogIzBlNzZhODtcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-header',
                templateUrl: './main-header.component.html',
                styleUrls: ['./main-header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/main-page/main-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/main-page/main-page.component.ts ***!
  \********************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../side-navbar/side-navbar.component */ "./src/app/views/side-navbar/side-navbar.component.ts");
/* harmony import */ var _main_header_main_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-header/main-header.component */ "./src/app/views/main-page/main-header/main-header.component.ts");
/* harmony import */ var _core_shared_line_separation_line_separation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/shared/line-separation/line-separation.component */ "./src/app/core/shared/line-separation/line-separation.component.ts");
/* harmony import */ var _main_projects_main_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-projects/main-projects.component */ "./src/app/views/main-page/main-projects/main-projects.component.ts");






class MainPageComponent {
    constructor() {
    }
    ngOnInit() { }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 10, vars: 1, consts: [[3, "routeSelected"], [1, "container", "lg"], [1, "row"], [1, "col-12"], ["id", "main-page"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-side-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-main-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-line-separation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-main-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routeSelected", "PROJECT");
    } }, directives: [_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_1__["SideNavbarComponent"], _main_header_main_header_component__WEBPACK_IMPORTED_MODULE_2__["MainHeaderComponent"], _core_shared_line_separation_line_separation_component__WEBPACK_IMPORTED_MODULE_3__["LineSeparationComponent"], _main_projects_main_projects_component__WEBPACK_IMPORTED_MODULE_4__["MainProjectsComponent"]], styles: [".column-height-40[_ngcontent-%COMP%] {\n  height: 40px;\n}\n\n.list-group-item[_ngcontent-%COMP%]:last-child {\n  margin-top: 10px;\n  text-align: center;\n  border-style: none;\n}\n\nfooter[_ngcontent-%COMP%] {\n  height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sdW1uLWhlaWdodC00MCB7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbmZvb3RlciB7XG4gIGhlaWdodDogMTUwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-page',
                templateUrl: './main-page.component.html',
                styleUrls: ['./main-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/main-page/main-projects/logo-languages/logo-languages.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/views/main-page/main-projects/logo-languages/logo-languages.component.ts ***!
  \******************************************************************************************/
/*! exports provided: LogoLanguagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoLanguagesComponent", function() { return LogoLanguagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LogoLanguagesComponent {
    constructor() {
        this.emitShowProject = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    showPorject() {
        this.emitShowProject.emit();
    }
}
LogoLanguagesComponent.ɵfac = function LogoLanguagesComponent_Factory(t) { return new (t || LogoLanguagesComponent)(); };
LogoLanguagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoLanguagesComponent, selectors: [["app-logo-languages"]], inputs: { src: "src", alt: "alt" }, outputs: { emitShowProject: "emitShowProject" }, decls: 2, vars: 2, consts: [["type", "button", 1, "btn", "text-center", 3, "click"], [1, "logo-languages", "d-flex", "justify-content-center", "align-items-center", 3, "src", "alt"]], template: function LogoLanguagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogoLanguagesComponent_Template_button_click_0_listener() { return ctx.showPorject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.alt);
    } }, styles: [".logo-languages[_ngcontent-%COMP%] {\n    width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFpbi1wYWdlL21haW4tcHJvamVjdHMvbG9nby1sYW5ndWFnZXMvbG9nby1sYW5ndWFnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21haW4tcGFnZS9tYWluLXByb2plY3RzL2xvZ28tbGFuZ3VhZ2VzL2xvZ28tbGFuZ3VhZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby1sYW5ndWFnZXMge1xuICAgIHdpZHRoOiA1MHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoLanguagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logo-languages',
                templateUrl: './logo-languages.component.html',
                styleUrls: ['./logo-languages.component.css']
            }]
    }], function () { return []; }, { src: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], alt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], emitShowProject: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/views/main-page/main-projects/main-projects.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/main-page/main-projects/main-projects.component.ts ***!
  \**************************************************************************/
/*! exports provided: MainProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainProjectsComponent", function() { return MainProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_util_data_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/util/data-base */ "./src/app/core/util/data-base.ts");
/* harmony import */ var _page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../page.service */ "./src/app/views/page.service.ts");
/* harmony import */ var _core_shared_titles_titles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/shared/titles/titles.component */ "./src/app/core/shared/titles/titles.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _logo_languages_logo_languages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logo-languages/logo-languages.component */ "./src/app/views/main-page/main-projects/logo-languages/logo-languages.component.ts");







function MainProjectsComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-logo-languages", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("emitShowProject", function MainProjectsComponent_ng_container_4_Template_app_logo_languages_emitShowProject_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const logo_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.showProject(logo_r2.type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const logo_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", logo_r2.src)("alt", logo_r2.alt);
} }
function MainProjectsComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainProjectsComponent_ng_container_9_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const project_r5 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.openProject(project_r5.link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const project_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](project_r5.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "projects", i_r6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r5.title);
} }
class MainProjectsComponent {
    constructor(pageService) {
        this.pageService = pageService;
    }
    ngOnInit() {
        this.getLogo();
        this.getProjects();
    }
    getLogo() {
        this.pageService.getDatas(src_app_core_util_data_base__WEBPACK_IMPORTED_MODULE_1__["DataBase"].logosLanguage).subscribe(x => {
            console.log(x);
            this.logosLanguage = x;
        });
    }
    getProjects() {
        this.pageService.getDatas(src_app_core_util_data_base__WEBPACK_IMPORTED_MODULE_1__["DataBase"].projects).subscribe(x => {
            console.log(x);
            this.projects = x;
        });
    }
    showProject(logoType) {
        this.getProjects();
        const arrayTypeOfProject = [];
        for (const typeOfProject of this.projects) {
            for (const projectType of typeOfProject.projectType) {
                if (projectType === logoType) {
                    arrayTypeOfProject.push(typeOfProject);
                    typeOfProject.isShown = true;
                }
                else if (projectType !== logoType) {
                    typeOfProject.isShown = false;
                }
            }
        }
        this.projects = arrayTypeOfProject;
    }
    showAllProjects() {
        for (const typeOfProject of this.projects) {
            typeOfProject.isShown = true;
        }
        this.projects = src_app_core_util_data_base__WEBPACK_IMPORTED_MODULE_1__["DataBase"].projects;
    }
    openProject(link) {
        window.open(link);
    }
}
MainProjectsComponent.ɵfac = function MainProjectsComponent_Factory(t) { return new (t || MainProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_page_service__WEBPACK_IMPORTED_MODULE_2__["PageService"])); };
MainProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainProjectsComponent, selectors: [["app-main-projects"]], decls: 10, vars: 3, consts: [[3, "titleName"], [1, "row", "d-none", "d-sm-none", "d-md-inline", "d-lg-inline", "d-xl-inline"], [1, "col"], ["role", "group", 1, "btn-group", "d-flex", "justify-content-center", "align-items-center"], [4, "ngFor", "ngForOf"], [1, "col-4", "offset-4", "text-center"], ["type", "button", 1, "btn", "text-center", "mt-3", 3, "click"], [1, "row"], [1, "logo", 3, "src", "alt", "emitShowProject"], [1, "col-sm-12", "col-md-6", "col-lg-4", "col-xl-4", "text-center", "div-card-project", 3, "click"], [1, "card", "mt-4", "shadow-lg", 3, "id"], [1, "card-body", "card-body-project", "d-flex", "justify-content-center", "align-items-center"], [1, "card-round", "bg-light", "border", "rounded-circle", "border-light", "shadow", "round-card-project", "d-flex", "justify-content-center", "align-items-center"]], template: function MainProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-titles", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MainProjectsComponent_ng_container_4_Template, 2, 2, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainProjectsComponent_Template_button_click_6_listener() { return ctx.showAllProjects(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Show All Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MainProjectsComponent_ng_container_9_Template, 7, 4, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleName", "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.logosLanguage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [_core_shared_titles_titles_component__WEBPACK_IMPORTED_MODULE_3__["TitlesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _logo_languages_logo_languages_component__WEBPACK_IMPORTED_MODULE_5__["LogoLanguagesComponent"]], styles: [".fade-in[_ngcontent-%COMP%] {\n  -webkit-animation: fadeIn ease 2s;\n          animation: fadeIn ease 2s;\n}\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.fade-out[_ngcontent-%COMP%] {\n  -webkit-animation: fadeOut ease 2s;\n          animation: fadeOut ease 2s;\n}\n\n@-webkit-keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n.logo[_ngcontent-%COMP%]:hover {\n  filter: drop-shadow(1px 2px 4px rgba(0, 0, 0, 0.15));\n}\n\n.round-card-project[_ngcontent-%COMP%] {\n  height: 120px;\n  width: 120px;\n}\n\n.card-project[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border-style: none;\n}\n\n.card-project[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.card-project-youtube-clone[_ngcontent-%COMP%] {\n  background: url('mytube.png') center / cover no-repeat;\n}\n\n.card-project-random-password[_ngcontent-%COMP%] {\n  background: url('random-password.png') center / cover no-repeat;\n}\n\n.card-project-chat-box[_ngcontent-%COMP%] {\n  background: url('tchat-box.png') center / cover no-repeat;\n}\n\n.card-project-species[_ngcontent-%COMP%] {\n  background: url('species-api.png') center / cover no-repeat;\n}\n\n.card-project-simpsons[_ngcontent-%COMP%] {\n  background: url('simpsons.png') center / cover no-repeat;\n}\n\n.card-project-random-group[_ngcontent-%COMP%] {\n  background: url('random-profile.png') center / cover no-repeat;\n}\n\n.card-project-unsplash-clone[_ngcontent-%COMP%] {\n  background: url('clone-unsplash.png') center / cover no-repeat;\n}\n\n.card-project-snake[_ngcontent-%COMP%] {\n  background: url('snake-game.png') center / cover no-repeat;\n}\n\n.card-project-1980[_ngcontent-%COMP%] {\n  background: url('1980-house-recordings.png') center / cover no-repeat;\n}\n\n.card-project-canvas-tag[_ngcontent-%COMP%] {\n  background: url('canvas-tag.png') center / cover no-repeat;\n}\n\n.card-project-gogi-burger[_ngcontent-%COMP%] {\n  background: url('gogi-burger.png') center / cover no-repeat;\n}\n\n.card-project-laetitia-hypnose[_ngcontent-%COMP%] {\n  background: url('laetitia-hypnose.png') center / cover no-repeat;\n}\n\n.card-project-giphy-clone[_ngcontent-%COMP%] {\n  background: url('giphy-api.png') center / cover no-repeat;\n}\n\n.card-project-chuck-norris-quotes[_ngcontent-%COMP%] {\n  background: url('chuck-no.png') center / cover no-repeat;\n}\n\n.card-project-random-quotes[_ngcontent-%COMP%] {\n  background: url('random-quotes.png') center / cover no-repeat;\n}\n\n.card-project-philippe-beaulieu[_ngcontent-%COMP%] {\n  background: url('philippe-beaulieu.png') center / cover no-repeat;\n}\n\n.card-project-world-bucket-list[_ngcontent-%COMP%] {\n  background: url('world-bucket-list.png') center / cover no-repeat;\n}\n\n.card-project-form[_ngcontent-%COMP%] {\n  background: url('form_php.png') center / cover no-repeat;\n}\n\n.card-project-top-five-actresses[_ngcontent-%COMP%] {\n  background: url('top-5-best-actresses.png') center / cover no-repeat;\n}\n\n.card-project-travel-agency[_ngcontent-%COMP%] {\n  background: url('travel-agency.png') center / cover no-repeat;\n}\n\n.card-project-wanderlust[_ngcontent-%COMP%] {\n  background: url('wanderlust.png') center / cover no-repeat;\n}\n\n.card-project-ravenous[_ngcontent-%COMP%] {\n  background: url('ravenous.png') center / cover no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFpbi1wYWdlL21haW4tcHJvamVjdHMvbWFpbi1wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQXlCO1VBQXpCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFQQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLGtDQUEwQjtVQUExQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxvREFBb0Q7QUFDdEQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzREFBZ0Y7QUFDbEY7O0FBQ0E7RUFDRSwrREFBeUY7QUFDM0Y7O0FBQ0E7RUFDRSx5REFBbUY7QUFDckY7O0FBQ0E7RUFDRSwyREFBcUY7QUFDdkY7O0FBQ0E7RUFDRSx3REFBa0Y7QUFDcEY7O0FBQ0E7RUFDRSw4REFBd0Y7QUFDMUY7O0FBQ0E7RUFDRSw4REFBd0Y7QUFDMUY7O0FBQ0E7RUFDRSwwREFBb0Y7QUFDdEY7O0FBQ0E7RUFDRSxxRUFBK0Y7QUFDakc7O0FBQ0E7RUFDRSwwREFBb0Y7QUFDdEY7O0FBQ0E7RUFDRSwyREFBcUY7QUFDdkY7O0FBQ0E7RUFDRSxnRUFBMEY7QUFDNUY7O0FBQ0E7RUFDRSx5REFBbUY7QUFDckY7O0FBQ0E7RUFDRSx3REFBa0Y7QUFDcEY7O0FBQ0E7RUFDRSw2REFBdUY7QUFDekY7O0FBQ0E7RUFDRSxpRUFBMkY7QUFDN0Y7O0FBQ0E7RUFDRSxpRUFBMkY7QUFDN0Y7O0FBQ0E7RUFDRSx3REFBa0Y7QUFDcEY7O0FBQ0E7RUFDRSxvRUFBOEY7QUFDaEc7O0FBQ0E7RUFDRSw2REFBdUY7QUFDekY7O0FBQ0E7RUFDRSwwREFBb0Y7QUFDdEY7O0FBQ0E7RUFDRSx3REFBa0Y7QUFDcEYiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9tYWluLXBhZ2UvbWFpbi1wcm9qZWN0cy9tYWluLXByb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFkZS1pbiB7XG4gIGFuaW1hdGlvbjogZmFkZUluIGVhc2UgMnM7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uZmFkZS1vdXQge1xuICBhbmltYXRpb246IGZhZGVPdXQgZWFzZSAycztcbn1cblxuQGtleWZyYW1lcyBmYWRlT3V0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4ubG9nbzpob3ZlciB7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMXB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE1KSk7XG59XG5cbi5yb3VuZC1jYXJkLXByb2plY3Qge1xuICBoZWlnaHQ6IDEyMHB4O1xuICB3aWR0aDogMTIwcHg7XG59XG5cbi5jYXJkLXByb2plY3Qge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLmNhcmQtcHJvamVjdDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmQtcHJvamVjdC15b3V0dWJlLWNsb25lIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL215dHViZS5wbmcnKSBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQ7XG59XG4uY2FyZC1wcm9qZWN0LXJhbmRvbS1wYXNzd29yZCB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9yYW5kb20tcGFzc3dvcmQucG5nJykgY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0O1xufVxuLmNhcmQtcHJvamVjdC1jaGF0LWJveCB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90Y2hhdC1ib3gucG5nJykgY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0O1xufVxuLmNhcmQtcHJvamVjdC1zcGVjaWVzIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NwZWNpZXMtYXBpLnBuZycpIGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdDtcbn1cbi5jYXJkLXByb2plY3Qtc2ltcHNvbnMge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2ltcHNvbnMucG5nJykgY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0O1xufVxuLmNhcmQtcHJvamVjdC1yYW5kb20tZ3JvdXAge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcmFuZG9tLXByb2ZpbGUucG5nJykgY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0O1xufVxuLmNhcmQtcHJvamVjdC11bnNwbGFzaC1jbG9uZSB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jbG9uZS11bnNwbGFzaC5wbmcnKSBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQ7XG59XG4uY2FyZC1wcm9qZWN0LXNuYWtlIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NuYWtlLWdhbWUucG5nJykgY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0O1xufVxuLmNhcmQtcHJvamVjdC0xOTgwIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzLzE5ODAtaG91c2UtcmVjb3JkaW5ncy5wbmcnKSBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQ7XG59XG4uY2FyZC1wcm9qZWN0LWNhbnZhcy10YWcge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2FudmFzLXRhZy5wbmcnKSBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQ7XG59XG4uY2FyZC1wcm9qZWN0LWdvZ2ktYnVyZ2VyIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dvZ2ktYnVyZ2VyLnBuZycpIGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdDtcbn1cbi5jYXJkLXByb2plY3QtbGFldGl0aWEtaHlwbm9zZSB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sYWV0aXRpYS1oeXBub3NlLnBuZycpIGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdDtcbn1cbi5jYXJkLXByb2plY3QtZ2lwaHktY2xvbmUge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2lwaHktYXBpLnBuZycpIGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdDtcbn1cbi5jYXJkLXByb2plY3QtY2h1Y2stbm9ycmlzLXF1b3RlcyB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jaHVjay1uby5wbmcnKSBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQ7XG59XG4uY2FyZC1wcm9qZWN0LXJhbmRvbS1xdW90ZXMge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcmFuZG9tLXF1b3Rlcy5wbmcnKSBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQ7XG59XG4uY2FyZC1wcm9qZWN0LXBoaWxpcHBlLWJlYXVsaWV1IHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BoaWxpcHBlLWJlYXVsaWV1LnBuZycpIGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdDtcbn1cbi5jYXJkLXByb2plY3Qtd29ybGQtYnVja2V0LWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvd29ybGQtYnVja2V0LWxpc3QucG5nJykgY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0O1xufVxuLmNhcmQtcHJvamVjdC1mb3JtIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Zvcm1fcGhwLnBuZycpIGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdDtcbn1cbi5jYXJkLXByb2plY3QtdG9wLWZpdmUtYWN0cmVzc2VzIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RvcC01LWJlc3QtYWN0cmVzc2VzLnBuZycpIGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdDtcbn1cbi5jYXJkLXByb2plY3QtdHJhdmVsLWFnZW5jeSB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90cmF2ZWwtYWdlbmN5LnBuZycpIGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdDtcbn1cbi5jYXJkLXByb2plY3Qtd2FuZGVybHVzdCB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy93YW5kZXJsdXN0LnBuZycpIGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdDtcbn1cbi5jYXJkLXByb2plY3QtcmF2ZW5vdXMge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcmF2ZW5vdXMucG5nJykgY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-projects',
                templateUrl: './main-projects.component.html',
                styleUrls: ['./main-projects.component.css']
            }]
    }], function () { return [{ type: _page_service__WEBPACK_IMPORTED_MODULE_2__["PageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/page.service.ts":
/*!***************************************!*\
  !*** ./src/app/views/page.service.ts ***!
  \***************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class PageService {
    constructor() {
    }
    getDatas(model) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            observer.next(model);
            observer.complete();
        });
    }
}
PageService.ɵfac = function PageService_Factory(t) { return new (t || PageService)(); };
PageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PageService, factory: PageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/resume-page/resume-courses-trainings/resume-courses-trainings.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/views/resume-page/resume-courses-trainings/resume-courses-trainings.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ResumeCoursesTrainingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeCoursesTrainingsComponent", function() { return ResumeCoursesTrainingsComponent; });
/* harmony import */ var src_app_core_util_data_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/util/data-base */ "./src/app/core/util/data-base.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../page.service */ "./src/app/views/page.service.ts");
/* harmony import */ var _core_shared_resume_title_resume_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/shared/resume-title/resume-title.component */ "./src/app/core/shared/resume-title/resume-title.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ResumeCoursesTrainingsComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h6", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const card_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", card_r28.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](card_r28.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](card_r28.paragraphItalic);
} }
class ResumeCoursesTrainingsComponent {
    constructor(pageService) {
        this.pageService = pageService;
    }
    get sectionId() {
        return this._sectionId;
    }
    set sectionId(sectionId) {
        this._sectionId = sectionId;
    }
    ngOnInit() {
        this.getTitleAndLogo();
        this.getResumeCardCoursesTrainings();
    }
    getTitleAndLogo() {
        this.pageService.getDatas(src_app_core_util_data_base__WEBPACK_IMPORTED_MODULE_0__["DataBase"].resumeTitle).subscribe(x => {
            this.resumeTitle = x;
            this.resumeTitle.forEach(el => {
                if (el.componentName === 'coursesTrainings') {
                    this.title = el.titleLogo.titleName;
                    this.source = el.titleLogo.src;
                }
            });
        });
    }
    getResumeCardCoursesTrainings() {
        this.pageService.getDatas(src_app_core_util_data_base__WEBPACK_IMPORTED_MODULE_0__["DataBase"].cardResumeCoursesTrainings).subscribe(x => {
            this.cardResumeCoursesTrainings = x;
        });
    }
}
ResumeCoursesTrainingsComponent.ɵfac = function ResumeCoursesTrainingsComponent_Factory(t) { return new (t || ResumeCoursesTrainingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_page_service__WEBPACK_IMPORTED_MODULE_2__["PageService"])); };
ResumeCoursesTrainingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResumeCoursesTrainingsComponent, selectors: [["app-resume-courses-trainings"]], inputs: { sectionId: "sectionId" }, decls: 7, vars: 3, consts: [["id", "courses-trainings"], [1, "container-lg"], [1, "row", "text-center"], [1, "col"], [3, "title", "source"], [1, "row", "mt-3"], [4, "ngFor", "ngForOf"], [1, "col-lg-6", "col-xl-6"], [1, "card", "border-0", "shadow", "mb-4"], [1, "card-body"], [1, "float-right", "logo-card", 3, "src"], [1, "text-dark", "card-subtitle", "mb-2"], [1, "card-text"]], template: function ResumeCoursesTrainingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-resume-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ResumeCoursesTrainingsComponent_ng_container_6_Template, 13, 3, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx.title)("source", ctx.source);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cardResumeCoursesTrainings);
    } }, directives: [_core_shared_resume_title_resume_title_component__WEBPACK_IMPORTED_MODULE_3__["ResumeTitleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".logo-card[_ngcontent-%COMP%] {\n  width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcmVzdW1lLXBhZ2UvcmVzdW1lLWNvdXJzZXMtdHJhaW5pbmdzL3Jlc3VtZS1jb3Vyc2VzLXRyYWluaW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcmVzdW1lLXBhZ2UvcmVzdW1lLWNvdXJzZXMtdHJhaW5pbmdzL3Jlc3VtZS1jb3Vyc2VzLXRyYWluaW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tY2FyZCB7XG4gIHdpZHRoOiA1MHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResumeCoursesTrainingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-resume-courses-trainings',
                templateUrl: './resume-courses-trainings.component.html',
                styleUrls: ['./resume-courses-trainings.component.css']
            }]
    }], function () { return [{ type: _page_service__WEBPACK_IMPORTED_MODULE_2__["PageService"] }]; }, { sectionId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/views/resume-page/resume-hobbies/resume-hobbies.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/resume-page/resume-hobbies/resume-hobbies.component.ts ***!
  \******************************************************************************/
/*! exports provided: ResumeHobbiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeHobbiesComponent", function() { return ResumeHobbiesComponent; });
/* harmony import */ var src_app_core_util_data_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/util/data-base */ "./src/app/core/util/data-base.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../page.service */ "./src/app/views/page.service.ts");
/* harmony import */ var _core_shared_resume_title_resume_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/shared/resume-title/resume-title.component */ "./src/app/core/shared/resume-title/resume-title.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ResumeHobbiesComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r36.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r36.headerTitle);
} }
class ResumeHobbiesComponent {
    constructor(pageService) {
        this.pageService = pageService;
    }
    get sectionId() {
        return this._sectionId;
    }
    set sectionId(sectionId) {
        this._sectionId = sectionId;
    }
    ngOnInit() {
        this.getTitleAndLogo();
        this.getHobbiesLogos();
    }
    getTitleAndLogo() {
        this.pageService.getDatas(src_app_core_util_data_base__WEBPACK_IMPORTED_MODULE_0__["DataBase"].resumeTitle).subscribe(x => {
            this.resumeTitle = x;
            this.resumeTitle.find(el => {
                if (el.componentName === 'hobbiesInterests') {
                    this.title = el.titleLogo.titleName;
                    this.source = el.titleLogo.src;
                }
            });
        });
    }
    getHobbiesLogos() {
        this.pageService.getDatas(src_app_core_util_data_base__WEBPACK_IMPORTED_MODULE_0__["DataBase"].resumeHobbiesLogos).subscribe(x => {
            this.hobbiesLogos = x;
        });
    }
}
ResumeHobbiesComponent.ɵfac = function ResumeHobbiesComponent_Factory(t) { return new (t || ResumeHobbiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_page_service__WEBPACK_IMPORTED_MODULE_2__["PageService"])); };
ResumeHobbiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResumeHobbiesComponent, selectors: [["app-resume-hobbies"]], inputs: { sectionId: "sectionId" }, decls: 7, vars: 4, consts: [[3, "id"], [1, "container-lg"], [1, "row", "text-center"], [1, "col"], [3, "title", "source"], [1, "row", "mt-3"], [4, "ngFor", "ngForOf"], [1, "col-6", "col-sm-4", "col-md-4", "col-lg-2", "col-xl-2", "text-center", "mb-3"], ["width", "70px", 1, "img-fluid", 3, "src"], [1, "mt-3"]], template: function ResumeHobbiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-resume-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ResumeHobbiesComponent_ng_container_6_Template, 5, 2, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.sectionId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx.title)("source", ctx.source);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.hobbiesLogos);
    } }, directives: [_core_shared_resume_title_resume_title_component__WEBPACK_IMPORTED_MODULE_3__["ResumeTitleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Jlc3VtZS1wYWdlL3Jlc3VtZS1ob2JiaWVzL3Jlc3VtZS1ob2JiaWVzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResumeHobbiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-resume-hobbies',
                templateUrl: './resume-hobbies.component.html',
                styleUrls: ['./resume-hobbies.component.css']
            }]
    }], function () { return [{ type: _page_service__WEBPACK_IMPORTED_MODULE_2__["PageService"] }]; }, { sectionId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/views/resume-page/resume-languages/resume-languages.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/resume-page/resume-languages/resume-languages.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ResumeLanguagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeLanguagesComponent", function() { return ResumeLanguagesComponent; });
/* harmony import */ var src_app_core_util_data_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/util/data-base */ "./src/app/core/util/data-base.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../page.service */ "./src/app/views/page.service.ts");
/* harmony import */ var _core_shared_resume_title_resume_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/shared/resume-title/resume-title.component */ "./src/app/core/shared/resume-title/resume-title.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ResumeLanguagesComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const card_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", card_r34.srcImg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](card_r34.paragraph);
} }
class ResumeLanguagesComponent {
    constructor(pageService) {
        this.pageService = pageService;
    }
    get sectionId() {
        return this._sectionId;
    }
    set sectionId(sectionId) {
        this._sectionId = sectionId;
    }
    ngOnInit() {
        this.getTitleAndLogo();
        this.getResumeCardLanguages();
    }
    getTitleAndLogo() {
        this.pageService.getDatas(src_app_core_util_data_base__WEBPACK_IMPORTED_MODULE_0__["DataBase"].resumeTitle).subscribe(x => {
            this.resumeTitle = x;
            this.resumeTitle.find(el => {
                if (el.componentName === 'languages') {
                    this.title = el.titleLogo.titleName;
                    this.source = el.titleLogo.src;
                }
            });
        });
    }
    getResumeCardLanguages() {
        this.pageService.getDatas(src_app_core_util_data_base__WEBPACK_IMPORTED_MODULE_0__["DataBase"].resumeCardLanguages).subscribe(x => {
            this.cardLanguages = x;
        });
    }
}
ResumeLanguagesComponent.ɵfac = function ResumeLanguagesComponent_Factory(t) { return new (t || ResumeLanguagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_page_service__WEBPACK_IMPORTED_MODULE_2__["PageService"])); };
ResumeLanguagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResumeLanguagesComponent, selectors: [["app-resume-languages"]], inputs: { sectionId: "sectionId" }, decls: 7, vars: 4, consts: [[3, "id"], [1, "container-lg"], [1, "row", "text-center"], [1, "col"], [3, "title", "source"], [1, "row", "text-left", "mt-3"], [4, "ngFor", "ngForOf"], [1, "col-6", "col-sm-6", "col-md-6", "col-lg-3", "col-xl-3"], [1, "card", "text-center", "border-0", "mb-4"], [1, "card-body"], ["width", "70px", 1, "img-fluid", 3, "src"], [1, "text-dark", "card-text", "mt-3"]], template: function ResumeLanguagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-resume-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ResumeLanguagesComponent_ng_container_6_Template, 8, 2, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.sectionId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx.title)("source", ctx.source);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cardLanguages);
    } }, directives: [_core_shared_resume_title_resume_title_component__WEBPACK_IMPORTED_MODULE_3__["ResumeTitleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Jlc3VtZS1wYWdlL3Jlc3VtZS1sYW5ndWFnZXMvcmVzdW1lLWxhbmd1YWdlcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResumeLanguagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-resume-languages',
                templateUrl: './resume-languages.component.html',
                styleUrls: ['./resume-languages.component.css']
            }]
    }], function () { return [{ type: _page_service__WEBPACK_IMPORTED_MODULE_2__["PageService"] }]; }, { sectionId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/views/resume-page/resume-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/resume-page/resume-page.component.ts ***!
  \************************************************************/
/*! exports provided: ResumePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumePageComponent", function() { return ResumePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../side-navbar/side-navbar.component */ "./src/app/views/side-navbar/side-navbar.component.ts");
/* harmony import */ var _resume_profile_resume_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resume-profile/resume-profile.component */ "./src/app/views/resume-page/resume-profile/resume-profile.component.ts");
/* harmony import */ var _resume_profesional_experiences_resume_profesional_experiences_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resume-profesional-experiences/resume-profesional-experiences.component */ "./src/app/views/resume-page/resume-profesional-experiences/resume-profesional-experiences.component.ts");
/* harmony import */ var _resume_courses_trainings_resume_courses_trainings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resume-courses-trainings/resume-courses-trainings.component */ "./src/app/views/resume-page/resume-courses-trainings/resume-courses-trainings.component.ts");
/* harmony import */ var _resume_programming_languages_resume_programming_languages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resume-programming-languages/resume-programming-languages.component */ "./src/app/views/resume-page/resume-programming-languages/resume-programming-languages.component.ts");
/* harmony import */ var _resume_studies_resume_studies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resume-studies/resume-studies.component */ "./src/app/views/resume-page/resume-studies/resume-studies.component.ts");
/* harmony import */ var _resume_languages_resume_languages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resume-languages/resume-languages.component */ "./src/app/views/resume-page/resume-languages/resume-languages.component.ts");
/* harmony import */ var _resume_hobbies_resume_hobbies_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resume-hobbies/resume-hobbies.component */ "./src/app/views/resume-page/resume-hobbies/resume-hobbies.component.ts");
/* harmony import */ var _resume_testimonies_resume_testimonies_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resume-testimonies/resume-testimonies.component */ "./src/app/views/resume-page/resume-testimonies/resume-testimonies.component.ts");











class ResumePageComponent {
    constructor() {
    }
    ngOnInit() { }
}
ResumePageComponent.ɵfac = function ResumePageComponent_Factory(t) { return new (t || ResumePageComponent)(); };
ResumePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumePageComponent, selectors: [["app-resume-page"]], decls: 9, vars: 8, consts: [[3, "routeSelected"], [3, "sectionId"]], template: function ResumePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-side-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-resume-profile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-resume-profesional-experiences", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-resume-courses-trainings", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-resume-programming-languages", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-resume-studies", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-resume-languages", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-resume-hobbies", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-resume-testimonies");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routeSelected", "RESUME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sectionId", "profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sectionId", "profesional-xp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sectionId", "courses-trainings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sectionId", "programming-languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sectionId", "studies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sectionId", "languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sectionId", "hobbies-interests");
    } }, directives: [_side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_1__["SideNavbarComponent"], _resume_profile_resume_profile_component__WEBPACK_IMPORTED_MODULE_2__["ResumeProfileComponent"], _resume_profesional_experiences_resume_profesional_experiences_component__WEBPACK_IMPORTED_MODULE_3__["ResumeProfesionalExperiencesComponent"], _resume_courses_trainings_resume_courses_trainings_component__WEBPACK_IMPORTED_MODULE_4__["ResumeCoursesTrainingsComponent"], _resume_programming_languages_resume_programming_languages_component__WEBPACK_IMPORTED_MODULE_5__["ResumeProgrammingLanguagesComponent"], _resume_studies_resume_studies_component__WEBPACK_IMPORTED_MODULE_6__["ResumeStudiesComponent"], _resume_languages_resume_languages_component__WEBPACK_IMPORTED_MODULE_7__["ResumeLanguagesComponent"], _resume_hobbies_resume_hobbies_component__WEBPACK_IMPORTED_MODULE_8__["ResumeHobbiesComponent"], _resume_testimonies_resume_testimonies_component__WEBPACK_IMPORTED_MODULE_9__["ResumeTestimoniesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Jlc3VtZS1wYWdlL3Jlc3VtZS1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resume-page',
                templateUrl: './resume-page.component.html',
                styleUrls: ['./resume-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/resume-page/resume-profesional-experiences/resume-profesional-experiences.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/views/resume-page/resume-profesional-experiences/resume-profesional-experiences.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ResumeProfesionalExperiencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeProfesionalExperiencesComponent", function() { return ResumeProfesionalExperiencesComponent; });
/* harmony import */ var src_app_core_util_data_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/util/data-base */ "./src/app/core/util/data-base.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../page.service */ "./src/app/views/page.service.ts");
/* harmony import */ var _core_shared_resume_title_resume_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/shared/resume-title/resume-title.component */ "./src/app/core/shared/resume-title/resume-title.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ResumeProfesionalExperiencesComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h6", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const card_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](card_r25.cardClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", card_r25.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](card_r25.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](card_r25.paragraphItalic);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](card_r25.paragraph);
} }
function ResumeProfesionalExperiencesComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h6", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const card_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](card_r26.cardClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", card_r26.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](card_r26.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](card_r26.paragraphItalic);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](card_r26.paragraph);
} }
class ResumeProfesionalExperiencesComponent {
    constructor(pageService) {
        this.pageService = pageService;
    }
    get sectionId() {
        return this._sectionId;
    }
    set sectionId(sectionId) {
        this._sectionId = sectionId;
    }
    ngOnInit() {
        this.getTitleAndLogo();
        this.getCardResumeProfXpColLeft();
        this.getCardResumeProfXpColRight();
    }
    getTitleAndLogo() {
        this.pageService.getDatas(src_app_core_util_data_base__WEBPACK_IMPORTED_MODULE_0__["DataBase"].resumeTitle).subscribe(x => {
            this.resumeTitle = x;
            this.resumeTitle.forEach(el => {
                if (el.componentName === 'profesionalXp') {
                    this.title = el.titleLogo.titleName;
                    this.source = el.titleLogo.src;
                }
            });
        });
    }
    getCardResumeProfXpColLeft() {
        this.pageService.getDatas(src_app_core_util_data_base__WEBPACK_IMPORTED_MODULE_0__["DataBase"].cardResumeProfesionalExperiencesColLeft).subscribe(x => {
            this.cardResumeProfXpColLeft = x;
        });
    }
    getCardResumeProfXpColRight() {
        this.pageService.getDatas(src_app_core_util_data_base__WEBPACK_IMPORTED_MODULE_0__["DataBase"].cardResumeProfesionalExperiencesColRight).subscribe(x => {
            this.cardResumeProfXpColRight = x;
        });
    }
}
ResumeProfesionalExperiencesComponent.ɵfac = function ResumeProfesionalExperiencesComponent_Factory(t) { return new (t || ResumeProfesionalExperiencesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_page_service__WEBPACK_IMPORTED_MODULE_2__["PageService"])); };
ResumeProfesionalExperiencesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResumeProfesionalExperiencesComponent, selectors: [["app-resume-profesional-experiences"]], inputs: { sectionId: "sectionId" }, decls: 11, vars: 5, consts: [[3, "id"], [1, "container-lg"], [1, "row", "text-center"], [1, "col"], [3, "title", "source"], [1, "row", "text-left", "mt-3"], [1, "col-lg-6", "col-xl-6"], [4, "ngFor", "ngForOf"], [1, "card", "d-none", "d-sm-none", "d-md-none", "d-lg-block", "d-xl-block", "border-0", "mb-2", "bg-transparent", 2, "height", "50px"], [1, "card-body"], [1, "float-right", 3, "src"], [1, "text-dark", "card-subtitle", "mb-2"], [1, "card-text"], [1, "text-muted", "card-text"]], template: function ResumeProfesionalExperiencesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-resume-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ResumeProfesionalExperiencesComponent_ng_container_7_Template, 14, 6, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ResumeProfesionalExperiencesComponent_ng_container_10_Template, 14, 6, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.sectionId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx.title)("source", ctx.source);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cardResumeProfXpColLeft);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cardResumeProfXpColRight);
    } }, directives: [_core_shared_resume_title_resume_title_component__WEBPACK_IMPORTED_MODULE_3__["ResumeTitleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".rbi-bg[_ngcontent-%COMP%] {\n  background: #fef201;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcmVzdW1lLXBhZ2UvcmVzdW1lLXByb2Zlc2lvbmFsLWV4cGVyaWVuY2VzL3Jlc3VtZS1wcm9mZXNpb25hbC1leHBlcmllbmNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcmVzdW1lLXBhZ2UvcmVzdW1lLXByb2Zlc2lvbmFsLWV4cGVyaWVuY2VzL3Jlc3VtZS1wcm9mZXNpb25hbC1leHBlcmllbmNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJiaS1iZyB7XG4gIGJhY2tncm91bmQ6ICNmZWYyMDE7XG59XG5cbmltZyB7XG4gIHdpZHRoOiA1MHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResumeProfesionalExperiencesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-resume-profesional-experiences',
                templateUrl: './resume-profesional-experiences.component.html',
                styleUrls: ['./resume-profesional-experiences.component.css']
            }]
    }], function () { return [{ type: _page_service__WEBPACK_IMPORTED_MODULE_2__["PageService"] }]; }, { sectionId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/views/resume-page/resume-profile/resume-profile.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/resume-page/resume-profile/resume-profile.component.ts ***!
  \******************************************************************************/
/*! exports provided: ResumeProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeProfileComponent", function() { return ResumeProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_util_data_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/util/data-base */ "./src/app/core/util/data-base.ts");
/* harmony import */ var _page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../page.service */ "./src/app/views/page.service.ts");
/* harmony import */ var _core_shared_resume_title_resume_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/shared/resume-title/resume-title.component */ "./src/app/core/shared/resume-title/resume-title.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ResumeProfileComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const profileSkill_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](profileSkill_r21.paragraph);
} }
function ResumeProfileComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const profileAvatar_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", profileAvatar_r22.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ResumeProfileComponent {
    constructor(pageService) {
        this.pageService = pageService;
    }
    get sectionId() {
        return this._sectionId;
    }
    set sectionId(sectionId) {
        this._sectionId = sectionId;
    }
    ngOnInit() {
        this.getTitleAndLogo();
        this.getProfileSkills();
        this.getProfileAvatars();
    }
    getTitleAndLogo() {
        this.pageService.getDatas(src_app_core_util_data_base__WEBPACK_IMPORTED_MODULE_1__["DataBase"].resumeTitle).subscribe(x => {
            this.resumeTitle = x;
            this.resumeTitle.find(el => {
                if (el.componentName === 'profile') {
                    this.title = el.titleLogo.titleName;
                    this.source = el.titleLogo.src;
                }
            });
        });
    }
    getProfileSkills() {
        this.pageService.getDatas(src_app_core_util_data_base__WEBPACK_IMPORTED_MODULE_1__["DataBase"].profileSkills).subscribe(x => {
            this.profileSkills = x;
        });
    }
    getProfileAvatars() {
        this.pageService.getDatas(src_app_core_util_data_base__WEBPACK_IMPORTED_MODULE_1__["DataBase"].profileAvatars).subscribe(x => {
            this.profileAvatars = x;
        });
    }
}
ResumeProfileComponent.ɵfac = function ResumeProfileComponent_Factory(t) { return new (t || ResumeProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_page_service__WEBPACK_IMPORTED_MODULE_2__["PageService"])); };
ResumeProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumeProfileComponent, selectors: [["app-resume-profile"]], inputs: { sectionId: "sectionId" }, decls: 15, vars: 5, consts: [[3, "id"], [1, "container-lg"], [1, "row", "text-center"], [1, "col"], [3, "title", "source"], [1, "row", "text-center", "mt-3"], [1, "col-12"], [1, "card", "text-center", "border-0", "bg-transparent"], [1, "card-body"], [1, "text-dark", "card-subtitle", "mb-2"], [1, "card-text"], [4, "ngFor", "ngForOf"], [1, "col-6", "col-sm-6", "col-md-6", "col-lg-3", "col-xl-3"], [1, "card", "text-center", "border-0", "mt-2", "bg-transparent"], [1, "img-fluid", "profile-avatars", 3, "src"]], template: function ResumeProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-resume-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "In Austria since April 2014");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ResumeProfileComponent_ng_container_13_Template, 4, 1, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ResumeProfileComponent_ng_container_14_Template, 5, 1, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.sectionId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("source", ctx.source);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.profileSkills);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.profileAvatars);
    } }, directives: [_core_shared_resume_title_resume_title_component__WEBPACK_IMPORTED_MODULE_3__["ResumeTitleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".profile-avatars[_ngcontent-%COMP%] {\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcmVzdW1lLXBhZ2UvcmVzdW1lLXByb2ZpbGUvcmVzdW1lLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Jlc3VtZS1wYWdlL3Jlc3VtZS1wcm9maWxlL3Jlc3VtZS1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1hdmF0YXJzIHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resume-profile',
                templateUrl: './resume-profile.component.html',
                styleUrls: ['./resume-profile.component.css']
            }]
    }], function () { return [{ type: _page_service__WEBPACK_IMPORTED_MODULE_2__["PageService"] }]; }, { sectionId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/views/resume-page/resume-programming-languages/resume-programming-languages.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/resume-page/resume-programming-languages/resume-programming-languages.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ResumeProgrammingLanguagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeProgrammingLanguagesComponent", function() { return ResumeProgrammingLanguagesComponent; });
/* harmony import */ var src_app_core_util_data_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/util/data-base */ "./src/app/core/util/data-base.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../page.service */ "./src/app/views/page.service.ts");
/* harmony import */ var _core_shared_resume_title_resume_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/shared/resume-title/resume-title.component */ "./src/app/core/shared/resume-title/resume-title.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ResumeProgrammingLanguagesComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const logo_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", logo_r30.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](logo_r30.header);
} }
class ResumeProgrammingLanguagesComponent {
    constructor(pageService) {
        this.pageService = pageService;
    }
    get sectionId() {
        return this._sectionId;
    }
    set sectionId(sectionId) {
        this._sectionId = sectionId;
    }
    ngOnInit() {
        this.getTitleAndLogo();
        this.getLogos();
    }
    getTitleAndLogo() {
        this.pageService.getDatas(src_app_core_util_data_base__WEBPACK_IMPORTED_MODULE_0__["DataBase"].resumeTitle).subscribe(x => {
            this.resumeTitle = x;
            this.resumeTitle.forEach(el => {
                if (el.componentName === 'programmingLanguages') {
                    this.title = el.titleLogo.titleName;
                    this.source = el.titleLogo.src;
                }
            });
        });
    }
    getLogos() {
        this.pageService.getDatas(src_app_core_util_data_base__WEBPACK_IMPORTED_MODULE_0__["DataBase"].programmingLanguagesLogos).subscribe(x => {
            this.logos = x;
        });
    }
}
ResumeProgrammingLanguagesComponent.ɵfac = function ResumeProgrammingLanguagesComponent_Factory(t) { return new (t || ResumeProgrammingLanguagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_page_service__WEBPACK_IMPORTED_MODULE_2__["PageService"])); };
ResumeProgrammingLanguagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResumeProgrammingLanguagesComponent, selectors: [["app-resume-programming-languages"]], inputs: { sectionId: "sectionId" }, decls: 7, vars: 3, consts: [["id", "programming-languages"], [1, "container-lg"], [1, "row", "text-center"], [1, "col"], [3, "title", "source"], [1, "row", "mt-3"], [4, "ngFor", "ngForOf"], [1, "col-6", "col-sm-4", "col-md-4", "col-lg-2", "col-xl-2", "text-center", "mb-5"], ["width", "60px", 1, "img-fluid", 3, "src"], [1, "mt-3"]], template: function ResumeProgrammingLanguagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-resume-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ResumeProgrammingLanguagesComponent_ng_container_6_Template, 5, 2, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx.title)("source", ctx.source);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.logos);
    } }, directives: [_core_shared_resume_title_resume_title_component__WEBPACK_IMPORTED_MODULE_3__["ResumeTitleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Jlc3VtZS1wYWdlL3Jlc3VtZS1wcm9ncmFtbWluZy1sYW5ndWFnZXMvcmVzdW1lLXByb2dyYW1taW5nLWxhbmd1YWdlcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResumeProgrammingLanguagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-resume-programming-languages',
                templateUrl: './resume-programming-languages.component.html',
                styleUrls: ['./resume-programming-languages.component.css']
            }]
    }], function () { return [{ type: _page_service__WEBPACK_IMPORTED_MODULE_2__["PageService"] }]; }, { sectionId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/views/resume-page/resume-studies/resume-studies.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/resume-page/resume-studies/resume-studies.component.ts ***!
  \******************************************************************************/
/*! exports provided: ResumeStudiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeStudiesComponent", function() { return ResumeStudiesComponent; });
/* harmony import */ var _core_util_data_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../core/util/data-base */ "./src/app/core/util/data-base.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../page.service */ "./src/app/views/page.service.ts");
/* harmony import */ var _core_shared_resume_title_resume_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/shared/resume-title/resume-title.component */ "./src/app/core/shared/resume-title/resume-title.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ResumeStudiesComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h6", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const card_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", card_r32.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](card_r32.headerTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](card_r32.paragraphOne);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](card_r32.paragraphTwo);
} }
class ResumeStudiesComponent {
    constructor(pageService) {
        this.pageService = pageService;
    }
    get sectionId() {
        return this._sectionId;
    }
    set sectionId(sectionId) {
        this._sectionId = sectionId;
    }
    ngOnInit() {
        this.getTitleAndLogo();
        this.getResumeCardStudies();
    }
    getTitleAndLogo() {
        this.pageService.getDatas(_core_util_data_base__WEBPACK_IMPORTED_MODULE_0__["DataBase"].resumeTitle).subscribe(x => {
            this.resumeTitle = x;
            this.resumeTitle.forEach(el => {
                if (el.componentName === 'studies') {
                    this.title = el.titleLogo.titleName;
                    this.source = el.titleLogo.src;
                }
            });
        });
    }
    getResumeCardStudies() {
        this.pageService.getDatas(_core_util_data_base__WEBPACK_IMPORTED_MODULE_0__["DataBase"].resumeCardStudies).subscribe(x => {
            this.resumeCardStudies = x;
        });
    }
}
ResumeStudiesComponent.ɵfac = function ResumeStudiesComponent_Factory(t) { return new (t || ResumeStudiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_page_service__WEBPACK_IMPORTED_MODULE_2__["PageService"])); };
ResumeStudiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResumeStudiesComponent, selectors: [["app-resume-studies"]], inputs: { sectionId: "sectionId" }, decls: 7, vars: 3, consts: [["id", "studies"], [1, "container-lg"], [1, "row", "text-center"], [1, "col"], [3, "title", "source"], [1, "row", "text-left", "mt-3"], [4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-6", "col-xl-6"], [1, "card", "text-left", "border-0", "shadow", "mb-4"], [1, "card-body"], ["width", "50px", 1, "float-right", 3, "src"], [1, "text-dark", "card-subtitle", "mb-2"], [1, "card-text"], [1, "text-muted", "card-text"]], template: function ResumeStudiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-resume-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ResumeStudiesComponent_ng_container_6_Template, 16, 4, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx.title)("source", ctx.source);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.resumeCardStudies);
    } }, directives: [_core_shared_resume_title_resume_title_component__WEBPACK_IMPORTED_MODULE_3__["ResumeTitleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Jlc3VtZS1wYWdlL3Jlc3VtZS1zdHVkaWVzL3Jlc3VtZS1zdHVkaWVzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResumeStudiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-resume-studies',
                templateUrl: './resume-studies.component.html',
                styleUrls: ['./resume-studies.component.css']
            }]
    }], function () { return [{ type: _page_service__WEBPACK_IMPORTED_MODULE_2__["PageService"] }]; }, { sectionId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/views/resume-page/resume-testimonies/resume-testimonies.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/views/resume-page/resume-testimonies/resume-testimonies.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ResumeTestimoniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeTestimoniesComponent", function() { return ResumeTestimoniesComponent; });
/* harmony import */ var _core_util_data_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../core/util/data-base */ "./src/app/core/util/data-base.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../page.service */ "./src/app/views/page.service.ts");
/* harmony import */ var _core_shared_resume_title_resume_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/shared/resume-title/resume-title.component */ "./src/app/core/shared/resume-title/resume-title.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ResumeTestimoniesComponent_ng_container_23_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "LinkedIn");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const card_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", card_r38.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ResumeTestimoniesComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h6", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ResumeTestimoniesComponent_ng_container_23_ng_container_16_Template, 3, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const card_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", card_r38.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](card_r38.headerTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](card_r38.paragraphOne);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\"", card_r38.paragraphTwo, "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", card_r38.link);
} }
class ResumeTestimoniesComponent {
    constructor(pageService) {
        this.pageService = pageService;
    }
    get sectionId() {
        return this._sectionId;
    }
    set sectionId(sectionId) {
        this._sectionId = sectionId;
    }
    ngOnInit() {
        this.getTitleAndLogo();
        this.getCardResumeTestimonies();
    }
    getTitleAndLogo() {
        this.pageService.getDatas(_core_util_data_base__WEBPACK_IMPORTED_MODULE_0__["DataBase"].resumeTitle).subscribe(x => {
            this.resumeTitle = x;
            this.resumeTitle.find(el => {
                if (el.componentName === 'testimonies') {
                    this.title = el.titleLogo.titleName;
                    this.source = el.titleLogo.src;
                }
            });
        });
    }
    getCardResumeTestimonies() {
        this.pageService.getDatas(_core_util_data_base__WEBPACK_IMPORTED_MODULE_0__["DataBase"].resumeCardTestimonies).subscribe(x => {
            this.resumeCardTestimonies = x;
        });
    }
}
ResumeTestimoniesComponent.ɵfac = function ResumeTestimoniesComponent_Factory(t) { return new (t || ResumeTestimoniesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_page_service__WEBPACK_IMPORTED_MODULE_2__["PageService"])); };
ResumeTestimoniesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResumeTestimoniesComponent, selectors: [["app-resume-testimonies"]], inputs: { sectionId: "sectionId" }, decls: 24, vars: 5, consts: [["id", "testimonies"], [1, "container-lg"], [1, "row", "text-center"], [1, "col"], [3, "title", "source"], [1, "row", "text-left", "mt-3"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-6", "col-xl-6", "mb-4"], [1, "card", "text-left", "border-0", "shadow", "mb-4", "card-resume-testimonies"], [1, "card-body"], ["width", "60px", 1, "border", "rounded-circle", "float-right", "border-0", "shadow", 3, "src"], [1, "text-dark", "card-subtitle", "mb-2"], [1, "card-text"], [1, "text-muted", "card-text"], ["target", "_blank", "rel", "noopener noreferrer", 1, "card-link", 3, "href"], [4, "ngFor", "ngForOf"], [1, "card", "text-left", "border-0", "shadow", "card-resume-testimonies"], ["width", "100px", 1, "border", "rounded-circle", "float-right", "border-0", "shadow", 3, "src"], [4, "ngIf"]], template: function ResumeTestimoniesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-resume-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Nathalie K\u00F6ck");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Learning Program Manager - Talent Garden Innovation School Vienna");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " With great pleasure we received the application of Mr. Jeremy Bertin for our 3-month full-time CodeMaster Bootcamp at the Talent Garden Innovation School and we accepted him to join the next class for different reasons. First of all, Mr. Bertin showed huge motivation during the personal application interview and he convinced me of his determination and his desire to become a programmer. Motivation and ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Read the recommandation letter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ResumeTestimoniesComponent_ng_container_23_Template, 17, 5, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx.title)("source", ctx.source);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "../../../../assets/images/TAG.logo.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "../../../../assets/docs/Recommendation Letter for Jeremy Bertin_english.pdf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.resumeCardTestimonies);
    } }, directives: [_core_shared_resume_title_resume_title_component__WEBPACK_IMPORTED_MODULE_3__["ResumeTitleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".card-resume-testimonies[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcmVzdW1lLXBhZ2UvcmVzdW1lLXRlc3RpbW9uaWVzL3Jlc3VtZS10ZXN0aW1vbmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcmVzdW1lLXBhZ2UvcmVzdW1lLXRlc3RpbW9uaWVzL3Jlc3VtZS10ZXN0aW1vbmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtcmVzdW1lLXRlc3RpbW9uaWVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResumeTestimoniesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-resume-testimonies',
                templateUrl: './resume-testimonies.component.html',
                styleUrls: ['./resume-testimonies.component.css']
            }]
    }], function () { return [{ type: _page_service__WEBPACK_IMPORTED_MODULE_2__["PageService"] }]; }, { sectionId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/views/side-navbar/side-navbar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/side-navbar/side-navbar.component.ts ***!
  \************************************************************/
/*! exports provided: SideNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavbarComponent", function() { return SideNavbarComponent; });
/* harmony import */ var src_app_core_util_data_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/util/data-base */ "./src/app/core/util/data-base.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_util_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/util/constants */ "./src/app/core/util/constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _page_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../page.service */ "./src/app/views/page.service.ts");







function SideNavbarComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SideNavbarComponent_ng_container_12_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.onClickGoToPage("RESUME"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Resume");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function SideNavbarComponent_ng_container_13_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SideNavbarComponent_ng_container_13_ng_container_4_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const link_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r15.onClickScroll(link_r14.sectionId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const link_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](link_r14.linkName);
} }
function SideNavbarComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SideNavbarComponent_ng_container_13_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.onClickGoToPage("PROJECT"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SideNavbarComponent_ng_container_13_ng_container_4_Template, 4, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r10.linksSideNavbar);
} }
class SideNavbarComponent {
    constructor(router, viewportScroller, pageService) {
        this.router = router;
        this.viewportScroller = viewportScroller;
        this.pageService = pageService;
    }
    get routeSelected() {
        return this._routeSelected;
    }
    set routeSelected(routeSelected) {
        this._routeSelected = routeSelected;
    }
    ngOnInit() {
        this.getLinks();
    }
    getLinks() {
        this.pageService.getDatas(src_app_core_util_data_base__WEBPACK_IMPORTED_MODULE_0__["DataBase"].linksSideNavbar).subscribe(x => {
            this.linksSideNavbar = x;
        });
    }
    onClickGoToPage(routeSelected) {
        if (routeSelected === src_app_core_util_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].ROUTE_RESUME) {
            this.router.navigate(['resume']);
        }
        if (routeSelected === src_app_core_util_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].ROUTE_PROJECT) {
            this.router.navigate(['']);
        }
    }
    onClickScroll(sectionId) {
        this.viewportScroller.scrollToAnchor(sectionId);
    }
}
SideNavbarComponent.ɵfac = function SideNavbarComponent_Factory(t) { return new (t || SideNavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["ViewportScroller"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_page_service__WEBPACK_IMPORTED_MODULE_5__["PageService"])); };
SideNavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SideNavbarComponent, selectors: [["app-side-navbar"]], inputs: { routeSelected: "routeSelected" }, decls: 14, vars: 2, consts: [["data-right-drawer", "0", "data-open-drawer", "1", 1, "navbar", "navbar-dark", "fixed-top", "bg-dark", "off-canvas"], [1, "container-fluid", "flex-column"], ["type", "button", "data-open", "drawer", 1, "btn", "btn-dark", "drawer-knob"], [1, "fas", "fa-bars"], [1, "d-flex", "justify-content-between", "brand-line"], ["href", "#", 1, "navbar-brand", "mb-2"], ["type", "button", "data-dismiss", "drawer", 1, "btn", "btn-dark"], [1, "sr-only"], [1, "fas", "fa-times"], [1, "nav", "navbar-nav", "flex-column", "drawer-menu"], [4, "ngIf"], [1, "nav-item", "mb-2"], [1, "nav-link", "active", 3, "click"], [4, "ngFor", "ngForOf"], [1, "nav-link", 3, "click"]], template: function SideNavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Jeremy Bertin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Toggle Navigation\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SideNavbarComponent_ng_container_12_Template, 4, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SideNavbarComponent_ng_container_13_Template, 5, 1, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.routeSelected === "PROJECT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.routeSelected === "RESUME");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".navbar.fixed-top.off-canvas[_ngcontent-%COMP%] {\n  bottom: 0;\n  right: auto;\n  transition: transform 0.3s ease-in-out;\n  transform: translateX(-100%);\n  z-index: 999999999999;\n}\n\n.navbar.fixed-top.off-canvas[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%], .navbar.fixed-top.off-canvas[_ngcontent-%COMP%]   .brand-line[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.nav.navbar-nav.drawer-menu[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  flex: 1 1 auto;\n  height: 0px;\n  flex-wrap: nowrap;\n}\n\n.navbar.fixed-top.off-canvas[_ngcontent-%COMP%]    > div[class*='container-'][_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  padding-right: 0;\n  padding-left: 0;\n  height: 100%;\n  align-content: space-between;\n}\n\n.navbar.fixed-top.off-canvas[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.navbar.fixed-top.off-canvas[data-right-drawer='1'][_ngcontent-%COMP%], .navbar.fixed-top.off-canvas.right-drawer[_ngcontent-%COMP%] {\n  right: 0;\n  left: auto;\n  transform: translateX(100%);\n}\n\n.navbar.fixed-top.off-canvas[data-open-drawer='1'][_ngcontent-%COMP%], .navbar.fixed-top.off-canvas.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n\n.navbar.fixed-top.off-canvas.navbar-expand[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n\n.navbar.fixed-top.off-canvas.navbar-expand[_ngcontent-%COMP%]   .drawer-knob[_ngcontent-%COMP%], .navbar.fixed-top.off-canvas.navbar-expand[_ngcontent-%COMP%]   button[data-dismiss='drawer'][_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (min-width: 576px) {\n  .navbar.fixed-top.off-canvas.navbar-expand-sm[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n}\n\n@media (min-width: 576px) {\n  .navbar.fixed-top.off-canvas.navbar-expand-sm[_ngcontent-%COMP%]   .drawer-knob[_ngcontent-%COMP%], .navbar.fixed-top.off-canvas.navbar-expand-sm[_ngcontent-%COMP%]   button[data-dismiss='drawer'][_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar.fixed-top.off-canvas.navbar-expand-md[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar.fixed-top.off-canvas.navbar-expand-md[_ngcontent-%COMP%]   .drawer-knob[_ngcontent-%COMP%], .navbar.fixed-top.off-canvas.navbar-expand-md[_ngcontent-%COMP%]   button[data-dismiss='drawer'][_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (min-width: 992px) {\n  .navbar.fixed-top.off-canvas.navbar-expand-lg[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n}\n\n@media (min-width: 992px) {\n  .navbar.fixed-top.off-canvas.navbar-expand-lg[_ngcontent-%COMP%]   .drawer-knob[_ngcontent-%COMP%], .navbar.fixed-top.off-canvas.navbar-expand-lg[_ngcontent-%COMP%]   button[data-dismiss='drawer'][_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (min-width: 1200px) {\n  .navbar.fixed-top.off-canvas.navbar-expand-xl[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n}\n\n@media (min-width: 1200px) {\n  .navbar.fixed-top.off-canvas.navbar-expand-xl[_ngcontent-%COMP%]   .drawer-knob[_ngcontent-%COMP%], .navbar.fixed-top.off-canvas.navbar-expand-xl[_ngcontent-%COMP%]   button[data-dismiss='drawer'][_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.navbar.fixed-top.off-canvas[_ngcontent-%COMP%]   .drawer-knob[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: -36px;\n}\n\n.navbar.fixed-top.off-canvas[data-open-drawer='1'][_ngcontent-%COMP%]   .drawer-knob[_ngcontent-%COMP%], .navbar.fixed-top.off-canvas.open[_ngcontent-%COMP%]   .drawer-knob[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.navbar.fixed-top.off-canvas[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media (min-width: 576px) {\n  .navbar.fixed-top.off-canvas[_ngcontent-%COMP%] {\n    width: 280px;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar.fixed-top.off-canvas[_ngcontent-%COMP%] {\n    width: 220px;\n  }\n}\n\n@media (min-width: 992px) {\n  .navbar.fixed-top.off-canvas[_ngcontent-%COMP%] {\n    width: 220px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .navbar.fixed-top.off-canvas[_ngcontent-%COMP%] {\n    width: 260px;\n  }\n}\n\n.drawer-push.drawer-expand[_ngcontent-%COMP%]    > .drawer-site[_ngcontent-%COMP%], .drawer-push.open[_ngcontent-%COMP%]    > .drawer-site[_ngcontent-%COMP%] {\n  margin-left: 100%;\n}\n\n@media (min-width: 576px) {\n  .drawer-push.drawer-expand[_ngcontent-%COMP%]    > .drawer-site[_ngcontent-%COMP%], .drawer-push.drawer-expand-sm[_ngcontent-%COMP%]    > .drawer-site[_ngcontent-%COMP%], .drawer-push.open[_ngcontent-%COMP%]    > .drawer-site[_ngcontent-%COMP%] {\n    margin-left: 280px;\n  }\n}\n\n@media (min-width: 768px) {\n  .drawer-push.drawer-expand[_ngcontent-%COMP%]    > .drawer-site[_ngcontent-%COMP%], .drawer-push.drawer-expand-sm[_ngcontent-%COMP%]    > .drawer-site[_ngcontent-%COMP%], .drawer-push.drawer-expand-md[_ngcontent-%COMP%]    > .drawer-site[_ngcontent-%COMP%], .drawer-push.open[_ngcontent-%COMP%]    > .drawer-site[_ngcontent-%COMP%] {\n    margin-left: 220px;\n  }\n}\n\n@media (min-width: 992px) {\n  .drawer-push.drawer-expand[_ngcontent-%COMP%]    > .drawer-site[_ngcontent-%COMP%], .drawer-push.drawer-expand-sm[_ngcontent-%COMP%]    > .drawer-site[_ngcontent-%COMP%], .drawer-push.drawer-expand-md[_ngcontent-%COMP%]    > .drawer-site[_ngcontent-%COMP%], .drawer-push.drawer-expand-lg[_ngcontent-%COMP%]    > .drawer-site[_ngcontent-%COMP%], .drawer-push.open[_ngcontent-%COMP%]    > .drawer-site[_ngcontent-%COMP%] {\n    margin-left: 220px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .drawer-push.drawer-expand[_ngcontent-%COMP%]    > .drawer-site[_ngcontent-%COMP%], .drawer-push.drawer-expand-sm[_ngcontent-%COMP%]    > .drawer-site[_ngcontent-%COMP%], .drawer-push.drawer-expand-md[_ngcontent-%COMP%]    > .drawer-site[_ngcontent-%COMP%], .drawer-push.drawer-expand-lg[_ngcontent-%COMP%]    > .drawer-site[_ngcontent-%COMP%], .drawer-push.drawer-expand-xl[_ngcontent-%COMP%]    > .drawer-site[_ngcontent-%COMP%], .drawer-push.open[_ngcontent-%COMP%]    > .drawer-site[_ngcontent-%COMP%] {\n    margin-left: 260px;\n  }\n}\n\n.drawer-slide[_ngcontent-%COMP%] {\n  position: relative;\n  overflow-x: hidden;\n}\n\n.drawer-slide[_ngcontent-%COMP%]    > .drawer-site[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease-in-out;\n}\n\n.drawer-slide.open[_ngcontent-%COMP%]    > .drawer-site[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n}\n\n@media (min-width: 576px) {\n  .drawer-slide.open[_ngcontent-%COMP%]    > .drawer-site[_ngcontent-%COMP%] {\n    transform: translateX(280px);\n  }\n}\n\n@media (min-width: 768px) {\n  .drawer-slide.open[_ngcontent-%COMP%]    > .drawer-site[_ngcontent-%COMP%] {\n    transform: translateX(220px);\n  }\n}\n\n@media (min-width: 992px) {\n  .drawer-slide.open[_ngcontent-%COMP%]    > .drawer-site[_ngcontent-%COMP%] {\n    transform: translateX(220px);\n  }\n}\n\n@media (min-width: 1200px) {\n  .drawer-slide.open[_ngcontent-%COMP%]    > .drawer-site[_ngcontent-%COMP%] {\n    transform: translateX(260px);\n  }\n}\n\nbody[_ngcontent-%COMP%]    > div.drawer-fade[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 0;\n  transition: opacity 0.3s linear;\n  background-color: #000000;\n  opacity: 0;\n  z-index: 99999999999;\n}\n\nbody.drawer-open[_ngcontent-%COMP%]    > div.drawer-fade[_ngcontent-%COMP%] {\n  width: 100%;\n  opacity: 0.6;\n}\n\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc2lkZS1uYXZiYXIvc2lkZS1uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxXQUFXO0VBQ1gsc0NBQTBFO0VBRTFFLDRCQUE0QjtFQUM1QixxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxXQUFXO0VBRVgsaUJBQWlCO0FBQ25COztBQUVBO0VBRUUsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtFQUNaLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLFFBQVE7RUFDUixVQUFVO0VBRVYsMkJBQTJCO0FBQzdCOztBQUVBOztFQUdFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUVFLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUVFLHdCQUF3QjtFQUMxQjtBQUNGOztBQUVBO0VBQ0U7O0lBRUUsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUVFLHdCQUF3QjtFQUMxQjtBQUNGOztBQUVBO0VBQ0U7O0lBRUUsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUVFLHdCQUF3QjtFQUMxQjtBQUNGOztBQUVBO0VBQ0U7O0lBRUUsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUVFLHdCQUF3QjtFQUMxQjtBQUNGOztBQUVBO0VBQ0U7O0lBRUUsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBOztFQUVFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFOzs7SUFHRSxrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFOzs7O0lBSUUsa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRTs7Ozs7SUFLRSxrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFOzs7Ozs7SUFNRSxrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQ0FBMEU7QUFDNUU7O0FBRUE7RUFFRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRTtJQUVFLDRCQUE0QjtFQUM5QjtBQUNGOztBQUVBO0VBQ0U7SUFFRSw0QkFBNEI7RUFDOUI7QUFDRjs7QUFFQTtFQUNFO0lBRUUsNEJBQTRCO0VBQzlCO0FBQ0Y7O0FBRUE7RUFDRTtJQUVFLDRCQUE0QjtFQUM5QjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFFBQVE7RUFDUiwrQkFBK0I7RUFDL0IseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3NpZGUtbmF2YmFyL3NpZGUtbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLmZpeGVkLXRvcC5vZmYtY2FudmFzIHtcbiAgYm90dG9tOiAwO1xuICByaWdodDogYXV0bztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgei1pbmRleDogOTk5OTk5OTk5OTk5O1xufVxuXG4ubmF2YmFyLmZpeGVkLXRvcC5vZmYtY2FudmFzIC5uYXYsXG4ubmF2YmFyLmZpeGVkLXRvcC5vZmYtY2FudmFzIC5icmFuZC1saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uYXYubmF2YmFyLW5hdi5kcmF3ZXItbWVudSB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBoZWlnaHQ6IDBweDtcbiAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cblxuLm5hdmJhci5maXhlZC10b3Aub2ZmLWNhbnZhcyA+IGRpdltjbGFzcyo9J2NvbnRhaW5lci0nXSB7XG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5uYXZiYXIuZml4ZWQtdG9wLm9mZi1jYW52YXMgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4ubmF2YmFyLmZpeGVkLXRvcC5vZmYtY2FudmFzW2RhdGEtcmlnaHQtZHJhd2VyPScxJ10sXG4ubmF2YmFyLmZpeGVkLXRvcC5vZmYtY2FudmFzLnJpZ2h0LWRyYXdlciB7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiBhdXRvO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xufVxuXG4ubmF2YmFyLmZpeGVkLXRvcC5vZmYtY2FudmFzW2RhdGEtb3Blbi1kcmF3ZXI9JzEnXSxcbi5uYXZiYXIuZml4ZWQtdG9wLm9mZi1jYW52YXMub3BlbiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG5cbi5uYXZiYXIuZml4ZWQtdG9wLm9mZi1jYW52YXMubmF2YmFyLWV4cGFuZCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG5cbi5uYXZiYXIuZml4ZWQtdG9wLm9mZi1jYW52YXMubmF2YmFyLWV4cGFuZCAuZHJhd2VyLWtub2IsXG4ubmF2YmFyLmZpeGVkLXRvcC5vZmYtY2FudmFzLm5hdmJhci1leHBhbmQgYnV0dG9uW2RhdGEtZGlzbWlzcz0nZHJhd2VyJ10ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLm5hdmJhci5maXhlZC10b3Aub2ZmLWNhbnZhcy5uYXZiYXItZXhwYW5kLXNtIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5uYXZiYXIuZml4ZWQtdG9wLm9mZi1jYW52YXMubmF2YmFyLWV4cGFuZC1zbSAuZHJhd2VyLWtub2IsXG4gIC5uYXZiYXIuZml4ZWQtdG9wLm9mZi1jYW52YXMubmF2YmFyLWV4cGFuZC1zbSBidXR0b25bZGF0YS1kaXNtaXNzPSdkcmF3ZXInXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmJhci5maXhlZC10b3Aub2ZmLWNhbnZhcy5uYXZiYXItZXhwYW5kLW1kIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5uYXZiYXIuZml4ZWQtdG9wLm9mZi1jYW52YXMubmF2YmFyLWV4cGFuZC1tZCAuZHJhd2VyLWtub2IsXG4gIC5uYXZiYXIuZml4ZWQtdG9wLm9mZi1jYW52YXMubmF2YmFyLWV4cGFuZC1tZCBidXR0b25bZGF0YS1kaXNtaXNzPSdkcmF3ZXInXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLm5hdmJhci5maXhlZC10b3Aub2ZmLWNhbnZhcy5uYXZiYXItZXhwYW5kLWxnIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5uYXZiYXIuZml4ZWQtdG9wLm9mZi1jYW52YXMubmF2YmFyLWV4cGFuZC1sZyAuZHJhd2VyLWtub2IsXG4gIC5uYXZiYXIuZml4ZWQtdG9wLm9mZi1jYW52YXMubmF2YmFyLWV4cGFuZC1sZyBidXR0b25bZGF0YS1kaXNtaXNzPSdkcmF3ZXInXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5uYXZiYXIuZml4ZWQtdG9wLm9mZi1jYW52YXMubmF2YmFyLWV4cGFuZC14bCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLm5hdmJhci5maXhlZC10b3Aub2ZmLWNhbnZhcy5uYXZiYXItZXhwYW5kLXhsIC5kcmF3ZXIta25vYixcbiAgLm5hdmJhci5maXhlZC10b3Aub2ZmLWNhbnZhcy5uYXZiYXItZXhwYW5kLXhsIGJ1dHRvbltkYXRhLWRpc21pc3M9J2RyYXdlciddIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5uYXZiYXIuZml4ZWQtdG9wLm9mZi1jYW52YXMgLmRyYXdlci1rbm9iIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAtMzZweDtcbn1cblxuLm5hdmJhci5maXhlZC10b3Aub2ZmLWNhbnZhc1tkYXRhLW9wZW4tZHJhd2VyPScxJ10gLmRyYXdlci1rbm9iLFxuLm5hdmJhci5maXhlZC10b3Aub2ZmLWNhbnZhcy5vcGVuIC5kcmF3ZXIta25vYiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5uYXZiYXIuZml4ZWQtdG9wLm9mZi1jYW52YXMge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5uYXZiYXIuZml4ZWQtdG9wLm9mZi1jYW52YXMge1xuICAgIHdpZHRoOiAyODBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmJhci5maXhlZC10b3Aub2ZmLWNhbnZhcyB7XG4gICAgd2lkdGg6IDIyMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAubmF2YmFyLmZpeGVkLXRvcC5vZmYtY2FudmFzIHtcbiAgICB3aWR0aDogMjIwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAubmF2YmFyLmZpeGVkLXRvcC5vZmYtY2FudmFzIHtcbiAgICB3aWR0aDogMjYwcHg7XG4gIH1cbn1cblxuLmRyYXdlci1wdXNoLmRyYXdlci1leHBhbmQgPiAuZHJhd2VyLXNpdGUsXG4uZHJhd2VyLXB1c2gub3BlbiA+IC5kcmF3ZXItc2l0ZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMDAlO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmRyYXdlci1wdXNoLmRyYXdlci1leHBhbmQgPiAuZHJhd2VyLXNpdGUsXG4gIC5kcmF3ZXItcHVzaC5kcmF3ZXItZXhwYW5kLXNtID4gLmRyYXdlci1zaXRlLFxuICAuZHJhd2VyLXB1c2gub3BlbiA+IC5kcmF3ZXItc2l0ZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDI4MHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZHJhd2VyLXB1c2guZHJhd2VyLWV4cGFuZCA+IC5kcmF3ZXItc2l0ZSxcbiAgLmRyYXdlci1wdXNoLmRyYXdlci1leHBhbmQtc20gPiAuZHJhd2VyLXNpdGUsXG4gIC5kcmF3ZXItcHVzaC5kcmF3ZXItZXhwYW5kLW1kID4gLmRyYXdlci1zaXRlLFxuICAuZHJhd2VyLXB1c2gub3BlbiA+IC5kcmF3ZXItc2l0ZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIyMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuZHJhd2VyLXB1c2guZHJhd2VyLWV4cGFuZCA+IC5kcmF3ZXItc2l0ZSxcbiAgLmRyYXdlci1wdXNoLmRyYXdlci1leHBhbmQtc20gPiAuZHJhd2VyLXNpdGUsXG4gIC5kcmF3ZXItcHVzaC5kcmF3ZXItZXhwYW5kLW1kID4gLmRyYXdlci1zaXRlLFxuICAuZHJhd2VyLXB1c2guZHJhd2VyLWV4cGFuZC1sZyA+IC5kcmF3ZXItc2l0ZSxcbiAgLmRyYXdlci1wdXNoLm9wZW4gPiAuZHJhd2VyLXNpdGUge1xuICAgIG1hcmdpbi1sZWZ0OiAyMjBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5kcmF3ZXItcHVzaC5kcmF3ZXItZXhwYW5kID4gLmRyYXdlci1zaXRlLFxuICAuZHJhd2VyLXB1c2guZHJhd2VyLWV4cGFuZC1zbSA+IC5kcmF3ZXItc2l0ZSxcbiAgLmRyYXdlci1wdXNoLmRyYXdlci1leHBhbmQtbWQgPiAuZHJhd2VyLXNpdGUsXG4gIC5kcmF3ZXItcHVzaC5kcmF3ZXItZXhwYW5kLWxnID4gLmRyYXdlci1zaXRlLFxuICAuZHJhd2VyLXB1c2guZHJhd2VyLWV4cGFuZC14bCA+IC5kcmF3ZXItc2l0ZSxcbiAgLmRyYXdlci1wdXNoLm9wZW4gPiAuZHJhd2VyLXNpdGUge1xuICAgIG1hcmdpbi1sZWZ0OiAyNjBweDtcbiAgfVxufVxuXG4uZHJhd2VyLXNsaWRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5kcmF3ZXItc2xpZGUgPiAuZHJhd2VyLXNpdGUge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmRyYXdlci1zbGlkZS5vcGVuID4gLmRyYXdlci1zaXRlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5kcmF3ZXItc2xpZGUub3BlbiA+IC5kcmF3ZXItc2l0ZSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjgwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyODBweCk7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5kcmF3ZXItc2xpZGUub3BlbiA+IC5kcmF3ZXItc2l0ZSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjIwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMjBweCk7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5kcmF3ZXItc2xpZGUub3BlbiA+IC5kcmF3ZXItc2l0ZSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjIwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMjBweCk7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuZHJhd2VyLXNsaWRlLm9wZW4gPiAuZHJhd2VyLXNpdGUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2MHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjYwcHgpO1xuICB9XG59XG5cbmJvZHkgPiBkaXYuZHJhd2VyLWZhZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGxpbmVhcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogOTk5OTk5OTk5OTk7XG59XG5cbmJvZHkuZHJhd2VyLW9wZW4gPiBkaXYuZHJhd2VyLWZhZGUge1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMC42O1xufVxuXG5hIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SideNavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-side-navbar',
                templateUrl: './side-navbar.component.html',
                styleUrls: ['./side-navbar.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["ViewportScroller"] }, { type: _page_service__WEBPACK_IMPORTED_MODULE_5__["PageService"] }]; }, { routeSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nineteeneighty/Desktop/web development/portfolio-cv-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map