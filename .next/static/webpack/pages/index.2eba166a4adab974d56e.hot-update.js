/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/modal.js":
/*!*****************************!*\
  !*** ./components/modal.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/monnat/Documents/GitHub/NextJs-Phase1/components/modal.js\",\n    _this = undefined;\n\n\n\nvar Modal = function Modal(_ref) {\n  var showModal = _ref.showModal,\n      children = _ref.children,\n      modalCode = _ref.modalCode,\n      _ref$onClickIconCancl = _ref.onClickIconCancle,\n      onClickIconCancle = _ref$onClickIconCancl === void 0 ? function () {} : _ref$onClickIconCancl;\n  alert(modalCode.JustSayCode);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [showModal ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      \"class\": \"fixed flex items-center py-5 justify-center top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 z-50\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        \"class\": \"relative bg-gray-200 m-5 p-6 pt-4 md:p-8 md:pt-6 rounded-2xl w-96 max-w-full max-h-full overflow-auto\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          onClick: onClickIconCancle,\n          \"class\": \"absolute text-lg text-gray-600 top-4 right-4 focus:outline-none\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoClose, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 13\n        }, _this), children]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }, _this) : null, modalCode.JustSayCode ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: modalCode.JustSayCode\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 32\n    }, _this) : null, modalCode.CounterCode ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: \"456\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 32\n    }, _this) : null]\n  }, void 0, true);\n};\n\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\n\nvar _c;\n\n$RefreshReg$(_c, \"Modal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC5qcz9jNjAxIl0sIm5hbWVzIjpbIk1vZGFsIiwic2hvd01vZGFsIiwiY2hpbGRyZW4iLCJtb2RhbENvZGUiLCJvbkNsaWNrSWNvbkNhbmNsZSIsImFsZXJ0IiwiSnVzdFNheUNvZGUiLCJDb3VudGVyQ29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUtSO0FBQUEsTUFKSkMsU0FJSSxRQUpKQSxTQUlJO0FBQUEsTUFISkMsUUFHSSxRQUhKQSxRQUdJO0FBQUEsTUFGSkMsU0FFSSxRQUZKQSxTQUVJO0FBQUEsbUNBREpDLGlCQUNJO0FBQUEsTUFESkEsaUJBQ0ksc0NBRGdCLFlBQU0sQ0FBRSxDQUN4QjtBQUVGQyxPQUFLLENBQUNGLFNBQVMsQ0FBQ0csV0FBWCxDQUFMO0FBRUYsc0JBQ0U7QUFBQSxlQUNHTCxTQUFTLGdCQUNSO0FBQUssZUFBTSx1R0FBWDtBQUFBLDZCQUNFO0FBQUssaUJBQU0sdUdBQVg7QUFBQSxnQ0FDRTtBQUNFLGlCQUFPLEVBQUVHLGlCQURYO0FBRUUsbUJBQU0saUVBRlI7QUFBQSxpQ0FJRSw4REFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQU9HRixRQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEUSxHQVlOLElBYk4sRUFlR0MsU0FBUyxDQUFDRyxXQUFWLGdCQUF3QjtBQUFBLGdCQUFNSCxTQUFTLENBQUNHO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBeEIsR0FBNkQsSUFmaEUsRUFpQkdILFNBQVMsQ0FBQ0ksV0FBVixnQkFBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBeEIsR0FBeUMsSUFqQjVDO0FBQUEsa0JBREY7QUFxQkQsQ0E5QkQ7O0tBQU1QLEs7QUFnQ04sK0RBQWVBLEtBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL21vZGFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW9DbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9pbzVcIjtcblxuY29uc3QgTW9kYWwgPSAoe1xuICBzaG93TW9kYWwsXG4gIGNoaWxkcmVuLFxuICBtb2RhbENvZGUsXG4gIG9uQ2xpY2tJY29uQ2FuY2xlID0gKCkgPT4ge30sXG59KSA9PiB7XG5cbiAgICBhbGVydChtb2RhbENvZGUuSnVzdFNheUNvZGUpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Nob3dNb2RhbCA/IChcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpeGVkIGZsZXggaXRlbXMtY2VudGVyIHB5LTUganVzdGlmeS1jZW50ZXIgdG9wLTAgcmlnaHQtMCBib3R0b20tMCBsZWZ0LTAgYmctYmxhY2sgYmctb3BhY2l0eS03MCB6LTUwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIGJnLWdyYXktMjAwIG0tNSBwLTYgcHQtNCBtZDpwLTggbWQ6cHQtNiByb3VuZGVkLTJ4bCB3LTk2IG1heC13LWZ1bGwgbWF4LWgtZnVsbCBvdmVyZmxvdy1hdXRvXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tJY29uQ2FuY2xlfVxuICAgICAgICAgICAgICBjbGFzcz1cImFic29sdXRlIHRleHQtbGcgdGV4dC1ncmF5LTYwMCB0b3AtNCByaWdodC00IGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJb0Nsb3NlIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cblxuICAgICAge21vZGFsQ29kZS5KdXN0U2F5Q29kZSA/IDxkaXY+e21vZGFsQ29kZS5KdXN0U2F5Q29kZX08L2Rpdj4gOiBudWxsfVxuXG4gICAgICB7bW9kYWxDb2RlLkNvdW50ZXJDb2RlID8gPGRpdj40NTY8L2Rpdj4gOiBudWxsfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/modal.js\n");

/***/ })

});