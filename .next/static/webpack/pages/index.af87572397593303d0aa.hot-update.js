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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _justSay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./justSay */ \"./components/Cards/justSay.js\");\n/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counter */ \"./components/Cards/counter.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/monnat/Documents/GitHub/NextJs-Phase1/components/Cards/allcard.js\",\n    _this = undefined;\n\n\n\n\n\nvar Allcard = function Allcard(_ref) {\n  var cardList = _ref.cardList,\n      data = _ref.data;\n  var showListCard = cardList.map(function (item, index) {\n    if (item.check === 'JustSay') {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_justSay__WEBPACK_IMPORTED_MODULE_2__.default, {\n        item: item\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 17\n      }, _this);\n    } else if (item.check === 'Counter') return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_counter__WEBPACK_IMPORTED_MODULE_3__.default, {\n      item: item\n    }, index, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, _this);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: showListCard\n  }, void 0, false);\n};\n\n_c = Allcard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Allcard);\n\nvar _c;\n\n$RefreshReg$(_c, \"Allcard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkcy9hbGxjYXJkLmpzPzMwNjIiXSwibmFtZXMiOlsiQWxsY2FyZCIsImNhcmRMaXN0IiwiZGF0YSIsInNob3dMaXN0Q2FyZCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImNoZWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFzQjtBQUFBLE1BQXBCQyxRQUFvQixRQUFwQkEsUUFBb0I7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7QUFHbEMsTUFBTUMsWUFBWSxHQUFHRixRQUFRLENBQUNHLEdBQVQsQ0FBYSxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFFL0MsUUFBR0QsSUFBSSxDQUFDRSxLQUFMLEtBQWUsU0FBbEIsRUFBNEI7QUFDeEIsMEJBQ0ksOERBQUMsNkNBQUQ7QUFBcUIsWUFBSSxFQUFFRjtBQUEzQixTQUFjQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQUdILEtBSkQsTUFLSyxJQUFHRCxJQUFJLENBQUNFLEtBQUwsS0FBZSxTQUFsQixFQUNMLG9CQUNJLDhEQUFDLDZDQUFEO0FBQXFCLFVBQUksRUFBRUY7QUFBM0IsT0FBY0MsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFHRCxHQVhrQixDQUFyQjtBQWFBLHNCQUNJO0FBQUEsY0FDQ0g7QUFERCxtQkFESjtBQUtILENBckJEOztLQUFNSCxPO0FBc0JOLCtEQUFlQSxPQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJkcy9hbGxjYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTYXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBKdXN0U2F5IGZyb20gJy4vanVzdFNheSdcbmltcG9ydCBDb3VudGVyIGZyb20gJy4vY291bnRlcidcblxuY29uc3QgQWxsY2FyZCA9ICh7Y2FyZExpc3QgLGRhdGF9KSA9PiB7XG5cblxuICAgIGNvbnN0IHNob3dMaXN0Q2FyZCA9IGNhcmRMaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGlmKGl0ZW0uY2hlY2sgPT09ICdKdXN0U2F5Jyl7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxKdXN0U2F5IGtleT17aW5kZXh9IGl0ZW09e2l0ZW19Lz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihpdGVtLmNoZWNrID09PSAnQ291bnRlcicpXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q291bnRlciBrZXk9e2luZGV4fSBpdGVtPXtpdGVtfS8+XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgIHtzaG93TGlzdENhcmR9XG4gICAgICAgIDwvPlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IEFsbGNhcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Cards/allcard.js\n");

/***/ })

});