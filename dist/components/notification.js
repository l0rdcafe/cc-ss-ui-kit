"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Notification = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  width: 40%;\n  margin-bottom: 1.25em;\n  color: #fff;\n  height: 20vh;\n  background: ", ";\n  margin: auto;\n  display: flex;\n  align-items: center;\n  border-radius: 2px;\n  justify-content: center;\n"], ["\n  width: 40%;\n  margin-bottom: 1.25em;\n  color: #fff;\n  height: 20vh;\n  background: ", ";\n  margin: auto;\n  display: flex;\n  align-items: center;\n  border-radius: 2px;\n  justify-content: center;\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Notification = exports.Notification = _styledComponents2.default.div(_templateObject, function (props) {
  return props.error ? "#0074d9" : "#ff4136";
});

exports.default = Notification;