webpackJsonp([4],{

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
// import subPageA from './subPageA'
// import subPageB from './subPageB'


const pageA = 'this is page A'

//懒加载
// require.include('./commonModule')

// require.ensure([], function(){
//     const subPageA = require('./subPageA')
// }, 'subPageA')

// require.ensure([], function(){
//     const subPageA = require('./subPageB')
// }, 'subPageB')

//es6动态加载
Promise.all/* import() */([__webpack_require__.e(2), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, 6)).then(function(){})
Promise.all/* import() */([__webpack_require__.e(1), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, 7)).then(function(){})

// require.ensure(['lodash'], function(){
//     const _ = require('lodash')
//     _.join([1,2,3,4], 5)
// }, 'vendor')

/* harmony default export */ __webpack_exports__["default"] = (pageA);

/***/ })

},[2]);