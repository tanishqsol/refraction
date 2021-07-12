(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tanishqsolanki/Documents/refraction/src/main.ts */"zUnb");


/***/ }),

/***/ "0SQV":
/*!**************************************************************!*\
  !*** ./src/app/refraction-page/refraction-page.component.ts ***!
  \**************************************************************/
/*! exports provided: RefractionPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefractionPageComponent", function() { return RefractionPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-service.service */ "xf3R");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");







function RefractionPageComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RefractionPageComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/refraction/stationPage"]; };
class RefractionPageComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
        this.showLogin = true;
        this.showLogout = true;
    }
}
RefractionPageComponent.ɵfac = function RefractionPageComponent_Factory(t) { return new (t || RefractionPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"])); };
RefractionPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RefractionPageComponent, selectors: [["app-refraction-page"]], decls: 23, vars: 3, consts: [["class", "toolbar-buttons", "mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], [1, "refraction-topbar"], [1, "refraction-heading"], [1, "main-container"], [1, "refraction-text"], ["routerLinkActive", "router-link-active", 1, "start-practice", 3, "routerLink"], [1, "practice-button"], ["mat-raised-button", "", "color", "primary", 1, "toolbar-buttons", 3, "click"]], template: function RefractionPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RefractionPageComponent_button_1_Template, 2, 0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Refraction Certificate Examination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Stephenson Way, London NW1 2HD \u2022 Registered Charity Number 299872 in England and Wales SCO45652 in Scotland The Refraction Certificate Examination is made up of five ten 10 minute OSCE stations. In each station candidates input their calculated answers using an application on an iPad.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " In order to make the examination as straight forward as possible we have produced a practice application so that you can familiarise yourself with it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Please note the running timer for each station which automatically shuts off after ten minutes. Any information you have entered is automatically saved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " If you are using an iPad for this practice test remember to turn it into portrait mode before the test starts. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Start Practice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLogout);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: [".refraction-topbar[_ngcontent-%COMP%]{\n    padding:1vh;\n    margin-top:0.3vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    color: white;\n    background-color:rgb(19, 19, 82)\n}\n.main-container[_ngcontent-%COMP%]{\n    display: flex;\n    align-items:center;\n    height: 100%;\n    width: 100%;\n    justify-content:center;\n    flex-direction: row;\n\n\n}\n.refraction-text[_ngcontent-%COMP%]{\n    width: 50%;\n    height: 50%;\n    flex-wrap: wrap;\n    \n}\n.start-practice[_ngcontent-%COMP%]{\n    display: flex;\n    background-color: rgba(0, 128, 128, 0.267);\n    margin-left: 5vw;\n    justify-content: center;\n    border: 1px solid blue;\n    color: rgb(14, 14, 148);\n    width: 14vw;\n    height:12vh;\n    align-items: center;\n    cursor: pointer;\n}\n.start-practice[_ngcontent-%COMP%]:hover{\n    background-color: darkorange;\n}\n.mat-toolbar[_ngcontent-%COMP%]{\n    background-color: #4777B2;\n\n}\n.toolbar-buttons[_ngcontent-%COMP%]{\n    margin : 0 2vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVmcmFjdGlvbi1wYWdlL3JlZnJhY3Rpb24tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaO0FBQ0o7QUFDQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsbUJBQW1COzs7QUFHdkI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZTs7QUFFbkI7QUFDQTtJQUNJLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0kseUJBQXlCOztBQUU3QjtBQUNBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3JlZnJhY3Rpb24tcGFnZS9yZWZyYWN0aW9uLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWZyYWN0aW9uLXRvcGJhcntcbiAgICBwYWRkaW5nOjF2aDtcbiAgICBtYXJnaW4tdG9wOjAuM3ZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTksIDE5LCA4Milcbn1cbi5tYWluLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG5cbn1cbi5yZWZyYWN0aW9uLXRleHR7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgXG59XG4uc3RhcnQtcHJhY3RpY2V7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyOCwgMTI4LCAwLjI2Nyk7XG4gICAgbWFyZ2luLWxlZnQ6IDV2dztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAgIGNvbG9yOiByZ2IoMTQsIDE0LCAxNDgpO1xuICAgIHdpZHRoOiAxNHZ3O1xuICAgIGhlaWdodDoxMnZoO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnN0YXJ0LXByYWN0aWNlOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtvcmFuZ2U7XG59XG4ubWF0LXRvb2xiYXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NzdCMjtcblxufVxuLnRvb2xiYXItYnV0dG9uc3tcbiAgICBtYXJnaW4gOiAwIDJ2dztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefractionPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-refraction-page',
                templateUrl: './refraction-page.component.html',
                styleUrls: ['./refraction-page.component.css']
            }]
    }], function () { return [{ type: _data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"] }]; }, null); })();


/***/ }),

/***/ "4CZF":
/*!*************************************************************!*\
  !*** ./src/app/station-page/station1/station1.component.ts ***!
  \*************************************************************/
/*! exports provided: Station1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Station1Component", function() { return Station1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");







class Station1Component {
    constructor(location, route) {
        this.location = location;
        this.route = route;
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
    finishStation1() {
        console.log("station1 finished");
    }
    goToAnswer1Page() {
        this.route.navigate(['/refraction/stationPage/station1/answer1']);
    }
    goToAnswer2Page() {
        this.route.navigate(['/refraction/stationPage/station1/answer2']);
    }
    goToAnswer3Page() {
        this.route.navigate(['/refraction/stationPage/station1/answer3']);
    }
}
Station1Component.ɵfac = function Station1Component_Factory(t) { return new (t || Station1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
Station1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Station1Component, selectors: [["app-station1"]], decls: 70, vars: 0, consts: [[1, "toolbar"], ["mat-raised-button", "", "color", "primary", 1, "toolbar-buttons", 3, "click"], [1, "main-container"], [1, "heading"], ["fxLayout", "row", 1, "mark-sheets"], ["fxLayoutAlign", "space-around center", "fxLayout", "column", 1, "right-eye"], ["fxLayoutAlign", "space-around center", "fxLayout", "column", 1, "left-eye"], [1, "introduction"], [1, "warning-message"], ["fxLayout", "column", 1, "question1", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "start space-between", 1, "ques1Box"], [1, "question1text"], [1, "marks1text"], ["fxLayout", "row", "fxLayoutAlign", "end center", 1, "questionOneText"], [1, "question1Words"], [1, "answer1Box"], [1, "answer-here"], [1, "question2", 3, "click"], [1, "ques2Box"], [1, "question2text"], [1, "marks2text"], [1, "questionTwoText"], [1, "question2Words"], [1, "answer2Box"], [1, "question3", 3, "click"], ["fxLayoutAlign", "space-between center", 1, "ques3Box"], [1, "marks3text"], [1, "questionThreeText"], [1, "question3Words"], [1, "answer3Box"]], template: function Station1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Station1Component_Template_button_click_1_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Station1Component_Template_button_click_3_listener() { return ctx.finishStation1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Finish Station");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Please choose which mark sheet to answer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Mark Sheet 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Simulated retinoscope - Right Eye");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Mark Sheet 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Simulated retinoscope - Left Eye");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Please use a retinoscopeand perform a cycloplegic retinoscopy on patient's RIGHT eye.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " the task must be performed WITHOUT A TRIAL FRAME ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Station1Component_Template_div_click_28_listener() { return ctx.goToAnswer1Page(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Question 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "12 marks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Please record the gross retinoscopy (i.e without removing the working distance) in the box ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " You may provide your answer in positive or negitice cylender format as a power cross. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " DO NOT ENTER YOUR FINAL PRESCRIPTION HERE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Answer Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Station1Component_Template_div_click_46_listener() { return ctx.goToAnswer2Page(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Question 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "1 mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Please record your working distance in centemeters and diopters. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Answer Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Station1Component_Template_div_click_58_listener() { return ctx.goToAnswer3Page(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Question 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "2 marks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Please correct your retinoscopy for your working distance and record your final prescription in positive and negitive cylender format in the box ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Answer Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"]], styles: ["mat-toolbar[_ngcontent-%COMP%]{\n    background-color: #4777B2;\n}\n.toolbar-buttons[_ngcontent-%COMP%]{\n    margin : 0 2vw;\n}\n.main-container[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.heading[_ngcontent-%COMP%]{\n    display: flex;\n    margin: 3vh 0;\n    padding:1vh 1vw;\n    border: 1px solid gray;\n    width:50%;\n}\n.mark-sheets[_ngcontent-%COMP%]{\n    width: 50vw;\n    margin:2vh;\n}\n.right-eye[_ngcontent-%COMP%]{\nwidth: 50%;\nheight: 10vh;\nborder: 1px solid black;\nbackground-color: rgb(228, 213, 12);\n}\n.left-eye[_ngcontent-%COMP%]{\nwidth: 50%;\nborder: 1px solid black;\nheight: 10vh;\n}\n.introduction[_ngcontent-%COMP%]{\n    border: 1px solid gray;\n    width: 48%;\n    padding: 0 1vw;\n}\n.question1[_ngcontent-%COMP%], .question2[_ngcontent-%COMP%], .question3[_ngcontent-%COMP%]{\n    width: 50%;\n}\n.answer1Box[_ngcontent-%COMP%]{\n    \n    background-color: rgba(31, 59, 100, 0.228);\n    cursor: pointer;\n}\n.answer2Box[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(31, 59, 100, 0.228);\n    cursor: pointer;\n}\n.answer3Box[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(31, 59, 100, 0.228);\n    cursor: pointer;\n}\n.answer3Box[_ngcontent-%COMP%]:hover{\n    background-color: rgb(228, 213, 12);\n}\n.answer2Box[_ngcontent-%COMP%]:hover{\n    background-color: rgb(228, 213, 12);\n}\n.answer1Box[_ngcontent-%COMP%]:hover{\n        background-color: rgb(228, 213, 12);\n    }\n.answer-here[_ngcontent-%COMP%]{\n    color: gray;\n    cursor: pointer;\n}\n.ques1Box[_ngcontent-%COMP%], .ques2Box[_ngcontent-%COMP%], .ques3Box[_ngcontent-%COMP%]{\n    width: 100%;\n    display: flex;\n    align-items: center;\n    border: 1px solid black;\n    margin-top:1vh;\n    \n\n\n}\n.questionOneText[_ngcontent-%COMP%], .questionTwoText[_ngcontent-%COMP%], .questionThreeText[_ngcontent-%COMP%]{\n\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    position: relative;\n}\n.question1Words[_ngcontent-%COMP%], .question2Words[_ngcontent-%COMP%], .question3Words[_ngcontent-%COMP%]{\n    width: 60%;\n    display: flex;\n    align-items: center;\n}\n.answer1Box[_ngcontent-%COMP%], .answer2Box[_ngcontent-%COMP%], .answer3Box[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid black;\n    width:20vw;\n    height: 15vh;\n    right:0;\n    float:right;\n    margin: 3vh 0vw;\n\n}\n.marks1text[_ngcontent-%COMP%], .marks2text[_ngcontent-%COMP%], .marks3text[_ngcontent-%COMP%]{\n    margin-left: 50%;\n\n}\n.warning-message[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: left;\n    align-items: flex-start ;\n    margin: 5vh 0;\n    width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGlvbi1wYWdlL3N0YXRpb24xL3N0YXRpb24xLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7QUFDZDtBQUNBO0FBQ0EsVUFBVTtBQUNWLFlBQVk7QUFDWix1QkFBdUI7QUFDdkIsbUNBQW1DO0FBQ25DO0FBRUE7QUFDQSxVQUFVO0FBQ1YsdUJBQXVCO0FBQ3ZCLFlBQVk7QUFDWjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJOzs4QkFFMEI7SUFDMUIsMENBQTBDO0lBQzFDLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDBDQUEwQztJQUMxQyxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QiwwQ0FBMEM7SUFDMUMsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxtQ0FBbUM7QUFDdkM7QUFDSTtRQUNJLG1DQUFtQztJQUN2QztBQUtKO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2Qsa0JBQWtCOzs7QUFHdEI7QUFDQTs7SUFFSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLFlBQVk7SUFDWixPQUFPO0lBQ1AsV0FBVztJQUNYLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSxnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvc3RhdGlvbi1wYWdlL3N0YXRpb24xL3N0YXRpb24xLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc3N0IyO1xufVxuLnRvb2xiYXItYnV0dG9uc3tcbiAgICBtYXJnaW4gOiAwIDJ2dztcbn1cbi5tYWluLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkaW5ne1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAzdmggMDtcbiAgICBwYWRkaW5nOjF2aCAxdnc7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICB3aWR0aDo1MCU7XG59XG4ubWFyay1zaGVldHN7XG4gICAgd2lkdGg6IDUwdnc7XG4gICAgbWFyZ2luOjJ2aDtcbn1cbi5yaWdodC1leWV7XG53aWR0aDogNTAlO1xuaGVpZ2h0OiAxMHZoO1xuYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAyMTMsIDEyKTtcbn1cblxuLmxlZnQtZXlle1xud2lkdGg6IDUwJTtcbmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuaGVpZ2h0OiAxMHZoO1xufVxuLmludHJvZHVjdGlvbntcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIHdpZHRoOiA0OCU7XG4gICAgcGFkZGluZzogMCAxdnc7XG59XG4ucXVlc3Rpb24xLC5xdWVzdGlvbjIsLnF1ZXN0aW9uM3tcbiAgICB3aWR0aDogNTAlO1xufVxuXG4uYW5zd2VyMUJveHtcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMSwgNTksIDEwMCwgMC4yMjgpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hbnN3ZXIyQm94e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMxLCA1OSwgMTAwLCAwLjIyOCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFuc3dlcjNCb3h7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzEsIDU5LCAxMDAsIDAuMjI4KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYW5zd2VyM0JveDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAyMTMsIDEyKTtcbn1cbi5hbnN3ZXIyQm94OmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDIxMywgMTIpO1xufVxuICAgIC5hbnN3ZXIxQm94OmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAyMTMsIDEyKTtcbiAgICB9XG5cblxuXG5cbi5hbnN3ZXItaGVyZXtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucXVlczFCb3gsLnF1ZXMyQm94LC5xdWVzM0JveHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgbWFyZ2luLXRvcDoxdmg7XG4gICAgLyogcGFkZGluZzogMXZoOyAqL1xuXG5cbn1cbi5xdWVzdGlvbk9uZVRleHQsLnF1ZXN0aW9uVHdvVGV4dCwucXVlc3Rpb25UaHJlZVRleHR7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnF1ZXN0aW9uMVdvcmRzLCAucXVlc3Rpb24yV29yZHMsIC5xdWVzdGlvbjNXb3Jkc3tcbiAgICB3aWR0aDogNjAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hbnN3ZXIxQm94LC5hbnN3ZXIyQm94LC5hbnN3ZXIzQm94e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICB3aWR0aDoyMHZ3O1xuICAgIGhlaWdodDogMTV2aDtcbiAgICByaWdodDowO1xuICAgIGZsb2F0OnJpZ2h0O1xuICAgIG1hcmdpbjogM3ZoIDB2dztcblxufVxuLm1hcmtzMXRleHQsLm1hcmtzMnRleHQsLm1hcmtzM3RleHR7XG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcblxufVxuLndhcm5pbmctbWVzc2FnZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCA7XG4gICAgbWFyZ2luOiA1dmggMDtcbiAgICB3aWR0aDogNTAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Station1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-station1',
                templateUrl: './station1.component.html',
                styleUrls: ['./station1.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "58xC":
/*!*************************************************************!*\
  !*** ./src/app/station-page/station3/station3.component.ts ***!
  \*************************************************************/
/*! exports provided: Station3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Station3Component", function() { return Station3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class Station3Component {
    constructor() { }
    ngOnInit() {
    }
}
Station3Component.ɵfac = function Station3Component_Factory(t) { return new (t || Station3Component)(); };
Station3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Station3Component, selectors: [["app-station3"]], decls: 2, vars: 0, template: function Station3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "station3 works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpb24tcGFnZS9zdGF0aW9uMy9zdGF0aW9uMy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Station3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-station3',
                templateUrl: './station3.component.html',
                styleUrls: ['./station3.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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

/***/ "F082":
/*!********************************************************!*\
  !*** ./src/app/station-page/station-page.component.ts ***!
  \********************************************************/
/*! exports provided: StationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationPageComponent", function() { return StationPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");







const _c0 = function (a0) { return { "section-box-1-color": a0 }; };
const _c1 = function (a0) { return { "section-box-2-color": a0 }; };
const _c2 = function (a0) { return { "section-box-3-color": a0 }; };
const _c3 = function (a0) { return { "section-box-4-color": a0 }; };
const _c4 = function (a0) { return { "section-box-5-color": a0 }; };
const _c5 = function (a0) { return { "start-button-clicked": a0 }; };
class StationPageComponent {
    constructor(location, route) {
        this.location = location;
        this.route = route;
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
    startOsce() {
        this.isStartClicked = !this.isStartClicked;
        if (this.station1color) {
            this.route.navigate(['refraction/stationPage/station1']);
        }
        if (this.station2color) {
            this.route.navigate(['refraction/stationPage/station2']);
        }
        if (this.station3color) {
            this.route.navigate(['refraction/stationPage/station3']);
        }
        if (this.station4color) {
            this.route.navigate(['refraction/stationPage/station4']);
        }
        if (this.station5color) {
            this.route.navigate(['refraction/stationPage/station5']);
        }
        if (!(this.station1color || this.station2color || this.station4color || this.station3color || this.station5color)) {
            alert("please select a Station");
            this.isStartClicked = !this.isStartClicked;
        }
    }
    station1Click() {
        this.station1color = !this.station1color;
    }
    station2Click() {
        this.station2color = !this.station2color;
    }
    station3Click() {
        this.station3color = !this.station3color;
    }
    station4Click() {
        this.station4color = !this.station4color;
    }
    station5Click() {
        this.station5color = !this.station5color;
    }
}
StationPageComponent.ɵfac = function StationPageComponent_Factory(t) { return new (t || StationPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
StationPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StationPageComponent, selectors: [["app-station-page"]], decls: 67, vars: 18, consts: [[1, "toolbar"], ["mat-raised-button", "", "color", "primary", 1, "toolbar-buttons", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "toolbar-buttons"], [1, "main-container"], [1, "heading"], [1, "section-container"], [1, "section-box-1", 3, "ngClass", "click"], [1, "section-box-2", 3, "ngClass", "click"], [1, "section-box-3", 3, "ngClass", "click"], [1, "section-box-4", 3, "ngClass", "click"], [1, "section-box-5", 3, "ngClass", "click"], [1, "click-details"], [1, "save-data"], [1, "save-data-text"], [1, "start-button", 3, "ngClass", "click"]], template: function StationPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StationPageComponent_Template_button_click_1_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Select the OSCE station to practice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StationPageComponent_Template_div_click_10_listener() { return ctx.station1Click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Station 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Retinoscopy 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Retinoscopy 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StationPageComponent_Template_div_click_18_listener() { return ctx.station2Click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Station 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Retinoscopy 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Retinoscopy 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StationPageComponent_Template_div_click_26_listener() { return ctx.station3Click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Station 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Retinoscopy 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Retinoscopy 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StationPageComponent_Template_div_click_34_listener() { return ctx.station4Click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Station 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Retinoscopy 7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Retinoscopy 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StationPageComponent_Template_div_click_42_listener() { return ctx.station5Click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Station 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Retinoscopy 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Retinoscopy 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Click the 'Start OSCE' button to enter your TEN minute station");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " The on-screen timer counts up in 15 second intervals ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " In the actual THREE audible warnings beeps will be given after 5 mins and again");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " after 9-minutes - unfortunately the sound is not supported through this browser ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " This System saves Data automatically");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StationPageComponent_Template_div_click_64_listener() { return ctx.startOsce(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Start OSCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.station1color));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.station2color));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c2, ctx.station3color));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c3, ctx.station4color));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c4, ctx.station5color));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c5, ctx.isStartClicked));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"]], styles: [".toolbar[_ngcontent-%COMP%]    {\n    background-color: rgb(59, 137, 168);\n}\n.toolbar-buttons[_ngcontent-%COMP%]{\n    margin : 0 2vw;\n}\n.main-container[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n}\n.heading[_ngcontent-%COMP%]{\n    border: 1px solid gray;\n    margin-top:1vh;\n    width: 70%;\n    display: flex;\n    padding:1vh;\n    justify-content: center;\n    align-items: center;\n}\n.section-container[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n\n}\n.section-box-1[_ngcontent-%COMP%], .section-box-2[_ngcontent-%COMP%], .section-box-3[_ngcontent-%COMP%], .section-box-4[_ngcontent-%COMP%], .section-box-5[_ngcontent-%COMP%]{\n    display: flex;\n    cursor: pointer;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid blue;\n    margin: 1vh 2vw;\n    width: 11vw;\n    background-color: rgba(0, 49, 128, 0.185);\n}\n.section-box-1-color[_ngcontent-%COMP%]{\n    display: flex;\n    cursor: pointer;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid blue;\n    margin: 1vh 2vw;\n    width: 11vw;\n    background-color: rgba(47, 128, 0, 0.185);\n}\n.section-box-2-color[_ngcontent-%COMP%]{\n    display: flex;\n    cursor: pointer;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid blue;\n    margin: 1vh 2vw;\n    width: 11vw;\n    background-color: rgba(47, 128, 0, 0.185);\n}\n.section-box-3-color[_ngcontent-%COMP%]{\n    display: flex;\n    cursor: pointer;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid blue;\n    margin: 1vh 2vw;\n    width: 11vw;\n    background-color: rgba(47, 128, 0, 0.185);\n}\n.section-box-4-color[_ngcontent-%COMP%]{\n    display: flex;\n    cursor: pointer;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid blue;\n    margin: 1vh 2vw;\n    width: 11vw;\n    background-color: rgba(47, 128, 0, 0.185);\n}\n.section-box-5-color[_ngcontent-%COMP%]{\n    display: flex;\n    cursor: pointer;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid blue;\n    margin: 1vh 2vw;\n    width: 11vw;\n    background-color: rgba(47, 128, 0, 0.185);\n}\n.click-details[_ngcontent-%COMP%]{\n    width:50%;\n    margin-top:5vh;\n}\n.save-data[_ngcontent-%COMP%]{\n    border: 1px solid gray;\n    margin-top:1vh;\n    width: 70%;\n    display: flex;\n    height:-webkit-fit-content;\n    height:-moz-fit-content;\n    height:fit-content;\n    justify-content: center;\n    align-items: center;\n    \n}\n.save-data-text[_ngcontent-%COMP%]{\n    color: yellowgreen;\n    font-weight: 500;\n}\n.start-button[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid blue;\n    margin: 5vh 2vw;\n    width: 16vw;\n    background-color: rgba(0, 49, 128, 0.185);\n    cursor: pointer;\n}\n.start-button-clicked[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid blue;\n    margin: 5vh 2vw;\n    width: 16vw;\n    background-color: rgba(44, 243, 9, 0.185);\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGlvbi1wYWdlL3N0YXRpb24tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsVUFBVTtJQUNWLGFBQWE7SUFDYixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixXQUFXO0lBQ1gseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsV0FBVztJQUNYLHlDQUF5QztBQUM3QztBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFdBQVc7SUFDWCx5Q0FBeUM7QUFDN0M7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixXQUFXO0lBQ1gseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsV0FBVztJQUNYLHlDQUF5QztBQUM3QztBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFdBQVc7SUFDWCx5Q0FBeUM7QUFDN0M7QUFDQTtJQUNJLFNBQVM7SUFDVCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLFVBQVU7SUFDVixhQUFhO0lBQ2IsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFdBQVc7SUFDWCx5Q0FBeUM7SUFDekMsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsV0FBVztJQUNYLHlDQUF5QztJQUN6QyxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc3RhdGlvbi1wYWdlL3N0YXRpb24tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXIgICAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OSwgMTM3LCAxNjgpO1xufVxuLnRvb2xiYXItYnV0dG9uc3tcbiAgICBtYXJnaW4gOiAwIDJ2dztcbn1cbi5tYWluLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5oZWFkaW5ne1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgbWFyZ2luLXRvcDoxdmg7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6MXZoO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2VjdGlvbi1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG59XG4uc2VjdGlvbi1ib3gtMSwgLnNlY3Rpb24tYm94LTIsIC5zZWN0aW9uLWJveC0zLC5zZWN0aW9uLWJveC00LC5zZWN0aW9uLWJveC01e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAgIG1hcmdpbjogMXZoIDJ2dztcbiAgICB3aWR0aDogMTF2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDQ5LCAxMjgsIDAuMTg1KTtcbn1cbi5zZWN0aW9uLWJveC0xLWNvbG9ye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAgIG1hcmdpbjogMXZoIDJ2dztcbiAgICB3aWR0aDogMTF2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LCAxMjgsIDAsIDAuMTg1KTtcbn1cbi5zZWN0aW9uLWJveC0yLWNvbG9ye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAgIG1hcmdpbjogMXZoIDJ2dztcbiAgICB3aWR0aDogMTF2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LCAxMjgsIDAsIDAuMTg1KTtcbn1cbi5zZWN0aW9uLWJveC0zLWNvbG9ye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAgIG1hcmdpbjogMXZoIDJ2dztcbiAgICB3aWR0aDogMTF2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LCAxMjgsIDAsIDAuMTg1KTtcbn1cbi5zZWN0aW9uLWJveC00LWNvbG9ye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAgIG1hcmdpbjogMXZoIDJ2dztcbiAgICB3aWR0aDogMTF2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LCAxMjgsIDAsIDAuMTg1KTtcbn1cbi5zZWN0aW9uLWJveC01LWNvbG9ye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAgIG1hcmdpbjogMXZoIDJ2dztcbiAgICB3aWR0aDogMTF2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LCAxMjgsIDAsIDAuMTg1KTtcbn1cbi5jbGljay1kZXRhaWxze1xuICAgIHdpZHRoOjUwJTtcbiAgICBtYXJnaW4tdG9wOjV2aDtcbn1cbi5zYXZlLWRhdGF7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBtYXJnaW4tdG9wOjF2aDtcbiAgICB3aWR0aDogNzAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OmZpdC1jb250ZW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG59XG4uc2F2ZS1kYXRhLXRleHR7XG4gICAgY29sb3I6IHllbGxvd2dyZWVuO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uc3RhcnQtYnV0dG9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4gICAgbWFyZ2luOiA1dmggMnZ3O1xuICAgIHdpZHRoOiAxNnZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgNDksIDEyOCwgMC4xODUpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zdGFydC1idXR0b24tY2xpY2tlZHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAgIG1hcmdpbjogNXZoIDJ2dztcbiAgICB3aWR0aDogMTZ2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ0LCAyNDMsIDksIDAuMTg1KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StationPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-station-page',
                templateUrl: './station-page.component.html',
                styleUrls: ['./station-page.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "GsPn":
/*!******************************************************************************!*\
  !*** ./src/app/station-page/station1/answer2-page/answer2-page.component.ts ***!
  \******************************************************************************/
/*! exports provided: Answer2PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answer2PageComponent", function() { return Answer2PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");






class Answer2PageComponent {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
}
Answer2PageComponent.ɵfac = function Answer2PageComponent_Factory(t) { return new (t || Answer2PageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"])); };
Answer2PageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Answer2PageComponent, selectors: [["app-answer2-page"]], decls: 16, vars: 0, consts: [[1, "toolbar"], ["mat-raised-button", "", "color", "primary", 1, "toolbar-buttons", 3, "click"], ["fxLayoutAlign", "space-between center", "fxLayoutGap", "20px", "fxLayout", "column", 1, "main-container"], [1, "question2Box"], [1, "question2Words"], [1, "question2MainBox"], ["fxLayout", "column", "fxLayoutGap", "20px", 1, "question2MainInputs"], ["placeholder", "Working distance in centemeters", 1, "distanceInput"], ["placeholder", "Dioptric equivalent", 1, "dioptricInput"]], template: function Answer2PageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Answer2PageComponent_Template_button_click_1_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Question 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Please record your working distance in centemeters and diopters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Insert Your working distance and dioptric equivalent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"]], styles: ["mat-toolbar[_ngcontent-%COMP%]{\n    background-color: #4777B2;\n}\n.toolbar-buttons[_ngcontent-%COMP%]{\n    margin : 0 2vw;\n}\n.question2Box[_ngcontent-%COMP%]{\n    margin-top:1vh;\n    border: 1px solid gray;\n    width: 50%;\n    padding:1vh;\n}\n.question2MainBox[_ngcontent-%COMP%]\n{\n    margin-top: 20vh;\n\n    width: 50%;\n    border:1px solid gray;\n    padding: 1vh;\n}\n.distanceInput[_ngcontent-%COMP%], .dioptricInput[_ngcontent-%COMP%]{\n    height:6vh;\n    width: 22vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGlvbi1wYWdlL3N0YXRpb24xL2Fuc3dlcjItcGFnZS9hbnN3ZXIyLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7O0lBRUksZ0JBQWdCOztJQUVoQixVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9zdGF0aW9uLXBhZ2Uvc3RhdGlvbjEvYW5zd2VyMi1wYWdlL2Fuc3dlcjItcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NzdCMjtcbn1cbi50b29sYmFyLWJ1dHRvbnN7XG4gICAgbWFyZ2luIDogMCAydnc7XG59XG4ucXVlc3Rpb24yQm94e1xuICAgIG1hcmdpbi10b3A6MXZoO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nOjF2aDtcbn1cbi5xdWVzdGlvbjJNYWluQm94XG57XG4gICAgbWFyZ2luLXRvcDogMjB2aDtcblxuICAgIHdpZHRoOiA1MCU7XG4gICAgYm9yZGVyOjFweCBzb2xpZCBncmF5O1xuICAgIHBhZGRpbmc6IDF2aDtcbn1cbi5kaXN0YW5jZUlucHV0LC5kaW9wdHJpY0lucHV0e1xuICAgIGhlaWdodDo2dmg7XG4gICAgd2lkdGg6IDIydnc7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Answer2PageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-answer2-page',
                templateUrl: './answer2-page.component.html',
                styleUrls: ['./answer2-page.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }]; }, null); })();


/***/ }),

