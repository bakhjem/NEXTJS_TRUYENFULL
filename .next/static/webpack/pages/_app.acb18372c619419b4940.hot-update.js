webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/gtag */ "./lib/gtag.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! nextjs-progressbar */ "./node_modules/nextjs-progressbar/index.js");
/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_14__);






var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







 // import "nprogress/nprogress.css";



next_router__WEBPACK_IMPORTED_MODULE_7___default.a.events.on('routeChangeStart', function (url) {
  console.log("Loading: ".concat(url));
  nprogress__WEBPACK_IMPORTED_MODULE_9___default.a.start();
});
next_router__WEBPACK_IMPORTED_MODULE_7___default.a.events.on('routeChangeComplete', function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_9___default.a.done();
});
next_router__WEBPACK_IMPORTED_MODULE_7___default.a.events.on('routeChangeError', function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_9___default.a.done();
});
next_router__WEBPACK_IMPORTED_MODULE_7___default.a.events.on('routeChangeComplete', function (url) {
  return _lib_gtag__WEBPACK_IMPORTED_MODULE_11__["pageview"](url);
});

var MyApp = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, _App);

  var _super = _createSuper(MyApp);

  function MyApp() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MyApp);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.events.on('routeChangeComplete', function () {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      });
    } // static async getInitialProps({ Component, ctx }) {
    //     const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    //     //Anything returned here can be accessed by the client
    //     return { pageProps: pageProps };
    // }

  }, {
    key: "render",
    value: function render() {
      //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_8__["Provider"], {
        store: _redux_store__WEBPACK_IMPORTED_MODULE_12__["store"]
      }, __jsx(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_14___default.a, {
        color: "#29D",
        startPosition: 0.3,
        stopDelayMs: 200,
        height: "10"
      }), __jsx(Component, pageProps));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_6___default.a); //withRedux wrapper that passes the store to the App Component


