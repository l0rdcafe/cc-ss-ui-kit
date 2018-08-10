"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.P = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 700;\n  font-size: 4rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n  color: #000;\n\n  @media (min-width: 550px) {\n    font-size: 5rem;\n  }\n"], ["\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 700;\n  font-size: 4rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n  color: #000;\n\n  @media (min-width: 550px) {\n    font-size: 5rem;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n\n  @media (min-width: 550px) {\n    font-size: 4.2rem;\n  }\n"], ["\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n\n  @media (min-width: 550px) {\n    font-size: 4.2rem;\n  }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  font-size: 3rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n\n  @media (min-width: 550px) {\n    font-size: 3.6rem;\n   }\n"], ["\n  font-size: 3rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n\n  @media (min-width: 550px) {\n    font-size: 3.6rem;\n   }\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  font-size: 2.4rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n\n  @media (min-width: 550px) {\n    font-size: 3rem;\n   }\n"], ["\n  font-size: 2.4rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n\n  @media (min-width: 550px) {\n    font-size: 3rem;\n   }\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n\n  @media (min-width: 550px) {\n    font-size: 2.4rem;\n   }\n"], ["\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n\n  @media (min-width: 550px) {\n    font-size: 2.4rem;\n   }\n"]),
    _templateObject6 = _taggedTemplateLiteral(["\n  font-size: 1.5rem;\n  line-height: 1.6;\n  letter-spacing: 0;\n\n  @media (min-width: 550px) {\n    font-size: 1.5rem;\n  }\n"], ["\n  font-size: 1.5rem;\n  line-height: 1.6;\n  letter-spacing: 0;\n\n  @media (min-width: 550px) {\n    font-size: 1.5rem;\n  }\n"]),
    _templateObject7 = _taggedTemplateLiteral(["\n  margin-top: 0;\n  color: ", ";\n  text-align: ", ";\n"], ["\n  margin-top: 0;\n  color: ", ";\n  text-align: ", ";\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var H1 = exports.H1 = _styledComponents2.default.h1(_templateObject);

var H2 = exports.H2 = H1.withComponent("h2").extend(_templateObject2);

var H3 = exports.H3 = H2.withComponent("h3").extend(_templateObject3);

var H4 = exports.H4 = H3.withComponent("h4").extend(_templateObject4);

var H5 = exports.H5 = H4.withComponent("h4").extend(_templateObject5);

var H6 = exports.H6 = H5.withComponent("h4").extend(_templateObject6);

var P = exports.P = _styledComponents2.default.p(_templateObject7, function (props) {
  return props.primary ? "#000" : "#fff";
}, function (props) {
  return props.align ? props.align : "left";
});