/***/ "Monr":
/*!*************************************************************!*\
  !*** ./src/app/station-page/station5/station5.component.ts ***!
  \*************************************************************/
/*! exports provided: Station5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Station5Component", function() { return Station5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class Station5Component {
    constructor() { }
    ngOnInit() {
    }
}
Station5Component.ɵfac = function Station5Component_Factory(t) { return new (t || Station5Component)(); };
Station5Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Station5Component, selectors: [["app-station5"]], decls: 2, vars: 0, template: function Station5Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "station5 works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpb24tcGFnZS9zdGF0aW9uNS9zdGF0aW9uNS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Station5Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-station5',
                templateUrl: './station5.component.html',
                styleUrls: ['./station5.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-service.service */ "xf3R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(dataService, location) {
        this.dataService = dataService;
        this.location = location;
        this.isHomePage = true;
        this.title = 'refraction';
    }
    ngOnInit() {
        this.dataService.hideTopBar(true);
    }
    goBack() {
        this.location.back();
    }
    hideToolBar() {
        this.isHomePage === false;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }]; }, null); })();


/***/ }),

/***/ "ToGh":
/*!***************************************************************************!*\
  !*** ./src/app/station-page/input-selection/input-selection.component.ts ***!
  \***************************************************************************/
/*! exports provided: InputSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSelectionComponent", function() { return InputSelectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");






function InputSelectionComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputSelectionComponent_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const sign_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.appendPlusMinus(sign_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sign_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sign_r3, " ");
} }
function InputSelectionComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputSelectionComponent_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const number_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.appendZeroToTen(number_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const number_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", number_r6, " ");
} }
function InputSelectionComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputSelectionComponent_div_8_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const deci_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.appendDecimal(deci_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const deci_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" 0", deci_r9, " ");
} }
class InputSelectionComponent {
    constructor() {
        this.targetValue = "";
        this.plusMinus = ["+", "-"];
        this.zeroToTen = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        this.decimalFloat = [".00", ".25", ".50", ".75"];
    }
    ngOnInit() {
    }
    appendZeroToTen(val) {
        this.targetValue += val.toString();
        console.log(this.targetValue);
    }
    appendPlusMinus(val) {
        this.targetValue += val.toString();
        console.log(this.targetValue);
    }
    appendDecimal(val) {
        this.targetValue += val.toString();
        console.log(this.targetValue);
    }
}
InputSelectionComponent.ɵfac = function InputSelectionComponent_Factory(t) { return new (t || InputSelectionComponent)(); };
InputSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputSelectionComponent, selectors: [["app-input-selection"]], decls: 12, vars: 5, consts: [[1, "selectedValues"], ["fxLayout", "row", "fxLayoutGap", "30px", 1, "powerSelection"], ["fxLayout", "column"], ["class", "plusminus", "fxLayoutAlign", "center center", 3, "click", 4, "ngFor", "ngForOf"], ["class", "zeroToTen", "fxLayoutAlign", "center center", "fxLayout", "column", 3, "click", 4, "ngFor", "ngForOf"], ["class", "decimalClass", "fxLayoutAlign", "center center", "fxLayout", "column", 3, "click", 4, "ngFor", "ngForOf"], [1, "closeButtonDiv"], ["mat-raised-button", "", "color", "warn", 1, "closeButton", 3, "mat-dialog-close"], ["fxLayoutAlign", "center center", 1, "plusminus", 3, "click"], ["fxLayoutAlign", "center center", "fxLayout", "column", 1, "zeroToTen", 3, "click"], ["fxLayoutAlign", "center center", "fxLayout", "column", 1, "decimalClass", 3, "click"]], template: function InputSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InputSelectionComponent_div_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InputSelectionComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, InputSelectionComponent_div_8_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.targetValue, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.plusMinus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.zeroToTen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.decimalFloat);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.targetValue);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogClose"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"]], styles: [".plusminus[_ngcontent-%COMP%]{\nheight:4vh;\nmargin-bottom:1vh;\nwidth:2vw;\nborder:1px solid black;\n}\n.zeroToTen[_ngcontent-%COMP%]{\nheight:4vh;\nmargin-bottom:1vh;\nwidth:2vw;\nborder:1px solid black;\n}\n.decimalClass[_ngcontent-%COMP%]{\nheight:4vh;\nmargin-bottom:1vh;\nwidth:3vw;\nborder:1px solid black;\n}\n.selectedValues[_ngcontent-%COMP%]{\n    width:80%;\n    height:4vh;\n    border:1px solid black;\n    margin: auto;\n}\n.powerSelection[_ngcontent-%COMP%]{\n    margin-top: 2vh;\n    display: flex;\n    position: relative;\n}\n.plusminusContainer[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n}\n.closeButtonDiv[_ngcontent-%COMP%]{\n    position: absolute;\n    bottom: -83px;\n    left: 5vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGlvbi1wYWdlL2lucHV0LXNlbGVjdGlvbi9pbnB1dC1zZWxlY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFVBQVU7QUFDVixpQkFBaUI7QUFDakIsU0FBUztBQUNULHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlCQUFpQjtBQUNqQixTQUFTO0FBQ1Qsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaUJBQWlCO0FBQ2pCLFNBQVM7QUFDVCxzQkFBc0I7QUFDdEI7QUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpb24tcGFnZS9pbnB1dC1zZWxlY3Rpb24vaW5wdXQtc2VsZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGx1c21pbnVze1xuaGVpZ2h0OjR2aDtcbm1hcmdpbi1ib3R0b206MXZoO1xud2lkdGg6MnZ3O1xuYm9yZGVyOjFweCBzb2xpZCBibGFjaztcbn1cbi56ZXJvVG9UZW57XG5oZWlnaHQ6NHZoO1xubWFyZ2luLWJvdHRvbToxdmg7XG53aWR0aDoydnc7XG5ib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xufVxuLmRlY2ltYWxDbGFzc3tcbmhlaWdodDo0dmg7XG5tYXJnaW4tYm90dG9tOjF2aDtcbndpZHRoOjN2dztcbmJvcmRlcjoxcHggc29saWQgYmxhY2s7XG59XG4uc2VsZWN0ZWRWYWx1ZXN7XG4gICAgd2lkdGg6ODAlO1xuICAgIGhlaWdodDo0dmg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcbiAgICBtYXJnaW46IGF1dG87XG59XG4ucG93ZXJTZWxlY3Rpb257XG4gICAgbWFyZ2luLXRvcDogMnZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBsdXNtaW51c0NvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY2xvc2VCdXR0b25EaXZ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTgzcHg7XG4gICAgbGVmdDogNXZ3O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputSelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input-selection',
                templateUrl: './input-selection.component.html',
                styleUrls: ['./input-selection.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "W9M3":
/*!*************************************************************!*\
  !*** ./src/app/station-page/station4/station4.component.ts ***!
  \*************************************************************/
