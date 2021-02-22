webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_zoe_Sites_HOMEWORK_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! process */ \"./node_modules/process/browser.js\");\n/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"/Users/zoe/Sites/HOMEWORK/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(\"\"),\n      inputValue = _useState[0],\n      setInputValue = _useState[1];\n\n  var window = window;\n\n  if (window) {\n    console.log(window);\n  } // let storage = localStorage.getItem(\"lists\") ? localStorage.getItem(\"lists\") : [];\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])([]),\n      lists = _useState2[0],\n      setLists = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false),\n      showDialog = _useState3[0],\n      setShowDialog = _useState3[1];\n\n  function showDialogFn() {\n    setShowDialog(true);\n  }\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(\"\"),\n      name = _useState4[0],\n      setName = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(\"\"),\n      url = _useState5[0],\n      setUrl = _useState5[1];\n\n  function remove(index) {\n    var newlist = Object(_Users_zoe_Sites_HOMEWORK_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(lists);\n\n    newlist.splice(index, 1);\n    setLists(newlist);\n    localStorage.setItem(\"lists\", newlist);\n  }\n\n  function clear() {\n    setShowDialog(false);\n    setName(\"\");\n    setUrl(\"\");\n  }\n\n  function save() {\n    if (!name || !url) {\n      alert(\"请输入名称和网址\");\n      return;\n    }\n\n    var newurl;\n\n    if (url.indexOf(\"http\") >= 0) {\n      var domain = url.split(\"/\");\n      newurl = domain[2] ? domain[2] : null;\n    }\n\n    var newLists = [].concat(Object(_Users_zoe_Sites_HOMEWORK_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(lists), [{\n      name: name,\n      url: url,\n      img: newurl ? \"https://\" + newurl + \"/favicon.ico\" : null\n    }]);\n    setLists(newLists);\n    localStorage.setItem(\"lists\", newlist);\n    clear();\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.container,\n    children: [showDialog ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.dialog,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: \"\\u6DFB\\u52A0\\u5FEB\\u6377\\u65B9\\u5F0F\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: \"\\u540D\\u79F0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        value: name,\n        onChange: function onChange(e) {\n          return setName(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: \"\\u7F51\\u5740\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        value: url,\n        onChange: function onChange(e) {\n          return setUrl(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.btns,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.btn,\n          onClick: clear,\n          children: \"\\u5220\\u9664\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.btn,\n            onClick: clear,\n            children: \"\\u53D6\\u6D88\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.btn,\n            onClick: save,\n            children: \"\\u5B8C\\u6210\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Google Search\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.main,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.icons,\n        src: \"/google_logo.svg\",\n        alt: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.search,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.icons,\n          src: \"/search.png\",\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.input,\n          type: \"text\",\n          value: inputValue,\n          onChange: function onChange(e) {\n            return setInputValue(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.icons,\n          src: \"/audio.png\",\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.ul,\n        children: [lists.map(function (item, index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: item.url,\n            target: \"_blank\",\n            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.li,\n            children: [item.img ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.pic,\n              src: item.img,\n              alt: \"\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 103,\n              columnNumber: 19\n            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.pic,\n              src: \"/failedLogo.png\",\n              alt: \"\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 105,\n              columnNumber: 19\n            }, _this), item.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.remove,\n              src: \"/removeLogo.png\",\n              alt: \"\",\n              onClick: function onClick() {\n                return remove(index);\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 108,\n              columnNumber: 17\n            }, _this)]\n          }, index, true, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 15\n          }, _this);\n        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.li,\n          onClick: function onClick() {\n            return setShowDialog(true);\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.pic,\n            src: \"/addLogo.png\",\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 119,\n            columnNumber: 13\n          }, this), \"\\u6DFB\\u52A0\\u5FEB\\u6377\\u65B9\\u5F0F\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"QffgHt40rwegKxXbpthgQyskL+g=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsIndpbmRvdyIsImNvbnNvbGUiLCJsb2ciLCJsaXN0cyIsInNldExpc3RzIiwic2hvd0RpYWxvZyIsInNldFNob3dEaWFsb2ciLCJzaG93RGlhbG9nRm4iLCJuYW1lIiwic2V0TmFtZSIsInVybCIsInNldFVybCIsInJlbW92ZSIsImluZGV4IiwibmV3bGlzdCIsInNwbGljZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJjbGVhciIsInNhdmUiLCJhbGVydCIsIm5ld3VybCIsImluZGV4T2YiLCJkb21haW4iLCJzcGxpdCIsIm5ld0xpc3RzIiwiaW1nIiwic3R5bGVzIiwiY29udGFpbmVyIiwiZGlhbG9nIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnRucyIsImJ0biIsIm1haW4iLCJpY29ucyIsInNlYXJjaCIsImlucHV0IiwidWwiLCJtYXAiLCJpdGVtIiwibGkiLCJwaWMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ09DLHNEQUFRLENBQUMsRUFBRCxDQURmO0FBQUEsTUFDdEJDLFVBRHNCO0FBQUEsTUFDVkMsYUFEVTs7QUFFN0IsTUFBSUMsTUFBTSxHQUFHQSxNQUFiOztBQUNBLE1BQUlBLE1BQUosRUFBWTtBQUNWQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjtBQUNELEdBTDRCLENBTTdCOzs7QUFONkIsbUJBT0hILHNEQUFRLENBQUMsRUFBRCxDQVBMO0FBQUEsTUFPdEJNLEtBUHNCO0FBQUEsTUFPZkMsUUFQZTs7QUFBQSxtQkFTT1Asc0RBQVEsQ0FBQyxLQUFELENBVGY7QUFBQSxNQVN0QlEsVUFUc0I7QUFBQSxNQVNWQyxhQVRVOztBQVU3QixXQUFTQyxZQUFULEdBQXdCO0FBQ3RCRCxpQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNEOztBQVo0QixtQkFjTFQsc0RBQVEsQ0FBQyxFQUFELENBZEg7QUFBQSxNQWN0QlcsSUFkc0I7QUFBQSxNQWNoQkMsT0FkZ0I7O0FBQUEsbUJBZVBaLHNEQUFRLENBQUMsRUFBRCxDQWZEO0FBQUEsTUFldEJhLEdBZnNCO0FBQUEsTUFlakJDLE1BZmlCOztBQWlCN0IsV0FBU0MsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFDckIsUUFBSUMsT0FBTyxHQUFHLG1JQUFJWCxLQUFQLENBQVg7O0FBQ0FXLFdBQU8sQ0FBQ0MsTUFBUixDQUFlRixLQUFmLEVBQXNCLENBQXRCO0FBQ0FULFlBQVEsQ0FBQ1UsT0FBRCxDQUFSO0FBQ0FFLGdCQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJILE9BQTlCO0FBQ0Q7O0FBQ0QsV0FBU0ksS0FBVCxHQUFpQjtBQUNmWixpQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNBRyxXQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0FFLFVBQU0sQ0FBQyxFQUFELENBQU47QUFDRDs7QUFDRCxXQUFTUSxJQUFULEdBQWdCO0FBQ2QsUUFBSSxDQUFDWCxJQUFELElBQVMsQ0FBQ0UsR0FBZCxFQUFtQjtBQUNqQlUsV0FBSyxDQUFDLFVBQUQsQ0FBTDtBQUNBO0FBQ0Q7O0FBQ0QsUUFBSUMsTUFBSjs7QUFDQSxRQUFJWCxHQUFHLENBQUNZLE9BQUosQ0FBWSxNQUFaLEtBQXVCLENBQTNCLEVBQThCO0FBQzVCLFVBQUlDLE1BQU0sR0FBR2IsR0FBRyxDQUFDYyxLQUFKLENBQVUsR0FBVixDQUFiO0FBQ0FILFlBQU0sR0FBR0UsTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZQSxNQUFNLENBQUMsQ0FBRCxDQUFsQixHQUF3QixJQUFqQztBQUNEOztBQUNELFFBQUlFLFFBQVEsZ0pBQ1B0QixLQURPLElBRVY7QUFBRUssVUFBSSxFQUFKQSxJQUFGO0FBQVFFLFNBQUcsRUFBSEEsR0FBUjtBQUFhZ0IsU0FBRyxFQUFFTCxNQUFNLEdBQUcsYUFBYUEsTUFBYixHQUFzQixjQUF6QixHQUEwQztBQUFsRSxLQUZVLEVBQVo7QUFJQWpCLFlBQVEsQ0FBQ3FCLFFBQUQsQ0FBUjtBQUNBVCxnQkFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCSCxPQUE5QjtBQUNBSSxTQUFLO0FBQ047O0FBQ0Qsc0JBQ0U7QUFBSyxhQUFTLEVBQUVTLDhEQUFNLENBQUNDLFNBQXZCO0FBQUEsZUFDR3ZCLFVBQVUsZ0JBQ1Q7QUFBSyxlQUFTLEVBQUVzQiw4REFBTSxDQUFDRSxNQUF2QjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUU7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixhQUFLLEVBQUVyQixJQUExQjtBQUFnQyxnQkFBUSxFQUFFLGtCQUFDc0IsQ0FBRDtBQUFBLGlCQUFPckIsT0FBTyxDQUFDcUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZDtBQUFBO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFNRTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGFBQUssRUFBRXRCLEdBQTFCO0FBQStCLGdCQUFRLEVBQUUsa0JBQUNvQixDQUFEO0FBQUEsaUJBQU9uQixNQUFNLENBQUNtQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFiO0FBQUE7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBT0U7QUFBSyxpQkFBUyxFQUFFTCw4REFBTSxDQUFDTSxJQUF2QjtBQUFBLGdDQUNFO0FBQU0sbUJBQVMsRUFBRU4sOERBQU0sQ0FBQ08sR0FBeEI7QUFBNkIsaUJBQU8sRUFBRWhCLEtBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUU7QUFBQSxrQ0FDRTtBQUFNLHFCQUFTLEVBQUVTLDhEQUFNLENBQUNPLEdBQXhCO0FBQTZCLG1CQUFPLEVBQUVoQixLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUlFO0FBQU0scUJBQVMsRUFBRVMsOERBQU0sQ0FBQ08sR0FBeEI7QUFBNkIsbUJBQU8sRUFBRWYsSUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURTLEdBc0JQLElBdkJOLGVBeUJFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6QkYsZUE4QkU7QUFBTSxlQUFTLEVBQUVRLDhEQUFNLENBQUNRLElBQXhCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFUiw4REFBTSxDQUFDUyxLQUF2QjtBQUE4QixXQUFHLEVBQUMsa0JBQWxDO0FBQXFELFdBQUcsRUFBQztBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFHRTtBQUFLLGlCQUFTLEVBQUVULDhEQUFNLENBQUNVLE1BQXZCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFViw4REFBTSxDQUFDUyxLQUF2QjtBQUE4QixhQUFHLEVBQUMsYUFBbEM7QUFBZ0QsYUFBRyxFQUFDO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUNFLG1CQUFTLEVBQUVULDhEQUFNLENBQUNXLEtBRHBCO0FBRUUsY0FBSSxFQUFDLE1BRlA7QUFHRSxlQUFLLEVBQUV4QyxVQUhUO0FBSUUsa0JBQVEsRUFBRSxrQkFBQ2dDLENBQUQ7QUFBQSxtQkFBTy9CLGFBQWEsQ0FBQytCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXBCO0FBQUE7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBUUU7QUFBSyxtQkFBUyxFQUFFTCw4REFBTSxDQUFDUyxLQUF2QjtBQUE4QixhQUFHLEVBQUMsWUFBbEM7QUFBK0MsYUFBRyxFQUFDO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFjRTtBQUFLLGlCQUFTLEVBQUVULDhEQUFNLENBQUNZLEVBQXZCO0FBQUEsbUJBQ0dwQyxLQUFLLENBQUNxQyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPNUIsS0FBUCxFQUFpQjtBQUMxQiw4QkFDRTtBQUFHLGdCQUFJLEVBQUU0QixJQUFJLENBQUMvQixHQUFkO0FBQW1CLGtCQUFNLEVBQUMsUUFBMUI7QUFBK0MscUJBQVMsRUFBRWlCLDhEQUFNLENBQUNlLEVBQWpFO0FBQUEsdUJBQ0dELElBQUksQ0FBQ2YsR0FBTCxnQkFDQztBQUFLLHVCQUFTLEVBQUVDLDhEQUFNLENBQUNnQixHQUF2QjtBQUE0QixpQkFBRyxFQUFFRixJQUFJLENBQUNmLEdBQXRDO0FBQTJDLGlCQUFHLEVBQUM7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxnQkFHQztBQUFLLHVCQUFTLEVBQUVDLDhEQUFNLENBQUNnQixHQUF2QjtBQUE0QixpQkFBRyxFQUFDLGlCQUFoQztBQUFrRCxpQkFBRyxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkosRUFNR0YsSUFBSSxDQUFDakMsSUFOUixlQU9FO0FBQ0UsdUJBQVMsRUFBRW1CLDhEQUFNLENBQUNmLE1BRHBCO0FBRUUsaUJBQUcsRUFBQyxpQkFGTjtBQUdFLGlCQUFHLEVBQUMsRUFITjtBQUlFLHFCQUFPLEVBQUU7QUFBQSx1QkFBTUEsTUFBTSxDQUFDQyxLQUFELENBQVo7QUFBQTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEY7QUFBQSxhQUF3Q0EsS0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQWdCRCxTQWpCQSxDQURILGVBb0JFO0FBQUksbUJBQVMsRUFBRWMsOERBQU0sQ0FBQ2UsRUFBdEI7QUFBMEIsaUJBQU8sRUFBRTtBQUFBLG1CQUFNcEMsYUFBYSxDQUFDLElBQUQsQ0FBbkI7QUFBQSxXQUFuQztBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBRXFCLDhEQUFNLENBQUNnQixHQUF2QjtBQUE0QixlQUFHLEVBQUMsY0FBaEM7QUFBK0MsZUFBRyxFQUFDO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE5QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5RUQ7O0dBdkh1Qi9DLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHNldHVpZCB9IGZyb20gXCJwcm9jZXNzXCI7XG5pbXBvcnQgeyBmdW5jIH0gZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgbGV0IHdpbmRvdyA9IHdpbmRvdztcbiAgaWYgKHdpbmRvdykge1xuICAgIGNvbnNvbGUubG9nKHdpbmRvdyk7XG4gIH1cbiAgLy8gbGV0IHN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpc3RzXCIpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsaXN0c1wiKSA6IFtdO1xuICBjb25zdCBbbGlzdHMsIHNldExpc3RzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBbc2hvd0RpYWxvZywgc2V0U2hvd0RpYWxvZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGZ1bmN0aW9uIHNob3dEaWFsb2dGbigpIHtcbiAgICBzZXRTaG93RGlhbG9nKHRydWUpO1xuICB9XG5cbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBmdW5jdGlvbiByZW1vdmUoaW5kZXgpIHtcbiAgICBsZXQgbmV3bGlzdCA9IFsuLi5saXN0c107XG4gICAgbmV3bGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHNldExpc3RzKG5ld2xpc3QpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGlzdHNcIiwgbmV3bGlzdCk7XG4gIH1cbiAgZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgc2V0U2hvd0RpYWxvZyhmYWxzZSk7XG4gICAgc2V0TmFtZShcIlwiKTtcbiAgICBzZXRVcmwoXCJcIik7XG4gIH1cbiAgZnVuY3Rpb24gc2F2ZSgpIHtcbiAgICBpZiAoIW5hbWUgfHwgIXVybCkge1xuICAgICAgYWxlcnQoXCLor7fovpPlhaXlkI3np7DlkoznvZHlnYBcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBuZXd1cmw7XG4gICAgaWYgKHVybC5pbmRleE9mKFwiaHR0cFwiKSA+PSAwKSB7XG4gICAgICBsZXQgZG9tYWluID0gdXJsLnNwbGl0KFwiL1wiKTtcbiAgICAgIG5ld3VybCA9IGRvbWFpblsyXSA/IGRvbWFpblsyXSA6IG51bGw7XG4gICAgfVxuICAgIGxldCBuZXdMaXN0cyA9IFtcbiAgICAgIC4uLmxpc3RzLFxuICAgICAgeyBuYW1lLCB1cmwsIGltZzogbmV3dXJsID8gXCJodHRwczovL1wiICsgbmV3dXJsICsgXCIvZmF2aWNvbi5pY29cIiA6IG51bGwgfSxcbiAgICBdO1xuICAgIHNldExpc3RzKG5ld0xpc3RzKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxpc3RzXCIsIG5ld2xpc3QpO1xuICAgIGNsZWFyKCk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICB7c2hvd0RpYWxvZyA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaWFsb2d9PlxuICAgICAgICAgIDxoMz7mt7vliqDlv6vmjbfmlrnlvI88L2gzPlxuXG4gICAgICAgICAgPGRpdj7lkI3np7A8L2Rpdj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICA8ZGl2Pue9keWdgDwvZGl2PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt1cmx9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXJsKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ0bnN9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYnRufSBvbkNsaWNrPXtjbGVhcn0+XG4gICAgICAgICAgICAgIOWIoOmZpFxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYnRufSBvbkNsaWNrPXtjbGVhcn0+XG4gICAgICAgICAgICAgICAg5Y+W5raIXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYnRufSBvbkNsaWNrPXtzYXZlfT5cbiAgICAgICAgICAgICAgICDlrozmiJBcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+R29vZ2xlIFNlYXJjaDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbnN9IHNyYz1cIi9nb29nbGVfbG9nby5zdmdcIiBhbHQ9XCJcIiAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNofT5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmljb25zfSBzcmM9XCIvc2VhcmNoLnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbnN9IHNyYz1cIi9hdWRpby5wbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVsfT5cbiAgICAgICAgICB7bGlzdHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbS51cmx9IHRhcmdldD1cIl9ibGFua1wiIGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLmxpfT5cbiAgICAgICAgICAgICAgICB7aXRlbS5pbWcgPyAoXG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLnBpY30gc3JjPXtpdGVtLmltZ30gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5waWN9IHNyYz1cIi9mYWlsZWRMb2dvLnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJlbW92ZX1cbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9yZW1vdmVMb2dvLnBuZ1wiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlKGluZGV4KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmxpfSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93RGlhbG9nKHRydWUpfT5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMucGljfSBzcmM9XCIvYWRkTG9nby5wbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAg5re75Yqg5b+r5o235pa55byPXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})