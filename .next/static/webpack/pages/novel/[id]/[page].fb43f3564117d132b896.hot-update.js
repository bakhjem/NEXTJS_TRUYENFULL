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
    href: "/novel/".concat(props.data.idnovels, "1")
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
    content: "/novel/".concat(props.data.idnovels, "1")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbm92ZWwvL1twYWdlXS5qcyJdLCJuYW1lcyI6WyJjcmVhdGVNZWRpYSIsImJyZWFrcG9pbnRzIiwibW9iaWxlIiwidGFibGV0IiwiY29tcHV0ZXIiLCJNZWRpYUNvbnRleHRQcm92aWRlciIsIk1lZGlhIiwiVHJ1eWVuIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVDaGFuZ2VwYWdlIiwiZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlUGFnZSIsInBhZ2UiLCJwdXNoIiwiaWQiLCJub3ZlbHNuYW1lIiwiYXV0aG9yIiwic3RhdHVzIiwiaWRub3ZlbHMiLCJjb3ZlciIsIm1heEhlaWdodCIsInBhZGRpbmciLCJoZWlnaHQiLCJtYXJnaW5Ub3AiLCJnZW5yZXNkYXRhIiwibWFwIiwiaWRnZW5yZXMiLCJnZW5yZW5hbWUiLCJjaGFwdGVybGlzdCIsImlkY2hhcHRlciIsIm1pbkhlaWdodCIsIm1hcmdpbkJvdHRvbSIsIlJlYWN0SHRtbFBhcnNlciIsImRlc2NyaXB0aW9uIiwiZGF0YWNoYXB0ZXIiLCJrZXkiLCJ3b3JkQnJlYWsiLCJvdmVyZmxvdyIsImNoYXB0ZXJuYW1lIiwidG90YWxwYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInF1ZXJ5IiwiZmV0Y2giLCJBUElfVVJMIiwicmVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFjQTtBQUNBOzttQkFDd0NBLG1FQUFXLENBQUM7QUFDaERDLGFBQVcsRUFBRTtBQUNUQyxVQUFNLEVBQUUsQ0FEQztBQUVUQyxVQUFNLEVBQUUsR0FGQztBQUdUQyxZQUFRLEVBQUU7QUFIRDtBQURtQyxDQUFELEM7SUFBM0NDLG9CLGdCQUFBQSxvQjtJQUFzQkMsSyxnQkFBQUEsSzs7QUFPOUIs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QUFXK0I7QUFBeEgsSUFESixDQXJCSixDQURKLENBREosQ0FqSkosQ0FESjtBQXFMSDs7R0E5TFFyQyxNO1VBQ1VHLHFEOzs7S0FEVkgsTTs7QUErTFRBLE1BQU0sQ0FBQ3NDLGVBQVA7QUFBQSw4TEFBeUIsaUJBQU9DLE9BQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyQjtBQURxQiw2QkFFQUEsT0FBTyxDQUFDQyxLQUZSLEVBRWI1QixFQUZhLGtCQUViQSxFQUZhLEVBRVRGLElBRlMsa0JBRVRBLElBRlM7QUFBQTtBQUFBLG1CQUdIK0IsS0FBSyxXQUFJQyx1REFBSixzQkFBdUI5QixFQUF2QixtQkFBa0NGLElBQWxDLEVBSEY7O0FBQUE7QUFHZmlDLGVBSGU7QUFBQTtBQUFBLG1CQUlGQSxHQUFHLENBQUNDLElBQUosRUFKRTs7QUFBQTtBQUlmQSxnQkFKZTtBQUFBLDZDQU1kO0FBQUV0QyxrQkFBSSxFQUFFc0MsSUFBUjtBQUFjbEMsa0JBQUksRUFBRUEsSUFBcEI7QUFBMEJFLGdCQUFFLEVBQUVBO0FBQTlCLGFBTmM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBekI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBUWVaLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25vdmVsL1tpZF0vW3BhZ2VdLmZiNDNmMzU2NDExN2QxMzJiODk2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL015TGF5b3V0J1xyXG5pbXBvcnQgJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJlYWN0SHRtbFBhcnNlciwgeyBwcm9jZXNzTm9kZXMsIGNvbnZlcnROb2RlVG9FbGVtZW50LCBodG1scGFyc2VyMiB9IGZyb20gJ3JlYWN0LWh0bWwtcGFyc2VyJztcclxuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcclxuaW1wb3J0IHsgVGFnIH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IHtcclxuICAgIENvbnRhaW5lcixcclxuICAgIERpdmlkZXIsXHJcbiAgICBEcm9wZG93bixcclxuICAgIEdyaWQsXHJcbiAgICBIZWFkZXIsXHJcbiAgICBJbWFnZSxcclxuICAgIExpc3QsXHJcbiAgICBNZW51LFxyXG4gICAgSWNvbixcclxuICAgIFNlZ21lbnQsXHJcbiAgICBQYWdpbmF0aW9uLFxyXG4gICAgSXRlbSwgQnV0dG9uLCBMYWJlbFxyXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9jb25maWcnXHJcbmltcG9ydCB7IGNyZWF0ZU1lZGlhIH0gZnJvbSAnQGFydHN5L2ZyZXNuZWwnXHJcbmNvbnN0IHsgTWVkaWFDb250ZXh0UHJvdmlkZXIsIE1lZGlhIH0gPSBjcmVhdGVNZWRpYSh7XHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIG1vYmlsZTogMCxcclxuICAgICAgICB0YWJsZXQ6IDc2OCxcclxuICAgICAgICBjb21wdXRlcjogMTAyNCxcclxuICAgIH0sXHJcbn0pXHJcbmZ1bmN0aW9uIFRydXllbihwcm9wcykge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZXBhZ2UgPSAoZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgaWYgKGRhdGEuYWN0aXZlUGFnZSAhPT0gcHJvcHMucGFnZSkge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChgL25vdmVsLyR7cHJvcHMuaWR9LyR7ZGF0YS5hY3RpdmVQYWdlfWApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgIGh0bWwsIGJvZHkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyOTMzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1Mjg1O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDZlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHAgPiBzcGFuIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC40O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxIZWxtZXQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+e3Byb3BzLmRhdGEubm92ZWxzbmFtZX0gLVRydXnhu4duIE5UPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2DEkOG7jWMgdHJ1eeG7h24gJHtwcm9wcy5kYXRhLm5vdmVsc25hbWV9IGPhu6dhIHTDoWMgZ2nhuqMgJHtwcm9wcy5kYXRhLmF1dGhvcn0sdMOsbmggdHLhuqFuZzogJHtwcm9wcy5kYXRhLnN0YXR1c30sIGjhu5cgdHLhu6MgxJHhu41jIHRyw6puIMSRaeG7h24gdGhv4bqhaSB2w6AgbcOheSB0w61uaCBi4bqjbmdgfSAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMwMDhmNjhcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD17YCR7cHJvcHMuZGF0YS5ub3ZlbHNuYW1lfSwgxJHhu41jIHRydXnhu4duICR7cHJvcHMuZGF0YS5ub3ZlbHNuYW1lfSzEkeG7jWMgJHtwcm9wcy5kYXRhLm5vdmVsc25hbWV9IGhvw6BuLCR7cHJvcHMuZGF0YS5ub3ZlbHNuYW1lfSBmdWxsYH0gLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e2Avbm92ZWwvJHtwcm9wcy5kYXRhLmlkbm92ZWxzfTFgfT48L2xpbms+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17YCR7cHJvcHMuZGF0YS5ub3ZlbHNuYW1lfWB9PjwvbWV0YT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtgJHtwcm9wcy5kYXRhLmNvdmVyfWB9PjwvbWV0YT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtgxJDhu41jIHRydXnhu4duICR7cHJvcHMuZGF0YS5ub3ZlbHNuYW1lfSBj4bunYSB0w6FjIGdp4bqjICR7cHJvcHMuZGF0YS5hdXRob3J9LHTDrG5oIHRy4bqhbmc6ICR7cHJvcHMuZGF0YS5zdGF0dXN9LCBo4buXIHRy4bujIMSR4buNYyB0csOqbiDEkWnhu4duIHRob+G6oWkgdsOgIG3DoXkgdMOtbmggYuG6o25nYH0+PC9tZXRhPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtgL25vdmVsLyR7cHJvcHMuZGF0YS5pZG5vdmVsc30xYH0+PC9tZXRhPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJib29rOmF1dGhvclwiIGNvbnRlbnQ9e2Ake3Byb3BzLmRhdGEuYXV0aG9yfWB9PjwvbWV0YT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwiYm9vazp0YWdcIiBjb250ZW50PXtgJHtwcm9wcy5kYXRhLm5vdmVsc25hbWV9YH0+PC9tZXRhPlxyXG4gICAgICAgICAgICA8L0hlbG1ldD5cclxuICAgICAgICAgICAgPE1lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPE1lZGlhIGdyZWF0ZXJUaGFuPSdtb2JpbGUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWdtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmVydGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogJzMyLjYyNXJlbScsIHBhZGRpbmc6ICcxZW0gMGVtJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbFxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jvb2staW5mbyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nZ2xhc3NfYmFja2dyb3VuZC1pbWcnIHNyYz17cHJvcHMuZGF0YS5jb3Zlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXIgc3R5bGU9e3t9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIG1vYmlsZT17MTZ9IHRhYmxldD17NH0gY29tcHV0ZXI9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGZsdWlkIGNsYXNzTmFtZT0naXRlbS1pbWcnIHNyYz17cHJvcHMuZGF0YS5jb3Zlcn0gc3R5bGU9e3sgaGVpZ2h0OiAnMjIuNzVyZW0nIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBtb2JpbGU9ezE2fSB0YWJsZXQ9ezEyfSBjb21wdXRlcj17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uR3JvdXAgdGV4dEFsaWduPSdsZWZ0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5IZWFkZXIgY2xhc3NOYW1lPSdib29rLXRpdGxlJyBhcz0naDInPntwcm9wcy5kYXRhLm5vdmVsc25hbWV9PC9JdGVtLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5FeHRyYSB0ZXh0QWxpZ249J2xlZnQnIHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbGFiZWwnPlTDoWMgZ2nhuqM6PC9zcGFuPiB7cHJvcHMuZGF0YS5hdXRob3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkV4dHJhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkV4dHJhIHRleHRBbGlnbj0nbGVmdCcgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGjhu4MgbG/huqFpOiB7cHJvcHMuZGF0YS5nZW5yZXNkYXRhLm1hcChnZW5yZXNkYXRhID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvdGhlbG9haS8ke2dlbnJlc2RhdGEuaWRnZW5yZXN9MWB9IGhyZWY9e2AvdGhlbG9haS9baWRdL1twYWdlXWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhZyBjb2xvcj1cIiNmNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2VucmVzZGF0YS5nZW5yZW5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhZz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uRXh0cmE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uRXh0cmEgdGV4dEFsaWduPSdsZWZ0JyBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2xhYmVsJz5TdGF0dXM6PC9zcGFuPiB7cHJvcHMuZGF0YS5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkV4dHJhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9kb2MvJHtwcm9wcy5kYXRhLmlkbm92ZWxzfS8ke3Byb3BzLmRhdGEuY2hhcHRlcmxpc3RbMF0uaWRjaGFwdGVyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9kb2MvW2lkXS9bY2hhcHRlcl1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9J2h1Z2UnIGNvbG9yPSd5ZWxsb3cnPsSQ4buMQzwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvTWVkaWE+XHJcbiAgICAgICAgICAgICAgICA8TWVkaWEgYXQ9J21vYmlsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJ0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluSGVpZ2h0OiAnMzIuNjI1cmVtJywgcGFkZGluZzogJzFlbSAwZW0nLCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbFxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lciBzdHlsZT17e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIG1vYmlsZT17MTZ9IHRhYmxldD17NH0gY29tcHV0ZXI9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmFzaWMtaW5mb19oZWFkZXJfXzMxcXVnJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnbGFzc19iYWNrZ3JvdW5kX19wMVA0ZiBiYXNpYy1pbmZvX2NvdmVyLWJhY2tncm91bmRfXzFROVJsJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nZ2xhc3NfYmFja2dyb3VuZC1pbWdfXzJqZTdsJyBzcmM9e3Byb3BzLmRhdGEuY292ZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dsYXNzX3NoYWRlX18zeWF2NScgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jhc2ljLWluZm9fY292ZXItb3ZlcmxheV9fMmdwNHcnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGFiZWxfY29udGFpbmVyX18zLXRjUiBiYXNpYy1pbmZvX2NvdmVyLXdyYXBwZXJfXzFtY05CJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW1hZ2VfaW1hZ2Utd3JhcHBlcl9fM0VKSjYgYmFzaWMtaW5mb19jb3Zlcl9fWHROUmsnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvcHMuZGF0YS5jb3Zlcn0gY2xhc3NOYW1lPSdpbWFnZV9pbWFnZV9fajlPQ0gnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gbW9iaWxlPXsxNn0gdGFibGV0PXsxMn0gY29tcHV0ZXI9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uR3JvdXAgdGV4dEFsaWduPSdjZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5IZWFkZXIgY2xhc3NOYW1lPSdib29rLXRpdGxlX20nIGFzPSdoMic+e3Byb3BzLmRhdGEubm92ZWxzbmFtZX08L0l0ZW0uSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5FeHRyYSB0ZXh0QWxpZ249J2xlZnQnIHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdsYWJlbCc+VMOhYyBnaeG6ozo8L3NwYW4+IHtwcm9wcy5kYXRhLmF1dGhvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5FeHRyYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkV4dHJhIHRleHRBbGlnbj0nbGVmdCcgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaOG7gyBsb+G6oWk6IHtwcm9wcy5kYXRhLmdlbnJlc2RhdGEubWFwKGdlbnJlc2RhdGEgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL3RoZWxvYWkvJHtnZW5yZXNkYXRhLmlkZ2VucmVzfTFgfSBocmVmPXtgL3RoZWxvYWkvW2lkXS9bcGFnZV1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhZyBjb2xvcj1cIiNmNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZW5yZXNkYXRhLmdlbnJlbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkV4dHJhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uRXh0cmEgdGV4dEFsaWduPSdsZWZ0JyBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbGFiZWwnPlN0YXR1czo8L3NwYW4+IHtwcm9wcy5kYXRhLnN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5FeHRyYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5Hcm91cCBjbGFzc05hbWU9J2JvdG9tX2Jvb2snIHRleHRBbGlnbj0nY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e2AvZG9jLyR7cHJvcHMuZGF0YS5pZG5vdmVsc30ke3Byb3BzLmRhdGEuY2hhcHRlcmxpc3RbMF0uaWRjaGFwdGVyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9kb2MvW2lkXVtjaGFwdGVyXWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT0naHVnZScgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fSBjb2xvcj0neWVsbG93Jz7EkOG7jWM8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkdyb3VwPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L01lZGlhPlxyXG4gICAgICAgICAgICA8L01lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIGNsYXNzTmFtZT0nZGV0YWlsLWNvbnRhaW5lcicgbW9iaWxlPXsxNn0gdGFibGV0PXsxNn0gY29tcHV0ZXI9ezE2fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkdyb3VwIHRleHRBbGlnbj0nbGVmdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5EZXNjcmlwdGlvbiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtSZWFjdEh0bWxQYXJzZXIocHJvcHMuZGF0YS5kZXNjcmlwdGlvbil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgaG9yaXpvbnRhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgY2xhc3NOYW1lPSd0aXRsZS1uYW1lLWJvdHRvbScgYXM9J2gyJz5EYW5oIHPDoWNoIGNoxrDGoW5nPC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRGl2aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGF0YS5jaGFwdGVybGlzdC5tYXAoKGRhdGFjaGFwdGVyLCBrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gbW9iaWxlPXsxNn0gdGFibGV0PXs4fSBjb21wdXRlcj17OH0gc3R5bGU9e3sgd29yZEJyZWFrOiAnYnJlYWstd29yZCcsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL2RvYy8ke3Byb3BzLmRhdGEuaWRub3ZlbHN9JHtkYXRhY2hhcHRlci5pZGNoYXB0ZXJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvZG9jL1tpZF0vW2NoYXB0ZXJdYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2NoYXB0ZXInPntkYXRhY2hhcHRlci5jaGFwdGVybmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIG1vYmlsZT17MTZ9IHRhYmxldD17MTZ9IGNvbXB1dGVyPXsxNn0gc3R5bGU9e3sgbWFyZ2luVG9wOiAyMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uIG9uUGFnZUNoYW5nZT17KGUsIGRhdGEpID0+IGhhbmRsZUNoYW5nZXBhZ2UoZSwgZGF0YSl9IGRlZmF1bHRBY3RpdmVQYWdlPXtwcm9wcy5wYWdlfSB0b3RhbFBhZ2VzPXtwcm9wcy5kYXRhLnRvdGFscGFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxuXHJcbn1cclxuVHJ1eWVuLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcclxuICAgIGNvbnN0IHsgaWQsIHBhZ2UgfSA9IGNvbnRleHQucXVlcnlcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9bm92ZWw/aWQ9JHtpZH0mcGFnZT0ke3BhZ2V9YClcclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhqc29uKVxyXG4gICAgcmV0dXJuIHsgZGF0YToganNvbiwgcGFnZTogcGFnZSwgaWQ6IGlkIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBUcnV5ZW4iXSwic291cmNlUm9vdCI6IiJ9