/*! exports provided: Station4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Station4Component", function() { return Station4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class Station4Component {
    constructor() { }
    ngOnInit() {
    }
}
Station4Component.ɵfac = function Station4Component_Factory(t) { return new (t || Station4Component)(); };
Station4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Station4Component, selectors: [["app-station4"]], decls: 2, vars: 0, template: function Station4Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "station4 works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpb24tcGFnZS9zdGF0aW9uNC9zdGF0aW9uNC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Station4Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-station4',
                templateUrl: './station4.component.html',
                styleUrls: ['./station4.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Z6/k":
/*!*************************************************************!*\
  !*** ./src/app/station-page/station2/station2.component.ts ***!
  \*************************************************************/
/*! exports provided: Station2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Station2Component", function() { return Station2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class Station2Component {
    constructor() { }
    ngOnInit() {
    }
}
Station2Component.ɵfac = function Station2Component_Factory(t) { return new (t || Station2Component)(); };
Station2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Station2Component, selectors: [["app-station2"]], decls: 2, vars: 0, template: function Station2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "station2 works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpb24tcGFnZS9zdGF0aW9uMi9zdGF0aW9uMi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Station2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-station2',
                templateUrl: './station2.component.html',
                styleUrls: ['./station2.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _refraction_page_refraction_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./refraction-page/refraction-page.component */ "0SQV");
