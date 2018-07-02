// import subPageA from './subPageA'
// import subPageB from './subPageB'
import * as _ from 'lodash'
import $ from 'jquery'
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
import(/* webpackChunkName: 'subPageA' */ './subPageA').then(function(){})
import(/* webpackChunkName: 'subPageB' */ './subPageB').then(function(){})

// require.ensure(['lodash'], function(){
//     const _ = require('lodash')
//     _.join([1,2,3,4], 5)
// }, 'vendor')

export default pageA