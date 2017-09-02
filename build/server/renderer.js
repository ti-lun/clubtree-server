module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8888/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 4 */
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 5 */
/*!************************************************!*\
  !*** ./node_modules/gluestick/shared/index.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setStatusCode = exports.set404StatusCode = exports.getHttpClient = exports.prepareRoutesWithTransitionHooks = exports.createStore = exports.BodyAttributes = exports.Root = undefined;

var _routeHelper = __webpack_require__(/*! ./lib/route-helper */ 18);

Object.keys(_routeHelper).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _routeHelper[key];
    }
  });
});

var _constants = __webpack_require__(/*! ./lib/constants */ 47);

Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _constants[key];
    }
  });
});

var _actions = __webpack_require__(/*! ./lib/actions */ 19);

Object.defineProperty(exports, 'set404StatusCode', {
  enumerable: true,
  get: function get() {
    return _actions.set404StatusCode;
  }
});
Object.defineProperty(exports, 'setStatusCode', {
  enumerable: true,
  get: function get() {
    return _actions.setStatusCode;
  }
});

var _Root2 = __webpack_require__(/*! ./containers/Root */ 48);

var _Root3 = _interopRequireDefault(_Root2);

var _BodyAttributes2 = __webpack_require__(/*! ./components/BodyAttributes */ 51);

var _BodyAttributes3 = _interopRequireDefault(_BodyAttributes2);

var _createStore2 = __webpack_require__(/*! ./lib/createStore */ 53);

var _createStore3 = _interopRequireDefault(_createStore2);

var _prepareRoutesWithTransitionHooks2 = __webpack_require__(/*! ./lib/prepareRoutesWithTransitionHooks */ 20);

var _prepareRoutesWithTransitionHooks3 = _interopRequireDefault(_prepareRoutesWithTransitionHooks2);

var _getHttpClient2 = __webpack_require__(/*! ./lib/getHttpClient */ 58);

var _getHttpClient3 = _interopRequireDefault(_getHttpClient2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Root = _Root3.default;
exports.BodyAttributes = _BodyAttributes3.default;
exports.createStore = _createStore3.default;
exports.prepareRoutesWithTransitionHooks = _prepareRoutesWithTransitionHooks3.default;
exports.getHttpClient = _getHttpClient3.default;

/***/ }),
/* 6 */
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {



/***/ }),
/* 7 */
/*!********************************************!*\
  !*** ./src/apps/main/components/Header.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(/*! reactstrap */ 4);

var _entirelogo = __webpack_require__(/*! ../assets/images/site-logo/entirelogo.png */ 24);

var _entirelogo2 = _interopRequireDefault(_entirelogo);

__webpack_require__(/*! ../assets/css/header.scss */ 82);

var _propTypes = __webpack_require__(/*! prop-types */ 14);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.generateLinkStyle = function (type) {
      switch (type) {
        case "signup":
          return "signup";
        default:
          return "main";
      }
    };

    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "header" },
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            null,
            _react2.default.createElement("img", { src: _entirelogo2.default, width: "50%" })
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            null,
            _react2.default.createElement(
              "span",
              { className: this.generateLinkStyle(this.props.type) },
              _react2.default.createElement(
                "span",
                { className: "explore" },
                _react2.default.createElement(
                  "a",
                  { href: "/search" },
                  "EXPLORE"
                )
              ),
              "\xA0 | \xA0",
              _react2.default.createElement(
                "span",
                { className: "find" },
                _react2.default.createElement(
                  "a",
                  { href: "/advancedsearch" },
                  "FEATURED"
                )
              )
            )
          ),
          this.props.type !== "signup" ? _react2.default.createElement(
            _reactstrap.Col,
            null,
            _react2.default.createElement(
              _reactstrap.Button,
              { className: "btn-teal" },
              "Log in"
            ),
            " ",
            _react2.default.createElement(
              _reactstrap.Button,
              { className: "btn-red" },
              "Sign up"
            )
          ) : null,
          _react2.default.createElement(
            _reactstrap.Col,
            null,
            _react2.default.createElement("i", { className: "fa fa-2x fa-search", "aria-hidden": "true", style: { color: "#FFFFFF" } })
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

Header.PropTypes = {
  type: _propTypes2.default.string
};
exports.default = Header;

/***/ }),
/* 8 */
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 9 */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 10 */
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 11 */
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 12 */
/*!***********************************************!*\
  !*** ./src/apps/main/components/SearchBar.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ 1);

var _redux = __webpack_require__(/*! redux */ 2);

var _index = __webpack_require__(/*! ../actions/index */ 13);

var _reactstrap = __webpack_require__(/*! reactstrap */ 4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = function (_Component) {
  _inherits(SearchBar, _Component);

  function SearchBar(props) {
    _classCallCheck(this, SearchBar);

    var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

    _this.state = { term: "" };

    _this.onInputChange = _this.onInputChange.bind(_this);
    _this.onFormSubmit = _this.onFormSubmit.bind(_this);
    return _this;
  }

  _createClass(SearchBar, [{
    key: "onInputChange",
    value: function onInputChange(event) {
      //Whenever the application senses a change in input (someone presses a key)
      // it will re-render the component to display the updated input
      this.setState({ term: event.target.value });
    }
  }, {
    key: "onFormSubmit",
    value: function onFormSubmit(event) {
      event.preventDefault();

      //We want the application to fetch information from our club API and display
      //information tailored to the user's inputted search parameters. We also
      //make sure to clear the search bar, so that the user can more easily make
      //another search request w/o having to delete their previous query
      this.props.simpleSearchClub(this.state.term);

      this.setState({ term: "" });
    }
  }, {
    key: "render",
    value: function render() {
      var searchButton = this.props.searchBarStyleId === "search" ? _react2.default.createElement(
        "a",
        { href: "/search?term=" + this.state.term },
        _react2.default.createElement(
          _reactstrap.Button,
          { className: "btn-red" },
          "Search"
        )
      ) : null;

      return _react2.default.createElement(
        "div",
        { className: "text-center" },
        _react2.default.createElement(_reactstrap.Input, {
          type: "text",
          placeholder: this.props.searchBarStyleId === "search" ? "Search for clubs@UCI:" : null,
          id: this.props.searchBarStyleId,
          value: this.state.term,
          onChange: this.onInputChange,
          autoFocus: true
        }),
        searchButton
      );
    }
  }]);

  return SearchBar;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(null, function (dispatch) {
  return (0, _redux.bindActionCreators)({ simpleSearchClub: _index.simpleSearchClub }, dispatch);
})(SearchBar);

/***/ }),
/* 13 */
/*!****************************************!*\
  !*** ./src/apps/main/actions/index.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


//Import axios to more easily perform GET requests to API's

var CLUB_URL = "/clubs/";
var SIMPLE_SEARCH_CLUB = exports.SIMPLE_SEARCH_CLUB = "SIMPLE_SEARCH_CLUB";
var ADD_CLUB_CATEGORY = exports.ADD_CLUB_CATEGORY = "ADD_CLUB_CATEGORY";

var simpleSearchClub = exports.simpleSearchClub = function simpleSearchClub(query) {
  return {
    type: SIMPLE_SEARCH_CLUB,
    payload: query
  };
};

var toggleClubCategory = exports.toggleClubCategory = function toggleClubCategory(category) {
  return {
    type: ADD_CLUB_CATEGORY,
    category: category
  };
};

/***/ }),
/* 14 */
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 15 */
/*!*************************************!*\
  !*** ./src/apps/main/lib/consts.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VIBES = exports.CATEGORIES_ICONS_MAP = exports.COLORS = undefined;

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COLORS = exports.COLORS = ["#e61610", "#ff3823", "#00bcd4", "#72bec9"];

var CATEGORIES_ICONS_MAP = exports.CATEGORIES_ICONS_MAP = {
  "Academic & Honors": "graduation-cap",
  "Career & Professional": "suitcase",
  "Sports": "futbol-o",
  "Community Service": "handshake-o",
  "Art": "paint-brush",
  "Environmental": "tree",
  "Social": "commenting",
  "Gaming": "gamepad"
};

var VIBES = exports.VIBES = {
  "Group tightness": ["Close-knit", "Family", "Teamwork", "Low commitment", "Casual"],
  "Energy": ["Wild", "Fun", "Chill", "Laid back", "Dynamic", "Exciting", "Relaxing"],
  "Personality": ["Professional", "Intellectual", "Adventurous", "Party", "Intense", "Artsy", "Nerdy", "Safe space", "Compassionate"]
};

/***/ }),
/* 16 */
/*!********************************************!*\
  !*** ./src/apps/main/assets/css/style.css ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {



/***/ }),
/* 17 */
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 18 */
/*!***********************************************************!*\
  !*** ./node_modules/gluestick/shared/lib/route-helper.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runBeforeRoutes = runBeforeRoutes;
exports.createTransitionHook = createTransitionHook;

var _reactRouter = __webpack_require__(/*! react-router */ 8);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getBeforeRoute = function getBeforeRoute() {
  var component = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var c = component.WrappedComponent || component;
  // @deprecated since 0.0.1
  // check for deprecated fetchData method
  if (c.fetchData) {
    console.warn('`fetchData` is deprecated. Please use `gsBeforeRoute` instead.');
  }

  return c.gsBeforeRoute || c.fetchData;
};

function getRouteComponents(routes) {
  var components = [];
  routes.forEach(function (route) {
    if (route.components) {
      Object.values(route.components).forEach(function (c) {
        return components.push(c);
      });
    } else if (route.component) {
      components.push(route.component);
    }
  });

  return components;
}

/**
 * @param {ReduxStore} store the redux store
 * @param {Object} renderProps render properties
 * @param {Object} [serverProps] server specific properties
 * @param {Boolean} [serverProps.isServer] whether or not we are running from the
 * server
 * @param {Express.Request} [serverProps.request] if we are on the server, the
 * server request that triggered the method
 */
function runBeforeRoutes(store, renderProps) {
  var serverProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { isServer: false };
  var params = renderProps.params,
      query = renderProps.location;


  var promises = getRouteComponents(renderProps.routes).map(getBeforeRoute).filter(function (f) {
    return f;
  }) // only look at ones with a static gsBeforeRoute()
  .map(function (beforeRoute) {
    return beforeRoute(store, params, query || {}, serverProps);
  }); // call fetch data methods and save promises

  return Promise.all(promises);
}

function createTransitionHook(store, routes) {
  return function checkLocation(location, cb) {
    var _this = this;

    (0, _reactRouter.match)({ routes: routes, location: location }, function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(error, redirectLocation, renderProps) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!redirectLocation) {
                  _context.next = 3;
                  break;
                }

                checkLocation(redirectLocation, cb);
                return _context.abrupt('return');

              case 3:
                _context.prev = 3;
                _context.next = 6;
                return runBeforeRoutes(store, renderProps);

              case 6:
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context['catch'](3);

                console.error(_context.t0);

              case 11:
                _context.prev = 11;

                cb();
                return _context.finish(11);

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[3, 8, 11, 14]]);
      }));

      return function (_x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }());
  };
}

/***/ }),
/* 19 */
/*!******************************************************!*\
  !*** ./node_modules/gluestick/shared/lib/actions.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set404StatusCode = set404StatusCode;
exports.setStatusCode = setStatusCode;
var SET_STATUS_CODE = exports.SET_STATUS_CODE = 'SET_STATUS_CODE';

function set404StatusCode() {
  return setStatusCode(404);
}

function setStatusCode(statusCode) {
  return {
    type: SET_STATUS_CODE,
    statusCode: statusCode
  };
}

/***/ }),
/* 20 */
/*!*******************************************************************************!*\
  !*** ./node_modules/gluestick/shared/lib/prepareRoutesWithTransitionHooks.js ***!
  \*******************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(/*! react-router */ 8);

var _TransitionHooks = __webpack_require__(/*! ../components/TransitionHooks */ 50);

var _TransitionHooks2 = _interopRequireDefault(_TransitionHooks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-undef
exports.default = function (routes) {
  return _react2.default.createElement(
    _reactRouter.Route,
    { name: 'TransitionHooks', component: _TransitionHooks2.default },
    routes
  );
};

/***/ }),
/* 21 */
/*!*******************************************************!*\
  !*** ./node_modules/gluestick/build/plugins/utils.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getRenderMethod = function _getRenderMethod(plugins, logger) {
  var renderMethods = plugins.filter(function (plugin) {
    return typeof plugin.renderMethod === 'function';
  }).map(function (_ref) {
    var renderMethod = _ref.renderMethod;
    return renderMethod;
  });
  if (renderMethods.length > 1) {
    logger.warn('You have more than one render method!');
  }
  if (renderMethods && renderMethods.length > 0) {
    return renderMethods[renderMethods.length - 1];
  }
  return null;
};

var _getCustomLogger = function _getCustomLogger(plugins) {
  var loggers = plugins.filter(function (plugin) {
    return plugin.logger;
  }).map(function (_ref2) {
    var logger = _ref2.logger;
    return logger;
  });
  if (loggers && loggers.length > 0) {
    return loggers[loggers.length - 1];
  }
  return null;
};

module.exports = function (logger) {
  return {
    getRenderMethod: function getRenderMethod(plugins) {
      return _getRenderMethod(plugins, logger);
    },
    getCustomLogger: _getCustomLogger
  };
};

/***/ }),
/* 22 */
/*!***********************************!*\
  !*** ./src/config/application.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


// WARNING: The contents of this file _including process.env variables_ will be
// exposed in the client code.

var headContent = {
  title: "My Gluestick App",
  titleTemplate: "%s | Gluestick Application",
  meta: [{ name: "description", content: "Gluestick application" }]
};

var config = {
  development: {
    head: headContent,
    proxies: [{
      path: '/api/*',
      destination: 'http://localhost:3000/'
    }],
    logger: {
      pretty: true,
      level: "info"
    }
  },
  production: {
    head: headContent,
    logger: {
      pretty: false,
      level: "warn"
    }
  }
};

exports.default = config[process.env.NODE_ENV === "production" ? "production" : "development"];

/***/ }),
/* 23 */
/*!******************************!*\
  !*** ./gluestick/entries.js ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plugins = undefined;

var _Index = __webpack_require__(/*! src/apps/main/Index.js */ 71);

var _Index2 = _interopRequireDefault(_Index);

var _routes = __webpack_require__(/*! src/apps/main/routes.js */ 73);

var _routes2 = _interopRequireDefault(_routes);

var _reducers = __webpack_require__(/*! src/apps/main/reducers */ 99);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var plugins = exports.plugins = [];

exports.default = {
  "/": {
    component: _Index2.default,
    routes: _routes2.default,
    reducers: _reducers2.default
  }

};

/***/ }),
/* 24 */
/*!**************************************************************!*\
  !*** ./src/apps/main/assets/images/site-logo/entirelogo.png ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "entirelogo-1e48d127cdaa27643435d3fd4154c993.png";

/***/ }),
/* 25 */
/*!**************************************************!*\
  !*** ./src/apps/main/components/VibeSelector.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _consts = __webpack_require__(/*! ../lib/consts */ 15);

var _reactstrap = __webpack_require__(/*! reactstrap */ 4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VibeSelector = function (_Component) {
  _inherits(VibeSelector, _Component);

  function VibeSelector() {
    _classCallCheck(this, VibeSelector);

    return _possibleConstructorReturn(this, (VibeSelector.__proto__ || Object.getPrototypeOf(VibeSelector)).apply(this, arguments));
  }

  _createClass(VibeSelector, [{
    key: "render",
    value: function render() {
      var generatedVibes = [];
      var index = 0;
      for (var key in _consts.VIBES) {
        generatedVibes.push(_react2.default.createElement(
          "h4",
          null,
          key
        ));

        for (var item in _consts.VIBES[key]) {
          generatedVibes.push(_react2.default.createElement(
            _reactstrap.Button,
            { className: "btn",
              style: {
                backgroundColor: _consts.COLORS[index],
                border: 0,
                color: "white",
                fontSize: "14px",
                margin: "0px 5px 5px 5px",
                borderRadius: "10px",
                padding: "10px 15px 10px 15px"
              } },
            _consts.VIBES[key][item]
          ));
        }
        index++;
      }

      return _react2.default.createElement(
        "div",
        null,
        generatedVibes
      );
    }
  }]);

  return VibeSelector;
}(_react.Component);

exports.default = VibeSelector;

/***/ }),
/* 26 */
/*!*******************************************************!*\
  !*** ./src/apps/main/actions/searchResultsActions.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SIMPLE_SEARCH_CLUB = undefined;
exports.simpleSearchClub = simpleSearchClub;

var _axios = __webpack_require__(/*! axios */ 10);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLUB_URL = "/clubs/";
var SIMPLE_SEARCH_CLUB = exports.SIMPLE_SEARCH_CLUB = "SIMPLE_SEARCH_CLUB";

function simpleSearchClub(query) {
  var request = _axios2.default.get("" + CLUB_URL + query);
  return {
    type: SIMPLE_SEARCH_CLUB,
    payload: request
  };
}

/***/ }),
/* 27 */
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 28 */
/*!**********************************************!*\
  !*** ./src/apps/main/assets/css/signup.scss ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {



/***/ }),
/* 29 */
/*!****************************************!*\
  !*** ./src/config/redux-middleware.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


// Gluestick has already included thunk and a custom Promise middleware; any
// middleware added here will be added after those.
//
// Example:
// import createLogger from 'redux-logger';
// const logger = createLogger();
// export default [logger];
exports.default = [];
var thunkMiddleware = exports.thunkMiddleware = null;

/***/ }),
/* 30 */
/*!********************************************************!*\
  !*** ./node_modules/gluestick/build/renderer/entry.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(/*! util */ 31);

