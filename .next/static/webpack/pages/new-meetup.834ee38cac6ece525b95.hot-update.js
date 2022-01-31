webpackHotUpdate_N_E("pages/new-meetup",{

/***/ "./components/meetups/NewMeetupForm.js":
/*!*********************************************!*\
  !*** ./components/meetups/NewMeetupForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Card */ "./components/ui/Card.js");
/* harmony import */ var _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewMeetupForm.module.css */ "./components/meetups/NewMeetupForm.module.css");
/* harmony import */ var _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\HP\\Documents\\web design\\web design tuts\\Projects\\React tuts\\NextJS\\components\\meetups\\NewMeetupForm.js",
    _s = $RefreshSig$();





function NewMeetupForm(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isFormValid = _useState[0],
      setIsFormValid = _useState[1];

  var titleInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var imageInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var addressInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var descriptionInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var checkFormValidity = function checkFormValidity() {
    var enteredTitle = titleInputRef.current.value;
    var enteredImage = imageInputRef.current.value;
    var enteredAddress = addressInputRef.current.value;
    var enteredDescription = descriptionInputRef.current.value;
    if (enteredTitle.trim() !== "" && enteredImage.trim() !== "" && enteredAddress.trim() !== "" && enteredDescription.trim() !== "") setIsFormValid(true);else console.log('form invalid');
  };

  function submitHandler(event) {
    event.preventDefault();
    var enteredTitle = titleInputRef.current.value;
    var enteredImage = imageInputRef.current.value;
    var enteredAddress = addressInputRef.current.value;
    var enteredDescription = descriptionInputRef.current.value;
    var meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription
    };
    props.onAddMeetup(meetupData);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.form,
      onSubmit: submitHandler,
      onChange: checkFormValidity,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "title",
          children: "Meetup Title"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          required: true,
          id: "title",
          ref: titleInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "image",
          children: "Meetup Image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "url",
          required: true,
          id: "image",
          ref: imageInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "address",
          children: "Address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          required: true,
          id: "address",
          ref: addressInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "description",
          children: "Description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
          id: "description",
          required: true,
          rows: "5",
          ref: descriptionInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "".concat(_NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.actions, " ").concat(!isFormValid ? _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.disabled : ""),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          disabled: !isFormValid,
          children: "Add Meetup"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 3
  }, this);
}

_s(NewMeetupForm, "/EF7m6W+u5o+tZdgnEQ7YILjtAc=");

_c = NewMeetupForm;
/* harmony default export */ __webpack_exports__["default"] = (NewMeetupForm);

var _c;

