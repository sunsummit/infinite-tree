/*! infinite-tree v1.16.2 | (c) 2020 Cheton Wu <cheton@gmail.com> | MIT | https://github.com/cheton/infinite-tree */
var InfiniteTree =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function eventListener() {
      if (errorListener !== undefined) {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };
    var errorListener;

    // Adding an error listener is not optional because
    // if an error is thrown on an event emitter we cannot
    // guarantee that the actual event we are waiting will
    // be fired. The result could be a silent way to create
    // memory or file descriptor leaks, which is something
    // we should avoid.
    if (name !== 'error') {
      errorListener = function errorListener(err) {
        emitter.removeListener(name, eventListener);
        reject(err);
      };

      emitter.once('error', errorListener);
    }

    emitter.once(name, eventListener);
  });
}


/***/ }),
/* 1 */
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

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/* eslint no-restricted-syntax: 0 */
var extend = function extend(target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        sources[_key - 1] = arguments[_key];
    }

    if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
    }

    var output = Object(target);
    for (var index = 0; index < sources.length; index++) {
        var source = sources[index];
        if (source !== undefined && source !== null) {
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    output[key] = source[key];
                }
            }
        }
    }
    return output;
};

exports['default'] = extend;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extend = __webpack_require__(2);

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function () {
    function Node(node) {
        _classCallCheck(this, Node);

        this.id = null;
        this.parent = null;
        this.children = [];
        this.state = {};

        (0, _extend2['default'])(this, node);

        this.children = this.children || [];
    }
    // Returns a boolean value indicating whether a node is a descendant of a given node or not.
    // @param {object} node Specifies the node that may be contained by (a descendant of) a specified node.
    // @return {boolean} Returns true if a node is a descendant of a specified node, otherwise false. A descendant can be a child, grandchild, great-grandchild, and so on.


    Node.prototype.contains = function contains(node) {
        while (node instanceof Node && node !== this) {
            if (node.parent === this) {
                return true;
            }
            node = node.parent;
        }
        return false;
    };
    // Gets a child node at the specified index.
    // @param {number} The index of the child node.
    // @return {object} Returns an object that defines the node, null otherwise.


    Node.prototype.getChildAt = function getChildAt(index) {
        var node = null;
        if (this.children.length > 0 && index >= 0 && index < this.children.length) {
            node = this.children[index];
        }
        return node;
    };
    // Gets the child nodes.
    // @return {array} Returns an array of objects that define the nodes.


    Node.prototype.getChildren = function getChildren() {
        return this.children;
    };
    // Gets the first child node.
    // @return {object} Returns an object that defines the node, null otherwise.


    Node.prototype.getFirstChild = function getFirstChild() {
        var node = null;
        if (this.children.length > 0) {
            node = this.children[0];
        }
        return node;
    };
    // Gets the last child node.
    // @return {object} Returns an object that defines the node, null otherwise.


    Node.prototype.getLastChild = function getLastChild() {
        var node = null;
        if (this.children.length > 0) {
            node = this.children[this.children.length - 1];
        }
        return node;
    };
    // Gets the next sibling node.
    // @return {object} Returns an object that defines the node, null otherwise.


    Node.prototype.getNextSibling = function getNextSibling() {
        var node = null;
        if (this.parent) {
            var index = this.parent.children.indexOf(this);
            if (index >= 0 && index < this.parent.children.length - 1) {
                node = this.parent.children[index + 1];
            }
        }
        return node;
    };
    // Gets the parent node.
    // @return {object} Returns an object that defines the node, null otherwise.


    Node.prototype.getParent = function getParent() {
        return this.parent;
    };
    // Gets the previous sibling node.
    // @return {object} Returns an object that defines the node, null otherwise.


    Node.prototype.getPreviousSibling = function getPreviousSibling() {
        var node = null;
        if (this.parent) {
            var index = this.parent.children.indexOf(this);
            if (index > 0 && index < this.parent.children.length) {
                node = this.parent.children[index - 1];
            }
        }
        return node;
    };
    // Checks whether this node has children.
    // @return {boolean} Returns true if the node has children, false otherwise.


    Node.prototype.hasChildren = function hasChildren() {
        return this.children.length > 0;
    };
    // Checks whether this node is the last child of its parent.
    // @return {boolean} Returns true if the node is the last child of its parent, false otherwise.


    Node.prototype.isLastChild = function isLastChild() {
        var hasNextSibling = this.getNextSibling();
        return !hasNextSibling;
    };

    return Node;
}();

exports['default'] = Node;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var ensureArray = function ensureArray() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 0 || args[0] === undefined || args[0] === null) {
    return [];
  }

  if (args.length === 1) {
    return [].concat(args[0]);
  }

  return [].concat(args);
};

var _default = ensureArray;
exports["default"] = _default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeEventListener = exports.addEventListener = exports.stopPropagation = exports.preventDefault = exports.getElementStyle = void 0;

var getElementStyle = function getElementStyle(el, prop) {
  return window.getComputedStyle ? window.getComputedStyle(el)[prop] : el.currentStyle[prop];
};

exports.getElementStyle = getElementStyle;

var preventDefault = function preventDefault(e) {
  if (typeof e.preventDefault !== 'undefined') {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
};

exports.preventDefault = preventDefault;

var stopPropagation = function stopPropagation(e) {
  if (typeof e.stopPropagation !== 'undefined') {
    e.stopPropagation();
  } else {
    e.cancelBubble = true;
  }
}; // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Compatibility


exports.stopPropagation = stopPropagation;

var addEventListener = function addEventListener(target, type, listener) {
  if (target.addEventListener) {
    // Standard
    target.addEventListener(type, listener, false);
  } else if (target.attachEvent) {
    // IE8
    // In Internet Explorer versions before IE 9, you have to use attachEvent rather than the standard addEventListener.
    target.attachEvent('on' + type, listener);
  }
}; // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener


exports.addEventListener = addEventListener;

var removeEventListener = function removeEventListener(target, type, listener) {
  if (target.removeEventListener) {
    // Standard
    target.removeEventListener(type, listener, false);
  } else if (target.detachEvent) {
    // IE8
    // In Internet Explorer versions before IE 9, you have to use detachEvent rather than the standard removeEventListener.
    target.detachEvent('on' + type, listener);
  }
};

exports.removeEventListener = removeEventListener;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */



/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/;

/**
 * Module exports.
 * @public
 */

module.exports = escapeHtml;

/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = '&quot;';
        break;
      case 38: // &
        escape = '&amp;';
        break;
      case 39: // '
        escape = '&#39;';
        break;
      case 60: // <
        escape = '&lt;';
        break;
      case 62: // >
        escape = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index
    ? html + str.substring(lastIndex, index)
    : html;
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var InfiniteTree = __webpack_require__(8)["default"];

module.exports = InfiniteTree;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _events = _interopRequireDefault(__webpack_require__(0));

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _elementClass = _interopRequireDefault(__webpack_require__(9));

var _isDom = _interopRequireDefault(__webpack_require__(10));

var _flattree = __webpack_require__(13);

var _clusterize = _interopRequireDefault(__webpack_require__(15));

var _ensureArray = _interopRequireDefault(__webpack_require__(4));

var _extend = _interopRequireDefault(__webpack_require__(17));

var _utilities = __webpack_require__(18);

var _lookupTable = _interopRequireDefault(__webpack_require__(19));

var _renderer = __webpack_require__(20);

var _dom = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var noop = function noop() {};

var error = function error(format) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var argIndex = 0;
  var message = 'Error: ' + format.replace(/%s/g, function () {
    return args[argIndex++];
  });

  if (console && console.error) {
    console.error(message);
  }

  try {
    // This error was thrown as a convenience so that you can use this stack
    // to find the callsite that caused this error to fire.
    throw new Error(message);
  } catch (e) {// Ignore
  }
};

var ensureNodeInstance = function ensureNodeInstance(node) {
  if (!node) {
    // undefined or null
    return false;
  }

  if (!(node instanceof _flattree.Node)) {
    error('The node must be a Node object.');
    return false;
  }

  return true;
};

var createRootNode = function createRootNode(rootNode) {
  return (0, _extend["default"])(rootNode || new _flattree.Node(), {
    parent: null,
    children: [],
    state: {
      depth: -1,
      open: true,
      // always open
      path: '',
      prefixMask: '',
      total: 0
    }
  });
};