// Read config from command line arguments.


var config = JSON.parse(process.argv[2] || '{}');

// Prepare logger.
var loggerFactory = function loggerFactory(type) {
  if (process.env.NODE_ENV === 'production') {
    return function () {
      for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }

      var log = type.toUpperCase() + ': ' + values.reduce(function (prev, curr) {
        return prev.concat(typeof curr === 'string' ? curr : util.inspect(curr, { depth: 4 }));
      }, '');
      process.stdout.write(log + '\n');
    };
  }
  return function () {
    for (var _len2 = arguments.length, values = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      values[_key2] = arguments[_key2];
    }

    var stringfiedValues = JSON.stringify(values, function (key, value) {
      return typeof value === 'function' ? '[Function: ' + value.name + ']' : value;
    });
    // $FlowFixMe
    process.send({ type: type, value: stringfiedValues });
  };
};
var logger = {
  info: loggerFactory('info'),
  success: loggerFactory('success'),
  error: loggerFactory('error'),
  warn: loggerFactory('warn'),
  debug: loggerFactory('debug')
};

// Exec renderer server.
__webpack_require__(/*! babel-polyfill */ 32);
__webpack_require__(/*! ./main */ 33)({ config: config, logger: logger });

/***/ }),
/* 31 */
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 32 */
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 33 */
/*!*******************************************************!*\
  !*** ./node_modules/gluestick/build/renderer/main.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(/*! path */ 9);

/**
 * To import/require file from project use aliases:
 *   root, src, actions, assets, components, containers, reducers, config
 * To import/require renderer server file use relative paths.
 */

var express = __webpack_require__(/*! express */ 34);
var compression = __webpack_require__(/*! compression */ 35);
var middleware = __webpack_require__(/*! ./middleware */ 36);
var readAssets = __webpack_require__(/*! ./helpers/readAssets */ 69);
var onFinished = __webpack_require__(/*! on-finished */ 70);
// $FlowIgnore
var applicationConfig = __webpack_require__(/*! application-config */ 22).default;
var entries = __webpack_require__(/*! project-entries */ 23).default;
// $FlowIgnore
var entriesConfig = __webpack_require__(/*! project-entries-config */ 103);
// $FlowIgnore
var EntryWrapper = __webpack_require__(/*! entry-wrapper */ 104).default;
// $FlowIgnore
var projectHooks = __webpack_require__(/*! gluestick-hooks */ 110).default;
var BodyWrapper = __webpack_require__(/*! ./components/Body */ 111).default;
var reduxMiddlewares = __webpack_require__(/*! redux-middlewares */ 29).default;
// $FlowIgnore
var thunkMiddleware = __webpack_require__(/*! redux-middlewares */ 29).thunkMiddleware;
// $FlowIgnore
var entriesPlugins = __webpack_require__(/*! project-entries */ 23).plugins;
// $FlowIgnore
var cachingConfig = __webpack_require__(/*! caching-config */ 112).default;

var hooksHelper = __webpack_require__(/*! ./helpers/hooks */ 113);
var prepareServerPlugins = __webpack_require__(/*! ../plugins/prepareServerPlugins */ 114);
var createPluginUtils = __webpack_require__(/*! ../plugins/utils */ 21);
var setProxies = __webpack_require__(/*! ./helpers/setProxies */ 116);

var envVariables = process.env.ENV_VARIABLES && Array.isArray(process.env.ENV_VARIABLES) ? process.env.ENV_VARIABLES : [];

module.exports = function (_ref) {
  var config = _ref.config,
      logger = _ref.logger;

  var pluginUtils = createPluginUtils(logger);
  var serverPlugins = prepareServerPlugins(logger, entriesPlugins);

  // Use custom logger from plugins or default logger.
  var customLogger = pluginUtils.getCustomLogger(serverPlugins);

  // Merge hooks from project and plugins' hooks.
  var hooks = hooksHelper.merge(projectHooks, serverPlugins);

  // Developers can add an optional hook that
  // includes script with initialization stuff.
  if (hooks.preInitServer) {
    hooksHelper.call(hooks.preInitServer);
  }

  // Get runtime plugins that will be passed to EntryWrapper.
  var runtimePlugins = entriesPlugins.filter(function (plugin) {
    return plugin.type === 'runtime';
  }).map(function (plugin) {
    return plugin.ref;
  });

  var app = express();
  app.use(compression());
  app.use('/assets', express.static(path.join(process.cwd(), config.GSConfig.buildAssetsPath)));

  setProxies(app, applicationConfig.proxies, logger);

  if (process.env.NODE_ENV !== 'production') {
    app.get('/gluestick-proxy-poll', function (req, res) {
      // allow requests from our client side loading page
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.status(200).json({ up: true });
    });
  }

  app.use(function (req, res, next) {
    // Use SSR middleware only for entries/app routes
    if (!Object.keys(entries).find(function (key) {
      return req.url.startsWith(key);
    })) {
      next();
      return;
    }

    if (customLogger) {
      customLogger.info({ req: req });
      onFinished(res, function (err, response) {
        if (err) {
          customLogger.error(err);
        } else {
          customLogger.info({ res: response });
        }
      });
    }

    readAssets(config.GSConfig.buildAssetsPath + '/' + config.GSConfig.webpackChunks).then(function (assets) {
      return middleware({ config: config, logger: logger }, req, res, { entries: entries, entriesConfig: entriesConfig, entriesPlugins: runtimePlugins }, { EntryWrapper: EntryWrapper, BodyWrapper: BodyWrapper }, { assets: assets, loadjsConfig: applicationConfig.loadjs || {} }, {
        reduxMiddlewares: reduxMiddlewares,
        thunkMiddleware: thunkMiddleware,
        envVariables: envVariables,
        httpClient: applicationConfig.httpClient || {},
        entryWrapperConfig: {}
      }, { hooks: hooks, hooksHelper: hooksHelper.call }, serverPlugins, cachingConfig);
    }).catch(function (error) {
      logger.error(error);
      res.sendStatus(500);
    });
  });

  // Call express App Hook which accept app as param.
  hooksHelper.call(hooks.postServerRun, app);

  // 404 handler
  // @TODO: support custom 404 error page
  app.use(function (req, res) {
    logger.warn(req.method + ' ' + req.url + ' was not found');
    res.sendStatus(404);
  });

  var server = app.listen(config.GSConfig.ports.server);

  logger.success('Renderer listening on port ' + config.GSConfig.ports.server + '.');
  process.on('exit', function () {
    server.close();
  });
  process.on('SIGINT', function () {
    server.close();
  });
};

/***/ }),
/* 34 */
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 35 */
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 36 */
/*!*************************************************************!*\
  !*** ./node_modules/gluestick/build/renderer/middleware.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _asyncToGenerator(fn) {
  return function () {
    var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);var value = info.value;
        } catch (error) {
          reject(error);return;
        }if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }return step("next");
    });
  };
}

var render = __webpack_require__(/*! ./render */ 38);

var getRequirementsFromEntry = __webpack_require__(/*! ./helpers/getRequirementsFromEntry */ 43);
var matchRoute = __webpack_require__(/*! ./helpers/matchRoute */ 46);

var _require = __webpack_require__(/*! ../../shared */ 5);

var getHttpClient = _require.getHttpClient,
    createStore = _require.createStore,
    runBeforeRoutes = _require.runBeforeRoutes;

var _require2 = __webpack_require__(/*! ./helpers/helpText */ 60);

var showHelpText = _require2.showHelpText,
    MISSING_404_TEXT = _require2.MISSING_404_TEXT;

var setHeaders = __webpack_require__(/*! ./response/setHeaders */ 61);
var errorHandler = __webpack_require__(/*! ./helpers/errorHandler */ 63);
var getCacheManager = __webpack_require__(/*! ./helpers/cacheManager */ 65);
var getStatusCode = __webpack_require__(/*! ./response/getStatusCode */ 68);
var createPluginUtils = __webpack_require__(/*! ../plugins/utils */ 21);

var isProduction = process.env.NODE_ENV === 'production';

module.exports = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(_ref3, req, res, _ref4, _ref5, _ref6) {
    var config = _ref3.config,
        logger = _ref3.logger;
    var entries = _ref4.entries,
        entriesConfig = _ref4.entriesConfig,
        entriesPlugins = _ref4.entriesPlugins;
    var EntryWrapper = _ref5.EntryWrapper,
        BodyWrapper = _ref5.BodyWrapper;
    var assets = _ref6.assets,
        loadjsConfig = _ref6.loadjsConfig;
    var options = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {
      envVariables: [],
      httpClient: {},
      entryWrapperConfig: {},
      reduxMiddlewares: [],
      thunkMiddleware: null
    };
    var _ref7 = arguments[7];
    var hooks = _ref7.hooks,
        hooksHelper = _ref7.hooksHelper;
    var serverPlugins = arguments[8];
    var cachingConfig = arguments[9];

    var cacheManager, cachedBeforeHooks, cached, requirementsBeforeHooks, requirements, httpClientOptions, httpClient, reduxOptions, store, _ref2, redirectLocation, renderProps, renderPropsAfterHooks, currentRouteBeforeHooks, currentRoute, renderMethod, pluginUtils, renderMethodFromPlugins, statusCode, outputBeforeHooks, output;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            /**
             * TODO: better logging
             */
            cacheManager = getCacheManager(logger, isProduction);
            _context.prev = 1;

            // If we have cached item then render it.
            cacheManager.enableComponentCaching(cachingConfig);
            cachedBeforeHooks = cacheManager.getCachedIfProd(req);

            if (!cachedBeforeHooks) {
              _context.next = 8;
              break;
            }

            cached = hooksHelper(hooks.preRenderFromCache, cachedBeforeHooks);

            res.send(cached);
            return _context.abrupt("return", Promise.resolve());

          case 8:
            requirementsBeforeHooks = getRequirementsFromEntry({ config: config, logger: logger }, req, entries);
            requirements = hooksHelper(hooks.postRenderRequirements, requirementsBeforeHooks);
            httpClientOptions = requirements.config && requirements.config.httpClient ? requirements.config.httpClient : options.httpClient;
            httpClient = getHttpClient(httpClientOptions, req, res);

            // Allow to specify different redux config

            reduxOptions = requirements.config && requirements.config.reduxOptions ? requirements.config.reduxOptions : {
              middlewares: options.reduxMiddlewares,
              thunk: options.thunkMiddleware
            };
            store = createStore(httpClient, function () {
              return requirements.reducers;
            }, reduxOptions.middlewares, function (cb) {
              return module.hot &&
              // $FlowFixMe
              module.hot.accept(entriesConfig[requirements.key].reducers, cb);
            },
            // $FlowFixMe
            !!module.hot, reduxOptions.thunk);
            _context.next = 16;
            return matchRoute({ config: config, logger: logger }, req, requirements.routes, store, httpClient);

          case 16:
            _ref2 = _context.sent;
            redirectLocation = _ref2.redirectLocation, renderProps = _ref2.renderProps;
            renderPropsAfterHooks = hooksHelper(hooks.postRenderProps, renderProps);

            if (!redirectLocation) {
              _context.next = 23;
              break;
            }

            hooksHelper(hooks.preRedirect, redirectLocation);
            res.redirect(301, "" + redirectLocation.pathname + redirectLocation.search);
            return _context.abrupt("return", Promise.resolve());

          case 23:
            if (renderPropsAfterHooks) {
              _context.next = 27;
              break;
            }

            // This is only hit if there is no 404 handler in the react routes. A
            // not found handler is included by default in new projects.
            showHelpText(MISSING_404_TEXT, logger);
            res.sendStatus(404);
            return _context.abrupt("return", Promise.resolve());

          case 27:
            _context.next = 29;
            return runBeforeRoutes(store, renderPropsAfterHooks, {
              isServer: true,
              request: req
            });

          case 29:
            currentRouteBeforeHooks = renderPropsAfterHooks.routes[renderPropsAfterHooks.routes.length - 1];
            currentRoute = hooksHelper(hooks.postGetCurrentRoute, currentRouteBeforeHooks);

            setHeaders(res, currentRoute);

            renderMethod = void 0;
            pluginUtils = createPluginUtils(logger);
            renderMethodFromPlugins = serverPlugins && pluginUtils.getRenderMethod(serverPlugins);

            if (renderMethodFromPlugins) {
              renderMethod = renderMethodFromPlugins;
            }

            statusCode = getStatusCode(store, currentRoute);
            outputBeforeHooks = render({ config: config, logger: logger }, req, {
              EntryPoint: requirements.Component,
              entryName: requirements.name,
              store: store,
              routes: requirements.routes,
              httpClient: httpClient
            }, { renderProps: renderPropsAfterHooks, currentRoute: currentRoute }, {
              EntryWrapper: EntryWrapper,
              BodyWrapper: BodyWrapper,
              entriesPlugins: entriesPlugins,
              entryWrapperConfig: options.entryWrapperConfig,
              envVariables: options.envVariables
            }, { assets: assets, loadjsConfig: loadjsConfig, cacheManager: cacheManager }, { renderMethod: renderMethod });
            output = hooksHelper(hooks.postRender, outputBeforeHooks);

            res.status(statusCode).send(output.responseString);
            return _context.abrupt("return", Promise.resolve());

          case 43:
            _context.prev = 43;
            _context.t0 = _context["catch"](1);

            hooksHelper(hooks.error, _context.t0);
            logger.error(_context.t0 instanceof Error ? _context.t0.stack : _context.t0);
            errorHandler({ config: config, logger: logger }, req, res, _context.t0);

          case 48:
            return _context.abrupt("return", Promise.resolve());

          case 49:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 43]]);
  }));

  return function (_x, _x2, _x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ 37)(module)))

/***/ }),
/* 37 */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 38 */
/*!*********************************************************!*\
  !*** ./node_modules/gluestick/build/renderer/render.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ 0);

var _require = __webpack_require__(/*! react-router */ 8);

var RouterContext = _require.RouterContext;

var Oy = __webpack_require__(/*! oy-vey */ 39).default;

var _require2 = __webpack_require__(/*! react-dom/server */ 40);

var renderToString = _require2.renderToString,
    renderToStaticMarkup = _require2.renderToStaticMarkup;

var linkAssets = __webpack_require__(/*! ./helpers/linkAssets */ 41);

var getRenderer = function getRenderer(isEmail, renderMethod) {
  if (renderMethod) {
    return renderMethod;
  }
  return isEmail ? renderToStaticMarkup : renderToString;
};

module.exports = function (context, req, _ref, _ref2, _ref3, _ref4) {
  var EntryPoint = _ref.EntryPoint,
      entryName = _ref.entryName,
      store = _ref.store,
      routes = _ref.routes,
      httpClient = _ref.httpClient;
  var renderProps = _ref2.renderProps,
      currentRoute = _ref2.currentRoute;
  var EntryWrapper = _ref3.EntryWrapper,
      BodyWrapper = _ref3.BodyWrapper,
      entryWrapperConfig = _ref3.entryWrapperConfig,
      envVariables = _ref3.envVariables,
      entriesPlugins = _ref3.entriesPlugins;
  var assets = _ref4.assets,
      loadjsConfig = _ref4.loadjsConfig,
      cacheManager = _ref4.cacheManager;

  var _ref5 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {},
      renderMethod = _ref5.renderMethod;

  var _linkAssets = linkAssets(context, entryName, assets, loadjsConfig);

  var styleTags = _linkAssets.styleTags,
      scriptTags = _linkAssets.scriptTags;

  var isEmail = !!currentRoute.email;
  var routerContext = React.createElement(RouterContext, renderProps);
  var rootWrappers = entriesPlugins.filter(function (plugin) {
    return plugin.meta.wrapper;
  }).map(function (_ref6) {
    var plugin = _ref6.plugin;
    return plugin;
  });
  var entryWrapper = React.createElement(EntryWrapper, {
    store: store,
    routerContext: routerContext,
    config: entryWrapperConfig,
    getRoutes: routes,
    httpClient: httpClient,
    rootWrappers: rootWrappers,
    rootWrappersOptions: {
      userAgent: req.headers['user-agent']
    }
  });

  // grab the react generated body stuff. This includes the
  // script tag that hooks up the client side react code.
  var currentState = store.getState();

  var renderResults = getRenderer(isEmail, renderMethod)(entryWrapper, styleTags);
  var bodyWrapperContent = renderMethod ? renderResults.body : renderResults;
  var bodyWrapper = React.createElement(BodyWrapper, {
    html: bodyWrapperContent,
    initialState: currentState,
    isEmail: isEmail,
    envVariables: envVariables,
    scriptTags: scriptTags
  });

  // Grab the html from the project which is stored in the root
  // folder named Index.js. Pass the body and the head to that
  // component. `head` includes stuff that we want the server to
  // always add inside the <head> tag.
  //
  // Bundle it all up into a string, add the doctype and deliver
  var rootElement = React.createElement(EntryPoint, {
    body: bodyWrapper,
    head: isEmail ? null : renderResults.head || styleTags,
    req: req
  });

  var docType = currentRoute.docType || '<!doctype html>';

  var responseString = void 0;
  if (isEmail) {
    var generateCustomTemplate = function generateCustomTemplate(_ref7) {
      var bodyContent = _ref7.bodyContent;

      return '' + docType + bodyContent;
    };
    responseString = Oy.renderTemplate(rootElement, {}, generateCustomTemplate);
  } else {
    responseString = '' + docType + renderToStaticMarkup(rootElement);
  }
  if (currentRoute.cache) {
    cacheManager.setCacheIfProd(req, responseString, currentRoute.cacheTTL);
  }
  return {
    responseString: responseString,
    rootElement: rootElement };
};

