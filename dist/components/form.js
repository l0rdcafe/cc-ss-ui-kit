"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Textarea = exports.Input = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  height: 3em;\n  padding: 0.5%;\n  background-color: transparent;\n  border: 1px solid #aaa;\n  border-radius: 2px;\n  box-shadow: 2px 1px 1px #aaa;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  margin-bottom: 1.5rem;\n\n  &:focus {\n    border: 1px solid #0074d9;\n    outline: 0;\n  }\n"], ["\n  height: 3em;\n  padding: 0.5%;\n  background-color: transparent;\n  border: 1px solid #aaa;\n  border-radius: 2px;\n  box-shadow: 2px 1px 1px #aaa;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  margin-bottom: 1.5rem;\n\n  &:focus {\n    border: 1px solid #0074d9;\n    outline: 0;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  min-height: 65px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n"], ["\n  min-height: 65px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Input = exports.Input = _styledComponents2.default.input(_templateObject);

var Textarea = exports.Textarea = Input.withComponent("textarea").extend(_templateObject2);