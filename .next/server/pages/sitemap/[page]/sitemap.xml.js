module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/sitemap/[page]/sitemap.xml.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
const API_URL = 'https://apinovelfull.vercel.app/';

/***/ }),

/***/ "./pages/sitemap/[page]/sitemap.xml.js":
/*!*********************************************!*\
  !*** ./pages/sitemap/[page]/sitemap.xml.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/config */ "./config/config.js");


const toUrl = (host, route) => `<url><loc>http://www.${host}${route}</loc></url>`;

const createSitemap = (host, routes, novel) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes.map(route => toUrl(host, route)).join("")}
    ${novel.map(novels => toUrl(host, `/novel/${novels.idnovel}1`)).join("")}
    </urlset>`;

const Sitemap = props => {
  const routes = ["", "/about", "/novel"];
  const novel = props.data; //You can fetch the products from an API

  const sitemap = createSitemap(props.req.headers.host, routes, novel.data);
  props.res.setHeader("Content-Type", "text/xml");
  props.res.write(sitemap);
  props.res.end();
  return props.res;
}; // Sitemap.getInitialProps = ({ res, req }) => {
//   const routes = ["", "/about", "/novel"];
//   const products = [123];  //You can fetch the products from an API
//   const sitemap = createSitemap(req.headers.host, routes, products);
//   res.setHeader("Content-Type", "text/xml");
//   res.write(sitemap);
//   res.end();
//   return res;
// };


Sitemap.getInitialProps = async context => {
  const {
    page
  } = context.query;
  const req = context.req;
  const res = context.res;
  const ress = await fetch(`${_config_config__WEBPACK_IMPORTED_MODULE_0__["API_URL"]}update?page=${page}`);
  const json = await ress.json(); // console.log(json)

  return {
    data: json,
    res,
    req
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Sitemap);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9zaXRlbWFwL1twYWdlXS9zaXRlbWFwLnhtbC5qcyJdLCJuYW1lcyI6WyJBUElfVVJMIiwidG9VcmwiLCJob3N0Iiwicm91dGUiLCJjcmVhdGVTaXRlbWFwIiwicm91dGVzIiwibm92ZWwiLCJtYXAiLCJqb2luIiwibm92ZWxzIiwiaWRub3ZlbCIsIlNpdGVtYXAiLCJwcm9wcyIsImRhdGEiLCJzaXRlbWFwIiwicmVxIiwiaGVhZGVycyIsInJlcyIsInNldEhlYWRlciIsIndyaXRlIiwiZW5kIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInBhZ2UiLCJxdWVyeSIsInJlc3MiLCJmZXRjaCIsImpzb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFPLE1BQU1BLE9BQU8sR0FBRyxrQ0FBaEIsQzs7Ozs7Ozs7Ozs7O0FDQVA7QUFBQTtBQUFBOztBQUNBLE1BQU1DLEtBQUssR0FBRyxDQUFDQyxJQUFELEVBQU9DLEtBQVAsS0FDWCx3QkFBdUJELElBQUssR0FBRUMsS0FBTSxjQUR2Qzs7QUFHQSxNQUFNQyxhQUFhLEdBQUcsQ0FDcEJGLElBRG9CLEVBRXBCRyxNQUZvQixFQUdwQkMsS0FIb0IsS0FJaEI7QUFDTjtBQUNBLE1BQU1ELE1BQU0sQ0FBQ0UsR0FBUCxDQUFZSixLQUFELElBQVdGLEtBQUssQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLENBQTNCLEVBQTBDSyxJQUExQyxDQUErQyxFQUEvQyxDQUFtRDtBQUN6RCxNQUFNRixLQUFLLENBQUNDLEdBQU4sQ0FBV0UsTUFBRCxJQUFZUixLQUFLLENBQUNDLElBQUQsRUFBUSxVQUFTTyxNQUFNLENBQUNDLE9BQVEsR0FBaEMsQ0FBM0IsRUFBZ0VGLElBQWhFLENBQXFFLEVBQXJFLENBQXlFO0FBQy9FLGNBUkE7O0FBVUEsTUFBTUcsT0FBTyxHQUFJQyxLQUFELElBQVc7QUFDekIsUUFBTVAsTUFBTSxHQUFHLENBQUMsRUFBRCxFQUFLLFFBQUwsRUFBZSxRQUFmLENBQWY7QUFDQSxRQUFNQyxLQUFLLEdBQUdNLEtBQUssQ0FBQ0MsSUFBcEIsQ0FGeUIsQ0FFRTs7QUFFM0IsUUFBTUMsT0FBTyxHQUFHVixhQUFhLENBQUNRLEtBQUssQ0FBQ0csR0FBTixDQUFVQyxPQUFWLENBQWtCZCxJQUFuQixFQUF5QkcsTUFBekIsRUFBaUNDLEtBQUssQ0FBQ08sSUFBdkMsQ0FBN0I7QUFFQUQsT0FBSyxDQUFDSyxHQUFOLENBQVVDLFNBQVYsQ0FBb0IsY0FBcEIsRUFBb0MsVUFBcEM7QUFDQU4sT0FBSyxDQUFDSyxHQUFOLENBQVVFLEtBQVYsQ0FBZ0JMLE9BQWhCO0FBQ0FGLE9BQUssQ0FBQ0ssR0FBTixDQUFVRyxHQUFWO0FBQ0EsU0FBT1IsS0FBSyxDQUFDSyxHQUFiO0FBQ0QsQ0FWRCxDLENBWUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQU4sT0FBTyxDQUFDVSxlQUFSLEdBQTBCLE1BQU9DLE9BQVAsSUFBbUI7QUFDM0MsUUFBTTtBQUFFQztBQUFGLE1BQVdELE9BQU8sQ0FBQ0UsS0FBekI7QUFDQSxRQUFNVCxHQUFHLEdBQUdPLE9BQU8sQ0FBQ1AsR0FBcEI7QUFDQSxRQUFNRSxHQUFHLEdBQUdLLE9BQU8sQ0FBQ0wsR0FBcEI7QUFDQSxRQUFNUSxJQUFJLEdBQUcsTUFBTUMsS0FBSyxDQUFFLEdBQUUxQixzREFBUSxlQUFjdUIsSUFBSyxFQUEvQixDQUF4QjtBQUNBLFFBQU1JLElBQUksR0FBRyxNQUFNRixJQUFJLENBQUNFLElBQUwsRUFBbkIsQ0FMMkMsQ0FNM0M7O0FBQ0EsU0FBTztBQUFFZCxRQUFJLEVBQUVjLElBQVI7QUFBY1YsT0FBZDtBQUFtQkY7QUFBbkIsR0FBUDtBQUVELENBVEQ7O0FBVWVKLHNFQUFmLEUiLCJmaWxlIjoicGFnZXMvc2l0ZW1hcC9bcGFnZV0vc2l0ZW1hcC54bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3NpdGVtYXAvW3BhZ2VdL3NpdGVtYXAueG1sLmpzXCIpO1xuIiwiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSAnaHR0cHM6Ly9hcGlub3ZlbGZ1bGwudmVyY2VsLmFwcC8nOyIsImltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvY29uZmlnJ1xyXG5jb25zdCB0b1VybCA9IChob3N0LCByb3V0ZSkgPT5cclxuICBgPHVybD48bG9jPmh0dHA6Ly93d3cuJHtob3N0fSR7cm91dGV9PC9sb2M+PC91cmw+YDtcclxuXHJcbmNvbnN0IGNyZWF0ZVNpdGVtYXAgPSAoXHJcbiAgaG9zdCxcclxuICByb3V0ZXMsXHJcbiAgbm92ZWxcclxuKSA9PiBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XHJcbiAgICA8dXJsc2V0IHhtbG5zPVwiaHR0cDovL3d3dy5zaXRlbWFwcy5vcmcvc2NoZW1hcy9zaXRlbWFwLzAuOVwiPlxyXG4gICAgJHtyb3V0ZXMubWFwKChyb3V0ZSkgPT4gdG9VcmwoaG9zdCwgcm91dGUpKS5qb2luKFwiXCIpfVxyXG4gICAgJHtub3ZlbC5tYXAoKG5vdmVscykgPT4gdG9VcmwoaG9zdCwgYC9ub3ZlbC8ke25vdmVscy5pZG5vdmVsfTFgKSkuam9pbihcIlwiKX1cclxuICAgIDwvdXJsc2V0PmA7XHJcblxyXG5jb25zdCBTaXRlbWFwID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVzID0gW1wiXCIsIFwiL2Fib3V0XCIsIFwiL25vdmVsXCJdO1xyXG4gIGNvbnN0IG5vdmVsID0gcHJvcHMuZGF0YTsgIC8vWW91IGNhbiBmZXRjaCB0aGUgcHJvZHVjdHMgZnJvbSBhbiBBUElcclxuXHJcbiAgY29uc3Qgc2l0ZW1hcCA9IGNyZWF0ZVNpdGVtYXAocHJvcHMucmVxLmhlYWRlcnMuaG9zdCwgcm91dGVzLCBub3ZlbC5kYXRhKTtcclxuXHJcbiAgcHJvcHMucmVzLnNldEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQveG1sXCIpO1xyXG4gIHByb3BzLnJlcy53cml0ZShzaXRlbWFwKTtcclxuICBwcm9wcy5yZXMuZW5kKCk7XHJcbiAgcmV0dXJuIHByb3BzLnJlcztcclxufTtcclxuXHJcbi8vIFNpdGVtYXAuZ2V0SW5pdGlhbFByb3BzID0gKHsgcmVzLCByZXEgfSkgPT4ge1xyXG4vLyAgIGNvbnN0IHJvdXRlcyA9IFtcIlwiLCBcIi9hYm91dFwiLCBcIi9ub3ZlbFwiXTtcclxuLy8gICBjb25zdCBwcm9kdWN0cyA9IFsxMjNdOyAgLy9Zb3UgY2FuIGZldGNoIHRoZSBwcm9kdWN0cyBmcm9tIGFuIEFQSVxyXG4vLyAgIGNvbnN0IHNpdGVtYXAgPSBjcmVhdGVTaXRlbWFwKHJlcS5oZWFkZXJzLmhvc3QsIHJvdXRlcywgcHJvZHVjdHMpO1xyXG5cclxuLy8gICByZXMuc2V0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC94bWxcIik7XHJcbi8vICAgcmVzLndyaXRlKHNpdGVtYXApO1xyXG4vLyAgIHJlcy5lbmQoKTtcclxuLy8gICByZXR1cm4gcmVzO1xyXG4vLyB9O1xyXG5TaXRlbWFwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgeyBwYWdlIH0gPSBjb250ZXh0LnF1ZXJ5XHJcbiAgY29uc3QgcmVxID0gY29udGV4dC5yZXFcclxuICBjb25zdCByZXMgPSBjb250ZXh0LnJlc1xyXG4gIGNvbnN0IHJlc3MgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfXVwZGF0ZT9wYWdlPSR7cGFnZX1gKVxyXG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXNzLmpzb24oKVxyXG4gIC8vIGNvbnNvbGUubG9nKGpzb24pXHJcbiAgcmV0dXJuIHsgZGF0YToganNvbiwgcmVzLCByZXEgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTaXRlbWFwOyJdLCJzb3VyY2VSb290IjoiIn0=