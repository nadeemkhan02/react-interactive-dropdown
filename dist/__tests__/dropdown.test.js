"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _DynamicDropdown = _interopRequireDefault(require("../components/DynamicDropdown"));
require("@testing-library/jest-dom");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // import '@testing-library/jest-dom/extend-expect'; // Needed for `toBeInTheDocument` matcher
var mockOnChange = jest.fn();
var defaultProps = {
  selectionList: [{
    value: 1,
    label: 'Option 1'
  }, {
    value: 2,
    label: 'Option 2'
  }, {
    value: 3,
    label: 'Option 3'
  }],
  placeholder: 'Select an option',
  onChange: mockOnChange,
  name: 'search-box',
  label: 'Search Box',
  isSearchable: true
};
describe('SearchBoxSelect Component', function () {
  beforeAll(function () {
    global.IntersectionObserver = /*#__PURE__*/function () {
      function _class() {
        _classCallCheck(this, _class);
      }
      return _createClass(_class, [{
        key: "observe",
        value: function observe() {}
      }, {
        key: "disconnect",
        value: function disconnect() {}
      }]);
    }();
  });
  beforeEach(function () {
    mockOnChange.mockClear();
  });
  test('renders the component with placeholder', function () {
    (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_DynamicDropdown["default"], _objectSpread({}, defaultProps)));
    expect(_react2.screen.getByText('Select an option')).toBeInTheDocument();
    expect(_react2.screen.getByText('Search Box')).toBeInTheDocument();
  });
  test('opens dropdown when clicked', function () {
    (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_DynamicDropdown["default"], _objectSpread({}, defaultProps)));
    var dropdown = _react2.screen.getByText('Select an option');
    _react2.fireEvent.click(dropdown);
    expect(_react2.screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });
  test('calls onChange when an option is selected', function () {
    (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_DynamicDropdown["default"], _objectSpread({}, defaultProps)));
    _react2.fireEvent.click(_react2.screen.getByText('Select an option'));
    _react2.fireEvent.click(_react2.screen.getByText('Option 2'));
    expect(mockOnChange).toHaveBeenCalledWith({
      value: 2,
      label: 'Option 2'
    });
    expect(_react2.screen.getByText('Option 2')).toBeInTheDocument();
  });
  test('renders with a default selected value', function () {
    var propsWithValue = _objectSpread(_objectSpread({}, defaultProps), {}, {
      value: {
        value: 1,
        label: 'Option 1'
      }
    });
    (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_DynamicDropdown["default"], _objectSpread({}, propsWithValue)));
    expect(_react2.screen.getByText('Option 1')).toBeInTheDocument();
  });
  test('closes dropdown after selecting an option', function () {
    (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_DynamicDropdown["default"], _objectSpread({}, defaultProps)));
    _react2.fireEvent.click(_react2.screen.getByText('Select an option'));
    _react2.fireEvent.click(_react2.screen.getByText('Option 2'));
    expect(_react2.screen.queryByPlaceholderText('Search...')).not.toBeInTheDocument();
  });
  test('displays all options when search input is cleared', function () {
    (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_DynamicDropdown["default"], _objectSpread({}, defaultProps)));
    _react2.fireEvent.click(_react2.screen.getByText('Select an option'));
    _react2.fireEvent.change(_react2.screen.getByPlaceholderText('Search...'), {
      target: {
        value: 'Option'
      }
    });
    _react2.fireEvent.change(_react2.screen.getByPlaceholderText('Search...'), {
      target: {
        value: ''
      }
    });
    expect(_react2.screen.getByText('Option 1')).toBeInTheDocument();
    expect(_react2.screen.getByText('Option 2')).toBeInTheDocument();
    expect(_react2.screen.getByText('Option 3')).toBeInTheDocument();
  });
  test('closes the dropdown when clicking outside', function () {
    (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_DynamicDropdown["default"], _objectSpread({}, defaultProps)));
    var dropdown = _react2.screen.getByText('Select an option');
    _react2.fireEvent.click(dropdown);
    _react2.fireEvent.mouseDown(document);
    expect(_react2.screen.queryByPlaceholderText('Search...')).not.toBeInTheDocument();
  });
  test('displays options matching search input, case-insensitive', function () {
    (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_DynamicDropdown["default"], _objectSpread({}, defaultProps)));
    _react2.fireEvent.click(_react2.screen.getByText('Select an option'));
    _react2.fireEvent.change(_react2.screen.getByPlaceholderText('Search...'), {
      target: {
        value: 'option 2'
      }
    });
    expect(_react2.screen.getByText('Option 2')).toBeInTheDocument();
  });
});