/* harmony import */ var _station_page_station_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./station-page/station-page.component */ "F082");
/* harmony import */ var _station_page_station1_station1_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./station-page/station1/station1.component */ "4CZF");
/* harmony import */ var _station_page_station2_station2_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./station-page/station2/station2.component */ "Z6/k");
/* harmony import */ var _station_page_station3_station3_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./station-page/station3/station3.component */ "58xC");
/* harmony import */ var _station_page_station4_station4_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./station-page/station4/station4.component */ "W9M3");
/* harmony import */ var _station_page_station5_station5_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./station-page/station5/station5.component */ "Monr");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _station_page_station1_answer1_page_answer1_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./station-page/station1/answer1-page/answer1-page.component */ "aTlr");
/* harmony import */ var _station_page_station1_answer2_page_answer2_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./station-page/station1/answer2-page/answer2-page.component */ "GsPn");
/* harmony import */ var _station_page_station1_answer3_page_answer3_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./station-page/station1/answer3-page/answer3-page.component */ "v280");
/* harmony import */ var _station_page_input_selection_input_selection_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./station-page/input-selection/input-selection.component */ "ToGh");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]
        ], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _refraction_page_refraction_page_component__WEBPACK_IMPORTED_MODULE_10__["RefractionPageComponent"],
        _station_page_station_page_component__WEBPACK_IMPORTED_MODULE_11__["StationPageComponent"],
        _station_page_station1_station1_component__WEBPACK_IMPORTED_MODULE_12__["Station1Component"],
        _station_page_station2_station2_component__WEBPACK_IMPORTED_MODULE_13__["Station2Component"],
        _station_page_station3_station3_component__WEBPACK_IMPORTED_MODULE_14__["Station3Component"],
        _station_page_station4_station4_component__WEBPACK_IMPORTED_MODULE_15__["Station4Component"],
        _station_page_station5_station5_component__WEBPACK_IMPORTED_MODULE_16__["Station5Component"],
        _station_page_station1_answer1_page_answer1_page_component__WEBPACK_IMPORTED_MODULE_18__["Answer1PageComponent"],
        _station_page_station1_answer2_page_answer2_page_component__WEBPACK_IMPORTED_MODULE_19__["Answer2PageComponent"],
        _station_page_station1_answer3_page_answer3_page_component__WEBPACK_IMPORTED_MODULE_20__["Answer3PageComponent"],
        _station_page_input_selection_input_selection_component__WEBPACK_IMPORTED_MODULE_21__["InputSelectionComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _refraction_page_refraction_page_component__WEBPACK_IMPORTED_MODULE_10__["RefractionPageComponent"],
                    _station_page_station_page_component__WEBPACK_IMPORTED_MODULE_11__["StationPageComponent"],
                    _station_page_station1_station1_component__WEBPACK_IMPORTED_MODULE_12__["Station1Component"],
                    _station_page_station2_station2_component__WEBPACK_IMPORTED_MODULE_13__["Station2Component"],
                    _station_page_station3_station3_component__WEBPACK_IMPORTED_MODULE_14__["Station3Component"],
                    _station_page_station4_station4_component__WEBPACK_IMPORTED_MODULE_15__["Station4Component"],
                    _station_page_station5_station5_component__WEBPACK_IMPORTED_MODULE_16__["Station5Component"],
                    _station_page_station1_answer1_page_answer1_page_component__WEBPACK_IMPORTED_MODULE_18__["Answer1PageComponent"],
                    _station_page_station1_answer2_page_answer2_page_component__WEBPACK_IMPORTED_MODULE_19__["Answer2PageComponent"],
                    _station_page_station1_answer3_page_answer3_page_component__WEBPACK_IMPORTED_MODULE_20__["Answer3PageComponent"],
                    _station_page_input_selection_input_selection_component__WEBPACK_IMPORTED_MODULE_21__["InputSelectionComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aTlr":
/*!******************************************************************************!*\
  !*** ./src/app/station-page/station1/answer1-page/answer1-page.component.ts ***!
  \******************************************************************************/
/*! exports provided: Answer1PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answer1PageComponent", function() { return Answer1PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _input_selection_input_selection_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../input-selection/input-selection.component */ "ToGh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");









const _c0 = ["rotateDiv"];
function Answer1PageComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Right Eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Answer1PageComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Active ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class Answer1PageComponent {
    // power='power';
    constructor(location, route, dialog) {
        this.location = location;
        this.route = route;
        this.dialog = dialog;
        this.isActive = true;
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
    rotatePlus5() {
        this.el.nativeElement.style.transform += "rotate(-7deg)";
    }
    rotateMinus5() {
        this.el.nativeElement.style.transform += "rotate(+7deg)";
    }
    resetRotation() {
        this.el.nativeElement.style.transform = "rotate(0deg)";
    }
    openDialog() {
        const dialogRef = this.dialog.open(_input_selection_input_selection_component__WEBPACK_IMPORTED_MODULE_1__["InputSelectionComponent"], {
            width: '15vw',
            height: '80vh',
            data: { targetValue: this.targetValue }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.targetValue = result;
        });
    }
}
Answer1PageComponent.ɵfac = function Answer1PageComponent_Factory(t) { return new (t || Answer1PageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
Answer1PageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Answer1PageComponent, selectors: [["app-answer1-page"]], viewQuery: function Answer1PageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.el = _t.first);
    } }, decls: 45, vars: 3, consts: [[1, "toolbar"], ["mat-raised-button", "", "color", "primary", 1, "toolbar-buttons", 3, "click"], ["fxLayoutAlign", "center center", "fxLayout", "column", 1, "main-container"], ["fxLayout", "row", "fxLayoutAlign", "space-between", 1, "question1Div"], [4, "ngIf"], [1, "question1Words"], ["fxLayoutGap", "2vh", "fxLayout", "column", 1, "question1Main"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "question1MainBox"], ["clas", "active-cls", 4, "ngIf"], ["fxLayout", "column", "fxLayoutGap", "6vh", 1, "question1RotateBox"], ["fxLayoutAlign", "space-between", 1, "rotateButtons"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["fxLayoutAlign", "center center", 1, "rotateImageDiv"], ["rotateDiv", ""], ["mat-raised-button", "", "color", "primary", 1, "powerTopButton", 3, "click"], ["src", "../../../../assets/images/cartPlane-2.png", 1, "rotateImage"], ["mat-raised-button", "", "color", "primary", 1, "powerRightButton", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "resetButton", 3, "click"], ["fxLayout", "column", "fxLayoutAlign", "space-between center", 1, "question1Alternative"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "alternate1Box"], ["fxLayoutGap", "20px", "fxLayoutAlign", "center center", 1, "alterntiveInputs"], ["placeholder", "Sphere", 1, "sphereInput", 3, "click"], ["placeholder", "Cylender", 1, "cylenderInput", 3, "click"], ["placeholder", "Axis", 1, "axisInput", 3, "click"], ["clas", "active-cls"]], template: function Answer1PageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Answer1PageComponent_Template_button_click_1_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Question 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Answer1PageComponent_span_7_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Please record the gross retinoscopy (i.e without removing the working distance) in the box ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " You may provide your answer in positive or negitice cylender format as a power cross. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " DO NOT ENTER YOUR FINAL PRESCRIPTION HERE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Rotate Power Cross then complete power fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, Answer1PageComponent_span_20_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Answer1PageComponent_Template_button_click_23_listener() { return ctx.rotatePlus5(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Rotate + 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Answer1PageComponent_Template_button_click_25_listener() { return ctx.rotateMinus5(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Rotate - 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Answer1PageComponent_Template_button_click_29_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Answer1PageComponent_Template_button_click_32_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Power");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Answer1PageComponent_Template_button_click_35_listener() { return ctx.resetRotation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Reset to 90");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Alternatively enter your answer using Spherocylinder format");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Answer1PageComponent_Template_input_click_42_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Answer1PageComponent_Template_input_click_43_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Answer1PageComponent_Template_input_click_44_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.targetValue ? ctx.targetValue : "Power");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"]], styles: ["mat-toolbar[_ngcontent-%COMP%]{\n    background-color: #4777B2;\n}\n.toolbar-buttons[_ngcontent-%COMP%]{\n    margin : 0 2vw;\n}\n.question1Div[_ngcontent-%COMP%]{\n    width: 50%;\n    border: 1px solid gray;\n    margin-top:2vh;\n    padding:1vh;\n}\n.ques1Box[_ngcontent-%COMP%]{\n    border: 1px solid gray;\n    width: 100%;\n}\n.question1RotateBox[_ngcontent-%COMP%]{\nposition:relative;\nmargin:3vh;\n}\n.question1MainBox[_ngcontent-%COMP%]{\n    \n    border: 1px solid gray;\n    padding:1vh;\n}\n.red-class[_ngcontent-%COMP%]{\n    background: yellow;\n}\n.question1Main[_ngcontent-%COMP%]{\n    width: 50%;\n\n}\n.question1Words[_ngcontent-%COMP%]{\n    padding: 4vh;\n}\n.resetButton[_ngcontent-%COMP%]{\n    width:-webkit-fit-content;\n    width:-moz-fit-content;\n    width:fit-content;\n    float:right;\n}\n.rotateImage[_ngcontent-%COMP%]{\n    \n    \n    height:40vh;\n}\n.powerTopButton[_ngcontent-%COMP%]{\n    position: sticky;\n    margin-bottom: 45vh;\n    left: 49%;\n}\n.powerRightButton[_ngcontent-%COMP%]{\n    position: sticky;\n    margin-bottom: 5vh;\n    right: 3vw;\n}\n.question1Alternative[_ngcontent-%COMP%]{\n    width: 50%;\n    margin-top:3vh;\n}\n.alternate1Box[_ngcontent-%COMP%]{\n    border: 1px solid gray;\n    padding:1vh;\n    width: 100%;\n\n}\n.cylenderInput[_ngcontent-%COMP%], .sphereInput[_ngcontent-%COMP%], .axisInput[_ngcontent-%COMP%]{\n    height: 6vh;\n    width: 10vw;\n}\n.alterntiveInputs[_ngcontent-%COMP%]{\n    margin:10vh;\n    flex-wrap: nowrap;\n    width:100%;\n}\n.active-cls[_ngcontent-%COMP%]{\n    border: 1px solid gray;\n    background-color: darkorange;\n    width: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGlvbi1wYWdlL3N0YXRpb24xL2Fuc3dlcjEtcGFnZS9hbnN3ZXIxLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsV0FBVztBQUNmO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztBQUNmO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsVUFBVTtBQUNWO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxVQUFVOztBQUVkO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx5QkFBaUI7SUFBakIsc0JBQWlCO0lBQWpCLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFVBQVU7SUFDVixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFdBQVc7O0FBRWY7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3N0YXRpb24tcGFnZS9zdGF0aW9uMS9hbnN3ZXIxLXBhZ2UvYW5zd2VyMS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc3N0IyO1xufVxuLnRvb2xiYXItYnV0dG9uc3tcbiAgICBtYXJnaW4gOiAwIDJ2dztcbn1cbi5xdWVzdGlvbjFEaXZ7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIG1hcmdpbi10b3A6MnZoO1xuICAgIHBhZGRpbmc6MXZoO1xufVxuLnF1ZXMxQm94e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ucXVlc3Rpb24xUm90YXRlQm94e1xucG9zaXRpb246cmVsYXRpdmU7XG5tYXJnaW46M3ZoO1xufVxuLnF1ZXN0aW9uMU1haW5Cb3h7XG4gICAgLyogd2lkdGg6IDUwJTsgKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIHBhZGRpbmc6MXZoO1xufVxuLnJlZC1jbGFzc3tcbiAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XG59XG4ucXVlc3Rpb24xTWFpbntcbiAgICB3aWR0aDogNTAlO1xuXG59XG4ucXVlc3Rpb24xV29yZHN7XG4gICAgcGFkZGluZzogNHZoO1xufVxuLnJlc2V0QnV0dG9ue1xuICAgIHdpZHRoOmZpdC1jb250ZW50O1xuICAgIGZsb2F0OnJpZ2h0O1xufVxuLnJvdGF0ZUltYWdle1xuICAgIC8qIG1hcmdpbjogMzAlOyAqL1xuICAgIC8qIG1hcmdpbjogYXV0bzsgKi9cbiAgICBoZWlnaHQ6NDB2aDtcbn1cbi5wb3dlclRvcEJ1dHRvbntcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIG1hcmdpbi1ib3R0b206IDQ1dmg7XG4gICAgbGVmdDogNDklO1xufVxuLnBvd2VyUmlnaHRCdXR0b257XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBtYXJnaW4tYm90dG9tOiA1dmg7XG4gICAgcmlnaHQ6IDN2dztcbn1cbi5xdWVzdGlvbjFBbHRlcm5hdGl2ZXtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbi10b3A6M3ZoO1xufVxuLmFsdGVybmF0ZTFCb3h7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBwYWRkaW5nOjF2aDtcbiAgICB3aWR0aDogMTAwJTtcblxufVxuLmN5bGVuZGVySW5wdXQsLnNwaGVyZUlucHV0LC5heGlzSW5wdXR7XG4gICAgaGVpZ2h0OiA2dmg7XG4gICAgd2lkdGg6IDEwdnc7XG59XG4uYWx0ZXJudGl2ZUlucHV0c3tcbiAgICBtYXJnaW46MTB2aDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICB3aWR0aDoxMDAlO1xufVxuLmFjdGl2ZS1jbHN7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb3JhbmdlO1xuICAgIHdpZHRoOiAxMCU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Answer1PageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-answer1-page',
                templateUrl: './answer1-page.component.html',
                styleUrls: ['./answer1-page.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }]; }, { el: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['rotateDiv']
        }] }); })();


