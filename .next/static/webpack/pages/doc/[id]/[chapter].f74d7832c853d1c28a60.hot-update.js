webpackHotUpdate_N_E("pages/doc/[id]/[chapter]",{

/***/ "./pages/doc/[id]/[chapter].js":
/*!*************************************!*\
  !*** ./pages/doc/[id]/[chapter].js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @artsy/fresnel */ "./node_modules/@artsy/fresnel/dist/index.js");
/* harmony import */ var _artsy_fresnel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _redux_actions_novelActions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../redux/actions/novelActions */ "./redux/actions/novelActions.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../config/config */ "./config/config.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");









var __jsx = react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }














var _createMedia = Object(_artsy_fresnel__WEBPACK_IMPORTED_MODULE_13__["createMedia"])({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024
  }
}),
    MediaContextProvider = _createMedia.MediaContextProvider,
    Media = _createMedia.Media;

var menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease'
};
var fixedMenuStyle = {
  // backgroundColor: '#fff',
  // border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)'
};
var countryOptions = [{
  key: 'Merriweather',
  value: 'Merriweather',
  text: 'Merriweather'
}, {
  key: 'Libre Baskerville',
  value: 'Libre Baskerville',
  text: 'Libre Baskerville'
}, {
  key: 'Gentium Book Basic',
  value: 'Gentium Book Basic',
  text: 'Gentium Book Basic'
}, {
  key: 'Roboto',
  value: 'Roboto',
  text: 'Roboto'
}, {
  key: 'Rubik',
  value: 'Rubik',
  text: 'Rubik'
}, {
  key: 'Nunito',
  value: 'Nunito',
  text: 'Nunito'
}];

