"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  padding-left: 0;\n  margin-top: 0;\n  list-style: ", ";\n  margin-bottom: 2.5rem;\n\n  ul,\n  ol {\n    margin: 1.5rem 0 1.5rem 3rem;\n    font-size: 90%;\n  }\n\n  li {\n    margin-bottom: 1rem;\n  }\n"], ["\n  padding-left: 0;\n  margin-top: 0;\n  list-style: ", ";\n  margin-bottom: 2.5rem;\n\n  ul,\n  ol {\n    margin: 1.5rem 0 1.5rem 3rem;\n    font-size: 90%;\n  }\n\n  li {\n    margin-bottom: 1rem;\n  }\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var List = exports.List = _styledComponents2.default.ol(_templateObject, function (props) {
  return props.ordered ? "number" : "none";
});

exports.default = List;