$RefreshReg$(_c, "NewMeetupForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZWV0dXBzL05ld01lZXR1cEZvcm0uanMiXSwibmFtZXMiOlsiTmV3TWVldHVwRm9ybSIsInByb3BzIiwidXNlU3RhdGUiLCJpc0Zvcm1WYWxpZCIsInNldElzRm9ybVZhbGlkIiwidGl0bGVJbnB1dFJlZiIsInVzZVJlZiIsImltYWdlSW5wdXRSZWYiLCJhZGRyZXNzSW5wdXRSZWYiLCJkZXNjcmlwdGlvbklucHV0UmVmIiwiY2hlY2tGb3JtVmFsaWRpdHkiLCJlbnRlcmVkVGl0bGUiLCJjdXJyZW50IiwidmFsdWUiLCJlbnRlcmVkSW1hZ2UiLCJlbnRlcmVkQWRkcmVzcyIsImVudGVyZWREZXNjcmlwdGlvbiIsInRyaW0iLCJjb25zb2xlIiwibG9nIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJtZWV0dXBEYXRhIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIm9uQWRkTWVldHVwIiwiY2xhc3NlcyIsImZvcm0iLCJjb250cm9sIiwiYWN0aW9ucyIsImRpc2FibGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUFBOztBQUFBLGtCQUNTQyxzREFBUSxDQUFDLEtBQUQsQ0FEakI7QUFBQSxNQUN0QkMsV0FEc0I7QUFBQSxNQUNUQyxjQURTOztBQUU3QixNQUFNQyxhQUFhLEdBQUdDLG9EQUFNLEVBQTVCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHRCxvREFBTSxFQUE1QjtBQUNBLE1BQU1FLGVBQWUsR0FBR0Ysb0RBQU0sRUFBOUI7QUFDQSxNQUFNRyxtQkFBbUIsR0FBR0gsb0RBQU0sRUFBbEM7O0FBRUEsTUFBTUksaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQy9CLFFBQU1DLFlBQVksR0FBR04sYUFBYSxDQUFDTyxP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QUE7QUFBQSxnQkFERCxlQUVDO0FBQ0MsWUFBRSxFQUFDLGFBREo7QUFFQyxrQkFBUSxNQUZUO0FBR0MsY0FBSSxFQUFDLEdBSE47QUFJQyxhQUFHLEVBQUV0QjtBQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJELGVBMEJDO0FBQ0MsaUJBQVMsWUFBS29CLGdFQUFPLENBQUNHLE9BQWIsY0FDUixDQUFDN0IsV0FBRCxHQUFlMEIsZ0VBQU8sQ0FBQ0ksUUFBdkIsR0FBa0MsRUFEMUIsQ0FEVjtBQUFBLCtCQUtDO0FBQVEsa0JBQVEsRUFBRSxDQUFDOUIsV0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQXNDQTs7R0EvRVFILGE7O0tBQUFBLGE7QUFpRk1BLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25ldy1tZWV0dXAuODM0ZWUzOGNhYzZlY2U1MjViOTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL3VpL0NhcmRcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL05ld01lZXR1cEZvcm0ubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBOZXdNZWV0dXBGb3JtKHByb3BzKSB7XG5cdGNvbnN0IFtpc0Zvcm1WYWxpZCwgc2V0SXNGb3JtVmFsaWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCB0aXRsZUlucHV0UmVmID0gdXNlUmVmKCk7XG5cdGNvbnN0IGltYWdlSW5wdXRSZWYgPSB1c2VSZWYoKTtcblx0Y29uc3QgYWRkcmVzc0lucHV0UmVmID0gdXNlUmVmKCk7XG5cdGNvbnN0IGRlc2NyaXB0aW9uSW5wdXRSZWYgPSB1c2VSZWYoKTtcblxuXHRjb25zdCBjaGVja0Zvcm1WYWxpZGl0eSA9ICgpID0+IHtcblx0XHRjb25zdCBlbnRlcmVkVGl0bGUgPSB0aXRsZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XG5cdFx0Y29uc3QgZW50ZXJlZEltYWdlID0gaW1hZ2VJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuXHRcdGNvbnN0IGVudGVyZWRBZGRyZXNzID0gYWRkcmVzc0lucHV0UmVmLmN1cnJlbnQudmFsdWU7XG5cdFx0Y29uc3QgZW50ZXJlZERlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuXG5cdFx0aWYgKFxuXHRcdFx0ZW50ZXJlZFRpdGxlLnRyaW0oKSAhPT0gXCJcIiAmJlxuXHRcdFx0ZW50ZXJlZEltYWdlLnRyaW0oKSAhPT0gXCJcIiAmJlxuXHRcdFx0ZW50ZXJlZEFkZHJlc3MudHJpbSgpICE9PSBcIlwiICYmXG5cdFx0XHRlbnRlcmVkRGVzY3JpcHRpb24udHJpbSgpICE9PSBcIlwiXG5cdFx0KVxuICAgICAgc2V0SXNGb3JtVmFsaWQodHJ1ZSk7XG4gICAgZWxzZSBjb25zb2xlLmxvZygnZm9ybSBpbnZhbGlkJylcblx0fTtcblxuXHRmdW5jdGlvbiBzdWJtaXRIYW5kbGVyKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGNvbnN0IGVudGVyZWRUaXRsZSA9IHRpdGxlSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcblx0XHRjb25zdCBlbnRlcmVkSW1hZ2UgPSBpbWFnZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XG5cdFx0Y29uc3QgZW50ZXJlZEFkZHJlc3MgPSBhZGRyZXNzSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcblx0XHRjb25zdCBlbnRlcmVkRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbklucHV0UmVmLmN1cnJlbnQudmFsdWU7XG5cblx0XHRjb25zdCBtZWV0dXBEYXRhID0ge1xuXHRcdFx0dGl0bGU6IGVudGVyZWRUaXRsZSxcblx0XHRcdGltYWdlOiBlbnRlcmVkSW1hZ2UsXG5cdFx0XHRhZGRyZXNzOiBlbnRlcmVkQWRkcmVzcyxcblx0XHRcdGRlc2NyaXB0aW9uOiBlbnRlcmVkRGVzY3JpcHRpb24sXG5cdFx0fTtcblxuXHRcdHByb3BzLm9uQWRkTWVldHVwKG1lZXR1cERhdGEpO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8Q2FyZD5cblx0XHRcdDxmb3JtXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfVxuXHRcdFx0XHRvblN1Ym1pdD17c3VibWl0SGFuZGxlcn1cblx0XHRcdFx0b25DaGFuZ2U9e2NoZWNrRm9ybVZhbGlkaXR5fVxuXHRcdFx0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCI+TWVldHVwIFRpdGxlPC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCBpZD1cInRpdGxlXCIgcmVmPXt0aXRsZUlucHV0UmVmfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJpbWFnZVwiPk1lZXR1cCBJbWFnZTwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ1cmxcIiByZXF1aXJlZCBpZD1cImltYWdlXCIgcmVmPXtpbWFnZUlucHV0UmVmfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJhZGRyZXNzXCI+QWRkcmVzczwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgaWQ9XCJhZGRyZXNzXCIgcmVmPXthZGRyZXNzSW5wdXRSZWZ9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb248L2xhYmVsPlxuXHRcdFx0XHRcdDx0ZXh0YXJlYVxuXHRcdFx0XHRcdFx0aWQ9XCJkZXNjcmlwdGlvblwiXG5cdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0cm93cz1cIjVcIlxuXHRcdFx0XHRcdFx0cmVmPXtkZXNjcmlwdGlvbklucHV0UmVmfVxuXHRcdFx0XHRcdD48L3RleHRhcmVhPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5hY3Rpb25zfSAke1xuXHRcdFx0XHRcdFx0IWlzRm9ybVZhbGlkID8gY2xhc3Nlcy5kaXNhYmxlZCA6IFwiXCJcblx0XHRcdFx0XHR9YH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxidXR0b24gZGlzYWJsZWQ9eyFpc0Zvcm1WYWxpZH0+QWRkIE1lZXR1cDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZm9ybT5cblx0XHQ8L0NhcmQ+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld01lZXR1cEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9