var Chapter = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Chapter, _React$Component);

  var _super = _createSuper(Chapter);

  function Chapter(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Chapter);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "contextRef", /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_12__["createRef"])());

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleOverlayRef", function (c) {
      var overlayRect = _this.state.overlayRect;

      if (!overlayRect) {
        _this.setState({
          overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width')
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "stickOverlay", function () {
      return _this.setState({
        overlayFixed: true
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "stickTopMenu", function () {
      return _this.setState({
        menuFixed: true
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "unStickOverlay", function () {
      return _this.setState({
        overlayFixed: false
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "unStickTopMenu", function () {
      return _this.setState({
        menuFixed: false
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleNightMode", function (data) {
      var params = {
        nightmode: !data,
        fontsize: _this.state.fontsize,
        font: _this.state.font,
        lineheight: _this.state.lineheight,
        background: _this.state.background
      };

      _this.props.settingNovel(params);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChangeBackground", function (data, bigdata) {
      if (data === '#232323') {
        var _params = {
          nightmode: true,
          fontsize: _this.state.fontsize,
          font: _this.state.font,
          lineheight: _this.state.lineheight,
          background: _this.state.background,
          backgroundbig: bigdata
        };
        return _this.props.settingNovel(_params);
      }

      var params = {
        nightmode: false,
        fontsize: _this.state.fontsize,
        font: _this.state.font,
        lineheight: _this.state.lineheight,
        background: data,
        backgroundbig: bigdata
      };

      _this.props.settingNovel(params);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChangeFont", function (e, data) {
      console.log(data);
      var params = {
        nightmode: _this.state.nightmode,
        fontsize: _this.state.fontsize,
        font: data.value,
        lineheight: _this.state.lineheight,
        background: _this.state.background,
        backgroundbig: _this.state.backgroundbig
      };
      return _this.props.settingNovel(params);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleDegree", function (type) {
      if (type === 1) {
        var params = {
          nightmode: _this.state.nightmode,
          fontsize: _this.state.fontsize - 2 < 14 ? _this.state.fontsize : _this.state.fontsize - 2,
          font: _this.state.value,
          lineheight: _this.state.lineheight,
          background: _this.state.background,
          backgroundbig: _this.state.backgroundbig
        };
        return _this.props.settingNovel(params);
      } else {
        var _params2 = {
          nightmode: _this.state.nightmode,
          fontsize: _this.state.fontsize + 2 > 32 ? _this.state.fontsize : _this.state.fontsize + 2,
          font: _this.state.value,
          lineheight: _this.state.lineheight,
          background: _this.state.background,
          backgroundbig: _this.state.backgroundbig
        };
        return _this.props.settingNovel(_params2);
      }
    });

    _this.state = {
      prechap: props.novelchapter.prechap.length < 4 ? '' : props.novelchapter.prechap,
      nextchap: props.novelchapter.nextchap.length < 4 ? '' : props.novelchapter.nextchap,
      menuFixed: false,
      overlayFixed: false,
      totalchapter: 1,
      showmodal: false,
      listchapter: [],
      nightmode: _this.props.novelReducer.nightmode,
      fontsize: _this.props.novelReducer.fontsize,
      font: _this.props.novelReducer.font,
      lineheight: _this.props.novelReducer.lineheight,
      background: _this.props.novelReducer.background,
      backgroundbig: _this.props.novelReducer.background
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Chapter, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.novelchapter !== prevProps.novelchapter) {
        this.setState({
          prechap: this.props.novelchapter.prechap,
          nextchap: this.props.novelchapter.nextchap
        });
      }

      if (this.props.novelReducer !== prevProps.novelReducer) {
        this.setState({
          nightmode: this.props.novelReducer.nightmode,
          fontsize: this.props.novelReducer.fontsize,
          font: this.props.novelReducer.font,
          lineheight: this.props.novelReducer.lineheight,
          background: this.props.novelReducer.background,
          backgroundbig: this.props.novelReducer.background
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(this.props);
      console.log(this.state);
      var _this$state = this.state,
          menuFixed = _this$state.menuFixed,
          overlayFixed = _this$state.overlayFixed,
          overlayRect = _this$state.overlayRect;
      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx("style", null, "\n          html, body {\n            background: ".concat(this.props.novelReducer.nightmode === true ? '#1a1a1a' : this.props.novelReducer.backgroundbig, " ;\n          }\n        ")), __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_17__["Helmet"], null, __jsx("title", null, "".concat(this.props.novelchapter.chaptername), " - TruyenNT"), __jsx("meta", {
        name: "description",
        content: "\u0110\u1ECDc truy\u1EC7n ".concat(this.props.novelchapter.chaptername, ", h\u1ED7 tr\u1EE3 \u0111\u1ECDc tr\xEAn \u0111i\u1EC7n tho\u1EA1i v\xE0 m\xE1y t\xEDnh b\u1EA3ng")
      }), __jsx("meta", {
        name: "theme-color",
        content: "#008f68"
      }), __jsx("meta", {
        name: "keywords",
        content: "".concat(this.props.novelchapter.chaptername, ", ").concat(this.props.novelchapter.chaptername, " free, ").concat(this.props.novelReducer.novelname, " ho\xE0n, ").concat(this.props.novelReducer.novelname, " full ch\u01B0\u01A1ng, ").concat(this.props.novelReducer.novelname, " ch\u01B0\u01A1ng cu\u1ED1i")
      }), __jsx("link", {
        rel: "canonical",
        href: "/doc/".concat(this.props.novelchapter.idnovels).concat(this.props.novelchapter.idchapter)
      })), __jsx(MediaContextProvider, null, __jsx(Media, {
        greaterThan: "mobile"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Visibility"], {
        onBottomPassed: this.stickTopMenu,
        onBottomVisible: this.unStickTopMenu,
        once: false
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Menu"], {
        borderless: true,
        inverted: this.props.novelReducer.nightmode,
        fixed: menuFixed ? 'top' : undefined,
        style: menuFixed ? fixedMenuStyle : menuStyle
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Container"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Menu"].Item, {
        header: true
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Breadcrumb"], {
        size: 'large'
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Breadcrumb"].Section, {
        link: true
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        as: "/novel/".concat(this.props.novelchapter.idnovels, "/1"),
        href: "/novel/[id]/1"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Icon"], {
        color: "white",
        name: "home"
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Breadcrumb"].Divider, {
        icon: "right chevron"
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Breadcrumb"].Section, {
        active: true
      }, this.props.novelchapter.chaptername))))))), __jsx(Media, {
        at: "mobile"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Visibility"], {
        onBottomPassed: this.stickTopMenu,
        onBottomVisible: this.unStickTopMenu,
        once: false
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Menu"], {
        borderless: true,
        inverted: this.props.novelReducer.nightmode,
        fixed: menuFixed ? 'top' : undefined,
        style: menuFixed ? fixedMenuStyle : menuStyle
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Menu"].Item, {
        style: {
          width: '80%',
          overflow: 'hidden'
        },
        header: true,
        position: "left"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Breadcrumb"], {
        size: 'large'
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Breadcrumb"].Section, {
        link: true
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        as: "/novel/".concat(this.props.novelchapter.idnovels, "/1"),
        href: "/novel/[id]/1"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Icon"], {
        color: "white",
        name: "home"
      })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Breadcrumb"].Divider, {
        icon: "right chevron"
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Breadcrumb"].Section, {
        active: true
      }, this.props.novelchapter.chaptername)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Menu"].Item, {
        position: "right"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Button"], {
        onClick: function onClick() {
          return _this2.handleNightMode(_this2.props.novelReducer.nightmode);
        },
        size: "large",
        circular: true,
        icon: this.props.novelReducer.nightmode ? 'lightbulb outline' : 'moon'
      })))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Container"], {
        text: true,
        style: {
          backgroundColor: this.props.novelReducer.nightmode === true ? '#232323' : this.props.novelReducer.background
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Grid"], {
        style: {
          marginTop: 20
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Grid"].Column, {
        className: "detail-containers",
        mobile: 16,
        tablet: 16,
        computer: 16
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Ref"], {
        innerRef: this.contextRef
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Segment"], {
        style: {
          backgroundColor: this.props.novelReducer.nightmode === true ? '#232323' : this.props.novelReducer.background
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Item"].Group, {
        textAlign: "left"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Item"].Description, {
        className: "content",
        style: {
          fontFamily: this.props.novelReducer.font,
          lineHeight: this.props.novelReducer.lineheight,
          fontSize: this.props.novelReducer.fontsize,
          color: this.props.novelReducer.nightmode === true ? '#b3b3b3' : 'black'
        }
      }, this.props.novelchapter.content !== undefined ? react_html_parser__WEBPACK_IMPORTED_MODULE_16___default()(this.props.novelchapter.content) : null)), __jsx(MediaContextProvider, null, __jsx(Media, {
        greaterThan: "mobile"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Rail"], {
        position: "right",
        style: {
          marginTop: 100
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Sticky"], {
        offset: 100,
        bottomOffset: 100,
        context: this.contextRef
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["List"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["List"].Item, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Popup"], {
        position: "left center",
        trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Button"], {
          size: "large",
          circular: true,
          icon: "font"
        }),
        flowing: true,
        hoverable: true
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Grid"], {
        textAlign: "left",
        divided: true,
        columns: 1
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Grid"].Column, {
        textAlign: "left"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Header"], {
        as: "h4"
      }, "Background"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Grid"], {
        columns: 4
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Grid"].Column, null, __jsx("div", {
        onClick: function onClick() {
          return _this2.handleChangeBackground('#fff', '#f5f7fa');
        },
        className: "read-setting_white-color__3ZTE4"
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Grid"].Column, null, __jsx("div", {
        onClick: function onClick() {
          return _this2.handleChangeBackground('#fff6df', '#fff9eb');
        },
        className: "read-setting_orange-color__3chix"
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Grid"].Column, null, __jsx("div", {
        onClick: function onClick() {
          return _this2.handleChangeBackground('#ebf9eb', '#f2f9f2');
        },
        className: "read-setting_green-color__WTjD7"
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Grid"].Column, null, __jsx("div", {
        onClick: function onClick() {
          return _this2.handleChangeBackground('#232323', '#1a1a1a');
        },
        className: "read-setting_black-color__3KmIV"
      }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Grid"].Column, {
        textAlign: "left"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Header"], {
        as: "h4"
      }, "Font Size"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Grid"], {
        columns: 4
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Button"].Group, {
        size: "large"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Button"], {
        onClick: function onClick() {
          return _this2.handleDegree(1);
        }
      }, "A-"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Button"].Or, {
        text: this.props.novelReducer.fontsize
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Button"], {
        onClick: function onClick() {
          return _this2.handleDegree(2);
        }
      }, "A+")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Select"], {
        onChange: function onChange(e, data) {
          return _this2.handleChangeFont(e, data);
        },
        defaultValue: this.props.novelReducer.font,
        options: countryOptions
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Grid"].Row, null)))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["List"].Item, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Button"], {
        onClick: function onClick() {
          return _this2.handleNightMode(_this2.props.novelReducer.nightmode);
        },
        size: "large",
        circular: true,
        icon: this.props.novelReducer.nightmode ? 'lightbulb outline' : 'moon'
      })))))))))), __jsx(MediaContextProvider, null, __jsx(Media, {
        greaterThan: "mobile"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Grid"].Row, {
        verticalAlign: "middle"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Button"].Group, {
        widths: "3"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        as: "/doc/".concat(this.props.novelchapter.idnovels).concat(this.state.prechap),
        href: "/doc/[id]/[chapter]"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Button"], {
        size: "huge",
        color: "black",
        disabled: this.state.prechap !== "" ? false : true,
        labelPosition: "left",
        icon: "left chevron",
        content: "Prev chapter"
      })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        as: "/novel/".concat(this.props.novelchapter.idnovels, "/1"),
        href: "/novel/[id]/1"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Button"], {
        size: "huge",
        color: "black",
        icon: "bars",
        content: "Chapter List"
      })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        as: "/doc/".concat(this.props.novelchapter.idnovels).concat(this.state.nextchap),
        href: "/doc/[id]/[chapter]"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Button"], {
        size: "huge",
        color: "black",
        disabled: this.state.nextchap !== "" ? false : true,
        labelPosition: "right",
        icon: "right chevron",
        content: "Next chapter"
      }))))), __jsx(Media, {
        at: "mobile"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Grid"].Row, {
        mobile: 16,
        tablet: 16,
        computer: 16,
        verticalAlign: "middle"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Button"].Group, {
        widths: "3"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        as: "/doc/".concat(this.props.novelchapter.idnovels).concat(this.state.prechap),
        href: "/doc/[id]/[chapter]"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Button"], {
        size: "huge",
        color: "black",
        disabled: this.state.prechap !== "" ? false : true,
        labelPosition: "left",
        icon: "left chevron"
      })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        as: "/novel/".concat(this.props.novelchapter.idnovels, "/1"),
        href: "/novel/[id]/1"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Button"], {
        size: "huge",
        color: "black",
        icon: "bars"
      })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        as: "/doc/".concat(this.props.novelchapter.idnovels).concat(this.state.nextchap),
        href: "/doc/[id]/[chapter]"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_20__["Button"], {
        size: "huge",
        color: "black",
        disabled: this.state.nextchap !== "" ? false : true,
        labelPosition: "right",
        icon: "right chevron"
      })))))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var _context$query, id, chapter, res, json;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context$query = context.query, id = _context$query.id, chapter = _context$query.chapter;
                _context.next = 3;
                return fetch("".concat(_config_config__WEBPACK_IMPORTED_MODULE_19__["API_URL"], "chapter?novelid=").concat(id, "&chapterid=/").concat(chapter, "/"));

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                json = _context.sent;
                return _context.abrupt("return", {
                  novelchapter: json
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Chapter;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);

function mapStateToProps(state) {
  return {
    novelReducer: state.novelReducer
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["connect"])(mapStateToProps, {
  saveNovel: _redux_actions_novelActions__WEBPACK_IMPORTED_MODULE_18__["saveNovel"],
  settingNovel: _redux_actions_novelActions__WEBPACK_IMPORTED_MODULE_18__["settingNovel"]
})(Chapter));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jLy9bY2hhcHRlcl0uanMiXSwibmFtZXMiOlsiY3JlYXRlTWVkaWEiLCJicmVha3BvaW50cyIsIm1vYmlsZSIsInRhYmxldCIsImNvbXB1dGVyIiwiTWVkaWFDb250ZXh0UHJvdmlkZXIiLCJNZWRpYSIsIm1lbnVTdHlsZSIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsIm1hcmdpbkJvdHRvbSIsInRyYW5zaXRpb24iLCJmaXhlZE1lbnVTdHlsZSIsImNvdW50cnlPcHRpb25zIiwia2V5IiwidmFsdWUiLCJ0ZXh0IiwiQ2hhcHRlciIsInByb3BzIiwiY3JlYXRlUmVmIiwiYyIsIm92ZXJsYXlSZWN0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsIl8iLCJwaWNrIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwib3ZlcmxheUZpeGVkIiwibWVudUZpeGVkIiwiZGF0YSIsInBhcmFtcyIsIm5pZ2h0bW9kZSIsImZvbnRzaXplIiwiZm9udCIsImxpbmVoZWlnaHQiLCJiYWNrZ3JvdW5kIiwic2V0dGluZ05vdmVsIiwiYmlnZGF0YSIsImJhY2tncm91bmRiaWciLCJlIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJwcmVjaGFwIiwibm92ZWxjaGFwdGVyIiwibGVuZ3RoIiwibmV4dGNoYXAiLCJ0b3RhbGNoYXB0ZXIiLCJzaG93bW9kYWwiLCJsaXN0Y2hhcHRlciIsIm5vdmVsUmVkdWNlciIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsImNoYXB0ZXJuYW1lIiwibm92ZWxuYW1lIiwiaWRub3ZlbHMiLCJpZGNoYXB0ZXIiLCJzdGlja1RvcE1lbnUiLCJ1blN0aWNrVG9wTWVudSIsInVuZGVmaW5lZCIsIndpZHRoIiwib3ZlcmZsb3ciLCJoYW5kbGVOaWdodE1vZGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5Ub3AiLCJjb250ZXh0UmVmIiwiZm9udEZhbWlseSIsImxpbmVIZWlnaHQiLCJmb250U2l6ZSIsImNvbG9yIiwiY29udGVudCIsIlJlYWN0SHRtbFBhcnNlciIsImhhbmRsZUNoYW5nZUJhY2tncm91bmQiLCJoYW5kbGVEZWdyZWUiLCJoYW5kbGVDaGFuZ2VGb250IiwiY29udGV4dCIsInF1ZXJ5IiwiaWQiLCJjaGFwdGVyIiwiZmV0Y2giLCJBUElfVVJMIiwicmVzIiwianNvbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiY29ubmVjdCIsInNhdmVOb3ZlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7bUJBZ0J3Q0EsbUVBQVcsQ0FBQztBQUNoREMsYUFBVyxFQUFFO0FBQ1RDLFVBQU0sRUFBRSxDQURDO0FBRVRDLFVBQU0sRUFBRSxHQUZDO0FBR1RDLFlBQVEsRUFBRTtBQUhEO0FBRG1DLENBQUQsQztJQUEzQ0Msb0IsZ0JBQUFBLG9CO0lBQXNCQyxLLGdCQUFBQSxLOztBQU85QixJQUFNQyxTQUFTLEdBQUc7QUFDZEMsUUFBTSxFQUFFLE1BRE07QUFFZEMsY0FBWSxFQUFFLENBRkE7QUFHZEMsV0FBUyxFQUFFLE1BSEc7QUFJZEMsY0FBWSxFQUFFLEtBSkE7QUFLZEMsWUFBVSxFQUFFO0FBTEUsQ0FBbEI7QUFRQSxJQUFNQyxjQUFjLEdBQUc7QUFDbkI7QUFDQTtBQUNBSCxXQUFTLEVBQUU7QUFIUSxDQUF2QjtBQUtBLElBQU1JLGNBQWMsR0FBRyxDQUNuQjtBQUFFQyxLQUFHLEVBQUUsY0FBUDtBQUF1QkMsT0FBSyxFQUFFLGNBQTlCO0FBQThDQyxNQUFJLEVBQUU7QUFBcEQsQ0FEbUIsRUFFbkI7QUFBRUYsS0FBRyxFQUFFLG1CQUFQO0FBQTRCQyxPQUFLLEVBQUUsbUJBQW5DO0FBQXdEQyxNQUFJLEVBQUU7QUFBOUQsQ0FGbUIsRUFHbkI7QUFBRUYsS0FBRyxFQUFFLG9CQUFQ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LGlEQUFEO0FBQ0ksVUFBRSxpQkFBVSxLQUFLckMsS0FBTCxDQUFXMEIsWUFBWCxDQUF3QlcsUUFBbEMsU0FBNkMsS0FBS2pDLEtBQUwsQ0FBV3dCLFFBQXhELENBRE47QUFFSSxZQUFJO0FBRlIsU0FJSSxNQUFDLHlEQUFEO0FBQVEsWUFBSSxFQUFDLE1BQWI7QUFBb0IsYUFBSyxFQUFDLE9BQTFCO0FBQWtDLGdCQUFRLEVBQUUsS0FBS3hCLEtBQUwsQ0FBV3dCLFFBQVgsS0FBd0IsRUFBeEIsR0FBNkIsS0FBN0IsR0FBcUMsSUFBakY7QUFBdUYscUJBQWEsRUFBQyxPQUFyRztBQUE2RyxZQUFJLEVBQUM7QUFBbEgsUUFKSixDQWRKLENBREosQ0FESixDQXpCSixDQTFFSixDQURKLENBdkVKLENBREo7QUEyTUg7Ozs7K05BOVM0QjZCLE87Ozs7Ozs7aUNBQ0RBLE9BQU8sQ0FBQ0MsSyxFQUF4QkMsRSxrQkFBQUEsRSxFQUFJQyxPLGtCQUFBQSxPOzt1QkFDTUMsS0FBSyxXQUFJQyx1REFBSiw2QkFBOEJILEVBQTlCLHlCQUErQ0MsT0FBL0MsTzs7O0FBQWpCRyxtQjs7dUJBQ2FBLEdBQUcsQ0FBQ0MsSUFBSixFOzs7QUFBYkEsb0I7aURBRUM7QUFBRXRDLDhCQUFZLEVBQUVzQztBQUFoQixpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXhDT0MsNkNBQUssQ0FBQ0MsUzs7QUFtVjVCLFNBQVNDLGVBQVQsQ0FBeUIvRCxLQUF6QixFQUFnQztBQUM1QixTQUFPO0FBQ0g0QixnQkFBWSxFQUFFNUIsS0FBSyxDQUFDNEI7QUFEakIsR0FBUDtBQUdIOztBQUVjb0MsMkhBQU8sQ0FBQ0QsZUFBRCxFQUFrQjtBQUFFRSxXQUFTLEVBQVRBLHNFQUFGO0FBQWFuRCxjQUFZLEVBQVpBLHlFQUFZQTtBQUF6QixDQUFsQixDQUFQLENBQXNEbkIsT0FBdEQsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2MvW2lkXS9bY2hhcHRlcl0uZjc0ZDc4MzJjODUzZDFjMjhhNjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9NeUxheW91dCdcclxuaW1wb3J0ICdpc29tb3JwaGljLXVuZmV0Y2gnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgY3JlYXRlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVNZWRpYSB9IGZyb20gJ0BhcnRzeS9mcmVzbmVsJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBSZWFjdEh0bWxQYXJzZXIsIHsgcHJvY2Vzc05vZGVzLCBjb252ZXJ0Tm9kZVRvRWxlbWVudCwgaHRtbHBhcnNlcjIgfSBmcm9tICdyZWFjdC1odG1sLXBhcnNlcic7XHJcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XHJcbmltcG9ydCB7IHNhdmVOb3ZlbCwgc2V0dGluZ05vdmVsIH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9ub3ZlbEFjdGlvbnMnXHJcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvY29uZmlnJ1xyXG5pbXBvcnQge1xyXG4gICAgQ29udGFpbmVyLCBCcmVhZGNydW1iLFxyXG4gICAgRGl2aWRlcixcclxuICAgIERyb3Bkb3duLFxyXG4gICAgR3JpZCxcclxuICAgIEhlYWRlciwgU2VsZWN0LFxyXG4gICAgSWNvbixcclxuICAgIEltYWdlLFxyXG4gICAgTGlzdCxcclxuICAgIE1lbnUsXHJcbiAgICBTZWdtZW50LFxyXG4gICAgVmlzaWJpbGl0eSxcclxuICAgIEl0ZW0sXHJcbiAgICBTdGlja3ksIFJhaWwsXHJcbiAgICBSZWYsIEJ1dHRvbiwgUG9wdXAsIE1vZGFsXHJcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5jb25zdCB7IE1lZGlhQ29udGV4dFByb3ZpZGVyLCBNZWRpYSB9ID0gY3JlYXRlTWVkaWEoe1xyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICBtb2JpbGU6IDAsXHJcbiAgICAgICAgdGFibGV0OiA3NjgsXHJcbiAgICAgICAgY29tcHV0ZXI6IDEwMjQsXHJcbiAgICB9LFxyXG59KVxyXG5jb25zdCBtZW51U3R5bGUgPSB7XHJcbiAgICBib3JkZXI6ICdub25lJyxcclxuICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgIGJveFNoYWRvdzogJ25vbmUnLFxyXG4gICAgbWFyZ2luQm90dG9tOiAnMWVtJyxcclxuICAgIHRyYW5zaXRpb246ICdib3gtc2hhZG93IDAuNXMgZWFzZSwgcGFkZGluZyAwLjVzIGVhc2UnLFxyXG59XHJcblxyXG5jb25zdCBmaXhlZE1lbnVTdHlsZSA9IHtcclxuICAgIC8vIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgLy8gYm9yZGVyOiAnMXB4IHNvbGlkICNkZGQnLFxyXG4gICAgYm94U2hhZG93OiAnMHB4IDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpJyxcclxufVxyXG5jb25zdCBjb3VudHJ5T3B0aW9ucyA9IFtcclxuICAgIHsga2V5OiAnTWVycml3ZWF0aGVyJywgdmFsdWU6ICdNZXJyaXdlYXRoZXInLCB0ZXh0OiAnTWVycml3ZWF0aGVyJyB9LFxyXG4gICAgeyBrZXk6ICdMaWJyZSBCYXNrZXJ2aWxsZScsIHZhbHVlOiAnTGlicmUgQmFza2VydmlsbGUnLCB0ZXh0OiAnTGlicmUgQmFza2VydmlsbGUnIH0sXHJcbiAgICB7IGtleTogJ0dlbnRpdW0gQm9vayBCYXNpYycsIHZhbHVlOiAnR2VudGl1bSBCb29rIEJhc2ljJywgdGV4dDogJ0dlbnRpdW0gQm9vayBCYXNpYycgfSxcclxuICAgIHsga2V5OiAnUm9ib3RvJywgdmFsdWU6ICdSb2JvdG8nLCB0ZXh0OiAnUm9ib3RvJyB9LFxyXG4gICAgeyBrZXk6ICdSdWJpaycsIHZhbHVlOiAnUnViaWsnLCB0ZXh0OiAnUnViaWsnIH0sXHJcbiAgICB7IGtleTogJ051bml0bycsIHZhbHVlOiAnTnVuaXRvJywgdGV4dDogJ051bml0bycgfSxcclxuXVxyXG5jbGFzcyBDaGFwdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHByZWNoYXA6IHByb3BzLm5vdmVsY2hhcHRlci5wcmVjaGFwLmxlbmd0aCA8IDQgPyAnJyA6IHByb3BzLm5vdmVsY2hhcHRlci5wcmVjaGFwLFxyXG4gICAgICAgICAgICBuZXh0Y2hhcDogcHJvcHMubm92ZWxjaGFwdGVyLm5leHRjaGFwLmxlbmd0aCA8IDQgPyAnJyA6IHByb3BzLm5vdmVsY2hhcHRlci5uZXh0Y2hhcCxcclxuICAgICAgICAgICAgbWVudUZpeGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgb3ZlcmxheUZpeGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxjaGFwdGVyOiAxLFxyXG4gICAgICAgICAgICBzaG93bW9kYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICBsaXN0Y2hhcHRlcjogW10sXHJcbiAgICAgICAgICAgIG5pZ2h0bW9kZTogdGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIubmlnaHRtb2RlLFxyXG4gICAgICAgICAgICBmb250c2l6ZTogdGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIuZm9udHNpemUsXHJcbiAgICAgICAgICAgIGZvbnQ6IHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyLmZvbnQsXHJcbiAgICAgICAgICAgIGxpbmVoZWlnaHQ6IHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyLmxpbmVoZWlnaHQsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyLmJhY2tncm91bmQsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRiaWc6IHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyLmJhY2tncm91bmQsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29udGV4dFJlZiA9IGNyZWF0ZVJlZigpXHJcbiAgICBoYW5kbGVPdmVybGF5UmVmID0gKGMpID0+IHtcclxuICAgICAgICBjb25zdCB7IG92ZXJsYXlSZWN0IH0gPSB0aGlzLnN0YXRlXHJcblxyXG4gICAgICAgIGlmICghb3ZlcmxheVJlY3QpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG92ZXJsYXlSZWN0OiBfLnBpY2soYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgJ2hlaWdodCcsICd3aWR0aCcpIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0aWNrT3ZlcmxheSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBvdmVybGF5Rml4ZWQ6IHRydWUgfSlcclxuXHJcbiAgICBzdGlja1RvcE1lbnUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgbWVudUZpeGVkOiB0cnVlIH0pXHJcblxyXG4gICAgdW5TdGlja092ZXJsYXkgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3ZlcmxheUZpeGVkOiBmYWxzZSB9KVxyXG5cclxuICAgIHVuU3RpY2tUb3BNZW51ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG1lbnVGaXhlZDogZmFsc2UgfSlcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY29udGV4dCkge1xyXG4gICAgICAgIGNvbnN0IHsgaWQsIGNoYXB0ZXIgfSA9IGNvbnRleHQucXVlcnlcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfWNoYXB0ZXI/bm92ZWxpZD0ke2lkfSZjaGFwdGVyaWQ9LyR7Y2hhcHRlcn0vYClcclxuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxuICAgICAgICByZXR1cm4geyBub3ZlbGNoYXB0ZXI6IGpzb24gfVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubm92ZWxjaGFwdGVyICE9PSBwcmV2UHJvcHMubm92ZWxjaGFwdGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgcHJlY2hhcDogdGhpcy5wcm9wcy5ub3ZlbGNoYXB0ZXIucHJlY2hhcCxcclxuICAgICAgICAgICAgICAgIG5leHRjaGFwOiB0aGlzLnByb3BzLm5vdmVsY2hhcHRlci5uZXh0Y2hhcFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIgIT09IHByZXZQcm9wcy5ub3ZlbFJlZHVjZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBuaWdodG1vZGU6IHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyLm5pZ2h0bW9kZSxcclxuICAgICAgICAgICAgICAgIGZvbnRzaXplOiB0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5mb250c2l6ZSxcclxuICAgICAgICAgICAgICAgIGZvbnQ6IHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyLmZvbnQsXHJcbiAgICAgICAgICAgICAgICBsaW5laGVpZ2h0OiB0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5saW5laGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIuYmFja2dyb3VuZCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRiaWc6IHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyLmJhY2tncm91bmQsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoYW5kbGVOaWdodE1vZGUgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG5pZ2h0bW9kZTogIWRhdGEsXHJcbiAgICAgICAgICAgIGZvbnRzaXplOiB0aGlzLnN0YXRlLmZvbnRzaXplLFxyXG4gICAgICAgICAgICBmb250OiB0aGlzLnN0YXRlLmZvbnQsXHJcbiAgICAgICAgICAgIGxpbmVoZWlnaHQ6IHRoaXMuc3RhdGUubGluZWhlaWdodCxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdGhpcy5zdGF0ZS5iYWNrZ3JvdW5kLFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb3BzLnNldHRpbmdOb3ZlbChwYXJhbXMpXHJcbiAgICB9XHJcbiAgICBoYW5kbGVDaGFuZ2VCYWNrZ3JvdW5kID0gKGRhdGEsIGJpZ2RhdGEpID0+IHtcclxuICAgICAgICBpZiAoZGF0YSA9PT0gJyMyMzIzMjMnKSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICBuaWdodG1vZGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBmb250c2l6ZTogdGhpcy5zdGF0ZS5mb250c2l6ZSxcclxuICAgICAgICAgICAgICAgIGZvbnQ6IHRoaXMuc3RhdGUuZm9udCxcclxuICAgICAgICAgICAgICAgIGxpbmVoZWlnaHQ6IHRoaXMuc3RhdGUubGluZWhlaWdodCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRoaXMuc3RhdGUuYmFja2dyb3VuZCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRiaWc6IGJpZ2RhdGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5zZXR0aW5nTm92ZWwocGFyYW1zKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICBuaWdodG1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBmb250c2l6ZTogdGhpcy5zdGF0ZS5mb250c2l6ZSxcclxuICAgICAgICAgICAgZm9udDogdGhpcy5zdGF0ZS5mb250LFxyXG4gICAgICAgICAgICBsaW5laGVpZ2h0OiB0aGlzLnN0YXRlLmxpbmVoZWlnaHQsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhdGEsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRiaWc6IGJpZ2RhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXR0aW5nTm92ZWwocGFyYW1zKVxyXG4gICAgfVxyXG4gICAgaGFuZGxlQ2hhbmdlRm9udCA9IChlLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICBuaWdodG1vZGU6IHRoaXMuc3RhdGUubmlnaHRtb2RlLFxyXG4gICAgICAgICAgICBmb250c2l6ZTogdGhpcy5zdGF0ZS5mb250c2l6ZSxcclxuICAgICAgICAgICAgZm9udDogZGF0YS52YWx1ZSxcclxuICAgICAgICAgICAgbGluZWhlaWdodDogdGhpcy5zdGF0ZS5saW5laGVpZ2h0LFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGlzLnN0YXRlLmJhY2tncm91bmQsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRiaWc6IHRoaXMuc3RhdGUuYmFja2dyb3VuZGJpZ1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5zZXR0aW5nTm92ZWwocGFyYW1zKVxyXG4gICAgfVxyXG4gICAgaGFuZGxlRGVncmVlID0gKHR5cGUpID0+IHtcclxuICAgICAgICBpZiAodHlwZSA9PT0gMSkge1xyXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgbmlnaHRtb2RlOiB0aGlzLnN0YXRlLm5pZ2h0bW9kZSxcclxuICAgICAgICAgICAgICAgIGZvbnRzaXplOiB0aGlzLnN0YXRlLmZvbnRzaXplIC0gMiA8IDE0ID8gdGhpcy5zdGF0ZS5mb250c2l6ZSA6IHRoaXMuc3RhdGUuZm9udHNpemUgLSAyLFxyXG4gICAgICAgICAgICAgICAgZm9udDogdGhpcy5zdGF0ZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGxpbmVoZWlnaHQ6IHRoaXMuc3RhdGUubGluZWhlaWdodCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRoaXMuc3RhdGUuYmFja2dyb3VuZCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRiaWc6IHRoaXMuc3RhdGUuYmFja2dyb3VuZGJpZ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLnNldHRpbmdOb3ZlbChwYXJhbXMpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIG5pZ2h0bW9kZTogdGhpcy5zdGF0ZS5uaWdodG1vZGUsXHJcbiAgICAgICAgICAgICAgICBmb250c2l6ZTogdGhpcy5zdGF0ZS5mb250c2l6ZSArIDIgPiAzMiA/IHRoaXMuc3RhdGUuZm9udHNpemUgOiB0aGlzLnN0YXRlLmZvbnRzaXplICsgMixcclxuICAgICAgICAgICAgICAgIGZvbnQ6IHRoaXMuc3RhdGUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBsaW5laGVpZ2h0OiB0aGlzLnN0YXRlLmxpbmVoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGlzLnN0YXRlLmJhY2tncm91bmQsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kYmlnOiB0aGlzLnN0YXRlLmJhY2tncm91bmRiaWdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5zZXR0aW5nTm92ZWwocGFyYW1zKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcylcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxyXG4gICAgICAgIGNvbnN0IHsgbWVudUZpeGVkLCBvdmVybGF5Rml4ZWQsIG92ZXJsYXlSZWN0IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgIGh0bWwsIGJvZHkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoaXMucHJvcHMubm92ZWxSZWR1Y2VyLm5pZ2h0bW9kZSA9PT0gdHJ1ZSA/ICcjMWExYTFhJyA6IHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyLmJhY2tncm91bmRiaWd9IDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxIZWxtZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPntgJHt0aGlzLnByb3BzLm5vdmVsY2hhcHRlci5jaGFwdGVybmFtZX1gfSAtIFRydXllbk5UPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtgxJDhu41jIHRydXnhu4duICR7dGhpcy5wcm9wcy5ub3ZlbGNoYXB0ZXIuY2hhcHRlcm5hbWV9LCBo4buXIHRy4bujIMSR4buNYyB0csOqbiDEkWnhu4duIHRob+G6oWkgdsOgIG3DoXkgdMOtbmggYuG6o25nYH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzAwOGY2OFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD17YCR7dGhpcy5wcm9wcy5ub3ZlbGNoYXB0ZXIuY2hhcHRlcm5hbWV9LCAke3RoaXMucHJvcHMubm92ZWxjaGFwdGVyLmNoYXB0ZXJuYW1lfSBmcmVlLCAke3RoaXMucHJvcHMubm92ZWxSZWR1Y2VyLm5vdmVsbmFtZX0gaG/DoG4sICR7dGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIubm92ZWxuYW1lfSBmdWxsIGNoxrDGoW5nLCAke3RoaXMucHJvcHMubm92ZWxSZWR1Y2VyLm5vdmVsbmFtZX0gY2jGsMahbmcgY3Xhu5FpYH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXtgL2RvYy8ke3RoaXMucHJvcHMubm92ZWxjaGFwdGVyLmlkbm92ZWxzfSR7dGhpcy5wcm9wcy5ub3ZlbGNoYXB0ZXIuaWRjaGFwdGVyfWB9PjwvbGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0hlbG1ldD5cclxuICAgICAgICAgICAgICAgIDxNZWRpYUNvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8TWVkaWEgZ3JlYXRlclRoYW49J21vYmlsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaXNpYmlsaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJvdHRvbVBhc3NlZD17dGhpcy5zdGlja1RvcE1lbnV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJvdHRvbVZpc2libGU9e3RoaXMudW5TdGlja1RvcE1lbnV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmNlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJsZXNzIGludmVydGVkPXt0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5uaWdodG1vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZml4ZWQ9e21lbnVGaXhlZCA/ICd0b3AnIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXttZW51Rml4ZWQgPyBmaXhlZE1lbnVTdHlsZSA6IG1lbnVTdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iIHNpemU9eydsYXJnZSd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iLlNlY3Rpb24gbGluaz48TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9ub3ZlbC8ke3RoaXMucHJvcHMubm92ZWxjaGFwdGVyLmlkbm92ZWxzfS8xYH0gaHJlZj17YC9ub3ZlbC9baWRdLzFgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48SWNvbiBjb2xvcj0nd2hpdGUnIG5hbWU9J2hvbWUnIC8+PC9MaW5rPjwvQnJlYWRjcnVtYi5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iLkRpdmlkZXIgaWNvbj0ncmlnaHQgY2hldnJvbicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYi5TZWN0aW9uIGFjdGl2ZT57dGhpcy5wcm9wcy5ub3ZlbGNoYXB0ZXIuY2hhcHRlcm5hbWV9PC9CcmVhZGNydW1iLlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JyZWFkY3J1bWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Zpc2liaWxpdHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZWRpYT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVkaWEgYXQ9J21vYmlsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaXNpYmlsaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJvdHRvbVBhc3NlZD17dGhpcy5zdGlja1RvcE1lbnV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJvdHRvbVZpc2libGU9e3RoaXMudW5TdGlja1RvcE1lbnV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmNlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJsZXNzIGludmVydGVkPXt0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5uaWdodG1vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZml4ZWQ9e21lbnVGaXhlZCA/ICd0b3AnIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXttZW51Rml4ZWQgPyBmaXhlZE1lbnVTdHlsZSA6IG1lbnVTdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIHN0eWxlPXt7IHdpZHRoOiAnODAlJywgb3ZlcmZsb3c6ICdoaWRkZW4nIH19IGhlYWRlciBwb3NpdGlvbj0nbGVmdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iIHNpemU9eydsYXJnZSd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJyZWFkY3J1bWIuU2VjdGlvbiBsaW5rPjxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e2Avbm92ZWwvJHt0aGlzLnByb3BzLm5vdmVsY2hhcHRlci5pZG5vdmVsc30vMWB9IGhyZWY9e2Avbm92ZWwvW2lkXS8xYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48SWNvbiBjb2xvcj0nd2hpdGUnIG5hbWU9J2hvbWUnIC8+PC9MaW5rPjwvQnJlYWRjcnVtYi5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JyZWFkY3J1bWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iLkRpdmlkZXIgaWNvbj0ncmlnaHQgY2hldnJvbicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJyZWFkY3J1bWIuU2VjdGlvbiBhY3RpdmU+e3RoaXMucHJvcHMubm92ZWxjaGFwdGVyLmNoYXB0ZXJuYW1lfTwvQnJlYWRjcnVtYi5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gcG9zaXRpb249J3JpZ2h0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZU5pZ2h0TW9kZSh0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5uaWdodG1vZGUpfSBzaXplPSdsYXJnZScgY2lyY3VsYXIgaWNvbj17dGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIubmlnaHRtb2RlID8gJ2xpZ2h0YnVsYiBvdXRsaW5lJyA6ICdtb29uJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Zpc2liaWxpdHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZWRpYT5cclxuICAgICAgICAgICAgICAgIDwvTWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIHRleHQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiB0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5uaWdodG1vZGUgPT09IHRydWUgPyAnIzIzMjMyMycgOiB0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5iYWNrZ3JvdW5kIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIHN0eWxlPXt7IG1hcmdpblRvcDogMjAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBjbGFzc05hbWU9J2RldGFpbC1jb250YWluZXJzJyBtb2JpbGU9ezE2fSB0YWJsZXQ9ezE2fSBjb21wdXRlcj17MTZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlZiBpbm5lclJlZj17dGhpcy5jb250ZXh0UmVmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VnbWVudCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyLm5pZ2h0bW9kZSA9PT0gdHJ1ZSA/ICcjMjMyMzIzJyA6IHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyLmJhY2tncm91bmQgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkdyb3VwIHRleHRBbGlnbj0nbGVmdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5EZXNjcmlwdGlvbiBjbGFzc05hbWU9J2NvbnRlbnQnIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogdGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIuZm9udCwgbGluZUhlaWdodDogdGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIubGluZWhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogdGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIuZm9udHNpemUsIGNvbG9yOiB0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5uaWdodG1vZGUgPT09IHRydWUgPyAnI2IzYjNiMycgOiAnYmxhY2snXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubm92ZWxjaGFwdGVyLmNvbnRlbnQgIT09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0SHRtbFBhcnNlcih0aGlzLnByb3BzLm5vdmVsY2hhcHRlci5jb250ZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhIGdyZWF0ZXJUaGFuPSdtb2JpbGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWlsIHBvc2l0aW9uPSdyaWdodCcgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGlja3kgb2Zmc2V0PXsxMDB9IGJvdHRvbU9mZnNldD17MTAwfSBjb250ZXh0PXt0aGlzLmNvbnRleHRSZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcHVwIHBvc2l0aW9uPSdsZWZ0IGNlbnRlcicgdHJpZ2dlcj17PEJ1dHRvbiBzaXplPSdsYXJnZScgY2lyY3VsYXIgaWNvbj0nZm9udCcgLz59IGZsb3dpbmcgaG92ZXJhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgdGV4dEFsaWduPSdsZWZ0JyBkaXZpZGVkIGNvbHVtbnM9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB0ZXh0QWxpZ249J2xlZnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIGFzPSdoNCc+QmFja2dyb3VuZDwvSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb2x1bW5zPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2VCYWNrZ3JvdW5kKCcjZmZmJywgJyNmNWY3ZmEnKX0gY2xhc3NOYW1lPSdyZWFkLXNldHRpbmdfd2hpdGUtY29sb3JfXzNaVEU0JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2hhbmdlQmFja2dyb3VuZCgnI2ZmZjZkZicsICcjZmZmOWViJyl9IGNsYXNzTmFtZT0ncmVhZC1zZXR0aW5nX29yYW5nZS1jb2xvcl9fM2NoaXgnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2VCYWNrZ3JvdW5kKCcjZWJmOWViJywgJyNmMmY5ZjInKX0gY2xhc3NOYW1lPSdyZWFkLXNldHRpbmdfZ3JlZW4tY29sb3JfX1dUakQ3JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2hhbmdlQmFja2dyb3VuZCgnIzIzMjMyMycsICcjMWExYTFhJyl9IGNsYXNzTmFtZT0ncmVhZC1zZXR0aW5nX2JsYWNrLWNvbG9yX18zS21JVicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHRleHRBbGlnbj0nbGVmdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9J2g0Jz5Gb250IFNpemU8L0hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29sdW1ucz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cCBzaXplPSdsYXJnZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZWdyZWUoMSl9PkEtPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24uT3IgdGV4dD17dGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIuZm9udHNpemV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZWdyZWUoMil9PkErPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBvbkNoYW5nZT17KGUsIGRhdGEpID0+IHRoaXMuaGFuZGxlQ2hhbmdlRm9udChlLCBkYXRhKX0gZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5mb250fSBvcHRpb25zPXtjb3VudHJ5T3B0aW9uc30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9wdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlTmlnaHRNb2RlKHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyLm5pZ2h0bW9kZSl9IHNpemU9J2xhcmdlJyBjaXJjdWxhciBpY29uPXt0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5uaWdodG1vZGUgPyAnbGlnaHRidWxiIG91dGxpbmUnIDogJ21vb24nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0aWNreT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lZGlhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVkaWEgZ3JlYXRlclRoYW49J21vYmlsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93IHZlcnRpY2FsQWxpZ249J21pZGRsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24uR3JvdXAgd2lkdGhzPSczJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e2AvZG9jLyR7dGhpcy5wcm9wcy5ub3ZlbGNoYXB0ZXIuaWRub3ZlbHN9JHt0aGlzLnN0YXRlLnByZWNoYXB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2RvYy9baWRdL1tjaGFwdGVyXWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdodWdlJyBjb2xvcj0nYmxhY2snIGRpc2FibGVkPXt0aGlzLnN0YXRlLnByZWNoYXAgIT09IFwiXCIgPyBmYWxzZSA6IHRydWV9IGxhYmVsUG9zaXRpb249J2xlZnQnIGljb249J2xlZnQgY2hldnJvbicgY29udGVudD0nUHJldiBjaGFwdGVyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9ub3ZlbC8ke3RoaXMucHJvcHMubm92ZWxjaGFwdGVyLmlkbm92ZWxzfS8xYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL25vdmVsL1tpZF0vMWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdodWdlJyBjb2xvcj0nYmxhY2snIGljb249J2JhcnMnIGNvbnRlbnQ9J0NoYXB0ZXIgTGlzdCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e2AvZG9jLyR7dGhpcy5wcm9wcy5ub3ZlbGNoYXB0ZXIuaWRub3ZlbHN9JHt0aGlzLnN0YXRlLm5leHRjaGFwfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9kb2MvW2lkXS9bY2hhcHRlcl1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT0naHVnZScgY29sb3I9J2JsYWNrJyBkaXNhYmxlZD17dGhpcy5zdGF0ZS5uZXh0Y2hhcCAhPT0gXCJcIiA/IGZhbHNlIDogdHJ1ZX0gbGFiZWxQb3NpdGlvbj0ncmlnaHQnIGljb249J3JpZ2h0IGNoZXZyb24nIGNvbnRlbnQ9J05leHQgY2hhcHRlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVkaWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVkaWEgYXQ9J21vYmlsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93IG1vYmlsZT17MTZ9IHRhYmxldD17MTZ9IGNvbXB1dGVyPXsxNn0gdmVydGljYWxBbGlnbj0nbWlkZGxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cCB3aWR0aHM9JzMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9kb2MvJHt0aGlzLnByb3BzLm5vdmVsY2hhcHRlci5pZG5vdmVsc30ke3RoaXMuc3RhdGUucHJlY2hhcH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvZG9jL1tpZF0vW2NoYXB0ZXJdYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9J2h1Z2UnIGNvbG9yPSdibGFjaycgZGlzYWJsZWQ9e3RoaXMuc3RhdGUucHJlY2hhcCAhPT0gXCJcIiA/IGZhbHNlIDogdHJ1ZX0gbGFiZWxQb3NpdGlvbj0nbGVmdCcgaWNvbj0nbGVmdCBjaGV2cm9uJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9ub3ZlbC8ke3RoaXMucHJvcHMubm92ZWxjaGFwdGVyLmlkbm92ZWxzfS8xYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL25vdmVsL1tpZF0vMWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdodWdlJyBjb2xvcj0nYmxhY2snIGljb249J2JhcnMnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9kb2MvJHt0aGlzLnByb3BzLm5vdmVsY2hhcHRlci5pZG5vdmVsc30ke3RoaXMuc3RhdGUubmV4dGNoYXB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2RvYy9baWRdL1tjaGFwdGVyXWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdodWdlJyBjb2xvcj0nYmxhY2snIGRpc2FibGVkPXt0aGlzLnN0YXRlLm5leHRjaGFwICE9PSBcIlwiID8gZmFsc2UgOiB0cnVlfSBsYWJlbFBvc2l0aW9uPSdyaWdodCcgaWNvbj0ncmlnaHQgY2hldnJvbicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVkaWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5vdmVsUmVkdWNlcjogc3RhdGUubm92ZWxSZWR1Y2VyXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBzYXZlTm92ZWwsIHNldHRpbmdOb3ZlbCB9KShDaGFwdGVyKTsiXSwic291cmNlUm9vdCI6IiJ9