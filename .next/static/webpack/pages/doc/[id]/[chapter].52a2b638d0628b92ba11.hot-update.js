webpackHotUpdate_N_E("pages/doc/[id]/[chapter]",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiY3JlYXRlTWVkaWEiLCJicmVha3BvaW50cyIsIm1vYmlsZSIsInRhYmxldCIsImNvbXB1dGVyIiwiTWVkaWFDb250ZXh0UHJvdmlkZXIiLCJNZWRpYSIsImxpbmtTdHlsZSIsIm1hcmdpblJpZ2h0IiwiSGVhZGVycyIsInByb3BzIiwiZGF0YSIsInNldFN0YXRlIiwiYWN0aXZlSXRlbSIsImFsaWFzIiwic3RyIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwidHJpbSIsInN0YXRlIiwicSIsImEiLCJzIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwiUm91dGVyIiwicHVzaCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsImNoYW5nZV9hbGlhcyIsInNwbGl0Iiwiam9pbiIsImhhbmRsZUl0ZW1DbGljayIsImUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O21CQVl3Q0EsbUVBQVcsQ0FBQztBQUNsREMsYUFBVyxFQUFFO0FBQ1hDLFVBQU0sRUFBRSxDQURHO0FBRVhDLFVBQU0sRUFBRSxHQUZHO0FBR1hDLFlBQVEsRUFBRTtBQUhDO0FBRHFDLENBQUQsQztJQUEzQ0Msb0IsZ0JBQUFBLG9CO0lBQXNCQyxLLGdCQUFBQSxLOztBQU85QixJQUFNQyxTQUFTLEdBQUc7QUFDaEJDLGFBQVcsRUFBRTtBQURHLENBQWxCOztJQUlNQyxPOzs7OztBQUNKLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQiwwTkFlRCxVQUFDQyxJQUFEO0FBQUEsYUFBVSxNQUFLQyxRQUFMLENBQWM7QUFBRUMsa0JBQVUsRUFBRUY7QUFB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QUM7QUFBM0IsU0FDRSxNQUFDLHdEQUFEO0FBQ0UsWUFBSSxFQUFFLE1BQUMsdURBQUQ7QUFBTSxjQUFJLEVBQUMsUUFBWDtBQUFvQixrQkFBUSxNQUE1QjtBQUE2QixrQkFBUSxNQUFyQztBQUFzQyxjQUFJLE1BQTFDO0FBQTJDLGlCQUFPLEVBQUU7QUFBQSxtQkFBTSxNQUFJLENBQUNpQixZQUFMLEVBQU47QUFBQTtBQUFwRCxVQURSO0FBRUUsbUJBQVcsRUFBQyxXQUZkO0FBRTBCLGdCQUFRLEVBQUUsa0JBQUNhLENBQUQsRUFBSTNCLElBQUo7QUFBQSxpQkFBYSxNQUFJLENBQUNZLFlBQUwsQ0FBa0JlLENBQWxCLEVBQXFCM0IsSUFBckIsQ0FBYjtBQUFBO0FBRnBDLFFBREYsQ0FYRixDQURGLENBREYsQ0FERixDQWhERixDQUZGLENBREY7QUErRUQ7Ozs7RUFoSW1CNEIsK0M7O0FBbUlQOUIsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jL1tpZF0vW2NoYXB0ZXJdLjUyYTJiNjM4ZDA2MjhiOTJiYTExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XHJcbmltcG9ydCAnLi4vQ3NzL3N0eWxlc3MuY3NzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGNyZWF0ZU1lZGlhIH0gZnJvbSAnQGFydHN5L2ZyZXNuZWwnXHJcbmltcG9ydCB7XHJcbiAgQ29udGFpbmVyLFxyXG4gIERpdmlkZXIsXHJcbiAgRHJvcGRvd24sXHJcbiAgR3JpZCxcclxuICBIZWFkZXIsXHJcbiAgSW1hZ2UsXHJcbiAgTGlzdCxcclxuICBNZW51LFxyXG4gIFNlZ21lbnQsXHJcbiAgSW5wdXQsIEljb25cclxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuY29uc3QgeyBNZWRpYUNvbnRleHRQcm92aWRlciwgTWVkaWEgfSA9IGNyZWF0ZU1lZGlhKHtcclxuICBicmVha3BvaW50czoge1xyXG4gICAgbW9iaWxlOiAwLFxyXG4gICAgdGFibGV0OiA3NjgsXHJcbiAgICBjb21wdXRlcjogMTAyNCxcclxuICB9LFxyXG59KVxyXG5jb25zdCBsaW5rU3R5bGUgPSB7XHJcbiAgbWFyZ2luUmlnaHQ6IDE1XHJcbn1cclxuXHJcbmNsYXNzIEhlYWRlcnMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBxOiAnJyxcclxuICAgICAgYTogJycsXHJcbiAgICAgIHM6ICcnLFxyXG4gICAgICBhY3RpdmVJdGVtOiAnJ1xyXG4gICAgfVxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuICBoYW5kbGVDaGFuZ2UoZXZlbnQsIGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcTogZGF0YS52YWx1ZSB9KTtcclxuICB9XHJcbiAgaGFuZGxlSXRlbUNsaWNrID0gKGRhdGEpID0+IHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJdGVtOiBkYXRhIH0pXHJcbiAgaGFuZGxlU3VibWl0KCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coMTEyKTtcclxuICAgIC8vIHRoaXMuc2V0U3RhdGUoe2E6JzEnfSlcclxuICAgIFJvdXRlci5wdXNoKGAvc2VhcmNoLyR7dGhpcy5zdGF0ZS5zfS8xYClcclxuICB9XHJcbiAgY2hhbmdlX2FsaWFzID0gKGFsaWFzKSA9PiB7XHJcbiAgICB2YXIgc3RyID0gYWxpYXM7XHJcbiAgICBzdHIgPSBzdHIudG9Mb3dlckNhc2UoKTtcclxuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC/DoHzDoXzhuqF84bqjfMOjfMOifOG6p3zhuqV84bqtfOG6qXzhuqt8xIN84bqxfOG6r3zhurd84bqzfOG6tS9nLCBcImFcIik7XHJcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvw6h8w6l84bq5fOG6u3zhur18w6p84buBfOG6v3zhu4d84buDfOG7hS9nLCBcImVcIik7XHJcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvw6x8w6184buLfOG7iXzEqS9nLCBcImlcIik7XHJcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvw7J8w7N84buNfOG7j3zDtXzDtHzhu5N84buRfOG7mXzhu5V84buXfMahfOG7nXzhu5t84bujfOG7n3zhu6EvZywgXCJvXCIpO1xyXG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL8O5fMO6fOG7pXzhu6d8xal8xrB84burfOG7qXzhu7F84butfOG7ry9nLCBcInVcIik7XHJcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgv4buzfMO9fOG7tXzhu7d84bu5L2csIFwieVwiKTtcclxuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC/EkS9nLCBcImRcIik7XHJcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvIXxAfCV8XFxefFxcKnxcXCh8XFwpfFxcK3xcXD18XFw8fFxcPnxcXD98XFwvfCx8XFwufFxcOnxcXDt8XFwnfFxcXCJ8XFwmfFxcI3xcXFt8XFxdfH58XFwkfF98YHwtfHt8fXxcXHx8XFxcXC9nLCBcIiBcIik7XHJcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvICsgL2csIFwiIFwiKTtcclxuICAgIHN0ciA9IHN0ci50cmltKCk7XHJcbiAgICByZXR1cm4gc3RyO1xyXG4gIH1cclxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLnEgIT09IHByZXZTdGF0ZS5xKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHM6IHRoaXMuY2hhbmdlX2FsaWFzKHRoaXMuc3RhdGUucSkuc3BsaXQoJyAnKS5qb2luKCdfJylcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGFjdGl2ZUl0ZW0gfSA9IHRoaXMuc3RhdGVcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmEgPT09ICcxJyAmJiBSb3V0ZXIucHVzaCgnL3NlYXJjaC8nICsgdGhpcy5zdGF0ZS5zICsgJy8xJyl9XHJcbiAgICAgICAgPE1lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgPE1lZGlhIGdyZWF0ZXJUaGFuPSdtb2JpbGUnPlxyXG4gICAgICAgICAgICA8U2VnbWVudCBpbnZlcnRlZD5cclxuICAgICAgICAgICAgICA8TWVudSBpbnZlcnRlZCBzZWNvbmRhcnk+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0naG9tZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ2hvbWUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVJdGVtQ2xpY2soJ2hvbWUnKX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNpemU9J3RpbnknIHNyYz0nL2xvZ28ucG5nJyBzdHlsZT17eyBtYXJnaW5SaWdodDogJzEuNWVtJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgVHJhbmcgY2jhu6dcclxuICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvdXBkYXRlLzFcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdsYXN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnbGFzdCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUl0ZW1DbGljaygnbGFzdCcpfT5N4bubaSBj4bqtcCBuaOG6rXQ8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvaG90LzFcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdob3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdob3QnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVJdGVtQ2xpY2soJ2hvdCcpfT5UcnV54buHbiBob3Q8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvY29tcGxldGUvMVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J2NvbXBsZXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnY29tcGxldGUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVJdGVtQ2xpY2soJ2NvbXBsZXRlJyl9PlRydXnhu4duIGZ1bGw8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPSdhJyBwb3NpdGlvbj0ncmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj17PEljb24gbmFtZT0nc2VhcmNoJyBpbnZlcnRlZCBjaXJjdWxhciBsaW5rIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlU3VibWl0KCl9IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1TDrG0ga2nhur9tLi4uJyBvbkNoYW5nZT17KGUsIGRhdGEpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsIGRhdGEpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICA8L1NlZ21lbnQ+XHJcblxyXG4gICAgICAgICAgPC9NZWRpYT5cclxuICAgICAgICAgIDxNZWRpYSBhdD0nbW9iaWxlJz5cclxuICAgICAgICAgICAgPFNlZ21lbnQgaW52ZXJ0ZWQ+XHJcbiAgICAgICAgICAgICAgPE1lbnUgaW52ZXJ0ZWQgcG9pbnRpbmcgc2Vjb25kYXJ5PlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J2hvbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdob21lJ31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlSXRlbUNsaWNrKCdob21lJyl9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzaXplPSd0aW55JyBzcmM9Jy9sb2dvLnBuZycgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxLjVlbScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPSdhJyBwb3NpdGlvbj0ncmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj17PEljb24gbmFtZT0nc2VhcmNoJyBpbnZlcnRlZCBjaXJjdWxhciBsaW5rIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlU3VibWl0KCl9IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1NlYXJjaC4uLicgb25DaGFuZ2U9eyhlLCBkYXRhKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLCBkYXRhKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgPC9NZWRpYT5cclxuICAgICAgICA8L01lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyczsiXSwic291cmNlUm9vdCI6IiJ9