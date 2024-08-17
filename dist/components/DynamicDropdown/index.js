"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _reactWindow = require("react-window");
var _arrowDownLightGrey = _interopRequireDefault(require("../../assets/arrowDownLightGrey.svg"));
require("./dynamicSearch.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function InteractiveDropdown(_ref) {
  var _ref$selectionList = _ref.selectionList,
    selectionList = _ref$selectionList === void 0 ? [] : _ref$selectionList,
    placeholder = _ref.placeholder,
    labelKeys = _ref.labelKeys,
    valueKey = _ref.valueKey,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? null : _ref$value,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function (e) {} : _ref$onChange,
    _ref$autoFormat = _ref.autoFormat,
    autoFormat = _ref$autoFormat === void 0 ? false : _ref$autoFormat,
    name = _ref.name,
    isRequired = _ref.isRequired,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? null : _ref$label,
    _ref$isSearchable = _ref.isSearchable,
    isSearchable = _ref$isSearchable === void 0 ? true : _ref$isSearchable,
    _ref$isMultiSelect = _ref.isMultiSelect,
    isMultiSelect = _ref$isMultiSelect === void 0 ? false : _ref$isMultiSelect,
    _ref$withCheckBox = _ref.withCheckBox,
    withCheckBox = _ref$withCheckBox === void 0 ? false : _ref$withCheckBox,
    _ref$withChips = _ref.withChips,
    withChips = _ref$withChips === void 0 ? false : _ref$withChips,
    _ref$iconComponent = _ref.iconComponent,
    iconComponent = _ref$iconComponent === void 0 ? null : _ref$iconComponent,
    _ref$isDisabled = _ref.isDisabled,
    isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
    _ref$endAdornment = _ref.endAdornment,
    endAdornment = _ref$endAdornment === void 0 ? null : _ref$endAdornment,
    chipStyle = _ref.chipStyle,
    _ref$isServerSideSear = _ref.isServerSideSearch,
    isServerSideSearch = _ref$isServerSideSear === void 0 ? false : _ref$isServerSideSear,
    _ref$onSearchQueryCha = _ref.onSearchQueryChange,
    onSearchQueryChange = _ref$onSearchQueryCha === void 0 ? function (e) {} : _ref$onSearchQueryCha,
    menuWidth = _ref.menuWidth,
    _ref$isComponentOptio = _ref.isComponentOptions,
    isComponentOptions = _ref$isComponentOptio === void 0 ? false : _ref$isComponentOptio,
    _ref$onLastRowInterse = _ref.onLastRowIntersect,
    onLastRowIntersect = _ref$onLastRowInterse === void 0 ? function () {} : _ref$onLastRowInterse,
    _ref$isPagination = _ref.isPagination,
    isPagination = _ref$isPagination === void 0 ? false : _ref$isPagination;
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    searchText = _useState2[0],
    setSearchText = _useState2[1];
  var _useState3 = (0, _react.useState)(value),
    _useState4 = _slicedToArray(_useState3, 2),
    selection = _useState4[0],
    setSelection = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    selectOptions = _useState6[0],
    setSelectOptions = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    multiSelection = _useState8[0],
    setMultiSelection = _useState8[1];
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    displayOptions = _useState10[0],
    setDisplayOptions = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    open = _useState12[0],
    setOpen = _useState12[1];
  var observer = (0, _react.useRef)();
  var lastElementRef = (0, _react.useCallback)(function (node) {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        console.log("test-intersection");
        onLastRowIntersect();
      }
    });
    if (node) observer.current.observe(node);
  }, []);
  function useClickOutside(ref, onClickOutside) {
    (0, _react.useEffect)(function () {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          onClickOutside();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return function () {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, onClickOutside]);
  }
  var wrapperRef = (0, _react.useRef)("menu");
  useClickOutside(wrapperRef, function () {
    setOpen(false);
  });
  (0, _react.useEffect)(function () {
    var array = [];
    if (autoFormat) {
      array = selectionList.map(function (tag) {
        var label = [];
        labelKeys.map(function (w) {
          label.push(tag[w]);
        });
        return {
          value: tag[valueKey],
          label: label.join(" ")
        };
      });
    } else {
      array = _toConsumableArray(selectionList);
    }
    setSelectOptions(array);
    setDisplayOptions(array);
  }, [selectionList]);
  (0, _react.useEffect)(function () {
    if (isMultiSelect) {
      setMultiSelection(value);
    } else {
      setSelection(value);
    }
  }, [selectionList, value]);
  var handleSelect = function handleSelect(e) {
    onChange(e);
    setSelection(e);
    setSearchText("");
    setOpen(false);
  };
  var handleMultiSelect = function handleMultiSelect(e) {
    var MultiSelection = _toConsumableArray(multiSelection);
    if (MultiSelection.indexOf(e) > -1) {
      MultiSelection.splice(MultiSelection.indexOf(e), 1);
    } else {
      MultiSelection.push(e);
    }
    setMultiSelection(MultiSelection);
    onChange(MultiSelection);
  };
  var handleMultiSelectDelete = function handleMultiSelectDelete(e) {
    var MultiSelection = _toConsumableArray(multiSelection);
    MultiSelection.splice(MultiSelection.indexOf(e), 1);
    setMultiSelection(MultiSelection);
    onChange(MultiSelection);
    setOpen(open);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: {
      padding: "5px"
    },
    children: [label && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      htmlFor: name,
      required: isRequired,
      className: "inputfield-label",
      children: label
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      id: name,
      style: {
        padding: "10px 10px 10px 10px",
        border: "1px solid #8e8d8d",
        borderRadius: "6px",
        display: "flex",
        minHeight: "35px",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
        width: menuWidth ? menuWidth : "100%",
        pointerEvents: isDisabled ? "none" : "all",
        opacity: isDisabled ? 0.5 : 1
      },
      onClick: function onClick() {
        setOpen(!open);
      },
      ref: wrapperRef,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: isMultiSelect && multiSelection !== null && multiSelection !== void 0 && multiSelection.length && !withChips > 0 ? multiSelection.map(function (select, key) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "chip",
              style: _objectSpread({}, chipStyle),
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: select.label
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                className: "closeButton",
                onClick: function onClick() {
                  return handleMultiSelectDelete(select);
                },
                children: "\u2715 "
              })]
            }, select.value)
          });
        }) : null
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: selection ? selection.label : placeholder
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: _arrowDownLightGrey["default"],
          alt: "",
          style: {
            transition: "all .2s ease"
          }
        })
      })]
    }), isMultiSelect ? renderMultiSelectMenu() : renderSelectMenu(), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      sx: {
        mt: 1
      },
      children: isMultiSelect && multiSelection !== null && multiSelection !== void 0 && multiSelection.length && withChips && !open > 0 ? multiSelection.map(function (select, key) {
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "chip",
          style: _objectSpread({}, chipStyle),
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: select.label
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            className: "closeButton",
            onClick: function onClick() {
              return handleMultiSelectDelete(select);
            },
            children: "\u2715 "
          })]
        }, select.value);
      }) : null
    })]
  });
  function renderSelectMenu() {
    var handleSearchChange = function handleSearchChange(e) {
      setSearchText(e.target.value);
      var DisplayOptions = selectOptions.map(function (item) {
        return item;
      }).filter(function (item) {
        return item !== undefined;
      });
      setDisplayOptions(DisplayOptions);
    };
    function renderOption(value) {
      var _value$label3, _value$label4;
      if ((selection === null || selection === void 0 ? void 0 : selection.value) === (value === null || value === void 0 ? void 0 : value.value)) {
        var _value$label, _value$label2;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
          children: isComponentOptions ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "value-label",
            children: value.html
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "value-label",
            children: ((_value$label = value.label) === null || _value$label === void 0 ? void 0 : _value$label.length) <= 30 ? "".concat(value === null || value === void 0 ? void 0 : value.label) : "".concat(value === null || value === void 0 || (_value$label2 = value.label) === null || _value$label2 === void 0 ? void 0 : _value$label2.substring(0, 30), "...")
          })
        });
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: isComponentOptions ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "value-label",
          children: value.component
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "value-label",
          children: ((_value$label3 = value.label) === null || _value$label3 === void 0 ? void 0 : _value$label3.length) <= 30 ? "".concat(value === null || value === void 0 ? void 0 : value.label) : "".concat(value === null || value === void 0 || (_value$label4 = value.label) === null || _value$label4 === void 0 ? void 0 : _value$label4.substring(0, 30), "...")
        })
      });
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: open && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        // TODO : Menu ...
        sx: {
          p: 0,
          mt: 0.7
        },
        keepMounted: true,
        ref: wrapperRef,
        style: {
          width: menuWidth ? menuWidth : "100%",
          border: "1px solid gray",
          padding: "5px",
          borderRadius: "5px",
          marginTop: "5px"
        },
        className: "main-menu-container",
        children: [isSearchable && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "menu-search-div",
          style: {
            width: "100%"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            onChange: isServerSideSearch ? onSearchQueryChange : handleSearchChange,
            placeholder: "Search...",
            value: searchText,
            className: "menu-search-input"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "menu-list-div",
          style: {
            maxHeight: "200px"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactWindow.FixedSizeList, {
            style: {
              scrollbarWidth: "thin",
              textWrap: "pretty",
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                width: "5px",
                height: "0px"
              }
            },
            itemCount: displayOptions === null || displayOptions === void 0 ? void 0 : displayOptions.length,
            itemSize: 40,
            height: 200,
            width: "100%",
            className: "menu-list"
            // ref={setLastElement}
            ,
            children: function children(_ref2) {
              var index = _ref2.index,
                style = _ref2.style;
              return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "menu-div",
                style: style,
                ref: isPagination ? (displayOptions === null || displayOptions === void 0 ? void 0 : displayOptions.length) === index + 1 ? lastElementRef : null : null,
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "styled-menu-div",
                  onClick: function onClick() {
                    return handleSelect(displayOptions[index]);
                  },
                  children: [iconComponent && iconComponent(displayOptions[index]), renderOption(displayOptions[index]), endAdornment && endAdornment(displayOptions[index])]
                })
              });
            }
          })
        })]
      })
    });
  }
  function renderMultiSelectMenu() {
    function renderOption(value) {
      if ((selection === null || selection === void 0 ? void 0 : selection.value) === (value === null || value === void 0 ? void 0 : value.value)) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "value-label",
          children: isComponentOptions ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
            children: value.component
          }) : value.label
        });
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "value-label",
        children: isComponentOptions ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
          children: value.component
        }) : value.label
      });
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: open && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        sx: {
          p: 0,
          mt: 0.7
        },
        keepMounted: true,
        ref: wrapperRef,
        style: {
          width: menuWidth ? menuWidth : "100%",
          border: "1px solid gray",
          padding: "5px",
          borderRadius: "5px",
          marginTop: "5px"
        },
        className: "main-menu-container",
        children: [isSearchable && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: {
            width: "100%"
          },
          className: "menu-search-div",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            onChange: isServerSideSearch ? onSearchQueryChange : function (e) {
              setSearchText(e.target.value);
              var DisplayOptions = selectOptions.map(function (item) {
                var _item$label, _e$target$value;
                if (item !== null && item !== void 0 && (_item$label = item.label) !== null && _item$label !== void 0 && _item$label.toLowerCase().includes((_e$target$value = e.target.value) === null || _e$target$value === void 0 ? void 0 : _e$target$value.toLowerCase())) {
                  return item;
                }
                return undefined;
              }).filter(function (item) {
                return item !== undefined;
              });
              setDisplayOptions(DisplayOptions);
            },
            placeholder: "Search...",
            value: searchText,
            className: "menu-search-input"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "menu-container",
          style: {
            maxHeight: "250px",
            overflowY: "auto",
            margin: "10px 0px 10px 0px"
          },
          children: displayOptions.length > 0 ? displayOptions.map(function (item, index) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              ref: isPagination ? (displayOptions === null || displayOptions === void 0 ? void 0 : displayOptions.length) === index + 1 ? lastElementRef : null : null,
              className: "menu-div",
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: multiSelection.indexOf(item) > -1 ? "selected-styled-menu-div" : "styled-menu-div",
                onClick: function onClick() {
                  return handleMultiSelect(item);
                },
                children: [withCheckBox && /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                  required: true,
                  type: "checkbox",
                  checked: multiSelection.indexOf(item) > -1,
                  className: "menu-checkbox"
                }), renderOption(item)]
              })
            }, index);
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "no-option-div",
            style: {
              display: "flex",
              justifyContent: "center"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "no-option-span",
              children: "No Options"
            })
          })
        })]
      })
    });
  }
}
var _default = exports["default"] = InteractiveDropdown;