/***/ }),
/* 39 */
/*!*************************!*\
  !*** external "oy-vey" ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("oy-vey");

/***/ }),
/* 40 */
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 41 */
/*!*********************************************************************!*\
  !*** ./node_modules/gluestick/build/renderer/helpers/linkAssets.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var React = __webpack_require__(/*! react */ 0);

var path = __webpack_require__(/*! path */ 9);
var fs = __webpack_require__(/*! fs */ 11);
var getAssetsLoader = __webpack_require__(/*! ./getAssetsLoader */ 42);

var getAssetPathForFile = function getAssetPathForFile(filename, section, webpackAssets) {
  var assets = webpackAssets[section] || {};
  var webpackPath = assets[filename];
  return webpackPath;
};

var filterEntryName = function filterEntryName(name) {
  if (name === '/') {
    return 'main';
  }
  var match = /\/(.*)/.exec(name);
  return match ? match[1] : name;
};

var getBundleName = function getBundleName(_ref) {
  var config = _ref.config;

  var manifestFilename = process.env.GS_VENDOR_MANIFEST_FILENAME || '';
  var buildDllPath = config.GSConfig.buildDllPath;

  var manifestPath = path.join(process.cwd(), buildDllPath, manifestFilename);
  // Can't require it, because it will throw an error on server

  var _JSON$parse = JSON.parse(fs.readFileSync(manifestPath).toString());

  var name = _JSON$parse.name;
  // $FlowIgnore Server is compiled by webpack, so then we have access to webpack's public path

  var publicPath = __webpack_require__.p || '/assets/'; // eslint-disable-line
  return publicPath + 'dlls/' + name.replace('_', '-') + '.dll.js';
};

module.exports = function (_ref2, entryPoint, assets, loadjsConfig) {
  var config = _ref2.config;

  var styleTags = [];
  var scriptTags = [];
  var key = 0;
  var entryPointName = filterEntryName(entryPoint);

  var stylesHref = getAssetPathForFile(entryPointName, 'styles', assets);
  if (stylesHref) {
    styleTags.push(React.createElement('link', { key: key++, rel: 'stylesheet', type: 'text/css', href: stylesHref }));
  }
  var vendorStylesHref = getAssetPathForFile('vendor', 'styles', assets);
  if (vendorStylesHref) {
    styleTags.push(React.createElement('link', {
      key: key++,
      rel: 'stylesheet',
      type: 'text/css',
      href: vendorStylesHref
    }));
  }

  var vendorBundleHref = getAssetPathForFile('vendor', 'javascript', assets) || getBundleName({ config: config });
  var entryPointBundleHref = getAssetPathForFile(entryPointName, 'javascript', assets);
  var assetsLoader = getAssetsLoader(_extends({ before: function before() {} }, loadjsConfig), entryPointBundleHref, vendorBundleHref);
  scriptTags.push(React.createElement('script', {
    key: 'script-loader',
    type: 'text/javascript'
    // eslint-disable-next-line react/no-danger
    , dangerouslySetInnerHTML: { __html: assetsLoader }
  }));

  return { styleTags: styleTags, scriptTags: scriptTags };
};

/***/ }),
/* 42 */
/*!**************************************************************************!*\
  !*** ./node_modules/gluestick/build/renderer/helpers/getAssetsLoader.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var serialize = __webpack_require__(/*! serialize-javascript */ 17);

/**
 * Returns script tag content with code for loading bundles in right order.
 */
module.exports = function (loadjsConfig, entryPointBundle, vendorBundle) {
  return '\nvar config = ' + serialize(loadjsConfig) + ';\nvar loadjs=function(){function e(e,n){e=e.push?e:[e];var t,r,o,i,c=[],s=e.length,h=s;for(t=function(e,t){t.length&&c.push(e),h--,h||n(c)};s--;)r=e[s],o=u[r],o?t(r,o):(i=f[r]=f[r]||[],i.push(t))}function n(e,n){if(e){var t=f[e];if(u[e]=n,t)for(;t.length;)t[0](e,n),t.splice(0,1)}}function t(e,n,r,o){var c,u,f=document,s=r.async,h=(r.numRetries||0)+1,a=r.before||i;o=o||0,/.css$/.test(e)?(c=!0,u=f.createElement("link"),u.rel="stylesheet",u.href=e):(u=f.createElement("script"),u.src=e,u.async=void 0===s||s),u.onload=u.onerror=u.onbeforeload=function(i){var f=i.type[0];if(c&&"hideFocus"in u)try{u.sheet.cssText.length||(f="e")}catch(e){f="e"}return"e"==f&&(o+=1,o<h)?t(e,n,r,o):void n(e,f,i.defaultPrevented)},a(e,u),f.head.appendChild(u)}function r(e,n,r){e=e.push?e:[e];var o,i,c=e.length,u=c,f=[];for(o=function(e,t,r){if("e"==t&&f.push(e),"b"==t){if(!r)return;f.push(e)}c--,c||n(f)},i=0;i<u;i++)t(e[i],o,r)}function o(e,t,o){var u,f;if(t&&t.trim&&(u=t),f=(u?o:t)||{},u){if(u in c)throw new Error("LoadJS");c[u]=!0}r(e,function(e){e.length?(f.error||i)(e):(f.success||i)(),n(u,e)},f)}var i=function(){},c={},u={},f={};return o.ready=function(n,t){return e(n,function(e){e.length?(t.error||i)(e):(t.success||i)()}),o},o.done=function(e){n(e,[])},o}();\n\nvar loadEntryPoint = function() {\n  loadjs(\'' + entryPointBundle + '\', {\n    error: function() { throw new Error(\'Failed to load ' + entryPointBundle + '\'); },\n    before: config.before,\n    numRetries: 10\n  });\n};\n\nvar loadVendorThenEntry = function() {\n  loadjs(\'' + vendorBundle + '\', {\n    success: loadEntryPoint,\n    error: function() { throw new Error(\'Failed to load ' + vendorBundle + '\'); },\n    before: config.before,\n    numRetries: 10\n  });\n};\n\ndocument.addEventListener(\'DOMContentLoaded\', function() {\n  loadVendorThenEntry();\n});\n';
};

/***/ }),
/* 43 */
/*!***********************************************************************************!*\
  !*** ./node_modules/gluestick/build/renderer/helpers/getRequirementsFromEntry.js ***!
  \***********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parseURL = __webpack_require__(/*! url */ 44).parse;

var isChildPath = __webpack_require__(/*! ./isChildPath */ 45);
/**
 * Sort through all of the entry points based on the number of `/` characters
 * found in the url. It will test the most deeply nested entry points first
 * while finally falling back to the default index parameter.
 */
var getSortedEntries = function getSortedEntries(entries) {
  return Object.keys(entries).sort(function (a, b) {
    var bSplitLength = b.split('/').length;
    var aSplitLength = a.split('/').length;
    if (bSplitLength === aSplitLength) {
      return b.length - a.length;
    }
    return bSplitLength - aSplitLength;
  });
};

/**
 * This method takes the server request object, determines which entry point
 * the server should use for rendering and then prepares the necessary
 * variables that the server needs to render. These variables include Index,
 * store, getRoutes and fileName.
 */
module.exports = function (_ref, req, entries) {
  var logger = _ref.logger;

  var _parseURL = parseURL(req.url);

  var urlPath = _parseURL.path;

  var sortedEntries = getSortedEntries(entries);

  /**
   * Loop through the sorted entry points and return the variables that the
   * server needs to render based on the best matching entry point.
   */
  var entryName = sortedEntries.find(function (entryPath) {
    return isChildPath(entryPath, urlPath || '');
  });

  if (entryName) {
    logger.debug('Found entry for path ' + entryName);
  }
  if (!entryName) {
    throw new Error('No matching entry definition found for \'' + req.url + '\'');
  }

  return {
    Component: entries[entryName].component,
    reducers: entries[entryName].reducers,
    routes: entries[entryName].routes,
    config: entries[entryName].config || null,
    name: entries[entryName].name || entryName,
    key: entryName
  };
};

/***/ }),
/* 44 */
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 45 */
/*!**********************************************************************!*\
  !*** ./node_modules/gluestick/build/renderer/helpers/isChildPath.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(/*! path */ 9);

var cache = {};

module.exports = function (parent, child) {
  var childWithoutQuery = child.split('?')[0];
  var key = parent + '-' + childWithoutQuery;
  var cacheResult = cache[key];

  if (cacheResult) {
    return cacheResult;
  }

  if (parent === '/') {
    cache[key] = true;
    return cache[key];
  }

  cache[key] = path.relative(parent, child).substr(0, 1) !== '.';
  return cache[key];
};

/***/ }),
/* 46 */
/*!*********************************************************************!*\
  !*** ./node_modules/gluestick/build/renderer/helpers/matchRoute.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(/*! react-router */ 8);

var match = _require.match;

var _require2 = __webpack_require__(/*! ../../../shared */ 5);

var prepareRoutesWithTransitionHooks = _require2.prepareRoutesWithTransitionHooks;

module.exports = function (context, req, getRoutes, store, httpClient) {
  return new Promise(function (resolve, reject) {
    var routes = prepareRoutesWithTransitionHooks(getRoutes(store, httpClient));
    match({ routes: routes, location: req.url }, function (error, redirectLocation, renderProps) {
      if (error) {
        reject(error);
        return;
      }

      resolve({ redirectLocation: redirectLocation, renderProps: renderProps });
    });
  });
};

/***/ }),
/* 47 */
/*!********************************************************!*\
  !*** ./node_modules/gluestick/shared/lib/constants.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ROUTE_NAME_404_NOT_FOUND = exports.ROUTE_NAME_404_NOT_FOUND = 'ROUTE_NAME_404_NOT_FOUND';

/***/ }),
/* 48 */
/*!**********************************************************!*\
  !*** ./node_modules/gluestick/shared/containers/Root.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(/*! react-router */ 8);

var _reactRedux = __webpack_require__(/*! react-redux */ 1);

var _reactRouterScroll = __webpack_require__(/*! react-router-scroll */ 49);

var _prepareRoutesWithTransitionHooks = __webpack_require__(/*! ../lib/prepareRoutesWithTransitionHooks */ 20);

var _prepareRoutesWithTransitionHooks2 = _interopRequireDefault(_prepareRoutesWithTransitionHooks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Root = function (_Component) {
  _inherits(Root, _Component);

  function Root(props) {
    _classCallCheck(this, Root);

    var _this = _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).call(this, props));

    _this.state = {
      mounted: false
    };

    _this.router = _this._renderRouter(props);
    return _this;
  }

  _createClass(Root, [{
    key: '_setMounted',
    value: function _setMounted() {
      this.setState({ mounted: true });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._setMounted();
    }
  }, {
    key: 'render',
    value: function render() {
      var store = this.props.store;


      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        this.router
      );
    }
  }, {
    key: '_renderRouter',
    value: function _renderRouter(props) {
      // server rendering
      if (props.routerContext) return props.routerContext;

      // router middleware
      var render = (0, _reactRouter.applyRouterMiddleware)((0, _reactRouterScroll.useScroll)(function (prevRouterProps, _ref) {
        var location = _ref.location,
            routes = _ref.routes;

        // Initial render - skip scrolling
        if (!prevRouterProps) {
          return false;
        }

        // If the user provides custom scroll behaviour, use it, otherwise fallback to the default
        // behaviour.

        var _ref2 = routes.find(function (route) {
          return route.useScroll;
        }) || {},
            customScrollBehavior = _ref2.useScroll;

        if (typeof customScrollBehavior === 'function') {
          return customScrollBehavior(prevRouterProps, location);
        } else if (customScrollBehavior) {
          throw new Error('useScroll prop must be a function');
        }

        // Do not scroll on route change if a `ignoreScrollBehavior` prop is set to true on
        // route components in the app. e.g.
        // <Route ignoreScrollBehavior={true} path="mypage" component={MyComponent} />
        if (routes.some(function (route) {
          return route.ignoreScrollBehavior;
        })) {
          return false;
        }
        return true;
      }));

      var routes = props.routes,
          routerHistory = props.routerHistory;


      return _react2.default.createElement(
        _reactRouter.Router,
        { history: routerHistory, render: render },
        (0, _prepareRoutesWithTransitionHooks2.default)(routes)
      );
    }
  }]);

  return Root;
}(_react.Component);

Root.propTypes = {
  /* eslint-disable */
  routes: _react.PropTypes.object,
  routerHistory: _react.PropTypes.any,
  routerContext: _react.PropTypes.object,
  store: _react.PropTypes.object
  /* eslint-enable */
};
Root.defaultProps = {
  routerHistory: typeof window !== 'undefined' ? _reactRouter.browserHistory : null
};
exports.default = Root;

/***/ }),
/* 49 */
/*!**************************************!*\
  !*** external "react-router-scroll" ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-router-scroll");

/***/ }),
/* 50 */
/*!*********************************************************************!*\
  !*** ./node_modules/gluestick/shared/components/TransitionHooks.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _routeHelper = __webpack_require__(/*! ../lib/route-helper */ 18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TransitionHooks = function (_Component) {
  _inherits(TransitionHooks, _Component);

  function TransitionHooks() {
    _classCallCheck(this, TransitionHooks);

    return _possibleConstructorReturn(this, (TransitionHooks.__proto__ || Object.getPrototypeOf(TransitionHooks)).apply(this, arguments));
  }

  _createClass(TransitionHooks, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var routes = this.props.routes;
      var _context = this.context,
          store = _context.store,
          router = _context.router;

      this.unListenBefore = router.listenBefore((0, _routeHelper.createTransitionHook)(store, routes));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unListenBefore();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);

  return TransitionHooks;
}(_react.Component);

TransitionHooks.contextTypes = {
  router: _react.PropTypes.object.isRequired,
  store: _react.PropTypes.object.isRequired
};
exports.default = TransitionHooks;

/***/ }),
/* 51 */
/*!********************************************************************!*\
  !*** ./node_modules/gluestick/shared/components/BodyAttributes.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _reactSideEffect = __webpack_require__(/*! react-side-effect */ 52);

var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var supportedHTML4Attributes = {
  bgColor: 'bgcolor'
};

var BodyAttributes = function (_Component) {
  _inherits(BodyAttributes, _Component);

  function BodyAttributes() {
    _classCallCheck(this, BodyAttributes);

    return _possibleConstructorReturn(this, (BodyAttributes.__proto__ || Object.getPrototypeOf(BodyAttributes)).apply(this, arguments));
  }

  _createClass(BodyAttributes, [{
    key: 'render',
    value: function render() {
      return _react.Children.only(this.props.children);
    }
  }]);

  return BodyAttributes;
}(_react.Component);

BodyAttributes.propTypes = {
  children: _react.PropTypes.node.isRequired
};

function reducePropsToState(propsList) {
  var attrs = {};
  propsList.forEach(function (props) {
    var transformedAttrs = transformHTML4Props(props);
    Object.assign(attrs, props, transformedAttrs);
  });
  return attrs;
}

function handleStateChangeOnClient(attrs) {
  for (var _key in attrs) {
    if (document.body) {
      if (_key === 'className') {
        document.body.setAttribute('class', attrs[_key]);
      } else {
        document.body.setAttribute(_key, attrs[_key]);
      }
    }
  }
}

function transformHTML4Props(props) {
  var transformedProps = {};

  /*
   * Provide support for HTML4 attributes on the body tag for
   * e-mail purposes. Convert tags to ones oy-vey can translate
   * during the render.
   *
   * Note: Only attributes that are white-listed by oy-vey will be rendered
   *
   */
  Object.keys(supportedHTML4Attributes).forEach(function (propName) {
    if (Object.prototype.hasOwnProperty.call(props, propName)) {
      var name = supportedHTML4Attributes[propName];
      var value = props[propName];
      var transformedProp = _defineProperty({}, 'data-oy-' + name, value);
      Object.assign(transformedProps, transformedProp);
    }
  });
  return transformedProps;
}

exports.default = (0, _reactSideEffect2.default)(reducePropsToState, handleStateChangeOnClient)(BodyAttributes);

