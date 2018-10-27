/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/card-game/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 79);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(86);
} else {
  module.exports = require('./cjs/react.development.js');
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return game_turn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return card_target; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return card_source; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return run_status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return item_types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return init_cards_num; });
// 当前属于谁的回合
var game_turn={hero:'hero',monster:'monster'};var card_target={hero:'hero',monster:'monster'};var card_source={hero:'hero',monster:'monster'};var run_status={running:'running',win:'win',lose:'lose'};var item_types={card:'card'};var init_cards_num={hero:3,monster:1};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, module) {/* unused harmony export css */
/* unused harmony export keyframes */
/* unused harmony export injectGlobal */
/* unused harmony export isStyledComponent */
/* unused harmony export consolidateStreamedStyles */
/* unused harmony export ThemeProvider */
/* unused harmony export withTheme */
/* unused harmony export ServerStyleSheet */
/* unused harmony export StyleSheetManager */
/* unused harmony export __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_hyphenateStyleName__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_hyphenateStyleName___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fbjs_lib_hyphenateStyleName__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_stylis__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_stylis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_stylis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_stylis_rule_sheet__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_stylis_rule_sheet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_stylis_rule_sheet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_is__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_is___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_is__);








var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

// 
var isPlainObject = (function (x) {
  return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x.constructor === Object;
});

// 


/**
 * Parse errors.md and turn it into a simple hash of code: message
 */
var ERRORS =  false ? {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n* Are you trying to reuse it across renders?\n* Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n* Does this error occur on the client and is your target falsy?\n* Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n* Are you running in a client-like environment on the server?\n* Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n* Are you using a custom target that isn't mounted?\n* Does your document not have a valid head element?\n* Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find sheet for given tag\n\n",
  "11": "A plain React class (%s) has been interpolated into styles, probably as a component selector (https://www.styled-components.com/docs/advanced#referring-to-other-components). Only styled-component classes can be targeted in this fashion."
} : {};

/**
 * super basic version of sprintf
 */
function format() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var a = args[0];
  var b = [];
  var c = void 0;

  for (c = 1; c < args.length; c += 1) {
    b.push(args[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });

  return a;
}

/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */

var StyledComponentsError = function (_Error) {
  inherits(StyledComponentsError, _Error);

  function StyledComponentsError(code) {
    classCallCheck(this, StyledComponentsError);

    for (var _len2 = arguments.length, interpolations = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      interpolations[_key2 - 1] = arguments[_key2];
    }

    if (true) {
      var _this = possibleConstructorReturn(this, _Error.call(this, 'An error occurred. See https://github.com/styled-components/styled-components/blob/master/src/utils/errors.md#' + code + ' for more information. ' + (interpolations ? 'Additional arguments: ' + interpolations.join(', ') : '')));
    } else {
      var _this = possibleConstructorReturn(this, _Error.call(this, format.apply(undefined, [ERRORS[code]].concat(interpolations))));
    }
    return possibleConstructorReturn(_this);
  }

  return StyledComponentsError;
}(Error);

// 

var objToCss = function objToCss(obj, prevKey) {
  var css = Object.keys(obj).filter(function (key) {
    var chunk = obj[key];
    return chunk !== undefined && chunk !== null && chunk !== false && chunk !== '';
  }).map(function (key) {
    if (isPlainObject(obj[key])) return objToCss(obj[key], key);
    return __WEBPACK_IMPORTED_MODULE_0_fbjs_lib_hyphenateStyleName___default()(key) + ': ' + obj[key] + ';';
  }).join(' ');
  return prevKey ? prevKey + ' {\n  ' + css + '\n}' : css;
};

var flatten = function flatten(chunks, executionContext) {
  return chunks.reduce(function (ruleSet, chunk) {
    /* Remove falsey values */
    if (chunk === undefined || chunk === null || chunk === false || chunk === '') {
      return ruleSet;
    }

    /* Flatten ruleSet */
    if (Array.isArray(chunk)) {
      ruleSet.push.apply(ruleSet, flatten(chunk, executionContext));
      return ruleSet;
    }

    /* Handle other components */
    if (chunk.hasOwnProperty('styledComponentId')) {
      // $FlowFixMe not sure how to make this pass
      ruleSet.push('.' + chunk.styledComponentId);
      return ruleSet;
    }

    /* Either execute or defer the function */
    if (typeof chunk === 'function') {
      if (executionContext) {
        var nextChunk = chunk(executionContext);
        /* Throw if a React Element was given styles */
        if (__WEBPACK_IMPORTED_MODULE_1_react___default.a.isValidElement(nextChunk)) {
          var elementName = chunk.displayName || chunk.name;
          throw new StyledComponentsError(11, elementName);
        }
        ruleSet.push.apply(ruleSet, flatten([nextChunk], executionContext));
      } else ruleSet.push(chunk);

      return ruleSet;
    }

    /* Handle objects */
    ruleSet.push(
    // $FlowFixMe have to add %checks somehow to isPlainObject
    isPlainObject(chunk) ? objToCss(chunk) : chunk.toString());

    return ruleSet;
  }, []);
};

// 

var COMMENT_REGEX = /^\s*\/\/.*$/gm;

// NOTE: This stylis instance is only used to split rules from SSR'd style tags
var stylisSplitter = new __WEBPACK_IMPORTED_MODULE_2_stylis___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: false,
  compress: false,
  semicolon: true
});

var stylis = new __WEBPACK_IMPORTED_MODULE_2_stylis___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: false // NOTE: This means "autocomplete missing semicolons"
});

// Wrap `insertRulePlugin to build a list of rules,
// and then make our own plugin to return the rules. This
// makes it easier to hook into the existing SSR architecture

var parsingRules = [];
// eslint-disable-next-line consistent-return
var returnRulesPlugin = function returnRulesPlugin(context) {
  if (context === -2) {
    var parsedRules = parsingRules;
    parsingRules = [];
    return parsedRules;
  }
};

var parseRulesPlugin = __WEBPACK_IMPORTED_MODULE_3_stylis_rule_sheet___default()(function (rule) {
  parsingRules.push(rule);
});

stylis.use([parseRulesPlugin, returnRulesPlugin]);
stylisSplitter.use([parseRulesPlugin, returnRulesPlugin]);

var stringifyRules = function stringifyRules(rules, selector, prefix) {
  var flatCSS = rules.join('').replace(COMMENT_REGEX, ''); // replace JS comments

  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;

  return stylis(prefix || !selector ? '' : selector, cssStr);
};

var splitByRules = function splitByRules(css) {
  return stylisSplitter('', css);
};

// 

function isStyledComponent(target) /* : %checks */{
  return (
    // $FlowFixMe TODO: flow for styledComponentId
    typeof target === 'function' && typeof target.styledComponentId === 'string'
  );
}

// 

/* This function is DEPRECATED and will be removed on the next major version release.
 * It was needed to rehydrate all style blocks prepended to chunks before React
 * tries to rehydrate its HTML stream. Since the master StyleSheet will now detect
 * the use of streamed style tags and will perform the rehydration earlier when needed
 * this function will not be needed anymore */
function consolidateStreamedStyles() {
  if (false) {
    // eslint-disable-next-line no-console
    console.warn('styled-components automatically does streaming SSR rehydration now.\n' + 'Calling consolidateStreamedStyles manually is no longer necessary and a noop now.\n' + '- Please remove the consolidateStreamedStyles call from your client.');
  }
}

// 
/* eslint-disable no-bitwise */

/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */
var charsLength = 52;

/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */
var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};

/* input a number, usually a hash and convert it to base-52 */
var generateAlphabeticName = function generateAlphabeticName(code) {
  var name = '';
  var x = void 0;

  /* get a char and divide by alphabet-length */
  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return getAlphabeticChar(x % charsLength) + name;
};

// 

var interleave = (function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
});

// 
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// 

var css = (function (styles) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (typeof styles === 'function' || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }

  // $FlowFixMe
  return flatten(interleave(styles, interpolations));
});

// 


var SC_ATTR = typeof process !== 'undefined' && Object({"NODE_ENV":"production","PUBLIC_URL":"/card-game"}).SC_ATTR || 'data-styled-components';
var SC_STREAM_ATTR = 'data-styled-streamed';
var CONTEXT_KEY = '__styled-components-stylesheet__';

var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;

var DISABLE_SPEEDY = "production" !== 'production';

// 
var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm;

var extractComps = (function (maybeCSS) {
  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
  var existingComponents = [];
  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
    return match;
  });
  return existingComponents.map(function (_ref, i) {
    var componentId = _ref.componentId,
        matchIndex = _ref.matchIndex;

    var nextComp = existingComponents[i + 1];
    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
    return { componentId: componentId, cssFromDOM: cssFromDOM };
  });
});

// 
/* eslint-disable camelcase, no-undef */

var getNonce = (function () {
  return  true ? __webpack_require__.nc : null;
});

// 
// Helper to call a given function, only once
var once = (function (cb) {
  var called = false;

  return function () {
    if (!called) {
      called = true;
      cb();
    }
  };
});

// 
/* These are helpers for the StyleTags to keep track of the injected
 * rule names for each (component) ID that they're keeping track of.
 * They're crucial for detecting whether a name has already been
 * injected.
 * (This excludes rehydrated names) */

/* adds a new ID:name pairing to a names dictionary */
var addNameForId = function addNameForId(names, id, name) {
  if (name) {
    // eslint-disable-next-line no-param-reassign
    var namesForId = names[id] || (names[id] = Object.create(null));
    namesForId[name] = true;
  }
};

/* resets an ID entirely by overwriting it in the dictionary */
var resetIdNames = function resetIdNames(names, id) {
  // eslint-disable-next-line no-param-reassign
  names[id] = Object.create(null);
};

/* factory for a names dictionary checking the existance of an ID:name pairing */
var hasNameForId = function hasNameForId(names) {
  return function (id, name) {
    return names[id] !== undefined && names[id][name];
  };
};

/* stringifies names for the html/element output */
var stringifyNames = function stringifyNames(names) {
  var str = '';
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    str += Object.keys(names[id]).join(' ') + ' ';
  }
  return str.trim();
};

/* clones the nested names dictionary */
var cloneNames = function cloneNames(names) {
  var clone = Object.create(null);
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    clone[id] = _extends({}, names[id]);
  }
  return clone;
};

// 

/* These are helpers that deal with the insertRule (aka speedy) API
 * They are used in the StyleTags and specifically the speedy tag
 */

/* retrieve a sheet for a given style tag */
var sheetForTag = function sheetForTag(tag) {
  // $FlowFixMe
  if (tag.sheet) return tag.sheet;

  /* Firefox quirk requires us to step through all stylesheets to find one owned by the given tag */
  var size = document.styleSheets.length;
  for (var i = 0; i < size; i += 1) {
    var sheet = document.styleSheets[i];
    // $FlowFixMe
    if (sheet.ownerNode === tag) return sheet;
  }

  /* we should always be able to find a tag */
  throw new StyledComponentsError(10);
};

/* insert a rule safely and return whether it was actually injected */
var safeInsertRule = function safeInsertRule(sheet, cssRule, index) {
  /* abort early if cssRule string is falsy */
  if (!cssRule) return false;

  var maxIndex = sheet.cssRules.length;

  try {
    /* use insertRule and cap passed index with maxIndex (no of cssRules) */
    sheet.insertRule(cssRule, index <= maxIndex ? index : maxIndex);
  } catch (err) {
    /* any error indicates an invalid rule */
    return false;
  }

  return true;
};

/* deletes `size` rules starting from `removalIndex` */
var deleteRules = function deleteRules(sheet, removalIndex, size) {
  var lowerBound = removalIndex - size;
  for (var i = removalIndex; i > lowerBound; i -= 1) {
    sheet.deleteRule(i);
  }
};

// 

/* this marker separates component styles and is important for rehydration */
var makeTextMarker = function makeTextMarker(id) {
  return '\n/* sc-component-id: ' + id + ' */\n';
};

/* add up all numbers in array up until and including the index */
var addUpUntilIndex = function addUpUntilIndex(sizes, index) {
  var totalUpToIndex = 0;
  for (var i = 0; i <= index; i += 1) {
    totalUpToIndex += sizes[i];
  }

  return totalUpToIndex;
};

/* create a new style tag after lastEl */
var makeStyleTag = function makeStyleTag(target, tagEl, insertBefore) {
  var el = document.createElement('style');
  el.setAttribute(SC_ATTR, '');

  var nonce = getNonce();
  if (nonce) {
    el.setAttribute('nonce', nonce);
  }

  /* Work around insertRule quirk in EdgeHTML */
  el.appendChild(document.createTextNode(''));

  if (target && !tagEl) {
    /* Append to target when no previous element was passed */
    target.appendChild(el);
  } else {
    if (!tagEl || !target || !tagEl.parentNode) {
      throw new StyledComponentsError(6);
    }

    /* Insert new style tag after the previous one */
    tagEl.parentNode.insertBefore(el, insertBefore ? tagEl : tagEl.nextSibling);
  }

  return el;
};

/* takes a css factory function and outputs an html styled tag factory */
var wrapAsHtmlTag = function wrapAsHtmlTag(css, names) {
  return function (additionalAttrs) {
    var nonce = getNonce();
    var attrs = [nonce && 'nonce="' + nonce + '"', SC_ATTR + '="' + stringifyNames(names) + '"', additionalAttrs];

    var htmlAttr = attrs.filter(Boolean).join(' ');
    return '<style ' + htmlAttr + '>' + css() + '</style>';
  };
};

/* takes a css factory function and outputs an element factory */
var wrapAsElement = function wrapAsElement(css, names) {
  return function () {
    var _props;

    var props = (_props = {}, _props[SC_ATTR] = stringifyNames(names), _props);

    var nonce = getNonce();
    if (nonce) {
      // $FlowFixMe
      props.nonce = nonce;
    }

    // eslint-disable-next-line react/no-danger
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('style', _extends({}, props, { dangerouslySetInnerHTML: { __html: css() } }));
  };
};

var getIdsFromMarkersFactory = function getIdsFromMarkersFactory(markers) {
  return function () {
    return Object.keys(markers);
  };
};

/* speedy tags utilise insertRule */
var makeSpeedyTag = function makeSpeedyTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);
  var sizes = [];

  var extractImport = getImportRuleTag !== undefined;
  /* indicates whther getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = sizes.length;
    sizes.push(0);
    resetIdNames(names, id);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var sheet = sheetForTag(el);
    var insertIndex = addUpUntilIndex(sizes, marker);

    var injectedRules = 0;
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var cssRule = cssRules[i];
      var mayHaveImport = extractImport; /* @import rules are reordered to appear first */
      if (mayHaveImport && cssRule.indexOf('@import') !== -1) {
        importRules.push(cssRule);
      } else if (safeInsertRule(sheet, cssRule, insertIndex + injectedRules)) {
        mayHaveImport = false;
        injectedRules += 1;
      }
    }

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }

    sizes[marker] += injectedRules; /* add up no of injected rules */
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;

    var size = sizes[marker];
    var sheet = sheetForTag(el);
    var removalIndex = addUpUntilIndex(sizes, marker);
    deleteRules(sheet, removalIndex, size);
    sizes[marker] = 0;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var _sheetForTag = sheetForTag(el),
        cssRules = _sheetForTag.cssRules;

    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += makeTextMarker(id);
      var marker = markers[id];
      var end = addUpUntilIndex(sizes, marker);
      var size = sizes[marker];
      for (var i = end - size; i < end; i += 1) {
        var rule = cssRules[i];
        if (rule !== undefined) {
          str += rule.cssText;
        }
      }
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeTextNode = function makeTextNode(id) {
  return document.createTextNode(makeTextMarker(id));
};

var makeBrowserTag = function makeBrowserTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);

  var extractImport = getImportRuleTag !== undefined;

  /* indicates whther getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = makeTextNode(id);
    el.appendChild(markers[id]);
    names[id] = Object.create(null);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var rule = cssRules[i];
      var mayHaveImport = extractImport;
      if (mayHaveImport && rule.indexOf('@import') !== -1) {
        importRules.push(rule);
      } else {
        mayHaveImport = false;
        var separator = i === cssRulesSize - 1 ? '' : ' ';
        marker.appendData('' + rule + separator);
      }
    }

    addNameForId(names, id, name);

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;

    /* create new empty text node and replace the current one */
    var newMarker = makeTextNode(id);
    el.replaceChild(newMarker, marker);
    markers[id] = newMarker;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var str = '';
    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += markers[id].data;
    }
    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeServerTagInternal = function makeServerTagInternal(namesArg, markersArg) {
  var names = namesArg === undefined ? Object.create(null) : namesArg;
  var markers = markersArg === undefined ? Object.create(null) : markersArg;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    return markers[id] = [''];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    marker[0] += cssRules.join(' ');
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    marker[0] = '';
    resetIdNames(names, id);
  };

  var css = function css() {
    var str = '';
    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      var cssForId = markers[id][0];
      if (cssForId) {
        str += makeTextMarker(id) + cssForId;
      }
    }
    return str;
  };

  var clone = function clone() {
    var namesClone = cloneNames(names);
    var markersClone = Object.create(null);

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      markersClone[id] = [markers[id][0]];
    }

    return makeServerTagInternal(namesClone, markersClone);
  };

  var tag = {
    clone: clone,
    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: null,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };

  return tag;
};

var makeServerTag = function makeServerTag() {
  return makeServerTagInternal();
};

var makeTag = function makeTag(target, tagEl, forceServer, insertBefore, getImportRuleTag) {
  if (IS_BROWSER && !forceServer) {
    var el = makeStyleTag(target, tagEl, insertBefore);

    if (DISABLE_SPEEDY) {
      return makeBrowserTag(el, getImportRuleTag);
    } else {
      return makeSpeedyTag(el, getImportRuleTag);
    }
  }

  return makeServerTag();
};

/* wraps a given tag so that rehydration is performed once when necessary */
var makeRehydrationTag = function makeRehydrationTag(tag, els, extracted, immediateRehydration) {
  /* rehydration function that adds all rules to the new tag */
  var rehydrate = once(function () {
    /* add all extracted components to the new tag */
    for (var i = 0, len = extracted.length; i < len; i += 1) {
      var _extracted$i = extracted[i],
          componentId = _extracted$i.componentId,
          cssFromDOM = _extracted$i.cssFromDOM;

      var cssRules = splitByRules(cssFromDOM);
      tag.insertRules(componentId, cssRules);
    }

    /* remove old HTMLStyleElements, since they have been rehydrated */
    for (var _i = 0, _len = els.length; _i < _len; _i += 1) {
      var el = els[_i];
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    }
  });

  if (immediateRehydration) rehydrate();

  return _extends({}, tag, {
    /* add rehydration hook to insertion methods */
    insertMarker: function insertMarker(id) {
      rehydrate();
      return tag.insertMarker(id);
    },
    insertRules: function insertRules(id, cssRules, name) {
      rehydrate();
      return tag.insertRules(id, cssRules, name);
    }
  });
};

// 

var SPLIT_REGEX = /\s+/;

/* determine the maximum number of components before tags are sharded */
var MAX_SIZE = void 0;
if (IS_BROWSER) {
  /* in speedy mode we can keep a lot more rules in a sheet before a slowdown can be expected */
  MAX_SIZE = DISABLE_SPEEDY ? 40 : 1000;
} else {
  /* for servers we do not need to shard at all */
  MAX_SIZE = -1;
}

var sheetRunningId = 0;
var master = void 0;

var StyleSheet = function () {
  /* a map from ids to tags */
  /* deferred rules for a given id */
  /* this is used for not reinjecting rules via hasNameForId() */
  /* when rules for an id are removed using remove() we have to ignore rehydratedNames for it */
  /* a list of tags belonging to this StyleSheet */
  /* a tag for import rules */
  /* current capacity until a new tag must be created */
  /* children (aka clones) of this StyleSheet inheriting all and future injections */

  function StyleSheet() {
    var _this = this;

    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : IS_BROWSER ? document.head : null;
    var forceServer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    classCallCheck(this, StyleSheet);

    this.getImportRuleTag = function () {
      var importRuleTag = _this.importRuleTag;

      if (importRuleTag !== undefined) {
        return importRuleTag;
      }

      var firstTag = _this.tags[0];
      var insertBefore = true;

      return _this.importRuleTag = makeTag(_this.target, firstTag ? firstTag.styleTag : null, _this.forceServer, insertBefore);
    };

    sheetRunningId += 1;
    this.id = sheetRunningId;
    this.forceServer = forceServer;
    this.target = forceServer ? null : target;
    this.tagMap = {};
    this.deferred = {};
    this.rehydratedNames = {};
    this.ignoreRehydratedNames = {};
    this.tags = [];
    this.capacity = 1;
    this.clones = [];
  }

  /* rehydrate all SSR'd style tags */


  StyleSheet.prototype.rehydrate = function rehydrate() {
    if (!IS_BROWSER || this.forceServer) {
      return this;
    }

    var els = [];
    var extracted = [];
    var isStreamed = false;

    /* retrieve all of our SSR style elements from the DOM */
    var nodes = document.querySelectorAll('style[' + SC_ATTR + ']');
    var nodesSize = nodes.length;

    /* abort rehydration if no previous style tags were found */
    if (nodesSize === 0) {
      return this;
    }

    for (var i = 0; i < nodesSize; i += 1) {
      // $FlowFixMe: We can trust that all elements in this query are style elements
      var el = nodes[i];

      /* check if style tag is a streamed tag */
      if (!isStreamed) isStreamed = !!el.getAttribute(SC_STREAM_ATTR);

      /* retrieve all component names */
      var elNames = (el.getAttribute(SC_ATTR) || '').trim().split(SPLIT_REGEX);
      var elNamesSize = elNames.length;
      for (var j = 0; j < elNamesSize; j += 1) {
        var name = elNames[j];
        /* add rehydrated name to sheet to avoid readding styles */
        this.rehydratedNames[name] = true;
      }

      /* extract all components and their CSS */
      extracted.push.apply(extracted, extractComps(el.textContent));

      /* store original HTMLStyleElement */
      els.push(el);
    }

    /* abort rehydration if nothing was extracted */
    var extractedSize = extracted.length;
    if (extractedSize === 0) {
      return this;
    }

    /* create a tag to be used for rehydration */
    var tag = this.makeTag(null);
    var rehydrationTag = makeRehydrationTag(tag, els, extracted, isStreamed);

    /* reset capacity and adjust MAX_SIZE by the initial size of the rehydration */
    this.capacity = Math.max(1, MAX_SIZE - extractedSize);
    this.tags.push(rehydrationTag);

    /* retrieve all component ids */
    for (var _j = 0; _j < extractedSize; _j += 1) {
      this.tagMap[extracted[_j].componentId] = rehydrationTag;
    }

    return this;
  };

  /* retrieve a "master" instance of StyleSheet which is typically used when no other is available
   * The master StyleSheet is targeted by injectGlobal, keyframes, and components outside of any
    * StyleSheetManager's context */


  /* reset the internal "master" instance */
  StyleSheet.reset = function reset() {
    var forceServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    master = new StyleSheet(undefined, forceServer).rehydrate();
  };

  /* adds "children" to the StyleSheet that inherit all of the parents' rules
   * while their own rules do not affect the parent */


  StyleSheet.prototype.clone = function clone() {
    var sheet = new StyleSheet(this.target, this.forceServer);

    /* add to clone array */
    this.clones.push(sheet);

    /* clone all tags */
    sheet.tags = this.tags.map(function (tag) {
      var ids = tag.getIds();
      var newTag = tag.clone();

      /* reconstruct tagMap */
      for (var i = 0; i < ids.length; i += 1) {
        sheet.tagMap[ids[i]] = newTag;
      }

      return newTag;
    });

    /* clone other maps */
    sheet.rehydratedNames = _extends({}, this.rehydratedNames);
    sheet.deferred = _extends({}, this.deferred);

    return sheet;
  };

  /* force StyleSheet to create a new tag on the next injection */


  StyleSheet.prototype.sealAllTags = function sealAllTags() {
    this.capacity = 1;

    this.tags.forEach(function (tag) {
      // eslint-disable-next-line no-param-reassign
      tag.sealed = true;
    });
  };

  StyleSheet.prototype.makeTag = function makeTag$$1(tag) {
    var lastEl = tag ? tag.styleTag : null;
    var insertBefore = false;

    return makeTag(this.target, lastEl, this.forceServer, insertBefore, this.getImportRuleTag);
  };

  /* get a tag for a given componentId, assign the componentId to one, or shard */
  StyleSheet.prototype.getTagForId = function getTagForId(id) {
    /* simply return a tag, when the componentId was already assigned one */
    var prev = this.tagMap[id];
    if (prev !== undefined && !prev.sealed) {
      return prev;
    }

    var tag = this.tags[this.tags.length - 1];

    /* shard (create a new tag) if the tag is exhausted (See MAX_SIZE) */
    this.capacity -= 1;

    if (this.capacity === 0) {
      this.capacity = MAX_SIZE;
      tag = this.makeTag(tag);
      this.tags.push(tag);
    }

    return this.tagMap[id] = tag;
  };

  /* mainly for injectGlobal to check for its id */


  StyleSheet.prototype.hasId = function hasId(id) {
    return this.tagMap[id] !== undefined;
  };

  /* caching layer checking id+name to already have a corresponding tag and injected rules */


  StyleSheet.prototype.hasNameForId = function hasNameForId(id, name) {
    /* exception for rehydrated names which are checked separately */
    if (this.ignoreRehydratedNames[id] === undefined && this.rehydratedNames[name]) {
      return true;
    }

    var tag = this.tagMap[id];
    return tag !== undefined && tag.hasNameForId(id, name);
  };

  /* registers a componentId and registers it on its tag */


  StyleSheet.prototype.deferredInject = function deferredInject(id, cssRules) {
    /* don't inject when the id is already registered */
    if (this.tagMap[id] !== undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].deferredInject(id, cssRules);
    }

    this.getTagForId(id).insertMarker(id);
    this.deferred[id] = cssRules;
  };

  /* injects rules for a given id with a name that will need to be cached */


  StyleSheet.prototype.inject = function inject(id, cssRules, name) {
    var clones = this.clones;


    for (var i = 0; i < clones.length; i += 1) {
      clones[i].inject(id, cssRules, name);
    }

    var tag = this.getTagForId(id);

    /* add deferred rules for component */
    if (this.deferred[id] !== undefined) {
      // Combine passed cssRules with previously deferred CSS rules
      // NOTE: We cannot mutate the deferred array itself as all clones
      // do the same (see clones[i].inject)
      var rules = this.deferred[id].concat(cssRules);
      tag.insertRules(id, rules, name);

      this.deferred[id] = undefined;
    } else {
      tag.insertRules(id, cssRules, name);
    }
  };

  /* removes all rules for a given id, which doesn't remove its marker but resets it */


  StyleSheet.prototype.remove = function remove(id) {
    var tag = this.tagMap[id];
    if (tag === undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].remove(id);
    }

    /* remove all rules from the tag */
    tag.removeRules(id);
    /* ignore possible rehydrated names */
    this.ignoreRehydratedNames[id] = true;
    /* delete possible deferred rules */
    this.deferred[id] = undefined;
  };

  StyleSheet.prototype.toHTML = function toHTML() {
    return this.tags.map(function (tag) {
      return tag.toHTML();
    }).join('');
  };

  StyleSheet.prototype.toReactElements = function toReactElements() {
    var id = this.id;


    return this.tags.map(function (tag, i) {
      var key = 'sc-' + id + '-' + i;
      return Object(__WEBPACK_IMPORTED_MODULE_1_react__["cloneElement"])(tag.toElement(), { key: key });
    });
  };

  createClass(StyleSheet, null, [{
    key: 'master',
    get: function get$$1() {
      return master || (master = new StyleSheet().rehydrate());
    }

    /* NOTE: This is just for backwards-compatibility with jest-styled-components */

  }, {
    key: 'instance',
    get: function get$$1() {
      return StyleSheet.master;
    }
  }]);
  return StyleSheet;
}();

var _StyleSheetManager$ch;

var StyleSheetManager = function (_Component) {
  inherits(StyleSheetManager, _Component);

  function StyleSheetManager() {
    classCallCheck(this, StyleSheetManager);
    return possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  StyleSheetManager.prototype.getChildContext = function getChildContext() {
    var _ref;

    return _ref = {}, _ref[CONTEXT_KEY] = this.sheetInstance, _ref;
  };

  StyleSheetManager.prototype.componentWillMount = function componentWillMount() {
    if (this.props.sheet) {
      this.sheetInstance = this.props.sheet;
    } else if (this.props.target) {
      this.sheetInstance = new StyleSheet(this.props.target);
    } else {
      throw new StyledComponentsError(4);
    }
  };

  StyleSheetManager.prototype.render = function render() {
    /* eslint-disable react/prop-types */
    // Flow v0.43.1 will report an error accessing the `children` property,
    // but v0.47.0 will not. It is necessary to use a type cast instead of
    // a "fixme" comment to satisfy both Flow versions.
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.Children.only(this.props.children);
  };

  return StyleSheetManager;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

StyleSheetManager.childContextTypes = (_StyleSheetManager$ch = {}, _StyleSheetManager$ch[CONTEXT_KEY] = __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.instanceOf(StyleSheet), __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.instanceOf(ServerStyleSheet)]).isRequired, _StyleSheetManager$ch);
 false ? StyleSheetManager.propTypes = {
  sheet: PropTypes.oneOfType([PropTypes.instanceOf(StyleSheet), PropTypes.instanceOf(ServerStyleSheet)]),
  target: PropTypes.shape({
    appendChild: PropTypes.func.isRequired
  })
} : void 0;

// 

var ServerStyleSheet = function () {
  function ServerStyleSheet() {
    classCallCheck(this, ServerStyleSheet);

    /* The master sheet might be reset, so keep a reference here */
    this.masterSheet = StyleSheet.master;
    this.instance = this.masterSheet.clone();
    this.closed = false;
  }

  ServerStyleSheet.prototype.complete = function complete() {
    if (!this.closed) {
      /* Remove closed StyleSheets from the master sheet */
      var index = this.masterSheet.clones.indexOf(this.instance);
      this.masterSheet.clones.splice(index, 1);
      this.closed = true;
    }
  };

  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
    if (this.closed) {
      throw new StyledComponentsError(2);
    }

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      StyleSheetManager,
      { sheet: this.instance },
      children
    );
  };

  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
    this.complete();
    return this.instance.toHTML();
  };

  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
    this.complete();
    return this.instance.toReactElements();
  };

  ServerStyleSheet.prototype.interleaveWithNodeStream = function interleaveWithNodeStream(readableStream) {
    var _this = this;

    {
      throw new StyledComponentsError(3);
    }

    /* the tag index keeps track of which tags have already been emitted */
    var instance = this.instance;

    var instanceTagIndex = 0;

    var streamAttr = SC_STREAM_ATTR + '="true"';

    var transformer = new stream.Transform({
      transform: function appendStyleChunks(chunk, /* encoding */_, callback) {
        var tags = instance.tags;

        var html = '';

        /* retrieve html for each new style tag */
        for (; instanceTagIndex < tags.length; instanceTagIndex += 1) {
          var tag = tags[instanceTagIndex];
          html += tag.toHTML(streamAttr);
        }

        /* force our StyleSheets to emit entirely new tags */
        instance.sealAllTags();

        /* prepend style html to chunk */
        this.push(html + chunk);
        callback();
      }
    });

    readableStream.on('end', function () {
      return _this.complete();
    });
    readableStream.on('error', function (err) {
      _this.complete();

      // forward the error to the transform stream
      transformer.emit('error', err);
    });

    return readableStream.pipe(transformer);
  };

  return ServerStyleSheet;
}();

// 

var LIMIT = 200;

var createWarnTooManyClasses = (function (displayName) {
  var generatedClasses = {};
  var warningSeen = false;

  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;
      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.
        /* eslint-disable no-console, prefer-template */
        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs({\n' + '    style: ({ background }) => ({\n' + '      background,\n' + '    }),\n' + '  })`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

// 

var determineTheme = (function (props, fallbackTheme, defaultProps) {
  // Props should take precedence over ThemeProvider, which should take precedence over
  // defaultProps, but React automatically puts defaultProps on props.

  /* eslint-disable react/prop-types */
  var isDefaultTheme = defaultProps && props.theme === defaultProps.theme;
  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme;
  /* eslint-enable */

  return theme;
});

// 
var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;

/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */
function escape(str) {
  return str
  // Replace all possible CSS selectors
  .replace(escapeRegex, '-')

  // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 

function getComponentName(target) {
  return target.displayName || target.name || 'Component';
}

// 

function isTag(target) /* : %checks */{
  return typeof target === 'string';
}

// 

function generateDisplayName(target) {
  return isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')';
}

// 
/* eslint-disable max-len */
/**
 * Trying to avoid the unknown-prop errors on styled components by filtering by
 * React's attribute whitelist.
 *
 * To regenerate this regex:
 *
 * 1. `npm i -g regexgen` (https://github.com/devongovett/regexgen)
 * 2. Run `regexgen` with the list of space-separated words below as input
 * 3. Surround the emitted regex with this: `/^(GENERATED_REGEX)$/` -- this will ensure a full string match
 *    and no false positives from partials
 * */
/*
children dangerouslySetInnerHTML key ref autoFocus defaultValue valueLink defaultChecked checkedLink innerHTML suppressContentEditableWarning onFocusIn onFocusOut className onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown onKeyPress onKeyUp onFocus onBlur onChange onInput onInvalid onSubmit onReset onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onAnimationStart onAnimationEnd onAnimationIteration onTransitionEnd onCopyCapture onCutCapture onPasteCapture onCompositionEndCapture onCompositionStartCapture onCompositionUpdateCapture onKeyDownCapture onKeyPressCapture onKeyUpCapture onFocusCapture onBlurCapture onChangeCapture onInputCapture onSubmitCapture onResetCapture onClickCapture onContextMenuCapture onDoubleClickCapture onDragCapture onDragEndCapture onDragEnterCapture onDragExitCapture onDragLeaveCapture onDragOverCapture onDragStartCapture onDropCapture onMouseDownCapture onMouseEnterCapture onMouseLeaveCapture onMouseMoveCapture onMouseOutCapture onMouseOverCapture onMouseUpCapture onSelectCapture onTouchCancelCapture onTouchEndCapture onTouchMoveCapture onTouchStartCapture onScrollCapture onWheelCapture onAbortCapture onCanPlayCapture onCanPlayThroughCapture onDurationChangeCapture onEmptiedCapture onEncryptedCapture onEndedCapture onErrorCapture onLoadedDataCapture onLoadedMetadataCapture onLoadStartCapture onPauseCapture onPlayCapture onPlayingCapture onProgressCapture onRateChangeCapture onSeekedCapture onSeekingCapture onStalledCapture onSuspendCapture onTimeUpdateCapture onVolumeChangeCapture onWaitingCapture onLoadCapture onAnimationStartCapture onAnimationEndCapture onAnimationIterationCapture onTransitionEndCapture accept acceptCharset accessKey action allowFullScreen allowTransparency alt as async autoComplete autoPlay capture cellPadding cellSpacing charSet challenge checked cite classID className cols colSpan content contentEditable contextMenu controlsList controls coords crossOrigin data dateTime default defer dir disabled download draggable encType form formAction formEncType formMethod formNoValidate formTarget frameBorder headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media mediaGroup method min minLength multiple muted name nonce noValidate open optimum pattern placeholder playsInline poster preload profile radioGroup readOnly referrerPolicy rel required reversed role rows rowSpan sandbox scope scoped scrolling seamless selected shape size sizes span spellCheck src srcDoc srcLang srcSet start step style summary tabIndex target title type useMap value width wmode wrap about datatype inlist prefix property resource typeof vocab autoCapitalize autoCorrect autoSave color itemProp itemScope itemType itemID itemRef results security unselectable accentHeight accumulate additive alignmentBaseline allowReorder alphabetic amplitude arabicForm ascent attributeName attributeType autoReverse azimuth baseFrequency baseProfile baselineShift bbox begin bias by calcMode capHeight clip clipPath clipRule clipPathUnits colorInterpolation colorInterpolationFilters colorProfile colorRendering contentScriptType contentStyleType cursor cx cy d decelerate descent diffuseConstant direction display divisor dominantBaseline dur dx dy edgeMode elevation enableBackground end exponent externalResourcesRequired fill fillOpacity fillRule filter filterRes filterUnits floodColor floodOpacity focusable fontFamily fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontWeight format from fx fy g1 g2 glyphName glyphOrientationHorizontal glyphOrientationVertical glyphRef gradientTransform gradientUnits hanging horizAdvX horizOriginX ideographic imageRendering in in2 intercept k k1 k2 k3 k4 kernelMatrix kernelUnitLength kerning keyPoints keySplines keyTimes lengthAdjust letterSpacing lightingColor limitingConeAngle local markerEnd markerMid markerStart markerHeight markerUnits markerWidth mask maskContentUnits maskUnits mathematical mode numOctaves offset opacity operator order orient orientation origin overflow overlinePosition overlineThickness paintOrder panose1 pathLength patternContentUnits patternTransform patternUnits pointerEvents points pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits r radius refX refY renderingIntent repeatCount repeatDur requiredExtensions requiredFeatures restart result rotate rx ry scale seed shapeRendering slope spacing specularConstant specularExponent speed spreadMethod startOffset stdDeviation stemh stemv stitchTiles stopColor stopOpacity strikethroughPosition strikethroughThickness string stroke strokeDasharray strokeDashoffset strokeLinecap strokeLinejoin strokeMiterlimit strokeOpacity strokeWidth surfaceScale systemLanguage tableValues targetX targetY textAnchor textDecoration textRendering textLength to transform u1 u2 underlinePosition underlineThickness unicode unicodeBidi unicodeRange unitsPerEm vAlphabetic vHanging vIdeographic vMathematical values vectorEffect version vertAdvY vertOriginX vertOriginY viewBox viewTarget visibility widths wordSpacing writingMode x xHeight x1 x2 xChannelSelector xlinkActuate xlinkArcrole xlinkHref xlinkRole xlinkShow xlinkTitle xlinkType xmlBase xmlns xmlnsXlink xmlLang xmlSpace y y1 y2 yChannelSelector z zoomAndPan onPointerDown onPointerMove onPointerUp onPointerCancel onGotPointerCapture onLostPointerCapture onPointerEnter onPointerLeave onPointerOver onPointerOut class for autofocus
*/
/* eslint-enable max-len */

var ATTRIBUTE_REGEX = /^((?:s(?:uppressContentEditableWarn|croll|pac)|(?:shape|image|text)Render|(?:letter|word)Spac|vHang|hang)ing|(?:on(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:Animation|Touch|Load|Drag)Start|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|Lo(?:stPointer|ad)|TimeUpdate|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|GotPointer|MouseDown|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|KeyPress|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|P(?:rogress|laying)|DragEnd|Key(?:Down|Up)|(?:MouseU|Dro)p|(?:Wait|Seek)ing|Scroll|Focus|Paste|Abort|Drag|Play|Blur)Captur|alignmentBaselin|(?:limitingConeAng|xlink(?:(?:Arcr|R)o|Tit)|s(?:urfaceSca|ty|ca)|unselectab|baseProfi|fontSty|(?:focus|dragg)ab|multip|profi|tit)l|d(?:ominantBaselin|efaultValu)|onPointerLeav|a(?:uto(?:Capitaliz|Revers|Sav)|dditiv)|(?:(?:formNoValid|xlinkActu|noValid|accumul|rot)a|autoComple|decelera)t|(?:(?:attribute|item)T|datat)yp|onPointerMov|(?:attribute|glyph)Nam|playsInlin|(?:writing|input|edge)Mod|(?:formE|e)ncTyp|(?:amplitu|mo)d|(?:xlinkTy|itemSco|keyTy|slo)p|(?:xmlSpa|non)c|fillRul|(?:dateTi|na)m|r(?:esourc|ol)|xmlBas|wmod)e|(?:glyphOrientationHorizont|loc)al|(?:externalResourcesRequir|select|revers|mut)ed|c(?:o(?:lorInterpolationFilter|ord)s|o(?:lor(?:Interpolation)?|nt(?:rols|ent))|(?:ontentS(?:cript|tyle)Typ|o(?:ntentEditab|lorProfi)l|l(?:assNam|ipRul)|a(?:lcMod|ptur)|it)e|olorRendering|l(?:ipPathUnits|assID)|(?:ontrolsLis|apHeigh)t|h(?:eckedLink|a(?:llenge|rSet)|ildren|ecked)|ell(?:Spac|Padd)ing|o(?:ntextMenu|ls)|(?:rossOrigi|olSpa)n|l(?:ip(?:Path)?|ass)|ursor|[xy])|glyphOrientationVertical|d(?:angerouslySetInnerHTML|efaultChecked|ownload|isabled|isplay|[xy])|(?:s(?:trikethroughThickn|eaml)es|(?:und|ov)erlineThicknes|r(?:equiredExtension|adiu)|(?:requiredFeatur|tableValu|stitchTil|numOctav|filterR)e|key(?:(?:Splin|Tim)e|Param)|auto[Ff]ocu|header|bia)s|(?:(?:st(?:rikethroughPosi|dDevia)|(?:und|ov)erlinePosi|(?:textDecor|elev)a|orienta)tio|(?:strokeLinejo|orig)i|on(?:PointerDow|FocusI)|formActio|zoomAndPa|directio|(?:vers|act)io|rowSpa|begi|ico)n|o(?:n(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:Animation|Touch|Load|Drag)Start|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|TimeUpdate|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|MouseDown|P(?:rogress|laying)|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|KeyPress|DragEnd|Key(?:Down|Up)|(?:Wait|Seek)ing|(?:MouseU|Dro)p|Scroll|Paste|Focus|Abort|Drag|Play|Load|Blur)|rient)|p(?:reserveA(?:spectRatio|lpha)|ointsAt[X-Z]|anose1)|(?:patternContent|ma(?:sk(?:Content)?|rker)|primitive|gradient|pattern|filter)Units|(?:(?:allowTranspar|baseFrequ)enc|re(?:ferrerPolic|adOnl)|(?:(?:st(?:roke|op)O|floodO|fillO|o)pac|integr|secur)it|visibilit|fontFamil|accessKe|propert|summar)y|(?:gradientT|patternT|t)ransform|(?:[xy]ChannelSelect|lightingCol|textAnch|floodCol|stopCol|operat|htmlF)or|(?:strokeMiterlimi|(?:specularConsta|repeatCou|fontVaria)n|(?:(?:specularE|e)xpon|renderingInt|asc)en|d(?:iffuseConsta|esce)n|(?:fontSizeAdju|lengthAdju|manife)s|baselineShif|onPointerOu|vectorEffec|(?:(?:mar(?:ker|gin)|x)H|accentH|fontW)eigh|markerStar|a(?:utoCorrec|bou)|onFocusOu|intercep|restar|forma|inlis|heigh|lis)t|(?:(?:st(?:rokeDasho|artO)|o)ffs|acceptChars|formTarg|viewTarg|srcS)et|k(?:ernel(?:UnitLength|Matrix)|[1-4])|(?:(?:enableBackgrou|markerE)n|s(?:p(?:readMetho|ee)|ee)|formMetho|(?:markerM|onInval)i|preloa|metho|kin)d|strokeDasharray|(?:onPointerCanc|lab)el|(?:allowFullScre|hidd)en|systemLanguage|(?:(?:o(?:nPointer(?:Ent|Ov)|rd)|allowReord|placehold|frameBord|paintOrd|post)e|repeatDu|d(?:efe|u))r|v(?:Mathematical|ert(?:Origin[XY]|AdvY)|alues|ocab)|(?:pointerEve|keyPoi)nts|(?:strokeLineca|onPointerU|itemPro|useMa|wra|loo)p|h(?:oriz(?:Origin|Adv)X|ttpEquiv)|(?:vI|i)deographic|unicodeRange|mathematical|vAlphabetic|u(?:nicodeBidi|[12])|(?:fontStretc|hig)h|(?:(?:mar(?:ker|gin)W|strokeW)id|azimu)th|(?:xmlnsXl|valueL)ink|mediaGroup|spellCheck|(?:text|m(?:in|ax))Length|(?:unitsPerE|optimu|fro)m|r(?:adioGroup|e(?:sults|f[XY]|l)|ows|[xy])|a(?:rabicForm|l(?:phabetic|t)|sync)|pathLength|innerHTML|xlinkShow|(?:xlinkHr|glyphR)ef|(?:tabInde|(?:sand|b)bo|viewBo)x|(?:(?:href|xml|src)La|kerni)ng|autoPlay|o(?:verflow|pen)|f(?:o(?:ntSize|rm?)|il(?:ter|l))|r(?:e(?:quired|sult|f))?|divisor|p(?:attern|oints)|unicode|d(?:efault|ata|ir)?|i(?:temRef|n2|s)|t(?:arget[XY]|o)|srcDoc|s(?:coped|te(?:m[hv]|p)|pan)|(?:width|size)s|prefix|typeof|itemID|s(?:t(?:roke|art)|hape|cope|rc)|t(?:arget|ype)|(?:stri|la)ng|a(?:ccept|s)|m(?:edia|a(?:sk|x)|in)|x(?:mlns)?|width|value|size|href|k(?:ey)?|end|low|by|i[dn]|y[12]|g[12]|x[12]|f[xy]|[yz])$/;

/* From DOMProperty */
var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
var isCustomAttribute = RegExp.prototype.test.bind(new RegExp('^(x|data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));

var validAttr = (function (name) {
  return ATTRIBUTE_REGEX.test(name) || isCustomAttribute(name.toLowerCase());
});

// 

function hasInInheritanceChain(child, parent) {
  var target = child;

  while (target) {
    target = Object.getPrototypeOf(target);

    if (target && target === parent) {
      return true;
    }
  }

  return false;
}

// 
/**
 * Creates a broadcast that can be listened to, i.e. simple event emitter
 *
 * @see https://github.com/ReactTraining/react-broadcast
 */

var createBroadcast = function createBroadcast(initialState) {
  var listeners = {};
  var id = 0;
  var state = initialState;

  function publish(nextState) {
    state = nextState;

    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (var key in listeners) {
      var listener = listeners[key];
      if (listener === undefined) {
        // eslint-disable-next-line no-continue
        continue;
      }

      listener(state);
    }
  }

  function subscribe(listener) {
    var currentId = id;
    listeners[currentId] = listener;
    id += 1;
    listener(state);
    return currentId;
  }

  function unsubscribe(unsubID) {
    listeners[unsubID] = undefined;
  }

  return { publish: publish, subscribe: subscribe, unsubscribe: unsubscribe };
};

var _contextShape, _ThemeProvider$contex;

// NOTE: DO NOT CHANGE, changing this is a semver major change!
var CHANNEL = '__styled-components__';
var CHANNEL_NEXT = CHANNEL + 'next__';

var CONTEXT_CHANNEL_SHAPE = __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.shape({
  getTheme: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
  subscribe: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
  unsubscribe: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func
});

var contextShape = (_contextShape = {}, _contextShape[CHANNEL] = __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func, _contextShape[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _contextShape);

var warnChannelDeprecated = void 0;
if (false) {
  warnChannelDeprecated = once(function () {
    // eslint-disable-next-line no-console
    console.warn('Warning: Usage of `context.' + CHANNEL + '` as a function is deprecated. It will be replaced with the object on `.context.' + CHANNEL_NEXT + '` in a future version.');
  });
}

var isFunction = function isFunction(test) {
  return typeof test === 'function';
};

/**
 * Provide a theme to an entire react component tree via context and event listeners (have to do
 * both context and event emitter as pure components block context updates)
 */

var ThemeProvider = function (_Component) {
  inherits(ThemeProvider, _Component);

  function ThemeProvider() {
    classCallCheck(this, ThemeProvider);

    var _this = possibleConstructorReturn(this, _Component.call(this));

    _this.unsubscribeToOuterId = -1;

    _this.getTheme = _this.getTheme.bind(_this);
    return _this;
  }

  ThemeProvider.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    // If there is a ThemeProvider wrapper anywhere around this theme provider, merge this theme
    // with the outer theme
    var outerContext = this.context[CHANNEL_NEXT];
    if (outerContext !== undefined) {
      this.unsubscribeToOuterId = outerContext.subscribe(function (theme) {
        _this2.outerTheme = theme;

        if (_this2.broadcast !== undefined) {
          _this2.publish(_this2.props.theme);
        }
      });
    }

    this.broadcast = createBroadcast(this.getTheme());
  };

  ThemeProvider.prototype.getChildContext = function getChildContext() {
    var _this3 = this,
        _babelHelpers$extends;

    return _extends({}, this.context, (_babelHelpers$extends = {}, _babelHelpers$extends[CHANNEL_NEXT] = {
      getTheme: this.getTheme,
      subscribe: this.broadcast.subscribe,
      unsubscribe: this.broadcast.unsubscribe
    }, _babelHelpers$extends[CHANNEL] = function (subscriber) {
      if (false) {
        warnChannelDeprecated();
      }

      // Patch the old `subscribe` provide via `CHANNEL` for older clients.
      var unsubscribeId = _this3.broadcast.subscribe(subscriber);
      return function () {
        return _this3.broadcast.unsubscribe(unsubscribeId);
      };
    }, _babelHelpers$extends));
  };

  ThemeProvider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.theme !== nextProps.theme) {
      this.publish(nextProps.theme);
    }
  };

  ThemeProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.unsubscribeToOuterId !== -1) {
      this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeToOuterId);
    }
  };

  // Get the theme from the props, supporting both (outerTheme) => {} as well as object notation


  ThemeProvider.prototype.getTheme = function getTheme(passedTheme) {
    var theme = passedTheme || this.props.theme;

    if (isFunction(theme)) {
      var mergedTheme = theme(this.outerTheme);

      if (false) {
        throw new StyledComponentsError(7);
      }

      return mergedTheme;
    }

    if (theme === null || Array.isArray(theme) || (typeof theme === 'undefined' ? 'undefined' : _typeof(theme)) !== 'object') {
      throw new StyledComponentsError(8);
    }

    return _extends({}, this.outerTheme, theme);
  };

  ThemeProvider.prototype.publish = function publish(theme) {
    this.broadcast.publish(this.getTheme(theme));
  };

  ThemeProvider.prototype.render = function render() {
    if (!this.props.children) {
      return null;
    }

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.Children.only(this.props.children);
  };

  return ThemeProvider;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

ThemeProvider.childContextTypes = contextShape;
ThemeProvider.contextTypes = (_ThemeProvider$contex = {}, _ThemeProvider$contex[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _ThemeProvider$contex);

var _babelHelpers$extends;

// HACK for generating all static styles without needing to allocate
// an empty execution context every single time...
var STATIC_EXECUTION_CONTEXT = {};

var modifiedContextShape = _extends({}, contextShape, (_babelHelpers$extends = {}, _babelHelpers$extends[CONTEXT_KEY] = __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.instanceOf(StyleSheet), __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.instanceOf(ServerStyleSheet)]), _babelHelpers$extends));

var identifiers = {};

/* We depend on components having unique IDs */
var generateId = function generateId(ComponentStyle, _displayName, parentComponentId) {
  var displayName = typeof _displayName !== 'string' ? 'sc' : escape(_displayName);

  /**
   * This ensures uniqueness if two components happen to share
   * the same displayName.
   */
  var nr = (identifiers[displayName] || 0) + 1;
  identifiers[displayName] = nr;

  var componentId = displayName + '-' + ComponentStyle.generateName(displayName + nr);

  return parentComponentId !== undefined ? parentComponentId + '-' + componentId : componentId;
};

var warnExtendDeprecated = function warnExtendDeprecated() {};
if (false) {
  warnExtendDeprecated = once(function () {
    // eslint-disable-next-line no-console
    console.warn('Warning: The "extend" API will be removed in the upcoming v4.0 release. Use styled(StyledComponent) instead. You can find more information here: https://github.com/styled-components/styled-components/issues/1546');
  });
}

// $FlowFixMe

var BaseStyledComponent = function (_Component) {
  inherits(BaseStyledComponent, _Component);

  function BaseStyledComponent() {
    var _temp, _this, _ret;

    classCallCheck(this, BaseStyledComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.attrs = {}, _this.state = {
      theme: null,
      generatedClassName: ''
    }, _this.unsubscribeId = -1, _temp), possibleConstructorReturn(_this, _ret);
  }

  BaseStyledComponent.prototype.unsubscribeFromContext = function unsubscribeFromContext() {
    if (this.unsubscribeId !== -1) {
      this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId);
    }
  };

  BaseStyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props) {
    var attrs = this.constructor.attrs;

    var context = _extends({}, props, { theme: theme });
    if (attrs === undefined) {
      return context;
    }

    this.attrs = Object.keys(attrs).reduce(function (acc, key) {
      var attr = attrs[key];

      // eslint-disable-next-line no-param-reassign
      acc[key] = typeof attr === 'function' && !hasInInheritanceChain(attr, __WEBPACK_IMPORTED_MODULE_1_react__["Component"]) ? attr(context) : attr;
      return acc;
    }, {});

    return _extends({}, context, this.attrs);
  };

  BaseStyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
    var _constructor = this.constructor,
        attrs = _constructor.attrs,
        componentStyle = _constructor.componentStyle,
        warnTooManyClasses = _constructor.warnTooManyClasses;

    var styleSheet = this.context[CONTEXT_KEY] || StyleSheet.master;

    // statically styled-components don't need to build an execution context object,
    // and shouldn't be increasing the number of class names
    if (componentStyle.isStatic && attrs === undefined) {
      return componentStyle.generateAndInjectStyles(STATIC_EXECUTION_CONTEXT, styleSheet);
    } else {
      var executionContext = this.buildExecutionContext(theme, props);
      var className = componentStyle.generateAndInjectStyles(executionContext, styleSheet);

      if (false) {
        warnTooManyClasses(className);
      }

      return className;
    }
  };

  BaseStyledComponent.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var componentStyle = this.constructor.componentStyle;

    var styledContext = this.context[CHANNEL_NEXT];

    // If this is a statically-styled component, we don't need to the theme
    // to generate or build styles.
    if (componentStyle.isStatic) {
      var generatedClassName = this.generateAndInjectStyles(STATIC_EXECUTION_CONTEXT, this.props);
      this.setState({ generatedClassName: generatedClassName });
      // If there is a theme in the context, subscribe to the event emitter. This
      // is necessary due to pure components blocking context updates, this circumvents
      // that by updating when an event is emitted
    } else if (styledContext !== undefined) {
      var subscribe = styledContext.subscribe;

      this.unsubscribeId = subscribe(function (nextTheme) {
        // This will be called once immediately
        var theme = determineTheme(_this2.props, nextTheme, _this2.constructor.defaultProps);

        var generatedClassName = _this2.generateAndInjectStyles(theme, _this2.props);

        _this2.setState({ theme: theme, generatedClassName: generatedClassName });
      });
    } else {
      // eslint-disable-next-line react/prop-types
      var theme = this.props.theme || EMPTY_OBJECT;
      var _generatedClassName = this.generateAndInjectStyles(theme, this.props);
      this.setState({ theme: theme, generatedClassName: _generatedClassName });
    }
  };

  BaseStyledComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this3 = this;

    // If this is a statically-styled component, we don't need to listen to
    // props changes to update styles
    var componentStyle = this.constructor.componentStyle;

    if (componentStyle.isStatic) {
      return;
    }

    this.setState(function (prevState) {
      var theme = determineTheme(nextProps, prevState.theme, _this3.constructor.defaultProps);
      var generatedClassName = _this3.generateAndInjectStyles(theme, nextProps);

      return { theme: theme, generatedClassName: generatedClassName };
    });
  };

  BaseStyledComponent.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribeFromContext();
  };

  BaseStyledComponent.prototype.render = function render() {
    // eslint-disable-next-line react/prop-types
    var innerRef = this.props.innerRef;
    var generatedClassName = this.state.generatedClassName;
    var _constructor2 = this.constructor,
        styledComponentId = _constructor2.styledComponentId,
        target = _constructor2.target;


    var isTargetTag = isTag(target);

    var className = [
    // eslint-disable-next-line react/prop-types
    this.props.className, styledComponentId, this.attrs.className, generatedClassName].filter(Boolean).join(' ');

    var baseProps = _extends({}, this.attrs, {
      className: className
    });

    if (isStyledComponent(target)) {
      baseProps.innerRef = innerRef;
    } else {
      baseProps.ref = innerRef;
    }

    var propsForElement = baseProps;
    var key = void 0;

    for (key in this.props) {
      // Don't pass through non HTML tags through to HTML elements
      // always omit innerRef
      if (key !== 'innerRef' && key !== 'className' && (!isTargetTag || validAttr(key))) {
        propsForElement[key] = key === 'style' && key in this.attrs ? _extends({}, this.attrs[key], this.props[key]) : this.props[key];
      }
    }

    return Object(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"])(target, propsForElement);
  };

  return BaseStyledComponent;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _StyledComponent = (function (ComponentStyle, constructWithOptions) {
  var createStyledComponent = function createStyledComponent(target, options, rules) {
    var _options$isClass = options.isClass,
        isClass = _options$isClass === undefined ? !isTag(target) : _options$isClass,
        _options$displayName = options.displayName,
        displayName = _options$displayName === undefined ? generateDisplayName(target) : _options$displayName,
        _options$componentId = options.componentId,
        componentId = _options$componentId === undefined ? generateId(ComponentStyle, options.displayName, options.parentComponentId) : _options$componentId,
        _options$ParentCompon = options.ParentComponent,
        ParentComponent = _options$ParentCompon === undefined ? BaseStyledComponent : _options$ParentCompon,
        extendingRules = options.rules,
        attrs = options.attrs;


    var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + '-' + options.componentId : options.componentId || componentId;

    var componentStyle = new ComponentStyle(extendingRules === undefined ? rules : extendingRules.concat(rules), attrs, styledComponentId);

    var StyledComponent = function (_ParentComponent) {
      inherits(StyledComponent, _ParentComponent);

      function StyledComponent() {
        classCallCheck(this, StyledComponent);
        return possibleConstructorReturn(this, _ParentComponent.apply(this, arguments));
      }

      StyledComponent.withComponent = function withComponent(tag) {
        var previousComponentId = options.componentId,
            optionsToCopy = objectWithoutProperties(options, ['componentId']);


        var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : escape(getComponentName(tag)));

        var newOptions = _extends({}, optionsToCopy, {
          componentId: newComponentId,
          ParentComponent: StyledComponent
        });

        return createStyledComponent(tag, newOptions, rules);
      };

      createClass(StyledComponent, null, [{
        key: 'extend',
        get: function get$$1() {
          var rulesFromOptions = options.rules,
              parentComponentId = options.componentId,
              optionsToCopy = objectWithoutProperties(options, ['rules', 'componentId']);


          var newRules = rulesFromOptions === undefined ? rules : rulesFromOptions.concat(rules);

          var newOptions = _extends({}, optionsToCopy, {
            rules: newRules,
            parentComponentId: parentComponentId,
            ParentComponent: StyledComponent
          });

          warnExtendDeprecated();

          return constructWithOptions(createStyledComponent, target, newOptions);
        }
      }]);
      return StyledComponent;
    }(ParentComponent);

    StyledComponent.attrs = attrs;
    StyledComponent.componentStyle = componentStyle;
    StyledComponent.contextTypes = modifiedContextShape;
    StyledComponent.displayName = displayName;
    StyledComponent.styledComponentId = styledComponentId;
    StyledComponent.target = target;


    if (false) {
      StyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName);
    }

    if (isClass) {
      __WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics___default()(StyledComponent, target, {
        // all SC-specific things should not be hoisted
        attrs: true,
        componentStyle: true,
        displayName: true,
        extend: true,
        styledComponentId: true,
        target: true,
        warnTooManyClasses: true,
        withComponent: true
      });
    }

    return StyledComponent;
  };

  return createStyledComponent;
});

// Source: https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash(str) {
  var l = str.length | 0,
      h = l | 0,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;

    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);

    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;

    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;

  return h >>> 0;
}

// 

var areStylesCacheable = IS_BROWSER;

var isStaticRules = function isStaticRules(rules, attrs) {
  for (var i = 0, len = rules.length; i < len; i += 1) {
    var rule = rules[i];

    // recursive case
    if (Array.isArray(rule) && !isStaticRules(rule)) {
      return false;
    } else if (typeof rule === 'function' && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  if (attrs !== undefined) {
    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (var key in attrs) {
      if (typeof attrs[key] === 'function') {
        return false;
      }
    }
  }

  return true;
};

var isHMREnabled = typeof module !== 'undefined' && module.hot && "production" !== 'production';

/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */
var _ComponentStyle = (function (nameGenerator, flatten, stringifyRules) {
  /* combines hashStr (murmurhash) and nameGenerator for convenience */
  var generateRuleHash = function generateRuleHash(str) {
    return nameGenerator(murmurhash(str));
  };

  var ComponentStyle = function () {
    function ComponentStyle(rules, attrs, componentId) {
      classCallCheck(this, ComponentStyle);

      this.rules = rules;
      this.isStatic = !isHMREnabled && isStaticRules(rules, attrs);
      this.componentId = componentId;

      if (!StyleSheet.master.hasId(componentId)) {
        var placeholder =  false ? ['.' + componentId + ' {}'] : [];

        StyleSheet.master.deferredInject(componentId, placeholder);
      }
    }

    /*
     * Flattens a rule set into valid CSS
     * Hashes it, wraps the whole chunk in a .hash1234 {}
     * Returns the hash to be injected on render()
     * */


    ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
      var isStatic = this.isStatic,
          componentId = this.componentId,
          lastClassName = this.lastClassName;

      if (areStylesCacheable && isStatic && lastClassName !== undefined && styleSheet.hasNameForId(componentId, lastClassName)) {
        return lastClassName;
      }

      var flatCSS = flatten(this.rules, executionContext);
      var name = generateRuleHash(this.componentId + flatCSS.join(''));

      if (!styleSheet.hasNameForId(componentId, name)) {
        styleSheet.inject(this.componentId, stringifyRules(flatCSS, '.' + name), name);
      }

      this.lastClassName = name;
      return name;
    };

    ComponentStyle.generateName = function generateName(str) {
      return generateRuleHash(str);
    };

    return ComponentStyle;
  }();

  return ComponentStyle;
});

// 
// Thanks to ReactDOMFactories for this handy list!

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 

var _styled = (function (styledComponent, constructWithOptions) {
  var styled = function styled(tag) {
    return constructWithOptions(styledComponent, tag);
  };

  // Shorthands for all valid HTML Elements
  domElements.forEach(function (domElement) {
    styled[domElement] = styled(domElement);
  });

  return styled;
});

// 

var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

var _keyframes = (function (nameGenerator, stringifyRules, css) {
  return function () {
    var styleSheet = StyleSheet.master;
    var rules = css.apply(undefined, arguments);
    var name = nameGenerator(murmurhash(replaceWhitespace(JSON.stringify(rules))));
    var id = 'sc-keyframes-' + name;

    if (!styleSheet.hasNameForId(id, name)) {
      styleSheet.inject(id, stringifyRules(rules, name, '@keyframes'), name);
    }

    return name;
  };
});

// 

var _injectGlobal = (function (stringifyRules, css) {
  var injectGlobal = function injectGlobal() {
    var styleSheet = StyleSheet.master;
    var rules = css.apply(undefined, arguments);
    var hash = murmurhash(JSON.stringify(rules));
    var id = 'sc-global-' + hash;

    if (!styleSheet.hasId(id)) {
      styleSheet.inject(id, stringifyRules(rules));
    }
  };

  return injectGlobal;
});

// 

var _constructWithOptions = (function (css) {
  var constructWithOptions = function constructWithOptions(componentConstructor, tag) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

    if (!Object(__WEBPACK_IMPORTED_MODULE_6_react_is__["isValidElementType"])(tag)) {
      throw new StyledComponentsError(1, String(tag));
    }

    /* This is callable directly as a template function */
    // $FlowFixMe: Not typed to avoid destructuring arguments
    var templateFunction = function templateFunction() {
      return componentConstructor(tag, options, css.apply(undefined, arguments));
    };

    /* If config methods are called, wrap up a new template function and merge options */
    templateFunction.withConfig = function (config) {
      return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
    };
    templateFunction.attrs = function (attrs) {
      return constructWithOptions(componentConstructor, tag, _extends({}, options, {
        attrs: _extends({}, options.attrs || EMPTY_OBJECT, attrs)
      }));
    };

    return templateFunction;
  };

  return constructWithOptions;
});

// 

var withTheme = (function (Component$$1) {
  var isStatelessFunctionalComponent = typeof Component$$1 === 'function' &&
  // $FlowFixMe TODO: flow for prototype
  !(Component$$1.prototype && 'isReactComponent' in Component$$1.prototype);

  // NOTE: We can't pass a ref to a stateless functional component
  var shouldSetInnerRef = isStyledComponent(Component$$1) || isStatelessFunctionalComponent;

  var WithTheme = function (_React$Component) {
    inherits(WithTheme, _React$Component);

    function WithTheme() {
      var _temp, _this, _ret;

      classCallCheck(this, WithTheme);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = EMPTY_OBJECT, _this.unsubscribeId = -1, _temp), possibleConstructorReturn(_this, _ret);
    }

    // NOTE: This is so that isStyledComponent passes for the innerRef unwrapping


    WithTheme.prototype.componentWillMount = function componentWillMount() {
      var _this2 = this;

      var defaultProps = this.constructor.defaultProps;

      var styledContext = this.context[CHANNEL_NEXT];
      var themeProp = determineTheme(this.props, undefined, defaultProps);
      if (styledContext === undefined && themeProp === undefined && "production" !== 'production') {
        // eslint-disable-next-line no-console
        console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps');
      } else if (styledContext === undefined && themeProp !== undefined) {
        this.setState({ theme: themeProp });
      } else {
        var subscribe = styledContext.subscribe;

        this.unsubscribeId = subscribe(function (nextTheme) {
          var theme = determineTheme(_this2.props, nextTheme, defaultProps);
          _this2.setState({ theme: theme });
        });
      }
    };

    WithTheme.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var defaultProps = this.constructor.defaultProps;

      this.setState(function (oldState) {
        var theme = determineTheme(nextProps, oldState.theme, defaultProps);

        return { theme: theme };
      });
    };

    WithTheme.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.unsubscribeId !== -1) {
        this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId);
      }
    };

    WithTheme.prototype.render = function render() {
      var props = _extends({
        theme: this.state.theme
      }, this.props);

      if (!shouldSetInnerRef) {
        props.ref = props.innerRef;
        delete props.innerRef;
      }

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component$$1, props);
    };

    return WithTheme;
  }(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

  WithTheme.contextTypes = contextShape;
  WithTheme.displayName = 'WithTheme(' + getComponentName(Component$$1) + ')';
  WithTheme.styledComponentId = 'withTheme';


  return __WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics___default()(WithTheme, Component$$1);
});

// 

/* eslint-disable */
var __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = {
  StyleSheet: StyleSheet
};

// 

/* Warning if you've imported this file on React Native */
if (false) {
  // eslint-disable-next-line no-console
  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
}

/* Warning if there are several instances of styled-components */
if (false) {
  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

  if (window['__styled-components-init__'] === 1) {
    // eslint-disable-next-line no-console
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process ' + 'and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
  }

  window['__styled-components-init__'] += 1;
}

/* Instantiate singletons */
var ComponentStyle = _ComponentStyle(generateAlphabeticName, flatten, stringifyRules);
var constructWithOptions = _constructWithOptions(css);
var StyledComponent = _StyledComponent(ComponentStyle, constructWithOptions);

/* Instantiate exported singletons */
var keyframes = _keyframes(generateAlphabeticName, stringifyRules, css);
var injectGlobal = _injectGlobal(stringifyRules, css);
var styled = _styled(StyledComponent, constructWithOptions);

/* harmony default export */ __webpack_exports__["a"] = (styled);

//# sourceMappingURL=styled-components.browser.esm.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(70), __webpack_require__(48)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(8),
    getPrototype = __webpack_require__(170),
    isObjectLike = __webpack_require__(4);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(221)();
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(19),
    getRawTag = __webpack_require__(105),
    objectToString = __webpack_require__(106);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(54);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(55),
    overRest = __webpack_require__(133),
    setToString = __webpack_require__(135);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Reaction$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return untracked$$1; });
/* unused harmony export IDerivationState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return createAtom$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return spy$$1; });
/* unused harmony export comparer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return isObservableObject$$1; });
/* unused harmony export isBoxedObservable */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isObservableArray$$1; });
/* unused harmony export ObservableMap */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return isObservableMap$$1; });
/* unused harmony export transaction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return observable$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return computed$$1; });
/* unused harmony export isObservable */
/* unused harmony export isObservableProp */
/* unused harmony export isComputed */
/* unused harmony export isComputedProp */
/* unused harmony export extendObservable */
/* unused harmony export observe */
/* unused harmony export intercept */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return autorun$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return reaction$$1; });
/* unused harmony export when */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return action$$1; });
/* unused harmony export isAction */
/* unused harmony export runInAction */
/* unused harmony export keys */
/* unused harmony export values */
/* unused harmony export entries */
/* unused harmony export set */
/* unused harmony export remove */
/* unused harmony export has */
/* unused harmony export get */
/* unused harmony export decorate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return configure$$1; });
/* unused harmony export onBecomeObserved */
/* unused harmony export onBecomeUnobserved */
/* unused harmony export flow */
/* unused harmony export toJS */
/* unused harmony export trace */
/* unused harmony export getDependencyTree */
/* unused harmony export getObserverTree */
/* unused harmony export _resetGlobalState */
/* unused harmony export _getGlobalState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getDebugName$$1; });
/* unused harmony export getAtom */
/* unused harmony export _getAdministration */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return allowStateChanges$$1; });
/* unused harmony export isArrayLike */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return $mobx$$1; });
/* unused harmony export _isComputingDerivation */
/* unused harmony export onReactionError */
/* unused harmony export _interceptReads */
/** MobX - (c) Michel Weststrate 2015 - 2018 - MIT Licensed */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};















function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var OBFUSCATED_ERROR$$1 = "An invariant failed, however the error is obfuscated because this is an production build.";
var EMPTY_ARRAY$$1 = [];
Object.freeze(EMPTY_ARRAY$$1);
var EMPTY_OBJECT$$1 = {};
Object.freeze(EMPTY_OBJECT$$1);
function getNextId$$1() {
    return ++globalState$$1.mobxGuid;
}
function fail$$1(message) {
    invariant$$1(false, message);
    throw "X"; // unreachable
}
function invariant$$1(check, message) {
    if (!check)
        throw new Error("[mobx] " + (message || OBFUSCATED_ERROR$$1));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */
var deprecatedMessages = [];
function deprecated$$1(msg, thing) {
    if (true)
        return false;
    if (thing) {
        return deprecated$$1("'" + msg + "', use '" + thing + "' instead.");
    }
    if (deprecatedMessages.indexOf(msg) !== -1)
        return false;
    deprecatedMessages.push(msg);
    console.error("[mobx] Deprecated: " + msg);
    return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */
function once$$1(func) {
    var invoked = false;
    return function () {
        if (invoked)
            return;
        invoked = true;
        return func.apply(this, arguments);
    };
}
var noop$$1 = function () { };
function unique$$1(list) {
    var res = [];
    list.forEach(function (item) {
        if (res.indexOf(item) === -1)
            res.push(item);
    });
    return res;
}
function isObject$$1(value) {
    return value !== null && typeof value === "object";
}
function isPlainObject$$1(value) {
    if (value === null || typeof value !== "object")
        return false;
    var proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}

function addHiddenProp$$1(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
    });
}
function addHiddenFinalProp$$1(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}
function isPropertyConfigurable$$1(object, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
}
function assertPropertyConfigurable$$1(object, prop) {
    if (false)
        fail$$1("Cannot make property '" + prop.toString() + "' observable, it is not configurable and writable in the target object");
}
function createInstanceofPredicate$$1(name, clazz) {
    var propName = "isMobX" + name;
    clazz.prototype[propName] = true;
    return function (x) {
        return isObject$$1(x) && x[propName] === true;
    };
}
/**
 * Returns whether the argument is an array, disregarding observability.
 */
function isArrayLike$$1(x) {
    return Array.isArray(x) || isObservableArray$$1(x);
}
function isES6Map$$1(thing) {
    return thing instanceof Map;
}
function getMapLikeKeys$$1(map) {
    if (isPlainObject$$1(map))
        return Object.keys(map);
    if (Array.isArray(map))
        return map.map(function (_a) {
            var _b = __read(_a, 1), key = _b[0];
            return key;
        });
    if (isES6Map$$1(map) || isObservableMap$$1(map))
        return Array.from(map.keys());
    return fail$$1("Cannot get keys from '" + map + "'");
}
function toPrimitive$$1(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value;
}

var $mobx$$1 = Symbol("mobx administration");
var Atom$$1 = /** @class */ (function () {
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function Atom$$1(name) {
        if (name === void 0) { name = "Atom@" + getNextId$$1(); }
        this.name = name;
        this.isPendingUnobservation = false; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
        this.isBeingObserved = false;
        this.observers = new Set();
        this.diffValue = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.NOT_TRACKING;
    }
    Atom$$1.prototype.onBecomeUnobserved = function () {
        // noop
    };
    Atom$$1.prototype.onBecomeObserved = function () {
        /* noop */
    };
    /**
     * Invoke this method to notify mobx that your atom has been used somehow.
     * Returns true if there is currently a reactive context.
     */
    Atom$$1.prototype.reportObserved = function () {
        return reportObserved$$1(this);
    };
    /**
     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
     */
    Atom$$1.prototype.reportChanged = function () {
        startBatch$$1();
        propagateChanged$$1(this);
        endBatch$$1();
    };
    Atom$$1.prototype.toString = function () {
        return this.name;
    };
    return Atom$$1;
}());
var isAtom$$1 = createInstanceofPredicate$$1("Atom", Atom$$1);
function createAtom$$1(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
    if (onBecomeObservedHandler === void 0) { onBecomeObservedHandler = noop$$1; }
    if (onBecomeUnobservedHandler === void 0) { onBecomeUnobservedHandler = noop$$1; }
    var atom = new Atom$$1(name);
    onBecomeObserved$$1(atom, onBecomeObservedHandler);
    onBecomeUnobserved$$1(atom, onBecomeUnobservedHandler);
    return atom;
}

function identityComparer(a, b) {
    return a === b;
}
function structuralComparer(a, b) {
    return deepEqual$$1(a, b);
}
function defaultComparer(a, b) {
    return Object.is(a, b);
}
var comparer$$1 = {
    identity: identityComparer,
    structural: structuralComparer,
    default: defaultComparer
};

var mobxDidRunLazyInitializersSymbol$$1 = Symbol("mobx did run lazy initializers");
var mobxPendingDecorators$$1 = Symbol("mobx pending decorators");
var enumerableDescriptorCache = {};
var nonEnumerableDescriptorCache = {};
function createPropertyInitializerDescriptor(prop, enumerable) {
    var cache = enumerable ? enumerableDescriptorCache : nonEnumerableDescriptorCache;
    return (cache[prop] ||
        (cache[prop] = {
            configurable: true,
            enumerable: enumerable,
            get: function () {
                initializeInstance$$1(this);
                return this[prop];
            },
            set: function (value) {
                initializeInstance$$1(this);
                this[prop] = value;
            }
        }));
}
function initializeInstance$$1(target) {
    if (target[mobxDidRunLazyInitializersSymbol$$1] === true)
        return;
    var decorators = target[mobxPendingDecorators$$1];
    if (decorators) {
        addHiddenProp$$1(target, mobxDidRunLazyInitializersSymbol$$1, true);
        for (var key in decorators) {
            var d = decorators[key];
            d.propertyCreator(target, d.prop, d.descriptor, d.decoratorTarget, d.decoratorArguments);
        }
    }
}
function createPropDecorator$$1(propertyInitiallyEnumerable, propertyCreator) {
    return function decoratorFactory() {
        var decoratorArguments;
        var decorator = function decorate$$1(target, prop, descriptor, applyImmediately
        // This is a special parameter to signal the direct application of a decorator, allow extendObservable to skip the entire type decoration part,
        // as the instance to apply the decorator to equals the target
        ) {
            if (applyImmediately === true) {
                propertyCreator(target, prop, descriptor, target, decoratorArguments);
                return null;
            }
            if (false)
                fail$$1("This function is a decorator, but it wasn't invoked like a decorator");
            if (!Object.prototype.hasOwnProperty.call(target, mobxPendingDecorators$$1)) {
                var inheritedDecorators = target[mobxPendingDecorators$$1];
                addHiddenProp$$1(target, mobxPendingDecorators$$1, __assign({}, inheritedDecorators));
            }
            target[mobxPendingDecorators$$1][prop] = {
                prop: prop,
                propertyCreator: propertyCreator,
                descriptor: descriptor,
                decoratorTarget: target,
                decoratorArguments: decoratorArguments
            };
            return createPropertyInitializerDescriptor(prop, propertyInitiallyEnumerable);
        };
        if (quacksLikeADecorator$$1(arguments)) {
            // @decorator
            decoratorArguments = EMPTY_ARRAY$$1;
            return decorator.apply(null, arguments);
        }
        else {
            // @decorator(args)
            decoratorArguments = Array.prototype.slice.call(arguments);
            return decorator;
        }
    };
}
function quacksLikeADecorator$$1(args) {
    return (((args.length === 2 || args.length === 3) && typeof args[1] === "string") ||
        (args.length === 4 && args[3] === true));
}

function deepEnhancer$$1(v, _, name) {
    // it is an observable already, done
    if (isObservable$$1(v))
        return v;
    // something that can be converted and mutated?
    if (Array.isArray(v))
        return observable$$1.array(v, { name: name });
    if (isPlainObject$$1(v))
        return observable$$1.object(v, undefined, { name: name });
    if (isES6Map$$1(v))
        return observable$$1.map(v, { name: name });
    return v;
}
function shallowEnhancer$$1(v, _, name) {
    if (v === undefined || v === null)
        return v;
    if (isObservableObject$$1(v) || isObservableArray$$1(v) || isObservableMap$$1(v))
        return v;
    if (Array.isArray(v))
        return observable$$1.array(v, { name: name, deep: false });
    if (isPlainObject$$1(v))
        return observable$$1.object(v, undefined, { name: name, deep: false });
    if (isES6Map$$1(v))
        return observable$$1.map(v, { name: name, deep: false });
    return fail$$1("production" !== "production" &&
        "The shallow modifier / decorator can only used in combination with arrays, objects and maps");
}
function referenceEnhancer$$1(newValue) {
    // never turn into an observable
    return newValue;
}
function refStructEnhancer$$1(v, oldValue, name) {
    if (false)
        throw "observable.struct should not be used with observable values";
    if (deepEqual$$1(v, oldValue))
        return oldValue;
    return v;
}

function createDecoratorForEnhancer$$1(enhancer) {
    invariant$$1(enhancer);
    var decorator = createPropDecorator$$1(true, function (target, propertyName, descriptor, _decoratorTarget, decoratorArgs) {
        if (false) {
            invariant$$1(!descriptor || !descriptor.get, "@observable cannot be used on getter (property \"" + propertyName + "\"), use @computed instead.");
        }
        var initialValue = descriptor
            ? descriptor.initializer
                ? descriptor.initializer.call(target)
                : descriptor.value
            : undefined;
        asObservableObject$$1(target).addObservableProp(propertyName, initialValue, enhancer);
    });
    var res = 
    // Extra process checks, as this happens during module initialization
    typeof process !== "undefined" && Object({"NODE_ENV":"production","PUBLIC_URL":"/card-game"}) && "production" !== "production"
        ? function observableDecorator() {
            // This wrapper function is just to detect illegal decorator invocations, deprecate in a next version
            // and simply return the created prop decorator
            if (arguments.length < 2)
                return fail$$1("Incorrect decorator invocation. @observable decorator doesn't expect any arguments");
            return decorator.apply(null, arguments);
        }
        : decorator;
    res.enhancer = enhancer;
    return res;
}

// Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases
var defaultCreateObservableOptions$$1 = {
    deep: true,
    name: undefined,
    defaultDecorator: undefined,
    proxy: true
};
Object.freeze(defaultCreateObservableOptions$$1);
function assertValidOption(key) {
    if (!/^(deep|name|defaultDecorator|proxy)$/.test(key))
        fail$$1("invalid option for (extend)observable: " + key);
}
function asCreateObservableOptions$$1(thing) {
    if (thing === null || thing === undefined)
        return defaultCreateObservableOptions$$1;
    if (typeof thing === "string")
        return { name: thing, deep: true, proxy: true };
    if (false) {
        if (typeof thing !== "object")
            return fail$$1("expected options object");
        Object.keys(thing).forEach(assertValidOption);
    }
    return thing;
}
var deepDecorator$$1 = createDecoratorForEnhancer$$1(deepEnhancer$$1);
var shallowDecorator = createDecoratorForEnhancer$$1(shallowEnhancer$$1);
var refDecorator$$1 = createDecoratorForEnhancer$$1(referenceEnhancer$$1);
var refStructDecorator = createDecoratorForEnhancer$$1(refStructEnhancer$$1);
function getEnhancerFromOptions(options) {
    return options.defaultDecorator
        ? options.defaultDecorator.enhancer
        : options.deep === false
            ? referenceEnhancer$$1
            : deepEnhancer$$1;
}
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */
function createObservable(v, arg2, arg3) {
    // @observable someProp;
    if (typeof arguments[1] === "string") {
        return deepDecorator$$1.apply(null, arguments);
    }
    // it is an observable already, done
    if (isObservable$$1(v))
        return v;
    // something that can be converted and mutated?
    var res = isPlainObject$$1(v)
        ? observable$$1.object(v, arg2, arg3)
        : Array.isArray(v)
            ? observable$$1.array(v, arg2)
            : isES6Map$$1(v)
                ? observable$$1.map(v, arg2)
                : v;
    // this value could be converted to a new observable data structure, return it
    if (res !== v)
        return res;
    // otherwise, just box it
    fail$$1("production" !== "production" &&
        "The provided value could not be converted into an observable. If you want just create an observable reference to the object use 'observable.box(value)'");
}
var observableFactories = {
    box: function (value, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("box");
        var o = asCreateObservableOptions$$1(options);
        return new ObservableValue$$1(value, getEnhancerFromOptions(o), o.name);
    },
    array: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("array");
        var o = asCreateObservableOptions$$1(options);
        return createObservableArray$$1(initialValues, getEnhancerFromOptions(o), o.name);
    },
    map: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("map");
        var o = asCreateObservableOptions$$1(options);
        return new ObservableMap$$1(initialValues, getEnhancerFromOptions(o), o.name);
    },
    object: function (props, decorators, options) {
        if (typeof arguments[1] === "string")
            incorrectlyUsedAsDecorator("object");
        var o = asCreateObservableOptions$$1(options);
        if (o.proxy === false) {
            return extendObservable$$1({}, props, decorators, o);
        }
        else {
            var defaultDecorator = getDefaultDecoratorFromObjectOptions$$1(o);
            var base = extendObservable$$1({}, undefined, undefined, o);
            var proxy = createDynamicObservableObject$$1(base);
            extendObservableObjectWithProperties$$1(proxy, props, decorators, defaultDecorator);
            return proxy;
        }
    },
    ref: refDecorator$$1,
    shallow: shallowDecorator,
    deep: deepDecorator$$1,
    struct: refStructDecorator
};
var observable$$1 = createObservable;
// weird trick to keep our typings nicely with our funcs, and still extend the observable function
Object.keys(observableFactories).forEach(function (name) { return (observable$$1[name] = observableFactories[name]); });
function incorrectlyUsedAsDecorator(methodName) {
    fail$$1(
    // process.env.NODE_ENV !== "production" &&
    "Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}

var computedDecorator$$1 = createPropDecorator$$1(false, function (instance, propertyName, descriptor, decoratorTarget, decoratorArgs) {
    var get$$1 = descriptor.get, set$$1 = descriptor.set; // initialValue is the descriptor for get / set props
    // Optimization: faster on decorator target or instance? Assuming target
    // Optimization: find out if declaring on instance isn't just faster. (also makes the property descriptor simpler). But, more memory usage..
    var options = decoratorArgs[0] || {};
    asObservableObject$$1(instance).addComputedProp(decoratorTarget, propertyName, __assign({ get: get$$1,
        set: set$$1, context: instance }, options));
});
var computedStructDecorator = computedDecorator$$1({ equals: comparer$$1.structural });
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */
var computed$$1 = function computed$$1(arg1, arg2, arg3) {
    if (typeof arg2 === "string") {
        // @computed
        return computedDecorator$$1.apply(null, arguments);
    }
    if (arg1 !== null && typeof arg1 === "object" && arguments.length === 1) {
        // @computed({ options })
        return computedDecorator$$1.apply(null, arguments);
    }
    // computed(expr, options?)
    if (false) {
        invariant$$1(typeof arg1 === "function", "First argument to `computed` should be an expression.");
        invariant$$1(arguments.length < 3, "Computed takes one or two arguments if used as function");
    }
    var opts = typeof arg2 === "object" ? arg2 : {};
    opts.get = arg1;
    opts.set = typeof arg2 === "function" ? arg2 : opts.set;
    opts.name = opts.name || arg1.name || ""; /* for generated name */
    return new ComputedValue$$1(opts);
};
computed$$1.struct = computedStructDecorator;

function createAction$$1(actionName, fn) {
    if (false) {
        invariant$$1(typeof fn === "function", "`action` can only be invoked on functions");
        if (typeof actionName !== "string" || !actionName)
            fail$$1("actions should have valid names, got: '" + actionName + "'");
    }
    var res = function () {
        return executeAction$$1(actionName, fn, this, arguments);
    };
    res.isMobxAction = true;
    return res;
}
function executeAction$$1(actionName, fn, scope, args) {
    var runInfo = startAction(actionName, fn, scope, args);
    try {
        return fn.apply(scope, args);
    }
    finally {
        endAction(runInfo);
    }
}
function startAction(actionName, fn, scope, args) {
    var notifySpy = isSpyEnabled$$1() && !!actionName;
    var startTime = 0;
    if (notifySpy && "production" !== "production") {
        startTime = Date.now();
        var l = (args && args.length) || 0;
        var flattendArgs = new Array(l);
        if (l > 0)
            for (var i = 0; i < l; i++)
                flattendArgs[i] = args[i];
        spyReportStart$$1({
            type: "action",
            name: actionName,
            object: scope,
            arguments: flattendArgs
        });
    }
    var prevDerivation = untrackedStart$$1();
    startBatch$$1();
    var prevAllowStateChanges = allowStateChangesStart$$1(true);
    return {
        prevDerivation: prevDerivation,
        prevAllowStateChanges: prevAllowStateChanges,
        notifySpy: notifySpy,
        startTime: startTime
    };
}
function endAction(runInfo) {
    allowStateChangesEnd$$1(runInfo.prevAllowStateChanges);
    endBatch$$1();
    untrackedEnd$$1(runInfo.prevDerivation);
    if (runInfo.notifySpy && "production" !== "production")
        spyReportEnd$$1({ time: Date.now() - runInfo.startTime });
}
function allowStateChanges$$1(allowStateChanges$$1, func) {
    var prev = allowStateChangesStart$$1(allowStateChanges$$1);
    var res;
    try {
        res = func();
    }
    finally {
        allowStateChangesEnd$$1(prev);
    }
    return res;
}
function allowStateChangesStart$$1(allowStateChanges$$1) {
    var prev = globalState$$1.allowStateChanges;
    globalState$$1.allowStateChanges = allowStateChanges$$1;
    return prev;
}
function allowStateChangesEnd$$1(prev) {
    globalState$$1.allowStateChanges = prev;
}

var UNCHANGED$$1 = {};
var ObservableValue$$1 = /** @class */ (function (_super) {
    __extends(ObservableValue$$1, _super);
    function ObservableValue$$1(value, enhancer, name, notifySpy) {
        if (name === void 0) { name = "ObservableValue@" + getNextId$$1(); }
        if (notifySpy === void 0) { notifySpy = true; }
        var _this = _super.call(this, name) || this;
        _this.enhancer = enhancer;
        _this.hasUnreportedChange = false;
        _this.value = enhancer(value, undefined, name);
        if (notifySpy && isSpyEnabled$$1() && "production" !== "production") {
            // only notify spy if this is a stand-alone observable
            spyReport$$1({ type: "create", name: _this.name, newValue: "" + _this.value });
        }
        return _this;
    }
    ObservableValue$$1.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableValue$$1.prototype.set = function (newValue) {
        var oldValue = this.value;
        newValue = this.prepareNewValue(newValue);
        if (newValue !== UNCHANGED$$1) {
            var notifySpy = isSpyEnabled$$1();
            if (notifySpy && "production" !== "production") {
                spyReportStart$$1({
                    type: "update",
                    name: this.name,
                    newValue: newValue,
                    oldValue: oldValue
                });
            }
            this.setNewValue(newValue);
            if (notifySpy && "production" !== "production")
                spyReportEnd$$1();
        }
    };
    ObservableValue$$1.prototype.prepareNewValue = function (newValue) {
        checkIfStateModificationsAreAllowed$$1(this);
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                object: this,
                type: "update",
                newValue: newValue
            });
            if (!change)
                return UNCHANGED$$1;
            newValue = change.newValue;
        }
        // apply modifier
        newValue = this.enhancer(newValue, this.value, this.name);
        return this.value !== newValue ? newValue : UNCHANGED$$1;
    };
    ObservableValue$$1.prototype.setNewValue = function (newValue) {
        var oldValue = this.value;
        this.value = newValue;
        this.reportChanged();
        if (hasListeners$$1(this)) {
            notifyListeners$$1(this, {
                type: "update",
                object: this,
                newValue: newValue,
                oldValue: oldValue
            });
        }
    };
    ObservableValue$$1.prototype.get = function () {
        this.reportObserved();
        return this.dehanceValue(this.value);
    };
    ObservableValue$$1.prototype.intercept = function (handler) {
        return registerInterceptor$$1(this, handler);
    };
    ObservableValue$$1.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately)
            listener({
                object: this,
                type: "update",
                newValue: this.value,
                oldValue: undefined
            });
        return registerListener$$1(this, listener);
    };
    ObservableValue$$1.prototype.toJSON = function () {
        return this.get();
    };
    ObservableValue$$1.prototype.toString = function () {
        return this.name + "[" + this.value + "]";
    };
    ObservableValue$$1.prototype.valueOf = function () {
        return toPrimitive$$1(this.get());
    };
    ObservableValue$$1.prototype[Symbol.toPrimitive] = function () {
        return this.valueOf();
    };
    return ObservableValue$$1;
}(Atom$$1));
var isObservableValue$$1 = createInstanceofPredicate$$1("ObservableValue", ObservableValue$$1);

/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */
var ComputedValue$$1 = /** @class */ (function () {
    /**
     * Create a new computed value based on a function expression.
     *
     * The `name` property is for debug purposes only.
     *
     * The `equals` property specifies the comparer function to use to determine if a newly produced
     * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
     * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
     * Structural comparison can be convenient if you always produce a new aggregated object and
     * don't want to notify observers if it is structurally the same.
     * This is useful for working with vectors, mouse coordinates etc.
     */
    function ComputedValue$$1(options) {
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = null; // during tracking it's an array with new observed observers
        this.isBeingObserved = false;
        this.isPendingUnobservation = false;
        this.observers = new Set();
        this.diffValue = 0;
        this.runId = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.UP_TO_DATE;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId$$1();
        this.value = new CaughtException$$1(null);
        this.isComputing = false; // to check for cycles
        this.isRunningSetter = false;
        this.isTracing = TraceMode$$1.NONE;
        this.firstGet = true;
        if (false)
            throw "[mobx] missing option for computed: get";
        this.derivation = options.get;
        this.name = options.name || "ComputedValue@" + getNextId$$1();
        if (options.set)
            this.setter = createAction$$1(this.name + "-setter", options.set);
        this.equals =
            options.equals ||
                (options.compareStructural || options.struct
                    ? comparer$$1.structural
                    : comparer$$1.default);
        this.scope = options.context;
        this.requiresReaction = !!options.requiresReaction;
        this.keepAlive = !!options.keepAlive;
    }
    ComputedValue$$1.prototype.onBecomeStale = function () {
        propagateMaybeChanged$$1(this);
    };
    ComputedValue$$1.prototype.onBecomeUnobserved = function () { };
    ComputedValue$$1.prototype.onBecomeObserved = function () { };
    /**
     * Returns the current value of this computed value.
     * Will evaluate its computation first if needed.
     */
    ComputedValue$$1.prototype.get = function () {
        var _this = this;
        if (this.keepAlive && this.firstGet) {
            this.firstGet = false;
            autorun$$1(function () { return _this.get(); });
        }
        if (this.isComputing)
            fail$$1("Cycle detected in computation " + this.name + ": " + this.derivation);
        if (globalState$$1.inBatch === 0 && this.observers.size === 0) {
            if (shouldCompute$$1(this)) {
                this.warnAboutUntrackedRead();
                startBatch$$1(); // See perf test 'computed memoization'
                this.value = this.computeValue(false);
                endBatch$$1();
            }
        }
        else {
            reportObserved$$1(this);
            if (shouldCompute$$1(this))
                if (this.trackAndCompute())
                    propagateChangeConfirmed$$1(this);
        }
        var result = this.value;
        if (isCaughtException$$1(result))
            throw result.cause;
        return result;
    };
    ComputedValue$$1.prototype.peek = function () {
        var res = this.computeValue(false);
        if (isCaughtException$$1(res))
            throw res.cause;
        return res;
    };
    ComputedValue$$1.prototype.set = function (value) {
        if (this.setter) {
            invariant$$1(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
            this.isRunningSetter = true;
            try {
                this.setter.call(this.scope, value);
            }
            finally {
                this.isRunningSetter = false;
            }
        }
        else
            invariant$$1(false, "production" !== "production" &&
                "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.");
    };
    ComputedValue$$1.prototype.trackAndCompute = function () {
        if (isSpyEnabled$$1() && "production" !== "production") {
            spyReport$$1({
                object: this.scope,
                type: "compute",
                name: this.name
            });
        }
        var oldValue = this.value;
        var wasSuspended = 
        /* see #1208 */ this.dependenciesState === IDerivationState.NOT_TRACKING;
        var newValue = this.computeValue(true);
        var changed = wasSuspended ||
            isCaughtException$$1(oldValue) ||
            isCaughtException$$1(newValue) ||
            !this.equals(oldValue, newValue);
        if (changed) {
            this.value = newValue;
        }
        return changed;
    };
    ComputedValue$$1.prototype.computeValue = function (track) {
        this.isComputing = true;
        globalState$$1.computationDepth++;
        var res;
        if (track) {
            res = trackDerivedFunction$$1(this, this.derivation, this.scope);
        }
        else {
            if (globalState$$1.disableErrorBoundaries === true) {
                res = this.derivation.call(this.scope);
            }
            else {
                try {
                    res = this.derivation.call(this.scope);
                }
                catch (e) {
                    res = new CaughtException$$1(e);
                }
            }
        }
        globalState$$1.computationDepth--;
        this.isComputing = false;
        return res;
    };
    ComputedValue$$1.prototype.suspend = function () {
        clearObserving$$1(this);
        this.value = undefined; // don't hold on to computed value!
    };
    ComputedValue$$1.prototype.observe = function (listener, fireImmediately) {
        var _this = this;
        var firstTime = true;
        var prevValue = undefined;
        return autorun$$1(function () {
            var newValue = _this.get();
            if (!firstTime || fireImmediately) {
                var prevU = untrackedStart$$1();
                listener({
                    type: "update",
                    object: _this,
                    newValue: newValue,
                    oldValue: prevValue
                });
                untrackedEnd$$1(prevU);
            }
            firstTime = false;
            prevValue = newValue;
        });
    };
    ComputedValue$$1.prototype.warnAboutUntrackedRead = function () {
        if (true)
            return;
        if (this.requiresReaction === true) {
            fail$$1("[mobx] Computed value " + this.name + " is read outside a reactive context");
        }
        if (this.isTracing !== TraceMode$$1.NONE) {
            console.log("[mobx.trace] '" + this.name + "' is being read outside a reactive context. Doing a full recompute");
        }
        if (globalState$$1.computedRequiresReaction) {
            console.warn("[mobx] Computed value " + this.name + " is being read outside a reactive context. Doing a full recompute");
        }
    };
    ComputedValue$$1.prototype.toJSON = function () {
        return this.get();
    };
    ComputedValue$$1.prototype.toString = function () {
        return this.name + "[" + this.derivation.toString() + "]";
    };
    ComputedValue$$1.prototype.valueOf = function () {
        return toPrimitive$$1(this.get());
    };
    ComputedValue$$1.prototype[Symbol.toPrimitive] = function () {
        return this.valueOf();
    };
    return ComputedValue$$1;
}());
var isComputedValue$$1 = createInstanceofPredicate$$1("ComputedValue", ComputedValue$$1);

var IDerivationState;
(function (IDerivationState$$1) {
    // before being run or (outside batch and not being observed)
    // at this point derivation is not holding any data about dependency tree
    IDerivationState$$1[IDerivationState$$1["NOT_TRACKING"] = -1] = "NOT_TRACKING";
    // no shallow dependency changed since last computation
    // won't recalculate derivation
    // this is what makes mobx fast
    IDerivationState$$1[IDerivationState$$1["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    // some deep dependency changed, but don't know if shallow dependency changed
    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
    // currently only ComputedValue will propagate POSSIBLY_STALE
    //
    // having this state is second big optimization:
    // don't have to recompute on every dependency change, but only when it's needed
    IDerivationState$$1[IDerivationState$$1["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
    // A shallow dependency has changed since last computation and the derivation
    // will need to recompute when it's needed next.
    IDerivationState$$1[IDerivationState$$1["STALE"] = 2] = "STALE";
})(IDerivationState || (IDerivationState = {}));
var TraceMode$$1;
(function (TraceMode$$1) {
    TraceMode$$1[TraceMode$$1["NONE"] = 0] = "NONE";
    TraceMode$$1[TraceMode$$1["LOG"] = 1] = "LOG";
    TraceMode$$1[TraceMode$$1["BREAK"] = 2] = "BREAK";
})(TraceMode$$1 || (TraceMode$$1 = {}));
var CaughtException$$1 = /** @class */ (function () {
    function CaughtException$$1(cause) {
        this.cause = cause;
        // Empty
    }
    return CaughtException$$1;
}());
function isCaughtException$$1(e) {
    return e instanceof CaughtException$$1;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */
function shouldCompute$$1(derivation) {
    switch (derivation.dependenciesState) {
        case IDerivationState.UP_TO_DATE:
            return false;
        case IDerivationState.NOT_TRACKING:
        case IDerivationState.STALE:
            return true;
        case IDerivationState.POSSIBLY_STALE: {
            var prevUntracked = untrackedStart$$1(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
            var obs = derivation.observing, l = obs.length;
            for (var i = 0; i < l; i++) {
                var obj = obs[i];
                if (isComputedValue$$1(obj)) {
                    if (globalState$$1.disableErrorBoundaries) {
                        obj.get();
                    }
                    else {
                        try {
                            obj.get();
                        }
                        catch (e) {
                            // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                            untrackedEnd$$1(prevUntracked);
                            return true;
                        }
                    }
                    // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
                    // and `derivation` is an observer of `obj`
                    // invariantShouldCompute(derivation)
                    if (derivation.dependenciesState === IDerivationState.STALE) {
                        untrackedEnd$$1(prevUntracked);
                        return true;
                    }
                }
            }
            changeDependenciesStateTo0$$1(derivation);
            untrackedEnd$$1(prevUntracked);
            return false;
        }
    }
}
// function invariantShouldCompute(derivation: IDerivation) {
//     const newDepState = (derivation as any).dependenciesState
//     if (
//         process.env.NODE_ENV === "production" &&
//         (newDepState === IDerivationState.POSSIBLY_STALE ||
//             newDepState === IDerivationState.NOT_TRACKING)
//     )
//         fail("Illegal dependency state")
// }
function isComputingDerivation$$1() {
    return globalState$$1.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed$$1(atom) {
    var hasObservers$$1 = atom.observers.size > 0;
    // Should never be possible to change an observed observable from inside computed, see #798
    if (globalState$$1.computationDepth > 0 && hasObservers$$1)
        fail$$1("production" !== "production" &&
            "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: " + atom.name);
    // Should not be possible to change observed state outside strict mode, except during initialization, see #563
    if (!globalState$$1.allowStateChanges && (hasObservers$$1 || globalState$$1.enforceActions === "strict"))
        fail$$1("production" !== "production" &&
            (globalState$$1.enforceActions
                ? "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: "
                : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ") +
                atom.name);
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */
function trackDerivedFunction$$1(derivation, f, context) {
    // pre allocate array allocation + room for variation in deps
    // array will be trimmed by bindDependencies
    changeDependenciesStateTo0$$1(derivation);
    derivation.newObserving = new Array(derivation.observing.length + 100);
    derivation.unboundDepsCount = 0;
    derivation.runId = ++globalState$$1.runId;
    var prevTracking = globalState$$1.trackingDerivation;
    globalState$$1.trackingDerivation = derivation;
    var result;
    if (globalState$$1.disableErrorBoundaries === true) {
        result = f.call(context);
    }
    else {
        try {
            result = f.call(context);
        }
        catch (e) {
            result = new CaughtException$$1(e);
        }
    }
    globalState$$1.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    return result;
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */
function bindDependencies(derivation) {
    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
    var prevObserving = derivation.observing;
    var observing = (derivation.observing = derivation.newObserving);
    var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE;
    // Go through all new observables and check diffValue: (this list can contain duplicates):
    //   0: first occurrence, change to 1 and keep it
    //   1: extra occurrence, drop it
    var i0 = 0, l = derivation.unboundDepsCount;
    for (var i = 0; i < l; i++) {
        var dep = observing[i];
        if (dep.diffValue === 0) {
            dep.diffValue = 1;
            if (i0 !== i)
                observing[i0] = dep;
            i0++;
        }
        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
        // not hitting the condition
        if (dep.dependenciesState > lowestNewObservingDerivationState) {
            lowestNewObservingDerivationState = dep.dependenciesState;
        }
    }
    observing.length = i0;
    derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
    //   0: it's not in new observables, unobserve it
    //   1: it keeps being observed, don't want to notify it. change to 0
    l = prevObserving.length;
    while (l--) {
        var dep = prevObserving[l];
        if (dep.diffValue === 0) {
            removeObserver$$1(dep, derivation);
        }
        dep.diffValue = 0;
    }
    // Go through all new observables and check diffValue: (now it should be unique)
    //   0: it was set to 0 in last loop. don't need to do anything.
    //   1: it wasn't observed, let's observe it. set back to 0
    while (i0--) {
        var dep = observing[i0];
        if (dep.diffValue === 1) {
            dep.diffValue = 0;
            addObserver$$1(dep, derivation);
        }
    }
    // Some new observed derivations may become stale during this derivation computation
    // so they have had no chance to propagate staleness (#916)
    if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
        derivation.dependenciesState = lowestNewObservingDerivationState;
        derivation.onBecomeStale();
    }
}
function clearObserving$$1(derivation) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
    var obs = derivation.observing;
    derivation.observing = [];
    var i = obs.length;
    while (i--)
        removeObserver$$1(obs[i], derivation);
    derivation.dependenciesState = IDerivationState.NOT_TRACKING;
}
function untracked$$1(action$$1) {
    var prev = untrackedStart$$1();
    try {
        return action$$1();
    }
    finally {
        untrackedEnd$$1(prev);
    }
}
function untrackedStart$$1() {
    var prev = globalState$$1.trackingDerivation;
    globalState$$1.trackingDerivation = null;
    return prev;
}
function untrackedEnd$$1(prev) {
    globalState$$1.trackingDerivation = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */
function changeDependenciesStateTo0$$1(derivation) {
    if (derivation.dependenciesState === IDerivationState.UP_TO_DATE)
        return;
    derivation.dependenciesState = IDerivationState.UP_TO_DATE;
    var obs = derivation.observing;
    var i = obs.length;
    while (i--)
        obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
}

/**
 * These values will persist if global state is reset
 */
var persistentKeys = [
    "mobxGuid",
    "spyListeners",
    "enforceActions",
    "computedRequiresReaction",
    "disableErrorBoundaries",
    "runId"
];
var MobXGlobals$$1 = /** @class */ (function () {
    function MobXGlobals$$1() {
        /**
         * MobXGlobals version.
         * MobX compatiblity with other versions loaded in memory as long as this version matches.
         * It indicates that the global state still stores similar information
         *
         * N.B: this version is unrelated to the package version of MobX, and is only the version of the
         * internal state storage of MobX, and can be the same across many different package versions
         */
        this.version = 5;
        /**
         * Currently running derivation
         */
        this.trackingDerivation = null;
        /**
         * Are we running a computation currently? (not a reaction)
         */
        this.computationDepth = 0;
        /**
         * Each time a derivation is tracked, it is assigned a unique run-id
         */
        this.runId = 0;
        /**
         * 'guid' for general purpose. Will be persisted amongst resets.
         */
        this.mobxGuid = 0;
        /**
         * Are we in a batch block? (and how many of them)
         */
        this.inBatch = 0;
        /**
         * Observables that don't have observers anymore, and are about to be
         * suspended, unless somebody else accesses it in the same batch
         *
         * @type {IObservable[]}
         */
        this.pendingUnobservations = [];
        /**
         * List of scheduled, not yet executed, reactions.
         */
        this.pendingReactions = [];
        /**
         * Are we currently processing reactions?
         */
        this.isRunningReactions = false;
        /**
         * Is it allowed to change observables at this point?
         * In general, MobX doesn't allow that when running computations and React.render.
         * To ensure that those functions stay pure.
         */
        this.allowStateChanges = true;
        /**
         * If strict mode is enabled, state changes are by default not allowed
         */
        this.enforceActions = false;
        /**
         * Spy callbacks
         */
        this.spyListeners = [];
        /**
         * Globally attached error handlers that react specifically to errors in reactions
         */
        this.globalReactionErrorHandlers = [];
        /**
         * Warn if computed values are accessed outside a reactive context
         */
        this.computedRequiresReaction = false;
        /*
         * Don't catch and rethrow exceptions. This is useful for inspecting the state of
         * the stack when an exception occurs while debugging.
         */
        this.disableErrorBoundaries = false;
    }
    return MobXGlobals$$1;
}());
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState$$1 = (function () {
    var global = getGlobal$$1();
    if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals)
        canMergeGlobalState = false;
    if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals$$1().version)
        canMergeGlobalState = false;
    if (!canMergeGlobalState) {
        setTimeout(function () {
            if (!isolateCalled) {
                fail$$1("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
            }
        }, 1);
        return new MobXGlobals$$1();
    }
    else if (global.__mobxGlobals) {
        global.__mobxInstanceCount += 1;
        return global.__mobxGlobals;
    }
    else {
        global.__mobxInstanceCount = 1;
        return (global.__mobxGlobals = new MobXGlobals$$1());
    }
})();
function isolateGlobalState$$1() {
    if (globalState$$1.pendingReactions.length ||
        globalState$$1.inBatch ||
        globalState$$1.isRunningReactions)
        fail$$1("isolateGlobalState should be called before MobX is running any reactions");
    isolateCalled = true;
    if (canMergeGlobalState) {
        if (--getGlobal$$1().__mobxInstanceCount === 0)
            getGlobal$$1().__mobxGlobals = undefined;
        globalState$$1 = new MobXGlobals$$1();
    }
}
function getGlobalState$$1() {
    return globalState$$1;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */
function resetGlobalState$$1() {
    var defaultGlobals = new MobXGlobals$$1();
    for (var key in defaultGlobals)
        if (persistentKeys.indexOf(key) === -1)
            globalState$$1[key] = defaultGlobals[key];
    globalState$$1.allowStateChanges = !globalState$$1.enforceActions;
}
function getGlobal$$1() {
    return typeof window !== "undefined" ? window : global;
}

function hasObservers$$1(observable$$1) {
    return observable$$1.observers && observable$$1.observers.size > 0;
}
function getObservers$$1(observable$$1) {
    return observable$$1.observers;
}
// function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }
function addObserver$$1(observable$$1, node) {
    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
    // invariantObservers(observable);
    observable$$1.observers.add(node);
    if (observable$$1.lowestObserverState > node.dependenciesState)
        observable$$1.lowestObserverState = node.dependenciesState;
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver$$1(observable$$1, node) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
    // invariantObservers(observable);
    observable$$1.observers.delete(node);
    if (observable$$1.observers.size === 0) {
        // deleting last observer
        queueForUnobservation$$1(observable$$1);
    }
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
}
function queueForUnobservation$$1(observable$$1) {
    if (observable$$1.isPendingUnobservation === false) {
        // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
        observable$$1.isPendingUnobservation = true;
        globalState$$1.pendingUnobservations.push(observable$$1);
    }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */
function startBatch$$1() {
    globalState$$1.inBatch++;
}
function endBatch$$1() {
    if (--globalState$$1.inBatch === 0) {
        runReactions$$1();
        // the batch is actually about to finish, all unobserving should happen here.
        var list = globalState$$1.pendingUnobservations;
        for (var i = 0; i < list.length; i++) {
            var observable$$1 = list[i];
            observable$$1.isPendingUnobservation = false;
            if (observable$$1.observers.size === 0) {
                if (observable$$1.isBeingObserved) {
                    // if this observable had reactive observers, trigger the hooks
                    observable$$1.isBeingObserved = false;
                    observable$$1.onBecomeUnobserved();
                }
                if (observable$$1 instanceof ComputedValue$$1) {
                    // computed values are automatically teared down when the last observer leaves
                    // this process happens recursively, this computed might be the last observabe of another, etc..
                    observable$$1.suspend();
                }
            }
        }
        globalState$$1.pendingUnobservations = [];
    }
}
function reportObserved$$1(observable$$1) {
    var derivation = globalState$$1.trackingDerivation;
    if (derivation !== null) {
        /**
         * Simple optimization, give each derivation run an unique id (runId)
         * Check if last time this observable was accessed the same runId is used
         * if this is the case, the relation is already known
         */
        if (derivation.runId !== observable$$1.lastAccessedBy) {
            observable$$1.lastAccessedBy = derivation.runId;
            // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...
            derivation.newObserving[derivation.unboundDepsCount++] = observable$$1;
            if (!observable$$1.isBeingObserved) {
                observable$$1.isBeingObserved = true;
                observable$$1.onBecomeObserved();
            }
        }
        return true;
    }
    else if (observable$$1.observers.size === 0 && globalState$$1.inBatch > 0) {
        queueForUnobservation$$1(observable$$1);
    }
    return false;
}
// function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }
/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes
function propagateChanged$$1(observable$$1) {
    // invariantLOS(observable, "changed start");
    if (observable$$1.lowestObserverState === IDerivationState.STALE)
        return;
    observable$$1.lowestObserverState = IDerivationState.STALE;
    // Ideally we use for..of here, but the downcompiled version is really slow...
    observable$$1.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            if (d.isTracing !== TraceMode$$1.NONE) {
                logTraceInfo(d, observable$$1);
            }
            d.onBecomeStale();
        }
        d.dependenciesState = IDerivationState.STALE;
    });
    // invariantLOS(observable, "changed end");
}
// Called by ComputedValue when it recalculate and its value changed
function propagateChangeConfirmed$$1(observable$$1) {
    // invariantLOS(observable, "confirmed start");
    if (observable$$1.lowestObserverState === IDerivationState.STALE)
        return;
    observable$$1.lowestObserverState = IDerivationState.STALE;
    observable$$1.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.POSSIBLY_STALE)
            d.dependenciesState = IDerivationState.STALE;
        else if (d.dependenciesState === IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
        )
            observable$$1.lowestObserverState = IDerivationState.UP_TO_DATE;
    });
    // invariantLOS(observable, "confirmed end");
}
// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
function propagateMaybeChanged$$1(observable$$1) {
    // invariantLOS(observable, "maybe start");
    if (observable$$1.lowestObserverState !== IDerivationState.UP_TO_DATE)
        return;
    observable$$1.lowestObserverState = IDerivationState.POSSIBLY_STALE;
    observable$$1.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            d.dependenciesState = IDerivationState.POSSIBLY_STALE;
            if (d.isTracing !== TraceMode$$1.NONE) {
                logTraceInfo(d, observable$$1);
            }
            d.onBecomeStale();
        }
    });
    // invariantLOS(observable, "maybe end");
}
function logTraceInfo(derivation, observable$$1) {
    console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable$$1.name + "'");
    if (derivation.isTracing === TraceMode$$1.BREAK) {
        var lines = [];
        printDepTree(getDependencyTree$$1(derivation), lines, 1);
        // prettier-ignore
        new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable$$1.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue$$1 ? derivation.derivation.toString() : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
    }
}
function printDepTree(tree, lines, depth) {
    if (lines.length >= 1000) {
        lines.push("(and many more)");
        return;
    }
    lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)
    if (tree.dependencies)
        tree.dependencies.forEach(function (child) { return printDepTree(child, lines, depth + 1); });
}

var Reaction$$1 = /** @class */ (function () {
    function Reaction$$1(name, onInvalidate, errorHandler) {
        if (name === void 0) { name = "Reaction@" + getNextId$$1(); }
        this.name = name;
        this.onInvalidate = onInvalidate;
        this.errorHandler = errorHandler;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = [];
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.diffValue = 0;
        this.runId = 0;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId$$1();
        this.isDisposed = false;
        this._isScheduled = false;
        this._isTrackPending = false;
        this._isRunning = false;
        this.isTracing = TraceMode$$1.NONE;
    }
    Reaction$$1.prototype.onBecomeStale = function () {
        this.schedule();
    };
    Reaction$$1.prototype.schedule = function () {
        if (!this._isScheduled) {
            this._isScheduled = true;
            globalState$$1.pendingReactions.push(this);
            runReactions$$1();
        }
    };
    Reaction$$1.prototype.isScheduled = function () {
        return this._isScheduled;
    };
    /**
     * internal, use schedule() if you intend to kick off a reaction
     */
    Reaction$$1.prototype.runReaction = function () {
        if (!this.isDisposed) {
            startBatch$$1();
            this._isScheduled = false;
            if (shouldCompute$$1(this)) {
                this._isTrackPending = true;
                try {
                    this.onInvalidate();
                    if (this._isTrackPending &&
                        isSpyEnabled$$1() &&
                        "production" !== "production") {
                        // onInvalidate didn't trigger track right away..
                        spyReport$$1({
                            name: this.name,
                            type: "scheduled-reaction"
                        });
                    }
                }
                catch (e) {
                    this.reportExceptionInDerivation(e);
                }
            }
            endBatch$$1();
        }
    };
    Reaction$$1.prototype.track = function (fn) {
        startBatch$$1();
        var notify = isSpyEnabled$$1();
        var startTime;
        if (notify && "production" !== "production") {
            startTime = Date.now();
            spyReportStart$$1({
                name: this.name,
                type: "reaction"
            });
        }
        this._isRunning = true;
        var result = trackDerivedFunction$$1(this, fn, undefined);
        this._isRunning = false;
        this._isTrackPending = false;
        if (this.isDisposed) {
            // disposed during last run. Clean up everything that was bound after the dispose call.
            clearObserving$$1(this);
        }
        if (isCaughtException$$1(result))
            this.reportExceptionInDerivation(result.cause);
        if (notify && "production" !== "production") {
            spyReportEnd$$1({
                time: Date.now() - startTime
            });
        }
        endBatch$$1();
    };
    Reaction$$1.prototype.reportExceptionInDerivation = function (error) {
        var _this = this;
        if (this.errorHandler) {
            this.errorHandler(error, this);
            return;
        }
        if (globalState$$1.disableErrorBoundaries)
            throw error;
        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this;
        console.error(message, error);
        /** If debugging brought you here, please, read the above message :-). Tnx! */
        if (isSpyEnabled$$1()) {
            spyReport$$1({
                type: "error",
                name: this.name,
                message: message,
                error: "" + error
            });
        }
        globalState$$1.globalReactionErrorHandlers.forEach(function (f) { return f(error, _this); });
    };
    Reaction$$1.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            if (!this._isRunning) {
                // if disposed while running, clean up later. Maybe not optimal, but rare case
                startBatch$$1();
                clearObserving$$1(this);
                endBatch$$1();
            }
        }
    };
    Reaction$$1.prototype.getDisposer = function () {
        var r = this.dispose.bind(this);
        r[$mobx$$1] = this;
        return r;
    };
    Reaction$$1.prototype.toString = function () {
        return "Reaction[" + this.name + "]";
    };
    Reaction$$1.prototype.trace = function (enterBreakPoint) {
        if (enterBreakPoint === void 0) { enterBreakPoint = false; }
        trace$$1(this, enterBreakPoint);
    };
    return Reaction$$1;
}());
function onReactionError$$1(handler) {
    globalState$$1.globalReactionErrorHandlers.push(handler);
    return function () {
        var idx = globalState$$1.globalReactionErrorHandlers.indexOf(handler);
        if (idx >= 0)
            globalState$$1.globalReactionErrorHandlers.splice(idx, 1);
    };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function (f) { return f(); };
function runReactions$$1() {
    // Trampolining, if runReactions are already running, new reactions will be picked up
    if (globalState$$1.inBatch > 0 || globalState$$1.isRunningReactions)
        return;
    reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
    globalState$$1.isRunningReactions = true;
    var allReactions = globalState$$1.pendingReactions;
    var iterations = 0;
    // While running reactions, new reactions might be triggered.
    // Hence we work with two variables and check whether
    // we converge to no remaining reactions after a while.
    while (allReactions.length > 0) {
        if (++iterations === MAX_REACTION_ITERATIONS) {
            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." +
                (" Probably there is a cycle in the reactive function: " + allReactions[0]));
            allReactions.splice(0); // clear reactions
        }
        var remainingReactions = allReactions.splice(0);
        for (var i = 0, l = remainingReactions.length; i < l; i++)
            remainingReactions[i].runReaction();
    }
    globalState$$1.isRunningReactions = false;
}
var isReaction$$1 = createInstanceofPredicate$$1("Reaction", Reaction$$1);
function setReactionScheduler$$1(fn) {
    var baseScheduler = reactionScheduler;
    reactionScheduler = function (f) { return fn(function () { return baseScheduler(f); }); };
}

function isSpyEnabled$$1() {
    return "production" !== "production" && !!globalState$$1.spyListeners.length;
}
function spyReport$$1(event) {
    if (true)
        return; // dead code elimination can do the rest
    if (!globalState$$1.spyListeners.length)
        return;
    var listeners = globalState$$1.spyListeners;
    for (var i = 0, l = listeners.length; i < l; i++)
        listeners[i](event);
}
function spyReportStart$$1(event) {
    if (true)
        return;
    var change = __assign({}, event, { spyReportStart: true });
    spyReport$$1(change);
}
var END_EVENT = { spyReportEnd: true };
function spyReportEnd$$1(change) {
    if (true)
        return;
    if (change)
        spyReport$$1(__assign({}, change, { spyReportEnd: true }));
    else
        spyReport$$1(END_EVENT);
}
function spy$$1(listener) {
    if (true) {
        console.warn("[mobx.spy] Is a no-op in production builds");
        return function () { };
    }
    else {
        globalState$$1.spyListeners.push(listener);
        return once$$1(function () {
            globalState$$1.spyListeners = globalState$$1.spyListeners.filter(function (l) { return l !== listener; });
        });
    }
}

function dontReassignFields() {
    fail$$1("production" !== "production" && "@action fields are not reassignable");
}
function namedActionDecorator$$1(name) {
    return function (target, prop, descriptor) {
        if (descriptor) {
            if (false) {
                return fail$$1("@action cannot be used with getters");
            }
            // babel / typescript
            // @action method() { }
            if (descriptor.value) {
                // typescript
                return {
                    value: createAction$$1(name, descriptor.value),
                    enumerable: false,
                    configurable: true,
                    writable: true // for typescript, this must be writable, otherwise it cannot inherit :/ (see inheritable actions test)
                };
            }
            // babel only: @action method = () => {}
            var initializer_1 = descriptor.initializer;
            return {
                enumerable: false,
                configurable: true,
                writable: true,
                initializer: function () {
                    // N.B: we can't immediately invoke initializer; this would be wrong
                    return createAction$$1(name, initializer_1.call(this));
                }
            };
        }
        // bound instance methods
        return actionFieldDecorator$$1(name).apply(this, arguments);
    };
}
function actionFieldDecorator$$1(name) {
    // Simple property that writes on first invocation to the current instance
    return function (target, prop, descriptor) {
        Object.defineProperty(target, prop, {
            configurable: true,
            enumerable: false,
            get: function () {
                return undefined;
            },
            set: function (value) {
                addHiddenProp$$1(this, prop, action$$1(name, value));
            }
        });
    };
}
function boundActionDecorator$$1(target, propertyName, descriptor, applyToInstance) {
    if (applyToInstance === true) {
        defineBoundAction$$1(target, propertyName, descriptor.value);
        return null;
    }
    if (descriptor) {
        // if (descriptor.value)
        // Typescript / Babel: @action.bound method() { }
        // also: babel @action.bound method = () => {}
        return {
            configurable: true,
            enumerable: false,
            get: function () {
                defineBoundAction$$1(this, propertyName, descriptor.value || descriptor.initializer.call(this));
                return this[propertyName];
            },
            set: dontReassignFields
        };
    }
    // field decorator Typescript @action.bound method = () => {}
    return {
        enumerable: false,
        configurable: true,
        set: function (v) {
            defineBoundAction$$1(this, propertyName, v);
        },
        get: function () {
            return undefined;
        }
    };
}

var action$$1 = function action$$1(arg1, arg2, arg3, arg4) {
    // action(fn() {})
    if (arguments.length === 1 && typeof arg1 === "function")
        return createAction$$1(arg1.name || "<unnamed action>", arg1);
    // action("name", fn() {})
    if (arguments.length === 2 && typeof arg2 === "function")
        return createAction$$1(arg1, arg2);
    // @action("name") fn() {}
    if (arguments.length === 1 && typeof arg1 === "string")
        return namedActionDecorator$$1(arg1);
    // @action fn() {}
    if (arg4 === true) {
        // apply to instance immediately
        addHiddenProp$$1(arg1, arg2, createAction$$1(arg1.name || arg2, arg3.value));
    }
    else {
        return namedActionDecorator$$1(arg2).apply(null, arguments);
    }
};
action$$1.bound = boundActionDecorator$$1;
function runInAction$$1(arg1, arg2) {
    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
    var fn = typeof arg1 === "function" ? arg1 : arg2;
    if (false) {
        invariant$$1(typeof fn === "function" && fn.length === 0, "`runInAction` expects a function without arguments");
        if (typeof actionName !== "string" || !actionName)
            fail$$1("actions should have valid names, got: '" + actionName + "'");
    }
    return executeAction$$1(actionName, fn, this, undefined);
}
function isAction$$1(thing) {
    return typeof thing === "function" && thing.isMobxAction === true;
}
function defineBoundAction$$1(target, propertyName, fn) {
    addHiddenProp$$1(target, propertyName, createAction$$1(propertyName, fn.bind(target)));
}

/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */
function autorun$$1(view, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT$$1; }
    if (false) {
        invariant$$1(typeof view === "function", "Autorun expects a function as first argument");
        invariant$$1(isAction$$1(view) === false, "Autorun does not accept actions since actions are untrackable");
    }
    var name = (opts && opts.name) || view.name || "Autorun@" + getNextId$$1();
    var runSync = !opts.scheduler && !opts.delay;
    var reaction$$1;
    if (runSync) {
        // normal autorun
        reaction$$1 = new Reaction$$1(name, function () {
            this.track(reactionRunner);
        }, opts.onError);
    }
    else {
        var scheduler_1 = createSchedulerFromOptions(opts);
        // debounced autorun
        var isScheduled_1 = false;
        reaction$$1 = new Reaction$$1(name, function () {
            if (!isScheduled_1) {
                isScheduled_1 = true;
                scheduler_1(function () {
                    isScheduled_1 = false;
                    if (!reaction$$1.isDisposed)
                        reaction$$1.track(reactionRunner);
                });
            }
        }, opts.onError);
    }
    function reactionRunner() {
        view(reaction$$1);
    }
    reaction$$1.schedule();
    return reaction$$1.getDisposer();
}
var run = function (f) { return f(); };
function createSchedulerFromOptions(opts) {
    return opts.scheduler
        ? opts.scheduler
        : opts.delay
            ? function (f) { return setTimeout(f, opts.delay); }
            : run;
}
function reaction$$1(expression, effect, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT$$1; }
    if (false) {
        invariant$$1(typeof expression === "function", "First argument to reaction should be a function");
        invariant$$1(typeof opts === "object", "Third argument of reactions should be an object");
    }
    var name = opts.name || "Reaction@" + getNextId$$1();
    var effectAction = action$$1(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
    var runSync = !opts.scheduler && !opts.delay;
    var scheduler = createSchedulerFromOptions(opts);
    var firstTime = true;
    var isScheduled = false;
    var value;
    var equals = opts.compareStructural
        ? comparer$$1.structural
        : opts.equals || comparer$$1.default;
    var r = new Reaction$$1(name, function () {
        if (firstTime || runSync) {
            reactionRunner();
        }
        else if (!isScheduled) {
            isScheduled = true;
            scheduler(reactionRunner);
        }
    }, opts.onError);
    function reactionRunner() {
        isScheduled = false; // Q: move into reaction runner?
        if (r.isDisposed)
            return;
        var changed = false;
        r.track(function () {
            var nextValue = expression(r);
            changed = firstTime || !equals(value, nextValue);
            value = nextValue;
        });
        if (firstTime && opts.fireImmediately)
            effectAction(value, r);
        if (!firstTime && changed === true)
            effectAction(value, r);
        if (firstTime)
            firstTime = false;
    }
    r.schedule();
    return r.getDisposer();
}
function wrapErrorHandler(errorHandler, baseFn) {
    return function () {
        try {
            return baseFn.apply(this, arguments);
        }
        catch (e) {
            errorHandler.call(this, e);
        }
    };
}

function onBecomeObserved$$1(thing, arg2, arg3) {
    return interceptHook("onBecomeObserved", thing, arg2, arg3);
}
function onBecomeUnobserved$$1(thing, arg2, arg3) {
    return interceptHook("onBecomeUnobserved", thing, arg2, arg3);
}
function interceptHook(hook, thing, arg2, arg3) {
    var atom = typeof arg2 === "string" ? getAtom$$1(thing, arg2) : getAtom$$1(thing);
    var cb = typeof arg2 === "string" ? arg3 : arg2;
    var orig = atom[hook];
    if (typeof orig !== "function")
        return fail$$1("production" !== "production" && "Not an atom that can be (un)observed");
    atom[hook] = function () {
        orig.call(this);
        cb.call(this);
    };
    return function () {
        atom[hook] = orig;
    };
}

function configure$$1(options) {
    var enforceActions = options.enforceActions, computedRequiresReaction = options.computedRequiresReaction, disableErrorBoundaries = options.disableErrorBoundaries, reactionScheduler = options.reactionScheduler;
    if (enforceActions !== undefined) {
        if (typeof enforceActions === "boolean" || enforceActions === "strict")
            deprecated$$1("Deprecated value for 'enforceActions', use 'false' => '\"never\"', 'true' => '\"observed\"', '\"strict\"' => \"'always'\" instead");
        var ea = void 0;
        switch (enforceActions) {
            case true:
            case "observed":
                ea = true;
                break;
            case false:
            case "never":
                ea = false;
                break;
            case "strict":
            case "always":
                ea = "strict";
                break;
            default:
                fail$$1("Invalid value for 'enforceActions': '" + enforceActions + "', expected 'never', 'always' or 'observed'");
        }
        globalState$$1.enforceActions = ea;
        globalState$$1.allowStateChanges = ea === true || ea === "strict" ? false : true;
    }
    if (computedRequiresReaction !== undefined) {
        globalState$$1.computedRequiresReaction = !!computedRequiresReaction;
    }
    if (options.isolateGlobalState === true) {
        isolateGlobalState$$1();
    }
    if (disableErrorBoundaries !== undefined) {
        if (disableErrorBoundaries === true)
            console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled.");
        globalState$$1.disableErrorBoundaries = !!disableErrorBoundaries;
    }
    if (reactionScheduler) {
        setReactionScheduler$$1(reactionScheduler);
    }
}

function decorate$$1(thing, decorators) {
    "production" !== "production" &&
        invariant$$1(isPlainObject$$1(decorators), "Decorators should be a key value map");
    var target = typeof thing === "function" ? thing.prototype : thing;
    var _loop_1 = function (prop) {
        var propertyDecorators = decorators[prop];
        if (!Array.isArray(propertyDecorators)) {
            propertyDecorators = [propertyDecorators];
        }
        "production" !== "production" &&
            invariant$$1(propertyDecorators.every(function (decorator) { return typeof decorator === "function"; }), "Decorate: expected a decorator function or array of decorator functions for '" + prop + "'");
        var descriptor = Object.getOwnPropertyDescriptor(target, prop);
        var newDescriptor = propertyDecorators.reduce(function (accDescriptor, decorator) { return decorator(target, prop, accDescriptor); }, descriptor);
        if (newDescriptor)
            Object.defineProperty(target, prop, newDescriptor);
    };
    for (var prop in decorators) {
        _loop_1(prop);
    }
    return thing;
}

function extendObservable$$1(target, properties, decorators, options) {
    if (false) {
        invariant$$1(arguments.length >= 2 && arguments.length <= 4, "'extendObservable' expected 2-4 arguments");
        invariant$$1(typeof target === "object", "'extendObservable' expects an object as first argument");
        invariant$$1(!isObservableMap$$1(target), "'extendObservable' should not be used on maps, use map.merge instead");
    }
    options = asCreateObservableOptions$$1(options);
    var defaultDecorator = getDefaultDecoratorFromObjectOptions$$1(options);
    asObservableObject$$1(target, options.name, defaultDecorator.enhancer); // make sure object is observable, even without initial props
    if (properties)
        extendObservableObjectWithProperties$$1(target, properties, decorators, defaultDecorator);
    return target;
}
function getDefaultDecoratorFromObjectOptions$$1(options) {
    return options.defaultDecorator || (options.deep === false ? refDecorator$$1 : deepDecorator$$1);
}
function extendObservableObjectWithProperties$$1(target, properties, decorators, defaultDecorator) {
    if (false) {
        invariant$$1(!isObservable$$1(properties), "Extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540");
        if (decorators)
            for (var key in decorators)
                if (!(key in properties))
                    fail$$1("Trying to declare a decorator for unspecified property '" + key + "'");
    }
    startBatch$$1();
    try {
        for (var key in properties) {
            var descriptor = Object.getOwnPropertyDescriptor(properties, key);
            if (false) {
                if (Object.getOwnPropertyDescriptor(target, key))
                    fail$$1("'extendObservable' can only be used to introduce new properties. Use 'set' or 'decorate' instead. The property '" + key + "' already exists on '" + target + "'");
                if (isComputed$$1(descriptor.value))
                    fail$$1("Passing a 'computed' as initial property value is no longer supported by extendObservable. Use a getter or decorator instead");
            }
            var decorator = decorators && key in decorators
                ? decorators[key]
                : descriptor.get
                    ? computedDecorator$$1
                    : defaultDecorator;
            if (false)
                fail$$1("Not a valid decorator for '" + key + "', got: " + decorator);
            var resultDescriptor = decorator(target, key, descriptor, true);
            if (resultDescriptor // otherwise, assume already applied, due to `applyToInstance`
            )
                Object.defineProperty(target, key, resultDescriptor);
        }
    }
    finally {
        endBatch$$1();
    }
}

function getDependencyTree$$1(thing, property) {
    return nodeToDependencyTree(getAtom$$1(thing, property));
}
function nodeToDependencyTree(node) {
    var result = {
        name: node.name
    };
    if (node.observing && node.observing.length > 0)
        result.dependencies = unique$$1(node.observing).map(nodeToDependencyTree);
    return result;
}
function getObserverTree$$1(thing, property) {
    return nodeToObserverTree(getAtom$$1(thing, property));
}
function nodeToObserverTree(node) {
    var result = {
        name: node.name
    };
    if (hasObservers$$1(node))
        result.observers = Array.from(getObservers$$1(node)).map(nodeToObserverTree);
    return result;
}

var generatorId = 0;
function flow$$1(generator) {
    if (arguments.length !== 1)
        fail$$1("production" && "Flow expects one 1 argument and cannot be used as decorator");
    var name = generator.name || "<unnamed flow>";
    // Implementation based on https://github.com/tj/co/blob/master/index.js
    return function () {
        var ctx = this;
        var args = arguments;
        var runId = ++generatorId;
        var gen = action$$1(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
        var rejector;
        var pendingPromise = undefined;
        var res = new Promise(function (resolve, reject) {
            var stepId = 0;
            rejector = reject;
            function onFulfilled(res) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action$$1(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
                }
                catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function onRejected(err) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action$$1(name + " - runid: " + runId + " - yield " + stepId++, gen.throw).call(gen, err);
                }
                catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function next(ret) {
                if (ret && typeof ret.then === "function") {
                    // an async iterator
                    ret.then(next, reject);
                    return;
                }
                if (ret.done)
                    return resolve(ret.value);
                pendingPromise = Promise.resolve(ret.value);
                return pendingPromise.then(onFulfilled, onRejected);
            }
            onFulfilled(undefined); // kick off the process
        });
        res.cancel = action$$1(name + " - runid: " + runId + " - cancel", function () {
            try {
                if (pendingPromise)
                    cancelPromise(pendingPromise);
                // Finally block can return (or yield) stuff..
                var res_1 = gen.return();
                // eat anything that promise would do, it's cancelled!
                var yieldedPromise = Promise.resolve(res_1.value);
                yieldedPromise.then(noop$$1, noop$$1);
                cancelPromise(yieldedPromise); // maybe it can be cancelled :)
                // reject our original promise
                rejector(new Error("FLOW_CANCELLED"));
            }
            catch (e) {
                rejector(e); // there could be a throwing finally block
            }
        });
        return res;
    };
}
function cancelPromise(promise) {
    if (typeof promise.cancel === "function")
        promise.cancel();
}

function interceptReads$$1(thing, propOrHandler, handler) {
    var target;
    if (isObservableMap$$1(thing) || isObservableArray$$1(thing) || isObservableValue$$1(thing)) {
        target = getAdministration$$1(thing);
    }
    else if (isObservableObject$$1(thing)) {
        if (typeof propOrHandler !== "string")
            return fail$$1("production" !== "production" &&
                "InterceptReads can only be used with a specific property, not with an object in general");
        target = getAdministration$$1(thing, propOrHandler);
    }
    else {
        return fail$$1("production" !== "production" &&
            "Expected observable map, object or array as first array");
    }
    if (target.dehancer !== undefined)
        return fail$$1("production" !== "production" && "An intercept reader was already established");
    target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
    return function () {
        target.dehancer = undefined;
    };
}

function intercept$$1(thing, propOrHandler, handler) {
    if (typeof handler === "function")
        return interceptProperty(thing, propOrHandler, handler);
    else
        return interceptInterceptable(thing, propOrHandler);
}
function interceptInterceptable(thing, handler) {
    return getAdministration$$1(thing).intercept(handler);
}
function interceptProperty(thing, property, handler) {
    return getAdministration$$1(thing, property).intercept(handler);
}

function _isComputed$$1(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (isObservableObject$$1(value) === false)
            return false;
        if (!value[$mobx$$1].values.has(property))
            return false;
        var atom = getAtom$$1(value, property);
        return isComputedValue$$1(atom);
    }
    return isComputedValue$$1(value);
}
function isComputed$$1(value) {
    if (arguments.length > 1)
        return fail$$1("production" !== "production" &&
            "isComputed expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isComputed$$1(value);
}
function isComputedProp$$1(value, propName) {
    if (typeof propName !== "string")
        return fail$$1("production" !== "production" &&
            "isComputed expected a property name as second argument");
    return _isComputed$$1(value, propName);
}

function _isObservable(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (false)
            return fail$$1("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
        if (isObservableObject$$1(value)) {
            return value[$mobx$$1].values.has(property);
        }
        return false;
    }
    // For first check, see #701
    return (isObservableObject$$1(value) ||
        !!value[$mobx$$1] ||
        isAtom$$1(value) ||
        isReaction$$1(value) ||
        isComputedValue$$1(value));
}
function isObservable$$1(value) {
    if (arguments.length !== 1)
        fail$$1("production" !== "production" &&
            "isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isObservable(value);
}
function isObservableProp$$1(value, propName) {
    if (typeof propName !== "string")
        return fail$$1("production" !== "production" && "expected a property name as second argument");
    return _isObservable(value, propName);
}

function keys$$1(obj) {
    if (isObservableObject$$1(obj)) {
        return obj[$mobx$$1].getKeys();
    }
    if (isObservableMap$$1(obj)) {
        return Array.from(obj.keys());
    }
    if (isObservableArray$$1(obj)) {
        return obj.map(function (_, index) { return index; });
    }
    return fail$$1("production" !== "production" &&
        "'keys()' can only be used on observable objects, arrays and maps");
}
function values$$1(obj) {
    if (isObservableObject$$1(obj)) {
        return keys$$1(obj).map(function (key) { return obj[key]; });
    }
    if (isObservableMap$$1(obj)) {
        return keys$$1(obj).map(function (key) { return obj.get(key); });
    }
    if (isObservableArray$$1(obj)) {
        return obj.slice();
    }
    return fail$$1("production" !== "production" &&
        "'values()' can only be used on observable objects, arrays and maps");
}
function entries$$1(obj) {
    if (isObservableObject$$1(obj)) {
        return keys$$1(obj).map(function (key) { return [key, obj[key]]; });
    }
    if (isObservableMap$$1(obj)) {
        return keys$$1(obj).map(function (key) { return [key, obj.get(key)]; });
    }
    if (isObservableArray$$1(obj)) {
        return obj.map(function (key, index) { return [index, key]; });
    }
    return fail$$1("production" !== "production" &&
        "'entries()' can only be used on observable objects, arrays and maps");
}
function set$$1(obj, key, value) {
    if (arguments.length === 2) {
        startBatch$$1();
        var values_1 = key;
        try {
            for (var key_1 in values_1)
                set$$1(obj, key_1, values_1[key_1]);
        }
        finally {
            endBatch$$1();
        }
        return;
    }
    if (isObservableObject$$1(obj)) {
        var adm = obj[$mobx$$1];
        var existingObservable = adm.values.get(key);
        if (existingObservable) {
            adm.write(key, value);
        }
        else {
            adm.addObservableProp(key, value, adm.defaultEnhancer);
        }
    }
    else if (isObservableMap$$1(obj)) {
        obj.set(key, value);
    }
    else if (isObservableArray$$1(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant$$1(key >= 0, "Not a valid index: '" + key + "'");
        startBatch$$1();
        if (key >= obj.length)
            obj.length = key + 1;
        obj[key] = value;
        endBatch$$1();
    }
    else {
        return fail$$1("production" !== "production" &&
            "'set()' can only be used on observable objects, arrays and maps");
    }
}
function remove$$1(obj, key) {
    if (isObservableObject$$1(obj)) {
        
        obj[$mobx$$1].remove(key);
    }
    else if (isObservableMap$$1(obj)) {
        obj.delete(key);
    }
    else if (isObservableArray$$1(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant$$1(key >= 0, "Not a valid index: '" + key + "'");
        obj.splice(key, 1);
    }
    else {
        return fail$$1("production" !== "production" &&
            "'remove()' can only be used on observable objects, arrays and maps");
    }
}
function has$$1(obj, key) {
    if (isObservableObject$$1(obj)) {
        // return keys(obj).indexOf(key) >= 0
        var adm = getAdministration$$1(obj);
        return adm.has(key);
    }
    else if (isObservableMap$$1(obj)) {
        return obj.has(key);
    }
    else if (isObservableArray$$1(obj)) {
        return key >= 0 && key < obj.length;
    }
    else {
        return fail$$1("production" !== "production" &&
            "'has()' can only be used on observable objects, arrays and maps");
    }
}
function get$$1(obj, key) {
    if (!has$$1(obj, key))
        return undefined;
    if (isObservableObject$$1(obj)) {
        return obj[key];
    }
    else if (isObservableMap$$1(obj)) {
        return obj.get(key);
    }
    else if (isObservableArray$$1(obj)) {
        return obj[key];
    }
    else {
        return fail$$1("production" !== "production" &&
            "'get()' can only be used on observable objects, arrays and maps");
    }
}

function observe$$1(thing, propOrCb, cbOrFire, fireImmediately) {
    if (typeof cbOrFire === "function")
        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
    else
        return observeObservable(thing, propOrCb, cbOrFire);
}
function observeObservable(thing, listener, fireImmediately) {
    return getAdministration$$1(thing).observe(listener, fireImmediately);
}
function observeObservableProperty(thing, property, listener, fireImmediately) {
    return getAdministration$$1(thing, property).observe(listener, fireImmediately);
}

var defaultOptions = {
    detectCycles: true,
    exportMapsAsObjects: true
};
function cache(map, key, value, options) {
    if (options.detectCycles)
        map.set(key, value);
    return value;
}
function toJSHelper(source, options, __alreadySeen) {
    if (!isObservable$$1(source))
        return source;
    var detectCycles = options.detectCycles === true;
    if (detectCycles &&
        source !== null &&
        typeof source === "object" &&
        __alreadySeen.has(source)) {
        return __alreadySeen.get(source);
    }
    if (isObservableArray$$1(source)) {
        var res = cache(__alreadySeen, source, [], options);
        var toAdd = source.map(function (value) { return toJSHelper(value, options, __alreadySeen); });
        res.length = toAdd.length;
        for (var i = 0, l = toAdd.length; i < l; i++)
            res[i] = toAdd[i];
        return res;
    }
    if (isObservableObject$$1(source)) {
        var res = cache(__alreadySeen, source, {}, options);
        keys$$1(source); // make sure we track the keys of the object
        for (var key in source) {
            res[key] = toJSHelper(source[key], options, __alreadySeen);
        }
        return res;
    }
    if (isObservableMap$$1(source)) {
        if (options.exportMapsAsObjects === false) {
            var res_1 = cache(__alreadySeen, source, new Map(), options);
            source.forEach(function (value, key) {
                res_1.set(key, toJSHelper(value, options, __alreadySeen));
            });
            return res_1;
        }
        else {
            var res_2 = cache(__alreadySeen, source, {}, options);
            source.forEach(function (value, key) {
                res_2[key] = toJSHelper(value, options, __alreadySeen);
            });
            return res_2;
        }
    }
    if (isObservableValue$$1(source))
        return toJSHelper(source.get(), options, __alreadySeen);
    return source;
}
function toJS$$1(source, options) {
    if (!isObservable$$1(source))
        return source;
    // backward compatibility
    if (typeof options === "boolean")
        options = { detectCycles: options };
    if (!options)
        options = defaultOptions;
    var detectCycles = options.detectCycles === true;
    var __alreadySeen;
    if (detectCycles)
        __alreadySeen = new Map();
    return toJSHelper(source, options, __alreadySeen);
}

function trace$$1() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var enterBreakPoint = false;
    if (typeof args[args.length - 1] === "boolean")
        enterBreakPoint = args.pop();
    var derivation = getAtomFromArgs(args);
    if (!derivation) {
        return fail$$1("production" !== "production" &&
            "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    }
    if (derivation.isTracing === TraceMode$$1.NONE) {
        console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
    }
    derivation.isTracing = enterBreakPoint ? TraceMode$$1.BREAK : TraceMode$$1.LOG;
}
function getAtomFromArgs(args) {
    switch (args.length) {
        case 0:
            return globalState$$1.trackingDerivation;
        case 1:
            return getAtom$$1(args[0]);
        case 2:
            return getAtom$$1(args[0], args[1]);
    }
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */
function transaction$$1(action$$1, thisArg) {
    if (thisArg === void 0) { thisArg = undefined; }
    startBatch$$1();
    try {
        return action$$1.apply(thisArg);
    }
    finally {
        endBatch$$1();
    }
}

function when$$1(predicate, arg1, arg2) {
    if (arguments.length === 1 || (arg1 && typeof arg1 === "object"))
        return whenPromise(predicate, arg1);
    return _when(predicate, arg1, arg2 || {});
}
function _when(predicate, effect, opts) {
    var timeoutHandle;
    if (typeof opts.timeout === "number") {
        timeoutHandle = setTimeout(function () {
            if (!disposer[$mobx$$1].isDisposed) {
                disposer();
                var error = new Error("WHEN_TIMEOUT");
                if (opts.onError)
                    opts.onError(error);
                else
                    throw error;
            }
        }, opts.timeout);
    }
    opts.name = opts.name || "When@" + getNextId$$1();
    var effectAction = createAction$$1(opts.name + "-effect", effect);
    var disposer = autorun$$1(function (r) {
        if (predicate()) {
            r.dispose();
            if (timeoutHandle)
                clearTimeout(timeoutHandle);
            effectAction();
        }
    }, opts);
    return disposer;
}
function whenPromise(predicate, opts) {
    if (false)
        return fail$$1("the options 'onError' and 'promise' cannot be combined");
    var cancel;
    var res = new Promise(function (resolve, reject) {
        var disposer = _when(predicate, resolve, __assign({}, opts, { onError: reject }));
        cancel = function () {
            disposer();
            reject("WHEN_CANCELLED");
        };
    });
    res.cancel = cancel;
    return res;
}

function getAdm(target) {
    return target[$mobx$$1];
}
// Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
// and skip either the internal values map, or the base object with its property descriptors!
var objectProxyTraps = {
    has: function (target, name) {
        if (name === $mobx$$1 || name === "constructor" || name === mobxDidRunLazyInitializersSymbol$$1)
            return true;
        var adm = getAdm(target);
        if (adm.values.get(name))
            return true;
        if (typeof name === "string")
            return adm.has(name);
        return name in target;
    },
    get: function (target, name) {
        if (name === $mobx$$1 || name === "constructor" || name === mobxDidRunLazyInitializersSymbol$$1)
            return target[name];
        var adm = getAdm(target);
        var observable$$1 = adm.values.get(name);
        if (observable$$1 instanceof Atom$$1)
            return observable$$1.get();
        // make sure we start listening to future keys
        // note that we only do this here for optimization
        if (typeof name === "string")
            adm.has(name);
        return target[name];
    },
    set: function (target, name, value) {
        if (typeof name !== "string")
            return false;
        set$$1(target, name, value);
        return true;
    },
    deleteProperty: function (target, name) {
        if (typeof name !== "string")
            return false;
        var adm = getAdm(target);
        adm.remove(name);
        return true;
    },
    ownKeys: function (target) {
        var adm = getAdm(target);
        adm.keysAtom.reportObserved();
        return Reflect.ownKeys(target);
    },
    preventExtensions: function (target) {
        fail$$1("Dynamic observable objects cannot be frozen");
        return false;
    }
};
function createDynamicObservableObject$$1(base) {
    var proxy = new Proxy(base, objectProxyTraps);
    base[$mobx$$1].proxy = proxy;
    return proxy;
}

function hasInterceptors$$1(interceptable) {
    return interceptable.interceptors !== undefined && interceptable.interceptors.length > 0;
}
function registerInterceptor$$1(interceptable, handler) {
    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
    interceptors.push(handler);
    return once$$1(function () {
        var idx = interceptors.indexOf(handler);
        if (idx !== -1)
            interceptors.splice(idx, 1);
    });
}
function interceptChange$$1(interceptable, change) {
    var prevU = untrackedStart$$1();
    try {
        var interceptors = interceptable.interceptors;
        if (interceptors)
            for (var i = 0, l = interceptors.length; i < l; i++) {
                change = interceptors[i](change);
                invariant$$1(!change || change.type, "Intercept handlers should return nothing or a change object");
                if (!change)
                    break;
            }
        return change;
    }
    finally {
        untrackedEnd$$1(prevU);
    }
}

function hasListeners$$1(listenable) {
    return listenable.changeListeners !== undefined && listenable.changeListeners.length > 0;
}
function registerListener$$1(listenable, handler) {
    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
    listeners.push(handler);
    return once$$1(function () {
        var idx = listeners.indexOf(handler);
        if (idx !== -1)
            listeners.splice(idx, 1);
    });
}
function notifyListeners$$1(listenable, change) {
    var prevU = untrackedStart$$1();
    var listeners = listenable.changeListeners;
    if (!listeners)
        return;
    listeners = listeners.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i](change);
    }
    untrackedEnd$$1(prevU);
}

var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
var arrayTraps = {
    get: function (target, name) {
        if (name === $mobx$$1)
            return target[$mobx$$1];
        if (name === "length")
            return target[$mobx$$1].getArrayLength();
        if (typeof name === "number") {
            return arrayExtensions.get.call(target, name);
        }
        if (typeof name === "string" && !isNaN(name)) {
            return arrayExtensions.get.call(target, parseInt(name));
        }
        if (arrayExtensions.hasOwnProperty(name)) {
            return arrayExtensions[name];
        }
        return target[name];
    },
    set: function (target, name, value) {
        if (name === "length") {
            target[$mobx$$1].setArrayLength(value);
            return true;
        }
        if (typeof name === "number") {
            arrayExtensions.set.call(target, name, value);
            return true;
        }
        if (!isNaN(name)) {
            arrayExtensions.set.call(target, parseInt(name), value);
            return true;
        }
        return false;
    },
    preventExtensions: function (target) {
        fail$$1("Observable arrays cannot be frozen");
        return false;
    }
};
function createObservableArray$$1(initialValues, enhancer, name, owned) {
    if (name === void 0) { name = "ObservableArray@" + getNextId$$1(); }
    if (owned === void 0) { owned = false; }
    var adm = new ObservableArrayAdministration(name, enhancer, owned);
    addHiddenFinalProp$$1(adm.values, $mobx$$1, adm);
    var proxy = new Proxy(adm.values, arrayTraps);
    adm.proxy = proxy;
    if (initialValues && initialValues.length) {
        var prev = allowStateChangesStart$$1(true);
        adm.spliceWithArray(0, 0, initialValues);
        allowStateChangesEnd$$1(prev);
    }
    return proxy;
}
var ObservableArrayAdministration = /** @class */ (function () {
    function ObservableArrayAdministration(name, enhancer, owned) {
        this.owned = owned;
        this.values = [];
        this.proxy = undefined;
        this.lastKnownLength = 0;
        this.atom = new Atom$$1(name || "ObservableArray@" + getNextId$$1());
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name + "[..]"); };
    }
    ObservableArrayAdministration.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableArrayAdministration.prototype.dehanceValues = function (values$$1) {
        if (this.dehancer !== undefined && this.values.length > 0)
            return values$$1.map(this.dehancer);
        return values$$1;
    };
    ObservableArrayAdministration.prototype.intercept = function (handler) {
        return registerInterceptor$$1(this, handler);
    };
    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        if (fireImmediately) {
            listener({
                object: this.proxy,
                type: "splice",
                index: 0,
                added: this.values.slice(),
                addedCount: this.values.length,
                removed: [],
                removedCount: 0
            });
        }
        return registerListener$$1(this, listener);
    };
    ObservableArrayAdministration.prototype.getArrayLength = function () {
        this.atom.reportObserved();
        return this.values.length;
    };
    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
        if (typeof newLength !== "number" || newLength < 0)
            throw new Error("[mobx.array] Out of range: " + newLength);
        var currentLength = this.values.length;
        if (newLength === currentLength)
            return;
        else if (newLength > currentLength) {
            var newItems = new Array(newLength - currentLength);
            for (var i = 0; i < newLength - currentLength; i++)
                newItems[i] = undefined; // No Array.fill everywhere...
            this.spliceWithArray(currentLength, 0, newItems);
        }
        else
            this.spliceWithArray(newLength, currentLength - newLength);
    };
    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
        if (oldLength !== this.lastKnownLength)
            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed.");
        this.lastKnownLength += delta;
    };
    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        var _this = this;
        checkIfStateModificationsAreAllowed$$1(this.atom);
        var length = this.values.length;
        if (index === undefined)
            index = 0;
        else if (index > length)
            index = length;
        else if (index < 0)
            index = Math.max(0, length + index);
        if (arguments.length === 1)
            deleteCount = length - index;
        else if (deleteCount === undefined || deleteCount === null)
            deleteCount = 0;
        else
            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
        if (newItems === undefined)
            newItems = EMPTY_ARRAY$$1;
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                object: this.proxy,
                type: "splice",
                index: index,
                removedCount: deleteCount,
                added: newItems
            });
            if (!change)
                return EMPTY_ARRAY$$1;
            deleteCount = change.removedCount;
            newItems = change.added;
        }
        newItems = newItems.length === 0 ? newItems : newItems.map(function (v) { return _this.enhancer(v, undefined); });
        if (false) {
            var lengthDelta = newItems.length - deleteCount;
            this.updateArrayLength(length, lengthDelta); // checks if internal array wasn't modified
        }
        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
        if (deleteCount !== 0 || newItems.length !== 0)
            this.notifyArraySplice(index, newItems, res);
        return this.dehanceValues(res);
    };
    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
        var _a;
        if (newItems.length < MAX_SPLICE_SIZE) {
            return (_a = this.values).splice.apply(_a, __spread([index, deleteCount], newItems));
        }
        else {
            var res = this.values.slice(index, index + deleteCount);
            this.values = this.values
                .slice(0, index)
                .concat(newItems, this.values.slice(index + deleteCount));
            return res;
        }
    };
    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
        var notifySpy = !this.owned && isSpyEnabled$$1();
        var notify = hasListeners$$1(this);
        var change = notify || notifySpy
            ? {
                object: this.proxy,
                type: "update",
                index: index,
                newValue: newValue,
                oldValue: oldValue
            }
            : null;
        // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
        // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled
        if (notifySpy && "production" !== "production")
            spyReportStart$$1(__assign({}, change, { name: this.atom.name }));
        this.atom.reportChanged();
        if (notify)
            notifyListeners$$1(this, change);
        if (notifySpy && "production" !== "production")
            spyReportEnd$$1();
    };
    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
        var notifySpy = !this.owned && isSpyEnabled$$1();
        var notify = hasListeners$$1(this);
        var change = notify || notifySpy
            ? {
                object: this.proxy,
                type: "splice",
                index: index,
                removed: removed,
                added: added,
                removedCount: removed.length,
                addedCount: added.length
            }
            : null;
        if (notifySpy && "production" !== "production")
            spyReportStart$$1(__assign({}, change, { name: this.atom.name }));
        this.atom.reportChanged();
        // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
        if (notify)
            notifyListeners$$1(this, change);
        if (notifySpy && "production" !== "production")
            spyReportEnd$$1();
    };
    return ObservableArrayAdministration;
}());
var arrayExtensions = {
    intercept: function (handler) {
        return this[$mobx$$1].intercept(handler);
    },
    observe: function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        var adm = this[$mobx$$1];
        return adm.observe(listener, fireImmediately);
    },
    clear: function () {
        return this.splice(0);
    },
    replace: function (newItems) {
        var adm = this[$mobx$$1];
        return adm.spliceWithArray(0, adm.values.length, newItems);
    },
    /**
     * Converts this array back to a (shallow) javascript structure.
     * For a deep clone use mobx.toJS
     */
    toJS: function () {
        return this.slice();
    },
    toJSON: function () {
        // Used by JSON.stringify
        return this.toJS();
    },
    /*
     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
     * since these functions alter the inner structure of the array, the have side effects.
     * Because the have side effects, they should not be used in computed function,
     * and for that reason the do not call dependencyState.notifyObserved
     */
    splice: function (index, deleteCount) {
        var newItems = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            newItems[_i - 2] = arguments[_i];
        }
        var adm = this[$mobx$$1];
        switch (arguments.length) {
            case 0:
                return [];
            case 1:
                return adm.spliceWithArray(index);
            case 2:
                return adm.spliceWithArray(index, deleteCount);
        }
        return adm.spliceWithArray(index, deleteCount, newItems);
    },
    spliceWithArray: function (index, deleteCount, newItems) {
        var adm = this[$mobx$$1];
        return adm.spliceWithArray(index, deleteCount, newItems);
    },
    push: function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this[$mobx$$1];
        adm.spliceWithArray(adm.values.length, 0, items);
        return adm.values.length;
    },
    pop: function () {
        return this.splice(Math.max(this[$mobx$$1].values.length - 1, 0), 1)[0];
    },
    shift: function () {
        return this.splice(0, 1)[0];
    },
    unshift: function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this[$mobx$$1];
        adm.spliceWithArray(0, 0, items);
        return adm.values.length;
    },
    reverse: function () {
        // reverse by default mutates in place before returning the result
        // which makes it both a 'derivation' and a 'mutation'.
        // so we deviate from the default and just make it an dervitation
        if (false) {
            console.warn("[mobx] `observableArray.reverse()` will not update the array in place. Use `observableArray.slice().reverse()` to supress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().reverse())` to reverse & update in place");
        }
        var clone = this.slice();
        return clone.reverse.apply(clone, arguments);
    },
    sort: function (compareFn) {
        // sort by default mutates in place before returning the result
        // which goes against all good practices. Let's not change the array in place!
        if (false) {
            console.warn("[mobx] `observableArray.sort()` will not update the array in place. Use `observableArray.slice().sort()` to supress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().sort())` to sort & update in place");
        }
        var clone = this.slice();
        return clone.sort.apply(clone, arguments);
    },
    remove: function (value) {
        var adm = this[$mobx$$1];
        var idx = adm.dehanceValues(adm.values).indexOf(value);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    },
    get: function (index) {
        var adm = this[$mobx$$1];
        if (adm) {
            if (index < adm.values.length) {
                adm.atom.reportObserved();
                return adm.dehanceValue(adm.values[index]);
            }
            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + adm.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
        }
        return undefined;
    },
    set: function (index, newValue) {
        var adm = this[$mobx$$1];
        var values$$1 = adm.values;
        if (index < values$$1.length) {
            // update at index in range
            checkIfStateModificationsAreAllowed$$1(adm.atom);
            var oldValue = values$$1[index];
            if (hasInterceptors$$1(adm)) {
                var change = interceptChange$$1(adm, {
                    type: "update",
                    object: this,
                    index: index,
                    newValue: newValue
                });
                if (!change)
                    return;
                newValue = change.newValue;
            }
            newValue = adm.enhancer(newValue, oldValue);
            var changed = newValue !== oldValue;
            if (changed) {
                values$$1[index] = newValue;
                adm.notifyArrayChildUpdate(index, newValue, oldValue);
            }
        }
        else if (index === values$$1.length) {
            // add a new item
            adm.spliceWithArray(index, 0, [newValue]);
        }
        else {
            // out of bounds
            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values$$1.length);
        }
    }
};
[
    "concat",
    "every",
    "filter",
    "forEach",
    "indexOf",
    "join",
    "lastIndexOf",
    "map",
    "reduce",
    "reduceRight",
    "slice",
    "some",
    "toString",
    "toLocaleString"
].forEach(function (funcName) {
    arrayExtensions[funcName] = function () {
        var adm = this[$mobx$$1];
        adm.atom.reportObserved();
        var res = adm.dehanceValues(adm.values);
        return res[funcName].apply(res, arguments);
    };
});
var isObservableArrayAdministration = createInstanceofPredicate$$1("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray$$1(thing) {
    return isObject$$1(thing) && isObservableArrayAdministration(thing[$mobx$$1]);
}

var _a;
var ObservableMapMarker = {};
// just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
// But: https://github.com/mobxjs/mobx/issues/1556
var ObservableMap$$1 = /** @class */ (function () {
    function ObservableMap$$1(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer$$1; }
        if (name === void 0) { name = "ObservableMap@" + getNextId$$1(); }
        this.enhancer = enhancer;
        this.name = name;
        this[_a] = ObservableMapMarker;
        this._keysAtom = createAtom$$1(this.name + ".keys()");
        this[Symbol.toStringTag] = "Map";
        if (typeof Map !== "function") {
            throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
        }
        this._data = new Map();
        this._hasMap = new Map();
        this.merge(initialData);
    }
    ObservableMap$$1.prototype._has = function (key) {
        return this._data.has(key);
    };
    ObservableMap$$1.prototype.has = function (key) {
        if (this._hasMap.has(key))
            return this._hasMap.get(key).get();
        return this._updateHasMapEntry(key, false).get();
    };
    ObservableMap$$1.prototype.set = function (key, value) {
        var hasKey = this._has(key);
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                type: hasKey ? "update" : "add",
                object: this,
                newValue: value,
                name: key
            });
            if (!change)
                return this;
            value = change.newValue;
        }
        if (hasKey) {
            this._updateValue(key, value);
        }
        else {
            this._addValue(key, value);
        }
        return this;
    };
    ObservableMap$$1.prototype.delete = function (key) {
        var _this = this;
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                type: "delete",
                object: this,
                name: key
            });
            if (!change)
                return false;
        }
        if (this._has(key)) {
            var notifySpy = isSpyEnabled$$1();
            var notify = hasListeners$$1(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: this._data.get(key).value,
                    name: key
                }
                : null;
            if (notifySpy && "production" !== "production")
                spyReportStart$$1(__assign({}, change, { name: this.name, key: key }));
            transaction$$1(function () {
                _this._keysAtom.reportChanged();
                _this._updateHasMapEntry(key, false);
                var observable$$1 = _this._data.get(key);
                observable$$1.setNewValue(undefined);
                _this._data.delete(key);
            });
            if (notify)
                notifyListeners$$1(this, change);
            if (notifySpy && "production" !== "production")
                spyReportEnd$$1();
            return true;
        }
        return false;
    };
    ObservableMap$$1.prototype._updateHasMapEntry = function (key, value) {
        // optimization; don't fill the hasMap if we are not observing, or remove entry if there are no observers anymore
        var entry = this._hasMap.get(key);
        if (entry) {
            entry.setNewValue(value);
        }
        else {
            entry = new ObservableValue$$1(value, referenceEnhancer$$1, this.name + "." + key + "?", false);
            this._hasMap.set(key, entry);
        }
        return entry;
    };
    ObservableMap$$1.prototype._updateValue = function (key, newValue) {
        var observable$$1 = this._data.get(key);
        newValue = observable$$1.prepareNewValue(newValue);
        if (newValue !== UNCHANGED$$1) {
            var notifySpy = isSpyEnabled$$1();
            var notify = hasListeners$$1(this);
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this,
                    oldValue: observable$$1.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy && "production" !== "production")
                spyReportStart$$1(__assign({}, change, { name: this.name, key: key }));
            observable$$1.setNewValue(newValue);
            if (notify)
                notifyListeners$$1(this, change);
            if (notifySpy && "production" !== "production")
                spyReportEnd$$1();
        }
    };
    ObservableMap$$1.prototype._addValue = function (key, newValue) {
        var _this = this;
        checkIfStateModificationsAreAllowed$$1(this._keysAtom);
        transaction$$1(function () {
            var observable$$1 = new ObservableValue$$1(newValue, _this.enhancer, _this.name + "." + key, false);
            _this._data.set(key, observable$$1);
            newValue = observable$$1.value; // value might have been changed
            _this._updateHasMapEntry(key, true);
            _this._keysAtom.reportChanged();
        });
        var notifySpy = isSpyEnabled$$1();
        var notify = hasListeners$$1(this);
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this,
                name: key,
                newValue: newValue
            }
            : null;
        if (notifySpy && "production" !== "production")
            spyReportStart$$1(__assign({}, change, { name: this.name, key: key }));
        if (notify)
            notifyListeners$$1(this, change);
        if (notifySpy && "production" !== "production")
            spyReportEnd$$1();
    };
    ObservableMap$$1.prototype.get = function (key) {
        if (this.has(key))
            return this.dehanceValue(this._data.get(key).get());
        return this.dehanceValue(undefined);
    };
    ObservableMap$$1.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableMap$$1.prototype.keys = function () {
        this._keysAtom.reportObserved();
        return this._data.keys();
    };
    ObservableMap$$1.prototype.values = function () {
        var self = this;
        var nextIndex = 0;
        var keys$$1 = Array.from(this.keys());
        return makeIterable({
            next: function () {
                return nextIndex < keys$$1.length
                    ? { value: self.get(keys$$1[nextIndex++]), done: false }
                    : { done: true };
            }
        });
    };
    ObservableMap$$1.prototype.entries = function () {
        var self = this;
        var nextIndex = 0;
        var keys$$1 = Array.from(this.keys());
        return makeIterable({
            next: function () {
                if (nextIndex < keys$$1.length) {
                    var key = keys$$1[nextIndex++];
                    return {
                        value: [key, self.get(key)],
                        done: false
                    };
                }
                return { done: true };
            }
        });
    };
    ObservableMap$$1.prototype[(_a = $mobx$$1, Symbol.iterator)] = function () {
        return this.entries();
    };
    ObservableMap$$1.prototype.forEach = function (callback, thisArg) {
        var e_1, _a;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                callback.call(thisArg, value, key, this);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /** Merge another object into this object, returns this. */
    ObservableMap$$1.prototype.merge = function (other) {
        var _this = this;
        if (isObservableMap$$1(other)) {
            other = other.toJS();
        }
        transaction$$1(function () {
            if (isPlainObject$$1(other))
                Object.keys(other).forEach(function (key) { return _this.set(key, other[key]); });
            else if (Array.isArray(other))
                other.forEach(function (_a) {
                    var _b = __read(_a, 2), key = _b[0], value = _b[1];
                    return _this.set(key, value);
                });
            else if (isES6Map$$1(other))
                other.forEach(function (value, key) { return _this.set(key, value); });
            else if (other !== null && other !== undefined)
                fail$$1("Cannot initialize map from " + other);
        });
        return this;
    };
    ObservableMap$$1.prototype.clear = function () {
        var _this = this;
        transaction$$1(function () {
            untracked$$1(function () {
                var e_2, _a;
                try {
                    for (var _b = __values(_this.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var key = _c.value;
                        _this.delete(key);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            });
        });
    };
    ObservableMap$$1.prototype.replace = function (values$$1) {
        var _this = this;
        transaction$$1(function () {
            // grab all the keys that are present in the new map but not present in the current map
            // and delete them from the map, then merge the new map
            // this will cause reactions only on changed values
            var newKeys = getMapLikeKeys$$1(values$$1);
            var oldKeys = Array.from(_this.keys());
            var missingKeys = oldKeys.filter(function (k) { return newKeys.indexOf(k) === -1; });
            missingKeys.forEach(function (k) { return _this.delete(k); });
            _this.merge(values$$1);
        });
        return this;
    };
    Object.defineProperty(ObservableMap$$1.prototype, "size", {
        get: function () {
            this._keysAtom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a plain object that represents this map.
     * Note that all the keys being stringified.
     * If there are duplicating keys after converting them to strings, behaviour is undetermined.
     */
    ObservableMap$$1.prototype.toPOJO = function () {
        var e_3, _a;
        var res = {};
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                res["" + key] = value;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return res;
    };
    /**
     * Returns a shallow non observable object clone of this map.
     * Note that the values migth still be observable. For a deep clone use mobx.toJS.
     */
    ObservableMap$$1.prototype.toJS = function () {
        return new Map(this);
    };
    ObservableMap$$1.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toPOJO();
    };
    ObservableMap$$1.prototype.toString = function () {
        var _this = this;
        return (this.name +
            "[{ " +
            Array.from(this.keys())
                .map(function (key) { return key + ": " + ("" + _this.get(key)); })
                .join(", ") +
            " }]");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableMap$$1.prototype.observe = function (listener, fireImmediately) {
        "production" !== "production" &&
            invariant$$1(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with maps.");
        return registerListener$$1(this, listener);
    };
    ObservableMap$$1.prototype.intercept = function (handler) {
        return registerInterceptor$$1(this, handler);
    };
    return ObservableMap$$1;
}());
/* 'var' fixes small-build issue */
var isObservableMap$$1 = createInstanceofPredicate$$1("ObservableMap", ObservableMap$$1);

var ObservableObjectAdministration$$1 = /** @class */ (function () {
    function ObservableObjectAdministration$$1(target, values$$1, name, defaultEnhancer) {
        if (values$$1 === void 0) { values$$1 = new Map(); }
        this.target = target;
        this.values = values$$1;
        this.name = name;
        this.defaultEnhancer = defaultEnhancer;
        this.keysAtom = new Atom$$1(name + ".keys");
    }
    ObservableObjectAdministration$$1.prototype.read = function (key) {
        return this.values.get(key).get();
    };
    ObservableObjectAdministration$$1.prototype.write = function (key, newValue) {
        var instance = this.target;
        var observable$$1 = this.values.get(key);
        if (observable$$1 instanceof ComputedValue$$1) {
            observable$$1.set(newValue);
            return;
        }
        // intercept
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                type: "update",
                object: this.proxy || instance,
                name: key,
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        newValue = observable$$1.prepareNewValue(newValue);
        // notify spy & observers
        if (newValue !== UNCHANGED$$1) {
            var notify = hasListeners$$1(this);
            var notifySpy = isSpyEnabled$$1();
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this.proxy || instance,
                    oldValue: observable$$1.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy && "production" !== "production")
                spyReportStart$$1(__assign({}, change, { name: this.name, key: key }));
            observable$$1.setNewValue(newValue);
            if (notify)
                notifyListeners$$1(this, change);
            if (notifySpy && "production" !== "production")
                spyReportEnd$$1();
        }
    };
    ObservableObjectAdministration$$1.prototype.has = function (key) {
        if (this.values.get(key) instanceof ObservableValue$$1)
            return true;
        else {
            this.waitForKey(key);
            return false;
        }
    };
    ObservableObjectAdministration$$1.prototype.waitForKey = function (key) {
        var map = this.pendingKeys || (this.pendingKeys = new Map());
        var entry = map.get(key);
        if (!entry) {
            entry = new ObservableValue$$1(false, referenceEnhancer$$1, this.name + "." + key.toString() + "?", false);
            map.set(key, entry);
        }
        entry.get(); // read to subscribe
    };
    ObservableObjectAdministration$$1.prototype.addObservableProp = function (propName, newValue, enhancer) {
        if (enhancer === void 0) { enhancer = this.defaultEnhancer; }
        var target = this.target;
        assertPropertyConfigurable$$1(target, propName);
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                object: this.proxy || target,
                name: propName,
                type: "add",
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        var observable$$1 = new ObservableValue$$1(newValue, enhancer, this.name + "." + propName, false);
        this.values.set(propName, observable$$1);
        newValue = observable$$1.value; // observableValue might have changed it
        Object.defineProperty(target, propName, generateObservablePropConfig$$1(propName));
        this.notifyPropertyAddition(propName, newValue);
    };
    ObservableObjectAdministration$$1.prototype.addComputedProp = function (propertyOwner, // where is the property declared?
    propName, options) {
        var target = this.target;
        options.name = options.name || this.name + "." + propName;
        this.values.set(propName, new ComputedValue$$1(options));
        if (propertyOwner === target || isPropertyConfigurable$$1(propertyOwner, propName))
            Object.defineProperty(propertyOwner, propName, generateComputedPropConfig$$1(propName));
    };
    ObservableObjectAdministration$$1.prototype.remove = function (key) {
        if (!this.values.has(key))
            return;
        var target = this.target;
        if (hasInterceptors$$1(this)) {
            var change = interceptChange$$1(this, {
                object: this.proxy || target,
                name: key,
                type: "remove"
            });
            if (!change)
                return;
        }
        try {
            startBatch$$1();
            var notify = hasListeners$$1(this);
            var notifySpy = isSpyEnabled$$1();
            var oldObservable = this.values.get(key);
            var oldValue = oldObservable && oldObservable.get();
            oldObservable && oldObservable.set(undefined);
            this.keysAtom.reportChanged();
            this.values.delete(key);
            delete this.target[key];
            var change = notify || notifySpy
                ? {
                    type: "remove",
                    object: this.proxy || target,
                    oldValue: oldValue,
                    name: key
                }
                : null;
            if (notifySpy && "production" !== "production")
                spyReportStart$$1(__assign({}, change, { name: this.name, key: key }));
            if (notify)
                notifyListeners$$1(this, change);
            if (notifySpy && "production" !== "production")
                spyReportEnd$$1();
        }
        finally {
            endBatch$$1();
        }
    };
    ObservableObjectAdministration$$1.prototype.illegalAccess = function (owner, propName) {
        /**
         * This happens if a property is accessed through the prototype chain, but the property was
         * declared directly as own property on the prototype.
         *
         * E.g.:
         * class A {
         * }
         * extendObservable(A.prototype, { x: 1 })
         *
         * classB extens A {
         * }
         * console.log(new B().x)
         *
         * It is unclear whether the property should be considered 'static' or inherited.
         * Either use `console.log(A.x)`
         * or: decorate(A, { x: observable })
         *
         * When using decorate, the property will always be redeclared as own property on the actual instance
         */
        console.warn("Property '" + propName + "' of '" + owner + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableObjectAdministration$$1.prototype.observe = function (callback, fireImmediately) {
        "production" !== "production" &&
            invariant$$1(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
        return registerListener$$1(this, callback);
    };
    ObservableObjectAdministration$$1.prototype.intercept = function (handler) {
        return registerInterceptor$$1(this, handler);
    };
    ObservableObjectAdministration$$1.prototype.notifyPropertyAddition = function (key, newValue) {
        var notify = hasListeners$$1(this);
        var notifySpy = isSpyEnabled$$1();
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this.proxy || this.target,
                name: key,
                newValue: newValue
            }
            : null;
        if (notifySpy && "production" !== "production")
            spyReportStart$$1(__assign({}, change, { name: this.name, key: key }));
        if (notify)
            notifyListeners$$1(this, change);
        if (notifySpy && "production" !== "production")
            spyReportEnd$$1();
        if (this.pendingKeys) {
            var entry = this.pendingKeys.get(key);
            if (entry)
                entry.set(true);
        }
        this.keysAtom.reportChanged();
    };
    ObservableObjectAdministration$$1.prototype.getKeys = function () {
        var e_1, _a;
        this.keysAtom.reportObserved();
        // return Reflect.ownKeys(this.values) as any
        var res = [];
        try {
            for (var _b = __values(this.values), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                if (value instanceof ObservableValue$$1)
                    res.push(key);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return res;
    };
    return ObservableObjectAdministration$$1;
}());
function asObservableObject$$1(target, name, defaultEnhancer) {
    if (name === void 0) { name = ""; }
    if (defaultEnhancer === void 0) { defaultEnhancer = deepEnhancer$$1; }
    if (Object.prototype.hasOwnProperty.call(target, $mobx$$1))
        return target[$mobx$$1];
    "production" !== "production" &&
        invariant$$1(Object.isExtensible(target), "Cannot make the designated object observable; it is not extensible");
    if (!isPlainObject$$1(target))
        name = (target.constructor.name || "ObservableObject") + "@" + getNextId$$1();
    if (!name)
        name = "ObservableObject@" + getNextId$$1();
    var adm = new ObservableObjectAdministration$$1(target, new Map(), name, defaultEnhancer);
    addHiddenProp$$1(target, $mobx$$1, adm);
    return adm;
}
var observablePropertyConfigs = Object.create(null);
var computedPropertyConfigs = Object.create(null);
function generateObservablePropConfig$$1(propName) {
    return (observablePropertyConfigs[propName] ||
        (observablePropertyConfigs[propName] = {
            configurable: true,
            enumerable: true,
            get: function () {
                return this[$mobx$$1].read(propName);
            },
            set: function (v) {
                this[$mobx$$1].write(propName, v);
            }
        }));
}
function getAdministrationForComputedPropOwner(owner) {
    var adm = owner[$mobx$$1];
    if (!adm) {
        // because computed props are declared on proty,
        // the current instance might not have been initialized yet
        initializeInstance$$1(owner);
        return owner[$mobx$$1];
    }
    return adm;
}
function generateComputedPropConfig$$1(propName) {
    return (computedPropertyConfigs[propName] ||
        (computedPropertyConfigs[propName] = {
            configurable: true,
            enumerable: false,
            get: function () {
                return getAdministrationForComputedPropOwner(this).read(propName);
            },
            set: function (v) {
                getAdministrationForComputedPropOwner(this).write(propName, v);
            }
        }));
}
var isObservableObjectAdministration = createInstanceofPredicate$$1("ObservableObjectAdministration", ObservableObjectAdministration$$1);
function isObservableObject$$1(thing) {
    if (isObject$$1(thing)) {
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance$$1(thing);
        return isObservableObjectAdministration(thing[$mobx$$1]);
    }
    return false;
}

function getAtom$$1(thing, property) {
    if (typeof thing === "object" && thing !== null) {
        if (isObservableArray$$1(thing)) {
            if (property !== undefined)
                fail$$1("production" !== "production" &&
                    "It is not possible to get index atoms from arrays");
            return thing[$mobx$$1].atom;
        }
        if (isObservableMap$$1(thing)) {
            var anyThing = thing;
            if (property === undefined)
                return anyThing._keysAtom;
            var observable$$1 = anyThing._data.get(property) || anyThing._hasMap.get(property);
            if (!observable$$1)
                fail$$1("production" !== "production" &&
                    "the entry '" + property + "' does not exist in the observable map '" + getDebugName$$1(thing) + "'");
            return observable$$1;
        }
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance$$1(thing);
        if (property && !thing[$mobx$$1])
            thing[property]; // See #1072
        if (isObservableObject$$1(thing)) {
            if (!property)
                return fail$$1("production" !== "production" && "please specify a property");
            var observable$$1 = thing[$mobx$$1].values.get(property);
            if (!observable$$1)
                fail$$1("production" !== "production" &&
                    "no observable property '" + property + "' found on the observable object '" + getDebugName$$1(thing) + "'");
            return observable$$1;
        }
        if (isAtom$$1(thing) || isComputedValue$$1(thing) || isReaction$$1(thing)) {
            return thing;
        }
    }
    else if (typeof thing === "function") {
        if (isReaction$$1(thing[$mobx$$1])) {
            // disposer function
            return thing[$mobx$$1];
        }
    }
    return fail$$1("production" !== "production" && "Cannot obtain atom from " + thing);
}
function getAdministration$$1(thing, property) {
    if (!thing)
        fail$$1("Expecting some object");
    if (property !== undefined)
        return getAdministration$$1(getAtom$$1(thing, property));
    if (isAtom$$1(thing) || isComputedValue$$1(thing) || isReaction$$1(thing))
        return thing;
    if (isObservableMap$$1(thing))
        return thing;
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    initializeInstance$$1(thing);
    if (thing[$mobx$$1])
        return thing[$mobx$$1];
    fail$$1("production" !== "production" && "Cannot obtain administration from " + thing);
}
function getDebugName$$1(thing, property) {
    var named;
    if (property !== undefined)
        named = getAtom$$1(thing, property);
    else if (isObservableObject$$1(thing) || isObservableMap$$1(thing))
        named = getAdministration$$1(thing);
    else
        named = getAtom$$1(thing); // valid for arrays as well
    return named.name;
}

var toString = Object.prototype.toString;
function deepEqual$$1(a, b) {
    return eq(a, b);
}
// Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.
function eq(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b)
        return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null)
        return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a)
        return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== "function" && type !== "object" && typeof b != "object")
        return false;
    return deepEq(a, b, aStack, bStack);
}
// Internal recursive comparison function for `isEqual`.
function deepEq(a, b, aStack, bStack) {
    // Unwrap any wrapped objects.
    a = unwrap(a);
    b = unwrap(b);
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b))
        return false;
    switch (className) {
        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
        case "[object RegExp]":
        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
        case "[object String]":
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return "" + a === "" + b;
        case "[object Number]":
            // `NaN`s are equivalent, but non-reflexive.
            // Object(NaN) is equivalent to NaN.
            if (+a !== +a)
                return +b !== +b;
            // An `egal` comparison is performed for other numeric values.
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case "[object Date]":
        case "[object Boolean]":
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a === +b;
        case "[object Symbol]":
            return (typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b));
    }
    var areArrays = className === "[object Array]";
    if (!areArrays) {
        if (typeof a != "object" || typeof b != "object")
            return false;
        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor &&
            !(typeof aCtor === "function" &&
                aCtor instanceof aCtor &&
                typeof bCtor === "function" &&
                bCtor instanceof bCtor) &&
            ("constructor" in a && "constructor" in b)) {
            return false;
        }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] === a)
            return bStack[length] === b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    // Recursively compare objects and arrays.
    if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        length = a.length;
        if (length !== b.length)
            return false;
        // Deep compare the contents, ignoring non-numeric properties.
        while (length--) {
            if (!eq(a[length], b[length], aStack, bStack))
                return false;
        }
    }
    else {
        // Deep compare objects.
        var keys$$1 = Object.keys(a), key;
        length = keys$$1.length;
        // Ensure that both objects contain the same number of properties before comparing deep equality.
        if (Object.keys(b).length !== length)
            return false;
        while (length--) {
            // Deep compare each member
            key = keys$$1[length];
            if (!(has$1(b, key) && eq(a[key], b[key], aStack, bStack)))
                return false;
        }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
}
function unwrap(a) {
    if (isObservableArray$$1(a))
        return a.slice();
    if (isES6Map$$1(a) || isObservableMap$$1(a))
        return Array.from(a.entries());
    return a;
}
function has$1(a, key) {
    return Object.prototype.hasOwnProperty.call(a, key);
}

function makeIterable(iterator) {
    iterator[Symbol.iterator] = self;
    return iterator;
}
function self() {
    return this;
}

/*
The only reason for this file to exist is pure horror:
Without it rollup can make the bundling fail at any point in time; when it rolls up the files in the wrong order
it will cause undefined errors (for example because super classes or local variables not being hosted).
With this file that will still happen,
but at least in this file we can magically reorder the imports with trial and error until the build succeeds again.
*/

/**
 * (c) Michel Weststrate 2015 - 2018
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
if (typeof Proxy === "undefined" || typeof Symbol === "undefined") {
    throw new Error("[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore.");
}
try {
    // define process.env if needed
    // if this is not a production build in the first place
    // (in which case the expression below would be substituted with 'production')
    "production";
}
catch (e) {
    var g = typeof window !== "undefined" ? window : global;
    if (typeof process === "undefined")
        g.process = {};
    g.process.env = {};
}

(function () {
    function testCodeMinification() { }
    if (testCodeMinification.name !== "testCodeMinification" &&
        "production" !== "production") {
        console.warn(
        // Template literal(backtick) is used for fix issue with rollup-plugin-commonjs https://github.com/rollup/rollup-plugin-commonjs/issues/344
        "[mobx] you are running a minified build, but 'process.env.NODE_ENV' was not set to 'production' in your bundler. This results in an unnecessarily large and slow bundle");
    }
})();
// Devtools support
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    // See: https://github.com/andykog/mobx-devtools/
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
        spy: spy$$1,
        extras: {
            getDebugName: getDebugName$$1
        },
        $mobx: $mobx$$1
    });
}



/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(70), __webpack_require__(14)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var matchesType_1 = __webpack_require__(49);
var invariant = __webpack_require__(1);
var isObject = __webpack_require__(7);
exports.BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';
exports.PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';
exports.HOVER = 'dnd-core/HOVER';
exports.DROP = 'dnd-core/DROP';
exports.END_DRAG = 'dnd-core/END_DRAG';
function createDragDropActions(manager) {
    return {
        beginDrag: function (sourceIds, _a) {
            if (sourceIds === void 0) { sourceIds = []; }
            var _b = _a === void 0 ? {
                publishSource: true,
            } : _a, publishSource = _b.publishSource, clientOffset = _b.clientOffset, getSourceClientOffset = _b.getSourceClientOffset;
            var monitor = manager.getMonitor();
            var registry = manager.getRegistry();
            invariant(!monitor.isDragging(), 'Cannot call beginDrag while dragging.');
            for (var _i = 0, sourceIds_1 = sourceIds; _i < sourceIds_1.length; _i++) {
                var s = sourceIds_1[_i];
                invariant(registry.getSource(s), 'Expected sourceIds to be registered.');
            }
            var sourceId = null;
            for (var i = sourceIds.length - 1; i >= 0; i--) {
                if (monitor.canDragSource(sourceIds[i])) {
                    sourceId = sourceIds[i];
                    break;
                }
            }
            if (sourceId === null) {
                return;
            }
            var sourceClientOffset = null;
            if (clientOffset) {
                invariant(typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');
                sourceClientOffset = getSourceClientOffset(sourceId);
            }
            var source = registry.getSource(sourceId);
            var item = source.beginDrag(monitor, sourceId);
            invariant(isObject(item), 'Item must be an object.');
            registry.pinSource(sourceId);
            var itemType = registry.getSourceType(sourceId);
            return {
                type: exports.BEGIN_DRAG,
                payload: {
                    itemType: itemType,
                    item: item,
                    sourceId: sourceId,
                    clientOffset: clientOffset || null,
                    sourceClientOffset: sourceClientOffset || null,
                    isSourcePublic: !!publishSource,
                },
            };
        },
        publishDragSource: function () {
            var monitor = manager.getMonitor();
            if (!monitor.isDragging()) {
                return;
            }
            return { type: exports.PUBLISH_DRAG_SOURCE };
        },
        hover: function (targetIdsArg, _a) {
            var clientOffset = (_a === void 0 ? {} : _a).clientOffset;
            invariant(Array.isArray(targetIdsArg), 'Expected targetIds to be an array.');
            var targetIds = targetIdsArg.slice(0);
            var monitor = manager.getMonitor();
            var registry = manager.getRegistry();
            invariant(monitor.isDragging(), 'Cannot call hover while not dragging.');
            invariant(!monitor.didDrop(), 'Cannot call hover after drop.');
            // First check invariants.
            for (var i = 0; i < targetIds.length; i++) {
                var targetId = targetIds[i];
                invariant(targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');
                var target = registry.getTarget(targetId);
                invariant(target, 'Expected targetIds to be registered.');
            }
            var draggedItemType = monitor.getItemType();
            // Remove those targetIds that don't match the targetType.  This
            // fixes shallow isOver which would only be non-shallow because of
            // non-matching targets.
            for (var i = targetIds.length - 1; i >= 0; i--) {
                var targetId = targetIds[i];
                var targetType = registry.getTargetType(targetId);
                if (!matchesType_1.default(targetType, draggedItemType)) {
                    targetIds.splice(i, 1);
                }
            }
            // Finally call hover on all matching targets.
            for (var _i = 0, targetIds_1 = targetIds; _i < targetIds_1.length; _i++) {
                var targetId = targetIds_1[_i];
                var target = registry.getTarget(targetId);
                target.hover(monitor, targetId);
            }
            return {
                type: exports.HOVER,
                payload: {
                    targetIds: targetIds,
                    clientOffset: clientOffset || null,
                },
            };
        },
        drop: function (options) {
            if (options === void 0) { options = {}; }
            var monitor = manager.getMonitor();
            var registry = manager.getRegistry();
            invariant(monitor.isDragging(), 'Cannot call drop while not dragging.');
            invariant(!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');
            var targetIds = monitor
                .getTargetIds()
                .filter(monitor.canDropOnTarget, monitor);
            targetIds.reverse();
            // Multiple actions are dispatched here, which is why this doesn't return an action
            targetIds.forEach(function (targetId, index) {
                var target = registry.getTarget(targetId);
                var dropResult = target.drop(monitor, targetId);
                invariant(typeof dropResult === 'undefined' || isObject(dropResult), 'Drop result must either be an object or undefined.');
                if (typeof dropResult === 'undefined') {
                    dropResult = index === 0 ? {} : monitor.getDropResult();
                }
                var action = {
                    type: exports.DROP,
                    payload: {
                        dropResult: __assign({}, options, dropResult),
                    },
                };
                manager.dispatch(action);
            });
        },
        endDrag: function () {
            var monitor = manager.getMonitor();
            var registry = manager.getRegistry();
            invariant(monitor.isDragging(), 'Cannot call endDrag while not dragging.');
            var sourceId = monitor.getSourceId();
            var source = registry.getSource(sourceId, true);
            source.endDrag(monitor, sourceId);
            registry.unpinSource();
            return { type: exports.END_DRAG };
        },
    };
}
exports.default = createDragDropActions;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ADD_SOURCE = 'dnd-core/ADD_SOURCE';
exports.ADD_TARGET = 'dnd-core/ADD_TARGET';
exports.REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';
exports.REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';
function addSource(sourceId) {
    return {
        type: exports.ADD_SOURCE,
        payload: {
            sourceId: sourceId,
        },
    };
}
exports.addSource = addSource;
function addTarget(targetId) {
    return {
        type: exports.ADD_TARGET,
        payload: {
            targetId: targetId,
        },
    };
}
exports.addTarget = addTarget;
function removeSource(sourceId) {
    return {
        type: exports.REMOVE_SOURCE,
        payload: {
            sourceId: sourceId,
        },
    };
}
exports.removeSource = removeSource;
function removeTarget(targetId) {
    return {
        type: exports.REMOVE_TARGET,
        payload: {
            targetId: targetId,
        },
    };
}
exports.removeTarget = removeTarget;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(18);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(104),
    getValue = __webpack_require__(110);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(9);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(31);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(123);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(36),
    isObjectLike = __webpack_require__(4);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function checkDecoratorArguments(functionName, signature) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (false) {
        for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
            var arg = args_1[_a];
            if (arg && arg.prototype && arg.prototype.render) {
                // tslint:disable-next-line no-console
                console.error('You seem to be applying the arguments in the wrong order. ' +
                    ("It should be " + functionName + "(" + signature + ")(Component), not the other way around. ") +
                    'Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#you-seem-to-be-applying-the-arguments-in-the-wrong-order');
                return;
            }
        }
    }
}
exports.default = checkDecoratorArguments;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvas__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__generator__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__generator_async__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__canvas_async__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__svg__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__svg_async__ = __webpack_require__(234);






/* harmony default export */ __webpack_exports__["a"] = ({
    canvas(canvas, config) {
        if (config && config.async) {
            return new __WEBPACK_IMPORTED_MODULE_3__canvas_async__["a" /* RoughCanvasAsync */](canvas, config);
        }
        return new __WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* RoughCanvas */](canvas, config);
    },
    svg(svg, config) {
        if (config && config.async) {
            return new __WEBPACK_IMPORTED_MODULE_5__svg_async__["a" /* RoughSVGAsync */](svg, config);
        }
        return new __WEBPACK_IMPORTED_MODULE_4__svg__["a" /* RoughSVG */](svg, config);
    },
    createRenderer() {
        return __WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* RoughCanvas */].createRenderer();
    },
    generator(config, surface) {
        if (config && config.async) {
            return new __WEBPACK_IMPORTED_MODULE_2__generator_async__["a" /* RoughGeneratorAsync */](config, surface);
        }
        return new __WEBPACK_IMPORTED_MODULE_1__generator__["a" /* RoughGenerator */](config, surface);
    }
});


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DragDropContext_1 = __webpack_require__(28);
exports.DragDropContext = DragDropContext_1.DragDropContext;
exports.DragDropContextProvider = DragDropContext_1.DragDropContextProvider;
var DragLayer_1 = __webpack_require__(169);
exports.DragLayer = DragLayer_1.default;
var DragSource_1 = __webpack_require__(172);
exports.DragSource = DragSource_1.default;
var DropTarget_1 = __webpack_require__(182);
exports.DropTarget = DropTarget_1.default;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var React = __webpack_require__(0);
var dnd_core_1 = __webpack_require__(92);
var checkDecoratorArguments_1 = __webpack_require__(24);
var invariant = __webpack_require__(1);
var hoistStatics = __webpack_require__(25);
var isClassComponent = __webpack_require__(38).default;
/**
 * Create the React Context
 */
exports.Consumer = (_a = React.createContext({ dragDropManager: undefined }), _a.Consumer), exports.Provider = _a.Provider;
/**
 * Creates the context object we're providing
 * @param backend
 * @param context
 */
function createChildContext(backend, context) {
    return {
        dragDropManager: dnd_core_1.createDragDropManager(backend, context),
    };
}
exports.createChildContext = createChildContext;
/**
 * A React component that provides the React-DnD context
 */
exports.DragDropContextProvider = function (_a) {
    var backend = _a.backend, context = _a.context, children = _a.children;
    var contextValue = createChildContext(backend, context);
    return React.createElement(exports.Provider, { value: contextValue }, children);
};
/**
 * Wrap the root component of your application with DragDropContext decorator to set up React DnD.
 * This lets you specify the backend, and sets up the shared DnD state behind the scenes.
 * @param backendFactory The DnD backend factory
 * @param backendContext The backend context
 */
function DragDropContext(backendFactory, backendContext) {
    checkDecoratorArguments_1.default('DragDropContext', 'backend', backendFactory);
    var childContext = createChildContext(backendFactory, backendContext);
    return function decorateContext(DecoratedComponent) {
        var Decorated = DecoratedComponent;
        var displayName = Decorated.displayName || Decorated.name || 'Component';
        var DragDropContextContainer = /** @class */ (function (_super) {
            __extends(DragDropContextContainer, _super);
            function DragDropContextContainer() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.ref = React.createRef();
                return _this;
            }
            DragDropContextContainer.prototype.getDecoratedComponentInstance = function () {
                invariant(this.ref.current, 'In order to access an instance of the decorated component it can not be a stateless component.');
                return this.ref.current;
            };
            DragDropContextContainer.prototype.getManager = function () {
                return childContext.dragDropManager;
            };
            DragDropContextContainer.prototype.render = function () {
                return (React.createElement(exports.Provider, { value: childContext },
                    React.createElement(Decorated, __assign({}, this.props, { ref: isClassComponent(Decorated) ? this.ref : undefined }))));
            };
            DragDropContextContainer.DecoratedComponent = DecoratedComponent;
            DragDropContextContainer.displayName = "DragDropContext(" + displayName + ")";
            return DragDropContextContainer;
        }(React.Component));
        return hoistStatics(DragDropContextContainer, DecoratedComponent);
    };
}
exports.DragDropContext = DragDropContext;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(53),
    setCacheAdd = __webpack_require__(127),
    setCacheHas = __webpack_require__(128);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(8),
    isObject = __webpack_require__(7);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(129);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(30),
    isLength = __webpack_require__(56);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(8),
    isObjectLike = __webpack_require__(4);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isClassComponent = function isClassComponent(Component) {
  return Boolean(Component && Component.prototype && typeof Component.prototype.render === 'function');
};

exports.default = isClassComponent;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FILE = '__NATIVE_FILE__';
exports.URL = '__NATIVE_URL__';
exports.TEXT = '__NATIVE_TEXT__';


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generator_base__ = __webpack_require__(72);

class RoughGenerator extends __WEBPACK_IMPORTED_MODULE_0__generator_base__["a" /* RoughGeneratorBase */] {
    constructor(config, surface) {
        super(config, surface);
    }
    line(x1, y1, x2, y2, options) {
        const o = this._options(options);
        return this._drawable('line', [this.lib.line(x1, y1, x2, y2, o)], o);
    }
    rectangle(x, y, width, height, options) {
        const o = this._options(options);
        const paths = [];
        if (o.fill) {
            const points = [[x, y], [x + width, y], [x + width, y + height], [x, y + height]];
            if (o.fillStyle === 'solid') {
                paths.push(this.lib.solidFillPolygon(points, o));
            }
            else {
                paths.push(this.lib.patternFillPolygon(points, o));
            }
        }
        paths.push(this.lib.rectangle(x, y, width, height, o));
        return this._drawable('rectangle', paths, o);
    }
    ellipse(x, y, width, height, options) {
        const o = this._options(options);
        const paths = [];
        if (o.fill) {
            if (o.fillStyle === 'solid') {
                const shape = this.lib.ellipse(x, y, width, height, o);
                shape.type = 'fillPath';
                paths.push(shape);
            }
            else {
                paths.push(this.lib.patternFillEllipse(x, y, width, height, o));
            }
        }
        paths.push(this.lib.ellipse(x, y, width, height, o));
        return this._drawable('ellipse', paths, o);
    }
    circle(x, y, diameter, options) {
        const ret = this.ellipse(x, y, diameter, diameter, options);
        ret.shape = 'circle';
        return ret;
    }
    linearPath(points, options) {
        const o = this._options(options);
        return this._drawable('linearPath', [this.lib.linearPath(points, false, o)], o);
    }
    arc(x, y, width, height, start, stop, closed = false, options) {
        const o = this._options(options);
        const paths = [];
        if (closed && o.fill) {
            if (o.fillStyle === 'solid') {
                const shape = this.lib.arc(x, y, width, height, start, stop, true, false, o);
                shape.type = 'fillPath';
                paths.push(shape);
            }
            else {
                paths.push(this.lib.patternFillArc(x, y, width, height, start, stop, o));
            }
        }
        paths.push(this.lib.arc(x, y, width, height, start, stop, closed, true, o));
        return this._drawable('arc', paths, o);
    }
    curve(points, options) {
        const o = this._options(options);
        return this._drawable('curve', [this.lib.curve(points, o)], o);
    }
    polygon(points, options) {
        const o = this._options(options);
        const paths = [];
        if (o.fill) {
            if (o.fillStyle === 'solid') {
                paths.push(this.lib.solidFillPolygon(points, o));
            }
            else {
                const size = this.computePolygonSize(points);
                const fillPoints = [
                    [0, 0],
                    [size[0], 0],
                    [size[0], size[1]],
                    [0, size[1]]
                ];
                const shape = this.lib.patternFillPolygon(fillPoints, o);
                shape.type = 'path2Dpattern';
                shape.size = size;
                shape.path = this.polygonPath(points);
                paths.push(shape);
            }
        }
        paths.push(this.lib.linearPath(points, true, o));
        return this._drawable('polygon', paths, o);
    }
    path(d, options) {
        const o = this._options(options);
        const paths = [];
        if (!d) {
            return this._drawable('path', paths, o);
        }
        if (o.fill) {
            if (o.fillStyle === 'solid') {
                const shape = { type: 'path2Dfill', path: d, ops: [] };
                paths.push(shape);
            }
            else {
                const size = this.computePathSize(d);
                const points = [
                    [0, 0],
                    [size[0], 0],
                    [size[0], size[1]],
                    [0, size[1]]
                ];
                const shape = this.lib.patternFillPolygon(points, o);
                shape.type = 'path2Dpattern';
                shape.size = size;
                shape.path = d;
                paths.push(shape);
            }
        }
        paths.push(this.lib.svgPath(d, o));
        return this._drawable('path', paths, o);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RoughGenerator;



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__path_js__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fillers_filler__ = __webpack_require__(227);


class RoughRenderer {
    line(x1, y1, x2, y2, o) {
        const ops = this.doubleLine(x1, y1, x2, y2, o);
        return { type: 'path', ops };
    }
    linearPath(points, close, o) {
        const len = (points || []).length;
        if (len > 2) {
            let ops = [];
            for (let i = 0; i < (len - 1); i++) {
                ops = ops.concat(this.doubleLine(points[i][0], points[i][1], points[i + 1][0], points[i + 1][1], o));
            }
            if (close) {
                ops = ops.concat(this.doubleLine(points[len - 1][0], points[len - 1][1], points[0][0], points[0][1], o));
            }
            return { type: 'path', ops };
        }
        else if (len === 2) {
            return this.line(points[0][0], points[0][1], points[1][0], points[1][1], o);
        }
        return { type: 'path', ops: [] };
    }
    polygon(points, o) {
        return this.linearPath(points, true, o);
    }
    rectangle(x, y, width, height, o) {
        const points = [
            [x, y], [x + width, y], [x + width, y + height], [x, y + height]
        ];
        return this.polygon(points, o);
    }
    curve(points, o) {
        const o1 = this._curveWithOffset(points, 1 * (1 + o.roughness * 0.2), o);
        const o2 = this._curveWithOffset(points, 1.5 * (1 + o.roughness * 0.22), o);
        return { type: 'path', ops: o1.concat(o2) };
    }
    ellipse(x, y, width, height, o) {
        const increment = (Math.PI * 2) / o.curveStepCount;
        let rx = Math.abs(width / 2);
        let ry = Math.abs(height / 2);
        rx += this.getOffset(-rx * 0.05, rx * 0.05, o);
        ry += this.getOffset(-ry * 0.05, ry * 0.05, o);
        const o1 = this._ellipse(increment, x, y, rx, ry, 1, increment * this.getOffset(0.1, this.getOffset(0.4, 1, o), o), o);
        const o2 = this._ellipse(increment, x, y, rx, ry, 1.5, 0, o);
        return { type: 'path', ops: o1.concat(o2) };
    }
    arc(x, y, width, height, start, stop, closed, roughClosure, o) {
        const cx = x;
        const cy = y;
        let rx = Math.abs(width / 2);
        let ry = Math.abs(height / 2);
        rx += this.getOffset(-rx * 0.01, rx * 0.01, o);
        ry += this.getOffset(-ry * 0.01, ry * 0.01, o);
        let strt = start;
        let stp = stop;
        while (strt < 0) {
            strt += Math.PI * 2;
            stp += Math.PI * 2;
        }
        if ((stp - strt) > (Math.PI * 2)) {
            strt = 0;
            stp = Math.PI * 2;
        }
        const ellipseInc = (Math.PI * 2) / o.curveStepCount;
        const arcInc = Math.min(ellipseInc / 2, (stp - strt) / 2);
        const o1 = this._arc(arcInc, cx, cy, rx, ry, strt, stp, 1, o);
        const o2 = this._arc(arcInc, cx, cy, rx, ry, strt, stp, 1.5, o);
        let ops = o1.concat(o2);
        if (closed) {
            if (roughClosure) {
                ops = ops.concat(this.doubleLine(cx, cy, cx + rx * Math.cos(strt), cy + ry * Math.sin(strt), o));
                ops = ops.concat(this.doubleLine(cx, cy, cx + rx * Math.cos(stp), cy + ry * Math.sin(stp), o));
            }
            else {
                ops.push({ op: 'lineTo', data: [cx, cy] });
                ops.push({ op: 'lineTo', data: [cx + rx * Math.cos(strt), cy + ry * Math.sin(strt)] });
            }
        }
        return { type: 'path', ops };
    }
    svgPath(path, o) {
        path = (path || '').replace(/\n/g, ' ').replace(/(-\s)/g, '-').replace('/(\s\s)/g', ' ');
        let p = new __WEBPACK_IMPORTED_MODULE_0__path_js__["c" /* RoughPath */](path);
        if (o.simplification) {
            const fitter = new __WEBPACK_IMPORTED_MODULE_0__path_js__["a" /* PathFitter */](p.linearPoints, p.closed);
            const d = fitter.fit(o.simplification);
            p = new __WEBPACK_IMPORTED_MODULE_0__path_js__["c" /* RoughPath */](d);
        }
        let ops = [];
        const segments = p.segments || [];
        for (let i = 0; i < segments.length; i++) {
            const s = segments[i];
            const prev = i > 0 ? segments[i - 1] : null;
            const opList = this._processSegment(p, s, prev, o);
            if (opList && opList.length) {
                ops = ops.concat(opList);
            }
        }
        return { type: 'path', ops };
    }
    solidFillPolygon(points, o) {
        const ops = [];
        if (points.length) {
            const offset = o.maxRandomnessOffset || 0;
            const len = points.length;
            if (len > 2) {
                ops.push({ op: 'move', data: [points[0][0] + this.getOffset(-offset, offset, o), points[0][1] + this.getOffset(-offset, offset, o)] });
                for (let i = 1; i < len; i++) {
                    ops.push({ op: 'lineTo', data: [points[i][0] + this.getOffset(-offset, offset, o), points[i][1] + this.getOffset(-offset, offset, o)] });
                }
            }
        }
        return { type: 'fillPath', ops };
    }
    patternFillPolygon(points, o) {
        const filler = Object(__WEBPACK_IMPORTED_MODULE_1__fillers_filler__["a" /* getFiller */])(this, o);
        return filler.fillPolygon(points, o);
    }
    patternFillEllipse(cx, cy, width, height, o) {
        const filler = Object(__WEBPACK_IMPORTED_MODULE_1__fillers_filler__["a" /* getFiller */])(this, o);
        return filler.fillEllipse(cx, cy, width, height, o);
    }
    patternFillArc(x, y, width, height, start, stop, o) {
        const cx = x;
        const cy = y;
        let rx = Math.abs(width / 2);
        let ry = Math.abs(height / 2);
        rx += this.getOffset(-rx * 0.01, rx * 0.01, o);
        ry += this.getOffset(-ry * 0.01, ry * 0.01, o);
        let strt = start;
        let stp = stop;
        while (strt < 0) {
            strt += Math.PI * 2;
            stp += Math.PI * 2;
        }
        if ((stp - strt) > (Math.PI * 2)) {
            strt = 0;
            stp = Math.PI * 2;
        }
        const increment = (stp - strt) / o.curveStepCount;
        const points = [];
        for (let angle = strt; angle <= stp; angle = angle + increment) {
            points.push([cx + rx * Math.cos(angle), cy + ry * Math.sin(angle)]);
        }
        points.push([cx + rx * Math.cos(stp), cy + ry * Math.sin(stp)]);
        points.push([cx, cy]);
        return this.patternFillPolygon(points, o);
    }
    /// 
    getOffset(min, max, ops) {
        return ops.roughness * ((Math.random() * (max - min)) + min);
    }
    doubleLine(x1, y1, x2, y2, o) {
        const o1 = this._line(x1, y1, x2, y2, o, true, false);
        const o2 = this._line(x1, y1, x2, y2, o, true, true);
        return o1.concat(o2);
    }
    _line(x1, y1, x2, y2, o, move, overlay) {
        const lengthSq = Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2);
        let offset = o.maxRandomnessOffset || 0;
        if ((offset * offset * 100) > lengthSq) {
            offset = Math.sqrt(lengthSq) / 10;
        }
        const halfOffset = offset / 2;
        const divergePoint = 0.2 + Math.random() * 0.2;
        let midDispX = o.bowing * o.maxRandomnessOffset * (y2 - y1) / 200;
        let midDispY = o.bowing * o.maxRandomnessOffset * (x1 - x2) / 200;
        midDispX = this.getOffset(-midDispX, midDispX, o);
        midDispY = this.getOffset(-midDispY, midDispY, o);
        const ops = [];
        if (move) {
            if (overlay) {
                ops.push({
                    op: 'move', data: [
                        x1 + this.getOffset(-halfOffset, halfOffset, o),
                        y1 + this.getOffset(-halfOffset, halfOffset, o)
                    ]
                });
            }
            else {
                ops.push({
                    op: 'move', data: [
                        x1 + this.getOffset(-offset, offset, o),
                        y1 + this.getOffset(-offset, offset, o)
                    ]
                });
            }
        }
        if (overlay) {
            ops.push({
                op: 'bcurveTo', data: [
                    midDispX + x1 + (x2 - x1) * divergePoint + this.getOffset(-halfOffset, halfOffset, o),
                    midDispY + y1 + (y2 - y1) * divergePoint + this.getOffset(-halfOffset, halfOffset, o),
                    midDispX + x1 + 2 * (x2 - x1) * divergePoint + this.getOffset(-halfOffset, halfOffset, o),
                    midDispY + y1 + 2 * (y2 - y1) * divergePoint + this.getOffset(-halfOffset, halfOffset, o),
                    x2 + this.getOffset(-halfOffset, halfOffset, o),
                    y2 + this.getOffset(-halfOffset, halfOffset, o)
                ]
            });
        }
        else {
            ops.push({
                op: 'bcurveTo', data: [
                    midDispX + x1 + (x2 - x1) * divergePoint + this.getOffset(-offset, offset, o),
                    midDispY + y1 + (y2 - y1) * divergePoint + this.getOffset(-offset, offset, o),
                    midDispX + x1 + 2 * (x2 - x1) * divergePoint + this.getOffset(-offset, offset, o),
                    midDispY + y1 + 2 * (y2 - y1) * divergePoint + this.getOffset(-offset, offset, o),
                    x2 + this.getOffset(-offset, offset, o),
                    y2 + this.getOffset(-offset, offset, o)
                ]
            });
        }
        return ops;
    }
    _curve(points, closePoint, o) {
        const len = points.length;
        let ops = [];
        if (len > 3) {
            const b = [];
            const s = 1 - o.curveTightness;
            ops.push({ op: 'move', data: [points[1][0], points[1][1]] });
            for (let i = 1; (i + 2) < len; i++) {
                const cachedVertArray = points[i];
                b[0] = [cachedVertArray[0], cachedVertArray[1]];
                b[1] = [cachedVertArray[0] + (s * points[i + 1][0] - s * points[i - 1][0]) / 6, cachedVertArray[1] + (s * points[i + 1][1] - s * points[i - 1][1]) / 6];
                b[2] = [points[i + 1][0] + (s * points[i][0] - s * points[i + 2][0]) / 6, points[i + 1][1] + (s * points[i][1] - s * points[i + 2][1]) / 6];
                b[3] = [points[i + 1][0], points[i + 1][1]];
                ops.push({ op: 'bcurveTo', data: [b[1][0], b[1][1], b[2][0], b[2][1], b[3][0], b[3][1]] });
            }
            if (closePoint && closePoint.length === 2) {
                const ro = o.maxRandomnessOffset;
                ops.push({ op: 'lineTo', data: [closePoint[0] + this.getOffset(-ro, ro, o), closePoint[1] + +this.getOffset(-ro, ro, o)] });
            }
        }
        else if (len === 3) {
            ops.push({ op: 'move', data: [points[1][0], points[1][1]] });
            ops.push({
                op: 'bcurveTo', data: [
                    points[1][0], points[1][1],
                    points[2][0], points[2][1],
                    points[2][0], points[2][1]
                ]
            });
        }
        else if (len === 2) {
            ops = ops.concat(this.doubleLine(points[0][0], points[0][1], points[1][0], points[1][1], o));
        }
        return ops;
    }
    _ellipse(increment, cx, cy, rx, ry, offset, overlap, o) {
        const radOffset = this.getOffset(-0.5, 0.5, o) - (Math.PI / 2);
        const points = [];
        points.push([
            this.getOffset(-offset, offset, o) + cx + 0.9 * rx * Math.cos(radOffset - increment),
            this.getOffset(-offset, offset, o) + cy + 0.9 * ry * Math.sin(radOffset - increment)
        ]);
        for (let angle = radOffset; angle < (Math.PI * 2 + radOffset - 0.01); angle = angle + increment) {
            points.push([
                this.getOffset(-offset, offset, o) + cx + rx * Math.cos(angle),
                this.getOffset(-offset, offset, o) + cy + ry * Math.sin(angle)
            ]);
        }
        points.push([
            this.getOffset(-offset, offset, o) + cx + rx * Math.cos(radOffset + Math.PI * 2 + overlap * 0.5),
            this.getOffset(-offset, offset, o) + cy + ry * Math.sin(radOffset + Math.PI * 2 + overlap * 0.5)
        ]);
        points.push([
            this.getOffset(-offset, offset, o) + cx + 0.98 * rx * Math.cos(radOffset + overlap),
            this.getOffset(-offset, offset, o) + cy + 0.98 * ry * Math.sin(radOffset + overlap)
        ]);
        points.push([
            this.getOffset(-offset, offset, o) + cx + 0.9 * rx * Math.cos(radOffset + overlap * 0.5),
            this.getOffset(-offset, offset, o) + cy + 0.9 * ry * Math.sin(radOffset + overlap * 0.5)
        ]);
        return this._curve(points, null, o);
    }
    _curveWithOffset(points, offset, o) {
        const ps = [];
        ps.push([
            points[0][0] + this.getOffset(-offset, offset, o),
            points[0][1] + this.getOffset(-offset, offset, o),
        ]);
        ps.push([
            points[0][0] + this.getOffset(-offset, offset, o),
            points[0][1] + this.getOffset(-offset, offset, o),
        ]);
        for (let i = 1; i < points.length; i++) {
            ps.push([
                points[i][0] + this.getOffset(-offset, offset, o),
                points[i][1] + this.getOffset(-offset, offset, o),
            ]);
            if (i === (points.length - 1)) {
                ps.push([
                    points[i][0] + this.getOffset(-offset, offset, o),
                    points[i][1] + this.getOffset(-offset, offset, o),
                ]);
            }
        }
        return this._curve(ps, null, o);
    }
    _arc(increment, cx, cy, rx, ry, strt, stp, offset, o) {
        const radOffset = strt + this.getOffset(-0.1, 0.1, o);
        const points = [];
        points.push([
            this.getOffset(-offset, offset, o) + cx + 0.9 * rx * Math.cos(radOffset - increment),
            this.getOffset(-offset, offset, o) + cy + 0.9 * ry * Math.sin(radOffset - increment)
        ]);
        for (let angle = radOffset; angle <= stp; angle = angle + increment) {
            points.push([
                this.getOffset(-offset, offset, o) + cx + rx * Math.cos(angle),
                this.getOffset(-offset, offset, o) + cy + ry * Math.sin(angle)
            ]);
        }
        points.push([
            cx + rx * Math.cos(stp),
            cy + ry * Math.sin(stp)
        ]);
        points.push([
            cx + rx * Math.cos(stp),
            cy + ry * Math.sin(stp)
        ]);
        return this._curve(points, null, o);
    }
    _bezierTo(x1, y1, x2, y2, x, y, path, o) {
        const ops = [];
        const ros = [o.maxRandomnessOffset || 1, (o.maxRandomnessOffset || 1) + 0.5];
        let f = [0, 0];
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                ops.push({ op: 'move', data: [path.x, path.y] });
            }
            else {
                ops.push({ op: 'move', data: [path.x + this.getOffset(-ros[0], ros[0], o), path.y + this.getOffset(-ros[0], ros[0], o)] });
            }
            f = [x + this.getOffset(-ros[i], ros[i], o), y + this.getOffset(-ros[i], ros[i], o)];
            ops.push({
                op: 'bcurveTo', data: [
                    x1 + this.getOffset(-ros[i], ros[i], o), y1 + this.getOffset(-ros[i], ros[i], o),
                    x2 + this.getOffset(-ros[i], ros[i], o), y2 + this.getOffset(-ros[i], ros[i], o),
                    f[0], f[1]
                ]
            });
        }
        path.setPosition(f[0], f[1]);
        return ops;
    }
    _processSegment(path, seg, prevSeg, o) {
        let ops = [];
        switch (seg.key) {
            case 'M':
            case 'm': {
                const delta = seg.key === 'm';
                if (seg.data.length >= 2) {
                    let x = +seg.data[0];
                    let y = +seg.data[1];
                    if (delta) {
                        x += path.x;
                        y += path.y;
                    }
                    const ro = 1 * (o.maxRandomnessOffset || 0);
                    x = x + this.getOffset(-ro, ro, o);
                    y = y + this.getOffset(-ro, ro, o);
                    path.setPosition(x, y);
                    ops.push({ op: 'move', data: [x, y] });
                }
                break;
            }
            case 'L':
            case 'l': {
                const delta = seg.key === 'l';
                if (seg.data.length >= 2) {
                    let x = +seg.data[0];
                    let y = +seg.data[1];
                    if (delta) {
                        x += path.x;
                        y += path.y;
                    }
                    ops = ops.concat(this.doubleLine(path.x, path.y, x, y, o));
                    path.setPosition(x, y);
                }
                break;
            }
            case 'H':
            case 'h': {
                const delta = seg.key === 'h';
                if (seg.data.length) {
                    let x = +seg.data[0];
                    if (delta) {
                        x += path.x;
                    }
                    ops = ops.concat(this.doubleLine(path.x, path.y, x, path.y, o));
                    path.setPosition(x, path.y);
                }
                break;
            }
            case 'V':
            case 'v': {
                const delta = seg.key === 'v';
                if (seg.data.length) {
                    let y = +seg.data[0];
                    if (delta) {
                        y += path.y;
                    }
                    ops = ops.concat(this.doubleLine(path.x, path.y, path.x, y, o));
                    path.setPosition(path.x, y);
                }
                break;
            }
            case 'Z':
            case 'z': {
                if (path.first) {
                    ops = ops.concat(this.doubleLine(path.x, path.y, path.first[0], path.first[1], o));
                    path.setPosition(path.first[0], path.first[1]);
                    path.first = null;
                }
                break;
            }
            case 'C':
            case 'c': {
                const delta = seg.key === 'c';
                if (seg.data.length >= 6) {
                    let x1 = +seg.data[0];
                    let y1 = +seg.data[1];
                    let x2 = +seg.data[2];
                    let y2 = +seg.data[3];
                    let x = +seg.data[4];
                    let y = +seg.data[5];
                    if (delta) {
                        x1 += path.x;
                        x2 += path.x;
                        x += path.x;
                        y1 += path.y;
                        y2 += path.y;
                        y += path.y;
                    }
                    const ob = this._bezierTo(x1, y1, x2, y2, x, y, path, o);
                    ops = ops.concat(ob);
                    path.bezierReflectionPoint = [x + (x - x2), y + (y - y2)];
                }
                break;
            }
            case 'S':
            case 's': {
                const delta = seg.key === 's';
                if (seg.data.length >= 4) {
                    let x2 = +seg.data[0];
                    let y2 = +seg.data[1];
                    let x = +seg.data[2];
                    let y = +seg.data[3];
                    if (delta) {
                        x2 += path.x;
                        x += path.x;
                        y2 += path.y;
                        y += path.y;
                    }
                    let x1 = x2;
                    let y1 = y2;
                    const prevKey = prevSeg ? prevSeg.key : '';
                    let ref = null;
                    if (prevKey === 'c' || prevKey === 'C' || prevKey === 's' || prevKey === 'S') {
                        ref = path.bezierReflectionPoint;
                    }
                    if (ref) {
                        x1 = ref[0];
                        y1 = ref[1];
                    }
                    const ob = this._bezierTo(x1, y1, x2, y2, x, y, path, o);
                    ops = ops.concat(ob);
                    path.bezierReflectionPoint = [x + (x - x2), y + (y - y2)];
                }
                break;
            }
            case 'Q':
            case 'q': {
                const delta = seg.key === 'q';
                if (seg.data.length >= 4) {
                    let x1 = +seg.data[0];
                    let y1 = +seg.data[1];
                    let x = +seg.data[2];
                    let y = +seg.data[3];
                    if (delta) {
                        x1 += path.x;
                        x += path.x;
                        y1 += path.y;
                        y += path.y;
                    }
                    const offset1 = 1 * (1 + o.roughness * 0.2);
                    const offset2 = 1.5 * (1 + o.roughness * 0.22);
                    ops.push({ op: 'move', data: [path.x + this.getOffset(-offset1, offset1, o), path.y + this.getOffset(-offset1, offset1, o)] });
                    let f = [x + this.getOffset(-offset1, offset1, o), y + this.getOffset(-offset1, offset1, o)];
                    ops.push({
                        op: 'qcurveTo', data: [
                            x1 + this.getOffset(-offset1, offset1, o), y1 + this.getOffset(-offset1, offset1, o),
                            f[0], f[1]
                        ]
                    });
                    ops.push({ op: 'move', data: [path.x + this.getOffset(-offset2, offset2, o), path.y + this.getOffset(-offset2, offset2, o)] });
                    f = [x + this.getOffset(-offset2, offset2, o), y + this.getOffset(-offset2, offset2, o)];
                    ops.push({
                        op: 'qcurveTo', data: [
                            x1 + this.getOffset(-offset2, offset2, o), y1 + this.getOffset(-offset2, offset2, o),
                            f[0], f[1]
                        ]
                    });
                    path.setPosition(f[0], f[1]);
                    path.quadReflectionPoint = [x + (x - x1), y + (y - y1)];
                }
                break;
            }
            case 'T':
            case 't': {
                const delta = seg.key === 't';
                if (seg.data.length >= 2) {
                    let x = +seg.data[0];
                    let y = +seg.data[1];
                    if (delta) {
                        x += path.x;
                        y += path.y;
                    }
                    let x1 = x;
                    let y1 = y;
                    const prevKey = prevSeg ? prevSeg.key : '';
                    let ref = null;
                    if (prevKey === 'q' || prevKey === 'Q' || prevKey === 't' || prevKey === 'T') {
                        ref = path.quadReflectionPoint;
                    }
                    if (ref) {
                        x1 = ref[0];
                        y1 = ref[1];
                    }
                    const offset1 = 1 * (1 + o.roughness * 0.2);
                    const offset2 = 1.5 * (1 + o.roughness * 0.22);
                    ops.push({ op: 'move', data: [path.x + this.getOffset(-offset1, offset1, o), path.y + this.getOffset(-offset1, offset1, o)] });
                    let f = [x + this.getOffset(-offset1, offset1, o), y + this.getOffset(-offset1, offset1, o)];
                    ops.push({
                        op: 'qcurveTo', data: [
                            x1 + this.getOffset(-offset1, offset1, o), y1 + this.getOffset(-offset1, offset1, o),
                            f[0], f[1]
                        ]
                    });
                    ops.push({ op: 'move', data: [path.x + this.getOffset(-offset2, offset2, o), path.y + this.getOffset(-offset2, offset2, o)] });
                    f = [x + this.getOffset(-offset2, offset2, o), y + this.getOffset(-offset2, offset2, o)];
                    ops.push({
                        op: 'qcurveTo', data: [
                            x1 + this.getOffset(-offset2, offset2, o), y1 + this.getOffset(-offset2, offset2, o),
                            f[0], f[1]
                        ]
                    });
                    path.setPosition(f[0], f[1]);
                    path.quadReflectionPoint = [x + (x - x1), y + (y - y1)];
                }
                break;
            }
            case 'A':
            case 'a': {
                const delta = seg.key === 'a';
                if (seg.data.length >= 7) {
                    const rx = +seg.data[0];
                    const ry = +seg.data[1];
                    const angle = +seg.data[2];
                    const largeArcFlag = +seg.data[3];
                    const sweepFlag = +seg.data[4];
                    let x = +seg.data[5];
                    let y = +seg.data[6];
                    if (delta) {
                        x += path.x;
                        y += path.y;
                    }
                    if (x === path.x && y === path.y) {
                        break;
                    }
                    if (rx === 0 || ry === 0) {
                        ops = ops.concat(this.doubleLine(path.x, path.y, x, y, o));
                        path.setPosition(x, y);
                    }
                    else {
                        for (let i = 0; i < 1; i++) {
                            const arcConverter = new __WEBPACK_IMPORTED_MODULE_0__path_js__["b" /* RoughArcConverter */]([path.x, path.y], [x, y], [rx, ry], angle, largeArcFlag ? true : false, sweepFlag ? true : false);
                            let segment = arcConverter.getNextSegment();
                            while (segment) {
                                const ob = this._bezierTo(segment.cp1[0], segment.cp1[1], segment.cp2[0], segment.cp2[1], segment.to[0], segment.to[1], path, o);
                                ops = ops.concat(ob);
                                segment = arcConverter.getNextSegment();
                            }
                        }
                    }
                }
                break;
            }
            default:
                break;
        }
        return ops;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RoughRenderer;



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filler_utils__ = __webpack_require__(73);

class HachureFiller {
    constructor(renderer) {
        this.renderer = renderer;
    }
    fillPolygon(points, o) {
        return this._fillPolygon(points, o);
    }
    fillEllipse(cx, cy, width, height, o) {
        return this._fillEllipse(cx, cy, width, height, o);
    }
    _fillPolygon(points, o, connectEnds = false) {
        const lines = Object(__WEBPACK_IMPORTED_MODULE_0__filler_utils__["b" /* hachureLinesForPolygon */])(points, o);
        const ops = this.renderLines(lines, o, connectEnds);
        return { type: 'fillSketch', ops };
    }
    _fillEllipse(cx, cy, width, height, o, connectEnds = false) {
        const lines = Object(__WEBPACK_IMPORTED_MODULE_0__filler_utils__["a" /* hachureLinesForEllipse */])(cx, cy, width, height, o, this.renderer);
        const ops = this.renderLines(lines, o, connectEnds);
        return { type: 'fillSketch', ops };
    }
    renderLines(lines, o, connectEnds) {
        let ops = [];
        let prevPoint = null;
        for (const line of lines) {
            ops = ops.concat(this.renderer.doubleLine(line[0][0], line[0][1], line[1][0], line[1][1], o));
            if (connectEnds && prevPoint) {
                ops = ops.concat(this.renderer.doubleLine(prevPoint[0], prevPoint[1], line[0][0], line[0][1], o));
            }
            prevPoint = line[1];
        }
        return ops;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HachureFiller;



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generator_base__ = __webpack_require__(72);

class RoughGeneratorAsync extends __WEBPACK_IMPORTED_MODULE_0__generator_base__["a" /* RoughGeneratorBase */] {
    async line(x1, y1, x2, y2, options) {
        const o = this._options(options);
        return this._drawable('line', [await this.lib.line(x1, y1, x2, y2, o)], o);
    }
    async rectangle(x, y, width, height, options) {
        const o = this._options(options);
        const paths = [];
        if (o.fill) {
            const points = [[x, y], [x + width, y], [x + width, y + height], [x, y + height]];
            if (o.fillStyle === 'solid') {
                paths.push(await this.lib.solidFillPolygon(points, o));
            }
            else {
                paths.push(await this.lib.patternFillPolygon(points, o));
            }
        }
        paths.push(await this.lib.rectangle(x, y, width, height, o));
        return this._drawable('rectangle', paths, o);
    }
    async ellipse(x, y, width, height, options) {
        const o = this._options(options);
        const paths = [];
        if (o.fill) {
            if (o.fillStyle === 'solid') {
                const shape = await this.lib.ellipse(x, y, width, height, o);
                shape.type = 'fillPath';
                paths.push(shape);
            }
            else {
                paths.push(await this.lib.patternFillEllipse(x, y, width, height, o));
            }
        }
        paths.push(await this.lib.ellipse(x, y, width, height, o));
        return this._drawable('ellipse', paths, o);
    }
    async circle(x, y, diameter, options) {
        const ret = await this.ellipse(x, y, diameter, diameter, options);
        ret.shape = 'circle';
        return ret;
    }
    async linearPath(points, options) {
        const o = this._options(options);
        return this._drawable('linearPath', [await this.lib.linearPath(points, false, o)], o);
    }
    async arc(x, y, width, height, start, stop, closed = false, options) {
        const o = this._options(options);
        const paths = [];
        if (closed && o.fill) {
            if (o.fillStyle === 'solid') {
                const shape = await this.lib.arc(x, y, width, height, start, stop, true, false, o);
                shape.type = 'fillPath';
                paths.push(shape);
            }
            else {
                paths.push(await this.lib.patternFillArc(x, y, width, height, start, stop, o));
            }
        }
        paths.push(await this.lib.arc(x, y, width, height, start, stop, closed, true, o));
        return this._drawable('arc', paths, o);
    }
    async curve(points, options) {
        const o = this._options(options);
        return this._drawable('curve', [await this.lib.curve(points, o)], o);
    }
    async polygon(points, options) {
        const o = this._options(options);
        const paths = [];
        if (o.fill) {
            if (o.fillStyle === 'solid') {
                paths.push(await this.lib.solidFillPolygon(points, o));
            }
            else {
                const size = this.computePolygonSize(points);
                const fillPoints = [
                    [0, 0],
                    [size[0], 0],
                    [size[0], size[1]],
                    [0, size[1]]
                ];
                const shape = await this.lib.patternFillPolygon(fillPoints, o);
                shape.type = 'path2Dpattern';
                shape.size = size;
                shape.path = this.polygonPath(points);
                paths.push(shape);
            }
        }
        paths.push(await this.lib.linearPath(points, true, o));
        return this._drawable('polygon', paths, o);
    }
    async path(d, options) {
        const o = this._options(options);
        const paths = [];
        if (!d) {
            return this._drawable('path', paths, o);
        }
        if (o.fill) {
            if (o.fillStyle === 'solid') {
                const shape = { type: 'path2Dfill', path: d, ops: [] };
                paths.push(shape);
            }
            else {
                const size = this.computePathSize(d);
                const points = [
                    [0, 0],
                    [size[0], 0],
                    [size[0], size[1]],
                    [0, size[1]]
                ];
                const shape = await this.lib.patternFillPolygon(points, o);
                shape.type = 'path2Dpattern';
                shape.size = size;
                shape.path = d;
                paths.push(shape);
            }
        }
        paths.push(await this.lib.svgPath(d, o));
        return this._drawable('path', paths, o);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RoughGeneratorAsync;



/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var asap = __webpack_require__(45);

function noop() {}

// States:
//
// 0 - pending
// 1 - fulfilled with _value
// 2 - rejected with _value
// 3 - adopted the state of another promise, _value
//
// once the state is no longer pending (0) it is immutable

// All `_` prefixed properties will be reduced to `_{random number}`
// at build time to obfuscate them and discourage their use.
// We don't use symbols or Object.defineProperty to fully hide them
// because the performance isn't good enough.


// to avoid using try/catch inside critical functions, we
// extract them to here.
var LAST_ERROR = null;
var IS_ERROR = {};
function getThen(obj) {
  try {
    return obj.then;
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

function tryCallOne(fn, a) {
  try {
    return fn(a);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}
function tryCallTwo(fn, a, b) {
  try {
    fn(a, b);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

module.exports = Promise;

function Promise(fn) {
  if (typeof this !== 'object') {
    throw new TypeError('Promises must be constructed via new');
  }
  if (typeof fn !== 'function') {
    throw new TypeError('Promise constructor\'s argument is not a function');
  }
  this._75 = 0;
  this._83 = 0;
  this._18 = null;
  this._38 = null;
  if (fn === noop) return;
  doResolve(fn, this);
}
Promise._47 = null;
Promise._71 = null;
Promise._44 = noop;

Promise.prototype.then = function(onFulfilled, onRejected) {
  if (this.constructor !== Promise) {
    return safeThen(this, onFulfilled, onRejected);
  }
  var res = new Promise(noop);
  handle(this, new Handler(onFulfilled, onRejected, res));
  return res;
};

function safeThen(self, onFulfilled, onRejected) {
  return new self.constructor(function (resolve, reject) {
    var res = new Promise(noop);
    res.then(resolve, reject);
    handle(self, new Handler(onFulfilled, onRejected, res));
  });
}
function handle(self, deferred) {
  while (self._83 === 3) {
    self = self._18;
  }
  if (Promise._47) {
    Promise._47(self);
  }
  if (self._83 === 0) {
    if (self._75 === 0) {
      self._75 = 1;
      self._38 = deferred;
      return;
    }
    if (self._75 === 1) {
      self._75 = 2;
      self._38 = [self._38, deferred];
      return;
    }
    self._38.push(deferred);
    return;
  }
  handleResolved(self, deferred);
}

function handleResolved(self, deferred) {
  asap(function() {
    var cb = self._83 === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      if (self._83 === 1) {
        resolve(deferred.promise, self._18);
      } else {
        reject(deferred.promise, self._18);
      }
      return;
    }
    var ret = tryCallOne(cb, self._18);
    if (ret === IS_ERROR) {
      reject(deferred.promise, LAST_ERROR);
    } else {
      resolve(deferred.promise, ret);
    }
  });
}
function resolve(self, newValue) {
  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
  if (newValue === self) {
    return reject(
      self,
      new TypeError('A promise cannot be resolved with itself.')
    );
  }
  if (
    newValue &&
    (typeof newValue === 'object' || typeof newValue === 'function')
  ) {
    var then = getThen(newValue);
    if (then === IS_ERROR) {
      return reject(self, LAST_ERROR);
    }
    if (
      then === self.then &&
      newValue instanceof Promise
    ) {
      self._83 = 3;
      self._18 = newValue;
      finale(self);
      return;
    } else if (typeof then === 'function') {
      doResolve(then.bind(newValue), self);
      return;
    }
  }
  self._83 = 1;
  self._18 = newValue;
  finale(self);
}

function reject(self, newValue) {
  self._83 = 2;
  self._18 = newValue;
  if (Promise._71) {
    Promise._71(self, newValue);
  }
  finale(self);
}
function finale(self) {
  if (self._75 === 1) {
    handle(self, self._38);
    self._38 = null;
  }
  if (self._75 === 2) {
    for (var i = 0; i < self._38.length; i++) {
      handle(self, self._38[i]);
    }
    self._38 = null;
  }
}

function Handler(onFulfilled, onRejected, promise){
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, promise) {
  var done = false;
  var res = tryCallTwo(fn, function (value) {
    if (done) return;
    done = true;
    resolve(promise, value);
  }, function (reason) {
    if (done) return;
    done = true;
    reject(promise, reason);
  });
  if (!done && res === IS_ERROR) {
    done = true;
    reject(promise, LAST_ERROR);
  }
}


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */
var scope = typeof global !== "undefined" ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
} else {
    requestFlush = makeRequestCallFromTimer(flush);
}

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(88);
} else {
  module.exports = require('./cjs/react-dom.development.js');
}


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HandlerRole;
(function (HandlerRole) {
    HandlerRole["SOURCE"] = "SOURCE";
    HandlerRole["TARGET"] = "TARGET";
})(HandlerRole = exports.HandlerRole || (exports.HandlerRole = {}));


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function matchesType(targetType, draggedItemType) {
    if (draggedItemType === null) {
        return targetType === null;
    }
    return Array.isArray(targetType)
        ? targetType.some(function (t) { return t === draggedItemType; })
        : targetType === draggedItemType;
}
exports.default = matchesType;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.strictEquality = function (a, b) { return a === b; };
/**
 * Determine if two cartesian coordinate offsets are equal
 * @param offsetA
 * @param offsetB
 */
function areCoordsEqual(offsetA, offsetB) {
    if (!offsetA && !offsetB) {
        return true;
    }
    else if (!offsetA || !offsetB) {
        return false;
    }
    else {
        return offsetA.x === offsetB.x && offsetA.y === offsetB.y;
    }
}
exports.areCoordsEqual = areCoordsEqual;
/**
 * Determines if two arrays of items are equal
 * @param a The first array of items
 * @param b The second array of items
 */
function areArraysEqual(a, b, isEqual) {
    if (isEqual === void 0) { isEqual = exports.strictEquality; }
    if (a.length !== b.length) {
        return false;
    }
    for (var i = 0; i < a.length; ++i) {
        if (!isEqual(a[i], b[i])) {
            return false;
        }
    }
    return true;
}
exports.areArraysEqual = areArraysEqual;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(52),
    baseRest = __webpack_require__(10),
    isArrayLikeObject = __webpack_require__(23);

/**
 * Creates an array excluding all given values using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `_.pull`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...*} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.xor
 * @example
 *
 * _.without([2, 1, 2, 3], 1, 2);
 * // => [3]
 */
var without = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, values)
    : [];
});

module.exports = without;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(29),
    arrayIncludes = __webpack_require__(32),
    arrayIncludesWith = __webpack_require__(33),
    arrayMap = __webpack_require__(22),
    baseUnary = __webpack_require__(34),
    cacheHas = __webpack_require__(35);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(101),
    mapCacheDelete = __webpack_require__(122),
    mapCacheGet = __webpack_require__(124),
    mapCacheHas = __webpack_require__(125),
    mapCacheSet = __webpack_require__(126);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 55 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var intersection = __webpack_require__(142);
exports.NONE = [];
exports.ALL = [];
/**
 * Determines if the given handler IDs are dirty or not.
 *
 * @param dirtyIds The set of dirty handler ids
 * @param handlerIds The set of handler ids to check
 */
function areDirty(dirtyIds, handlerIds) {
    if (dirtyIds === exports.NONE) {
        return false;
    }
    if (dirtyIds === exports.ALL || typeof handlerIds === 'undefined') {
        return true;
    }
    return intersection(handlerIds, dirtyIds).length > 0;
}
exports.areDirty = areDirty;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(148),
    isFlattenable = __webpack_require__(149);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(150),
    isObjectLike = __webpack_require__(4);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(29),
    arrayIncludes = __webpack_require__(32),
    arrayIncludesWith = __webpack_require__(33),
    cacheHas = __webpack_require__(35),
    createSet = __webpack_require__(151),
    setToArray = __webpack_require__(62);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),
/* 62 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(53);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var DragDropContext_1 = __webpack_require__(28);
var disposables_1 = __webpack_require__(173);
var isClassComponent = __webpack_require__(38).default;
var isPlainObject = __webpack_require__(5);
var invariant = __webpack_require__(1);
var hoistStatics = __webpack_require__(25);
var shallowEqual = __webpack_require__(12);
function decorateHandler(_a) {
    var DecoratedComponent = _a.DecoratedComponent, createHandler = _a.createHandler, createMonitor = _a.createMonitor, createConnector = _a.createConnector, registerHandler = _a.registerHandler, containerDisplayName = _a.containerDisplayName, getType = _a.getType, collect = _a.collect, options = _a.options;
    var _b = options.arePropsEqual, arePropsEqual = _b === void 0 ? shallowEqual : _b;
    var Decorated = DecoratedComponent;
    var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';
    var DragDropContainer = /** @class */ (function (_super) {
        __extends(DragDropContainer, _super);
        function DragDropContainer(props) {
            var _this = _super.call(this, props) || this;
            _this.isCurrentlyMounted = false;
            _this.handleChange = _this.handleChange.bind(_this);
            _this.disposable = new disposables_1.SerialDisposable();
            _this.receiveProps(props);
            _this.dispose();
            return _this;
        }
        DragDropContainer.prototype.getHandlerId = function () {
            return this.handlerId;
        };
        DragDropContainer.prototype.getDecoratedComponentInstance = function () {
            if (!this.handler) {
                return null;
            }
            return this.handler.ref.current;
        };
        DragDropContainer.prototype.shouldComponentUpdate = function (nextProps, nextState) {
            return (!arePropsEqual(nextProps, this.props) ||
                !shallowEqual(nextState, this.state));
        };
        DragDropContainer.prototype.componentDidMount = function () {
            this.isCurrentlyMounted = true;
            this.disposable = new disposables_1.SerialDisposable();
            this.currentType = undefined;
            this.receiveProps(this.props);
            this.handleChange();
        };
        DragDropContainer.prototype.componentDidUpdate = function (prevProps) {
            if (!arePropsEqual(this.props, prevProps)) {
                this.receiveProps(this.props);
                this.handleChange();
            }
        };
        DragDropContainer.prototype.componentWillUnmount = function () {
            this.dispose();
            this.isCurrentlyMounted = false;
        };
        DragDropContainer.prototype.receiveProps = function (props) {
            if (!this.handler) {
                return;
            }
            this.handler.receiveProps(props);
            this.receiveType(getType(props));
        };
        DragDropContainer.prototype.receiveType = function (type) {
            if (!this.handlerMonitor || !this.manager || !this.handlerConnector) {
                return;
            }
            if (type === this.currentType) {
                return;
            }
            this.currentType = type;
            var _a = registerHandler(type, this.handler, this.manager), handlerId = _a.handlerId, unregister = _a.unregister;
            this.handlerId = handlerId;
            this.handlerMonitor.receiveHandlerId(handlerId);
            this.handlerConnector.receiveHandlerId(handlerId);
            var globalMonitor = this.manager.getMonitor();
            var unsubscribe = globalMonitor.subscribeToStateChange(this.handleChange, { handlerIds: [handlerId] });
            this.disposable.setDisposable(new disposables_1.CompositeDisposable(new disposables_1.Disposable(unsubscribe), new disposables_1.Disposable(unregister)));
        };
        DragDropContainer.prototype.handleChange = function () {
            if (!this.isCurrentlyMounted) {
                return;
            }
            var nextState = this.getCurrentState();
            if (!shallowEqual(nextState, this.state)) {
                this.setState(nextState);
            }
        };
        DragDropContainer.prototype.dispose = function () {
            this.disposable.dispose();
            if (this.handlerConnector) {
                this.handlerConnector.receiveHandlerId(null);
            }
        };
        DragDropContainer.prototype.getCurrentState = function () {
            if (!this.handlerConnector) {
                return {};
            }
            var nextState = collect(this.handlerConnector.hooks, this.handlerMonitor);
            if (false) {
                invariant(isPlainObject(nextState), 'Expected `collect` specified as the second argument to ' +
                    '%s for %s to return a plain object of props to inject. ' +
                    'Instead, received %s.', containerDisplayName, displayName, nextState);
            }
            return nextState;
        };
        DragDropContainer.prototype.render = function () {
            var _this = this;
            return (React.createElement(DragDropContext_1.Consumer, null, function (_a) {
                var dragDropManager = _a.dragDropManager;
                if (dragDropManager === undefined) {
                    return null;
                }
                _this.receiveDragDropManager(dragDropManager);
                // Let componentDidMount fire to initialize the collected state
                if (!_this.isCurrentlyMounted) {
                    return null;
                }
                return (React.createElement(Decorated, __assign({}, _this.props, _this.state, { ref: _this.handler && isClassComponent(Decorated)
                        ? _this.handler.ref
                        : undefined })));
            }));
        };
        DragDropContainer.prototype.receiveDragDropManager = function (dragDropManager) {
            if (this.manager !== undefined) {
                return;
            }
            this.manager = dragDropManager;
            invariant(typeof dragDropManager === 'object', 'Could not find the drag and drop manager in the context of %s. ' +
                'Make sure to wrap the top-level component of your app with DragDropContext. ' +
                'Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);
            this.handlerMonitor = createMonitor(dragDropManager);
            this.handlerConnector = createConnector(dragDropManager.getBackend());
            this.handler = createHandler(this.handlerMonitor);
        };
        DragDropContainer.DecoratedComponent = DecoratedComponent;
        DragDropContainer.displayName = containerDisplayName + "(" + displayName + ")";
        return DragDropContainer;
    }(React.Component));
    return hoistStatics(DragDropContainer, DecoratedComponent);
}
exports.default = decorateHandler;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(0);
var cloneWithRef_1 = __webpack_require__(181);
function throwIfCompositeComponentElement(element) {
    // Custom components can no longer be wrapped directly in React DnD 2.0
    // so that we don't need to depend on findDOMNode() from react-dom.
    if (typeof element.type === 'string') {
        return;
    }
    var displayName = element.type.displayName || element.type.name || 'the component';
    throw new Error('Only native element nodes can now be passed to React DnD connectors.' +
        ("You can either wrap " + displayName + " into a <div>, or turn it into a ") +
        'drag source or a drop target itself.');
}
function wrapHookToRecognizeElement(hook) {
    return function (elementOrNode, options) {
        if (elementOrNode === void 0) { elementOrNode = null; }
        if (options === void 0) { options = null; }
        // When passed a node, call the hook straight away.
        if (!react_1.isValidElement(elementOrNode)) {
            var node = elementOrNode;
            hook(node, options);
            return undefined;
        }
        // If passed a ReactElement, clone it and attach this function as a ref.
        // This helps us achieve a neat API where user doesn't even know that refs
        // are being used under the hood.
        var element = elementOrNode;
        throwIfCompositeComponentElement(element);
        // When no options are passed, use the hook directly
        var ref = options ? function (node) { return hook(node, options); } : hook;
        return cloneWithRef_1.default(element, ref);
    };
}
function wrapConnectorHooks(hooks) {
    var wrappedHooks = {};
    Object.keys(hooks).forEach(function (key) {
        var hook = hooks[key];
        var wrappedHook = wrapHookToRecognizeElement(hook);
        wrappedHooks[key] = function () { return wrappedHook; };
    });
    return wrappedHooks;
}
exports.default = wrapConnectorHooks;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isValidType(type, allowArray) {
    return (typeof type === 'string' ||
        typeof type === 'symbol' ||
        (!!allowArray &&
            Array.isArray(type) &&
            type.every(function (t) { return isValidType(t, false); })));
}
exports.default = isValidType;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var memoize = __webpack_require__(63);
exports.isFirefox = memoize(function () {
    return /firefox/i.test(navigator.userAgent);
});
exports.isSafari = memoize(function () { return Boolean(window.safari); });


/***/ }),
/* 68 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 70 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_roughjs__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__card_info__ = __webpack_require__(235);
var _jsxFileName='/Users/wukai/learn/card-game/src/components/card-view.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(['\n  width: 90px;\n  height: 120px;\n  /* border: 2px solid #000; */\n  text-align: center;\n  font-size: 14px;\n  user-select: none;\n  /* border-radius: 8px; */\n  cursor: move;\n  position: relative;\n\n  .card-border {\n    /* svg \u7684\u5C3A\u5BF8\u8981\u8BBE\u7F6E\u7684\u7565\u5927\u4E8E\u7236\u5BB9\u5668 */\n    width: 120%;\n    height: 120%;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n\n  &.is-dragging {\n    opacity: 0.3;\n  }\n\n  p {\n    margin: 0;\n    margin-bottom: 10px;\n  }\n\n  .name {\n    font-size: 20px;\n    margin-bottom: 10%;\n  }\n\n  .desc.emoji {\n      font-size: 36px;\n    }\n'],['\n  width: 90px;\n  height: 120px;\n  /* border: 2px solid #000; */\n  text-align: center;\n  font-size: 14px;\n  user-select: none;\n  /* border-radius: 8px; */\n  cursor: move;\n  position: relative;\n\n  .card-border {\n    /* svg \u7684\u5C3A\u5BF8\u8981\u8BBE\u7F6E\u7684\u7565\u5927\u4E8E\u7236\u5BB9\u5668 */\n    width: 120%;\n    height: 120%;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n\n  &.is-dragging {\n    opacity: 0.3;\n  }\n\n  p {\n    margin: 0;\n    margin-bottom: 10px;\n  }\n\n  .name {\n    font-size: 20px;\n    margin-bottom: 10%;\n  }\n\n  .desc.emoji {\n      font-size: 36px;\n    }\n']);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}// import rough from './../../node_modules/roughjs/dist/rough.es5.min.js';
var Wrapper=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject);var CardView=function(_Component){_inherits(CardView,_Component);function CardView(props){_classCallCheck(this,CardView);// let cardBorder = React.createRef();
var _this=_possibleConstructorReturn(this,(CardView.__proto__||Object.getPrototypeOf(CardView)).call(this,props));_this.handleDoubleClick=function(){_this.props.playCard();};_this.setBorder=function(){var svg=_this.refs.cardBorder;var rc=__WEBPACK_IMPORTED_MODULE_4_roughjs__["a" /* default */].svg(svg);var strokeColor=_this.props.source===__WEBPACK_IMPORTED_MODULE_5__constants__["a" /* card_source */].monster?'red':'black';var node=rc.rectangle(0,0,100,130,{stroke:strokeColor});svg.appendChild(node);};_this.handleHover=function(){_this.isMouseIn=true;// 延时之后显示额外的卡牌说明信息
Object(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* delay */])(1000).then(function(){if(!_this.isMouseIn||_this.props.isDragging)return;_this.setState({shouldShowInfo:true});});};_this.handleLeave=function(){_this.setState({shouldShowInfo:false});_this.isMouseIn=false;};_this.state={shouldShowInfo:false};_this.isMouseIn=false;return _this;}_createClass(CardView,[{key:'componentDidMount',value:function componentDidMount(){this.setBorder();}},{key:'render',value:function render(){var _props=this.props,name=_props.name,desc=_props.desc,attack=_props.attack,armor=_props.armor,source=_props.source,isDragging=_props.isDragging,extraInfo=_props.extraInfo;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Wrapper,{className:__WEBPACK_IMPORTED_MODULE_3_classnames___default()('card',source,{'is-dragging':isDragging}),onDoubleClick:this.handleDoubleClick,onMouseEnter:this.handleHover,onMouseLeave:this.handleLeave,__source:{fileName:_jsxFileName,lineNumber:105},__self:this},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg',{className:'card-border',ref:'cardBorder',__source:{fileName:_jsxFileName,lineNumber:111},__self:this}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',{className:'name',__source:{fileName:_jsxFileName,lineNumber:112},__self:this},name),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',{className:desc.length<=2?'desc emoji':'desc',__source:{fileName:_jsxFileName,lineNumber:113},__self:this},desc),attack>0&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',{__source:{fileName:_jsxFileName,lineNumber:114},__self:this},'\u653B\u51FB\uFF1A',attack),armor>0&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',{__source:{fileName:_jsxFileName,lineNumber:115},__self:this},'\u62A4\u7532\uFF1A',armor),this.state.shouldShowInfo&&!isDragging&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__card_info__["a" /* default */],{info:extraInfo,__source:{fileName:_jsxFileName,lineNumber:117},__self:this}));}}]);return CardView;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);CardView.propTypes={name:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,desc:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,attack:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,armor:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number};/* harmony default export */ __webpack_exports__["a"] = (CardView);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__renderer_factory_js__ = __webpack_require__(225);

const hasSelf = typeof self !== 'undefined';
class RoughGeneratorBase {
    constructor(config, surface) {
        this.defaultOptions = {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: '#000',
            strokeWidth: 1,
            curveTightness: 0,
            curveStepCount: 9,
            fillStyle: 'hachure',
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1
        };
        this.config = config || {};
        this.surface = surface;
        this.renderer = Object(__WEBPACK_IMPORTED_MODULE_0__renderer_factory_js__["a" /* createRenderer */])(this.config);
        if (this.config.options) {
            this.defaultOptions = this._options(this.config.options);
        }
    }
    _options(options) {
        return options ? Object.assign({}, this.defaultOptions, options) : this.defaultOptions;
    }
    _drawable(shape, sets, options) {
        return { shape, sets: sets || [], options: options || this.defaultOptions };
    }
    get lib() {
        return this.renderer;
    }
    getCanvasSize() {
        const val = (w) => {
            if (w && typeof w === 'object') {
                if (w.baseVal && w.baseVal.value) {
                    return w.baseVal.value;
                }
            }
            return w || 100;
        };
        if (this.surface) {
            return [val(this.surface.width), val(this.surface.height)];
        }
        return [100, 100];
    }
    computePolygonSize(points) {
        if (points.length) {
            let left = points[0][0];
            let right = points[0][0];
            let top = points[0][1];
            let bottom = points[0][1];
            for (let i = 1; i < points.length; i++) {
                left = Math.min(left, points[i][0]);
                right = Math.max(right, points[i][0]);
                top = Math.min(top, points[i][1]);
                bottom = Math.max(bottom, points[i][1]);
            }
            return [(right - left), (bottom - top)];
        }
        return [0, 0];
    }
    polygonPath(points) {
        let d = '';
        if (points.length) {
            d = `M${points[0][0]},${points[0][1]}`;
            for (let i = 1; i < points.length; i++) {
                d = `${d} L${points[i][0]},${points[i][1]}`;
            }
        }
        return d;
    }
    computePathSize(d) {
        let size = [0, 0];
        if (hasSelf && self.document) {
            try {
                const ns = 'http://www.w3.org/2000/svg';
                const svg = self.document.createElementNS(ns, 'svg');
                svg.setAttribute('width', '0');
                svg.setAttribute('height', '0');
                const pathNode = self.document.createElementNS(ns, 'path');
                pathNode.setAttribute('d', d);
                svg.appendChild(pathNode);
                self.document.body.appendChild(svg);
                const bb = pathNode.getBBox();
                if (bb) {
                    size[0] = bb.width || 0;
                    size[1] = bb.height || 0;
                }
                self.document.body.removeChild(svg);
            }
            catch (err) { }
        }
        const canvasSize = this.getCanvasSize();
        if (!(size[0] * size[1])) {
            size = canvasSize;
        }
        return size;
    }
    toPaths(drawable) {
        const sets = drawable.sets || [];
        const o = drawable.options || this.defaultOptions;
        const paths = [];
        for (const drawing of sets) {
            let path = null;
            switch (drawing.type) {
                case 'path':
                    path = {
                        d: this.opsToPath(drawing),
                        stroke: o.stroke,
                        strokeWidth: o.strokeWidth,
                        fill: 'none'
                    };
                    break;
                case 'fillPath':
                    path = {
                        d: this.opsToPath(drawing),
                        stroke: 'none',
                        strokeWidth: 0,
                        fill: o.fill || 'none'
                    };
                    break;
                case 'fillSketch':
                    path = this.fillSketch(drawing, o);
                    break;
                case 'path2Dfill':
                    path = {
                        d: drawing.path || '',
                        stroke: 'none',
                        strokeWidth: 0,
                        fill: o.fill || 'none'
                    };
                    break;
                case 'path2Dpattern': {
                    const size = drawing.size;
                    const pattern = {
                        x: 0, y: 0, width: 1, height: 1,
                        viewBox: `0 0 ${Math.round(size[0])} ${Math.round(size[1])}`,
                        patternUnits: 'objectBoundingBox',
                        path: this.fillSketch(drawing, o)
                    };
                    path = {
                        d: drawing.path,
                        stroke: 'none',
                        strokeWidth: 0,
                        pattern: pattern
                    };
                    break;
                }
            }
            if (path) {
                paths.push(path);
            }
        }
        return paths;
    }
    fillSketch(drawing, o) {
        let fweight = o.fillWeight;
        if (fweight < 0) {
            fweight = o.strokeWidth / 2;
        }
        return {
            d: this.opsToPath(drawing),
            stroke: o.fill || 'none',
            strokeWidth: fweight,
            fill: 'none'
        };
    }
    opsToPath(drawing) {
        let path = '';
        for (const item of drawing.ops) {
            const data = item.data;
            switch (item.op) {
                case 'move':
                    path += `M${data[0]} ${data[1]} `;
                    break;
                case 'bcurveTo':
                    path += `C${data[0]} ${data[1]}, ${data[2]} ${data[3]}, ${data[4]} ${data[5]} `;
                    break;
                case 'qcurveTo':
                    path += `Q${data[0]} ${data[1]}, ${data[2]} ${data[3]} `;
                    break;
                case 'lineTo':
                    path += `L${data[0]} ${data[1]} `;
                    break;
            }
        }
        return path.trim();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RoughGeneratorBase;



/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = lineLength;
/* unused harmony export getIntersectingLines */
/* unused harmony export affine */
/* harmony export (immutable) */ __webpack_exports__["b"] = hachureLinesForPolygon;
/* harmony export (immutable) */ __webpack_exports__["a"] = hachureLinesForEllipse;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geometry__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_hachure__ = __webpack_require__(228);


function lineLength(line) {
    const p1 = line[0];
    const p2 = line[1];
    return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
}
function getIntersectingLines(line, points) {
    const intersections = [];
    const s1 = new __WEBPACK_IMPORTED_MODULE_0__geometry__["a" /* Segment */]([line[0], line[1]], [line[2], line[3]]);
    for (let i = 0; i < points.length; i++) {
        const s2 = new __WEBPACK_IMPORTED_MODULE_0__geometry__["a" /* Segment */](points[i], points[(i + 1) % points.length]);
        if (s1.intersects(s2)) {
            intersections.push([s1.xi, s1.yi]);
        }
    }
    return intersections;
}
function affine(x, y, cx, cy, sinAnglePrime, cosAnglePrime, R) {
    const A = -cx * cosAnglePrime - cy * sinAnglePrime + cx;
    const B = R * (cx * sinAnglePrime - cy * cosAnglePrime) + cy;
    const C = cosAnglePrime;
    const D = sinAnglePrime;
    const E = -R * sinAnglePrime;
    const F = R * cosAnglePrime;
    return [
        A + C * x + D * y,
        B + E * x + F * y
    ];
}
function hachureLinesForPolygon(points, o) {
    const ret = [];
    if (points && points.length) {
        let left = points[0][0];
        let right = points[0][0];
        let top = points[0][1];
        let bottom = points[0][1];
        for (let i = 1; i < points.length; i++) {
            left = Math.min(left, points[i][0]);
            right = Math.max(right, points[i][0]);
            top = Math.min(top, points[i][1]);
            bottom = Math.max(bottom, points[i][1]);
        }
        const angle = o.hachureAngle;
        let gap = o.hachureGap;
        if (gap < 0) {
            gap = o.strokeWidth * 4;
        }
        gap = Math.max(gap, 0.1);
        const radPerDeg = Math.PI / 180;
        const hachureAngle = (angle % 180) * radPerDeg;
        const cosAngle = Math.cos(hachureAngle);
        const sinAngle = Math.sin(hachureAngle);
        const tanAngle = Math.tan(hachureAngle);
        const it = new __WEBPACK_IMPORTED_MODULE_1__utils_hachure__["a" /* HachureIterator */](top - 1, bottom + 1, left - 1, right + 1, gap, sinAngle, cosAngle, tanAngle);
        let rect;
        while ((rect = it.nextLine()) != null) {
            const lines = getIntersectingLines(rect, points);
            for (let i = 0; i < lines.length; i++) {
                if (i < (lines.length - 1)) {
                    const p1 = lines[i];
                    const p2 = lines[i + 1];
                    ret.push([p1, p2]);
                }
            }
        }
    }
    return ret;
}
function hachureLinesForEllipse(cx, cy, width, height, o, renderer) {
    const ret = [];
    let rx = Math.abs(width / 2);
    let ry = Math.abs(height / 2);
    rx += renderer.getOffset(-rx * 0.05, rx * 0.05, o);
    ry += renderer.getOffset(-ry * 0.05, ry * 0.05, o);
    const angle = o.hachureAngle;
    let gap = o.hachureGap;
    if (gap <= 0) {
        gap = o.strokeWidth * 4;
    }
    let fweight = o.fillWeight;
    if (fweight < 0) {
        fweight = o.strokeWidth / 2;
    }
    const radPerDeg = Math.PI / 180;
    const hachureAngle = (angle % 180) * radPerDeg;
    const tanAngle = Math.tan(hachureAngle);
    const aspectRatio = ry / rx;
    const hyp = Math.sqrt(aspectRatio * tanAngle * aspectRatio * tanAngle + 1);
    const sinAnglePrime = aspectRatio * tanAngle / hyp;
    const cosAnglePrime = 1 / hyp;
    const gapPrime = gap / ((rx * ry / Math.sqrt((ry * cosAnglePrime) * (ry * cosAnglePrime) + (rx * sinAnglePrime) * (rx * sinAnglePrime))) / rx);
    let halfLen = Math.sqrt((rx * rx) - (cx - rx + gapPrime) * (cx - rx + gapPrime));
    for (let xPos = cx - rx + gapPrime; xPos < cx + rx; xPos += gapPrime) {
        halfLen = Math.sqrt((rx * rx) - (cx - xPos) * (cx - xPos));
        const p1 = affine(xPos, cy - halfLen, cx, cy, sinAnglePrime, cosAnglePrime, aspectRatio);
        const p2 = affine(xPos, cy + halfLen, cx, cy, sinAnglePrime, cosAnglePrime, aspectRatio);
        ret.push([p1, p2]);
    }
    return ret;
}


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Segment {
    constructor(p1, p2) {
        this.xi = Number.MAX_VALUE;
        this.yi = Number.MAX_VALUE;
        this.px1 = p1[0];
        this.py1 = p1[1];
        this.px2 = p2[0];
        this.py2 = p2[1];
        this.a = this.py2 - this.py1;
        this.b = this.px1 - this.px2;
        this.c = this.px2 * this.py1 - this.px1 * this.py2;
        this._undefined = ((this.a === 0) && (this.b === 0) && (this.c === 0));
    }
    isUndefined() {
        return this._undefined;
    }
    intersects(otherSegment) {
        if (this.isUndefined() || otherSegment.isUndefined()) {
            return false;
        }
        let grad1 = Number.MAX_VALUE;
        let grad2 = Number.MAX_VALUE;
        let int1 = 0, int2 = 0;
        const a = this.a, b = this.b, c = this.c;
        if (Math.abs(b) > 0.00001) {
            grad1 = -a / b;
            int1 = -c / b;
        }
        if (Math.abs(otherSegment.b) > 0.00001) {
            grad2 = -otherSegment.a / otherSegment.b;
            int2 = -otherSegment.c / otherSegment.b;
        }
        if (grad1 === Number.MAX_VALUE) {
            if (grad2 === Number.MAX_VALUE) {
                if ((-c / a) !== (-otherSegment.c / otherSegment.a)) {
                    return false;
                }
                if ((this.py1 >= Math.min(otherSegment.py1, otherSegment.py2)) && (this.py1 <= Math.max(otherSegment.py1, otherSegment.py2))) {
                    this.xi = this.px1;
                    this.yi = this.py1;
                    return true;
                }
                if ((this.py2 >= Math.min(otherSegment.py1, otherSegment.py2)) && (this.py2 <= Math.max(otherSegment.py1, otherSegment.py2))) {
                    this.xi = this.px2;
                    this.yi = this.py2;
                    return true;
                }
                return false;
            }
            this.xi = this.px1;
            this.yi = (grad2 * this.xi + int2);
            if (((this.py1 - this.yi) * (this.yi - this.py2) < -0.00001) || ((otherSegment.py1 - this.yi) * (this.yi - otherSegment.py2) < -0.00001)) {
                return false;
            }
            if (Math.abs(otherSegment.a) < 0.00001) {
                if ((otherSegment.px1 - this.xi) * (this.xi - otherSegment.px2) < -0.00001) {
                    return false;
                }
                return true;
            }
            return true;
        }
        if (grad2 === Number.MAX_VALUE) {
            this.xi = otherSegment.px1;
            this.yi = grad1 * this.xi + int1;
            if (((otherSegment.py1 - this.yi) * (this.yi - otherSegment.py2) < -0.00001) || ((this.py1 - this.yi) * (this.yi - this.py2) < -0.00001)) {
                return false;
            }
            if (Math.abs(a) < 0.00001) {
                if ((this.px1 - this.xi) * (this.xi - this.px2) < -0.00001) {
                    return false;
                }
                return true;
            }
            return true;
        }
        if (grad1 === grad2) {
            if (int1 !== int2) {
                return false;
            }
            if ((this.px1 >= Math.min(otherSegment.px1, otherSegment.px2)) && (this.px1 <= Math.max(otherSegment.py1, otherSegment.py2))) {
                this.xi = this.px1;
                this.yi = this.py1;
                return true;
            }
            if ((this.px2 >= Math.min(otherSegment.px1, otherSegment.px2)) && (this.px2 <= Math.max(otherSegment.px1, otherSegment.px2))) {
                this.xi = this.px2;
                this.yi = this.py2;
                return true;
            }
            return false;
        }
        this.xi = ((int2 - int1) / (grad1 - grad2));
        this.yi = (grad1 * this.xi + int1);
        if (((this.px1 - this.xi) * (this.xi - this.px2) < -0.00001) || ((otherSegment.px1 - this.xi) * (this.xi - otherSegment.px2) < -0.00001)) {
            return false;
        }
        return true;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Segment;



/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__renderer__ = __webpack_require__(41);

const hasDocument = typeof document !== 'undefined';
class RoughCanvasBase {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
    }
    static createRenderer() {
        return new __WEBPACK_IMPORTED_MODULE_0__renderer__["a" /* RoughRenderer */]();
    }
    draw(drawable) {
        const sets = drawable.sets || [];
        const o = drawable.options || this.getDefaultOptions();
        const ctx = this.ctx;
        for (const drawing of sets) {
            switch (drawing.type) {
                case 'path':
                    ctx.save();
                    ctx.strokeStyle = o.stroke;
                    ctx.lineWidth = o.strokeWidth;
                    this._drawToContext(ctx, drawing);
                    ctx.restore();
                    break;
                case 'fillPath':
                    ctx.save();
                    ctx.fillStyle = o.fill || '';
                    this._drawToContext(ctx, drawing);
                    ctx.restore();
                    break;
                case 'fillSketch':
                    this.fillSketch(ctx, drawing, o);
                    break;
                case 'path2Dfill': {
                    this.ctx.save();
                    this.ctx.fillStyle = o.fill || '';
                    const p2d = new Path2D(drawing.path);
                    this.ctx.fill(p2d);
                    this.ctx.restore();
                    break;
                }
                case 'path2Dpattern': {
                    const doc = this.canvas.ownerDocument || (hasDocument && document);
                    if (doc) {
                        const size = drawing.size;
                        const hcanvas = doc.createElement('canvas');
                        const hcontext = hcanvas.getContext('2d');
                        const bbox = this.computeBBox(drawing.path);
                        if (bbox && (bbox.width || bbox.height)) {
                            hcanvas.width = this.canvas.width;
                            hcanvas.height = this.canvas.height;
                            hcontext.translate(bbox.x || 0, bbox.y || 0);
                        }
                        else {
                            hcanvas.width = size[0];
                            hcanvas.height = size[1];
                        }
                        this.fillSketch(hcontext, drawing, o);
                        this.ctx.save();
                        this.ctx.fillStyle = this.ctx.createPattern(hcanvas, 'repeat');
                        const p2d = new Path2D(drawing.path);
                        this.ctx.fill(p2d);
                        this.ctx.restore();
                    }
                    else {
                        console.error('Cannot render path2Dpattern. No defs/document defined.');
                    }
                    break;
                }
            }
        }
    }
    computeBBox(d) {
        if (hasDocument) {
            try {
                const ns = 'http://www.w3.org/2000/svg';
                const svg = document.createElementNS(ns, 'svg');
                svg.setAttribute('width', '0');
                svg.setAttribute('height', '0');
                const pathNode = self.document.createElementNS(ns, 'path');
                pathNode.setAttribute('d', d);
                svg.appendChild(pathNode);
                document.body.appendChild(svg);
                const bbox = pathNode.getBBox();
                document.body.removeChild(svg);
                return bbox;
            }
            catch (err) { }
        }
        return null;
    }
    fillSketch(ctx, drawing, o) {
        let fweight = o.fillWeight;
        if (fweight < 0) {
            fweight = o.strokeWidth / 2;
        }
        ctx.save();
        ctx.strokeStyle = o.fill || '';
        ctx.lineWidth = fweight;
        this._drawToContext(ctx, drawing);
        ctx.restore();
    }
    _drawToContext(ctx, drawing) {
        ctx.beginPath();
        for (const item of drawing.ops) {
            const data = item.data;
            switch (item.op) {
                case 'move':
                    ctx.moveTo(data[0], data[1]);
                    break;
                case 'bcurveTo':
                    ctx.bezierCurveTo(data[0], data[1], data[2], data[3], data[4], data[5]);
                    break;
                case 'qcurveTo':
                    ctx.quadraticCurveTo(data[0], data[1], data[2], data[3]);
                    break;
                case 'lineTo':
                    ctx.lineTo(data[0], data[1]);
                    break;
            }
        }
        if (drawing.type === 'fillPath') {
            ctx.fill();
        }
        else {
            ctx.stroke();
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RoughCanvasBase;



/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__renderer__ = __webpack_require__(41);

const hasDocument = typeof document !== 'undefined';
class RoughSVGBase {
    constructor(svg) {
        this.svg = svg;
    }
    static createRenderer() {
        return new __WEBPACK_IMPORTED_MODULE_0__renderer__["a" /* RoughRenderer */]();
    }
    get defs() {
        const doc = this.svg.ownerDocument || (hasDocument && document);
        if (doc) {
            if (!this._defs) {
                const dnode = doc.createElementNS('http://www.w3.org/2000/svg', 'defs');
                if (this.svg.firstChild) {
                    this.svg.insertBefore(dnode, this.svg.firstChild);
                }
                else {
                    this.svg.appendChild(dnode);
                }
                this._defs = dnode;
            }
        }
        return this._defs || null;
    }
    draw(drawable) {
        const sets = drawable.sets || [];
        const o = drawable.options || this.getDefaultOptions();
        const doc = this.svg.ownerDocument || (hasDocument && document);
        const g = doc.createElementNS('http://www.w3.org/2000/svg', 'g');
        for (const drawing of sets) {
            let path = null;
            switch (drawing.type) {
                case 'path': {
                    path = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
                    path.setAttribute('d', this.opsToPath(drawing));
                    path.style.stroke = o.stroke;
                    path.style.strokeWidth = o.strokeWidth + '';
                    path.style.fill = 'none';
                    break;
                }
                case 'fillPath': {
                    path = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
                    path.setAttribute('d', this.opsToPath(drawing));
                    path.style.stroke = 'none';
                    path.style.strokeWidth = '0';
                    path.style.fill = o.fill || null;
                    break;
                }
                case 'fillSketch': {
                    path = this.fillSketch(doc, drawing, o);
                    break;
                }
                case 'path2Dfill': {
                    path = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
                    path.setAttribute('d', drawing.path || '');
                    path.style.stroke = 'none';
                    path.style.strokeWidth = '0';
                    path.style.fill = o.fill || null;
                    break;
                }
                case 'path2Dpattern': {
                    if (!this.defs) {
                        console.error('Cannot render path2Dpattern. No defs/document defined.');
                    }
                    else {
                        const size = drawing.size;
                        const pattern = doc.createElementNS('http://www.w3.org/2000/svg', 'pattern');
                        const id = `rough-${Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER || 999999))}`;
                        pattern.setAttribute('id', id);
                        pattern.setAttribute('x', '0');
                        pattern.setAttribute('y', '0');
                        pattern.setAttribute('width', '1');
                        pattern.setAttribute('height', '1');
                        pattern.setAttribute('height', '1');
                        pattern.setAttribute('viewBox', `0 0 ${Math.round(size[0])} ${Math.round(size[1])}`);
                        pattern.setAttribute('patternUnits', 'objectBoundingBox');
                        const patternPath = this.fillSketch(doc, drawing, o);
                        pattern.appendChild(patternPath);
                        this.defs.appendChild(pattern);
                        path = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
                        path.setAttribute('d', drawing.path || '');
                        path.style.stroke = 'none';
                        path.style.strokeWidth = '0';
                        path.style.fill = `url(#${id})`;
                    }
                    break;
                }
            }
            if (path) {
                g.appendChild(path);
            }
        }
        return g;
    }
    fillSketch(doc, drawing, o) {
        let fweight = o.fillWeight;
        if (fweight < 0) {
            fweight = o.strokeWidth / 2;
        }
        const path = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', this.opsToPath(drawing));
        path.style.stroke = o.fill || null;
        path.style.strokeWidth = fweight + '';
        path.style.fill = 'none';
        return path;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RoughSVGBase;



/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = uuid;
/* harmony export (immutable) */ __webpack_exports__["b"] = shuffle;
/* harmony export (immutable) */ __webpack_exports__["a"] = delay;
// copy from mobx-todomvc
function uuid(){var uuid='';for(var i=0;i<32;i++){var random=Math.random()*16|0;if(i===8||i===12||i===16||i===20){uuid+='-';}// eslint-disable-next-line
uuid+=(i===12?4:i===16?random&3|8:random).toString(16);}return uuid;}function shuffle(array){var m=array.length;var t=void 0;var i=void 0;// While there remain elements to shuffle
while(m){// Pick a remaining element...
i=Math.floor(Math.random()*m--);// And swap it with the current element
t=array[m];array[m]=array[i];array[i]=t;}return array;}function delay(ms){return new Promise(function(resolve){setTimeout(resolve,ms);});}

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(2);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _desc,_value,_class,_descriptor,_descriptor2,_descriptor3,_descriptor4,_descriptor5;function _initDefineProp(target,property,descriptor,context){if(!descriptor)return;Object.defineProperty(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0});}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}function _initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');}/**
 * 记录游戏的中的各种状态信息，如当前是谁的回合，游戏的输赢状态
 */var GameState=(_class=function(){_createClass(GameState,[{key:'isGameOver',// 记录是玩家还是敌人的回合
get:function get(){return this.runStatus===__WEBPACK_IMPORTED_MODULE_1__constants__["f" /* run_status */].win||this.runStatus===__WEBPACK_IMPORTED_MODULE_1__constants__["f" /* run_status */].lose;}// 记录当前是第几回合
}]);function GameState(info){_classCallCheck(this,GameState);_initDefineProp(this,'currentTurn',_descriptor,this);_initDefineProp(this,'runStatus',_descriptor2,this);_initDefineProp(this,'effects',_descriptor3,this);_initDefineProp(this,'turnCount',_descriptor4,this);_initDefineProp(this,'showHistory',_descriptor5,this);this.currentTurn=info.currentTurn;this.runStatus=__WEBPACK_IMPORTED_MODULE_1__constants__["f" /* run_status */].running;this.effects=[];this.turnCount=1;}_createClass(GameState,[{key:'increaseTurnCount',value:function increaseTurnCount(){this.turnCount+=1;}}]);return GameState;}(),(_descriptor=_applyDecoratedDescriptor(_class.prototype,'currentTurn',[__WEBPACK_IMPORTED_MODULE_0_mobx__["m" /* observable */]],{enumerable:true,initializer:null}),_descriptor2=_applyDecoratedDescriptor(_class.prototype,'runStatus',[__WEBPACK_IMPORTED_MODULE_0_mobx__["m" /* observable */]],{enumerable:true,initializer:null}),_descriptor3=_applyDecoratedDescriptor(_class.prototype,'effects',[__WEBPACK_IMPORTED_MODULE_0_mobx__["m" /* observable */]],{enumerable:true,initializer:null}),_descriptor4=_applyDecoratedDescriptor(_class.prototype,'turnCount',[__WEBPACK_IMPORTED_MODULE_0_mobx__["m" /* observable */]],{enumerable:true,initializer:null}),_descriptor5=_applyDecoratedDescriptor(_class.prototype,'showHistory',[__WEBPACK_IMPORTED_MODULE_0_mobx__["m" /* observable */]],{enumerable:true,initializer:function initializer(){return false;}}),_applyDecoratedDescriptor(_class.prototype,'isGameOver',[__WEBPACK_IMPORTED_MODULE_0_mobx__["f" /* computed */]],Object.getOwnPropertyDescriptor(_class.prototype,'isGameOver'),_class.prototype),_applyDecoratedDescriptor(_class.prototype,'increaseTurnCount',[__WEBPACK_IMPORTED_MODULE_0_mobx__["d" /* action */]],Object.getOwnPropertyDescriptor(_class.prototype,'increaseTurnCount'),_class.prototype)),_class);var gameState=new GameState({currentTurn:__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* game_turn */].hero});Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["e" /* autorun */])(function(){console.log('当前是第'+gameState.turnCount+'回合');});// reaction(
//   () => gameState.turnCount,
//   (count, reaction) => {
//       console.log("reaction 3: invoked. counter.count = " + count);
//   }
// );
/* harmony default export */ __webpack_exports__["a"] = (gameState);

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(80);
module.exports = __webpack_require__(85);


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  __webpack_require__(81).enable();
  window.Promise = __webpack_require__(82);
}

// fetch() polyfill for making API calls.
__webpack_require__(83);

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = __webpack_require__(84);

// In tests, polyfill requestAnimationFrame since jsdom doesn't provide it yet.
// We don't polyfill it in the browser--this is user's responsibility.
if (false) {
  require('raf').polyfill(global);
}


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__(44);

var DEFAULT_WHITELIST = [
  ReferenceError,
  TypeError,
  RangeError
];

var enabled = false;
exports.disable = disable;
function disable() {
  enabled = false;
  Promise._47 = null;
  Promise._71 = null;
}

exports.enable = enable;
function enable(options) {
  options = options || {};
  if (enabled) disable();
  enabled = true;
  var id = 0;
  var displayId = 0;
  var rejections = {};
  Promise._47 = function (promise) {
    if (
      promise._83 === 2 && // IS REJECTED
      rejections[promise._56]
    ) {
      if (rejections[promise._56].logged) {
        onHandled(promise._56);
      } else {
        clearTimeout(rejections[promise._56].timeout);
      }
      delete rejections[promise._56];
    }
  };
  Promise._71 = function (promise, err) {
    if (promise._75 === 0) { // not yet handled
      promise._56 = id++;
      rejections[promise._56] = {
        displayId: null,
        error: err,
        timeout: setTimeout(
          onUnhandled.bind(null, promise._56),
          // For reference errors and type errors, this almost always
          // means the programmer made a mistake, so log them after just
          // 100ms
          // otherwise, wait 2 seconds to see if they get handled
          matchWhitelist(err, DEFAULT_WHITELIST)
            ? 100
            : 2000
        ),
        logged: false
      };
    }
  };
  function onUnhandled(id) {
    if (
      options.allRejections ||
      matchWhitelist(
        rejections[id].error,
        options.whitelist || DEFAULT_WHITELIST
      )
    ) {
      rejections[id].displayId = displayId++;
      if (options.onUnhandled) {
        rejections[id].logged = true;
        options.onUnhandled(
          rejections[id].displayId,
          rejections[id].error
        );
      } else {
        rejections[id].logged = true;
        logError(
          rejections[id].displayId,
          rejections[id].error
        );
      }
    }
  }
  function onHandled(id) {
    if (rejections[id].logged) {
      if (options.onHandled) {
        options.onHandled(rejections[id].displayId, rejections[id].error);
      } else if (!rejections[id].onUnhandled) {
        console.warn(
          'Promise Rejection Handled (id: ' + rejections[id].displayId + '):'
        );
        console.warn(
          '  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' +
          rejections[id].displayId + '.'
        );
      }
    }
  }
}

function logError(id, error) {
  console.warn('Possible Unhandled Promise Rejection (id: ' + id + '):');
  var errStr = (error && (error.stack || error)) + '';
  errStr.split('\n').forEach(function (line) {
    console.warn('  ' + line);
  });
}

function matchWhitelist(error, list) {
  return list.some(function (cls) {
    return error instanceof cls;
  });
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//This file contains the ES6 extensions to the core Promises/A+ API

var Promise = __webpack_require__(44);

module.exports = Promise;

/* Static Functions */

var TRUE = valuePromise(true);
var FALSE = valuePromise(false);
var NULL = valuePromise(null);
var UNDEFINED = valuePromise(undefined);
var ZERO = valuePromise(0);
var EMPTYSTRING = valuePromise('');

function valuePromise(value) {
  var p = new Promise(Promise._44);
  p._83 = 1;
  p._18 = value;
  return p;
}
Promise.resolve = function (value) {
  if (value instanceof Promise) return value;

  if (value === null) return NULL;
  if (value === undefined) return UNDEFINED;
  if (value === true) return TRUE;
  if (value === false) return FALSE;
  if (value === 0) return ZERO;
  if (value === '') return EMPTYSTRING;

  if (typeof value === 'object' || typeof value === 'function') {
    try {
      var then = value.then;
      if (typeof then === 'function') {
        return new Promise(then.bind(value));
      }
    } catch (ex) {
      return new Promise(function (resolve, reject) {
        reject(ex);
      });
    }
  }
  return valuePromise(value);
};

Promise.all = function (arr) {
  var args = Array.prototype.slice.call(arr);

  return new Promise(function (resolve, reject) {
    if (args.length === 0) return resolve([]);
    var remaining = args.length;
    function res(i, val) {
      if (val && (typeof val === 'object' || typeof val === 'function')) {
        if (val instanceof Promise && val.then === Promise.prototype.then) {
          while (val._83 === 3) {
            val = val._18;
          }
          if (val._83 === 1) return res(i, val._18);
          if (val._83 === 2) reject(val._18);
          val.then(function (val) {
            res(i, val);
          }, reject);
          return;
        } else {
          var then = val.then;
          if (typeof then === 'function') {
            var p = new Promise(then.bind(val));
            p.then(function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }
      }
      args[i] = val;
      if (--remaining === 0) {
        resolve(args);
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

Promise.race = function (values) {
  return new Promise(function (resolve, reject) {
    values.forEach(function(value){
      Promise.resolve(value).then(resolve, reject);
    });
  });
};

/* Prototype Methods */

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};


/***/ }),
/* 83 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dnd__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dnd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dnd_html5_backend__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dnd_html5_backend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dnd_html5_backend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__App__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_hero_model__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_monster_model__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__registerServiceWorker__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__index_css__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__decks__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__model_game_state_model__ = __webpack_require__(78);
var _jsxFileName='/Users/wukai/learn/card-game/src/index.js';var hero=new __WEBPACK_IMPORTED_MODULE_5__model_hero_model__["a" /* default */]({life:50,armor:0});var boss=new __WEBPACK_IMPORTED_MODULE_6__model_monster_model__["a" /* default */]({life:50,armor:0});__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_dnd__["DragDropContextProvider"],{backend:__WEBPACK_IMPORTED_MODULE_3_react_dnd_html5_backend___default.a,__source:{fileName:_jsxFileName,lineNumber:18},__self:this},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__App__["a" /* default */],{hero:hero,boss:boss,decks:__WEBPACK_IMPORTED_MODULE_9__decks__["a" /* default */],gameState:__WEBPACK_IMPORTED_MODULE_10__model_game_state_model__["a" /* default */],__source:{fileName:_jsxFileName,lineNumber:19},__self:this})),document.getElementById('root'));Object(__WEBPACK_IMPORTED_MODULE_7__registerServiceWorker__["a" /* default */])();

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.5.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var m=__webpack_require__(87),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.async_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112;n&&Symbol.for("react.placeholder");
var z="function"===typeof Symbol&&Symbol.iterator;function A(a,b,d,c,e,g,h,f){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var k=[d,c,e,g,h,f],l=0;a=Error(b.replace(/%s/g,function(){return k[l++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function B(a){for(var b=arguments.length-1,d="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)d+="&args[]="+encodeURIComponent(arguments[c+1]);A(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",d)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D={};
function E(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?B("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C}var H=G.prototype=new F;
H.constructor=G;m(H,E.prototype);H.isPureReactComponent=!0;var I={current:null,currentDispatcher:null},J=Object.prototype.hasOwnProperty,K={key:!0,ref:!0,__self:!0,__source:!0};
function L(a,b,d){var c=void 0,e={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)J.call(b,c)&&!K.hasOwnProperty(c)&&(e[c]=b[c]);var f=arguments.length-2;if(1===f)e.children=d;else if(1<f){for(var k=Array(f),l=0;l<f;l++)k[l]=arguments[l+2];e.children=k}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===e[c]&&(e[c]=f[c]);return{$$typeof:p,type:a,key:g,ref:h,props:e,_owner:I.current}}
function M(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,d,c){if(P.length){var e=P.pop();e.result=a;e.keyPrefix=b;e.func=d;e.context=c;e.count=0;return e}return{result:a,keyPrefix:b,func:d,context:c,count:0}}
function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,d,c){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var g=!1;if(null===a)g=!0;else switch(e){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return d(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){e=a[h];var f=b+T(e,h);g+=S(e,f,d,c)}else if(null===a||"object"!==typeof a?f=null:(f=z&&a[z]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),h=
0;!(e=a.next()).done;)e=e.value,f=b+T(e,h++),g+=S(e,f,d,c);else"object"===e&&(d=""+a,B("31","[object Object]"===d?"object with keys {"+Object.keys(a).join(", ")+"}":d,""));return g}function U(a,b,d){return null==a?0:S(a,"",b,d)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function V(a,b){a.func.call(a.context,b,a.count++)}
function aa(a,b,d){var c=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?W(a,c,d,function(a){return a}):null!=a&&(N(a)&&(a=M(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+d)),c.push(a))}function W(a,b,d,c,e){var g="";null!=d&&(g=(""+d).replace(O,"$&/")+"/");b=Q(b,g,c,e);U(a,aa,b);R(b)}function ba(a,b){var d=I.currentDispatcher;null===d?B("277"):void 0;return d.readContext(a,b)}
var X={Children:{map:function(a,b,d){if(null==a)return a;var c=[];W(a,c,null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=Q(null,null,b,d);U(a,V,b);R(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];W(a,b,null,function(a){return a});return b},only:function(a){N(a)?void 0:B("143");return a}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,Provider:null,Consumer:null,unstable_read:null};a.Provider={$$typeof:v,_context:a};a.Consumer=a;a.unstable_read=ba.bind(null,a);return a},forwardRef:function(a){return{$$typeof:y,render:a}},Fragment:r,StrictMode:t,unstable_AsyncMode:x,unstable_Profiler:u,createElement:L,cloneElement:function(a,b,d){null===a||void 0===a?B("267",a):void 0;var c=void 0,e=m({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(h=b.ref,f=I.current);void 0!==b.key&&(g=""+b.key);
var k=void 0;a.type&&a.type.defaultProps&&(k=a.type.defaultProps);for(c in b)J.call(b,c)&&!K.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==k?k[c]:b[c])}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){k=Array(c);for(var l=0;l<c;l++)k[l]=arguments[l+2];e.children=k}return{$$typeof:p,type:a.type,key:g,ref:h,props:e,_owner:f}},createFactory:function(a){var b=L.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.5.1",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:I,
assign:m}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.5.1
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(0),n=__webpack_require__(89),ba=__webpack_require__(90);function ca(a,b,c,d,e,f,g,h){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var k=[c,d,e,f,g,h],l=0;a=Error(b.replace(/%s/g,function(){return k[l++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function t(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);ca(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c)}aa?void 0:t("227");function da(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}
var ea=!1,fa=null,ha=!1,ia=null,ja={onError:function(a){ea=!0;fa=a}};function ka(a,b,c,d,e,f,g,h,k){ea=!1;fa=null;da.apply(ja,arguments)}function la(a,b,c,d,e,f,g,h,k){ka.apply(this,arguments);if(ea){if(ea){var l=fa;ea=!1;fa=null}else t("198"),l=void 0;ha||(ha=!0,ia=l)}}var ma=null,na={};
function oa(){if(ma)for(var a in na){var b=na[a],c=ma.indexOf(a);-1<c?void 0:t("96",a);if(!pa[c]){b.extractEvents?void 0:t("97",a);pa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;qa.hasOwnProperty(h)?t("99",h):void 0;qa[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ra(k[e],g,h);e=!0}else f.registrationName?(ra(f.registrationName,g,h),e=!0):e=!1;e?void 0:t("98",d,a)}}}}
function ra(a,b,c){sa[a]?t("100",a):void 0;sa[a]=b;ta[a]=b.eventTypes[c].dependencies}var pa=[],qa={},sa={},ta={},ua=null,va=null,wa=null;function xa(a,b,c,d){b=a.type||"unknown-event";a.currentTarget=wa(d);la(b,c,void 0,a);a.currentTarget=null}function ya(a,b){null==b?t("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
function za(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var Aa=null;function Ba(a,b){if(a){var c=a._dispatchListeners,d=a._dispatchInstances;if(Array.isArray(c))for(var e=0;e<c.length&&!a.isPropagationStopped();e++)xa(a,b,c[e],d[e]);else c&&xa(a,b,c,d);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function Ca(a){return Ba(a,!0)}function Da(a){return Ba(a,!1)}
var Ea={injectEventPluginOrder:function(a){ma?t("101"):void 0;ma=Array.prototype.slice.call(a);oa()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];na.hasOwnProperty(c)&&na[c]===d||(na[c]?t("102",c):void 0,na[c]=d,b=!0)}b&&oa()}};
function Fa(a,b){var c=a.stateNode;if(!c)return null;var d=ua(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;c&&"function"!==typeof c?t("231",b,typeof c):void 0;
return c}function Ga(a,b){null!==a&&(Aa=ya(Aa,a));a=Aa;Aa=null;if(a&&(b?za(a,Ca):za(a,Da),Aa?t("95"):void 0,ha))throw b=ia,ha=!1,ia=null,b;}var Ha=Math.random().toString(36).slice(2),Ia="__reactInternalInstance$"+Ha,Ja="__reactEventHandlers$"+Ha;function Ka(a){if(a[Ia])return a[Ia];for(;!a[Ia];)if(a.parentNode)a=a.parentNode;else return null;a=a[Ia];return 7===a.tag||8===a.tag?a:null}function La(a){a=a[Ia];return!a||7!==a.tag&&8!==a.tag?null:a}
function Ma(a){if(7===a.tag||8===a.tag)return a.stateNode;t("33")}function Na(a){return a[Ja]||null}function Oa(a){do a=a.return;while(a&&7!==a.tag);return a?a:null}function Pa(a,b,c){if(b=Fa(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=ya(c._dispatchListeners,b),c._dispatchInstances=ya(c._dispatchInstances,a)}
function Qa(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Oa(b);for(b=c.length;0<b--;)Pa(c[b],"captured",a);for(b=0;b<c.length;b++)Pa(c[b],"bubbled",a)}}function Ra(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Fa(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=ya(c._dispatchListeners,b),c._dispatchInstances=ya(c._dispatchInstances,a))}function Ta(a){a&&a.dispatchConfig.registrationName&&Ra(a._targetInst,null,a)}
function Ua(a){za(a,Qa)}var Va=!("undefined"===typeof window||!window.document||!window.document.createElement);function Wa(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ya={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionend:Wa("Transition","TransitionEnd")},Za={},$a={};
Va&&($a=document.createElement("div").style,"AnimationEvent"in window||(delete Ya.animationend.animation,delete Ya.animationiteration.animation,delete Ya.animationstart.animation),"TransitionEvent"in window||delete Ya.transitionend.transition);function ab(a){if(Za[a])return Za[a];if(!Ya[a])return a;var b=Ya[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in $a)return Za[a]=b[c];return a}
var bb=ab("animationend"),cb=ab("animationiteration"),db=ab("animationstart"),eb=ab("transitionend"),fb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gb=null,hb=null,ib=null;
function jb(){if(ib)return ib;var a,b=hb,c=b.length,d,e="value"in gb?gb.value:gb.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return ib=e.slice(a,1<d?1-d:void 0)}function kb(){return!0}function lb(){return!1}
function z(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?kb:lb;this.isPropagationStopped=lb;return this}
n(z.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=kb)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=kb)},persist:function(){this.isPersistent=kb},isPersistent:lb,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=lb;this._dispatchInstances=this._dispatchListeners=null}});z.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
z.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;mb(c);return c};mb(z);function nb(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function ob(a){a instanceof this?void 0:t("279");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}
function mb(a){a.eventPool=[];a.getPooled=nb;a.release=ob}var pb=z.extend({data:null}),qb=z.extend({data:null}),rb=[9,13,27,32],sb=Va&&"CompositionEvent"in window,tb=null;Va&&"documentMode"in document&&(tb=document.documentMode);
var ub=Va&&"TextEvent"in window&&!tb,vb=Va&&(!sb||tb&&8<tb&&11>=tb),wb=String.fromCharCode(32),xb={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},yb=!1;
function zb(a,b){switch(a){case "keyup":return-1!==rb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function Ab(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var Bb=!1;function Cb(a,b){switch(a){case "compositionend":return Ab(b);case "keypress":if(32!==b.which)return null;yb=!0;return wb;case "textInput":return a=b.data,a===wb&&yb?null:a;default:return null}}
function Db(a,b){if(Bb)return"compositionend"===a||!sb&&zb(a,b)?(a=jb(),ib=hb=gb=null,Bb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return vb&&"ko"!==b.locale?null:b.data;default:return null}}
var Eb={eventTypes:xb,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(sb)b:{switch(a){case "compositionstart":e=xb.compositionStart;break b;case "compositionend":e=xb.compositionEnd;break b;case "compositionupdate":e=xb.compositionUpdate;break b}e=void 0}else Bb?zb(a,c)&&(e=xb.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=xb.compositionStart);e?(vb&&"ko"!==c.locale&&(Bb||e!==xb.compositionStart?e===xb.compositionEnd&&Bb&&(f=jb()):(gb=d,hb="value"in gb?gb.value:gb.textContent,Bb=
!0)),e=pb.getPooled(e,b,c,d),f?e.data=f:(f=Ab(c),null!==f&&(e.data=f)),Ua(e),f=e):f=null;(a=ub?Cb(a,c):Db(a,c))?(b=qb.getPooled(xb.beforeInput,b,c,d),b.data=a,Ua(b)):b=null;return null===f?b:null===b?f:[f,b]}},Fb=null,Gb=null,Hb=null;function Ib(a){if(a=va(a)){"function"!==typeof Fb?t("280"):void 0;var b=ua(a.stateNode);Fb(a.stateNode,a.type,b)}}function Jb(a){Gb?Hb?Hb.push(a):Hb=[a]:Gb=a}function Kb(){if(Gb){var a=Gb,b=Hb;Hb=Gb=null;Ib(a);if(b)for(a=0;a<b.length;a++)Ib(b[a])}}
function Lb(a,b){return a(b)}function Mb(a,b,c){return a(b,c)}function Nb(){}var Ob=!1;function Pb(a,b){if(Ob)return a(b);Ob=!0;try{return Lb(a,b)}finally{if(Ob=!1,null!==Gb||null!==Hb)Nb(),Kb()}}var Qb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Qb[a.type]:"textarea"===b?!0:!1}
function Sb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Tb(a){if(!Va)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Ub(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Vb(a){var b=Ub(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Wb(a){a._valueTracker||(a._valueTracker=Vb(a))}function Xb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ub(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}
var Yb=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zb=/^(.*)[\\\/]/,C="function"===typeof Symbol&&Symbol.for,$b=C?Symbol.for("react.element"):60103,ac=C?Symbol.for("react.portal"):60106,bc=C?Symbol.for("react.fragment"):60107,cc=C?Symbol.for("react.strict_mode"):60108,dc=C?Symbol.for("react.profiler"):60114,ec=C?Symbol.for("react.provider"):60109,fc=C?Symbol.for("react.context"):60110,gc=C?Symbol.for("react.async_mode"):60111,hc=C?Symbol.for("react.forward_ref"):60112,ic=C?Symbol.for("react.placeholder"):
60113,jc="function"===typeof Symbol&&Symbol.iterator;function kc(a){if(null===a||"object"!==typeof a)return null;a=jc&&a[jc]||a["@@iterator"];return"function"===typeof a?a:null}
function lc(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case gc:return"AsyncMode";case bc:return"Fragment";case ac:return"Portal";case dc:return"Profiler";case cc:return"StrictMode";case ic:return"Placeholder"}if("object"===typeof a){switch(a.$$typeof){case fc:return"Context.Consumer";case ec:return"Context.Provider";case hc:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
"ForwardRef")}if("function"===typeof a.then&&(a=1===a._reactStatus?a._reactResult:null))return lc(a)}return null}function mc(a){var b="";do{a:switch(a.tag){case 4:case 0:case 1:case 2:case 3:case 7:case 10:var c=a._debugOwner,d=a._debugSource,e=lc(a.type);var f=null;c&&(f=lc(c.type));c=e;e="";d?e=" (at "+d.fileName.replace(Zb,"")+":"+d.lineNumber+")":f&&(e=" (created by "+f+")");f="\n    in "+(c||"Unknown")+e;break a;default:f=""}b+=f;a=a.return}while(a);return b}
var nc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pc=Object.prototype.hasOwnProperty,qc={},rc={};
function sc(a){if(pc.call(rc,a))return!0;if(pc.call(qc,a))return!1;if(nc.test(a))return rc[a]=!0;qc[a]=!0;return!1}function tc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function uc(a,b,c,d){if(null===b||"undefined"===typeof b||tc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function D(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b}var E={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){E[a]=new D(a,0,!1,a,null)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];E[b]=new D(b,1,!1,a[1],null)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){E[a]=new D(a,2,!1,a.toLowerCase(),null)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){E[a]=new D(a,2,!1,a,null)});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){E[a]=new D(a,3,!1,a.toLowerCase(),null)});["checked","multiple","muted","selected"].forEach(function(a){E[a]=new D(a,3,!0,a,null)});
["capture","download"].forEach(function(a){E[a]=new D(a,4,!1,a,null)});["cols","rows","size","span"].forEach(function(a){E[a]=new D(a,6,!1,a,null)});["rowSpan","start"].forEach(function(a){E[a]=new D(a,5,!1,a.toLowerCase(),null)});var vc=/[\-:]([a-z])/g;function wc(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(vc,
wc);E[b]=new D(b,1,!1,a,null)});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(vc,wc);E[b]=new D(b,1,!1,a,"http://www.w3.org/1999/xlink")});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(vc,wc);E[b]=new D(b,1,!1,a,"http://www.w3.org/XML/1998/namespace")});E.tabIndex=new D("tabIndex",1,!1,"tabindex",null);
function xc(a,b,c,d){var e=E.hasOwnProperty(b)?E[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(uc(b,c,e,d)&&(c=null),d||null===e?sc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function yc(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function zc(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Bc(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=yc(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Cc(a,b){b=b.checked;null!=b&&xc(a,"checked",b,!1)}
function Dc(a,b){Cc(a,b);var c=yc(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Ec(a,b.type,c):b.hasOwnProperty("defaultValue")&&Ec(a,b.type,yc(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Fc(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Ec(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var Gc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Hc(a,b,c){a=z.getPooled(Gc.change,a,b,c);a.type="change";Jb(c);Ua(a);return a}var Ic=null,Jc=null;function Kc(a){Ga(a,!1)}
function Lc(a){var b=Ma(a);if(Xb(b))return a}function Mc(a,b){if("change"===a)return b}var Nc=!1;Va&&(Nc=Tb("input")&&(!document.documentMode||9<document.documentMode));function Oc(){Ic&&(Ic.detachEvent("onpropertychange",Pc),Jc=Ic=null)}function Pc(a){"value"===a.propertyName&&Lc(Jc)&&(a=Hc(Jc,a,Sb(a)),Pb(Kc,a))}function Qc(a,b,c){"focus"===a?(Oc(),Ic=b,Jc=c,Ic.attachEvent("onpropertychange",Pc)):"blur"===a&&Oc()}function Rc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Lc(Jc)}
function Sc(a,b){if("click"===a)return Lc(b)}function Tc(a,b){if("input"===a||"change"===a)return Lc(b)}
var Uc={eventTypes:Gc,_isInputEventSupported:Nc,extractEvents:function(a,b,c,d){var e=b?Ma(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();"select"===h||"input"===h&&"file"===e.type?f=Mc:Rb(e)?Nc?f=Tc:(f=Rc,g=Qc):(h=e.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=Sc);if(f&&(f=f(a,b)))return Hc(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Ec(e,"number",e.value)}},Vc=z.extend({view:null,detail:null}),Wc={Alt:"altKey",
Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xc(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Wc[a])?!!b[a]:!1}function Yc(){return Xc}
var Zc=0,$c=0,ad=!1,bd=!1,cd=Vc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Yc,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Zc;Zc=a.screenX;return ad?"mousemove"===a.type?a.screenX-b:0:(ad=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=$c;$c=a.screenY;return bd?"mousemove"===a.type?a.screenY-b:0:(bd=!0,0)}}),dd=cd.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),ed={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},fd={eventTypes:ed,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Ka(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,k=void 0,l=void 0;if("mouseout"===a||"mouseover"===a)g=cd,h=ed.mouseLeave,k=ed.mouseEnter,l="mouse";
else if("pointerout"===a||"pointerover"===a)g=dd,h=ed.pointerLeave,k=ed.pointerEnter,l="pointer";var m=null==f?e:Ma(f);e=null==b?e:Ma(b);a=g.getPooled(h,f,c,d);a.type=l+"leave";a.target=m;a.relatedTarget=e;c=g.getPooled(k,b,c,d);c.type=l+"enter";c.target=e;c.relatedTarget=m;d=b;if(f&&d)a:{b=f;e=d;l=0;for(g=b;g;g=Oa(g))l++;g=0;for(k=e;k;k=Oa(k))g++;for(;0<l-g;)b=Oa(b),l--;for(;0<g-l;)e=Oa(e),g--;for(;l--;){if(b===e||b===e.alternate)break a;b=Oa(b);e=Oa(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){l=
f.alternate;if(null!==l&&l===e)break;b.push(f);f=Oa(f)}for(f=[];d&&d!==e;){l=d.alternate;if(null!==l&&l===e)break;f.push(d);d=Oa(d)}for(d=0;d<b.length;d++)Ra(b[d],"bubbled",a);for(d=f.length;0<d--;)Ra(f[d],"captured",c);return[a,c]}},gd=Object.prototype.hasOwnProperty;function hd(a,b){return a===b?0!==a||0!==b||1/a===1/b:a!==a&&b!==b}
function id(a,b){if(hd(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!gd.call(b,c[d])||!hd(a[c[d]],b[c[d]]))return!1;return!0}function jd(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 5===b.tag?2:3}function kd(a){2!==jd(a)?t("188"):void 0}
function ld(a){var b=a.alternate;if(!b)return b=jd(a),3===b?t("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return kd(e),a;if(g===d)return kd(e),b;g=g.sibling}t("188")}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}g?
void 0:t("189")}}c.alternate!==d?t("190"):void 0}5!==c.tag?t("188"):void 0;return c.stateNode.current===c?a:b}function md(a){a=ld(a);if(!a)return null;for(var b=a;;){if(7===b.tag||8===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
var nd=z.extend({animationName:null,elapsedTime:null,pseudoElement:null}),od=z.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),pd=Vc.extend({relatedTarget:null});function qd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var rd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},td=Vc.extend({key:function(a){if(a.key){var b=rd[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=qd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?sd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Yc,charCode:function(a){return"keypress"===
a.type?qd(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?qd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),ud=cd.extend({dataTransfer:null}),vd=Vc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Yc}),wd=z.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),xd=cd.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),yd=[["abort","abort"],[bb,"animationEnd"],[cb,"animationIteration"],[db,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],
["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],
["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[eb,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],zd={},Ad={};function Bd(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};zd[a]=b;Ad[c]=b}
[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],
["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){Bd(a,!0)});yd.forEach(function(a){Bd(a,!1)});
var Cd={eventTypes:zd,isInteractiveTopLevelEventType:function(a){a=Ad[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=Ad[a];if(!e)return null;switch(a){case "keypress":if(0===qd(c))return null;case "keydown":case "keyup":a=td;break;case "blur":case "focus":a=pd;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=cd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
ud;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=vd;break;case bb:case cb:case db:a=nd;break;case eb:a=wd;break;case "scroll":a=Vc;break;case "wheel":a=xd;break;case "copy":case "cut":case "paste":a=od;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=dd;break;default:a=z}b=a.getPooled(e,b,c,d);Ua(b);return b}},Dd=Cd.isInteractiveTopLevelEventType,
Ed=[];function Fd(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=5!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Ka(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Sb(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=null,h=0;h<pa.length;h++){var k=pa[h];k&&(k=k.extractEvents(d,b,f,e))&&(g=ya(g,k))}Ga(g,!1)}}var Gd=!0;
function F(a,b){if(!b)return null;var c=(Dd(a)?Hd:Id).bind(null,a);b.addEventListener(a,c,!1)}function Jd(a,b){if(!b)return null;var c=(Dd(a)?Hd:Id).bind(null,a);b.addEventListener(a,c,!0)}function Hd(a,b){Mb(Id,a,b)}
function Id(a,b){if(Gd){var c=Sb(b);c=Ka(c);null===c||"number"!==typeof c.tag||2===jd(c)||(c=null);if(Ed.length){var d=Ed.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{Pb(Fd,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>Ed.length&&Ed.push(a)}}}var Kd={},Ld=0,Md="_reactListenersID"+(""+Math.random()).slice(2);
function Nd(a){Object.prototype.hasOwnProperty.call(a,Md)||(a[Md]=Ld++,Kd[a[Md]]={});return Kd[a[Md]]}function Od(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Qd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Rd(a,b){var c=Qd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Qd(c)}}function Sd(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Sd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Td(){for(var a=window,b=Od();b instanceof a.HTMLIFrameElement;){try{a=b.contentDocument.defaultView}catch(c){break}b=Od(a.document)}return b}function Ud(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Vd=Va&&"documentMode"in document&&11>=document.documentMode,Wd={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Xd=null,Yd=null,Zd=null,$d=!1;
function ae(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if($d||null==Xd||Xd!==Od(c))return null;c=Xd;"selectionStart"in c&&Ud(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return Zd&&id(Zd,c)?null:(Zd=c,a=z.getPooled(Wd.select,Yd,a,b),a.type="select",a.target=Xd,Ua(a),a)}
var be={eventTypes:Wd,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Nd(e);f=ta.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0}f=!e}if(f)return null;e=b?Ma(b):window;switch(a){case "focus":if(Rb(e)||"true"===e.contentEditable)Xd=e,Yd=b,Zd=null;break;case "blur":Zd=Yd=Xd=null;break;case "mousedown":$d=!0;break;case "contextmenu":case "mouseup":case "dragend":return $d=!1,ae(c,d);case "selectionchange":if(Vd)break;
case "keydown":case "keyup":return ae(c,d)}return null}};Ea.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ua=Na;va=La;wa=Ma;Ea.injectEventPluginsByName({SimpleEventPlugin:Cd,EnterLeaveEventPlugin:fd,ChangeEventPlugin:Uc,SelectEventPlugin:be,BeforeInputEventPlugin:Eb});function ce(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
function de(a,b){a=n({children:void 0},b);if(b=ce(b.children))a.children=b;return a}function ee(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+yc(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function fe(a,b){null!=b.dangerouslySetInnerHTML?t("91"):void 0;return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function ge(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?t("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:t("93"),b=b[0]),c=b),null==c&&(c=""));a._wrapperState={initialValue:yc(c)}}
function he(a,b){var c=yc(b.value);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&(a.defaultValue=c));null!=b.defaultValue&&(a.defaultValue=""+yc(b.defaultValue))}function ie(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var je={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function ke(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?ke(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var me=void 0,ne=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==je.svg||"innerHTML"in a)a.innerHTML=b;else{me=me||document.createElement("div");me.innerHTML="<svg>"+b+"</svg>";for(b=me.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function oe(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var pe={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qe=["Webkit","ms","Moz","O"];Object.keys(pe).forEach(function(a){qe.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pe[b]=pe[a]})});
function re(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--");var e=c;var f=b[c];e=null==f||"boolean"===typeof f||""===f?"":d||"number"!==typeof f||0===f||pe.hasOwnProperty(e)&&pe[e]?(""+f).trim():f+"px";"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var se=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function te(a,b){b&&(se[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?t("137",a,""):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?t("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:t("61")),null!=b.style&&"object"!==typeof b.style?t("62",""):void 0)}
function ue(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
function ve(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Nd(a);b=ta[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case "scroll":Jd("scroll",a);break;case "focus":case "blur":Jd("focus",a);Jd("blur",a);c.blur=!0;c.focus=!0;break;case "cancel":case "close":Tb(e)&&Jd(e,a);break;case "invalid":case "submit":case "reset":break;default:-1===fb.indexOf(e)&&F(e,a)}c[e]=!0}}}function we(){}var xe=null,ye=null;
function ze(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function Ae(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}function Be(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}
function Ce(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}new Set;var De=[],Ee=-1;function G(a){0>Ee||(a.current=De[Ee],De[Ee]=null,Ee--)}function H(a,b){Ee++;De[Ee]=a.current;a.current=b}var Fe={},I={current:Fe},J={current:!1},Ge=Fe;
function He(a,b){var c=a.type.contextTypes;if(!c)return Fe;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function K(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Ie(a){G(J,a);G(I,a)}function Je(a){G(J,a);G(I,a)}
function Ke(a,b,c){I.current!==Fe?t("168"):void 0;H(I,b,a);H(J,c,a)}function Le(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)e in a?void 0:t("108",lc(b)||"Unknown",e);return n({},c,d)}function Me(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||Fe;Ge=I.current;H(I,b,a);H(J,J.current,a);return!0}
function Ne(a,b,c){var d=a.stateNode;d?void 0:t("169");c?(b=Le(a,b,Ge),d.__reactInternalMemoizedMergedChildContext=b,G(J,a),G(I,a),H(I,b,a)):G(J,a);H(J,c,a)}var Oe=null,Pe=null;function Qe(a){return function(b){try{return a(b)}catch(c){}}}
function Re(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Oe=Qe(function(a){return b.onCommitFiberRoot(c,a)});Pe=Qe(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}
function Se(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=null;this.index=0;this.ref=null;this.pendingProps=b;this.firstContextDependency=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function Te(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function Ue(a,b,c){var d=a.alternate;null===d?(d=new Se(a.tag,b,a.key,a.mode),d.type=a.type,d.stateNode=a.stateNode,d.alternate=a,a.alternate=d):(d.pendingProps=b,d.effectTag=0,d.nextEffect=null,d.firstEffect=null,d.lastEffect=null);d.childExpirationTime=a.childExpirationTime;d.expirationTime=b!==a.pendingProps?c:a.expirationTime;d.child=a.child;d.memoizedProps=a.memoizedProps;d.memoizedState=a.memoizedState;d.updateQueue=a.updateQueue;d.firstContextDependency=a.firstContextDependency;d.sibling=a.sibling;
d.index=a.index;d.ref=a.ref;return d}
function Ve(a,b,c){var d=a.type,e=a.key;a=a.props;var f=void 0;if("function"===typeof d)f=Te(d)?2:4;else if("string"===typeof d)f=7;else a:switch(d){case bc:return We(a.children,b,c,e);case gc:f=10;b|=3;break;case cc:f=10;b|=2;break;case dc:return d=new Se(15,a,e,b|4),d.type=dc,d.expirationTime=c,d;case ic:f=16;break;default:if("object"===typeof d&&null!==d)switch(d.$$typeof){case ec:f=12;break a;case fc:f=11;break a;case hc:f=13;break a;default:if("function"===typeof d.then){f=4;break a}}t("130",
null==d?d:typeof d,"")}b=new Se(f,a,e,b);b.type=d;b.expirationTime=c;return b}function We(a,b,c,d){a=new Se(9,a,d,b);a.expirationTime=c;return a}function Xe(a,b,c){a=new Se(8,a,null,b);a.expirationTime=c;return a}function Ye(a,b,c){b=new Se(6,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function Ze(a,b){a.didError=!1;var c=a.earliestPendingTime;0===c?a.earliestPendingTime=a.latestPendingTime=b:c>b?a.earliestPendingTime=b:a.latestPendingTime<b&&(a.latestPendingTime=b);$e(b,a)}function $e(a,b){var c=b.earliestSuspendedTime,d=b.latestSuspendedTime,e=b.earliestPendingTime,f=b.latestPingedTime;e=0!==e?e:f;0===e&&(0===a||d>a)&&(e=d);a=e;0!==a&&0!==c&&c<a&&(a=c);b.nextExpirationTimeToWorkOn=e;b.expirationTime=a}var af=!1;
function bf(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function cf(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function df(a){return{expirationTime:a,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function ef(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function ff(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=bf(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=bf(a.memoizedState),e=c.updateQueue=bf(c.memoizedState)):d=a.updateQueue=cf(e):null===e&&(e=c.updateQueue=cf(d));null===e||d===e?ef(d,b):null===d.lastUpdate||null===e.lastUpdate?(ef(d,b),ef(e,b)):(ef(d,b),e.lastUpdate=b)}
function gf(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=bf(a.memoizedState):hf(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function hf(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=cf(b));return b}
function jf(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-1025|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return n({},d,e);case 2:af=!0}return d}
function kf(a,b,c,d,e){af=!1;b=hf(a,b);for(var f=b.baseState,g=null,h=0,k=b.firstUpdate,l=f;null!==k;){var m=k.expirationTime;if(m>e){if(null===g&&(g=k,f=l),0===h||h>m)h=m}else l=jf(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=k:(b.lastEffect.nextEffect=k,b.lastEffect=k));k=k.next}m=null;for(k=b.firstCapturedUpdate;null!==k;){var r=k.expirationTime;if(r>e){if(null===m&&(m=k,null===g&&(f=l)),0===h||h>r)h=r}else l=jf(a,b,k,l,c,d),
null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=k:(b.lastCapturedEffect.nextEffect=k,b.lastCapturedEffect=k));k=k.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=l);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;a.expirationTime=h;a.memoizedState=l}
function lf(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);mf(b.firstEffect,c);b.firstEffect=b.lastEffect=null;mf(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function mf(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;"function"!==typeof c?t("191",c):void 0;c.call(d)}a=a.nextEffect}}
function nf(a,b){return{value:a,source:b,stack:mc(b)}}var of={current:null},pf=null,qf=null,rf=null;function sf(a,b){var c=a.type._context;H(of,c._currentValue,a);c._currentValue=b}function tf(a){var b=of.current;G(of,a);a.type._context._currentValue=b}function uf(a){pf=a;rf=qf=null;a.firstContextDependency=null}
function vf(a,b){if(rf!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)rf=a,b=1073741823;b={context:a,observedBits:b,next:null};null===qf?(null===pf?t("277"):void 0,pf.firstContextDependency=qf=b):qf=qf.next=b}return a._currentValue}var wf={},L={current:wf},xf={current:wf},yf={current:wf};function zf(a){a===wf?t("174"):void 0;return a}
function Af(a,b){H(yf,b,a);H(xf,a,a);H(L,wf,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:le(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=le(b,c)}G(L,a);H(L,b,a)}function Bf(a){G(L,a);G(xf,a);G(yf,a)}function Cf(a){zf(yf.current);var b=zf(L.current);var c=le(b,a.type);b!==c&&(H(xf,a,a),H(L,c,a))}function Df(a){xf.current===a&&(G(L,a),G(xf,a))}var Ef=(new aa.Component).refs;
function Ff(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
var Jf={isMounted:function(a){return(a=a._reactInternalFiber)?2===jd(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Gf();d=Hf(d,a);var e=df(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);ff(a,e);If(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Gf();d=Hf(d,a);var e=df(d);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);ff(a,e);If(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Gf();c=Hf(c,a);var d=df(c);d.tag=2;void 0!==
b&&null!==b&&(d.callback=b);ff(a,d);If(a,c)}};function Kf(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!id(c,d)||!id(e,f):!0}function Lf(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Jf.enqueueReplaceState(b,b.state,null)}
function Mf(a,b,c,d){var e=a.stateNode,f=K(b)?Ge:I.current;e.props=c;e.state=a.memoizedState;e.refs=Ef;e.context=He(a,f);f=a.updateQueue;null!==f&&(kf(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(Ff(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&
e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Jf.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(kf(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var Nf=Array.isArray;
function Of(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(2!==c.tag&&3!==c.tag?t("110"):void 0,d=c.stateNode);d?void 0:t("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Ef&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}"string"!==typeof a?t("284"):void 0;c._owner?void 0:t("254",a)}return a}
function Pf(a,b){"textarea"!==a.type&&t("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}
function Qf(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=Ue(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||8!==b.tag)return b=Xe(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.type===c.type)return d=e(b,c.props,d),d.ref=Of(a,b,c),d.return=a,d;d=Ve(c,a.mode,d);d.ref=Of(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||6!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
Ye(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,f){if(null===b||9!==b.tag)return b=We(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function r(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Xe(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case $b:return c=Ve(b,a.mode,c),c.ref=Of(a,null,b),c.return=a,c;case ac:return b=Ye(b,a.mode,c),b.return=a,b}if(Nf(b)||kc(b))return b=We(b,a.mode,c,null),b.return=
a,b;Pf(a,b)}return null}function A(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case $b:return c.key===e?c.type===bc?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case ac:return c.key===e?l(a,b,c,d):null}if(Nf(c)||kc(c))return null!==e?null:m(a,b,c,d,null);Pf(a,c)}return null}function S(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);
if("object"===typeof d&&null!==d){switch(d.$$typeof){case $b:return a=a.get(null===d.key?c:d.key)||null,d.type===bc?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case ac:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Nf(d)||kc(d))return a=a.get(c)||null,m(b,a,d,e,null);Pf(b,d)}return null}function B(e,g,h,k){for(var l=null,m=null,p=g,u=g=0,q=null;null!==p&&u<h.length;u++){p.index>u?(q=p,p=null):q=p.sibling;var v=A(e,p,h[u],k);if(null===v){null===p&&(p=q);break}a&&p&&null===v.alternate&&b(e,
p);g=f(v,g,u);null===m?l=v:m.sibling=v;m=v;p=q}if(u===h.length)return c(e,p),l;if(null===p){for(;u<h.length;u++)if(p=r(e,h[u],k))g=f(p,g,u),null===m?l=p:m.sibling=p,m=p;return l}for(p=d(e,p);u<h.length;u++)if(q=S(p,e,u,h[u],k))a&&null!==q.alternate&&p.delete(null===q.key?u:q.key),g=f(q,g,u),null===m?l=q:m.sibling=q,m=q;a&&p.forEach(function(a){return b(e,a)});return l}function P(e,g,h,k){var l=kc(h);"function"!==typeof l?t("150"):void 0;h=l.call(h);null==h?t("151"):void 0;for(var m=l=null,p=g,u=g=
0,q=null,v=h.next();null!==p&&!v.done;u++,v=h.next()){p.index>u?(q=p,p=null):q=p.sibling;var x=A(e,p,v.value,k);if(null===x){p||(p=q);break}a&&p&&null===x.alternate&&b(e,p);g=f(x,g,u);null===m?l=x:m.sibling=x;m=x;p=q}if(v.done)return c(e,p),l;if(null===p){for(;!v.done;u++,v=h.next())v=r(e,v.value,k),null!==v&&(g=f(v,g,u),null===m?l=v:m.sibling=v,m=v);return l}for(p=d(e,p);!v.done;u++,v=h.next())v=S(p,e,u,v.value,k),null!==v&&(a&&null!==v.alternate&&p.delete(null===v.key?u:v.key),g=f(v,g,u),null===
m?l=v:m.sibling=v,m=v);a&&p.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===bc&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case $b:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(9===k.tag?f.type===bc:k.type===f.type){c(a,k.sibling);d=e(k,f.type===bc?f.props.children:f.props,h);d.ref=Of(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=k.sibling}f.type===bc?(d=We(f.props.children,
a.mode,h,f.key),d.return=a,a=d):(h=Ve(f,a.mode,h),h.ref=Of(a,d,f),h.return=a,a=h)}return g(a);case ac:a:{for(k=f.key;null!==d;){if(d.key===k)if(6===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=Ye(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&8===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=
a,a=d):(c(a,d),d=Xe(f,a.mode,h),d.return=a,a=d),g(a);if(Nf(f))return B(a,d,f,h);if(kc(f))return P(a,d,f,h);l&&Pf(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 2:case 3:case 0:h=a.type,t("152",h.displayName||h.name||"Component")}return c(a,d)}}var Rf=Qf(!0),Sf=Qf(!1),Tf=null,Uf=null,Vf=!1;function Wf(a,b){var c=new Se(7,null,null,0);c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}
function Xf(a,b){switch(a.tag){case 7:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 8:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;default:return!1}}function Yf(a){if(Vf){var b=Uf;if(b){var c=b;if(!Xf(a,b)){b=Be(c);if(!b||!Xf(a,b)){a.effectTag|=2;Vf=!1;Tf=a;return}Wf(Tf,c)}Tf=a;Uf=Ce(b)}else a.effectTag|=2,Vf=!1,Tf=a}}
function Zf(a){for(a=a.return;null!==a&&7!==a.tag&&5!==a.tag;)a=a.return;Tf=a}function $f(a){if(a!==Tf)return!1;if(!Vf)return Zf(a),Vf=!0,!1;var b=a.type;if(7!==a.tag||"head"!==b&&"body"!==b&&!Ae(b,a.memoizedProps))for(b=Uf;b;)Wf(a,b),b=Be(b);Zf(a);Uf=Tf?Be(a.stateNode):null;return!0}function ag(){Uf=Tf=null;Vf=!1}
function bg(a){switch(a._reactStatus){case 1:return a._reactResult;case 2:throw a._reactResult;case 0:throw a;default:throw a._reactStatus=0,a.then(function(b){if(0===a._reactStatus){a._reactStatus=1;if("object"===typeof b&&null!==b){var c=b.default;b=void 0!==c&&null!==c?c:b}a._reactResult=b}},function(b){0===a._reactStatus&&(a._reactStatus=2,a._reactResult=b)}),a;}}var cg=Yb.ReactCurrentOwner;function M(a,b,c,d){b.child=null===a?Sf(b,null,c,d):Rf(b,a.child,c,d)}
function dg(a,b,c,d,e){c=c.render;var f=b.ref;if(!J.current&&b.memoizedProps===d&&f===(null!==a?a.ref:null))return eg(a,b,e);c=c(d,f);M(a,b,c,e);b.memoizedProps=d;return b.child}function fg(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function gg(a,b,c,d,e){var f=K(c)?Ge:I.current;f=He(b,f);uf(b,e);c=c(d,f);b.effectTag|=1;M(a,b,c,e);b.memoizedProps=d;return b.child}
function hg(a,b,c,d,e){if(K(c)){var f=!0;Me(b)}else f=!1;uf(b,e);if(null===a)if(null===b.stateNode){var g=K(c)?Ge:I.current,h=c.contextTypes,k=null!==h&&void 0!==h;h=k?He(b,g):Fe;var l=new c(d,h);b.memoizedState=null!==l.state&&void 0!==l.state?l.state:null;l.updater=Jf;b.stateNode=l;l._reactInternalFiber=b;k&&(k=b.stateNode,k.__reactInternalMemoizedUnmaskedChildContext=g,k.__reactInternalMemoizedMaskedChildContext=h);Mf(b,c,d,e);d=!0}else{g=b.stateNode;h=b.memoizedProps;g.props=h;var m=g.context;
k=K(c)?Ge:I.current;k=He(b,k);var r=c.getDerivedStateFromProps;(l="function"===typeof r||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||m!==k)&&Lf(b,g,d,k);af=!1;var A=b.memoizedState;m=g.state=A;var S=b.updateQueue;null!==S&&(kf(b,S,d,g,e),m=b.memoizedState);h!==d||A!==m||J.current||af?("function"===typeof r&&(Ff(b,c,r,d),m=b.memoizedState),(h=af||Kf(b,c,h,d,A,m,k))?(l||"function"!==
typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=m),g.props=d,g.state=m,g.context=k,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,h=
b.memoizedProps,g.props=h,m=g.context,k=K(c)?Ge:I.current,k=He(b,k),r=c.getDerivedStateFromProps,(l="function"===typeof r||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||m!==k)&&Lf(b,g,d,k),af=!1,m=b.memoizedState,A=g.state=m,S=b.updateQueue,null!==S&&(kf(b,S,d,g,e),A=b.memoizedState),h!==d||m!==A||J.current||af?("function"===typeof r&&(Ff(b,c,r,d),A=b.memoizedState),(r=af||Kf(b,c,h,d,
m,A,k))?(l||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,A,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,A,k)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=4),"function"!==
typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=A),g.props=d,g.state=A,g.context=k,d=r):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=256),d=!1);return ig(a,b,c,d,f,e)}
function ig(a,b,c,d,e,f){fg(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Ne(b,c,!1),eg(a,b,f);d=b.stateNode;cg.current=b;var h=g?null:d.render();b.effectTag|=1;null!==a&&g&&(M(a,b,null,f),b.child=null);M(a,b,h,f);b.memoizedState=d.state;b.memoizedProps=d.props;e&&Ne(b,c,!0);return b.child}function jg(a){var b=a.stateNode;b.pendingContext?Ke(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Ke(a,b.context,!1);Af(a,b.containerInfo)}
function ng(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}
function og(a,b,c,d){null!==a?t("155"):void 0;var e=b.pendingProps;if("object"===typeof c&&null!==c&&"function"===typeof c.then){c=bg(c);var f=c;f="function"===typeof f?Te(f)?3:1:void 0!==f&&null!==f&&f.$$typeof?14:4;f=b.tag=f;var g=ng(c,e);switch(f){case 1:return gg(a,b,c,g,d);case 3:return hg(a,b,c,g,d);case 14:return dg(a,b,c,g,d);default:t("283",c)}}f=He(b,I.current);uf(b,d);f=c(e,f);b.effectTag|=1;if("object"===typeof f&&null!==f&&"function"===typeof f.render&&void 0===f.$$typeof){b.tag=2;K(c)?
(g=!0,Me(b)):g=!1;b.memoizedState=null!==f.state&&void 0!==f.state?f.state:null;var h=c.getDerivedStateFromProps;"function"===typeof h&&Ff(b,c,h,e);f.updater=Jf;b.stateNode=f;f._reactInternalFiber=b;Mf(b,c,e,d);return ig(a,b,c,!0,g,d)}b.tag=0;M(a,b,f,d);b.memoizedProps=e;return b.child}
function eg(a,b,c){null!==a&&(b.firstContextDependency=a.firstContextDependency);var d=b.childExpirationTime;if(0===d||d>c)return null;null!==a&&b.child!==a.child?t("153"):void 0;if(null!==b.child){a=b.child;c=Ue(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Ue(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}
function pg(a,b,c){var d=b.expirationTime;if(!J.current&&(0===d||d>c)){switch(b.tag){case 5:jg(b);ag();break;case 7:Cf(b);break;case 2:K(b.type)&&Me(b);break;case 3:K(b.type._reactResult)&&Me(b);break;case 6:Af(b,b.stateNode.containerInfo);break;case 12:sf(b,b.memoizedProps.value)}return eg(a,b,c)}b.expirationTime=0;switch(b.tag){case 4:return og(a,b,b.type,c);case 0:return gg(a,b,b.type,b.pendingProps,c);case 1:var e=b.type._reactResult;d=b.pendingProps;a=gg(a,b,e,ng(e,d),c);b.memoizedProps=d;return a;
case 2:return hg(a,b,b.type,b.pendingProps,c);case 3:return e=b.type._reactResult,d=b.pendingProps,a=hg(a,b,e,ng(e,d),c),b.memoizedProps=d,a;case 5:jg(b);d=b.updateQueue;null===d?t("282"):void 0;e=b.memoizedState;e=null!==e?e.element:null;kf(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)ag(),b=eg(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)Uf=Ce(b.stateNode.containerInfo),Tf=b,e=Vf=!0;e?(b.effectTag|=2,b.child=Sf(b,null,d,c)):(M(a,b,d,c),ag());b=b.child}return b;
case 7:Cf(b);null===a&&Yf(b);d=b.type;e=b.pendingProps;var f=null!==a?a.memoizedProps:null,g=e.children;Ae(d,e)?g=null:null!==f&&Ae(d,f)&&(b.effectTag|=16);fg(a,b);1073741823!==c&&b.mode&1&&e.hidden?(b.expirationTime=1073741823,b.memoizedProps=e,b=null):(M(a,b,g,c),b.memoizedProps=e,b=b.child);return b;case 8:return null===a&&Yf(b),b.memoizedProps=b.pendingProps,null;case 16:return null;case 6:return Af(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Rf(b,null,d,c):M(a,b,d,c),b.memoizedProps=
d,b.child;case 13:return dg(a,b,b.type,b.pendingProps,c);case 14:return e=b.type._reactResult,d=b.pendingProps,a=dg(a,b,e,ng(e,d),c),b.memoizedProps=d,a;case 9:return d=b.pendingProps,M(a,b,d,c),b.memoizedProps=d,b.child;case 10:return d=b.pendingProps.children,M(a,b,d,c),b.memoizedProps=d,b.child;case 15:return d=b.pendingProps,M(a,b,d.children,c),b.memoizedProps=d,b.child;case 12:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;b.memoizedProps=e;sf(b,f);if(null!==g){var h=g.value;
f=h===f&&(0!==h||1/h===1/f)||h!==h&&f!==f?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!J.current){b=eg(a,b,c);break a}}else for(g=b.child,null!==g&&(g.return=b);null!==g;){h=g.firstContextDependency;if(null!==h){do{if(h.context===d&&0!==(h.observedBits&f)){if(2===g.tag||3===g.tag){var k=df(c);k.tag=2;ff(g,k)}if(0===g.expirationTime||g.expirationTime>c)g.expirationTime=c;k=g.alternate;null!==k&&(0===k.expirationTime||
k.expirationTime>c)&&(k.expirationTime=c);for(var l=g.return;null!==l;){k=l.alternate;if(0===l.childExpirationTime||l.childExpirationTime>c)l.childExpirationTime=c,null!==k&&(0===k.childExpirationTime||k.childExpirationTime>c)&&(k.childExpirationTime=c);else if(null!==k&&(0===k.childExpirationTime||k.childExpirationTime>c))k.childExpirationTime=c;else break;l=l.return}}k=g.child;h=h.next}while(null!==h)}else k=12===g.tag?g.type===b.type?null:g.child:g.child;if(null!==k)k.return=g;else for(k=g;null!==
k;){if(k===b){k=null;break}g=k.sibling;if(null!==g){g.return=k.return;k=g;break}k=k.return}g=k}}M(a,b,e.children,c);b=b.child}return b;case 11:return f=b.type,d=b.pendingProps,e=d.children,uf(b,c),f=vf(f,d.unstable_observedBits),e=e(f),b.effectTag|=1,M(a,b,e,c),b.memoizedProps=d,b.child;default:t("156")}}function qg(a){a.effectTag|=4}var rg=void 0,sg=void 0,tg=void 0;rg=function(){};
sg=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;zf(L.current);a=null;switch(c){case "input":f=zc(g,f);d=zc(g,d);a=[];break;case "option":f=de(g,f);d=de(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=fe(g,f);d=fe(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=we)}te(c,d);g=c=void 0;var h=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if("style"===
c){var k=f[c];for(g in k)k.hasOwnProperty(g)&&(h||(h={}),h[g]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(sa.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var l=d[c];k=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&l!==k&&(null!=l||null!=k))if("style"===c)if(k){for(g in k)!k.hasOwnProperty(g)||l&&l.hasOwnProperty(g)||(h||(h={}),h[g]="");for(g in l)l.hasOwnProperty(g)&&k[g]!==l[g]&&(h||
(h={}),h[g]=l[g])}else h||(a||(a=[]),a.push(c,h)),h=l;else"dangerouslySetInnerHTML"===c?(l=l?l.__html:void 0,k=k?k.__html:void 0,null!=l&&k!==l&&(a=a||[]).push(c,""+l)):"children"===c?k===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(c,""+l):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(sa.hasOwnProperty(c)?(null!=l&&ve(e,c),a||k===l||(a=[])):(a=a||[]).push(c,l))}h&&(a=a||[]).push("style",h);e=a;(b.updateQueue=e)&&qg(b)}};tg=function(a,b,c,d){c!==d&&qg(b)};
function ug(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=mc(c));null!==c&&lc(c.type);b=b.value;null!==a&&2===a.tag&&lc(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function vg(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){wg(a,c)}else b.current=null}
function xg(a){"function"===typeof Pe&&Pe(a);switch(a.tag){case 2:case 3:vg(a);var b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){wg(a,c)}break;case 7:vg(a);break;case 6:yg(a)}}function zg(a){return 7===a.tag||5===a.tag||6===a.tag}
function Ag(a){a:{for(var b=a.return;null!==b;){if(zg(b)){var c=b;break a}b=b.return}t("160");c=void 0}var d=b=void 0;switch(c.tag){case 7:b=c.stateNode;d=!1;break;case 5:b=c.stateNode.containerInfo;d=!0;break;case 6:b=c.stateNode.containerInfo;d=!0;break;default:t("161")}c.effectTag&16&&(oe(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||zg(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;7!==c.tag&&8!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||6===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(7===e.tag||8===e.tag)if(c)if(d){var f=b,g=e.stateNode,h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h)}else b.insertBefore(e.stateNode,c);else d?(f=b,g=e.stateNode,8===f.nodeType?(h=f.parentNode,h.insertBefore(g,f)):(h=f,h.appendChild(g)),null===h.onclick&&(h.onclick=we)):b.appendChild(e.stateNode);else if(6!==e.tag&&null!==e.child){e.child.return=
e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function yg(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?t("160"):void 0;switch(c.tag){case 7:d=c.stateNode;e=!1;break a;case 5:d=c.stateNode.containerInfo;e=!0;break a;case 6:d=c.stateNode.containerInfo;e=!0;break a}c=c.return}c=!0}if(7===b.tag||8===b.tag){a:for(var f=b,g=f;;)if(xg(g),null!==g.child&&6!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return}g.sibling.return=g.return;g=g.sibling}e?
(f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode)}else if(6===b.tag?(d=b.stateNode.containerInfo,e=!0):xg(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;6===b.tag&&(c=!1)}b.sibling.return=b.return;b=b.sibling}}
function Bg(a,b){switch(b.tag){case 2:case 3:break;case 7:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Ja]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Cc(c,d);ue(a,e);b=ue(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?re(c,h):"dangerouslySetInnerHTML"===g?ne(c,h):"children"===g?oe(c,h):xc(c,g,h,b)}switch(a){case "input":Dc(c,d);break;case "textarea":he(c,d);break;case "select":a=c._wrapperState.wasMultiple,
c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?ee(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?ee(c,!!d.multiple,d.defaultValue,!0):ee(c,!!d.multiple,d.multiple?[]:"",!1))}}}break;case 8:null===b.stateNode?t("162"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 5:break;case 15:break;case 16:break;default:t("163")}}function Cg(a,b,c){c=df(c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Dg(d);ug(a,b)};return c}
function Eg(a,b,c){c=df(c);c.tag=3;var d=a.stateNode;null!==d&&"function"===typeof d.componentDidCatch&&(c.callback=function(){null===Fg?Fg=new Set([this]):Fg.add(this);var c=b.value,d=b.stack;ug(a,b);this.componentDidCatch(c,{componentStack:null!==d?d:""})});return c}
function Gg(a){switch(a.tag){case 2:K(a.type)&&Ie(a);var b=a.effectTag;return b&1024?(a.effectTag=b&-1025|64,a):null;case 3:return K(a.type._reactResult)&&Ie(a),b=a.effectTag,b&1024?(a.effectTag=b&-1025|64,a):null;case 5:return Bf(a),Je(a),b=a.effectTag,0!==(b&64)?t("285"):void 0,a.effectTag=b&-1025|64,a;case 7:return Df(a),null;case 16:return b=a.effectTag,b&1024?(a.effectTag=b&-1025|64,a):null;case 6:return Bf(a),null;case 12:return tf(a),null;default:return null}}
var Hg={readContext:vf},Ig=Yb.ReactCurrentOwner,Jg=0,Kg=0,Lg=!1,N=null,Mg=null,O=0,Ng=!1,Q=null,Og=!1,Fg=null;function Pg(){if(null!==N)for(var a=N.return;null!==a;){var b=a;switch(b.tag){case 2:var c=b.type.childContextTypes;null!==c&&void 0!==c&&Ie(b);break;case 3:c=b.type._reactResult.childContextTypes;null!==c&&void 0!==c&&Ie(b);break;case 5:Bf(b);Je(b);break;case 7:Df(b);break;case 6:Bf(b);break;case 12:tf(b)}a=a.return}Mg=null;O=0;Ng=!1;N=null}
function Qg(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&512)){var e=b;b=a;var f=b.pendingProps;switch(b.tag){case 0:case 1:break;case 2:K(b.type)&&Ie(b);break;case 3:K(b.type._reactResult)&&Ie(b);break;case 5:Bf(b);Je(b);f=b.stateNode;f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null);if(null===e||null===e.child)$f(b),b.effectTag&=-3;rg(b);break;case 7:Df(b);var g=zf(yf.current),h=b.type;if(null!==e&&null!=b.stateNode)sg(e,b,h,f,g),e.ref!==b.ref&&(b.effectTag|=
128);else if(f){var k=zf(L.current);if($f(b)){f=b;e=f.stateNode;var l=f.type,m=f.memoizedProps,r=g;e[Ia]=f;e[Ja]=m;h=void 0;g=l;switch(g){case "iframe":case "object":F("load",e);break;case "video":case "audio":for(l=0;l<fb.length;l++)F(fb[l],e);break;case "source":F("error",e);break;case "img":case "image":case "link":F("error",e);F("load",e);break;case "form":F("reset",e);F("submit",e);break;case "details":F("toggle",e);break;case "input":Bc(e,m);F("invalid",e);ve(r,"onChange");break;case "select":e._wrapperState=
{wasMultiple:!!m.multiple};F("invalid",e);ve(r,"onChange");break;case "textarea":ge(e,m),F("invalid",e),ve(r,"onChange")}te(g,m);l=null;for(h in m)m.hasOwnProperty(h)&&(k=m[h],"children"===h?"string"===typeof k?e.textContent!==k&&(l=["children",k]):"number"===typeof k&&e.textContent!==""+k&&(l=["children",""+k]):sa.hasOwnProperty(h)&&null!=k&&ve(r,h));switch(g){case "input":Wb(e);Fc(e,m,!0);break;case "textarea":Wb(e);ie(e,m);break;case "select":case "option":break;default:"function"===typeof m.onClick&&
(e.onclick=we)}h=l;f.updateQueue=h;f=null!==h?!0:!1;f&&qg(b)}else{m=b;e=h;r=f;l=9===g.nodeType?g:g.ownerDocument;k===je.html&&(k=ke(e));k===je.html?"script"===e?(e=l.createElement("div"),e.innerHTML="<script>\x3c/script>",l=e.removeChild(e.firstChild)):"string"===typeof r.is?l=l.createElement(e,{is:r.is}):(l=l.createElement(e),"select"===e&&r.multiple&&(l.multiple=!0)):l=l.createElementNS(k,e);e=l;e[Ia]=m;e[Ja]=f;a:for(m=e,r=b,l=r.child;null!==l;){if(7===l.tag||8===l.tag)m.appendChild(l.stateNode);
else if(6!==l.tag&&null!==l.child){l.child.return=l;l=l.child;continue}if(l===r)break;for(;null===l.sibling;){if(null===l.return||l.return===r)break a;l=l.return}l.sibling.return=l.return;l=l.sibling}r=e;l=h;m=f;var A=g,S=ue(l,m);switch(l){case "iframe":case "object":F("load",r);g=m;break;case "video":case "audio":for(g=0;g<fb.length;g++)F(fb[g],r);g=m;break;case "source":F("error",r);g=m;break;case "img":case "image":case "link":F("error",r);F("load",r);g=m;break;case "form":F("reset",r);F("submit",
r);g=m;break;case "details":F("toggle",r);g=m;break;case "input":Bc(r,m);g=zc(r,m);F("invalid",r);ve(A,"onChange");break;case "option":g=de(r,m);break;case "select":r._wrapperState={wasMultiple:!!m.multiple};g=n({},m,{value:void 0});F("invalid",r);ve(A,"onChange");break;case "textarea":ge(r,m);g=fe(r,m);F("invalid",r);ve(A,"onChange");break;default:g=m}te(l,g);k=void 0;var B=l,P=r,v=g;for(k in v)if(v.hasOwnProperty(k)){var p=v[k];"style"===k?re(P,p):"dangerouslySetInnerHTML"===k?(p=p?p.__html:void 0,
null!=p&&ne(P,p)):"children"===k?"string"===typeof p?("textarea"!==B||""!==p)&&oe(P,p):"number"===typeof p&&oe(P,""+p):"suppressContentEditableWarning"!==k&&"suppressHydrationWarning"!==k&&"autoFocus"!==k&&(sa.hasOwnProperty(k)?null!=p&&ve(A,k):null!=p&&xc(P,k,p,S))}switch(l){case "input":Wb(r);Fc(r,m,!1);break;case "textarea":Wb(r);ie(r,m);break;case "option":null!=m.value&&r.setAttribute("value",""+yc(m.value));break;case "select":g=r;g.multiple=!!m.multiple;r=m.value;null!=r?ee(g,!!m.multiple,
r,!1):null!=m.defaultValue&&ee(g,!!m.multiple,m.defaultValue,!0);break;default:"function"===typeof g.onClick&&(r.onclick=we)}(f=ze(h,f))&&qg(b);b.stateNode=e}null!==b.ref&&(b.effectTag|=128)}else null===b.stateNode?t("166"):void 0;break;case 8:e&&null!=b.stateNode?tg(e,b,e.memoizedProps,f):("string"!==typeof f&&(null===b.stateNode?t("166"):void 0),e=zf(yf.current),zf(L.current),$f(b)?(f=b,h=f.stateNode,e=f.memoizedProps,h[Ia]=f,(f=h.nodeValue!==e)&&qg(b)):(h=b,f=(9===e.nodeType?e:e.ownerDocument).createTextNode(f),
f[Ia]=h,b.stateNode=f));break;case 13:case 14:break;case 16:break;case 9:break;case 10:break;case 15:break;case 6:Bf(b);rg(b);break;case 12:tf(b);break;case 11:break;case 4:t("167");default:t("156")}b=N=null;f=a;if(1073741823===O||1073741823!==f.childExpirationTime){h=0;for(e=f.child;null!==e;){g=e.expirationTime;m=e.childExpirationTime;if(0===h||0!==g&&g<h)h=g;if(0===h||0!==m&&m<h)h=m;e=e.sibling}f.childExpirationTime=h}if(null!==b)return b;null!==c&&0===(c.effectTag&512)&&(null===c.firstEffect&&
(c.firstEffect=a.firstEffect),null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a))}else{a=Gg(a,O);if(null!==a)return a.effectTag&=511,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=512)}if(null!==d)return d;if(null!==c)a=c;else break}return null}function Rg(a){var b=pg(a.alternate,a,O);null===b&&(b=Qg(a));Ig.current=null;return b}
function Sg(a,b,c){Lg?t("243"):void 0;Lg=!0;Ig.currentDispatcher=Hg;var d=a.nextExpirationTimeToWorkOn;if(d!==O||a!==Mg||null===N)Pg(),Mg=a,O=d,N=Ue(Mg.current,null,O),a.pendingCommitExpirationTime=0;var e=!1;do{try{if(b)for(;null!==N&&!Tg();)N=Rg(N);else for(;null!==N;)N=Rg(N)}catch(r){if(null===N)e=!0,Dg(r);else{null===N?t("271"):void 0;var f=N,g=f.return;if(null===g)e=!0,Dg(r);else{a:{var h=g,k=f,l=r;g=O;k.effectTag|=512;k.firstEffect=k.lastEffect=null;Ng=!0;l=nf(l,k);do{switch(h.tag){case 5:h.effectTag|=
1024;h.expirationTime=g;g=Cg(h,l,g);gf(h,g);break a;case 2:case 3:k=l;var m=h.stateNode;if(0===(h.effectTag&64)&&null!==m&&"function"===typeof m.componentDidCatch&&(null===Fg||!Fg.has(m))){h.effectTag|=1024;h.expirationTime=g;g=Eg(h,k,g);gf(h,g);break a}}h=h.return}while(null!==h)}N=Qg(f);continue}}}break}while(1);Lg=!1;rf=qf=pf=Ig.currentDispatcher=null;if(e)Mg=null,a.finishedWork=null;else if(null!==N)a.finishedWork=null;else{b=a.current.alternate;null===b?t("281"):void 0;Mg=null;if(Ng){e=a.latestPendingTime;
f=a.latestSuspendedTime;g=a.latestPingedTime;if(0!==e&&e>d||0!==f&&f>d||0!==g&&g>d){a.didError=!1;c=a.latestPingedTime;0!==c&&c<=d&&(a.latestPingedTime=0);c=a.earliestPendingTime;b=a.latestPendingTime;c===d?a.earliestPendingTime=b===d?a.latestPendingTime=0:b:b===d&&(a.latestPendingTime=c);c=a.earliestSuspendedTime;b=a.latestSuspendedTime;0===c?a.earliestSuspendedTime=a.latestSuspendedTime=d:c>d?a.earliestSuspendedTime=d:b<d&&(a.latestSuspendedTime=d);$e(d,a);a.expirationTime=a.expirationTime;return}if(!a.didError&&
!c){a.didError=!0;a.nextExpirationTimeToWorkOn=d;d=a.expirationTime=1;a.expirationTime=d;return}}a.pendingCommitExpirationTime=d;a.finishedWork=b}}
function wg(a,b){var c;a:{Lg&&!Og?t("263"):void 0;for(c=a.return;null!==c;){switch(c.tag){case 2:case 3:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromCatch||"function"===typeof d.componentDidCatch&&(null===Fg||!Fg.has(d))){a=nf(b,a);a=Eg(c,a,1);ff(c,a);If(c,1);c=void 0;break a}break;case 5:a=nf(b,a);a=Cg(c,a,1);ff(c,a);If(c,1);c=void 0;break a}c=c.return}5===a.tag&&(c=nf(b,a),c=Cg(a,c,1),ff(a,c),If(a,1));c=void 0}return c}
function Hf(a,b){0!==Kg?a=Kg:Lg?a=Og?1:O:b.mode&1?(a=Ug?2+10*(((a-2+15)/10|0)+1):2+25*(((a-2+500)/25|0)+1),null!==Mg&&a===O&&(a+=1)):a=1;Ug&&(0===Vg||a>Vg)&&(Vg=a);return a}
function If(a,b){a:{if(0===a.expirationTime||a.expirationTime>b)a.expirationTime=b;var c=a.alternate;null!==c&&(0===c.expirationTime||c.expirationTime>b)&&(c.expirationTime=b);var d=a.return;if(null===d&&5===a.tag)a=a.stateNode;else{for(;null!==d;){c=d.alternate;if(0===d.childExpirationTime||d.childExpirationTime>b)d.childExpirationTime=b;null!==c&&(0===c.childExpirationTime||c.childExpirationTime>b)&&(c.childExpirationTime=b);if(null===d.return&&5===d.tag){a=d.stateNode;break a}d=d.return}a=null}}if(null!==
a){!Lg&&0!==O&&b<O&&Pg();Ze(a,b);if(!Lg||Og||Mg!==a){b=a;a=a.expirationTime;if(null===b.nextScheduledRoot)b.expirationTime=a,null===T?(U=T=b,b.nextScheduledRoot=b):(T=T.nextScheduledRoot=b,T.nextScheduledRoot=U);else if(c=b.expirationTime,0===c||a<c)b.expirationTime=a;V||(W?Wg&&(Y=b,Z=1,Xg(b,1,!0)):1===a?Yg(1,null):Zg(b,a))}$g>ah&&($g=0,t("185"))}}function bh(a,b,c,d,e){var f=Kg;Kg=1;try{return a(b,c,d,e)}finally{Kg=f}}
var U=null,T=null,ch=0,dh=void 0,V=!1,Y=null,Z=0,Vg=0,eh=!1,fh=!1,gh=null,hh=null,W=!1,Wg=!1,Ug=!1,ih=null,jh=ba.unstable_now(),kh=(jh/10|0)+2,lh=kh,ah=50,$g=0,mh=null,nh=1;function oh(){kh=((ba.unstable_now()-jh)/10|0)+2}function Zg(a,b){if(0!==ch){if(b>ch)return;null!==dh&&ba.unstable_cancelScheduledWork(dh)}ch=b;a=ba.unstable_now()-jh;dh=ba.unstable_scheduleWork(ph,{timeout:10*(b-2)-a})}function Gf(){if(V)return lh;qh();if(0===Z||1073741823===Z)oh(),lh=kh;return lh}
function qh(){var a=0,b=null;if(null!==T)for(var c=T,d=U;null!==d;){var e=d.expirationTime;if(0===e){null===c||null===T?t("244"):void 0;if(d===d.nextScheduledRoot){U=T=d.nextScheduledRoot=null;break}else if(d===U)U=e=d.nextScheduledRoot,T.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===T){T=c;T.nextScheduledRoot=U;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot}else{if(0===a||e<a)a=e,b=d;if(d===T)break;if(1===a)break;
c=d;d=d.nextScheduledRoot}}Y=b;Z=a}function ph(a){if(a.didTimeout&&null!==U){oh();var b=U;do{var c=b.expirationTime;0!==c&&kh>=c&&(b.nextExpirationTimeToWorkOn=kh);b=b.nextScheduledRoot}while(b!==U)}Yg(0,a)}
function Yg(a,b){hh=b;qh();if(null!==hh)for(oh(),lh=kh;null!==Y&&0!==Z&&(0===a||a>=Z)&&(!eh||kh>=Z);)Xg(Y,Z,kh>=Z),qh(),oh(),lh=kh;else for(;null!==Y&&0!==Z&&(0===a||a>=Z);)Xg(Y,Z,!0),qh();null!==hh&&(ch=0,dh=null);0!==Z&&Zg(Y,Z);hh=null;eh=!1;$g=0;mh=null;if(null!==ih)for(a=ih,ih=null,b=0;b<a.length;b++){var c=a[b];try{c._onComplete()}catch(d){fh||(fh=!0,gh=d)}}if(fh)throw a=gh,gh=null,fh=!1,a;}
function Xg(a,b,c){V?t("245"):void 0;V=!0;if(null===hh||c){var d=a.finishedWork;null!==d?rh(a,d,b):(a.finishedWork=null,Sg(a,!1,c),d=a.finishedWork,null!==d&&rh(a,d,b))}else d=a.finishedWork,null!==d?rh(a,d,b):(a.finishedWork=null,Sg(a,!0,c),d=a.finishedWork,null!==d&&(Tg()?a.finishedWork=d:rh(a,d,b)));V=!1}
function rh(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime<=c&&(null===ih?ih=[d]:ih.push(d),d._defer)){a.finishedWork=b;a.expirationTime=0;return}a.finishedWork=null;a===mh?$g++:(mh=a,$g=0);Og=Lg=!0;a.current===b?t("177"):void 0;c=a.pendingCommitExpirationTime;0===c?t("261"):void 0;a.pendingCommitExpirationTime=0;d=b.expirationTime;var e=b.childExpirationTime;d=0===d||0!==e&&e<d?e:d;a.didError=!1;0===d?(a.earliestPendingTime=0,a.latestPendingTime=0,a.earliestSuspendedTime=0,a.latestSuspendedTime=
0,a.latestPingedTime=0):(e=a.latestPendingTime,0!==e&&(e<d?a.earliestPendingTime=a.latestPendingTime=0:a.earliestPendingTime<d&&(a.earliestPendingTime=a.latestPendingTime)),e=a.earliestSuspendedTime,0===e?Ze(a,d):d>a.latestSuspendedTime?(a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0,Ze(a,d)):d<e&&Ze(a,d));$e(0,a);Ig.current=null;1<b.effectTag?null!==b.lastEffect?(b.lastEffect.nextEffect=b,d=b.firstEffect):d=b:d=b.firstEffect;xe=Gd;e=Td();if(Ud(e)){if("selectionStart"in e)var f=
{start:e.selectionStart,end:e.selectionEnd};else a:{f=(f=e.ownerDocument)&&f.defaultView||window;var g=f.getSelection&&f.getSelection();if(g&&0!==g.rangeCount){f=g.anchorNode;var h=g.anchorOffset,k=g.focusNode;g=g.focusOffset;try{f.nodeType,k.nodeType}catch(Xa){f=null;break a}var l=0,m=-1,r=-1,A=0,S=0,B=e,P=null;b:for(;;){for(var v;;){B!==f||0!==h&&3!==B.nodeType||(m=l+h);B!==k||0!==g&&3!==B.nodeType||(r=l+g);3===B.nodeType&&(l+=B.nodeValue.length);if(null===(v=B.firstChild))break;P=B;B=v}for(;;){if(B===
e)break b;P===f&&++A===h&&(m=l);P===k&&++S===g&&(r=l);if(null!==(v=B.nextSibling))break;B=P;P=B.parentNode}B=v}f=-1===m||-1===r?null:{start:m,end:r}}else f=null}f=f||{start:0,end:0}}else f=null;ye={focusedElem:e,selectionRange:f};Gd=!1;for(Q=d;null!==Q;){e=!1;f=void 0;try{for(;null!==Q;){if(Q.effectTag&256){var p=Q.alternate;a:switch(h=Q,h.tag){case 2:case 3:if(h.effectTag&256&&null!==p){var u=p.memoizedProps,x=p.memoizedState,R=h.stateNode;R.props=h.memoizedProps;R.state=h.memoizedState;var yh=R.getSnapshotBeforeUpdate(u,
x);R.__reactInternalSnapshotBeforeUpdate=yh}break a;case 5:case 7:case 8:case 6:break a;default:t("163")}}Q=Q.nextEffect}}catch(Xa){e=!0,f=Xa}e&&(null===Q?t("178"):void 0,wg(Q,f),null!==Q&&(Q=Q.nextEffect))}for(Q=d;null!==Q;){p=!1;u=void 0;try{for(;null!==Q;){var w=Q.effectTag;w&16&&oe(Q.stateNode,"");if(w&128){var y=Q.alternate;if(null!==y){var q=y.ref;null!==q&&("function"===typeof q?q(null):q.current=null)}}switch(w&14){case 2:Ag(Q);Q.effectTag&=-3;break;case 6:Ag(Q);Q.effectTag&=-3;Bg(Q.alternate,
Q);break;case 4:Bg(Q.alternate,Q);break;case 8:x=Q,yg(x),x.return=null,x.child=null,x.alternate&&(x.alternate.child=null,x.alternate.return=null)}Q=Q.nextEffect}}catch(Xa){p=!0,u=Xa}p&&(null===Q?t("178"):void 0,wg(Q,u),null!==Q&&(Q=Q.nextEffect))}q=ye;y=Td();w=q.focusedElem;u=q.selectionRange;if(y!==w&&w&&w.ownerDocument&&Sd(w.ownerDocument.documentElement,w)){null!==u&&Ud(w)&&(y=u.start,q=u.end,void 0===q&&(q=y),"selectionStart"in w?(w.selectionStart=y,w.selectionEnd=Math.min(q,w.value.length)):
(p=w.ownerDocument||document,y=(p?p.defaultView:window).getSelection(),x=w.textContent.length,q=Math.min(u.start,x),u=void 0===u.end?q:Math.min(u.end,x),!y.extend&&q>u&&(x=u,u=q,q=x),x=Rd(w,q),R=Rd(w,u),x&&R&&(1!==y.rangeCount||y.anchorNode!==x.node||y.anchorOffset!==x.offset||y.focusNode!==R.node||y.focusOffset!==R.offset)&&(p=p.createRange(),p.setStart(x.node,x.offset),y.removeAllRanges(),q>u?(y.addRange(p),y.extend(R.node,R.offset)):(p.setEnd(R.node,R.offset),y.addRange(p)))));y=[];for(q=w;q=q.parentNode;)1===
q.nodeType&&y.push({element:q,left:q.scrollLeft,top:q.scrollTop});"function"===typeof w.focus&&w.focus();for(w=0;w<y.length;w++)q=y[w],q.element.scrollLeft=q.left,q.element.scrollTop=q.top}ye=null;Gd=!!xe;xe=null;a.current=b;for(Q=d;null!==Q;){d=!1;w=void 0;try{for(y=c;null!==Q;){var Sa=Q.effectTag;if(Sa&36){var oc=Q.alternate;q=Q;p=y;switch(q.tag){case 2:case 3:var X=q.stateNode;if(q.effectTag&4)if(null===oc)X.props=q.memoizedProps,X.state=q.memoizedState,X.componentDidMount();else{var Ih=oc.memoizedProps,
Jh=oc.memoizedState;X.props=q.memoizedProps;X.state=q.memoizedState;X.componentDidUpdate(Ih,Jh,X.__reactInternalSnapshotBeforeUpdate)}var kg=q.updateQueue;null!==kg&&(X.props=q.memoizedProps,X.state=q.memoizedState,lf(q,kg,X,p));break;case 5:var lg=q.updateQueue;if(null!==lg){u=null;if(null!==q.child)switch(q.child.tag){case 7:u=q.child.stateNode;break;case 2:case 3:u=q.child.stateNode}lf(q,lg,u,p)}break;case 7:var Kh=q.stateNode;null===oc&&q.effectTag&4&&ze(q.type,q.memoizedProps)&&Kh.focus();break;
case 8:break;case 6:break;case 15:break;case 16:break;default:t("163")}}if(Sa&128){var Ac=Q.ref;if(null!==Ac){var mg=Q.stateNode;switch(Q.tag){case 7:var Pd=mg;break;default:Pd=mg}"function"===typeof Ac?Ac(Pd):Ac.current=Pd}}var Lh=Q.nextEffect;Q.nextEffect=null;Q=Lh}}catch(Xa){d=!0,w=Xa}d&&(null===Q?t("178"):void 0,wg(Q,w),null!==Q&&(Q=Q.nextEffect))}Lg=Og=!1;"function"===typeof Oe&&Oe(b.stateNode);Sa=b.expirationTime;b=b.childExpirationTime;b=0===Sa||0!==b&&b<Sa?b:Sa;0===b&&(Fg=null);a.expirationTime=
b;a.finishedWork=null}function Tg(){return eh?!0:null===hh||hh.timeRemaining()>nh?!1:eh=!0}function Dg(a){null===Y?t("246"):void 0;Y.expirationTime=0;fh||(fh=!0,gh=a)}function sh(a,b){var c=W;W=!0;try{return a(b)}finally{(W=c)||V||Yg(1,null)}}function th(a,b){if(W&&!Wg){Wg=!0;try{return a(b)}finally{Wg=!1}}return a(b)}function uh(a,b,c){if(Ug)return a(b,c);W||V||0===Vg||(Yg(Vg,null),Vg=0);var d=Ug,e=W;W=Ug=!0;try{return a(b,c)}finally{Ug=d,(W=e)||V||Yg(1,null)}}
function vh(a){if(!a)return Fe;a=a._reactInternalFiber;a:{2!==jd(a)||2!==a.tag&&3!==a.tag?t("170"):void 0;var b=a;do{switch(b.tag){case 5:b=b.stateNode.context;break a;case 2:if(K(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}break;case 3:if(K(b.type._reactResult)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);t("171");b=void 0}if(2===a.tag){var c=a.type;if(K(c))return Le(a,c,b)}else if(3===a.tag&&(c=a.type._reactResult,K(c)))return Le(a,
c,b);return b}function wh(a,b,c,d,e){var f=b.current;c=vh(c);null===b.context?b.context=c:b.pendingContext=c;b=e;e=df(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);ff(f,e);If(f,d);return d}function xh(a,b,c,d){var e=b.current,f=Gf();e=Hf(f,e);return wh(a,b,c,e,d)}function zh(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 7:return a.child.stateNode;default:return a.child.stateNode}}
function Ah(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ac,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
Fb=function(a,b,c){switch(b){case "input":Dc(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Na(d);e?void 0:t("90");Xb(d);Dc(d,e)}}}break;case "textarea":he(a,c);break;case "select":b=c.value,null!=b&&ee(a,!!c.multiple,b,!1)}};
function Bh(a){var b=2+25*(((Gf()-2+500)/25|0)+1);b<=Jg&&(b=Jg+1);this._expirationTime=Jg=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}Bh.prototype.render=function(a){this._defer?void 0:t("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new Ch;wh(a,b,null,c,d._onCommit);return d};
Bh.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Bh.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:t("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?t("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;b=c;V?t("253"):void 0;Y=a;Z=b;Xg(a,b,!0);Yg(1,null);b=this._next;this._next=null;b=a.firstBatch=b;null!==
b&&b._hasChildren&&b.render(b._children)}else this._next=null,this._defer=!1};Bh.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function Ch(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}Ch.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Ch.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?t("191",c):void 0;c()}}};
function Dh(a,b,c){b=new Se(5,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:c,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null};this._internalRoot=b.stateNode=a}
Dh.prototype.render=function(a,b){var c=this._internalRoot,d=new Ch;b=void 0===b?null:b;null!==b&&d.then(b);xh(a,c,null,d._onCommit);return d};Dh.prototype.unmount=function(a){var b=this._internalRoot,c=new Ch;a=void 0===a?null:a;null!==a&&c.then(a);xh(null,b,null,c._onCommit);return c};Dh.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new Ch;c=void 0===c?null:c;null!==c&&e.then(c);xh(b,d,a,e._onCommit);return e};
Dh.prototype.createBatch=function(){var a=new Bh(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime<=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};function Eh(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Lb=sh;Mb=uh;Nb=function(){V||0===Vg||(Yg(Vg,null),Vg=0)};
function Fh(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new Dh(a,!1,b)}
function Gh(a,b,c,d,e){Eh(c)?void 0:t("200");var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=zh(f._internalRoot);g.call(a)}}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)}else{f=c._reactRootContainer=Fh(c,d);if("function"===typeof e){var h=e;e=function(){var a=zh(f._internalRoot);h.call(a)}}th(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)})}return zh(f._internalRoot)}
function Hh(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;Eh(b)?void 0:t("200");return Ah(a,b,null,c)}
var Mh={createPortal:Hh,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?t("188"):t("268",Object.keys(a)));a=md(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){return Gh(null,a,b,!0,c)},render:function(a,b,c){return Gh(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){null==a||void 0===a._reactInternalFiber?t("38"):void 0;return Gh(a,b,c,!1,d)},unmountComponentAtNode:function(a){Eh(a)?
void 0:t("40");return a._reactRootContainer?(th(function(){Gh(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return Hh.apply(void 0,arguments)},unstable_batchedUpdates:sh,unstable_interactiveUpdates:uh,flushSync:function(a,b){V?t("187"):void 0;var c=W;W=!0;try{return bh(a,b)}finally{W=c,Yg(1,null)}},unstable_flushControlled:function(a){var b=W;W=!0;try{bh(a)}finally{(W=b)||V||Yg(1,null)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[La,
Ma,Na,Ea.injectEventPluginsByName,qa,Ua,function(a){za(a,Ta)},Jb,Kb,Id,Ga]},unstable_createRoot:function(a,b){Eh(a)?void 0:t("278");return new Dh(a,!0,null!=b&&!0===b.hydrate)}};(function(a){var b=a.findFiberByHostInstance;return Re(n({},a,{findHostInstanceByFiber:function(a){a=md(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))})({findFiberByHostInstance:Ka,bundleType:0,version:"16.5.1",rendererPackageName:"react-dom"});
var Nh={default:Mh},Oh=Nh&&Mh||Nh;module.exports=Oh.default||Oh;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(91);
} else {
  module.exports = require('./cjs/schedule.development.js');
}


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.5.1
 * schedule.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});var d=!("undefined"===typeof window||!window.document||!window.document.createElement),f=Date,g="function"===typeof setTimeout?setTimeout:void 0,h="function"===typeof clearTimeout?clearTimeout:void 0,l="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,m="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0,n="object"===typeof performance&&"function"===typeof performance.now;
exports.unstable_now=void 0;if(n){var p=performance;exports.unstable_now=function(){return p.now()}}else exports.unstable_now=function(){return f.now()};exports.unstable_scheduleWork=void 0;exports.unstable_cancelScheduledWork=void 0;
if(d){var q=null,r=null,t=-1,u=!1,v=!1,w=void 0,x=void 0,y=function(a){w=l(function(b){h(x);a(b)});x=g(function(){m(w);a(exports.unstable_now())},100)},z=0,A=33,B=33,C={didTimeout:!1,timeRemaining:function(){var a=z-exports.unstable_now();return 0<a?a:0}},E=function(a,b){var c=a.scheduledCallback,e=!1;try{c(b),e=!0}finally{exports.unstable_cancelScheduledWork(a),e||(u=!0,window.postMessage(D,"*"))}},D="__reactIdleCallback$"+Math.random().toString(36).slice(2);window.addEventListener("message",function(a){if(a.source===
window&&a.data===D&&(u=!1,null!==q)){if(null!==q){var b=exports.unstable_now();if(!(-1===t||t>b)){a=-1;for(var c=[],e=q;null!==e;){var k=e.timeoutTime;-1!==k&&k<=b?c.push(e):-1!==k&&(-1===a||k<a)&&(a=k);e=e.next}if(0<c.length)for(C.didTimeout=!0,b=0,e=c.length;b<e;b++)E(c[b],C);t=a}}for(a=exports.unstable_now();0<z-a&&null!==q;)a=q,C.didTimeout=!1,E(a,C),a=exports.unstable_now();null===q||v||(v=!0,y(F))}},!1);var F=function(a){v=!1;var b=a-z+B;b<B&&A<B?(8>b&&(b=8),B=b<A?A:b):A=b;z=a+B;u||(u=!0,window.postMessage(D,
"*"))};exports.unstable_scheduleWork=function(a,b){var c=-1;null!=b&&"number"===typeof b.timeout&&(c=exports.unstable_now()+b.timeout);if(-1===t||-1!==c&&c<t)t=c;a={scheduledCallback:a,timeoutTime:c,prev:null,next:null};null===q?q=a:(b=a.prev=r,null!==b&&(b.next=a));r=a;v||(v=!0,y(F));return a};exports.unstable_cancelScheduledWork=function(a){if(null!==a.prev||q===a){var b=a.next,c=a.prev;a.next=null;a.prev=null;null!==b?null!==c?(c.next=b,b.prev=c):(b.prev=null,q=b):null!==c?(c.next=null,r=c):r=
q=null}}}else{var G=new Map;exports.unstable_scheduleWork=function(a){var b={scheduledCallback:a,timeoutTime:0,next:null,prev:null},c=g(function(){a({timeRemaining:function(){return Infinity},didTimeout:!1})});G.set(a,c);return b};exports.unstable_cancelScheduledWork=function(a){var b=G.get(a.scheduledCallback);G.delete(a);h(b)}};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(47));
__export(__webpack_require__(93));


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DragDropManagerImpl_1 = __webpack_require__(94);
function createDragDropManager(backend, context) {
    return new DragDropManagerImpl_1.default(backend, context);
}
exports.createDragDropManager = createDragDropManager;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(95);
var reducers_1 = __webpack_require__(98);
var dragDrop_1 = __webpack_require__(15);
var DragDropMonitorImpl_1 = __webpack_require__(163);
var HandlerRegistryImpl_1 = __webpack_require__(165);
var DragDropManagerImpl = /** @class */ (function () {
    function DragDropManagerImpl(createBackend, context) {
        if (context === void 0) { context = {}; }
        this.context = context;
        this.isSetUp = false;
        var store = redux_1.createStore(reducers_1.default);
        this.store = store;
        this.monitor = new DragDropMonitorImpl_1.default(store, new HandlerRegistryImpl_1.default(store));
        this.backend = createBackend(this);
        store.subscribe(this.handleRefCountChange.bind(this));
    }
    DragDropManagerImpl.prototype.getContext = function () {
        return this.context;
    };
    DragDropManagerImpl.prototype.getMonitor = function () {
        return this.monitor;
    };
    DragDropManagerImpl.prototype.getBackend = function () {
        return this.backend;
    };
    DragDropManagerImpl.prototype.getRegistry = function () {
        return this.monitor.registry;
    };
    DragDropManagerImpl.prototype.getActions = function () {
        var manager = this;
        var dispatch = this.store.dispatch;
        function bindActionCreator(actionCreator) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var action = actionCreator.apply(manager, args);
                if (typeof action !== 'undefined') {
                    dispatch(action);
                }
            };
        }
        var actions = dragDrop_1.default(this);
        return Object.keys(actions).reduce(function (boundActions, key) {
            var action = actions[key];
            boundActions[key] = bindActionCreator(action);
            return boundActions;
        }, {});
    };
    DragDropManagerImpl.prototype.dispatch = function (action) {
        this.store.dispatch(action);
    };
    DragDropManagerImpl.prototype.handleRefCountChange = function () {
        var shouldSetUp = this.store.getState().refCount > 0;
        if (shouldSetUp && !this.isSetUp) {
            this.backend.setup();
            this.isSetUp = true;
        }
        else if (!shouldSetUp && this.isSetUp) {
            this.backend.teardown();
            this.isSetUp = false;
        }
    };
    return DragDropManagerImpl;
}());
exports.default = DragDropManagerImpl;


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_symbol_observable__ = __webpack_require__(96);


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_0_symbol_observable__["a" /* default */]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_0_symbol_observable__["a" /* default */]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers);
  var unexpectedKeyCache;

  if (false) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error("Dispatching while constructing your middleware is not allowed. " + "Other middleware would not be applied to this dispatch.");
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (false) {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ponyfill_js__ = __webpack_require__(97);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = Object(__WEBPACK_IMPORTED_MODULE_0__ponyfill_js__["a" /* default */])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(14), __webpack_require__(48)(module)))

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dragOffset_1 = __webpack_require__(99);
var dragOperation_1 = __webpack_require__(100);
var refCount_1 = __webpack_require__(140);
var dirtyHandlerIds_1 = __webpack_require__(141);
var stateId_1 = __webpack_require__(153);
var get = __webpack_require__(154);
function reduce(state, action) {
    if (state === void 0) { state = {}; }
    return {
        dirtyHandlerIds: dirtyHandlerIds_1.default(state.dirtyHandlerIds, {
            type: action.type,
            payload: __assign({}, action.payload, { prevTargetIds: get(state, 'dragOperation.targetIds', []) }),
        }),
        dragOffset: dragOffset_1.default(state.dragOffset, action),
        refCount: refCount_1.default(state.refCount, action),
        dragOperation: dragOperation_1.default(state.dragOperation, action),
        stateId: stateId_1.default(state.stateId),
    };
}
exports.default = reduce;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dragDrop_1 = __webpack_require__(15);
var equality_1 = __webpack_require__(50);
var initialState = {
    initialSourceClientOffset: null,
    initialClientOffset: null,
    clientOffset: null,
};
function dragOffset(state, action) {
    if (state === void 0) { state = initialState; }
    var payload = action.payload;
    switch (action.type) {
        case dragDrop_1.BEGIN_DRAG:
            return {
                initialSourceClientOffset: payload.sourceClientOffset,
                initialClientOffset: payload.clientOffset,
                clientOffset: payload.clientOffset,
            };
        case dragDrop_1.HOVER:
            if (equality_1.areCoordsEqual(state.clientOffset, payload.clientOffset)) {
                return state;
            }
            return __assign({}, state, { clientOffset: payload.clientOffset });
        case dragDrop_1.END_DRAG:
        case dragDrop_1.DROP:
            return initialState;
        default:
            return state;
    }
}
exports.default = dragOffset;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dragDrop_1 = __webpack_require__(15);
var registry_1 = __webpack_require__(16);
var without = __webpack_require__(51);
var initialState = {
    itemType: null,
    item: null,
    sourceId: null,
    targetIds: [],
    dropResult: null,
    didDrop: false,
    isSourcePublic: null,
};
function dragOperation(state, action) {
    if (state === void 0) { state = initialState; }
    var payload = action.payload;
    switch (action.type) {
        case dragDrop_1.BEGIN_DRAG:
            return __assign({}, state, { itemType: payload.itemType, item: payload.item, sourceId: payload.sourceId, isSourcePublic: payload.isSourcePublic, dropResult: null, didDrop: false });
        case dragDrop_1.PUBLISH_DRAG_SOURCE:
            return __assign({}, state, { isSourcePublic: true });
        case dragDrop_1.HOVER:
            return __assign({}, state, { targetIds: payload.targetIds });
        case registry_1.REMOVE_TARGET:
            if (state.targetIds.indexOf(payload.targetId) === -1) {
                return state;
            }
            return __assign({}, state, { targetIds: without(state.targetIds, payload.targetId) });
        case dragDrop_1.DROP:
            return __assign({}, state, { dropResult: payload.dropResult, didDrop: true, targetIds: [] });
        case dragDrop_1.END_DRAG:
            return __assign({}, state, { itemType: null, item: null, sourceId: null, dropResult: null, didDrop: false, isSourcePublic: null, targetIds: [] });
        default:
            return state;
    }
}
exports.default = dragOperation;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(102),
    ListCache = __webpack_require__(115),
    Map = __webpack_require__(121);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(103),
    hashDelete = __webpack_require__(111),
    hashGet = __webpack_require__(112),
    hashHas = __webpack_require__(113),
    hashSet = __webpack_require__(114);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(17);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(30),
    isMasked = __webpack_require__(107),
    isObject = __webpack_require__(7),
    toSource = __webpack_require__(109);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(19);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 106 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(108);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(9);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 109 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 110 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 111 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(17);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(17);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(17);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(116),
    listCacheDelete = __webpack_require__(117),
    listCacheGet = __webpack_require__(118),
    listCacheHas = __webpack_require__(119),
    listCacheSet = __webpack_require__(120);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 116 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(20);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(20);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(20);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(20);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(18),
    root = __webpack_require__(9);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(21);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 123 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(21);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(21);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(21);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 127 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 128 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(130),
    baseIsNaN = __webpack_require__(131),
    strictIndexOf = __webpack_require__(132);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),
/* 130 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 131 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),
/* 132 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(134);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 134 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(136),
    shortOut = __webpack_require__(139);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(137),
    defineProperty = __webpack_require__(138),
    identity = __webpack_require__(55);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 137 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(18);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 139 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var registry_1 = __webpack_require__(16);
function refCount(state, action) {
    if (state === void 0) { state = 0; }
    switch (action.type) {
        case registry_1.ADD_SOURCE:
        case registry_1.ADD_TARGET:
            return state + 1;
        case registry_1.REMOVE_SOURCE:
        case registry_1.REMOVE_TARGET:
            return state - 1;
        default:
            return state;
    }
}
exports.default = refCount;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dragDrop_1 = __webpack_require__(15);
var registry_1 = __webpack_require__(16);
var equality_1 = __webpack_require__(50);
var dirtiness_1 = __webpack_require__(57);
var xor = __webpack_require__(145);
function dirtyHandlerIds(state, action) {
    if (state === void 0) { state = dirtiness_1.NONE; }
    switch (action.type) {
        case dragDrop_1.HOVER:
            break;
        case registry_1.ADD_SOURCE:
        case registry_1.ADD_TARGET:
        case registry_1.REMOVE_TARGET:
        case registry_1.REMOVE_SOURCE:
            return dirtiness_1.NONE;
        case dragDrop_1.BEGIN_DRAG:
        case dragDrop_1.PUBLISH_DRAG_SOURCE:
        case dragDrop_1.END_DRAG:
        case dragDrop_1.DROP:
        default:
            return dirtiness_1.ALL;
    }
    var _a = action.payload, _b = _a.targetIds, targetIds = _b === void 0 ? [] : _b, _c = _a.prevTargetIds, prevTargetIds = _c === void 0 ? [] : _c;
    var result = xor(targetIds, prevTargetIds);
    var didChange = result.length > 0 || !equality_1.areArraysEqual(targetIds, prevTargetIds);
    if (!didChange) {
        return dirtiness_1.NONE;
    }
    // Check the target ids at the innermost position. If they are valid, add them
    // to the result
    var prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
    var innermostTargetId = targetIds[targetIds.length - 1];
    if (prevInnermostTargetId !== innermostTargetId) {
        if (prevInnermostTargetId) {
            result.push(prevInnermostTargetId);
        }
        if (innermostTargetId) {
            result.push(innermostTargetId);
        }
    }
    return result;
}
exports.default = dirtyHandlerIds;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(22),
    baseIntersection = __webpack_require__(143),
    baseRest = __webpack_require__(10),
    castArrayLikeObject = __webpack_require__(144);

/**
 * Creates an array of unique values that are included in all given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * _.intersection([2, 1], [2, 3]);
 * // => [2]
 */
var intersection = baseRest(function(arrays) {
  var mapped = arrayMap(arrays, castArrayLikeObject);
  return (mapped.length && mapped[0] === arrays[0])
    ? baseIntersection(mapped)
    : [];
});

module.exports = intersection;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(29),
    arrayIncludes = __webpack_require__(32),
    arrayIncludesWith = __webpack_require__(33),
    arrayMap = __webpack_require__(22),
    baseUnary = __webpack_require__(34),
    cacheHas = __webpack_require__(35);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * The base implementation of methods like `_.intersection`, without support
 * for iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of shared values.
 */
function baseIntersection(arrays, iteratee, comparator) {
  var includes = comparator ? arrayIncludesWith : arrayIncludes,
      length = arrays[0].length,
      othLength = arrays.length,
      othIndex = othLength,
      caches = Array(othLength),
      maxLength = Infinity,
      result = [];

  while (othIndex--) {
    var array = arrays[othIndex];
    if (othIndex && iteratee) {
      array = arrayMap(array, baseUnary(iteratee));
    }
    maxLength = nativeMin(array.length, maxLength);
    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
      ? new SetCache(othIndex && array)
      : undefined;
  }
  array = arrays[0];

  var index = -1,
      seen = caches[0];

  outer:
  while (++index < length && result.length < maxLength) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (!(seen
          ? cacheHas(seen, computed)
          : includes(result, computed, comparator)
        )) {
      othIndex = othLength;
      while (--othIndex) {
        var cache = caches[othIndex];
        if (!(cache
              ? cacheHas(cache, computed)
              : includes(arrays[othIndex], computed, comparator))
            ) {
          continue outer;
        }
      }
      if (seen) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseIntersection;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLikeObject = __webpack_require__(23);

/**
 * Casts `value` to an empty array if it's not an array like object.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array|Object} Returns the cast array-like object.
 */
function castArrayLikeObject(value) {
  return isArrayLikeObject(value) ? value : [];
}

module.exports = castArrayLikeObject;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(146),
    baseRest = __webpack_require__(10),
    baseXor = __webpack_require__(147),
    isArrayLikeObject = __webpack_require__(23);

/**
 * Creates an array of unique values that is the
 * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
 * of the given arrays. The order of result values is determined by the order
 * they occur in the arrays.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.without
 * @example
 *
 * _.xor([2, 1], [2, 3]);
 * // => [1, 3]
 */
var xor = baseRest(function(arrays) {
  return baseXor(arrayFilter(arrays, isArrayLikeObject));
});

module.exports = xor;


/***/ }),
/* 146 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(52),
    baseFlatten = __webpack_require__(58),
    baseUniq = __webpack_require__(60);

/**
 * The base implementation of methods like `_.xor`, without support for
 * iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of values.
 */
function baseXor(arrays, iteratee, comparator) {
  var length = arrays.length;
  if (length < 2) {
    return length ? baseUniq(arrays[0]) : [];
  }
  var index = -1,
      result = Array(length);

  while (++index < length) {
    var array = arrays[index],
        othIndex = -1;

    while (++othIndex < length) {
      if (othIndex != index) {
        result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
      }
    }
  }
  return baseUniq(baseFlatten(result, 1), iteratee, comparator);
}

module.exports = baseXor;


/***/ }),
/* 148 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(19),
    isArguments = __webpack_require__(59),
    isArray = __webpack_require__(11);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(8),
    isObjectLike = __webpack_require__(4);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(152),
    noop = __webpack_require__(61),
    setToArray = __webpack_require__(62);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(18),
    root = __webpack_require__(9);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function stateId(state) {
    if (state === void 0) { state = 0; }
    return state + 1;
}
exports.default = stateId;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(155);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(156),
    toKey = __webpack_require__(162);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(11),
    isKey = __webpack_require__(157),
    stringToPath = __webpack_require__(158),
    toString = __webpack_require__(160);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(11),
    isSymbol = __webpack_require__(37);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(159);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(63);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(161);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(19),
    arrayMap = __webpack_require__(22),
    isArray = __webpack_require__(11),
    isSymbol = __webpack_require__(37);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(37);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var matchesType_1 = __webpack_require__(49);
var coords_1 = __webpack_require__(164);
var dirtiness_1 = __webpack_require__(57);
var invariant = __webpack_require__(1);
var DragDropMonitorImpl = /** @class */ (function () {
    function DragDropMonitorImpl(store, registry) {
        this.store = store;
        this.registry = registry;
    }
    DragDropMonitorImpl.prototype.subscribeToStateChange = function (listener, options) {
        var _this = this;
        if (options === void 0) { options = { handlerIds: undefined }; }
        var handlerIds = options.handlerIds;
        invariant(typeof listener === 'function', 'listener must be a function.');
        invariant(typeof handlerIds === 'undefined' || Array.isArray(handlerIds), 'handlerIds, when specified, must be an array of strings.');
        var prevStateId = this.store.getState().stateId;
        var handleChange = function () {
            var state = _this.store.getState();
            var currentStateId = state.stateId;
            try {
                var canSkipListener = currentStateId === prevStateId ||
                    (currentStateId === prevStateId + 1 &&
                        !dirtiness_1.areDirty(state.dirtyHandlerIds, handlerIds));
                if (!canSkipListener) {
                    listener();
                }
            }
            finally {
                prevStateId = currentStateId;
            }
        };
        return this.store.subscribe(handleChange);
    };
    DragDropMonitorImpl.prototype.subscribeToOffsetChange = function (listener) {
        var _this = this;
        invariant(typeof listener === 'function', 'listener must be a function.');
        var previousState = this.store.getState().dragOffset;
        var handleChange = function () {
            var nextState = _this.store.getState().dragOffset;
            if (nextState === previousState) {
                return;
            }
            previousState = nextState;
            listener();
        };
        return this.store.subscribe(handleChange);
    };
    DragDropMonitorImpl.prototype.canDragSource = function (sourceId) {
        var source = this.registry.getSource(sourceId);
        invariant(source, 'Expected to find a valid source.');
        if (this.isDragging()) {
            return false;
        }
        return source.canDrag(this, sourceId);
    };
    DragDropMonitorImpl.prototype.canDropOnTarget = function (targetId) {
        var target = this.registry.getTarget(targetId);
        invariant(target, 'Expected to find a valid target.');
        if (!this.isDragging() || this.didDrop()) {
            return false;
        }
        var targetType = this.registry.getTargetType(targetId);
        var draggedItemType = this.getItemType();
        return (matchesType_1.default(targetType, draggedItemType) && target.canDrop(this, targetId));
    };
    DragDropMonitorImpl.prototype.isDragging = function () {
        return Boolean(this.getItemType());
    };
    DragDropMonitorImpl.prototype.isDraggingSource = function (sourceId) {
        var source = this.registry.getSource(sourceId, true);
        invariant(source, 'Expected to find a valid source.');
        if (!this.isDragging() || !this.isSourcePublic()) {
            return false;
        }
        var sourceType = this.registry.getSourceType(sourceId);
        var draggedItemType = this.getItemType();
        if (sourceType !== draggedItemType) {
            return false;
        }
        return source.isDragging(this, sourceId);
    };
    DragDropMonitorImpl.prototype.isOverTarget = function (targetId, options) {
        if (options === void 0) { options = { shallow: false }; }
        var shallow = options.shallow;
        if (!this.isDragging()) {
            return false;
        }
        var targetType = this.registry.getTargetType(targetId);
        var draggedItemType = this.getItemType();
        if (draggedItemType && !matchesType_1.default(targetType, draggedItemType)) {
            return false;
        }
        var targetIds = this.getTargetIds();
        if (!targetIds.length) {
            return false;
        }
        var index = targetIds.indexOf(targetId);
        if (shallow) {
            return index === targetIds.length - 1;
        }
        else {
            return index > -1;
        }
    };
    DragDropMonitorImpl.prototype.getItemType = function () {
        return this.store.getState().dragOperation.itemType;
    };
    DragDropMonitorImpl.prototype.getItem = function () {
        return this.store.getState().dragOperation.item;
    };
    DragDropMonitorImpl.prototype.getSourceId = function () {
        return this.store.getState().dragOperation.sourceId;
    };
    DragDropMonitorImpl.prototype.getTargetIds = function () {
        return this.store.getState().dragOperation.targetIds;
    };
    DragDropMonitorImpl.prototype.getDropResult = function () {
        return this.store.getState().dragOperation.dropResult;
    };
    DragDropMonitorImpl.prototype.didDrop = function () {
        return this.store.getState().dragOperation.didDrop;
    };
    DragDropMonitorImpl.prototype.isSourcePublic = function () {
        return this.store.getState().dragOperation.isSourcePublic;
    };
    DragDropMonitorImpl.prototype.getInitialClientOffset = function () {
        return this.store.getState().dragOffset.initialClientOffset;
    };
    DragDropMonitorImpl.prototype.getInitialSourceClientOffset = function () {
        return this.store.getState().dragOffset.initialSourceClientOffset;
    };
    DragDropMonitorImpl.prototype.getClientOffset = function () {
        return this.store.getState().dragOffset.clientOffset;
    };
    DragDropMonitorImpl.prototype.getSourceClientOffset = function () {
        return coords_1.getSourceClientOffset(this.store.getState().dragOffset);
    };
    DragDropMonitorImpl.prototype.getDifferenceFromInitialOffset = function () {
        return coords_1.getDifferenceFromInitialOffset(this.store.getState().dragOffset);
    };
    return DragDropMonitorImpl;
}());
exports.default = DragDropMonitorImpl;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Coordinate addition
 * @param a The first coordinate
 * @param b The second coordinate
 */
function add(a, b) {
    return {
        x: a.x + b.x,
        y: a.y + b.y,
    };
}
exports.add = add;
/**
 * Coordinate subtraction
 * @param a The first coordinate
 * @param b The second coordinate
 */
function subtract(a, b) {
    return {
        x: a.x - b.x,
        y: a.y - b.y,
    };
}
exports.subtract = subtract;
/**
 * Returns the cartesian distance of the drag source component's position, based on its position
 * at the time when the current drag operation has started, and the movement difference.
 *
 * Returns null if no item is being dragged.
 *
 * @param state The offset state to compute from
 */
function getSourceClientOffset(state) {
    var clientOffset = state.clientOffset, initialClientOffset = state.initialClientOffset, initialSourceClientOffset = state.initialSourceClientOffset;
    if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
        return null;
    }
    return subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
}
exports.getSourceClientOffset = getSourceClientOffset;
/**
 * Determines the x,y offset between the client offset and the initial client offset
 *
 * @param state The offset state to compute from
 */
function getDifferenceFromInitialOffset(state) {
    var clientOffset = state.clientOffset, initialClientOffset = state.initialClientOffset;
    if (!clientOffset || !initialClientOffset) {
        return null;
    }
    return subtract(clientOffset, initialClientOffset);
}
exports.getDifferenceFromInitialOffset = getDifferenceFromInitialOffset;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var registry_1 = __webpack_require__(16);
var getNextUniqueId_1 = __webpack_require__(166);
var interfaces_1 = __webpack_require__(47);
var contracts_1 = __webpack_require__(167);
var invariant = __webpack_require__(1);
var asap = __webpack_require__(168);
function getNextHandlerId(role) {
    var id = getNextUniqueId_1.default().toString();
    switch (role) {
        case interfaces_1.HandlerRole.SOURCE:
            return "S" + id;
        case interfaces_1.HandlerRole.TARGET:
            return "T" + id;
        default:
            throw new Error("Unknown Handler Role: " + role);
    }
}
function parseRoleFromHandlerId(handlerId) {
    switch (handlerId[0]) {
        case 'S':
            return interfaces_1.HandlerRole.SOURCE;
        case 'T':
            return interfaces_1.HandlerRole.TARGET;
        default:
            invariant(false, "Cannot parse handler ID: " + handlerId);
    }
}
function mapContainsValue(map, searchValue) {
    var entries = map.entries();
    var isDone = false;
    do {
        var _a = entries.next(), done = _a.done, _b = _a.value, value = _b[1];
        if (value === searchValue) {
            return true;
        }
        isDone = done;
    } while (!isDone);
    return false;
}
var HandlerRegistryImpl = /** @class */ (function () {
    function HandlerRegistryImpl(store) {
        this.store = store;
        this.types = new Map();
        this.dragSources = new Map();
        this.dropTargets = new Map();
        this.pinnedSourceId = null;
        this.pinnedSource = null;
    }
    HandlerRegistryImpl.prototype.addSource = function (type, source) {
        contracts_1.validateType(type);
        contracts_1.validateSourceContract(source);
        var sourceId = this.addHandler(interfaces_1.HandlerRole.SOURCE, type, source);
        this.store.dispatch(registry_1.addSource(sourceId));
        return sourceId;
    };
    HandlerRegistryImpl.prototype.addTarget = function (type, target) {
        contracts_1.validateType(type, true);
        contracts_1.validateTargetContract(target);
        var targetId = this.addHandler(interfaces_1.HandlerRole.TARGET, type, target);
        this.store.dispatch(registry_1.addTarget(targetId));
        return targetId;
    };
    HandlerRegistryImpl.prototype.containsHandler = function (handler) {
        return (mapContainsValue(this.dragSources, handler) ||
            mapContainsValue(this.dropTargets, handler));
    };
    HandlerRegistryImpl.prototype.getSource = function (sourceId, includePinned) {
        if (includePinned === void 0) { includePinned = false; }
        invariant(this.isSourceId(sourceId), 'Expected a valid source ID.');
        var isPinned = includePinned && sourceId === this.pinnedSourceId;
        var source = isPinned ? this.pinnedSource : this.dragSources.get(sourceId);
        return source;
    };
    HandlerRegistryImpl.prototype.getTarget = function (targetId) {
        invariant(this.isTargetId(targetId), 'Expected a valid target ID.');
        return this.dropTargets.get(targetId);
    };
    HandlerRegistryImpl.prototype.getSourceType = function (sourceId) {
        invariant(this.isSourceId(sourceId), 'Expected a valid source ID.');
        return this.types.get(sourceId);
    };
    HandlerRegistryImpl.prototype.getTargetType = function (targetId) {
        invariant(this.isTargetId(targetId), 'Expected a valid target ID.');
        return this.types.get(targetId);
    };
    HandlerRegistryImpl.prototype.isSourceId = function (handlerId) {
        var role = parseRoleFromHandlerId(handlerId);
        return role === interfaces_1.HandlerRole.SOURCE;
    };
    HandlerRegistryImpl.prototype.isTargetId = function (handlerId) {
        var role = parseRoleFromHandlerId(handlerId);
        return role === interfaces_1.HandlerRole.TARGET;
    };
    HandlerRegistryImpl.prototype.removeSource = function (sourceId) {
        var _this = this;
        invariant(this.getSource(sourceId), 'Expected an existing source.');
        this.store.dispatch(registry_1.removeSource(sourceId));
        asap(function () {
            _this.dragSources.delete(sourceId);
            _this.types.delete(sourceId);
        });
    };
    HandlerRegistryImpl.prototype.removeTarget = function (targetId) {
        invariant(this.getTarget(targetId), 'Expected an existing target.');
        this.store.dispatch(registry_1.removeTarget(targetId));
        this.dropTargets.delete(targetId);
        this.types.delete(targetId);
    };
    HandlerRegistryImpl.prototype.pinSource = function (sourceId) {
        var source = this.getSource(sourceId);
        invariant(source, 'Expected an existing source.');
        this.pinnedSourceId = sourceId;
        this.pinnedSource = source;
    };
    HandlerRegistryImpl.prototype.unpinSource = function () {
        invariant(this.pinnedSource, 'No source is pinned at the time.');
        this.pinnedSourceId = null;
        this.pinnedSource = null;
    };
    HandlerRegistryImpl.prototype.addHandler = function (role, type, handler) {
        var id = getNextHandlerId(role);
        this.types.set(id, type);
        if (role === interfaces_1.HandlerRole.SOURCE) {
            this.dragSources.set(id, handler);
        }
        else if (role === interfaces_1.HandlerRole.TARGET) {
            this.dropTargets.set(id, handler);
        }
        return id;
    };
    return HandlerRegistryImpl;
}());
exports.default = HandlerRegistryImpl;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var nextUniqueId = 0;
function getNextUniqueId() {
    return nextUniqueId++;
}
exports.default = getNextUniqueId;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var invariant = __webpack_require__(1);
function validateSourceContract(source) {
    invariant(typeof source.canDrag === 'function', 'Expected canDrag to be a function.');
    invariant(typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');
    invariant(typeof source.endDrag === 'function', 'Expected endDrag to be a function.');
}
exports.validateSourceContract = validateSourceContract;
function validateTargetContract(target) {
    invariant(typeof target.canDrop === 'function', 'Expected canDrop to be a function.');
    invariant(typeof target.hover === 'function', 'Expected hover to be a function.');
    invariant(typeof target.drop === 'function', 'Expected beginDrag to be a function.');
}
exports.validateTargetContract = validateTargetContract;
function validateType(type, allowArray) {
    if (allowArray && Array.isArray(type)) {
        type.forEach(function (t) { return validateType(t, false); });
        return;
    }
    invariant(typeof type === 'string' || typeof type === 'symbol', allowArray
        ? 'Type can only be a string, a symbol, or an array of either.'
        : 'Type can only be a string or a symbol.');
}
exports.validateType = validateType;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// rawAsap provides everything we need except exception management.
var rawAsap = __webpack_require__(45);
// RawTasks are recycled to reduce GC churn.
var freeTasks = [];
// We queue errors to ensure they are thrown in right order (FIFO).
// Array-as-queue is good enough here, since we are just dealing with exceptions.
var pendingErrors = [];
var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

function throwFirstError() {
    if (pendingErrors.length) {
        throw pendingErrors.shift();
    }
}

/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */
module.exports = asap;
function asap(task) {
    var rawTask;
    if (freeTasks.length) {
        rawTask = freeTasks.pop();
    } else {
        rawTask = new RawTask();
    }
    rawTask.task = task;
    rawAsap(rawTask);
}

// We wrap tasks with recyclable task objects.  A task object implements
// `call`, just like a function.
function RawTask() {
    this.task = null;
}

// The sole purpose of wrapping the task is to catch the exception and recycle
// the task object after its single use.
RawTask.prototype.call = function () {
    try {
        this.task.call();
    } catch (error) {
        if (asap.onerror) {
            // This hook exists purely for testing purposes.
            // Its name will be periodically randomized to break any code that
            // depends on its existence.
            asap.onerror(error);
        } else {
            // In a web browser, exceptions are not fatal. However, to avoid
            // slowing down the queue of pending tasks, we rethrow the error in a
            // lower priority turn.
            pendingErrors.push(error);
            requestErrorThrow();
        }
    } finally {
        this.task = null;
        freeTasks[freeTasks.length] = this;
    }
};


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var checkDecoratorArguments_1 = __webpack_require__(24);
var DragDropContext_1 = __webpack_require__(28);
var hoistStatics = __webpack_require__(25);
var isPlainObject = __webpack_require__(5);
var invariant = __webpack_require__(1);
var shallowEqual = __webpack_require__(12);
var isClassComponent = __webpack_require__(38).default;
function DragLayer(collect, options) {
    if (options === void 0) { options = {}; }
    checkDecoratorArguments_1.default('DragLayer', 'collect[, options]', collect, options);
    invariant(typeof collect === 'function', 'Expected "collect" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ', 'Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-layer.html', collect);
    invariant(isPlainObject(options), 'Expected "options" provided as the second argument to DragLayer to be a plain object when specified. ' +
        'Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-layer.html', options);
    return function decorateLayer(DecoratedComponent) {
        var Decorated = DecoratedComponent;
        var _a = options.arePropsEqual, arePropsEqual = _a === void 0 ? shallowEqual : _a;
        var displayName = Decorated.displayName || Decorated.name || 'Component';
        var DragLayerContainer = /** @class */ (function (_super) {
            __extends(DragLayerContainer, _super);
            function DragLayerContainer(props) {
                var _this = _super.call(this, props) || this;
                _this.isCurrentlyMounted = false;
                _this.ref = React.createRef();
                _this.handleChange = _this.handleChange.bind(_this);
                return _this;
            }
            Object.defineProperty(DragLayerContainer.prototype, "DecoratedComponent", {
                get: function () {
                    return DecoratedComponent;
                },
                enumerable: true,
                configurable: true
            });
            DragLayerContainer.prototype.getDecoratedComponentInstance = function () {
                invariant(this.ref.current, 'In order to access an instance of the decorated component it can not be a stateless component.');
                return this.ref.current;
            };
            DragLayerContainer.prototype.shouldComponentUpdate = function (nextProps, nextState) {
                return (!arePropsEqual(nextProps, this.props) ||
                    !shallowEqual(nextState, this.state));
            };
            DragLayerContainer.prototype.componentDidMount = function () {
                this.isCurrentlyMounted = true;
                this.handleChange();
            };
            DragLayerContainer.prototype.componentWillUnmount = function () {
                this.isCurrentlyMounted = false;
                if (this.unsubscribeFromOffsetChange) {
                    this.unsubscribeFromOffsetChange();
                    this.unsubscribeFromOffsetChange = undefined;
                }
                if (this.unsubscribeFromStateChange) {
                    this.unsubscribeFromStateChange();
                    this.unsubscribeFromStateChange = undefined;
                }
            };
            DragLayerContainer.prototype.render = function () {
                var _this = this;
                return (React.createElement(DragDropContext_1.Consumer, null, function (_a) {
                    var dragDropManager = _a.dragDropManager;
                    if (dragDropManager === undefined) {
                        return null;
                    }
                    _this.receiveDragDropManager(dragDropManager);
                    // Let componentDidMount fire to initialize the collected state
                    if (!_this.isCurrentlyMounted) {
                        return null;
                    }
                    return (React.createElement(Decorated, __assign({}, _this.props, _this.state, { ref: isClassComponent(Decorated) ? _this.ref : undefined })));
                }));
            };
            DragLayerContainer.prototype.receiveDragDropManager = function (dragDropManager) {
                if (this.manager !== undefined) {
                    return;
                }
                this.manager = dragDropManager;
                invariant(typeof dragDropManager === 'object', 'Could not find the drag and drop manager in the context of %s. ' +
                    'Make sure to wrap the top-level component of your app with DragDropContext. ' +
                    'Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);
                var monitor = this.manager.getMonitor();
                this.unsubscribeFromOffsetChange = monitor.subscribeToOffsetChange(this.handleChange);
                this.unsubscribeFromStateChange = monitor.subscribeToStateChange(this.handleChange);
            };
            DragLayerContainer.prototype.handleChange = function () {
                if (!this.isCurrentlyMounted) {
                    return;
                }
                var nextState = this.getCurrentState();
                if (!shallowEqual(nextState, this.state)) {
                    this.setState(nextState);
                }
            };
            DragLayerContainer.prototype.getCurrentState = function () {
                if (!this.manager) {
                    return {};
                }
                var monitor = this.manager.getMonitor();
                return collect(monitor, this.props);
            };
            DragLayerContainer.displayName = "DragLayer(" + displayName + ")";
            return DragLayerContainer;
        }(React.Component));
        return hoistStatics(DragLayerContainer, DecoratedComponent);
    };
}
exports.default = DragLayer;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(171);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 171 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var checkDecoratorArguments_1 = __webpack_require__(24);
var decorateHandler_1 = __webpack_require__(64);
var registerSource_1 = __webpack_require__(177);
var createSourceFactory_1 = __webpack_require__(178);
var createSourceMonitor_1 = __webpack_require__(179);
var createSourceConnector_1 = __webpack_require__(180);
var isValidType_1 = __webpack_require__(66);
var invariant = __webpack_require__(1);
var isPlainObject = __webpack_require__(5);
/**
 * Decorates a component as a dragsource
 * @param type The dragsource type
 * @param spec The drag source specification
 * @param collect The props collector function
 * @param options DnD optinos
 */
function DragSource(type, spec, collect, options) {
    if (options === void 0) { options = {}; }
    checkDecoratorArguments_1.default('DragSource', 'type, spec, collect[, options]', type, spec, collect, options);
    var getType = type;
    if (typeof type !== 'function') {
        invariant(isValidType_1.default(type), 'Expected "type" provided as the first argument to DragSource to be ' +
            'a string, or a function that returns a string given the current props. ' +
            'Instead, received %s. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', type);
        getType = function () { return type; };
    }
    invariant(isPlainObject(spec), 'Expected "spec" provided as the second argument to DragSource to be ' +
        'a plain object. Instead, received %s. ' +
        'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', spec);
    var createSource = createSourceFactory_1.default(spec);
    invariant(typeof collect === 'function', 'Expected "collect" provided as the third argument to DragSource to be ' +
        'a function that returns a plain object of props to inject. ' +
        'Instead, received %s. ' +
        'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', collect);
    invariant(isPlainObject(options), 'Expected "options" provided as the fourth argument to DragSource to be ' +
        'a plain object when specified. ' +
        'Instead, received %s. ' +
        'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', collect);
    return function decorateSource(DecoratedComponent) {
        return decorateHandler_1.default({
            containerDisplayName: 'DragSource',
            createHandler: createSource,
            registerHandler: registerSource_1.default,
            createMonitor: createSourceMonitor_1.default,
            createConnector: createSourceConnector_1.default,
            DecoratedComponent: DecoratedComponent,
            getType: getType,
            collect: collect,
            options: options,
        });
    };
}
exports.default = DragSource;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(174));
__export(__webpack_require__(175));
__export(__webpack_require__(176));


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isFunction = __webpack_require__(30);
var noop = __webpack_require__(61);
/**
 * Provides a set of static methods for creating Disposables.
 * @param {Function} action Action to run during the first call to dispose.
 * The action is guaranteed to be run at most once.
 */
var Disposable = /** @class */ (function () {
    function Disposable(action) {
        this.isDisposed = false;
        this.action = isFunction(action) ? action : noop;
    }
    /**
     * Validates whether the given object is a disposable
     * @param {Object} Object to test whether it has a dispose method
     * @returns {Boolean} true if a disposable object, else false.
     */
    Disposable.isDisposable = function (d) {
        return d && isFunction(d.dispose);
    };
    Disposable._fixup = function (result) {
        return Disposable.isDisposable(result) ? result : Disposable.empty;
    };
    /**
     * Creates a disposable object that invokes the specified action when disposed.
     * @param {Function} dispose Action to run during the first call to dispose.
     * The action is guaranteed to be run at most once.
     * @return {Disposable} The disposable object that runs the given action upon disposal.
     */
    Disposable.create = function (action) {
        return new Disposable(action);
    };
    /** Performs the task of cleaning up resources. */
    Disposable.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.action();
            this.isDisposed = true;
        }
    };
    /**
     * Gets the disposable that does nothing when disposed.
     */
    Disposable.empty = { dispose: noop };
    return Disposable;
}());
exports.Disposable = Disposable;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a disposable resource whose underlying disposable resource can
 * be replaced by another disposable resource, causing automatic disposal of
 * the previous underlying disposable resource.
 */
var SerialDisposable = /** @class */ (function () {
    function SerialDisposable() {
        this.isDisposed = false;
    }
    /**
     * Gets the underlying disposable.
     * @returns {Any} the underlying disposable.
     */
    SerialDisposable.prototype.getDisposable = function () {
        return this.current;
    };
    SerialDisposable.prototype.setDisposable = function (value) {
        var shouldDispose = this.isDisposed;
        if (!shouldDispose) {
            var old = this.current;
            this.current = value;
            if (old) {
                old.dispose();
            }
        }
        if (shouldDispose && value) {
            value.dispose();
        }
    };
    /** Performs the task of cleaning up resources. */
    SerialDisposable.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            var old = this.current;
            this.current = undefined;
            if (old) {
                old.dispose();
            }
        }
    };
    return SerialDisposable;
}());
exports.SerialDisposable = SerialDisposable;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a group of disposable resources that are disposed together.
 * @constructor
 */
var CompositeDisposable = /** @class */ (function () {
    function CompositeDisposable() {
        var disposables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            disposables[_i] = arguments[_i];
        }
        this.isDisposed = false;
        this.disposables = disposables;
    }
    /**
     * Adds a disposable to the CompositeDisposable or disposes the disposable if the CompositeDisposable is disposed.
     * @param {Any} item Disposable to add.
     */
    CompositeDisposable.prototype.add = function (item) {
        if (this.isDisposed) {
            item.dispose();
        }
        else {
            this.disposables.push(item);
        }
    };
    /**
     * Removes and disposes the first occurrence of a disposable from the CompositeDisposable.
     * @param {Any} item Disposable to remove.
     * @returns {Boolean} true if found; false otherwise.
     */
    CompositeDisposable.prototype.remove = function (item) {
        var shouldDispose = false;
        if (!this.isDisposed) {
            var idx = this.disposables.indexOf(item);
            if (idx !== -1) {
                shouldDispose = true;
                this.disposables.splice(idx, 1);
                item.dispose();
            }
        }
        return shouldDispose;
    };
    /**
     *  Disposes all disposables in the group and removes them from the group but
     *  does not dispose the CompositeDisposable.
     */
    CompositeDisposable.prototype.clear = function () {
        if (!this.isDisposed) {
            var len = this.disposables.length;
            var currentDisposables = new Array(len);
            for (var i = 0; i < len; i++) {
                currentDisposables[i] = this.disposables[i];
            }
            this.disposables = [];
            for (var i = 0; i < len; i++) {
                currentDisposables[i].dispose();
            }
        }
    };
    /**
     *  Disposes all disposables in the group and removes them from the group.
     */
    CompositeDisposable.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            var len = this.disposables.length;
            var currentDisposables = new Array(len);
            for (var i = 0; i < len; i++) {
                currentDisposables[i] = this.disposables[i];
            }
            this.disposables = [];
            for (var i = 0; i < len; i++) {
                currentDisposables[i].dispose();
            }
        }
    };
    return CompositeDisposable;
}());
exports.CompositeDisposable = CompositeDisposable;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function registerSource(type, source, manager) {
    var registry = manager.getRegistry();
    var sourceId = registry.addSource(type, source);
    function unregisterSource() {
        registry.removeSource(sourceId);
    }
    return {
        handlerId: sourceId,
        unregister: unregisterSource,
    };
}
exports.default = registerSource;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(0);
var invariant = __webpack_require__(1);
var isPlainObject = __webpack_require__(5);
var ALLOWED_SPEC_METHODS = ['canDrag', 'beginDrag', 'isDragging', 'endDrag'];
var REQUIRED_SPEC_METHODS = ['beginDrag'];
function createSourceFactory(spec) {
    Object.keys(spec).forEach(function (key) {
        invariant(ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drag source specification to only have ' +
            'some of the following keys: %s. ' +
            'Instead received a specification with an unexpected "%s" key. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', ALLOWED_SPEC_METHODS.join(', '), key);
        invariant(typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' +
            'Instead received a specification with %s: %s. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);
    });
    REQUIRED_SPEC_METHODS.forEach(function (key) {
        invariant(typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' +
            'Instead received a specification with %s: %s. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);
    });
    var SourceImpl = /** @class */ (function () {
        function SourceImpl(monitor) {
            this.monitor = monitor;
            this.props = null;
            this.ref = react_1.createRef();
            this.beginDrag = this.beginDrag.bind(this);
        }
        SourceImpl.prototype.receiveProps = function (props) {
            this.props = props;
        };
        SourceImpl.prototype.canDrag = function () {
            if (!this.props) {
                return false;
            }
            if (!spec.canDrag) {
                return true;
            }
            return spec.canDrag(this.props, this.monitor);
        };
        SourceImpl.prototype.isDragging = function (globalMonitor, sourceId) {
            if (!this.props) {
                return false;
            }
            if (!spec.isDragging) {
                return sourceId === globalMonitor.getSourceId();
            }
            return spec.isDragging(this.props, this.monitor);
        };
        SourceImpl.prototype.beginDrag = function () {
            if (!this.props) {
                return;
            }
            var item = spec.beginDrag(this.props, this.monitor, this.ref.current);
            if (false) {
                invariant(isPlainObject(item), 'beginDrag() must return a plain object that represents the dragged item. ' +
                    'Instead received %s. ' +
                    'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', item);
            }
            return item;
        };
        SourceImpl.prototype.endDrag = function () {
            if (!this.props) {
                return;
            }
            if (!spec.endDrag) {
                return;
            }
            spec.endDrag(this.props, this.monitor, this.ref.current);
        };
        return SourceImpl;
    }());
    return function createSource(monitor) {
        return new SourceImpl(monitor);
    };
}
exports.default = createSourceFactory;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var invariant = __webpack_require__(1);
var isCallingCanDrag = false;
var isCallingIsDragging = false;
var SourceMonitor = /** @class */ (function () {
    function SourceMonitor(manager) {
        this.internalMonitor = manager.getMonitor();
    }
    SourceMonitor.prototype.receiveHandlerId = function (sourceId) {
        this.sourceId = sourceId;
    };
    SourceMonitor.prototype.canDrag = function () {
        invariant(!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source-monitor.html');
        try {
            isCallingCanDrag = true;
            return this.internalMonitor.canDragSource(this.sourceId);
        }
        finally {
            isCallingCanDrag = false;
        }
    };
    SourceMonitor.prototype.isDragging = function () {
        invariant(!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source-monitor.html');
        try {
            isCallingIsDragging = true;
            return this.internalMonitor.isDraggingSource(this.sourceId);
        }
        finally {
            isCallingIsDragging = false;
        }
    };
    SourceMonitor.prototype.subscribeToStateChange = function (listener, options) {
        return this.internalMonitor.subscribeToStateChange(listener, options);
    };
    SourceMonitor.prototype.isDraggingSource = function (sourceId) {
        return this.internalMonitor.isDraggingSource(sourceId);
    };
    SourceMonitor.prototype.isOverTarget = function (targetId, options) {
        return this.internalMonitor.isOverTarget(targetId, options);
    };
    SourceMonitor.prototype.getTargetIds = function () {
        return this.internalMonitor.getTargetIds();
    };
    SourceMonitor.prototype.isSourcePublic = function () {
        return this.internalMonitor.isSourcePublic();
    };
    SourceMonitor.prototype.getSourceId = function () {
        return this.internalMonitor.getSourceId();
    };
    SourceMonitor.prototype.subscribeToOffsetChange = function (listener) {
        return this.internalMonitor.subscribeToOffsetChange(listener);
    };
    SourceMonitor.prototype.canDragSource = function (sourceId) {
        return this.internalMonitor.canDragSource(sourceId);
    };
    SourceMonitor.prototype.canDropOnTarget = function (targetId) {
        return this.internalMonitor.canDropOnTarget(targetId);
    };
    SourceMonitor.prototype.getItemType = function () {
        return this.internalMonitor.getItemType();
    };
    SourceMonitor.prototype.getItem = function () {
        return this.internalMonitor.getItem();
    };
    SourceMonitor.prototype.getDropResult = function () {
        return this.internalMonitor.getDropResult();
    };
    SourceMonitor.prototype.didDrop = function () {
        return this.internalMonitor.didDrop();
    };
    SourceMonitor.prototype.getInitialClientOffset = function () {
        return this.internalMonitor.getInitialClientOffset();
    };
    SourceMonitor.prototype.getInitialSourceClientOffset = function () {
        return this.internalMonitor.getInitialSourceClientOffset();
    };
    SourceMonitor.prototype.getSourceClientOffset = function () {
        return this.internalMonitor.getSourceClientOffset();
    };
    SourceMonitor.prototype.getClientOffset = function () {
        return this.internalMonitor.getClientOffset();
    };
    SourceMonitor.prototype.getDifferenceFromInitialOffset = function () {
        return this.internalMonitor.getDifferenceFromInitialOffset();
    };
    return SourceMonitor;
}());
function createSourceMonitor(manager) {
    return new SourceMonitor(manager);
}
exports.default = createSourceMonitor;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var wrapConnectorHooks_1 = __webpack_require__(65);
var shallowEqual = __webpack_require__(12);
function createSourceConnector(backend) {
    var currentHandlerId;
    var currentDragSourceNode;
    var currentDragSourceOptions;
    var disconnectCurrentDragSource;
    var currentDragPreviewNode;
    var currentDragPreviewOptions;
    var disconnectCurrentDragPreview;
    function reconnectDragSource() {
        if (disconnectCurrentDragSource) {
            disconnectCurrentDragSource();
            disconnectCurrentDragSource = undefined;
        }
        if (currentHandlerId && currentDragSourceNode) {
            disconnectCurrentDragSource = backend.connectDragSource(currentHandlerId, currentDragSourceNode, currentDragSourceOptions);
        }
    }
    function reconnectDragPreview() {
        if (disconnectCurrentDragPreview) {
            disconnectCurrentDragPreview();
            disconnectCurrentDragPreview = undefined;
        }
        if (currentHandlerId && currentDragPreviewNode) {
            disconnectCurrentDragPreview = backend.connectDragPreview(currentHandlerId, currentDragPreviewNode, currentDragPreviewOptions);
        }
    }
    function receiveHandlerId(handlerId) {
        if (handlerId === currentHandlerId) {
            return;
        }
        currentHandlerId = handlerId;
        reconnectDragSource();
        reconnectDragPreview();
    }
    var hooks = wrapConnectorHooks_1.default({
        dragSource: function connectDragSource(node, options) {
            if (node === currentDragSourceNode &&
                shallowEqual(options, currentDragSourceOptions)) {
                return;
            }
            currentDragSourceNode = node;
            currentDragSourceOptions = options;
            reconnectDragSource();
        },
        dragPreview: function connectDragPreview(node, options) {
            if (node === currentDragPreviewNode &&
                shallowEqual(options, currentDragPreviewOptions)) {
                return;
            }
            currentDragPreviewNode = node;
            currentDragPreviewOptions = options;
            reconnectDragPreview();
        },
    });
    return {
        receiveHandlerId: receiveHandlerId,
        hooks: hooks,
    };
}
exports.default = createSourceConnector;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(0);
var invariant = __webpack_require__(1);
function cloneWithRef(element, newRef) {
    var previousRef = element.ref;
    invariant(typeof previousRef !== 'string', 'Cannot connect React DnD to an element with an existing string ref. ' +
        'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. ' +
        'Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute');
    if (!previousRef) {
        // When there is no ref on the element, use the new ref directly
        return react_1.cloneElement(element, {
            ref: newRef,
        });
    }
    return react_1.cloneElement(element, {
        ref: function (node) {
            newRef(node);
            if (previousRef) {
                previousRef(node);
            }
        },
    });
}
exports.default = cloneWithRef;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var checkDecoratorArguments_1 = __webpack_require__(24);
var decorateHandler_1 = __webpack_require__(64);
var registerTarget_1 = __webpack_require__(183);
var createTargetFactory_1 = __webpack_require__(184);
var createTargetMonitor_1 = __webpack_require__(185);
var createTargetConnector_1 = __webpack_require__(186);
var isValidType_1 = __webpack_require__(66);
var invariant = __webpack_require__(1);
var isPlainObject = __webpack_require__(5);
function DropTarget(type, spec, collect, options) {
    if (options === void 0) { options = {}; }
    checkDecoratorArguments_1.default('DropTarget', 'type, spec, collect[, options]', type, spec, collect, options);
    var getType = type;
    if (typeof type !== 'function') {
        invariant(isValidType_1.default(type, true), 'Expected "type" provided as the first argument to DropTarget to be ' +
            'a string, an array of strings, or a function that returns either given ' +
            'the current props. Instead, received %s. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', type);
        getType = function () { return type; };
    }
    invariant(isPlainObject(spec), 'Expected "spec" provided as the second argument to DropTarget to be ' +
        'a plain object. Instead, received %s. ' +
        'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', spec);
    var createTarget = createTargetFactory_1.default(spec);
    invariant(typeof collect === 'function', 'Expected "collect" provided as the third argument to DropTarget to be ' +
        'a function that returns a plain object of props to inject. ' +
        'Instead, received %s. ' +
        'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', collect);
    invariant(isPlainObject(options), 'Expected "options" provided as the fourth argument to DropTarget to be ' +
        'a plain object when specified. ' +
        'Instead, received %s. ' +
        'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', collect);
    return function decorateTarget(DecoratedComponent) {
        return decorateHandler_1.default({
            containerDisplayName: 'DropTarget',
            createHandler: createTarget,
            registerHandler: registerTarget_1.default,
            createMonitor: createTargetMonitor_1.default,
            createConnector: createTargetConnector_1.default,
            DecoratedComponent: DecoratedComponent,
            getType: getType,
            collect: collect,
            options: options,
        });
    };
}
exports.default = DropTarget;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function registerTarget(type, target, manager) {
    var registry = manager.getRegistry();
    var targetId = registry.addTarget(type, target);
    function unregisterTarget() {
        registry.removeTarget(targetId);
    }
    return {
        handlerId: targetId,
        unregister: unregisterTarget,
    };
}
exports.default = registerTarget;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(0);
var invariant = __webpack_require__(1);
var isPlainObject = __webpack_require__(5);
var ALLOWED_SPEC_METHODS = ['canDrop', 'hover', 'drop'];
function createTargetFactory(spec) {
    Object.keys(spec).forEach(function (key) {
        invariant(ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drop target specification to only have ' +
            'some of the following keys: %s. ' +
            'Instead received a specification with an unexpected "%s" key. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', ALLOWED_SPEC_METHODS.join(', '), key);
        invariant(typeof spec[key] === 'function', 'Expected %s in the drop target specification to be a function. ' +
            'Instead received a specification with %s: %s. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', key, key, spec[key]);
    });
    var TargetImpl = /** @class */ (function () {
        function TargetImpl(monitor) {
            this.monitor = monitor;
            this.props = null;
            this.ref = react_1.createRef();
        }
        TargetImpl.prototype.receiveProps = function (props) {
            this.props = props;
        };
        TargetImpl.prototype.receiveMonitor = function (monitor) {
            this.monitor = monitor;
        };
        TargetImpl.prototype.canDrop = function () {
            if (!spec.canDrop) {
                return true;
            }
            return spec.canDrop(this.props, this.monitor);
        };
        TargetImpl.prototype.hover = function () {
            if (!spec.hover) {
                return;
            }
            spec.hover(this.props, this.monitor, this.ref.current);
        };
        TargetImpl.prototype.drop = function () {
            if (!spec.drop) {
                return undefined;
            }
            var dropResult = spec.drop(this.props, this.monitor, this.ref.current);
            if (false) {
                invariant(typeof dropResult === 'undefined' || isPlainObject(dropResult), 'drop() must either return undefined, or an object that represents the drop result. ' +
                    'Instead received %s. ' +
                    'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', dropResult);
            }
            return dropResult;
        };
        return TargetImpl;
    }());
    return function createTarget(monitor) {
        return new TargetImpl(monitor);
    };
}
exports.default = createTargetFactory;


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var invariant = __webpack_require__(1);
var isCallingCanDrop = false;
var TargetMonitor = /** @class */ (function () {
    function TargetMonitor(manager) {
        this.internalMonitor = manager.getMonitor();
    }
    TargetMonitor.prototype.receiveHandlerId = function (targetId) {
        this.targetId = targetId;
    };
    TargetMonitor.prototype.canDrop = function () {
        invariant(!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target-monitor.html');
        try {
            isCallingCanDrop = true;
            return this.internalMonitor.canDropOnTarget(this.targetId);
        }
        finally {
            isCallingCanDrop = false;
        }
    };
    TargetMonitor.prototype.isOver = function (options) {
        return this.internalMonitor.isOverTarget(this.targetId, options);
    };
    TargetMonitor.prototype.getItemType = function () {
        return this.internalMonitor.getItemType();
    };
    TargetMonitor.prototype.getItem = function () {
        return this.internalMonitor.getItem();
    };
    TargetMonitor.prototype.getDropResult = function () {
        return this.internalMonitor.getDropResult();
    };
    TargetMonitor.prototype.didDrop = function () {
        return this.internalMonitor.didDrop();
    };
    TargetMonitor.prototype.getInitialClientOffset = function () {
        return this.internalMonitor.getInitialClientOffset();
    };
    TargetMonitor.prototype.getInitialSourceClientOffset = function () {
        return this.internalMonitor.getInitialSourceClientOffset();
    };
    TargetMonitor.prototype.getSourceClientOffset = function () {
        return this.internalMonitor.getSourceClientOffset();
    };
    TargetMonitor.prototype.getClientOffset = function () {
        return this.internalMonitor.getClientOffset();
    };
    TargetMonitor.prototype.getDifferenceFromInitialOffset = function () {
        return this.internalMonitor.getDifferenceFromInitialOffset();
    };
    return TargetMonitor;
}());
exports.TargetMonitor = TargetMonitor;
function createTargetMonitor(manager) {
    return new TargetMonitor(manager);
}
exports.default = createTargetMonitor;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var wrapConnectorHooks_1 = __webpack_require__(65);
var shallowEqual = __webpack_require__(12);
function createTargetConnector(backend) {
    var currentHandlerId;
    var currentDropTargetNode;
    var currentDropTargetOptions;
    var disconnectCurrentDropTarget;
    function reconnectDropTarget() {
        if (disconnectCurrentDropTarget) {
            disconnectCurrentDropTarget();
            disconnectCurrentDropTarget = undefined;
        }
        if (currentHandlerId && currentDropTargetNode) {
            disconnectCurrentDropTarget = backend.connectDropTarget(currentHandlerId, currentDropTargetNode, currentDropTargetOptions);
        }
    }
    function receiveHandlerId(handlerId) {
        if (handlerId === currentHandlerId) {
            return;
        }
        currentHandlerId = handlerId;
        reconnectDropTarget();
    }
    var hooks = wrapConnectorHooks_1.default({
        dropTarget: function connectDropTarget(node, options) {
            if (node === currentDropTargetNode &&
                shallowEqual(options, currentDropTargetOptions)) {
                return;
            }
            currentDropTargetNode = node;
            currentDropTargetOptions = options;
            reconnectDropTarget();
        },
    });
    return {
        receiveHandlerId: receiveHandlerId,
        hooks: hooks,
    };
}
exports.default = createTargetConnector;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HTML5Backend_1 = __webpack_require__(188);
var getEmptyImage_1 = __webpack_require__(208);
exports.getEmptyImage = getEmptyImage_1.default;
var NativeTypes = __webpack_require__(39);
exports.NativeTypes = NativeTypes;
function createHTML5Backend(manager) {
    return new HTML5Backend_1.default(manager);
}
exports.default = createHTML5Backend;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var EnterLeaveCounter_1 = __webpack_require__(189);
var BrowserDetector_1 = __webpack_require__(67);
var OffsetUtils_1 = __webpack_require__(191);
var NativeDragSources_1 = __webpack_require__(193);
var NativeTypes = __webpack_require__(39);
var autobind_decorator_1 = __webpack_require__(194);
var defaults = __webpack_require__(195);
var shallowEqual = __webpack_require__(12);
var HTML5Backend = /** @class */ (function () {
    function HTML5Backend(manager) {
        this.sourcePreviewNodes = new Map();
        this.sourcePreviewNodeOptions = new Map();
        this.sourceNodes = new Map();
        this.sourceNodeOptions = new Map();
        this.enterLeaveCounter = new EnterLeaveCounter_1.default();
        this.dragStartSourceIds = null;
        this.dropTargetIds = [];
        this.dragEnterTargetIds = [];
        this.currentNativeSource = null;
        this.currentNativeHandle = null;
        this.currentDragSourceNode = null;
        this.currentDragSourceNodeOffset = null;
        this.currentDragSourceNodeOffsetChanged = false;
        this.altKeyPressed = false;
        this.mouseMoveTimeoutTimer = null;
        this.asyncEndDragFrameId = null;
        this.dragOverTargetIds = null;
        this.actions = manager.getActions();
        this.monitor = manager.getMonitor();
        this.registry = manager.getRegistry();
        this.context = manager.getContext();
    }
    Object.defineProperty(HTML5Backend.prototype, "window", {
        // public for test
        get: function () {
            if (this.context && this.context.window) {
                return this.context.window;
            }
            else if (typeof window !== 'undefined') {
                return window;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    HTML5Backend.prototype.setup = function () {
        if (this.window === undefined) {
            return;
        }
        if (this.window.__isReactDndBackendSetUp) {
            throw new Error('Cannot have two HTML5 backends at the same time.');
        }
        this.window.__isReactDndBackendSetUp = true;
        this.addEventListeners(this.window);
    };
    HTML5Backend.prototype.teardown = function () {
        if (this.window === undefined) {
            return;
        }
        this.window.__isReactDndBackendSetUp = false;
        this.removeEventListeners(this.window);
        this.clearCurrentDragSourceNode();
        if (this.asyncEndDragFrameId) {
            this.window.cancelAnimationFrame(this.asyncEndDragFrameId);
        }
    };
    HTML5Backend.prototype.connectDragPreview = function (sourceId, node, options) {
        var _this = this;
        this.sourcePreviewNodeOptions.set(sourceId, options);
        this.sourcePreviewNodes.set(sourceId, node);
        return function () {
            _this.sourcePreviewNodes.delete(sourceId);
            _this.sourcePreviewNodeOptions.delete(sourceId);
        };
    };
    HTML5Backend.prototype.connectDragSource = function (sourceId, node, options) {
        var _this = this;
        this.sourceNodes.set(sourceId, node);
        this.sourceNodeOptions.set(sourceId, options);
        var handleDragStart = function (e) { return _this.handleDragStart(e, sourceId); };
        var handleSelectStart = function (e) { return _this.handleSelectStart(e); };
        node.setAttribute('draggable', true);
        node.addEventListener('dragstart', handleDragStart);
        node.addEventListener('selectstart', handleSelectStart);
        return function () {
            _this.sourceNodes.delete(sourceId);
            _this.sourceNodeOptions.delete(sourceId);
            node.removeEventListener('dragstart', handleDragStart);
            node.removeEventListener('selectstart', handleSelectStart);
            node.setAttribute('draggable', false);
        };
    };
    HTML5Backend.prototype.connectDropTarget = function (targetId, node) {
        var _this = this;
        var handleDragEnter = function (e) { return _this.handleDragEnter(e, targetId); };
        var handleDragOver = function (e) { return _this.handleDragOver(e, targetId); };
        var handleDrop = function (e) { return _this.handleDrop(e, targetId); };
        node.addEventListener('dragenter', handleDragEnter);
        node.addEventListener('dragover', handleDragOver);
        node.addEventListener('drop', handleDrop);
        return function () {
            node.removeEventListener('dragenter', handleDragEnter);
            node.removeEventListener('dragover', handleDragOver);
            node.removeEventListener('drop', handleDrop);
        };
    };
    HTML5Backend.prototype.addEventListeners = function (target) {
        // SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
        if (!target.addEventListener) {
            return;
        }
        target.addEventListener('dragstart', this.handleTopDragStart);
        target.addEventListener('dragstart', this.handleTopDragStartCapture, true);
        target.addEventListener('dragend', this.handleTopDragEndCapture, true);
        target.addEventListener('dragenter', this.handleTopDragEnter);
        target.addEventListener('dragenter', this.handleTopDragEnterCapture, true);
        target.addEventListener('dragleave', this.handleTopDragLeaveCapture, true);
        target.addEventListener('dragover', this.handleTopDragOver);
        target.addEventListener('dragover', this.handleTopDragOverCapture, true);
        target.addEventListener('drop', this.handleTopDrop);
        target.addEventListener('drop', this.handleTopDropCapture, true);
    };
    HTML5Backend.prototype.removeEventListeners = function (target) {
        // SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
        if (!target.removeEventListener) {
            return;
        }
        target.removeEventListener('dragstart', this.handleTopDragStart);
        target.removeEventListener('dragstart', this.handleTopDragStartCapture, true);
        target.removeEventListener('dragend', this.handleTopDragEndCapture, true);
        target.removeEventListener('dragenter', this.handleTopDragEnter);
        target.removeEventListener('dragenter', this.handleTopDragEnterCapture, true);
        target.removeEventListener('dragleave', this.handleTopDragLeaveCapture, true);
        target.removeEventListener('dragover', this.handleTopDragOver);
        target.removeEventListener('dragover', this.handleTopDragOverCapture, true);
        target.removeEventListener('drop', this.handleTopDrop);
        target.removeEventListener('drop', this.handleTopDropCapture, true);
    };
    HTML5Backend.prototype.getCurrentSourceNodeOptions = function () {
        var sourceId = this.monitor.getSourceId();
        var sourceNodeOptions = this.sourceNodeOptions.get(sourceId);
        return defaults(sourceNodeOptions || {}, {
            dropEffect: this.altKeyPressed ? 'copy' : 'move',
        });
    };
    HTML5Backend.prototype.getCurrentDropEffect = function () {
        if (this.isDraggingNativeItem()) {
            // It makes more sense to default to 'copy' for native resources
            return 'copy';
        }
        return this.getCurrentSourceNodeOptions().dropEffect;
    };
    HTML5Backend.prototype.getCurrentSourcePreviewNodeOptions = function () {
        var sourceId = this.monitor.getSourceId();
        var sourcePreviewNodeOptions = this.sourcePreviewNodeOptions.get(sourceId);
        return defaults(sourcePreviewNodeOptions || {}, {
            anchorX: 0.5,
            anchorY: 0.5,
            captureDraggingState: false,
        });
    };
    HTML5Backend.prototype.getSourceClientOffset = function (sourceId) {
        return OffsetUtils_1.getNodeClientOffset(this.sourceNodes.get(sourceId));
    };
    HTML5Backend.prototype.isDraggingNativeItem = function () {
        var itemType = this.monitor.getItemType();
        return Object.keys(NativeTypes).some(function (key) { return NativeTypes[key] === itemType; });
    };
    HTML5Backend.prototype.beginDragNativeItem = function (type) {
        this.clearCurrentDragSourceNode();
        var SourceType = NativeDragSources_1.createNativeDragSource(type);
        this.currentNativeSource = new SourceType();
        this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
        this.actions.beginDrag([this.currentNativeHandle]);
    };
    HTML5Backend.prototype.endDragNativeItem = function () {
        if (!this.isDraggingNativeItem()) {
            return;
        }
        this.actions.endDrag();
        this.registry.removeSource(this.currentNativeHandle);
        this.currentNativeHandle = null;
        this.currentNativeSource = null;
    };
    HTML5Backend.prototype.isNodeInDocument = function (node) {
        // Check the node either in the main document or in the current context
        return ((!!document && document.body.contains(node)) ||
            (!!this.window && this.window.document.body.contains(node)));
    };
    HTML5Backend.prototype.endDragIfSourceWasRemovedFromDOM = function () {
        var node = this.currentDragSourceNode;
        if (this.isNodeInDocument(node)) {
            return;
        }
        if (this.clearCurrentDragSourceNode()) {
            this.actions.endDrag();
        }
    };
    HTML5Backend.prototype.setCurrentDragSourceNode = function (node) {
        var _this = this;
        this.clearCurrentDragSourceNode();
        this.currentDragSourceNode = node;
        this.currentDragSourceNodeOffset = OffsetUtils_1.getNodeClientOffset(node);
        this.currentDragSourceNodeOffsetChanged = false;
        // A timeout of > 0 is necessary to resolve Firefox issue referenced
        // See:
        //   * https://github.com/react-dnd/react-dnd/pull/928
        //   * https://github.com/react-dnd/react-dnd/issues/869
        var MOUSE_MOVE_TIMEOUT = 1000;
        // Receiving a mouse event in the middle of a dragging operation
        // means it has ended and the drag source node disappeared from DOM,
        // so the browser didn't dispatch the dragend event.
        //
        // We need to wait before we start listening for mousemove events.
        // This is needed because the drag preview needs to be drawn or else it fires an 'mousemove' event
        // immediately in some browsers.
        //
        // See:
        //   * https://github.com/react-dnd/react-dnd/pull/928
        //   * https://github.com/react-dnd/react-dnd/issues/869
        //
        this.mouseMoveTimeoutTimer = setTimeout(function () {
            return (_this.window &&
                _this.window.addEventListener('mousemove', _this.endDragIfSourceWasRemovedFromDOM, true));
        }, MOUSE_MOVE_TIMEOUT);
    };
    HTML5Backend.prototype.clearCurrentDragSourceNode = function () {
        if (this.currentDragSourceNode) {
            this.currentDragSourceNode = null;
            this.currentDragSourceNodeOffset = null;
            this.currentDragSourceNodeOffsetChanged = false;
            if (this.window) {
                this.window.clearTimeout(this.mouseMoveTimeoutTimer);
                this.window.removeEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
            }
            this.mouseMoveTimeoutTimer = null;
            return true;
        }
        return false;
    };
    HTML5Backend.prototype.checkIfCurrentDragSourceRectChanged = function () {
        var node = this.currentDragSourceNode;
        if (!node) {
            return false;
        }
        if (this.currentDragSourceNodeOffsetChanged) {
            return true;
        }
        this.currentDragSourceNodeOffsetChanged = !shallowEqual(OffsetUtils_1.getNodeClientOffset(node), this.currentDragSourceNodeOffset);
        return this.currentDragSourceNodeOffsetChanged;
    };
    HTML5Backend.prototype.handleTopDragStartCapture = function () {
        this.clearCurrentDragSourceNode();
        this.dragStartSourceIds = [];
    };
    HTML5Backend.prototype.handleDragStart = function (e, sourceId) {
        if (!this.dragStartSourceIds) {
            this.dragStartSourceIds = [];
        }
        this.dragStartSourceIds.unshift(sourceId);
    };
    HTML5Backend.prototype.handleTopDragStart = function (e) {
        var _this = this;
        var dragStartSourceIds = this.dragStartSourceIds;
        this.dragStartSourceIds = null;
        var clientOffset = OffsetUtils_1.getEventClientOffset(e);
        // Avoid crashing if we missed a drop event or our previous drag died
        if (this.monitor.isDragging()) {
            this.actions.endDrag();
        }
        // Don't publish the source just yet (see why below)
        this.actions.beginDrag(dragStartSourceIds || [], {
            publishSource: false,
            getSourceClientOffset: this.getSourceClientOffset,
            clientOffset: clientOffset,
        });
        var dataTransfer = e.dataTransfer;
        var nativeType = NativeDragSources_1.matchNativeItemType(dataTransfer);
        if (this.monitor.isDragging()) {
            if (typeof dataTransfer.setDragImage === 'function') {
                // Use custom drag image if user specifies it.
                // If child drag source refuses drag but parent agrees,
                // use parent's node as drag image. Neither works in IE though.
                var sourceId = this.monitor.getSourceId();
                var sourceNode = this.sourceNodes.get(sourceId);
                var dragPreview = this.sourcePreviewNodes.get(sourceId) || sourceNode;
                var _a = this.getCurrentSourcePreviewNodeOptions(), anchorX = _a.anchorX, anchorY = _a.anchorY, offsetX = _a.offsetX, offsetY = _a.offsetY;
                var anchorPoint = { anchorX: anchorX, anchorY: anchorY };
                var offsetPoint = { offsetX: offsetX, offsetY: offsetY };
                var dragPreviewOffset = OffsetUtils_1.getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint);
                dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
            }
            try {
                // Firefox won't drag without setting data
                dataTransfer.setData('application/json', {});
            }
            catch (err) {
                // IE doesn't support MIME types in setData
            }
            // Store drag source node so we can check whether
            // it is removed from DOM and trigger endDrag manually.
            this.setCurrentDragSourceNode(e.target);
            // Now we are ready to publish the drag source.. or are we not?
            var captureDraggingState = this.getCurrentSourcePreviewNodeOptions().captureDraggingState;
            if (!captureDraggingState) {
                // Usually we want to publish it in the next tick so that browser
                // is able to screenshot the current (not yet dragging) state.
                //
                // It also neatly avoids a situation where render() returns null
                // in the same tick for the source element, and browser freaks out.
                setTimeout(function () { return _this.actions.publishDragSource(); }, 0);
            }
            else {
                // In some cases the user may want to override this behavior, e.g.
                // to work around IE not supporting custom drag previews.
                //
                // When using a custom drag layer, the only way to prevent
                // the default drag preview from drawing in IE is to screenshot
                // the dragging state in which the node itself has zero opacity
                // and height. In this case, though, returning null from render()
                // will abruptly end the dragging, which is not obvious.
                //
                // This is the reason such behavior is strictly opt-in.
                this.actions.publishDragSource();
            }
        }
        else if (nativeType) {
            // A native item (such as URL) dragged from inside the document
            this.beginDragNativeItem(nativeType);
        }
        else if (!dataTransfer.types &&
            (!e.target.hasAttribute || !e.target.hasAttribute('draggable'))) {
            // Looks like a Safari bug: dataTransfer.types is null, but there was no draggable.
            // Just let it drag. It's a native type (URL or text) and will be picked up in
            // dragenter handler.
            return;
        }
        else {
            // If by this time no drag source reacted, tell browser not to drag.
            e.preventDefault();
        }
    };
    HTML5Backend.prototype.handleTopDragEndCapture = function () {
        if (this.clearCurrentDragSourceNode()) {
            // Firefox can dispatch this event in an infinite loop
            // if dragend handler does something like showing an alert.
            // Only proceed if we have not handled it already.
            this.actions.endDrag();
        }
    };
    HTML5Backend.prototype.handleTopDragEnterCapture = function (e) {
        this.dragEnterTargetIds = [];
        var isFirstEnter = this.enterLeaveCounter.enter(e.target);
        if (!isFirstEnter || this.monitor.isDragging()) {
            return;
        }
        var dataTransfer = e.dataTransfer;
        var nativeType = NativeDragSources_1.matchNativeItemType(dataTransfer);
        if (nativeType) {
            // A native item (such as file or URL) dragged from outside the document
            this.beginDragNativeItem(nativeType);
        }
    };
    HTML5Backend.prototype.handleDragEnter = function (e, targetId) {
        this.dragEnterTargetIds.unshift(targetId);
    };
    HTML5Backend.prototype.handleTopDragEnter = function (e) {
        var _this = this;
        var dragEnterTargetIds = this.dragEnterTargetIds;
        this.dragEnterTargetIds = [];
        if (!this.monitor.isDragging()) {
            // This is probably a native item type we don't understand.
            return;
        }
        this.altKeyPressed = e.altKey;
        if (!BrowserDetector_1.isFirefox()) {
            // Don't emit hover in `dragenter` on Firefox due to an edge case.
            // If the target changes position as the result of `dragenter`, Firefox
            // will still happily dispatch `dragover` despite target being no longer
            // there. The easy solution is to only fire `hover` in `dragover` on FF.
            this.actions.hover(dragEnterTargetIds, {
                clientOffset: OffsetUtils_1.getEventClientOffset(e),
            });
        }
        var canDrop = dragEnterTargetIds.some(function (targetId) {
            return _this.monitor.canDropOnTarget(targetId);
        });
        if (canDrop) {
            // IE requires this to fire dragover events
            e.preventDefault();
            e.dataTransfer.dropEffect = this.getCurrentDropEffect();
        }
    };
    HTML5Backend.prototype.handleTopDragOverCapture = function () {
        this.dragOverTargetIds = [];
    };
    HTML5Backend.prototype.handleDragOver = function (e, targetId) {
        if (this.dragOverTargetIds === null) {
            this.dragOverTargetIds = [];
        }
        this.dragOverTargetIds.unshift(targetId);
    };
    HTML5Backend.prototype.handleTopDragOver = function (e) {
        var _this = this;
        var dragOverTargetIds = this.dragOverTargetIds;
        this.dragOverTargetIds = [];
        if (!this.monitor.isDragging()) {
            // This is probably a native item type we don't understand.
            // Prevent default "drop and blow away the whole document" action.
            e.preventDefault();
            e.dataTransfer.dropEffect = 'none';
            return;
        }
        this.altKeyPressed = e.altKey;
        this.actions.hover(dragOverTargetIds || [], {
            clientOffset: OffsetUtils_1.getEventClientOffset(e),
        });
        var canDrop = (dragOverTargetIds || []).some(function (targetId) {
            return _this.monitor.canDropOnTarget(targetId);
        });
        if (canDrop) {
            // Show user-specified drop effect.
            e.preventDefault();
            e.dataTransfer.dropEffect = this.getCurrentDropEffect();
        }
        else if (this.isDraggingNativeItem()) {
            // Don't show a nice cursor but still prevent default
            // "drop and blow away the whole document" action.
            e.preventDefault();
            e.dataTransfer.dropEffect = 'none';
        }
        else if (this.checkIfCurrentDragSourceRectChanged()) {
            // Prevent animating to incorrect position.
            // Drop effect must be other than 'none' to prevent animation.
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        }
    };
    HTML5Backend.prototype.handleTopDragLeaveCapture = function (e) {
        if (this.isDraggingNativeItem()) {
            e.preventDefault();
        }
        var isLastLeave = this.enterLeaveCounter.leave(e.target);
        if (!isLastLeave) {
            return;
        }
        if (this.isDraggingNativeItem()) {
            this.endDragNativeItem();
        }
    };
    HTML5Backend.prototype.handleTopDropCapture = function (e) {
        this.dropTargetIds = [];
        e.preventDefault();
        if (this.isDraggingNativeItem()) {
            this.currentNativeSource.mutateItemByReadingDataTransfer(e.dataTransfer);
        }
        this.enterLeaveCounter.reset();
    };
    HTML5Backend.prototype.handleDrop = function (e, targetId) {
        this.dropTargetIds.unshift(targetId);
    };
    HTML5Backend.prototype.handleTopDrop = function (e) {
        var dropTargetIds = this.dropTargetIds;
        this.dropTargetIds = [];
        this.actions.hover(dropTargetIds, {
            clientOffset: OffsetUtils_1.getEventClientOffset(e),
        });
        this.actions.drop({ dropEffect: this.getCurrentDropEffect() });
        if (this.isDraggingNativeItem()) {
            this.endDragNativeItem();
        }
        else {
            this.endDragIfSourceWasRemovedFromDOM();
        }
    };
    HTML5Backend.prototype.handleSelectStart = function (e) {
        var target = e.target;
        // Only IE requires us to explicitly say
        // we want drag drop operation to start
        if (typeof target.dragDrop !== 'function') {
            return;
        }
        // Inputs and textareas should be selectable
        if (target.tagName === 'INPUT' ||
            target.tagName === 'SELECT' ||
            target.tagName === 'TEXTAREA' ||
            target.isContentEditable) {
            return;
        }
        // For other targets, ask IE
        // to enable drag and drop
        e.preventDefault();
        target.dragDrop();
    };
    __decorate([
        autobind_decorator_1.default
    ], HTML5Backend.prototype, "getSourceClientOffset", null);
    __decorate([
        autobind_decorator_1.default
    ], HTML5Backend.prototype, "endDragNativeItem", null);
    __decorate([
        autobind_decorator_1.default
    ], HTML5Backend.prototype, "isNodeInDocument", null);
    __decorate([
        autobind_decorator_1.default
    ], HTML5Backend.prototype, "endDragIfSourceWasRemovedFromDOM", null);
    __decorate([
        autobind_decorator_1.default
    ], HTML5Backend.prototype, "handleTopDragStartCapture", null);
    __decorate([
        autobind_decorator_1.default
    ], HTML5Backend.prototype, "handleTopDragStart", null);
    __decorate([
        autobind_decorator_1.default
    ], HTML5Backend.prototype, "handleTopDragEndCapture", null);
    __decorate([
        autobind_decorator_1.default
    ], HTML5Backend.prototype, "handleTopDragEnterCapture", null);
    __decorate([
        autobind_decorator_1.default
    ], HTML5Backend.prototype, "handleTopDragEnter", null);
    __decorate([
        autobind_decorator_1.default
    ], HTML5Backend.prototype, "handleTopDragOverCapture", null);
    __decorate([
        autobind_decorator_1.default
    ], HTML5Backend.prototype, "handleTopDragOver", null);
    __decorate([
        autobind_decorator_1.default
    ], HTML5Backend.prototype, "handleTopDragLeaveCapture", null);
    __decorate([
        autobind_decorator_1.default
    ], HTML5Backend.prototype, "handleTopDropCapture", null);
    __decorate([
        autobind_decorator_1.default
    ], HTML5Backend.prototype, "handleTopDrop", null);
    __decorate([
        autobind_decorator_1.default
    ], HTML5Backend.prototype, "handleSelectStart", null);
    return HTML5Backend;
}());
exports.default = HTML5Backend;


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var union = __webpack_require__(190);
var without = __webpack_require__(51);
var EnterLeaveCounter = /** @class */ (function () {
    function EnterLeaveCounter() {
        this.entered = [];
    }
    EnterLeaveCounter.prototype.enter = function (enteringNode) {
        var previousLength = this.entered.length;
        var isNodeEntered = function (node) {
            return document.documentElement.contains(node) &&
                (!node.contains || node.contains(enteringNode));
        };
        this.entered = union(this.entered.filter(isNodeEntered), [enteringNode]);
        return previousLength === 0 && this.entered.length > 0;
    };
    EnterLeaveCounter.prototype.leave = function (leavingNode) {
        var previousLength = this.entered.length;
        this.entered = without(this.entered.filter(function (node) { return document.documentElement.contains(node); }), leavingNode);
        return previousLength > 0 && this.entered.length === 0;
    };
    EnterLeaveCounter.prototype.reset = function () {
        this.entered = [];
    };
    return EnterLeaveCounter;
}());
exports.default = EnterLeaveCounter;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(58),
    baseRest = __webpack_require__(10),
    baseUniq = __webpack_require__(60),
    isArrayLikeObject = __webpack_require__(23);

/**
 * Creates an array of unique values, in order, from all given arrays using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.union([2], [1, 2]);
 * // => [2, 1]
 */
var union = baseRest(function(arrays) {
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
});

module.exports = union;


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BrowserDetector_1 = __webpack_require__(67);
var MonotonicInterpolant_1 = __webpack_require__(192);
var ELEMENT_NODE = 1;
function getNodeClientOffset(node) {
    var el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;
    if (!el) {
        return null;
    }
    var _a = el.getBoundingClientRect(), top = _a.top, left = _a.left;
    return { x: left, y: top };
}
exports.getNodeClientOffset = getNodeClientOffset;
function getEventClientOffset(e) {
    return {
        x: e.clientX,
        y: e.clientY,
    };
}
exports.getEventClientOffset = getEventClientOffset;
function isImageNode(node) {
    return (node.nodeName === 'IMG' &&
        (BrowserDetector_1.isFirefox() || !document.documentElement.contains(node)));
}
function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
    var dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
    var dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;
    // Work around @2x coordinate discrepancies in browsers
    if (BrowserDetector_1.isSafari() && isImage) {
        dragPreviewHeight /= window.devicePixelRatio;
        dragPreviewWidth /= window.devicePixelRatio;
    }
    return { dragPreviewWidth: dragPreviewWidth, dragPreviewHeight: dragPreviewHeight };
}
function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
    // The browsers will use the image intrinsic size under different conditions.
    // Firefox only cares if it's an image, but WebKit also wants it to be detached.
    var isImage = isImageNode(dragPreview);
    var dragPreviewNode = isImage ? sourceNode : dragPreview;
    var dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
    var offsetFromDragPreview = {
        x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
        y: clientOffset.y - dragPreviewNodeOffsetFromClient.y,
    };
    var sourceWidth = sourceNode.offsetWidth, sourceHeight = sourceNode.offsetHeight;
    var anchorX = anchorPoint.anchorX, anchorY = anchorPoint.anchorY;
    var _a = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight), dragPreviewWidth = _a.dragPreviewWidth, dragPreviewHeight = _a.dragPreviewHeight;
    var calculateYOffset = function () {
        var interpolantY = new MonotonicInterpolant_1.default([0, 0.5, 1], [
            // Dock to the top
            offsetFromDragPreview.y,
            // Align at the center
            offsetFromDragPreview.y / sourceHeight * dragPreviewHeight,
            // Dock to the bottom
            offsetFromDragPreview.y + dragPreviewHeight - sourceHeight,
        ]);
        var y = interpolantY.interpolate(anchorY);
        // Work around Safari 8 positioning bug
        if (BrowserDetector_1.isSafari() && isImage) {
            // We'll have to wait for @3x to see if this is entirely correct
            y += (window.devicePixelRatio - 1) * dragPreviewHeight;
        }
        return y;
    };
    var calculateXOffset = function () {
        // Interpolate coordinates depending on anchor point
        // If you know a simpler way to do this, let me know
        var interpolantX = new MonotonicInterpolant_1.default([0, 0.5, 1], [
            // Dock to the left
            offsetFromDragPreview.x,
            // Align at the center
            offsetFromDragPreview.x / sourceWidth * dragPreviewWidth,
            // Dock to the right
            offsetFromDragPreview.x + dragPreviewWidth - sourceWidth,
        ]);
        return interpolantX.interpolate(anchorX);
    };
    // Force offsets if specified in the options.
    var offsetX = offsetPoint.offsetX, offsetY = offsetPoint.offsetY;
    var isManualOffsetX = offsetX === 0 || offsetX;
    var isManualOffsetY = offsetY === 0 || offsetY;
    return {
        x: isManualOffsetX ? offsetX : calculateXOffset(),
        y: isManualOffsetY ? offsetY : calculateYOffset(),
    };
}
exports.getDragPreviewOffset = getDragPreviewOffset;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MonotonicInterpolant = /** @class */ (function () {
    function MonotonicInterpolant(xs, ys) {
        var length = xs.length;
        // Rearrange xs and ys so that xs is sorted
        var indexes = [];
        for (var i = 0; i < length; i++) {
            indexes.push(i);
        }
        indexes.sort(function (a, b) { return (xs[a] < xs[b] ? -1 : 1); });
        // Get consecutive differences and slopes
        var dys = [];
        var dxs = [];
        var ms = [];
        var dx;
        var dy;
        for (var i = 0; i < length - 1; i++) {
            dx = xs[i + 1] - xs[i];
            dy = ys[i + 1] - ys[i];
            dxs.push(dx);
            dys.push(dy);
            ms.push(dy / dx);
        }
        // Get degree-1 coefficients
        var c1s = [ms[0]];
        for (var i = 0; i < dxs.length - 1; i++) {
            var m2 = ms[i];
            var mNext = ms[i + 1];
            if (m2 * mNext <= 0) {
                c1s.push(0);
            }
            else {
                dx = dxs[i];
                var dxNext = dxs[i + 1];
                var common = dx + dxNext;
                c1s.push(3 * common / ((common + dxNext) / m2 + (common + dx) / mNext));
            }
        }
        c1s.push(ms[ms.length - 1]);
        // Get degree-2 and degree-3 coefficients
        var c2s = [];
        var c3s = [];
        var m;
        for (var i = 0; i < c1s.length - 1; i++) {
            m = ms[i];
            var c1 = c1s[i];
            var invDx = 1 / dxs[i];
            var common = c1 + c1s[i + 1] - m - m;
            c2s.push((m - c1 - common) * invDx);
            c3s.push(common * invDx * invDx);
        }
        this.xs = xs;
        this.ys = ys;
        this.c1s = c1s;
        this.c2s = c2s;
        this.c3s = c3s;
    }
    MonotonicInterpolant.prototype.interpolate = function (x) {
        var _a = this, xs = _a.xs, ys = _a.ys, c1s = _a.c1s, c2s = _a.c2s, c3s = _a.c3s;
        // The rightmost point in the dataset should give an exact result
        var i = xs.length - 1;
        if (x === xs[i]) {
            return ys[i];
        }
        // Search for the interval x is in, returning the corresponding y if x is one of the original xs
        var low = 0;
        var high = c3s.length - 1;
        var mid;
        while (low <= high) {
            mid = Math.floor(0.5 * (low + high));
            var xHere = xs[mid];
            if (xHere < x) {
                low = mid + 1;
            }
            else if (xHere > x) {
                high = mid - 1;
            }
            else {
                return ys[mid];
            }
        }
        i = Math.max(0, high);
        // Interpolate
        var diff = x - xs[i];
        var diffSq = diff * diff;
        return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
    };
    return MonotonicInterpolant;
}());
exports.default = MonotonicInterpolant;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var NativeTypes = __webpack_require__(39);
function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
    var result = typesToTry.reduce(function (resultSoFar, typeToTry) { return resultSoFar || dataTransfer.getData(typeToTry); }, null);
    return result != null ? result : defaultValue;
}
var nativeTypesConfig = (_a = {},
    _a[NativeTypes.FILE] = {
        exposeProperty: 'files',
        matchesTypes: ['Files'],
        getData: function (dataTransfer) {
            return Array.prototype.slice.call(dataTransfer.files);
        },
    },
    _a[NativeTypes.URL] = {
        exposeProperty: 'urls',
        matchesTypes: ['Url', 'text/uri-list'],
        getData: function (dataTransfer, matchesTypes) {
            return getDataFromDataTransfer(dataTransfer, matchesTypes, '').split('\n');
        },
    },
    _a[NativeTypes.TEXT] = {
        exposeProperty: 'text',
        matchesTypes: ['Text', 'text/plain'],
        getData: function (dataTransfer, matchesTypes) {
            return getDataFromDataTransfer(dataTransfer, matchesTypes, '');
        },
    },
    _a);
function createNativeDragSource(type) {
    var _a = nativeTypesConfig[type], exposeProperty = _a.exposeProperty, matchesTypes = _a.matchesTypes, getData = _a.getData;
    return /** @class */ (function () {
        function NativeDragSource() {
            var _a;
            this.item = (_a = {},
                Object.defineProperty(_a, exposeProperty, {
                    get: function () {
                        // tslint:disable-next-line no-console
                        console.warn("Browser doesn't allow reading \"" + exposeProperty + "\" until the drop event.");
                        return null;
                    },
                    enumerable: true,
                    configurable: true
                }),
                _a);
        }
        NativeDragSource.prototype.mutateItemByReadingDataTransfer = function (dataTransfer) {
            delete this.item[exposeProperty];
            this.item[exposeProperty] = getData(dataTransfer, matchesTypes);
        };
        NativeDragSource.prototype.canDrag = function () {
            return true;
        };
        NativeDragSource.prototype.beginDrag = function () {
            return this.item;
        };
        NativeDragSource.prototype.isDragging = function (monitor, handle) {
            return handle === monitor.getSourceId();
        };
        NativeDragSource.prototype.endDrag = function () {
            // empty
        };
        return NativeDragSource;
    }());
}
exports.createNativeDragSource = createNativeDragSource;
function matchNativeItemType(dataTransfer) {
    var dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);
    return (Object.keys(nativeTypesConfig).filter(function (nativeItemType) {
        var matchesTypes = nativeTypesConfig[nativeItemType].matchesTypes;
        return matchesTypes.some(function (t) { return dataTransferTypes.indexOf(t) > -1; });
    })[0] || null);
}
exports.matchNativeItemType = matchNativeItemType;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = autobind;
/**
 * @copyright 2015, Andrey Popp <8mayday@gmail.com>
 *
 * The decorator may be used on classes or methods
 * ```
 * @autobind
 * class FullBound {}
 *
 * class PartBound {
 *   @autobind
 *   method () {}
 * }
 * ```
 */
function autobind() {
  if (arguments.length === 1) {
    return boundClass.apply(undefined, arguments);
  } else {
    return boundMethod.apply(undefined, arguments);
  }
}

/**
 * Use boundMethod to bind all methods on the target.prototype
 */
function boundClass(target) {
  // (Using reflect to get all keys including symbols)
  var keys = void 0;
  // Use Reflect if exists
  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
    keys = Reflect.ownKeys(target.prototype);
  } else {
    keys = Object.getOwnPropertyNames(target.prototype);
    // use symbols if support is provided
    if (typeof Object.getOwnPropertySymbols === 'function') {
      keys = keys.concat(Object.getOwnPropertySymbols(target.prototype));
    }
  }

  keys.forEach(function (key) {
    // Ignore special case target method
    if (key === 'constructor') {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);

    // Only methods need binding
    if (typeof descriptor.value === 'function') {
      Object.defineProperty(target.prototype, key, boundMethod(target, key, descriptor));
    }
  });
  return target;
}

/**
 * Return a descriptor removing the value and returning a getter
 * The getter will return a .bind version of the function
 * and memoize the result against a symbol on the instance
 */
function boundMethod(target, key, descriptor) {
  var fn = descriptor.value;

  if (typeof fn !== 'function') {
    throw new Error('@autobind decorator can only be applied to methods not: ' + (typeof fn === 'undefined' ? 'undefined' : _typeof(fn)));
  }

  // In IE11 calling Object.defineProperty has a side-effect of evaluating the
  // getter for the property which is being replaced. This causes infinite
  // recursion and an "Out of stack space" error.
  var definingProperty = false;

  return {
    configurable: true,
    get: function get() {
      if (definingProperty || this === target.prototype || this.hasOwnProperty(key) || typeof fn !== 'function') {
        return fn;
      }

      var boundFn = fn.bind(this);
      definingProperty = true;
      Object.defineProperty(this, key, {
        configurable: true,
        get: function get() {
          return boundFn;
        },
        set: function set(value) {
          fn = value;
          delete this[key];
        }
      });
      definingProperty = false;
      return boundFn;
    },
    set: function set(value) {
      fn = value;
    }
  };
}


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(10),
    eq = __webpack_require__(31),
    isIterateeCall = __webpack_require__(196),
    keysIn = __webpack_require__(197);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(object, sources) {
  object = Object(object);

  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : undefined;

  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }

  while (++index < length) {
    var source = sources[index];
    var props = keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;

    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];

      if (value === undefined ||
          (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        object[key] = source[key];
      }
    }
  }

  return object;
});

module.exports = defaults;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(31),
    isArrayLike = __webpack_require__(36),
    isIndex = __webpack_require__(68),
    isObject = __webpack_require__(7);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(198),
    baseKeysIn = __webpack_require__(205),
    isArrayLike = __webpack_require__(36);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(199),
    isArguments = __webpack_require__(59),
    isArray = __webpack_require__(11),
    isBuffer = __webpack_require__(200),
    isIndex = __webpack_require__(68),
    isTypedArray = __webpack_require__(202);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 199 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(9),
    stubFalse = __webpack_require__(201);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(69)(module)))

/***/ }),
/* 201 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(203),
    baseUnary = __webpack_require__(34),
    nodeUtil = __webpack_require__(204);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(8),
    isLength = __webpack_require__(56),
    isObjectLike = __webpack_require__(4);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(54);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(69)(module)))

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7),
    isPrototype = __webpack_require__(206),
    nativeKeysIn = __webpack_require__(207);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 206 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 207 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var emptyImage;
function getEmptyImage() {
    if (!emptyImage) {
        emptyImage = new Image();
        emptyImage.src =
            'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
    }
    return emptyImage;
}
exports.default = getEmptyImage;


/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_card__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_card_view__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_hero__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_monster__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_effect__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_game_over__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__model_effect_model__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_drop_area__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_history__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__config__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_roughjs__ = __webpack_require__(26);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_jsxFileName='/Users/wukai/learn/card-game/src/App.js';var _templateObject=_taggedTemplateLiteral(['\n  width: ','px;\n  min-height: ','px;\n  /* border: 2px solid #000; */\n  /* border-radius: 15px; */\n  padding: 20px;\n  margin: 40px auto;\n  position: relative;\n'],['\n  width: ','px;\n  min-height: ','px;\n  /* border: 2px solid #000; */\n  /* border-radius: 15px; */\n  padding: 20px;\n  margin: 40px auto;\n  position: relative;\n']),_templateObject2=_taggedTemplateLiteral(['\n  width: ','px;\n  height: ','px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n'],['\n  width: ','px;\n  height: ','px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n']),_templateObject3=_taggedTemplateLiteral(['\n  position: absolute;\n  top: -30px;\n  left: 50%;\n  transform: translate(-50%);\n  color: green;\n  white-space: pre;\n'],['\n  position: absolute;\n  top: -30px;\n  left: 50%;\n  transform: translate(-50%);\n  color: green;\n  white-space: pre;\n']),_templateObject4=_taggedTemplateLiteral(['\n  width: 100%;\n  height: 130px;\n  /* border: 2px solid pink; */\n  /* border-radius: 10px; */\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'],['\n  width: 100%;\n  height: 130px;\n  /* border: 2px solid pink; */\n  /* border-radius: 10px; */\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n']),_templateObject5=_taggedTemplateLiteral(['\n  width: 100%;\n  height: ','px;\n  display: flex;\n  align-items: center;\n  padding: 10px 20px;\n  /* border: 2px solid lightgreen; */\n  /* border-radius: 10px; */\n  box-sizing: border-box;\n  position: relative;\n\n  .card {\n    margin-right: 15px;\n  }\n\n  .person {\n    margin-right: 20px;\n  }\n\n  .card-list {\n    width: calc(100% - 150px);\n    display: flex;\n    overflow-x: auto;\n    height: 165px;\n    position: absolute;\n    left: 160px;\n    top: 10px;\n  }\n'],['\n  width: 100%;\n  height: ','px;\n  display: flex;\n  align-items: center;\n  padding: 10px 20px;\n  /* border: 2px solid lightgreen; */\n  /* border-radius: 10px; */\n  box-sizing: border-box;\n  position: relative;\n\n  .card {\n    margin-right: 15px;\n  }\n\n  .person {\n    margin-right: 20px;\n  }\n\n  .card-list {\n    width: calc(100% - 150px);\n    display: flex;\n    overflow-x: auto;\n    height: 165px;\n    position: absolute;\n    left: 160px;\n    top: 10px;\n  }\n']),_templateObject6=_taggedTemplateLiteral(['\n  width: 100%;\n  height: 200px;\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: box;\n  justify-content: center;\n  align-items: center;\n  /* border: 2px solid lightblue; */\n  /* border-radius: 10px; */\n  margin: 10px 0;\n  overflow-x: auto;\n\n  .card {\n    margin-right: 20px;\n    flex: 0 0 90px;\n  }\n\n  .card.monster {\n    border-color: red;\n  }\n'],['\n  width: 100%;\n  height: 200px;\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: box;\n  justify-content: center;\n  align-items: center;\n  /* border: 2px solid lightblue; */\n  /* border-radius: 10px; */\n  margin: 10px 0;\n  overflow-x: auto;\n\n  .card {\n    margin-right: 20px;\n    flex: 0 0 90px;\n  }\n\n  .card.monster {\n    border-color: red;\n  }\n']),_templateObject7=_taggedTemplateLiteral(['\n  width: 100px;\n  height: 50px;\n  border: 2px solid #ddd;\n  position: absolute;\n  top: 220px;\n  right: 180px;\n'],['\n  width: 100px;\n  height: 50px;\n  border: 2px solid #ddd;\n  position: absolute;\n  top: 220px;\n  right: 180px;\n']),_templateObject8=_taggedTemplateLiteral(['\n  width: 100px;\n  height: 50px;\n  border: 2px solid #ddd;\n  position: absolute;\n  top: 220px;\n  right: 50px;\n'],['\n  width: 100px;\n  height: 50px;\n  border: 2px solid #ddd;\n  position: absolute;\n  top: 220px;\n  right: 50px;\n']);function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}// import { toJS } from 'mobx';
// import rough from './../node_modules/roughjs/dist/rough.es5.js';
var game_board_width=700;var game_board_height=500;var App=Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["b" /* observer */])(_class=function(_Component){_inherits(App,_Component);function App(){var _ref;var _temp,_this,_ret;_classCallCheck(this,App);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=App.__proto__||Object.getPrototypeOf(App)).call.apply(_ref,[this].concat(args))),_this),_this.playCard=function(id){var _this$props=_this.props,gameState=_this$props.gameState,decks=_this$props.decks;if(gameState.currentTurn!==__WEBPACK_IMPORTED_MODULE_12__constants__["c" /* game_turn */].hero){return;}// 根据id从玩家手上的牌组中移除这张牌
var currentCard=decks.heroHand.filter(function(card){return card.id===id;})[0];_this.calculateCardEffect(currentCard);decks.removeHeroCard(id);},_this.calculateCardEffect=function(currentCard){var _this$props2=_this.props,hero=_this$props2.hero,boss=_this$props2.boss,gameState=_this$props2.gameState;// 出牌效果
var effectName=void 0;var effectValue=0;var effect=null;if(currentCard.name==='攻击'){effectName='生命值';effectValue=-currentCard.attack;effect=new __WEBPACK_IMPORTED_MODULE_9__model_effect_model__["a" /* default */]({name:effectName,value:effectValue,target:currentCard.target});if(currentCard.target===__WEBPACK_IMPORTED_MODULE_12__constants__["b" /* card_target */].monster){boss.receiveAttack(currentCard.attack);}else{hero.receiveAttack(currentCard.attack);}if(boss.life<=0){gameState.runStatus=__WEBPACK_IMPORTED_MODULE_12__constants__["f" /* run_status */].win;}else if(hero.life<=0){gameState.runStatus=__WEBPACK_IMPORTED_MODULE_12__constants__["f" /* run_status */].lose;}}else if(currentCard.name==='防御'){effectName='护甲';effectValue=currentCard.armor;effect=new __WEBPACK_IMPORTED_MODULE_9__model_effect_model__["a" /* default */]({name:effectName,value:'+'+effectValue,target:currentCard.target});if(currentCard.target===__WEBPACK_IMPORTED_MODULE_12__constants__["b" /* card_target */].hero){hero.addArmor(effectValue);}else{boss.addArmor(effectValue);}}if(effect){gameState.effects.push(effect);// TODO: 同时有两个 effect 时的处理
// 等待后删除
setTimeout(function(){gameState.effects.splice(gameState.effects.length-2);},1500);}},_this.nextTurn=function(){var gameState=_this.props.gameState;gameState.currentTurn=__WEBPACK_IMPORTED_MODULE_12__constants__["c" /* game_turn */].monster;_this.bossStartAction();},_this.toggleHistory=function(){var gameState=_this.props.gameState;gameState.showHistory=!gameState.showHistory;},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(App,[{key:'componentDidMount',value:function componentDidMount(){setBackground();}// 玩家出牌
},{key:'bossStartAction',value:function bossStartAction(){var _this2=this;// boss 依次发牌
var _props=this.props,decks=_props.decks,gameState=_props.gameState;var monsterHand=decks.monsterHand;// 非第一回合时，给敌人发两张牌
if(gameState.turnCount>1){decks.dealMonsterCards();}monsterHand.forEach(function(card,index){setTimeout(function(){if(gameState.isGameOver)return;_this2.calculateCardEffect(card);decks.removeBossCard(card.id);if(index>=monsterHand.length-1){decks.monsterTurnOver=true;}},index*1000);});}},{key:'showRunStatus',value:function showRunStatus(){var _props$gameState=this.props.gameState,runStatus=_props$gameState.runStatus,isGameOver=_props$gameState.isGameOver;if(runStatus===__WEBPACK_IMPORTED_MODULE_12__constants__["f" /* run_status */].running)return null;if(isGameOver){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_game_over__["a" /* default */],{status:runStatus,__source:{fileName:_jsxFileName,lineNumber:141},__self:this});}return null;}},{key:'render',value:function render(){var _this3=this;var _props2=this.props,hero=_props2.hero,boss=_props2.boss,decks=_props2.decks,gameState=_props2.gameState;var usedCards=decks.usedCards,currentCards=decks.currentCards;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Wrapper,{className:'App',__source:{fileName:_jsxFileName,lineNumber:157},__self:this},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Background,{id:'svg-background',__source:{fileName:_jsxFileName,lineNumber:158},__self:this}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TurnFlag,{__source:{fileName:_jsxFileName,lineNumber:159},__self:this},'\u7B2C',gameState.turnCount,'\u56DE\u5408','  ',gameState.currentTurn===__WEBPACK_IMPORTED_MODULE_12__constants__["c" /* game_turn */].hero?'你的':'对手的','\u56DE\u5408'),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_drop_area__["a" /* default */],{__source:{fileName:_jsxFileName,lineNumber:164},__self:this},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EnemyArea,{__source:{fileName:_jsxFileName,lineNumber:165},__self:this},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_monster__["a" /* default */],{life:boss.life,armor:boss.armor,__source:{fileName:_jsxFileName,lineNumber:166},__self:this})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Dustbin,{__source:{fileName:_jsxFileName,lineNumber:172},__self:this},currentCards.map(function(card,index){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_card_view__["a" /* default */],{name:card.name,desc:card.desc,attack:card.attack,armor:card.armor,index:index,source:card.source,playCard:function playCard(){},extraInfo:card.extraInfo,key:card.id,__source:{fileName:_jsxFileName,lineNumber:175},__self:_this3});}))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(PlayerCardsArea,{__source:{fileName:_jsxFileName,lineNumber:191},__self:this},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_hero__["a" /* default */],{life:hero.life,armor:hero.armor,maxLife:hero.maxLife,className:'person',__source:{fileName:_jsxFileName,lineNumber:192},__self:this}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'card-list',__source:{fileName:_jsxFileName,lineNumber:198},__self:this},decks.heroHand.map(function(card,index){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_card__["a" /* default */],{name:card.name,id:card.id,index:index,desc:card.desc,attack:card.attack,armor:card.armor,source:card.source,extraInfo:card.extraInfo,playCard:function playCard(){return _this3.playCard(card.id);},key:card.id,__source:{fileName:_jsxFileName,lineNumber:201},__self:_this3});})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ShowHistoryButton,{onClick:this.toggleHistory,__source:{fileName:_jsxFileName,lineNumber:217},__self:this},'\u663E\u793A\u5386\u53F2'),gameState.currentTurn===__WEBPACK_IMPORTED_MODULE_12__constants__["c" /* game_turn */].hero&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NextTurnButton,{onClick:this.nextTurn,__source:{fileName:_jsxFileName,lineNumber:221},__self:this},'\u4E0B\u4E00\u56DE\u5408')),gameState.effects.map(function(e){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_effect__["a" /* default */],{name:e.name,value:e.value,target:e.target,key:Math.random(),__source:{fileName:_jsxFileName,lineNumber:225},__self:_this3});}),__WEBPACK_IMPORTED_MODULE_13__config__["a" /* default */].show_game_info&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{style:{marginTop:'50px'},__source:{fileName:_jsxFileName,lineNumber:236},__self:this},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',{__source:{fileName:_jsxFileName,lineNumber:237},__self:this},'\u4F60\u7684\u624B\u724C\u6570\u91CF\uFF1A',decks.heroHand.length),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',{__source:{fileName:_jsxFileName,lineNumber:238},__self:this},'\u4F60\u7684\u724C\u5806\u4E2D\u7684\u5361\u724C\u6570\u91CF\uFF1A',decks.heroDeck.length),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',{__source:{fileName:_jsxFileName,lineNumber:239},__self:this},'\u654C\u65B9\u624B\u724C\u6570\u91CF\uFF1A',decks.monsterHand.length),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',{__source:{fileName:_jsxFileName,lineNumber:240},__self:this},'\u654C\u65B9\u724C\u5806\u4E2D\u7684\u5361\u724C\u6570\u91CF\uFF1A',decks.monsterDeck.length)),gameState.showHistory&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_history__["a" /* default */],{usedCards:usedCards,closeHistory:this.toggleHistory,__source:{fileName:_jsxFileName,lineNumber:247},__self:this}),this.showRunStatus());}}]);return App;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]))||_class;App.propTypes={hero:__WEBPACK_IMPORTED_MODULE_2_mobx_react__["a" /* PropTypes */].observableObject.isRequired,boss:__WEBPACK_IMPORTED_MODULE_2_mobx_react__["a" /* PropTypes */].observableObject.isRequired,decks:__WEBPACK_IMPORTED_MODULE_2_mobx_react__["a" /* PropTypes */].observableObject.isRequired,gameState:__WEBPACK_IMPORTED_MODULE_2_mobx_react__["a" /* PropTypes */].observableObject.isRequired};/* harmony default export */ __webpack_exports__["a"] = (App);function setBackground(){var svgBg=document.getElementById('svg-background');var rc=__WEBPACK_IMPORTED_MODULE_14_roughjs__["a" /* default */].svg(svgBg);var node=rc.rectangle(10,10,740,540,{roughness:1.5});svgBg.appendChild(node);}var Wrapper=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject,game_board_width,game_board_height);var Background=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].svg(_templateObject2,game_board_width+80,game_board_height+80);var TurnFlag=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject3);var EnemyArea=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject4);var playerAreaHeight=150;var PlayerCardsArea=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject5,playerAreaHeight);var Dustbin=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject6);// TODO: 按钮样式可复用
var ShowHistoryButton=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].button(_templateObject7);var NextTurnButton=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].button(_templateObject8);

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */



var hyphenate = __webpack_require__(211);

var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var _uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

module.exports = hyphenate;

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

/*
 *          __        ___
 *    _____/ /___  __/ (_)____
 *   / ___/ __/ / / / / / ___/
 *  (__  ) /_/ /_/ / / (__  )
 * /____/\__/\__, /_/_/____/
 *          /____/
 *
 * light - weight css preprocessor @licence MIT
 */
(function (factory) {/* eslint-disable */
	 true ? (module['exports'] = factory(null)) :
		typeof define === 'function' && define['amd'] ? define(factory(null)) :
			(window['stylis'] = factory(null))
}(/** @param {*=} options */function factory (options) {/* eslint-disable */

	'use strict'

	/**
	 * Notes
	 *
	 * The ['<method name>'] pattern is used to support closure compiler
	 * the jsdoc signatures are also used to the same effect
	 *
	 * ----
	 *
	 * int + int + int === n4 [faster]
	 *
	 * vs
	 *
	 * int === n1 && int === n2 && int === n3
	 *
	 * ----
	 *
	 * switch (int) { case ints...} [faster]
	 *
	 * vs
	 *
	 * if (int == 1 && int === 2 ...)
	 *
	 * ----
	 *
	 * The (first*n1 + second*n2 + third*n3) format used in the property parser
	 * is a simple way to hash the sequence of characters
	 * taking into account the index they occur in
	 * since any number of 3 character sequences could produce duplicates.
	 *
	 * On the other hand sequences that are directly tied to the index of the character
	 * resolve a far more accurate measure, it's also faster
	 * to evaluate one condition in a switch statement
	 * than three in an if statement regardless of the added math.
	 *
	 * This allows the vendor prefixer to be both small and fast.
	 */

	var nullptn = /^\0+/g /* matches leading null characters */
	var formatptn = /[\0\r\f]/g /* matches new line, null and formfeed characters */
	var colonptn = /: */g /* splits animation rules */
	var cursorptn = /zoo|gra/ /* assert cursor varient */
	var transformptn = /([,: ])(transform)/g /* vendor prefix transform, older webkit */
	var animationptn = /,+\s*(?![^(]*[)])/g /* splits multiple shorthand notation animations */
	var propertiesptn = / +\s*(?![^(]*[)])/g /* animation properties */
	var elementptn = / *[\0] */g /* selector elements */
	var selectorptn = /,\r+?/g /* splits selectors */
	var andptn = /([\t\r\n ])*\f?&/g /* match & */
	var escapeptn = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g /* matches :global(.*) */
	var invalidptn = /\W+/g /* removes invalid characters from keyframes */
	var keyframeptn = /@(k\w+)\s*(\S*)\s*/ /* matches @keyframes $1 */
	var plcholdrptn = /::(place)/g /* match ::placeholder varient */
	var readonlyptn = /:(read-only)/g /* match :read-only varient */
	var beforeptn = /\s+(?=[{\];=:>])/g /* matches \s before ] ; = : */
	var afterptn = /([[}=:>])\s+/g /* matches \s after characters [ } = : */
	var tailptn = /(\{[^{]+?);(?=\})/g /* matches tail semi-colons ;} */
	var whiteptn = /\s{2,}/g /* matches repeating whitespace */
	var pseudoptn = /([^\(])(:+) */g /* pseudo element */
	var writingptn = /[svh]\w+-[tblr]{2}/ /* match writing mode property values */
	var gradientptn = /([\w-]+t\()/g /* match *gradient property */
	var supportsptn = /\(\s*(.*)\s*\)/g /* match supports (groups) */
	var propertyptn = /([\s\S]*?);/g /* match properties leading semicolon */
	var selfptn = /-self|flex-/g /* match flex- and -self in align-self: flex-*; */
	var pseudofmt = /[^]*?(:[rp][el]a[\w-]+)[^]*/ /* extrats :readonly or :placholder from selector */
	var trimptn = /[ \t]+$/ /* match tail whitspace */
	var dimensionptn = /stretch|:\s*\w+\-(?:conte|avail)/ /* match max/min/fit-content, fill-available */
	var imgsrcptn = /([^-])(image-set\()/

	/* vendors */
	var webkit = '-webkit-'
	var moz = '-moz-'
	var ms = '-ms-'

	/* character codes */
	var SEMICOLON = 59 /* ; */
	var CLOSEBRACES = 125 /* } */
	var OPENBRACES = 123 /* { */
	var OPENPARENTHESES = 40 /* ( */
	var CLOSEPARENTHESES = 41 /* ) */
	var OPENBRACKET = 91 /* [ */
	var CLOSEBRACKET = 93 /* ] */
	var NEWLINE = 10 /* \n */
	var CARRIAGE = 13 /* \r */
	var TAB = 9 /* \t */
	var AT = 64 /* @ */
	var SPACE = 32 /*   */
	var AND = 38 /* & */
	var DASH = 45 /* - */
	var UNDERSCORE = 95 /* _ */
	var STAR = 42 /* * */
	var COMMA = 44 /* , */
	var COLON = 58 /* : */
	var SINGLEQUOTE = 39 /* ' */
	var DOUBLEQUOTE = 34 /* " */
	var FOWARDSLASH = 47 /* / */
	var GREATERTHAN = 62 /* > */
	var PLUS = 43 /* + */
	var TILDE = 126 /* ~ */
	var NULL = 0 /* \0 */
	var FORMFEED = 12 /* \f */
	var VERTICALTAB = 11 /* \v */

	/* special identifiers */
	var KEYFRAME = 107 /* k */
	var MEDIA = 109 /* m */
	var SUPPORTS = 115 /* s */
	var PLACEHOLDER = 112 /* p */
	var READONLY = 111 /* o */
	var IMPORT = 105 /* <at>i */
	var CHARSET = 99 /* <at>c */
	var DOCUMENT = 100 /* <at>d */
	var PAGE = 112 /* <at>p */

	var column = 1 /* current column */
	var line = 1 /* current line numebr */
	var pattern = 0 /* :pattern */

	var cascade = 1 /* #id h1 h2 vs h1#id h2#id  */
	var prefix = 1 /* vendor prefix */
	var escape = 1 /* escape :global() pattern */
	var compress = 0 /* compress output */
	var semicolon = 0 /* no/semicolon option */
	var preserve = 0 /* preserve empty selectors */

	/* empty reference */
	var array = []

	/* plugins */
	var plugins = []
	var plugged = 0
	var should = null

	/* plugin context */
	var POSTS = -2
	var PREPS = -1
	var UNKWN = 0
	var PROPS = 1
	var BLCKS = 2
	var ATRUL = 3

	/* plugin newline context */
	var unkwn = 0

	/* keyframe animation */
	var keyed = 1
	var key = ''

	/* selector namespace */
	var nscopealt = ''
	var nscope = ''

	/**
	 * Compile
	 *
	 * @param {Array<string>} parent
	 * @param {Array<string>} current
	 * @param {string} body
	 * @param {number} id
	 * @param {number} depth
	 * @return {string}
	 */
	function compile (parent, current, body, id, depth) {
		var bracket = 0 /* brackets [] */
		var comment = 0 /* comments /* // or /* */
		var parentheses = 0 /* functions () */
		var quote = 0 /* quotes '', "" */

		var first = 0 /* first character code */
		var second = 0 /* second character code */
		var code = 0 /* current character code */
		var tail = 0 /* previous character code */
		var trail = 0 /* character before previous code */
		var peak = 0 /* previous non-whitespace code */

		var counter = 0 /* count sequence termination */
		var context = 0 /* track current context */
		var atrule = 0 /* track @at-rule context */
		var pseudo = 0 /* track pseudo token index */
		var caret = 0 /* current character index */
		var format = 0 /* control character formating context */
		var insert = 0 /* auto semicolon insertion */
		var invert = 0 /* inverted selector pattern */
		var length = 0 /* generic length address */
		var eof = body.length /* end of file(length) */
		var eol = eof - 1 /* end of file(characters) */

		var char = '' /* current character */
		var chars = '' /* current buffer of characters */
		var child = '' /* next buffer of characters */
		var out = '' /* compiled body */
		var children = '' /* compiled children */
		var flat = '' /* compiled leafs */
		var selector /* generic selector address */
		var result /* generic address */

		// ...build body
		while (caret < eof) {
			code = body.charCodeAt(caret)

			// eof varient
			if (caret === eol) {
				// last character + noop context, add synthetic padding for noop context to terminate
				if (comment + quote + parentheses + bracket !== 0) {
					if (comment !== 0) {
						code = comment === FOWARDSLASH ? NEWLINE : FOWARDSLASH
					}

					quote = parentheses = bracket = 0
					eof++
					eol++
				}
			}

			if (comment + quote + parentheses + bracket === 0) {
				// eof varient
				if (caret === eol) {
					if (format > 0) {
						chars = chars.replace(formatptn, '')
					}

					if (chars.trim().length > 0) {
						switch (code) {
							case SPACE:
							case TAB:
							case SEMICOLON:
							case CARRIAGE:
							case NEWLINE: {
								break
							}
							default: {
								chars += body.charAt(caret)
							}
						}

						code = SEMICOLON
					}
				}

				// auto semicolon insertion
				if (insert === 1) {
					switch (code) {
						// false flags
						case OPENBRACES:
						case CLOSEBRACES:
						case SEMICOLON:
						case DOUBLEQUOTE:
						case SINGLEQUOTE:
						case OPENPARENTHESES:
						case CLOSEPARENTHESES:
						case COMMA: {
							insert = 0
						}
						// ignore
						case TAB:
						case CARRIAGE:
						case NEWLINE:
						case SPACE: {
							break
						}
						// valid
						default: {
							insert = 0
							length = caret
							first = code
							caret--
							code = SEMICOLON

							while (length < eof) {
								switch (body.charCodeAt(length++)) {
									case NEWLINE:
									case CARRIAGE:
									case SEMICOLON: {
										++caret
										code = first
										length = eof
										break
									}
									case COLON: {
										if (format > 0) {
											++caret
											code = first
										}
									}
									case OPENBRACES: {
										length = eof
									}
								}
							}
						}
					}
				}

				// token varient
				switch (code) {
					case OPENBRACES: {
						chars = chars.trim()
						first = chars.charCodeAt(0)
						counter = 1
						length = ++caret

						while (caret < eof) {
							switch (code = body.charCodeAt(caret)) {
								case OPENBRACES: {
									counter++
									break
								}
								case CLOSEBRACES: {
									counter--
									break
								}
								case FOWARDSLASH: {
									switch (second = body.charCodeAt(caret + 1)) {
										// /*, //
										case STAR:
										case FOWARDSLASH: {
											caret = delimited(second, caret, eol, body)
										}
									}
									break
								}
								// given "[" === 91 & "]" === 93 hence forth 91 + 1 + 1 === 93
								case OPENBRACKET: {
									code++
								}
								// given "(" === 40 & ")" === 41 hence forth 40 + 1 === 41
								case OPENPARENTHESES: {
									code++
								}
								// quote tail delimiter is identical to the head delimiter hence noop,
								// fallthrough clauses have been shited to the correct tail delimiter
								case DOUBLEQUOTE:
								case SINGLEQUOTE: {
									while (caret++ < eol) {
										if (body.charCodeAt(caret) === code) {
											break
										}
									}
								}
							}

							if (counter === 0) {
								break
							}

							caret++
						}

						child = body.substring(length, caret)

						if (first === NULL) {
							first = (chars = chars.replace(nullptn, '').trim()).charCodeAt(0)
						}

						switch (first) {
							// @at-rule
							case AT: {
								if (format > 0) {
									chars = chars.replace(formatptn, '')
								}

								second = chars.charCodeAt(1)

								switch (second) {
									case DOCUMENT:
									case MEDIA:
									case SUPPORTS:
									case DASH: {
										selector = current
										break
									}
									default: {
										selector = array
									}
								}

								child = compile(current, selector, child, second, depth+1)
								length = child.length

								// preserve empty @at-rule
								if (preserve > 0 && length === 0) {
									length = chars.length
								}

								// execute plugins, @at-rule context
								if (plugged > 0) {
									selector = select(array, chars, invert)
									result = proxy(ATRUL, child, selector, current, line, column, length, second, depth, id)
									chars = selector.join('')

									if (result !== void 0) {
										if ((length = (child = result.trim()).length) === 0) {
											second = 0
											child = ''
										}
									}
								}

								if (length > 0) {
									switch (second) {
										case SUPPORTS: {
											chars = chars.replace(supportsptn, supports)
										}
										case DOCUMENT:
										case MEDIA:
										case DASH: {
											child = chars + '{' + child + '}'
											break
										}
										case KEYFRAME: {
											chars = chars.replace(keyframeptn, '$1 $2' + (keyed > 0 ? key : ''))
											child = chars + '{' + child + '}'

											if (prefix === 1 || (prefix === 2 && vendor('@'+child, 3))) {
												child = '@' + webkit + child + '@' + child
											} else {
												child = '@' + child
											}
											break
										}
										default: {
											child = chars + child

											if (id === PAGE) {
												child = (out += child, '')
											}
										}
									}
								} else {
									child = ''
								}

								break
							}
							// selector
							default: {
								child = compile(current, select(current, chars, invert), child, id, depth+1)
							}
						}

						children += child

						// reset
						context = 0
						insert = 0
						pseudo = 0
						format = 0
						invert = 0
						atrule = 0
						chars = ''
						child = ''
						code = body.charCodeAt(++caret)
						break
					}
					case CLOSEBRACES:
					case SEMICOLON: {
						chars = (format > 0 ? chars.replace(formatptn, '') : chars).trim()

						if ((length = chars.length) > 1) {
							// monkey-patch missing colon
							if (pseudo === 0) {
								first = chars.charCodeAt(0)

								// first character is a letter or dash, buffer has a space character
								if ((first === DASH || first > 96 && first < 123)) {
									length = (chars = chars.replace(' ', ':')).length
								}
							}

							// execute plugins, property context
							if (plugged > 0) {
								if ((result = proxy(PROPS, chars, current, parent, line, column, out.length, id, depth, id)) !== void 0) {
									if ((length = (chars = result.trim()).length) === 0) {
										chars = '\0\0'
									}
								}
							}

							first = chars.charCodeAt(0)
							second = chars.charCodeAt(1)

							switch (first) {
								case NULL: {
									break
								}
								case AT: {
									if (second === IMPORT || second === CHARSET) {
										flat += chars + body.charAt(caret)
										break
									}
								}
								default: {
									if (chars.charCodeAt(length-1) === COLON) {
										break
									}

									out += property(chars, first, second, chars.charCodeAt(2))
								}
							}
						}

						// reset
						context = 0
						insert = 0
						pseudo = 0
						format = 0
						invert = 0
						chars = ''
						code = body.charCodeAt(++caret)
						break
					}
				}
			}

			// parse characters
			switch (code) {
				case CARRIAGE:
				case NEWLINE: {
					// auto insert semicolon
					if (comment + quote + parentheses + bracket + semicolon === 0) {
						// valid non-whitespace characters that
						// may precede a newline
						switch (peak) {
							case CLOSEPARENTHESES:
							case SINGLEQUOTE:
							case DOUBLEQUOTE:
							case AT:
							case TILDE:
							case GREATERTHAN:
							case STAR:
							case PLUS:
							case FOWARDSLASH:
							case DASH:
							case COLON:
							case COMMA:
							case SEMICOLON:
							case OPENBRACES:
							case CLOSEBRACES: {
								break
							}
							default: {
								// current buffer has a colon
								if (pseudo > 0) {
									insert = 1
								}
							}
						}
					}

					// terminate line comment
					if (comment === FOWARDSLASH) {
						comment = 0
					} else if (cascade + context === 0 && id !== KEYFRAME && chars.length > 0) {
						format = 1
						chars += '\0'
					}

					// execute plugins, newline context
					if (plugged * unkwn > 0) {
						proxy(UNKWN, chars, current, parent, line, column, out.length, id, depth, id)
					}

					// next line, reset column position
					column = 1
					line++
					break
				}
				case SEMICOLON:
				case CLOSEBRACES: {
					if (comment + quote + parentheses + bracket === 0) {
						column++
						break
					}
				}
				default: {
					// increment column position
					column++

					// current character
					char = body.charAt(caret)

					// remove comments, escape functions, strings, attributes and prepare selectors
					switch (code) {
						case TAB:
						case SPACE: {
							if (quote + bracket + comment === 0) {
								switch (tail) {
									case COMMA:
									case COLON:
									case TAB:
									case SPACE: {
										char = ''
										break
									}
									default: {
										if (code !== SPACE) {
											char = ' '
										}
									}
								}
							}
							break
						}
						// escape breaking control characters
						case NULL: {
							char = '\\0'
							break
						}
						case FORMFEED: {
							char = '\\f'
							break
						}
						case VERTICALTAB: {
							char = '\\v'
							break
						}
						// &
						case AND: {
							// inverted selector pattern i.e html &
							if (quote + comment + bracket === 0 && cascade > 0) {
								invert = 1
								format = 1
								char = '\f' + char
							}
							break
						}
						// ::p<l>aceholder, l
						// :read-on<l>y, l
						case 108: {
							if (quote + comment + bracket + pattern === 0 && pseudo > 0) {
								switch (caret - pseudo) {
									// ::placeholder
									case 2: {
										if (tail === PLACEHOLDER && body.charCodeAt(caret-3) === COLON) {
											pattern = tail
										}
									}
									// :read-only
									case 8: {
										if (trail === READONLY) {
											pattern = trail
										}
									}
								}
							}
							break
						}
						// :<pattern>
						case COLON: {
							if (quote + comment + bracket === 0) {
								pseudo = caret
							}
							break
						}
						// selectors
						case COMMA: {
							if (comment + parentheses + quote + bracket === 0) {
								format = 1
								char += '\r'
							}
							break
						}
						// quotes
						case DOUBLEQUOTE: {
							if (comment === 0) {
								quote = quote === code ? 0 : (quote === 0 ? code : quote)
							}
							break
						}
						case SINGLEQUOTE: {
							if (comment === 0) {
								quote = quote === code ? 0 : (quote === 0 ? code : quote)
							}
							break
						}
						// attributes
						case OPENBRACKET: {
							if (quote + comment + parentheses === 0) {
								bracket++
							}
							break
						}
						case CLOSEBRACKET: {
							if (quote + comment + parentheses === 0) {
								bracket--
							}
							break
						}
						// functions
						case CLOSEPARENTHESES: {
							if (quote + comment + bracket === 0) {
								parentheses--
							}
							break
						}
						case OPENPARENTHESES: {
							if (quote + comment + bracket === 0) {
								if (context === 0) {
									switch (tail*2 + trail*3) {
										// :matches
										case 533: {
											break
										}
										// :global, :not, :nth-child etc...
										default: {
											counter = 0
											context = 1
										}
									}
								}

								parentheses++
							}
							break
						}
						case AT: {
							if (comment + parentheses + quote + bracket + pseudo + atrule === 0) {
								atrule = 1
							}
							break
						}
						// block/line comments
						case STAR:
						case FOWARDSLASH: {
							if (quote + bracket + parentheses > 0) {
								break
							}

							switch (comment) {
								// initialize line/block comment context
								case 0: {
									switch (code*2 + body.charCodeAt(caret+1)*3) {
										// //
										case 235: {
											comment = FOWARDSLASH
											break
										}
										// /*
										case 220: {
											length = caret
											comment = STAR
											break
										}
									}
									break
								}
								// end block comment context
								case STAR: {
									if (code === FOWARDSLASH && tail === STAR && length + 2 !== caret) {
										// /*<!> ... */, !
										if (body.charCodeAt(length+2) === 33) {
											out += body.substring(length, caret+1)
										}
										char = ''
										comment = 0
									}
								}
							}
						}
					}

					// ignore comment blocks
					if (comment === 0) {
						// aggressive isolation mode, divide each individual selector
						// including selectors in :not function but excluding selectors in :global function
						if (cascade + quote + bracket + atrule === 0 && id !== KEYFRAME && code !== SEMICOLON) {
							switch (code) {
								case COMMA:
								case TILDE:
								case GREATERTHAN:
								case PLUS:
								case CLOSEPARENTHESES:
								case OPENPARENTHESES: {
									if (context === 0) {
										// outside of an isolated context i.e nth-child(<...>)
										switch (tail) {
											case TAB:
											case SPACE:
											case NEWLINE:
											case CARRIAGE: {
												char = char + '\0'
												break
											}
											default: {
												char = '\0' + char + (code === COMMA ? '' : '\0')
											}
										}
										format = 1
									} else {
										// within an isolated context, sleep untill it's terminated
										switch (code) {
											case OPENPARENTHESES: {
												// :globa<l>(
												if (pseudo + 7 === caret && tail === 108) {
													pseudo = 0
												}
												context = ++counter
												break
											}
											case CLOSEPARENTHESES: {
												if ((context = --counter) === 0) {
													format = 1
													char += '\0'
												}
												break
											}
										}
									}
									break
								}
								case TAB:
								case SPACE: {
									switch (tail) {
										case NULL:
										case OPENBRACES:
										case CLOSEBRACES:
										case SEMICOLON:
										case COMMA:
										case FORMFEED:
										case TAB:
										case SPACE:
										case NEWLINE:
										case CARRIAGE: {
											break
										}
										default: {
											// ignore in isolated contexts
											if (context === 0) {
												format = 1
												char += '\0'
											}
										}
									}
								}
							}
						}

						// concat buffer of characters
						chars += char

						// previous non-whitespace character code
						if (code !== SPACE && code !== TAB) {
							peak = code
						}
					}
				}
			}

			// tail character codes
			trail = tail
			tail = code

			// visit every character
			caret++
		}

		length = out.length

		// preserve empty selector
 		if (preserve > 0) {
 			if (length === 0 && children.length === 0 && (current[0].length === 0) === false) {
 				if (id !== MEDIA || (current.length === 1 && (cascade > 0 ? nscopealt : nscope) === current[0])) {
					length = current.join(',').length + 2
 				}
 			}
		}

		if (length > 0) {
			// cascade isolation mode?
			selector = cascade === 0 && id !== KEYFRAME ? isolate(current) : current

			// execute plugins, block context
			if (plugged > 0) {
				result = proxy(BLCKS, out, selector, parent, line, column, length, id, depth, id)

				if (result !== void 0 && (out = result).length === 0) {
					return flat + out + children
				}
			}

			out = selector.join(',') + '{' + out + '}'

			if (prefix*pattern !== 0) {
				if (prefix === 2 && !vendor(out, 2))
					pattern = 0

				switch (pattern) {
					// ::read-only
					case READONLY: {
						out = out.replace(readonlyptn, ':'+moz+'$1')+out
						break
					}
					// ::placeholder
					case PLACEHOLDER: {
						out = (
							out.replace(plcholdrptn, '::' + webkit + 'input-$1') +
							out.replace(plcholdrptn, '::' + moz + '$1') +
							out.replace(plcholdrptn, ':' + ms + 'input-$1') + out
						)
						break
					}
				}

				pattern = 0
			}
		}

		return flat + out + children
	}

	/**
	 * Select
	 *
	 * @param {Array<string>} parent
	 * @param {string} current
	 * @param {number} invert
	 * @return {Array<string>}
	 */
	function select (parent, current, invert) {
		var selectors = current.trim().split(selectorptn)
		var out = selectors

		var length = selectors.length
		var l = parent.length

		switch (l) {
			// 0-1 parent selectors
			case 0:
			case 1: {
				for (var i = 0, selector = l === 0 ? '' : parent[0] + ' '; i < length; ++i) {
					out[i] = scope(selector, out[i], invert, l).trim()
				}
				break
			}
			// >2 parent selectors, nested
			default: {
				for (var i = 0, j = 0, out = []; i < length; ++i) {
					for (var k = 0; k < l; ++k) {
						out[j++] = scope(parent[k] + ' ', selectors[i], invert, l).trim()
					}
				}
			}
		}

		return out
	}

	/**
	 * Scope
	 *
	 * @param {string} parent
	 * @param {string} current
	 * @param {number} invert
	 * @param {number} level
	 * @return {string}
	 */
	function scope (parent, current, invert, level) {
		var selector = current
		var code = selector.charCodeAt(0)

		// trim leading whitespace
		if (code < 33) {
			code = (selector = selector.trim()).charCodeAt(0)
		}

		switch (code) {
			// &
			case AND: {
				switch (cascade + level) {
					case 0:
					case 1: {
						if (parent.trim().length === 0) {
							break
						}
					}
					default: {
						return selector.replace(andptn, '$1'+parent.trim())
					}
				}
				break
			}
			// :
			case COLON: {
				switch (selector.charCodeAt(1)) {
					// g in :global
					case 103: {
						if (escape > 0 && cascade > 0) {
							return selector.replace(escapeptn, '$1').replace(andptn, '$1'+nscope)
						}
						break
					}
					default: {
						// :hover
						return parent.trim() + selector.replace(andptn, '$1'+parent.trim())
					}
				}
			}
			default: {
				// html &
				if (invert*cascade > 0 && selector.indexOf('\f') > 0) {
					return selector.replace(andptn, (parent.charCodeAt(0) === COLON ? '' : '$1')+parent.trim())
				}
			}
		}

		return parent + selector
	}

	/**
	 * Property
	 *
	 * @param {string} input
	 * @param {number} first
	 * @param {number} second
	 * @param {number} third
	 * @return {string}
	 */
	function property (input, first, second, third) {
		var index = 0
		var out = input + ';'
		var hash = (first*2) + (second*3) + (third*4)
		var cache

		// animation: a, n, i characters
		if (hash === 944) {
			return animation(out)
		} else if (prefix === 0 || (prefix === 2 && !vendor(out, 1))) {
			return out
		}

		// vendor prefix
		switch (hash) {
			// text-decoration/text-size-adjust/text-shadow/text-align/text-transform: t, e, x
			case 1015: {
				// text-shadow/text-align/text-transform, a
				return out.charCodeAt(10) === 97 ? webkit + out + out : out
			}
			// filter/fill f, i, l
			case 951: {
				// filter, t
				return out.charCodeAt(3) === 116 ? webkit + out + out : out
			}
			// color/column, c, o, l
			case 963: {
				// column, n
				return out.charCodeAt(5) === 110 ? webkit + out + out : out
			}
			// box-decoration-break, b, o, x
			case 1009: {
				if (out.charCodeAt(4) !== 100) {
					break
				}
			}
			// mask, m, a, s
			// clip-path, c, l, i
			case 969:
			case 942: {
				return webkit + out + out
			}
			// appearance: a, p, p
			case 978: {
				return webkit + out + moz + out + out
			}
			// hyphens: h, y, p
			// user-select: u, s, e
			case 1019:
			case 983: {
				return webkit + out + moz + out + ms + out + out
			}
			// background/backface-visibility, b, a, c
			case 883: {
				// backface-visibility, -
				if (out.charCodeAt(8) === DASH) {
					return webkit + out + out
				}

				// image-set(...)
				if (out.indexOf('image-set(', 11) > 0) {
					return out.replace(imgsrcptn, '$1'+webkit+'$2') + out
				}

				return out
			}
			// flex: f, l, e
			case 932: {
				if (out.charCodeAt(4) === DASH) {
					switch (out.charCodeAt(5)) {
						// flex-grow, g
						case 103: {
							return webkit + 'box-' + out.replace('-grow', '') + webkit + out + ms + out.replace('grow', 'positive') + out
						}
						// flex-shrink, s
						case 115: {
							return webkit + out + ms + out.replace('shrink', 'negative') + out
						}
						// flex-basis, b
						case 98: {
							return webkit + out + ms + out.replace('basis', 'preferred-size') + out
						}
					}
				}

				return webkit + out + ms + out + out
			}
			// order: o, r, d
			case 964: {
				return webkit + out + ms + 'flex' + '-' + out + out
			}
			// justify-items/justify-content, j, u, s
			case 1023: {
				// justify-content, c
				if (out.charCodeAt(8) !== 99) {
					break
				}

				cache = out.substring(out.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify')
				return webkit + 'box-pack' + cache + webkit + out + ms + 'flex-pack' + cache + out
			}
			// cursor, c, u, r
			case 1005: {
				return cursorptn.test(out) ? out.replace(colonptn, ':' + webkit) + out.replace(colonptn, ':' + moz) + out : out
			}
			// writing-mode, w, r, i
			case 1000: {
				cache = out.substring(13).trim()
				index = cache.indexOf('-') + 1

				switch (cache.charCodeAt(0)+cache.charCodeAt(index)) {
					// vertical-lr
					case 226: {
						cache = out.replace(writingptn, 'tb')
						break
					}
					// vertical-rl
					case 232: {
						cache = out.replace(writingptn, 'tb-rl')
						break
					}
					// horizontal-tb
					case 220: {
						cache = out.replace(writingptn, 'lr')
						break
					}
					default: {
						return out
					}
				}

				return webkit + out + ms + cache + out
			}
			// position: sticky
			case 1017: {
				if (out.indexOf('sticky', 9) === -1) {
					return out
				}
			}
			// display(flex/inline-flex/inline-box): d, i, s
			case 975: {
				index = (out = input).length - 10
				cache = (out.charCodeAt(index) === 33 ? out.substring(0, index) : out).substring(input.indexOf(':', 7) + 1).trim()

				switch (hash = cache.charCodeAt(0) + (cache.charCodeAt(7)|0)) {
					// inline-
					case 203: {
						// inline-box
						if (cache.charCodeAt(8) < 111) {
							break
						}
					}
					// inline-box/sticky
					case 115: {
						out = out.replace(cache, webkit+cache)+';'+out
						break
					}
					// inline-flex
					// flex
					case 207:
					case 102: {
						out = (
							out.replace(cache, webkit+(hash > 102 ? 'inline-' : '')+'box')+';'+
							out.replace(cache, webkit+cache)+';'+
							out.replace(cache, ms+cache+'box')+';'+
							out
						)
					}
				}

				return out + ';'
			}
			// align-items, align-center, align-self: a, l, i, -
			case 938: {
				if (out.charCodeAt(5) === DASH) {
					switch (out.charCodeAt(6)) {
						// align-items, i
						case 105: {
							cache = out.replace('-items', '')
							return webkit + out + webkit + 'box-' + cache + ms + 'flex-' + cache + out
						}
						// align-self, s
						case 115: {
							return webkit + out + ms + 'flex-item-' + out.replace(selfptn, '') + out
						}
						// align-content
						default: {
							return webkit + out + ms + 'flex-line-pack' + out.replace('align-content', '').replace(selfptn, '') + out
						}
					}
				}
				break
			}
			// min/max
			case 973:
			case 989: {
				// min-/max- height/width/block-size/inline-size
				if (out.charCodeAt(3) !== DASH || out.charCodeAt(4) === 122) {
					break
				}
			}
			// height/width: min-content / width: max-content
			case 931:
			case 953: {
				if (dimensionptn.test(input) === true) {
					// stretch
					if ((cache = input.substring(input.indexOf(':') + 1)).charCodeAt(0) === 115)
						return property(input.replace('stretch', 'fill-available'), first, second, third).replace(':fill-available', ':stretch')
					else
						return out.replace(cache, webkit + cache) + out.replace(cache, moz + cache.replace('fill-', '')) + out
				}
				break
			}
			// transform, transition: t, r, a
			case 962: {
				out = webkit + out + (out.charCodeAt(5) === 102 ? ms + out : '') + out

				// transitions
				if (second + third === 211 && out.charCodeAt(13) === 105 && out.indexOf('transform', 10) > 0) {
					return out.substring(0, out.indexOf(';', 27) + 1).replace(transformptn, '$1' + webkit + '$2') + out
				}

				break
			}
		}

		return out
	}

	/**
	 * Vendor
	 *
	 * @param {string} content
	 * @param {number} context
	 * @return {boolean}
	 */
	function vendor (content, context) {
		var index = content.indexOf(context === 1 ? ':' : '{')
		var key = content.substring(0, context !== 3 ? index : 10)
		var value = content.substring(index + 1, content.length - 1)

		return should(context !== 2 ? key : key.replace(pseudofmt, '$1'), value, context)
	}

	/**
	 * Supports
	 *
	 * @param {string} match
	 * @param {string} group
	 * @return {string}
	 */
	function supports (match, group) {
		var out = property(group, group.charCodeAt(0), group.charCodeAt(1), group.charCodeAt(2))

		return out !== group+';' ? out.replace(propertyptn, ' or ($1)').substring(4) : '('+group+')'
	}

	/**
	 * Animation
	 *
	 * @param {string} input
	 * @return {string}
	 */
	function animation (input) {
		var length = input.length
		var index = input.indexOf(':', 9) + 1
		var declare = input.substring(0, index).trim()
		var out = input.substring(index, length-1).trim()

		switch (input.charCodeAt(9)*keyed) {
			case 0: {
				break
			}
			// animation-*, -
			case DASH: {
				// animation-name, n
				if (input.charCodeAt(10) !== 110) {
					break
				}
			}
			// animation/animation-name
			default: {
				// split in case of multiple animations
				var list = out.split((out = '', animationptn))

				for (var i = 0, index = 0, length = list.length; i < length; index = 0, ++i) {
					var value = list[i]
					var items = value.split(propertiesptn)

					while (value = items[index]) {
						var peak = value.charCodeAt(0)

						if (keyed === 1 && (
							// letters
							(peak > AT && peak < 90) || (peak > 96 && peak < 123) || peak === UNDERSCORE ||
							// dash but not in sequence i.e --
							(peak === DASH && value.charCodeAt(1) !== DASH)
						)) {
							// not a number/function
							switch (isNaN(parseFloat(value)) + (value.indexOf('(') !== -1)) {
								case 1: {
									switch (value) {
										// not a valid reserved keyword
										case 'infinite': case 'alternate': case 'backwards': case 'running':
										case 'normal': case 'forwards': case 'both': case 'none': case 'linear':
										case 'ease': case 'ease-in': case 'ease-out': case 'ease-in-out':
										case 'paused': case 'reverse': case 'alternate-reverse': case 'inherit':
										case 'initial': case 'unset': case 'step-start': case 'step-end': {
											break
										}
										default: {
											value += key
										}
									}
								}
							}
						}

						items[index++] = value
					}

					out += (i === 0 ? '' : ',') + items.join(' ')
				}
			}
		}

		out = declare + out + ';'

		if (prefix === 1 || (prefix === 2 && vendor(out, 1)))
			return webkit + out + out

		return out
	}

	/**
	 * Isolate
	 *
	 * @param {Array<string>} current
	 */
	function isolate (current) {
		for (var i = 0, length = current.length, selector = Array(length), padding, element; i < length; ++i) {
			// split individual elements in a selector i.e h1 h2 === [h1, h2]
			var elements = current[i].split(elementptn)
			var out = ''

			for (var j = 0, size = 0, tail = 0, code = 0, l = elements.length; j < l; ++j) {
				// empty element
				if ((size = (element = elements[j]).length) === 0 && l > 1) {
					continue
				}

				tail = out.charCodeAt(out.length-1)
				code = element.charCodeAt(0)
				padding = ''

				if (j !== 0) {
					// determine if we need padding
					switch (tail) {
						case STAR:
						case TILDE:
						case GREATERTHAN:
						case PLUS:
						case SPACE:
						case OPENPARENTHESES:  {
							break
						}
						default: {
							padding = ' '
						}
					}
				}

				switch (code) {
					case AND: {
						element = padding + nscopealt
					}
					case TILDE:
					case GREATERTHAN:
					case PLUS:
					case SPACE:
					case CLOSEPARENTHESES:
					case OPENPARENTHESES: {
						break
					}
					case OPENBRACKET: {
						element = padding + element + nscopealt
						break
					}
					case COLON: {
						switch (element.charCodeAt(1)*2 + element.charCodeAt(2)*3) {
							// :global
							case 530: {
								if (escape > 0) {
									element = padding + element.substring(8, size - 1)
									break
								}
							}
							// :hover, :nth-child(), ...
							default: {
								if (j < 1 || elements[j-1].length < 1) {
									element = padding + nscopealt + element
								}
							}
						}
						break
					}
					case COMMA: {
						padding = ''
					}
					default: {
						if (size > 1 && element.indexOf(':') > 0) {
							element = padding + element.replace(pseudoptn, '$1' + nscopealt + '$2')
						} else {
							element = padding + element + nscopealt
						}
					}
				}

				out += element
			}

			selector[i] = out.replace(formatptn, '').trim()
		}

		return selector
	}

	/**
	 * Proxy
	 *
	 * @param {number} context
	 * @param {string} content
	 * @param {Array<string>} selectors
	 * @param {Array<string>} parents
	 * @param {number} line
	 * @param {number} column
	 * @param {number} length
	 * @param {number} id
	 * @param {number} depth
	 * @param {number} at
	 * @return {(string|void|*)}
	 */
	function proxy (context, content, selectors, parents, line, column, length, id, depth, at) {
		for (var i = 0, out = content, next; i < plugged; ++i) {
			switch (next = plugins[i].call(stylis, context, out, selectors, parents, line, column, length, id, depth, at)) {
				case void 0:
				case false:
				case true:
				case null: {
					break
				}
				default: {
					out = next
				}
			}
		}

		switch (out) {
			case void 0:
			case false:
			case true:
			case null:
			case content: {
				break
			}
			default: {
				return out
			}
		}
	}

	/**
	 * @param {number} code
	 * @param {number} index
	 * @param {number} length
	 * @param {string} body
	 * @return {number}
	 */
	function delimited (code, index, length, body) {
		for (var i = index + 1; i < length; ++i) {
			switch (body.charCodeAt(i)) {
				// /*
				case FOWARDSLASH: {
					if (code === STAR) {
						if (body.charCodeAt(i - 1) === STAR &&  index + 2 !== i) {
							return i + 1
						}
					}
					break
				}
				// //
				case NEWLINE: {
					if (code === FOWARDSLASH) {
						return i + 1
					}
				}
			}
		}

		return i
	}

	/**
	 * @param {number} type
	 * @param {number} index
	 * @param {number} length
	 * @param {number} find
	 * @param {string} body
	 * @return {number}
	 */
	function match (type, index, length, body) {
		for (var i = index + 1; i < length; ++i) {
			switch (body.charCodeAt(i)) {
				case type: {
					return i
				}
			}
		}

		return i
	}

	/**
	 * Minify
	 *
	 * @param {(string|*)} output
	 * @return {string}
	 */
	function minify (output) {
		return output
			.replace(formatptn, '')
			.replace(beforeptn, '')
			.replace(afterptn, '$1')
			.replace(tailptn, '$1')
			.replace(whiteptn, ' ')
	}

	/**
	 * Use
	 *
	 * @param {(Array<function(...?)>|function(...?)|number|void)?} plugin
	 */
	function use (plugin) {
		switch (plugin) {
			case void 0:
			case null: {
				plugged = plugins.length = 0
				break
			}
			default: {
				switch (plugin.constructor) {
					case Array: {
						for (var i = 0, length = plugin.length; i < length; ++i) {
							use(plugin[i])
						}
						break
					}
					case Function: {
						plugins[plugged++] = plugin
						break
					}
					case Boolean: {
						unkwn = !!plugin|0
					}
				}
			}
 		}

 		return use
	}

	/**
	 * Set
	 *
	 * @param {*} options
	 */
	function set (options) {
		for (var name in options) {
			var value = options[name]
			switch (name) {
				case 'keyframe': keyed = value|0; break
				case 'global': escape = value|0; break
				case 'cascade': cascade = value|0; break
				case 'compress': compress = value|0; break
				case 'semicolon': semicolon = value|0; break
				case 'preserve': preserve = value|0; break
				case 'prefix':
					should = null

					if (!value) {
						prefix = 0
					} else if (typeof value !== 'function') {
						prefix = 1
					} else {
						prefix = 2
						should = value
					}
			}
		}

		return set
	}

	/**
	 * Stylis
	 *
	 * @param {string} selector
	 * @param {string} input
	 * @return {*}
	 */
	function stylis (selector, input) {
		if (this !== void 0 && this.constructor === stylis) {
			return factory(selector)
		}

		// setup
		var ns = selector
		var code = ns.charCodeAt(0)

		// trim leading whitespace
		if (code < 33) {
			code = (ns = ns.trim()).charCodeAt(0)
		}

		// keyframe/animation namespace
		if (keyed > 0) {
			key = ns.replace(invalidptn, code === OPENBRACKET ? '' : '-')
		}

		// reset, used to assert if a plugin is moneky-patching the return value
		code = 1

		// cascade/isolate
		if (cascade === 1) {
			nscope = ns
		} else {
			nscopealt = ns
		}

		var selectors = [nscope]
		var result

		// execute plugins, pre-process context
		if (plugged > 0) {
			result = proxy(PREPS, input, selectors, selectors, line, column, 0, 0, 0, 0)

			if (result !== void 0 && typeof result === 'string') {
				input = result
			}
		}

		// build
		var output = compile(array, selectors, input, 0, 0)

		// execute plugins, post-process context
		if (plugged > 0) {
			result = proxy(POSTS, output, selectors, selectors, line, column, output.length, 0, 0, 0)

			// bypass minification
			if (result !== void 0 && typeof(output = result) !== 'string') {
				code = 0
			}
		}

		// reset
		key = ''
		nscope = ''
		nscopealt = ''
		pattern = 0
		line = 1
		column = 1

		return compress*code === 0 ? output : minify(output)
	}

	stylis['use'] = use
	stylis['set'] = set

	if (options !== void 0) {
		set(options)
	}

	return stylis
}));


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

(function (factory) {
	 true ? (module['exports'] = factory()) :
		typeof define === 'function' && define['amd'] ? define(factory()) :
			(window['stylisRuleSheet'] = factory())
}(function () {

	'use strict'

	return function (insertRule) {
		var delimiter = '/*|*/'
		var needle = delimiter+'}'

		function toSheet (block) {
			if (block)
				try {
					insertRule(block + '}')
				} catch (e) {}
		}

		return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
			switch (context) {
				// property
				case 1:
					// @import
					if (depth === 0 && content.charCodeAt(0) === 64)
						return insertRule(content+';'), ''
					break
				// selector
				case 2:
					if (ns === 0)
						return content + delimiter
					break
				// at-rule
				case 3:
					switch (ns) {
						// @font-face, @page
						case 102:
						case 112:
							return insertRule(selectors[0]+content), ''
						default:
							return content + (at === 0 ? delimiter : '')
					}
				case -2:
					content.split(needle).forEach(toSheet)
			}
		}
	}
}))


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(215)();
}


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(216);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(218);
} else {
  module.exports = require('./cjs/react-is.development.js');
}


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.5.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.forward_ref"):60112,n=b?Symbol.for("react.placeholder"):60113;
function q(a){if("object"===typeof a&&null!==a){var p=a.$$typeof;switch(p){case c:switch(a=a.type,a){case l:case e:case g:case f:return a;default:switch(a=a&&a.$$typeof,a){case k:case m:case h:return a;default:return p}}case d:return p}}}exports.typeOf=q;exports.AsyncMode=l;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=m;exports.Fragment=e;exports.Profiler=g;exports.Portal=d;exports.StrictMode=f;
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===l||a===g||a===f||a===n||"object"===typeof a&&null!==a&&("function"===typeof a.then||a.$$typeof===h||a.$$typeof===k||a.$$typeof===m)};exports.isAsyncMode=function(a){return q(a)===l};exports.isContextConsumer=function(a){return q(a)===k};exports.isContextProvider=function(a){return q(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};
exports.isForwardRef=function(a){return q(a)===m};exports.isFragment=function(a){return q(a)===e};exports.isProfiler=function(a){return q(a)===g};exports.isPortal=function(a){return q(a)===d};exports.isStrictMode=function(a){return q(a)===f};


/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export propTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return propTypes; });
/* unused harmony export onError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return observer; });
/* unused harmony export Observer */
/* unused harmony export renderReporter */
/* unused harmony export componentByNodeRegistery */
/* unused harmony export componentByNodeRegistry */
/* unused harmony export trackComponents */
/* unused harmony export useStaticRendering */
/* unused harmony export Provider */
/* unused harmony export inject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);




// These functions can be stubbed out in specific environments
var unstable_batchedUpdates$1 = undefined;

'use strict';

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var EventEmitter = function () {
    function EventEmitter() {
        classCallCheck(this, EventEmitter);
        this.listeners = [];
    }

    createClass(EventEmitter, [{
        key: "on",
        value: function on(cb) {
            var _this = this;

            this.listeners.push(cb);
            return function () {
                var index = _this.listeners.indexOf(cb);
                if (index !== -1) _this.listeners.splice(index, 1);
            };
        }
    }, {
        key: "emit",
        value: function emit(data) {
            this.listeners.forEach(function (fn) {
                return fn(data);
            });
        }
    }]);
    return EventEmitter;
}();

// Copied from React.PropTypes
function createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, componentName, location, propFullName) {
        for (var _len = arguments.length, rest = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
            rest[_key - 6] = arguments[_key];
        }

        return Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["p" /* untracked */])(function () {
            componentName = componentName || "<<anonymous>>";
            propFullName = propFullName || propName;
            if (props[propName] == null) {
                if (isRequired) {
                    var actual = props[propName] === null ? "null" : "undefined";
                    return new Error("The " + location + " `" + propFullName + "` is marked as required " + "in `" + componentName + "`, but its value is `" + actual + "`.");
                }
                return null;
            } else {
                return validate.apply(undefined, [props, propName, componentName, location, propFullName].concat(rest));
            }
        });
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
}

// Copied from React.PropTypes
function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === "symbol") {
        return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue["@@toStringTag"] === "Symbol") {
        return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === "function" && propValue instanceof Symbol) {
        return true;
    }

    return false;
}

// Copied from React.PropTypes
function getPropType(propValue) {
    var propType = typeof propValue === "undefined" ? "undefined" : _typeof(propValue);
    if (Array.isArray(propValue)) {
        return "array";
    }
    if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return "object";
    }
    if (isSymbol(propType, propValue)) {
        return "symbol";
    }
    return propType;
}

// This handles more types than `getPropType`. Only used for error messages.
// Copied from React.PropTypes
function getPreciseType(propValue) {
    var propType = getPropType(propValue);
    if (propType === "object") {
        if (propValue instanceof Date) {
            return "date";
        } else if (propValue instanceof RegExp) {
            return "regexp";
        }
    }
    return propType;
}

function createObservableTypeCheckerCreator(allowNativeType, mobxType) {
    return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["p" /* untracked */])(function () {
            if (allowNativeType) {
                if (getPropType(props[propName]) === mobxType.toLowerCase()) return null;
            }
            var mobxChecker = void 0;
            switch (mobxType) {
                case "Array":
                    mobxChecker = __WEBPACK_IMPORTED_MODULE_0_mobx__["j" /* isObservableArray */];
                    break;
                case "Object":
                    mobxChecker = __WEBPACK_IMPORTED_MODULE_0_mobx__["l" /* isObservableObject */];
                    break;
                case "Map":
                    mobxChecker = __WEBPACK_IMPORTED_MODULE_0_mobx__["k" /* isObservableMap */];
                    break;
                default:
                    throw new Error("Unexpected mobxType: " + mobxType);
            }
            var propValue = props[propName];
            if (!mobxChecker(propValue)) {
                var preciseType = getPreciseType(propValue);
                var nativeTypeExpectationMessage = allowNativeType ? " or javascript `" + mobxType.toLowerCase() + "`" : "";
                return new Error("Invalid prop `" + propFullName + "` of type `" + preciseType + "` supplied to" + " `" + componentName + "`, expected `mobx.Observable" + mobxType + "`" + nativeTypeExpectationMessage + ".");
            }
            return null;
        });
    });
}

function createObservableArrayOfTypeChecker(allowNativeType, typeChecker) {
    return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
        for (var _len2 = arguments.length, rest = Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
            rest[_key2 - 5] = arguments[_key2];
        }

        return Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["p" /* untracked */])(function () {
            if (typeof typeChecker !== "function") {
                return new Error("Property `" + propFullName + "` of component `" + componentName + "` has " + "invalid PropType notation.");
            }
            var error = createObservableTypeCheckerCreator(allowNativeType, "Array")(props, propName, componentName);
            if (error instanceof Error) return error;
            var propValue = props[propName];
            for (var i = 0; i < propValue.length; i++) {
                error = typeChecker.apply(undefined, [propValue, i, componentName, location, propFullName + "[" + i + "]"].concat(rest));
                if (error instanceof Error) return error;
            }
            return null;
        });
    });
}

var observableArray = createObservableTypeCheckerCreator(false, "Array");
var observableArrayOf = createObservableArrayOfTypeChecker.bind(null, false);
var observableMap = createObservableTypeCheckerCreator(false, "Map");
var observableObject = createObservableTypeCheckerCreator(false, "Object");
var arrayOrObservableArray = createObservableTypeCheckerCreator(true, "Array");
var arrayOrObservableArrayOf = createObservableArrayOfTypeChecker.bind(null, true);
var objectOrObservableObject = createObservableTypeCheckerCreator(true, "Object");



var propTypes = Object.freeze({
	observableArray: observableArray,
	observableArrayOf: observableArrayOf,
	observableMap: observableMap,
	observableObject: observableObject,
	arrayOrObservableArray: arrayOrObservableArray,
	arrayOrObservableArrayOf: arrayOrObservableArrayOf,
	objectOrObservableObject: objectOrObservableObject
});

function isStateless(component) {
    // `function() {}` has prototype, but `() => {}` doesn't
    // `() => {}` via Babel has prototype too.
    return !(component.prototype && component.prototype.render);
}

var injectorContextTypes = {
    mobxStores: objectOrObservableObject
};
Object.seal(injectorContextTypes);

var proxiedInjectorProps = {
    contextTypes: {
        get: function get$$1() {
            return injectorContextTypes;
        },
        set: function set$$1(_) {
            console.warn("Mobx Injector: you are trying to attach `contextTypes` on an component decorated with `inject` (or `observer`) HOC. Please specify the contextTypes on the wrapped component instead. It is accessible through the `wrappedComponent`");
        },
        configurable: true,
        enumerable: false
    },
    isMobxInjector: {
        value: true,
        writable: true,
        configurable: true,
        enumerable: true
    }

    /**
     * Store Injection
     */
};function createStoreInjector(grabStoresFn, component, injectNames) {
    var _class, _temp2;

    var displayName = "inject-" + (component.displayName || component.name || component.constructor && component.constructor.name || "Unknown");
    if (injectNames) displayName += "-with-" + injectNames;

    var Injector = (_temp2 = _class = function (_Component) {
        inherits(Injector, _Component);

        function Injector() {
            var _ref;

            var _temp, _this, _ret;

            classCallCheck(this, Injector);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Injector.__proto__ || Object.getPrototypeOf(Injector)).call.apply(_ref, [this].concat(args))), _this), _this.storeRef = function (instance) {
                _this.wrappedInstance = instance;
            }, _temp), possibleConstructorReturn(_this, _ret);
        }

        createClass(Injector, [{
            key: "render",
            value: function render() {
                // Optimization: it might be more efficient to apply the mapper function *outside* the render method
                // (if the mapper is a function), that could avoid expensive(?) re-rendering of the injector component
                // See this test: 'using a custom injector is not too reactive' in inject.js
                var newProps = {};
                for (var key in this.props) {
                    if (this.props.hasOwnProperty(key)) {
                        newProps[key] = this.props[key];
                    }
                }var additionalProps = grabStoresFn(this.context.mobxStores || {}, newProps, this.context) || {};
                for (var _key2 in additionalProps) {
                    newProps[_key2] = additionalProps[_key2];
                }

                if (!isStateless(component)) {
                    newProps.ref = this.storeRef;
                }

                return Object(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"])(component, newProps);
            }
        }]);
        return Injector;
    }(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]), _class.displayName = displayName, _temp2);

    // Static fields from component should be visible on the generated Injector

    hoistNonReactStatics_cjs(Injector, component);

    Injector.wrappedComponent = component;
    Object.defineProperties(Injector, proxiedInjectorProps);

    return Injector;
}

function grabStoresByName(storeNames) {
    return function (baseStores, nextProps) {
        storeNames.forEach(function (storeName) {
            if (storeName in nextProps // prefer props over stores
            ) return;
            if (!(storeName in baseStores)) throw new Error("MobX injector: Store '" + storeName + "' is not available! Make sure it is provided by some Provider");
            nextProps[storeName] = baseStores[storeName];
        });
        return nextProps;
    };
}

/**
 * higher order component that injects stores to a child.
 * takes either a varargs list of strings, which are stores read from the context,
 * or a function that manually maps the available stores from the context to props:
 * storesToProps(mobxStores, props, context) => newProps
 */
function inject() /* fn(stores, nextProps) or ...storeNames */{
    var grabStoresFn = void 0;
    if (typeof arguments[0] === "function") {
        grabStoresFn = arguments[0];
        return function (componentClass) {
            var injected = createStoreInjector(grabStoresFn, componentClass);
            injected.isMobxInjector = false; // supress warning
            // mark the Injector as observer, to make it react to expressions in `grabStoresFn`,
            // see #111
            injected = observer(injected);
            injected.isMobxInjector = true; // restore warning
            return injected;
        };
    } else {
        var storeNames = [];
        for (var i = 0; i < arguments.length; i++) {
            storeNames[i] = arguments[i];
        }grabStoresFn = grabStoresByName(storeNames);
        return function (componentClass) {
            return createStoreInjector(grabStoresFn, componentClass, storeNames.join("-"));
        };
    }
}

var mobxAdminProperty = __WEBPACK_IMPORTED_MODULE_0_mobx__["a" /* $mobx */] || "$mobx";

/**
 * dev tool support
 */
var isDevtoolsEnabled = false;

var isUsingStaticRendering = false;

var warnedAboutObserverInjectDeprecation = false;

// WeakMap<Node, Object>;
var componentByNodeRegistry = typeof WeakMap !== "undefined" ? new WeakMap() : undefined;
var renderReporter = new EventEmitter();

var createdSymbols = {};

function createRealSymbol(name) {
    if (typeof Symbol === "function") {
        return Symbol(name);
    }
    return "$mobxReactProp$" + name + Math.random();
}

function createSymbol(name) {
    if (!createdSymbols[name]) {
        createdSymbols[name] = createRealSymbol(name);
    }
    return createdSymbols[name];
}

var skipRenderKey = createSymbol("skipRender");
var isForcingUpdateKey = createSymbol("isForcingUpdate");

/**
 * Helper to set `prop` to `this` as non-enumerable (hidden prop)
 * @param target
 * @param prop
 * @param value
 */
function setHiddenProp(target, prop, value) {
    if (!Object.hasOwnProperty.call(target, prop)) {
        Object.defineProperty(target, prop, {
            enumerable: false,
            configurable: true,
            writable: true,
            value: value
        });
    } else {
        target[prop] = value;
    }
}

function findDOMNode$2(component) {
    if (__WEBPACK_IMPORTED_MODULE_2_react_dom__["findDOMNode"]) {
        try {
            return Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__["findDOMNode"])(component);
        } catch (e) {
            // findDOMNode will throw in react-test-renderer, see:
            // See https://github.com/mobxjs/mobx-react/issues/216
            // Is there a better heuristic?
            return null;
        }
    }
    return null;
}

function reportRendering(component) {
    var node = findDOMNode$2(component);
    if (node && componentByNodeRegistry) componentByNodeRegistry.set(node, component);

    renderReporter.emit({
        event: "render",
        renderTime: component.__$mobRenderEnd - component.__$mobRenderStart,
        totalTime: Date.now() - component.__$mobRenderStart,
        component: component,
        node: node
    });
}

function trackComponents() {
    if (typeof WeakMap === "undefined") throw new Error("[mobx-react] tracking components is not supported in this browser.");
    if (!isDevtoolsEnabled) isDevtoolsEnabled = true;
}

function useStaticRendering(useStaticRendering) {
    isUsingStaticRendering = useStaticRendering;
}

/**
 * Errors reporter
 */

var errorsReporter = new EventEmitter();

/**
 * Utilities
 */

function patch(target, funcName) {
    var runMixinFirst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var base = target[funcName];
    var mixinFunc = reactiveMixin[funcName];
    var f = !base ? mixinFunc : runMixinFirst === true ? function () {
        mixinFunc.apply(this, arguments);
        base.apply(this, arguments);
    } : function () {
        base.apply(this, arguments);
        mixinFunc.apply(this, arguments);
    };

    // MWE: ideally we freeze here to protect against accidental overwrites in component instances, see #195
    // ...but that breaks react-hot-loader, see #231...
    target[funcName] = f;
}

function shallowEqual(objA, objB) {
    //From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
    if (is(objA, objB)) return true;
    if ((typeof objA === "undefined" ? "undefined" : _typeof(objA)) !== "object" || objA === null || (typeof objB === "undefined" ? "undefined" : _typeof(objB)) !== "object" || objB === null) {
        return false;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) return false;
    for (var i = 0; i < keysA.length; i++) {
        if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }
    return true;
}

function is(x, y) {
    // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
    if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
    } else {
        return x !== x && y !== y;
    }
}

function makeComponentReactive(render) {
    var _this2 = this;

    if (isUsingStaticRendering === true) return render.call(this);

    function reactiveRender() {
        var _this = this;

        isRenderingPending = false;
        var exception = undefined;
        var rendering = undefined;
        reaction.track(function () {
            if (isDevtoolsEnabled) {
                _this.__$mobRenderStart = Date.now();
            }
            try {
                rendering = Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["c" /* _allowStateChanges */])(false, baseRender);
            } catch (e) {
                exception = e;
            }
            if (isDevtoolsEnabled) {
                _this.__$mobRenderEnd = Date.now();
            }
        });
        if (exception) {
            errorsReporter.emit(exception);
            throw exception;
        }
        return rendering;
    }

    // Generate friendly name for debugging
    var initialName = this.displayName || this.name || this.constructor && (this.constructor.displayName || this.constructor.name) || "<component>";
    var rootNodeID = this._reactInternalInstance && this._reactInternalInstance._rootNodeID || this._reactInternalInstance && this._reactInternalInstance._debugID || this._reactInternalFiber && this._reactInternalFiber._debugID;
    /**
     * If props are shallowly modified, react will render anyway,
     * so atom.reportChanged() should not result in yet another re-render
     */
    setHiddenProp(this, skipRenderKey, false);
    /**
     * forceUpdate will re-assign this.props. We don't want that to cause a loop,
     * so detect these changes
     */
    setHiddenProp(this, isForcingUpdateKey, false);

    // wire up reactive render
    var baseRender = render.bind(this);
    var isRenderingPending = false;

    var reaction = new __WEBPACK_IMPORTED_MODULE_0_mobx__["b" /* Reaction */](initialName + "#" + rootNodeID + ".render()", function () {
        if (!isRenderingPending) {
            // N.B. Getting here *before mounting* means that a component constructor has side effects (see the relevant test in misc.js)
            // This unidiomatic React usage but React will correctly warn about this so we continue as usual
            // See #85 / Pull #44
            isRenderingPending = true;
            if (typeof _this2.componentWillReact === "function") _this2.componentWillReact(); // TODO: wrap in action?
            if (_this2.__$mobxIsUnmounted !== true) {
                // If we are unmounted at this point, componentWillReact() had a side effect causing the component to unmounted
                // TODO: remove this check? Then react will properly warn about the fact that this should not happen? See #73
                // However, people also claim this migth happen during unit tests..
                var hasError = true;
                try {
                    setHiddenProp(_this2, isForcingUpdateKey, true);
                    if (!_this2[skipRenderKey]) __WEBPACK_IMPORTED_MODULE_1_react__["Component"].prototype.forceUpdate.call(_this2);
                    hasError = false;
                } finally {
                    setHiddenProp(_this2, isForcingUpdateKey, false);
                    if (hasError) reaction.dispose();
                }
            }
        }
    });
    reaction.reactComponent = this;
    reactiveRender[mobxAdminProperty] = reaction;
    this.render = reactiveRender;
    return reactiveRender.call(this);
}

/**
 * ReactiveMixin
 */
var reactiveMixin = {
    componentWillUnmount: function componentWillUnmount() {
        if (isUsingStaticRendering === true) return;
        this.render[mobxAdminProperty] && this.render[mobxAdminProperty].dispose();
        this.__$mobxIsUnmounted = true;
        if (isDevtoolsEnabled) {
            var node = findDOMNode$2(this);
            if (node && componentByNodeRegistry) {
                componentByNodeRegistry.delete(node);
            }
            renderReporter.emit({
                event: "destroy",
                component: this,
                node: node
            });
        }
    },

    componentDidMount: function componentDidMount() {
        if (isDevtoolsEnabled) {
            reportRendering(this);
        }
    },

    componentDidUpdate: function componentDidUpdate() {
        if (isDevtoolsEnabled) {
            reportRendering(this);
        }
    },

    shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
        if (isUsingStaticRendering) {
            console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.");
        }
        // update on any state changes (as is the default)
        if (this.state !== nextState) {
            return true;
        }
        // update if props are shallowly not equal, inspired by PureRenderMixin
        // we could return just 'false' here, and avoid the `skipRender` checks etc
        // however, it is nicer if lifecycle events are triggered like usually,
        // so we return true here if props are shallowly modified.
        return !shallowEqual(this.props, nextProps);
    }
};

function makeObservableProp(target, propName) {
    var valueHolderKey = createSymbol(propName + " value holder");
    var atomHolderKey = createSymbol(propName + " atom holder");
    function getAtom() {
        if (!this[atomHolderKey]) {
            setHiddenProp(this, atomHolderKey, Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["h" /* createAtom */])("reactive " + propName));
        }
        return this[atomHolderKey];
    }
    Object.defineProperty(target, propName, {
        configurable: true,
        enumerable: true,
        get: function get$$1() {
            getAtom.call(this).reportObserved();
            return this[valueHolderKey];
        },
        set: function set$$1(v) {
            if (!this[isForcingUpdateKey] && !shallowEqual(this[valueHolderKey], v)) {
                setHiddenProp(this, valueHolderKey, v);
                setHiddenProp(this, skipRenderKey, true);
                getAtom.call(this).reportChanged();
                setHiddenProp(this, skipRenderKey, false);
            } else {
                setHiddenProp(this, valueHolderKey, v);
            }
        }
    });
}

/**
 * Observer function / decorator
 */
function observer(arg1, arg2) {
    if (typeof arg1 === "string") {
        throw new Error("Store names should be provided as array");
    }
    if (Array.isArray(arg1)) {
        // TODO: remove in next major
        // component needs stores
        if (!warnedAboutObserverInjectDeprecation) {
            warnedAboutObserverInjectDeprecation = true;
            console.warn('Mobx observer: Using observer to inject stores is deprecated since 4.0. Use `@inject("store1", "store2") @observer ComponentClass` or `inject("store1", "store2")(observer(componentClass))` instead of `@observer(["store1", "store2"]) ComponentClass`');
        }
        if (!arg2) {
            // invoked as decorator
            return function (componentClass) {
                return observer(arg1, componentClass);
            };
        } else {
            return inject.apply(null, arg1)(observer(arg2));
        }
    }
    var componentClass = arg1;

    if (componentClass.isMobxInjector === true) {
        console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'");
    }
    if (componentClass.__proto__ === __WEBPACK_IMPORTED_MODULE_1_react__["PureComponent"]) {
        console.warn("Mobx observer: You are using 'observer' on React.PureComponent. These two achieve two opposite goals and should not be used together");
    }

    // Stateless function component:
    // If it is function but doesn't seem to be a react class constructor,
    // wrap it to a react class automatically
    if (typeof componentClass === "function" && (!componentClass.prototype || !componentClass.prototype.render) && !componentClass.isReactClass && !__WEBPACK_IMPORTED_MODULE_1_react__["Component"].isPrototypeOf(componentClass)) {
        var _class, _temp;

        var observerComponent = observer((_temp = _class = function (_Component) {
            inherits(_class, _Component);

            function _class() {
                classCallCheck(this, _class);
                return possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
            }

            createClass(_class, [{
                key: "render",
                value: function render() {
                    return componentClass.call(this, this.props, this.context);
                }
            }]);
            return _class;
        }(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]), _class.displayName = componentClass.displayName || componentClass.name, _class.contextTypes = componentClass.contextTypes, _class.propTypes = componentClass.propTypes, _class.defaultProps = componentClass.defaultProps, _temp));
        hoistNonReactStatics_cjs(observerComponent, componentClass);
        return observerComponent;
    }

    if (!componentClass) {
        throw new Error("Please pass a valid component to 'observer'");
    }

    var target = componentClass.prototype || componentClass;
    mixinLifecycleEvents(target);
    componentClass.isMobXReactObserver = true;
    makeObservableProp(target, "props");
    makeObservableProp(target, "state");
    var baseRender = target.render;
    target.render = function () {
        return makeComponentReactive.call(this, baseRender);
    };
    return componentClass;
}

function mixinLifecycleEvents(target) {
    ["componentDidMount", "componentWillUnmount", "componentDidUpdate"].forEach(function (funcName) {
        patch(target, funcName);
    });
    if (!target.shouldComponentUpdate) {
        target.shouldComponentUpdate = reactiveMixin.shouldComponentUpdate;
    } else {
        if (target.shouldComponentUpdate !== reactiveMixin.shouldComponentUpdate) {
            // TODO: make throw in next major
            console.warn("Use `shouldComponentUpdate` in an `observer` based component breaks the behavior of `observer` and might lead to unexpected results. Manually implementing `sCU` should not be needed when using mobx-react.");
        }
    }
}

var Observer = observer(function (_ref) {
    var children = _ref.children,
        observerInject = _ref.inject,
        render = _ref.render;

    var component = children || render;
    if (typeof component === "undefined") {
        return null;
    }
    if (!observerInject) {
        return component();
    }
    // TODO: remove in next major
    console.warn("<Observer inject=.../> is no longer supported. Please use inject on the enclosing component instead");
    var InjectComponent = inject(observerInject)(component);
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(InjectComponent, null);
});

Observer.displayName = "Observer";

var ObserverPropsCheck = function ObserverPropsCheck(props, key, componentName, location, propFullName) {
    var extraKey = key === "children" ? "render" : "children";
    if (typeof props[key] === "function" && typeof props[extraKey] === "function") {
        return new Error("Invalid prop,do not use children and render in the same time in`" + componentName);
    }

    if (typeof props[key] === "function" || typeof props[extraKey] === "function") {
        return;
    }
    return new Error("Invalid prop `" + propFullName + "` of type `" + _typeof(props[key]) + "` supplied to" + " `" + componentName + "`, expected `function`.");
};

Observer.propTypes = {
    render: ObserverPropsCheck,
    children: ObserverPropsCheck
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component$$1) {
  var prototype = Component$$1.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component$$1.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component$$1;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component$$1.displayName || Component$$1.name;
    var newApiName =
      typeof Component$$1.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component$$1.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component$$1;
}

var _class;
var _temp;

var specialReactKeys = { children: true, key: true, ref: true };

var Provider = (_temp = _class = function (_Component) {
    inherits(Provider, _Component);

    function Provider(props, context) {
        classCallCheck(this, Provider);

        var _this = possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).call(this, props, context));

        _this.state = {};
        copyStores(props, _this.state);
        return _this;
    }

    createClass(Provider, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_1_react__["Children"].only(this.props.children);
        }
    }, {
        key: "getChildContext",
        value: function getChildContext() {
            var stores = {};
            // inherit stores
            copyStores(this.context.mobxStores, stores);
            // add own stores
            copyStores(this.props, stores);
            return {
                mobxStores: stores
            };
        }
    }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(nextProps, prevState) {
            if (!nextProps) return null;
            if (!prevState) return nextProps;

            // Maybe this warning is too aggressive?
            if (Object.keys(nextProps).filter(validStoreName).length !== Object.keys(prevState).filter(validStoreName).length) console.warn("MobX Provider: The set of provided stores has changed. Please avoid changing stores as the change might not propagate to all children");
            if (!nextProps.suppressChangedStoreWarning) for (var key in nextProps) {
                if (validStoreName(key) && prevState[key] !== nextProps[key]) console.warn("MobX Provider: Provided store '" + key + "' has changed. Please avoid replacing stores as the change might not propagate to all children");
            }return nextProps;
        }
    }]);
    return Provider;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]), _class.contextTypes = {
    mobxStores: objectOrObservableObject
}, _class.childContextTypes = {
    mobxStores: objectOrObservableObject.isRequired
}, _temp);


function copyStores(from, to) {
    if (!from) return;
    for (var key in from) {
        if (validStoreName(key)) to[key] = from[key];
    }
}

function validStoreName(key) {
    return !specialReactKeys[key] && key !== "suppressChangedStoreWarning";
}

// TODO: kill in next major
polyfill(Provider);

if (!__WEBPACK_IMPORTED_MODULE_1_react__["Component"]) throw new Error("mobx-react requires React to be available");
if (!__WEBPACK_IMPORTED_MODULE_0_mobx__["o" /* spy */]) throw new Error("mobx-react requires mobx to be available");

if (typeof __WEBPACK_IMPORTED_MODULE_2_react_dom__["unstable_batchedUpdates"] === "function") Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["g" /* configure */])({ reactionScheduler: __WEBPACK_IMPORTED_MODULE_2_react_dom__["unstable_batchedUpdates"] });else if (typeof unstable_batchedUpdates$1 === "function") Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["g" /* configure */])({ reactionScheduler: unstable_batchedUpdates$1 });

var onError = function onError(fn) {
    return errorsReporter.on(fn);
};

/* DevTool support */
// See: https://github.com/andykog/mobx-devtools/blob/d8976c24b8cb727ed59f9a0bc905a009df79e221/src/backend/installGlobalHook.js

if ((typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "undefined" ? "undefined" : _typeof(__MOBX_DEVTOOLS_GLOBAL_HOOK__)) === "object") {
    var mobx$1 = { spy: __WEBPACK_IMPORTED_MODULE_0_mobx__["o" /* spy */], extras: { getDebugName: __WEBPACK_IMPORTED_MODULE_0_mobx__["i" /* getDebugName */] } };
    var mobxReact = {
        renderReporter: renderReporter,
        componentByNodeRegistry: componentByNodeRegistry,
        componentByNodeRegistery: componentByNodeRegistry,
        trackComponents: trackComponents
    };
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobxReact(mobxReact, mobx$1);
}




/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dnd__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dnd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__card_view__ = __webpack_require__(71);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _dec,_class,_jsxFileName='/Users/wukai/learn/card-game/src/components/card.js';function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var cardSource={beginDrag:function beginDrag(card){console.log('begin drag: ');return{id:card.id,playCard:card.playCard};}};var Card=(_dec=Object(__WEBPACK_IMPORTED_MODULE_2_react_dnd__["DragSource"])(__WEBPACK_IMPORTED_MODULE_3__constants__["e" /* item_types */].card,cardSource,function(connect,monitor){return{connectDragSource:connect.dragSource(),isDragging:monitor.isDragging()};}),_dec(_class=function(_Component){_inherits(Card,_Component);function Card(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Card);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Card.__proto__||Object.getPrototypeOf(Card)).call.apply(_ref,[this].concat(args))),_this),_this.handleDoubleClick=function(){_this.props.playCard();},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Card,[{key:'render',value:function render(){var _props=this.props,connectDragSource=_props.connectDragSource,cardProps=_objectWithoutProperties(_props,['connectDragSource']);return connectDragSource&&connectDragSource(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:39},__self:this},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__card_view__["a" /* default */],Object.assign({},cardProps,{__source:{fileName:_jsxFileName,lineNumber:40},__self:this}))));}}]);return Card;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]))||_class);Card.propTypes={name:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,desc:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,attack:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,armor:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number};/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(222);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generator__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__canvas_base__ = __webpack_require__(75);


class RoughCanvas extends __WEBPACK_IMPORTED_MODULE_1__canvas_base__["a" /* RoughCanvasBase */] {
    constructor(canvas, config) {
        super(canvas);
        this.gen = new __WEBPACK_IMPORTED_MODULE_0__generator__["a" /* RoughGenerator */](config || null, this.canvas);
    }
    get generator() {
        return this.gen;
    }
    getDefaultOptions() {
        return this.gen.defaultOptions;
    }
    line(x1, y1, x2, y2, options) {
        const d = this.gen.line(x1, y1, x2, y2, options);
        this.draw(d);
        return d;
    }
    rectangle(x, y, width, height, options) {
        const d = this.gen.rectangle(x, y, width, height, options);
        this.draw(d);
        return d;
    }
    ellipse(x, y, width, height, options) {
        const d = this.gen.ellipse(x, y, width, height, options);
        this.draw(d);
        return d;
    }
    circle(x, y, diameter, options) {
        const d = this.gen.circle(x, y, diameter, options);
        this.draw(d);
        return d;
    }
    linearPath(points, options) {
        const d = this.gen.linearPath(points, options);
        this.draw(d);
        return d;
    }
    polygon(points, options) {
        const d = this.gen.polygon(points, options);
        this.draw(d);
        return d;
    }
    arc(x, y, width, height, start, stop, closed = false, options) {
        const d = this.gen.arc(x, y, width, height, start, stop, closed, options);
        this.draw(d);
        return d;
    }
    curve(points, options) {
        const d = this.gen.curve(points, options);
        this.draw(d);
        return d;
    }
    path(d, options) {
        const drawing = this.gen.path(d, options);
        this.draw(drawing);
        return drawing;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RoughCanvas;



/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createRenderer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__renderer__ = __webpack_require__(41);

const hasSelf = typeof self !== 'undefined';
const roughScript = hasSelf && self && self.document && self.document.currentScript && self.document.currentScript.src;
function createRenderer(config) {
    if (hasSelf && roughScript && self && self.workly && config.async && (!config.noWorker)) {
        const worklySource = config.worklyURL || 'https://cdn.jsdelivr.net/gh/pshihn/workly/dist/workly.min.js';
        if (worklySource) {
            const code = `importScripts('${worklySource}', '${roughScript}');\nworkly.expose(self.rough.createRenderer());`;
            const ourl = URL.createObjectURL(new Blob([code]));
            return self.workly.proxy(ourl);
        }
    }
    return new __WEBPACK_IMPORTED_MODULE_0__renderer__["a" /* RoughRenderer */]();
}


/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function isType(token, type) {
    return token.type === type;
}
const PARAMS = {
    A: 7,
    a: 7,
    C: 6,
    c: 6,
    H: 1,
    h: 1,
    L: 2,
    l: 2,
    M: 2,
    m: 2,
    Q: 4,
    q: 4,
    S: 4,
    s: 4,
    T: 4,
    t: 2,
    V: 1,
    v: 1,
    Z: 0,
    z: 0
};
class ParsedPath {
    constructor(d) {
        this.COMMAND = 0;
        this.NUMBER = 1;
        this.EOD = 2;
        this.segments = [];
        this.parseData(d);
        this.processPoints();
    }
    tokenize(d) {
        const tokens = new Array();
        while (d !== '') {
            if (d.match(/^([ \t\r\n,]+)/)) {
                d = d.substr(RegExp.$1.length);
            }
            else if (d.match(/^([aAcChHlLmMqQsStTvVzZ])/)) {
                tokens[tokens.length] = { type: this.COMMAND, text: RegExp.$1 };
                d = d.substr(RegExp.$1.length);
            }
            else if (d.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) {
                tokens[tokens.length] = { type: this.NUMBER, text: `${parseFloat(RegExp.$1)}` };
                d = d.substr(RegExp.$1.length);
            }
            else {
                console.error('Unrecognized segment command: ' + d);
                return [];
            }
        }
        tokens[tokens.length] = { type: this.EOD, text: '' };
        return tokens;
    }
    parseData(d) {
        const tokens = this.tokenize(d);
        let index = 0;
        let token = tokens[index];
        let mode = 'BOD';
        this.segments = new Array();
        while (!isType(token, this.EOD)) {
            let param_length;
            const params = new Array();
            if (mode === 'BOD') {
                if (token.text === 'M' || token.text === 'm') {
                    index++;
                    param_length = PARAMS[token.text];
                    mode = token.text;
                }
                else {
                    this.parseData('M0,0' + d);
                    return;
                }
            }
            else {
                if (isType(token, this.NUMBER)) {
                    param_length = PARAMS[mode];
                }
                else {
                    index++;
                    param_length = PARAMS[token.text];
                    mode = token.text;
                }
            }
            if ((index + param_length) < tokens.length) {
                for (let i = index; i < index + param_length; i++) {
                    const numbeToken = tokens[i];
                    if (isType(numbeToken, this.NUMBER)) {
                        params[params.length] = +numbeToken.text;
                    }
                    else {
                        console.error('Parameter type is not a number: ' + mode + ',' + numbeToken.text);
                        return;
                    }
                }
                if (typeof PARAMS[mode] === 'number') {
                    const segment = { key: mode, data: params };
                    this.segments.push(segment);
                    index += param_length;
                    token = tokens[index];
                    if (mode === 'M')
                        mode = 'L';
                    if (mode === 'm')
                        mode = 'l';
                }
                else {
                    console.error('Unsupported segment type: ' + mode);
                    return;
                }
            }
            else {
                console.error('Path data ended before all parameters were found');
            }
        }
    }
    get closed() {
        if (typeof this._closed === 'undefined') {
            this._closed = false;
            for (const s of this.segments) {
                if (s.key.toLowerCase() === 'z') {
                    this._closed = true;
                }
            }
        }
        return this._closed;
    }
    processPoints() {
        let first = null;
        let currentPoint = [0, 0];
        for (let i = 0; i < this.segments.length; i++) {
            const s = this.segments[i];
            switch (s.key) {
                case 'M':
                case 'L':
                case 'T':
                    s.point = [s.data[0], s.data[1]];
                    break;
                case 'm':
                case 'l':
                case 't':
                    s.point = [s.data[0] + currentPoint[0], s.data[1] + currentPoint[1]];
                    break;
                case 'H':
                    s.point = [s.data[0], currentPoint[1]];
                    break;
                case 'h':
                    s.point = [s.data[0] + currentPoint[0], currentPoint[1]];
                    break;
                case 'V':
                    s.point = [currentPoint[0], s.data[0]];
                    break;
                case 'v':
                    s.point = [currentPoint[0], s.data[0] + currentPoint[1]];
                    break;
                case 'z':
                case 'Z':
                    if (first) {
                        s.point = [first[0], first[1]];
                    }
                    break;
                case 'C':
                    s.point = [s.data[4], s.data[5]];
                    break;
                case 'c':
                    s.point = [s.data[4] + currentPoint[0], s.data[5] + currentPoint[1]];
                    break;
                case 'S':
                    s.point = [s.data[2], s.data[3]];
                    break;
                case 's':
                    s.point = [s.data[2] + currentPoint[0], s.data[3] + currentPoint[1]];
                    break;
                case 'Q':
                    s.point = [s.data[2], s.data[3]];
                    break;
                case 'q':
                    s.point = [s.data[2] + currentPoint[0], s.data[3] + currentPoint[1]];
                    break;
                case 'A':
                    s.point = [s.data[5], s.data[6]];
                    break;
                case 'a':
                    s.point = [s.data[5] + currentPoint[0], s.data[6] + currentPoint[1]];
                    break;
            }
            if (s.key === 'm' || s.key === 'M') {
                first = null;
            }
            if (s.point) {
                currentPoint = s.point;
                if (!first) {
                    first = s.point;
                }
            }
            if (s.key === 'z' || s.key === 'Z') {
                first = null;
            }
        }
    }
}
class RoughPath {
    constructor(d) {
        this._position = [0, 0];
        this._first = null;
        this.bezierReflectionPoint = null;
        this.quadReflectionPoint = null;
        this.parsed = new ParsedPath(d);
    }
    get segments() {
        return this.parsed.segments;
    }
    get closed() {
        return this.parsed.closed;
    }
    get linearPoints() {
        if (!this._linearPoints) {
            const lp = [];
            let points = [];
            for (const s of this.parsed.segments) {
                const key = s.key.toLowerCase();
                if (key === 'm' || key === 'z') {
                    if (points.length) {
                        lp.push(points);
                        points = [];
                    }
                    if (key === 'z') {
                        continue;
                    }
                }
                if (s.point) {
                    points.push(s.point);
                }
            }
            if (points.length) {
                lp.push(points);
                points = [];
            }
            this._linearPoints = lp;
        }
        return this._linearPoints;
    }
    get first() {
        return this._first;
    }
    set first(v) {
        this._first = v;
    }
    setPosition(x, y) {
        this._position = [x, y];
        if (!this._first) {
            this._first = [x, y];
        }
    }
    get position() {
        return this._position;
    }
    get x() {
        return this._position[0];
    }
    get y() {
        return this._position[1];
    }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = RoughPath;

// Algorithm as described in https://www.w3.org/TR/SVG/implnote.html
// Code adapted from nsSVGPathDataParser.cpp in Mozilla 
// https://hg.mozilla.org/mozilla-central/file/17156fbebbc8/content/svg/content/src/nsSVGPathDataParser.cpp#l887
class RoughArcConverter {
    constructor(from, to, radii, angle, largeArcFlag, sweepFlag) {
        this._segIndex = 0;
        this._numSegs = 0;
        this._rx = 0;
        this._ry = 0;
        this._sinPhi = 0;
        this._cosPhi = 0;
        this._C = [0, 0];
        this._theta = 0;
        this._delta = 0;
        this._T = 0;
        this._from = from;
        if (from[0] === to[0] && from[1] === to[1]) {
            return;
        }
        const radPerDeg = Math.PI / 180;
        this._rx = Math.abs(radii[0]);
        this._ry = Math.abs(radii[1]);
        this._sinPhi = Math.sin(angle * radPerDeg);
        this._cosPhi = Math.cos(angle * radPerDeg);
        const x1dash = this._cosPhi * (from[0] - to[0]) / 2.0 + this._sinPhi * (from[1] - to[1]) / 2.0;
        const y1dash = -this._sinPhi * (from[0] - to[0]) / 2.0 + this._cosPhi * (from[1] - to[1]) / 2.0;
        let root = 0;
        const numerator = this._rx * this._rx * this._ry * this._ry - this._rx * this._rx * y1dash * y1dash - this._ry * this._ry * x1dash * x1dash;
        if (numerator < 0) {
            const s = Math.sqrt(1 - (numerator / (this._rx * this._rx * this._ry * this._ry)));
            this._rx = this._rx * s;
            this._ry = this._ry * s;
            root = 0;
        }
        else {
            root = (largeArcFlag === sweepFlag ? -1.0 : 1.0) *
                Math.sqrt(numerator / (this._rx * this._rx * y1dash * y1dash + this._ry * this._ry * x1dash * x1dash));
        }
        const cxdash = root * this._rx * y1dash / this._ry;
        const cydash = -root * this._ry * x1dash / this._rx;
        this._C = [0, 0];
        this._C[0] = this._cosPhi * cxdash - this._sinPhi * cydash + (from[0] + to[0]) / 2.0;
        this._C[1] = this._sinPhi * cxdash + this._cosPhi * cydash + (from[1] + to[1]) / 2.0;
        this._theta = this.calculateVectorAngle(1.0, 0.0, (x1dash - cxdash) / this._rx, (y1dash - cydash) / this._ry);
        let dtheta = this.calculateVectorAngle((x1dash - cxdash) / this._rx, (y1dash - cydash) / this._ry, (-x1dash - cxdash) / this._rx, (-y1dash - cydash) / this._ry);
        if ((!sweepFlag) && (dtheta > 0)) {
            dtheta -= 2 * Math.PI;
        }
        else if (sweepFlag && (dtheta < 0)) {
            dtheta += 2 * Math.PI;
        }
        this._numSegs = Math.ceil(Math.abs(dtheta / (Math.PI / 2)));
        this._delta = dtheta / this._numSegs;
        this._T = (8 / 3) * Math.sin(this._delta / 4) * Math.sin(this._delta / 4) / Math.sin(this._delta / 2);
    }
    getNextSegment() {
        if (this._segIndex === this._numSegs) {
            return null;
        }
        const cosTheta1 = Math.cos(this._theta);
        const sinTheta1 = Math.sin(this._theta);
        const theta2 = this._theta + this._delta;
        const cosTheta2 = Math.cos(theta2);
        const sinTheta2 = Math.sin(theta2);
        const to = [
            this._cosPhi * this._rx * cosTheta2 - this._sinPhi * this._ry * sinTheta2 + this._C[0],
            this._sinPhi * this._rx * cosTheta2 + this._cosPhi * this._ry * sinTheta2 + this._C[1]
        ];
        const cp1 = [
            this._from[0] + this._T * (-this._cosPhi * this._rx * sinTheta1 - this._sinPhi * this._ry * cosTheta1),
            this._from[1] + this._T * (-this._sinPhi * this._rx * sinTheta1 + this._cosPhi * this._ry * cosTheta1)
        ];
        const cp2 = [
            to[0] + this._T * (this._cosPhi * this._rx * sinTheta2 + this._sinPhi * this._ry * cosTheta2),
            to[1] + this._T * (this._sinPhi * this._rx * sinTheta2 - this._cosPhi * this._ry * cosTheta2)
        ];
        this._theta = theta2;
        this._from = [to[0], to[1]];
        this._segIndex++;
        return {
            cp1: cp1,
            cp2: cp2,
            to: to
        };
    }
    calculateVectorAngle(ux, uy, vx, vy) {
        const ta = Math.atan2(uy, ux);
        const tb = Math.atan2(vy, vx);
        if (tb >= ta)
            return tb - ta;
        return 2 * Math.PI - (ta - tb);
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = RoughArcConverter;

class PathFitter {
    constructor(sets, closed) {
        this.sets = sets;
        this.closed = closed;
    }
    fit(simplification) {
        const outSets = [];
        for (const set of this.sets) {
            const length = set.length;
            let estLength = Math.floor(simplification * length);
            if (estLength < 5) {
                if (length <= 5) {
                    continue;
                }
                estLength = 5;
            }
            outSets.push(this.reduce(set, estLength));
        }
        let d = '';
        for (const set of outSets) {
            for (let i = 0; i < set.length; i++) {
                const point = set[i];
                if (i === 0) {
                    d += 'M' + point[0] + ',' + point[1];
                }
                else {
                    d += 'L' + point[0] + ',' + point[1];
                }
            }
            if (this.closed) {
                d += 'z ';
            }
        }
        return d;
    }
    distance(p1, p2) {
        return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
    }
    reduce(set, count) {
        if (set.length <= count) {
            return set;
        }
        const points = set.slice(0);
        while (points.length > count) {
            const areas = [];
            let minArea = -1;
            let minIndex = -1;
            for (let i = 1; i < (points.length - 1); i++) {
                const a = this.distance(points[i - 1], points[i]);
                const b = this.distance(points[i], points[i + 1]);
                const c = this.distance(points[i - 1], points[i + 1]);
                const s = (a + b + c) / 2.0;
                const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
                areas.push(area);
                if ((minArea < 0) || (area < minArea)) {
                    minArea = area;
                    minIndex = i;
                }
            }
            if (minIndex > 0) {
                points.splice(minIndex, 1);
            }
            else {
                break;
            }
        }
        return points;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PathFitter;



/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getFiller;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hachure_filler__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__zigzag_filler__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hatch_filler__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dot_filler__ = __webpack_require__(231);




const fillers = {};
function getFiller(renderer, o) {
    let fillerName = o.fillStyle || 'hachure';
    if (!fillers[fillerName]) {
        switch (fillerName) {
            case 'zigzag':
                if (!fillers[fillerName]) {
                    fillers[fillerName] = new __WEBPACK_IMPORTED_MODULE_1__zigzag_filler__["a" /* ZigZagFiller */](renderer);
                }
                break;
            case 'cross-hatch':
                if (!fillers[fillerName]) {
                    fillers[fillerName] = new __WEBPACK_IMPORTED_MODULE_2__hatch_filler__["a" /* HatchFiller */](renderer);
                }
                break;
            case 'dots':
                if (!fillers[fillerName]) {
                    fillers[fillerName] = new __WEBPACK_IMPORTED_MODULE_3__dot_filler__["a" /* DotFiller */](renderer);
                }
                break;
            case 'hachure':
            default:
                fillerName = 'hachure';
                if (!fillers[fillerName]) {
                    fillers[fillerName] = new __WEBPACK_IMPORTED_MODULE_0__hachure_filler__["a" /* HachureFiller */](renderer);
                }
                break;
        }
    }
    return fillers[fillerName];
}


/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geometry__ = __webpack_require__(74);

class HachureIterator {
    constructor(top, bottom, left, right, gap, sinAngle, cosAngle, tanAngle) {
        this.deltaX = 0;
        this.hGap = 0;
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
        this.gap = gap;
        this.sinAngle = sinAngle;
        this.tanAngle = tanAngle;
        if (Math.abs(sinAngle) < 0.0001) {
            this.pos = left + gap;
        }
        else if (Math.abs(sinAngle) > 0.9999) {
            this.pos = top + gap;
        }
        else {
            this.deltaX = (bottom - top) * Math.abs(tanAngle);
            this.pos = left - Math.abs(this.deltaX);
            this.hGap = Math.abs(gap / cosAngle);
            this.sLeft = new __WEBPACK_IMPORTED_MODULE_0__geometry__["a" /* Segment */]([left, bottom], [left, top]);
            this.sRight = new __WEBPACK_IMPORTED_MODULE_0__geometry__["a" /* Segment */]([right, bottom], [right, top]);
        }
    }
    nextLine() {
        if (Math.abs(this.sinAngle) < 0.0001) {
            if (this.pos < this.right) {
                const line = [this.pos, this.top, this.pos, this.bottom];
                this.pos += this.gap;
                return line;
            }
        }
        else if (Math.abs(this.sinAngle) > 0.9999) {
            if (this.pos < this.bottom) {
                const line = [this.left, this.pos, this.right, this.pos];
                this.pos += this.gap;
                return line;
            }
        }
        else {
            let xLower = this.pos - this.deltaX / 2;
            let xUpper = this.pos + this.deltaX / 2;
            let yLower = this.bottom;
            let yUpper = this.top;
            if (this.pos < (this.right + this.deltaX)) {
                while (((xLower < this.left) && (xUpper < this.left)) || ((xLower > this.right) && (xUpper > this.right))) {
                    this.pos += this.hGap;
                    xLower = this.pos - this.deltaX / 2;
                    xUpper = this.pos + this.deltaX / 2;
                    if (this.pos > (this.right + this.deltaX)) {
                        return null;
                    }
                }
                const s = new __WEBPACK_IMPORTED_MODULE_0__geometry__["a" /* Segment */]([xLower, yLower], [xUpper, yUpper]);
                if (this.sLeft && s.intersects(this.sLeft)) {
                    xLower = s.xi;
                    yLower = s.yi;
                }
                if (this.sRight && s.intersects(this.sRight)) {
                    xUpper = s.xi;
                    yUpper = s.yi;
                }
                if (this.tanAngle > 0) {
                    xLower = this.right - (xLower - this.left);
                    xUpper = this.right - (xUpper - this.left);
                }
                const line = [xLower, yLower, xUpper, yUpper];
                this.pos += this.hGap;
                return line;
            }
        }
        return null;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HachureIterator;



/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hachure_filler__ = __webpack_require__(42);

class ZigZagFiller extends __WEBPACK_IMPORTED_MODULE_0__hachure_filler__["a" /* HachureFiller */] {
    fillPolygon(points, o) {
        return this._fillPolygon(points, o, true);
    }
    fillEllipse(cx, cy, width, height, o) {
        return this._fillEllipse(cx, cy, width, height, o, true);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ZigZagFiller;



/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hachure_filler__ = __webpack_require__(42);

class HatchFiller extends __WEBPACK_IMPORTED_MODULE_0__hachure_filler__["a" /* HachureFiller */] {
    fillPolygon(points, o) {
        const set = this._fillPolygon(points, o);
        const o2 = Object.assign({}, o, { hachureAngle: o.hachureAngle + 90 });
        const set2 = this._fillPolygon(points, o2);
        set.ops = set.ops.concat(set2.ops);
        return set;
    }
    fillEllipse(cx, cy, width, height, o) {
        const set = this._fillEllipse(cx, cy, width, height, o);
        const o2 = Object.assign({}, o, { hachureAngle: o.hachureAngle + 90 });
        const set2 = this._fillEllipse(cx, cy, width, height, o2);
        set.ops = set.ops.concat(set2.ops);
        return set;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HatchFiller;



/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filler_utils__ = __webpack_require__(73);

class DotFiller {
    constructor(renderer) {
        this.renderer = renderer;
    }
    fillPolygon(points, o) {
        o = Object.assign({}, o, { curveStepCount: 4, hachureAngle: 0 });
        const lines = Object(__WEBPACK_IMPORTED_MODULE_0__filler_utils__["b" /* hachureLinesForPolygon */])(points, o);
        return this.dotsOnLines(lines, o);
    }
    fillEllipse(cx, cy, width, height, o) {
        o = Object.assign({}, o, { curveStepCount: 4, hachureAngle: 0 });
        const lines = Object(__WEBPACK_IMPORTED_MODULE_0__filler_utils__["a" /* hachureLinesForEllipse */])(cx, cy, width, height, o, this.renderer);
        return this.dotsOnLines(lines, o);
    }
    dotsOnLines(lines, o) {
        let ops = [];
        let gap = o.hachureGap;
        if (gap < 0) {
            gap = o.strokeWidth * 4;
        }
        gap = Math.max(gap, 0.1);
        let fweight = o.fillWeight;
        if (fweight < 0) {
            fweight = o.strokeWidth / 2;
        }
        for (const line of lines) {
            const length = Object(__WEBPACK_IMPORTED_MODULE_0__filler_utils__["c" /* lineLength */])(line);
            const dl = length / gap;
            const count = Math.ceil(dl) - 1;
            const alpha = Math.atan((line[1][1] - line[0][1]) / (line[1][0] - line[0][0]));
            for (let i = 0; i < count; i++) {
                const l = gap * (i + 1);
                const dy = l * Math.sin(alpha);
                const dx = l * Math.cos(alpha);
                const c = [line[0][0] - dx, line[0][1] + dy];
                const cx = this.renderer.getOffset(c[0] - gap / 4, c[0] + gap / 4, o);
                const cy = this.renderer.getOffset(c[1] - gap / 4, c[1] + gap / 4, o);
                const ellipse = this.renderer.ellipse(cx, cy, fweight, fweight, o);
                ops = ops.concat(ellipse.ops);
            }
        }
        return { type: 'fillSketch', ops };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DotFiller;



/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generator_async__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__canvas_base__ = __webpack_require__(75);


class RoughCanvasAsync extends __WEBPACK_IMPORTED_MODULE_1__canvas_base__["a" /* RoughCanvasBase */] {
    constructor(canvas, config) {
        super(canvas);
        this.genAsync = new __WEBPACK_IMPORTED_MODULE_0__generator_async__["a" /* RoughGeneratorAsync */](config || null, this.canvas);
    }
    get generator() {
        return this.genAsync;
    }
    getDefaultOptions() {
        return this.genAsync.defaultOptions;
    }
    async line(x1, y1, x2, y2, options) {
        const d = await this.genAsync.line(x1, y1, x2, y2, options);
        this.draw(d);
        return d;
    }
    async rectangle(x, y, width, height, options) {
        const d = await this.genAsync.rectangle(x, y, width, height, options);
        this.draw(d);
        return d;
    }
    async ellipse(x, y, width, height, options) {
        const d = await this.genAsync.ellipse(x, y, width, height, options);
        this.draw(d);
        return d;
    }
    async circle(x, y, diameter, options) {
        const d = await this.genAsync.circle(x, y, diameter, options);
        this.draw(d);
        return d;
    }
    async linearPath(points, options) {
        const d = await this.genAsync.linearPath(points, options);
        this.draw(d);
        return d;
    }
    async polygon(points, options) {
        const d = await this.genAsync.polygon(points, options);
        this.draw(d);
        return d;
    }
    async arc(x, y, width, height, start, stop, closed = false, options) {
        const d = await this.genAsync.arc(x, y, width, height, start, stop, closed, options);
        this.draw(d);
        return d;
    }
    async curve(points, options) {
        const d = await this.genAsync.curve(points, options);
        this.draw(d);
        return d;
    }
    async path(d, options) {
        const drawing = await this.genAsync.path(d, options);
        this.draw(drawing);
        return drawing;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RoughCanvasAsync;



/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generator__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__svg_base__ = __webpack_require__(76);


class RoughSVG extends __WEBPACK_IMPORTED_MODULE_1__svg_base__["a" /* RoughSVGBase */] {
    constructor(svg, config) {
        super(svg);
        this.gen = new __WEBPACK_IMPORTED_MODULE_0__generator__["a" /* RoughGenerator */](config || null, this.svg);
    }
    get generator() {
        return this.gen;
    }
    getDefaultOptions() {
        return this.gen.defaultOptions;
    }
    opsToPath(drawing) {
        return this.gen.opsToPath(drawing);
    }
    line(x1, y1, x2, y2, options) {
        const d = this.gen.line(x1, y1, x2, y2, options);
        return this.draw(d);
    }
    rectangle(x, y, width, height, options) {
        const d = this.gen.rectangle(x, y, width, height, options);
        return this.draw(d);
    }
    ellipse(x, y, width, height, options) {
        const d = this.gen.ellipse(x, y, width, height, options);
        return this.draw(d);
    }
    circle(x, y, diameter, options) {
        const d = this.gen.circle(x, y, diameter, options);
        return this.draw(d);
    }
    linearPath(points, options) {
        const d = this.gen.linearPath(points, options);
        return this.draw(d);
    }
    polygon(points, options) {
        const d = this.gen.polygon(points, options);
        return this.draw(d);
    }
    arc(x, y, width, height, start, stop, closed = false, options) {
        const d = this.gen.arc(x, y, width, height, start, stop, closed, options);
        return this.draw(d);
    }
    curve(points, options) {
        const d = this.gen.curve(points, options);
        return this.draw(d);
    }
    path(d, options) {
        const drawing = this.gen.path(d, options);
        return this.draw(drawing);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RoughSVG;



/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generator_async__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__svg_base__ = __webpack_require__(76);


class RoughSVGAsync extends __WEBPACK_IMPORTED_MODULE_1__svg_base__["a" /* RoughSVGBase */] {
    constructor(svg, config) {
        super(svg);
        this.genAsync = new __WEBPACK_IMPORTED_MODULE_0__generator_async__["a" /* RoughGeneratorAsync */](config || null, this.svg);
    }
    get generator() {
        return this.genAsync;
    }
    getDefaultOptions() {
        return this.genAsync.defaultOptions;
    }
    opsToPath(drawing) {
        return this.genAsync.opsToPath(drawing);
    }
    async line(x1, y1, x2, y2, options) {
        const d = await this.genAsync.line(x1, y1, x2, y2, options);
        return this.draw(d);
    }
    async rectangle(x, y, width, height, options) {
        const d = await this.genAsync.rectangle(x, y, width, height, options);
        return this.draw(d);
    }
    async ellipse(x, y, width, height, options) {
        const d = await this.genAsync.ellipse(x, y, width, height, options);
        return this.draw(d);
    }
    async circle(x, y, diameter, options) {
        const d = await this.genAsync.circle(x, y, diameter, options);
        return this.draw(d);
    }
    async linearPath(points, options) {
        const d = await this.genAsync.linearPath(points, options);
        return this.draw(d);
    }
    async polygon(points, options) {
        const d = await this.genAsync.polygon(points, options);
        return this.draw(d);
    }
    async arc(x, y, width, height, start, stop, closed = false, options) {
        const d = await this.genAsync.arc(x, y, width, height, start, stop, closed, options);
        return this.draw(d);
    }
    async curve(points, options) {
        const d = await this.genAsync.curve(points, options);
        return this.draw(d);
    }
    async path(d, options) {
        const drawing = await this.genAsync.path(d, options);
        return this.draw(drawing);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RoughSVGAsync;



/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(3);
var _jsxFileName='/Users/wukai/learn/card-game/src/components/card-info.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(['\n  width: 120%;\n  height: 120%;\n  padding-top: 5px;\n  position: absolute;\n  top: 0%;\n  left: 115%;\n  background-color: #fff;\n  border: 1px solid #999;\n  box-shadow: 2px 2px 2px #aaa;\n  border-radius: 5px;\n  z-index: 10;\n'],['\n  width: 120%;\n  height: 120%;\n  padding-top: 5px;\n  position: absolute;\n  top: 0%;\n  left: 115%;\n  background-color: #fff;\n  border: 1px solid #999;\n  box-shadow: 2px 2px 2px #aaa;\n  border-radius: 5px;\n  z-index: 10;\n']);function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 * 当用户 hover 在卡牌上时，显示额外的描述信息
 */var CardDesc=function(_React$Component){_inherits(CardDesc,_React$Component);function CardDesc(){_classCallCheck(this,CardDesc);return _possibleConstructorReturn(this,(CardDesc.__proto__||Object.getPrototypeOf(CardDesc)).apply(this,arguments));}_createClass(CardDesc,[{key:'render',value:function render(){var info=this.props.info;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Wrapper,{__source:{fileName:_jsxFileName,lineNumber:14},__self:this},info);}}]);return CardDesc;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);CardDesc.propTypes={info:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired};var Wrapper=__WEBPACK_IMPORTED_MODULE_2_styled_components__["a" /* default */].div(_templateObject);/* harmony default export */ __webpack_exports__["a"] = (CardDesc);

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_roughjs__ = __webpack_require__(26);
var _jsxFileName='/Users/wukai/learn/card-game/src/components/hero.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(['\n  width: 120px;\n  height: 120px;\n  /* border: 2px solid #aaa; */\n  /* border-radius: 5px; */\n  font-size: 12px;\n  text-align: left;\n  padding: 5px;\n  position: relative;\n\n  .hero-border {\n    width: 120%;\n    height: 120%;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .avatar {\n    font-size: 32px;\n    margin: 5px;\n    text-align: center;\n  }\n'],['\n  width: 120px;\n  height: 120px;\n  /* border: 2px solid #aaa; */\n  /* border-radius: 5px; */\n  font-size: 12px;\n  text-align: left;\n  padding: 5px;\n  position: relative;\n\n  .hero-border {\n    width: 120%;\n    height: 120%;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .avatar {\n    font-size: 32px;\n    margin: 5px;\n    text-align: center;\n  }\n']);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}// import rough from './../../node_modules/roughjs/dist/rough.es5.min.js';
var Wrapper=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject);var Person=function(_Component){_inherits(Person,_Component);function Person(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Person);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Person.__proto__||Object.getPrototypeOf(Person)).call.apply(_ref,[this].concat(args))),_this),_this.setBorder=function(){var svg=_this.refs.heroBorder;var rc=__WEBPACK_IMPORTED_MODULE_2_roughjs__["a" /* default */].svg(svg);var strokeColor='#333 ';var node=rc.rectangle(0,0,130,130,{stroke:strokeColor,strokeWidth:3,roughness:2.5});svg.appendChild(node);},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Person,[{key:'componentDidMount',value:function componentDidMount(){this.setBorder();}},{key:'render',value:function render(){var _props=this.props,life=_props.life,maxLife=_props.maxLife,armor=_props.armor;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Wrapper,{className:this.props.className,__source:{fileName:_jsxFileName,lineNumber:58},__self:this},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg',{className:'hero-border',ref:'heroBorder',__source:{fileName:_jsxFileName,lineNumber:59},__self:this}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',{className:'avatar',__source:{fileName:_jsxFileName,lineNumber:60},__self:this},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{__source:{fileName:_jsxFileName,lineNumber:62},__self:this},'\uD83D\uDC12')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',{__source:{fileName:_jsxFileName,lineNumber:64},__self:this},'\u751F\u547D\u503C\uFF1A',life+' / '+maxLife),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',{__source:{fileName:_jsxFileName,lineNumber:65},__self:this},'\u62A4\u7532\uFF1A',''+(armor||0)));}}]);return Person;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/* harmony default export */ __webpack_exports__["a"] = (Person);

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_roughjs__ = __webpack_require__(26);
var _jsxFileName='/Users/wukai/learn/card-game/src/components/monster.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(['\n  width: 100px;\n  height: 100px;\n  /* border: 2px solid #aaa; */\n  /* border-radius: 5px; */\n  font-size: 12px;\n  text-align: center;\n  position: relative;\n\n  svg {\n    width: 120%;\n    height: 120%;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .avatar {\n    font-size: 32px;\n    margin: 5px;\n  }\n'],['\n  width: 100px;\n  height: 100px;\n  /* border: 2px solid #aaa; */\n  /* border-radius: 5px; */\n  font-size: 12px;\n  text-align: center;\n  position: relative;\n\n  svg {\n    width: 120%;\n    height: 120%;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .avatar {\n    font-size: 32px;\n    margin: 5px;\n  }\n']);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}// import rough from './../../node_modules/roughjs/dist/rough.es5.min.js';
var Wrapper=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject);var Monster=function(_Component){_inherits(Monster,_Component);function Monster(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Monster);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Monster.__proto__||Object.getPrototypeOf(Monster)).call.apply(_ref,[this].concat(args))),_this),_this.setBorder=function(){var svg=_this.refs.monsterBorder;var rc=__WEBPACK_IMPORTED_MODULE_3_roughjs__["a" /* default */].svg(svg);var strokeColor='#000';var node=rc.rectangle(0,0,110,110,{stroke:strokeColor,strokeWidth:3,roughness:2});svg.appendChild(node);},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Monster,[{key:'componentDidMount',value:function componentDidMount(){this.setBorder();}},{key:'render',value:function render(){var _props=this.props,life=_props.life,armor=_props.armor;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Wrapper,{className:this.props.className,__source:{fileName:_jsxFileName,lineNumber:57},__self:this},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('svg',{ref:'monsterBorder',__source:{fileName:_jsxFileName,lineNumber:58},__self:this}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',{className:'avatar',__source:{fileName:_jsxFileName,lineNumber:59},__self:this},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{__source:{fileName:_jsxFileName,lineNumber:61},__self:this},'\uD83D\uDC79')),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',{__source:{fileName:_jsxFileName,lineNumber:63},__self:this},'\u751F\u547D\u503C\uFF1A',''+life),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',{__source:{fileName:_jsxFileName,lineNumber:64},__self:this},'\u62A4\u7532\uFF1A',''+(armor||0)));}}]);return Monster;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);Monster.propTypes={life:__WEBPACK_IMPORTED_MODULE_2_prop_types__["PropTypes"].number.isRequired,armor:__WEBPACK_IMPORTED_MODULE_2_prop_types__["PropTypes"].number.isRequired};/* harmony default export */ __webpack_exports__["a"] = (Monster);

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(2);
var _jsxFileName='/Users/wukai/learn/card-game/src/components/effect.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(['\n  width: 100px;\n  height: 100px;\n  /* border: 1px solid #aaa; */\n  position: absolute;\n  box-shadow: 5px 5px 5px black;\n  text-align: center;\n  color: red;\n  z-index: 10;\n  background: #fff;\n  border: 1px solid #ddd;\n\n  &.target-monster {\n    right: 50px;\n    top: 20px;\n  }\n\n  &.target-hero {\n    right: 50px;\n    top: 400px;\n  }\n\n  .name {\n    font-size: 20px;\n    margin: 10px auto;\n  }\n\n  .value {\n    font-size: 30px;\n  }\n'],['\n  width: 100px;\n  height: 100px;\n  /* border: 1px solid #aaa; */\n  position: absolute;\n  box-shadow: 5px 5px 5px black;\n  text-align: center;\n  color: red;\n  z-index: 10;\n  background: #fff;\n  border: 1px solid #ddd;\n\n  &.target-monster {\n    right: 50px;\n    top: 20px;\n  }\n\n  &.target-hero {\n    right: 50px;\n    top: 400px;\n  }\n\n  .name {\n    font-size: 20px;\n    margin: 10px auto;\n  }\n\n  .value {\n    font-size: 30px;\n  }\n']);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var Wrapper=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject);var Effect=function(_Component){_inherits(Effect,_Component);function Effect(){_classCallCheck(this,Effect);return _possibleConstructorReturn(this,(Effect.__proto__||Object.getPrototypeOf(Effect)).apply(this,arguments));}_createClass(Effect,[{key:'render',// 根据效果的对象不同，分为两种类型，以此决定显示的位置
value:function render(){var _props=this.props,name=_props.name,value=_props.value,target=_props.target;var classes='target-'+target;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Wrapper,{className:classes,__source:{fileName:_jsxFileName,lineNumber:48},__self:this},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',{className:'name',__source:{fileName:_jsxFileName,lineNumber:49},__self:this},name),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',{className:'value',__source:{fileName:_jsxFileName,lineNumber:50},__self:this},value));}}]);return Effect;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);Effect.propTypes={name:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,value:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string]).isRequired,target:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf([__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* card_target */].hero,__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* card_target */].monster])};/* harmony default export */ __webpack_exports__["a"] = (Effect);

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(2);
var _jsxFileName='/Users/wukai/learn/card-game/src/components/game-over.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(['\n  width: 100vw;\n  height: 100vh;\n  z-index: 20;\n  background-color: rgba(0, 0, 0, 0.8);\n  position: fixed;\n  top: 0;\n  left: 0;\n  text-align: center;\n  color: greenyellow;\n  user-select: none;\n  padding-top: 40px;\n'],['\n  width: 100vw;\n  height: 100vh;\n  z-index: 20;\n  background-color: rgba(0, 0, 0, 0.8);\n  position: fixed;\n  top: 0;\n  left: 0;\n  text-align: center;\n  color: greenyellow;\n  user-select: none;\n  padding-top: 40px;\n']);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var Wrapper=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject);var GameOver=function(_Component){_inherits(GameOver,_Component);function GameOver(){_classCallCheck(this,GameOver);return _possibleConstructorReturn(this,(GameOver.__proto__||Object.getPrototypeOf(GameOver)).apply(this,arguments));}_createClass(GameOver,[{key:'render',value:function render(){var status=this.props.status;var title=status===__WEBPACK_IMPORTED_MODULE_3__constants__["f" /* run_status */].win?'你赢了':'你输了';return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Wrapper,{__source:{fileName:_jsxFileName,lineNumber:28},__self:this},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h1',{__source:{fileName:_jsxFileName,lineNumber:29},__self:this},title),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button',{onClick:function onClick(){return window.location.reload();},__source:{fileName:_jsxFileName,lineNumber:31},__self:this},'\u4E00\u952E\u9500\u6BC1'));}}]);return GameOver;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);GameOver.propTypes={title:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,status:__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf([__WEBPACK_IMPORTED_MODULE_3__constants__["f" /* run_status */].win,__WEBPACK_IMPORTED_MODULE_3__constants__["f" /* run_status */].lose]).isRequired};/* harmony default export */ __webpack_exports__["a"] = (GameOver);

/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Effect=function Effect(info){_classCallCheck(this,Effect);this.name=info.name;this.value=info.value;this.target=info.target||'enemy';};/* harmony default export */ __webpack_exports__["a"] = (Effect);

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dnd__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dnd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dnd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(2);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _dec,_class,_jsxFileName='/Users/wukai/learn/card-game/src/components/drop-area.js';function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
 * 定义可以出牌的区域
 */// import { toJS } from 'mobx';
var dropTarget={drop:function drop(props,monitor,component){var card=monitor.getItem();card.playCard();console.log('你出了一张牌');return{name:'card'};}};var DropArea=(_dec=Object(__WEBPACK_IMPORTED_MODULE_1_react_dnd__["DropTarget"])(__WEBPACK_IMPORTED_MODULE_2__constants__["e" /* item_types */].card,dropTarget,function(connect,monitor){return{connectDropTarget:connect.dropTarget(),canDrop:monitor.canDrop(),isOver:monitor.isOver()};}),_dec(_class=function(_React$Component){_inherits(DropArea,_React$Component);function DropArea(){_classCallCheck(this,DropArea);return _possibleConstructorReturn(this,(DropArea.__proto__||Object.getPrototypeOf(DropArea)).apply(this,arguments));}_createClass(DropArea,[{key:'render',value:function render(){// eslint-disable-next-line
var _props=this.props,connectDropTarget=_props.connectDropTarget,canDrop=_props.canDrop,isOver=_props.isOver;return connectDropTarget&&connectDropTarget(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:34},__self:this},this.props.children));}}]);return DropArea;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component))||_class);/* harmony default export */ __webpack_exports__["a"] = (DropArea);

/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(2);
var _jsxFileName='/Users/wukai/learn/card-game/src/components/history.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(['\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.95);\n  position: fixed;\n  top: 0;\n  left: 0;\n'],['\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.95);\n  position: fixed;\n  top: 0;\n  left: 0;\n']),_templateObject2=_taggedTemplateLiteral(['\n  border: 1px solid #000;\n  width: 800px;\n  height: 400px;\n  overflow-y: auto;\n  position: relative;\n  top: 100px;\n  left: 50%;\n  transform: translateX(-50%);\n  color: #fff;\n\n  .close {\n    font-size: 60px;\n    position: absolute;\n    right: 20%;\n    top: 10%;\n  }\n'],['\n  border: 1px solid #000;\n  width: 800px;\n  height: 400px;\n  overflow-y: auto;\n  position: relative;\n  top: 100px;\n  left: 50%;\n  transform: translateX(-50%);\n  color: #fff;\n\n  .close {\n    font-size: 60px;\n    position: absolute;\n    right: 20%;\n    top: 10%;\n  }\n']),_templateObject3=_taggedTemplateLiteral(['\n  white-space: pre;\n\n  .hero {\n    color: green;\n  }\n\n  .monster {\n    color: red;\n  }\n'],['\n  white-space: pre;\n\n  .hero {\n    color: green;\n  }\n\n  .monster {\n    color: red;\n  }\n']);function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var History=function(_React$Component){_inherits(History,_React$Component);function History(){_classCallCheck(this,History);return _possibleConstructorReturn(this,(History.__proto__||Object.getPrototypeOf(History)).apply(this,arguments));}_createClass(History,[{key:'generateLog',value:function generateLog(card){var sourceText='';var sourceClassName='';if(card.source===__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* card_source */].hero){sourceText='你';sourceClassName='hero';}else if(card.source===__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* card_source */].monster){sourceText='敌人';sourceClassName='monster';}var actionText='';if(card.attack>0){actionText='造成了 '+card.attack+' 点伤害';}else if(card.armor>0){actionText='增加了 '+card.armor+' 点护甲';}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Log,{key:card.id,__source:{fileName:_jsxFileName,lineNumber:25},__self:this},card.playedTime.toLocaleString().slice(11)+'：',__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'source '+sourceClassName,__source:{fileName:_jsxFileName,lineNumber:27},__self:this},''+sourceText),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{__source:{fileName:_jsxFileName,lineNumber:30},__self:this},' \u4F7F\u7528\u4E86 '+card.name+' \u724C\uFF0C'+actionText));}},{key:'render',value:function render(){var _this2=this;var _props=this.props,usedCards=_props.usedCards,closeHistory=_props.closeHistory;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Wrapper,{__source:{fileName:_jsxFileName,lineNumber:41},__self:this},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Inner,{__source:{fileName:_jsxFileName,lineNumber:42},__self:this},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:'close',onClick:closeHistory,__source:{fileName:_jsxFileName,lineNumber:43},__self:this},'\u2718'),[].concat(_toConsumableArray(usedCards)).reverse().map(function(card){return _this2.generateLog(card);})));}}]);return History;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);var Wrapper=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject);var Inner=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].section(_templateObject2);var Log=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].p(_templateObject3);/* harmony default export */ __webpack_exports__["a"] = (History);

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var config={show_game_info:true};/* harmony default export */ __webpack_exports__["a"] = (config);

/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(13);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _desc,_value,_class,_descriptor,_descriptor2;function _initDefineProp(target,property,descriptor,context){if(!descriptor)return;Object.defineProperty(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0});}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}function _initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');}var Hero=(_class=function(){function Hero(info){_classCallCheck(this,Hero);_initDefineProp(this,'life',_descriptor,this);_initDefineProp(this,'armor',_descriptor2,this);this.life=info.life;this.maxLife=info.maxLife||20;this.armor=info.armor;this.mana=info.mana;}// 受到伤害
_createClass(Hero,[{key:'receiveAttack',value:function receiveAttack(value){if(this.armor>=value){this.armor-=value;}else{this.life=this.life+this.armor-value;this.armor=0;}}},{key:'addArmor',value:function addArmor(value){this.armor+=value;}}]);return Hero;}(),(_descriptor=_applyDecoratedDescriptor(_class.prototype,'life',[__WEBPACK_IMPORTED_MODULE_0_mobx__["m" /* observable */]],{enumerable:true,initializer:null}),_descriptor2=_applyDecoratedDescriptor(_class.prototype,'armor',[__WEBPACK_IMPORTED_MODULE_0_mobx__["m" /* observable */]],{enumerable:true,initializer:null})),_class);/* harmony default export */ __webpack_exports__["a"] = (Hero);

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(13);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _desc,_value,_class,_descriptor,_descriptor2;function _initDefineProp(target,property,descriptor,context){if(!descriptor)return;Object.defineProperty(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0});}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}function _initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');}var Monster=(_class=function(){function Monster(info){_classCallCheck(this,Monster);_initDefineProp(this,'life',_descriptor,this);_initDefineProp(this,'armor',_descriptor2,this);this.life=info.life;this.armor=info.armor;this.mana=info.mana;}// 受到伤害
_createClass(Monster,[{key:'receiveAttack',value:function receiveAttack(value){if(this.armor>=value){this.armor-=value;}else{this.life=this.life+this.armor-value;this.armor=0;}}},{key:'addArmor',value:function addArmor(value){this.armor+=value;}}]);return Monster;}(),(_descriptor=_applyDecoratedDescriptor(_class.prototype,'life',[__WEBPACK_IMPORTED_MODULE_0_mobx__["m" /* observable */]],{enumerable:true,initializer:null}),_descriptor2=_applyDecoratedDescriptor(_class.prototype,'armor',[__WEBPACK_IMPORTED_MODULE_0_mobx__["m" /* observable */]],{enumerable:true,initializer:null})),_class);/* harmony default export */ __webpack_exports__["a"] = (Monster);

/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = register;
/* unused harmony export unregister */
// In production, we register a service worker to serve assets from local cache.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.
// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.
var isLocalhost=Boolean(window.location.hostname==='localhost'||// [::1] is the IPv6 localhost address.
window.location.hostname==='[::1]'||// 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function register(){if("production"==='production'&&'serviceWorker'in navigator){// The URL constructor is available in all browsers that support SW.
var publicUrl=new URL("/card-game",window.location);if(publicUrl.origin!==window.location.origin){// Our service worker won't work if PUBLIC_URL is on a different origin
// from what our page is served on. This might happen if a CDN is used to
// serve assets; see https://github.com/facebookincubator/create-react-app/issues/2374
return;}window.addEventListener('load',function(){var swUrl="/card-game"+'/service-worker.js';if(isLocalhost){// This is running on localhost. Lets check if a service worker still exists or not.
checkValidServiceWorker(swUrl);// Add some additional logging to localhost, pointing developers to the
// service worker/PWA documentation.
navigator.serviceWorker.ready.then(function(){console.log('This web app is being served cache-first by a service '+'worker. To learn more, visit https://goo.gl/SC7cgQ');});}else{// Is not local host. Just register service worker
registerValidSW(swUrl);}});}}function registerValidSW(swUrl){navigator.serviceWorker.register(swUrl).then(function(registration){registration.onupdatefound=function(){var installingWorker=registration.installing;installingWorker.onstatechange=function(){if(installingWorker.state==='installed'){if(navigator.serviceWorker.controller){// At this point, the old content will have been purged and
// the fresh content will have been added to the cache.
// It's the perfect time to display a "New content is
// available; please refresh." message in your web app.
console.log('New content is available; please refresh.');}else{// At this point, everything has been precached.
// It's the perfect time to display a
// "Content is cached for offline use." message.
console.log('Content is cached for offline use.');}}};};}).catch(function(error){console.error('Error during service worker registration:',error);});}function checkValidServiceWorker(swUrl){// Check if the service worker can be found. If it can't reload the page.
fetch(swUrl).then(function(response){// Ensure service worker exists, and that we really are getting a JS file.
if(response.status===404||response.headers.get('content-type').indexOf('javascript')===-1){// No service worker found. Probably a different app. Reload the page.
navigator.serviceWorker.ready.then(function(registration){registration.unregister().then(function(){window.location.reload();});});}else{// Service worker found. Proceed as normal.
registerValidSW(swUrl);}}).catch(function(){console.log('No internet connection found. App is running in offline mode.');});}function unregister(){if('serviceWorker'in navigator){navigator.serviceWorker.ready.then(function(registration){registration.unregister();});}}

/***/ }),
/* 247 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_card_model__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__seeds__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mobx__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_game_state_model__ = __webpack_require__(78);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _desc,_value,_class,_descriptor,_descriptor2,_descriptor3,_descriptor4,_descriptor5,_descriptor6,_descriptor7,_descriptor8;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _initDefineProp(target,property,descriptor,context){if(!descriptor)return;Object.defineProperty(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0});}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}function _initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');}/**
 * deck 指的是牌库中可用的牌
 */// import { toJS } from 'mobx';
function generateCardFromSeed(source,seed){var target=void 0;if(source===__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* card_source */].hero){target=seed.positive?__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* card_target */].hero:__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* card_target */].monster;}else{target=seed.positive?__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* card_target */].monster:__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* card_target */].hero;}var card=new __WEBPACK_IMPORTED_MODULE_0__model_card_model__["a" /* default */](_extends({},seed,{id:__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* uuid */](),target:target,source:source}));return card;}var Decks=(_class=function(){// 当前正在使用的卡牌
function Decks(){var _this=this;_classCallCheck(this,Decks);_initDefineProp(this,'heroDeck',_descriptor,this);_initDefineProp(this,'monsterDeck',_descriptor2,this);_initDefineProp(this,'heroHand',_descriptor3,this);_initDefineProp(this,'monsterHand',_descriptor4,this);_initDefineProp(this,'usedCards',_descriptor5,this);_initDefineProp(this,'currentCards',_descriptor6,this);_initDefineProp(this,'monsterUsedCardsCount',_descriptor7,this);_initDefineProp(this,'monsterTurnOver',_descriptor8,this);__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* shuffle */](__WEBPACK_IMPORTED_MODULE_1__seeds__["a" /* default */].heroSeeds);// 游戏开始时将牌组随机化
__WEBPACK_IMPORTED_MODULE_1__seeds__["a" /* default */].heroSeeds.forEach(function(seed){var card=generateCardFromSeed(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* card_source */].hero,seed);_this.heroDeck.push(card);});// 游戏开始时发若干张牌作为玩家的初始手牌
this.heroHand=this.heroDeck.splice(0,__WEBPACK_IMPORTED_MODULE_3__constants__["d" /* init_cards_num */].hero);__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* shuffle */](__WEBPACK_IMPORTED_MODULE_1__seeds__["a" /* default */].monsterSeeds);__WEBPACK_IMPORTED_MODULE_1__seeds__["a" /* default */].monsterSeeds.forEach(function(seed){var card=generateCardFromSeed(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* card_source */].monster,seed);_this.monsterDeck.push(card);});this.monsterHand=this.monsterDeck.splice(0,__WEBPACK_IMPORTED_MODULE_3__constants__["d" /* init_cards_num */].monster);}// 玩家出牌
// 所有使用过的卡牌
// 手牌
// 牌堆
_createClass(Decks,[{key:'removeHeroCard',value:function removeHeroCard(id){var card=this.heroHand.filter(function(card){return card.id===id;})[0];card.playedTime=new Date();this.usedCards.push(card);this.currentCards.push(card);this.heroHand=this.heroHand.filter(function(card){return card.id!==id;});}// 敌人出牌
},{key:'removeBossCard',value:function removeBossCard(id){// 当前处理方式为，敌人按顺序依次出牌
var card=this.monsterHand[0];card.playedTime=new Date();this.usedCards.push(card);this.currentCards.push(this.monsterHand[0]);this.monsterHand=this.monsterHand.filter(function(card){return card.id!==id;});}// 给玩家发牌
},{key:'dealCards',value:function dealCards(){var _heroHand;(_heroHand=this.heroHand).push.apply(_heroHand,_toConsumableArray(this.heroDeck.splice(0,2)));}// 给敌人发牌
},{key:'dealMonsterCards',value:function dealMonsterCards(){var _monsterHand;if(this.monsterDeck.length<2)return;(_monsterHand=this.monsterHand).push.apply(_monsterHand,_toConsumableArray(this.monsterDeck.splice(0,2)));}}]);return Decks;}(),(_descriptor=_applyDecoratedDescriptor(_class.prototype,'heroDeck',[__WEBPACK_IMPORTED_MODULE_4_mobx__["m" /* observable */]],{enumerable:true,initializer:function initializer(){return[];}}),_descriptor2=_applyDecoratedDescriptor(_class.prototype,'monsterDeck',[__WEBPACK_IMPORTED_MODULE_4_mobx__["m" /* observable */]],{enumerable:true,initializer:function initializer(){return[];}}),_descriptor3=_applyDecoratedDescriptor(_class.prototype,'heroHand',[__WEBPACK_IMPORTED_MODULE_4_mobx__["m" /* observable */]],{enumerable:true,initializer:function initializer(){return[];}}),_descriptor4=_applyDecoratedDescriptor(_class.prototype,'monsterHand',[__WEBPACK_IMPORTED_MODULE_4_mobx__["m" /* observable */]],{enumerable:true,initializer:function initializer(){return[];}}),_descriptor5=_applyDecoratedDescriptor(_class.prototype,'usedCards',[__WEBPACK_IMPORTED_MODULE_4_mobx__["m" /* observable */]],{enumerable:true,initializer:function initializer(){return[];}}),_descriptor6=_applyDecoratedDescriptor(_class.prototype,'currentCards',[__WEBPACK_IMPORTED_MODULE_4_mobx__["m" /* observable */]],{enumerable:true,initializer:function initializer(){return[];}}),_descriptor7=_applyDecoratedDescriptor(_class.prototype,'monsterUsedCardsCount',[__WEBPACK_IMPORTED_MODULE_4_mobx__["m" /* observable */]],{enumerable:true,initializer:function initializer(){return 0;}}),_descriptor8=_applyDecoratedDescriptor(_class.prototype,'monsterTurnOver',[__WEBPACK_IMPORTED_MODULE_4_mobx__["m" /* observable */]],{enumerable:true,initializer:function initializer(){return false;}}),_applyDecoratedDescriptor(_class.prototype,'removeHeroCard',[__WEBPACK_IMPORTED_MODULE_4_mobx__["d" /* action */]],Object.getOwnPropertyDescriptor(_class.prototype,'removeHeroCard'),_class.prototype),_applyDecoratedDescriptor(_class.prototype,'removeBossCard',[__WEBPACK_IMPORTED_MODULE_4_mobx__["d" /* action */]],Object.getOwnPropertyDescriptor(_class.prototype,'removeBossCard'),_class.prototype),_applyDecoratedDescriptor(_class.prototype,'dealCards',[__WEBPACK_IMPORTED_MODULE_4_mobx__["d" /* action */]],Object.getOwnPropertyDescriptor(_class.prototype,'dealCards'),_class.prototype),_applyDecoratedDescriptor(_class.prototype,'dealMonsterCards',[__WEBPACK_IMPORTED_MODULE_4_mobx__["d" /* action */]],Object.getOwnPropertyDescriptor(_class.prototype,'dealMonsterCards'),_class.prototype)),_class);var decks=new Decks();// reaction 监听对手回合是否已结束，就 delay 后切换到玩家回合
Object(__WEBPACK_IMPORTED_MODULE_4_mobx__["n" /* reaction */])(function(){return decks.monsterTurnOver;},function(isOver,reaction){if(isOver){__WEBPACK_IMPORTED_MODULE_5__model_game_state_model__["a" /* default */].currentTurn=__WEBPACK_IMPORTED_MODULE_3__constants__["c" /* game_turn */].hero;__WEBPACK_IMPORTED_MODULE_5__model_game_state_model__["a" /* default */].increaseTurnCount();decks.monsterTurnOver=false;decks.dealCards();decks.currentCards=[];}},{delay:4000});/* harmony default export */ __webpack_exports__["a"] = (decks);

/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var CardModel=function CardModel(info){_classCallCheck(this,CardModel);this.id=info.id;this.name=info.name;this.desc=info.desc;this.attack=info.attack;this.armor=info.armor;this.positive=info.positive;this.target=info.target;this.source=info.source;this.extraInfo=info.extraInfo;this.playedTime=null;};/* harmony default export */ __webpack_exports__["a"] = (CardModel);

/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__infos__ = __webpack_require__(251);
// 定义一组 seed，作为卡牌的属性，以此来生成 cardModel 
var seedAttack1={name:'攻击',desc:'🐓',attack:10,armor:0,positive:false,extraInfo:__WEBPACK_IMPORTED_MODULE_0__infos__["a" /* card_infos */].attack[0]};var seedAttack2={name:'攻击',desc:'⚔',attack:1,armor:0,positive:false,extraInfo:__WEBPACK_IMPORTED_MODULE_0__infos__["a" /* card_infos */].attack[1]};var seedDefend1={name:'防御',desc:'🛡',attack:0,armor:1,positive:true,extraInfo:__WEBPACK_IMPORTED_MODULE_0__infos__["a" /* card_infos */].defend[0]};var seedDefend2={name:'防御',desc:'🤺',attack:0,armor:5,positive:true,extraInfo:__WEBPACK_IMPORTED_MODULE_0__infos__["a" /* card_infos */].defend[0]};var config=[{seed:seedAttack1,num:3},{seed:seedAttack2,num:3},{seed:seedDefend1,num:2},{seed:seedDefend2,num:2}];// 一个配置对象，给定 seed 种类及数量，生成一个 seed 数组
function generateSeeds(config){var result=[];config.forEach(function(s){for(var i=0;i<s.num;i++){result.push(s.seed);}});return result;}var heroSeeds=generateSeeds(config);var monsterSeeds=generateSeeds(config);/* harmony default export */ __webpack_exports__["a"] = ({heroSeeds:heroSeeds,monsterSeeds:monsterSeeds});// export const heroSeeds = [seed0, seed1, seed2, seed3];
// export const monsterSeeds = [seed0, seed1, seed1];
// 游戏规则：
// 双方各有十张牌，每次各发两张牌
// 如果双方手中都已无牌，则比较双方的生命值决定结果
// TODO: 加入回复生命的卡牌

/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return card_infos; });
var card_infos={attack:['一张普通的攻击牌','还是一张普通的攻击牌'],defend:['一张普通的护甲牌']};

/***/ })
/******/ ]);
//# sourceMappingURL=main.7a3ca978.js.map