var InfiniteTree = /*#__PURE__*/function (_events$EventEmitter) {
  _inherits(InfiniteTree, _events$EventEmitter);

  var _super = _createSuper(InfiniteTree);

  // The following elements will have no effect in the stealth mode
  // Creates new InfiniteTree object.
  function InfiniteTree(el, options) {
    var _this;

    _classCallCheck(this, InfiniteTree);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "options", {
      autoOpen: false,
      droppable: false,
      shouldLoadNodes: null,
      loadNodes: null,
      rowRenderer: _renderer.defaultRowRenderer,
      selectable: true,
      shouldSelectNode: null,
      // When el is not specified, the tree will run in the stealth mode
      el: null,
      // The following options will have no effect in the stealth mode
      layout: 'div',
      noDataClass: 'infinite-tree-no-data',
      noDataText: 'No data',
      nodeIdAttr: 'data-id',
      togglerClass: 'infinite-tree-toggler',
      iconUrl: null
    });

    _defineProperty(_assertThisInitialized(_this), "state", {
      openNodes: [],
      rootNode: createRootNode(),
      selectedNode: null,
      checkNodes: []
    });

    _defineProperty(_assertThisInitialized(_this), "clusterize", null);

    _defineProperty(_assertThisInitialized(_this), "nodeTable", new _lookupTable["default"]());

    _defineProperty(_assertThisInitialized(_this), "nodes", []);

    _defineProperty(_assertThisInitialized(_this), "rows", []);

    _defineProperty(_assertThisInitialized(_this), "filtered", false);

    _defineProperty(_assertThisInitialized(_this), "scrollElement", null);

    _defineProperty(_assertThisInitialized(_this), "contentElement", null);

    _defineProperty(_assertThisInitialized(_this), "draggableTarget", null);

    _defineProperty(_assertThisInitialized(_this), "droppableTarget", null);

    _defineProperty(_assertThisInitialized(_this), "contentListener", {
      'click': function click(event) {
        event = event || window.event; // Wrap stopPropagation that allows click event handler to stop execution
        // by setting the cancelBubble property

        var stopPropagation = event.stopPropagation;

        event.stopPropagation = function () {
          // Setting the cancelBubble property in browsers that don't support it doesn't hurt.
          // Of course it doesn't actually cancel the bubbling, but the assignment itself is safe.
          event.cancelBubble = true;

          if (stopPropagation) {
            stopPropagation.call(event);
          }
        }; // Call setTimeout(fn, 0) to re-queues the execution of subsequent calls, it allows the
        // click event to bubble up to higher level event handlers before handling tree events.


        setTimeout(function () {
          // Stop execution if the cancelBubble property is set to true by higher level event handlers
          if (event.cancelBubble === true) {
            return;
          } // Emit a "click" event


          _this.emit('click', event); // Stop execution if the cancelBubble property is set to true after emitting the click event


          if (event.cancelBubble === true) {
            return;
          }

          var itemTarget = null;
          var clickToggler = false;

          if (event.target) {
            itemTarget = event.target !== event.currentTarget ? event.target : null;
          } else if (event.srcElement) {
            // IE8
            itemTarget = event.srcElement;
          }

          while (itemTarget && itemTarget.parentElement !== _this.contentElement) {
            if ((0, _elementClass["default"])(itemTarget).has(_this.options.togglerClass)) {
              clickToggler = true;
            }

            itemTarget = itemTarget.parentElement;
          }

          if (!itemTarget || itemTarget.hasAttribute('disabled')) {
            return;
          }

          var id = itemTarget.getAttribute(_this.options.nodeIdAttr);

          var node = _this.getNodeById(id);

          if (!node) {
            return;
          } // Click on the toggler to open/close a tree node


          if (clickToggler) {
            _this.toggleNode(node, {
              async: true
            });

            return;
          }

          _this.selectNode(node); // selectNode will re-render the tree

        }, 0);
      },
      'dblclick': function dblclick(event) {
        // Emit a "doubleClick" event
        _this.emit('doubleClick', event);
      },
      'keydown': function keydown(event) {
        // Emit a "keyDown" event
        _this.emit('keyDown', event);
      },
      'keyup': function keyup(event) {
        // Emit a "keyUp" event
        _this.emit('keyUp', event);
      },
      // https://developer.mozilla.org/en-US/docs/Web/Events/dragstart
      // The dragstart event is fired when the user starts dragging an element or text selection.
      'dragstart': function dragstart(event) {
        event = event || window.event;
        _this.draggableTarget = event.target || event.srcElement;
      },
      // https://developer.mozilla.org/en-US/docs/Web/Events/dragend
      // The dragend event is fired when a drag operation is being ended (by releasing a mouse button or hitting the escape key).
      'dragend': function dragend(event) {
        event = event || window.event;
        var _this$options$droppab = _this.options.droppable.hoverClass,
            hoverClass = _this$options$droppab === void 0 ? '' : _this$options$droppab; // Draggable

        _this.draggableTarget = null; // Droppable

        if (_this.droppableTarget) {
          (0, _elementClass["default"])(_this.droppableTarget).remove(hoverClass);
          _this.droppableTarget = null;
        }
      },
      // https://developer.mozilla.org/en-US/docs/Web/Events/dragenter
      // The dragenter event is fired when a dragged element or text selection enters a valid drop target.
      'dragenter': function dragenter(event) {
        event = event || window.event;
        var itemTarget = null;

        if (event.target) {
          itemTarget = event.target !== event.currentTarget ? event.target : null;
        } else if (event.srcElement) {
          // IE8
          itemTarget = event.srcElement;
        }

        while (itemTarget && itemTarget.parentElement !== _this.contentElement) {
          itemTarget = itemTarget.parentElement;
        }

        if (!itemTarget) {
          return;
        }

        if (_this.droppableTarget === itemTarget) {
          return;
        }

        var _this$options$droppab2 = _this.options.droppable,
            accept = _this$options$droppab2.accept,
            _this$options$droppab3 = _this$options$droppab2.hoverClass,
            hoverClass = _this$options$droppab3 === void 0 ? '' : _this$options$droppab3;
        (0, _elementClass["default"])(_this.droppableTarget).remove(hoverClass);
        _this.droppableTarget = null;
        var canDrop = true; // Defaults to true

        if (typeof accept === 'function') {
          var id = itemTarget.getAttribute(_this.options.nodeIdAttr);

          var node = _this.getNodeById(id);

          canDrop = !!accept.call(_assertThisInitialized(_this), event, {
            type: 'dragenter',
            draggableTarget: _this.draggableTarget,
            droppableTarget: itemTarget,
            node: node
          });
        }

        if (canDrop) {
          (0, _elementClass["default"])(itemTarget).add(hoverClass);
          _this.droppableTarget = itemTarget;
        }
      },
      // https://developer.mozilla.org/en-US/docs/Web/Events/dragover
      // The dragover event is fired when an element or text selection is being dragged over a valid drop target (every few hundred milliseconds).
      'dragover': function dragover(event) {
        event = event || window.event;
        (0, _dom.preventDefault)(event);
      },
      // https://developer.mozilla.org/en-US/docs/Web/Events/drop
      // The drop event is fired when an element or text selection is dropped on a valid drop target.
      'drop': function drop(event) {
        event = event || window.event; // prevent default action (open as link for some elements)

        (0, _dom.preventDefault)(event);

        if (!(_this.draggableTarget && _this.droppableTarget)) {
          return;
        }

        var _this$options$droppab4 = _this.options.droppable,
            accept = _this$options$droppab4.accept,
            drop = _this$options$droppab4.drop,
            _this$options$droppab5 = _this$options$droppab4.hoverClass,
            hoverClass = _this$options$droppab5 === void 0 ? '' : _this$options$droppab5;

        var id = _this.droppableTarget.getAttribute(_this.options.nodeIdAttr);

        var node = _this.getNodeById(id);

        var canDrop = true; // Defaults to true

        if (typeof accept === 'function') {
          canDrop = !!accept.call(_assertThisInitialized(_this), event, {
            type: 'drop',
            draggableTarget: _this.draggableTarget,
            droppableTarget: _this.droppableTarget,
            node: node
          });
        }

        if (canDrop && typeof drop === 'function') {
          drop.call(_assertThisInitialized(_this), event, {
            draggableTarget: _this.draggableTarget,
            droppableTarget: _this.droppableTarget,
            node: node
          });
        }

        (0, _elementClass["default"])(_this.droppableTarget).remove(hoverClass);
        _this.droppableTarget = null;
      }
    });

    if ((0, _isDom["default"])(el)) {
      options = _objectSpread(_objectSpread({}, options), {}, {
        el: el
      });
    } else if (el && _typeof(el) === 'object') {
      options = el;
    } // Assign options


    _this.options = _objectSpread(_objectSpread({}, _this.options), options);

    _this.create(); // Load tree data if it's provided


    if (_this.options.data) {
      _this.loadData(_this.options.data);
    }

    return _this;
  }

  _createClass(InfiniteTree, [{
    key: "create",
    value: function create() {
      var _this2 = this;

      if (this.options.el) {
        var tag = null;
        this.scrollElement = document.createElement('div');

        if (this.options.layout === 'table') {
          var tableElement = document.createElement('table');
          tableElement.className = (0, _classnames["default"])('infinite-tree', 'infinite-tree-table');
          var contentElement = document.createElement('tbody');
          tableElement.appendChild(contentElement);
          this.scrollElement.appendChild(tableElement);
          this.contentElement = contentElement; // The tag name for supporting elements

          tag = 'tr';
        } else {
          var _contentElement = document.createElement('div');

          this.scrollElement.appendChild(_contentElement);
          this.contentElement = _contentElement; // The tag name for supporting elements

          tag = 'div';
        }

        this.scrollElement.className = (0, _classnames["default"])('infinite-tree', 'infinite-tree-scroll');
        this.contentElement.className = (0, _classnames["default"])('infinite-tree', 'infinite-tree-content');
        this.options.el.appendChild(this.scrollElement);
        this.clusterize = new _clusterize["default"]({
          tag: tag,
          rows: [],
          scrollElement: this.scrollElement,
          contentElement: this.contentElement,
          emptyText: this.options.noDataText,
          emptyClass: this.options.noDataClass
        });
        this.clusterize.on('clusterWillChange', function () {
          _this2.emit('clusterWillChange');
        });
        this.clusterize.on('clusterDidChange', function () {
          _this2.emit('clusterDidChange');
        });
        (0, _dom.addEventListener)(this.contentElement, 'click', this.contentListener.click);
        (0, _dom.addEventListener)(this.contentElement, 'dblclick', this.contentListener.dblclick);
        (0, _dom.addEventListener)(this.contentElement, 'keydown', this.contentListener.keydown);
        (0, _dom.addEventListener)(this.contentElement, 'keyup', this.contentListener.keyup);

        if (this.options.droppable) {
          (0, _dom.addEventListener)(document, 'dragstart', this.contentListener.dragstart);
          (0, _dom.addEventListener)(document, 'dragend', this.contentListener.dragend);
          (0, _dom.addEventListener)(this.contentElement, 'dragenter', this.contentListener.dragenter);
          (0, _dom.addEventListener)(this.contentElement, 'dragleave', this.contentListener.dragleave);
          (0, _dom.addEventListener)(this.contentElement, 'dragover', this.contentListener.dragover);
          (0, _dom.addEventListener)(this.contentElement, 'drop', this.contentListener.drop);
        }
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.clear();

      if (this.options.el) {
        (0, _dom.removeEventListener)(this.contentElement, 'click', this.contentListener.click);
        (0, _dom.removeEventListener)(this.contentElement, 'dblclick', this.contentListener.dblclick);
        (0, _dom.removeEventListener)(this.contentElement, 'keydown', this.contentListener.keydown);
        (0, _dom.removeEventListener)(this.contentElement, 'keyup', this.contentListener.keyup);

        if (this.options.droppable) {
          (0, _dom.removeEventListener)(document, 'dragstart', this.contentListener.dragstart);
          (0, _dom.removeEventListener)(document, 'dragend', this.contentListener.dragend);
          (0, _dom.removeEventListener)(this.contentElement, 'dragenter', this.contentListener.dragenter);
          (0, _dom.removeEventListener)(this.contentElement, 'dragleave', this.contentListener.dragleave);
          (0, _dom.removeEventListener)(this.contentElement, 'dragover', this.contentListener.dragover);
          (0, _dom.removeEventListener)(this.contentElement, 'drop', this.contentListener.drop);
        }

        if (this.clusterize) {
          this.clusterize.destroy(true); // True to remove all data from the list

          this.clusterize = null;
        } // Remove all child nodes


        while (this.contentElement.firstChild) {
          this.contentElement.removeChild(this.contentElement.firstChild);
        }

        while (this.scrollElement.firstChild) {
          this.scrollElement.removeChild(this.scrollElement.firstChild);
        }

        var containerElement = this.options.el;

        while (containerElement.firstChild) {
          containerElement.removeChild(containerElement.firstChild);
        }

        this.contentElement = null;
        this.scrollElement = null;
      }
    } // Adds an array of new child nodes to a parent node at the specified index.
    // * If the parent is null or undefined, inserts new childs at the specified index in the top-level.
    // * If the parent has children, the method adds the new child to it at the specified index.
    // * If the parent does not have children, the method adds the new child to the parent.
    // * If the index value is greater than or equal to the number of children in the parent, the method adds the child at the end of the children.
    // @param {Array} newNodes An array of new child nodes.
    // @param {number} [index] The 0-based index of where to insert the child node.
    // @param {Node} parentNode The Node object that defines the parent node.
    // @return {boolean} Returns true on success, false otherwise.

  }, {
    key: "addChildNodes",
    value: function addChildNodes(newNodes, index, parentNode) {
      var _this3 = this;

      newNodes = [].concat(newNodes || []); // Ensure array

      if (newNodes.length === 0) {
        return false;
      }

      if (_typeof(index) === 'object') {
        // The 'object' type might be Node or null
        parentNode = index || this.state.rootNode; // Defaults to rootNode if not specified

        index = parentNode.children.length;
      } else {
        parentNode = parentNode || this.state.rootNode; // Defaults to rootNode if not specified
      }

      if (!ensureNodeInstance(parentNode)) {
        return false;
      }

      if (typeof index !== 'number') {
        index = parentNode.children.length;
      } // Assign parent


      newNodes.forEach(function (newNode) {
        newNode.parent = parentNode;
      }); // Insert new child node at the specified index

      parentNode.children.splice.apply(parentNode.children, [index, 0].concat(newNodes)); // Get the index of the first new node within the array of child nodes

      index = parentNode.children.indexOf(newNodes[0]);
      var deleteCount = parentNode.state.total;
      var nodes = (0, _flattree.flatten)(parentNode.children, {
        openNodes: this.state.openNodes,
        checkNodes: this.state.checkNodes
      });
      var rows = []; // Update rows

      rows.length = nodes.length;

      for (var i = 0; i < nodes.length; ++i) {
        var node = nodes[i];
        rows[i] = this.options.rowRenderer(node, this.options);
      }

      if (parentNode === this.state.rootNode) {
        this.nodes = nodes;
        this.rows = rows;
      } else {
        var parentOffset = this.nodes.indexOf(parentNode);

        if (parentOffset >= 0) {
          if (parentNode.state.open === true) {
            // Update nodes & rows
            this.nodes.splice.apply(this.nodes, [parentOffset + 1, deleteCount].concat(nodes));
            this.rows.splice.apply(this.rows, [parentOffset + 1, deleteCount].concat(rows));
          } // Update the row corresponding to the parent node


          this.rows[parentOffset] = this.options.rowRenderer(parentNode, this.options);
        }
      } // Update the lookup table with newly added nodes


      parentNode.children.slice(index).forEach(function (childNode) {
        _this3.flattenNode(childNode).forEach(function (node) {
          if (node.id !== undefined) {
            _this3.nodeTable.set(node.id, node);
          }
        });
      }); // Update list

      this.update();
      return true;
    } // Adds a new child node to the end of the list of children of a specified parent node.
    // * If the parent is null or undefined, inserts the child at the specified index in the top-level.
    // * If the parent has children, the method adds the child as the last child.
    // * If the parent does not have children, the method adds the child to the parent.
    // @param {object} newNode The new child node.
    // @param {Node} parentNode The Node object that defines the parent node.
    // @return {boolean} Returns true on success, false otherwise.

  }, {
    key: "appendChildNode",
    value: function appendChildNode(newNode, parentNode) {
      // Defaults to rootNode if the parentNode is not specified
      parentNode = parentNode || this.state.rootNode;

      if (!ensureNodeInstance(parentNode)) {
        return false;
      }

      var index = parentNode.children.length;
      var newNodes = [].concat(newNode || []); // Ensure array

      return this.addChildNodes(newNodes, index, parentNode);
    } // Checks or unchecks a node.
    // @param {Node} node The Node object.
    // @param {boolean} [checked] Whether to check or uncheck the node. If not specified, it will toggle between checked and unchecked state.
    // @return {boolean} Returns true on success, false otherwise.
    // @example
    //
    // tree.checkNode(node); // toggle checked and unchecked state
    // tree.checkNode(node, true); // checked=true, indeterminate=false
    // tree.checkNode(node, false); // checked=false, indeterminate=false
    //
    // @doc
    //
    // state.checked | state.indeterminate | description
    // ------------- | ------------------- | -----------
    // false         | false               | The node and all of its children are unchecked.
    // true          | false               | The node and all of its children are checked.
    // true          | true                | The node will appear as indeterminate when the node is checked and some (but not all) of its children are checked.

  }, {
    key: "checkNode",
    value: function checkNode(node, checked) {
      if (!ensureNodeInstance(node)) {
        return false;
      }

      this.emit('willCheckNode', node); // Retrieve node index

      var nodeIndex = this.nodes.indexOf(node);

      if (nodeIndex < 0) {
        error('Invalid node index');
        return false;
      }

      if (checked === true) {
        node.state.checked = true;
        node.state.indeterminate = false;
      } else if (checked === false) {
        node.state.checked = false;
        node.state.indeterminate = false;
      } else {
        node.state.checked = !!node.state.checked;
        node.state.indeterminate = !!node.state.indeterminate;
        node.state.checked = node.state.checked && node.state.indeterminate || !node.state.checked;
        node.state.indeterminate = false;
      }

      var topmostNode = node;

      var updateChildNodes = function updateChildNodes(parentNode) {
        var childNode = parentNode.getFirstChild(); // Ignore parent node

        while (childNode) {
          // Update checked and indeterminate state
          childNode.state.checked = parentNode.state.checked;
          childNode.state.indeterminate = false;

          if (childNode.hasChildren()) {
            childNode = childNode.getFirstChild();
          } else {
            // Find the parent level
            while (childNode.getNextSibling() === null && childNode.parent !== parentNode) {
              // Use child-parent link to get to the parent level
              childNode = childNode.getParent();
            } // Get next sibling


            childNode = childNode.getNextSibling();
          }
        }
      };

      var updateParentNodes = function updateParentNodes(childNode) {
        var parentNode = childNode.parent;

        while (parentNode && parentNode.state.depth >= 0) {
          topmostNode = parentNode;
          var checkedCount = 0;
          var indeterminate = false;
          var len = parentNode.children ? parentNode.children.length : 0;

          for (var i = 0; i < len; ++i) {
            var _childNode = parentNode.children[i];
            indeterminate = indeterminate || !!_childNode.state.indeterminate;

            if (_childNode.state.checked) {
              checkedCount++;
            }
          }

          if (checkedCount === 0) {
            parentNode.state.indeterminate = false;
            parentNode.state.checked = false;
          } else if (checkedCount > 0 && checkedCount < len || indeterminate) {
            parentNode.state.indeterminate = true;
            parentNode.state.checked = true;
          } else {
            parentNode.state.indeterminate = false;
            parentNode.state.checked = true;
          }

          parentNode = parentNode.parent;
        }
      };

      updateChildNodes(node);
      updateParentNodes(node);
      this.state.checkNodes = this.nodes.filter(function (node) {
        return node.state.checked;
      });
      this.updateNode(topmostNode); // Emit a "checkNode" event

      this.emit('checkNode', node);
      return true;
    } // Clears the tree.

  }, {
    key: "clear",
    value: function clear() {
      if (this.clusterize) {
        this.clusterize.clear();
      }

      this.nodeTable.clear();
      this.nodes = [];
      this.rows = [];
      this.state.openNodes = [];
      this.state.rootNode = createRootNode(this.state.rootNode);
      this.state.selectedNode = null;
      this.state.checkNodes = [];
    } // Closes a node to hide its children.
    // @param {Node} node The Node object.
    // @param {object} [options] The options object.
    // @param {boolean} [options.silent] Pass true to prevent "closeNode" and "selectNode" events from being triggered.
    // @return {boolean} Returns true on success, false otherwise.

  }, {
    key: "closeNode",
    value: function closeNode(node, options) {
      var _this4 = this;

      var _options = _objectSpread({}, options),
          _options$async = _options.async,
          async = _options$async === void 0 ? false : _options$async,
          _options$asyncCallbac = _options.asyncCallback,
          asyncCallback = _options$asyncCallbac === void 0 ? noop : _options$asyncCallbac,
          _options$silent = _options.silent,
          silent = _options$silent === void 0 ? false : _options$silent;

      if (!ensureNodeInstance(node)) {
        return false;
      }

      this.emit('willCloseNode', node); // Cannot close the root node

      if (node === this.state.rootNode) {
        error('Cannot close the root node');
        return false;
      } // Retrieve node index


      var nodeIndex = this.nodes.indexOf(node);

      if (nodeIndex < 0) {
        error('Invalid node index');
        return false;
      } // Check if the closeNode action can be performed


      if (this.state.openNodes.indexOf(node) < 0) {
        return false;
      } // Toggle the collapsing state


      node.state.collapsing = true; // Update the row corresponding to the node

      this.rows[nodeIndex] = this.options.rowRenderer(node, this.options); // Update list

      this.update();

      var fn = function fn() {
        // Keep selected node unchanged if "node" is equal to "this.state.selectedNode"
        if (_this4.state.selectedNode && _this4.state.selectedNode !== node) {
          // row #0 - node.0         => parent node (total=4)
          // row #1   - node.0.0     => close this node; next selected node (total=2)
          // row #2       node.0.0.0 => selected node (total=0)
          // row #3       node.0.0.1
          // row #4     node.0.1
          var selectedIndex = _this4.nodes.indexOf(_this4.state.selectedNode);

          var _total = node.state.total;
          var rangeFrom = nodeIndex + 1;
          var rangeTo = nodeIndex + _total;

          if (rangeFrom <= selectedIndex && selectedIndex <= rangeTo) {
            _this4.selectNode(node, options);
          }
        }

        node.state.open = false; // Set the open state to false

        var openNodes = _this4.state.openNodes.filter(function (node) {
          return node.state.open;
        });

        _this4.state.openNodes = openNodes; // Subtract total from ancestor nodes

        var total = node.state.total;

        for (var p = node; p !== null; p = p.parent) {
          p.state.total = p.state.total - total;
        } // Update nodes & rows


        _this4.nodes.splice(nodeIndex + 1, total);

        _this4.rows.splice(nodeIndex + 1, total); // Toggle the collapsing state


        node.state.collapsing = false; // Update the row corresponding to the node

        _this4.rows[nodeIndex] = _this4.options.rowRenderer(node, _this4.options); // Update list

        _this4.update();

        if (!silent) {
          // Emit a "closeNode" event
          _this4.emit('closeNode', node);
        }

        if (typeof asyncCallback === 'function') {
          asyncCallback();
        }
      };

      if (async) {
        setTimeout(fn, 0);
      } else {
        fn();
      }

      return true;
    } // Filters nodes. Use a string or a function to test each node of the tree. Otherwise, it will render nothing after filtering (e.g. tree.filter(), tree.filter(null), tree.flter(0), tree.filter({}), etc.).
    // @param {string|function} predicate A keyword string, or a function to test each node of the tree. If the predicate is an empty string, all nodes will be filtered. If the predicate is a function, returns true to keep the node, false otherwise.
    // @param {object} [options] The options object.
    // @param {boolean} [options.caseSensitive] Case sensitive string comparison. Defaults to false. This option is only available for string comparison.
    // @param {boolean} [options.exactMatch] Exact string matching. Defaults to false. This option is only available for string comparison.
    // @param {string} [options.filterPath] Gets the value at path of Node object. Defaults to 'name'. This option is only available for string comparison.
    // @param {boolean} [options.includeAncestors] Whether to include ancestor nodes. Defaults to true.
    // @param {boolean} [options.includeDescendants] Whether to include descendant nodes. Defaults to true.
    // @example
    //
    // const filterOptions = {
    //     caseSensitive: false,
    //     exactMatch: false,
    //     filterPath: 'props.some.other.key',
    //     includeAncestors: true,
    //     includeDescendants: true
    // };
    // tree.filter('keyword', filterOptions);
    //
    // @example
    //
    // const filterOptions = {
    //     includeAncestors: true,
    //     includeDescendants: true
    // };
    // tree.filter(function(node) {
    //     const keyword = 'keyword';
    //     const filterText = node.name || '';
    //     return filterText.toLowerCase().indexOf(keyword) >= 0;
    // }, filterOptions);

  }, {
    key: "filter",
    value: function filter(predicate, options) {
      options = _objectSpread({
        caseSensitive: false,
        exactMatch: false,
        filterPath: 'name',
        includeAncestors: true,
        includeDescendants: true
      }, options);
      this.filtered = true;
      var rootNode = this.state.rootNode;

      var traverse = function traverse(node) {
        var filterNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (!node || !node.children) {
          return false;
        }

        if (node === rootNode) {
          node.state.filtered = false;
        } else if (filterNode) {
          node.state.filtered = true;
        } else if (typeof predicate === 'string') {
          // string
          var filterText = (0, _utilities.get)(node, options.filterPath, '');

          if (Number.isFinite(filterText)) {
            filterText = String(filterText);
          }

          if (typeof filterText !== 'string') {
            filterText = '';
          }

          var keyword = predicate;

          if (!options.caseSensitive) {
            filterText = filterText.toLowerCase();
            keyword = keyword.toLowerCase();
          }

          node.state.filtered = options.exactMatch ? filterText === keyword : filterText.indexOf(keyword) >= 0;
        } else if (typeof predicate === 'function') {
          // function
          var callback = predicate;
          node.state.filtered = !!callback(node);
        } else {
          node.state.filtered = false;
        }

        if (options.includeDescendants) {
          filterNode = filterNode || node.state.filtered;
        }

        var filtered = false;

        for (var i = 0; i < node.children.length; ++i) {
          var childNode = node.children[i];

          if (!childNode) {
            continue;
          }

          if (traverse(childNode, filterNode)) {
            filtered = true;
          }
        }

        if (options.includeAncestors && filtered) {
          node.state.filtered = true;
        }

        return node.state.filtered;
      };

      traverse(rootNode); // Update rows

      this.rows.length = this.nodes.length;

      for (var i = 0; i < this.nodes.length; ++i) {
        var node = this.nodes[i];
        this.rows[i] = this.options.rowRenderer(node, this.options);
      }

      this.update();
    } // Flattens all child nodes of a parent node by performing full tree traversal using child-parent link.
    // No recursion or stack is involved.
    // @param {Node} parentNode The Node object that defines the parent node.
    // @return {array} Returns an array of Node objects containing all the child nodes of the parent node.

  }, {
    key: "flattenChildNodes",
    value: function flattenChildNodes(parentNode) {
      // Defaults to rootNode if the parentNode is not specified
      parentNode = parentNode || this.state.rootNode;

      if (!ensureNodeInstance(parentNode)) {
        return [];
      }

      var list = [];
      var node = parentNode.getFirstChild(); // Ignore parent node

      while (node) {
        list.push(node);

        if (node.hasChildren()) {
          node = node.getFirstChild();
        } else {
          // Find the parent level
          while (node.getNextSibling() === null && node.parent !== parentNode) {
            // Use child-parent link to get to the parent level
            node = node.getParent();
          } // Get next sibling


          node = node.getNextSibling();
        }
      }

      return list;
    } // Flattens a node by performing full tree traversal using child-parent link.
    // No recursion or stack is involved.
    // @param {Node} node The Node object.
    // @return {array} Returns a flattened list of Node objects.

  }, {
    key: "flattenNode",
    value: function flattenNode(node) {
      if (!ensureNodeInstance(node)) {
        return [];
      }

      return [node].concat(this.flattenChildNodes(node));
    } // Gets a list of child nodes.
    // @param {Node} [parentNode] The Node object that defines the parent node. If null or undefined, returns a list of top level nodes.
    // @return {array} Returns an array of Node objects containing all the child nodes of the parent node.

  }, {
    key: "getChildNodes",
    value: function getChildNodes(parentNode) {
      // Defaults to rootNode if the parentNode is not specified
      parentNode = parentNode || this.state.rootNode;

      if (!ensureNodeInstance(parentNode)) {
        return [];
      }

      return parentNode.children;
    } // Gets a node by its unique id. This assumes that you have given the nodes in the data a unique id.
    // @param {string|number} id An unique node id. A null value will be returned if the id doesn't match.
    // @return {Node} Returns a node the matches the id, null otherwise.

  }, {
    key: "getNodeById",
    value: function getNodeById(id) {
      var node = this.nodeTable.get(id);

      if (!node) {
        // Find the first node that matches the id
        node = this.nodes.filter(function (node) {
          return node.id === id;
        })[0];

        if (!node) {
          return null;
        }

        this.nodeTable.set(node.id, node);
      }

      return node;
    } // Returns the node at the specified point. If the specified point is outside the visible bounds or either coordinate is negative, the result is null.
    // @param {number} x A horizontal position within the current viewport.
    // @param {number} y A vertical position within the current viewport.
    // @return {Node} The Node object under the given point.

  }, {
    key: "getNodeFromPoint",
    value: function getNodeFromPoint(x, y) {
      var el = document.elementFromPoint(x, y);

      while (el && el.parentElement !== this.contentElement) {
        el = el.parentElement;
      }

      if (!el) {
        return null;
      }

      var id = el.getAttribute(this.options.nodeIdAttr);
      var node = this.getNodeById(id);
      return node;
    } // Gets an array of open nodes.
    // @return {array} Returns an array of Node objects containing open nodes.

  }, {
    key: "getOpenNodes",
    value: function getOpenNodes() {
      // returns a shallow copy of an array into a new array object.
      return this.state.openNodes.slice();
    } // Gets the root node.
    // @return {Node} Returns the root node, or null if empty.

  }, {
    key: "getRootNode",
    value: function getRootNode() {
      return this.state.rootNode;
    } // Gets the selected node.
    // @return {Node} Returns the selected node, or null if not selected.

  }, {
    key: "getSelectedNode",
    value: function getSelectedNode() {
      return this.state.selectedNode;
    } // Gets the index of the selected node.
    // @return {number} Returns the index of the selected node, or -1 if not selected.

  }, {
    key: "getSelectedIndex",
    value: function getSelectedIndex() {
      return this.nodes.indexOf(this.state.selectedNode);
    } // Gets an array of checked nodes.
    // @return {array} Returns an array of Node objects containing checked nodes.

  }, {
    key: "getCheckNodes",
    value: function getCheckNodes() {
      // returns a shallow copy of an array into a new array object.
      return this.state.checkNodes.slice();
    } // Inserts the specified node after the reference node.
    // @param {object} newNode The new sibling node.
    // @param {Node} referenceNode The Node object that defines the reference node.
    // @return {boolean} Returns true on success, false otherwise.

  }, {
    key: "insertNodeAfter",
    value: function insertNodeAfter(newNode, referenceNode) {
      if (!ensureNodeInstance(referenceNode)) {
        return false;
      }

      var parentNode = referenceNode.getParent();
      var index = parentNode.children.indexOf(referenceNode) + 1;
      var newNodes = [].concat(newNode || []); // Ensure array

      return this.addChildNodes(newNodes, index, parentNode);
    } // Inserts the specified node before the reference node.
    // @param {object} newNode The new sibling node.
    // @param {Node} referenceNode The Node object that defines the reference node.
    // @return {boolean} Returns true on success, false otherwise.

  }, {
    key: "insertNodeBefore",
    value: function insertNodeBefore(newNode, referenceNode) {
      if (!ensureNodeInstance(referenceNode)) {
        return false;
      }

      var parentNode = referenceNode.getParent();
      var index = parentNode.children.indexOf(referenceNode);
      var newNodes = [].concat(newNode || []); // Ensure array

      return this.addChildNodes(newNodes, index, parentNode);
    } // Loads data in the tree.
    // @param {object|array} data The data is an object or array of objects that defines the node.

  }, {
    key: "loadData",
    value: function loadData() {
      var _this5 = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var remainState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this._data = data; //sunshan
      // this.nodes = flatten(data, { openAllNodes: this.options.autoOpen });
      //sunshan modify

      var remainOpenstate = remainState.open || false;
      var remainSelectedstate = remainState.selected || false;

      if (remainOpenstate && this.state.openNodes.length > 0) {
        var openNodesIdArr = [];

        var _iterator = _createForOfIteratorHelper(this.state.openNodes),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var n = _step.value;
            openNodesIdArr.push(n.id);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        this.nodes = (0, _flattree.flatten)(data, {
          openNodes: openNodesIdArr
        });
      } else {
        this.nodes = (0, _flattree.flatten)(data, {
          openAllNodes: this.options.autoOpen
        });
      } //end sunshan
      // Clear lookup table


      this.nodeTable.clear();
      this.state.openNodes = this.nodes.filter(function (node) {
        return node.state.open;
      });
      this.state.checkNodes = this.nodes.filter(function (node) {
        return node.state.checked;
      }); //this.state.selectedNode = null;
      //sunshan modify

      if (remainSelectedstate && this.state.selectedNode) {
        var lastSelectedId = this.state.selectedNode.id;
        var matchNode = this.getNodeById(lastSelectedId);

        if (matchNode) {
          this.state.selectedNode = matchNode;
          matchNode.state.selected = true;
        } else {
          this.state.selectedNode = null;
        }
      } else {
        this.state.selectedNode = null;
      } //end sunshan


      var rootNode = function () {
        var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        // Finding the root node
        while (node && node.parent !== null) {
          node = node.parent;
        }

        return node;
      }(this.nodes.length > 0 ? this.nodes[0] : null);

      this.state.rootNode = rootNode || createRootNode(this.state.rootNode); // Create a new root node if rootNode is null
      // Update the lookup table with newly added nodes

      this.flattenChildNodes(this.state.rootNode).forEach(function (node) {
        if (node.id !== undefined) {
          _this5.nodeTable.set(node.id, node);
        }
      }); // Update rows

      this.rows.length = this.nodes.length;

      for (var i = 0; i < this.nodes.length; ++i) {
        var node = this.nodes[i];
        this.rows[i] = this.options.rowRenderer(node, this.options);
      } // Update list


      this.update();
    } // Moves a node from its current position to the new position.
    // @param {Node} node The Node object.
    // @param {Node} parentNode The Node object that defines the parent node.
    // @param {number} [index] The 0-based index of where to insert the child node.
    // @return {boolean} Returns true on success, false otherwise.

  }, {
    key: "moveNodeTo",
    value: function moveNodeTo(node, parentNode, index) {
      if (!ensureNodeInstance(node) || !ensureNodeInstance(parentNode)) {
        return false;
      }

      for (var p = parentNode; p !== null; p = p.parent) {
        if (p === node) {
          error("Cannot move an ancestor node (id=".concat(node.id, ") to the specified parent node (id=").concat(parentNode.id, ")."));
          return false;
        }
      }

      return this.removeNode(node) && this.addChildNodes(node, index, parentNode);
    } // Opens a node to display its children.
    // @param {Node} node The Node object.
    // @param {object} [options] The options object.
    // @param {boolean} [options.silent] Pass true to prevent "openNode" event from being triggered.
    // @return {boolean} Returns true on success, false otherwise.

  }, {
    key: "openNode",
    value: function openNode(node, options) {
      var _this6 = this;

      var _options2 = _objectSpread({}, options),
          _options2$async = _options2.async,
          async = _options2$async === void 0 ? false : _options2$async,
          _options2$asyncCallba = _options2.asyncCallback,
          asyncCallback = _options2$asyncCallba === void 0 ? noop : _options2$asyncCallba,
          _options2$silent = _options2.silent,
          silent = _options2$silent === void 0 ? false : _options2$silent;

      if (!ensureNodeInstance(node)) {
        return false;
      }

      if (!this.nodeTable.has(node.id)) {
        error('Cannot open node with the given node id:', node.id);
        return false;
      } // Check if the openNode action can be performed


      if (this.state.openNodes.indexOf(node) >= 0) {
        return false;
      }

      this.emit('willOpenNode', node); // Retrieve node index

      var nodeIndex = this.nodes.indexOf(node);

      var fn = function fn() {
        node.state.open = true;

        if (_this6.state.openNodes.indexOf(node) < 0) {
          // the most recently used items first
          _this6.state.openNodes = [node].concat(_this6.state.openNodes);
        }

        var nodes = (0, _flattree.flatten)(node.children, {
          openNodes: _this6.state.openNodes
        }); // Add all child nodes to the lookup table if the first child does not exist in the lookup table

        if (nodes.length > 0 && !_this6.nodeTable.get(nodes[0])) {
          nodes.forEach(function (node) {
            if (node.id !== undefined) {
              _this6.nodeTable.set(node.id, node);
            }
          });
        } // Toggle the expanding state


        node.state.expanding = false;

        if (nodeIndex >= 0) {
          var rows = []; // Update rows

          rows.length = nodes.length;

          for (var i = 0; i < nodes.length; ++i) {
            var _node = nodes[i];
            rows[i] = _this6.options.rowRenderer(_node, _this6.options);
          } // Update nodes & rows


          _this6.nodes.splice.apply(_this6.nodes, [nodeIndex + 1, 0].concat(nodes));

          _this6.rows.splice.apply(_this6.rows, [nodeIndex + 1, 0].concat(rows)); // Update the row corresponding to the node


          _this6.rows[nodeIndex] = _this6.options.rowRenderer(node, _this6.options); // Update list

          _this6.update();
        }

        if (!silent) {
          // Emit a "openNode" event
          _this6.emit('openNode', node);
        }

        if (typeof asyncCallback === 'function') {
          asyncCallback();
        }
      };

      if (nodeIndex < 0) {
        // Toggle the expanding state
        node.state.expanding = true;

        if (async) {
          setTimeout(fn, 0);
        } else {
          fn();
        }

        return true;
      }

      var shouldLoadNodes = typeof this.options.shouldLoadNodes === 'function' ? !!this.options.shouldLoadNodes(node) : !node.hasChildren() && node.loadOnDemand;

      if (shouldLoadNodes) {
        if (typeof this.options.loadNodes !== 'function') {
          return false;
        } // Reentrancy not allowed


        if (node.state.loading === true) {
          return false;
        } // Toggle the loading state


        node.state.loading = true; // Update the row corresponding to the node

        this.rows[nodeIndex] = this.options.rowRenderer(node, this.options); // Update list

        this.update(); // Do a setTimeout to prevent the CPU intensive task

        setTimeout(function () {
          _this6.options.loadNodes(node, function (err, nodes) {
            var done = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : noop;
            nodes = (0, _ensureArray["default"])(nodes);

            var currentNodeIndex = _this6.nodes.indexOf(node);

            if (nodes.length === 0 && currentNodeIndex >= 0) {
              node.state.open = true;

              if (_this6.state.openNodes.indexOf(node) < 0) {
                // the most recently used items first
                _this6.state.openNodes = [node].concat(_this6.state.openNodes);
              }
            }

            if (err || nodes.length === 0) {
              // Toggle the loading state
              node.state.loading = false; // Update the row corresponding to the node

              _this6.rows[currentNodeIndex] = _this6.options.rowRenderer(node, _this6.options); // Update list

              _this6.update();

              if (typeof done === 'function') {
                done();
              }

              return;
            }

            _this6.addChildNodes(nodes, node); // Ensure the node has children to prevent infinite loop


            if (node.hasChildren()) {
              // Call openNode again
              _this6.openNode(node, _objectSpread(_objectSpread({}, options), {}, {
                async: true,
                asyncCallback: function asyncCallback() {
                  // Toggle the loading state
                  node.state.loading = false;

                  var openedNodeIndex = _this6.nodes.indexOf(node); // Update the row corresponding to the node


                  _this6.rows[openedNodeIndex] = _this6.options.rowRenderer(node, _this6.options); // Update list

                  _this6.update();

                  if (typeof done === 'function') {
                    done();
                  }
                }
              }));
            } else {
              // Toggle the loading state
              node.state.loading = false; // Update the row corresponding to the node

              _this6.rows[currentNodeIndex] = _this6.options.rowRenderer(node, _this6.options); // Update list

              _this6.update();

              if (typeof done === 'function') {
                done();
              }
            }
          });
        }, 0);
        return true;
      } // Toggle the expanding state


      node.state.expanding = true; // Update the row corresponding to the node

      this.rows[nodeIndex] = this.options.rowRenderer(node, this.options); // Update list

      this.update();

      if (async) {
        setTimeout(fn, 0);
      } else {
        fn();
      }

      return true;
    } // Removes all child nodes from a parent node.
    // @param {Node} parentNode The Node object that defines the parent node.
    // @param {object} [options] The options object.
    // @param {boolean} [options.silent] Pass true to prevent "selectNode" event from being triggered.
    // @return {boolean} Returns true on success, false otherwise.

  }, {
    key: "removeChildNodes",
    value: function removeChildNodes(parentNode, options) {
      var _this7 = this;

      if (!ensureNodeInstance(parentNode)) {
        return false;
      }

      if (parentNode.children.length === 0) {
        return false;
      }

      if (parentNode === this.state.rootNode) {
        this.clear();
        return true;
      }

      var parentNodeIndex = this.nodes.indexOf(parentNode); // Update selected node

      if (parentNodeIndex >= 0 && this.state.selectedNode) {
        // row #0 - node.0         => parent node (total=4)
        // row #1   - node.0.0
        // row #2       node.0.0.0 => current selected node
        // row #3       node.0.0.1
        // row #4     node.0.1
        var selectedIndex = this.nodes.indexOf(this.state.selectedNode);
        var rangeFrom = parentNodeIndex + 1;
        var rangeTo = parentNodeIndex + parentNode.state.total;

        if (rangeFrom <= selectedIndex && selectedIndex <= rangeTo) {
          if (parentNode === this.state.rootNode) {
            this.selectNode(null, options);
          } else {
            this.selectNode(parentNode, options);
          }
        }
      } // Get the nodes being removed


      var removedNodes = this.flattenChildNodes(parentNode); // Get the number of nodes to be removed

      var deleteCount = parentNode.state.total; // Subtract the deleteCount for all ancestors (parent, grandparent, etc.) of the current node

      for (var p = parentNode; p !== null; p = p.parent) {
        p.state.total = p.state.total - deleteCount;
      } // Update parent node


      parentNode.children = [];

      if (parentNode !== this.state.rootNode) {
        parentNode.state.open = parentNode.state.open && parentNode.children.length > 0;
      }

      if (parentNodeIndex >= 0) {
        // Update nodes & rows
        this.nodes.splice(parentNodeIndex + 1, deleteCount);
        this.rows.splice(parentNodeIndex + 1, deleteCount); // Update the row corresponding to the parent node

        this.rows[parentNodeIndex] = this.options.rowRenderer(parentNode, this.options);
      }

      {
        // Update open & checked nodes and lookup table
        this.state.openNodes = this.state.openNodes.filter(function (node) {
          return removedNodes.indexOf(node) < 0 && node.state.open;
        });
        this.state.checkNodes = this.state.checkNodes.filter(function (node) {
          return removedNodes.indexOf(node) < 0 && node.state.checked;
        });
        removedNodes.forEach(function (node) {
          _this7.nodeTable.unset(node.id);
        });
      } // Update list

      this.update();
      return true;
    } // Removes a node and all of its child nodes.
    // @param {Node} node The Node object.
    // @param {object} [options] The options object.
    // @param {boolean} [options.silent] Pass true to prevent "selectNode" event from being triggered.
    // @return {boolean} Returns true on success, false otherwise.

  }, {
    key: "removeNode",
    value: function removeNode(node, options) {
      var _this8 = this;

      if (!ensureNodeInstance(node)) {
        return false;
      }

      var parentNode = node.parent;

      if (!parentNode) {
        return false;
      } // Retrieve node index


      var nodeIndex = this.nodes.indexOf(node);
      var parentNodeIndex = this.nodes.indexOf(parentNode); // Update selected node

      if (nodeIndex >= 0 && this.state.selectedNode) {
        // row #0 - node.0         => parent node (total=4)
        // row #1   - node.0.0     => remove this node (total=2)
        // row #2       node.0.0.0 => current selected node (total=0)
        // row #3       node.0.0.1
        // row #4     node.0.1     => next selected node (total=0)
        var selectedIndex = this.nodes.indexOf(this.state.selectedNode);
        var rangeFrom = nodeIndex;
        var rangeTo = nodeIndex + node.state.total + 1;

        if (rangeFrom <= selectedIndex && selectedIndex <= rangeTo) {
          // Change the selected node in the following order:
          // 1. next sibling node
          // 2. previous sibling node
          // 3. parent node
          var selectedNode = node.getNextSibling() || node.getPreviousSibling() || node.getParent();

          if (selectedNode === this.state.rootNode) {
            this.selectNode(null, options);
          } else {
            this.selectNode(selectedNode, options);
          }
        }
      } // Get the nodes being removed


      var removedNodes = this.flattenNode(node); // Get the number of nodes to be removed

      var deleteCount = node.state.total + 1; // Subtract the deleteCount for all ancestors (parent, grandparent, etc.) of the current node

      for (var p = parentNode; p !== null; p = p.parent) {
        p.state.total = p.state.total - deleteCount;
      } // Update parent node


      parentNode.children.splice(parentNode.children.indexOf(node), 1);

      if (parentNode !== this.state.rootNode) {
        parentNode.state.open = parentNode.state.open && parentNode.children.length > 0;
      }

      if (nodeIndex >= 0) {
        // Update nodes & rows
        this.nodes.splice(nodeIndex, deleteCount);
        this.rows.splice(nodeIndex, deleteCount);
      } // Update the row corresponding to the parent node


      if (parentNodeIndex >= 0) {
        this.rows[parentNodeIndex] = this.options.rowRenderer(parentNode, this.options);
      }

      {
        // Update open & checked nodes and lookup table
        this.state.openNodes = this.state.openNodes.filter(function (node) {
          return removedNodes.indexOf(node) < 0 && node.state.open;
        });
        this.state.checkNodes = this.state.checkNodes.filter(function (node) {
          return removedNodes.indexOf(node) < 0 && node.state.checked;
        });
        removedNodes.forEach(function (node) {
          _this8.nodeTable.unset(node.id);
        });
      } // Update list

      this.update();
      return true;
    } // Sets the current scroll position to this node.
    // @param {Node} node The Node object.
    // @return {boolean} Returns true on success, false otherwise.

  }, {
    key: "scrollToNode",
    value: function scrollToNode(node) {
      if (!ensureNodeInstance(node)) {
        return false;
      } // Retrieve node index


      var nodeIndex = this.nodes.indexOf(node);

      if (nodeIndex < 0) {
        return false;
      }

      if (!this.contentElement) {
        return false;
      } // Scroll to a desired position


      var firstChild = this.contentElement.firstChild;

      while (firstChild) {
        var className = firstChild.className || '';

        if (className.indexOf('clusterize-extra-row') < 0 && firstChild.offsetHeight > 0) {
          break;
        }

        firstChild = firstChild.nextSibling;
      } // If all items in the list is the same height, it can be calculated by nodeIndex * height.


      var offsetHeight = firstChild && firstChild.offsetHeight || 0;

      if (offsetHeight > 0) {
        this.scrollTop(nodeIndex * offsetHeight);
      } // Find the absolute position of the node


      var nodeSelector = "[".concat(this.options.nodeIdAttr, "=\"").concat(node.id, "\"]");
      var nodeEl = this.contentElement.querySelector(nodeSelector);

      if (nodeEl) {
        this.scrollTop(nodeEl.offsetTop);
      }

      return true;
    } // Gets (or sets) the current vertical position of the scroll bar.
    // @param {number} [value] If the value is specified, indicates the new position to set the scroll bar to.
    // @return {number} Returns the vertical scroll position.

  }, {
    key: "scrollTop",
    value: function scrollTop(value) {
      if (!this.scrollElement) {
        return 0;
      }

      if (value !== undefined) {
        this.scrollElement.scrollTop = Number(value);
      }

      return this.scrollElement.scrollTop;
    } // Selects a node.
    // @param {Node} node The Node object. If null or undefined, deselects the current node.
    // @param {object} [options] The options object.
    // @param {boolean} [options.autoScroll] Pass true to automatically scroll to the selected node. Defaults to true.
    // @param {boolean} [options.silent] Pass true to prevent "selectNode" event from being triggered. Defaults to false.
    // @return {boolean} Returns true on success, false otherwise.

  }, {
    key: "selectNode",
    value: function selectNode() {
      var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var options = arguments.length > 1 ? arguments[1] : undefined;
      var _this$options = this.options,
          selectable = _this$options.selectable,
          shouldSelectNode = _this$options.shouldSelectNode;

      var _options3 = _objectSpread({}, options),
          _options3$autoScroll = _options3.autoScroll,
          autoScroll = _options3$autoScroll === void 0 ? true : _options3$autoScroll,
          _options3$silent = _options3.silent,
          silent = _options3$silent === void 0 ? false : _options3$silent;

      this.emit('willSelectNode', node);

      if (!selectable) {
        return false;
      }

      if (typeof shouldSelectNode === 'function' && !shouldSelectNode(node)) {
        return false;
      }

      if (node === this.state.rootNode) {
        return false;
      }

      if (node === null) {
        // Deselect the current node
        if (this.state.selectedNode) {
          var selectedNode = this.state.selectedNode;
          var selectedIndex = this.nodes.indexOf(this.state.selectedNode);
          selectedNode.state.selected = false;
          this.rows[selectedIndex] = this.options.rowRenderer(selectedNode, this.options);
          this.state.selectedNode = null; // Update list

          this.update();

          if (!silent) {
            // Emit a "selectNode" event
            this.emit('selectNode', null);
          }

          return true;
        }

        return false;
      }

      if (!ensureNodeInstance(node)) {
        return false;
      } // Retrieve node index


      var nodeIndex = this.nodes.indexOf(node);

      if (nodeIndex < 0) {
        return false;
      } // Select this node


      if (this.state.selectedNode !== node) {
        node.state.selected = true; // Update the row corresponding to the node

        this.rows[nodeIndex] = this.options.rowRenderer(node, this.options);
      } // Deselect the current node


      if (this.state.selectedNode) {
        var _selectedNode = this.state.selectedNode;

        var _selectedIndex = this.nodes.indexOf(this.state.selectedNode);

        _selectedNode.state.selected = false;
        this.rows[_selectedIndex] = this.options.rowRenderer(_selectedNode, this.options);
      }

      if (this.state.selectedNode !== node) {
        this.state.selectedNode = node;

        if (!silent) {
          // Emit a "selectNode" event
          this.emit('selectNode', node);
        }

        if (autoScroll && this.scrollElement && this.contentElement) {
          var nodeSelector = "[".concat(this.options.nodeIdAttr, "=\"").concat(node.id, "\"]");
          var nodeEl = this.contentElement.querySelector(nodeSelector);

          if (nodeEl) {
            var offsetTop = nodeEl.offsetTop || 0;
            var offsetHeight = nodeEl.offsetHeight || 0; // Scroll Up

            if (offsetTop < this.scrollElement.scrollTop) {
              this.scrollElement.scrollTop = offsetTop;
            } // Scroll Down


            if (offsetTop + offsetHeight >= this.scrollElement.scrollTop + this.scrollElement.clientHeight) {
              this.scrollElement.scrollTop += offsetHeight;
            }
          }
        }
      } else {
        this.state.selectedNode = null;

        if (!silent) {
          // Emit a "selectNode" event
          this.emit('selectNode', null);
        }
      } // Update list


      this.update();
      return true;
    } // Swaps two nodes.
    // @param {Node} node1 The Node object.
    // @param {Node} node2 The Node object.
    // @return {boolean} Returns true on success, false otherwise.

  }, {
    key: "swapNodes",
    value: function swapNodes(node1, node2) {
      if (!ensureNodeInstance(node1) || !ensureNodeInstance(node1.parent)) {
        return false;
      }

      if (!ensureNodeInstance(node2) || !ensureNodeInstance(node2.parent)) {
        return false;
      }

      var parentNode1 = node1.parent;
      var parentNode2 = node2.parent;

      for (var p = parentNode1; p !== null; p = p.parent) {
        if (p === node2) {
          error('Cannot swap two nodes with one being an ancestor of the other.');
          return false;
        }
      }

      for (var _p = parentNode2; _p !== null; _p = _p.parent) {
        if (_p === node1) {
          error('Cannot swap two nodes with one being an ancestor of the other.');
          return false;
        }
      }

      var nodeIndex1 = parentNode1.children.indexOf(node1);
      var nodeIndex2 = parentNode2.children.indexOf(node2);
      return this.moveNodeTo(node1, parentNode2, nodeIndex2) && this.moveNodeTo(node2, parentNode1, nodeIndex1);
    } // Toggles a node to display or hide its children.
    // @param {Node} node The Node object.
    // @param {object} [options] The options object.
    // @param {boolean} [options.silent] Pass true to prevent "closeNode", "openNode", and "selectNode" events from being triggered.
    // @return {boolean} Returns true on success, false otherwise.

  }, {
    key: "toggleNode",
    value: function toggleNode(node, options) {
      if (!ensureNodeInstance(node)) {
        return false;
      }

      if (this.state.openNodes.indexOf(node) >= 0) {
        // Close node
        return this.closeNode(node, options);
      } else {
        // Open node
        return this.openNode(node, options);
      }
    } // Serializes the current state of a node to a JSON string.
    // @param {Node} node The Node object. If null, returns the whole tree.
    // @return {string} Returns a JSON string represented the tree.

  }, {
    key: "toString",
    value: function toString() {
      var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var traverse = function traverse(node) {
        var s = '[';

        if (node && node.children) {
          var _loop = function _loop(i) {
            var list = [];
            s = s + '{';
            Object.keys(node).forEach(function (key) {
              var value = node[key];

              if (key === 'parent') {
                // ignore parent
                return;
              }

              if (key === 'children') {
                // traverse child nodes
                list.push('"' + key + '":' + traverse(node.children[i]));
                return;
              }

              if (typeof value === 'string' || _typeof(value) === 'object') {
                list.push('"' + key + '":' + JSON.stringify(value));
              } else {
                // primitive types
                list.push('"' + key + '":' + value);
              }
            });
            s = s + list.join(',');
            s = s + '}' + (i === node.children.length - 1 ? '' : ',');
          };

          for (var i = 0; i < node.children.length; ++i) {
            _loop(i);
          }
        }

        s = s + ']';
        return s;
      };

      if (!node) {
        node = this.state.rootNode;
      }

      return traverse(node);
    } // Unfilters nodes.

  }, {
    key: "unfilter",
    value: function unfilter() {
      this.filtered = false;
      var rootNode = this.state.rootNode;

      var traverse = function traverse(node) {
        if (!node) {
          return;
        }

        delete node.state.filtered;

        if (!node.children) {
          return;
        }

        for (var i = 0; i < node.children.length; ++i) {
          var childNode = node.children[i];

          if (!childNode) {
            continue;
          }

          traverse(childNode);
        }
      };

      traverse(rootNode); // Update rows

      this.rows.length = this.nodes.length;

      for (var i = 0; i < this.nodes.length; ++i) {
        var node = this.nodes[i];
        this.rows[i] = this.options.rowRenderer(node, this.options);
      }

      this.update();
    } // Updates the tree.

  }, {
    key: "update",
    value: function update() {
      // Emit a "contentWillUpdate" event
      this.emit('contentWillUpdate');

      if (this.clusterize) {
        // Update list
        var rows = this.rows.filter(function (row) {
          return !!row;
        });
        this.clusterize.update(rows);
      } // Emit a "contentWillUpdate" event


      this.emit('contentDidUpdate');
    } // Updates the data of a node.
    // @param {Node} node The Node object.
    // @param {object} data The data object.
    // @param {object} [options] The options object.
    // @param {boolean} [options.shallowRendering] True to render only the parent node, false to render the parent node and all expanded child nodes. Defaults to false.

  }, {
    key: "updateNode",
    value: function updateNode(node, data, options) {
      if (!ensureNodeInstance(node)) {
        return;
      } // Clone a new one


      data = _objectSpread({}, data);

      if (data.id !== undefined && data.id !== null) {
        this.nodeTable.unset(node.id);
        this.nodeTable.set(data.id, node);
        node.id = data.id;
      } // Ignore keys: id, children, parent, and state


      delete data.id;
      delete data.children;
      delete data.parent;
      delete data.state;
      node = (0, _extend["default"])(node, data); // Retrieve node index

      var nodeIndex = this.nodes.indexOf(node);

      if (nodeIndex >= 0) {
        var _options4 = _objectSpread({}, options),
            _options4$shallowRend = _options4.shallowRendering,
            shallowRendering = _options4$shallowRend === void 0 ? false : _options4$shallowRend; // Update the row corresponding to the node


        this.rows[nodeIndex] = this.options.rowRenderer(node, this.options);

        if (!shallowRendering) {
          var total = node.state.total;
          var rangeFrom = nodeIndex + 1;
          var rangeTo = nodeIndex + total;

          for (var index = rangeFrom; index <= rangeTo; ++index) {
            this.rows[index] = this.options.rowRenderer(this.nodes[index], this.options);
          }
        } // Update list


        this.update();
      }
    }
  }]);

  return InfiniteTree;
}(_events["default"].EventEmitter);

