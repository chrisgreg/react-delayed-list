'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DelayedList = function (_Component) {
  _inherits(DelayedList, _Component);

  function DelayedList() {
    _classCallCheck(this, DelayedList);

    var _this = _possibleConstructorReturn(this, (DelayedList.__proto__ || Object.getPrototypeOf(DelayedList)).call(this));

    _this.state = {
      items: []
    };
    return _this;
  }

  _createClass(DelayedList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setData();
    }
  }, {
    key: 'setData',
    value: function setData() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          delay = _props.delay;

      var currentIndex = 0;

      children.forEach(function (item) {
        setTimeout(function (item) {
          var newData = [].concat(_toConsumableArray(_this2.state.items), [item]);
          _this2.setState({
            items: newData
          });
        }, delay + currentIndex * delay, item);
        currentIndex++;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var transitionClass = this.props.transitionClass || 'delayed-list-items';
      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        { transitionName: transitionClass },
        this.state.items
      );
    }
  }]);

  return DelayedList;
}(_react.Component);

exports.default = DelayedList;
