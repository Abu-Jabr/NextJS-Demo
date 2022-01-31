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
    if (enteredTitle.trim() !== "" && enteredImage.trim() !== "" && enteredAddress.trim() !== "" && enteredDescription.trim() !== "") setIsFormValid(true);
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
          lineNumber: 54,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          required: true,
          id: "title",
          ref: titleInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "image",
          children: "Meetup Image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "url",
          required: true,
          id: "image",
          ref: imageInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "address",
          children: "Address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          required: true,
          id: "address",
          ref: addressInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "description",
          children: "Description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
          id: "description",
          required: true,
          rows: "5",
          ref: descriptionInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.actions,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          disabled: !isFormValid,
          className: !isFormValid ? _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.disabled : "",
          children: "Add Meetup"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZWV0dXBzL05ld01lZXR1cEZvcm0uanMiXSwibmFtZXMiOlsiTmV3TWVldHVwRm9ybSIsInByb3BzIiwidXNlU3RhdGUiLCJpc0Zvcm1WYWxpZCIsInNldElzRm9ybVZhbGlkIiwidGl0bGVJbnB1dFJlZiIsInVzZVJlZiIsImltYWdlSW5wdXRSZWYiLCJhZGRyZXNzSW5wdXRSZWYiLCJkZXNjcmlwdGlvbklucHV0UmVmIiwiY2hlY2tGb3JtVmFsaWRpdHkiLCJlbnRlcmVkVGl0bGUiLCJjdXJyZW50IiwidmFsdWUiLCJlbnRlcmVkSW1hZ2UiLCJlbnRlcmVkQWRkcmVzcyIsImVudGVyZWREZXNjcmlwdGlvbiIsInRyaW0iLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm1lZXR1cERhdGEiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwib25BZGRNZWV0dXAiLCJjbGFzc2VzIiwiZm9ybSIsImNvbnRyb2wiLCJhY3Rpb25zIiwiZGlzYWJsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQUE7O0FBQUEsa0JBQ1NDLHNEQUFRLENBQUMsS0FBRCxDQURqQjtBQUFBLE1BQ3RCQyxXQURzQjtBQUFBLE1BQ1RDLGNBRFM7O0FBRTdCLE1BQU1DLGFBQWEsR0FBR0Msb0RBQU0sRUFBNUI7QUFDQSxNQUFNQyxhQUFhLEdBQUdELG9EQUFNLEVBQTVCO0FBQ0EsTUFBTUUsZUFBZSxHQUFHRixvREFBTSxFQUE5QjtBQUNBLE1BQU1HLG1CQUFtQixHQUFHSCxvREFBTSxFQUFsQzs7QUFFQSxNQUFNSSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDL0IsUUFBTUMsWUFBWSxHQUFHTixhQUFhLENBQUNPLE9BQWQsQ0FBc0JDLEtBQTND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O0FBR0MsY0FBSSxFQUFDLEdBSE47QUFJQyxhQUFHLEVBQUVwQjtBQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJELGVBMEJDO0FBQ0MsaUJBQVMsRUFBRWtCLGdFQUFPLENBQUNHLE9BRHBCO0FBQUEsK0JBR0M7QUFBUSxrQkFBUSxFQUFFLENBQUMzQixXQUFuQjtBQUFnQyxtQkFBUyxFQUFFLENBQUNBLFdBQUQsR0FBZXdCLGdFQUFPLENBQUNJLFFBQXZCLEdBQWtDLEVBQTdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFvQ0E7O0dBNUVRL0IsYTs7S0FBQUEsYTtBQThFTUEsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3LW1lZXR1cC5jYmRiNDAyZjYyNTJhNWRiMmUzMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vdWkvQ2FyZFwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vTmV3TWVldHVwRm9ybS5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIE5ld01lZXR1cEZvcm0ocHJvcHMpIHtcblx0Y29uc3QgW2lzRm9ybVZhbGlkLCBzZXRJc0Zvcm1WYWxpZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IHRpdGxlSW5wdXRSZWYgPSB1c2VSZWYoKTtcblx0Y29uc3QgaW1hZ2VJbnB1dFJlZiA9IHVzZVJlZigpO1xuXHRjb25zdCBhZGRyZXNzSW5wdXRSZWYgPSB1c2VSZWYoKTtcblx0Y29uc3QgZGVzY3JpcHRpb25JbnB1dFJlZiA9IHVzZVJlZigpO1xuXG5cdGNvbnN0IGNoZWNrRm9ybVZhbGlkaXR5ID0gKCkgPT4ge1xuXHRcdGNvbnN0IGVudGVyZWRUaXRsZSA9IHRpdGxlSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcblx0XHRjb25zdCBlbnRlcmVkSW1hZ2UgPSBpbWFnZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XG5cdFx0Y29uc3QgZW50ZXJlZEFkZHJlc3MgPSBhZGRyZXNzSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcblx0XHRjb25zdCBlbnRlcmVkRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbklucHV0UmVmLmN1cnJlbnQudmFsdWU7XG5cblx0XHRpZiAoXG5cdFx0XHRlbnRlcmVkVGl0bGUudHJpbSgpICE9PSBcIlwiICYmXG5cdFx0XHRlbnRlcmVkSW1hZ2UudHJpbSgpICE9PSBcIlwiICYmXG5cdFx0XHRlbnRlcmVkQWRkcmVzcy50cmltKCkgIT09IFwiXCIgJiZcblx0XHRcdGVudGVyZWREZXNjcmlwdGlvbi50cmltKCkgIT09IFwiXCJcblx0XHQpXG4gICAgICBzZXRJc0Zvcm1WYWxpZCh0cnVlKTtcblx0fTtcblxuXHRmdW5jdGlvbiBzdWJtaXRIYW5kbGVyKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGNvbnN0IGVudGVyZWRUaXRsZSA9IHRpdGxlSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcblx0XHRjb25zdCBlbnRlcmVkSW1hZ2UgPSBpbWFnZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XG5cdFx0Y29uc3QgZW50ZXJlZEFkZHJlc3MgPSBhZGRyZXNzSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcblx0XHRjb25zdCBlbnRlcmVkRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbklucHV0UmVmLmN1cnJlbnQudmFsdWU7XG5cblx0XHRjb25zdCBtZWV0dXBEYXRhID0ge1xuXHRcdFx0dGl0bGU6IGVudGVyZWRUaXRsZSxcblx0XHRcdGltYWdlOiBlbnRlcmVkSW1hZ2UsXG5cdFx0XHRhZGRyZXNzOiBlbnRlcmVkQWRkcmVzcyxcblx0XHRcdGRlc2NyaXB0aW9uOiBlbnRlcmVkRGVzY3JpcHRpb24sXG5cdFx0fTtcblxuXHRcdHByb3BzLm9uQWRkTWVldHVwKG1lZXR1cERhdGEpO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8Q2FyZD5cblx0XHRcdDxmb3JtXG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfVxuXHRcdFx0XHRvblN1Ym1pdD17c3VibWl0SGFuZGxlcn1cblx0XHRcdFx0b25DaGFuZ2U9e2NoZWNrRm9ybVZhbGlkaXR5fVxuXHRcdFx0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCI+TWVldHVwIFRpdGxlPC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCBpZD1cInRpdGxlXCIgcmVmPXt0aXRsZUlucHV0UmVmfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJpbWFnZVwiPk1lZXR1cCBJbWFnZTwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ1cmxcIiByZXF1aXJlZCBpZD1cImltYWdlXCIgcmVmPXtpbWFnZUlucHV0UmVmfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJhZGRyZXNzXCI+QWRkcmVzczwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgaWQ9XCJhZGRyZXNzXCIgcmVmPXthZGRyZXNzSW5wdXRSZWZ9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb248L2xhYmVsPlxuXHRcdFx0XHRcdDx0ZXh0YXJlYVxuXHRcdFx0XHRcdFx0aWQ9XCJkZXNjcmlwdGlvblwiXG5cdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0cm93cz1cIjVcIlxuXHRcdFx0XHRcdFx0cmVmPXtkZXNjcmlwdGlvbklucHV0UmVmfVxuXHRcdFx0XHRcdD48L3RleHRhcmVhPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGJ1dHRvbiBkaXNhYmxlZD17IWlzRm9ybVZhbGlkfSBjbGFzc05hbWU9eyFpc0Zvcm1WYWxpZCA/IGNsYXNzZXMuZGlzYWJsZWQgOiBcIlwifT5BZGQgTWVldHVwPC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvQ2FyZD5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV3TWVldHVwRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=