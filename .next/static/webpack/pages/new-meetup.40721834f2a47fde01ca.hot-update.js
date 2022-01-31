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
    if (enteredTitle.trim() !== "" && enteredImage.trim() !== "" && enteredAddress.trim() !== "" && enteredDescription.trim() !== "") setIsFormValid(true);else isFormValid && setIsFormValid(false);
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
        className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.actions,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          disabled: !isFormValid,
          className: !isFormValid ? _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.disabled : "",
          children: "Add Meetup"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZWV0dXBzL05ld01lZXR1cEZvcm0uanMiXSwibmFtZXMiOlsiTmV3TWVldHVwRm9ybSIsInByb3BzIiwidXNlU3RhdGUiLCJpc0Zvcm1WYWxpZCIsInNldElzRm9ybVZhbGlkIiwidGl0bGVJbnB1dFJlZiIsInVzZVJlZiIsImltYWdlSW5wdXRSZWYiLCJhZGRyZXNzSW5wdXRSZWYiLCJkZXNjcmlwdGlvbklucHV0UmVmIiwiY2hlY2tGb3JtVmFsaWRpdHkiLCJlbnRlcmVkVGl0bGUiLCJjdXJyZW50IiwidmFsdWUiLCJlbnRlcmVkSW1hZ2UiLCJlbnRlcmVkQWRkcmVzcyIsImVudGVyZWREZXNjcmlwdGlvbiIsInRyaW0iLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm1lZXR1cERhdGEiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwib25BZGRNZWV0dXAiLCJjbGFzc2VzIiwiZm9ybSIsImNvbnRyb2wiLCJhY3Rpb25zIiwiZGlzYWJsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQUE7O0FBQUEsa0JBQ1NDLHNEQUFRLENBQUMsS0FBRCxDQURqQjtBQUFBLE1BQ3RCQyxXQURzQjtBQUFBLE1BQ1RDLGNBRFM7O0FBRTdCLE1BQU1DLGFBQWEsR0FBR0Msb0RBQU0sRUFBNUI7QUFDQSxNQUFNQyxhQUFhLEdBQUdELG9EQUFNLEVBQTVCO0FBQ0EsTUFBTUUsZUFBZSxHQUFHRixvREFBTSxFQUE5QjtBQUNBLE1BQU1HLG1CQUFtQixHQUFHSCxvREFBTSxFQUFsQzs7QUFFQSxNQUFNSSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDL0IsUUFBTUMsWUFBWSxHQUFHTixhQUFhLENBQUNPLE9BQWQsQ0FBc0JDLEtBQTND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QURELGVBRUM7QUFDQyxZQUFFLEVBQUMsYUFESjtBQUVDLGtCQUFRLE1BRlQ7QUFHQyxjQUFJLEVBQUMsR0FITjtBQUlDLGFBQUcsRUFBRXBCO0FBSk47QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQkQsZUEwQkM7QUFDQyxpQkFBUyxFQUFFa0IsZ0VBQU8sQ0FBQ0csT0FEcEI7QUFBQSwrQkFHQztBQUFRLGtCQUFRLEVBQUUsQ0FBQzNCLFdBQW5CO0FBQWdDLG1CQUFTLEVBQUUsQ0FBQ0EsV0FBRCxHQUFld0IsZ0VBQU8sQ0FBQ0ksUUFBdkIsR0FBa0MsRUFBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQW9DQTs7R0E3RVEvQixhOztLQUFBQSxhO0FBK0VNQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uZXctbWVldHVwLjQwNzIxODM0ZjJhNDdmZGUwMWNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBDYXJkIGZyb20gXCIuLi91aS9DYXJkXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9OZXdNZWV0dXBGb3JtLm1vZHVsZS5jc3NcIjtcblxuZnVuY3Rpb24gTmV3TWVldHVwRm9ybShwcm9wcykge1xuXHRjb25zdCBbaXNGb3JtVmFsaWQsIHNldElzRm9ybVZhbGlkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgdGl0bGVJbnB1dFJlZiA9IHVzZVJlZigpO1xuXHRjb25zdCBpbWFnZUlucHV0UmVmID0gdXNlUmVmKCk7XG5cdGNvbnN0IGFkZHJlc3NJbnB1dFJlZiA9IHVzZVJlZigpO1xuXHRjb25zdCBkZXNjcmlwdGlvbklucHV0UmVmID0gdXNlUmVmKCk7XG5cblx0Y29uc3QgY2hlY2tGb3JtVmFsaWRpdHkgPSAoKSA9PiB7XG5cdFx0Y29uc3QgZW50ZXJlZFRpdGxlID0gdGl0bGVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuXHRcdGNvbnN0IGVudGVyZWRJbWFnZSA9IGltYWdlSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcblx0XHRjb25zdCBlbnRlcmVkQWRkcmVzcyA9IGFkZHJlc3NJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuXHRcdGNvbnN0IGVudGVyZWREZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcblxuXHRcdGlmIChcblx0XHRcdGVudGVyZWRUaXRsZS50cmltKCkgIT09IFwiXCIgJiZcblx0XHRcdGVudGVyZWRJbWFnZS50cmltKCkgIT09IFwiXCIgJiZcblx0XHRcdGVudGVyZWRBZGRyZXNzLnRyaW0oKSAhPT0gXCJcIiAmJlxuXHRcdFx0ZW50ZXJlZERlc2NyaXB0aW9uLnRyaW0oKSAhPT0gXCJcIlxuXHRcdClcbiAgICAgIHNldElzRm9ybVZhbGlkKHRydWUpO1xuICAgIGVsc2UgaXNGb3JtVmFsaWQgJiYgc2V0SXNGb3JtVmFsaWQoZmFsc2UpXG5cdH07XG5cblx0ZnVuY3Rpb24gc3VibWl0SGFuZGxlcihldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRjb25zdCBlbnRlcmVkVGl0bGUgPSB0aXRsZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XG5cdFx0Y29uc3QgZW50ZXJlZEltYWdlID0gaW1hZ2VJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuXHRcdGNvbnN0IGVudGVyZWRBZGRyZXNzID0gYWRkcmVzc0lucHV0UmVmLmN1cnJlbnQudmFsdWU7XG5cdFx0Y29uc3QgZW50ZXJlZERlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuXG5cdFx0Y29uc3QgbWVldHVwRGF0YSA9IHtcblx0XHRcdHRpdGxlOiBlbnRlcmVkVGl0bGUsXG5cdFx0XHRpbWFnZTogZW50ZXJlZEltYWdlLFxuXHRcdFx0YWRkcmVzczogZW50ZXJlZEFkZHJlc3MsXG5cdFx0XHRkZXNjcmlwdGlvbjogZW50ZXJlZERlc2NyaXB0aW9uLFxuXHRcdH07XG5cblx0XHRwcm9wcy5vbkFkZE1lZXR1cChtZWV0dXBEYXRhKTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PENhcmQ+XG5cdFx0XHQ8Zm9ybVxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX1cblx0XHRcdFx0b25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9XG5cdFx0XHRcdG9uQ2hhbmdlPXtjaGVja0Zvcm1WYWxpZGl0eX1cblx0XHRcdD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiPk1lZXR1cCBUaXRsZTwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgaWQ9XCJ0aXRsZVwiIHJlZj17dGl0bGVJbnB1dFJlZn0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VcIj5NZWV0dXAgSW1hZ2U8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidXJsXCIgcmVxdWlyZWQgaWQ9XCJpbWFnZVwiIHJlZj17aW1hZ2VJbnB1dFJlZn0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiYWRkcmVzc1wiPkFkZHJlc3M8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIGlkPVwiYWRkcmVzc1wiIHJlZj17YWRkcmVzc0lucHV0UmVmfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cblx0XHRcdFx0XHQ8dGV4dGFyZWFcblx0XHRcdFx0XHRcdGlkPVwiZGVzY3JpcHRpb25cIlxuXHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdHJvd3M9XCI1XCJcblx0XHRcdFx0XHRcdHJlZj17ZGVzY3JpcHRpb25JbnB1dFJlZn1cblx0XHRcdFx0XHQ+PC90ZXh0YXJlYT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc31cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxidXR0b24gZGlzYWJsZWQ9eyFpc0Zvcm1WYWxpZH0gY2xhc3NOYW1lPXshaXNGb3JtVmFsaWQgPyBjbGFzc2VzLmRpc2FibGVkIDogXCJcIn0+QWRkIE1lZXR1cDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZm9ybT5cblx0XHQ8L0NhcmQ+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld01lZXR1cEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9