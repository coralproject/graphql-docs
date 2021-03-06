'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DescriptionView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

var _DescriptionView = require('./DescriptionView.css');

var StyleSheet = _interopRequireWildcard(_DescriptionView);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DescriptionView = exports.DescriptionView = function (_React$Component) {
    _inherits(DescriptionView, _React$Component);

    function DescriptionView() {
        _classCallCheck(this, DescriptionView);

        return _possibleConstructorReturn(this, (DescriptionView.__proto__ || Object.getPrototypeOf(DescriptionView)).apply(this, arguments));
    }

    _createClass(DescriptionView, [{
        key: 'render',
        value: function render() {
            var html = (0, _marked2.default)(this.props.description);

            return _react2.default.createElement('div', {
                className: [StyleSheet.container, this.props.className].join(' '),
                dangerouslySetInnerHTML: { __html: html }
            });
        }
    }]);

    return DescriptionView;
}(_react2.default.Component);

DescriptionView.defaultProps = {
    className: ''
};