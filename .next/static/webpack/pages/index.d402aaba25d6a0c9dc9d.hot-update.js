/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Cards/allcard.js":
/*!*************************************!*\
  !*** ./components/Cards/allcard.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _justSay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./justSay */ \"./components/Cards/justSay.js\");\n/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counter */ \"./components/Cards/counter.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timer */ \"./components/Cards/timer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/monnat/Documents/GitHub/NextJs-Phase1/components/Cards/allcard.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar Allcard = function Allcard(_ref) {\n  var cardList = _ref.cardList;\n\n  var onClickCloseCard = function onClickCloseCard(key) {\n    cardList.splice(key, 1);\n    showListCard();\n  };\n\n  var showListCard = cardList.map(function (item) {\n    if (item.check === \"JustSay\") {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_justSay__WEBPACK_IMPORTED_MODULE_2__.default, {\n        item: item.content,\n        onClickCloseCard: onClickCloseCard\n      }, item.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, _this);\n    } else if (item.check === \"Counter\") return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_counter__WEBPACK_IMPORTED_MODULE_3__.default, {\n      item: item.content\n    }, item.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 14\n    }, _this);else if (item.check === \"Timer\") return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_timer__WEBPACK_IMPORTED_MODULE_4__.default, {}, item.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 45\n    }, _this);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: showListCard\n  }, void 0, false);\n};\n\n_c = Allcard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Allcard);\n\nvar _c;\n\n$RefreshReg$(_c, \"Allcard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkcy9hbGxjYXJkLmpzPzMwNjIiXSwibmFtZXMiOlsiQWxsY2FyZCIsImNhcmRMaXN0Iiwib25DbGlja0Nsb3NlQ2FyZCIsImtleSIsInNwbGljZSIsInNob3dMaXN0Q2FyZCIsIm1hcCIsIml0ZW0iLCJjaGVjayIsImNvbnRlbnQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBa0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBRWhDLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsR0FBRCxFQUFTO0FBQ2hDRixZQUFRLENBQUNHLE1BQVQsQ0FBZ0JELEdBQWhCLEVBQW9CLENBQXBCO0FBQ0FFLGdCQUFZO0FBQ2IsR0FIRDs7QUFLQSxNQUFNQSxZQUFZLEdBQUdKLFFBQVEsQ0FBQ0ssR0FBVCxDQUFhLFVBQUNDLElBQUQsRUFBVTtBQUMxQyxRQUFJQSxJQUFJLENBQUNDLEtBQUwsS0FBZSxTQUFuQixFQUE4QjtBQUM1QiwwQkFDRSw4REFBQyw2Q0FBRDtBQUVFLFlBQUksRUFBRUQsSUFBSSxDQUFDRSxPQUZiO0FBR0Usd0JBQWdCLEVBQUVQO0FBSHBCLFNBQ09LLElBQUksQ0FBQ0csRUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFPRCxLQVJELE1BUU8sSUFBSUgsSUFBSSxDQUFDQyxLQUFMLEtBQWUsU0FBbkIsRUFDTCxvQkFBTyw4REFBQyw2Q0FBRDtBQUF1QixVQUFJLEVBQUVELElBQUksQ0FBQ0U7QUFBbEMsT0FBY0YsSUFBSSxDQUFDRyxFQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVAsQ0FESyxLQUVGLElBQUlILElBQUksQ0FBQ0MsS0FBTCxLQUFlLE9BQW5CLEVBQTRCLG9CQUFPLDhEQUFDLDJDQUFELE1BQVlELElBQUksQ0FBQ0csRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ2xDLEdBWm9CLENBQXJCO0FBY0Esc0JBQU87QUFBQSxjQUFHTDtBQUFILG1CQUFQO0FBQ0QsQ0F0QkQ7O0tBQU1MLE87QUF1Qk4sK0RBQWVBLE9BQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcmRzL2FsbGNhcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTYXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSnVzdFNheSBmcm9tIFwiLi9qdXN0U2F5XCI7XG5pbXBvcnQgQ291bnRlciBmcm9tIFwiLi9jb3VudGVyXCI7XG5pbXBvcnQgVGltZXIgZnJvbSBcIi4vdGltZXJcIjtcblxuY29uc3QgQWxsY2FyZCA9ICh7IGNhcmRMaXN0IH0pID0+IHtcblxuICBjb25zdCBvbkNsaWNrQ2xvc2VDYXJkID0gKGtleSkgPT4ge1xuICAgIGNhcmRMaXN0LnNwbGljZShrZXksMSlcbiAgICBzaG93TGlzdENhcmQoKVxuICB9O1xuXG4gIGNvbnN0IHNob3dMaXN0Q2FyZCA9IGNhcmRMaXN0Lm1hcCgoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtLmNoZWNrID09PSBcIkp1c3RTYXlcIikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEp1c3RTYXlcbiAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgaXRlbT17aXRlbS5jb250ZW50fVxuICAgICAgICAgIG9uQ2xpY2tDbG9zZUNhcmQ9e29uQ2xpY2tDbG9zZUNhcmR9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoaXRlbS5jaGVjayA9PT0gXCJDb3VudGVyXCIpXG4gICAgICByZXR1cm4gPENvdW50ZXIga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtLmNvbnRlbnR9IC8+O1xuICAgIGVsc2UgaWYgKGl0ZW0uY2hlY2sgPT09IFwiVGltZXJcIikgcmV0dXJuIDxUaW1lciBrZXk9e2l0ZW0uaWR9IC8+O1xuICB9KTtcblxuICByZXR1cm4gPD57c2hvd0xpc3RDYXJkfTwvPjtcbn07XG5leHBvcnQgZGVmYXVsdCBBbGxjYXJkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Cards/allcard.js\n");

/***/ })

});