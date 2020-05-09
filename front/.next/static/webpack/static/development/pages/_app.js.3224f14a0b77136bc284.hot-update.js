webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

function appGetInitialProps(_ref) {
  var Component, ctx, pageProps;
  return _regeneratorRuntime.async(function appGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          Component = _ref.Component, ctx = _ref.ctx;
          _context.next = 3;
          return _regeneratorRuntime.awrap((0, _utils.loadGetInitialProps)(Component, ctx));

        case 3:
          pageProps = _context.sent;
          return _context.abrupt("return", {
            pageProps: pageProps
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

var App = /*#__PURE__*/function (_react$default$Compon) {
  _inherits(App, _react$default$Compon);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "componentDidCatch",
    // Kept here for backwards compatibility.
    // When someone ended App they could call `super.componentDidCatch`.
    // @deprecated This method is no longer needed. Errors are caught at the top level
    value: function componentDidCatch(error, _errorInfo) {
      throw error;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          __N_SSG = _this$props.__N_SSG,
          __N_SSP = _this$props.__N_SSP;
      return _react["default"].createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
      // methods like getStaticProps and getServerSideProps
      !(__N_SSG || __N_SSP) ? {
        url: createUrl(router)
      } : {}));
    }
  }]);

  return App;
}(_react["default"].Component);

exports["default"] = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(function () {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(function () {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var pathname = router.pathname,
      asPath = router.asPath,
      query = router.query;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: function back() {
      if (true) warnUrl();
      router.back();
    },
    push: function push(url, as) {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: function pushTo(href, as) {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: function replace(url, as) {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: function replaceTo(href, as) {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-saga */ "./node_modules/next-redux-saga/dist/next-redux-saga.es.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_14__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;















var NodeBird = function NodeBird(_ref) {
  var Component = _ref.Component,
      store = _ref.store,
      pageProps = _ref.pageProps;
  return __jsx(next_app__WEBPACK_IMPORTED_MODULE_14__["Container"], null, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
    store: store
  }, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_13__["Helmet"], {
    title: "NodeBird",
    htmlAttributes: {
      lang: 'ko'
    },
    meta: [{
      charset: 'UTF-8'
    }, {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover'
    }, {
      'http-equiv': 'X-UA-Compatible',
      content: 'IE=edge'
    }, {
      name: 'description',
      content: ' NodeBird SNS'
    }, {
      name: 'og:title',
      content: 'NodeBird'
    }, {
      name: 'og:description',
      content: 'NodeBird SNS'
    }, {
      property: 'og:type',
      content: 'website'
    }],
    link: [{
      rel: 'shortcut icon',
      href: '/favicon.ico'
    }, {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css'
    }, {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
    }, {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
    }]
  }), __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(Component, pageProps))));
};

NodeBird.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType.isRequired,
  store: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
}; //getInitialProps를 사용할 수 있게 하는 사전 작업

NodeBird.getInitialProps = function _callee(context) {
  var ctx, Component, pageProps, cookie, state;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          ctx = context.ctx, Component = context.Component;
          console.log(ctx);
          pageProps = {};
          cookie = ctx.isServer ? ctx.req.headers.cookie : '';

          if (ctx.isServer && cookie) {
            axios__WEBPACK_IMPORTED_MODULE_12___default.a.defaults.headers.Cookie = cookie;
          }

          state = ctx.store.getState();

          if (!state.user.me) {
            ctx.store.dispatch({
              type: _reducers_user__WEBPACK_IMPORTED_MODULE_11__["LOAD_USER_REQUEST"]
            });
          }

          if (!Component.getInitialProps) {
            _context.next = 11;
            break;
          }

          _context.next = 10;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Component.getInitialProps(ctx));

        case 10:
          pageProps = _context.sent;

        case 11:
          return _context.abrupt("return", {
            pageProps: pageProps
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

var configureStore = function configureStore(initialState, options) {
  var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_9__["default"])();
  var middlewares = [sagaMiddleware, function (store) {
    return function (next) {
      return function (action) {
        console.log(action);
        next(action);
      };
    };
  }];
  var enhancer = false ? undefined : Object(redux__WEBPACK_IMPORTED_MODULE_8__["compose"])(redux__WEBPACK_IMPORTED_MODULE_8__["applyMiddleware"].apply(void 0, middlewares), !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (f) {
    return f;
  });
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_8__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_6__["default"], initialState, enhancer); //withReduxSaga할 때 필요

  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_10__["default"]);
  return store;
}; //redux를 사용하기 위해 store를 사용해야하는데 그 store를 만들어주는 부분


/* harmony default export */ __webpack_exports__["default"] = (Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__["default"])(configureStore)(Object(next_redux_saga__WEBPACK_IMPORTED_MODULE_5__["default"])(NodeBird)));

/***/ })

})
//# sourceMappingURL=_app.js.3224f14a0b77136bc284.hot-update.js.map