/***/ }),
/* 52 */
/*!************************************!*\
  !*** external "react-side-effect" ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-side-effect");

/***/ }),
/* 53 */
/*!**********************************************************!*\
  !*** ./node_modules/gluestick/shared/lib/createStore.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (client, customRequire, customMiddleware, hotCallback, devMode, thunkMiddleware) {
  var reducer = (0, _redux.combineReducers)(Object.assign({}, { _gluestick: _reducers2.default }, customRequire()));

  var middleware = [(0, _promiseMiddleware2.default)(client),
  // Using OR operator instead of default argument, since null value will be casted to false
  thunkMiddleware || _reduxThunk2.default];

  // Include middleware that will warn when you mutate the state object
  // but only include it in dev mode
  if (devMode) {
    middleware.push(__webpack_require__(/*! redux-immutable-state-invariant */ 54).default());
  }

  // When `customMiddleware` is of type `function`, pass it current
  // array of `middlewares` and expect a new value in return.
  // Fallback to default behaviour.
  middleware = typeof customMiddleware === 'function' ? customMiddleware([].concat(_toConsumableArray(middleware))) : middleware.concat(customMiddleware);

  var composeArgs = [_redux.applyMiddleware.apply(this, middleware), (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && typeof window.devToolsExtension !== 'undefined' && process.env.NODE_ENV !== 'production' ? window.devToolsExtension() : function (f) {
    return f;
  }];

  var finalCreateStore = _redux.compose.apply(undefined, composeArgs)(_redux.createStore);
  var store = finalCreateStore(reducer, typeof window !== 'undefined' ? window.__INITIAL_STATE__ : {});

  if (hotCallback) {
    hotCallback(function () {
      var nextReducer = (0, _redux.combineReducers)(Object.assign({}, { _gluestick: _reducers2.default }, customRequire()));
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

var _reduxThunk = __webpack_require__(/*! redux-thunk */ 55);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _redux = __webpack_require__(/*! redux */ 2);

var _reducers = __webpack_require__(/*! ./reducers */ 56);

var _reducers2 = _interopRequireDefault(_reducers);

var _promiseMiddleware = __webpack_require__(/*! ../lib/promiseMiddleware */ 57);

var _promiseMiddleware2 = _interopRequireDefault(_promiseMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ }),
/* 54 */
/*!**************************************************!*\
  !*** external "redux-immutable-state-invariant" ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("redux-immutable-state-invariant");

/***/ }),
/* 55 */
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 56 */
/*!*******************************************************!*\
  !*** ./node_modules/gluestick/shared/lib/reducers.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = _gluestick;

var _actions = __webpack_require__(/*! ./actions */ 19);

var INITIAL_STATE = {};

/**
 * This reducer handles GlueStick server-side actions.
 *
 * It also exists to prevent an error when no other reducers have been added.
 */
function _gluestick() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _actions.SET_STATUS_CODE:
      {
        return _extends({}, state, {
          statusCode: action.statusCode
        });
      }
    default:
      return state;
  }
}

/***/ }),
/* 57 */
/*!****************************************************************!*\
  !*** ./node_modules/gluestick/shared/lib/promiseMiddleware.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var promiseMiddleware = function promiseMiddleware(client) {
  return function () {
    return function (next) {
      return function (action) {
        var promise = action.promise,
            type = action.type,
            rest = _objectWithoutProperties(action, ['promise', 'type']);

        if (!promise) {
          return next(action);
        }

        var SUCCESS = type;
        var INIT = type + '_INIT';
        var FAILURE = type + '_FAILURE';

        next(_extends({}, rest, { type: INIT }));

        var getPromise = typeof promise === 'function' ? promise : function () {
          return promise;
        };

        return getPromise(client).then(function (payload) {
          next(_extends({}, rest, { payload: payload, type: SUCCESS }));
          return payload || true;
        }, function (error) {
          next(_extends({}, rest, { error: error, type: FAILURE }));
          return false;
        });
      };
    };
  };
};

exports.default = promiseMiddleware;

/***/ }),
/* 58 */
/*!************************************************************!*\
  !*** ./node_modules/gluestick/shared/lib/getHttpClient.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = getHttpClient;

var _axios = __webpack_require__(/*! axios */ 10);

var _axios2 = _interopRequireDefault(_axios);

var _cookies = __webpack_require__(/*! ./cookies */ 59);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * @param {Object} options axios configuration options
 * @param {Express.Request} [request] optional request object. If provided,
 * headers will be merged
 * https://github.com/mzabriskie/axios#request-config
 * @param {axios} [httpClient] optionally override axios (used for tests/mocking)
 */
function getHttpClient() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var req = arguments[1];
  var res = arguments[2];
  var httpClient = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _axios2.default;

  var headers = options.headers,
      modifyInstance = options.modifyInstance,
      httpConfig = _objectWithoutProperties(options, ['headers', 'modifyInstance']);

  var client = void 0;

  // If there is no request object then we are in the browser and we don't need
  // to worry about cookies but we still need to pass headers and options and
  // give developers a chance to modify the instance
  if (!req) {
    var defaultHeaders = httpClient.defaults.headers || {};
    client = httpClient.create(_extends({
      headers: _extends({}, defaultHeaders, headers)
    }, httpConfig));

    if (modifyInstance) {
      client = modifyInstance(client);
    }

    return client;
  }

  var protocol = req.secure ? 'https://' : 'http://';

  // If a request object is provided, then we want to merge the custom headers
  // with the headers that we sent from the browser in the request.
  client = httpClient.create(_extends({
    baseURL: protocol + req.headers.host,
    headers: _extends({}, req.headers, headers)
  }, httpConfig));

  var outgoingCookies = req.headers.cookie;
  var incomingCookies = '';

  // Send outgoing cookies received from the browser in each outgoing request
  // along with any new cookies that we have received in API calls to fullfill
  // this request.
  client.interceptors.request.use(function (config) {
    // convert incoming cookies to outgoing cookies, strip off the options with
    var newCookies = (0, _cookies.parse)(incomingCookies).map(function (c) {
      return c.toString(false);
    }).join('; ');
    var output = _extends({}, config, {
      headers: _extends({}, config.headers, {
        cookie: (0, _cookies.merge)(outgoingCookies, (0, _cookies.merge)(config.headers.cookie, newCookies))
      })
    });

    return output;
  });

  client.interceptors.response.use(function (response) {
    var cookiejar = response.headers['set-cookie'];

    if (Array.isArray(cookiejar)) {
      var cookieString = cookiejar.join('; ');

      // @TODO: This will append all of the cookies sent back from server side
      // requests in the initial page load. There is a potential issue if you are
      // hitting 3rd party APIs. If site A sets a cookie and site B sets a cookie
      // with the same key, then it will overwrite A's cookie and possibly create
      // undesired effects. Currently, the suggested solution for dealing with
      // this problem is to make the API requests to A or B in the browser and
      // not in gsBeforeRoute for apps where that is an issue.
      var mergedCookieString = (0, _cookies.merge)(incomingCookies, cookieString);
      var cookies = (0, _cookies.parse)(mergedCookieString);
      res.removeHeader('Set-Cookie');
      cookies.forEach(function (cookie) {
        res.append('Set-Cookie', cookie.toString());
      });

      // Ensure that any subsequent requests are passing the cookies.
      // This is for instances where there is no browser persisting the
      // cookies.
      //
      // @NOTE: This used to use the axios instance.defaults.headers… but it
      // turns out axios recycles that object and cookies were being leaked
      // across requests from different users! Now we just use our own string
      // and add it using the request interceptor.
      incomingCookies = mergedCookieString;
    }

    return response;
  });

  // Provide a hook where developers can have early access to the httpClient
  // instance so that they can do things like add interceptors.
  if (modifyInstance) {
    client = modifyInstance(client, res);
  }

  return client;
}

/***/ }),
/* 59 */
/*!******************************************************!*\
  !*** ./node_modules/gluestick/shared/lib/cookies.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.parse = parse;
exports.merge = merge;


var COOKIE_OPTS = {
  domain: function domain(v) {
    return v;
  },
  encode: function encode(v) {
    return v;
  },
  expires: function expires(v) {
    return new Date(v);
  },
  httpOnly: function httpOnly() {
    return true;
  },
  maxAge: function maxAge(v) {
    return Number(v);
  },
  path: function path(v) {
    return v;
  },
  secure: function secure() {
    return true;
  },
  signed: function signed() {
    return true;
  }
};

function Cookie() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  this.name = name;
  this.value = value;
  this.options = options;
}

// $FlowFixMe
Cookie.prototype.toString = function toString() {
  var _this = this;

  var incoming = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  if (!this.name) {
    return '';
  }

  var kvs = [this.name + '=' + encodeURIComponent(this.value)];
  var bvs = [];

  if (!incoming) {
    return kvs[0];
  }

  Object.keys(COOKIE_OPTS).forEach(function (attr) {
    var value = _this.options[attr];

    if (typeof value === 'boolean') {
      bvs.push(attr.charAt(0).toUpperCase() + attr.slice(1));
    } else if (typeof value !== 'undefined' && value) {
      kvs.push(attr + '=' + value);
    }
  });

  return kvs.concat(bvs).join('; ').trim();
};

function camelCase(string) {
  return string.replace(/-([a-z])/gi, function (match, l) {
    return l.toUpperCase();
  });
}

function parse(cookieString) {
  var cookies = [];
  var c = new Cookie();

  cookieString.split(';').forEach(function (s) {
    var m = /([\w%-.]+)=(.*)/g.exec(s.trim());
    var k = s.trim();
    var v = void 0;

    if (m !== null) {
      var _m$splice = m.splice(1);

      var _m$splice2 = _slicedToArray(_m$splice, 2);

      k = _m$splice2[0];
      v = _m$splice2[1];
    }

    var optionName = camelCase(k.charAt(0).toLowerCase() + k.slice(1));

    if (Object.hasOwnProperty.call(COOKIE_OPTS, optionName)) {
      var value = COOKIE_OPTS[optionName](v);
      c.options[optionName] = value;
    } else {
      if (c.name !== null) {
        cookies.push(c);
        c = new Cookie();
      }
      c.name = k;
      c.value = v && decodeURIComponent(v);
    }
  });
  cookies.push(c);

  return cookies;
}

function merge(oldCookieString, newCookieString) {
  var oldCookieJar = oldCookieString ? parse(oldCookieString) : [];
  var newCookieJar = newCookieString ? parse(newCookieString) : [];

  var merged = [];
  oldCookieJar.forEach(function (cookie) {
    if (!newCookieJar.some(function (c) {
      return c.name === cookie.name;
    })) {
      merged.push(cookie);
    }
  });
  return merged.concat(newCookieJar).join('; ').trim();
}

/***/ }),
/* 60 */
/*!*******************************************************************!*\
  !*** ./node_modules/gluestick/build/renderer/helpers/helpText.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MISSING_404_TEXT = 'MISSING_404_TEXT';

var showMissing404Text = function showMissing404Text(logger) {
  logger.info('\n#########################################################################################\nRendered a 404 Error but no custom 404 route detected.\nYou can create a custom 404 handler with the following steps:\n  1. Create a new container that you would like to use when rendering 404 errors.\n     > gluestick generate container RouteNotFound\n  2. Import this new container in the routes file along\n     with the \'ROUTE_NAME_404_NOT_FOUND\' constant.\n     import RouteNotFound from "../containers/RouteNotFound";\n     import { ROUTE_NAME_404_NOT_FOUND } from "gluestick-shared";\n  3. Add a new route that uses this constant and container as your very last route.\n      <Route name={"ROUTE_NAME_404_NOT_FOUND"} path="*" component={RouteNotFound} />\n#########################################################################################\n');
};

var helpTextHandlers = {
  MISSING_404_TEXT: showMissing404Text
};

var showHelpText = function showHelpText(key, logger) {
  helpTextHandlers[key](logger);
};

module.exports = {
  showHelpText: showHelpText,
  MISSING_404_TEXT: MISSING_404_TEXT
};

/***/ }),
/* 61 */
/*!**********************************************************************!*\
  !*** ./node_modules/gluestick/build/renderer/response/setHeaders.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getHeaders = __webpack_require__(/*! ./getHeaders */ 62);

module.exports = function (res, currentRoute) {
  var headers = getHeaders(currentRoute);
  if (headers) {
    res.set(headers);
  }
};

/***/ }),
/* 62 */
/*!**********************************************************************!*\
  !*** ./node_modules/gluestick/build/renderer/response/getHeaders.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (route) {
  if (!{}.hasOwnProperty.call(route, 'headers')) {
    return null;
  }

  return typeof route.headers === 'function' ? route.headers() : route.headers;
};

/***/ }),
/* 63 */
/*!***********************************************************************!*\
  !*** ./node_modules/gluestick/build/renderer/helpers/errorHandler.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) {
  return function () {
    var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);var value = info.value;
        } catch (error) {
          reject(error);return;
        }if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }return step("next");
    });
  };
}

var fs = __webpack_require__(/*! fs */ 11);
// We use handlebars to deliver the 500 page. This lets you
// use a handlebars template so you can display the stack trace or
// any request, response information you would like.

var Handlebars = __webpack_require__(/*! handlebars */ 64);

var tryReadFile = function tryReadFile(filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, 'utf8', function (error, data) {
      if (error) {
        if (error.code === 'ENOENT') resolve(false);
        reject(error);
      }
      resolve(data);
    });
  });
};

module.exports = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(_ref2, req, res, error) {
    var config = _ref2.config;
    var customTemplate, output;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res.status(error.status || 500);
            _context.prev = 1;
            _context.next = 4;
            return tryReadFile(config.GSConfig.customErrorTemplatePath);

          case 4:
            customTemplate = _context.sent;
            _context.t0 = customTemplate;

            if (_context.t0) {
              _context.next = 10;
              break;
            }

            _context.next = 9;
            return tryReadFile(config.GSConfig.defaultErrorTemplatePath);

          case 9:
            _context.t0 = _context.sent;

          case 10:
            output = _context.t0;

            if (output) {
              res.send(Handlebars.compile(output)({
                showStack: process.env.NODE_ENV !== 'production',
                req: req,
                res: res,
                error: error
              }));
            } else {
              res.sendStatus(501);
            }
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t1 = _context["catch"](1);

            res.sendStatus(500);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 14]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),
/* 64 */
/*!*****************************!*\
  !*** external "handlebars" ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("handlebars");

/***/ }),
/* 65 */
/*!***********************************************************************!*\
  !*** ./node_modules/gluestick/build/renderer/helpers/cacheManager.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LRU = __webpack_require__(/*! lru-cache */ 66);

var SSRCaching = __webpack_require__(/*! electrode-react-ssr-caching */ 67);

// Creating cache
var DEFAULT_TTL = 60 * 60;
var lruOptions = {
  maxAge: DEFAULT_TTL * 1000,
  max: 50
};
var _cache = LRU(lruOptions);

var getCacheKey = function getCacheKey(_ref) {
  var hostname = _ref.hostname,
      url = _ref.url;

  return '' + hostname + url;
};

module.exports = function (logger, isProduction) {
  var enableComponentCaching = function enableComponentCaching(config) {
    if (isProduction && config && config.components) {
      // only enable caching if componentCacheConfig has an object
      SSRCaching.enableCaching(true);
      SSRCaching.setCachingConfig(config);
    }
  };
  var getCachedIfProd = function getCachedIfProd(req) {
    var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _cache;

    if (isProduction) {
      var key = getCacheKey(req);
      var value = cache.get(key);
      if (value) {
        logger.debug('Get cached: ' + key);
        return value;
      }
    }
    return null;
  };
  var setCacheIfProd = function setCacheIfProd(req, value) {
    var maxAge = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_TTL;
    var cache = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _cache;

    if (isProduction) {
      var key = getCacheKey(req);
      logger.debug('Set cache: ' + key);
      cache.set(key, value, maxAge * 1000);
    }
  };
  return {
    getCachedIfProd: getCachedIfProd,
    setCacheIfProd: setCacheIfProd,
    enableComponentCaching: enableComponentCaching
  };
};

/***/ }),
/* 66 */
/*!****************************!*\
  !*** external "lru-cache" ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("lru-cache");

/***/ }),
/* 67 */
/*!**********************************************!*\
  !*** external "electrode-react-ssr-caching" ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("electrode-react-ssr-caching");

/***/ }),
/* 68 */
/*!*************************************************************************!*\
  !*** ./node_modules/gluestick/build/renderer/response/getStatusCode.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(/*! ../../../shared */ 5);

var ROUTE_NAME_404_NOT_FOUND = _require.ROUTE_NAME_404_NOT_FOUND;

module.exports = function (store, currentRoute) {
  var state = store.getState();
  // Check if status code was set in redux
  if (state._gluestick.statusCode && typeof state._gluestick.statusCode === 'number') {
    return state._gluestick.statusCode;
  } else if (state._gluestick.statusCode) {
    throw new Error('_gluestick.statusCode must be a number');
  }

  // Check if this is the 404 route
  // @deprecate in favor of route level status
  if (currentRoute.name === ROUTE_NAME_404_NOT_FOUND) {
    return 404;
  } else if (currentRoute.status) {
    // Check for something like <Route status={404} />
    return currentRoute.status;
  }

  return 200;
};

/***/ }),
/* 69 */
/*!*********************************************************************!*\
  !*** ./node_modules/gluestick/build/renderer/helpers/readAssets.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(/*! path */ 9);
var fs = __webpack_require__(/*! fs */ 11);

var cache = null;

module.exports = function (assetsPath) {
  return new Promise(function (resolve, reject) {
    if (process.env.NODE_ENV === 'production' && cache) {
      resolve(cache);
    } else {
      fs.readFile(path.join(process.cwd(), assetsPath), function (error, assetsBuffer) {
        if (error) {
          reject(error);
        } else {
          cache = JSON.parse(assetsBuffer.toString());
          resolve(cache);
        }
      });
    }
  });
};

/***/ }),
/* 70 */
/*!******************************!*\
  !*** external "on-finished" ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("on-finished");

/***/ }),
/* 71 */
/*!********************************!*\
  !*** ./src/apps/main/Index.js ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(/*! react-helmet */ 3);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _gluestick = __webpack_require__(/*! compiled/gluestick */ 5);

__webpack_require__(/*! compiled/normalize.css */ 72);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The index html will be generated from this file. You can customize things as
 * you see fit. 'body' and 'head will be generated by the server and you
 * should not remove those or the application will likely stop working.
 */
