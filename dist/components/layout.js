"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Section = exports.Hero = exports.Container = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 20px;\n  box-sizing: border-box;\n\n  @media (max-width: 400px) {\n    width: 80%;\n  }\n\n  @media (max-width: 550px) {\n    width: 85%;\n    padding: 0;\n  }\n"], ["\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 20px;\n  box-sizing: border-box;\n\n  @media (max-width: 400px) {\n    width: 80%;\n  }\n\n  @media (max-width: 550px) {\n    width: 85%;\n    padding: 0;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  height: ", ";\n\n  .hero__body {\n    padding: 2%;\n    height: 100%;\n    width: 80%;\n    display: flex;\n    align-items: center;\n  }\n"], ["\n  height: ", ";\n\n  .hero__body {\n    padding: 2%;\n    height: 100%;\n    width: 80%;\n    display: flex;\n    align-items: center;\n  }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  padding: 2.5%;\n  margin: 1.5%;\n\n  .section__body {\n    padding: 2%;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n  }\n"], ["\n  padding: 2.5%;\n  margin: 1.5%;\n\n  .section__body {\n    padding: 2%;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n  }\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = exports.Container = _styledComponents2.default.div(_templateObject);

var Hero = exports.Hero = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.size ? props.size * 20 : "20vh";
});

var Section = exports.Section = _styledComponents2.default.div(_templateObject3);