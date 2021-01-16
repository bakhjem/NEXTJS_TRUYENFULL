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

  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("style", null, "\n          html, body {\n            background-color: #242933 !important;\n          }\n          p {\n            align-content: center;\n            background-color: #495285;\n            color: #fff;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            min-height: 6em;\n          }\n          p > span {\n            opacity: 0.4;\n            text-align: center;\n          }\n        }\n        "), __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_8__["Helmet"], null, __jsx("title", null, props.data.novelsname, " -TruyenNT"), __jsx("meta", {
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
    as: "/doc/".concat(props.data.idnovels).concat(props.data.chapterlist[0].idchapter),
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
    href: "/doc/[id]/[chapter]"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbm92ZWwvL1twYWdlXS5qcyJdLCJuYW1lcyI6WyJjcmVhdGVNZWRpYSIsImJyZWFrcG9pbnRzIiwibW9iaWxlIiwidGFibGV0IiwiY29tcHV0ZXIiLCJNZWRpYUNvbnRleHRQcm92aWRlciIsIk1lZGlhIiwiVHJ1eWVuIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVDaGFuZ2VwYWdlIiwiZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlUGFnZSIsInBhZ2UiLCJwdXNoIiwiaWQiLCJub3ZlbHNuYW1lIiwiYXV0aG9yIiwic3RhdHVzIiwiaWRub3ZlbHMiLCJjb3ZlciIsIm1heEhlaWdodCIsInBhZGRpbmciLCJoZWlnaHQiLCJtYXJnaW5Ub3AiLCJnZW5yZXNkYXRhIiwibWFwIiwiaWRnZW5yZXMiLCJnZW5yZW5hbWUiLCJjaGFwdGVybGlzdCIsImlkY2hhcHRlciIsIm1pbkhlaWdodCIsIm1hcmdpbkJvdHRvbSIsIlJlYWN0SHRtbFBhcnNlciIsImRlc2NyaXB0aW9uIiwiZGF0YWNoYXB0ZXIiLCJrZXkiLCJ3b3JkQnJlYWsiLCJvdmVyZmxvdyIsImNoYXB0ZXJuYW1lIiwidG90YWxwYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInF1ZXJ5IiwiZmV0Y2giLCJBUElfVVJMIiwicmVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFjQTtBQUNBOzttQkFDd0NBLG1FQUFXLENBQUM7QUFDaERDLGFBQVcsRUFBRTtBQUNUQyxVQUFNLEVBQUUsQ0FEQztBQUVUQyxVQUFNLEVBQUUsR0FGQztBQUdUQyxZQUFRLEVBQUU7QUFIRDtBQURtQyxDQUFELEM7SUFBM0NDLG9CLGdCQUFBQSxvQjtJQUFzQkMsSyxnQkFBQUEsSzs7QUFPOUIs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QVcrQjtBQUF4SCxJQURKLENBckJKLENBREosQ0FESixDQWpKSixDQURKO0FBcUxIOztHQTlMUXJDLE07VUFDVUcscUQ7OztLQURWSCxNOztBQStMVEEsTUFBTSxDQUFDc0MsZUFBUDtBQUFBLDhMQUF5QixpQkFBT0MsT0FBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3JCO0FBRHFCLDZCQUVBQSxPQUFPLENBQUNDLEtBRlIsRUFFYjVCLEVBRmEsa0JBRWJBLEVBRmEsRUFFVEYsSUFGUyxrQkFFVEEsSUFGUztBQUFBO0FBQUEsbUJBR0grQixLQUFLLFdBQUlDLHVEQUFKLHNCQUF1QjlCLEVBQXZCLG1CQUFrQ0YsSUFBbEMsRUFIRjs7QUFBQTtBQUdmaUMsZUFIZTtBQUFBO0FBQUEsbUJBSUZBLEdBQUcsQ0FBQ0MsSUFBSixFQUpFOztBQUFBO0FBSWZBLGdCQUplO0FBQUEsNkNBTWQ7QUFBRXRDLGtCQUFJLEVBQUVzQyxJQUFSO0FBQWNsQyxrQkFBSSxFQUFFQSxJQUFwQjtBQUEwQkUsZ0JBQUUsRUFBRUE7QUFBOUIsYUFOYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF6Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRZVoscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbm92ZWwvW2lkXS9bcGFnZV0uOWQzZTc2Y2M4NTk0ZWE4YTdhNDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnXHJcbmltcG9ydCAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVhY3RIdG1sUGFyc2VyLCB7IHByb2Nlc3NOb2RlcywgY29udmVydE5vZGVUb0VsZW1lbnQsIGh0bWxwYXJzZXIyIH0gZnJvbSAncmVhY3QtaHRtbC1wYXJzZXInO1xyXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnO1xyXG5pbXBvcnQgeyBUYWcgfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQge1xyXG4gICAgQ29udGFpbmVyLFxyXG4gICAgRGl2aWRlcixcclxuICAgIERyb3Bkb3duLFxyXG4gICAgR3JpZCxcclxuICAgIEhlYWRlcixcclxuICAgIEltYWdlLFxyXG4gICAgTGlzdCxcclxuICAgIE1lbnUsXHJcbiAgICBJY29uLFxyXG4gICAgU2VnbWVudCxcclxuICAgIFBhZ2luYXRpb24sXHJcbiAgICBJdGVtLCBCdXR0b24sIExhYmVsXHJcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2NvbmZpZydcclxuaW1wb3J0IHsgY3JlYXRlTWVkaWEgfSBmcm9tICdAYXJ0c3kvZnJlc25lbCdcclxuY29uc3QgeyBNZWRpYUNvbnRleHRQcm92aWRlciwgTWVkaWEgfSA9IGNyZWF0ZU1lZGlhKHtcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgbW9iaWxlOiAwLFxyXG4gICAgICAgIHRhYmxldDogNzY4LFxyXG4gICAgICAgIGNvbXB1dGVyOiAxMDI0LFxyXG4gICAgfSxcclxufSlcclxuZnVuY3Rpb24gVHJ1eWVuKHByb3BzKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlcGFnZSA9IChlLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICBpZiAoZGF0YS5hY3RpdmVQYWdlICE9PSBwcm9wcy5wYWdlKSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvbm92ZWwvJHtwcm9wcy5pZH0vJHtkYXRhLmFjdGl2ZVBhZ2V9YClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgaHRtbCwgYm9keSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MzMgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTUyODU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogNmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcCA+IHNwYW4ge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPEhlbG1ldD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57cHJvcHMuZGF0YS5ub3ZlbHNuYW1lfSAtVHJ1eWVuTlQ8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17YMSQ4buNYyB0cnV54buHbiAke3Byb3BzLmRhdGEubm92ZWxzbmFtZX0gY+G7p2EgdMOhYyBnaeG6oyAke3Byb3BzLmRhdGEuYXV0aG9yfSx0w6xuaCB0cuG6oW5nOiAke3Byb3BzLmRhdGEuc3RhdHVzfSwgaOG7lyB0cuG7oyDEkeG7jWMgdHLDqm4gxJFp4buHbiB0aG/huqFpIHbDoCBtw6F5IHTDrW5oIGLhuqNuZ2B9IC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzAwOGY2OFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PXtgJHtwcm9wcy5kYXRhLm5vdmVsc25hbWV9LCDEkeG7jWMgdHJ1eeG7h24gJHtwcm9wcy5kYXRhLm5vdmVsc25hbWV9LMSR4buNYyAke3Byb3BzLmRhdGEubm92ZWxzbmFtZX0gaG/DoG4sJHtwcm9wcy5kYXRhLm5vdmVsc25hbWV9IGZ1bGxgfSAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17YC9ub3ZlbC8ke3Byb3BzLmRhdGEuaWRub3ZlbHN9LzFgfT48L2xpbms+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17YCR7cHJvcHMuZGF0YS5ub3ZlbHNuYW1lfWB9PjwvbWV0YT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtgJHtwcm9wcy5kYXRhLmNvdmVyfWB9PjwvbWV0YT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtgxJDhu41jIHRydXnhu4duICR7cHJvcHMuZGF0YS5ub3ZlbHNuYW1lfSBj4bunYSB0w6FjIGdp4bqjICR7cHJvcHMuZGF0YS5hdXRob3J9LHTDrG5oIHRy4bqhbmc6ICR7cHJvcHMuZGF0YS5zdGF0dXN9LCBo4buXIHRy4bujIMSR4buNYyB0csOqbiDEkWnhu4duIHRob+G6oWkgdsOgIG3DoXkgdMOtbmggYuG6o25nYH0+PC9tZXRhPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtgL25vdmVsLyR7cHJvcHMuZGF0YS5pZG5vdmVsc30vMWB9PjwvbWV0YT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwiYm9vazphdXRob3JcIiBjb250ZW50PXtgJHtwcm9wcy5kYXRhLmF1dGhvcn1gfT48L21ldGE+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cImJvb2s6dGFnXCIgY29udGVudD17YCR7cHJvcHMuZGF0YS5ub3ZlbHNuYW1lfWB9PjwvbWV0YT5cclxuICAgICAgICAgICAgPC9IZWxtZXQ+XHJcbiAgICAgICAgICAgIDxNZWRpYUNvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgIDxNZWRpYSBncmVhdGVyVGhhbj0nbW9iaWxlJz5cclxuICAgICAgICAgICAgICAgICAgICA8U2VnbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6ICczMi42MjVyZW0nLCBwYWRkaW5nOiAnMWVtIDBlbScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib29rLWluZm8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2dsYXNzX2JhY2tncm91bmQtaW1nJyBzcmM9e3Byb3BzLmRhdGEuY292ZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyIHN0eWxlPXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBtb2JpbGU9ezE2fSB0YWJsZXQ9ezR9IGNvbXB1dGVyPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBmbHVpZCBjbGFzc05hbWU9J2l0ZW0taW1nJyBzcmM9e3Byb3BzLmRhdGEuY292ZXJ9IHN0eWxlPXt7IGhlaWdodDogJzIyLjc1cmVtJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gbW9iaWxlPXsxNn0gdGFibGV0PXsxMn0gY29tcHV0ZXI9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkdyb3VwIHRleHRBbGlnbj0nbGVmdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uSGVhZGVyIGNsYXNzTmFtZT0nYm9vay10aXRsZScgYXM9J2gyJz57cHJvcHMuZGF0YS5ub3ZlbHNuYW1lfTwvSXRlbS5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uRXh0cmEgdGV4dEFsaWduPSdsZWZ0JyBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2xhYmVsJz5Uw6FjIGdp4bqjOjwvc3Bhbj4ge3Byb3BzLmRhdGEuYXV0aG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5FeHRyYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5FeHRyYSB0ZXh0QWxpZ249J2xlZnQnIHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRo4buDIGxv4bqhaToge3Byb3BzLmRhdGEuZ2VucmVzZGF0YS5tYXAoZ2VucmVzZGF0YSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL3RoZWxvYWkvJHtnZW5yZXNkYXRhLmlkZ2VucmVzfTFgfSBocmVmPXtgL3RoZWxvYWkvW2lkXS9bcGFnZV1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWcgY29sb3I9XCIjZjUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dlbnJlc2RhdGEuZ2VucmVuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkV4dHJhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkV4dHJhIHRleHRBbGlnbj0nbGVmdCcgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdsYWJlbCc+U3RhdHVzOjwvc3Bhbj4ge3Byb3BzLmRhdGEuc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5FeHRyYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e2AvZG9jLyR7cHJvcHMuZGF0YS5pZG5vdmVsc30ke3Byb3BzLmRhdGEuY2hhcHRlcmxpc3RbMF0uaWRjaGFwdGVyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9kb2MvW2lkXS9bY2hhcHRlcl1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9J2h1Z2UnIGNvbG9yPSd5ZWxsb3cnPsSQ4buMQzwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvTWVkaWE+XHJcbiAgICAgICAgICAgICAgICA8TWVkaWEgYXQ9J21vYmlsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJ0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluSGVpZ2h0OiAnMzIuNjI1cmVtJywgcGFkZGluZzogJzFlbSAwZW0nLCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbFxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lciBzdHlsZT17e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIG1vYmlsZT17MTZ9IHRhYmxldD17NH0gY29tcHV0ZXI9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmFzaWMtaW5mb19oZWFkZXJfXzMxcXVnJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnbGFzc19iYWNrZ3JvdW5kX19wMVA0ZiBiYXNpYy1pbmZvX2NvdmVyLWJhY2tncm91bmRfXzFROVJsJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nZ2xhc3NfYmFja2dyb3VuZC1pbWdfXzJqZTdsJyBzcmM9e3Byb3BzLmRhdGEuY292ZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dsYXNzX3NoYWRlX18zeWF2NScgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jhc2ljLWluZm9fY292ZXItb3ZlcmxheV9fMmdwNHcnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGFiZWxfY29udGFpbmVyX18zLXRjUiBiYXNpYy1pbmZvX2NvdmVyLXdyYXBwZXJfXzFtY05CJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW1hZ2VfaW1hZ2Utd3JhcHBlcl9fM0VKSjYgYmFzaWMtaW5mb19jb3Zlcl9fWHROUmsnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvcHMuZGF0YS5jb3Zlcn0gY2xhc3NOYW1lPSdpbWFnZV9pbWFnZV9fajlPQ0gnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gbW9iaWxlPXsxNn0gdGFibGV0PXsxMn0gY29tcHV0ZXI9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uR3JvdXAgdGV4dEFsaWduPSdjZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5IZWFkZXIgY2xhc3NOYW1lPSdib29rLXRpdGxlX20nIGFzPSdoMic+e3Byb3BzLmRhdGEubm92ZWxzbmFtZX08L0l0ZW0uSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5FeHRyYSB0ZXh0QWxpZ249J2xlZnQnIHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdsYWJlbCc+VMOhYyBnaeG6ozo8L3NwYW4+IHtwcm9wcy5kYXRhLmF1dGhvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5FeHRyYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkV4dHJhIHRleHRBbGlnbj0nbGVmdCcgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaOG7gyBsb+G6oWk6IHtwcm9wcy5kYXRhLmdlbnJlc2RhdGEubWFwKGdlbnJlc2RhdGEgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL3RoZWxvYWkvJHtnZW5yZXNkYXRhLmlkZ2VucmVzfTFgfSBocmVmPXtgL3RoZWxvYWkvW2lkXS9bcGFnZV1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhZyBjb2xvcj1cIiNmNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZW5yZXNkYXRhLmdlbnJlbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkV4dHJhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uRXh0cmEgdGV4dEFsaWduPSdsZWZ0JyBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbGFiZWwnPlN0YXR1czo8L3NwYW4+IHtwcm9wcy5kYXRhLnN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5FeHRyYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5Hcm91cCBjbGFzc05hbWU9J2JvdG9tX2Jvb2snIHRleHRBbGlnbj0nY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e2AvZG9jLyR7cHJvcHMuZGF0YS5pZG5vdmVsc30ke3Byb3BzLmRhdGEuY2hhcHRlcmxpc3RbMF0uaWRjaGFwdGVyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9kb2MvW2lkXS9bY2hhcHRlcl1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9J2h1Z2UnIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX0gY29sb3I9J3llbGxvdyc+xJDhu41jPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5Hcm91cD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9NZWRpYT5cclxuICAgICAgICAgICAgPC9NZWRpYUNvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBjbGFzc05hbWU9J2RldGFpbC1jb250YWluZXInIG1vYmlsZT17MTZ9IHRhYmxldD17MTZ9IGNvbXB1dGVyPXsxNn0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5Hcm91cCB0ZXh0QWxpZ249J2xlZnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uRGVzY3JpcHRpb24gY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7UmVhY3RIdG1sUGFyc2VyKHByb3BzLmRhdGEuZGVzY3JpcHRpb24pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIGhvcml6b250YWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIGNsYXNzTmFtZT0ndGl0bGUtbmFtZS1ib3R0b20nIGFzPSdoMic+RGFuaCBzw6FjaCBjaMawxqFuZzwvSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0RpdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRhdGEuY2hhcHRlcmxpc3QubWFwKChkYXRhY2hhcHRlciwga2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIG1vYmlsZT17MTZ9IHRhYmxldD17OH0gY29tcHV0ZXI9ezh9IHN0eWxlPXt7IHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9kb2MvJHtwcm9wcy5kYXRhLmlkbm92ZWxzfSR7ZGF0YWNoYXB0ZXIuaWRjaGFwdGVyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2RvYy9baWRdL1tjaGFwdGVyXWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdjaGFwdGVyJz57ZGF0YWNoYXB0ZXIuY2hhcHRlcm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBtb2JpbGU9ezE2fSB0YWJsZXQ9ezE2fSBjb21wdXRlcj17MTZ9IHN0eWxlPXt7IG1hcmdpblRvcDogMjAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbiBvblBhZ2VDaGFuZ2U9eyhlLCBkYXRhKSA9PiBoYW5kbGVDaGFuZ2VwYWdlKGUsIGRhdGEpfSBkZWZhdWx0QWN0aXZlUGFnZT17cHJvcHMucGFnZX0gdG90YWxQYWdlcz17cHJvcHMuZGF0YS50b3RhbHBhZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuXHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcblxyXG59XHJcblRydXllbi5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXHJcbiAgICBjb25zdCB7IGlkLCBwYWdlIH0gPSBjb250ZXh0LnF1ZXJ5XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfW5vdmVsP2lkPSR7aWR9JnBhZ2U9JHtwYWdlfWApXHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgLy8gY29uc29sZS5sb2coanNvbilcclxuICAgIHJldHVybiB7IGRhdGE6IGpzb24sIHBhZ2U6IHBhZ2UsIGlkOiBpZCB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVHJ1eWVuIl0sInNvdXJjZVJvb3QiOiIifQ==