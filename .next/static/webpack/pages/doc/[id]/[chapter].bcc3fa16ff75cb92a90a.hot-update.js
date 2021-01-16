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
          prechap: this.props.novelchapter.prechap.length < 4 ? '' : this.props.novelchapter.prechap,
          nextchap: this.props.novelchapter.nextchap.length < 4 ? '' : this.props.novelchapter.nextchap
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jLy9bY2hhcHRlcl0uanMiXSwibmFtZXMiOlsiY3JlYXRlTWVkaWEiLCJicmVha3BvaW50cyIsIm1vYmlsZSIsInRhYmxldCIsImNvbXB1dGVyIiwiTWVkaWFDb250ZXh0UHJvdmlkZXIiLCJNZWRpYSIsIm1lbnVTdHlsZSIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsIm1hcmdpbkJvdHRvbSIsInRyYW5zaXRpb24iLCJmaXhlZE1lbnVTdHlsZSIsImNvdW50cnlPcHRpb25zIiwia2V5IiwidmFsdWUiLCJ0ZXh0IiwiQ2hhcHRlciIsInByb3BzIiwiY3JlYXRlUmVmIiwiYyIsIm92ZXJsYXlSZWN0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsIl8iLCJwaWNrIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwib3ZlcmxheUZpeGVkIiwibWVudUZpeGVkIiwiZGF0YSIsInBhcmFtcyIsIm5pZ2h0bW9kZSIsImZvbnRzaXplIiwiZm9udCIsImxpbmVoZWlnaHQiLCJiYWNrZ3JvdW5kIiwic2V0dGluZ05vdmVsIiwiYmlnZGF0YSIsImJhY2tncm91bmRiaWciLCJlIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJwcmVjaGFwIiwibm92ZWxjaGFwdGVyIiwibGVuZ3RoIiwibmV4dGNoYXAiLCJ0b3RhbGNoYXB0ZXIiLCJzaG93bW9kYWwiLCJsaXN0Y2hhcHRlciIsIm5vdmVsUmVkdWNlciIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsImNoYXB0ZXJuYW1lIiwibm92ZWxuYW1lIiwiaWRub3ZlbHMiLCJpZGNoYXB0ZXIiLCJzdGlja1RvcE1lbnUiLCJ1blN0aWNrVG9wTWVudSIsInVuZGVmaW5lZCIsIndpZHRoIiwib3ZlcmZsb3ciLCJoYW5kbGVOaWdodE1vZGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5Ub3AiLCJjb250ZXh0UmVmIiwiZm9udEZhbWlseSIsImxpbmVIZWlnaHQiLCJmb250U2l6ZSIsImNvbG9yIiwiY29udGVudCIsIlJlYWN0SHRtbFBhcnNlciIsImhhbmRsZUNoYW5nZUJhY2tncm91bmQiLCJoYW5kbGVEZWdyZWUiLCJoYW5kbGVDaGFuZ2VGb250IiwiY29udGV4dCIsInF1ZXJ5IiwiaWQiLCJjaGFwdGVyIiwiZmV0Y2giLCJBUElfVVJMIiwicmVzIiwianNvbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiY29ubmVjdCIsInNhdmVOb3ZlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7bUJBZ0J3Q0EsbUVBQVcsQ0FBQztBQUNoREMsYUFBVyxFQUFFO0FBQ1RDLFVBQU0sRUFBRSxDQURDO0FBRVRDLFVBQU0sRUFBRSxHQUZDO0FBR1RDLFlBQVEsRUFBRTtBQUhEO0FBRG1DLENBQUQsQztJQUEzQ0Msb0IsZ0JBQUFBLG9CO0lBQXNCQyxLLGdCQUFBQSxLOztBQU85QixJQUFNQyxTQUFTLEdBQUc7QUFDZEMsUUFBTSxFQUFFLE1BRE07QUFFZEMsY0FBWSxFQUFFLENBRkE7QUFHZEMsV0FBUyxFQUFFLE1BSEc7QUFJZEMsY0FBWSxFQUFFLEtBSkE7QUFLZEMsWUFBVSxFQUFFO0FBTEUsQ0FBbEI7QUFRQSxJQUFNQyxjQUFjLEdBQUc7QUFDbkI7QUFDQTtBQUNBSCxXQUFTLEVBQUU7QUFIUSxDQUF2QjtBQUtBLElBQU1JLGNBQWMsR0FBRyxDQUNuQjtBQUFFQyxLQUFHLEVBQUUsY0FBUDtBQUF1QkMsT0FBSyxFQUFFLGNBQTlCO0FBQThDQyxNQUFJLEVBQUU7QUFBcEQsQ0FEbUIsRUFFbkI7QUFBRUYsS0FBRyxFQUFFLG1CQUFQO0FBQTRCQyxPQUFLLEVBQUUsbUJBQW5DO0FBQXdEQyxNQUFJLEVBQUU7QUFBOUQsQ0FGbUIsRUFHbkI7QUFBRUYsS0FBRyxFQUFFLG9CQUFQ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QUFUQSxzRUFBRjtBQUFhbkQsY0FBWSxFQUFaQSx5RUFBWUE7QUFBekIsQ0FBbEIsQ0FBUCxDQUFzRG5CLE9BQXRELENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jL1tpZF0vW2NoYXB0ZXJdLmJjYzNmYTE2ZmY3NWNiOTJhOTBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnXHJcbmltcG9ydCAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIGNyZWF0ZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlTWVkaWEgfSBmcm9tICdAYXJ0c3kvZnJlc25lbCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgUmVhY3RIdG1sUGFyc2VyLCB7IHByb2Nlc3NOb2RlcywgY29udmVydE5vZGVUb0VsZW1lbnQsIGh0bWxwYXJzZXIyIH0gZnJvbSAncmVhY3QtaHRtbC1wYXJzZXInO1xyXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnO1xyXG5pbXBvcnQgeyBzYXZlTm92ZWwsIHNldHRpbmdOb3ZlbCB9IGZyb20gJy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvbm92ZWxBY3Rpb25zJ1xyXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2NvbmZpZydcclxuaW1wb3J0IHtcclxuICAgIENvbnRhaW5lciwgQnJlYWRjcnVtYixcclxuICAgIERpdmlkZXIsXHJcbiAgICBEcm9wZG93bixcclxuICAgIEdyaWQsXHJcbiAgICBIZWFkZXIsIFNlbGVjdCxcclxuICAgIEljb24sXHJcbiAgICBJbWFnZSxcclxuICAgIExpc3QsXHJcbiAgICBNZW51LFxyXG4gICAgU2VnbWVudCxcclxuICAgIFZpc2liaWxpdHksXHJcbiAgICBJdGVtLFxyXG4gICAgU3RpY2t5LCBSYWlsLFxyXG4gICAgUmVmLCBCdXR0b24sIFBvcHVwLCBNb2RhbFxyXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuY29uc3QgeyBNZWRpYUNvbnRleHRQcm92aWRlciwgTWVkaWEgfSA9IGNyZWF0ZU1lZGlhKHtcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgbW9iaWxlOiAwLFxyXG4gICAgICAgIHRhYmxldDogNzY4LFxyXG4gICAgICAgIGNvbXB1dGVyOiAxMDI0LFxyXG4gICAgfSxcclxufSlcclxuY29uc3QgbWVudVN0eWxlID0ge1xyXG4gICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICBib3JkZXJSYWRpdXM6IDAsXHJcbiAgICBib3hTaGFkb3c6ICdub25lJyxcclxuICAgIG1hcmdpbkJvdHRvbTogJzFlbScsXHJcbiAgICB0cmFuc2l0aW9uOiAnYm94LXNoYWRvdyAwLjVzIGVhc2UsIHBhZGRpbmcgMC41cyBlYXNlJyxcclxufVxyXG5cclxuY29uc3QgZml4ZWRNZW51U3R5bGUgPSB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgIC8vIGJvcmRlcjogJzFweCBzb2xpZCAjZGRkJyxcclxuICAgIGJveFNoYWRvdzogJzBweCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKScsXHJcbn1cclxuY29uc3QgY291bnRyeU9wdGlvbnMgPSBbXHJcbiAgICB7IGtleTogJ01lcnJpd2VhdGhlcicsIHZhbHVlOiAnTWVycml3ZWF0aGVyJywgdGV4dDogJ01lcnJpd2VhdGhlcicgfSxcclxuICAgIHsga2V5OiAnTGlicmUgQmFza2VydmlsbGUnLCB2YWx1ZTogJ0xpYnJlIEJhc2tlcnZpbGxlJywgdGV4dDogJ0xpYnJlIEJhc2tlcnZpbGxlJyB9LFxyXG4gICAgeyBrZXk6ICdHZW50aXVtIEJvb2sgQmFzaWMnLCB2YWx1ZTogJ0dlbnRpdW0gQm9vayBCYXNpYycsIHRleHQ6ICdHZW50aXVtIEJvb2sgQmFzaWMnIH0sXHJcbiAgICB7IGtleTogJ1JvYm90bycsIHZhbHVlOiAnUm9ib3RvJywgdGV4dDogJ1JvYm90bycgfSxcclxuICAgIHsga2V5OiAnUnViaWsnLCB2YWx1ZTogJ1J1YmlrJywgdGV4dDogJ1J1YmlrJyB9LFxyXG4gICAgeyBrZXk6ICdOdW5pdG8nLCB2YWx1ZTogJ051bml0bycsIHRleHQ6ICdOdW5pdG8nIH0sXHJcbl1cclxuY2xhc3MgQ2hhcHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBwcmVjaGFwOiBwcm9wcy5ub3ZlbGNoYXB0ZXIucHJlY2hhcC5sZW5ndGggPCA0ID8gJycgOiBwcm9wcy5ub3ZlbGNoYXB0ZXIucHJlY2hhcCxcclxuICAgICAgICAgICAgbmV4dGNoYXA6IHByb3BzLm5vdmVsY2hhcHRlci5uZXh0Y2hhcC5sZW5ndGggPCA0ID8gJycgOiBwcm9wcy5ub3ZlbGNoYXB0ZXIubmV4dGNoYXAsXHJcbiAgICAgICAgICAgIG1lbnVGaXhlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIG92ZXJsYXlGaXhlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsY2hhcHRlcjogMSxcclxuICAgICAgICAgICAgc2hvd21vZGFsOiBmYWxzZSxcclxuICAgICAgICAgICAgbGlzdGNoYXB0ZXI6IFtdLFxyXG4gICAgICAgICAgICBuaWdodG1vZGU6IHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyLm5pZ2h0bW9kZSxcclxuICAgICAgICAgICAgZm9udHNpemU6IHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyLmZvbnRzaXplLFxyXG4gICAgICAgICAgICBmb250OiB0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5mb250LFxyXG4gICAgICAgICAgICBsaW5laGVpZ2h0OiB0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5saW5laGVpZ2h0LFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5iYWNrZ3JvdW5kLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kYmlnOiB0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5iYWNrZ3JvdW5kLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnRleHRSZWYgPSBjcmVhdGVSZWYoKVxyXG4gICAgaGFuZGxlT3ZlcmxheVJlZiA9IChjKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBvdmVybGF5UmVjdCB9ID0gdGhpcy5zdGF0ZVxyXG5cclxuICAgICAgICBpZiAoIW92ZXJsYXlSZWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvdmVybGF5UmVjdDogXy5waWNrKGMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksICdoZWlnaHQnLCAnd2lkdGgnKSB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGlja092ZXJsYXkgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3ZlcmxheUZpeGVkOiB0cnVlIH0pXHJcblxyXG4gICAgc3RpY2tUb3BNZW51ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG1lbnVGaXhlZDogdHJ1ZSB9KVxyXG5cclxuICAgIHVuU3RpY2tPdmVybGF5ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG92ZXJsYXlGaXhlZDogZmFsc2UgfSlcclxuXHJcbiAgICB1blN0aWNrVG9wTWVudSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBtZW51Rml4ZWQ6IGZhbHNlIH0pXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGNvbnRleHQpIHtcclxuICAgICAgICBjb25zdCB7IGlkLCBjaGFwdGVyIH0gPSBjb250ZXh0LnF1ZXJ5XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH1jaGFwdGVyP25vdmVsaWQ9JHtpZH0mY2hhcHRlcmlkPS8ke2NoYXB0ZXJ9L2ApXHJcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgbm92ZWxjaGFwdGVyOiBqc29uIH1cclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm5vdmVsY2hhcHRlciAhPT0gcHJldlByb3BzLm5vdmVsY2hhcHRlcikge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHByZWNoYXA6IHRoaXMucHJvcHMubm92ZWxjaGFwdGVyLnByZWNoYXAubGVuZ3RoIDwgNCA/ICcnIDogdGhpcy5wcm9wcy5ub3ZlbGNoYXB0ZXIucHJlY2hhcCxcclxuICAgICAgICAgICAgICAgIG5leHRjaGFwOiB0aGlzLnByb3BzLm5vdmVsY2hhcHRlci5uZXh0Y2hhcC5sZW5ndGggPCA0ID8gJycgOiB0aGlzLnByb3BzLm5vdmVsY2hhcHRlci5uZXh0Y2hhcCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyICE9PSBwcmV2UHJvcHMubm92ZWxSZWR1Y2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgbmlnaHRtb2RlOiB0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5uaWdodG1vZGUsXHJcbiAgICAgICAgICAgICAgICBmb250c2l6ZTogdGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIuZm9udHNpemUsXHJcbiAgICAgICAgICAgICAgICBmb250OiB0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5mb250LFxyXG4gICAgICAgICAgICAgICAgbGluZWhlaWdodDogdGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIubGluZWhlaWdodCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyLmJhY2tncm91bmQsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kYmlnOiB0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5iYWNrZ3JvdW5kLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaGFuZGxlTmlnaHRNb2RlID0gKGRhdGEpID0+IHtcclxuICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICBuaWdodG1vZGU6ICFkYXRhLFxyXG4gICAgICAgICAgICBmb250c2l6ZTogdGhpcy5zdGF0ZS5mb250c2l6ZSxcclxuICAgICAgICAgICAgZm9udDogdGhpcy5zdGF0ZS5mb250LFxyXG4gICAgICAgICAgICBsaW5laGVpZ2h0OiB0aGlzLnN0YXRlLmxpbmVoZWlnaHQsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRoaXMuc3RhdGUuYmFja2dyb3VuZCxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXR0aW5nTm92ZWwocGFyYW1zKVxyXG4gICAgfVxyXG4gICAgaGFuZGxlQ2hhbmdlQmFja2dyb3VuZCA9IChkYXRhLCBiaWdkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEgPT09ICcjMjMyMzIzJykge1xyXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgbmlnaHRtb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZm9udHNpemU6IHRoaXMuc3RhdGUuZm9udHNpemUsXHJcbiAgICAgICAgICAgICAgICBmb250OiB0aGlzLnN0YXRlLmZvbnQsXHJcbiAgICAgICAgICAgICAgICBsaW5laGVpZ2h0OiB0aGlzLnN0YXRlLmxpbmVoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGlzLnN0YXRlLmJhY2tncm91bmQsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kYmlnOiBiaWdkYXRhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc2V0dGluZ05vdmVsKHBhcmFtcylcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbmlnaHRtb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9udHNpemU6IHRoaXMuc3RhdGUuZm9udHNpemUsXHJcbiAgICAgICAgICAgIGZvbnQ6IHRoaXMuc3RhdGUuZm9udCxcclxuICAgICAgICAgICAgbGluZWhlaWdodDogdGhpcy5zdGF0ZS5saW5laGVpZ2h0LFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXRhLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kYmlnOiBiaWdkYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvcHMuc2V0dGluZ05vdmVsKHBhcmFtcylcclxuICAgIH1cclxuICAgIGhhbmRsZUNoYW5nZUZvbnQgPSAoZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbmlnaHRtb2RlOiB0aGlzLnN0YXRlLm5pZ2h0bW9kZSxcclxuICAgICAgICAgICAgZm9udHNpemU6IHRoaXMuc3RhdGUuZm9udHNpemUsXHJcbiAgICAgICAgICAgIGZvbnQ6IGRhdGEudmFsdWUsXHJcbiAgICAgICAgICAgIGxpbmVoZWlnaHQ6IHRoaXMuc3RhdGUubGluZWhlaWdodCxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdGhpcy5zdGF0ZS5iYWNrZ3JvdW5kLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kYmlnOiB0aGlzLnN0YXRlLmJhY2tncm91bmRiaWdcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc2V0dGluZ05vdmVsKHBhcmFtcylcclxuICAgIH1cclxuICAgIGhhbmRsZURlZ3JlZSA9ICh0eXBlKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IDEpIHtcclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIG5pZ2h0bW9kZTogdGhpcy5zdGF0ZS5uaWdodG1vZGUsXHJcbiAgICAgICAgICAgICAgICBmb250c2l6ZTogdGhpcy5zdGF0ZS5mb250c2l6ZSAtIDIgPCAxNCA/IHRoaXMuc3RhdGUuZm9udHNpemUgOiB0aGlzLnN0YXRlLmZvbnRzaXplIC0gMixcclxuICAgICAgICAgICAgICAgIGZvbnQ6IHRoaXMuc3RhdGUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBsaW5laGVpZ2h0OiB0aGlzLnN0YXRlLmxpbmVoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGlzLnN0YXRlLmJhY2tncm91bmQsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kYmlnOiB0aGlzLnN0YXRlLmJhY2tncm91bmRiaWdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5zZXR0aW5nTm92ZWwocGFyYW1zKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICBuaWdodG1vZGU6IHRoaXMuc3RhdGUubmlnaHRtb2RlLFxyXG4gICAgICAgICAgICAgICAgZm9udHNpemU6IHRoaXMuc3RhdGUuZm9udHNpemUgKyAyID4gMzIgPyB0aGlzLnN0YXRlLmZvbnRzaXplIDogdGhpcy5zdGF0ZS5mb250c2l6ZSArIDIsXHJcbiAgICAgICAgICAgICAgICBmb250OiB0aGlzLnN0YXRlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgbGluZWhlaWdodDogdGhpcy5zdGF0ZS5saW5laGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdGhpcy5zdGF0ZS5iYWNrZ3JvdW5kLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZGJpZzogdGhpcy5zdGF0ZS5iYWNrZ3JvdW5kYmlnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc2V0dGluZ05vdmVsKHBhcmFtcylcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcclxuICAgICAgICBjb25zdCB7IG1lbnVGaXhlZCwgb3ZlcmxheUZpeGVkLCBvdmVybGF5UmVjdCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICBodG1sLCBib2R5IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5uaWdodG1vZGUgPT09IHRydWUgPyAnIzFhMWExYScgOiB0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5iYWNrZ3JvdW5kYmlnfSA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8SGVsbWV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT57YCR7dGhpcy5wcm9wcy5ub3ZlbGNoYXB0ZXIuY2hhcHRlcm5hbWV9YH0gLSBUcnV5ZW5OVDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17YMSQ4buNYyB0cnV54buHbiAke3RoaXMucHJvcHMubm92ZWxjaGFwdGVyLmNoYXB0ZXJuYW1lfSwgaOG7lyB0cuG7oyDEkeG7jWMgdHLDqm4gxJFp4buHbiB0aG/huqFpIHbDoCBtw6F5IHTDrW5oIGLhuqNuZ2B9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMwMDhmNjhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e2Ake3RoaXMucHJvcHMubm92ZWxjaGFwdGVyLmNoYXB0ZXJuYW1lfSwgJHt0aGlzLnByb3BzLm5vdmVsY2hhcHRlci5jaGFwdGVybmFtZX0gZnJlZSwgJHt0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5ub3ZlbG5hbWV9IGhvw6BuLCAke3RoaXMucHJvcHMubm92ZWxSZWR1Y2VyLm5vdmVsbmFtZX0gZnVsbCBjaMawxqFuZywgJHt0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5ub3ZlbG5hbWV9IGNoxrDGoW5nIGN14buRaWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17YC9kb2MvJHt0aGlzLnByb3BzLm5vdmVsY2hhcHRlci5pZG5vdmVsc30ke3RoaXMucHJvcHMubm92ZWxjaGFwdGVyLmlkY2hhcHRlcn1gfT48L2xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9IZWxtZXQ+XHJcbiAgICAgICAgICAgICAgICA8TWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lZGlhIGdyZWF0ZXJUaGFuPSdtb2JpbGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlzaWJpbGl0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Cb3R0b21QYXNzZWQ9e3RoaXMuc3RpY2tUb3BNZW51fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Cb3R0b21WaXNpYmxlPXt0aGlzLnVuU3RpY2tUb3BNZW51fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25jZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVybGVzcyBpbnZlcnRlZD17dGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIubmlnaHRtb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpeGVkPXttZW51Rml4ZWQgPyAndG9wJyA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17bWVudUZpeGVkID8gZml4ZWRNZW51U3R5bGUgOiBtZW51U3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYiBzaXplPXsnbGFyZ2UnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYi5TZWN0aW9uIGxpbms+PExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e2Avbm92ZWwvJHt0aGlzLnByb3BzLm5vdmVsY2hhcHRlci5pZG5vdmVsc30vMWB9IGhyZWY9e2Avbm92ZWwvW2lkXS8xYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PEljb24gY29sb3I9J3doaXRlJyBuYW1lPSdob21lJyAvPjwvTGluaz48L0JyZWFkY3J1bWIuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYi5EaXZpZGVyIGljb249J3JpZ2h0IGNoZXZyb24nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJyZWFkY3J1bWIuU2VjdGlvbiBhY3RpdmU+e3RoaXMucHJvcHMubm92ZWxjaGFwdGVyLmNoYXB0ZXJuYW1lfTwvQnJlYWRjcnVtYi5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CcmVhZGNydW1iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaXNpYmlsaXR5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVkaWE+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lZGlhIGF0PSdtb2JpbGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlzaWJpbGl0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Cb3R0b21QYXNzZWQ9e3RoaXMuc3RpY2tUb3BNZW51fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Cb3R0b21WaXNpYmxlPXt0aGlzLnVuU3RpY2tUb3BNZW51fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25jZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVybGVzcyBpbnZlcnRlZD17dGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIubmlnaHRtb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpeGVkPXttZW51Rml4ZWQgPyAndG9wJyA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17bWVudUZpeGVkID8gZml4ZWRNZW51U3R5bGUgOiBtZW51U3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBzdHlsZT17eyB3aWR0aDogJzgwJScsIG92ZXJmbG93OiAnaGlkZGVuJyB9fSBoZWFkZXIgcG9zaXRpb249J2xlZnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYiBzaXplPXsnbGFyZ2UnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iLlNlY3Rpb24gbGluaz48TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL25vdmVsLyR7dGhpcy5wcm9wcy5ub3ZlbGNoYXB0ZXIuaWRub3ZlbHN9LzFgfSBocmVmPXtgL25vdmVsL1tpZF0vMWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PEljb24gY29sb3I9J3doaXRlJyBuYW1lPSdob21lJyAvPjwvTGluaz48L0JyZWFkY3J1bWIuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CcmVhZGNydW1iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYi5EaXZpZGVyIGljb249J3JpZ2h0IGNoZXZyb24nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iLlNlY3Rpb24gYWN0aXZlPnt0aGlzLnByb3BzLm5vdmVsY2hhcHRlci5jaGFwdGVybmFtZX08L0JyZWFkY3J1bWIuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIHBvc2l0aW9uPSdyaWdodCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVOaWdodE1vZGUodGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIubmlnaHRtb2RlKX0gc2l6ZT0nbGFyZ2UnIGNpcmN1bGFyIGljb249e3RoaXMucHJvcHMubm92ZWxSZWR1Y2VyLm5pZ2h0bW9kZSA/ICdsaWdodGJ1bGIgb3V0bGluZScgOiAnbW9vbid9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaXNpYmlsaXR5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVkaWE+XHJcbiAgICAgICAgICAgICAgICA8L01lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciB0ZXh0IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogdGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIubmlnaHRtb2RlID09PSB0cnVlID8gJyMyMzIzMjMnIDogdGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIuYmFja2dyb3VuZCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gY2xhc3NOYW1lPSdkZXRhaWwtY29udGFpbmVycycgbW9iaWxlPXsxNn0gdGFibGV0PXsxNn0gY29tcHV0ZXI9ezE2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWYgaW5uZXJSZWY9e3RoaXMuY29udGV4dFJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiB0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5uaWdodG1vZGUgPT09IHRydWUgPyAnIzIzMjMyMycgOiB0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5iYWNrZ3JvdW5kIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5Hcm91cCB0ZXh0QWxpZ249J2xlZnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uRGVzY3JpcHRpb24gY2xhc3NOYW1lPSdjb250ZW50JyBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyLmZvbnQsIGxpbmVIZWlnaHQ6IHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyLmxpbmVoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyLmZvbnRzaXplLCBjb2xvcjogdGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIubmlnaHRtb2RlID09PSB0cnVlID8gJyNiM2IzYjMnIDogJ2JsYWNrJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm5vdmVsY2hhcHRlci5jb250ZW50ICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdEh0bWxQYXJzZXIodGhpcy5wcm9wcy5ub3ZlbGNoYXB0ZXIuY29udGVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZWRpYUNvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZWRpYSBncmVhdGVyVGhhbj0nbW9iaWxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFpbCBwb3NpdGlvbj0ncmlnaHQnIHN0eWxlPXt7IG1hcmdpblRvcDogMTAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RpY2t5IG9mZnNldD17MTAwfSBib3R0b21PZmZzZXQ9ezEwMH0gY29udGV4dD17dGhpcy5jb250ZXh0UmVmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3B1cCBwb3NpdGlvbj0nbGVmdCBjZW50ZXInIHRyaWdnZXI9ezxCdXR0b24gc2l6ZT0nbGFyZ2UnIGNpcmN1bGFyIGljb249J2ZvbnQnIC8+fSBmbG93aW5nIGhvdmVyYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIHRleHRBbGlnbj0nbGVmdCcgZGl2aWRlZCBjb2x1bW5zPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gdGV4dEFsaWduPSdsZWZ0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlciBhcz0naDQnPkJhY2tncm91bmQ8L0hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29sdW1ucz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2hhbmdlQmFja2dyb3VuZCgnI2ZmZicsICcjZjVmN2ZhJyl9IGNsYXNzTmFtZT0ncmVhZC1zZXR0aW5nX3doaXRlLWNvbG9yX18zWlRFNCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNoYW5nZUJhY2tncm91bmQoJyNmZmY2ZGYnLCAnI2ZmZjllYicpfSBjbGFzc05hbWU9J3JlYWQtc2V0dGluZ19vcmFuZ2UtY29sb3JfXzNjaGl4JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2hhbmdlQmFja2dyb3VuZCgnI2ViZjllYicsICcjZjJmOWYyJyl9IGNsYXNzTmFtZT0ncmVhZC1zZXR0aW5nX2dyZWVuLWNvbG9yX19XVGpENycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNoYW5nZUJhY2tncm91bmQoJyMyMzIzMjMnLCAnIzFhMWExYScpfSBjbGFzc05hbWU9J3JlYWQtc2V0dGluZ19ibGFjay1jb2xvcl9fM0ttSVYnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB0ZXh0QWxpZ249J2xlZnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIGFzPSdoNCc+Rm9udCBTaXplPC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbHVtbnM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24uR3JvdXAgc2l6ZT0nbGFyZ2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVncmVlKDEpfT5BLTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uLk9yIHRleHQ9e3RoaXMucHJvcHMubm92ZWxSZWR1Y2VyLmZvbnRzaXplfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVncmVlKDIpfT5BKzwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3Qgb25DaGFuZ2U9eyhlLCBkYXRhKSA9PiB0aGlzLmhhbmRsZUNoYW5nZUZvbnQoZSwgZGF0YSl9IGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIuZm9udH0gb3B0aW9ucz17Y291bnRyeU9wdGlvbnN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BvcHVwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZU5pZ2h0TW9kZSh0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5uaWdodG1vZGUpfSBzaXplPSdsYXJnZScgY2lyY3VsYXIgaWNvbj17dGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIubmlnaHRtb2RlID8gJ2xpZ2h0YnVsYiBvdXRsaW5lJyA6ICdtb29uJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGlja3k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWlsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZWRpYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZWRpYUNvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhIGdyZWF0ZXJUaGFuPSdtb2JpbGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdyB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uLkdyb3VwIHdpZHRocz0nMyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL2RvYy8ke3RoaXMucHJvcHMubm92ZWxjaGFwdGVyLmlkbm92ZWxzfSR7dGhpcy5zdGF0ZS5wcmVjaGFwfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9kb2MvW2lkXS9bY2hhcHRlcl1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT0naHVnZScgY29sb3I9J2JsYWNrJyBkaXNhYmxlZD17dGhpcy5zdGF0ZS5wcmVjaGFwICE9PSBcIlwiID8gZmFsc2UgOiB0cnVlfSBsYWJlbFBvc2l0aW9uPSdsZWZ0JyBpY29uPSdsZWZ0IGNoZXZyb24nIGNvbnRlbnQ9J1ByZXYgY2hhcHRlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e2Avbm92ZWwvJHt0aGlzLnByb3BzLm5vdmVsY2hhcHRlci5pZG5vdmVsc30vMWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9ub3ZlbC9baWRdLzFgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT0naHVnZScgY29sb3I9J2JsYWNrJyBpY29uPSdiYXJzJyBjb250ZW50PSdDaGFwdGVyIExpc3QnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL2RvYy8ke3RoaXMucHJvcHMubm92ZWxjaGFwdGVyLmlkbm92ZWxzfSR7dGhpcy5zdGF0ZS5uZXh0Y2hhcH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvZG9jL1tpZF0vW2NoYXB0ZXJdYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9J2h1Z2UnIGNvbG9yPSdibGFjaycgZGlzYWJsZWQ9e3RoaXMuc3RhdGUubmV4dGNoYXAgIT09IFwiXCIgPyBmYWxzZSA6IHRydWV9IGxhYmVsUG9zaXRpb249J3JpZ2h0JyBpY29uPSdyaWdodCBjaGV2cm9uJyBjb250ZW50PSdOZXh0IGNoYXB0ZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lZGlhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhIGF0PSdtb2JpbGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdyBtb2JpbGU9ezE2fSB0YWJsZXQ9ezE2fSBjb21wdXRlcj17MTZ9IHZlcnRpY2FsQWxpZ249J21pZGRsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24uR3JvdXAgd2lkdGhzPSczJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e2AvZG9jLyR7dGhpcy5wcm9wcy5ub3ZlbGNoYXB0ZXIuaWRub3ZlbHN9JHt0aGlzLnN0YXRlLnByZWNoYXB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2RvYy9baWRdL1tjaGFwdGVyXWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdodWdlJyBjb2xvcj0nYmxhY2snIGRpc2FibGVkPXt0aGlzLnN0YXRlLnByZWNoYXAgIT09IFwiXCIgPyBmYWxzZSA6IHRydWV9IGxhYmVsUG9zaXRpb249J2xlZnQnIGljb249J2xlZnQgY2hldnJvbicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e2Avbm92ZWwvJHt0aGlzLnByb3BzLm5vdmVsY2hhcHRlci5pZG5vdmVsc30vMWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9ub3ZlbC9baWRdLzFgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT0naHVnZScgY29sb3I9J2JsYWNrJyBpY29uPSdiYXJzJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e2AvZG9jLyR7dGhpcy5wcm9wcy5ub3ZlbGNoYXB0ZXIuaWRub3ZlbHN9JHt0aGlzLnN0YXRlLm5leHRjaGFwfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9kb2MvW2lkXS9bY2hhcHRlcl1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT0naHVnZScgY29sb3I9J2JsYWNrJyBkaXNhYmxlZD17dGhpcy5zdGF0ZS5uZXh0Y2hhcCAhPT0gXCJcIiA/IGZhbHNlIDogdHJ1ZX0gbGFiZWxQb3NpdGlvbj0ncmlnaHQnIGljb249J3JpZ2h0IGNoZXZyb24nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lZGlhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBub3ZlbFJlZHVjZXI6IHN0YXRlLm5vdmVsUmVkdWNlclxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgc2F2ZU5vdmVsLCBzZXR0aW5nTm92ZWwgfSkoQ2hhcHRlcik7Il0sInNvdXJjZVJvb3QiOiIifQ==