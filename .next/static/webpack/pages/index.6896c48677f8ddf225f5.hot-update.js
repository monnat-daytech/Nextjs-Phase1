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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_monnat_Documents_GitHub_NextJs_Phase1_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _justSay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./justSay */ \"./components/Cards/justSay.js\");\n/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./counter */ \"./components/Cards/counter.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timer */ \"./components/Cards/timer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/monnat/Documents/GitHub/NextJs-Phase1/components/Cards/allcard.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Allcard = function Allcard(_ref) {\n  _s();\n\n  var cardList = _ref.cardList,\n      data = _ref.data;\n\n  var _useState = useState(0),\n      _useState2 = (0,_Users_monnat_Documents_GitHub_NextJs_Phase1_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),\n      checkCards = _useState2[0],\n      setCheckCards = _useState2[1];\n\n  var onClickCloseCard = function onClickCloseCard() {\n    setCheckCards(-1);\n  };\n\n  var showListCard = cardList.map(function (item, index) {\n    setCheckCards(+1);\n\n    if (item.check === 'JustSay') {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_justSay__WEBPACK_IMPORTED_MODULE_3__.default, {\n        item: item.content,\n        onClickCloseCard: onClickCloseCard\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 13\n      }, _this);\n    } else if (item.check === 'Counter') return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_counter__WEBPACK_IMPORTED_MODULE_4__.default, {\n      item: item.content\n    }, index, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, _this);else if (item.check === 'Timer') return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_timer__WEBPACK_IMPORTED_MODULE_5__.default, {}, index, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, _this);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: showListCard\n  }, void 0, false);\n};\n\n_s(Allcard, \"d9SxNAaZEloRTKUhCUcw8HbBhsE=\");\n\n_c = Allcard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Allcard);\n\nvar _c;\n\n$RefreshReg$(_c, \"Allcard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkcy9hbGxjYXJkLmpzPzMwNjIiXSwibmFtZXMiOlsiQWxsY2FyZCIsImNhcmRMaXN0IiwiZGF0YSIsInVzZVN0YXRlIiwiY2hlY2tDYXJkcyIsInNldENoZWNrQ2FyZHMiLCJvbkNsaWNrQ2xvc2VDYXJkIiwic2hvd0xpc3RDYXJkIiwibWFwIiwiaXRlbSIsImluZGV4IiwiY2hlY2siLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFzQjtBQUFBOztBQUFBLE1BQXBCQyxRQUFvQixRQUFwQkEsUUFBb0I7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7O0FBQUEsa0JBQ0VDLFFBQVEsQ0FBQyxDQUFELENBRFY7QUFBQTtBQUFBLE1BQzNCQyxVQUQyQjtBQUFBLE1BQ2ZDLGFBRGU7O0FBR2xDLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUMzQkQsaUJBQWEsQ0FBQyxDQUFDLENBQUYsQ0FBYjtBQUNILEdBRkQ7O0FBR0EsTUFBTUUsWUFBWSxHQUFHTixRQUFRLENBQUNPLEdBQVQsQ0FBYSxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDL0NMLGlCQUFhLENBQUMsQ0FBQyxDQUFGLENBQWI7O0FBQ0EsUUFBR0ksSUFBSSxDQUFDRSxLQUFMLEtBQWUsU0FBbEIsRUFBNEI7QUFDeEIsMEJBQ0EsOERBQUMsNkNBQUQ7QUFBcUIsWUFBSSxFQUFFRixJQUFJLENBQUNHLE9BQWhDO0FBQXlDLHdCQUFnQixFQUFFTjtBQUEzRCxTQUFjSSxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQTtBQUdILEtBSkQsTUFLSyxJQUFHRCxJQUFJLENBQUNFLEtBQUwsS0FBZSxTQUFsQixFQUNMLG9CQUNJLDhEQUFDLDZDQUFEO0FBQXFCLFVBQUksRUFBRUYsSUFBSSxDQUFDRztBQUFoQyxPQUFjRixLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixDQURLLEtBSUEsSUFBR0QsSUFBSSxDQUFDRSxLQUFMLEtBQWUsT0FBbEIsRUFDTCxvQkFDSSw4REFBQywyQ0FBRCxNQUFZRCxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUdELEdBZmtCLENBQXJCO0FBaUJBLHNCQUNJO0FBQUEsY0FDQ0g7QUFERCxtQkFESjtBQUtILENBNUJEOztHQUFNUCxPOztLQUFBQSxPO0FBNkJOLCtEQUFlQSxPQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJkcy9hbGxjYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTYXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBKdXN0U2F5IGZyb20gJy4vanVzdFNheSdcbmltcG9ydCBDb3VudGVyIGZyb20gJy4vY291bnRlcidcbmltcG9ydCBUaW1lciBmcm9tICcuL3RpbWVyJ1xuXG5jb25zdCBBbGxjYXJkID0gKHtjYXJkTGlzdCAsZGF0YX0pID0+IHtcbiAgICBjb25zdCBbY2hlY2tDYXJkcywgc2V0Q2hlY2tDYXJkc10gPSB1c2VTdGF0ZSgwKTtcbiAgICBcbiAgICBjb25zdCBvbkNsaWNrQ2xvc2VDYXJkID0gKCkgPT4ge1xuICAgICAgICBzZXRDaGVja0NhcmRzKC0xKVxuICAgIH1cbiAgICBjb25zdCBzaG93TGlzdENhcmQgPSBjYXJkTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIHNldENoZWNrQ2FyZHMoKzEpXG4gICAgICAgIGlmKGl0ZW0uY2hlY2sgPT09ICdKdXN0U2F5Jyl7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEp1c3RTYXkga2V5PXtpbmRleH0gaXRlbT17aXRlbS5jb250ZW50fSBvbkNsaWNrQ2xvc2VDYXJkPXtvbkNsaWNrQ2xvc2VDYXJkfS8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoaXRlbS5jaGVjayA9PT0gJ0NvdW50ZXInKVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENvdW50ZXIga2V5PXtpbmRleH0gaXRlbT17aXRlbS5jb250ZW50fS8+XG4gICAgICAgICk7XG4gICAgICAgIGVsc2UgaWYoaXRlbS5jaGVjayA9PT0gJ1RpbWVyJylcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPFRpbWVyIGtleT17aW5kZXh9Lz5cbiAgICAgICAgKVxuICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICB7c2hvd0xpc3RDYXJkIH1cbiAgICAgICAgPC8+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQWxsY2FyZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Cards/allcard.js\n");

/***/ })

});