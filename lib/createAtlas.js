'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _CloudAtlas = require('./CloudAtlas');

var _CloudAtlas2 = _interopRequireDefault(_CloudAtlas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createAtlas(selector, config) {
    config = config || window.atlasConfig;
    selector = selector || 'atlas';
    (0, _reactDom.render)(_react2.default.createElement(_CloudAtlas2.default, { config: config }), document.querySelector(selector));
}

exports.default = createAtlas;
module.exports = exports['default'];