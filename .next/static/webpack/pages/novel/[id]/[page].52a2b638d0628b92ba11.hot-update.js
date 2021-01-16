webpackHotUpdate_N_E("pages/novel/[id]/[page]",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Css_styless_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Css/styless.css */ "./Css/styless.css");
/* harmony import */ var _Css_styless_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Css_styless_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @artsy/fresnel */ "./node_modules/@artsy/fresnel/dist/index.js");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


 // import "antd/dist/antd.css";






var _createMedia = Object(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_11__["createMedia"])({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024
  }
}),
    MediaContextProvider = _createMedia.MediaContextProvider,
    Media = _createMedia.Media;

var linkStyle = {
  marginRight: 15
};

var Headers = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Headers, _Component);

  var _super = _createSuper(Headers);

  function Headers(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Headers);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleItemClick", function (data) {
      return _this.setState({
        activeItem: data
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "change_alias", function (alias) {
      var str = alias;
      str = str.toLowerCase();
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
      str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
      str = str.replace(/đ/g, "d");
      str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
      str = str.replace(/ + /g, " ");
      str = str.trim();
      return str;
    });

    _this.state = {
      q: '',
      a: '',
      s: '',
      activeItem: ''
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Headers, [{
    key: "handleChange",
    value: function handleChange(event, data) {
      console.log(data);
      this.setState({
        q: data.value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit() {
      // console.log(112);
      // this.setState({a:'1'})
      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/search/".concat(this.state.s, "/1"));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.q !== prevState.q) {
        this.setState({
          s: this.change_alias(this.state.q).split(' ').join('_')
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var activeItem = this.state.activeItem;
      console.log(this.state);
      return __jsx("div", null, this.state.a === '1' && next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/search/' + this.state.s + '/1'), __jsx(MediaContextProvider, null, __jsx(Media, {
        greaterThan: "mobile"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
        inverted: true
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Menu"], {
        inverted: true,
        secondary: true
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Container"], null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Menu"].Item, {
        name: "home",
        active: activeItem === 'home',
        onClick: function onClick() {
          return _this2.handleItemClick('home');
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Image"], {
        size: "tiny",
        src: "/logo.png",
        style: {
          marginRight: '1.5em'
        }
      }), "Trang ch\u1EE7")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/update/1"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Menu"].Item, {
        name: "last",
        active: activeItem === 'last',
        onClick: function onClick() {
          return _this2.handleItemClick('last');
        }
      }, "M\u1EDBi c\u1EADp nh\u1EADt")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/hot/1"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Menu"].Item, {
        name: "hot",
        active: activeItem === 'hot',
        onClick: function onClick() {
          return _this2.handleItemClick('hot');
        }
      }, "Truy\u1EC7n hot")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/complete/1"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Menu"].Item, {
        name: "complete",
        active: activeItem === 'complete',
        onClick: function onClick() {
          return _this2.handleItemClick('complete');
        }
      }, "Truy\u1EC7n full")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Menu"].Item, {
        as: "a",
        position: "right"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Input"], {
        icon: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
          name: "search",
          inverted: true,
          circular: true,
          link: true,
          onClick: function onClick() {
            return _this2.handleSubmit();
          }
        }),
        placeholder: "T\xECm ki\u1EBFm...",
        onChange: function onChange(e, data) {
          return _this2.handleChange(e, data);
        }
      })))))), __jsx(Media, {
        at: "mobile"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
        inverted: true
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Menu"], {
        inverted: true,
        pointing: true,
        secondary: true
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Container"], null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Menu"].Item, {
        name: "home",
        active: activeItem === 'home',
        onClick: function onClick() {
          return _this2.handleItemClick('home');
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Image"], {
        size: "tiny",
        src: "/logo.png",
        style: {
          marginRight: '1.5em'
        }
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Menu"].Item, {
        as: "a",
        position: "right"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Input"], {
        icon: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
          name: "search",
          inverted: true,
          circular: true,
          link: true,
          onClick: function onClick() {
            return _this2.handleSubmit();
          }
        }),
        placeholder: "Search...",
        onChange: function onChange(e, data) {
          return _this2.handleChange(e, data);
        }
      }))))))));
    }
  }]);

  return Headers;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Headers);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiY3JlYXRlTWVkaWEiLCJicmVha3BvaW50cyIsIm1vYmlsZSIsInRhYmxldCIsImNvbXB1dGVyIiwiTWVkaWFDb250ZXh0UHJvdmlkZXIiLCJNZWRpYSIsImxpbmtTdHlsZSIsIm1hcmdpblJpZ2h0IiwiSGVhZGVycyIsInByb3BzIiwiZGF0YSIsInNldFN0YXRlIiwiYWN0aXZlSXRlbSIsImFsaWFzIiwic3RyIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwidHJpbSIsInN0YXRlIiwicSIsImEiLCJzIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwiUm91dGVyIiwicHVzaCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsImNoYW5nZV9hbGlhcyIsInNwbGl0Iiwiam9pbiIsImhhbmRsZUl0ZW1DbGljayIsImUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O21CQVl3Q0EsbUVBQVcsQ0FBQztBQUNsREMsYUFBVyxFQUFFO0FBQ1hDLFVBQU0sRUFBRSxDQURHO0FBRVhDLFVBQU0sRUFBRSxHQUZHO0FBR1hDLFlBQVEsRUFBRTtBQUhDO0FBRHFDLENBQUQsQztJQUEzQ0Msb0IsZ0JBQUFBLG9CO0lBQXNCQyxLLGdCQUFBQSxLOztBQU85QixJQUFNQyxTQUFTLEdBQUc7QUFDaEJDLGFBQVcsRUFBRTtBQURHLENBQWxCOztJQUlNQyxPOzs7OztBQUNKLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQiwwTkFlRCxVQUFDQyxJQUFEO0FBQUEsYUFBVSxNQUFLQyxRQUFMLENBQWM7QUFBRUMsa0JBQVUsRUFBRUY7QUFB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QUM7QUFBM0IsU0FDRSxNQUFDLHdEQUFEO0FBQ0UsWUFBSSxFQUFFLE1BQUMsdURBQUQ7QUFBTSxjQUFJLEVBQUMsUUFBWDtBQUFvQixrQkFBUSxNQUE1QjtBQUE2QixrQkFBUSxNQUFyQztBQUFzQyxjQUFJLE1BQTFDO0FBQTJDLGlCQUFPLEVBQUU7QUFBQSxtQkFBTSxNQUFJLENBQUNpQixZQUFMLEVBQU47QUFBQTtBQUFwRCxVQURSO0FBRUUsbUJBQVcsRUFBQyxXQUZkO0FBRTBCLGdCQUFRLEVBQUUsa0JBQUNhLENBQUQsRUFBSTNCLElBQUo7QUFBQSxpQkFBYSxNQUFJLENBQUNZLFlBQUwsQ0FBa0JlLENBQWxCLEVBQXFCM0IsSUFBckIsQ0FBYjtBQUFBO0FBRnBDLFFBREYsQ0FYRixDQURGLENBREYsQ0FERixDQWhERixDQUZGLENBREY7QUErRUQ7Ozs7RUFoSW1CNEIsK0M7O0FBbUlQOUIsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbm92ZWwvW2lkXS9bcGFnZV0uNTJhMmI2MzhkMDYyOGI5MmJhMTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgXCJhbnRkL2Rpc3QvYW50ZC5jc3NcIjtcclxuaW1wb3J0ICcuLi9Dc3Mvc3R5bGVzcy5jc3MnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgY3JlYXRlTWVkaWEgfSBmcm9tICdAYXJ0c3kvZnJlc25lbCdcclxuaW1wb3J0IHtcclxuICBDb250YWluZXIsXHJcbiAgRGl2aWRlcixcclxuICBEcm9wZG93bixcclxuICBHcmlkLFxyXG4gIEhlYWRlcixcclxuICBJbWFnZSxcclxuICBMaXN0LFxyXG4gIE1lbnUsXHJcbiAgU2VnbWVudCxcclxuICBJbnB1dCwgSWNvblxyXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5jb25zdCB7IE1lZGlhQ29udGV4dFByb3ZpZGVyLCBNZWRpYSB9ID0gY3JlYXRlTWVkaWEoe1xyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICBtb2JpbGU6IDAsXHJcbiAgICB0YWJsZXQ6IDc2OCxcclxuICAgIGNvbXB1dGVyOiAxMDI0LFxyXG4gIH0sXHJcbn0pXHJcbmNvbnN0IGxpbmtTdHlsZSA9IHtcclxuICBtYXJnaW5SaWdodDogMTVcclxufVxyXG5cclxuY2xhc3MgSGVhZGVycyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHE6ICcnLFxyXG4gICAgICBhOiAnJyxcclxuICAgICAgczogJycsXHJcbiAgICAgIGFjdGl2ZUl0ZW06ICcnXHJcbiAgICB9XHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgfVxyXG4gIGhhbmRsZUNoYW5nZShldmVudCwgZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBxOiBkYXRhLnZhbHVlIH0pO1xyXG4gIH1cclxuICBoYW5kbGVJdGVtQ2xpY2sgPSAoZGF0YSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUl0ZW06IGRhdGEgfSlcclxuICBoYW5kbGVTdWJtaXQoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygxMTIpO1xyXG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7YTonMSd9KVxyXG4gICAgUm91dGVyLnB1c2goYC9zZWFyY2gvJHt0aGlzLnN0YXRlLnN9LzFgKVxyXG4gIH1cclxuICBjaGFuZ2VfYWxpYXMgPSAoYWxpYXMpID0+IHtcclxuICAgIHZhciBzdHIgPSBhbGlhcztcclxuICAgIHN0ciA9IHN0ci50b0xvd2VyQ2FzZSgpO1xyXG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL8OgfMOhfOG6oXzhuqN8w6N8w6J84bqnfOG6pXzhuq184bqpfOG6q3zEg3zhurF84bqvfOG6t3zhurN84bq1L2csIFwiYVwiKTtcclxuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC/DqHzDqXzhurl84bq7fOG6vXzDqnzhu4F84bq/fOG7h3zhu4N84buFL2csIFwiZVwiKTtcclxuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC/DrHzDrXzhu4t84buJfMSpL2csIFwiaVwiKTtcclxuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC/DsnzDs3zhu4184buPfMO1fMO0fOG7k3zhu5F84buZfOG7lXzhu5d8xqF84budfOG7m3zhu6N84buffOG7oS9nLCBcIm9cIik7XHJcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvw7l8w7p84bulfOG7p3zFqXzGsHzhu6t84bupfOG7sXzhu6184buvL2csIFwidVwiKTtcclxuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC/hu7N8w7184bu1fOG7t3zhu7kvZywgXCJ5XCIpO1xyXG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL8SRL2csIFwiZFwiKTtcclxuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC8hfEB8JXxcXF58XFwqfFxcKHxcXCl8XFwrfFxcPXxcXDx8XFw+fFxcP3xcXC98LHxcXC58XFw6fFxcO3xcXCd8XFxcInxcXCZ8XFwjfFxcW3xcXF18fnxcXCR8X3xgfC18e3x9fFxcfHxcXFxcL2csIFwiIFwiKTtcclxuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC8gKyAvZywgXCIgXCIpO1xyXG4gICAgc3RyID0gc3RyLnRyaW0oKTtcclxuICAgIHJldHVybiBzdHI7XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUucSAhPT0gcHJldlN0YXRlLnEpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgczogdGhpcy5jaGFuZ2VfYWxpYXModGhpcy5zdGF0ZS5xKS5zcGxpdCgnICcpLmpvaW4oJ18nKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgYWN0aXZlSXRlbSB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3RoaXMuc3RhdGUuYSA9PT0gJzEnICYmIFJvdXRlci5wdXNoKCcvc2VhcmNoLycgKyB0aGlzLnN0YXRlLnMgKyAnLzEnKX1cclxuICAgICAgICA8TWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICA8TWVkaWEgZ3JlYXRlclRoYW49J21vYmlsZSc+XHJcbiAgICAgICAgICAgIDxTZWdtZW50IGludmVydGVkPlxyXG4gICAgICAgICAgICAgIDxNZW51IGludmVydGVkIHNlY29uZGFyeT5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9cIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdob21lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnaG9tZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUl0ZW1DbGljaygnaG9tZScpfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc2l6ZT0ndGlueScgc3JjPScvbG9nby5wbmcnIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMS41ZW0nIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICBUcmFuZyBjaOG7p1xyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi91cGRhdGUvMVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J2xhc3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdsYXN0J31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlSXRlbUNsaWNrKCdsYXN0Jyl9Pk3hu5tpIGPhuq1wIG5o4bqtdDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9ob3QvMVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J2hvdCdcclxuICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ2hvdCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUl0ZW1DbGljaygnaG90Jyl9PlRydXnhu4duIGhvdDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9jb21wbGV0ZS8xXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nY29tcGxldGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdjb21wbGV0ZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUl0ZW1DbGljaygnY29tcGxldGUnKX0+VHJ1eeG7h24gZnVsbDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9J2EnIHBvc2l0aW9uPSdyaWdodCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uPXs8SWNvbiBuYW1lPSdzZWFyY2gnIGludmVydGVkIGNpcmN1bGFyIGxpbmsgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVTdWJtaXQoKX0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVMOsbSBraeG6v20uLi4nIG9uQ2hhbmdlPXsoZSwgZGF0YSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSwgZGF0YSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgIDwvU2VnbWVudD5cclxuXHJcbiAgICAgICAgICA8L01lZGlhPlxyXG4gICAgICAgICAgPE1lZGlhIGF0PSdtb2JpbGUnPlxyXG4gICAgICAgICAgICA8U2VnbWVudCBpbnZlcnRlZD5cclxuICAgICAgICAgICAgICA8TWVudSBpbnZlcnRlZCBwb2ludGluZyBzZWNvbmRhcnk+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0naG9tZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ2hvbWUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVJdGVtQ2xpY2soJ2hvbWUnKX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNpemU9J3RpbnknIHNyYz0nL2xvZ28ucG5nJyBzdHlsZT17eyBtYXJnaW5SaWdodDogJzEuNWVtJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9J2EnIHBvc2l0aW9uPSdyaWdodCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uPXs8SWNvbiBuYW1lPSdzZWFyY2gnIGludmVydGVkIGNpcmN1bGFyIGxpbmsgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVTdWJtaXQoKX0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VhcmNoLi4uJyBvbkNoYW5nZT17KGUsIGRhdGEpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsIGRhdGEpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICA8L01lZGlhPlxyXG4gICAgICAgIDwvTWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJzOyJdLCJzb3VyY2VSb290IjoiIn0=