"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonDisabled = exports.Button = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n  border-radius: 4px;\n  border: 1px solid #0074d9;\n  text-transform: uppercase;\n  display: inline-block;\n  height: 3em;\n  padding: 0 2em;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 700;\n  line-height: 3em;\n  letter-spacing: 0.05rem;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: opacity 0.2s;\n  cursor: pointer;\n  box-sizing: border-box;\n  margin-bottom: 1rem;\n\n  &:hover {\n    opacity: 0.6;\n  }\n"], ["\n  background: ", ";\n  color: ", ";\n  border-radius: 4px;\n  border: 1px solid #0074d9;\n  text-transform: uppercase;\n  display: inline-block;\n  height: 3em;\n  padding: 0 2em;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 700;\n  line-height: 3em;\n  letter-spacing: 0.05rem;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: opacity 0.2s;\n  cursor: pointer;\n  box-sizing: border-box;\n  margin-bottom: 1rem;\n\n  &:hover {\n    opacity: 0.6;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  opacity: 0.5;\n  cursor: not-allowed;\n  pointer-events: none;\n  background: #fff;\n  color: #000;\n  border: 1px solid #000;\n"], ["\n  opacity: 0.5;\n  cursor: not-allowed;\n  pointer-events: none;\n  background: #fff;\n  color: #000;\n  border: 1px solid #000;\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = exports.Button = _styledComponents2.default.button(_templateObject, function (props) {
  return props.primary ? "#0074d9" : "transparent";
}, function (props) {
  return props.primary ? "#fff" : "#0074d9";
});

var ButtonDisabled = exports.ButtonDisabled = Button.withComponent("button").extend(_templateObject2);