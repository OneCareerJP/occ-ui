(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["occ-ui"] = factory(require("vue"));
	else
		root["occ-ui"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "20b1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OccHeading_vue_vue_type_style_index_0_id_55498c5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("74f1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OccHeading_vue_vue_type_style_index_0_id_55498c5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OccHeading_vue_vue_type_style_index_0_id_55498c5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "74f1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "OccHeading", function() { return /* reexport */ OccHeading; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53963f30-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/OccHeading/OccHeading.vue?vue&type=template&id=55498c5e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tagLevel,{tag:"component",class:_vm.classes},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/atoms/OccHeading/OccHeading.vue?vue&type=template&id=55498c5e&scoped=true&

// CONCATENATED MODULE: ./node_modules/@vue/composition-api/dist/vue-composition-api.mjs


var vue_composition_api_toString = function (x) { return Object.prototype.toString.call(x); };
function isNative(Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}
var hasSymbol = typeof Symbol !== 'undefined' &&
    isNative(Symbol) &&
    typeof Reflect !== 'undefined' &&
    isNative(Reflect.ownKeys);
var noopFn = function (_) { return _; };
function proxy(target, key, _a) {
    var get = _a.get, set = _a.set;
    Object.defineProperty(target, key, {
        enumerable: true,
        configurable: true,
        get: get || noopFn,
        set: set || noopFn,
    });
}
function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true,
    });
}
function hasOwn(obj, key) {
    return Object.hasOwnProperty.call(obj, key);
}
function assert(condition, msg) {
    if (!condition) {
        throw new Error("[vue-composition-api] " + msg);
    }
}
function isPrimitive(value) {
    return (typeof value === 'string' ||
        typeof value === 'number' ||
        // $flow-disable-line
        typeof value === 'symbol' ||
        typeof value === 'boolean');
}
function isArray(x) {
    return Array.isArray(x);
}
var objectToString = Object.prototype.toString;
var toTypeString = function (value) {
    return objectToString.call(value);
};
var isMap = function (val) {
    return toTypeString(val) === '[object Map]';
};
var isSet = function (val) {
    return toTypeString(val) === '[object Set]';
};
var MAX_VALID_ARRAY_LENGTH = 4294967295; // Math.pow(2, 32) - 1
function isValidArrayIndex(val) {
    var n = parseFloat(String(val));
    return (n >= 0 &&
        Math.floor(n) === n &&
        isFinite(val) &&
        n <= MAX_VALID_ARRAY_LENGTH);
}
function isObject(val) {
    return val !== null && typeof val === 'object';
}
function isPlainObject(x) {
    return vue_composition_api_toString(x) === '[object Object]';
}
function isFunction(x) {
    return typeof x === 'function';
}
function isUndef(v) {
    return v === undefined || v === null;
}
function warn$1(msg, vm) {
    external_commonjs_vue_commonjs2_vue_root_Vue_.util.warn(msg, vm);
}
function logError(err, vm, info) {
    if ((false)) {}
    if (typeof window !== 'undefined' && typeof console !== 'undefined') {
        console.error(err);
    }
    else {
        throw err;
    }
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

/**
 * Displays a warning message (using console.error) with a stack trace if the
 * function is called inside of active component.
 *
 * @param message warning message to be displayed
 */
function warn(message) {
    var _a;
    warn$1(message, (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy);
}

var activeEffectScope;
var effectScopeStack = [];
var EffectScopeImpl = /** @class */ (function () {
    function EffectScopeImpl(vm) {
        this.active = true;
        this.effects = [];
        this.cleanups = [];
        this.vm = vm;
    }
    EffectScopeImpl.prototype.run = function (fn) {
        if (this.active) {
            try {
                this.on();
                return fn();
            }
            finally {
                this.off();
            }
        }
        else if ((false)) {}
        return;
    };
    EffectScopeImpl.prototype.on = function () {
        if (this.active) {
            effectScopeStack.push(this);
            activeEffectScope = this;
        }
    };
    EffectScopeImpl.prototype.off = function () {
        if (this.active) {
            effectScopeStack.pop();
            activeEffectScope = effectScopeStack[effectScopeStack.length - 1];
        }
    };
    EffectScopeImpl.prototype.stop = function () {
        if (this.active) {
            this.vm.$destroy();
            this.effects.forEach(function (e) { return e.stop(); });
            this.cleanups.forEach(function (cleanup) { return cleanup(); });
            this.active = false;
        }
    };
    return EffectScopeImpl;
}());
var EffectScope = /** @class */ (function (_super) {
    __extends(EffectScope, _super);
    function EffectScope(detached) {
        if (detached === void 0) { detached = false; }
        var _this = this;
        var vm = undefined;
        withCurrentInstanceTrackingDisabled(function () {
            vm = defineComponentInstance(getVueConstructor());
        });
        _this = _super.call(this, vm) || this;
        if (!detached) {
            recordEffectScope(_this);
        }
        return _this;
    }
    return EffectScope;
}(EffectScopeImpl));
function recordEffectScope(effect, scope) {
    var _a;
    scope = scope || activeEffectScope;
    if (scope && scope.active) {
        scope.effects.push(effect);
        return;
    }
    // destory on parent component unmounted
    var vm = (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy;
    vm && vm.$on('hook:destroyed', function () { return effect.stop(); });
}
function effectScope(detached) {
    return new EffectScope(detached);
}
function getCurrentScope() {
    return activeEffectScope;
}
function onScopeDispose(fn) {
    if (activeEffectScope) {
        activeEffectScope.cleanups.push(fn);
    }
    else if ((false)) {}
}
/**
 * @internal
 **/
function getCurrentScopeVM() {
    var _a, _b;
    return ((_a = getCurrentScope()) === null || _a === void 0 ? void 0 : _a.vm) || ((_b = getCurrentInstance()) === null || _b === void 0 ? void 0 : _b.proxy);
}
/**
 * @internal
 **/
function bindCurrentScopeToVM(vm) {
    if (!vm.scope) {
        var scope_1 = new EffectScopeImpl(vm.proxy);
        vm.scope = scope_1;
        vm.proxy.$on('hook:destroyed', function () { return scope_1.stop(); });
    }
    return vm.scope;
}

var vueDependency = undefined;
try {
    var requiredVue = require('vue');
    if (requiredVue && isVue(requiredVue)) {
        vueDependency = requiredVue;
    }
    else if (requiredVue &&
        'default' in requiredVue &&
        isVue(requiredVue.default)) {
        vueDependency = requiredVue.default;
    }
}
catch (_a) {
    // not available
}
var vueConstructor = null;
var currentInstance = null;
var currentInstanceTracking = true;
var PluginInstalledFlag = '__composition_api_installed__';
function isVue(obj) {
    return obj && isFunction(obj) && obj.name === 'Vue';
}
function isVueRegistered(Vue) {
    return hasOwn(Vue, PluginInstalledFlag);
}
function getVueConstructor() {
    if ((false)) {}
    return vueConstructor;
}
// returns registered vue or `vue` dependency
function getRegisteredVueOrDefault() {
    var constructor = vueConstructor || vueDependency;
    if ((false)) {}
    return constructor;
}
function setVueConstructor(Vue) {
    // @ts-ignore
    if (false) {}
    vueConstructor = Vue;
    Object.defineProperty(Vue, PluginInstalledFlag, {
        configurable: true,
        writable: true,
        value: true,
    });
}
/**
 * For `effectScope` to create instance without populate the current instance
 * @internal
 **/
function withCurrentInstanceTrackingDisabled(fn) {
    var prev = currentInstanceTracking;
    currentInstanceTracking = false;
    try {
        fn();
    }
    finally {
        currentInstanceTracking = prev;
    }
}
function setCurrentInstance(instance) {
    if (!currentInstanceTracking)
        return;
    var prev = currentInstance;
    prev === null || prev === void 0 ? void 0 : prev.scope.off();
    currentInstance = instance;
    currentInstance === null || currentInstance === void 0 ? void 0 : currentInstance.scope.on();
}
function getCurrentInstance() {
    return currentInstance;
}
var instanceMapCache = new WeakMap();
function toVue3ComponentInstance(vm) {
    if (instanceMapCache.has(vm)) {
        return instanceMapCache.get(vm);
    }
    var instance = {
        proxy: vm,
        update: vm.$forceUpdate,
        type: vm.$options,
        uid: vm._uid,
        // $emit is defined on prototype and it expected to be bound
        emit: vm.$emit.bind(vm),
        parent: null,
        root: null, // to be immediately set
    };
    bindCurrentScopeToVM(instance);
    // map vm.$props =
    var instanceProps = [
        'data',
        'props',
        'attrs',
        'refs',
        'vnode',
        'slots',
    ];
    instanceProps.forEach(function (prop) {
        proxy(instance, prop, {
            get: function () {
                return vm["$" + prop];
            },
        });
    });
    proxy(instance, 'isMounted', {
        get: function () {
            // @ts-expect-error private api
            return vm._isMounted;
        },
    });
    proxy(instance, 'isUnmounted', {
        get: function () {
            // @ts-expect-error private api
            return vm._isDestroyed;
        },
    });
    proxy(instance, 'isDeactivated', {
        get: function () {
            // @ts-expect-error private api
            return vm._inactive;
        },
    });
    proxy(instance, 'emitted', {
        get: function () {
            // @ts-expect-error private api
            return vm._events;
        },
    });
    instanceMapCache.set(vm, instance);
    if (vm.$parent) {
        instance.parent = toVue3ComponentInstance(vm.$parent);
    }
    if (vm.$root) {
        instance.root = toVue3ComponentInstance(vm.$root);
    }
    return instance;
}

function getCurrentInstanceForFn(hook, target) {
    target = target || getCurrentInstance();
    if (false) {}
    return target;
}
function defineComponentInstance(Ctor, options) {
    if (options === void 0) { options = {}; }
    var silent = Ctor.config.silent;
    Ctor.config.silent = true;
    var vm = new Ctor(options);
    Ctor.config.silent = silent;
    return vm;
}
function isComponentInstance(obj) {
    var Vue = getVueConstructor();
    return Vue && obj instanceof Vue;
}
function createSlotProxy(vm, slotName) {
    return (function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!vm.$scopedSlots[slotName]) {
            if ((false))
                {}
            return;
        }
        return vm.$scopedSlots[slotName].apply(vm, args);
    });
}
function resolveSlots(slots, normalSlots) {
    var res;
    if (!slots) {
        res = {};
    }
    else if (slots._normalized) {
        // fast path 1: child component re-render only, parent did not change
        return slots._normalized;
    }
    else {
        res = {};
        for (var key in slots) {
            if (slots[key] && key[0] !== '$') {
                res[key] = true;
            }
        }
    }
    // expose normal slots on scopedSlots
    for (var key in normalSlots) {
        if (!(key in res)) {
            res[key] = true;
        }
    }
    return res;
}
var vueInternalClasses;
var getVueInternalClasses = function () {
    if (!vueInternalClasses) {
        var vm = defineComponentInstance(getVueConstructor(), {
            computed: {
                value: function () {
                    return 0;
                },
            },
        });
        // to get Watcher class
        var Watcher = vm._computedWatchers.value.constructor;
        // to get Dep class
        var Dep = vm._data.__ob__.dep.constructor;
        vueInternalClasses = {
            Watcher: Watcher,
            Dep: Dep,
        };
        vm.$destroy();
    }
    return vueInternalClasses;
};

function createSymbol(name) {
    return hasSymbol ? Symbol.for(name) : name;
}
var WatcherPreFlushQueueKey = createSymbol('composition-api.preFlushQueue');
var WatcherPostFlushQueueKey = createSymbol('composition-api.postFlushQueue');
// must be a string, symbol key is ignored in reactive
var RefKey = 'composition-api.refKey';

var accessModifiedSet = new WeakMap();
var rawSet = new WeakMap();
var readonlySet = new WeakMap();

var RefImpl = /** @class */ (function () {
    function RefImpl(_a) {
        var get = _a.get, set = _a.set;
        proxy(this, 'value', {
            get: get,
            set: set,
        });
    }
    return RefImpl;
}());
function createRef(options, isReadonly, isComputed) {
    if (isReadonly === void 0) { isReadonly = false; }
    if (isComputed === void 0) { isComputed = false; }
    var r = new RefImpl(options);
    // add effect to differentiate refs from computed
    if (isComputed)
        r.effect = true;
    // seal the ref, this could prevent ref from being observed
    // It's safe to seal the ref, since we really shouldn't extend it.
    // related issues: #79
    var sealed = Object.seal(r);
    if (isReadonly)
        readonlySet.set(sealed, true);
    return sealed;
}
function ref(raw) {
    var _a;
    if (isRef(raw)) {
        return raw;
    }
    var value = reactive((_a = {}, _a[RefKey] = raw, _a));
    return createRef({
        get: function () { return value[RefKey]; },
        set: function (v) { return (value[RefKey] = v); },
    });
}
function isRef(value) {
    return value instanceof RefImpl;
}
function unref(ref) {
    return isRef(ref) ? ref.value : ref;
}
function toRefs(obj) {
    if (false) {}
    if (!isPlainObject(obj))
        return obj;
    var ret = {};
    for (var key in obj) {
        ret[key] = toRef(obj, key);
    }
    return ret;
}
function customRef(factory) {
    var version = ref(0);
    return createRef(factory(function () { return void version.value; }, function () {
        ++version.value;
    }));
}
function toRef(object, key) {
    var v = object[key];
    if (isRef(v))
        return v;
    return createRef({
        get: function () { return object[key]; },
        set: function (v) { return (object[key] = v); },
    });
}
function shallowRef(raw) {
    var _a;
    if (isRef(raw)) {
        return raw;
    }
    var value = shallowReactive((_a = {}, _a[RefKey] = raw, _a));
    return createRef({
        get: function () { return value[RefKey]; },
        set: function (v) { return (value[RefKey] = v); },
    });
}
function triggerRef(value) {
    if (!isRef(value))
        return;
    value.value = value.value;
}
function proxyRefs(objectWithRefs) {
    var _a, e_1, _b;
    if (isReactive(objectWithRefs)) {
        return objectWithRefs;
    }
    var value = reactive((_a = {}, _a[RefKey] = objectWithRefs, _a));
    def(value, RefKey, value[RefKey], false);
    var _loop_1 = function (key) {
        proxy(value, key, {
            get: function () {
                if (isRef(value[RefKey][key])) {
                    return value[RefKey][key].value;
                }
                return value[RefKey][key];
            },
            set: function (v) {
                if (isRef(value[RefKey][key])) {
                    return (value[RefKey][key].value = unref(v));
                }
                value[RefKey][key] = unref(v);
            },
        });
    };
    try {
        for (var _c = __values(Object.keys(objectWithRefs)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var key = _d.value;
            _loop_1(key);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return value;
}

function isRaw(obj) {
    var _a;
    return Boolean(obj &&
        hasOwn(obj, '__ob__') &&
        typeof obj.__ob__ === 'object' &&
        ((_a = obj.__ob__) === null || _a === void 0 ? void 0 : _a.__raw__));
}
function isReactive(obj) {
    var _a;
    return Boolean(obj &&
        hasOwn(obj, '__ob__') &&
        typeof obj.__ob__ === 'object' &&
        !((_a = obj.__ob__) === null || _a === void 0 ? void 0 : _a.__raw__));
}
/**
 * Proxing property access of target.
 * We can do unwrapping and other things here.
 */
function setupAccessControl(target) {
    if (!isPlainObject(target) ||
        isRaw(target) ||
        isArray(target) ||
        isRef(target) ||
        isComponentInstance(target) ||
        accessModifiedSet.has(target))
        return;
    accessModifiedSet.set(target, true);
    var keys = Object.keys(target);
    for (var i = 0; i < keys.length; i++) {
        defineAccessControl(target, keys[i]);
    }
}
/**
 * Auto unwrapping when access property
 */
function defineAccessControl(target, key, val) {
    if (key === '__ob__')
        return;
    if (isRaw(target[key]))
        return;
    var getter;
    var setter;
    var property = Object.getOwnPropertyDescriptor(target, key);
    if (property) {
        if (property.configurable === false) {
            return;
        }
        getter = property.get;
        setter = property.set;
        if ((!getter || setter) /* not only have getter */ &&
            arguments.length === 2) {
            val = target[key];
        }
    }
    setupAccessControl(val);
    proxy(target, key, {
        get: function getterHandler() {
            var value = getter ? getter.call(target) : val;
            // if the key is equal to RefKey, skip the unwrap logic
            if (key !== RefKey && isRef(value)) {
                return value.value;
            }
            else {
                return value;
            }
        },
        set: function setterHandler(newVal) {
            if (getter && !setter)
                return;
            // If the key is equal to RefKey, skip the unwrap logic
            // If and only if "value" is ref and "newVal" is not a ref,
            // the assignment should be proxied to "value" ref.
            if (key !== RefKey && isRef(val) && !isRef(newVal)) {
                val.value = newVal;
            }
            else if (setter) {
                setter.call(target, newVal);
                val = newVal;
            }
            else {
                val = newVal;
            }
            setupAccessControl(newVal);
        },
    });
}
function observe(obj) {
    var Vue = getRegisteredVueOrDefault();
    var observed;
    if (Vue.observable) {
        observed = Vue.observable(obj);
    }
    else {
        var vm = defineComponentInstance(Vue, {
            data: {
                $$state: obj,
            },
        });
        observed = vm._data.$$state;
    }
    // in SSR, there is no __ob__. Mock for reactivity check
    if (!hasOwn(observed, '__ob__')) {
        mockReactivityDeep(observed);
    }
    return observed;
}
/**
 * Mock __ob__ for object recursively
 */
function mockReactivityDeep(obj, seen) {
    var e_1, _a;
    if (seen === void 0) { seen = new Set(); }
    if (seen.has(obj) || hasOwn(obj, '__ob__') || !Object.isExtensible(obj))
        return;
    def(obj, '__ob__', mockObserver(obj));
    seen.add(obj);
    try {
        for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            var value = obj[key];
            if (!(isPlainObject(value) || isArray(value)) ||
                isRaw(value) ||
                !Object.isExtensible(value)) {
                continue;
            }
            mockReactivityDeep(value, seen);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
function mockObserver(value) {
    if (value === void 0) { value = {}; }
    return {
        value: value,
        dep: {
            notify: noopFn,
            depend: noopFn,
            addSub: noopFn,
            removeSub: noopFn,
        },
    };
}
function createObserver() {
    return observe({}).__ob__;
}
function shallowReactive(obj) {
    var e_2, _a;
    if (!isObject(obj)) {
        if ((false)) {}
        return obj;
    }
    if (!(isPlainObject(obj) || isArray(obj)) ||
        isRaw(obj) ||
        !Object.isExtensible(obj)) {
        return obj;
    }
    var observed = observe(isArray(obj) ? [] : {});
    setupAccessControl(observed);
    var ob = observed.__ob__;
    var _loop_1 = function (key) {
        var val = obj[key];
        var getter;
        var setter;
        var property = Object.getOwnPropertyDescriptor(obj, key);
        if (property) {
            if (property.configurable === false) {
                return "continue";
            }
            getter = property.get;
            setter = property.set;
        }
        proxy(observed, key, {
            get: function getterHandler() {
                var _a;
                var value = getter ? getter.call(obj) : val;
                (_a = ob.dep) === null || _a === void 0 ? void 0 : _a.depend();
                return value;
            },
            set: function setterHandler(newVal) {
                var _a;
                if (getter && !setter)
                    return;
                if (setter) {
                    setter.call(obj, newVal);
                }
                else {
                    val = newVal;
                }
                (_a = ob.dep) === null || _a === void 0 ? void 0 : _a.notify();
            },
        });
    };
    try {
        for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            _loop_1(key);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return observed;
}
/**
 * Make obj reactivity
 */
function reactive(obj) {
    if (!isObject(obj)) {
        if ((false)) {}
        return obj;
    }
    if (!(isPlainObject(obj) || isArray(obj)) ||
        isRaw(obj) ||
        !Object.isExtensible(obj)) {
        return obj;
    }
    var observed = observe(obj);
    setupAccessControl(observed);
    return observed;
}
/**
 * Make sure obj can't be a reactive
 */
function markRaw(obj) {
    if (!(isPlainObject(obj) || isArray(obj)) || !Object.isExtensible(obj)) {
        return obj;
    }
    // set the vue observable flag at obj
    var ob = createObserver();
    ob.__raw__ = true;
    def(obj, '__ob__', ob);
    // mark as Raw
    rawSet.set(obj, true);
    return obj;
}
function toRaw(observed) {
    var _a, _b;
    if (isRaw(observed) || !Object.isExtensible(observed)) {
        return observed;
    }
    return ((_b = (_a = observed) === null || _a === void 0 ? void 0 : _a.__ob__) === null || _b === void 0 ? void 0 : _b.value) || observed;
}

function isReadonly(obj) {
    return readonlySet.has(obj);
}
/**
 * **In @vue/composition-api, `reactive` only provides type-level readonly check**
 *
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */
function readonly(target) {
    if (false) {}
    else {
        readonlySet.set(target, true);
    }
    return target;
}
function shallowReadonly(obj) {
    var e_1, _a;
    if (!isObject(obj)) {
        if ((false)) {}
        return obj;
    }
    if (!(isPlainObject(obj) || isArray(obj)) ||
        (!Object.isExtensible(obj) && !isRef(obj))) {
        return obj;
    }
    var readonlyObj = isRef(obj)
        ? new RefImpl({})
        : isReactive(obj)
            ? observe({})
            : {};
    var source = reactive({});
    var ob = source.__ob__;
    var _loop_1 = function (key) {
        var val = obj[key];
        var getter;
        var property = Object.getOwnPropertyDescriptor(obj, key);
        if (property) {
            if (property.configurable === false && !isRef(obj)) {
                return "continue";
            }
            getter = property.get;
        }
        proxy(readonlyObj, key, {
            get: function getterHandler() {
                var value = getter ? getter.call(obj) : val;
                ob.dep.depend();
                return value;
            },
            set: function (v) {
                if ((false)) {}
            },
        });
    };
    try {
        for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            _loop_1(key);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    readonlySet.set(readonlyObj, true);
    return readonlyObj;
}

/**
 * Set a property on an object. Adds the new property, triggers change
 * notification and intercept it's subsequent access if the property doesn't
 * already exist.
 */
function set$1(target, key, val) {
    var Vue = getVueConstructor();
    // @ts-expect-error https://github.com/vuejs/vue/pull/12132
    var _a = Vue.util, warn = _a.warn, defineReactive = _a.defineReactive;
    if (false) {}
    var ob = target.__ob__;
    function ssrMockReactivity() {
        // in SSR, there is no __ob__. Mock for reactivity check
        if (ob && isObject(val) && !hasOwn(val, '__ob__')) {
            mockReactivityDeep(val);
        }
    }
    if (isArray(target)) {
        if (isValidArrayIndex(key)) {
            target.length = Math.max(target.length, key);
            target.splice(key, 1, val);
            ssrMockReactivity();
            return val;
        }
        else if (key === 'length' && val !== target.length) {
            target.length = val;
            ob === null || ob === void 0 ? void 0 : ob.dep.notify();
            return val;
        }
    }
    if (key in target && !(key in Object.prototype)) {
        target[key] = val;
        ssrMockReactivity();
        return val;
    }
    if (target._isVue || (ob && ob.vmCount)) {
        ( false) &&
            false;
        return val;
    }
    if (!ob) {
        target[key] = val;
        return val;
    }
    defineReactive(ob.value, key, val);
    // IMPORTANT: define access control before trigger watcher
    defineAccessControl(target, key, val);
    ssrMockReactivity();
    ob.dep.notify();
    return val;
}

/**
 * Delete a property and trigger change if necessary.
 */
function del(target, key) {
    var Vue = getVueConstructor();
    var warn = Vue.util.warn;
    if (false) {}
    if (isArray(target) && isValidArrayIndex(key)) {
        target.splice(key, 1);
        return;
    }
    var ob = target.__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
        ( false) &&
            false;
        return;
    }
    if (!hasOwn(target, key)) {
        return;
    }
    delete target[key];
    if (!ob) {
        return;
    }
    ob.dep.notify();
}

var genName = function (name) { return "on" + (name[0].toUpperCase() + name.slice(1)); };
function createLifeCycle(lifeCyclehook) {
    return function (callback, target) {
        var instance = getCurrentInstanceForFn(genName(lifeCyclehook), target);
        return (instance &&
            injectHookOption(getVueConstructor(), instance, lifeCyclehook, callback));
    };
}
function injectHookOption(Vue, instance, hook, val) {
    var options = instance.proxy.$options;
    var mergeFn = Vue.config.optionMergeStrategies[hook];
    var wrappedHook = wrapHookCall(instance, val);
    options[hook] = mergeFn(options[hook], wrappedHook);
    return wrappedHook;
}
function wrapHookCall(instance, fn) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var prev = getCurrentInstance();
        setCurrentInstance(instance);
        try {
            return fn.apply(void 0, __spreadArray([], __read(args), false));
        }
        finally {
            setCurrentInstance(prev);
        }
    };
}
var onBeforeMount = createLifeCycle('beforeMount');
var onMounted = createLifeCycle('mounted');
var onBeforeUpdate = createLifeCycle('beforeUpdate');
var onUpdated = createLifeCycle('updated');
var onBeforeUnmount = createLifeCycle('beforeDestroy');
var onUnmounted = createLifeCycle('destroyed');
var onErrorCaptured = createLifeCycle('errorCaptured');
var onActivated = createLifeCycle('activated');
var onDeactivated = createLifeCycle('deactivated');
var onServerPrefetch = createLifeCycle('serverPrefetch');

var fallbackVM;
function flushPreQueue() {
    flushQueue(this, WatcherPreFlushQueueKey);
}
function flushPostQueue() {
    flushQueue(this, WatcherPostFlushQueueKey);
}
function hasWatchEnv(vm) {
    return vm[WatcherPreFlushQueueKey] !== undefined;
}
function installWatchEnv(vm) {
    vm[WatcherPreFlushQueueKey] = [];
    vm[WatcherPostFlushQueueKey] = [];
    vm.$on('hook:beforeUpdate', flushPreQueue);
    vm.$on('hook:updated', flushPostQueue);
}
function getWatcherOption(options) {
    return __assign({
        immediate: false,
        deep: false,
        flush: 'pre',
    }, options);
}
function getWatchEffectOption(options) {
    return __assign({
        flush: 'pre',
    }, options);
}
function getWatcherVM() {
    var vm = getCurrentScopeVM();
    if (!vm) {
        if (!fallbackVM) {
            fallbackVM = defineComponentInstance(getVueConstructor());
        }
        vm = fallbackVM;
    }
    else if (!hasWatchEnv(vm)) {
        installWatchEnv(vm);
    }
    return vm;
}
function flushQueue(vm, key) {
    var queue = vm[key];
    for (var index = 0; index < queue.length; index++) {
        queue[index]();
    }
    queue.length = 0;
}
function queueFlushJob(vm, fn, mode) {
    // flush all when beforeUpdate and updated are not fired
    var fallbackFlush = function () {
        vm.$nextTick(function () {
            if (vm[WatcherPreFlushQueueKey].length) {
                flushQueue(vm, WatcherPreFlushQueueKey);
            }
            if (vm[WatcherPostFlushQueueKey].length) {
                flushQueue(vm, WatcherPostFlushQueueKey);
            }
        });
    };
    switch (mode) {
        case 'pre':
            fallbackFlush();
            vm[WatcherPreFlushQueueKey].push(fn);
            break;
        case 'post':
            fallbackFlush();
            vm[WatcherPostFlushQueueKey].push(fn);
            break;
        default:
            assert(false, "flush must be one of [\"post\", \"pre\", \"sync\"], but got " + mode);
            break;
    }
}
function createVueWatcher(vm, getter, callback, options) {
    var index = vm._watchers.length;
    // @ts-ignore: use undocumented options
    vm.$watch(getter, callback, {
        immediate: options.immediateInvokeCallback,
        deep: options.deep,
        lazy: options.noRun,
        sync: options.sync,
        before: options.before,
    });
    return vm._watchers[index];
}
// We have to monkeypatch the teardown function so Vue will run
// runCleanup() when it tears down the watcher on unmounted.
function patchWatcherTeardown(watcher, runCleanup) {
    var _teardown = watcher.teardown;
    watcher.teardown = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        _teardown.apply(watcher, args);
        runCleanup();
    };
}
function createWatcher(vm, source, cb, options) {
    var _a;
    if (false) {}
    var flushMode = options.flush;
    var isSync = flushMode === 'sync';
    var cleanup;
    var registerCleanup = function (fn) {
        cleanup = function () {
            try {
                fn();
            }
            catch (
            // FIXME: remove any
            error) {
                logError(error, vm, 'onCleanup()');
            }
        };
    };
    // cleanup before running getter again
    var runCleanup = function () {
        if (cleanup) {
            cleanup();
            cleanup = null;
        }
    };
    var createScheduler = function (fn) {
        if (isSync ||
            /* without a current active instance, ignore pre|post mode */ vm ===
                fallbackVM) {
            return fn;
        }
        return (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return queueFlushJob(vm, function () {
                fn.apply(void 0, __spreadArray([], __read(args)));
            }, flushMode);
        });
    };
    // effect watch
    if (cb === null) {
        var running_1 = false;
        var getter_1 = function () {
            // preventing the watch callback being call in the same execution
            if (running_1) {
                return;
            }
            try {
                running_1 = true;
                source(registerCleanup);
            }
            finally {
                running_1 = false;
            }
        };
        var watcher_1 = createVueWatcher(vm, getter_1, noopFn, {
            deep: options.deep || false,
            sync: isSync,
            before: runCleanup,
        });
        patchWatcherTeardown(watcher_1, runCleanup);
        // enable the watcher update
        watcher_1.lazy = false;
        var originGet = watcher_1.get.bind(watcher_1);
        // always run watchEffect
        watcher_1.get = createScheduler(originGet);
        return function () {
            watcher_1.teardown();
        };
    }
    var deep = options.deep;
    var isMultiSource = false;
    var getter;
    if (isRef(source)) {
        getter = function () { return source.value; };
    }
    else if (isReactive(source)) {
        getter = function () { return source; };
        deep = true;
    }
    else if (isArray(source)) {
        isMultiSource = true;
        getter = function () {
            return source.map(function (s) {
                if (isRef(s)) {
                    return s.value;
                }
                else if (isReactive(s)) {
                    return traverse(s);
                }
                else if (isFunction(s)) {
                    return s();
                }
                else {
                    ( false) &&
                        false;
                    return noopFn;
                }
            });
        };
    }
    else if (isFunction(source)) {
        getter = source;
    }
    else {
        getter = noopFn;
        ( false) &&
            false;
    }
    if (deep) {
        var baseGetter_1 = getter;
        getter = function () { return traverse(baseGetter_1()); };
    }
    var applyCb = function (n, o) {
        if (!deep &&
            isMultiSource &&
            n.every(function (v, i) { return Object.is(v, o[i]); }))
            return;
        // cleanup before running cb again
        runCleanup();
        return cb(n, o, registerCleanup);
    };
    var callback = createScheduler(applyCb);
    if (options.immediate) {
        var originalCallback_1 = callback;
        // `shiftCallback` is used to handle the first sync effect run.
        // The subsequent callbacks will redirect to `callback`.
        var shiftCallback_1 = function (n, o) {
            shiftCallback_1 = originalCallback_1;
            // o is undefined on the first call
            return applyCb(n, isArray(n) ? [] : o);
        };
        callback = function (n, o) {
            return shiftCallback_1(n, o);
        };
    }
    // @ts-ignore: use undocumented option "sync"
    var stop = vm.$watch(getter, callback, {
        immediate: options.immediate,
        deep: deep,
        sync: isSync,
    });
    // Once again, we have to hack the watcher for proper teardown
    var watcher = vm._watchers[vm._watchers.length - 1];
    // if the return value is reactive and deep:true
    // watch for changes, this might happen when new key is added
    if (isReactive(watcher.value) && ((_a = watcher.value.__ob__) === null || _a === void 0 ? void 0 : _a.dep) && deep) {
        watcher.value.__ob__.dep.addSub({
            update: function () {
                // this will force the source to be revaluated and the callback
                // executed if needed
                watcher.run();
            },
        });
    }
    patchWatcherTeardown(watcher, runCleanup);
    return function () {
        stop();
    };
}
function watchEffect(effect, options) {
    var opts = getWatchEffectOption(options);
    var vm = getWatcherVM();
    return createWatcher(vm, effect, null, opts);
}
function watchPostEffect(effect) {
    return watchEffect(effect, { flush: 'post' });
}
function watchSyncEffect(effect) {
    return watchEffect(effect, { flush: 'sync' });
}
// implementation
function watch(source, cb, options) {
    var callback = null;
    if (isFunction(cb)) {
        // source watch
        callback = cb;
    }
    else {
        // effect watch
        if ((false)) {}
        options = cb;
        callback = null;
    }
    var opts = getWatcherOption(options);
    var vm = getWatcherVM();
    return createWatcher(vm, source, callback, opts);
}
function traverse(value, seen) {
    if (seen === void 0) { seen = new Set(); }
    if (!isObject(value) || seen.has(value)) {
        return value;
    }
    seen.add(value);
    if (isRef(value)) {
        traverse(value.value, seen);
    }
    else if (isArray(value)) {
        for (var i = 0; i < value.length; i++) {
            traverse(value[i], seen);
        }
    }
    else if (isSet(value) || isMap(value)) {
        value.forEach(function (v) {
            traverse(v, seen);
        });
    }
    else if (isPlainObject(value)) {
        for (var key in value) {
            traverse(value[key], seen);
        }
    }
    return value;
}

// implement
function computed(getterOrOptions) {
    var vm = getCurrentScopeVM();
    var getter;
    var setter;
    if (isFunction(getterOrOptions)) {
        getter = getterOrOptions;
    }
    else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    var computedSetter;
    var computedGetter;
    if (vm && !vm.$isServer) {
        var _a = getVueInternalClasses(), Watcher_1 = _a.Watcher, Dep_1 = _a.Dep;
        var watcher_1;
        computedGetter = function () {
            if (!watcher_1) {
                watcher_1 = new Watcher_1(vm, getter, noopFn, { lazy: true });
            }
            if (watcher_1.dirty) {
                watcher_1.evaluate();
            }
            if (Dep_1.target) {
                watcher_1.depend();
            }
            return watcher_1.value;
        };
        computedSetter = function (v) {
            if (false) {}
            if (setter) {
                setter(v);
            }
        };
    }
    else {
        // fallback
        var computedHost_1 = defineComponentInstance(getVueConstructor(), {
            computed: {
                $$state: {
                    get: getter,
                    set: setter,
                },
            },
        });
        vm && vm.$on('hook:destroyed', function () { return computedHost_1.$destroy(); });
        computedGetter = function () { return computedHost_1.$$state; };
        computedSetter = function (v) {
            if (false) {}
            computedHost_1.$$state = v;
        };
    }
    return createRef({
        get: computedGetter,
        set: computedSetter,
    }, !setter, true);
}

var NOT_FOUND = {};
function resolveInject(provideKey, vm) {
    var source = vm;
    while (source) {
        // @ts-ignore
        if (source._provided && hasOwn(source._provided, provideKey)) {
            //@ts-ignore
            return source._provided[provideKey];
        }
        source = source.$parent;
    }
    return NOT_FOUND;
}
function provide(key, value) {
    var _a;
    var vm = (_a = getCurrentInstanceForFn('provide')) === null || _a === void 0 ? void 0 : _a.proxy;
    if (!vm)
        return;
    if (!vm._provided) {
        var provideCache_1 = {};
        proxy(vm, '_provided', {
            get: function () { return provideCache_1; },
            set: function (v) { return Object.assign(provideCache_1, v); },
        });
    }
    vm._provided[key] = value;
}
function inject(key, defaultValue, treatDefaultAsFactory) {
    var _a;
    if (treatDefaultAsFactory === void 0) { treatDefaultAsFactory = false; }
    var vm = (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy;
    if (!vm) {
        ( false) &&
            false;
        return;
    }
    if (!key) {
        ( false) && false;
        return defaultValue;
    }
    var val = resolveInject(key, vm);
    if (val !== NOT_FOUND) {
        return val;
    }
    if (defaultValue === undefined && ("production" !== 'production')) {
        warn$1("Injection \"" + String(key) + "\" not found", vm);
    }
    return treatDefaultAsFactory && isFunction(defaultValue)
        ? defaultValue()
        : defaultValue;
}

var EMPTY_OBJ = ( false)
    ? undefined
    : {};
var useCssModule = function (name) {
    var _a;
    if (name === void 0) { name = '$style'; }
    var instance = getCurrentInstance();
    if (!instance) {
        ( false) && false;
        return EMPTY_OBJ;
    }
    var mod = (_a = instance.proxy) === null || _a === void 0 ? void 0 : _a[name];
    if (!mod) {
        ( false) &&
            false;
        return EMPTY_OBJ;
    }
    return mod;
};
/**
 * @deprecated use `useCssModule` instead.
 */
var useCSSModule = useCssModule;

function createApp(rootComponent, rootProps) {
    if (rootProps === void 0) { rootProps = undefined; }
    var V = getVueConstructor();
    var mountedVM = undefined;
    return {
        config: V.config,
        use: V.use.bind(V),
        mixin: V.mixin.bind(V),
        component: V.component.bind(V),
        directive: V.directive.bind(V),
        mount: function (el, hydrating) {
            if (!mountedVM) {
                mountedVM = new V(__assign({ propsData: rootProps }, rootComponent));
                mountedVM.$mount(el, hydrating);
                return mountedVM;
            }
            else {
                if ((false)) {}
                return mountedVM;
            }
        },
        unmount: function () {
            if (mountedVM) {
                mountedVM.$destroy();
                mountedVM = undefined;
            }
            else if ((false)) {}
        },
    };
}

var nextTick = function nextTick() {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return (_a = getVueConstructor()) === null || _a === void 0 ? void 0 : _a.nextTick.apply(this, args);
};

var fallbackCreateElement;
var createElement = function createElement() {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var instance = (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy;
    if (!instance) {
        ( false) &&
            false;
        if (!fallbackCreateElement) {
            fallbackCreateElement = defineComponentInstance(getVueConstructor()).$createElement;
        }
        return fallbackCreateElement.apply(fallbackCreateElement, args);
    }
    return instance.$createElement.apply(instance, args);
};

function useSlots() {
    return getContext().slots;
}
function useAttrs() {
    return getContext().attrs;
}
function getContext() {
    var i = getCurrentInstance();
    if (false) {}
    return i.setupContext;
}

function set(vm, key, value) {
    var state = (vm.__composition_api_state__ =
        vm.__composition_api_state__ || {});
    state[key] = value;
}
function get(vm, key) {
    return (vm.__composition_api_state__ || {})[key];
}
var vmStateManager = {
    set: set,
    get: get,
};

function asVmProperty(vm, propName, propValue) {
    var props = vm.$options.props;
    if (!(propName in vm) && !(props && hasOwn(props, propName))) {
        if (isRef(propValue)) {
            proxy(vm, propName, {
                get: function () { return propValue.value; },
                set: function (val) {
                    propValue.value = val;
                },
            });
        }
        else {
            proxy(vm, propName, {
                get: function () {
                    if (isReactive(propValue)) {
                        propValue.__ob__.dep.depend();
                    }
                    return propValue;
                },
                set: function (val) {
                    propValue = val;
                },
            });
        }
        if ((false)) {}
    }
    else if ((false)) {}
}
function updateTemplateRef(vm) {
    var rawBindings = vmStateManager.get(vm, 'rawBindings') || {};
    if (!rawBindings || !Object.keys(rawBindings).length)
        return;
    var refs = vm.$refs;
    var oldRefKeys = vmStateManager.get(vm, 'refs') || [];
    for (var index = 0; index < oldRefKeys.length; index++) {
        var key = oldRefKeys[index];
        var setupValue = rawBindings[key];
        if (!refs[key] && setupValue && isRef(setupValue)) {
            setupValue.value = null;
        }
    }
    var newKeys = Object.keys(refs);
    var validNewKeys = [];
    for (var index = 0; index < newKeys.length; index++) {
        var key = newKeys[index];
        var setupValue = rawBindings[key];
        if (refs[key] && setupValue && isRef(setupValue)) {
            setupValue.value = refs[key];
            validNewKeys.push(key);
        }
    }
    vmStateManager.set(vm, 'refs', validNewKeys);
}
function updateVmAttrs(vm, ctx) {
    var e_1, _a;
    if (!vm) {
        return;
    }
    var attrBindings = vmStateManager.get(vm, 'attrBindings');
    if (!attrBindings && !ctx) {
        // fix 840
        return;
    }
    if (!attrBindings) {
        var observedData = reactive({});
        attrBindings = { ctx: ctx, data: observedData };
        vmStateManager.set(vm, 'attrBindings', attrBindings);
        proxy(ctx, 'attrs', {
            get: function () {
                return attrBindings === null || attrBindings === void 0 ? void 0 : attrBindings.data;
            },
            set: function () {
                ( false) &&
                    false;
            },
        });
    }
    var source = vm.$attrs;
    var _loop_1 = function (attr) {
        if (!hasOwn(attrBindings.data, attr)) {
            proxy(attrBindings.data, attr, {
                get: function () {
                    // to ensure it always return the latest value
                    return vm.$attrs[attr];
                },
            });
        }
    };
    try {
        for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var attr = _c.value;
            _loop_1(attr);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
function resolveScopedSlots(vm, slotsProxy) {
    var parentVNode = vm.$options._parentVnode;
    if (!parentVNode)
        return;
    var prevSlots = vmStateManager.get(vm, 'slots') || [];
    var curSlots = resolveSlots(parentVNode.data.scopedSlots, vm.$slots);
    // remove staled slots
    for (var index = 0; index < prevSlots.length; index++) {
        var key = prevSlots[index];
        if (!curSlots[key]) {
            delete slotsProxy[key];
        }
    }
    // proxy fresh slots
    var slotNames = Object.keys(curSlots);
    for (var index = 0; index < slotNames.length; index++) {
        var key = slotNames[index];
        if (!slotsProxy[key]) {
            slotsProxy[key] = createSlotProxy(vm, key);
        }
    }
    vmStateManager.set(vm, 'slots', slotNames);
}
function activateCurrentInstance(instance, fn, onError) {
    var preVm = getCurrentInstance();
    setCurrentInstance(instance);
    try {
        return fn(instance);
    }
    catch (
    // FIXME: remove any
    err) {
        if (onError) {
            onError(err);
        }
        else {
            throw err;
        }
    }
    finally {
        setCurrentInstance(preVm);
    }
}

function mixin(Vue) {
    Vue.mixin({
        beforeCreate: functionApiInit,
        mounted: function () {
            updateTemplateRef(this);
        },
        beforeUpdate: function () {
            updateVmAttrs(this);
        },
        updated: function () {
            var _a;
            updateTemplateRef(this);
            if ((_a = this.$vnode) === null || _a === void 0 ? void 0 : _a.context) {
                updateTemplateRef(this.$vnode.context);
            }
        },
    });
    /**
     * Vuex init hook, injected into each instances init hooks list.
     */
    function functionApiInit() {
        var vm = this;
        var $options = vm.$options;
        var setup = $options.setup, render = $options.render;
        if (render) {
            // keep currentInstance accessible for createElement
            $options.render = function () {
                var _this = this;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return activateCurrentInstance(toVue3ComponentInstance(vm), function () {
                    return render.apply(_this, args);
                });
            };
        }
        if (!setup) {
            return;
        }
        if (!isFunction(setup)) {
            if ((false)) {}
            return;
        }
        var data = $options.data;
        // wrapper the data option, so we can invoke setup before data get resolved
        $options.data = function wrappedData() {
            initSetup(vm, vm.$props);
            return isFunction(data)
                ? data.call(vm, vm)
                : data || {};
        };
    }
    function initSetup(vm, props) {
        if (props === void 0) { props = {}; }
        var setup = vm.$options.setup;
        var ctx = createSetupContext(vm);
        var instance = toVue3ComponentInstance(vm);
        instance.setupContext = ctx;
        // fake reactive for `toRefs(props)`
        def(props, '__ob__', createObserver());
        // resolve scopedSlots and slots to functions
        resolveScopedSlots(vm, ctx.slots);
        var binding;
        activateCurrentInstance(instance, function () {
            // make props to be fake reactive, this is for `toRefs(props)`
            binding = setup(props, ctx);
        });
        if (!binding)
            return;
        if (isFunction(binding)) {
            // keep typescript happy with the binding type.
            var bindingFunc_1 = binding;
            // keep currentInstance accessible for createElement
            vm.$options.render = function () {
                resolveScopedSlots(vm, ctx.slots);
                return activateCurrentInstance(instance, function () { return bindingFunc_1(); });
            };
            return;
        }
        else if (isPlainObject(binding)) {
            if (isReactive(binding)) {
                binding = toRefs(binding);
            }
            vmStateManager.set(vm, 'rawBindings', binding);
            var bindingObj_1 = binding;
            Object.keys(bindingObj_1).forEach(function (name) {
                var bindingValue = bindingObj_1[name];
                if (!isRef(bindingValue)) {
                    if (!isReactive(bindingValue)) {
                        if (isFunction(bindingValue)) {
                            var copy_1 = bindingValue;
                            bindingValue = bindingValue.bind(vm);
                            Object.keys(copy_1).forEach(function (ele) {
                                bindingValue[ele] = copy_1[ele];
                            });
                        }
                        else if (!isObject(bindingValue)) {
                            bindingValue = ref(bindingValue);
                        }
                        else if (hasReactiveArrayChild(bindingValue)) {
                            // creates a custom reactive properties without make the object explicitly reactive
                            // NOTE we should try to avoid this, better implementation needed
                            customReactive(bindingValue);
                        }
                    }
                    else if (isArray(bindingValue)) {
                        bindingValue = ref(bindingValue);
                    }
                }
                asVmProperty(vm, name, bindingValue);
            });
            return;
        }
        if ((false)) {}
    }
    function customReactive(target, seen) {
        if (seen === void 0) { seen = new Set(); }
        if (seen.has(target))
            return;
        if (!isPlainObject(target) ||
            isRef(target) ||
            isReactive(target) ||
            isRaw(target))
            return;
        var Vue = getVueConstructor();
        // @ts-expect-error https://github.com/vuejs/vue/pull/12132
        var defineReactive = Vue.util.defineReactive;
        Object.keys(target).forEach(function (k) {
            var val = target[k];
            defineReactive(target, k, val);
            if (val) {
                seen.add(val);
                customReactive(val, seen);
            }
            return;
        });
    }
    function hasReactiveArrayChild(target, visited) {
        if (visited === void 0) { visited = new Map(); }
        if (visited.has(target)) {
            return visited.get(target);
        }
        visited.set(target, false);
        if (isArray(target) && isReactive(target)) {
            visited.set(target, true);
            return true;
        }
        if (!isPlainObject(target) || isRaw(target) || isRef(target)) {
            return false;
        }
        return Object.keys(target).some(function (x) {
            return hasReactiveArrayChild(target[x], visited);
        });
    }
    function createSetupContext(vm) {
        var ctx = { slots: {} };
        var propsPlain = [
            'root',
            'parent',
            'refs',
            'listeners',
            'isServer',
            'ssrContext',
        ];
        var methodReturnVoid = ['emit'];
        propsPlain.forEach(function (key) {
            var srcKey = "$" + key;
            proxy(ctx, key, {
                get: function () { return vm[srcKey]; },
                set: function () {
                    ( false) &&
                        false;
                },
            });
        });
        updateVmAttrs(vm, ctx);
        methodReturnVoid.forEach(function (key) {
            var srcKey = "$" + key;
            proxy(ctx, key, {
                get: function () {
                    return function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var fn = vm[srcKey];
                        fn.apply(vm, args);
                    };
                },
            });
        });
        if (false) {}
        return ctx;
    }
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData(from, to) {
    if (!from)
        return to;
    if (!to)
        return from;
    var key;
    var toVal;
    var fromVal;
    var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);
    for (var i = 0; i < keys.length; i++) {
        key = keys[i];
        // in case the object is already observed...
        if (key === '__ob__')
            continue;
        toVal = to[key];
        fromVal = from[key];
        if (!hasOwn(to, key)) {
            to[key] = fromVal;
        }
        else if (toVal !== fromVal &&
            isPlainObject(toVal) &&
            !isRef(toVal) &&
            isPlainObject(fromVal) &&
            !isRef(fromVal)) {
            mergeData(fromVal, toVal);
        }
    }
    return to;
}
function install(Vue) {
    if (isVueRegistered(Vue)) {
        if ((false)) {}
        return;
    }
    if ((false)) {}
    Vue.config.optionMergeStrategies.setup = function (parent, child) {
        return function mergedSetupFn(props, context) {
            return mergeData(isFunction(parent) ? parent(props, context) || {} : undefined, isFunction(child) ? child(props, context) || {} : undefined);
        };
    };
    setVueConstructor(Vue);
    mixin(Vue);
}
var Plugin = {
    install: function (Vue) { return install(Vue); },
};

// implementation, close to no-op
function defineComponent(options) {
    return options;
}

function defineAsyncComponent(source) {
    if (isFunction(source)) {
        source = { loader: source };
    }
    var loader = source.loader, loadingComponent = source.loadingComponent, errorComponent = source.errorComponent, _a = source.delay, delay = _a === void 0 ? 200 : _a, timeout = source.timeout, // undefined = never times out
    _b = source.suspensible, // undefined = never times out
    suspensible = _b === void 0 ? false : _b, // in Vue 3 default is true
    userOnError = source.onError;
    if (false) {}
    var pendingRequest = null;
    var retries = 0;
    var retry = function () {
        retries++;
        pendingRequest = null;
        return load();
    };
    var load = function () {
        var thisRequest;
        return (pendingRequest ||
            (thisRequest = pendingRequest =
                loader()
                    .catch(function (err) {
                    err = err instanceof Error ? err : new Error(String(err));
                    if (userOnError) {
                        return new Promise(function (resolve, reject) {
                            var userRetry = function () { return resolve(retry()); };
                            var userFail = function () { return reject(err); };
                            userOnError(err, userRetry, userFail, retries + 1);
                        });
                    }
                    else {
                        throw err;
                    }
                })
                    .then(function (comp) {
                    if (thisRequest !== pendingRequest && pendingRequest) {
                        return pendingRequest;
                    }
                    if (false) {}
                    // interop module default
                    if (comp &&
                        (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) {
                        comp = comp.default;
                    }
                    if (false) {}
                    return comp;
                })));
    };
    return function () {
        var component = load();
        return {
            component: component,
            delay: delay,
            timeout: timeout,
            error: errorComponent,
            loading: loadingComponent,
        };
    };
}

var version = "1.3.3";
// auto install when using CDN
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Plugin);
}



// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader??ref--13-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/atoms/OccHeading/OccHeading.vue?vue&type=script&lang=ts&

/* harmony default export */ var OccHeadingvue_type_script_lang_ts_ = (defineComponent({
    name: "OccHeading",
    props: {
        level: {
            type: Number,
            validator: function (level) {
                return [1, 2, 3, 4, 5, 6].includes(level);
            },
            default: 1,
        },
        visual: {
            type: String,
            default: "",
        },
        color: {
            type: String,
            default: "",
        },
    },
    setup: function (props) {
        var tagLevel = computed(function () {
            return "h" + props.level;
        });
        var visualLevel = computed(function () {
            return props.visual ? props.visual : props.level;
        });
        var classes = computed(function () { return [
            "occ-heading--" + visualLevel.value,
            props.color ? "occ-heading__color--" + props.color : "",
        ]; });
        return { classes: classes, tagLevel: tagLevel, visualLevel: visualLevel };
    },
}));

// CONCATENATED MODULE: ./src/components/atoms/OccHeading/OccHeading.vue?vue&type=script&lang=ts&
 /* harmony default export */ var OccHeading_OccHeadingvue_type_script_lang_ts_ = (OccHeadingvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/atoms/OccHeading/OccHeading.vue?vue&type=style&index=0&id=55498c5e&lang=scss&scoped=true&
var OccHeadingvue_type_style_index_0_id_55498c5e_lang_scss_scoped_true_ = __webpack_require__("20b1");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/atoms/OccHeading/OccHeading.vue






/* normalize component */

var component = normalizeComponent(
  OccHeading_OccHeadingvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "55498c5e",
  null
  
)

/* harmony default export */ var OccHeading = (component.exports);
// CONCATENATED MODULE: ./src/components/atoms/OccHeading/index.ts



// CONCATENATED MODULE: ./src/main.ts


external_commonjs_vue_commonjs2_vue_root_Vue_default.a.config.productionTip = false;
var components = [OccHeading];
var main_install = function (Vue) {
    components.forEach(function (component) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Vue.component(component.options.name, component);
    });
};

/* harmony default export */ var main = ({
    install: main_install,
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (main);



/***/ })

/******/ });
});
//# sourceMappingURL=occ-ui.umd.js.map