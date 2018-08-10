"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkElement = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n  text-decoration: none;\n  transition: opacity 0.25s;\n\n  &:hover {\n    opacity: 0.6;\n  }\n"], ["\n  color: ", ";\n  text-decoration: none;\n  transition: opacity 0.25s;\n\n  &:hover {\n    opacity: 0.6;\n  }\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LinkElement = exports.LinkElement = _styledComponents2.default.a(_templateObject, function (props) {
  return props.primary ? "#0074d9" : "#85144b";
});

exports.default = LinkElement;