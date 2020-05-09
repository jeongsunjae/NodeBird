webpackHotUpdate("static\\development\\pages\\_app.js",{

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
            _context.next = 10;
            break;
          }

          _context.next = 9;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Component.getInitialProps(ctx));

        case 9:
          pageProps = _context.sent;

        case 10:
          return _context.abrupt("return", {
            pageProps: pageProps
          });

        case 11:
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
//# sourceMappingURL=_app.js.5b7c3113159fc041ffd8.hot-update.js.map