"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Code = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  padding: 0.2rem 0.5rem;\n  margin: 0 0.2rem;\n  font-size: 90%;\n  white-space: nowrap;\n  background: #ddd;\n  border: 1px solid #aaa;\n  border-radius: 4px;\n"], ["\n  padding: 0.2rem 0.5rem;\n  margin: 0 0.2rem;\n  font-size: 90%;\n  white-space: nowrap;\n  background: #ddd;\n  border: 1px solid #aaa;\n  border-radius: 4px;\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Code = exports.Code = _styledComponents2.default.code(_templateObject);

exports.default = Code;