/***/ }),

/***/ "v280":
/*!******************************************************************************!*\
  !*** ./src/app/station-page/station1/answer3-page/answer3-page.component.ts ***!
  \******************************************************************************/
/*! exports provided: Answer3PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answer3PageComponent", function() { return Answer3PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");






class Answer3PageComponent {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
}
Answer3PageComponent.ɵfac = function Answer3PageComponent_Factory(t) { return new (t || Answer3PageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"])); };
Answer3PageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Answer3PageComponent, selectors: [["app-answer3-page"]], decls: 24, vars: 0, consts: [[1, "toolbar"], ["mat-raised-button", "", "color", "primary", 1, "toolbar-buttons", 3, "click"], ["fxLayout", "column", "fxLayoutGap", "20px", "fxLayoutAlign", "space-between center", 1, "main-container"], [1, "question3Box"], [1, "question3Words"], [1, "question3MainBox"], [1, "question3MainInputs"], ["fxLayout", "column", 1, "answerFromQuestion1"], [1, "answerFromQuestion1Box"], [1, "answer1"], ["fxLayout", "column", 1, "answerFromQuestion2"], [1, "answerFromQuestion2Box"], [1, "answer2"]], template: function Answer3PageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Answer3PageComponent_Template_button_click_1_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Question 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Please correct your retinoscopy for your working distance and record your final prescription in positive or negitive cylinder format in the box ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Enter your final prescription in Spherocylinder format");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " inputs here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Your answer from question 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "This is the answer from ques 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Your answer from question 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "This is the answer from ques 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"]], styles: ["mat-toolbar[_ngcontent-%COMP%]{\n    background-color: #4777B2;\n}\n.toolbar-buttons[_ngcontent-%COMP%]{\n    margin : 0 2vw;\n}\n.question3Box[_ngcontent-%COMP%]{\n    width: 50%;\n    border:1px solid gray;\n    padding :1vh;\n}\n.question3MainBox[_ngcontent-%COMP%]{\n    width: 50%;\n    border:1px solid gray;\n    padding : 1vh;\n}\n.question3Words[_ngcontent-%COMP%]{\n    width: 50%;\n}\n.question3MainBox[_ngcontent-%COMP%]{\n    width: 50%;\n    border:1px solid gray;\n    padding: 1vh;\n}\n.answerFromQuestion1[_ngcontent-%COMP%], .answerFromQuestion2[_ngcontent-%COMP%]{\nwidth:50%;\n}\n.answerFromQuestion1Box[_ngcontent-%COMP%], .answerFromQuestion2Box[_ngcontent-%COMP%]{\nborder:1px solid gray;\nwidth: 100%;\npadding:1vh;\n}\n.answerFromQuestion2[_ngcontent-%COMP%]{\nwidth:50%;\n\n}\n.answer1[_ngcontent-%COMP%], .answer2[_ngcontent-%COMP%]{\n    padding:5vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGlvbi1wYWdlL3N0YXRpb24xL2Fuc3dlcjMtcGFnZS9hbnN3ZXIzLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixXQUFXO0FBQ1gsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9zdGF0aW9uLXBhZ2Uvc3RhdGlvbjEvYW5zd2VyMy1wYWdlL2Fuc3dlcjMtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NzdCMjtcbn1cbi50b29sYmFyLWJ1dHRvbnN7XG4gICAgbWFyZ2luIDogMCAydnc7XG59XG4ucXVlc3Rpb24zQm94e1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYm9yZGVyOjFweCBzb2xpZCBncmF5O1xuICAgIHBhZGRpbmcgOjF2aDtcbn1cbi5xdWVzdGlvbjNNYWluQm94e1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYm9yZGVyOjFweCBzb2xpZCBncmF5O1xuICAgIHBhZGRpbmcgOiAxdmg7XG59XG4ucXVlc3Rpb24zV29yZHN7XG4gICAgd2lkdGg6IDUwJTtcbn1cbi5xdWVzdGlvbjNNYWluQm94e1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYm9yZGVyOjFweCBzb2xpZCBncmF5O1xuICAgIHBhZGRpbmc6IDF2aDtcbn1cbi5hbnN3ZXJGcm9tUXVlc3Rpb24xLC5hbnN3ZXJGcm9tUXVlc3Rpb24ye1xud2lkdGg6NTAlO1xufVxuLmFuc3dlckZyb21RdWVzdGlvbjFCb3gsLmFuc3dlckZyb21RdWVzdGlvbjJCb3h7XG5ib3JkZXI6MXB4IHNvbGlkIGdyYXk7XG53aWR0aDogMTAwJTtcbnBhZGRpbmc6MXZoO1xufVxuLmFuc3dlckZyb21RdWVzdGlvbjJ7XG53aWR0aDo1MCU7XG5cbn1cbi5hbnN3ZXIxLC5hbnN3ZXIye1xuICAgIHBhZGRpbmc6NXZoO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Answer3PageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-answer3-page',
                templateUrl: './answer3-page.component.html',
                styleUrls: ['./answer3-page.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _refraction_page_refraction_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./refraction-page/refraction-page.component */ "0SQV");