var _default = InfiniteTree;
exports["default"] = _default;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function(opts) {
  return new ElementClass(opts)
}

function indexOf(arr, prop) {
  if (arr.indexOf) return arr.indexOf(prop)
  for (var i = 0, len = arr.length; i < len; i++)
    if (arr[i] === prop) return i
  return -1
}

function ElementClass(opts) {
  if (!(this instanceof ElementClass)) return new ElementClass(opts)
  var self = this
  if (!opts) opts = {}

  // similar doing instanceof HTMLElement but works in IE8
  if (opts.nodeType) opts = {el: opts}

  this.opts = opts
  this.el = opts.el || document.body
  if (typeof this.el !== 'object') this.el = document.querySelector(this.el)
}

ElementClass.prototype.add = function(className) {
  var el = this.el
  if (!el) return
  if (el.className === "") return el.className = className
  var classes = el.className.split(' ')
  if (indexOf(classes, className) > -1) return classes
  classes.push(className)
  el.className = classes.join(' ')
  return classes
}

ElementClass.prototype.remove = function(className) {
  var el = this.el
  if (!el) return
  if (el.className === "") return
  var classes = el.className.split(' ')
  var idx = indexOf(classes, className)
  if (idx > -1) classes.splice(idx, 1)
  el.className = classes.join(' ')
  return classes
}

