webpackHotUpdate_N_E("pages/novel/[id]/[page]",{

/***/ "./pages/novel/[id]/[page].js":
/*!************************************!*\
  !*** ./pages/novel/[id]/[page].js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../config/config */ "./config/config.js");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @artsy/fresnel */ "./node_modules/@artsy/fresnel/dist/index.js");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_12__);



var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;












var _createMedia = Object(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_12__["createMedia"])({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024
  }
}),
    MediaContextProvider = _createMedia.MediaContextProvider,
    Media = _createMedia.Media;

function Truyen(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var handleChangepage = function handleChangepage(e, data) {
    console.log(data);

    if (data.activePage !== props.page) {
      router.push("/novel/".concat(props.id, "/").concat(data.activePage));
    }
  };

  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("style", null, "\n          html, body {\n            background-color: #242933 !important;\n          }\n          p {\n            align-content: center;\n            background-color: #495285;\n            color: #fff;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            min-height: 6em;\n          }\n          p > span {\n            opacity: 0.4;\n            text-align: center;\n          }\n        }\n        "), __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_8__["Helmet"], null, __jsx("title", null, props.data.novelsname, " -Truy\u1EC7n NT"), __jsx("meta", {
    name: "description",
    content: "\u0110\u1ECDc truy\u1EC7n ".concat(props.data.novelsname, " c\u1EE7a t\xE1c gi\u1EA3 ").concat(props.data.author, ",t\xECnh tr\u1EA1ng: ").concat(props.data.status, ", h\u1ED7 tr\u1EE3 \u0111\u1ECDc tr\xEAn \u0111i\u1EC7n tho\u1EA1i v\xE0 m\xE1y t\xEDnh b\u1EA3ng")
  }), __jsx("meta", {
    name: "theme-color",
    content: "#008f68"
  }), __jsx("meta", {
    name: "keywords",
    content: "".concat(props.data.novelsname, ", \u0111\u1ECDc truy\u1EC7n ").concat(props.data.novelsname, ",\u0111\u1ECDc ").concat(props.data.novelsname, " ho\xE0n,").concat(props.data.novelsname, " full")
  }), __jsx("link", {
    rel: "canonical",
    href: "/novel/".concat(props.data.idnovels, "/1")
  }), __jsx("meta", {
    property: "og:title",
    content: "".concat(props.data.novelsname)
  }), __jsx("meta", {
    property: "og:image",
    content: "".concat(props.data.cover)
  }), __jsx("meta", {
    property: "og:description",
    content: "\u0110\u1ECDc truy\u1EC7n ".concat(props.data.novelsname, " c\u1EE7a t\xE1c gi\u1EA3 ").concat(props.data.author, ",t\xECnh tr\u1EA1ng: ").concat(props.data.status, ", h\u1ED7 tr\u1EE3 \u0111\u1ECDc tr\xEAn \u0111i\u1EC7n tho\u1EA1i v\xE0 m\xE1y t\xEDnh b\u1EA3ng")
  }), __jsx("meta", {
    property: "og:url",
    content: "/novel/".concat(props.data.idnovels, "/1")
  }), __jsx("meta", {
    property: "book:author",
    content: "".concat(props.data.author)
  }), __jsx("meta", {
    property: "book:tag",
    content: "".concat(props.data.novelsname)
  })), __jsx(MediaContextProvider, null, __jsx(Media, {
    greaterThan: "mobile"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Segment"], {
    inverted: true,
    style: {
      maxHeight: '32.625rem',
      padding: '1em 0em'
    },
    vertical: true
  }, __jsx("div", {
    className: "book-info"
  }, __jsx("img", {
    className: "glass_background-img",
    src: props.data.cover
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Container"], {
    style: {}
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
    mobile: 16,
    tablet: 4,
    computer: 4
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Image"], {
    fluid: true,
    className: "item-img",
    src: props.data.cover,
    style: {
      height: '22.75rem'
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
    mobile: 16,
    tablet: 12,
    computer: 12
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Item"].Group, {
    textAlign: "left"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Item"].Content, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Item"].Header, {
    className: "book-title",
    as: "h2"
  }, props.data.novelsname)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Item"].Extra, {
    textAlign: "left",
    style: {
      marginTop: 10
    }
  }, __jsx("span", {
    className: "label"
  }, "T\xE1c gi\u1EA3:"), " ", props.data.author), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Item"].Extra, {
    textAlign: "left",
    style: {
      marginTop: 10
    }
  }, "Th\u1EC3 lo\u1EA1i: ", props.data.genresdata.map(function (genresdata) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      as: "/theloai/".concat(genresdata.idgenres, "1"),
      href: "/theloai/[id]/[page]"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Tag"], {
      color: "#f50"
    }, genresdata.genrename));
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Item"].Extra, {
    textAlign: "left",
    style: {
      marginTop: 10
    }
  }, __jsx("span", {
    className: "label"
  }, "Status:"), " ", props.data.status)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    as: "/doc/".concat(props.data.idnovels, "/").concat(props.data.chapterlist[0].idchapter),
    href: "/doc/[id]/[chapter]"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    size: "huge",
    color: "yellow"
  }, "\u0110\u1ECCC")))))))), __jsx(Media, {
    at: "mobile"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Segment"], {
    inverted: true,
    style: {
      minHeight: '32.625rem',
      padding: '1em 0em'
    },
    vertical: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Container"], {
    style: {}
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
    mobile: 16,
    tablet: 4,
    computer: 4
  }, __jsx("div", {
    className: "basic-info_header__31qug"
  }, __jsx("div", {
    className: "glass_background__p1P4f basic-info_cover-background__1Q9Rl"
  }, __jsx("img", {
    className: "glass_background-img__2je7l",
    src: props.data.cover
  }), __jsx("div", {
    className: "glass_shade__3yav5"
  })), __jsx("div", {
    className: "basic-info_cover-overlay__2gp4w"
  }), __jsx("div", {
    className: "label_container__3-tcR basic-info_cover-wrapper__1mcNB"
  }, __jsx("div", {
    className: "image_image-wrapper__3EJJ6 basic-info_cover__XtNRk"
  }, __jsx("img", {
    src: props.data.cover,
    className: "image_image__j9OCH"
  }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
    mobile: 16,
    tablet: 12,
    computer: 12
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Item"].Group, {
    textAlign: "center"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Item"].Content, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Item"].Header, {
    className: "book-title_m",
    as: "h2"
  }, props.data.novelsname)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Item"].Extra, {
    textAlign: "left",
    style: {
      marginTop: 10
    }
  }, __jsx("span", {
    className: "label"
  }, "T\xE1c gi\u1EA3:"), " ", props.data.author), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Item"].Extra, {
    textAlign: "left",
    style: {
      marginTop: 10
    }
  }, "Th\u1EC3 lo\u1EA1i: ", props.data.genresdata.map(function (genresdata) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      as: "/theloai/".concat(genresdata.idgenres, "1"),
      href: "/theloai/[id]/[page]"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Tag"], {
      color: "#f50"
    }, genresdata.genrename));
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Item"].Extra, {
    textAlign: "left",
    style: {
      marginTop: 10
    }
  }, __jsx("span", {
    className: "label"
  }, "Status:"), " ", props.data.status)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Item"].Group, {
    className: "botom_book",
    textAlign: "center"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    as: "/doc/".concat(props.data.idnovels).concat(props.data.chapterlist[0].idchapter),
    href: "/doc/[id][chapter]"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    size: "huge",
    style: {
      marginBottom: 20
    },
    color: "yellow"
  }, "\u0110\u1ECDc"))))))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Container"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
    className: "detail-container",
    mobile: 16,
    tablet: 16,
    computer: 16
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Item"].Group, {
    textAlign: "left"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Item"].Description, {
    className: "content"
  }, react_html_parser__WEBPACK_IMPORTED_MODULE_7___default()(props.data.description))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Divider"], {
    horizontal: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Header"], {
    className: "title-name-bottom",
    as: "h2"
  }, "Danh s\xE1ch ch\u01B0\u01A1ng")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"], null, props.data.chapterlist.map(function (datachapter, key) {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
      mobile: 16,
      tablet: 8,
      computer: 8,
      style: {
        wordBreak: 'break-word',
        overflow: 'hidden'
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      as: "/doc/".concat(props.data.idnovels).concat(datachapter.idchapter),
      href: "/doc/[id]/[chapter]"
    }, __jsx("a", {
      className: "chapter"
    }, datachapter.chaptername)));
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Grid"].Column, {
    mobile: 16,
    tablet: 16,
    computer: 16,
    style: {
      marginTop: 20
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Pagination"], {
    onPageChange: function onPageChange(e, data) {
      return handleChangepage(e, data);
    },
    defaultActivePage: props.page,
    totalPages: props.data.totalpage
  }))))));
}