var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          head = _props.head,
          body = _props.body;


      var helmet = _reactHelmet2.default.rewind();
      var bodyAttributes = _gluestick.BodyAttributes.rewind();

      return _react2.default.createElement(
        "html",
        { lang: "en-US" },
        _react2.default.createElement(
          "head",
          null,
          _react2.default.createElement("link", { href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css", rel: "stylesheet" }),
          helmet.base.toComponent(),
          helmet.title.toComponent(),
          helmet.meta.toComponent(),
          helmet.link.toComponent(),
          helmet.script.toComponent(),
          helmet.style.toComponent(),
          head /* DO NOT REMOVE */
        ),
        _react2.default.createElement(
          "body",
          _extends({}, bodyAttributes, { style: { "background-color": "#f7f6f6" } }),
          body /* DO NOT REMOVE */
        )
      );
    }
  }]);

  return Index;
}(_react.Component);

Index.propTypes = {
  head: _react.PropTypes.any.isRequired,
  body: _react.PropTypes.any.isRequired
};
exports.default = Index;

/***/ }),
/* 72 */
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {



/***/ }),
/* 73 */
/*!*********************************!*\
  !*** ./src/apps/main/routes.js ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routes;

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ 74);

var _gluestick = __webpack_require__(/*! compiled/gluestick */ 5);

var _MasterLayout = __webpack_require__(/*! ./components/MasterLayout */ 75);

var _MasterLayout2 = _interopRequireDefault(_MasterLayout);

var _HomeApp = __webpack_require__(/*! ./containers/HomeApp */ 76);

var _HomeApp2 = _interopRequireDefault(_HomeApp);

var _NoMatchApp = __webpack_require__(/*! ./containers/NoMatchApp */ 83);

var _NoMatchApp2 = _interopRequireDefault(_NoMatchApp);

var _SearchResults = __webpack_require__(/*! ./containers/SearchResults */ 84);

var _SearchResults2 = _interopRequireDefault(_SearchResults);

var _ClubProfile = __webpack_require__(/*! ./containers/ClubProfile */ 89);

var _ClubProfile2 = _interopRequireDefault(_ClubProfile);

var _ClubCreation = __webpack_require__(/*! ./containers/ClubCreation */ 91);

var _ClubCreation2 = _interopRequireDefault(_ClubCreation);

var _AdvancedSearch = __webpack_require__(/*! ./containers/AdvancedSearch */ 93);

var _AdvancedSearch2 = _interopRequireDefault(_AdvancedSearch);

var _SignUp = __webpack_require__(/*! ./containers/SignUp */ 97);

var _SignUp2 = _interopRequireDefault(_SignUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function routes() /*store: Object, httpClient: Object*/{
  return _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { path: "/", component: _HomeApp2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: "/advancedsearch", component: _AdvancedSearch2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: "/club/:id", component: _ClubProfile2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: "/clubcreation", component: _ClubCreation2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: "/search", component: _SearchResults2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: "/joinus", component: _SignUp2.default }),
        _react2.default.createElement(_reactRouterDom.Route, {
          name: _gluestick.ROUTE_NAME_404_NOT_FOUND,
          path: "*",
          component: _NoMatchApp2.default
        })
      )
    )
  );
}

/***/ }),
/* 74 */
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 75 */
/*!**************************************************!*\
  !*** ./src/apps/main/components/MasterLayout.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(/*! react-helmet */ 3);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _application = __webpack_require__(/*! config/application */ 22);

var _application2 = _interopRequireDefault(_application);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MasterLayout = function (_Component) {
  _inherits(MasterLayout, _Component);

  function MasterLayout() {
    _classCallCheck(this, MasterLayout);

    return _possibleConstructorReturn(this, (MasterLayout.__proto__ || Object.getPrototypeOf(MasterLayout)).apply(this, arguments));
  }

  _createClass(MasterLayout, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_reactHelmet2.default, _application2.default.head),
        this.props.children
      );
    }
  }]);

  return MasterLayout;
}(_react.Component);

MasterLayout.propTypes = {
  children: _react.PropTypes.any
};
exports.default = MasterLayout;

/***/ }),
/* 76 */
/*!*********************************************!*\
  !*** ./src/apps/main/containers/HomeApp.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeApp = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(/*! redux */ 2);

var _reactRedux = __webpack_require__(/*! react-redux */ 1);

var _reactHelmet = __webpack_require__(/*! react-helmet */ 3);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

__webpack_require__(/*! compiled/bootstrap/dist/css/bootstrap.css */ 6);

var _FrontPage = __webpack_require__(/*! ../components/FrontPage */ 77);

var _FrontPage2 = _interopRequireDefault(_FrontPage);

var _Header = __webpack_require__(/*! ../components/Header */ 7);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeApp = exports.HomeApp = function (_Component) {
  _inherits(HomeApp, _Component);

  function HomeApp() {
    _classCallCheck(this, HomeApp);

    return _possibleConstructorReturn(this, (HomeApp.__proto__ || Object.getPrototypeOf(HomeApp)).apply(this, arguments));
  }

  _createClass(HomeApp, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_reactHelmet2.default, { title: "Home" }),
        _react2.default.createElement(_Header2.default, { type: "main" }),
        _react2.default.createElement(_FrontPage2.default, null)
      );
    }
  }], [{
    key: "gsBeforeRoute",

    /**
     * Called by ReactRouter before loading the container. Called prior to the
     * React life cycle so doesn't have access to component's props or state.
     *
     * @param {Object} store redux store object
     * @param {Object} renderProps render properties returned from ReactRouter
     * @param {Object} query location data
     * @param {Object} serverProps server specific properties
     * @param {Boolean} serverProps.isServer method running on server or not
     * @param {Request} [serverProps.request] express request if isServer
     *
     * @return {(Promise|undefined)} If this method returns a promise, the router
     * will wait for the promise to resolve before the container is loaded.
     */
    value: function gsBeforeRoute() /* {dispatch}, renderProps, query, serverProps */{}
  }]);

  return HomeApp;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function () {
  return (/* state */{
      /** _INSERT_STATE_  **/
    }
  );
}, function (dispatch) {
  return (0, _redux.bindActionCreators)({
    /** _INSERT_ACTION_CREATORS_ **/
  }, dispatch);
})(HomeApp);

/***/ }),
/* 77 */
/*!***********************************************!*\
  !*** ./src/apps/main/components/FrontPage.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _SearchBar = __webpack_require__(/*! ../components/SearchBar */ 12);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _nealReact = __webpack_require__(/*! neal-react */ 78);

var _reactstrap = __webpack_require__(/*! reactstrap */ 4);

var _entirelogo = __webpack_require__(/*! ../assets/images/site-logo/entirelogo.png */ 24);

var _entirelogo2 = _interopRequireDefault(_entirelogo);

var _milktea = __webpack_require__(/*! ../assets/images/homepage/milktea.jpg */ 79);

var _milktea2 = _interopRequireDefault(_milktea);

var _crowd = __webpack_require__(/*! ../assets/images/homepage/crowd.jpg */ 80);

var _crowd2 = _interopRequireDefault(_crowd);

var _updates = __webpack_require__(/*! ../assets/images/homepage/updates.jpg */ 81);

var _updates2 = _interopRequireDefault(_updates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var brandName = "SamplePage";
var brand = _react2.default.createElement(
  "span",
  null,
  brandName
);

var onSignup = function onSignup(_ref) {
  var name = _ref.name,
      email = _ref.email,
      password = _ref.password;
  return _nealReact.Stripe.StripeHandler.open({
    name: "Stripe Integration Included",
    description: "Like this? Donate $5 <3",
    panelLabel: "Donate {{amount}}",
    email: email,
    amount: 500
  });
};

var businessAddress = _react2.default.createElement(
  "address",
  null,
  _react2.default.createElement(
    "strong",
    null,
    brandName
  ),
  _react2.default.createElement("br", null),
  "1337 Market Street, Suite 1337",
  _react2.default.createElement("br", null),
  "San Francisco, CA 94103",
  _react2.default.createElement("br", null),
  "+1 (123) 456-7890"
);

var pricingPlan1 = {
  name: "Personal",
  description: "Describe your plans with easy-to-use pricing tables. Each plan provides callbacks to handle visitor clicks.",
  price: "$99",
  features: {
    "Describe pricing plans as JSON": true,
    "Features can be active/inactive": true,
    "Works on mobile": true,
    "Custom callbacks": true,
    "Extra Feature 1": false,
    "Extra Feature 2": false
  },
  onClick: onSignup
};

var pricingPlan2 = Object.assign({}, pricingPlan1, {
  price: "$499",
  name: "Startup",
  features: Object.assign({}, pricingPlan1.features, {
    "Extra Feature 1": true
  })
});

var pricingPlan3 = Object.assign({}, pricingPlan2, {
  price: "$999",
  name: "Enterprise",
  features: Object.assign({}, pricingPlan2.features, {
    "Extra Feature 2": true
  })
});

var FrontPage = function (_Component) {
  _inherits(FrontPage, _Component);

  function FrontPage(props) {
    _classCallCheck(this, FrontPage);

    var _this = _possibleConstructorReturn(this, (FrontPage.__proto__ || Object.getPrototypeOf(FrontPage)).call(this, props));

    _this.state = {
      content: [{
        img: "../images/homepage/front.jpg",
        description: "asdfsdf"
      }]
    };
    return _this;
  }

  _createClass(FrontPage, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _nealReact.Page,
        null,
        _react2.default.createElement(
          _nealReact.Hero,
          {
            id: "bootstrap-override-jumbotron",
            className: "text-xs-center home-initial-picture background-cover-center front-splash nopad-bottom",
            style: {
              margin: "0 !important",
              border: 0,
              height: "100%"
            }
          },
          _react2.default.createElement(
            "div",
            { id: "text-center" },
            _react2.default.createElement(
              "h1",
              { className: "front-splash-font", style: { color: "#f7f6f6" } },
              "Find your Clubtree."
            ),
            _react2.default.createElement(_SearchBar2.default, { searchBarStyleId: "search" })
          )
        ),
        _react2.default.createElement(
          _nealReact.Section,
          { className: "subhero home-intro" },
          _react2.default.createElement(
            _reactstrap.Row,
            null,
            _react2.default.createElement(
              _reactstrap.Col,
              { style: { verticalAlign: "middle" } },
              _react2.default.createElement(
                "span",
                { id: "intro-text", style: { color: "white" } },
                "Clubtree is..."
              )
            ),
            _react2.default.createElement(
              _reactstrap.Col,
              null,
              _react2.default.createElement(
                "p",
                { id: "intro-text-per" },
                "your promo flyers."
              ),
              _react2.default.createElement(
                "p",
                { id: "intro-text-per" },
                "your club announcements."
              ),
              _react2.default.createElement(
                "p",
                { id: "intro-text-per" },
                "your members and officers."
              ),
              _react2.default.createElement(
                "p",
                { id: "intro-text-per" },
                "all in one place."
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactstrap.Row,
          { style: { height: "100%", margin: 0 } },
          _react2.default.createElement(
            _reactstrap.Col,
            { id: "bootstrap-override-pic", md: "4", style: { margin: 0 } },
            _react2.default.createElement("img", { src: _milktea2.default, className: "img-responsive pic-sizes" })
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { id: "bootstrap-override-pic", md: "4", style: { margin: 0 } },
            _react2.default.createElement("img", { src: _crowd2.default, className: "img-responsive pic-sizes" })
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { id: "bootstrap-override-pic", md: "4", style: { margin: 0 } },
            _react2.default.createElement("img", { src: _updates2.default, className: "img-responsive pic-sizes" })
          )
        ),
        _react2.default.createElement(
          _reactstrap.Row,
          { style: { height: "100%", display: "flex" } },
          _react2.default.createElement(
            _reactstrap.Col,
            {
              className: "home-perks-description-one",
              id: "bootstrap-override-desc",
              style: { color: "#f7f6f6" }
            },
            "Easily find free food and club fundraisers"
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            {
              className: "home-perks-description-two",
              id: "bootstrap-override-desc",
              style: { color: "#f7f6f6" }
            },
            "Look for your type of crowd just a couple clicks away"
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            {
              className: "home-perks-description-three",
              id: "bootstrap-override-desc",
              style: { color: "#f7f6f6" }
            },
            "Get instantly updated on your favorite clubs"
          )
        ),
        _react2.default.createElement(
          _nealReact.Hero,
          { className: "home-organizer-picture background-cover-center text-center" },
          _react2.default.createElement(
            "h1",
            { className: "front-splash-font", style: { color: "#f7f6f6" } },
            "Are you a club organizer?"
          )
        ),
        _react2.default.createElement(
          _nealReact.Section,
          { heading: "Inline and Modal Signup components", className: "gray" },
          "We appreciate your hard work in supporting the backbone of your university's culture. Now let's make your jobs easier."
        ),
        _react2.default.createElement(
          _nealReact.Section,
          null,
          _react2.default.createElement(
            _nealReact.PricingTable,
            null,
            _react2.default.createElement(_nealReact.PricingPlan, pricingPlan1),
            _react2.default.createElement(_nealReact.PricingPlan, pricingPlan2),
            _react2.default.createElement(_nealReact.PricingPlan, pricingPlan3)
          )
        ),
        _react2.default.createElement(_nealReact.Section, null),
        _react2.default.createElement(_nealReact.Footer, {
          brandName: brandName,
          facebookUrl: "http://www.facebook.com",
          twitterUrl: "http://www.twitter.com/dennybritz",
          githubUrl: "https://github.com/dennybritz/neal-react",
          address: businessAddress
        })
      );
    }
  }]);

  return FrontPage;
}(_react.Component);

exports.default = FrontPage;

/***/ }),
/* 78 */
/*!*****************************!*\
  !*** external "neal-react" ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("neal-react");

/***/ }),
/* 79 */
/*!**********************************************************!*\
  !*** ./src/apps/main/assets/images/homepage/milktea.jpg ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "milktea-53839f4156786ef9854eb60998acee20.jpg";

/***/ }),
/* 80 */
/*!********************************************************!*\
  !*** ./src/apps/main/assets/images/homepage/crowd.jpg ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "crowd-1bd5ab4ca45d9446253abfcf103276b4.jpg";

/***/ }),
/* 81 */
/*!**********************************************************!*\
  !*** ./src/apps/main/assets/images/homepage/updates.jpg ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "updates-05576b8638c53e65dac775b40d7a15bd.jpg";

/***/ }),
/* 82 */
/*!**********************************************!*\
  !*** ./src/apps/main/assets/css/header.scss ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {



/***/ }),
/* 83 */
/*!************************************************!*\
  !*** ./src/apps/main/containers/NoMatchApp.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoMatchApp = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(/*! react-helmet */ 3);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _redux = __webpack_require__(/*! redux */ 2);

var _reactRedux = __webpack_require__(/*! react-redux */ 1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NoMatchApp = exports.NoMatchApp = function (_Component) {
  _inherits(NoMatchApp, _Component);

  function NoMatchApp() {
    _classCallCheck(this, NoMatchApp);

    return _possibleConstructorReturn(this, (NoMatchApp.__proto__ || Object.getPrototypeOf(NoMatchApp)).apply(this, arguments));
  }

  _createClass(NoMatchApp, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_reactHelmet2.default, { title: "Not Found" }),
        _react2.default.createElement(
          "h2",
          null,
          "404 - Not Found"
        )
      );
    }
  }], [{
    key: "gsBeforeRoute",

    /**
     * Called by ReactRouter before loading the container. Called prior to the
     * React life cycle so doesn't have access to component's props or state.
     *
     * @param {Object} store redux store object
     * @param {Object} renderProps render properties returned from ReactRouter
     * @param {Object} query location data
     * @param {Object} serverProps server specific properties
     * @param {Boolean} serverProps.isServer method running on server or not
     * @param {Request} [serverProps.request] express request if isServer
     *
     * @return {(Promise|undefined)} If this method returns a promise, the router
     * will wait for the promise to resolve before the container is loaded.
     */
    value: function gsBeforeRoute() /* {dispatch}, renderProps, query, serverProps */{}
  }]);

  return NoMatchApp;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function () {
  return (/* state */{
      /** _INSERT_STATE_  **/
    }
  );
}, function (dispatch) {
  return (0, _redux.bindActionCreators)({
    /** _INSERT_ACTION_CREATORS_ **/
  }, dispatch);
})(NoMatchApp);

/***/ }),
/* 84 */
/*!***************************************************!*\
  !*** ./src/apps/main/containers/SearchResults.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchResults = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(/*! redux */ 2);

var _reactRedux = __webpack_require__(/*! react-redux */ 1);

var _reactHelmet = __webpack_require__(/*! react-helmet */ 3);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactstrap = __webpack_require__(/*! reactstrap */ 4);

__webpack_require__(/*! compiled/bootstrap/dist/css/bootstrap.css */ 6);

__webpack_require__(/*! ../assets/css/search.css */ 85);

var _Header = __webpack_require__(/*! ../components/Header */ 7);

var _Header2 = _interopRequireDefault(_Header);

var _CategoriesCheckbox = __webpack_require__(/*! ../components/SearchResults/CategoriesCheckbox */ 86);

var _CategoriesCheckbox2 = _interopRequireDefault(_CategoriesCheckbox);

var _VibeSelector = __webpack_require__(/*! ../components/VibeSelector */ 25);

var _VibeSelector2 = _interopRequireDefault(_VibeSelector);

var _SearchBar = __webpack_require__(/*! ../components/SearchBar */ 12);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _ResultSortDropdown = __webpack_require__(/*! ../components/SearchResults/ResultSortDropdown */ 87);

var _ResultSortDropdown2 = _interopRequireDefault(_ResultSortDropdown);

var _ClubResultsList = __webpack_require__(/*! ../components/SearchResults/ClubResultsList */ 88);

