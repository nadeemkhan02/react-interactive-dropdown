"use strict";

var _react = require("@testing-library/react");
var _InputField = _interopRequireDefault(require("../components/InputField"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(_react.cleanup);
it('CheckboxWithLabel changes the text after click', function () {
  var _render = (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField["default"], {
      labelOn: "On",
      labelOff: "Off"
    })),
    queryByLabelText = _render.queryByLabelText,
    getByLabelText = _render.getByLabelText;
  expect(queryByLabelText(/off/i)).toBeTruthy();
  _react.fireEvent.click(getByLabelText(/off/i));
  expect(queryByLabelText(/on/i)).toBeTruthy();
});