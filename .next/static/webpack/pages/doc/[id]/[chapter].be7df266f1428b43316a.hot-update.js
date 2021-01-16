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
      listchapter: []
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
        }); // fetch(`${API_URL}novel?id=${this.props.novelchapter.idnovels}`)
        //     .then(r => r.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.chapterlist.length === 1) {
        //             this.state({ prechap: '', nextchap: '', totalchapter: data.chapterlist.length, listchapter: data.chapterlist, showmodal: false })
        //         } else {
        //             for (let i = 0; i < data.chapterlist.length; i++) {
        //                 if (
        //                     this.props.novelchapter.idchapter ===
        //                     data.chapterlist[i].idchapter
        //                 ) {
        //                     if (i === 0) {
        //                         this.setState({ prechap: '', nextchap: data.chapterlist[i + 1].idchapter, totalchapter: data.chapterlist.length, showmodal: false, listchapter: data.chapterlist })
        //                         // return { novelchapter: json, prechap: '', nextchap: json1.chapterlist[i + 1].idchapter }
        //                     }
        //                     if (i > 0 && i < data.chapterlist.length - 1) {
        //                         this.setState({ prechap: data.chapterlist[i - 1].idchapter, nextchap: data.chapterlist[i + 1].idchapter, showmodal: false, totalchapter: data.chapterlist.length, listchapter: data.chapterlist })
        //                         // return { novelchapter: json, prechap: json1.chapterlist[i - 1].idchapter, nextchap: json1.chapterlist[i + 1].idchapter }
        //                     }
        //                     if (i === data.chapterlist.length - 1) {
        //                         this.setState({ prechap: data.chapterlist[i - 1].idchapter, nextchap: '', totalchapter: data.chapterlist.length, showmodal: false, listchapter: data.chapterlist })
        //                         // return { novelchapter: json, prechap: json1.chapterlist[i - 1].idchapter, nextchap: '' }
        //                     }
        //                 }
        //             }
        //         }
        //     });
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
    key: "componentDidMount",
    value: function componentDidMount() {// fetch(`${API_URL}novel?id=${this.props.novelchapter.idnovels}`)
      //     .then(r => r.json())
      //     .then(data => {
      //         this.props.saveNovel(data)
      //         if (data.chapterlist.length === 1) {
      //             this.state({ prechap: '', nextchap: '' })
      //         } else {
      //             for (let i = 0; i < data.chapterlist.length; i++) {
      //                 if (
      //                     this.props.novelchapter.idchapter ===
      //                     data.chapterlist[i].idchapter
      //                 ) {
      //                     if (i === 0) {
      //                         this.setState({ prechap: '', nextchap: data.chapterlist[i + 1].idchapter, listchapter: data.chapterlist })
      //                     }
      //                     if (i > 0 && i < data.chapterlist.length - 1) {
      //                         this.setState({ prechap: data.chapterlist[i - 1].idchapter, nextchap: data.chapterlist[i + 1].idchapter, listchapter: data.chapterlist })
      //                     }
      //                     if (i === data.chapterlist.length - 1) {
      //                         this.setState({ prechap: data.chapterlist[i - 1].idchapter, nextchap: '', listchapter: data.chapterlist })
      //                     }
      //                 }
      //             }
      //         }
      //     });
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
      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx("style", null, "\n          html, body {\n            background: ".concat(this.props.novelReducer.nightmode === true ? '#1a1a1a' : this.props.novelReducer.backgroundbig, " ;\n          }\n        ")), __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_17__["Helmet"], null, __jsx("title", null, "Read ".concat(this.props.novelchapter.chaptername), " - KitesNovel"), __jsx("meta", {
        name: "description",
        content: "Read ".concat(this.props.novelchapter.chaptername, " for free, total ").concat(this.state.totalchapter, " chapter ")
      }), __jsx("meta", {
        name: "theme-color",
        content: "#008f68"
      }), __jsx("meta", {
        name: "keywords",
        content: "".concat(this.props.novelchapter.chaptername, ", ").concat(this.props.novelchapter.chaptername, " free, ").concat(this.props.novelReducer.novelname, " light novel, ").concat(this.props.novelReducer.novelname, " full chapters, ").concat(this.props.novelReducer.novelname, " latest chapters")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9jLy9bY2hhcHRlcl0uanMiXSwibmFtZXMiOlsiY3JlYXRlTWVkaWEiLCJicmVha3BvaW50cyIsIm1vYmlsZSIsInRhYmxldCIsImNvbXB1dGVyIiwiTWVkaWFDb250ZXh0UHJvdmlkZXIiLCJNZWRpYSIsIm1lbnVTdHlsZSIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsIm1hcmdpbkJvdHRvbSIsInRyYW5zaXRpb24iLCJmaXhlZE1lbnVTdHlsZSIsImNvdW50cnlPcHRpb25zIiwia2V5IiwidmFsdWUiLCJ0ZXh0IiwiQ2hhcHRlciIsInByb3BzIiwiY3JlYXRlUmVmIiwiYyIsIm92ZXJsYXlSZWN0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsIl8iLCJwaWNrIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwib3ZlcmxheUZpeGVkIiwibWVudUZpeGVkIiwiZGF0YSIsInBhcmFtcyIsIm5pZ2h0bW9kZSIsImZvbnRzaXplIiwiZm9udCIsImxpbmVoZWlnaHQiLCJiYWNrZ3JvdW5kIiwic2V0dGluZ05vdmVsIiwiYmlnZGF0YSIsImJhY2tncm91bmRiaWciLCJlIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJwcmVjaGFwIiwibm92ZWxjaGFwdGVyIiwibmV4dGNoYXAiLCJ0b3RhbGNoYXB0ZXIiLCJzaG93bW9kYWwiLCJsaXN0Y2hhcHRlciIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsIm5vdmVsUmVkdWNlciIsImNoYXB0ZXJuYW1lIiwibm92ZWxuYW1lIiwic3RpY2tUb3BNZW51IiwidW5TdGlja1RvcE1lbnUiLCJ1bmRlZmluZWQiLCJpZG5vdmVscyIsIndpZHRoIiwib3ZlcmZsb3ciLCJoYW5kbGVOaWdodE1vZGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5Ub3AiLCJjb250ZXh0UmVmIiwiZm9udEZhbWlseSIsImxpbmVIZWlnaHQiLCJmb250U2l6ZSIsImNvbG9yIiwiY29udGVudCIsIlJlYWN0SHRtbFBhcnNlciIsImhhbmRsZUNoYW5nZUJhY2tncm91bmQiLCJoYW5kbGVEZWdyZWUiLCJoYW5kbGVDaGFuZ2VGb250IiwiY29udGV4dCIsInF1ZXJ5IiwiaWQiLCJjaGFwdGVyIiwiZmV0Y2giLCJBUElfVVJMIiwicmVzIiwianNvbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiY29ubmVjdCIsInNhdmVOb3ZlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7bUJBZ0J3Q0EsbUVBQVcsQ0FBQztBQUNoREMsYUFBVyxFQUFFO0FBQ1RDLFVBQU0sRUFBRSxDQURDO0FBRVRDLFVBQU0sRUFBRSxHQUZDO0FBR1RDLFlBQVEsRUFBRTtBQUhEO0FBRG1DLENBQUQsQztJQUEzQ0Msb0IsZ0JBQUFBLG9CO0lBQXNCQyxLLGdCQUFBQSxLOztBQU85QixJQUFNQyxTQUFTLEdBQUc7QUFDZEMsUUFBTSxFQUFFLE1BRE07QUFFZEMsY0FBWSxFQUFFLENBRkE7QUFHZEMsV0FBUyxFQUFFLE1BSEc7QUFJZEMsY0FBWSxFQUFFLEtBSkE7QUFLZEMsWUFBVSxFQUFFO0FBTEUsQ0FBbEI7QUFRQSxJQUFNQyxjQUFjLEdBQUc7QUFDbkI7QUFDQTtBQUNBSCxXQUFTLEVBQUU7QUFIUSxDQUF2QjtBQUtBLElBQU1JLGNBQWMsR0FBRyxDQUNuQjtBQUFFQyxLQUFHLEVBQUUsY0FBUDtBQUF1QkMsT0FBSyxFQUFFLGNBQTlCO0FBQThDQyxNQUFJLEVBQUU7QUFBcEQsQ0FEbUIsRUFFbkI7QUFBRUYsS0FBRyxFQUFFLG1CQUFQO0FBQTRCQyxPQUFLLEVBQUUsbUJBQW5DO0FBQXdEQyxNQUFJLEVBQUU7QUFBOUQsQ0FGbUIsRUFHbkI7QUFBRUYsS0FBRyxFQUFFLG9CQUFQO0FBQTZCQyxPQUFLLEVBQUUsb0JB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Q0F6QkosQ0ExRUosQ0FESixDQXJFSixDQURKO0FBeU1IOzs7OytOQXBXNEI0QixPOzs7Ozs7O2lDQUNEQSxPQUFPLENBQUNDLEssRUFBeEJDLEUsa0JBQUFBLEUsRUFBSUMsTyxrQkFBQUEsTzs7dUJBQ01DLEtBQUssV0FBSUMsdURBQUosNkJBQThCSCxFQUE5Qix5QkFBK0NDLE9BQS9DLE87OztBQUFqQkcsbUI7O3VCQUNhQSxHQUFHLENBQUNDLElBQUosRTs7O0FBQWJBLG9CO2lEQUVDO0FBQUVwQyw4QkFBWSxFQUFFb0M7QUFBaEIsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFsQ09DLDZDQUFLLENBQUNDLFM7O0FBbVk1QixTQUFTQyxlQUFULENBQXlCN0QsS0FBekIsRUFBZ0M7QUFDNUIsU0FBTztBQUNINkIsZ0JBQVksRUFBRTdCLEtBQUssQ0FBQzZCO0FBRGpCLEdBQVA7QUFHSDs7QUFFY2lDLDJIQUFPLENBQUNELGVBQUQsRUFBa0I7QUFBRUUsV0FBUyxFQUFUQSxzRUFBRjtBQUFhakQsY0FBWSxFQUFaQSx5RUFBWUE7QUFBekIsQ0FBbEIsQ0FBUCxDQUFzRG5CLE9BQXRELENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9jL1tpZF0vW2NoYXB0ZXJdLmJlN2RmMjY2ZjE0MjhiNDMzMTZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnXHJcbmltcG9ydCAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIGNyZWF0ZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlTWVkaWEgfSBmcm9tICdAYXJ0c3kvZnJlc25lbCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgUmVhY3RIdG1sUGFyc2VyLCB7IHByb2Nlc3NOb2RlcywgY29udmVydE5vZGVUb0VsZW1lbnQsIGh0bWxwYXJzZXIyIH0gZnJvbSAncmVhY3QtaHRtbC1wYXJzZXInO1xyXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnO1xyXG5pbXBvcnQgeyBzYXZlTm92ZWwsIHNldHRpbmdOb3ZlbCB9IGZyb20gJy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvbm92ZWxBY3Rpb25zJ1xyXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2NvbmZpZydcclxuaW1wb3J0IHtcclxuICAgIENvbnRhaW5lciwgQnJlYWRjcnVtYixcclxuICAgIERpdmlkZXIsXHJcbiAgICBEcm9wZG93bixcclxuICAgIEdyaWQsXHJcbiAgICBIZWFkZXIsIFNlbGVjdCxcclxuICAgIEljb24sXHJcbiAgICBJbWFnZSxcclxuICAgIExpc3QsXHJcbiAgICBNZW51LFxyXG4gICAgU2VnbWVudCxcclxuICAgIFZpc2liaWxpdHksXHJcbiAgICBJdGVtLFxyXG4gICAgU3RpY2t5LCBSYWlsLFxyXG4gICAgUmVmLCBCdXR0b24sIFBvcHVwLCBNb2RhbFxyXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuY29uc3QgeyBNZWRpYUNvbnRleHRQcm92aWRlciwgTWVkaWEgfSA9IGNyZWF0ZU1lZGlhKHtcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgbW9iaWxlOiAwLFxyXG4gICAgICAgIHRhYmxldDogNzY4LFxyXG4gICAgICAgIGNvbXB1dGVyOiAxMDI0LFxyXG4gICAgfSxcclxufSlcclxuY29uc3QgbWVudVN0eWxlID0ge1xyXG4gICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICBib3JkZXJSYWRpdXM6IDAsXHJcbiAgICBib3hTaGFkb3c6ICdub25lJyxcclxuICAgIG1hcmdpbkJvdHRvbTogJzFlbScsXHJcbiAgICB0cmFuc2l0aW9uOiAnYm94LXNoYWRvdyAwLjVzIGVhc2UsIHBhZGRpbmcgMC41cyBlYXNlJyxcclxufVxyXG5cclxuY29uc3QgZml4ZWRNZW51U3R5bGUgPSB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgIC8vIGJvcmRlcjogJzFweCBzb2xpZCAjZGRkJyxcclxuICAgIGJveFNoYWRvdzogJzBweCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKScsXHJcbn1cclxuY29uc3QgY291bnRyeU9wdGlvbnMgPSBbXHJcbiAgICB7IGtleTogJ01lcnJpd2VhdGhlcicsIHZhbHVlOiAnTWVycml3ZWF0aGVyJywgdGV4dDogJ01lcnJpd2VhdGhlcicgfSxcclxuICAgIHsga2V5OiAnTGlicmUgQmFza2VydmlsbGUnLCB2YWx1ZTogJ0xpYnJlIEJhc2tlcnZpbGxlJywgdGV4dDogJ0xpYnJlIEJhc2tlcnZpbGxlJyB9LFxyXG4gICAgeyBrZXk6ICdHZW50aXVtIEJvb2sgQmFzaWMnLCB2YWx1ZTogJ0dlbnRpdW0gQm9vayBCYXNpYycsIHRleHQ6ICdHZW50aXVtIEJvb2sgQmFzaWMnIH0sXHJcbiAgICB7IGtleTogJ1JvYm90bycsIHZhbHVlOiAnUm9ib3RvJywgdGV4dDogJ1JvYm90bycgfSxcclxuICAgIHsga2V5OiAnUnViaWsnLCB2YWx1ZTogJ1J1YmlrJywgdGV4dDogJ1J1YmlrJyB9LFxyXG4gICAgeyBrZXk6ICdOdW5pdG8nLCB2YWx1ZTogJ051bml0bycsIHRleHQ6ICdOdW5pdG8nIH0sXHJcbl1cclxuY2xhc3MgQ2hhcHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBwcmVjaGFwOiBwcm9wcy5ub3ZlbGNoYXB0ZXIucHJlY2hhcCxcclxuICAgICAgICAgICAgbmV4dGNoYXA6IHByb3BzLm5vdmVsY2hhcHRlci5uZXh0Y2hhcCxcclxuICAgICAgICAgICAgbWVudUZpeGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgb3ZlcmxheUZpeGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgdG90YWxjaGFwdGVyOiAxLFxyXG4gICAgICAgICAgICBzaG93bW9kYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICBsaXN0Y2hhcHRlcjogW11cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb250ZXh0UmVmID0gY3JlYXRlUmVmKClcclxuICAgIGhhbmRsZU92ZXJsYXlSZWYgPSAoYykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgb3ZlcmxheVJlY3QgfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICAgICAgaWYgKCFvdmVybGF5UmVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3ZlcmxheVJlY3Q6IF8ucGljayhjLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCAnaGVpZ2h0JywgJ3dpZHRoJykgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RpY2tPdmVybGF5ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG92ZXJsYXlGaXhlZDogdHJ1ZSB9KVxyXG5cclxuICAgIHN0aWNrVG9wTWVudSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBtZW51Rml4ZWQ6IHRydWUgfSlcclxuXHJcbiAgICB1blN0aWNrT3ZlcmxheSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBvdmVybGF5Rml4ZWQ6IGZhbHNlIH0pXHJcblxyXG4gICAgdW5TdGlja1RvcE1lbnUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgbWVudUZpeGVkOiBmYWxzZSB9KVxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjb250ZXh0KSB7XHJcbiAgICAgICAgY29uc3QgeyBpZCwgY2hhcHRlciB9ID0gY29udGV4dC5xdWVyeVxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9Y2hhcHRlcj9ub3ZlbGlkPSR7aWR9JmNoYXB0ZXJpZD0vJHtjaGFwdGVyfS9gKVxyXG4gICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gICAgICAgIHJldHVybiB7IG5vdmVsY2hhcHRlcjoganNvbiB9XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5ub3ZlbGNoYXB0ZXIgIT09IHByZXZQcm9wcy5ub3ZlbGNoYXB0ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBwcmVjaGFwOiB0aGlzLnByb3BzLm5vdmVsY2hhcHRlci5wcmVjaGFwLFxyXG4gICAgICAgICAgICAgICAgbmV4dGNoYXA6IHRoaXMucHJvcHMubm92ZWxjaGFwdGVyLm5leHRjaGFwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vIGZldGNoKGAke0FQSV9VUkx9bm92ZWw/aWQ9JHt0aGlzLnByb3BzLm5vdmVsY2hhcHRlci5pZG5vdmVsc31gKVxyXG4gICAgICAgICAgICAvLyAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcclxuICAgICAgICAgICAgLy8gICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYgKGRhdGEuY2hhcHRlcmxpc3QubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuc3RhdGUoeyBwcmVjaGFwOiAnJywgbmV4dGNoYXA6ICcnLCB0b3RhbGNoYXB0ZXI6IGRhdGEuY2hhcHRlcmxpc3QubGVuZ3RoLCBsaXN0Y2hhcHRlcjogZGF0YS5jaGFwdGVybGlzdCwgc2hvd21vZGFsOiBmYWxzZSB9KVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5jaGFwdGVybGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubm92ZWxjaGFwdGVyLmlkY2hhcHRlciA9PT1cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBkYXRhLmNoYXB0ZXJsaXN0W2ldLmlkY2hhcHRlclxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByZWNoYXA6ICcnLCBuZXh0Y2hhcDogZGF0YS5jaGFwdGVybGlzdFtpICsgMV0uaWRjaGFwdGVyLCB0b3RhbGNoYXB0ZXI6IGRhdGEuY2hhcHRlcmxpc3QubGVuZ3RoLCBzaG93bW9kYWw6IGZhbHNlLCBsaXN0Y2hhcHRlcjogZGF0YS5jaGFwdGVybGlzdCB9KVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4geyBub3ZlbGNoYXB0ZXI6IGpzb24sIHByZWNoYXA6ICcnLCBuZXh0Y2hhcDoganNvbjEuY2hhcHRlcmxpc3RbaSArIDFdLmlkY2hhcHRlciB9XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpZiAoaSA+IDAgJiYgaSA8IGRhdGEuY2hhcHRlcmxpc3QubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJlY2hhcDogZGF0YS5jaGFwdGVybGlzdFtpIC0gMV0uaWRjaGFwdGVyLCBuZXh0Y2hhcDogZGF0YS5jaGFwdGVybGlzdFtpICsgMV0uaWRjaGFwdGVyLCBzaG93bW9kYWw6IGZhbHNlLCB0b3RhbGNoYXB0ZXI6IGRhdGEuY2hhcHRlcmxpc3QubGVuZ3RoLCBsaXN0Y2hhcHRlcjogZGF0YS5jaGFwdGVybGlzdCB9KVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4geyBub3ZlbGNoYXB0ZXI6IGpzb24sIHByZWNoYXA6IGpzb24xLmNoYXB0ZXJsaXN0W2kgLSAxXS5pZGNoYXB0ZXIsIG5leHRjaGFwOiBqc29uMS5jaGFwdGVybGlzdFtpICsgMV0uaWRjaGFwdGVyIH1cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IGRhdGEuY2hhcHRlcmxpc3QubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJlY2hhcDogZGF0YS5jaGFwdGVybGlzdFtpIC0gMV0uaWRjaGFwdGVyLCBuZXh0Y2hhcDogJycsIHRvdGFsY2hhcHRlcjogZGF0YS5jaGFwdGVybGlzdC5sZW5ndGgsIHNob3dtb2RhbDogZmFsc2UsIGxpc3RjaGFwdGVyOiBkYXRhLmNoYXB0ZXJsaXN0IH0pXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiB7IG5vdmVsY2hhcHRlcjoganNvbiwgcHJlY2hhcDoganNvbjEuY2hhcHRlcmxpc3RbaSAtIDFdLmlkY2hhcHRlciwgbmV4dGNoYXA6ICcnIH1cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyICE9PSBwcmV2UHJvcHMubm92ZWxSZWR1Y2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgbmlnaHRtb2RlOiB0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5uaWdodG1vZGUsXHJcbiAgICAgICAgICAgICAgICBmb250c2l6ZTogdGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIuZm9udHNpemUsXHJcbiAgICAgICAgICAgICAgICBmb250OiB0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5mb250LFxyXG4gICAgICAgICAgICAgICAgbGluZWhlaWdodDogdGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIubGluZWhlaWdodCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyLmJhY2tncm91bmQsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kYmlnOiB0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5iYWNrZ3JvdW5kLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICAvLyBmZXRjaChgJHtBUElfVVJMfW5vdmVsP2lkPSR7dGhpcy5wcm9wcy5ub3ZlbGNoYXB0ZXIuaWRub3ZlbHN9YClcclxuICAgICAgICAvLyAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcclxuICAgICAgICAvLyAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnByb3BzLnNhdmVOb3ZlbChkYXRhKVxyXG4gICAgICAgIC8vICAgICAgICAgaWYgKGRhdGEuY2hhcHRlcmxpc3QubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5zdGF0ZSh7IHByZWNoYXA6ICcnLCBuZXh0Y2hhcDogJycgfSlcclxuICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmNoYXB0ZXJsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubm92ZWxjaGFwdGVyLmlkY2hhcHRlciA9PT1cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGRhdGEuY2hhcHRlcmxpc3RbaV0uaWRjaGFwdGVyXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJlY2hhcDogJycsIG5leHRjaGFwOiBkYXRhLmNoYXB0ZXJsaXN0W2kgKyAxXS5pZGNoYXB0ZXIsIGxpc3RjaGFwdGVyOiBkYXRhLmNoYXB0ZXJsaXN0IH0pXHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPiAwICYmIGkgPCBkYXRhLmNoYXB0ZXJsaXN0Lmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJlY2hhcDogZGF0YS5jaGFwdGVybGlzdFtpIC0gMV0uaWRjaGFwdGVyLCBuZXh0Y2hhcDogZGF0YS5jaGFwdGVybGlzdFtpICsgMV0uaWRjaGFwdGVyLCBsaXN0Y2hhcHRlcjogZGF0YS5jaGFwdGVybGlzdCB9KVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IGRhdGEuY2hhcHRlcmxpc3QubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmVjaGFwOiBkYXRhLmNoYXB0ZXJsaXN0W2kgLSAxXS5pZGNoYXB0ZXIsIG5leHRjaGFwOiAnJywgbGlzdGNoYXB0ZXI6IGRhdGEuY2hhcHRlcmxpc3QgfSlcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVOaWdodE1vZGUgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG5pZ2h0bW9kZTogIWRhdGEsXHJcbiAgICAgICAgICAgIGZvbnRzaXplOiB0aGlzLnN0YXRlLmZvbnRzaXplLFxyXG4gICAgICAgICAgICBmb250OiB0aGlzLnN0YXRlLmZvbnQsXHJcbiAgICAgICAgICAgIGxpbmVoZWlnaHQ6IHRoaXMuc3RhdGUubGluZWhlaWdodCxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdGhpcy5zdGF0ZS5iYWNrZ3JvdW5kLFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb3BzLnNldHRpbmdOb3ZlbChwYXJhbXMpXHJcbiAgICB9XHJcbiAgICBoYW5kbGVDaGFuZ2VCYWNrZ3JvdW5kID0gKGRhdGEsIGJpZ2RhdGEpID0+IHtcclxuICAgICAgICBpZiAoZGF0YSA9PT0gJyMyMzIzMjMnKSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICBuaWdodG1vZGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBmb250c2l6ZTogdGhpcy5zdGF0ZS5mb250c2l6ZSxcclxuICAgICAgICAgICAgICAgIGZvbnQ6IHRoaXMuc3RhdGUuZm9udCxcclxuICAgICAgICAgICAgICAgIGxpbmVoZWlnaHQ6IHRoaXMuc3RhdGUubGluZWhlaWdodCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRoaXMuc3RhdGUuYmFja2dyb3VuZCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRiaWc6IGJpZ2RhdGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5zZXR0aW5nTm92ZWwocGFyYW1zKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICBuaWdodG1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBmb250c2l6ZTogdGhpcy5zdGF0ZS5mb250c2l6ZSxcclxuICAgICAgICAgICAgZm9udDogdGhpcy5zdGF0ZS5mb250LFxyXG4gICAgICAgICAgICBsaW5laGVpZ2h0OiB0aGlzLnN0YXRlLmxpbmVoZWlnaHQsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhdGEsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRiaWc6IGJpZ2RhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXR0aW5nTm92ZWwocGFyYW1zKVxyXG4gICAgfVxyXG4gICAgaGFuZGxlQ2hhbmdlRm9udCA9IChlLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICBuaWdodG1vZGU6IHRoaXMuc3RhdGUubmlnaHRtb2RlLFxyXG4gICAgICAgICAgICBmb250c2l6ZTogdGhpcy5zdGF0ZS5mb250c2l6ZSxcclxuICAgICAgICAgICAgZm9udDogZGF0YS52YWx1ZSxcclxuICAgICAgICAgICAgbGluZWhlaWdodDogdGhpcy5zdGF0ZS5saW5laGVpZ2h0LFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGlzLnN0YXRlLmJhY2tncm91bmQsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRiaWc6IHRoaXMuc3RhdGUuYmFja2dyb3VuZGJpZ1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5zZXR0aW5nTm92ZWwocGFyYW1zKVxyXG4gICAgfVxyXG4gICAgaGFuZGxlRGVncmVlID0gKHR5cGUpID0+IHtcclxuICAgICAgICBpZiAodHlwZSA9PT0gMSkge1xyXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgbmlnaHRtb2RlOiB0aGlzLnN0YXRlLm5pZ2h0bW9kZSxcclxuICAgICAgICAgICAgICAgIGZvbnRzaXplOiB0aGlzLnN0YXRlLmZvbnRzaXplIC0gMiA8IDE0ID8gdGhpcy5zdGF0ZS5mb250c2l6ZSA6IHRoaXMuc3RhdGUuZm9udHNpemUgLSAyLFxyXG4gICAgICAgICAgICAgICAgZm9udDogdGhpcy5zdGF0ZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGxpbmVoZWlnaHQ6IHRoaXMuc3RhdGUubGluZWhlaWdodCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRoaXMuc3RhdGUuYmFja2dyb3VuZCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRiaWc6IHRoaXMuc3RhdGUuYmFja2dyb3VuZGJpZ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLnNldHRpbmdOb3ZlbChwYXJhbXMpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIG5pZ2h0bW9kZTogdGhpcy5zdGF0ZS5uaWdodG1vZGUsXHJcbiAgICAgICAgICAgICAgICBmb250c2l6ZTogdGhpcy5zdGF0ZS5mb250c2l6ZSArIDIgPiAzMiA/IHRoaXMuc3RhdGUuZm9udHNpemUgOiB0aGlzLnN0YXRlLmZvbnRzaXplICsgMixcclxuICAgICAgICAgICAgICAgIGZvbnQ6IHRoaXMuc3RhdGUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBsaW5laGVpZ2h0OiB0aGlzLnN0YXRlLmxpbmVoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGlzLnN0YXRlLmJhY2tncm91bmQsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kYmlnOiB0aGlzLnN0YXRlLmJhY2tncm91bmRiaWdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5zZXR0aW5nTm92ZWwocGFyYW1zKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcylcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxyXG4gICAgICAgIGNvbnN0IHsgbWVudUZpeGVkLCBvdmVybGF5Rml4ZWQsIG92ZXJsYXlSZWN0IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgIGh0bWwsIGJvZHkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoaXMucHJvcHMubm92ZWxSZWR1Y2VyLm5pZ2h0bW9kZSA9PT0gdHJ1ZSA/ICcjMWExYTFhJyA6IHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyLmJhY2tncm91bmRiaWd9IDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxIZWxtZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPntgUmVhZCAke3RoaXMucHJvcHMubm92ZWxjaGFwdGVyLmNoYXB0ZXJuYW1lfWB9IC0gS2l0ZXNOb3ZlbDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17YFJlYWQgJHt0aGlzLnByb3BzLm5vdmVsY2hhcHRlci5jaGFwdGVybmFtZX0gZm9yIGZyZWUsIHRvdGFsICR7dGhpcy5zdGF0ZS50b3RhbGNoYXB0ZXJ9IGNoYXB0ZXIgYH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzAwOGY2OFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD17YCR7dGhpcy5wcm9wcy5ub3ZlbGNoYXB0ZXIuY2hhcHRlcm5hbWV9LCAke3RoaXMucHJvcHMubm92ZWxjaGFwdGVyLmNoYXB0ZXJuYW1lfSBmcmVlLCAke3RoaXMucHJvcHMubm92ZWxSZWR1Y2VyLm5vdmVsbmFtZX0gbGlnaHQgbm92ZWwsICR7dGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIubm92ZWxuYW1lfSBmdWxsIGNoYXB0ZXJzLCAke3RoaXMucHJvcHMubm92ZWxSZWR1Y2VyLm5vdmVsbmFtZX0gbGF0ZXN0IGNoYXB0ZXJzYH0gLz5cclxuICAgICAgICAgICAgICAgIDwvSGVsbWV0PlxyXG4gICAgICAgICAgICAgICAgPE1lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZWRpYSBncmVhdGVyVGhhbj0nbW9iaWxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpc2liaWxpdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQm90dG9tUGFzc2VkPXt0aGlzLnN0aWNrVG9wTWVudX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQm90dG9tVmlzaWJsZT17dGhpcy51blN0aWNrVG9wTWVudX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uY2U9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcmxlc3MgaW52ZXJ0ZWQ9e3RoaXMucHJvcHMubm92ZWxSZWR1Y2VyLm5pZ2h0bW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXhlZD17bWVudUZpeGVkID8gJ3RvcCcgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e21lbnVGaXhlZCA/IGZpeGVkTWVudVN0eWxlIDogbWVudVN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJyZWFkY3J1bWIgc2l6ZT17J2xhcmdlJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJyZWFkY3J1bWIuU2VjdGlvbiBsaW5rPjxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL25vdmVsLyR7dGhpcy5wcm9wcy5ub3ZlbGNoYXB0ZXIuaWRub3ZlbHN9LzFgfSBocmVmPXtgL25vdmVsL1tpZF0vMWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxJY29uIGNvbG9yPSd3aGl0ZScgbmFtZT0naG9tZScgLz48L0xpbms+PC9CcmVhZGNydW1iLlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJyZWFkY3J1bWIuRGl2aWRlciBpY29uPSdyaWdodCBjaGV2cm9uJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iLlNlY3Rpb24gYWN0aXZlPnt0aGlzLnByb3BzLm5vdmVsY2hhcHRlci5jaGFwdGVybmFtZX08L0JyZWFkY3J1bWIuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnJlYWRjcnVtYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlzaWJpbGl0eT5cclxuICAgICAgICAgICAgICAgICAgICA8L01lZGlhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZWRpYSBhdD0nbW9iaWxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpc2liaWxpdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQm90dG9tUGFzc2VkPXt0aGlzLnN0aWNrVG9wTWVudX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQm90dG9tVmlzaWJsZT17dGhpcy51blN0aWNrVG9wTWVudX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uY2U9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcmxlc3MgaW52ZXJ0ZWQ9e3RoaXMucHJvcHMubm92ZWxSZWR1Y2VyLm5pZ2h0bW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXhlZD17bWVudUZpeGVkID8gJ3RvcCcgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e21lbnVGaXhlZCA/IGZpeGVkTWVudVN0eWxlIDogbWVudVN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gc3R5bGU9e3sgd2lkdGg6ICc4MCUnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0gaGVhZGVyIHBvc2l0aW9uPSdsZWZ0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJyZWFkY3J1bWIgc2l6ZT17J2xhcmdlJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYi5TZWN0aW9uIGxpbms+PExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9ub3ZlbC8ke3RoaXMucHJvcHMubm92ZWxjaGFwdGVyLmlkbm92ZWxzfS8xYH0gaHJlZj17YC9ub3ZlbC9baWRdLzFgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxJY29uIGNvbG9yPSd3aGl0ZScgbmFtZT0naG9tZScgLz48L0xpbms+PC9CcmVhZGNydW1iLlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnJlYWRjcnVtYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJyZWFkY3J1bWIuRGl2aWRlciBpY29uPSdyaWdodCBjaGV2cm9uJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYi5TZWN0aW9uIGFjdGl2ZT57dGhpcy5wcm9wcy5ub3ZlbGNoYXB0ZXIuY2hhcHRlcm5hbWV9PC9CcmVhZGNydW1iLlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBwb3NpdGlvbj0ncmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlTmlnaHRNb2RlKHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyLm5pZ2h0bW9kZSl9IHNpemU9J2xhcmdlJyBjaXJjdWxhciBpY29uPXt0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5uaWdodG1vZGUgPyAnbGlnaHRidWxiIG91dGxpbmUnIDogJ21vb24nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlzaWJpbGl0eT5cclxuICAgICAgICAgICAgICAgICAgICA8L01lZGlhPlxyXG4gICAgICAgICAgICAgICAgPC9NZWRpYUNvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgdGV4dCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyLm5pZ2h0bW9kZSA9PT0gdHJ1ZSA/ICcjMjMyMzIzJyA6IHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyLmJhY2tncm91bmQgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgc3R5bGU9e3sgbWFyZ2luVG9wOiAyMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIGNsYXNzTmFtZT0nZGV0YWlsLWNvbnRhaW5lcnMnIG1vYmlsZT17MTZ9IHRhYmxldD17MTZ9IGNvbXB1dGVyPXsxNn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVmIGlubmVyUmVmPXt0aGlzLmNvbnRleHRSZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogdGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIubmlnaHRtb2RlID09PSB0cnVlID8gJyMyMzIzMjMnIDogdGhpcy5wcm9wcy5ub3ZlbFJlZHVjZXIuYmFja2dyb3VuZCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0uR3JvdXAgdGV4dEFsaWduPSdsZWZ0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtLkRlc2NyaXB0aW9uIGNsYXNzTmFtZT0nY29udGVudCcgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiB0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5mb250LCBsaW5lSGVpZ2h0OiB0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5saW5laGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiB0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5mb250c2l6ZSwgY29sb3I6IHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyLm5pZ2h0bW9kZSA9PT0gdHJ1ZSA/ICcjYjNiM2IzJyA6ICdibGFjaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5ub3ZlbGNoYXB0ZXIuY29udGVudCAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3RIdG1sUGFyc2VyKHRoaXMucHJvcHMubm92ZWxjaGFwdGVyLmNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbS5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVkaWEgZ3JlYXRlclRoYW49J21vYmlsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhaWwgcG9zaXRpb249J3JpZ2h0JyBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0aWNreSBvZmZzZXQ9ezEwMH0gYm90dG9tT2Zmc2V0PXsxMDB9IGNvbnRleHQ9e3RoaXMuY29udGV4dFJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9wdXAgcG9zaXRpb249J2xlZnQgY2VudGVyJyB0cmlnZ2VyPXs8QnV0dG9uIHNpemU9J2xhcmdlJyBjaXJjdWxhciBpY29uPSdmb250JyAvPn0gZmxvd2luZyBob3ZlcmFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCB0ZXh0QWxpZ249J2xlZnQnIGRpdmlkZWQgY29sdW1ucz17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHRleHRBbGlnbj0nbGVmdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9J2g0Jz5CYWNrZ3JvdW5kPC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbHVtbnM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNoYW5nZUJhY2tncm91bmQoJyNmZmYnLCAnI2Y1ZjdmYScpfSBjbGFzc05hbWU9J3JlYWQtc2V0dGluZ193aGl0ZS1jb2xvcl9fM1pURTQnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2VCYWNrZ3JvdW5kKCcjZmZmNmRmJywgJyNmZmY5ZWInKX0gY2xhc3NOYW1lPSdyZWFkLXNldHRpbmdfb3JhbmdlLWNvbG9yX18zY2hpeCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNoYW5nZUJhY2tncm91bmQoJyNlYmY5ZWInLCAnI2YyZjlmMicpfSBjbGFzc05hbWU9J3JlYWQtc2V0dGluZ19ncmVlbi1jb2xvcl9fV1RqRDcnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2VCYWNrZ3JvdW5kKCcjMjMyMzIzJywgJyMxYTFhMWEnKX0gY2xhc3NOYW1lPSdyZWFkLXNldHRpbmdfYmxhY2stY29sb3JfXzNLbUlWJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gdGV4dEFsaWduPSdsZWZ0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlciBhcz0naDQnPkZvbnQgU2l6ZTwvSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb2x1bW5zPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uLkdyb3VwIHNpemU9J2xhcmdlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlZ3JlZSgxKX0+QS08L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbi5PciB0ZXh0PXt0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5mb250c2l6ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlZ3JlZSgyKX0+QSs8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IG9uQ2hhbmdlPXsoZSwgZGF0YSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2VGb250KGUsIGRhdGEpfSBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMubm92ZWxSZWR1Y2VyLmZvbnR9IG9wdGlvbnM9e2NvdW50cnlPcHRpb25zfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3B1cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlTmlnaHRNb2RlKHRoaXMucHJvcHMubm92ZWxSZWR1Y2VyLm5pZ2h0bW9kZSl9IHNpemU9J2xhcmdlJyBjaXJjdWxhciBpY29uPXt0aGlzLnByb3BzLm5vdmVsUmVkdWNlci5uaWdodG1vZGUgPyAnbGlnaHRidWxiIG91dGxpbmUnIDogJ21vb24nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0aWNreT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhaWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lZGlhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lZGlhQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVkaWEgZ3JlYXRlclRoYW49J21vYmlsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93IHZlcnRpY2FsQWxpZ249J21pZGRsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24uR3JvdXAgd2lkdGhzPSczJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e2AvZG9jLyR7dGhpcy5wcm9wcy5ub3ZlbGNoYXB0ZXIuaWRub3ZlbHN9JHt0aGlzLnN0YXRlLnByZWNoYXB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2RvYy9baWRdL1tjaGFwdGVyXWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdodWdlJyBjb2xvcj0nYmxhY2snIGRpc2FibGVkPXt0aGlzLnN0YXRlLnByZWNoYXAgIT09IFwiXCIgPyBmYWxzZSA6IHRydWV9IGxhYmVsUG9zaXRpb249J2xlZnQnIGljb249J2xlZnQgY2hldnJvbicgY29udGVudD0nUHJldiBjaGFwdGVyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9ub3ZlbC8ke3RoaXMucHJvcHMubm92ZWxjaGFwdGVyLmlkbm92ZWxzfS8xYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL25vdmVsL1tpZF0vMWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdodWdlJyBjb2xvcj0nYmxhY2snIGljb249J2JhcnMnIGNvbnRlbnQ9J0NoYXB0ZXIgTGlzdCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e2AvZG9jLyR7dGhpcy5wcm9wcy5ub3ZlbGNoYXB0ZXIuaWRub3ZlbHN9JHt0aGlzLnN0YXRlLm5leHRjaGFwfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9kb2MvW2lkXS9bY2hhcHRlcl1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT0naHVnZScgY29sb3I9J2JsYWNrJyBkaXNhYmxlZD17dGhpcy5zdGF0ZS5uZXh0Y2hhcCAhPT0gXCJcIiA/IGZhbHNlIDogdHJ1ZX0gbGFiZWxQb3NpdGlvbj0ncmlnaHQnIGljb249J3JpZ2h0IGNoZXZyb24nIGNvbnRlbnQ9J05leHQgY2hhcHRlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVkaWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVkaWEgYXQ9J21vYmlsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93IG1vYmlsZT17MTZ9IHRhYmxldD17MTZ9IGNvbXB1dGVyPXsxNn0gdmVydGljYWxBbGlnbj0nbWlkZGxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cCB3aWR0aHM9JzMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9kb2MvJHt0aGlzLnByb3BzLm5vdmVsY2hhcHRlci5pZG5vdmVsc30ke3RoaXMuc3RhdGUucHJlY2hhcH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvZG9jL1tpZF0vW2NoYXB0ZXJdYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9J2h1Z2UnIGNvbG9yPSdibGFjaycgZGlzYWJsZWQ9e3RoaXMuc3RhdGUucHJlY2hhcCAhPT0gXCJcIiA/IGZhbHNlIDogdHJ1ZX0gbGFiZWxQb3NpdGlvbj0nbGVmdCcgaWNvbj0nbGVmdCBjaGV2cm9uJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9ub3ZlbC8ke3RoaXMucHJvcHMubm92ZWxjaGFwdGVyLmlkbm92ZWxzfS8xYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL25vdmVsL1tpZF0vMWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdodWdlJyBjb2xvcj0nYmxhY2snIGljb249J2JhcnMnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YC9kb2MvJHt0aGlzLnByb3BzLm5vdmVsY2hhcHRlci5pZG5vdmVsc30ke3RoaXMuc3RhdGUubmV4dGNoYXB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2RvYy9baWRdL1tjaGFwdGVyXWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdodWdlJyBjb2xvcj0nYmxhY2snIGRpc2FibGVkPXt0aGlzLnN0YXRlLm5leHRjaGFwICE9PSBcIlwiID8gZmFsc2UgOiB0cnVlfSBsYWJlbFBvc2l0aW9uPSdyaWdodCcgaWNvbj0ncmlnaHQgY2hldnJvbicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVkaWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVkaWFDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5vdmVsUmVkdWNlcjogc3RhdGUubm92ZWxSZWR1Y2VyXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBzYXZlTm92ZWwsIHNldHRpbmdOb3ZlbCB9KShDaGFwdGVyKTsiXSwic291cmNlUm9vdCI6IiJ9