var _ClubResultsList2 = _interopRequireDefault(_ClubResultsList);

var _searchResultsActions = __webpack_require__(/*! ../actions/searchResultsActions */ 26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchResults = exports.SearchResults = function (_Component) {
  _inherits(SearchResults, _Component);

  function SearchResults() {
    _classCallCheck(this, SearchResults);

    return _possibleConstructorReturn(this, (SearchResults.__proto__ || Object.getPrototypeOf(SearchResults)).apply(this, arguments));
  }

  _createClass(SearchResults, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var query = this.props.location.query.term;
      console.log("query is", query);
      if (query) {
        (0, _searchResultsActions.simpleSearchClub)(query);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      // if (nextProps.searchResults !== this.props.searchResults)
    }
  }, {
    key: "render",
    value: function render() {
      console.log("this.props", this.props);
      return _react2.default.createElement(
        "div",
        { className: "container" },
        _react2.default.createElement(_reactHelmet2.default, { title: "SearchResults" }),
        _react2.default.createElement(_Header2.default, { type: "main" }),
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            { md: "4" },
            _react2.default.createElement(_SearchBar2.default, { searchBarStyleId: "search" }),
            _react2.default.createElement(
              "div",
              {
                id: "categories",
                style: {
                  backgroundColor: "#72bec9",
                  "boxShadow": "10px 10px 15px #aaaaaa",
                  padding: "20px 0px 20px 40px",
                  margin: "0px 0px 20px 0px",
                  color: "white"
                }
              },
              _react2.default.createElement(
                "h2",
                null,
                "Categories"
              ),
              _react2.default.createElement(_CategoriesCheckbox2.default, null)
            ),
            _react2.default.createElement(
              "div",
              {
                id: "categories",
                style: {
                  backgroundColor: "#e16e69",
                  "boxShadow": "10px 10px 15px #aaaaaa",
                  padding: "20px 0px 20px 40px",
                  margin: "0px 0px 20px 0px",
                  color: "white"
                }
              },
              _react2.default.createElement(
                "h2",
                null,
                "Vibes"
              ),
              _react2.default.createElement(_VibeSelector2.default, null)
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            {
              md: "8",
              style: {
                backgroundColor: "white",
                padding: "20px 0px 20px 40px",
                margin: "0px 0px 20px 0px"
              }
            },
            "Sort clubs by:",
            _react2.default.createElement(_ResultSortDropdown2.default, null),
            _react2.default.createElement(_ClubResultsList2.default, {
              term: this.props.location.query.term,
              searchResults: this.props.searchResults
            })
          )
        )
      );
    }
  }], [{
    key: "gsBeforeRoute",

    /**
     * Called by ReactRouter before loading the container. Called prior to the
     * React life cycle so doesn't have access to component's props or state.
     *
     * @param {Object} store redux store object
     * @param {Object} renderProps render properties returned from ReactRouter
     * @param {Object} query location data
     * @param {Object} serverProps server specific properties
     * @param {Boolean} serverProps.isServer method running on server or not
     * @param {Request} [serverProps.request] express request if isServer
     *
     * @return {(Promise|undefined)} If this method returns a promise, the router
     * will wait for the promise to resolve before the container is loaded.
     */
    value: function gsBeforeRoute() /* {dispatch}, renderProps, query, serverProps */{}
  }]);

  return SearchResults;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    searchResults: state.searchResultsReducer.searchResults
  };
}, function (dispatch) {
  return (0, _redux.bindActionCreators)({
    simpleSearchClub: _searchResultsActions.simpleSearchClub
  }, dispatch);
})(SearchResults);

/***/ }),
/* 85 */
/*!*********************************************!*\
  !*** ./src/apps/main/assets/css/search.css ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {



/***/ }),
/* 86 */
/*!**********************************************************************!*\
  !*** ./src/apps/main/components/SearchResults/CategoriesCheckbox.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(/*! reactstrap */ 4);

var _consts = __webpack_require__(/*! ../../lib/consts */ 15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CategoriesCheckbox = function (_Component) {
  _inherits(CategoriesCheckbox, _Component);

  function CategoriesCheckbox() {
    _classCallCheck(this, CategoriesCheckbox);

    return _possibleConstructorReturn(this, (CategoriesCheckbox.__proto__ || Object.getPrototypeOf(CategoriesCheckbox)).apply(this, arguments));
  }

  _createClass(CategoriesCheckbox, [{
    key: "render",
    value: function render() {
      var generatedCheckboxes = [];
      var index = 0;
      for (var key in _consts.CATEGORIES_ICONS_MAP) {
        generatedCheckboxes.push(_react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(_reactstrap.Input, { type: "checkbox", key: key }),
          " \xA0",
          key
        ));
      };

      return _react2.default.createElement(
        "div",
        null,
        generatedCheckboxes
      );
    }
  }]);

  return CategoriesCheckbox;
}(_react.Component);

exports.default = CategoriesCheckbox;

/***/ }),
/* 87 */
/*!**********************************************************************!*\
  !*** ./src/apps/main/components/SearchResults/ResultSortDropdown.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SORT_TYPES = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(/*! reactstrap */ 4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SORT_TYPES = exports.SORT_TYPES = ["Relevancy", "Best", "Popularity", "New"];

var ResultSortDropdown = function (_Component) {
  _inherits(ResultSortDropdown, _Component);

  function ResultSortDropdown() {
    _classCallCheck(this, ResultSortDropdown);

    return _possibleConstructorReturn(this, (ResultSortDropdown.__proto__ || Object.getPrototypeOf(ResultSortDropdown)).apply(this, arguments));
  }

  _createClass(ResultSortDropdown, [{
    key: "render",
    value: function render() {
      var options = SORT_TYPES.map(function (item, key) {
        return _react2.default.createElement(
          "option",
          { key: key },
          item
        );
      });

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          _reactstrap.Input,
          { type: "select" },
          options
        )
      );
    }
  }]);

  return ResultSortDropdown;
}(_react.Component);

exports.default = ResultSortDropdown;

/***/ }),
/* 88 */
/*!*******************************************************************!*\
  !*** ./src/apps/main/components/SearchResults/ClubResultsList.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClubResultsList = function (_Component) {
  _inherits(ClubResultsList, _Component);

  function ClubResultsList() {
    _classCallCheck(this, ClubResultsList);

    return _possibleConstructorReturn(this, (ClubResultsList.__proto__ || Object.getPrototypeOf(ClubResultsList)).apply(this, arguments));
  }

  _createClass(ClubResultsList, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "h3",
          null,
          "Displaying results for: ",
          this.props.term
        )
      );
    }
  }]);

  return ClubResultsList;
}(_react.Component);

exports.default = ClubResultsList;

/***/ }),
/* 89 */
/*!*************************************************!*\
  !*** ./src/apps/main/containers/ClubProfile.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClubProfile = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(/*! redux */ 2);

var _reactRedux = __webpack_require__(/*! react-redux */ 1);

var _reactHelmet = __webpack_require__(/*! react-helmet */ 3);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

__webpack_require__(/*! compiled/bootstrap/dist/css/bootstrap.css */ 6);

__webpack_require__(/*! ../assets/css/style.css */ 16);

var _Header = __webpack_require__(/*! ../components/Header */ 7);

var _Header2 = _interopRequireDefault(_Header);

var _ProfileHeader = __webpack_require__(/*! ../components/ClubProfile/ProfileHeader */ 90);

var _ProfileHeader2 = _interopRequireDefault(_ProfileHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClubProfile = exports.ClubProfile = function (_Component) {
  _inherits(ClubProfile, _Component);

  _createClass(ClubProfile, null, [{
    key: "gsBeforeRoute",

    /**
     * Called by ReactRouter before loading the container. Called prior to the
     * React life cycle so doesn't have access to component's props or state.
     *
     * @param {Object} store redux store object
     * @param {Object} renderProps render properties returned from ReactRouter
     * @param {Object} query location data
     * @param {Object} serverProps server specific properties
     * @param {Boolean} serverProps.isServer method running on server or not
     * @param {Request} [serverProps.request] express request if isServer
     *
     * @return {(Promise|undefined)} If this method returns a promise, the router
     * will wait for the promise to resolve before the container is loaded.
     */
    value: function gsBeforeRoute() /* {dispatch}, renderProps, query, serverProps */{}
  }]);

  function ClubProfile(props) {
    _classCallCheck(this, ClubProfile);

    return _possibleConstructorReturn(this, (ClubProfile.__proto__ || Object.getPrototypeOf(ClubProfile)).call(this, props));
  }

  _createClass(ClubProfile, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_reactHelmet2.default, { title: "SearchResults" }),
        _react2.default.createElement(_Header2.default, { type: "main" }),
        _react2.default.createElement(_ProfileHeader2.default, null),
        _react2.default.createElement(
          "div",
          { className: "col-xs-12 clubprofilesection" },
          _react2.default.createElement(
            "h1",
            { className: "col-xs-12 clubprofilesection" },
            " In a nutshell "
          ),
          _react2.default.createElement("hr", { className: "col-xs-12 clubprofilesection" }),
          _react2.default.createElement(
            "p",
            { className: "col-xs-12 clubprofilesection" },
            " description "
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "col-xs-12 clubprofilesection" },
          _react2.default.createElement(
            "h1",
            { className: "col-xs-12 clubprofilesection" },
            " Basic info "
          ),
          _react2.default.createElement("hr", { className: "col-xs-12 clubprofilesection" }),
          _react2.default.createElement(
            "p",
            { className: "col-xs-12 clubprofilesection" },
            " Year started: 2342 "
          ),
          _react2.default.createElement(
            "p",
            { className: "col-xs-12 clubprofilesection" },
            " ",
            "Approx. number of members: 533",
            " "
          ),
          _react2.default.createElement(
            "p",
            { className: "col-xs-12 clubprofilesection" },
            " ",
            "Meeting location: sfasdf",
            " "
          ),
          _react2.default.createElement(
            "p",
            { className: "col-xs-12 clubprofilesection" },
            " ",
            "Meeting times: sdfasd",
            " "
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "col-xs-12 clubprofilesection" },
          _react2.default.createElement(
            "h1",
            { className: "col-xs-12 clubprofilesection" },
            " Teamwork values "
          ),
          _react2.default.createElement("hr", { className: "col-xs-12 clubprofilesection question" }),
          _react2.default.createElement(
            "p",
            { className: "col-xs-12 clubprofilesection" },
            " hi "
          )
        )
      );
    }
  }]);

  return ClubProfile;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function () {
  return (/* state */{
      /** _INSERT_STATE_  **/
    }
  );
}, function (dispatch) {
  return (0, _redux.bindActionCreators)({
    /** _INSERT_ACTION_CREATORS_ **/
  }, dispatch);
})(ClubProfile);

/***/ }),
/* 90 */
/*!***************************************************************!*\
  !*** ./src/apps/main/components/ClubProfile/ProfileHeader.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProfileHeader = function (_Component) {
  _inherits(ProfileHeader, _Component);

  function ProfileHeader() {
    _classCallCheck(this, ProfileHeader);

    return _possibleConstructorReturn(this, (ProfileHeader.__proto__ || Object.getPrototypeOf(ProfileHeader)).apply(this, arguments));
  }

  _createClass(ProfileHeader, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "col-xs-12 clubprofileheader" },
        _react2.default.createElement(
          "div",
          { className: "col-xs-4" },
          _react2.default.createElement(
            "div",
            { className: "clubprofilelogo" },
            _react2.default.createElement("img", {
              className: "img-fluid",
              style: { "max-width": "100%", height: "auto" },
              src: "/images/clubprofile/starcraft-logo.png"
            }),
            " "
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "col-xs-8 clubprofilename" },
          " profilename "
        )
      );
    }
  }]);

  return ProfileHeader;
}(_react.Component);

exports.default = ProfileHeader;

/***/ }),
/* 91 */
/*!**************************************************!*\
  !*** ./src/apps/main/containers/ClubCreation.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClubCreation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(/*! redux */ 2);

var _reactRedux = __webpack_require__(/*! react-redux */ 1);

var _reactHelmet = __webpack_require__(/*! react-helmet */ 3);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

__webpack_require__(/*! compiled/bootstrap/dist/css/bootstrap.css */ 6);

__webpack_require__(/*! ../assets/css/style.css */ 16);

var _Header = __webpack_require__(/*! ../components/Header */ 7);

var _Header2 = _interopRequireDefault(_Header);

var _Step = __webpack_require__(/*! ../components/ClubCreation/Step1 */ 92);

var _Step2 = _interopRequireDefault(_Step);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClubCreation = exports.ClubCreation = function (_Component) {
  _inherits(ClubCreation, _Component);

  _createClass(ClubCreation, null, [{
    key: "gsBeforeRoute",

    /**
     * Called by ReactRouter before loading the container. Called prior to the
     * React life cycle so doesn't have access to component's props or state.
     *
     * @param {Object} store redux store object
     * @param {Object} renderProps render properties returned from ReactRouter
     * @param {Object} query location data
     * @param {Object} serverProps server specific properties
     * @param {Boolean} serverProps.isServer method running on server or not
     * @param {Request} [serverProps.request] express request if isServer
     *
     * @return {(Promise|undefined)} If this method returns a promise, the router
     * will wait for the promise to resolve before the container is loaded.
     */
    value: function gsBeforeRoute() /* {dispatch}, renderProps, query, serverProps */{}
  }]);

  function ClubCreation(props) {
    _classCallCheck(this, ClubCreation);

    var _this = _possibleConstructorReturn(this, (ClubCreation.__proto__ || Object.getPrototypeOf(ClubCreation)).call(this, props));

    _this.displayAtStep = function (step) {
      switch (step) {
        case 1:
          return _react2.default.createElement(_Step2.default, null);
        default:
          return null;
      }
    };

    _this.state = {
      step: 1
    };
    return _this;
  }

  _createClass(ClubCreation, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_reactHelmet2.default, { title: "ClubCreation" }),
        _react2.default.createElement(_Header2.default, { type: "main" }),
        this.displayAtStep(this.state.step)
      );
    }
  }]);

  return ClubCreation;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function () {
  return (/* state */{
      /** _INSERT_STATE_  **/
    }
  );
}, function (dispatch) {
  return (0, _redux.bindActionCreators)({
    /** _INSERT_ACTION_CREATORS_ **/
  }, dispatch);
})(ClubCreation);

/***/ }),
/* 92 */
/*!********************************************************!*\
  !*** ./src/apps/main/components/ClubCreation/Step1.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(/*! lodash */ 27);

var _lodash2 = _interopRequireDefault(_lodash);

var _axios = __webpack_require__(/*! axios */ 10);

var _axios2 = _interopRequireDefault(_axios);

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(/*! react-redux */ 1);

var _redux = __webpack_require__(/*! redux */ 2);

var _reactstrap = __webpack_require__(/*! reactstrap */ 4);

var _index = __webpack_require__(/*! ../../actions/index */ 13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CATEGORY_TAGS = ["academic", "professional", "sports", "community service", "art", "environmental", "social", "gaming"];

var Step1 = function (_React$Component) {
  _inherits(Step1, _React$Component);

  function Step1() {
    _classCallCheck(this, Step1);

    return _possibleConstructorReturn(this, (Step1.__proto__ || Object.getPrototypeOf(Step1)).apply(this, arguments));
  }

  _createClass(Step1, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "form",
        { onSubmit: this.submit },
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "h2",
              null,
              " Club Name "
            ),
            _react2.default.createElement("input", { type: "text", placeholder: "e.g. Practical Concrete Bike Club" }),
            _react2.default.createElement(
              "small",
              null,
              "Make it snazzy."
            )
          )
        ),
        _react2.default.createElement("hr", null),
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "h2",
            null,
            " Categories "
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              _reactstrap.Button,
              {
                color: "primary",
                onClick: function onClick() {
                  return _this2.props.toggleClubCategory(CATEGORY_TAGS[0]);
                },
                active: _lodash2.default.includes(this.props.newClub["category"], CATEGORY_TAGS[0])
              },
              "Academics & Honors"
            ),
            _react2.default.createElement(
              _reactstrap.Button,
              {
                color: "primary",
                onClick: function onClick() {
                  return _this2.props.toggleClubCategory(CATEGORY_TAGS[1]);
                },
                active: _lodash2.default.includes(this.props.newClub["category"], CATEGORY_TAGS[1])
              },
              "Career & Professional"
            ),
            _react2.default.createElement(
              _reactstrap.Button,
              {
                color: "primary",
                onClick: function onClick() {
                  return _this2.props.toggleClubCategory(CATEGORY_TAGS[2]);
                },
                active: _lodash2.default.includes(this.props.newClub["category"], CATEGORY_TAGS[2])
              },
              "Sports"
            ),
            _react2.default.createElement(
              _reactstrap.Button,
              {
                color: "primary",
                onClick: function onClick() {
                  return _this2.props.toggleClubCategory(CATEGORY_TAGS[3]);
                },
                active: _lodash2.default.includes(this.props.newClub["category"], CATEGORY_TAGS[3]) },
              "Community Service"
            )
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              _reactstrap.Button,
              {
                color: "primary",
                onClick: function onClick() {
                  return _this2.props.toggleClubCategory(CATEGORY_TAGS[4]);
                },
                active: _lodash2.default.includes(this.props.newClub["category"], CATEGORY_TAGS[4]) },
              "Art"
            ),
            _react2.default.createElement(
              _reactstrap.Button,
              {
                color: "primary",
                onClick: function onClick() {
                  return _this2.props.toggleClubCategory(CATEGORY_TAGS[5]);
                },
                active: _lodash2.default.includes(this.props.newClub["category"], CATEGORY_TAGS[5]) },
              "Environmental"
            ),
            _react2.default.createElement(
              _reactstrap.Button,
              {
                color: "primary",
                onClick: function onClick() {
                  return _this2.props.toggleClubCategory(CATEGORY_TAGS[6]);
                },
                active: _lodash2.default.includes(this.props.newClub["category"], CATEGORY_TAGS[6]) },
              "Social"
            ),
            _react2.default.createElement(
              _reactstrap.Button,
              {
                color: "primary",
                onClick: function onClick() {
                  return _this2.props.toggleClubCategory(CATEGORY_TAGS[7]);
                },
                active: _lodash2.default.includes(this.props.newClub["category"], CATEGORY_TAGS[7]) },
              "Gaming"
            )
          )
        ),
        _react2.default.createElement("hr", null),
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "label",
              null,
              "Date Established"
            ),
            _react2.default.createElement("input", { type: "text", placeholder: "4/20/17" }),
            _react2.default.createElement(
              "small",
              null,
              "4/20/2000"
            )
          ),
          _react2.default.createElement("hr", null),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "label",
              null,
              "Short Description"
            ),
            _react2.default.createElement("textarea", { rows: "3" }),
            _react2.default.createElement(
              "small",
              null,
              "First impressions last a lifetime."
            )
          ),
          _react2.default.createElement(
            "button",
            { type: "button", onClick: this.submit },
            " Submit "
          )
        )
      );
    }
  }, {
    key: "submit",
    value: function submit() {
      console.log('button was clicked');
      _axios2.default.get('/api/clubs').then(function (data) {
        console.log(data);
      });
    }
  }]);

  return Step1;
}(_react2.default.Component);