/* harmony import */ var _station_page_station_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./station-page/station-page.component */ "F082");
/* harmony import */ var _station_page_station1_answer1_page_answer1_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./station-page/station1/answer1-page/answer1-page.component */ "aTlr");
/* harmony import */ var _station_page_station1_answer2_page_answer2_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./station-page/station1/answer2-page/answer2-page.component */ "GsPn");
/* harmony import */ var _station_page_station1_answer3_page_answer3_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./station-page/station1/answer3-page/answer3-page.component */ "v280");
/* harmony import */ var _station_page_station1_station1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./station-page/station1/station1.component */ "4CZF");
/* harmony import */ var _station_page_station2_station2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./station-page/station2/station2.component */ "Z6/k");
/* harmony import */ var _station_page_station3_station3_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./station-page/station3/station3.component */ "58xC");
/* harmony import */ var _station_page_station4_station4_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./station-page/station4/station4.component */ "W9M3");
/* harmony import */ var _station_page_station5_station5_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./station-page/station5/station5.component */ "Monr");














const routes = [
    { path: '', component: _refraction_page_refraction_page_component__WEBPACK_IMPORTED_MODULE_2__["RefractionPageComponent"], pathMatch: 'full' },
    { path: 'refraction', component: _refraction_page_refraction_page_component__WEBPACK_IMPORTED_MODULE_2__["RefractionPageComponent"], pathMatch: 'full' },
    { path: 'refraction/stationPage', component: _station_page_station_page_component__WEBPACK_IMPORTED_MODULE_3__["StationPageComponent"] },
    { path: 'refraction/stationPage/station1', component: _station_page_station1_station1_component__WEBPACK_IMPORTED_MODULE_7__["Station1Component"] },
    { path: 'refraction/stationPage/station2', component: _station_page_station2_station2_component__WEBPACK_IMPORTED_MODULE_8__["Station2Component"] },
    { path: 'refraction/stationPage/station3', component: _station_page_station3_station3_component__WEBPACK_IMPORTED_MODULE_9__["Station3Component"] },
    { path: 'refraction/stationPage/station4', component: _station_page_station4_station4_component__WEBPACK_IMPORTED_MODULE_10__["Station4Component"] },
    { path: 'refraction/stationPage/station5', component: _station_page_station5_station5_component__WEBPACK_IMPORTED_MODULE_11__["Station5Component"] },
    { path: 'refraction/stationPage/station1/answer1', component: _station_page_station1_answer1_page_answer1_page_component__WEBPACK_IMPORTED_MODULE_4__["Answer1PageComponent"] },
    { path: 'refraction/stationPage/station1/answer2', component: _station_page_station1_answer2_page_answer2_page_component__WEBPACK_IMPORTED_MODULE_5__["Answer2PageComponent"] },
    { path: 'refraction/stationPage/station1/answer3', component: _station_page_station1_answer3_page_answer3_page_component__WEBPACK_IMPORTED_MODULE_6__["Answer3PageComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xf3R":
/*!*****************************************!*\
  !*** ./src/app/data-service.service.ts ***!
  \*****************************************/
/*! exports provided: DataServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataServiceService", function() { return DataServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class DataServiceService {
    constructor() {
        this.isHomePage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
    }
    hideTopBar(val) {
        this.isHomePage.next(val);
    }
}
DataServiceService.ɵfac = function DataServiceService_Factory(t) { return new (t || DataServiceService)(); };
DataServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataServiceService, factory: DataServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map