/* harmony default export */ __webpack_exports__["default"] = (MyApp); // export default App

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJldmVudHMiLCJvbiIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJOUHJvZ3Jlc3MiLCJzdGFydCIsImRvbmUiLCJndGFnIiwiTXlBcHAiLCJ3aW5kb3ciLCJzY3JvbGwiLCJ0b3AiLCJsZWZ0IiwiYmVoYXZpb3IiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIiwiQXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBRUFBLGtEQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixrQkFBakIsRUFBcUMsVUFBQUMsR0FBRyxFQUFJO0FBQzFDQyxTQUFPLENBQUNDLEdBQVIsb0JBQXdCRixHQUF4QjtBQUNBRyxrREFBUyxDQUFDQyxLQUFWO0FBQ0QsQ0FIRDtBQUlBUCxrREFBTSxDQUFDQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIscUJBQWpCLEVBQXdDO0FBQUEsU0FBTUksZ0RBQVMsQ0FBQ0UsSUFBVixFQUFOO0FBQUEsQ0FBeEM7QUFDQVIsa0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQztBQUFBLFNBQU1JLGdEQUFTLENBQUNFLElBQVYsRUFBTjtBQUFBLENBQXJDO0FBQ0FSLGtEQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixxQkFBakIsRUFBd0MsVUFBQUMsR0FBRztBQUFBLFNBQUlNLG1EQUFBLENBQWNOLEdBQWQsQ0FBSjtBQUFBLENBQTNDOztJQUVNTyxLOzs7Ozs7Ozs7Ozs7O3dDQUNnQjtBQUNsQlYsd0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLHFCQUFqQixFQUF3QyxZQUFNO0FBQzVDUyxjQUFNLENBQUNDLE1BQVAsQ0FBYztBQUNaQyxhQUFHLEVBQUUsQ0FETztBQUVaQyxjQUFJLEVBQUUsQ0FGTTtBQUdaQyxrQkFBUSxFQUFFO0FBSEUsU0FBZDtBQUtELE9BTkQ7QUFPRCxLLENBQ0Q7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs2QkFDUztBQUNQO0FBRE8sd0JBRTJCLEtBQUtDLEtBRmhDO0FBQUEsVUFFQ0MsU0FGRCxlQUVDQSxTQUZEO0FBQUEsVUFFWUMsU0FGWixlQUVZQSxTQUZaO0FBSVAsYUFDRSxNQUFDLG9EQUFEO0FBQVUsYUFBSyxFQUFFQyxtREFBS0E7QUFBdEIsU0FDRSxNQUFDLDBEQUFEO0FBQ0UsYUFBSyxFQUFDLE1BRFI7QUFFRSxxQkFBYSxFQUFFLEdBRmpCO0FBR0UsbUJBQVcsRUFBRSxHQUhmO0FBSUUsY0FBTSxFQUFDO0FBSlQsUUFERixFQU9FLE1BQUMsU0FBRCxFQUFlRCxTQUFmLENBUEYsQ0FERjtBQVdEOzs7O0VBL0JpQkUsK0MsR0FtQ3BCOzs7QUFDZ0JWLG9FQUFoQixFLENBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hY2IxODM3MmM2MTk0MTliNDk0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJ1xyXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJ1xyXG5pbXBvcnQgKiBhcyBndGFnIGZyb20gJy4uL2xpYi9ndGFnJ1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uL3JlZHV4L3N0b3JlJztcclxuLy8gaW1wb3J0IFwibnByb2dyZXNzL25wcm9ncmVzcy5jc3NcIjtcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xyXG5pbXBvcnQgTmV4dE5wcm9ncmVzcyBmcm9tICduZXh0anMtcHJvZ3Jlc3NiYXInO1xyXG5cclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIHVybCA9PiB7XHJcbiAgY29uc29sZS5sb2coYExvYWRpbmc6ICR7dXJsfWApXHJcbiAgTlByb2dyZXNzLnN0YXJ0KClcclxufSlcclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpXHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKVxyXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgdXJsID0+IGd0YWcucGFnZXZpZXcodXJsKSlcclxuXHJcbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5zY3JvbGwoe1xyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICAvLyBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCBjdHggfSkge1xyXG4gIC8vICAgICBjb25zdCBwYWdlUHJvcHMgPSBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzID8gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpIDoge307XHJcblxyXG4gIC8vICAgICAvL0FueXRoaW5nIHJldHVybmVkIGhlcmUgY2FuIGJlIGFjY2Vzc2VkIGJ5IHRoZSBjbGllbnRcclxuICAvLyAgICAgcmV0dXJuIHsgcGFnZVByb3BzOiBwYWdlUHJvcHMgfTtcclxuICAvLyB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgLy9wYWdlUHJvcHMgdGhhdCB3ZXJlIHJldHVybmVkICBmcm9tICdnZXRJbml0aWFsUHJvcHMnIGFyZSBzdG9yZWQgaW4gdGhlIHByb3BzIGkuZS4gcGFnZXByb3BzXHJcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzLCB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICA8TmV4dE5wcm9ncmVzc1xyXG4gICAgICAgICAgY29sb3I9XCIjMjlEXCJcclxuICAgICAgICAgIHN0YXJ0UG9zaXRpb249ezAuM31cclxuICAgICAgICAgIHN0b3BEZWxheU1zPXsyMDB9XHJcbiAgICAgICAgICBoZWlnaHQ9XCIxMFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vd2l0aFJlZHV4IHdyYXBwZXIgdGhhdCBwYXNzZXMgdGhlIHN0b3JlIHRvIHRoZSBBcHAgQ29tcG9uZW50XHJcbmV4cG9ydCBkZWZhdWx0IChNeUFwcCk7XHJcbi8vIGV4cG9ydCBkZWZhdWx0IEFwcCJdLCJzb3VyY2VSb290IjoiIn0=