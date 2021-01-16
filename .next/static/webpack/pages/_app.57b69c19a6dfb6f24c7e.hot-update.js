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
        options: {
          easing: 'ease',
          speed: 500
        },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJldmVudHMiLCJvbiIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJOUHJvZ3Jlc3MiLCJzdGFydCIsImRvbmUiLCJndGFnIiwiTXlBcHAiLCJ3aW5kb3ciLCJzY3JvbGwiLCJ0b3AiLCJsZWZ0IiwiYmVoYXZpb3IiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIiwiZWFzaW5nIiwic3BlZWQiLCJBcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFFQUEsa0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQyxVQUFBQyxHQUFHLEVBQUk7QUFDMUNDLFNBQU8sQ0FBQ0MsR0FBUixvQkFBd0JGLEdBQXhCO0FBQ0FHLGtEQUFTLENBQUNDLEtBQVY7QUFDRCxDQUhEO0FBSUFQLGtEQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixxQkFBakIsRUFBd0M7QUFBQSxTQUFNSSxnREFBUyxDQUFDRSxJQUFWLEVBQU47QUFBQSxDQUF4QztBQUNBUixrREFBTSxDQUFDQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIsa0JBQWpCLEVBQXFDO0FBQUEsU0FBTUksZ0RBQVMsQ0FBQ0UsSUFBVixFQUFOO0FBQUEsQ0FBckM7QUFDQVIsa0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLHFCQUFqQixFQUF3QyxVQUFBQyxHQUFHO0FBQUEsU0FBSU0sbURBQUEsQ0FBY04sR0FBZCxDQUFKO0FBQUEsQ0FBM0M7O0lBRU1PLEs7Ozs7Ozs7Ozs7Ozs7d0NBQ2dCO0FBQ2xCVix3REFBTSxDQUFDQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIscUJBQWpCLEVBQXdDLFlBQU07QUFDNUNTLGNBQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQ1pDLGFBQUcsRUFBRSxDQURPO0FBRVpDLGNBQUksRUFBRSxDQUZNO0FBR1pDLGtCQUFRLEVBQUU7QUFIRSxTQUFkO0FBS0QsT0FORDtBQU9ELEssQ0FDRDtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7OzZCQUNTO0FBQ1A7QUFETyx3QkFFMkIsS0FBS0MsS0FGaEM7QUFBQSxVQUVDQyxTQUZELGVBRUNBLFNBRkQ7QUFBQSxVQUVZQyxTQUZaLGVBRVlBLFNBRlo7QUFJUCxhQUNFLE1BQUMsb0RBQUQ7QUFBVSxhQUFLLEVBQUVDLG1EQUFLQTtBQUF0QixTQUNFLE1BQUMsMERBQUQ7QUFDRSxhQUFLLEVBQUMsTUFEUjtBQUVFLGVBQU8sRUFBRTtBQUFFQyxnQkFBTSxFQUFFLE1BQVY7QUFBa0JDLGVBQUssRUFBRTtBQUF6QixTQUZYO0FBR0UscUJBQWEsRUFBRSxHQUhqQjtBQUlFLG1CQUFXLEVBQUUsR0FKZjtBQUtFLGNBQU0sRUFBQztBQUxULFFBREYsRUFRRSxNQUFDLFNBQUQsRUFBZUgsU0FBZixDQVJGLENBREY7QUFZRDs7OztFQWhDaUJJLCtDLEdBb0NwQjs7O0FBQ2dCWixvRUFBaEIsRSxDQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNTdiNjljMTlhNmRmYjZmMjRjN2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcydcclxuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcydcclxuaW1wb3J0ICogYXMgZ3RhZyBmcm9tICcuLi9saWIvZ3RhZydcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi9yZWR1eC9zdG9yZSc7XHJcbi8vIGltcG9ydCBcIm5wcm9ncmVzcy9ucHJvZ3Jlc3MuY3NzXCI7XHJcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcclxuaW1wb3J0IE5leHROcHJvZ3Jlc3MgZnJvbSAnbmV4dGpzLXByb2dyZXNzYmFyJztcclxuXHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCB1cmwgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGBMb2FkaW5nOiAke3VybH1gKVxyXG4gIE5Qcm9ncmVzcy5zdGFydCgpXHJcbn0pXHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKVxyXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSlcclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIHVybCA9PiBndGFnLnBhZ2V2aWV3KHVybCkpXHJcblxyXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuc2Nyb2xsKHtcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy8gc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IENvbXBvbmVudCwgY3R4IH0pIHtcclxuICAvLyAgICAgY29uc3QgcGFnZVByb3BzID0gQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA/IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KSA6IHt9O1xyXG5cclxuICAvLyAgICAgLy9Bbnl0aGluZyByZXR1cm5lZCBoZXJlIGNhbiBiZSBhY2Nlc3NlZCBieSB0aGUgY2xpZW50XHJcbiAgLy8gICAgIHJldHVybiB7IHBhZ2VQcm9wczogcGFnZVByb3BzIH07XHJcbiAgLy8gfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIC8vcGFnZVByb3BzIHRoYXQgd2VyZSByZXR1cm5lZCAgZnJvbSAnZ2V0SW5pdGlhbFByb3BzJyBhcmUgc3RvcmVkIGluIHRoZSBwcm9wcyBpLmUuIHBhZ2Vwcm9wc1xyXG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgPE5leHROcHJvZ3Jlc3NcclxuICAgICAgICAgIGNvbG9yPVwiIzI5RFwiXHJcbiAgICAgICAgICBvcHRpb25zPXt7IGVhc2luZzogJ2Vhc2UnLCBzcGVlZDogNTAwIH19XHJcbiAgICAgICAgICBzdGFydFBvc2l0aW9uPXswLjN9XHJcbiAgICAgICAgICBzdG9wRGVsYXlNcz17MjAwfVxyXG4gICAgICAgICAgaGVpZ2h0PVwiMTBcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vL3dpdGhSZWR1eCB3cmFwcGVyIHRoYXQgcGFzc2VzIHRoZSBzdG9yZSB0byB0aGUgQXBwIENvbXBvbmVudFxyXG5leHBvcnQgZGVmYXVsdCAoTXlBcHApO1xyXG4vLyBleHBvcnQgZGVmYXVsdCBBcHAiXSwic291cmNlUm9vdCI6IiJ9