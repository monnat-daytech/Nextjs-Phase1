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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _justSay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./justSay */ \"./components/Cards/justSay.js\");\n/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counter */ \"./components/Cards/counter.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timer */ \"./components/Cards/timer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/monnat/Documents/GitHub/NextJs-Phase1/components/Cards/allcard.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar Allcard = function Allcard(_ref) {\n  var cardList = _ref.cardList,\n      _onClickCloseCard = _ref.onClickCloseCard,\n      _onClickEditJustSay = _ref.onClickEditJustSay;\n  var showListCard = cardList.map(function (item) {\n    if (item.check === \"JustSay\") {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_justSay__WEBPACK_IMPORTED_MODULE_2__.default, {\n        item: item.content,\n        onClickCloseCard: function onClickCloseCard() {\n          return _onClickCloseCard(item);\n        },\n        onClickEditJustSay: function onClickEditJustSay() {\n          return _onClickEditJustSay(item);\n        }\n      }, item.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, _this);\n    } else if (item.check === \"Counter\") return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_counter__WEBPACK_IMPORTED_MODULE_3__.default, {\n      item: item.content,\n      onClickCloseCard: function onClickCloseCard() {\n        return _onClickCloseCard(item);\n      }\n    }, item.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }, _this);else if (item.check === \"Timer\") return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_timer__WEBPACK_IMPORTED_MODULE_4__.default, {\n      onClickCloseCard: function onClickCloseCard() {\n        return _onClickCloseCard(item);\n      }\n    }, item.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 14\n    }, _this);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: showListCard\n  }, void 0, false);\n};\n\n_c = Allcard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Allcard);\n\nvar _c;\n\n$RefreshReg$(_c, \"Allcard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkcy9hbGxjYXJkLmpzPzMwNjIiXSwibmFtZXMiOlsiQWxsY2FyZCIsImNhcmRMaXN0Iiwib25DbGlja0Nsb3NlQ2FyZCIsIm9uQ2xpY2tFZGl0SnVzdFNheSIsInNob3dMaXN0Q2FyZCIsIm1hcCIsIml0ZW0iLCJjaGVjayIsImNvbnRlbnQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBd0Q7QUFBQSxNQUFyREMsUUFBcUQsUUFBckRBLFFBQXFEO0FBQUEsTUFBM0NDLGlCQUEyQyxRQUEzQ0EsZ0JBQTJDO0FBQUEsTUFBekJDLG1CQUF5QixRQUF6QkEsa0JBQXlCO0FBQ3RFLE1BQU1DLFlBQVksR0FBR0gsUUFBUSxDQUFDSSxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFVO0FBQzFDLFFBQUlBLElBQUksQ0FBQ0MsS0FBTCxLQUFlLFNBQW5CLEVBQThCO0FBQzVCLDBCQUNFLDhEQUFDLDZDQUFEO0FBRUUsWUFBSSxFQUFFRCxJQUFJLENBQUNFLE9BRmI7QUFHRSx3QkFBZ0IsRUFBRTtBQUFBLGlCQUFNTixpQkFBZ0IsQ0FBQ0ksSUFBRCxDQUF0QjtBQUFBLFNBSHBCO0FBSUUsMEJBQWtCLEVBQUU7QUFBQSxpQkFBTUgsbUJBQWtCLENBQUNHLElBQUQsQ0FBeEI7QUFBQTtBQUp0QixTQUNPQSxJQUFJLENBQUNHLEVBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBUUQsS0FURCxNQVNPLElBQUlILElBQUksQ0FBQ0MsS0FBTCxLQUFlLFNBQW5CLEVBQ0wsb0JBQ0UsOERBQUMsNkNBQUQ7QUFFRSxVQUFJLEVBQUVELElBQUksQ0FBQ0UsT0FGYjtBQUdFLHNCQUFnQixFQUFFO0FBQUEsZUFBTU4saUJBQWdCLENBQUNJLElBQUQsQ0FBdEI7QUFBQTtBQUhwQixPQUNPQSxJQUFJLENBQUNHLEVBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLENBREssS0FRRixJQUFJSCxJQUFJLENBQUNDLEtBQUwsS0FBZSxPQUFuQixFQUNILG9CQUFPLDhEQUFDLDJDQUFEO0FBQXFCLHNCQUFnQixFQUFFO0FBQUEsZUFBTUwsaUJBQWdCLENBQUNJLElBQUQsQ0FBdEI7QUFBQTtBQUF2QyxPQUFZQSxJQUFJLENBQUNHLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNILEdBcEJvQixDQUFyQjtBQXNCQSxzQkFBTztBQUFBLGNBQUdMO0FBQUgsbUJBQVA7QUFDRCxDQXhCRDs7S0FBTUosTztBQXlCTiwrREFBZUEsT0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2FyZHMvYWxsY2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSnVzdFNheSBmcm9tIFwiLi9qdXN0U2F5XCI7XG5pbXBvcnQgQ291bnRlciBmcm9tIFwiLi9jb3VudGVyXCI7XG5pbXBvcnQgVGltZXIgZnJvbSBcIi4vdGltZXJcIjtcblxuY29uc3QgQWxsY2FyZCA9ICh7IGNhcmRMaXN0LCBvbkNsaWNrQ2xvc2VDYXJkICxvbkNsaWNrRWRpdEp1c3RTYXkgfSkgPT4ge1xuICBjb25zdCBzaG93TGlzdENhcmQgPSBjYXJkTGlzdC5tYXAoKGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbS5jaGVjayA9PT0gXCJKdXN0U2F5XCIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxKdXN0U2F5XG4gICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgIGl0ZW09e2l0ZW0uY29udGVudH1cbiAgICAgICAgICBvbkNsaWNrQ2xvc2VDYXJkPXsoKSA9PiBvbkNsaWNrQ2xvc2VDYXJkKGl0ZW0pfVxuICAgICAgICAgIG9uQ2xpY2tFZGl0SnVzdFNheT17KCkgPT4gb25DbGlja0VkaXRKdXN0U2F5KGl0ZW0pfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0uY2hlY2sgPT09IFwiQ291bnRlclwiKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENvdW50ZXJcbiAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgaXRlbT17aXRlbS5jb250ZW50fVxuICAgICAgICAgIG9uQ2xpY2tDbG9zZUNhcmQ9eygpID0+IG9uQ2xpY2tDbG9zZUNhcmQoaXRlbSl9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIGVsc2UgaWYgKGl0ZW0uY2hlY2sgPT09IFwiVGltZXJcIilcbiAgICAgIHJldHVybiA8VGltZXIga2V5PXtpdGVtLmlkfSBvbkNsaWNrQ2xvc2VDYXJkPXsoKSA9PiBvbkNsaWNrQ2xvc2VDYXJkKGl0ZW0pfS8+O1xuICB9KTtcblxuICByZXR1cm4gPD57c2hvd0xpc3RDYXJkfTwvPjtcbn07XG5leHBvcnQgZGVmYXVsdCBBbGxjYXJkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Cards/allcard.js\n");

/***/ })

});