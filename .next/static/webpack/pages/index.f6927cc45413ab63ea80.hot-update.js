webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_zoe_Sites_HOMEWORK_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! process */ \"./node_modules/process/browser.js\");\n/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"/Users/zoe/Sites/HOMEWORK/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(\"\"),\n      inputValue = _useState[0],\n      setInputValue = _useState[1]; // let storage = localStorage.getItem(\"lists\") ? localStorage.getItem(\"lists\") : [];\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])([]),\n      lists = _useState2[0],\n      setLists = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false),\n      showDialog = _useState3[0],\n      setShowDialog = _useState3[1];\n\n  function showDialogFn() {\n    setShowDialog(true);\n  }\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(\"\"),\n      name = _useState4[0],\n      setName = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(\"\"),\n      url = _useState5[0],\n      setUrl = _useState5[1];\n\n  function remove(index) {\n    var newlist = Object(_Users_zoe_Sites_HOMEWORK_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(lists);\n\n    newlist.splice(index, 1);\n    setLists(newlist);\n    localStorage.setItem(\"lists\", newlist);\n  }\n\n  function clear() {\n    setShowDialog(false);\n    setName(\"\");\n    setUrl(\"\");\n  }\n\n  function save() {\n    if (!name || !url) {\n      alert(\"请输入名称和网址\");\n      return;\n    }\n\n    var newurl;\n\n    if (url.indexOf(\"http\") >= 0) {\n      var domain = url.split(\"/\");\n      newurl = domain[2] ? domain[2] : null;\n    }\n\n    var newLists = [].concat(Object(_Users_zoe_Sites_HOMEWORK_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(lists), [{\n      name: name,\n      url: url,\n      img: newurl ? \"https://\" + newurl + \"/favicon.ico\" : null\n    }]);\n    setLists(newLists);\n    localStorage.setItem(\"lists\", newlist);\n    clear();\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.container,\n    children: [showDialog ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.dialog,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: \"\\u6DFB\\u52A0\\u5FEB\\u6377\\u65B9\\u5F0F\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: \"\\u540D\\u79F0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        value: name,\n        onChange: function onChange(e) {\n          return setName(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: \"\\u7F51\\u5740\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        value: url,\n        onChange: function onChange(e) {\n          return setUrl(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.btns,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.btn,\n          onClick: clear,\n          children: \"\\u5220\\u9664\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.btn,\n            onClick: clear,\n            children: \"\\u53D6\\u6D88\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.btn,\n            onClick: save,\n            children: \"\\u5B8C\\u6210\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Google Search\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.main,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.icons,\n        src: \"/google_logo.svg\",\n        alt: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.search,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.icons,\n          src: \"/search.png\",\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.input,\n          type: \"text\",\n          value: inputValue,\n          onChange: function onChange(e) {\n            return setInputValue(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.icons,\n          src: \"/audio.png\",\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.ul,\n        children: [lists.map(function (item, index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: item.url,\n            target: \"_blank\",\n            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.li,\n            children: [item.img ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.pic,\n              src: item.img,\n              alt: \"\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 100,\n              columnNumber: 19\n            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.pic,\n              src: \"/failedLogo.png\",\n              alt: \"\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 102,\n              columnNumber: 19\n            }, _this), item.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.remove,\n              src: \"/removeLogo.png\",\n              alt: \"\",\n              onClick: function onClick() {\n                return remove(index);\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 105,\n              columnNumber: 17\n            }, _this)]\n          }, index, true, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 15\n          }, _this);\n        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.li,\n          onClick: function onClick() {\n            return setShowDialog(true);\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.pic,\n            src: \"/addLogo.png\",\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 116,\n            columnNumber: 13\n          }, this), \"\\u6DFB\\u52A0\\u5FEB\\u6377\\u65B9\\u5F0F\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"QffgHt40rwegKxXbpthgQyskL+g=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsImxpc3RzIiwic2V0TGlzdHMiLCJzaG93RGlhbG9nIiwic2V0U2hvd0RpYWxvZyIsInNob3dEaWFsb2dGbiIsIm5hbWUiLCJzZXROYW1lIiwidXJsIiwic2V0VXJsIiwicmVtb3ZlIiwiaW5kZXgiLCJuZXdsaXN0Iiwic3BsaWNlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImNsZWFyIiwic2F2ZSIsImFsZXJ0IiwibmV3dXJsIiwiaW5kZXhPZiIsImRvbWFpbiIsInNwbGl0IiwibmV3TGlzdHMiLCJpbWciLCJzdHlsZXMiLCJjb250YWluZXIiLCJkaWFsb2ciLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJidG5zIiwiYnRuIiwibWFpbiIsImljb25zIiwic2VhcmNoIiwiaW5wdXQiLCJ1bCIsIm1hcCIsIml0ZW0iLCJsaSIsInBpYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDT0Msc0RBQVEsQ0FBQyxFQUFELENBRGY7QUFBQSxNQUN0QkMsVUFEc0I7QUFBQSxNQUNWQyxhQURVLGlCQUc3Qjs7O0FBSDZCLG1CQUlIRixzREFBUSxDQUFDLEVBQUQsQ0FKTDtBQUFBLE1BSXRCRyxLQUpzQjtBQUFBLE1BSWZDLFFBSmU7O0FBQUEsbUJBTU9KLHNEQUFRLENBQUMsS0FBRCxDQU5mO0FBQUEsTUFNdEJLLFVBTnNCO0FBQUEsTUFNVkMsYUFOVTs7QUFPN0IsV0FBU0MsWUFBVCxHQUF3QjtBQUN0QkQsaUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDRDs7QUFUNEIsbUJBV0xOLHNEQUFRLENBQUMsRUFBRCxDQVhIO0FBQUEsTUFXdEJRLElBWHNCO0FBQUEsTUFXaEJDLE9BWGdCOztBQUFBLG1CQVlQVCxzREFBUSxDQUFDLEVBQUQsQ0FaRDtBQUFBLE1BWXRCVSxHQVpzQjtBQUFBLE1BWWpCQyxNQVppQjs7QUFjN0IsV0FBU0MsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFDckIsUUFBSUMsT0FBTyxHQUFHLG1JQUFJWCxLQUFQLENBQVg7O0FBQ0FXLFdBQU8sQ0FBQ0MsTUFBUixDQUFlRixLQUFmLEVBQXNCLENBQXRCO0FBQ0FULFlBQVEsQ0FBQ1UsT0FBRCxDQUFSO0FBQ0FFLGdCQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJILE9BQTlCO0FBQ0Q7O0FBQ0QsV0FBU0ksS0FBVCxHQUFpQjtBQUNmWixpQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNBRyxXQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0FFLFVBQU0sQ0FBQyxFQUFELENBQU47QUFDRDs7QUFDRCxXQUFTUSxJQUFULEdBQWdCO0FBQ2QsUUFBSSxDQUFDWCxJQUFELElBQVMsQ0FBQ0UsR0FBZCxFQUFtQjtBQUNqQlUsV0FBSyxDQUFDLFVBQUQsQ0FBTDtBQUNBO0FBQ0Q7O0FBQ0QsUUFBSUMsTUFBSjs7QUFDQSxRQUFJWCxHQUFHLENBQUNZLE9BQUosQ0FBWSxNQUFaLEtBQXVCLENBQTNCLEVBQThCO0FBQzVCLFVBQUlDLE1BQU0sR0FBR2IsR0FBRyxDQUFDYyxLQUFKLENBQVUsR0FBVixDQUFiO0FBQ0FILFlBQU0sR0FBR0UsTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZQSxNQUFNLENBQUMsQ0FBRCxDQUFsQixHQUF3QixJQUFqQztBQUNEOztBQUNELFFBQUlFLFFBQVEsZ0pBQ1B0QixLQURPLElBRVY7QUFBRUssVUFBSSxFQUFKQSxJQUFGO0FBQVFFLFNBQUcsRUFBSEEsR0FBUjtBQUFhZ0IsU0FBRyxFQUFFTCxNQUFNLEdBQUcsYUFBYUEsTUFBYixHQUFzQixjQUF6QixHQUEwQztBQUFsRSxLQUZVLEVBQVo7QUFJQWpCLFlBQVEsQ0FBQ3FCLFFBQUQsQ0FBUjtBQUNBVCxnQkFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCSCxPQUE5QjtBQUNBSSxTQUFLO0FBQ047O0FBQ0Qsc0JBQ0U7QUFBSyxhQUFTLEVBQUVTLDhEQUFNLENBQUNDLFNBQXZCO0FBQUEsZUFDR3ZCLFVBQVUsZ0JBQ1Q7QUFBSyxlQUFTLEVBQUVzQiw4REFBTSxDQUFDRSxNQUF2QjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUU7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixhQUFLLEVBQUVyQixJQUExQjtBQUFnQyxnQkFBUSxFQUFFLGtCQUFDc0IsQ0FBRDtBQUFBLGlCQUFPckIsT0FBTyxDQUFDcUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZDtBQUFBO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFNRTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGFBQUssRUFBRXRCLEdBQTFCO0FBQStCLGdCQUFRLEVBQUUsa0JBQUNvQixDQUFEO0FBQUEsaUJBQU9uQixNQUFNLENBQUNtQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFiO0FBQUE7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBT0U7QUFBSyxpQkFBUyxFQUFFTCw4REFBTSxDQUFDTSxJQUF2QjtBQUFBLGdDQUNFO0FBQU0sbUJBQVMsRUFBRU4sOERBQU0sQ0FBQ08sR0FBeEI7QUFBNkIsaUJBQU8sRUFBRWhCLEtBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUU7QUFBQSxrQ0FDRTtBQUFNLHFCQUFTLEVBQUVTLDhEQUFNLENBQUNPLEdBQXhCO0FBQTZCLG1CQUFPLEVBQUVoQixLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUlFO0FBQU0scUJBQVMsRUFBRVMsOERBQU0sQ0FBQ08sR0FBeEI7QUFBNkIsbUJBQU8sRUFBRWYsSUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURTLEdBc0JQLElBdkJOLGVBeUJFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6QkYsZUE4QkU7QUFBTSxlQUFTLEVBQUVRLDhEQUFNLENBQUNRLElBQXhCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFUiw4REFBTSxDQUFDUyxLQUF2QjtBQUE4QixXQUFHLEVBQUMsa0JBQWxDO0FBQXFELFdBQUcsRUFBQztBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFHRTtBQUFLLGlCQUFTLEVBQUVULDhEQUFNLENBQUNVLE1BQXZCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFViw4REFBTSxDQUFDUyxLQUF2QjtBQUE4QixhQUFHLEVBQUMsYUFBbEM7QUFBZ0QsYUFBRyxFQUFDO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUNFLG1CQUFTLEVBQUVULDhEQUFNLENBQUNXLEtBRHBCO0FBRUUsY0FBSSxFQUFDLE1BRlA7QUFHRSxlQUFLLEVBQUVyQyxVQUhUO0FBSUUsa0JBQVEsRUFBRSxrQkFBQzZCLENBQUQ7QUFBQSxtQkFBTzVCLGFBQWEsQ0FBQzRCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXBCO0FBQUE7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBUUU7QUFBSyxtQkFBUyxFQUFFTCw4REFBTSxDQUFDUyxLQUF2QjtBQUE4QixhQUFHLEVBQUMsWUFBbEM7QUFBK0MsYUFBRyxFQUFDO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFjRTtBQUFLLGlCQUFTLEVBQUVULDhEQUFNLENBQUNZLEVBQXZCO0FBQUEsbUJBQ0dwQyxLQUFLLENBQUNxQyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPNUIsS0FBUCxFQUFpQjtBQUMxQiw4QkFDRTtBQUFHLGdCQUFJLEVBQUU0QixJQUFJLENBQUMvQixHQUFkO0FBQW1CLGtCQUFNLEVBQUMsUUFBMUI7QUFBK0MscUJBQVMsRUFBRWlCLDhEQUFNLENBQUNlLEVBQWpFO0FBQUEsdUJBQ0dELElBQUksQ0FBQ2YsR0FBTCxnQkFDQztBQUFLLHVCQUFTLEVBQUVDLDhEQUFNLENBQUNnQixHQUF2QjtBQUE0QixpQkFBRyxFQUFFRixJQUFJLENBQUNmLEdBQXRDO0FBQTJDLGlCQUFHLEVBQUM7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxnQkFHQztBQUFLLHVCQUFTLEVBQUVDLDhEQUFNLENBQUNnQixHQUF2QjtBQUE0QixpQkFBRyxFQUFDLGlCQUFoQztBQUFrRCxpQkFBRyxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkosRUFNR0YsSUFBSSxDQUFDakMsSUFOUixlQU9FO0FBQ0UsdUJBQVMsRUFBRW1CLDhEQUFNLENBQUNmLE1BRHBCO0FBRUUsaUJBQUcsRUFBQyxpQkFGTjtBQUdFLGlCQUFHLEVBQUMsRUFITjtBQUlFLHFCQUFPLEVBQUU7QUFBQSx1QkFBTUEsTUFBTSxDQUFDQyxLQUFELENBQVo7QUFBQTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEY7QUFBQSxhQUF3Q0EsS0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQWdCRCxTQWpCQSxDQURILGVBb0JFO0FBQUksbUJBQVMsRUFBRWMsOERBQU0sQ0FBQ2UsRUFBdEI7QUFBMEIsaUJBQU8sRUFBRTtBQUFBLG1CQUFNcEMsYUFBYSxDQUFDLElBQUQsQ0FBbkI7QUFBQSxXQUFuQztBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBRXFCLDhEQUFNLENBQUNnQixHQUF2QjtBQUE0QixlQUFHLEVBQUMsY0FBaEM7QUFBK0MsZUFBRyxFQUFDO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE5QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5RUQ7O0dBcEh1QjVDLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHNldHVpZCB9IGZyb20gXCJwcm9jZXNzXCI7XG5pbXBvcnQgeyBmdW5jIH0gZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAvLyBsZXQgc3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlzdHNcIikgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpc3RzXCIpIDogW107XG4gIGNvbnN0IFtsaXN0cywgc2V0TGlzdHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IFtzaG93RGlhbG9nLCBzZXRTaG93RGlhbG9nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgZnVuY3Rpb24gc2hvd0RpYWxvZ0ZuKCkge1xuICAgIHNldFNob3dEaWFsb2codHJ1ZSk7XG4gIH1cblxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGZ1bmN0aW9uIHJlbW92ZShpbmRleCkge1xuICAgIGxldCBuZXdsaXN0ID0gWy4uLmxpc3RzXTtcbiAgICBuZXdsaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgc2V0TGlzdHMobmV3bGlzdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaXN0c1wiLCBuZXdsaXN0KTtcbiAgfVxuICBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICBzZXRTaG93RGlhbG9nKGZhbHNlKTtcbiAgICBzZXROYW1lKFwiXCIpO1xuICAgIHNldFVybChcIlwiKTtcbiAgfVxuICBmdW5jdGlvbiBzYXZlKCkge1xuICAgIGlmICghbmFtZSB8fCAhdXJsKSB7XG4gICAgICBhbGVydChcIuivt+i+k+WFpeWQjeensOWSjOe9keWdgFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IG5ld3VybDtcbiAgICBpZiAodXJsLmluZGV4T2YoXCJodHRwXCIpID49IDApIHtcbiAgICAgIGxldCBkb21haW4gPSB1cmwuc3BsaXQoXCIvXCIpO1xuICAgICAgbmV3dXJsID0gZG9tYWluWzJdID8gZG9tYWluWzJdIDogbnVsbDtcbiAgICB9XG4gICAgbGV0IG5ld0xpc3RzID0gW1xuICAgICAgLi4ubGlzdHMsXG4gICAgICB7IG5hbWUsIHVybCwgaW1nOiBuZXd1cmwgPyBcImh0dHBzOi8vXCIgKyBuZXd1cmwgKyBcIi9mYXZpY29uLmljb1wiIDogbnVsbCB9LFxuICAgIF07XG4gICAgc2V0TGlzdHMobmV3TGlzdHMpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGlzdHNcIiwgbmV3bGlzdCk7XG4gICAgY2xlYXIoKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIHtzaG93RGlhbG9nID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpYWxvZ30+XG4gICAgICAgICAgPGgzPua3u+WKoOW/q+aNt+aWueW8jzwvaDM+XG5cbiAgICAgICAgICA8ZGl2PuWQjeensDwvZGl2PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgIDxkaXY+572R5Z2APC9kaXY+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3VybH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRVcmwoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnRuc30+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5idG59IG9uQ2xpY2s9e2NsZWFyfT5cbiAgICAgICAgICAgICAg5Yig6ZmkXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5idG59IG9uQ2xpY2s9e2NsZWFyfT5cbiAgICAgICAgICAgICAgICDlj5bmtohcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5idG59IG9uQ2xpY2s9e3NhdmV9PlxuICAgICAgICAgICAgICAgIOWujOaIkFxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cblxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Hb29nbGUgU2VhcmNoPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pY29uc30gc3JjPVwiL2dvb2dsZV9sb2dvLnN2Z1wiIGFsdD1cIlwiIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2h9PlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbnN9IHNyYz1cIi9zZWFyY2gucG5nXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pY29uc30gc3JjPVwiL2F1ZGlvLnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudWx9PlxuICAgICAgICAgIHtsaXN0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8YSBocmVmPXtpdGVtLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCIga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMubGl9PlxuICAgICAgICAgICAgICAgIHtpdGVtLmltZyA/IChcbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMucGljfSBzcmM9e2l0ZW0uaW1nfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLnBpY30gc3JjPVwiL2ZhaWxlZExvZ28ucG5nXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucmVtb3ZlfVxuICAgICAgICAgICAgICAgICAgc3JjPVwiL3JlbW92ZUxvZ28ucG5nXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmUoaW5kZXgpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubGl9IG9uQ2xpY2s9eygpID0+IHNldFNob3dEaWFsb2codHJ1ZSl9PlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5waWN9IHNyYz1cIi9hZGRMb2dvLnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICDmt7vliqDlv6vmjbfmlrnlvI9cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})