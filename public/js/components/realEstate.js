webpackJsonp([0],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(60);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
    _inherits(Filter, _Component);

    function Filter() {
        _classCallCheck(this, Filter);

        return _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).apply(this, arguments));
    }

    _createClass(Filter, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                { className: 'filters' },
                _react2.default.createElement(
                    'h4',
                    null,
                    'Filter'
                ),
                _react2.default.createElement(
                    'select',
                    { name: 'Location' },
                    _react2.default.createElement(
                        'option',
                        { disabled: true, selected: true },
                        'Location'
                    ),
                    _react2.default.createElement(
                        'option',
                        null,
                        'Toronto'
                    ),
                    _react2.default.createElement(
                        'option',
                        null,
                        'Markham'
                    )
                ),
                _react2.default.createElement(
                    'select',
                    { name: 'Type' },
                    _react2.default.createElement(
                        'option',
                        { disabled: true, selected: true },
                        'Type'
                    ),
                    _react2.default.createElement(
                        'option',
                        null,
                        'Townhouse'
                    ),
                    _react2.default.createElement(
                        'option',
                        null,
                        'House'
                    )
                ),
                _react2.default.createElement(
                    'select',
                    { name: 'Bedrooms' },
                    _react2.default.createElement(
                        'option',
                        { disabled: true, selected: true },
                        'Bedrooms'
                    ),
                    _react2.default.createElement(
                        'option',
                        null,
                        '2 Br'
                    ),
                    _react2.default.createElement(
                        'option',
                        null,
                        '3 Br'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'range price' },
                    _react2.default.createElement(
                        'span',
                        null,
                        'Price'
                    ),
                    _react2.default.createElement('input', { type: 'text', name: 'price-min', id: 'price-min', placeholder: '$' }),
                    _react2.default.createElement('input', { type: 'text', name: 'price-max', id: 'price-max', placeholder: '$' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'range floorspace' },
                    _react2.default.createElement(
                        'span',
                        null,
                        'Floor Space'
                    ),
                    _react2.default.createElement('input', { type: 'text', name: 'floor-min', id: 'floor-min', placeholder: 'ft\xB2' }),
                    _react2.default.createElement('input', { type: 'text', name: 'floor-max', id: 'floor-max', placeholder: 'ft\xB2' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'extras' },
                    _react2.default.createElement(
                        'p',
                        null,
                        'Facilities'
                    ),
                    _react2.default.createElement(
                        'label',
                        { 'for': 'elevator' },
                        _react2.default.createElement(
                            'span',
                            null,
                            'Elevator'
                        ),
                        _react2.default.createElement('input', { type: 'checkbox', name: 'elevator' }),
                        _react2.default.createElement('hr', null)
                    ),
                    _react2.default.createElement(
                        'label',
                        { 'for': 'pool' },
                        _react2.default.createElement(
                            'span',
                            null,
                            'Swimming Pool'
                        ),
                        _react2.default.createElement('input', { type: 'checkbox', name: 'pool' }),
                        _react2.default.createElement('hr', null)
                    ),
                    _react2.default.createElement(
                        'label',
                        { 'for': 'basement' },
                        _react2.default.createElement(
                            'span',
                            null,
                            'Basement'
                        ),
                        _react2.default.createElement('input', { type: 'checkbox', name: 'basement' }),
                        _react2.default.createElement('hr', null)
                    )
                )
            );
        }
    }]);

    return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(60);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          'logo'
        ),
        _react2.default.createElement(
          'div',
          { className: 'links' },
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '#' },
                'Create Ads'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '#' },
                'About Us'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '#' },
                'Log In'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '#', className: 'regButton' },
                'Register'
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(60);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    return _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).apply(this, arguments));
  }

  _createClass(Listings, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        null,
        'listings'
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(60);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _header = __webpack_require__(231);

var _header2 = _interopRequireDefault(_header);

var _filter = __webpack_require__(230);

var _filter2 = _interopRequireDefault(_filter);

var _listings = __webpack_require__(232);

var _listings2 = _interopRequireDefault(_listings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      name: 'Joe',
      health: 100,
      level: 1,
      lowlevelclass: 'danger-bg'

      //this.clickimg = this.clickimg.bind(this)
    };return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_header2.default, null),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(_filter2.default, null),
          _react2.default.createElement(_listings2.default, null)
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ })

},[236]);