_s(Truyen, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = Truyen;

Truyen.getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var _context$query, id, page, res, json;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // eslint-disable-next-line no-undef
            _context$query = context.query, id = _context$query.id, page = _context$query.page;
            _context.next = 3;
            return fetch("".concat(_config_config__WEBPACK_IMPORTED_MODULE_11__["API_URL"], "novel?id=").concat(id, "&page=").concat(page));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            json = _context.sent;
            return _context.abrupt("return", {
              data: json,
              page: page,
              id: id
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Truyen);

var _c;

$RefreshReg$(_c, "Truyen");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbm92ZWwvL1twYWdlXS5qcyJdLCJuYW1lcyI6WyJjcmVhdGVNZWRpYSIsImJyZWFrcG9pbnRzIiwibW9iaWxlIiwidGFibGV0IiwiY29tcHV0ZXIiLCJNZWRpYUNvbnRleHRQcm92aWRlciIsIk1lZGlhIiwiVHJ1eWVuIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVDaGFuZ2VwYWdlIiwiZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlUGFnZSIsInBhZ2UiLCJwdXNoIiwiaWQiLCJub3ZlbHNuYW1lIiwiYXV0aG9yIiwic3RhdHVzIiwiaWRub3ZlbHMiLCJjb3ZlciIsIm1heEhlaWdodCIsInBhZGRpbmciLCJoZWlnaHQiLCJtYXJnaW5Ub3AiLCJnZW5yZXNkYXRhIiwibWFwIiwiaWRnZW5yZXMiLCJnZW5yZW5hbWUiLCJjaGFwdGVybGlzdCIsImlkY2hhcHRlciIsIm1pbkhlaWdodCIsIm1hcmdpbkJvdHRvbSIsIlJlYWN0SHRtbFBhcnNlciIsImRlc2NyaXB0aW9uIiwiZGF0YWNoYXB0ZXIiLCJrZXkiLCJ3b3JkQnJlYWsiLCJvdmVyZmxvdyIsImNoYXB0ZXJuYW1lIiwidG90YWxwYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInF1ZXJ5IiwiZmV0Y2giLCJBUElfVVJMIiwicmVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFjQTtBQUNBOzttQkFDd0NBLG1FQUFXLENBQUM7QUFDaERDLGFBQVcsRUFBRTtBQUNUQyxVQUFNLEVBQUUsQ0FEQztBQUVUQyxVQUFNLEVBQUUsR0FGQztBQUdUQyxZQUFRLEVBQUU7QUFIRDtBQURtQyxDQUFELEM7SUFBM0NDLG9CLGdCQUFBQSxvQjtJQUFzQkMsSyxnQkFBQUEsSzs7QUFPOUIs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QUFXK0I7QUFBeEgsSUFESixDQXJCSixDQURKLENBREosQ0FqSkosQ0FESjtBQXFMSDs7R0E5TFFyQyxNO1VBQ1VHLHFEOzs7S0FEVkgsTTs7QUErTFRBLE1BQU0sQ0FBQ3NDLGVBQVA7QUFBQSw4TEFBeUIsaUJBQU9DLE9BQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyQjtBQURxQiw2QkFFQUEsT0FBTyxDQUFDQyxLQUZSLEVBRWI1QixFQUZhLGtCQUViQSxFQUZhLEVBRVRGLElBRlMsa0JBRVRBLElBRlM7QUFBQTtBQUFBLG1CQUdIK0IsS0FBSyxXQUFJQyx1REFBSixzQkFBdUI5QixFQUF2QixtQkFBa0NGLElBQWxDLEVBSEY7O0FBQUE7QUFHZmlDLGVBSGU7QUFBQTtBQUFBLG1CQUlGQSxHQUFHLENBQUNDLElBQUosRUFKRTs7QUFBQTtBQUlmQSxnQkFKZTtBQUFBLDZDQU1kO0FBQUV0QyxrQkFBSSxFQUFFc0MsSUFBUjtBQUFjbEMsa0JBQUksRUFBRUEsSUFBcEI7QUFBMEJFLGdCQUFFLEVBQUVBO0FBQTlCLGFBTmM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBekI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBUWVaLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25vdmVsL1tpZF0vW3BhZ2VdLjE2NzEwMGE2Yzk4MmE1NThiODYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL015TGF5b3V0J1xyXG5pbXBvcnQgJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJlYWN0SHRtbFBhcnNlciwgeyBwcm9jZXNzTm9kZXMsIGNvbnZlcnROb2RlVG9FbGVtZW50LCBodG1scGFyc2VyMiB9IGZyb20gJ3JlYWN0LWh0bWwtcGFyc2VyJztcclxuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcclxuaW1wb3J0IHsgVGFnIH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IHtcclxuICAgIENvbnRhaW5lcixcclxuICAgIERpdmlkZXIsXHJcbiAgICBEcm9wZG93bixcclxuICAgIEdyaWQsXHJcbiAgICBIZWFkZXIsXHJcbiAgICBJbWFnZSxcclxuICAgIExpc3QsXHJcbiAgICBNZW51LFxyXG4gICAgSWNvbixcclxuICAgIFNlZ21lbnQsXHJcbiAgICBQYWdpbmF0aW9uLFxyXG4gICAgSXRlbSwgQnV0dG9uLCBMYWJlbFxyXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9jb25maWcnXHJcbmltcG9ydCB7IGNyZWF0ZU1lZGlhIH0gZnJvbSAnQGFydHN5L2ZyZXNuZWwnXHJcbmNvbnN0IHsgTWVkaWFDb250ZXh0UHJvdmlkZXIsIE1lZGlhIH0gPSBjcmVhdGVNZWRpYSh7XHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIG1vYmlsZTogMCxcclxuICAgICAgICB0YWJsZXQ6IDc2OCxcclxuICAgICAgICBjb21wdXRlcjogMTAyNCxcclxuICAgIH0sXHJcbn0pXHJcbmZ1bmN0aW9uIFRydXllbihwcm9wcykge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZXBhZ2UgPSAoZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgaWYgKGRhdGEuYWN0aXZlUGFnZSAhPT0gcHJvcHMucGFnZSkge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChgL25vdmVsLyR7cHJvcHMuaWR9LyR7ZGF0YS5hY3RpdmVQYWdlfWApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgIGh0bWwsIGJvZHkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyOTMzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1Mjg1O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDZlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHAgPiBzcGFuIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC40O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxIZWxtZXQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+e3Byb3BzLmRhdGEubm92ZWxzbmFtZX0gLVRydXnhu4duIE5UPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2DEkOG7jWMgdHJ1eeG7h24gJHtwcm9wcy5kYXRhLm5vdmVsc25hbWV9IGPhu6dhIHTDoWMgZ2nhuqMgJHtwcm9wcy5kYXRhLmF1dGhvcn0sdMOsbmggdHLhuqFuZzogJHtwcm9wcy5kYXRhLnN0YXR1c30sIGjhu5cgdHLhu6MgxJHhu41jIHRyw6puIMSRaeG7h24gdGhv4bqhaSB2w6AgbcOheSB0w61uaCBi4bqjbmdgfSAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMwMDhmNjhcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD17YCR7cHJvcHMuZGF0YS5ub3ZlbHNuYW1lfSwgxJHhu41jIHRydXnhu4duICR7cHJvcHMuZGF0YS5ub3ZlbHNuYW1lfSzEkeG7jWMgJHtwcm9wcy5kYXRhLm5vdmVsc25hbWV9IGhvw6BuLCR7cHJvcHMuZGF0YS5ub3ZlbHNuYW1lfSBmdWxsYH0gLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e2Avbm92ZWwvJHtwcm9wcy5kYXRhLmlkbm92ZWxzfS8xYH0+PC9saW5rPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e2Ake3Byb3BzLmRhdGEubm92ZWxzbmFtZX1gfT48L21ldGE+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17YCR7cHJvcHMuZGF0YS5jb3Zlcn1gfT48L21ldGE+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17YMSQ4buNYyB0cnV54buHbiAke3Byb3BzLmRhdGEubm92ZWxzbmFtZX0gY+G7p2EgdMOhYyBnaeG6oyAke3Byb3BzLmRhdGEuYXV0aG9yfSx0w6xuaCB0cuG6oW5nOiAke3Byb3BzLmRhdGEuc3RhdHVzfSwgaOG7lyB0cuG7oyDEkeG7jWMgdHLDqm4gxJFp4buHbiB0aG/huqFpIHbDoCBtw6F5IHTDrW5oIGLhuqNuZ2B9PjwvbWV0YT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17YC9ub3ZlbC8ke3Byb3BzLmRhdGEuaWRub3ZlbHN9LzFgfT48L21ldGE+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cImJvb2s6YXV0aG9yXCIgY29udGVudD17YCR7cHJvcHMuZGF0YS5hdXRob3J9YH0+PC9tZXRhPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJib29rOnRhZ1wiIGNvbnRlbnQ9e2Ake3Byb3BzLmRhdGEubm92ZWxzbmFtZX1gfT48L21ldGE+XHJcbiAgICAgICAgICAgIDwvSGVsbWV0PlxyXG4gICAgICAgICAgICA8TWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8TWVkaWEgZ3JlYXRlclRoYW49J21vYmlsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJ0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiAnMzIuNjI1cmVtJywgcGFkZGluZzogJzFlbSAwZW0nIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9vay1pbmZvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdnbGFzc19iYWNrZ3JvdW5kLWltZycgc3JjPXtwcm9wcy5kYXRhLmNvdmVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lciBzdHlsZT17e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gbW9iaWxlPXsxNn0gdGFibGV0PXs0fSBjb21wdXRlcj17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgZmx1aWQgY2xhc3NOYW1lPSdpdGVtLWltZycgc3JjPXtwcm9wcy5kYXRhLmNvdmVyfSBzdHlsZT17eyBoZWlnaHQ6ICcyMi43NXJlbScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIG1vYmlsZT17MTZ9IHRhYmxldD17MTJ9IGNvbXB1dGVyPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5Hcm91cCB0ZXh0QWxpZ249J2xlZnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkhlYWRlciBjbGFzc05hbWU9J2Jvb2stdGl0bGUnIGFzPSdoMic+e3Byb3BzLmRhdGEubm92ZWxzbmFtZX08L0l0ZW0uSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkV4dHJhIHRleHRBbGlnbj0nbGVmdCcgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdsYWJlbCc+VMOhYyBnaeG6ozo8L3NwYW4+IHtwcm9wcy5kYXRhLmF1dGhvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uRXh0cmE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uRXh0cmEgdGV4dEFsaWduPSdsZWZ0JyBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaOG7gyBsb+G6oWk6IHtwcm9wcy5kYXRhLmdlbnJlc2RhdGEubWFwKGdlbnJlc2RhdGEgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC90aGVsb2FpLyR7Z2VucmVzZGF0YS5pZGdlbnJlc30xYH0gaHJlZj17YC90aGVsb2FpL1tpZF0vW3BhZ2VdYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFnIGNvbG9yPVwiI2Y1MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZW5yZXNkYXRhLmdlbnJlbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFnPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5FeHRyYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5FeHRyYSB0ZXh0QWxpZ249J2xlZnQnIHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbGFiZWwnPlN0YXR1czo8L3NwYW4+IHtwcm9wcy5kYXRhLnN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uRXh0cmE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL2RvYy8ke3Byb3BzLmRhdGEuaWRub3ZlbHN9LyR7cHJvcHMuZGF0YS5jaGFwdGVybGlzdFswXS5pZGNoYXB0ZXJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2RvYy9baWRdL1tjaGFwdGVyXWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT0naHVnZScgY29sb3I9J3llbGxvdyc+xJDhu4xDPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9NZWRpYT5cclxuICAgICAgICAgICAgICAgIDxNZWRpYSBhdD0nbW9iaWxlJz5cclxuICAgICAgICAgICAgICAgICAgICA8U2VnbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5IZWlnaHQ6ICczMi42MjVyZW0nLCBwYWRkaW5nOiAnMWVtIDBlbScsIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyIHN0eWxlPXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gbW9iaWxlPXsxNn0gdGFibGV0PXs0fSBjb21wdXRlcj17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiYXNpYy1pbmZvX2hlYWRlcl9fMzFxdWcnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dsYXNzX2JhY2tncm91bmRfX3AxUDRmIGJhc2ljLWluZm9fY292ZXItYmFja2dyb3VuZF9fMVE5UmwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdnbGFzc19iYWNrZ3JvdW5kLWltZ19fMmplN2wnIHNyYz17cHJvcHMuZGF0YS5jb3Zlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2xhc3Nfc2hhZGVfXzN5YXY1JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmFzaWMtaW5mb19jb3Zlci1vdmVybGF5X18yZ3A0dycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYWJlbF9jb250YWluZXJfXzMtdGNSIGJhc2ljLWluZm9fY292ZXItd3JhcHBlcl9fMW1jTkInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbWFnZV9pbWFnZS13cmFwcGVyX18zRUpKNiBiYXNpYy1pbmZvX2NvdmVyX19YdE5Sayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5kYXRhLmNvdmVyfSBjbGFzc05hbWU9J2ltYWdlX2ltYWdlX19qOU9DSCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBtb2JpbGU9ezE2fSB0YWJsZXQ9ezEyfSBjb21wdXRlcj17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5Hcm91cCB0ZXh0QWxpZ249J2NlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkhlYWRlciBjbGFzc05hbWU9J2Jvb2stdGl0bGVfbScgYXM9J2gyJz57cHJvcHMuZGF0YS5ub3ZlbHNuYW1lfTwvSXRlbS5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkV4dHJhIHRleHRBbGlnbj0nbGVmdCcgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2xhYmVsJz5Uw6FjIGdp4bqjOjwvc3Bhbj4ge3Byb3BzLmRhdGEuYXV0aG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkV4dHJhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uRXh0cmEgdGV4dEFsaWduPSdsZWZ0JyBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRo4buDIGxv4bqhaToge3Byb3BzLmRhdGEuZ2VucmVzZGF0YS5tYXAoZ2VucmVzZGF0YSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvdGhlbG9haS8ke2dlbnJlc2RhdGEuaWRnZW5yZXN9MWB9IGhyZWY9e2AvdGhlbG9haS9baWRdL1twYWdlXWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFnIGNvbG9yPVwiI2Y1MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dlbnJlc2RhdGEuZ2VucmVuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhZz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uRXh0cmE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5FeHRyYSB0ZXh0QWxpZ249J2xlZnQnIHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdsYWJlbCc+U3RhdHVzOjwvc3Bhbj4ge3Byb3BzLmRhdGEuc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkV4dHJhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkdyb3VwIGNsYXNzTmFtZT0nYm90b21fYm9vaycgdGV4dEFsaWduPSdjZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9kb2MvJHtwcm9wcy5kYXRhLmlkbm92ZWxzfSR7cHJvcHMuZGF0YS5jaGFwdGVybGlzdFswXS5pZGNoYXB0ZXJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2RvYy9baWRdW2NoYXB0ZXJdYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdodWdlJyBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19IGNvbG9yPSd5ZWxsb3cnPsSQ4buNYzwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uR3JvdXA+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvTWVkaWE+XHJcbiAgICAgICAgICAgIDwvTWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8R3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gY2xhc3NOYW1lPSdkZXRhaWwtY29udGFpbmVyJyBtb2JpbGU9ezE2fSB0YWJsZXQ9ezE2fSBjb21wdXRlcj17MTZ9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uR3JvdXAgdGV4dEFsaWduPSdsZWZ0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkRlc2NyaXB0aW9uIGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1JlYWN0SHRtbFBhcnNlcihwcm9wcy5kYXRhLmRlc2NyaXB0aW9uKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciBob3Jpem9udGFsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlciBjbGFzc05hbWU9J3RpdGxlLW5hbWUtYm90dG9tJyBhcz0naDInPkRhbmggc8OhY2ggY2jGsMahbmc8L0hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9EaXZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kYXRhLmNoYXB0ZXJsaXN0Lm1hcCgoZGF0YWNoYXB0ZXIsIGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBtb2JpbGU9ezE2fSB0YWJsZXQ9ezh9IGNvbXB1dGVyPXs4fSBzdHlsZT17eyB3b3JkQnJlYWs6ICdicmVhay13b3JkJywgb3ZlcmZsb3c6ICdoaWRkZW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e2AvZG9jLyR7cHJvcHMuZGF0YS5pZG5vdmVsc30ke2RhdGFjaGFwdGVyLmlkY2hhcHRlcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9kb2MvW2lkXS9bY2hhcHRlcl1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nY2hhcHRlcic+e2RhdGFjaGFwdGVyLmNoYXB0ZXJuYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gbW9iaWxlPXsxNn0gdGFibGV0PXsxNn0gY29tcHV0ZXI9ezE2fSBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb24gb25QYWdlQ2hhbmdlPXsoZSwgZGF0YSkgPT4gaGFuZGxlQ2hhbmdlcGFnZShlLCBkYXRhKX0gZGVmYXVsdEFjdGl2ZVBhZ2U9e3Byb3BzLnBhZ2V9IHRvdGFsUGFnZXM9e3Byb3BzLmRhdGEudG90YWxwYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHJcblxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG5cclxufVxyXG5UcnV5ZW4uZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxyXG4gICAgY29uc3QgeyBpZCwgcGFnZSB9ID0gY29udGV4dC5xdWVyeVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH1ub3ZlbD9pZD0ke2lkfSZwYWdlPSR7cGFnZX1gKVxyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIC8vIGNvbnNvbGUubG9nKGpzb24pXHJcbiAgICByZXR1cm4geyBkYXRhOiBqc29uLCBwYWdlOiBwYWdlLCBpZDogaWQgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRydXllbiJdLCJzb3VyY2VSb290IjoiIn0=