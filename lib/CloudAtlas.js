'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactOccurrenceBrowser = require('react-occurrence-browser');

var _reactOccurrenceBrowser2 = _interopRequireDefault(_reactOccurrenceBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  border: '10px solid deepskyblue',
  padding: '10px'
};

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default(props) {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = { endpoint: props.config.endpoint };

    _axios2.default.get(props.config.articleUrl).then(function (response) {
      _this.setState({
        article: response.data,
        safeContent: { __html: response.data.content }
      });
    }, function (err) {
      console.log(err);
    });

    return _this;
  }

  _default.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { style: style },
      _react2.default.createElement(
        'h1',
        null,
        this.props.config.title
      ),
      _react2.default.createElement('div', { dangerouslySetInnerHTML: this.state.safeContent }),
      _react2.default.createElement(_reactOccurrenceBrowser2.default, { endpoint: this.state.endpoint })
    );
  };

  return _default;
}(_react.Component);

exports.default = _default;
module.exports = exports['default'];