ElementClass.prototype.has = function(className) {
  var el = this.el
  if (!el) return
  var classes = el.className.split(' ')
  return indexOf(classes, className) > -1
}

ElementClass.prototype.toggle = function(className) {
  var el = this.el
  if (!el) return
  if (this.has(className)) this.remove(className)
  else this.add(className)
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11)
var isWindow = __webpack_require__(12)

function isNode (val) {
  if (!isObject(val) || !isWindow(window) || typeof window.Node !== 'function') {
    return false
  }

  return typeof val.nodeType === 'number' &&
    typeof val.nodeName === 'string'
}

module.exports = isNode


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isObject(x) {
	return typeof x === "object" && x !== null;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (obj) {

  if (obj == null) {
    return false;
  }

  var o = Object(obj);

  return o === o.window;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Node = exports.flatten = undefined;

var _flatten = __webpack_require__(14);

var _flatten2 = _interopRequireDefault(_flatten);

var _node = __webpack_require__(3);

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// IE8 compatibility output
exports.flatten = _flatten2['default'];
exports.Node = _node2['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extend = __webpack_require__(2);

var _extend2 = _interopRequireDefault(_extend);

var _node = __webpack_require__(3);

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// @param {object|array} nodes The tree nodes.
// @param {object} [options] The options object.
// @param {boolean} [options.openAllNodes] True to open all nodes. Defaults to false.
// @param {array} [options.openNodes] An array that contains the ids of open nodes.
// @param {boolean} [options.checkAllNodes] True to check all nodes. Defaults to false.
// @param {array} [options.checkNodes] An array that contains the ids of check nodes.
// @return {array}
/* eslint no-console: 0 */
var flatten = function flatten() {
    var nodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    nodes = [].concat(nodes);

    var flatten = [];
    var stack = [];
    var pool = {
        lastChild: {}
    };

    options.openAllNodes = !!options.openAllNodes;
    options.openNodes = options.openNodes || [];
    options.checkAllNodes = !!options.checkAllNodes;
    options.checkNodes = options.checkNodes || [];
    options.throwOnError = !!options.throwOnError;

    {
        // root node
        var firstNode = nodes.length > 0 ? nodes[0] : null;
        var parentNode = firstNode ? firstNode.parent : null;
        if (parentNode && !(parentNode instanceof _node2['default'])) {
            parentNode = new _node2['default'](parentNode);
        }
        var rootNode = parentNode || new _node2['default']({ // defaults
            parent: null,
            children: nodes,
            state: {
                depth: -1,
                open: true, // always open
                checked: false,
                path: '',
                prefixMask: '',
                total: 0
            }
        });

        if (rootNode === parentNode) {
            var subtotal = rootNode.state.total || 0;

            // Traversing up through its ancestors.
            var p = rootNode;
            while (p) {
                var _p$state = p.state,
                    path = _p$state.path,
                    _p$state$total = _p$state.total,
                    total = _p$state$total === undefined ? 0 : _p$state$total;

                // Rebuild the lastChild pool.

                if (p.isLastChild() && path) {
                    pool.lastChild[path] = true;
                }

                // Subtract the number 'subtotal' from the total of the root node and all its ancestors.
                p.state.total = total - subtotal;
                if (p.state.total < 0) {
                    if (options.throwOnError) {
                        throw new Error('The node might have been corrupted: id=' + JSON.stringify(p.id) + ', state=' + JSON.stringify(p.state));
                    } else {
                        console && console.log('Error: The node might have been corrupted: id=%s, parent=%s, children=%s, state=%s', JSON.stringify(p.id), p.parent, p.children, JSON.stringify(p.state));
                    }
                }

                p = p.parent;
            }
        }

        stack.push([rootNode, rootNode.state.depth, 0]);
    }

    while (stack.length > 0) {
        var _stack$pop = stack.pop(),
            current = _stack$pop[0],
            depth = _stack$pop[1],
            index = _stack$pop[2];

        var _loop = function _loop() {
            var node = current.children[index];
            if (!(node instanceof _node2['default'])) {
                node = new _node2['default'](node);
            }
            node.parent = current;
            node.children = node.children || [];

            // Ensure parent.children[index] is equal to the current node.
            node.parent.children[index] = node;

            var path = current.state.path + '.' + index;
            var open = node.hasChildren() && function () {
                var openAllNodes = options.openAllNodes,
                    openNodes = options.openNodes;

                if (openAllNodes) {
                    return true;
                }
                // determine from input
                if (node.state && node.state.open) {
                    return true;
                }
                // determine by node object
                if (openNodes.indexOf(node) >= 0) {
                    return true;
                }
                // determine by node id
                if (openNodes.indexOf(node.id) >= 0) {
                    return true;
                }
                return false;
            }();
            var checked = function () {
                var checkAllNodes = options.checkAllNodes,
                    checkNodes = options.checkNodes;

                if (checkAllNodes) {
                    return true;
                }
                // determine from input
                if (node.state && node.state.checked) {
                    return true;
                }
                // determine by node object
                if (checkNodes.indexOf(node) >= 0) {
                    return true;
                }
                // determine by node id
                if (checkNodes.indexOf(node.id) >= 0) {
                    return true;
                }
                return false;
            }();
            var prefixMask = function (prefix) {
                var mask = '';
                while (prefix.length > 0) {
                    prefix = prefix.replace(/\.\d+$/, '');
                    if (!prefix || pool.lastChild[prefix]) {
                        mask = '0' + mask;
                    } else {
                        mask = '1' + mask;
                    }
                }
                return mask;
            }(path);

            if (index === current.children.length - 1) {
                // The node is the last child of its parent.
                pool.lastChild[path] = true;
            }

            // This allows you to put extra information to node.state
            node.state = (0, _extend2['default'])({}, node.state, {
                depth: depth + 1,
                open: open,
                checked: checked,
                path: path,
                prefixMask: prefixMask,
                total: 0
            });

            var parentDidOpen = true;

            {
                // Check the open state from its ancestors.
                var _p = node;
                while (_p.parent !== null) {
                    if (_p.parent.state.open === false) {
                        parentDidOpen = false;
                        break;
                    }
                    _p = _p.parent;
                }
            }

            if (parentDidOpen) {
                // Push the node to flatten list only if all of its parent nodes have the open state set to true.
                flatten.push(node);

                // Update the total number of visible child nodes.
                var _p2 = node;
                while (_p2.parent !== null) {
                    _p2.parent.state.total++;
                    _p2 = _p2.parent;
                }
            }

            ++index;

            if (node.hasChildren()) {
                // Push back parent node to the stack that will be able to continue
                // the next iteration once all the child nodes of the current node
                // have been completely explored.
                stack.push([current, depth, index]);

                index = 0;
                depth = depth + 1;
                current = node;
            }
        };

        while (index < current.children.length) {
            _loop();
        }
    }

    return flatten;
};

exports['default'] = flatten;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _events = __webpack_require__(0);

var _ensureArray = _interopRequireDefault(__webpack_require__(4));

var _browser = __webpack_require__(16);

var _dom = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ie = (0, _browser.getIEVersion)();

var Clusterize = /*#__PURE__*/function (_EventEmitter) {
  _inherits(Clusterize, _EventEmitter);

  var _super = _createSuper(Clusterize);

  function Clusterize(options) {
    var _this;

    _classCallCheck(this, Clusterize);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "options", {
      rowsInBlock: 50,
      blocksInCluster: 4,
      tag: null,
      emptyClass: '',
      emptyText: '',
      keepParity: true
    });

    _defineProperty(_assertThisInitialized(_this), "state", {
      lastClusterIndex: -1,
      itemHeight: 0,
      blockHeight: 0,
      clusterHeight: 0
    });

    _defineProperty(_assertThisInitialized(_this), "scrollElement", null);

    _defineProperty(_assertThisInitialized(_this), "contentElement", null);

    _defineProperty(_assertThisInitialized(_this), "rows", []);

    _defineProperty(_assertThisInitialized(_this), "cache", {});

    _defineProperty(_assertThisInitialized(_this), "scrollEventListener", function () {
      var debounce = null;
      return function () {
        var isMac = navigator.platform.toLowerCase().indexOf('mac') >= 0;

        if (isMac) {
          if (_this.contentElement.style.pointerEvents !== 'none') {
            _this.contentElement.style.pointerEvents = 'none';
          }

          if (debounce) {
            clearTimeout(debounce);
            debounce = null;
          }

          debounce = setTimeout(function () {
            debounce = null;
            _this.contentElement.style.pointerEvents = 'auto';
          }, 50);
        }

        var clusterIndex = _this.getCurrentClusterIndex();

        if (_this.state.lastClusterIndex !== clusterIndex) {
          _this.changeDOM();
        }

        _this.state.lastClusterIndex = clusterIndex;
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "resizeEventListener", function () {
      var debounce = null;
      return function () {
        if (debounce) {
          clearTimeout(debounce);
          debounce = null;
        }

        debounce = setTimeout(function () {
          var prevItemHeight = _this.state.itemHeight;

          var current = _this.computeHeight();

          if (current.itemHeight > 0 && prevItemHeight !== current.itemHeight) {
            _this.state = _objectSpread(_objectSpread({}, _this.state), current);

            _this.update(_this.rows);
          }
        }, 100);
      };
    }());

    if (!(_assertThisInitialized(_this) instanceof Clusterize)) {
      return _possibleConstructorReturn(_this, new Clusterize(options));
    }

    _this.options = Object.keys(_this.options).reduce(function (acc, key) {
      if (options[key] !== undefined) {
        acc[key] = options[key];
      } else {
        acc[key] = _this.options[key];
      }

      return acc;
    }, {});
    _this.scrollElement = options.scrollElement;
    _this.contentElement = options.contentElement; // Keep focus on the scrolling content

    if (!_this.contentElement.hasAttribute('tabindex')) {
      _this.contentElement.setAttribute('tabindex', 0);
    }

    if (Array.isArray(options.rows)) {
      _this.rows = options.rows;
    } else {
      _this.rows = [];
      var nodes = _this.contentElement.children;
      var length = nodes.length;

      for (var i = 0; i < length; ++i) {
        var node = nodes[i];

        _this.rows.push(node.outerHTML || '');
      }
    } // Remember scroll position


    var scrollTop = _this.scrollElement.scrollTop;

    _this.changeDOM(); // Restore scroll position


    _this.scrollElement.scrollTop = scrollTop;
    (0, _dom.addEventListener)(_this.scrollElement, 'scroll', _this.scrollEventListener);
    (0, _dom.addEventListener)(window, 'resize', _this.resizeEventListener);
    return _this;
  }

  _createClass(Clusterize, [{
    key: "destroy",
    value: function destroy(clean) {
      (0, _dom.removeEventListener)(this.scrollElement, 'scroll', this.scrollEventListener);
      (0, _dom.removeEventListener)(window, 'resize', this.resizeEventListener);
      var rows = clean ? this.generateEmptyRow() : this.rows();
      this.setContent(rows.join(''));
    }
  }, {
    key: "update",
    value: function update(rows) {
      this.rows = (0, _ensureArray["default"])(rows); // Remember scroll position

      var scrollTop = this.scrollElement.scrollTop;

      if (this.rows.length * this.state.itemHeight < scrollTop) {
        this.scrollElement.scrollTop = 0;
        this.state.lastClusterIndex = 0;
      }

      this.changeDOM(); // Restore scroll position

      this.scrollElement.scrollTop = scrollTop;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.rows = [];
      this.update();
    }
  }, {
    key: "append",
    value: function append(rows) {
      rows = (0, _ensureArray["default"])(rows);

      if (!rows.length) {
        return;
      }

      this.rows = this.rows.concat(rows);
      this.changeDOM();
    }
  }, {
    key: "prepend",
    value: function prepend(rows) {
      rows = (0, _ensureArray["default"])(rows);

      if (!rows.length) {
        return;
      }

      this.rows = rows.concat(this.rows);
      this.changeDOM();
    }
  }, {
    key: "computeHeight",
    value: function computeHeight() {
      if (!this.rows.length) {
        return {
          clusterHeight: 0,
          blockHeight: this.state.blockHeight,
          itemHeight: this.state.itemHeight
        };
      } else {
        var nodes = this.contentElement.children;
        var node = nodes[Math.floor(nodes.length / 2)];
        var itemHeight = node.offsetHeight;

        if (this.options.tag === 'tr' && (0, _dom.getElementStyle)(this.contentElement, 'borderCollapse') !== 'collapse') {
          itemHeight += parseInt((0, _dom.getElementStyle)(this.contentElement, 'borderSpacing'), 10) || 0;
        }

        if (this.options.tag !== 'tr') {
          var marginTop = parseInt((0, _dom.getElementStyle)(node, 'marginTop'), 10) || 0;
          var marginBottom = parseInt((0, _dom.getElementStyle)(node, 'marginBottom'), 10) || 0;
          itemHeight += Math.max(marginTop, marginBottom);
        }

        var blockHeight = itemHeight * this.options.rowsInBlock;
        var clusterHeight = blockHeight * this.options.blocksInCluster;
        return {
          itemHeight: itemHeight,
          blockHeight: blockHeight,
          clusterHeight: clusterHeight
        };
      }
    }
  }, {
    key: "getCurrentClusterIndex",
    value: function getCurrentClusterIndex() {
      var _this$state = this.state,
          blockHeight = _this$state.blockHeight,
          clusterHeight = _this$state.clusterHeight;

      if (!blockHeight || !clusterHeight) {
        return 0;
      }

      return Math.floor(this.scrollElement.scrollTop / (clusterHeight - blockHeight)) || 0;
    }
  }, {
    key: "generateEmptyRow",
    value: function generateEmptyRow() {
      var _this$options = this.options,
          tag = _this$options.tag,
          emptyText = _this$options.emptyText,
          emptyClass = _this$options.emptyClass;

      if (!tag || !emptyText) {
        return [];
      }

      var emptyRow = document.createElement(tag);
      emptyRow.className = emptyClass;

      if (tag === 'tr') {
        var td = document.createElement('td');
        td.colSpan = 100;
        td.appendChild(document.createTextNode(emptyText));
        emptyRow.appendChild(td);
      } else {
        emptyRow.appendChild(document.createTextNode(emptyText));
      }

      return [emptyRow.outerHTML];
    }
  }, {
    key: "renderExtraTag",
    value: function renderExtraTag(className, height) {
      var tag = document.createElement(this.options.tag);
      var prefix = 'infinite-tree-';
      tag.className = [prefix + 'extra-row', prefix + className].join(' ');

      if (height) {
        tag.style.height = height + 'px';
      }

      return tag.outerHTML;
    }
  }, {
    key: "changeDOM",
    value: function changeDOM() {
      if (!this.state.clusterHeight && this.rows.length > 0) {
        if (ie && ie <= 9 && !this.options.tag) {
          this.options.tag = this.rows[0].match(/<([^>\s/]*)/)[1].toLowerCase();
        }

        if (this.contentElement.children.length <= 1) {
          this.cache.content = this.setContent(this.rows[0] + this.rows[0] + this.rows[0]);
        }

        if (!this.options.tag) {
          this.options.tag = this.contentElement.children[0].tagName.toLowerCase();
        }

        this.state = _objectSpread(_objectSpread({}, this.state), this.computeHeight());
      }

      var topOffset = 0;
      var bottomOffset = 0;
      var rows = [];

      if (this.rows.length < this.options.rowsInBlock) {
        rows = this.rows.length > 0 ? this.rows : this.generateEmptyRow();
      } else {
        var rowsInCluster = this.options.rowsInBlock * this.options.blocksInCluster;
        var clusterIndex = this.getCurrentClusterIndex();
        var visibleStart = Math.max((rowsInCluster - this.options.rowsInBlock) * clusterIndex, 0);
        var visibleEnd = visibleStart + rowsInCluster;
        topOffset = Math.max(visibleStart * this.state.itemHeight, 0);
        bottomOffset = Math.max((this.rows.length - visibleEnd) * this.state.itemHeight, 0); // Returns a shallow copy of the rows selected from `visibleStart` to `visibleEnd` (`visibleEnd` not included).

        rows = this.rows.slice(visibleStart, visibleEnd);
      }

      var content = rows.join('');
      var contentChanged = this.checkChanges('content', content);
      var topOffsetChanged = this.checkChanges('top', topOffset);
      var bottomOffsetChanged = this.checkChanges('bottom', bottomOffset);

      if (contentChanged || topOffsetChanged) {
        var layout = [];

        if (topOffset > 0) {
          if (this.options.keepParity) {
            layout.push(this.renderExtraTag('keep-parity'));
          }

          layout.push(this.renderExtraTag('top-space', topOffset));
        }

        layout.push(content);

        if (bottomOffset > 0) {
          layout.push(this.renderExtraTag('bottom-space', bottomOffset));
        }

        this.emit('clusterWillChange');
        this.setContent(layout.join(''));
        this.emit('clusterDidChange');
      } else if (bottomOffsetChanged) {
        this.contentElement.lastChild.style.height = bottomOffset + 'px';
      }
    }
  }, {
    key: "setContent",
    value: function setContent(content) {
      // For IE 9 and older versions
      if (ie && ie <= 9 && this.options.tag === 'tr') {
        var div = document.createElement('div');
        div.innerHTML = "<table><tbody>".concat(content, "</tbody></table>");
        var lastChild = this.contentElement.lastChild;

        while (lastChild) {
          this.contentElement.removeChild(lastChild);
          lastChild = this.contentElement.lastChild;
        }

        var rowsNodes = this.getChildNodes(div.firstChild.firstChild);

        while (rowsNodes.length) {
          this.contentElement.appendChild(rowsNodes.shift());
        }
      } else {
        this.contentElement.innerHTML = content;
      }
    }
  }, {
    key: "getChildNodes",
    value: function getChildNodes(tag) {
      var childNodes = tag.children;
      var nodes = [];
      var length = childNodes.length;

      for (var i = 0; i < length; i++) {
        nodes.push(childNodes[i]);
      }

      return nodes;
    }
  }, {
    key: "checkChanges",
    value: function checkChanges(type, value) {
      var changed = value !== this.cache[type];
      this.cache[type] = value;
      return changed;
    }
  }]);

  return Clusterize;
}(_events.EventEmitter);

var _default = Clusterize;
exports["default"] = _default;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIEVersion = void 0;

// https://gist.github.com/padolsey/527683#comment-786682
var getIEVersion = function getIEVersion() {
  var div = document.createElement('div');
  var all = div.getElementsByTagName('i') || [];
  var v = 3;

  do {
    ++v;
    div.innerHTML = '<!--[if gt IE ' + v + ']><i></i><![endif]-->';
  } while (all[0]);

  return v > 4 ? v : document.documentMode;
};

exports.getIEVersion = getIEVersion;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-restricted-syntax: 0 */
var extend = function extend(target) {
  if (target === undefined || target === null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var output = Object(target);

  for (var index = 0; index < (arguments.length <= 1 ? 0 : arguments.length - 1); index++) {
    var source = index + 1 < 1 || arguments.length <= index + 1 ? undefined : arguments[index + 1];

    if (source !== undefined && source !== null) {
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          output[key] = source[key];
        }
      }
    }
  }

  return output;
};

module.exports = extend;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = exports.trim = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var trim = function trim(str) {
  var chars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' \f\n\r\t\v';

  while (chars.indexOf(str[0]) >= 0) {
    str = str.slice(1);
  }

  while (chars.indexOf(str[str.length - 1]) >= 0) {
    str = str.slice(0, -1);
  }

  return str;
};

exports.trim = trim;

var get = function () {
  var re = new RegExp(/[\w\-]+|\[[^\]]*\]+/g);
  return function (object, path, defaultValue) {
    if (!object || _typeof(object) !== 'object') {
      return defaultValue;
    }

    path = '' + path;
    var keys = path.match(re);

    if (!keys) {
      return defaultValue;
    }

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      key = trim(key, ' \f\n\r\t\v');

      if (key[0] === '[') {
        key = trim(key.slice(1, -1), ' \f\n\r\t\v');
      }

      key = trim(key, '\'"');

      if (object === undefined || object === null || _typeof(object) !== 'object') {
        break;
      }

      object = object[key];

      if (object === undefined) {
        break;
      }
    }

    return object !== undefined ? object : defaultValue;
  };
}();

exports.get = get;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LookupTable = /*#__PURE__*/function () {
  function LookupTable() {
    _classCallCheck(this, LookupTable);

    _defineProperty(this, "data", {});
  }

  _createClass(LookupTable, [{
    key: "clear",
    value: function clear() {
      this.data = {};
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.data[key];
    }
  }, {
    key: "has",
    value: function has(key) {
      return this.data[key] !== undefined;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      this.data[key] = value;
      return value;
    }
  }, {
    key: "unset",
    value: function unset(key) {
      if (this.data[key] !== undefined) {
        delete this.data[key];
      }
    }
  }]);

  return LookupTable;
}();

var _default = LookupTable;
exports["default"] = _default;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultRowRenderer = void 0;

var _classnames = _interopRequireDefault(__webpack_require__(1));

var _escapeHtml = _interopRequireDefault(__webpack_require__(6));

var _html5Tag = _interopRequireDefault(__webpack_require__(21));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint import/prefer-default-export: 0  */

/* eslint no-nested-ternary: 0 */
var defaultRowRenderer = function defaultRowRenderer(node, treeOptions) {
  var id = node.id,
      name = node.name,
      _node$loadOnDemand = node.loadOnDemand,
      loadOnDemand = _node$loadOnDemand === void 0 ? false : _node$loadOnDemand,
      children = node.children,
      state = node.state,
      _node$icon = node.icon,
      icon = _node$icon === void 0 ? '' : _node$icon;
  var droppable = treeOptions.droppable;
  var depth = state.depth,
      open = state.open,
      path = state.path,
      total = state.total,
      _state$selected = state.selected,
      selected = _state$selected === void 0 ? false : _state$selected,
      filtered = state.filtered;
  var childrenLength = Object.keys(children).length;
  var more = node.hasChildren();
  var iconUrl = treeOptions.iconUrl;
  var indentUnit = 18;

  if (filtered === false) {
    return '';
  }

  var toggler = (0, _html5Tag["default"])('span', {
    'class': function () {
      if (!more && loadOnDemand) {
        return (0, _classnames["default"])(treeOptions.togglerClass, 'infinite-tree-closed');
      }

      if (more && open) {
        return (0, _classnames["default"])(treeOptions.togglerClass);
      }

      if (more && !open) {
        return (0, _classnames["default"])(treeOptions.togglerClass, 'infinite-tree-closed');
      }

      return '';
    }()
  }, '');
  var iconsrc = !iconUrl ? icon ? "/images/".concat(icon, ".png") : undefined : iconUrl(icon);
  var iconimg = '';

  if (iconsrc) {
    iconimg = (0, _html5Tag["default"])('img', {
      'class': 'infinite-tree-item-icon',
      'style': 'margin-right: 6px;',
      'src': iconsrc
    });
  }

  var title = (0, _html5Tag["default"])('span', {
    'class': (0, _classnames["default"])('infinite-tree-title')
  }, (0, _escapeHtml["default"])(name));
  var treeNode = (0, _html5Tag["default"])('div', {
    'class': 'infinite-tree-node',
    'style': "margin-left: ".concat(depth * indentUnit, "px")
  }, toggler + iconimg + title);
  return (0, _html5Tag["default"])('div', {
    'data-id': id,
    'data-expanded': more && open,
    'data-depth': depth,
    'data-path': path,
    'data-selected': selected,
    'data-children': childrenLength,
    'data-total': total,
    'class': (0, _classnames["default"])('infinite-tree-item', {
      'infinite-tree-selected': selected
    }),
    'droppable': droppable
  }, treeNode);
};

exports.defaultRowRenderer = defaultRowRenderer;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _escapeHtml = __webpack_require__(6);

var _escapeHtml2 = _interopRequireDefault(_escapeHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://www.w3.org/TR/html5/syntax.html#void-elements
// Void elements only have a start tag; end tags must not be specified for void elements.
var voidElements = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'];

// @param {string} [tag] The tag name. Defaults to 'div'.
// @param {object} attrs HTML attributes.
// @param {string} [text] The content string.
module.exports = function (tag, attrs, text) {
    if ((typeof tag === 'undefined' ? 'undefined' : _typeof(tag)) === 'object') {
        text = attrs;
        attrs = tag;
        tag = 'div';
    }

    var voidElement = voidElements.indexOf(('' + tag).toLowerCase()) >= 0;
    var html = '<' + tag;

    attrs = _extends({}, attrs);
    Object.keys(attrs).forEach(function (name) {
        var value = attrs[name];
        if (typeof value === 'string') {
            value = (0, _escapeHtml2.default)('' + value);
            html += ' ' + name + '="' + value + '"';
        } else if (!!value) {
            html += ' ' + name;
        }
    });

    if (voidElement) {
        html += '>';
    } else if (text !== undefined) {
        html += '>' + text + '</' + tag + '>';
    } else {
        html += '/>';
    }

    return html;
};

/***/ })
/******/ ]);