Step1.propTypes = {
  newClub: _propTypes2.default.object
};
exports.default = (0, _reactRedux.connect)(function (state) {
  return { newClub: state.clubCreationReducer.newClub };
}, function (dispatch) {
  return (0, _redux.bindActionCreators)({
    toggleClubCategory: _index.toggleClubCategory
  }, dispatch);
})(Step1);

/***/ }),
/* 93 */
/*!****************************************************!*\
  !*** ./src/apps/main/containers/AdvancedSearch.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdvancedSearch = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(/*! redux */ 2);

var _reactRedux = __webpack_require__(/*! react-redux */ 1);

var _reactHelmet = __webpack_require__(/*! react-helmet */ 3);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

__webpack_require__(/*! compiled/bootstrap/dist/css/bootstrap.css */ 6);

__webpack_require__(/*! ../assets/css/style.css */ 16);

var _Header = __webpack_require__(/*! ../components/Header */ 7);

var _Header2 = _interopRequireDefault(_Header);

var _SearchBar = __webpack_require__(/*! ../components/SearchBar */ 12);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _CategorySelector = __webpack_require__(/*! ../components/CategorySelector */ 94);

var _CategorySelector2 = _interopRequireDefault(_CategorySelector);

var _VibeSelector = __webpack_require__(/*! ../components/VibeSelector */ 25);

var _VibeSelector2 = _interopRequireDefault(_VibeSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdvancedSearch = exports.AdvancedSearch = function (_Component) {
  _inherits(AdvancedSearch, _Component);

  function AdvancedSearch() {
    _classCallCheck(this, AdvancedSearch);

    return _possibleConstructorReturn(this, (AdvancedSearch.__proto__ || Object.getPrototypeOf(AdvancedSearch)).apply(this, arguments));
  }

  _createClass(AdvancedSearch, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "container" },
        _react2.default.createElement(_reactHelmet2.default, { title: "AdvancedSearch" }),
        _react2.default.createElement(_Header2.default, { type: "advancedsearch" }),
        _react2.default.createElement(
          "div",
          {
            style: {
              backgroundColor: "#d6f0f3",
              "boxShadow": "10px 10px 15px #aaaaaa",
              padding: "40px 20px 40px 40px",
              margin: "0px 0px 20px 0px"
            }
          },
          _react2.default.createElement(
            "h2",
            null,
            "Do you have a particular club in mind?"
          ),
          _react2.default.createElement(_SearchBar2.default, { searchBarStyleId: "advanced-search" }),
          " ",
          _react2.default.createElement("br", null),
          "Examples: part of a club name, a game you are interested in, people you know"
        ),
        _react2.default.createElement(
          "div",
          {
            style: {
              "boxShadow": "10px 10px 15px #aaaaaa",
              padding: "40px 0px 40px 40px",
              margin: "0px 0px 20px 0px",
              backgroundColor: "white"
            }
          },
          _react2.default.createElement(
            "h2",
            null,
            "Or how about picking a category to start with?"
          ),
          "Pick as many as you like.",
          _react2.default.createElement(_CategorySelector2.default, null),
          _react2.default.createElement(
            "h2",
            null,
            "Interested in what a club's vibes are like?"
          ),
          "Pick as many as you like.",
          _react2.default.createElement(_VibeSelector2.default, null)
        )
      );
    }
  }], [{
    key: "gsBeforeRoute",

    /**
     * Called by ReactRouter before loading the container. Called prior to the
     * React life cycle so doesn't have access to component's props or state.
     *
     * @param {Object} store redux store object
     * @param {Object} renderProps render properties returned from ReactRouter
     * @param {Object} query location data
     * @param {Object} serverProps server specific properties
     * @param {Boolean} serverProps.isServer method running on server or not
     * @param {Request} [serverProps.request] express request if isServer
     *
     * @return {(Promise|undefined)} If this method returns a promise, the router
     * will wait for the promise to resolve before the container is loaded.
     */
    value: function gsBeforeRoute() /* {dispatch}, renderProps, query, serverProps */{}
  }]);

  return AdvancedSearch;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function () {
  return (/* state */{
      /** _INSERT_STATE_  **/
    }
  );
}, function (dispatch) {
  return (0, _redux.bindActionCreators)({
    /** _INSERT_ACTION_CREATORS_ **/
  }, dispatch);
})(AdvancedSearch);

/***/ }),
/* 94 */
/*!******************************************************!*\
  !*** ./src/apps/main/components/CategorySelector.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _consts = __webpack_require__(/*! ../lib/consts */ 15);

var _reactstrap = __webpack_require__(/*! reactstrap */ 4);

var _reactFontawesome = __webpack_require__(/*! compiled/react-fontawesome */ 95);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CategorySelector = function (_Component) {
  _inherits(CategorySelector, _Component);

  function CategorySelector() {
    _classCallCheck(this, CategorySelector);

    return _possibleConstructorReturn(this, (CategorySelector.__proto__ || Object.getPrototypeOf(CategorySelector)).apply(this, arguments));
  }

  _createClass(CategorySelector, [{
    key: "render",
    value: function render() {
      var generatedButtons = [];
      var index = 0;
      for (var key in _consts.CATEGORIES_ICONS_MAP) {
        generatedButtons.push(_react2.default.createElement(
          _reactstrap.Button,
          { className: "btn",
            style: {
              backgroundColor: _consts.COLORS[Math.floor((index + 1) / 2) % _consts.COLORS.length],
              border: 0,
              color: "white",
              fontSize: "14px",
              margin: "0px 5px 5px 5px",
              borderRadius: "10px",
              padding: "10px"
            } },
          key,
          "\xA0 ",
          _react2.default.createElement(_reactFontawesome2.default, { name: _consts.CATEGORIES_ICONS_MAP[key], color: "white", size: "2x" })
        ));
        index++;
      }

      return _react2.default.createElement(
        "div",
        { style: { margin: "20px" } },
        generatedButtons
      );
    }
  }]);

  return CategorySelector;
}(_react.Component);

exports.default = CategorySelector;

/***/ }),
/* 95 */
/*!*****************************************************!*\
  !*** ./node_modules/react-fontawesome/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _screenReaderStyles = __webpack_require__(/*! ./screen-reader-styles */ 96);

var _screenReaderStyles2 = _interopRequireDefault(_screenReaderStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A React component for the font-awesome icon library.
 *
 * @param {String} [ariaLabel] An extra accessibility label to put on the icon
 * @param {Boolean} [border=false] Whether or not to show a border radius
 * @param {String} [className] An extra set of CSS classes to add to the component
 * @param {Object} [cssModule] Option to pass FontAwesome CSS as a module
 * @param {Boolean} [fixedWidth=false] Make buttons fixed width
 * @param {String} [flip=false] Flip the icon's orientation.
 * @param {Boolean} [inverse=false]Inverse the icon's color
 * @param {String} name Name of the icon to use
 * @param {Boolean} [pulse=false] Rotate icon with 8 steps, rather than smoothly
 * @param {Number} [rotate] The degress to rotate the icon by
 * @param {String} [size] The icon scaling size
 * @param {Boolean} [spin=false] Spin the icon
 * @param {String} [stack] Stack an icon on top of another
 * @param {String} [tag=span] The HTML tag to use as a string, eg 'i' or 'em'
 * @module FontAwesome
 * @type {ReactClass}
 */
var FontAwesome = function (_React$Component) {
  _inherits(FontAwesome, _React$Component);

  function FontAwesome() {
    _classCallCheck(this, FontAwesome);

    var _this = _possibleConstructorReturn(this, (FontAwesome.__proto__ || Object.getPrototypeOf(FontAwesome)).call(this));

    _this.displayName = 'FontAwesome';
    return _this;
  }

  _createClass(FontAwesome, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          border = _props.border,
          cssModule = _props.cssModule,
          className = _props.className,
          fixedWidth = _props.fixedWidth,
          flip = _props.flip,
          inverse = _props.inverse,
          name = _props.name,
          pulse = _props.pulse,
          rotate = _props.rotate,
          size = _props.size,
          spin = _props.spin,
          stack = _props.stack,
          _props$tag = _props.tag,
          tag = _props$tag === undefined ? 'span' : _props$tag,
          ariaLabel = _props.ariaLabel,
          props = _objectWithoutProperties(_props, ['border', 'cssModule', 'className', 'fixedWidth', 'flip', 'inverse', 'name', 'pulse', 'rotate', 'size', 'spin', 'stack', 'tag', 'ariaLabel']);

      var classNames = [];

      if (cssModule) {
        classNames.push(cssModule['fa']);
        classNames.push(cssModule['fa-' + name]);
        size && classNames.push(cssModule['fa-' + size]);
        spin && classNames.push(cssModule['fa-spin']);
        pulse && classNames.push(cssModule['fa-pulse']);
        border && classNames.push(cssModule['fa-border']);
        fixedWidth && classNames.push(cssModule['fa-fw']);
        inverse && classNames.push(cssModule['fa-inverse']);
        flip && classNames.push(cssModule['fa-flip-' + flip]);
        rotate && classNames.push(cssModule['fa-rotate-' + rotate]);
        stack && classNames.push(cssModule['fa-stack-' + stack]);
      } else {
        classNames.push('fa');
        classNames.push('fa-' + name);
        size && classNames.push('fa-' + size);
        spin && classNames.push('fa-spin');
        pulse && classNames.push('fa-pulse');
        border && classNames.push('fa-border');
        fixedWidth && classNames.push('fa-fw');
        inverse && classNames.push('fa-inverse');
        flip && classNames.push('fa-flip-' + flip);
        rotate && classNames.push('fa-rotate-' + rotate);
        stack && classNames.push('fa-stack-' + stack);
      }

      // Add any custom class names at the end.
      className && classNames.push(className);
      return _react2.default.createElement(tag, _extends({}, props, { 'aria-hidden': true, className: classNames.join(' ') }), ariaLabel ? _react2.default.createElement('span', { style: _screenReaderStyles2.default }, ariaLabel) : null);
    }
  }]);

  return FontAwesome;
}(_react2.default.Component);

FontAwesome.propTypes = {
  ariaLabel: _propTypes2.default.string,
  border: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object,
  fixedWidth: _propTypes2.default.bool,
  flip: _propTypes2.default.oneOf(['horizontal', 'vertical']),
  inverse: _propTypes2.default.bool,
  name: _propTypes2.default.string.isRequired,
  pulse: _propTypes2.default.bool,
  rotate: _propTypes2.default.oneOf([90, 180, 270]),
  size: _propTypes2.default.oneOf(['lg', '2x', '3x', '4x', '5x']),
  spin: _propTypes2.default.bool,
  stack: _propTypes2.default.oneOf(['1x', '2x']),
  tag: _propTypes2.default.string
};

exports.default = FontAwesome;
module.exports = exports['default'];

/***/ }),
/* 96 */
/*!********************************************************************!*\
  !*** ./node_modules/react-fontawesome/lib/screen-reader-styles.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0px',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0px, 0px, 0px, 0px)',
  border: '0px'
};
module.exports = exports['default'];

/***/ }),
/* 97 */
/*!********************************************!*\
  !*** ./src/apps/main/containers/SignUp.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignUp = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(/*! redux */ 2);

var _reactRedux = __webpack_require__(/*! react-redux */ 1);

var _reactHelmet = __webpack_require__(/*! react-helmet */ 3);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _Header = __webpack_require__(/*! ../components/Header */ 7);

var _Header2 = _interopRequireDefault(_Header);

var _ChooseSignUpOption = __webpack_require__(/*! ../components/SignUp/ChooseSignUpOption */ 98);

var _ChooseSignUpOption2 = _interopRequireDefault(_ChooseSignUpOption);

__webpack_require__(/*! compiled/bootstrap/dist/css/bootstrap.css */ 6);

__webpack_require__(/*! ../assets/css/signup.scss */ 28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignUp = exports.SignUp = function (_Component) {
  _inherits(SignUp, _Component);

  _createClass(SignUp, null, [{
    key: "gsBeforeRoute",

    /**
     * Called by ReactRouter before loading the container. Called prior to the
     * React life cycle so doesn't have access to component's props or state.
     *
     * @param {Object} store redux store object
     * @param {Object} renderProps render properties returned from ReactRouter
     * @param {Object} query location data
     * @param {Object} serverProps server specific properties
     * @param {Boolean} serverProps.isServer method running on server or not
     * @param {Request} [serverProps.request] express request if isServer
     *
     * @return {(Promise|undefined)} If this method returns a promise, the router
     * will wait for the promise to resolve before the container is loaded.
     */
    value: function gsBeforeRoute() /* {dispatch}, renderProps, query, serverProps */{}
  }]);

  function SignUp(props) {
    _classCallCheck(this, SignUp);

    var _this = _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call(this, props));

    _this.state = {
      display: 1
    };
    return _this;
  }

  _createClass(SignUp, [{
    key: "displayFromStep",
    value: function displayFromStep() {
      switch (this.state.display) {
        case 1:
          return _react2.default.createElement(_ChooseSignUpOption2.default, null);
        default:
          return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_reactHelmet2.default, { title: "SignUp" }),
        _react2.default.createElement(_Header2.default, { type: "signup" }),
        _react2.default.createElement(
          "div",
          { style: {
              textAlign: "center",
              marginBottom: "50px"
            } },
          _react2.default.createElement(
            "span",
            { style: {
                color: "white",
                fontSize: "60px",
                display: "block"
              } },
            "Join Us"
          ),
          _react2.default.createElement(
            "span",
            { style: {
                color: "white",
                fontSize: "24px"
              } },
            "Takes just a couple of clicks."
          )
        ),
        _react2.default.createElement(
          "div",
          { style: {
              backgroundColor: "#FFFFFF",
              width: "30%",
              left: "50%",
              marginLeft: "auto",
              marginRight: "auto",
              padding: "50px",
              boxShadow: "10px 10px 50px #000000",
              textAlign: "center"
            } },
          this.displayFromStep()
        )
      );
    }
  }]);

  return SignUp;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function () {
  return (/* state */{/** _INSERT_STATE_  **/}
  );
}, function (dispatch) {
  return (0, _redux.bindActionCreators)({/** _INSERT_ACTION_CREATORS_ **/}, dispatch);
})(SignUp);

/***/ }),
/* 98 */
/*!***************************************************************!*\
  !*** ./src/apps/main/components/SignUp/ChooseSignUpOption.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ../../assets/css/signup.scss */ 28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChooseSignUpOption = function (_Component) {
  _inherits(ChooseSignUpOption, _Component);

  function ChooseSignUpOption() {
    _classCallCheck(this, ChooseSignUpOption);

    return _possibleConstructorReturn(this, (ChooseSignUpOption.__proto__ || Object.getPrototypeOf(ChooseSignUpOption)).apply(this, arguments));
  }

  _createClass(ChooseSignUpOption, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "button",
          { className: "btn signUpButton", id: "facebook" },
          "Join us with Facebook"
        ),
        _react2.default.createElement(
          "button",
          { className: "btn signUpButton", id: "google" },
          "Join us with Google"
        ),
        _react2.default.createElement(
          "button",
          { className: "btn signUpButton", id: "uci" },
          "Join us with your UC Irvine ID"
        )
      );
    }
  }]);

  return ChooseSignUpOption;
}(_react.Component);

exports.default = ChooseSignUpOption;

/***/ }),
/* 99 */
/*!*****************************************!*\
  !*** ./src/apps/main/reducers/index.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _clubCreationReducer = __webpack_require__(/*! ./clubCreationReducer */ 100);

var _clubCreationReducer2 = _interopRequireDefault(_clubCreationReducer);

var _frontPageReducer = __webpack_require__(/*! ./frontPageReducer */ 101);

var _frontPageReducer2 = _interopRequireDefault(_frontPageReducer);

