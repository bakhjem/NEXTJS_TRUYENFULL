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
      prechap: props.novelchapter.prechap,
      nextchap: props.novelchapter.nextchap,
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
      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx("style", null, "\n          html, body {\n            background: ".concat(this.props.novelReducer.nightmode === true ? '#1a1a1a' : this.props.novelReducer.backgroundbig, " ;\n          }\n        ")), __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_17__["Helmet"], null, __jsx("title", null, "".concat(this.props.novelchapter.chaptername), " - KitesNovel"), __jsx("meta", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jLy9bY2hhcHRlcl0uanMiXSwibmFtZXMiOlsiY3JlYXRlTWVkaWEiLCJicmVha3BvaW50cyIsIm1vYmlsZSIsInRhYmxldCIsImNvbXB1dGVyIiwiTWVkaWFDb250ZXh0UHJvdmlkZXIiLCJNZWRpYSIsIm1lbnVTdHlsZSIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsIm1hcmdpbkJvdHRvbSIsInRyYW5zaXRpb24iLCJmaXhlZE1lbnVTdHlsZSIsImNvdW50cnlPcHRpb25zIiwia2V5IiwidmFsdWUiLCJ0ZXh0IiwiQ2hhcHRlciIsInByb3BzIiwiY3JlYXRlUmVmIiwiYyIsIm92ZXJsYXlSZWN0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsIl8iLCJwaWNrIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwib3ZlcmxheUZpeGVkIiwibWVudUZpeGVkIiwiZGF0YSIsInBhcmFtcyIsIm5pZ2h0bW9kZSIsImZvbnRzaXplIiwiZm9udCIsImxpbmVoZWlnaHQiLCJiYWNrZ3JvdW5kIiwic2V0dGluZ05vdmVsIiwiYmlnZGF0YSIsImJhY2tncm91bmRiaWciLCJlIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJwcmVjaGFwIiwibm92ZWxjaGFwdGVyIiwibmV4dGNoYXAiLCJ0b3RhbGNoYXB0ZXIiLCJzaG93bW9kYWwiLCJsaXN0Y2hhcHRlciIsIm5vdmVsUmVkdWNlciIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsImNoYXB0ZXJuYW1lIiwibm92ZWxuYW1lIiwiaWRub3ZlbHMiLCJpZGNoYXB0ZXIiLCJzdGlja1RvcE1lbnUiLCJ1blN0aWNrVG9wTWVudSIsInVuZGVmaW5lZCIsIndpZHRoIiwib3ZlcmZsb3ciLCJoYW5kbGVOaWdodE1vZGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5Ub3AiLCJjb250ZXh0UmVmIiwiZm9udEZhbWlseSIsImxpbmVIZWlnaHQiLCJmb250U2l6ZSIsImNvbG9yIiwiY29udGVudCIsIlJlYWN0SHRtbFBhcnNlciIsImhhbmRsZUNoYW5nZUJhY2tncm91bmQiLCJoYW5kbGVEZWdyZWUiLCJoYW5kbGVDaGFuZ2VGb250IiwiY29udGV4dCIsInF1ZXJ5IiwiaWQiLCJjaGFwdGVyIiwiZmV0Y2giLCJBUElfVVJMIiwicmVzIiwianNvbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiY29ubmVjdCIsInNhdmVOb3ZlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7bUJBZ0J3Q0EsbUVBQVcsQ0FBQztBQUNoREMsYUFBVyxFQUFFO0FBQ1RDLFVBQU0sRUFBRSxDQURDO0FBRVRDLFVBQU0sRUFBRSxHQUZDO0FBR1RDLFlBQVEsRUFBRTtBQUhEO0FBRG1DLENBQUQsQztJQUEzQ0Msb0IsZ0JBQUFBLG9CO0lBQXNCQyxLLGdCQUFBQSxLOztBQU85QixJQUFNQyxTQUFTLEdBQUc7QUFDZEMsUUFBTSxFQUFFLE1BRE07QUFFZEMsY0FBWSxFQUFFLENBRkE7QUFHZEMsV0FBUyxFQUFFLE1BSEc7QUFJZEMsY0FBWSxFQUFFLEtBSkE7QUFLZEMsWUFBVSxFQUFFO0FBTEUsQ0FBbEI7QUFRQSxJQUFNQyxjQUFjLEdBQUc7QUFDbkI7QUFDQTtBQUNBSCxXQUFTLEVBQUU7QUFIUSxDQUF2QjtBQUtBLElBQU1JLGNBQWMsR0FBRyxDQUNuQjtBQUFFQyxLQUFHLEVBQUUsY0FBUDtBQUF1QkMsT0FBSyxFQUFFLGNBQTlCO0FBQThDQyxNQUFJLEVBQUU7QUFBcEQsQ0FEbUIsRUFFbkI7QUFBRUYsS0FBRyxFQUFFLG1CQUFQO0FBQTRCQyxPQUFLLEVBQUUsbUJBQW5DO0FBQXdEQyxNQUFJLEVBQUU7QUFBOUQsQ0FGbUIsRUFHbkI7QUFBRUYsS0FBRyxFQUFFLG9CQUFQO0FBQTZCQyxP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T0FBMUI7QUFBa0MsZ0JBQVEsRUFBRSxLQUFLdkIsS0FBTCxDQUFXdUIsUUFBWCxLQUF3QixFQUF4QixHQUE2QixLQUE3QixHQUFxQyxJQUFqRjtBQUF1RixxQkFBYSxFQUFDLE9BQXJHO0FBQTZHLFlBQUksRUFBQztBQUFsSCxRQUpKLENBZEosQ0FESixDQURKLENBekJKLENBMUVKLENBREosQ0F2RUosQ0FESjtBQTJNSDs7OzsrTkE5UzRCNkIsTzs7Ozs7OztpQ0FDREEsT0FBTyxDQUFDQyxLLEVBQXhCQyxFLGtCQUFBQSxFLEVBQUlDLE8sa0JBQUFBLE87O3VCQUNNQyxLQUFLLFdBQUlDLHVEQUFKLDZCQUE4QkgsRUFBOUIseUJBQStDQyxPQUEvQyxPOzs7QUFBakJHLG1COzt1QkFDYUEsR0FBRyxDQUFDQyxJQUFKLEU7OztBQUFiQSxvQjtpREFFQztBQUFFckMsOEJBQVksRUFBRXFDO0FBQWhCLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBeENPQyw2Q0FBSyxDQUFDQyxTOztBQW1WNUIsU0FBU0MsZUFBVCxDQUF5QjlELEtBQXpCLEVBQWdDO0FBQzVCLFNBQU87QUFDSDJCLGdCQUFZLEVBQUUzQixLQUFLLENBQUMyQjtBQURqQixHQUFQO0FBR0g7O0FBRWNvQywySEFBTyxDQUFDRCxlQUFELEVBQWtCO0FBQUVFLFdBQVMsRUFBVEEsc0VBQUY7QUFBYWxELGNBQVksRUFBWkEseUVBQVlBO0FBQXpCLENBQWxCLENBQVAsQ0FBc0RuQixPQUF0RCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvYy9baWRdL1tjaGFwdGVyXS5lZGZlZGMwM2M2MTZmYmI2ZmM5MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL015TGF5b3V0J1xyXG5pbXBvcnQgJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBjcmVhdGVSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZU1lZGlhIH0gZnJvbSAnQGFydHN5L2ZyZXNuZWwnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IFJlYWN0SHRtbFBhcnNlciwgeyBwcm9jZXNzTm9kZXMsIGNvbnZlcnROb2RlVG9FbGVtZW50LCBodG1scGFyc2VyMiB9IGZyb20gJ3JlYWN0LWh0bWwtcGFyc2VyJztcclxuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcclxuaW1wb3J0IHsgc2F2ZU5vdmVsLCBzZXR0aW5nTm92ZWwgfSBmcm9tICcuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL25vdmVsQWN0aW9ucydcclxuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9jb25maWcnXHJcbmltcG9ydCB7XHJcbiAgICBDb250YWluZXIsIEJyZWFkY3J1bWIsXHJcbiAgICBEaXZpZGVyLFxyXG4gICAgRHJvcGRvd24sXHJcbiAgICBHcmlkLFxyXG4gICAgSGVhZGVyLCBTZWxlY3QsXHJcbiAgICBJY29uLFxyXG4gICAgSW1hZ2UsXHJcbiAgICBMaXN0LFxyXG4gICAgTWVudSxcclxuICAgIFNlZ21lbnQsXHJcbiAgICBWaXNpYmlsaXR5LFxyXG4gICAgSXRlbSxcclxuICAgIFN0aWNreSwgUmFpbCxcclxuICAgIFJlZiwgQnV0dG9uLCBQb3B1cCwgTW9kYWxcclxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmNvbnN0IHsgTWVkaWFDb250ZXh0UHJvdmlkZXIsIE1lZGlhIH0gPSBjcmVhdGVNZWRpYSh7XHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIG1vYmlsZTogMCxcclxuICAgICAgICB0YWJsZXQ6IDc2OCxcclxuICAgICAgICBjb21wdXRlcjogMTAyNCxcclxuICAgIH0sXHJcbn0pXHJcbmNvbnN0IG1lbnVTdHlsZSA9IHtcclxuICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gICAgYm94U2hhZG93OiAnbm9uZScsXHJcbiAgICBtYXJnaW5Cb3R0b206ICcxZW0nLFxyXG4gICAgdHJhbnNpdGlvbjogJ2JveC1zaGFkb3cgMC41cyBlYXNlLCBwYWRkaW5nIDAuNXMgZWFzZScsXHJcbn1cclxuXHJcbmNvbnN0IGZpeGVkTWVudVN0eWxlID0ge1xyXG4gICAgLy8gYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAvLyBib3JkZXI6ICcxcHggc29saWQgI2RkZCcsXHJcbiAgICBib3hTaGFkb3c6ICcwcHggM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMiknLFxyXG59XHJcbmNvbnN0IGNvdW50cnlPcHRpb25zID0gW1xyXG4gICAgeyBrZXk6ICdNZXJyaXdlYXRoZXInLCB2YWx1ZTogJ01lcnJpd2VhdGhlcicsIHRleHQ6ICdNZXJyaXdlYXRoZXInIH0sXHJcbiAgICB7IGtleTogJ0xpYnJlIEJhc2tlcnZpbGxlJywgdmFsdWU6ICdMaWJyZSBCYXNrZXJ2aWxsZScsIHRleHQ6ICdMaWJyZSBCYXNrZXJ2aWxsZScgfSxcclxuICAgIHsga2V5OiAnR2VudGl1bSBCb29rIEJhc2ljJywgdmFsdWU6ICdHZW50aXVtIEJvb2sgQmFzaWMnLCB0ZXh0OiAnR2VudGl1bSBCb29rIEJhc2ljJyB9LFxyXG4gICAgeyBrZXk6ICdSb2JvdG8nLCB2YWx1ZTogJ1JvYm90bycsIHRleHQ6ICdSb2JvdG8nIH0sXHJcbiAgICB7IGtleTogJ1J1YmlrJywgdmFsdWU6ICdSdWJpaycsIHRleHQ6ICdSdWJpaycgfSxcclxuICAgIHsga2V5OiAnTnVuaXRvJywgdmFsdWU6ICdOdW5pdG8nLCB0ZXh0OiAnTnVuaXRvJyB9LFxyXG5dXHJcbmNsYXNzIENoYXB0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcHJlY2hhcDogcHJvcHMubm92ZWxjaGFwdGVyLnByZWNoYXAsXHJcbiAgICAgICAgICAgIG5leHRjaGFwOiBwcm9wcy5ub3ZlbGNoYXB0ZXIubmV4dGNoYXAsXHJcbiAgICAgICAgICAgIG1lbnVGaXhlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIG92ZXJsYXlGaXhlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdGFsY2hhcHRlcjogMSxcclxuICAgICAgICAgICAgc2hvd21vZGFsOiBmYWxzZSxcclxuICAgICAgICAgICAgbGlzdGNoYXB0ZXI6IFtdLFxyXG4gICAgICAgICAgICBuaWdodG1vZGU6IHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyLm5pZ2h0bW9kZSxcclxuICAgICAgICAgICAgZm9udHNpemU6IHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyLmZvbnRzaXplLFxyXG4gICAgICAgICAgICBmb250OiB0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5mb250LFxyXG4gICAgICAgICAgICBsaW5laGVpZ2h0OiB0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5saW5laGVpZ2h0LFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5iYWNrZ3JvdW5kLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kYmlnOiB0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5iYWNrZ3JvdW5kLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnRleHRSZWYgPSBjcmVhdGVSZWYoKVxyXG4gICAgaGFuZGxlT3ZlcmxheVJlZiA9IChjKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBvdmVybGF5UmVjdCB9ID0gdGhpcy5zdGF0ZVxyXG5cclxuICAgICAgICBpZiAoIW92ZXJsYXlSZWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvdmVybGF5UmVjdDogXy5waWNrKGMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksICdoZWlnaHQnLCAnd2lkdGgnKSB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGlja092ZXJsYXkgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3ZlcmxheUZpeGVkOiB0cnVlIH0pXHJcblxyXG4gICAgc3RpY2tUb3BNZW51ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG1lbnVGaXhlZDogdHJ1ZSB9KVxyXG5cclxuICAgIHVuU3RpY2tPdmVybGF5ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG92ZXJsYXlGaXhlZDogZmFsc2UgfSlcclxuXHJcbiAgICB1blN0aWNrVG9wTWVudSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBtZW51Rml4ZWQ6IGZhbHNlIH0pXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGNvbnRleHQpIHtcclxuICAgICAgICBjb25zdCB7IGlkLCBjaGFwdGVyIH0gPSBjb250ZXh0LnF1ZXJ5XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH1jaGFwdGVyP25vdmVsaWQ9JHtpZH0mY2hhcHRlcmlkPS8ke2NoYXB0ZXJ9L2ApXHJcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgbm92ZWxjaGFwdGVyOiBqc29uIH1cclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm5vdmVsY2hhcHRlciAhPT0gcHJldlByb3BzLm5vdmVsY2hhcHRlcikge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHByZWNoYXA6IHRoaXMucHJvcHMubm92ZWxjaGFwdGVyLnByZWNoYXAsXHJcbiAgICAgICAgICAgICAgICBuZXh0Y2hhcDogdGhpcy5wcm9wcy5ub3ZlbGNoYXB0ZXIubmV4dGNoYXBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyICE9PSBwcmV2UHJvcHMubm92ZWxSZWR1Y2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgbmlnaHRtb2RlOiB0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5uaWdodG1vZGUsXHJcbiAgICAgICAgICAgICAgICBmb250c2l6ZTogdGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIuZm9udHNpemUsXHJcbiAgICAgICAgICAgICAgICBmb250OiB0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5mb250LFxyXG4gICAgICAgICAgICAgICAgbGluZWhlaWdodDogdGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIubGluZWhlaWdodCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyLmJhY2tncm91bmQsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kYmlnOiB0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5iYWNrZ3JvdW5kLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaGFuZGxlTmlnaHRNb2RlID0gKGRhdGEpID0+IHtcclxuICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICBuaWdodG1vZGU6ICFkYXRhLFxyXG4gICAgICAgICAgICBmb250c2l6ZTogdGhpcy5zdGF0ZS5mb250c2l6ZSxcclxuICAgICAgICAgICAgZm9udDogdGhpcy5zdGF0ZS5mb250LFxyXG4gICAgICAgICAgICBsaW5laGVpZ2h0OiB0aGlzLnN0YXRlLmxpbmVoZWlnaHQsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRoaXMuc3RhdGUuYmFja2dyb3VuZCxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXR0aW5nTm92ZWwocGFyYW1zKVxyXG4gICAgfVxyXG4gICAgaGFuZGxlQ2hhbmdlQmFja2dyb3VuZCA9IChkYXRhLCBiaWdkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEgPT09ICcjMjMyMzIzJykge1xyXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgbmlnaHRtb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZm9udHNpemU6IHRoaXMuc3RhdGUuZm9udHNpemUsXHJcbiAgICAgICAgICAgICAgICBmb250OiB0aGlzLnN0YXRlLmZvbnQsXHJcbiAgICAgICAgICAgICAgICBsaW5laGVpZ2h0OiB0aGlzLnN0YXRlLmxpbmVoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGlzLnN0YXRlLmJhY2tncm91bmQsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kYmlnOiBiaWdkYXRhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc2V0dGluZ05vdmVsKHBhcmFtcylcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbmlnaHRtb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9udHNpemU6IHRoaXMuc3RhdGUuZm9udHNpemUsXHJcbiAgICAgICAgICAgIGZvbnQ6IHRoaXMuc3RhdGUuZm9udCxcclxuICAgICAgICAgICAgbGluZWhlaWdodDogdGhpcy5zdGF0ZS5saW5laGVpZ2h0LFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXRhLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kYmlnOiBiaWdkYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvcHMuc2V0dGluZ05vdmVsKHBhcmFtcylcclxuICAgIH1cclxuICAgIGhhbmRsZUNoYW5nZUZvbnQgPSAoZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbmlnaHRtb2RlOiB0aGlzLnN0YXRlLm5pZ2h0bW9kZSxcclxuICAgICAgICAgICAgZm9udHNpemU6IHRoaXMuc3RhdGUuZm9udHNpemUsXHJcbiAgICAgICAgICAgIGZvbnQ6IGRhdGEudmFsdWUsXHJcbiAgICAgICAgICAgIGxpbmVoZWlnaHQ6IHRoaXMuc3RhdGUubGluZWhlaWdodCxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdGhpcy5zdGF0ZS5iYWNrZ3JvdW5kLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kYmlnOiB0aGlzLnN0YXRlLmJhY2tncm91bmRiaWdcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc2V0dGluZ05vdmVsKHBhcmFtcylcclxuICAgIH1cclxuICAgIGhhbmRsZURlZ3JlZSA9ICh0eXBlKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IDEpIHtcclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIG5pZ2h0bW9kZTogdGhpcy5zdGF0ZS5uaWdodG1vZGUsXHJcbiAgICAgICAgICAgICAgICBmb250c2l6ZTogdGhpcy5zdGF0ZS5mb250c2l6ZSAtIDIgPCAxNCA/IHRoaXMuc3RhdGUuZm9udHNpemUgOiB0aGlzLnN0YXRlLmZvbnRzaXplIC0gMixcclxuICAgICAgICAgICAgICAgIGZvbnQ6IHRoaXMuc3RhdGUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBsaW5laGVpZ2h0OiB0aGlzLnN0YXRlLmxpbmVoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGlzLnN0YXRlLmJhY2tncm91bmQsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kYmlnOiB0aGlzLnN0YXRlLmJhY2tncm91bmRiaWdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5zZXR0aW5nTm92ZWwocGFyYW1zKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICBuaWdodG1vZGU6IHRoaXMuc3RhdGUubmlnaHRtb2RlLFxyXG4gICAgICAgICAgICAgICAgZm9udHNpemU6IHRoaXMuc3RhdGUuZm9udHNpemUgKyAyID4gMzIgPyB0aGlzLnN0YXRlLmZvbnRzaXplIDogdGhpcy5zdGF0ZS5mb250c2l6ZSArIDIsXHJcbiAgICAgICAgICAgICAgICBmb250OiB0aGlzLnN0YXRlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgbGluZWhlaWdodDogdGhpcy5zdGF0ZS5saW5laGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdGhpcy5zdGF0ZS5iYWNrZ3JvdW5kLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZGJpZzogdGhpcy5zdGF0ZS5iYWNrZ3JvdW5kYmlnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc2V0dGluZ05vdmVsKHBhcmFtcylcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcclxuICAgICAgICBjb25zdCB7IG1lbnVGaXhlZCwgb3ZlcmxheUZpeGVkLCBvdmVybGF5UmVjdCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICBodG1sLCBib2R5IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5uaWdodG1vZGUgPT09IHRydWUgPyAnIzFhMWExYScgOiB0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5iYWNrZ3JvdW5kYmlnfSA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8SGVsbWV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT57YCR7dGhpcy5wcm9wcy5ub3ZlbGNoYXB0ZXIuY2hhcHRlcm5hbWV9YH0gLSBLaXRlc05vdmVsPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtgxJDhu41jIHRydXnhu4duICR7dGhpcy5wcm9wcy5ub3ZlbGNoYXB0ZXIuY2hhcHRlcm5hbWV9LCBo4buXIHRy4bujIMSR4buNYyB0csOqbiDEkWnhu4duIHRob+G6oWkgdsOgIG3DoXkgdMOtbmggYuG6o25nYH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzAwOGY2OFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD17YCR7dGhpcy5wcm9wcy5ub3ZlbGNoYXB0ZXIuY2hhcHRlcm5hbWV9LCAke3RoaXMucHJvcHMubm92ZWxjaGFwdGVyLmNoYXB0ZXJuYW1lfSBmcmVlLCAke3RoaXMucHJvcHMubm92ZWxSZWR1Y2VyLm5vdmVsbmFtZX0gaG/DoG4sICR7dGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIubm92ZWxuYW1lfSBmdWxsIGNoxrDGoW5nLCAke3RoaXMucHJvcHMubm92ZWxSZWR1Y2VyLm5vdmVsbmFtZX0gY2jGsMahbmcgY3Xhu5FpYH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXtgL2RvYy8ke3RoaXMucHJvcHMubm92ZWxjaGFwdGVyLmlkbm92ZWxzfSR7dGhpcy5wcm9wcy5ub3ZlbGNoYXB0ZXIuaWRjaGFwdGVyfWB9PjwvbGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0hlbG1ldD5cclxuICAgICAgICAgICAgICAgIDxNZWRpYUNvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8TWVkaWEgZ3JlYXRlclRoYW49J21vYmlsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaXNpYmlsaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJvdHRvbVBhc3NlZD17dGhpcy5zdGlja1RvcE1lbnV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJvdHRvbVZpc2libGU9e3RoaXMudW5TdGlja1RvcE1lbnV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmNlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJsZXNzIGludmVydGVkPXt0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5uaWdodG1vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZml4ZWQ9e21lbnVGaXhlZCA/ICd0b3AnIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXttZW51Rml4ZWQgPyBmaXhlZE1lbnVTdHlsZSA6IG1lbnVTdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iIHNpemU9eydsYXJnZSd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iLlNlY3Rpb24gbGluaz48TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9ub3ZlbC8ke3RoaXMucHJvcHMubm92ZWxjaGFwdGVyLmlkbm92ZWxzfS8xYH0gaHJlZj17YC9ub3ZlbC9baWRdLzFgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48SWNvbiBjb2xvcj0nd2hpdGUnIG5hbWU9J2hvbWUnIC8+PC9MaW5rPjwvQnJlYWRjcnVtYi5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iLkRpdmlkZXIgaWNvbj0ncmlnaHQgY2hldnJvbicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYi5TZWN0aW9uIGFjdGl2ZT57dGhpcy5wcm9wcy5ub3ZlbGNoYXB0ZXIuY2hhcHRlcm5hbWV9PC9CcmVhZGNydW1iLlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JyZWFkY3J1bWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Zpc2liaWxpdHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZWRpYT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVkaWEgYXQ9J21vYmlsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaXNpYmlsaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJvdHRvbVBhc3NlZD17dGhpcy5zdGlja1RvcE1lbnV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJvdHRvbVZpc2libGU9e3RoaXMudW5TdGlja1RvcE1lbnV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmNlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJsZXNzIGludmVydGVkPXt0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5uaWdodG1vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZml4ZWQ9e21lbnVGaXhlZCA/ICd0b3AnIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXttZW51Rml4ZWQgPyBmaXhlZE1lbnVTdHlsZSA6IG1lbnVTdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIHN0eWxlPXt7IHdpZHRoOiAnODAlJywgb3ZlcmZsb3c6ICdoaWRkZW4nIH19IGhlYWRlciBwb3NpdGlvbj0nbGVmdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iIHNpemU9eydsYXJnZSd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJyZWFkY3J1bWIuU2VjdGlvbiBsaW5rPjxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e2Avbm92ZWwvJHt0aGlzLnByb3BzLm5vdmVsY2hhcHRlci5pZG5vdmVsc30vMWB9IGhyZWY9e2Avbm92ZWwvW2lkXS8xYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48SWNvbiBjb2xvcj0nd2hpdGUnIG5hbWU9J2hvbWUnIC8+PC9MaW5rPjwvQnJlYWRjcnVtYi5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JyZWFkY3J1bWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iLkRpdmlkZXIgaWNvbj0ncmlnaHQgY2hldnJvbicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJyZWFkY3J1bWIuU2VjdGlvbiBhY3RpdmU+e3RoaXMucHJvcHMubm92ZWxjaGFwdGVyLmNoYXB0ZXJuYW1lfTwvQnJlYWRjcnVtYi5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gcG9zaXRpb249J3JpZ2h0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZU5pZ2h0TW9kZSh0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5uaWdodG1vZGUpfSBzaXplPSdsYXJnZScgY2lyY3VsYXIgaWNvbj17dGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIubmlnaHRtb2RlID8gJ2xpZ2h0YnVsYiBvdXRsaW5lJyA6ICdtb29uJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Zpc2liaWxpdHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZWRpYT5cclxuICAgICAgICAgICAgICAgIDwvTWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIHRleHQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiB0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5uaWdodG1vZGUgPT09IHRydWUgPyAnIzIzMjMyMycgOiB0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5iYWNrZ3JvdW5kIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIHN0eWxlPXt7IG1hcmdpblRvcDogMjAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBjbGFzc05hbWU9J2RldGFpbC1jb250YWluZXJzJyBtb2JpbGU9ezE2fSB0YWJsZXQ9ezE2fSBjb21wdXRlcj17MTZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlZiBpbm5lclJlZj17dGhpcy5jb250ZXh0UmVmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VnbWVudCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyLm5pZ2h0bW9kZSA9PT0gdHJ1ZSA/ICcjMjMyMzIzJyA6IHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyLmJhY2tncm91bmQgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkdyb3VwIHRleHRBbGlnbj0nbGVmdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbS5EZXNjcmlwdGlvbiBjbGFzc05hbWU9J2NvbnRlbnQnIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogdGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIuZm9udCwgbGluZUhlaWdodDogdGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIubGluZWhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogdGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIuZm9udHNpemUsIGNvbG9yOiB0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5uaWdodG1vZGUgPT09IHRydWUgPyAnI2IzYjNiMycgOiAnYmxhY2snXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubm92ZWxjaGFwdGVyLmNvbnRlbnQgIT09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0SHRtbFBhcnNlcih0aGlzLnByb3BzLm5vdmVsY2hhcHRlci5jb250ZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0uRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhIGdyZWF0ZXJUaGFuPSdtb2JpbGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWlsIHBvc2l0aW9uPSdyaWdodCcgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGlja3kgb2Zmc2V0PXsxMDB9IGJvdHRvbU9mZnNldD17MTAwfSBjb250ZXh0PXt0aGlzLmNvbnRleHRSZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcHVwIHBvc2l0aW9uPSdsZWZ0IGNlbnRlcicgdHJpZ2dlcj17PEJ1dHRvbiBzaXplPSdsYXJnZScgY2lyY3VsYXIgaWNvbj0nZm9udCcgLz59IGZsb3dpbmcgaG92ZXJhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgdGV4dEFsaWduPSdsZWZ0JyBkaXZpZGVkIGNvbHVtbnM9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB0ZXh0QWxpZ249J2xlZnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIGFzPSdoNCc+QmFja2dyb3VuZDwvSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb2x1bW5zPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2VCYWNrZ3JvdW5kKCcjZmZmJywgJyNmNWY3ZmEnKX0gY2xhc3NOYW1lPSdyZWFkLXNldHRpbmdfd2hpdGUtY29sb3JfXzNaVEU0JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2hhbmdlQmFja2dyb3VuZCgnI2ZmZjZkZicsICcjZmZmOWViJyl9IGNsYXNzTmFtZT0ncmVhZC1zZXR0aW5nX29yYW5nZS1jb2xvcl9fM2NoaXgnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2VCYWNrZ3JvdW5kKCcjZWJmOWViJywgJyNmMmY5ZjInKX0gY2xhc3NOYW1lPSdyZWFkLXNldHRpbmdfZ3JlZW4tY29sb3JfX1dUakQ3JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2hhbmdlQmFja2dyb3VuZCgnIzIzMjMyMycsICcjMWExYTFhJyl9IGNsYXNzTmFtZT0ncmVhZC1zZXR0aW5nX2JsYWNrLWNvbG9yX18zS21JVicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHRleHRBbGlnbj0nbGVmdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9J2g0Jz5Gb250IFNpemU8L0hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29sdW1ucz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cCBzaXplPSdsYXJnZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZWdyZWUoMSl9PkEtPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24uT3IgdGV4dD17dGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIuZm9udHNpemV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZWdyZWUoMil9PkErPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBvbkNoYW5nZT17KGUsIGRhdGEpID0+IHRoaXMuaGFuZGxlQ2hhbmdlRm9udChlLCBkYXRhKX0gZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5mb250fSBvcHRpb25zPXtjb3VudHJ5T3B0aW9uc30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9wdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlTmlnaHRNb2RlKHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyLm5pZ2h0bW9kZSl9IHNpemU9J2xhcmdlJyBjaXJjdWxhciBpY29uPXt0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5uaWdodG1vZGUgPyAnbGlnaHRidWxiIG91dGxpbmUnIDogJ21vb24nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0aWNreT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lZGlhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVkaWEgZ3JlYXRlclRoYW49J21vYmlsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93IHZlcnRpY2FsQWxpZ249J21pZGRsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24uR3JvdXAgd2lkdGhzPSczJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e2AvZG9jLyR7dGhpcy5wcm9wcy5ub3ZlbGNoYXB0ZXIuaWRub3ZlbHN9JHt0aGlzLnN0YXRlLnByZWNoYXB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2RvYy9baWRdL1tjaGFwdGVyXWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdodWdlJyBjb2xvcj0nYmxhY2snIGRpc2FibGVkPXt0aGlzLnN0YXRlLnByZWNoYXAgIT09IFwiXCIgPyBmYWxzZSA6IHRydWV9IGxhYmVsUG9zaXRpb249J2xlZnQnIGljb249J2xlZnQgY2hldnJvbicgY29udGVudD0nUHJldiBjaGFwdGVyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9ub3ZlbC8ke3RoaXMucHJvcHMubm92ZWxjaGFwdGVyLmlkbm92ZWxzfS8xYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL25vdmVsL1tpZF0vMWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdodWdlJyBjb2xvcj0nYmxhY2snIGljb249J2JhcnMnIGNvbnRlbnQ9J0NoYXB0ZXIgTGlzdCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e2AvZG9jLyR7dGhpcy5wcm9wcy5ub3ZlbGNoYXB0ZXIuaWRub3ZlbHN9JHt0aGlzLnN0YXRlLm5leHRjaGFwfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9kb2MvW2lkXS9bY2hhcHRlcl1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT0naHVnZScgY29sb3I9J2JsYWNrJyBkaXNhYmxlZD17dGhpcy5zdGF0ZS5uZXh0Y2hhcCAhPT0gXCJcIiA/IGZhbHNlIDogdHJ1ZX0gbGFiZWxQb3NpdGlvbj0ncmlnaHQnIGljb249J3JpZ2h0IGNoZXZyb24nIGNvbnRlbnQ9J05leHQgY2hhcHRlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVkaWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVkaWEgYXQ9J21vYmlsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93IG1vYmlsZT17MTZ9IHRhYmxldD17MTZ9IGNvbXB1dGVyPXsxNn0gdmVydGljYWxBbGlnbj0nbWlkZGxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cCB3aWR0aHM9JzMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9kb2MvJHt0aGlzLnByb3BzLm5vdmVsY2hhcHRlci5pZG5vdmVsc30ke3RoaXMuc3RhdGUucHJlY2hhcH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvZG9jL1tpZF0vW2NoYXB0ZXJdYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9J2h1Z2UnIGNvbG9yPSdibGFjaycgZGlzYWJsZWQ9e3RoaXMuc3RhdGUucHJlY2hhcCAhPT0gXCJcIiA/IGZhbHNlIDogdHJ1ZX0gbGFiZWxQb3NpdGlvbj0nbGVmdCcgaWNvbj0nbGVmdCBjaGV2cm9uJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9ub3ZlbC8ke3RoaXMucHJvcHMubm92ZWxjaGFwdGVyLmlkbm92ZWxzfS8xYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL25vdmVsL1tpZF0vMWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdodWdlJyBjb2xvcj0nYmxhY2snIGljb249J2JhcnMnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9kb2MvJHt0aGlzLnByb3BzLm5vdmVsY2hhcHRlci5pZG5vdmVsc30ke3RoaXMuc3RhdGUubmV4dGNoYXB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2RvYy9baWRdL1tjaGFwdGVyXWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdodWdlJyBjb2xvcj0nYmxhY2snIGRpc2FibGVkPXt0aGlzLnN0YXRlLm5leHRjaGFwICE9PSBcIlwiID8gZmFsc2UgOiB0cnVlfSBsYWJlbFBvc2l0aW9uPSdyaWdodCcgaWNvbj0ncmlnaHQgY2hldnJvbicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVkaWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5vdmVsUmVkdWNlcjogc3RhdGUubm92ZWxSZWR1Y2VyXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBzYXZlTm92ZWwsIHNldHRpbmdOb3ZlbCB9KShDaGFwdGVyKTsiXSwic291cmNlUm9vdCI6IiJ9