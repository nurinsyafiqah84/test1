(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[667],{6189:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/layouts/Section",function(){return __webpack_require__(2456)}])},5202:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7294);let Switch=param=>{let{items}=param;Array.isArray(items)&&console.log(items[0]);let[isToggled,setToggle]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),[item1Width,setItem1Width]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),[item2Width,setItem2Width]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),item1Ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),item2Ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),handleToggle=toggleState=>{setToggle(toggleState)};(0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{setItem1Width(item1Ref.current.offsetWidth),setItem2Width(item2Ref.current.offsetWidth)},[]);let activeTextColor="bg-clip-text text-transparent text-green bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"hover: cursor-pointer h-8 border-solid border-darkBlue rounded-[30px] border-[1px] font-semibold flex items-center relative",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{ref:item1Ref,onClick:handleToggle.bind(null,!1),className:"py-1 px-5 h-8 rounded-[30px] ".concat(isToggled||activeTextColor),children:null==items?void 0:items[0]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{ref:item2Ref,onClick(){handleToggle(!0)},className:"py-1 px-5 h-8 rounded-[30px] ".concat(isToggled&&activeTextColor),children:null==items?void 0:items[1]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"h-8 w-20 bg-darkBlue rounded-[30px] absolute z-[-1] transition-all duration-150 ease-in",style:isToggled?{left:"".concat(item1Width,"px"),width:"".concat(item2Width+2,"px")}:{left:"0",width:"".concat(item1Width,"px")}})]})};__webpack_exports__.default=Switch},2456:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),_baseUI_Switch__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5202);let Section=param=>{let{title,items}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section",{className:"pt-[30px] px-10",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"font-semibold text-2xl",children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_baseUI_Switch__WEBPACK_IMPORTED_MODULE_1__.default,{items:items})]})})};__webpack_exports__.default=Section}},function(__webpack_require__){__webpack_require__.O(0,[774,888,179],function(){return __webpack_require__(__webpack_require__.s=6189)}),_N_E=__webpack_require__.O()}]);