webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../config/config */ "./config/config.js");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @artsy/fresnel */ "./node_modules/@artsy/fresnel/dist/index.js");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_14__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var _createMedia = Object(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_14__["createMedia"])({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024
  }
}),
    MediaContextProvider = _createMedia.MediaContextProvider,
    Media = _createMedia.Media;

var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "render",
    value: function render() {
      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_11__["default"], null, __jsx("style", null, "\n      html, body {\n        background-color: #242933 !important;\n      }\n      p {\n        align-content: center;\n        background-color: #495285;\n        color: #fff;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        min-height: 6em;\n      }\n      p > span {\n        opacity: 0.4;\n        text-align: center;\n      }\n    }\n    "), __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_10__["Helmet"], null, __jsx("title", null, "TruyenNT - \u0110\u1ECDc truy\u1EC7n online"), __jsx("meta", {
        name: "description",
        content: "\u0110\u1ECDc truy\u1EC7n online, \u0111\u1ECDc truy\u1EC7n ch\u1EEF, truy\u1EC7n hay, truy\u1EC7n full. Truy\u1EC7n Full lu\xF4n t\u1ED5ng h\u1EE3p v\xE0 c\u1EADp nh\u1EADt c\xE1c ch\u01B0\u01A1ng truy\u1EC7n m\u1ED9t c\xE1ch nhanh nh\u1EA5t."
      }), __jsx("meta", {
        name: "theme-color",
        content: "#008f68"
      }), __jsx("meta", {
        name: "keywords",
        content: "doc truyen, doc truyen online, truyen hay, truyen chu, truyen ngon tinh, truy\u1EC7n ng\xF4n t\xECnh"
      }), __jsx("link", {
        rel: "canonical",
        href: "https://truyennt.com/"
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Container"], {
        style: {
          marginTop: '2em'
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        mobile: 16,
        tablet: 16,
        computer: 16
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"], {
        className: "title-name",
        as: "h1"
      }, "Truy\u1EC7n m\u1EDBi c\u1EADp nh\u1EADt")), this.props.mangalist.length !== 0 ? this.props.mangalist.map(function (mangalist) {
        return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
          mobile: 16,
          tablet: 116,
          computer: 16
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
          width: 4
        }, __jsx(MediaContextProvider, null, __jsx(Media, {
          greaterThan: "mobile"
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          as: "/novel/".concat(mangalist.idnovel, "1"),
          href: "/novel/[id]1"
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Image"], {
          fluid: true,
          className: "item-img",
          src: mangalist.cover,
          style: {
            height: 82
          }
        }))), __jsx(Media, {
          at: "mobile"
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          as: "/novel/".concat(mangalist.idnovel, "1"),
          href: "/novel/[id]/1"
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Image"], {
          fluid: true,
          className: "item-img",
          src: mangalist.mcover,
          style: {
            height: 85
          }
        }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
          width: 9
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
          width: 8
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          as: "/novel/".concat(mangalist.idnovel, "1"),
          href: "/novel/[id]/1"
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"], {
          className: "book-name",
          as: "h2"
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
          color: "white",
          name: "book"
        }), " ", mangalist.novelsname))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
          width: 16,
          style: {
            marginTop: 15
          }
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"], {
          className: "book-catalog",
          size: "tiny",
          as: "h3"
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
          color: "white",
          name: "pencil"
        }), mangalist.author)))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
          width: 3
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"], {
          className: "book-catalog",
          size: "tiny",
          as: "h4"
        }, mangalist.lasterchapter))));
      }) : null)));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, json;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("".concat(_config_config__WEBPACK_IMPORTED_MODULE_13__["API_URL"], "update?page=1"));

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                json = _context.sent;
                return _context.abrupt("return", {
                  mangalist: json.data
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiY3JlYXRlTWVkaWEiLCJicmVha3BvaW50cyIsIm1vYmlsZSIsInRhYmxldCIsImNvbXB1dGVyIiwiTWVkaWFDb250ZXh0UHJvdmlkZXIiLCJNZWRpYSIsIkluZGV4IiwibWFyZ2luVG9wIiwicHJvcHMiLCJtYW5nYWxpc3QiLCJsZW5ndGgiLCJtYXAiLCJpZG5vdmVsIiwiY292ZXIiLCJoZWlnaHQiLCJtY292ZXIiLCJub3ZlbHNuYW1lIiwiYXV0aG9yIiwibGFzdGVyY2hhcHRlciIsImZldGNoIiwiQVBJX1VSTCIsInJlcyIsImpzb24iLCJkYXRhIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFZQTtBQUNBOzttQkFDd0NBLG1FQUFXLENBQUM7QUFDbERDLGFBQVcsRUFBRTtBQUNYQyxVQUFNLEVBQUUsQ0FERztBQUVYQyxVQUFNLEVBQUUsR0FGRztBQUdYQyxZQUFRLEVBQUU7QUFIQztBQURxQyxDQUFELEM7SUFBM0NDLG9CLGdCQUFBQSxvQjtJQUFzQkMsSyxnQkFBQUEsSzs7SUFPVEMsSzs7Ozs7Ozs7Ozs7Ozs2QkFTVjtBQUNQLGFBQ0UsTUFBQyw2REFBRCxRQUNFLG1hQURGLEVBc0JFLE1BQUMsb0RBQUQsUUFDRSxtRUFERixFQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDLFFBRkYsRUFHRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQyxRQUhGLEVBSUU7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUIsUUFKRixFQUtFO0FBQU0sV0FBRyxFQUFDLFdBQVY7QUFBc0IsWUFBSSxFQUFDO0FBQTNCLFFBTEYsQ0F0QkYsRUE2QkUs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QUM7QUFBaEQsV0FBc0RSLFNBQVMsQ0FBQ1MsYUFBaEUsQ0FERixDQW5DRixDQURGLENBRGdDO0FBQUEsT0FBbEMsQ0FERCxHQTJDTSxJQS9DVCxDQURGLENBN0JGLENBREY7QUFvRkQ7Ozs7Ozs7Ozs7O3VCQTNGbUJDLEtBQUssV0FBSUMsdURBQUosbUI7OztBQUFqQkMsbUI7O3VCQUNhQSxHQUFHLENBQUNDLElBQUosRTs7O0FBQWJBLG9CO2lEQUVDO0FBQUViLDJCQUFTLEVBQUVhLElBQUksQ0FBQ0M7QUFBbEIsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFOd0JDLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDUzYjM1YjVhMTNlNWVjN2I5MGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0J1xyXG5pbXBvcnQge1xyXG4gIENvbnRhaW5lcixcclxuICBEaXZpZGVyLFxyXG4gIERyb3Bkb3duLFxyXG4gIEdyaWQsXHJcbiAgSGVhZGVyLFxyXG4gIEltYWdlLFxyXG4gIExpc3QsXHJcbiAgTWVudSxcclxuICBJY29uLFxyXG4gIFNlZ21lbnQsXHJcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZydcclxuaW1wb3J0IHsgY3JlYXRlTWVkaWEgfSBmcm9tICdAYXJ0c3kvZnJlc25lbCdcclxuY29uc3QgeyBNZWRpYUNvbnRleHRQcm92aWRlciwgTWVkaWEgfSA9IGNyZWF0ZU1lZGlhKHtcclxuICBicmVha3BvaW50czoge1xyXG4gICAgbW9iaWxlOiAwLFxyXG4gICAgdGFibGV0OiA3NjgsXHJcbiAgICBjb21wdXRlcjogMTAyNCxcclxuICB9LFxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH11cGRhdGU/cGFnZT0xYClcclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhqc29uLmRhdGEpXHJcbiAgICByZXR1cm4geyBtYW5nYWxpc3Q6IGpzb24uZGF0YSB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgIHtgXHJcbiAgICAgIGh0bWwsIGJvZHkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MzMgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTI4NTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWluLWhlaWdodDogNmVtO1xyXG4gICAgICB9XHJcbiAgICAgIHAgPiBzcGFuIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPEhlbG1ldD5cclxuICAgICAgICAgIDx0aXRsZT5UcnV5ZW5OVCAtIMSQ4buNYyB0cnV54buHbiBvbmxpbmU8L3RpdGxlPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIsSQ4buNYyB0cnV54buHbiBvbmxpbmUsIMSR4buNYyB0cnV54buHbiBjaOG7rywgdHJ1eeG7h24gaGF5LCB0cnV54buHbiBmdWxsLiBUcnV54buHbiBGdWxsIGx1w7RuIHThu5VuZyBo4bujcCB2w6AgY+G6rXAgbmjhuq10IGPDoWMgY2jGsMahbmcgdHJ1eeG7h24gbeG7mXQgY8OhY2ggbmhhbmggbmjhuqV0LlwiIC8+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzAwOGY2OFwiIC8+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiZG9jIHRydXllbiwgZG9jIHRydXllbiBvbmxpbmUsIHRydXllbiBoYXksIHRydXllbiBjaHUsIHRydXllbiBuZ29uIHRpbmgsIHRydXnhu4duIG5nw7RuIHTDrG5oXCIgLz5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCJodHRwczovL3RydXllbm50LmNvbS9cIj48L2xpbms+XHJcbiAgICAgICAgPC9IZWxtZXQ+XHJcbiAgICAgICAgPENvbnRhaW5lciBzdHlsZT17eyBtYXJnaW5Ub3A6ICcyZW0nIH19PlxyXG4gICAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBtb2JpbGU9ezE2fSB0YWJsZXQ9ezE2fSBjb21wdXRlcj17MTZ9PlxyXG4gICAgICAgICAgICAgIDxIZWFkZXIgY2xhc3NOYW1lPSd0aXRsZS1uYW1lJyBhcz0naDEnPlRydXnhu4duIG3hu5tpIGPhuq1wIG5o4bqtdDwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5tYW5nYWxpc3QubGVuZ3RoICE9PSAwID9cclxuICAgICAgICAgICAgICB0aGlzLnByb3BzLm1hbmdhbGlzdC5tYXAobWFuZ2FsaXN0ID0+IChcclxuICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBtb2JpbGU9ezE2fSB0YWJsZXQ9ezExNn0gY29tcHV0ZXI9ezE2fT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNZWRpYUNvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhIGdyZWF0ZXJUaGFuPSdtb2JpbGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9ub3ZlbC8ke21hbmdhbGlzdC5pZG5vdmVsfTFgfSBocmVmPXtgL25vdmVsL1tpZF0xYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgZmx1aWQgY2xhc3NOYW1lPSdpdGVtLWltZycgc3JjPXttYW5nYWxpc3QuY292ZXJ9IHN0eWxlPXt7IGhlaWdodDogODIgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lZGlhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVkaWEgYXQ9J21vYmlsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL25vdmVsLyR7bWFuZ2FsaXN0Lmlkbm92ZWx9MWB9IGhyZWY9e2Avbm92ZWwvW2lkXS8xYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgZmx1aWQgY2xhc3NOYW1lPSdpdGVtLWltZycgc3JjPXttYW5nYWxpc3QubWNvdmVyfSBzdHlsZT17eyBoZWlnaHQ6IDg1IH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lZGlhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9NZWRpYUNvbnRleHRQcm92aWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9ub3ZlbC8ke21hbmdhbGlzdC5pZG5vdmVsfTFgfSBocmVmPXtgL25vdmVsL1tpZF0vMWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlciBjbGFzc05hbWU9J2Jvb2stbmFtZScgYXM9J2gyJz48SWNvbiBjb2xvcj0nd2hpdGUnIG5hbWU9J2Jvb2snIC8+IHttYW5nYWxpc3Qubm92ZWxzbmFtZX08L0hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTZ9IHN0eWxlPXt7IG1hcmdpblRvcDogMTUgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlciBjbGFzc05hbWU9J2Jvb2stY2F0YWxvZycgc2l6ZT0ndGlueScgYXM9J2gzJz48SWNvbiBjb2xvcj0nd2hpdGUnIG5hbWU9J3BlbmNpbCcgLz57bWFuZ2FsaXN0LmF1dGhvcn08L0hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEhlYWRlciBjbGFzc05hbWU9J2Jvb2stY2F0YWxvZycgc2l6ZT0ndGlueScgYXM9J2g0Jz57bWFuZ2FsaXN0Lmxhc3RlcmNoYXB0ZXJ9PC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICApKSA6IG51bGx9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICA8L0xheW91dD5cclxuICAgIClcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9