var _searchResultsReducer = __webpack_require__(/*! ./searchResultsReducer */ 102);

var _searchResultsReducer2 = _interopRequireDefault(_searchResultsReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  clubCreationReducer: _clubCreationReducer2.default,
  frontPageReducer: _frontPageReducer2.default,
  searchResultsReducer: _searchResultsReducer2.default
};

/***/ }),
/* 100 */
/*!*******************************************************!*\
  !*** ./src/apps/main/reducers/clubCreationReducer.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = __webpack_require__(/*! lodash */ 27);

var _lodash2 = _interopRequireDefault(_lodash);

var _index = __webpack_require__(/*! ../actions/index */ 13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = {
  newClub: {
    category: []
  }
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _index.ADD_CLUB_CATEGORY:
      if (_lodash2.default.includes(state.newClub.category, action.category)) {
        console.log('removing: ' + action.category);
        state = _extends({}, state, {
          newClub: _extends({}, state.newClub, {
            category: _lodash2.default.without(state.newClub.category, action.category)
          })
        });
      } else {
        console.log('adding: ' + action.category);
        state = _extends({}, state, {
          newClub: _extends({}, state.newClub, {
            category: _lodash2.default.concat(state.newClub.category, action.category)
          })
        });
      }
      return state;
    default:
      return state;
  }
};

/***/ }),
/* 101 */
/*!****************************************************!*\
  !*** ./src/apps/main/reducers/frontPageReducer.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(/*! axios */ 10);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = {
  searchResults: []
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    default:
      return state;
  }
};

/***/ }),
/* 102 */
/*!********************************************************!*\
  !*** ./src/apps/main/reducers/searchResultsReducer.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _searchResultsActions = __webpack_require__(/*! ../actions/searchResultsActions */ 26);

var INITIAL_STATE = {
  searchResults: [],
  categoriesFilter: [],
  vibesFilter: []
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _searchResultsActions.SIMPLE_SEARCH_CLUB:
      return _extends({}, state, { searchResults: action.payload });
    default:
      return state;
  }
};

/***/ }),
/* 103 */
/*!**************************!*\
  !*** ./src/entries.json ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {"/":{"component":"src/apps/main/Index.js","routes":"src/apps/main/routes.js","reducers":"src/apps/main/reducers"}}

/***/ }),
/* 104 */
/*!***********************************!*\
  !*** ./gluestick/EntryWrapper.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/** DO NOT MODIFY **/


var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ 105);

var _reactHotLoader = __webpack_require__(/*! react-hot-loader */ 106);

var _gluestick = __webpack_require__(/*! compiled/gluestick */ 5);

var _match = __webpack_require__(/*! react-router/lib/match */ 107);

var _match2 = _interopRequireDefault(_match);

var _browserHistory = __webpack_require__(/*! react-router/lib/browserHistory */ 108);

var _browserHistory2 = _interopRequireDefault(_browserHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Cache for HMR to store data between multiple rerenders.
var hotReloadCache = {
  httpClient: null,
  store: null,
  rootWrappers: null,
  rootWrappersOptions: null,
  preRenderHooks: null
};

var matchRouteAndRender = function matchRouteAndRender(_ref, _ref2, _ref3) {
  var match = _ref.match,
      history = _ref.history;
  var getRoutes = _ref2.getRoutes,
      store = _ref2.store,
      httpClient = _ref2.httpClient;
  var rootWrappers = _ref3.rootWrappers,
      rootWrappersOptions = _ref3.rootWrappersOptions,
      preRenderHooks = _ref3.preRenderHooks;

  match({ history: history, routes: getRoutes(store, httpClient) }, function (error, redirectLocation, renderProps) {
    var entry = _react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(EntryWrapper, _extends({
        radiumConfig: { userAgent: window.navigator.userAgent },
        store: store,
        getRoutes: getRoutes,
        httpClient: httpClient,
        rootWrappers: rootWrappers,
        rootWrappersOptions: _extends({
          userAgent: window.navigator.userAgent
        }, rootWrappersOptions)
      }, renderProps))
    );

    if (preRenderHooks && preRenderHooks.length > 0) {
      preRenderHooks.forEach(function (hook) {
        if (typeof hook === "function") {
          hook();
        }
      });
    }
    (0, _reactDom.render)(entry, document.getElementById("main"));
  });
};

// Rerender whole app (for HMR purpose).
var rerender = function rerender(updatedGetRoutes) {
  var httpClient = hotReloadCache.httpClient,
      store = hotReloadCache.store,
      rootWrappers = hotReloadCache.rootWrappers,
      rootWrappersOptions = hotReloadCache.rootWrappersOptions,
      preRenderHooks = hotReloadCache.preRenderHooks;


  matchRouteAndRender({
    match: _match2.default,
    history: _browserHistory2.default
  }, {
    getRoutes: updatedGetRoutes,
    store: store,
    httpClient: httpClient
  }, {
    rootWrappers: rootWrappers,
    rootWrappersOptions: rootWrappersOptions,
    preRenderHooks: preRenderHooks
  });
};

// This function is called only on client on initial render.
var start = function start(config, getRoutes, getStore) {
  var _ref4 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
      rootWrappers = _ref4.rootWrappers,
      rootWrappersOptions = _ref4.rootWrappersOptions,
      preRenderHooks = _ref4.preRenderHooks;

  var match = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _match2.default;
  var history = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : _browserHistory2.default;

  // Allow developers to include code that will be executed before the app is
  // set up in the browser.
  __webpack_require__(/*! config/init.browser */ 109);

  var httpClient = (0, _gluestick.getHttpClient)(config.httpClient);
  var store = getStore(httpClient);

  if (process.env.NODE_ENV !== "production") {
    hotReloadCache.httpClient = httpClient;
    hotReloadCache.store = store;
    hotReloadCache.rootWrappers = rootWrappers;
    hotReloadCache.rootWrappersOption = rootWrappersOptions;
    hotReloadCache.preRenderHooks = preRenderHooks;
  }

  matchRouteAndRender({
    match: match,
    history: history
  }, {
    getRoutes: getRoutes,
    store: store,
    httpClient: httpClient
  }, {
    rootWrappers: rootWrappers,
    rootWrappersOptions: rootWrappersOptions,
    preRenderHooks: preRenderHooks
  });
};

var EntryWrapper = function (_Component) {
  _inherits(EntryWrapper, _Component);

  function EntryWrapper() {
    _classCallCheck(this, EntryWrapper);

    return _possibleConstructorReturn(this, (EntryWrapper.__proto__ || Object.getPrototypeOf(EntryWrapper)).apply(this, arguments));
  }

  _createClass(EntryWrapper, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          routerContext = _props.routerContext,
          getRoutes = _props.getRoutes,
          radiumConfig = _props.radiumConfig,
          store = _props.store,
          httpClient = _props.httpClient,
          rootWrappers = _props.rootWrappers,
          rootWrappersOptions = _props.rootWrappersOptions;


      return rootWrappers.reduce(function (prev, curr) {
        return curr(prev, rootWrappersOptions);
      }, _react2.default.createElement(_gluestick.Root, {
        routerContext: routerContext,
        routes: getRoutes(store, httpClient),
        store: store
      }));
    }
  }]);

  return EntryWrapper;
}(_react.Component);

EntryWrapper.start = start;
EntryWrapper.rerender = rerender;
EntryWrapper.defaultProps = {
  rootWrappers: []
};
exports.default = EntryWrapper;

/***/ }),
/* 105 */
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 106 */
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 107 */
/*!*****************************************!*\
  !*** external "react-router/lib/match" ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-router/lib/match");

/***/ }),
/* 108 */
/*!**************************************************!*\
  !*** external "react-router/lib/browserHistory" ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-router/lib/browserHistory");

/***/ }),
/* 109 */
/*!************************************!*\
  !*** ./src/config/init.browser.js ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Code in this file will be executed when the app has loaded in the browser
// but before calling the React render method. This is a good place to do
// things like mount global error handlers or any other setup that needs to
// happen before the app is rendered.


/***/ }),
/* 110 */
/*!********************************!*\
  !*** ./src/gluestick.hooks.js ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  preInitServer: function preInitServer() {},
  postServerRun: [],
  preRenderFromCache: [],
  postRenderRequirements: [],
  preRedirect: [],
  postRenderProps: [],
  postGetCurrentRoute: [],
  postRender: [],
  error: []
};

/***/ }),
/* 111 */
/*!******************************************************************!*\
  !*** ./node_modules/gluestick/build/renderer/components/Body.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class, _temp; /* eslint-disable react/no-danger*/

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _serializeJavascript = __webpack_require__(/*! serialize-javascript */ 17);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Body = (_temp = _class = function (_react$Component) {
  _inherits(Body, _react$Component);

  function Body() {
    _classCallCheck(this, Body);

    return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).apply(this, arguments));
  }

  _createClass(Body, [{
    key: 'render',
    value: function render() {
      var isEmail = this.props.isEmail;

      if (isEmail) {
        return this._renderWithoutScriptTags();
      }
      return this._renderWithScriptTags();
    }
  }, {
    key: '_renderWithoutScriptTags',
    value: function _renderWithoutScriptTags() {
      return _react2.default.createElement('div', null, this._renderMainContent());
    }
  }, {
    key: '_renderWithScriptTags',
    value: function _renderWithScriptTags() {
      var windowVariables = this._getGlobalVariables();
      var scriptTags = this.props.scriptTags;

      return _react2.default.createElement('div', null, _react2.default.createElement('div', null, this._renderMainContent()), scriptTags.map(function (tag) {
        return tag;
      }), _react2.default.createElement('script', {
        type: 'text/javascript',
        dangerouslySetInnerHTML: { __html: windowVariables }
      }));
    }
  }, {
    key: '_renderMainContent',
    value: function _renderMainContent() {
      return _react2.default.createElement('div', { id: 'main' }, _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: this.props.html } }));
    }
  }, {
    key: '_getGlobalVariables',
    value: function _getGlobalVariables() {
      var _props = this.props;
      var initialState = _props.initialState,
          envVariables = _props.envVariables;

      var envVarsValues = {};
      envVariables.forEach(function (name) {
        var value = process.env[name];
        if (typeof value !== 'undefined') {
          envVarsValues[name] = value;
        }
      });

      var state = 'window.__INITIAL_STATE__=' + (0, _serializeJavascript2.default)(initialState, {
        isJSON: true
      }) + ';';
      var gsEnvs = 'window.__GS_ENV_VARS__=' + (0, _serializeJavascript2.default)(envVarsValues, {
        isJSON: true
      }) + ';';
      return state.concat(gsEnvs);
    }
  }]);

  return Body;
}(_react.Component), _class.propTypes = {
  html: _react.PropTypes.string.isRequired,
  isEmail: _react.PropTypes.bool.isRequired,
  initialState: _react.PropTypes.any.isRequired,
  envVariables: _react.PropTypes.array.isRequired,
  scriptTags: _react.PropTypes.array.isRequired
}, _temp);
exports.default = Body;

/***/ }),
/* 112 */
/*!**************************************!*\
  !*** ./src/config/caching.server.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),
/* 113 */
/*!****************************************************************!*\
  !*** ./node_modules/gluestick/build/renderer/helpers/hooks.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  call: function call(hooks, arg) {
    if (hooks) {
      return Array.isArray(hooks) ? hooks.reduce(function (val, hook) {
        return hook(val);
      }, arg) : hooks(arg);
    }
    return arg;
  },
  merge: function merge(projectHooks, plugins) {
    var mergedHooks = plugins.filter(function (plugin) {
      return plugin.hooks && !!Object.keys(plugin.hooks).length;
    }).reduce(function (prev, curr) {
      var hooks = prev;
      Object.keys(curr.hooks).forEach(function (hookName) {
        if (Array.isArray(hooks[hookName])) {
          hooks[hookName] = hooks[hookName].concat(curr.hooks[hookName]);
        } else {
          hooks[hookName] = [].concat(curr.hooks[hookName]);
        }
      });
      return hooks;
    }, {});
    Object.keys(projectHooks).forEach(function (hookName) {
      if (Array.isArray(mergedHooks[hookName])) {
        mergedHooks[hookName] = mergedHooks[hookName].concat(projectHooks[hookName]);
      } else {
        mergedHooks[hookName] = [].concat(projectHooks[hookName]);
      }
    });
    return mergedHooks;
  }
};

/***/ }),
/* 114 */
/*!**********************************************************************!*\
  !*** ./node_modules/gluestick/build/plugins/prepareServerPlugins.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(/*! ../cli/helpers */ 115);

var createArrowList = _require.createArrowList;

/**
 * Compile plugin.
 */
var compilePlugin = function compilePlugin(pluginSpec, pluginOptions) {
  try {
    var pluginBody = pluginSpec.body ? pluginSpec.body(pluginSpec.options, pluginOptions) : {};

    // Currently server plugin can overwrite renderMethod and provide hooks and logger.
    return {
      renderMethod: pluginBody.renderMethod,
      hooks: pluginBody.hooks,
      logger: pluginBody.logger
    };
  } catch (error) {
    // Proivde user-frinedly error message, so the user will know what plugin failed.
    var enchancedError = error;
    enchancedError.message = pluginSpec.name + ' compilation failed: ' + enchancedError.message;
    return {
      renderMethod: function renderMethod() {},
      hooks: {},
      logger: {},
      error: enchancedError
    };
  }
};

/**
 * Compile server plugins from given array. Those plugins are compiled with provided by user
 * `options` object from plugin declaration file, and utilities from gluestick like logger.
 */
module.exports = function (logger, plugins) {
  try {
    // Get server plugins only and perform necessry checks.
    var filteredPlugins = plugins.filter(function (plugin, index) {
      if (typeof plugin.ref !== 'function' && typeof plugin.ref.plugin !== 'function') {
        throw new Error('Plugin at position ' + index + ' must export a function');
      }
      return plugin.type === 'server';
    });
    if (!filteredPlugins.length) {
      return [];
    }

    var logMessage = 'Compiling server plugins:\n';
    // Compile plugin, if compilation fails, further compilation is prevented.
    var compiledPlugins = filteredPlugins.map(function (value) {
      var normalizedPlugin = {
        name: value.ref.meta ? value.ref.meta.name : value.ref.name || 'unknown',
        meta: value.ref.meta || {},
        body: value.ref,
        options: value.options || {}
      };
      // Second `compilePlugin` argument is an object with gluestick utilities that
      // will be available for plugins to use.
      var compilationResults = compilePlugin(normalizedPlugin, {
        logger: logger
      });
      if (compilationResults.error) {
        throw compilationResults.error;
      }

      return {
        name: normalizedPlugin.name,
        meta: normalizedPlugin.meta,
        renderMethod: compilationResults.renderMethod,
        hooks: compilationResults.hooks,
        logger: compilationResults.logger
      };
    });

    logMessage += createArrowList(compiledPlugins.map(function (_ref) {
      var name = _ref.name;
      return name;
    }), 9);
    logger.info(logMessage);

    return compiledPlugins;
  } catch (error) {
    logger.warn(error);
    return [];
  }
};

/***/ }),
/* 115 */
/*!*****************************************************!*\
  !*** ./node_modules/gluestick/build/cli/helpers.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

'use strict';

var path = require('path');

module.exports = {
  parseBooleanFlag: function parseBooleanFlag(value) {
    return ['false', '0', 'no'].includes(value);
  },
  getVersion: function getVersion() {
    return require(path.join(__dirname, '../../', 'package.json')).version;
  },
  createArrowList: function createArrowList(elements, leftOffset) {
    var offsetWithArrow = ' '.repeat(leftOffset) + '-> ';
    return '' + offsetWithArrow + elements.join('\n' + offsetWithArrow);
  }
};

/***/ }),
/* 116 */
/*!*********************************************************************!*\
  !*** ./node_modules/gluestick/build/renderer/helpers/setProxies.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var proxy = __webpack_require__(/*! http-proxy-middleware */ 117);

/**
 * The array of proxy objects follow the following pattern
 * @typedef ProxyConfig
 * @property {String} path the local path that will route to the proxy
 * @property {String} destination the destination url to route proxy requests
 * @property {Object} options http-proxy options object. More information for
 * this options object can be found at:
 * https://github.com/chimurai/http-proxy-middleware
 */

/**
 * `setProxis` takes an express application instance and a hash of endpoints and
 * corresponding proxy urls. The endpoints are then added as a proxy to the
 * urls.
 *
 * @param {ExpressApp} app the express app that proxies will be applied to
 * @param {Array<ProxyConfig>} proxyConfigs array of proxy objects that will be applied
 *
 */

module.exports = function (app) {
  var proxyConfigs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var logger = arguments[2];

  proxyConfigs.forEach(function (proxyConfig) {
    var filter = proxyConfig.filter,
        path = proxyConfig.path,
        destination = proxyConfig.destination,
        options = proxyConfig.options;

    var actualConfig = _extends({
      logLevel: logger.level,
      logProvider: function logProvider() {
        return logger;
      },
      target: destination,
      pathRewrite: _defineProperty({}, '^' + path, ''),
      onError: function onError(err, req, res) {
        logger.error('Proxy error: ' + err);
        res.status(500).send('Proxy error');
      }
    }, options);

    var proxyInstance = typeof filter === 'function' ? proxy(filter, actualConfig) : proxy(actualConfig);

    app.use(path, proxyInstance);
  });
};

/***/ }),
/* 117 */
/*!****************************************!*\
  !*** external "http-proxy-middleware" ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("http-proxy-middleware");

/***/ })
/******/ ]);
//# sourceMappingURL=renderer.js.map