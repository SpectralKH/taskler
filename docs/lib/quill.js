// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parchment/dist/parchment.js":[function(require,module,exports) {
var define;
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Parchment"] = factory();
	else
		root["Parchment"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var ParchmentError = /** @class */ (function (_super) {
    __extends(ParchmentError, _super);
    function ParchmentError(message) {
        var _this = this;
        message = '[Parchment] ' + message;
        _this = _super.call(this, message) || this;
        _this.message = message;
        _this.name = _this.constructor.name;
        return _this;
    }
    return ParchmentError;
}(Error));
exports.ParchmentError = ParchmentError;
var attributes = {};
var classes = {};
var tags = {};
var types = {};
exports.DATA_KEY = '__blot';
var Scope;
(function (Scope) {
    Scope[Scope["TYPE"] = 3] = "TYPE";
    Scope[Scope["LEVEL"] = 12] = "LEVEL";
    Scope[Scope["ATTRIBUTE"] = 13] = "ATTRIBUTE";
    Scope[Scope["BLOT"] = 14] = "BLOT";
    Scope[Scope["INLINE"] = 7] = "INLINE";
    Scope[Scope["BLOCK"] = 11] = "BLOCK";
    Scope[Scope["BLOCK_BLOT"] = 10] = "BLOCK_BLOT";
    Scope[Scope["INLINE_BLOT"] = 6] = "INLINE_BLOT";
    Scope[Scope["BLOCK_ATTRIBUTE"] = 9] = "BLOCK_ATTRIBUTE";
    Scope[Scope["INLINE_ATTRIBUTE"] = 5] = "INLINE_ATTRIBUTE";
    Scope[Scope["ANY"] = 15] = "ANY";
})(Scope = exports.Scope || (exports.Scope = {}));
function create(input, value) {
    var match = query(input);
    if (match == null) {
        throw new ParchmentError("Unable to create " + input + " blot");
    }
    var BlotClass = match;
    var node = 
    // @ts-ignore
    input instanceof Node || input['nodeType'] === Node.TEXT_NODE ? input : BlotClass.create(value);
    return new BlotClass(node, value);
}
exports.create = create;
function find(node, bubble) {
    if (bubble === void 0) { bubble = false; }
    if (node == null)
        return null;
    // @ts-ignore
    if (node[exports.DATA_KEY] != null)
        return node[exports.DATA_KEY].blot;
    if (bubble)
        return find(node.parentNode, bubble);
    return null;
}
exports.find = find;
function query(query, scope) {
    if (scope === void 0) { scope = Scope.ANY; }
    var match;
    if (typeof query === 'string') {
        match = types[query] || attributes[query];
        // @ts-ignore
    }
    else if (query instanceof Text || query['nodeType'] === Node.TEXT_NODE) {
        match = types['text'];
    }
    else if (typeof query === 'number') {
        if (query & Scope.LEVEL & Scope.BLOCK) {
            match = types['block'];
        }
        else if (query & Scope.LEVEL & Scope.INLINE) {
            match = types['inline'];
        }
    }
    else if (query instanceof HTMLElement) {
        var names = (query.getAttribute('class') || '').split(/\s+/);
        for (var i in names) {
            match = classes[names[i]];
            if (match)
                break;
        }
        match = match || tags[query.tagName];
    }
    if (match == null)
        return null;
    // @ts-ignore
    if (scope & Scope.LEVEL & match.scope && scope & Scope.TYPE & match.scope)
        return match;
    return null;
}
exports.query = query;
function register() {
    var Definitions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Definitions[_i] = arguments[_i];
    }
    if (Definitions.length > 1) {
        return Definitions.map(function (d) {
            return register(d);
        });
    }
    var Definition = Definitions[0];
    if (typeof Definition.blotName !== 'string' && typeof Definition.attrName !== 'string') {
        throw new ParchmentError('Invalid definition');
    }
    else if (Definition.blotName === 'abstract') {
        throw new ParchmentError('Cannot register abstract class');
    }
    types[Definition.blotName || Definition.attrName] = Definition;
    if (typeof Definition.keyName === 'string') {
        attributes[Definition.keyName] = Definition;
    }
    else {
        if (Definition.className != null) {
            classes[Definition.className] = Definition;
        }
        if (Definition.tagName != null) {
            if (Array.isArray(Definition.tagName)) {
                Definition.tagName = Definition.tagName.map(function (tagName) {
                    return tagName.toUpperCase();
                });
            }
            else {
                Definition.tagName = Definition.tagName.toUpperCase();
            }
            var tagNames = Array.isArray(Definition.tagName) ? Definition.tagName : [Definition.tagName];
            tagNames.forEach(function (tag) {
                if (tags[tag] == null || Definition.className == null) {
                    tags[tag] = Definition;
                }
            });
        }
    }
    return Definition;
}
exports.register = register;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Registry = __webpack_require__(0);
var Attributor = /** @class */ (function () {
    function Attributor(attrName, keyName, options) {
        if (options === void 0) { options = {}; }
        this.attrName = attrName;
        this.keyName = keyName;
        var attributeBit = Registry.Scope.TYPE & Registry.Scope.ATTRIBUTE;
        if (options.scope != null) {
            // Ignore type bits, force attribute bit
            this.scope = (options.scope & Registry.Scope.LEVEL) | attributeBit;
        }
        else {
            this.scope = Registry.Scope.ATTRIBUTE;
        }
        if (options.whitelist != null)
            this.whitelist = options.whitelist;
    }
    Attributor.keys = function (node) {
        return [].map.call(node.attributes, function (item) {
            return item.name;
        });
    };
    Attributor.prototype.add = function (node, value) {
        if (!this.canAdd(node, value))
            return false;
        node.setAttribute(this.keyName, value);
        return true;
    };
    Attributor.prototype.canAdd = function (node, value) {
        var match = Registry.query(node, Registry.Scope.BLOT & (this.scope | Registry.Scope.TYPE));
        if (match == null)
            return false;
        if (this.whitelist == null)
            return true;
        if (typeof value === 'string') {
            return this.whitelist.indexOf(value.replace(/["']/g, '')) > -1;
        }
        else {
            return this.whitelist.indexOf(value) > -1;
        }
    };
    Attributor.prototype.remove = function (node) {
        node.removeAttribute(this.keyName);
    };
    Attributor.prototype.value = function (node) {
        var value = node.getAttribute(this.keyName);
        if (this.canAdd(node, value) && value) {
            return value;
        }
        return '';
    };
    return Attributor;
}());
exports.default = Attributor;


/***/ }),
/* 2 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var linked_list_1 = __webpack_require__(11);
var shadow_1 = __webpack_require__(5);
var Registry = __webpack_require__(0);
var ContainerBlot = /** @class */ (function (_super) {
    __extends(ContainerBlot, _super);
    function ContainerBlot(domNode) {
        var _this = _super.call(this, domNode) || this;
        _this.build();
        return _this;
    }
    ContainerBlot.prototype.appendChild = function (other) {
        this.insertBefore(other);
    };
    ContainerBlot.prototype.attach = function () {
        _super.prototype.attach.call(this);
        this.children.forEach(function (child) {
            child.attach();
        });
    };
    ContainerBlot.prototype.build = function () {
        var _this = this;
        this.children = new linked_list_1.default();
        // Need to be reversed for if DOM nodes already in order
        [].slice
            .call(this.domNode.childNodes)
            .reverse()
            .forEach(function (node) {
            try {
                var child = makeBlot(node);
                _this.insertBefore(child, _this.children.head || undefined);
            }
            catch (err) {
                if (err instanceof Registry.ParchmentError)
                    return;
                else
                    throw err;
            }
        });
    };
    ContainerBlot.prototype.deleteAt = function (index, length) {
        if (index === 0 && length === this.length()) {
            return this.remove();
        }
        this.children.forEachAt(index, length, function (child, offset, length) {
            child.deleteAt(offset, length);
        });
    };
    ContainerBlot.prototype.descendant = function (criteria, index) {
        var _a = this.children.find(index), child = _a[0], offset = _a[1];
        if ((criteria.blotName == null && criteria(child)) ||
            (criteria.blotName != null && child instanceof criteria)) {
            return [child, offset];
        }
        else if (child instanceof ContainerBlot) {
            return child.descendant(criteria, offset);
        }
        else {
            return [null, -1];
        }
    };
    ContainerBlot.prototype.descendants = function (criteria, index, length) {
        if (index === void 0) { index = 0; }
        if (length === void 0) { length = Number.MAX_VALUE; }
        var descendants = [];
        var lengthLeft = length;
        this.children.forEachAt(index, length, function (child, index, length) {
            if ((criteria.blotName == null && criteria(child)) ||
                (criteria.blotName != null && child instanceof criteria)) {
                descendants.push(child);
            }
            if (child instanceof ContainerBlot) {
                descendants = descendants.concat(child.descendants(criteria, index, lengthLeft));
            }
            lengthLeft -= length;
        });
        return descendants;
    };
    ContainerBlot.prototype.detach = function () {
        this.children.forEach(function (child) {
            child.detach();
        });
        _super.prototype.detach.call(this);
    };
    ContainerBlot.prototype.formatAt = function (index, length, name, value) {
        this.children.forEachAt(index, length, function (child, offset, length) {
            child.formatAt(offset, length, name, value);
        });
    };
    ContainerBlot.prototype.insertAt = function (index, value, def) {
        var _a = this.children.find(index), child = _a[0], offset = _a[1];
        if (child) {
            child.insertAt(offset, value, def);
        }
        else {
            var blot = def == null ? Registry.create('text', value) : Registry.create(value, def);
            this.appendChild(blot);
        }
    };
    ContainerBlot.prototype.insertBefore = function (childBlot, refBlot) {
        if (this.statics.allowedChildren != null &&
            !this.statics.allowedChildren.some(function (child) {
                return childBlot instanceof child;
            })) {
            throw new Registry.ParchmentError("Cannot insert " + childBlot.statics.blotName + " into " + this.statics.blotName);
        }
        childBlot.insertInto(this, refBlot);
    };
    ContainerBlot.prototype.length = function () {
        return this.children.reduce(function (memo, child) {
            return memo + child.length();
        }, 0);
    };
    ContainerBlot.prototype.moveChildren = function (targetParent, refNode) {
        this.children.forEach(function (child) {
            targetParent.insertBefore(child, refNode);
        });
    };
    ContainerBlot.prototype.optimize = function (context) {
        _super.prototype.optimize.call(this, context);
        if (this.children.length === 0) {
            if (this.statics.defaultChild != null) {
                var child = Registry.create(this.statics.defaultChild);
                this.appendChild(child);
                child.optimize(context);
            }
            else {
                this.remove();
            }
        }
    };
    ContainerBlot.prototype.path = function (index, inclusive) {
        if (inclusive === void 0) { inclusive = false; }
        var _a = this.children.find(index, inclusive), child = _a[0], offset = _a[1];
        var position = [[this, index]];
        if (child instanceof ContainerBlot) {
            return position.concat(child.path(offset, inclusive));
        }
        else if (child != null) {
            position.push([child, offset]);
        }
        return position;
    };
    ContainerBlot.prototype.removeChild = function (child) {
        this.children.remove(child);
    };
    ContainerBlot.prototype.replace = function (target) {
        if (target instanceof ContainerBlot) {
            target.moveChildren(this);
        }
        _super.prototype.replace.call(this, target);
    };
    ContainerBlot.prototype.split = function (index, force) {
        if (force === void 0) { force = false; }
        if (!force) {
            if (index === 0)
                return this;
            if (index === this.length())
                return this.next;
        }
        var after = this.clone();
        this.parent.insertBefore(after, this.next);
        this.children.forEachAt(index, this.length(), function (child, offset, length) {
            child = child.split(offset, force);
            after.appendChild(child);
        });
        return after;
    };
    ContainerBlot.prototype.unwrap = function () {
        this.moveChildren(this.parent, this.next);
        this.remove();
    };
    ContainerBlot.prototype.update = function (mutations, context) {
        var _this = this;
        var addedNodes = [];
        var removedNodes = [];
        mutations.forEach(function (mutation) {
            if (mutation.target === _this.domNode && mutation.type === 'childList') {
                addedNodes.push.apply(addedNodes, mutation.addedNodes);
                removedNodes.push.apply(removedNodes, mutation.removedNodes);
            }
        });
        removedNodes.forEach(function (node) {
            // Check node has actually been removed
            // One exception is Chrome does not immediately remove IFRAMEs
            // from DOM but MutationRecord is correct in its reported removal
            if (node.parentNode != null &&
                // @ts-ignore
                node.tagName !== 'IFRAME' &&
                document.body.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY) {
                return;
            }
            var blot = Registry.find(node);
            if (blot == null)
                return;
            if (blot.domNode.parentNode == null || blot.domNode.parentNode === _this.domNode) {
                blot.detach();
            }
        });
        addedNodes
            .filter(function (node) {
            return node.parentNode == _this.domNode;
        })
            .sort(function (a, b) {
            if (a === b)
                return 0;
            if (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) {
                return 1;
            }
            return -1;
        })
            .forEach(function (node) {
            var refBlot = null;
            if (node.nextSibling != null) {
                refBlot = Registry.find(node.nextSibling);
            }
            var blot = makeBlot(node);
            if (blot.next != refBlot || blot.next == null) {
                if (blot.parent != null) {
                    blot.parent.removeChild(_this);
                }
                _this.insertBefore(blot, refBlot || undefined);
            }
        });
    };
    return ContainerBlot;
}(shadow_1.default));
function makeBlot(node) {
    var blot = Registry.find(node);
    if (blot == null) {
        try {
            blot = Registry.create(node);
        }
        catch (e) {
            blot = Registry.create(Registry.Scope.INLINE);
            [].slice.call(node.childNodes).forEach(function (child) {
                // @ts-ignore
                blot.domNode.appendChild(child);
            });
            if (node.parentNode) {
                node.parentNode.replaceChild(blot.domNode, node);
            }
            blot.attach();
        }
    }
    return blot;
}
exports.default = ContainerBlot;


/***/ }),
/* 3 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var attributor_1 = __webpack_require__(1);
var store_1 = __webpack_require__(6);
var container_1 = __webpack_require__(2);
var Registry = __webpack_require__(0);
var FormatBlot = /** @class */ (function (_super) {
    __extends(FormatBlot, _super);
    function FormatBlot(domNode) {
        var _this = _super.call(this, domNode) || this;
        _this.attributes = new store_1.default(_this.domNode);
        return _this;
    }
    FormatBlot.formats = function (domNode) {
        if (typeof this.tagName === 'string') {
            return true;
        }
        else if (Array.isArray(this.tagName)) {
            return domNode.tagName.toLowerCase();
        }
        return undefined;
    };
    FormatBlot.prototype.format = function (name, value) {
        var format = Registry.query(name);
        if (format instanceof attributor_1.default) {
            this.attributes.attribute(format, value);
        }
        else if (value) {
            if (format != null && (name !== this.statics.blotName || this.formats()[name] !== value)) {
                this.replaceWith(name, value);
            }
        }
    };
    FormatBlot.prototype.formats = function () {
        var formats = this.attributes.values();
        var format = this.statics.formats(this.domNode);
        if (format != null) {
            formats[this.statics.blotName] = format;
        }
        return formats;
    };
    FormatBlot.prototype.replaceWith = function (name, value) {
        var replacement = _super.prototype.replaceWith.call(this, name, value);
        this.attributes.copy(replacement);
        return replacement;
    };
    FormatBlot.prototype.update = function (mutations, context) {
        var _this = this;
        _super.prototype.update.call(this, mutations, context);
        if (mutations.some(function (mutation) {
            return mutation.target === _this.domNode && mutation.type === 'attributes';
        })) {
            this.attributes.build();
        }
    };
    FormatBlot.prototype.wrap = function (name, value) {
        var wrapper = _super.prototype.wrap.call(this, name, value);
        if (wrapper instanceof FormatBlot && wrapper.statics.scope === this.statics.scope) {
            this.attributes.move(wrapper);
        }
        return wrapper;
    };
    return FormatBlot;
}(container_1.default));
exports.default = FormatBlot;


/***/ }),
/* 4 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var shadow_1 = __webpack_require__(5);
var Registry = __webpack_require__(0);
var LeafBlot = /** @class */ (function (_super) {
    __extends(LeafBlot, _super);
    function LeafBlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LeafBlot.value = function (domNode) {
        return true;
    };
    LeafBlot.prototype.index = function (node, offset) {
        if (this.domNode === node ||
            this.domNode.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY) {
            return Math.min(offset, 1);
        }
        return -1;
    };
    LeafBlot.prototype.position = function (index, inclusive) {
        var offset = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
        if (index > 0)
            offset += 1;
        return [this.parent.domNode, offset];
    };
    LeafBlot.prototype.value = function () {
        return _a = {}, _a[this.statics.blotName] = this.statics.value(this.domNode) || true, _a;
        var _a;
    };
    LeafBlot.scope = Registry.Scope.INLINE_BLOT;
    return LeafBlot;
}(shadow_1.default));
exports.default = LeafBlot;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Registry = __webpack_require__(0);
var ShadowBlot = /** @class */ (function () {
    function ShadowBlot(domNode) {
        this.domNode = domNode;
        // @ts-ignore
        this.domNode[Registry.DATA_KEY] = { blot: this };
    }
    Object.defineProperty(ShadowBlot.prototype, "statics", {
        // Hack for accessing inherited static methods
        get: function () {
            return this.constructor;
        },
        enumerable: true,
        configurable: true
    });
    ShadowBlot.create = function (value) {
        if (this.tagName == null) {
            throw new Registry.ParchmentError('Blot definition missing tagName');
        }
        var node;
        if (Array.isArray(this.tagName)) {
            if (typeof value === 'string') {
                value = value.toUpperCase();
                if (parseInt(value).toString() === value) {
                    value = parseInt(value);
                }
            }
            if (typeof value === 'number') {
                node = document.createElement(this.tagName[value - 1]);
            }
            else if (this.tagName.indexOf(value) > -1) {
                node = document.createElement(value);
            }
            else {
                node = document.createElement(this.tagName[0]);
            }
        }
        else {
            node = document.createElement(this.tagName);
        }
        if (this.className) {
            node.classList.add(this.className);
        }
        return node;
    };
    ShadowBlot.prototype.attach = function () {
        if (this.parent != null) {
            this.scroll = this.parent.scroll;
        }
    };
    ShadowBlot.prototype.clone = function () {
        var domNode = this.domNode.cloneNode(false);
        return Registry.create(domNode);
    };
    ShadowBlot.prototype.detach = function () {
        if (this.parent != null)
            this.parent.removeChild(this);
        // @ts-ignore
        delete this.domNode[Registry.DATA_KEY];
    };
    ShadowBlot.prototype.deleteAt = function (index, length) {
        var blot = this.isolate(index, length);
        blot.remove();
    };
    ShadowBlot.prototype.formatAt = function (index, length, name, value) {
        var blot = this.isolate(index, length);
        if (Registry.query(name, Registry.Scope.BLOT) != null && value) {
            blot.wrap(name, value);
        }
        else if (Registry.query(name, Registry.Scope.ATTRIBUTE) != null) {
            var parent_1 = Registry.create(this.statics.scope);
            blot.wrap(parent_1);
            parent_1.format(name, value);
        }
    };
    ShadowBlot.prototype.insertAt = function (index, value, def) {
        var blot = def == null ? Registry.create('text', value) : Registry.create(value, def);
        var ref = this.split(index);
        this.parent.insertBefore(blot, ref);
    };
    ShadowBlot.prototype.insertInto = function (parentBlot, refBlot) {
        if (refBlot === void 0) { refBlot = null; }
        if (this.parent != null) {
            this.parent.children.remove(this);
        }
        var refDomNode = null;
        parentBlot.children.insertBefore(this, refBlot);
        if (refBlot != null) {
            refDomNode = refBlot.domNode;
        }
        if (this.domNode.parentNode != parentBlot.domNode ||
            this.domNode.nextSibling != refDomNode) {
            parentBlot.domNode.insertBefore(this.domNode, refDomNode);
        }
        this.parent = parentBlot;
        this.attach();
    };
    ShadowBlot.prototype.isolate = function (index, length) {
        var target = this.split(index);
        target.split(length);
        return target;
    };
    ShadowBlot.prototype.length = function () {
        return 1;
    };
    ShadowBlot.prototype.offset = function (root) {
        if (root === void 0) { root = this.parent; }
        if (this.parent == null || this == root)
            return 0;
        return this.parent.children.offset(this) + this.parent.offset(root);
    };
    ShadowBlot.prototype.optimize = function (context) {
        // TODO clean up once we use WeakMap
        // @ts-ignore
        if (this.domNode[Registry.DATA_KEY] != null) {
            // @ts-ignore
            delete this.domNode[Registry.DATA_KEY].mutations;
        }
    };
    ShadowBlot.prototype.remove = function () {
        if (this.domNode.parentNode != null) {
            this.domNode.parentNode.removeChild(this.domNode);
        }
        this.detach();
    };
    ShadowBlot.prototype.replace = function (target) {
        if (target.parent == null)
            return;
        target.parent.insertBefore(this, target.next);
        target.remove();
    };
    ShadowBlot.prototype.replaceWith = function (name, value) {
        var replacement = typeof name === 'string' ? Registry.create(name, value) : name;
        replacement.replace(this);
        return replacement;
    };
    ShadowBlot.prototype.split = function (index, force) {
        return index === 0 ? this : this.next;
    };
    ShadowBlot.prototype.update = function (mutations, context) {
        // Nothing to do by default
    };
    ShadowBlot.prototype.wrap = function (name, value) {
        var wrapper = typeof name === 'string' ? Registry.create(name, value) : name;
        if (this.parent != null) {
            this.parent.insertBefore(wrapper, this.next);
        }
        wrapper.appendChild(this);
        return wrapper;
    };
    ShadowBlot.blotName = 'abstract';
    return ShadowBlot;
}());
exports.default = ShadowBlot;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var attributor_1 = __webpack_require__(1);
var class_1 = __webpack_require__(7);
var style_1 = __webpack_require__(8);
var Registry = __webpack_require__(0);
var AttributorStore = /** @class */ (function () {
    function AttributorStore(domNode) {
        this.attributes = {};
        this.domNode = domNode;
        this.build();
    }
    AttributorStore.prototype.attribute = function (attribute, value) {
        // verb
        if (value) {
            if (attribute.add(this.domNode, value)) {
                if (attribute.value(this.domNode) != null) {
                    this.attributes[attribute.attrName] = attribute;
                }
                else {
                    delete this.attributes[attribute.attrName];
                }
            }
        }
        else {
            attribute.remove(this.domNode);
            delete this.attributes[attribute.attrName];
        }
    };
    AttributorStore.prototype.build = function () {
        var _this = this;
        this.attributes = {};
        var attributes = attributor_1.default.keys(this.domNode);
        var classes = class_1.default.keys(this.domNode);
        var styles = style_1.default.keys(this.domNode);
        attributes
            .concat(classes)
            .concat(styles)
            .forEach(function (name) {
            var attr = Registry.query(name, Registry.Scope.ATTRIBUTE);
            if (attr instanceof attributor_1.default) {
                _this.attributes[attr.attrName] = attr;
            }
        });
    };
    AttributorStore.prototype.copy = function (target) {
        var _this = this;
        Object.keys(this.attributes).forEach(function (key) {
            var value = _this.attributes[key].value(_this.domNode);
            target.format(key, value);
        });
    };
    AttributorStore.prototype.move = function (target) {
        var _this = this;
        this.copy(target);
        Object.keys(this.attributes).forEach(function (key) {
            _this.attributes[key].remove(_this.domNode);
        });
        this.attributes = {};
    };
    AttributorStore.prototype.values = function () {
        var _this = this;
        return Object.keys(this.attributes).reduce(function (attributes, name) {
            attributes[name] = _this.attributes[name].value(_this.domNode);
            return attributes;
        }, {});
    };
    return AttributorStore;
}());
exports.default = AttributorStore;


/***/ }),
/* 7 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var attributor_1 = __webpack_require__(1);
function match(node, prefix) {
    var className = node.getAttribute('class') || '';
    return className.split(/\s+/).filter(function (name) {
        return name.indexOf(prefix + "-") === 0;
    });
}
var ClassAttributor = /** @class */ (function (_super) {
    __extends(ClassAttributor, _super);
    function ClassAttributor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassAttributor.keys = function (node) {
        return (node.getAttribute('class') || '').split(/\s+/).map(function (name) {
            return name
                .split('-')
                .slice(0, -1)
                .join('-');
        });
    };
    ClassAttributor.prototype.add = function (node, value) {
        if (!this.canAdd(node, value))
            return false;
        this.remove(node);
        node.classList.add(this.keyName + "-" + value);
        return true;
    };
    ClassAttributor.prototype.remove = function (node) {
        var matches = match(node, this.keyName);
        matches.forEach(function (name) {
            node.classList.remove(name);
        });
        if (node.classList.length === 0) {
            node.removeAttribute('class');
        }
    };
    ClassAttributor.prototype.value = function (node) {
        var result = match(node, this.keyName)[0] || '';
        var value = result.slice(this.keyName.length + 1); // +1 for hyphen
        return this.canAdd(node, value) ? value : '';
    };
    return ClassAttributor;
}(attributor_1.default));
exports.default = ClassAttributor;


/***/ }),
/* 8 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var attributor_1 = __webpack_require__(1);
function camelize(name) {
    var parts = name.split('-');
    var rest = parts
        .slice(1)
        .map(function (part) {
        return part[0].toUpperCase() + part.slice(1);
    })
        .join('');
    return parts[0] + rest;
}
var StyleAttributor = /** @class */ (function (_super) {
    __extends(StyleAttributor, _super);
    function StyleAttributor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StyleAttributor.keys = function (node) {
        return (node.getAttribute('style') || '').split(';').map(function (value) {
            var arr = value.split(':');
            return arr[0].trim();
        });
    };
    StyleAttributor.prototype.add = function (node, value) {
        if (!this.canAdd(node, value))
            return false;
        // @ts-ignore
        node.style[camelize(this.keyName)] = value;
        return true;
    };
    StyleAttributor.prototype.remove = function (node) {
        // @ts-ignore
        node.style[camelize(this.keyName)] = '';
        if (!node.getAttribute('style')) {
            node.removeAttribute('style');
        }
    };
    StyleAttributor.prototype.value = function (node) {
        // @ts-ignore
        var value = node.style[camelize(this.keyName)];
        return this.canAdd(node, value) ? value : '';
    };
    return StyleAttributor;
}(attributor_1.default));
exports.default = StyleAttributor;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = __webpack_require__(2);
var format_1 = __webpack_require__(3);
var leaf_1 = __webpack_require__(4);
var scroll_1 = __webpack_require__(12);
var inline_1 = __webpack_require__(13);
var block_1 = __webpack_require__(14);
var embed_1 = __webpack_require__(15);
var text_1 = __webpack_require__(16);
var attributor_1 = __webpack_require__(1);
var class_1 = __webpack_require__(7);
var style_1 = __webpack_require__(8);
var store_1 = __webpack_require__(6);
var Registry = __webpack_require__(0);
var Parchment = {
    Scope: Registry.Scope,
    create: Registry.create,
    find: Registry.find,
    query: Registry.query,
    register: Registry.register,
    Container: container_1.default,
    Format: format_1.default,
    Leaf: leaf_1.default,
    Embed: embed_1.default,
    Scroll: scroll_1.default,
    Block: block_1.default,
    Inline: inline_1.default,
    Text: text_1.default,
    Attributor: {
        Attribute: attributor_1.default,
        Class: class_1.default,
        Style: style_1.default,
        Store: store_1.default,
    },
};
exports.default = Parchment;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = this.tail = null;
        this.length = 0;
    }
    LinkedList.prototype.append = function () {
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        this.insertBefore(nodes[0], null);
        if (nodes.length > 1) {
            this.append.apply(this, nodes.slice(1));
        }
    };
    LinkedList.prototype.contains = function (node) {
        var cur, next = this.iterator();
        while ((cur = next())) {
            if (cur === node)
                return true;
        }
        return false;
    };
    LinkedList.prototype.insertBefore = function (node, refNode) {
        if (!node)
            return;
        node.next = refNode;
        if (refNode != null) {
            node.prev = refNode.prev;
            if (refNode.prev != null) {
                refNode.prev.next = node;
            }
            refNode.prev = node;
            if (refNode === this.head) {
                this.head = node;
            }
        }
        else if (this.tail != null) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        else {
            node.prev = null;
            this.head = this.tail = node;
        }
        this.length += 1;
    };
    LinkedList.prototype.offset = function (target) {
        var index = 0, cur = this.head;
        while (cur != null) {
            if (cur === target)
                return index;
            index += cur.length();
            cur = cur.next;
        }
        return -1;
    };
    LinkedList.prototype.remove = function (node) {
        if (!this.contains(node))
            return;
        if (node.prev != null)
            node.prev.next = node.next;
        if (node.next != null)
            node.next.prev = node.prev;
        if (node === this.head)
            this.head = node.next;
        if (node === this.tail)
            this.tail = node.prev;
        this.length -= 1;
    };
    LinkedList.prototype.iterator = function (curNode) {
        if (curNode === void 0) { curNode = this.head; }
        // TODO use yield when we can
        return function () {
            var ret = curNode;
            if (curNode != null)
                curNode = curNode.next;
            return ret;
        };
    };
    LinkedList.prototype.find = function (index, inclusive) {
        if (inclusive === void 0) { inclusive = false; }
        var cur, next = this.iterator();
        while ((cur = next())) {
            var length_1 = cur.length();
            if (index < length_1 ||
                (inclusive && index === length_1 && (cur.next == null || cur.next.length() !== 0))) {
                return [cur, index];
            }
            index -= length_1;
        }
        return [null, 0];
    };
    LinkedList.prototype.forEach = function (callback) {
        var cur, next = this.iterator();
        while ((cur = next())) {
            callback(cur);
        }
    };
    LinkedList.prototype.forEachAt = function (index, length, callback) {
        if (length <= 0)
            return;
        var _a = this.find(index), startNode = _a[0], offset = _a[1];
        var cur, curIndex = index - offset, next = this.iterator(startNode);
        while ((cur = next()) && curIndex < index + length) {
            var curLength = cur.length();
            if (index > curIndex) {
                callback(cur, index - curIndex, Math.min(length, curIndex + curLength - index));
            }
            else {
                callback(cur, 0, Math.min(curLength, index + length - curIndex));
            }
            curIndex += curLength;
        }
    };
    LinkedList.prototype.map = function (callback) {
        return this.reduce(function (memo, cur) {
            memo.push(callback(cur));
            return memo;
        }, []);
    };
    LinkedList.prototype.reduce = function (callback, memo) {
        var cur, next = this.iterator();
        while ((cur = next())) {
            memo = callback(memo, cur);
        }
        return memo;
    };
    return LinkedList;
}());
exports.default = LinkedList;


/***/ }),
/* 12 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = __webpack_require__(2);
var Registry = __webpack_require__(0);
var OBSERVER_CONFIG = {
    attributes: true,
    characterData: true,
    characterDataOldValue: true,
    childList: true,
    subtree: true,
};
var MAX_OPTIMIZE_ITERATIONS = 100;
var ScrollBlot = /** @class */ (function (_super) {
    __extends(ScrollBlot, _super);
    function ScrollBlot(node) {
        var _this = _super.call(this, node) || this;
        _this.scroll = _this;
        _this.observer = new MutationObserver(function (mutations) {
            _this.update(mutations);
        });
        _this.observer.observe(_this.domNode, OBSERVER_CONFIG);
        _this.attach();
        return _this;
    }
    ScrollBlot.prototype.detach = function () {
        _super.prototype.detach.call(this);
        this.observer.disconnect();
    };
    ScrollBlot.prototype.deleteAt = function (index, length) {
        this.update();
        if (index === 0 && length === this.length()) {
            this.children.forEach(function (child) {
                child.remove();
            });
        }
        else {
            _super.prototype.deleteAt.call(this, index, length);
        }
    };
    ScrollBlot.prototype.formatAt = function (index, length, name, value) {
        this.update();
        _super.prototype.formatAt.call(this, index, length, name, value);
    };
    ScrollBlot.prototype.insertAt = function (index, value, def) {
        this.update();
        _super.prototype.insertAt.call(this, index, value, def);
    };
    ScrollBlot.prototype.optimize = function (mutations, context) {
        var _this = this;
        if (mutations === void 0) { mutations = []; }
        if (context === void 0) { context = {}; }
        _super.prototype.optimize.call(this, context);
        // We must modify mutations directly, cannot make copy and then modify
        var records = [].slice.call(this.observer.takeRecords());
        // Array.push currently seems to be implemented by a non-tail recursive function
        // so we cannot just mutations.push.apply(mutations, this.observer.takeRecords());
        while (records.length > 0)
            mutations.push(records.pop());
        // TODO use WeakMap
        var mark = function (blot, markParent) {
            if (markParent === void 0) { markParent = true; }
            if (blot == null || blot === _this)
                return;
            if (blot.domNode.parentNode == null)
                return;
            // @ts-ignore
            if (blot.domNode[Registry.DATA_KEY].mutations == null) {
                // @ts-ignore
                blot.domNode[Registry.DATA_KEY].mutations = [];
            }
            if (markParent)
                mark(blot.parent);
        };
        var optimize = function (blot) {
            // Post-order traversal
            if (
            // @ts-ignore
            blot.domNode[Registry.DATA_KEY] == null ||
                // @ts-ignore
                blot.domNode[Registry.DATA_KEY].mutations == null) {
                return;
            }
            if (blot instanceof container_1.default) {
                blot.children.forEach(optimize);
            }
            blot.optimize(context);
        };
        var remaining = mutations;
        for (var i = 0; remaining.length > 0; i += 1) {
            if (i >= MAX_OPTIMIZE_ITERATIONS) {
                throw new Error('[Parchment] Maximum optimize iterations reached');
            }
            remaining.forEach(function (mutation) {
                var blot = Registry.find(mutation.target, true);
                if (blot == null)
                    return;
                if (blot.domNode === mutation.target) {
                    if (mutation.type === 'childList') {
                        mark(Registry.find(mutation.previousSibling, false));
                        [].forEach.call(mutation.addedNodes, function (node) {
                            var child = Registry.find(node, false);
                            mark(child, false);
                            if (child instanceof container_1.default) {
                                child.children.forEach(function (grandChild) {
                                    mark(grandChild, false);
                                });
                            }
                        });
                    }
                    else if (mutation.type === 'attributes') {
                        mark(blot.prev);
                    }
                }
                mark(blot);
            });
            this.children.forEach(optimize);
            remaining = [].slice.call(this.observer.takeRecords());
            records = remaining.slice();
            while (records.length > 0)
                mutations.push(records.pop());
        }
    };
    ScrollBlot.prototype.update = function (mutations, context) {
        var _this = this;
        if (context === void 0) { context = {}; }
        mutations = mutations || this.observer.takeRecords();
        // TODO use WeakMap
        mutations
            .map(function (mutation) {
            var blot = Registry.find(mutation.target, true);
            if (blot == null)
                return null;
            // @ts-ignore
            if (blot.domNode[Registry.DATA_KEY].mutations == null) {
                // @ts-ignore
                blot.domNode[Registry.DATA_KEY].mutations = [mutation];
                return blot;
            }
            else {
                // @ts-ignore
                blot.domNode[Registry.DATA_KEY].mutations.push(mutation);
                return null;
            }
        })
            .forEach(function (blot) {
            if (blot == null ||
                blot === _this ||
                //@ts-ignore
                blot.domNode[Registry.DATA_KEY] == null)
                return;
            // @ts-ignore
            blot.update(blot.domNode[Registry.DATA_KEY].mutations || [], context);
        });
        // @ts-ignore
        if (this.domNode[Registry.DATA_KEY].mutations != null) {
            // @ts-ignore
            _super.prototype.update.call(this, this.domNode[Registry.DATA_KEY].mutations, context);
        }
        this.optimize(mutations, context);
    };
    ScrollBlot.blotName = 'scroll';
    ScrollBlot.defaultChild = 'block';
    ScrollBlot.scope = Registry.Scope.BLOCK_BLOT;
    ScrollBlot.tagName = 'DIV';
    return ScrollBlot;
}(container_1.default));
exports.default = ScrollBlot;


/***/ }),
/* 13 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var format_1 = __webpack_require__(3);
var Registry = __webpack_require__(0);
// Shallow object comparison
function isEqual(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length)
        return false;
    // @ts-ignore
    for (var prop in obj1) {
        // @ts-ignore
        if (obj1[prop] !== obj2[prop])
            return false;
    }
    return true;
}
var InlineBlot = /** @class */ (function (_super) {
    __extends(InlineBlot, _super);
    function InlineBlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InlineBlot.formats = function (domNode) {
        if (domNode.tagName === InlineBlot.tagName)
            return undefined;
        return _super.formats.call(this, domNode);
    };
    InlineBlot.prototype.format = function (name, value) {
        var _this = this;
        if (name === this.statics.blotName && !value) {
            this.children.forEach(function (child) {
                if (!(child instanceof format_1.default)) {
                    child = child.wrap(InlineBlot.blotName, true);
                }
                _this.attributes.copy(child);
            });
            this.unwrap();
        }
        else {
            _super.prototype.format.call(this, name, value);
        }
    };
    InlineBlot.prototype.formatAt = function (index, length, name, value) {
        if (this.formats()[name] != null || Registry.query(name, Registry.Scope.ATTRIBUTE)) {
            var blot = this.isolate(index, length);
            blot.format(name, value);
        }
        else {
            _super.prototype.formatAt.call(this, index, length, name, value);
        }
    };
    InlineBlot.prototype.optimize = function (context) {
        _super.prototype.optimize.call(this, context);
        var formats = this.formats();
        if (Object.keys(formats).length === 0) {
            return this.unwrap(); // unformatted span
        }
        var next = this.next;
        if (next instanceof InlineBlot && next.prev === this && isEqual(formats, next.formats())) {
            next.moveChildren(this);
            next.remove();
        }
    };
    InlineBlot.blotName = 'inline';
    InlineBlot.scope = Registry.Scope.INLINE_BLOT;
    InlineBlot.tagName = 'SPAN';
    return InlineBlot;
}(format_1.default));
exports.default = InlineBlot;


/***/ }),
/* 14 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var format_1 = __webpack_require__(3);
var Registry = __webpack_require__(0);
var BlockBlot = /** @class */ (function (_super) {
    __extends(BlockBlot, _super);
    function BlockBlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlockBlot.formats = function (domNode) {
        var tagName = Registry.query(BlockBlot.blotName).tagName;
        if (domNode.tagName === tagName)
            return undefined;
        return _super.formats.call(this, domNode);
    };
    BlockBlot.prototype.format = function (name, value) {
        if (Registry.query(name, Registry.Scope.BLOCK) == null) {
            return;
        }
        else if (name === this.statics.blotName && !value) {
            this.replaceWith(BlockBlot.blotName);
        }
        else {
            _super.prototype.format.call(this, name, value);
        }
    };
    BlockBlot.prototype.formatAt = function (index, length, name, value) {
        if (Registry.query(name, Registry.Scope.BLOCK) != null) {
            this.format(name, value);
        }
        else {
            _super.prototype.formatAt.call(this, index, length, name, value);
        }
    };
    BlockBlot.prototype.insertAt = function (index, value, def) {
        if (def == null || Registry.query(value, Registry.Scope.INLINE) != null) {
            // Insert text or inline
            _super.prototype.insertAt.call(this, index, value, def);
        }
        else {
            var after = this.split(index);
            var blot = Registry.create(value, def);
            after.parent.insertBefore(blot, after);
        }
    };
    BlockBlot.prototype.update = function (mutations, context) {
        if (navigator.userAgent.match(/Trident/)) {
            this.build();
        }
        else {
            _super.prototype.update.call(this, mutations, context);
        }
    };
    BlockBlot.blotName = 'block';
    BlockBlot.scope = Registry.Scope.BLOCK_BLOT;
    BlockBlot.tagName = 'P';
    return BlockBlot;
}(format_1.default));
exports.default = BlockBlot;


/***/ }),
/* 15 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var leaf_1 = __webpack_require__(4);
var EmbedBlot = /** @class */ (function (_super) {
    __extends(EmbedBlot, _super);
    function EmbedBlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmbedBlot.formats = function (domNode) {
        return undefined;
    };
    EmbedBlot.prototype.format = function (name, value) {
        // super.formatAt wraps, which is what we want in general,
        // but this allows subclasses to overwrite for formats
        // that just apply to particular embeds
        _super.prototype.formatAt.call(this, 0, this.length(), name, value);
    };
    EmbedBlot.prototype.formatAt = function (index, length, name, value) {
        if (index === 0 && length === this.length()) {
            this.format(name, value);
        }
        else {
            _super.prototype.formatAt.call(this, index, length, name, value);
        }
    };
    EmbedBlot.prototype.formats = function () {
        return this.statics.formats(this.domNode);
    };
    return EmbedBlot;
}(leaf_1.default));
exports.default = EmbedBlot;


/***/ }),
/* 16 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var leaf_1 = __webpack_require__(4);
var Registry = __webpack_require__(0);
var TextBlot = /** @class */ (function (_super) {
    __extends(TextBlot, _super);
    function TextBlot(node) {
        var _this = _super.call(this, node) || this;
        _this.text = _this.statics.value(_this.domNode);
        return _this;
    }
    TextBlot.create = function (value) {
        return document.createTextNode(value);
    };
    TextBlot.value = function (domNode) {
        var text = domNode.data;
        // @ts-ignore
        if (text['normalize'])
            text = text['normalize']();
        return text;
    };
    TextBlot.prototype.deleteAt = function (index, length) {
        this.domNode.data = this.text = this.text.slice(0, index) + this.text.slice(index + length);
    };
    TextBlot.prototype.index = function (node, offset) {
        if (this.domNode === node) {
            return offset;
        }
        return -1;
    };
    TextBlot.prototype.insertAt = function (index, value, def) {
        if (def == null) {
            this.text = this.text.slice(0, index) + value + this.text.slice(index);
            this.domNode.data = this.text;
        }
        else {
            _super.prototype.insertAt.call(this, index, value, def);
        }
    };
    TextBlot.prototype.length = function () {
        return this.text.length;
    };
    TextBlot.prototype.optimize = function (context) {
        _super.prototype.optimize.call(this, context);
        this.text = this.statics.value(this.domNode);
        if (this.text.length === 0) {
            this.remove();
        }
        else if (this.next instanceof TextBlot && this.next.prev === this) {
            this.insertAt(this.length(), this.next.value());
            this.next.remove();
        }
    };
    TextBlot.prototype.position = function (index, inclusive) {
        if (inclusive === void 0) { inclusive = false; }
        return [this.domNode, index];
    };
    TextBlot.prototype.split = function (index, force) {
        if (force === void 0) { force = false; }
        if (!force) {
            if (index === 0)
                return this;
            if (index === this.length())
                return this.next;
        }
        var after = Registry.create(this.domNode.splitText(index));
        this.parent.insertBefore(after, this.next);
        this.text = this.statics.value(this.domNode);
        return after;
    };
    TextBlot.prototype.update = function (mutations, context) {
        var _this = this;
        if (mutations.some(function (mutation) {
            return mutation.type === 'characterData' && mutation.target === _this.domNode;
        })) {
            this.text = this.statics.value(this.domNode);
        }
    };
    TextBlot.prototype.value = function () {
        return this.text;
    };
    TextBlot.blotName = 'text';
    TextBlot.scope = Registry.Scope.INLINE_BLOT;
    return TextBlot;
}(leaf_1.default));
exports.default = TextBlot;


/***/ })
/******/ ]);
});

},{}],"../node_modules/quill/core/polyfill.js":[function(require,module,exports) {
let elem = document.createElement('div');
elem.classList.toggle('test-class', false);
if (elem.classList.contains('test-class')) {
  let _toggle = DOMTokenList.prototype.toggle;
  DOMTokenList.prototype.toggle = function(token, force) {
    if (arguments.length > 1 && !this.contains(token) === !force) {
      return force;
    } else {
      return _toggle.call(this, token);
    }
  };
}

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position){
    position = position || 0;
    return this.substr(position, searchString.length) === searchString;
  };
}

if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(searchString, position) {
    var subjectString = this.toString();
    if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
      position = subjectString.length;
    }
    position -= searchString.length;
    var lastIndex = subjectString.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
}

if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, "find", {
    value: function(predicate) {
      if (this === null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
      }
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }
      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];
      var value;

      for (var i = 0; i < length; i++) {
        value = list[i];
        if (predicate.call(thisArg, value, i, list)) {
          return value;
        }
      }
      return undefined;
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  // Disable resizing in Firefox
  document.execCommand("enableObjectResizing", false, false);
  // Disable automatic linkifying in IE11
  document.execCommand("autoUrlDetect", false, false);
});

},{}],"../node_modules/fast-diff/diff.js":[function(require,module,exports) {
/**
 * This library modifies the diff-patch-match library by Neil Fraser
 * by removing the patch and match functionality and certain advanced
 * options in the diff function. The original license is as follows:
 *
 * ===
 *
 * Diff Match and Patch
 *
 * Copyright 2006 Google Inc.
 * http://code.google.com/p/google-diff-match-patch/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * The data structure representing a diff is an array of tuples:
 * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
 * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
 */
var DIFF_DELETE = -1;
var DIFF_INSERT = 1;
var DIFF_EQUAL = 0;


/**
 * Find the differences between two texts.  Simplifies the problem by stripping
 * any common prefix or suffix off the texts before diffing.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {Int} cursor_pos Expected edit position in text1 (optional)
 * @return {Array} Array of diff tuples.
 */
function diff_main(text1, text2, cursor_pos) {
  // Check for equality (speedup).
  if (text1 == text2) {
    if (text1) {
      return [[DIFF_EQUAL, text1]];
    }
    return [];
  }

  // Check cursor_pos within bounds
  if (cursor_pos < 0 || text1.length < cursor_pos) {
    cursor_pos = null;
  }

  // Trim off common prefix (speedup).
  var commonlength = diff_commonPrefix(text1, text2);
  var commonprefix = text1.substring(0, commonlength);
  text1 = text1.substring(commonlength);
  text2 = text2.substring(commonlength);

  // Trim off common suffix (speedup).
  commonlength = diff_commonSuffix(text1, text2);
  var commonsuffix = text1.substring(text1.length - commonlength);
  text1 = text1.substring(0, text1.length - commonlength);
  text2 = text2.substring(0, text2.length - commonlength);

  // Compute the diff on the middle block.
  var diffs = diff_compute_(text1, text2);

  // Restore the prefix and suffix.
  if (commonprefix) {
    diffs.unshift([DIFF_EQUAL, commonprefix]);
  }
  if (commonsuffix) {
    diffs.push([DIFF_EQUAL, commonsuffix]);
  }
  diff_cleanupMerge(diffs);
  if (cursor_pos != null) {
    diffs = fix_cursor(diffs, cursor_pos);
  }
  diffs = fix_emoji(diffs);
  return diffs;
};


/**
 * Find the differences between two texts.  Assumes that the texts do not
 * have any common prefix or suffix.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @return {Array} Array of diff tuples.
 */
function diff_compute_(text1, text2) {
  var diffs;

  if (!text1) {
    // Just add some text (speedup).
    return [[DIFF_INSERT, text2]];
  }

  if (!text2) {
    // Just delete some text (speedup).
    return [[DIFF_DELETE, text1]];
  }

  var longtext = text1.length > text2.length ? text1 : text2;
  var shorttext = text1.length > text2.length ? text2 : text1;
  var i = longtext.indexOf(shorttext);
  if (i != -1) {
    // Shorter text is inside the longer text (speedup).
    diffs = [[DIFF_INSERT, longtext.substring(0, i)],
             [DIFF_EQUAL, shorttext],
             [DIFF_INSERT, longtext.substring(i + shorttext.length)]];
    // Swap insertions for deletions if diff is reversed.
    if (text1.length > text2.length) {
      diffs[0][0] = diffs[2][0] = DIFF_DELETE;
    }
    return diffs;
  }

  if (shorttext.length == 1) {
    // Single character string.
    // After the previous speedup, the character can't be an equality.
    return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
  }

  // Check to see if the problem can be split in two.
  var hm = diff_halfMatch_(text1, text2);
  if (hm) {
    // A half-match was found, sort out the return data.
    var text1_a = hm[0];
    var text1_b = hm[1];
    var text2_a = hm[2];
    var text2_b = hm[3];
    var mid_common = hm[4];
    // Send both pairs off for separate processing.
    var diffs_a = diff_main(text1_a, text2_a);
    var diffs_b = diff_main(text1_b, text2_b);
    // Merge the results.
    return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
  }

  return diff_bisect_(text1, text2);
};


/**
 * Find the 'middle snake' of a diff, split the problem in two
 * and return the recursively constructed diff.
 * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @return {Array} Array of diff tuples.
 * @private
 */
function diff_bisect_(text1, text2) {
  // Cache the text lengths to prevent multiple calls.
  var text1_length = text1.length;
  var text2_length = text2.length;
  var max_d = Math.ceil((text1_length + text2_length) / 2);
  var v_offset = max_d;
  var v_length = 2 * max_d;
  var v1 = new Array(v_length);
  var v2 = new Array(v_length);
  // Setting all elements to -1 is faster in Chrome & Firefox than mixing
  // integers and undefined.
  for (var x = 0; x < v_length; x++) {
    v1[x] = -1;
    v2[x] = -1;
  }
  v1[v_offset + 1] = 0;
  v2[v_offset + 1] = 0;
  var delta = text1_length - text2_length;
  // If the total number of characters is odd, then the front path will collide
  // with the reverse path.
  var front = (delta % 2 != 0);
  // Offsets for start and end of k loop.
  // Prevents mapping of space beyond the grid.
  var k1start = 0;
  var k1end = 0;
  var k2start = 0;
  var k2end = 0;
  for (var d = 0; d < max_d; d++) {
    // Walk the front path one step.
    for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
      var k1_offset = v_offset + k1;
      var x1;
      if (k1 == -d || (k1 != d && v1[k1_offset - 1] < v1[k1_offset + 1])) {
        x1 = v1[k1_offset + 1];
      } else {
        x1 = v1[k1_offset - 1] + 1;
      }
      var y1 = x1 - k1;
      while (x1 < text1_length && y1 < text2_length &&
             text1.charAt(x1) == text2.charAt(y1)) {
        x1++;
        y1++;
      }
      v1[k1_offset] = x1;
      if (x1 > text1_length) {
        // Ran off the right of the graph.
        k1end += 2;
      } else if (y1 > text2_length) {
        // Ran off the bottom of the graph.
        k1start += 2;
      } else if (front) {
        var k2_offset = v_offset + delta - k1;
        if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] != -1) {
          // Mirror x2 onto top-left coordinate system.
          var x2 = text1_length - v2[k2_offset];
          if (x1 >= x2) {
            // Overlap detected.
            return diff_bisectSplit_(text1, text2, x1, y1);
          }
        }
      }
    }

    // Walk the reverse path one step.
    for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
      var k2_offset = v_offset + k2;
      var x2;
      if (k2 == -d || (k2 != d && v2[k2_offset - 1] < v2[k2_offset + 1])) {
        x2 = v2[k2_offset + 1];
      } else {
        x2 = v2[k2_offset - 1] + 1;
      }
      var y2 = x2 - k2;
      while (x2 < text1_length && y2 < text2_length &&
             text1.charAt(text1_length - x2 - 1) ==
             text2.charAt(text2_length - y2 - 1)) {
        x2++;
        y2++;
      }
      v2[k2_offset] = x2;
      if (x2 > text1_length) {
        // Ran off the left of the graph.
        k2end += 2;
      } else if (y2 > text2_length) {
        // Ran off the top of the graph.
        k2start += 2;
      } else if (!front) {
        var k1_offset = v_offset + delta - k2;
        if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] != -1) {
          var x1 = v1[k1_offset];
          var y1 = v_offset + x1 - k1_offset;
          // Mirror x2 onto top-left coordinate system.
          x2 = text1_length - x2;
          if (x1 >= x2) {
            // Overlap detected.
            return diff_bisectSplit_(text1, text2, x1, y1);
          }
        }
      }
    }
  }
  // Diff took too long and hit the deadline or
  // number of diffs equals number of characters, no commonality at all.
  return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
};


/**
 * Given the location of the 'middle snake', split the diff in two parts
 * and recurse.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {number} x Index of split point in text1.
 * @param {number} y Index of split point in text2.
 * @return {Array} Array of diff tuples.
 */
function diff_bisectSplit_(text1, text2, x, y) {
  var text1a = text1.substring(0, x);
  var text2a = text2.substring(0, y);
  var text1b = text1.substring(x);
  var text2b = text2.substring(y);

  // Compute both diffs serially.
  var diffs = diff_main(text1a, text2a);
  var diffsb = diff_main(text1b, text2b);

  return diffs.concat(diffsb);
};


/**
 * Determine the common prefix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the start of each
 *     string.
 */
function diff_commonPrefix(text1, text2) {
  // Quick check for common null cases.
  if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
    return 0;
  }
  // Binary search.
  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerstart = 0;
  while (pointermin < pointermid) {
    if (text1.substring(pointerstart, pointermid) ==
        text2.substring(pointerstart, pointermid)) {
      pointermin = pointermid;
      pointerstart = pointermin;
    } else {
      pointermax = pointermid;
    }
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }
  return pointermid;
};


/**
 * Determine the common suffix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the end of each string.
 */
function diff_commonSuffix(text1, text2) {
  // Quick check for common null cases.
  if (!text1 || !text2 ||
      text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) {
    return 0;
  }
  // Binary search.
  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerend = 0;
  while (pointermin < pointermid) {
    if (text1.substring(text1.length - pointermid, text1.length - pointerend) ==
        text2.substring(text2.length - pointermid, text2.length - pointerend)) {
      pointermin = pointermid;
      pointerend = pointermin;
    } else {
      pointermax = pointermid;
    }
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }
  return pointermid;
};


/**
 * Do the two texts share a substring which is at least half the length of the
 * longer text?
 * This speedup can produce non-minimal diffs.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {Array.<string>} Five element Array, containing the prefix of
 *     text1, the suffix of text1, the prefix of text2, the suffix of
 *     text2 and the common middle.  Or null if there was no match.
 */
function diff_halfMatch_(text1, text2) {
  var longtext = text1.length > text2.length ? text1 : text2;
  var shorttext = text1.length > text2.length ? text2 : text1;
  if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
    return null;  // Pointless.
  }

  /**
   * Does a substring of shorttext exist within longtext such that the substring
   * is at least half the length of longtext?
   * Closure, but does not reference any external variables.
   * @param {string} longtext Longer string.
   * @param {string} shorttext Shorter string.
   * @param {number} i Start index of quarter length substring within longtext.
   * @return {Array.<string>} Five element Array, containing the prefix of
   *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
   *     of shorttext and the common middle.  Or null if there was no match.
   * @private
   */
  function diff_halfMatchI_(longtext, shorttext, i) {
    // Start with a 1/4 length substring at position i as a seed.
    var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
    var j = -1;
    var best_common = '';
    var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
    while ((j = shorttext.indexOf(seed, j + 1)) != -1) {
      var prefixLength = diff_commonPrefix(longtext.substring(i),
                                           shorttext.substring(j));
      var suffixLength = diff_commonSuffix(longtext.substring(0, i),
                                           shorttext.substring(0, j));
      if (best_common.length < suffixLength + prefixLength) {
        best_common = shorttext.substring(j - suffixLength, j) +
            shorttext.substring(j, j + prefixLength);
        best_longtext_a = longtext.substring(0, i - suffixLength);
        best_longtext_b = longtext.substring(i + prefixLength);
        best_shorttext_a = shorttext.substring(0, j - suffixLength);
        best_shorttext_b = shorttext.substring(j + prefixLength);
      }
    }
    if (best_common.length * 2 >= longtext.length) {
      return [best_longtext_a, best_longtext_b,
              best_shorttext_a, best_shorttext_b, best_common];
    } else {
      return null;
    }
  }

  // First check if the second quarter is the seed for a half-match.
  var hm1 = diff_halfMatchI_(longtext, shorttext,
                             Math.ceil(longtext.length / 4));
  // Check again based on the third quarter.
  var hm2 = diff_halfMatchI_(longtext, shorttext,
                             Math.ceil(longtext.length / 2));
  var hm;
  if (!hm1 && !hm2) {
    return null;
  } else if (!hm2) {
    hm = hm1;
  } else if (!hm1) {
    hm = hm2;
  } else {
    // Both matched.  Select the longest.
    hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
  }

  // A half-match was found, sort out the return data.
  var text1_a, text1_b, text2_a, text2_b;
  if (text1.length > text2.length) {
    text1_a = hm[0];
    text1_b = hm[1];
    text2_a = hm[2];
    text2_b = hm[3];
  } else {
    text2_a = hm[0];
    text2_b = hm[1];
    text1_a = hm[2];
    text1_b = hm[3];
  }
  var mid_common = hm[4];
  return [text1_a, text1_b, text2_a, text2_b, mid_common];
};


/**
 * Reorder and merge like edit sections.  Merge equalities.
 * Any edit section can move as long as it doesn't cross an equality.
 * @param {Array} diffs Array of diff tuples.
 */
function diff_cleanupMerge(diffs) {
  diffs.push([DIFF_EQUAL, '']);  // Add a dummy entry at the end.
  var pointer = 0;
  var count_delete = 0;
  var count_insert = 0;
  var text_delete = '';
  var text_insert = '';
  var commonlength;
  while (pointer < diffs.length) {
    switch (diffs[pointer][0]) {
      case DIFF_INSERT:
        count_insert++;
        text_insert += diffs[pointer][1];
        pointer++;
        break;
      case DIFF_DELETE:
        count_delete++;
        text_delete += diffs[pointer][1];
        pointer++;
        break;
      case DIFF_EQUAL:
        // Upon reaching an equality, check for prior redundancies.
        if (count_delete + count_insert > 1) {
          if (count_delete !== 0 && count_insert !== 0) {
            // Factor out any common prefixies.
            commonlength = diff_commonPrefix(text_insert, text_delete);
            if (commonlength !== 0) {
              if ((pointer - count_delete - count_insert) > 0 &&
                  diffs[pointer - count_delete - count_insert - 1][0] ==
                  DIFF_EQUAL) {
                diffs[pointer - count_delete - count_insert - 1][1] +=
                    text_insert.substring(0, commonlength);
              } else {
                diffs.splice(0, 0, [DIFF_EQUAL,
                                    text_insert.substring(0, commonlength)]);
                pointer++;
              }
              text_insert = text_insert.substring(commonlength);
              text_delete = text_delete.substring(commonlength);
            }
            // Factor out any common suffixies.
            commonlength = diff_commonSuffix(text_insert, text_delete);
            if (commonlength !== 0) {
              diffs[pointer][1] = text_insert.substring(text_insert.length -
                  commonlength) + diffs[pointer][1];
              text_insert = text_insert.substring(0, text_insert.length -
                  commonlength);
              text_delete = text_delete.substring(0, text_delete.length -
                  commonlength);
            }
          }
          // Delete the offending records and add the merged ones.
          if (count_delete === 0) {
            diffs.splice(pointer - count_insert,
                count_delete + count_insert, [DIFF_INSERT, text_insert]);
          } else if (count_insert === 0) {
            diffs.splice(pointer - count_delete,
                count_delete + count_insert, [DIFF_DELETE, text_delete]);
          } else {
            diffs.splice(pointer - count_delete - count_insert,
                count_delete + count_insert, [DIFF_DELETE, text_delete],
                [DIFF_INSERT, text_insert]);
          }
          pointer = pointer - count_delete - count_insert +
                    (count_delete ? 1 : 0) + (count_insert ? 1 : 0) + 1;
        } else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
          // Merge this equality with the previous one.
          diffs[pointer - 1][1] += diffs[pointer][1];
          diffs.splice(pointer, 1);
        } else {
          pointer++;
        }
        count_insert = 0;
        count_delete = 0;
        text_delete = '';
        text_insert = '';
        break;
    }
  }
  if (diffs[diffs.length - 1][1] === '') {
    diffs.pop();  // Remove the dummy entry at the end.
  }

  // Second pass: look for single edits surrounded on both sides by equalities
  // which can be shifted sideways to eliminate an equality.
  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
  var changes = false;
  pointer = 1;
  // Intentionally ignore the first and last element (don't need checking).
  while (pointer < diffs.length - 1) {
    if (diffs[pointer - 1][0] == DIFF_EQUAL &&
        diffs[pointer + 1][0] == DIFF_EQUAL) {
      // This is a single edit surrounded by equalities.
      if (diffs[pointer][1].substring(diffs[pointer][1].length -
          diffs[pointer - 1][1].length) == diffs[pointer - 1][1]) {
        // Shift the edit over the previous equality.
        diffs[pointer][1] = diffs[pointer - 1][1] +
            diffs[pointer][1].substring(0, diffs[pointer][1].length -
                                        diffs[pointer - 1][1].length);
        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
        diffs.splice(pointer - 1, 1);
        changes = true;
      } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) ==
          diffs[pointer + 1][1]) {
        // Shift the edit over the next equality.
        diffs[pointer - 1][1] += diffs[pointer + 1][1];
        diffs[pointer][1] =
            diffs[pointer][1].substring(diffs[pointer + 1][1].length) +
            diffs[pointer + 1][1];
        diffs.splice(pointer + 1, 1);
        changes = true;
      }
    }
    pointer++;
  }
  // If shifts were made, the diff needs reordering and another shift sweep.
  if (changes) {
    diff_cleanupMerge(diffs);
  }
};


var diff = diff_main;
diff.INSERT = DIFF_INSERT;
diff.DELETE = DIFF_DELETE;
diff.EQUAL = DIFF_EQUAL;

module.exports = diff;

/*
 * Modify a diff such that the cursor position points to the start of a change:
 * E.g.
 *   cursor_normalize_diff([[DIFF_EQUAL, 'abc']], 1)
 *     => [1, [[DIFF_EQUAL, 'a'], [DIFF_EQUAL, 'bc']]]
 *   cursor_normalize_diff([[DIFF_INSERT, 'new'], [DIFF_DELETE, 'xyz']], 2)
 *     => [2, [[DIFF_INSERT, 'new'], [DIFF_DELETE, 'xy'], [DIFF_DELETE, 'z']]]
 *
 * @param {Array} diffs Array of diff tuples
 * @param {Int} cursor_pos Suggested edit position. Must not be out of bounds!
 * @return {Array} A tuple [cursor location in the modified diff, modified diff]
 */
function cursor_normalize_diff (diffs, cursor_pos) {
  if (cursor_pos === 0) {
    return [DIFF_EQUAL, diffs];
  }
  for (var current_pos = 0, i = 0; i < diffs.length; i++) {
    var d = diffs[i];
    if (d[0] === DIFF_DELETE || d[0] === DIFF_EQUAL) {
      var next_pos = current_pos + d[1].length;
      if (cursor_pos === next_pos) {
        return [i + 1, diffs];
      } else if (cursor_pos < next_pos) {
        // copy to prevent side effects
        diffs = diffs.slice();
        // split d into two diff changes
        var split_pos = cursor_pos - current_pos;
        var d_left = [d[0], d[1].slice(0, split_pos)];
        var d_right = [d[0], d[1].slice(split_pos)];
        diffs.splice(i, 1, d_left, d_right);
        return [i + 1, diffs];
      } else {
        current_pos = next_pos;
      }
    }
  }
  throw new Error('cursor_pos is out of bounds!')
}

/*
 * Modify a diff such that the edit position is "shifted" to the proposed edit location (cursor_position).
 *
 * Case 1)
 *   Check if a naive shift is possible:
 *     [0, X], [ 1, Y] -> [ 1, Y], [0, X]    (if X + Y === Y + X)
 *     [0, X], [-1, Y] -> [-1, Y], [0, X]    (if X + Y === Y + X) - holds same result
 * Case 2)
 *   Check if the following shifts are possible:
 *     [0, 'pre'], [ 1, 'prefix'] -> [ 1, 'pre'], [0, 'pre'], [ 1, 'fix']
 *     [0, 'pre'], [-1, 'prefix'] -> [-1, 'pre'], [0, 'pre'], [-1, 'fix']
 *         ^            ^
 *         d          d_next
 *
 * @param {Array} diffs Array of diff tuples
 * @param {Int} cursor_pos Suggested edit position. Must not be out of bounds!
 * @return {Array} Array of diff tuples
 */
function fix_cursor (diffs, cursor_pos) {
  var norm = cursor_normalize_diff(diffs, cursor_pos);
  var ndiffs = norm[1];
  var cursor_pointer = norm[0];
  var d = ndiffs[cursor_pointer];
  var d_next = ndiffs[cursor_pointer + 1];

  if (d == null) {
    // Text was deleted from end of original string,
    // cursor is now out of bounds in new string
    return diffs;
  } else if (d[0] !== DIFF_EQUAL) {
    // A modification happened at the cursor location.
    // This is the expected outcome, so we can return the original diff.
    return diffs;
  } else {
    if (d_next != null && d[1] + d_next[1] === d_next[1] + d[1]) {
      // Case 1)
      // It is possible to perform a naive shift
      ndiffs.splice(cursor_pointer, 2, d_next, d)
      return merge_tuples(ndiffs, cursor_pointer, 2)
    } else if (d_next != null && d_next[1].indexOf(d[1]) === 0) {
      // Case 2)
      // d[1] is a prefix of d_next[1]
      // We can assume that d_next[0] !== 0, since d[0] === 0
      // Shift edit locations..
      ndiffs.splice(cursor_pointer, 2, [d_next[0], d[1]], [0, d[1]]);
      var suffix = d_next[1].slice(d[1].length);
      if (suffix.length > 0) {
        ndiffs.splice(cursor_pointer + 2, 0, [d_next[0], suffix]);
      }
      return merge_tuples(ndiffs, cursor_pointer, 3)
    } else {
      // Not possible to perform any modification
      return diffs;
    }
  }
}

/*
 * Check diff did not split surrogate pairs.
 * Ex. [0, '\uD83D'], [-1, '\uDC36'], [1, '\uDC2F'] -> [-1, '\uD83D\uDC36'], [1, '\uD83D\uDC2F']
 *     '\uD83D\uDC36' === '🐶', '\uD83D\uDC2F' === '🐯'
 *
 * @param {Array} diffs Array of diff tuples
 * @return {Array} Array of diff tuples
 */
function fix_emoji (diffs) {
  var compact = false;
  var starts_with_pair_end = function(str) {
    return str.charCodeAt(0) >= 0xDC00 && str.charCodeAt(0) <= 0xDFFF;
  }
  var ends_with_pair_start = function(str) {
    return str.charCodeAt(str.length-1) >= 0xD800 && str.charCodeAt(str.length-1) <= 0xDBFF;
  }
  for (var i = 2; i < diffs.length; i += 1) {
    if (diffs[i-2][0] === DIFF_EQUAL && ends_with_pair_start(diffs[i-2][1]) &&
        diffs[i-1][0] === DIFF_DELETE && starts_with_pair_end(diffs[i-1][1]) &&
        diffs[i][0] === DIFF_INSERT && starts_with_pair_end(diffs[i][1])) {
      compact = true;

      diffs[i-1][1] = diffs[i-2][1].slice(-1) + diffs[i-1][1];
      diffs[i][1] = diffs[i-2][1].slice(-1) + diffs[i][1];

      diffs[i-2][1] = diffs[i-2][1].slice(0, -1);
    }
  }
  if (!compact) {
    return diffs;
  }
  var fixed_diffs = [];
  for (var i = 0; i < diffs.length; i += 1) {
    if (diffs[i][1].length > 0) {
      fixed_diffs.push(diffs[i]);
    }
  }
  return fixed_diffs;
}

/*
 * Try to merge tuples with their neigbors in a given range.
 * E.g. [0, 'a'], [0, 'b'] -> [0, 'ab']
 *
 * @param {Array} diffs Array of diff tuples.
 * @param {Int} start Position of the first element to merge (diffs[start] is also merged with diffs[start - 1]).
 * @param {Int} length Number of consecutive elements to check.
 * @return {Array} Array of merged diff tuples.
 */
function merge_tuples (diffs, start, length) {
  // Check from (start-1) to (start+length).
  for (var i = start + length - 1; i >= 0 && i >= start - 1; i--) {
    if (i + 1 < diffs.length) {
      var left_d = diffs[i];
      var right_d = diffs[i+1];
      if (left_d[0] === right_d[1]) {
        diffs.splice(i, 2, [left_d[0], left_d[1] + right_d[1]]);
      }
    }
  }
  return diffs;
}

},{}],"../node_modules/object-keys/isArguments.js":[function(require,module,exports) {
'use strict';

var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
  var str = toStr.call(value);
  var isArgs = str === '[object Arguments]';

  if (!isArgs) {
    isArgs = str !== '[object Array]' && value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && toStr.call(value.callee) === '[object Function]';
  }

  return isArgs;
};
},{}],"../node_modules/object-keys/implementation.js":[function(require,module,exports) {
'use strict';

var keysShim;

if (!Object.keys) {
  // modified from https://github.com/es-shims/es5-shim
  var has = Object.prototype.hasOwnProperty;
  var toStr = Object.prototype.toString;

  var isArgs = require('./isArguments'); // eslint-disable-line global-require


  var isEnumerable = Object.prototype.propertyIsEnumerable;
  var hasDontEnumBug = !isEnumerable.call({
    toString: null
  }, 'toString');
  var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
  var dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];

  var equalsConstructorPrototype = function (o) {
    var ctor = o.constructor;
    return ctor && ctor.prototype === o;
  };

  var excludedKeys = {
    $applicationCache: true,
    $console: true,
    $external: true,
    $frame: true,
    $frameElement: true,
    $frames: true,
    $innerHeight: true,
    $innerWidth: true,
    $onmozfullscreenchange: true,
    $onmozfullscreenerror: true,
    $outerHeight: true,
    $outerWidth: true,
    $pageXOffset: true,
    $pageYOffset: true,
    $parent: true,
    $scrollLeft: true,
    $scrollTop: true,
    $scrollX: true,
    $scrollY: true,
    $self: true,
    $webkitIndexedDB: true,
    $webkitStorageInfo: true,
    $window: true
  };

  var hasAutomationEqualityBug = function () {
    /* global window */
    if (typeof window === 'undefined') {
      return false;
    }

    for (var k in window) {
      try {
        if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
          try {
            equalsConstructorPrototype(window[k]);
          } catch (e) {
            return true;
          }
        }
      } catch (e) {
        return true;
      }
    }

    return false;
  }();

  var equalsConstructorPrototypeIfNotBuggy = function (o) {
    /* global window */
    if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
      return equalsConstructorPrototype(o);
    }

    try {
      return equalsConstructorPrototype(o);
    } catch (e) {
      return false;
    }
  };

  keysShim = function keys(object) {
    var isObject = object !== null && typeof object === 'object';
    var isFunction = toStr.call(object) === '[object Function]';
    var isArguments = isArgs(object);
    var isString = isObject && toStr.call(object) === '[object String]';
    var theKeys = [];

    if (!isObject && !isFunction && !isArguments) {
      throw new TypeError('Object.keys called on a non-object');
    }

    var skipProto = hasProtoEnumBug && isFunction;

    if (isString && object.length > 0 && !has.call(object, 0)) {
      for (var i = 0; i < object.length; ++i) {
        theKeys.push(String(i));
      }
    }

    if (isArguments && object.length > 0) {
      for (var j = 0; j < object.length; ++j) {
        theKeys.push(String(j));
      }
    } else {
      for (var name in object) {
        if (!(skipProto && name === 'prototype') && has.call(object, name)) {
          theKeys.push(String(name));
        }
      }
    }

    if (hasDontEnumBug) {
      var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

      for (var k = 0; k < dontEnums.length; ++k) {
        if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
          theKeys.push(dontEnums[k]);
        }
      }
    }

    return theKeys;
  };
}

module.exports = keysShim;
},{"./isArguments":"../node_modules/object-keys/isArguments.js"}],"../node_modules/object-keys/index.js":[function(require,module,exports) {
'use strict';

var slice = Array.prototype.slice;

var isArgs = require('./isArguments');

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) {
  return origKeys(o);
} : require('./implementation');
var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
  if (Object.keys) {
    var keysWorksWithArguments = function () {
      // Safari 5.0 bug
      var args = Object.keys(arguments);
      return args && args.length === arguments.length;
    }(1, 2);

    if (!keysWorksWithArguments) {
      Object.keys = function keys(object) {
        // eslint-disable-line func-name-matching
        if (isArgs(object)) {
          return originalKeys(slice.call(object));
        }

        return originalKeys(object);
      };
    }
  } else {
    Object.keys = keysShim;
  }

  return Object.keys || keysShim;
};

module.exports = keysShim;
},{"./isArguments":"../node_modules/object-keys/isArguments.js","./implementation":"../node_modules/object-keys/implementation.js"}],"../node_modules/is-arguments/index.js":[function(require,module,exports) {
'use strict';

var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
var toStr = Object.prototype.toString;

var isStandardArguments = function isArguments(value) {
  if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
    return false;
  }

  return toStr.call(value) === '[object Arguments]';
};

var isLegacyArguments = function isArguments(value) {
  if (isStandardArguments(value)) {
    return true;
  }

  return value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && toStr.call(value) !== '[object Array]' && toStr.call(value.callee) === '[object Function]';
};

var supportsStandardArguments = function () {
  return isStandardArguments(arguments);
}();

isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
},{}],"../node_modules/object-is/index.js":[function(require,module,exports) {
"use strict";
/* https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.is */

var NumberIsNaN = function (value) {
  return value !== value;
};

module.exports = function is(a, b) {
  if (a === 0 && b === 0) {
    return 1 / a === 1 / b;
  } else if (a === b) {
    return true;
  } else if (NumberIsNaN(a) && NumberIsNaN(b)) {
    return true;
  }

  return false;
};
},{}],"../node_modules/function-bind/implementation.js":[function(require,module,exports) {
'use strict';

/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};

},{}],"../node_modules/function-bind/index.js":[function(require,module,exports) {
'use strict';

var implementation = require('./implementation');

module.exports = Function.prototype.bind || implementation;

},{"./implementation":"../node_modules/function-bind/implementation.js"}],"../node_modules/has/src/index.js":[function(require,module,exports) {
'use strict';

var bind = require('function-bind');

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
},{"function-bind":"../node_modules/function-bind/index.js"}],"../node_modules/is-regex/index.js":[function(require,module,exports) {
'use strict';

var has = require('has');

var regexExec = RegExp.prototype.exec;
var gOPD = Object.getOwnPropertyDescriptor;

var tryRegexExecCall = function tryRegexExec(value) {
  try {
    var lastIndex = value.lastIndex;
    value.lastIndex = 0;
    regexExec.call(value);
    return true;
  } catch (e) {
    return false;
  } finally {
    value.lastIndex = lastIndex;
  }
};

var toStr = Object.prototype.toString;
var regexClass = '[object RegExp]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isRegex(value) {
  if (!value || typeof value !== 'object') {
    return false;
  }

  if (!hasToStringTag) {
    return toStr.call(value) === regexClass;
  }

  var descriptor = gOPD(value, 'lastIndex');
  var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');

  if (!hasLastIndexDataProperty) {
    return false;
  }

  return tryRegexExecCall(value);
};
},{"has":"../node_modules/has/src/index.js"}],"../node_modules/define-properties/index.js":[function(require,module,exports) {
'use strict';

var keys = require('object-keys');

var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';
var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
  return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
  var obj = {};

  try {
    origDefineProperty(obj, 'x', {
      enumerable: false,
      value: obj
    }); // eslint-disable-next-line no-unused-vars, no-restricted-syntax

    for (var _ in obj) {
      // jscs:ignore disallowUnusedVariables
      return false;
    }

    return obj.x === obj;
  } catch (e) {
    /* this is IE 8. */
    return false;
  }
};

var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
  if (name in object && (!isFunction(predicate) || !predicate())) {
    return;
  }

  if (supportsDescriptors) {
    origDefineProperty(object, name, {
      configurable: true,
      enumerable: false,
      value: value,
      writable: true
    });
  } else {
    object[name] = value;
  }
};

var defineProperties = function (object, map) {
  var predicates = arguments.length > 2 ? arguments[2] : {};
  var props = keys(map);

  if (hasSymbols) {
    props = concat.call(props, Object.getOwnPropertySymbols(map));
  }

  for (var i = 0; i < props.length; i += 1) {
    defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
  }
};

defineProperties.supportsDescriptors = !!supportsDescriptors;
module.exports = defineProperties;
},{"object-keys":"../node_modules/object-keys/index.js"}],"../node_modules/regexp.prototype.flags/implementation.js":[function(require,module,exports) {
'use strict';

var toObject = Object;
var TypeErr = TypeError;

module.exports = function flags() {
  if (this != null && this !== toObject(this)) {
    throw new TypeErr('RegExp.prototype.flags getter called on non-object');
  }

  var result = '';

  if (this.global) {
    result += 'g';
  }

  if (this.ignoreCase) {
    result += 'i';
  }

  if (this.multiline) {
    result += 'm';
  }

  if (this.dotAll) {
    result += 's';
  }

  if (this.unicode) {
    result += 'u';
  }

  if (this.sticky) {
    result += 'y';
  }

  return result;
};
},{}],"../node_modules/regexp.prototype.flags/polyfill.js":[function(require,module,exports) {
'use strict';

var implementation = require('./implementation');

var supportsDescriptors = require('define-properties').supportsDescriptors;

var gOPD = Object.getOwnPropertyDescriptor;
var TypeErr = TypeError;

module.exports = function getPolyfill() {
  if (!supportsDescriptors) {
    throw new TypeErr('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
  }

  if (/a/mig.flags === 'gim') {
    var descriptor = gOPD(RegExp.prototype, 'flags');

    if (descriptor && typeof descriptor.get === 'function' && typeof /a/.dotAll === 'boolean') {
      return descriptor.get;
    }
  }

  return implementation;
};
},{"./implementation":"../node_modules/regexp.prototype.flags/implementation.js","define-properties":"../node_modules/define-properties/index.js"}],"../node_modules/regexp.prototype.flags/shim.js":[function(require,module,exports) {
'use strict';

var supportsDescriptors = require('define-properties').supportsDescriptors;

var getPolyfill = require('./polyfill');

var gOPD = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var TypeErr = TypeError;
var getProto = Object.getPrototypeOf;
var regex = /a/;

module.exports = function shimFlags() {
  if (!supportsDescriptors || !getProto) {
    throw new TypeErr('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
  }

  var polyfill = getPolyfill();
  var proto = getProto(regex);
  var descriptor = gOPD(proto, 'flags');

  if (!descriptor || descriptor.get !== polyfill) {
    defineProperty(proto, 'flags', {
      configurable: true,
      enumerable: false,
      get: polyfill
    });
  }

  return polyfill;
};
},{"define-properties":"../node_modules/define-properties/index.js","./polyfill":"../node_modules/regexp.prototype.flags/polyfill.js"}],"../node_modules/regexp.prototype.flags/index.js":[function(require,module,exports) {

'use strict';

var define = require('define-properties');

var implementation = require('./implementation');

var getPolyfill = require('./polyfill');

var shim = require('./shim');

var flagsBound = Function.call.bind(implementation);
define(flagsBound, {
  getPolyfill: getPolyfill,
  implementation: implementation,
  shim: shim
});
module.exports = flagsBound;
},{"define-properties":"../node_modules/define-properties/index.js","./implementation":"../node_modules/regexp.prototype.flags/implementation.js","./polyfill":"../node_modules/regexp.prototype.flags/polyfill.js","./shim":"../node_modules/regexp.prototype.flags/shim.js"}],"../node_modules/is-date-object/index.js":[function(require,module,exports) {
'use strict';

var getDay = Date.prototype.getDay;

var tryDateObject = function tryDateObject(value) {
  try {
    getDay.call(value);
    return true;
  } catch (e) {
    return false;
  }
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};
},{}],"../node_modules/deep-equal/index.js":[function(require,module,exports) {
var objectKeys = require('object-keys');
var isArguments = require('is-arguments');
var is = require('object-is');
var isRegex = require('is-regex');
var flags = require('regexp.prototype.flags');
var isDate = require('is-date-object');

var getTime = Date.prototype.getTime;

function deepEqual(actual, expected, options) {
  var opts = options || {};

  // 7.1. All identical values are equivalent, as determined by ===.
  if (opts.strict ? is(actual, expected) : actual === expected) {
    return true;
  }

  // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.
  if (!actual || !expected || (typeof actual !== 'object' && typeof expected !== 'object')) {
    return opts.strict ? is(actual, expected) : actual == expected;
  }

  /*
   * 7.4. For all other Object pairs, including Array objects, equivalence is
   * determined by having the same number of owned properties (as verified
   * with Object.prototype.hasOwnProperty.call), the same set of keys
   * (although not necessarily the same order), equivalent values for every
   * corresponding key, and an identical 'prototype' property. Note: this
   * accounts for both named and indexed properties on Arrays.
   */
  // eslint-disable-next-line no-use-before-define
  return objEquiv(actual, expected, opts);
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer(x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') {
    return false;
  }
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') {
    return false;
  }
  return true;
}

function objEquiv(a, b, opts) {
  /* eslint max-statements: [2, 50] */
  var i, key;
  if (typeof a !== typeof b) { return false; }
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) { return false; }

  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) { return false; }

  if (isArguments(a) !== isArguments(b)) { return false; }

  var aIsRegex = isRegex(a);
  var bIsRegex = isRegex(b);
  if (aIsRegex !== bIsRegex) { return false; }
  if (aIsRegex || bIsRegex) {
    return a.source === b.source && flags(a) === flags(b);
  }

  if (isDate(a) && isDate(b)) {
    return getTime.call(a) === getTime.call(b);
  }

  var aIsBuffer = isBuffer(a);
  var bIsBuffer = isBuffer(b);
  if (aIsBuffer !== bIsBuffer) { return false; }
  if (aIsBuffer || bIsBuffer) { // && would work too, because both are true or both false here
    if (a.length !== b.length) { return false; }
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) { return false; }
    }
    return true;
  }

  if (typeof a !== typeof b) { return false; }

  try {
    var ka = objectKeys(a);
    var kb = objectKeys(b);
  } catch (e) { // happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates hasOwnProperty)
  if (ka.length !== kb.length) { return false; }

  // the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  // ~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i]) { return false; }
  }
  // equivalent values for every corresponding key, and ~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) { return false; }
  }

  return true;
}

module.exports = deepEqual;

},{"object-keys":"../node_modules/object-keys/index.js","is-arguments":"../node_modules/is-arguments/index.js","object-is":"../node_modules/object-is/index.js","is-regex":"../node_modules/is-regex/index.js","regexp.prototype.flags":"../node_modules/regexp.prototype.flags/index.js","is-date-object":"../node_modules/is-date-object/index.js"}],"../node_modules/extend/index.js":[function(require,module,exports) {
'use strict';

var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
	if (defineProperty && options.name === '__proto__') {
		defineProperty(target, options.name, {
			enumerable: true,
			configurable: true,
			value: options.newValue,
			writable: true
		});
	} else {
		target[options.name] = options.newValue;
	}
};

// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
	if (name === '__proto__') {
		if (!hasOwn.call(obj, name)) {
			return void 0;
		} else if (gOPD) {
			// In early versions of node, obj['__proto__'] is buggy when obj has
			// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
			return gOPD(obj, name).value;
		}
	}

	return obj[name];
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = getProperty(target, name);
				copy = getProperty(options, name);

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						setProperty(target, { name: name, newValue: copy });
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};

},{}],"../node_modules/quill-delta/lib/op.js":[function(require,module,exports) {
var equal = require('deep-equal');

var extend = require('extend');

var lib = {
  attributes: {
    compose: function (a, b, keepNull) {
      if (typeof a !== 'object') a = {};
      if (typeof b !== 'object') b = {};
      var attributes = extend(true, {}, b);

      if (!keepNull) {
        attributes = Object.keys(attributes).reduce(function (copy, key) {
          if (attributes[key] != null) {
            copy[key] = attributes[key];
          }

          return copy;
        }, {});
      }

      for (var key in a) {
        if (a[key] !== undefined && b[key] === undefined) {
          attributes[key] = a[key];
        }
      }

      return Object.keys(attributes).length > 0 ? attributes : undefined;
    },
    diff: function (a, b) {
      if (typeof a !== 'object') a = {};
      if (typeof b !== 'object') b = {};
      var attributes = Object.keys(a).concat(Object.keys(b)).reduce(function (attributes, key) {
        if (!equal(a[key], b[key])) {
          attributes[key] = b[key] === undefined ? null : b[key];
        }

        return attributes;
      }, {});
      return Object.keys(attributes).length > 0 ? attributes : undefined;
    },
    transform: function (a, b, priority) {
      if (typeof a !== 'object') return b;
      if (typeof b !== 'object') return undefined;
      if (!priority) return b; // b simply overwrites us without priority

      var attributes = Object.keys(b).reduce(function (attributes, key) {
        if (a[key] === undefined) attributes[key] = b[key]; // null is a valid value

        return attributes;
      }, {});
      return Object.keys(attributes).length > 0 ? attributes : undefined;
    }
  },
  iterator: function (ops) {
    return new Iterator(ops);
  },
  length: function (op) {
    if (typeof op['delete'] === 'number') {
      return op['delete'];
    } else if (typeof op.retain === 'number') {
      return op.retain;
    } else {
      return typeof op.insert === 'string' ? op.insert.length : 1;
    }
  }
};

function Iterator(ops) {
  this.ops = ops;
  this.index = 0;
  this.offset = 0;
}

;

Iterator.prototype.hasNext = function () {
  return this.peekLength() < Infinity;
};

Iterator.prototype.next = function (length) {
  if (!length) length = Infinity;
  var nextOp = this.ops[this.index];

  if (nextOp) {
    var offset = this.offset;
    var opLength = lib.length(nextOp);

    if (length >= opLength - offset) {
      length = opLength - offset;
      this.index += 1;
      this.offset = 0;
    } else {
      this.offset += length;
    }

    if (typeof nextOp['delete'] === 'number') {
      return {
        'delete': length
      };
    } else {
      var retOp = {};

      if (nextOp.attributes) {
        retOp.attributes = nextOp.attributes;
      }

      if (typeof nextOp.retain === 'number') {
        retOp.retain = length;
      } else if (typeof nextOp.insert === 'string') {
        retOp.insert = nextOp.insert.substr(offset, length);
      } else {
        // offset should === 0, length should === 1
        retOp.insert = nextOp.insert;
      }

      return retOp;
    }
  } else {
    return {
      retain: Infinity
    };
  }
};

Iterator.prototype.peek = function () {
  return this.ops[this.index];
};

Iterator.prototype.peekLength = function () {
  if (this.ops[this.index]) {
    // Should never return 0 if our index is being managed correctly
    return lib.length(this.ops[this.index]) - this.offset;
  } else {
    return Infinity;
  }
};

Iterator.prototype.peekType = function () {
  if (this.ops[this.index]) {
    if (typeof this.ops[this.index]['delete'] === 'number') {
      return 'delete';
    } else if (typeof this.ops[this.index].retain === 'number') {
      return 'retain';
    } else {
      return 'insert';
    }
  }

  return 'retain';
};

Iterator.prototype.rest = function () {
  if (!this.hasNext()) {
    return [];
  } else if (this.offset === 0) {
    return this.ops.slice(this.index);
  } else {
    var offset = this.offset;
    var index = this.index;
    var next = this.next();
    var rest = this.ops.slice(this.index);
    this.offset = offset;
    this.index = index;
    return [next].concat(rest);
  }
};

module.exports = lib;
},{"deep-equal":"../node_modules/deep-equal/index.js","extend":"../node_modules/extend/index.js"}],"../node_modules/quill-delta/lib/delta.js":[function(require,module,exports) {
var diff = require('fast-diff');

var equal = require('deep-equal');

var extend = require('extend');

var op = require('./op');

var NULL_CHARACTER = String.fromCharCode(0); // Placeholder char for embed in diff()

var Delta = function (ops) {
  // Assume we are given a well formed ops
  if (Array.isArray(ops)) {
    this.ops = ops;
  } else if (ops != null && Array.isArray(ops.ops)) {
    this.ops = ops.ops;
  } else {
    this.ops = [];
  }
};

Delta.prototype.insert = function (text, attributes) {
  var newOp = {};
  if (text.length === 0) return this;
  newOp.insert = text;

  if (attributes != null && typeof attributes === 'object' && Object.keys(attributes).length > 0) {
    newOp.attributes = attributes;
  }

  return this.push(newOp);
};

Delta.prototype['delete'] = function (length) {
  if (length <= 0) return this;
  return this.push({
    'delete': length
  });
};

Delta.prototype.retain = function (length, attributes) {
  if (length <= 0) return this;
  var newOp = {
    retain: length
  };

  if (attributes != null && typeof attributes === 'object' && Object.keys(attributes).length > 0) {
    newOp.attributes = attributes;
  }

  return this.push(newOp);
};

Delta.prototype.push = function (newOp) {
  var index = this.ops.length;
  var lastOp = this.ops[index - 1];
  newOp = extend(true, {}, newOp);

  if (typeof lastOp === 'object') {
    if (typeof newOp['delete'] === 'number' && typeof lastOp['delete'] === 'number') {
      this.ops[index - 1] = {
        'delete': lastOp['delete'] + newOp['delete']
      };
      return this;
    } // Since it does not matter if we insert before or after deleting at the same index,
    // always prefer to insert first


    if (typeof lastOp['delete'] === 'number' && newOp.insert != null) {
      index -= 1;
      lastOp = this.ops[index - 1];

      if (typeof lastOp !== 'object') {
        this.ops.unshift(newOp);
        return this;
      }
    }

    if (equal(newOp.attributes, lastOp.attributes)) {
      if (typeof newOp.insert === 'string' && typeof lastOp.insert === 'string') {
        this.ops[index - 1] = {
          insert: lastOp.insert + newOp.insert
        };
        if (typeof newOp.attributes === 'object') this.ops[index - 1].attributes = newOp.attributes;
        return this;
      } else if (typeof newOp.retain === 'number' && typeof lastOp.retain === 'number') {
        this.ops[index - 1] = {
          retain: lastOp.retain + newOp.retain
        };
        if (typeof newOp.attributes === 'object') this.ops[index - 1].attributes = newOp.attributes;
        return this;
      }
    }
  }

  if (index === this.ops.length) {
    this.ops.push(newOp);
  } else {
    this.ops.splice(index, 0, newOp);
  }

  return this;
};

Delta.prototype.chop = function () {
  var lastOp = this.ops[this.ops.length - 1];

  if (lastOp && lastOp.retain && !lastOp.attributes) {
    this.ops.pop();
  }

  return this;
};

Delta.prototype.filter = function (predicate) {
  return this.ops.filter(predicate);
};

Delta.prototype.forEach = function (predicate) {
  this.ops.forEach(predicate);
};

Delta.prototype.map = function (predicate) {
  return this.ops.map(predicate);
};

Delta.prototype.partition = function (predicate) {
  var passed = [],
      failed = [];
  this.forEach(function (op) {
    var target = predicate(op) ? passed : failed;
    target.push(op);
  });
  return [passed, failed];
};

Delta.prototype.reduce = function (predicate, initial) {
  return this.ops.reduce(predicate, initial);
};

Delta.prototype.changeLength = function () {
  return this.reduce(function (length, elem) {
    if (elem.insert) {
      return length + op.length(elem);
    } else if (elem.delete) {
      return length - elem.delete;
    }

    return length;
  }, 0);
};

Delta.prototype.length = function () {
  return this.reduce(function (length, elem) {
    return length + op.length(elem);
  }, 0);
};

Delta.prototype.slice = function (start, end) {
  start = start || 0;
  if (typeof end !== 'number') end = Infinity;
  var ops = [];
  var iter = op.iterator(this.ops);
  var index = 0;

  while (index < end && iter.hasNext()) {
    var nextOp;

    if (index < start) {
      nextOp = iter.next(start - index);
    } else {
      nextOp = iter.next(end - index);
      ops.push(nextOp);
    }

    index += op.length(nextOp);
  }

  return new Delta(ops);
};

Delta.prototype.compose = function (other) {
  var thisIter = op.iterator(this.ops);
  var otherIter = op.iterator(other.ops);
  var ops = [];
  var firstOther = otherIter.peek();

  if (firstOther != null && typeof firstOther.retain === 'number' && firstOther.attributes == null) {
    var firstLeft = firstOther.retain;

    while (thisIter.peekType() === 'insert' && thisIter.peekLength() <= firstLeft) {
      firstLeft -= thisIter.peekLength();
      ops.push(thisIter.next());
    }

    if (firstOther.retain - firstLeft > 0) {
      otherIter.next(firstOther.retain - firstLeft);
    }
  }

  var delta = new Delta(ops);

  while (thisIter.hasNext() || otherIter.hasNext()) {
    if (otherIter.peekType() === 'insert') {
      delta.push(otherIter.next());
    } else if (thisIter.peekType() === 'delete') {
      delta.push(thisIter.next());
    } else {
      var length = Math.min(thisIter.peekLength(), otherIter.peekLength());
      var thisOp = thisIter.next(length);
      var otherOp = otherIter.next(length);

      if (typeof otherOp.retain === 'number') {
        var newOp = {};

        if (typeof thisOp.retain === 'number') {
          newOp.retain = length;
        } else {
          newOp.insert = thisOp.insert;
        } // Preserve null when composing with a retain, otherwise remove it for inserts


        var attributes = op.attributes.compose(thisOp.attributes, otherOp.attributes, typeof thisOp.retain === 'number');
        if (attributes) newOp.attributes = attributes;
        delta.push(newOp); // Optimization if rest of other is just retain

        if (!otherIter.hasNext() && equal(delta.ops[delta.ops.length - 1], newOp)) {
          var rest = new Delta(thisIter.rest());
          return delta.concat(rest).chop();
        } // Other op should be delete, we could be an insert or retain
        // Insert + delete cancels out

      } else if (typeof otherOp['delete'] === 'number' && typeof thisOp.retain === 'number') {
        delta.push(otherOp);
      }
    }
  }

  return delta.chop();
};

Delta.prototype.concat = function (other) {
  var delta = new Delta(this.ops.slice());

  if (other.ops.length > 0) {
    delta.push(other.ops[0]);
    delta.ops = delta.ops.concat(other.ops.slice(1));
  }

  return delta;
};

Delta.prototype.diff = function (other, index) {
  if (this.ops === other.ops) {
    return new Delta();
  }

  var strings = [this, other].map(function (delta) {
    return delta.map(function (op) {
      if (op.insert != null) {
        return typeof op.insert === 'string' ? op.insert : NULL_CHARACTER;
      }

      var prep = delta === other ? 'on' : 'with';
      throw new Error('diff() called ' + prep + ' non-document');
    }).join('');
  });
  var delta = new Delta();
  var diffResult = diff(strings[0], strings[1], index);
  var thisIter = op.iterator(this.ops);
  var otherIter = op.iterator(other.ops);
  diffResult.forEach(function (component) {
    var length = component[1].length;

    while (length > 0) {
      var opLength = 0;

      switch (component[0]) {
        case diff.INSERT:
          opLength = Math.min(otherIter.peekLength(), length);
          delta.push(otherIter.next(opLength));
          break;

        case diff.DELETE:
          opLength = Math.min(length, thisIter.peekLength());
          thisIter.next(opLength);
          delta['delete'](opLength);
          break;

        case diff.EQUAL:
          opLength = Math.min(thisIter.peekLength(), otherIter.peekLength(), length);
          var thisOp = thisIter.next(opLength);
          var otherOp = otherIter.next(opLength);

          if (equal(thisOp.insert, otherOp.insert)) {
            delta.retain(opLength, op.attributes.diff(thisOp.attributes, otherOp.attributes));
          } else {
            delta.push(otherOp)['delete'](opLength);
          }

          break;
      }

      length -= opLength;
    }
  });
  return delta.chop();
};

Delta.prototype.eachLine = function (predicate, newline) {
  newline = newline || '\n';
  var iter = op.iterator(this.ops);
  var line = new Delta();
  var i = 0;

  while (iter.hasNext()) {
    if (iter.peekType() !== 'insert') return;
    var thisOp = iter.peek();
    var start = op.length(thisOp) - iter.peekLength();
    var index = typeof thisOp.insert === 'string' ? thisOp.insert.indexOf(newline, start) - start : -1;

    if (index < 0) {
      line.push(iter.next());
    } else if (index > 0) {
      line.push(iter.next(index));
    } else {
      if (predicate(line, iter.next(1).attributes || {}, i) === false) {
        return;
      }

      i += 1;
      line = new Delta();
    }
  }

  if (line.length() > 0) {
    predicate(line, {}, i);
  }
};

Delta.prototype.transform = function (other, priority) {
  priority = !!priority;

  if (typeof other === 'number') {
    return this.transformPosition(other, priority);
  }

  var thisIter = op.iterator(this.ops);
  var otherIter = op.iterator(other.ops);
  var delta = new Delta();

  while (thisIter.hasNext() || otherIter.hasNext()) {
    if (thisIter.peekType() === 'insert' && (priority || otherIter.peekType() !== 'insert')) {
      delta.retain(op.length(thisIter.next()));
    } else if (otherIter.peekType() === 'insert') {
      delta.push(otherIter.next());
    } else {
      var length = Math.min(thisIter.peekLength(), otherIter.peekLength());
      var thisOp = thisIter.next(length);
      var otherOp = otherIter.next(length);

      if (thisOp['delete']) {
        // Our delete either makes their delete redundant or removes their retain
        continue;
      } else if (otherOp['delete']) {
        delta.push(otherOp);
      } else {
        // We retain either their retain or insert
        delta.retain(length, op.attributes.transform(thisOp.attributes, otherOp.attributes, priority));
      }
    }
  }

  return delta.chop();
};

Delta.prototype.transformPosition = function (index, priority) {
  priority = !!priority;
  var thisIter = op.iterator(this.ops);
  var offset = 0;

  while (thisIter.hasNext() && offset <= index) {
    var length = thisIter.peekLength();
    var nextType = thisIter.peekType();
    thisIter.next();

    if (nextType === 'delete') {
      index -= Math.min(length, index - offset);
      continue;
    } else if (nextType === 'insert' && (offset < index || !priority)) {
      index += length;
    }

    offset += length;
  }

  return index;
};

module.exports = Delta;
},{"fast-diff":"../node_modules/fast-diff/diff.js","deep-equal":"../node_modules/deep-equal/index.js","extend":"../node_modules/extend/index.js","./op":"../node_modules/quill-delta/lib/op.js"}],"../node_modules/quill/blots/break.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _parchment = _interopRequireDefault(require("parchment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Break extends _parchment.default.Embed {
  static value() {
    return undefined;
  }

  insertInto(parent, ref) {
    if (parent.children.length === 0) {
      super.insertInto(parent, ref);
    } else {
      this.remove();
    }
  }

  length() {
    return 0;
  }

  value() {
    return '';
  }

}

Break.blotName = 'break';
Break.tagName = 'BR';
var _default = Break;
exports.default = _default;
},{"parchment":"../node_modules/parchment/dist/parchment.js"}],"../node_modules/quill/blots/text.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _parchment = _interopRequireDefault(require("parchment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TextBlot extends _parchment.default.Text {}

var _default = TextBlot;
exports.default = _default;
},{"parchment":"../node_modules/parchment/dist/parchment.js"}],"../node_modules/quill/blots/inline.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _text = _interopRequireDefault(require("./text"));

var _parchment = _interopRequireDefault(require("parchment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Inline extends _parchment.default.Inline {
  static compare(self, other) {
    let selfIndex = Inline.order.indexOf(self);
    let otherIndex = Inline.order.indexOf(other);

    if (selfIndex >= 0 || otherIndex >= 0) {
      return selfIndex - otherIndex;
    } else if (self === other) {
      return 0;
    } else if (self < other) {
      return -1;
    } else {
      return 1;
    }
  }

  formatAt(index, length, name, value) {
    if (Inline.compare(this.statics.blotName, name) < 0 && _parchment.default.query(name, _parchment.default.Scope.BLOT)) {
      let blot = this.isolate(index, length);

      if (value) {
        blot.wrap(name, value);
      }
    } else {
      super.formatAt(index, length, name, value);
    }
  }

  optimize(context) {
    super.optimize(context);

    if (this.parent instanceof Inline && Inline.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
      let parent = this.parent.isolate(this.offset(), this.length());
      this.moveChildren(parent);
      parent.wrap(this);
    }
  }

}

Inline.allowedChildren = [Inline, _parchment.default.Embed, _text.default]; // Lower index means deeper in the DOM tree, since not found (-1) is for embeds

Inline.order = ['cursor', 'inline', // Must be lower
'underline', 'strike', 'italic', 'bold', 'script', 'link', 'code' // Must be higher
];
var _default = Inline;
exports.default = _default;
},{"./text":"../node_modules/quill/blots/text.js","parchment":"../node_modules/parchment/dist/parchment.js"}],"../node_modules/quill/blots/block.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bubbleFormats = bubbleFormats;
exports.default = exports.BlockEmbed = void 0;

var _extend = _interopRequireDefault(require("extend"));

var _quillDelta = _interopRequireDefault(require("quill-delta"));

var _parchment = _interopRequireDefault(require("parchment"));

var _break = _interopRequireDefault(require("./break"));

var _inline = _interopRequireDefault(require("./inline"));

var _text = _interopRequireDefault(require("./text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NEWLINE_LENGTH = 1;

class BlockEmbed extends _parchment.default.Embed {
  attach() {
    super.attach();
    this.attributes = new _parchment.default.Attributor.Store(this.domNode);
  }

  delta() {
    return new _quillDelta.default().insert(this.value(), (0, _extend.default)(this.formats(), this.attributes.values()));
  }

  format(name, value) {
    let attribute = _parchment.default.query(name, _parchment.default.Scope.BLOCK_ATTRIBUTE);

    if (attribute != null) {
      this.attributes.attribute(attribute, value);
    }
  }

  formatAt(index, length, name, value) {
    this.format(name, value);
  }

  insertAt(index, value, def) {
    if (typeof value === 'string' && value.endsWith('\n')) {
      let block = _parchment.default.create(Block.blotName);

      this.parent.insertBefore(block, index === 0 ? this : this.next);
      block.insertAt(0, value.slice(0, -1));
    } else {
      super.insertAt(index, value, def);
    }
  }

}

exports.BlockEmbed = BlockEmbed;
BlockEmbed.scope = _parchment.default.Scope.BLOCK_BLOT; // It is important for cursor behavior BlockEmbeds use tags that are block level elements

class Block extends _parchment.default.Block {
  constructor(domNode) {
    super(domNode);
    this.cache = {};
  }

  delta() {
    if (this.cache.delta == null) {
      this.cache.delta = this.descendants(_parchment.default.Leaf).reduce((delta, leaf) => {
        if (leaf.length() === 0) {
          return delta;
        } else {
          return delta.insert(leaf.value(), bubbleFormats(leaf));
        }
      }, new _quillDelta.default()).insert('\n', bubbleFormats(this));
    }

    return this.cache.delta;
  }

  deleteAt(index, length) {
    super.deleteAt(index, length);
    this.cache = {};
  }

  formatAt(index, length, name, value) {
    if (length <= 0) return;

    if (_parchment.default.query(name, _parchment.default.Scope.BLOCK)) {
      if (index + length === this.length()) {
        this.format(name, value);
      }
    } else {
      super.formatAt(index, Math.min(length, this.length() - index - 1), name, value);
    }

    this.cache = {};
  }

  insertAt(index, value, def) {
    if (def != null) return super.insertAt(index, value, def);
    if (value.length === 0) return;
    let lines = value.split('\n');
    let text = lines.shift();

    if (text.length > 0) {
      if (index < this.length() - 1 || this.children.tail == null) {
        super.insertAt(Math.min(index, this.length() - 1), text);
      } else {
        this.children.tail.insertAt(this.children.tail.length(), text);
      }

      this.cache = {};
    }

    let block = this;
    lines.reduce(function (index, line) {
      block = block.split(index, true);
      block.insertAt(0, line);
      return line.length;
    }, index + text.length);
  }

  insertBefore(blot, ref) {
    let head = this.children.head;
    super.insertBefore(blot, ref);

    if (head instanceof _break.default) {
      head.remove();
    }

    this.cache = {};
  }

  length() {
    if (this.cache.length == null) {
      this.cache.length = super.length() + NEWLINE_LENGTH;
    }

    return this.cache.length;
  }

  moveChildren(target, ref) {
    super.moveChildren(target, ref);
    this.cache = {};
  }

  optimize(context) {
    super.optimize(context);
    this.cache = {};
  }

  path(index) {
    return super.path(index, true);
  }

  removeChild(child) {
    super.removeChild(child);
    this.cache = {};
  }

  split(index, force = false) {
    if (force && (index === 0 || index >= this.length() - NEWLINE_LENGTH)) {
      let clone = this.clone();

      if (index === 0) {
        this.parent.insertBefore(clone, this);
        return this;
      } else {
        this.parent.insertBefore(clone, this.next);
        return clone;
      }
    } else {
      let next = super.split(index, force);
      this.cache = {};
      return next;
    }
  }

}

exports.default = Block;
Block.blotName = 'block';
Block.tagName = 'P';
Block.defaultChild = 'break';
Block.allowedChildren = [_inline.default, _parchment.default.Embed, _text.default];

function bubbleFormats(blot, formats = {}) {
  if (blot == null) return formats;

  if (typeof blot.formats === 'function') {
    formats = (0, _extend.default)(formats, blot.formats());
  }

  if (blot.parent == null || blot.parent.blotName == 'scroll' || blot.parent.statics.scope !== blot.statics.scope) {
    return formats;
  }

  return bubbleFormats(blot.parent, formats);
}
},{"extend":"../node_modules/extend/index.js","quill-delta":"../node_modules/quill-delta/lib/delta.js","parchment":"../node_modules/parchment/dist/parchment.js","./break":"../node_modules/quill/blots/break.js","./inline":"../node_modules/quill/blots/inline.js","./text":"../node_modules/quill/blots/text.js"}],"../node_modules/quill/formats/code.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Code = void 0;

var _quillDelta = _interopRequireDefault(require("quill-delta"));

var _parchment = _interopRequireDefault(require("parchment"));

var _block = _interopRequireDefault(require("../blots/block"));

var _inline = _interopRequireDefault(require("../blots/inline"));

var _text = _interopRequireDefault(require("../blots/text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Code extends _inline.default {}

exports.Code = Code;
Code.blotName = 'code';
Code.tagName = 'CODE';

class CodeBlock extends _block.default {
  static create(value) {
    let domNode = super.create(value);
    domNode.setAttribute('spellcheck', false);
    return domNode;
  }

  static formats() {
    return true;
  }

  delta() {
    let text = this.domNode.textContent;

    if (text.endsWith('\n')) {
      // Should always be true
      text = text.slice(0, -1);
    }

    return text.split('\n').reduce((delta, frag) => {
      return delta.insert(frag).insert('\n', this.formats());
    }, new _quillDelta.default());
  }

  format(name, value) {
    if (name === this.statics.blotName && value) return;
    let [text] = this.descendant(_text.default, this.length() - 1);

    if (text != null) {
      text.deleteAt(text.length() - 1, 1);
    }

    super.format(name, value);
  }

  formatAt(index, length, name, value) {
    if (length === 0) return;

    if (_parchment.default.query(name, _parchment.default.Scope.BLOCK) == null || name === this.statics.blotName && value === this.statics.formats(this.domNode)) {
      return;
    }

    let nextNewline = this.newlineIndex(index);
    if (nextNewline < 0 || nextNewline >= index + length) return;
    let prevNewline = this.newlineIndex(index, true) + 1;
    let isolateLength = nextNewline - prevNewline + 1;
    let blot = this.isolate(prevNewline, isolateLength);
    let next = blot.next;
    blot.format(name, value);

    if (next instanceof CodeBlock) {
      next.formatAt(0, index - prevNewline + length - isolateLength, name, value);
    }
  }

  insertAt(index, value, def) {
    if (def != null) return;
    let [text, offset] = this.descendant(_text.default, index);
    text.insertAt(offset, value);
  }

  length() {
    let length = this.domNode.textContent.length;

    if (!this.domNode.textContent.endsWith('\n')) {
      return length + 1;
    }

    return length;
  }

  newlineIndex(searchIndex, reverse = false) {
    if (!reverse) {
      let offset = this.domNode.textContent.slice(searchIndex).indexOf('\n');
      return offset > -1 ? searchIndex + offset : -1;
    } else {
      return this.domNode.textContent.slice(0, searchIndex).lastIndexOf('\n');
    }
  }

  optimize(context) {
    if (!this.domNode.textContent.endsWith('\n')) {
      this.appendChild(_parchment.default.create('text', '\n'));
    }

    super.optimize(context);
    let next = this.next;

    if (next != null && next.prev === this && next.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === next.statics.formats(next.domNode)) {
      next.optimize(context);
      next.moveChildren(this);
      next.remove();
    }
  }

  replace(target) {
    super.replace(target);
    [].slice.call(this.domNode.querySelectorAll('*')).forEach(function (node) {
      let blot = _parchment.default.find(node);

      if (blot == null) {
        node.parentNode.removeChild(node);
      } else if (blot instanceof _parchment.default.Embed) {
        blot.remove();
      } else {
        blot.unwrap();
      }
    });
  }

}

exports.default = CodeBlock;
CodeBlock.blotName = 'code-block';
CodeBlock.tagName = 'PRE';
CodeBlock.TAB = '  ';
},{"quill-delta":"../node_modules/quill-delta/lib/delta.js","parchment":"../node_modules/parchment/dist/parchment.js","../blots/block":"../node_modules/quill/blots/block.js","../blots/inline":"../node_modules/quill/blots/inline.js","../blots/text":"../node_modules/quill/blots/text.js"}],"../node_modules/quill/blots/cursor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _parchment = _interopRequireDefault(require("parchment"));

var _text = _interopRequireDefault(require("./text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Cursor extends _parchment.default.Embed {
  static value() {
    return undefined;
  }

  constructor(domNode, selection) {
    super(domNode);
    this.selection = selection;
    this.textNode = document.createTextNode(Cursor.CONTENTS);
    this.domNode.appendChild(this.textNode);
    this._length = 0;
  }

  detach() {
    // super.detach() will also clear domNode.__blot
    if (this.parent != null) this.parent.removeChild(this);
  }

  format(name, value) {
    if (this._length !== 0) {
      return super.format(name, value);
    }

    let target = this,
        index = 0;

    while (target != null && target.statics.scope !== _parchment.default.Scope.BLOCK_BLOT) {
      index += target.offset(target.parent);
      target = target.parent;
    }

    if (target != null) {
      this._length = Cursor.CONTENTS.length;
      target.optimize();
      target.formatAt(index, Cursor.CONTENTS.length, name, value);
      this._length = 0;
    }
  }

  index(node, offset) {
    if (node === this.textNode) return 0;
    return super.index(node, offset);
  }

  length() {
    return this._length;
  }

  position() {
    return [this.textNode, this.textNode.data.length];
  }

  remove() {
    super.remove();
    this.parent = null;
  }

  restore() {
    if (this.selection.composing || this.parent == null) return;
    let textNode = this.textNode;
    let range = this.selection.getNativeRange();
    let restoreText, start, end;

    if (range != null && range.start.node === textNode && range.end.node === textNode) {
      [restoreText, start, end] = [textNode, range.start.offset, range.end.offset];
    } // Link format will insert text outside of anchor tag


    while (this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode) {
      this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
    }

    if (this.textNode.data !== Cursor.CONTENTS) {
      let text = this.textNode.data.split(Cursor.CONTENTS).join('');

      if (this.next instanceof _text.default) {
        restoreText = this.next.domNode;
        this.next.insertAt(0, text);
        this.textNode.data = Cursor.CONTENTS;
      } else {
        this.textNode.data = text;
        this.parent.insertBefore(_parchment.default.create(this.textNode), this);
        this.textNode = document.createTextNode(Cursor.CONTENTS);
        this.domNode.appendChild(this.textNode);
      }
    }

    this.remove();

    if (start != null) {
      [start, end] = [start, end].map(function (offset) {
        return Math.max(0, Math.min(restoreText.data.length, offset - 1));
      });
      return {
        startNode: restoreText,
        startOffset: start,
        endNode: restoreText,
        endOffset: end
      };
    }
  }

  update(mutations, context) {
    if (mutations.some(mutation => {
      return mutation.type === 'characterData' && mutation.target === this.textNode;
    })) {
      let range = this.restore();
      if (range) context.range = range;
    }
  }

  value() {
    return '';
  }

}

Cursor.blotName = 'cursor';
Cursor.className = 'ql-cursor';
Cursor.tagName = 'span';
Cursor.CONTENTS = "\uFEFF"; // Zero width no break space

var _default = Cursor;
exports.default = _default;
},{"parchment":"../node_modules/parchment/dist/parchment.js","./text":"../node_modules/quill/blots/text.js"}],"../node_modules/base64-js/index.js":[function(require,module,exports) {
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],"../node_modules/ieee754/index.js":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],"../node_modules/buffer/node_modules/isarray/index.js":[function(require,module,exports) {
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],"../node_modules/buffer/index.js":[function(require,module,exports) {

var global = arguments[3];
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

},{"base64-js":"../node_modules/base64-js/index.js","ieee754":"../node_modules/ieee754/index.js","isarray":"../node_modules/buffer/node_modules/isarray/index.js","buffer":"../node_modules/buffer/index.js"}],"../node_modules/clone/clone.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
var clone = function () {
  'use strict';

  function _instanceof(obj, type) {
    return type != null && obj instanceof type;
  }

  var nativeMap;

  try {
    nativeMap = Map;
  } catch (_) {
    // maybe a reference error because no `Map`. Give it a dummy value that no
    // value will ever be an instanceof.
    nativeMap = function () {};
  }

  var nativeSet;

  try {
    nativeSet = Set;
  } catch (_) {
    nativeSet = function () {};
  }

  var nativePromise;

  try {
    nativePromise = Promise;
  } catch (_) {
    nativePromise = function () {};
  }
  /**
   * Clones (copies) an Object using deep copying.
   *
   * This function supports circular references by default, but if you are certain
   * there are no circular references in your object, you can save some CPU time
   * by calling clone(obj, false).
   *
   * Caution: if `circular` is false and `parent` contains circular references,
   * your program may enter an infinite loop and crash.
   *
   * @param `parent` - the object to be cloned
   * @param `circular` - set to true if the object to be cloned may contain
   *    circular references. (optional - true by default)
   * @param `depth` - set to a number if the object is only to be cloned to
   *    a particular depth. (optional - defaults to Infinity)
   * @param `prototype` - sets the prototype to be used when cloning an object.
   *    (optional - defaults to parent prototype).
   * @param `includeNonEnumerable` - set to true if the non-enumerable properties
   *    should be cloned as well. Non-enumerable properties on the prototype
   *    chain will be ignored. (optional - false by default)
  */


  function clone(parent, circular, depth, prototype, includeNonEnumerable) {
    if (typeof circular === 'object') {
      depth = circular.depth;
      prototype = circular.prototype;
      includeNonEnumerable = circular.includeNonEnumerable;
      circular = circular.circular;
    } // maintain two arrays for circular references, where corresponding parents
    // and children have the same index


    var allParents = [];
    var allChildren = [];
    var useBuffer = typeof Buffer != 'undefined';
    if (typeof circular == 'undefined') circular = true;
    if (typeof depth == 'undefined') depth = Infinity; // recurse this function so we don't reset allParents and allChildren

    function _clone(parent, depth) {
      // cloning null always returns null
      if (parent === null) return null;
      if (depth === 0) return parent;
      var child;
      var proto;

      if (typeof parent != 'object') {
        return parent;
      }

      if (_instanceof(parent, nativeMap)) {
        child = new nativeMap();
      } else if (_instanceof(parent, nativeSet)) {
        child = new nativeSet();
      } else if (_instanceof(parent, nativePromise)) {
        child = new nativePromise(function (resolve, reject) {
          parent.then(function (value) {
            resolve(_clone(value, depth - 1));
          }, function (err) {
            reject(_clone(err, depth - 1));
          });
        });
      } else if (clone.__isArray(parent)) {
        child = [];
      } else if (clone.__isRegExp(parent)) {
        child = new RegExp(parent.source, __getRegExpFlags(parent));
        if (parent.lastIndex) child.lastIndex = parent.lastIndex;
      } else if (clone.__isDate(parent)) {
        child = new Date(parent.getTime());
      } else if (useBuffer && Buffer.isBuffer(parent)) {
        if (Buffer.allocUnsafe) {
          // Node.js >= 4.5.0
          child = Buffer.allocUnsafe(parent.length);
        } else {
          // Older Node.js versions
          child = new Buffer(parent.length);
        }

        parent.copy(child);
        return child;
      } else if (_instanceof(parent, Error)) {
        child = Object.create(parent);
      } else {
        if (typeof prototype == 'undefined') {
          proto = Object.getPrototypeOf(parent);
          child = Object.create(proto);
        } else {
          child = Object.create(prototype);
          proto = prototype;
        }
      }

      if (circular) {
        var index = allParents.indexOf(parent);

        if (index != -1) {
          return allChildren[index];
        }

        allParents.push(parent);
        allChildren.push(child);
      }

      if (_instanceof(parent, nativeMap)) {
        parent.forEach(function (value, key) {
          var keyChild = _clone(key, depth - 1);

          var valueChild = _clone(value, depth - 1);

          child.set(keyChild, valueChild);
        });
      }

      if (_instanceof(parent, nativeSet)) {
        parent.forEach(function (value) {
          var entryChild = _clone(value, depth - 1);

          child.add(entryChild);
        });
      }

      for (var i in parent) {
        var attrs;

        if (proto) {
          attrs = Object.getOwnPropertyDescriptor(proto, i);
        }

        if (attrs && attrs.set == null) {
          continue;
        }

        child[i] = _clone(parent[i], depth - 1);
      }

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(parent);

        for (var i = 0; i < symbols.length; i++) {
          // Don't need to worry about cloning a symbol because it is a primitive,
          // like a number or string.
          var symbol = symbols[i];
          var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);

          if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
            continue;
          }

          child[symbol] = _clone(parent[symbol], depth - 1);

          if (!descriptor.enumerable) {
            Object.defineProperty(child, symbol, {
              enumerable: false
            });
          }
        }
      }

      if (includeNonEnumerable) {
        var allPropertyNames = Object.getOwnPropertyNames(parent);

        for (var i = 0; i < allPropertyNames.length; i++) {
          var propertyName = allPropertyNames[i];
          var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);

          if (descriptor && descriptor.enumerable) {
            continue;
          }

          child[propertyName] = _clone(parent[propertyName], depth - 1);
          Object.defineProperty(child, propertyName, {
            enumerable: false
          });
        }
      }

      return child;
    }

    return _clone(parent, depth);
  }
  /**
   * Simple flat clone using prototype, accepts only objects, usefull for property
   * override on FLAT configuration object (no nested props).
   *
   * USE WITH CAUTION! This may not behave as you wish if you do not know how this
   * works.
   */


  clone.clonePrototype = function clonePrototype(parent) {
    if (parent === null) return null;

    var c = function () {};

    c.prototype = parent;
    return new c();
  }; // private utility functions


  function __objToStr(o) {
    return Object.prototype.toString.call(o);
  }

  clone.__objToStr = __objToStr;

  function __isDate(o) {
    return typeof o === 'object' && __objToStr(o) === '[object Date]';
  }

  clone.__isDate = __isDate;

  function __isArray(o) {
    return typeof o === 'object' && __objToStr(o) === '[object Array]';
  }

  clone.__isArray = __isArray;

  function __isRegExp(o) {
    return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
  }

  clone.__isRegExp = __isRegExp;

  function __getRegExpFlags(re) {
    var flags = '';
    if (re.global) flags += 'g';
    if (re.ignoreCase) flags += 'i';
    if (re.multiline) flags += 'm';
    return flags;
  }

  clone.__getRegExpFlags = __getRegExpFlags;
  return clone;
}();

if (typeof module === 'object' && module.exports) {
  module.exports = clone;
}
},{"buffer":"../node_modules/buffer/index.js"}],"../node_modules/quill/core/editor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _quillDelta = _interopRequireDefault(require("quill-delta"));

var _op = _interopRequireDefault(require("quill-delta/lib/op"));

var _parchment = _interopRequireDefault(require("parchment"));

var _code = _interopRequireDefault(require("../formats/code"));

var _cursor = _interopRequireDefault(require("../blots/cursor"));

var _block = _interopRequireWildcard(require("../blots/block"));

var _break = _interopRequireDefault(require("../blots/break"));

var _clone = _interopRequireDefault(require("clone"));

var _deepEqual = _interopRequireDefault(require("deep-equal"));

var _extend = _interopRequireDefault(require("extend"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ASCII = /^[ -~]*$/;

class Editor {
  constructor(scroll) {
    this.scroll = scroll;
    this.delta = this.getDelta();
  }

  applyDelta(delta) {
    let consumeNextNewline = false;
    this.scroll.update();
    let scrollLength = this.scroll.length();
    this.scroll.batchStart();
    delta = normalizeDelta(delta);
    delta.reduce((index, op) => {
      let length = op.retain || op.delete || op.insert.length || 1;
      let attributes = op.attributes || {};

      if (op.insert != null) {
        if (typeof op.insert === 'string') {
          let text = op.insert;

          if (text.endsWith('\n') && consumeNextNewline) {
            consumeNextNewline = false;
            text = text.slice(0, -1);
          }

          if (index >= scrollLength && !text.endsWith('\n')) {
            consumeNextNewline = true;
          }

          this.scroll.insertAt(index, text);
          let [line, offset] = this.scroll.line(index);
          let formats = (0, _extend.default)({}, (0, _block.bubbleFormats)(line));

          if (line instanceof _block.default) {
            let [leaf] = line.descendant(_parchment.default.Leaf, offset);
            formats = (0, _extend.default)(formats, (0, _block.bubbleFormats)(leaf));
          }

          attributes = _op.default.attributes.diff(formats, attributes) || {};
        } else if (typeof op.insert === 'object') {
          let key = Object.keys(op.insert)[0]; // There should only be one key

          if (key == null) return index;
          this.scroll.insertAt(index, key, op.insert[key]);
        }

        scrollLength += length;
      }

      Object.keys(attributes).forEach(name => {
        this.scroll.formatAt(index, length, name, attributes[name]);
      });
      return index + length;
    }, 0);
    delta.reduce((index, op) => {
      if (typeof op.delete === 'number') {
        this.scroll.deleteAt(index, op.delete);
        return index;
      }

      return index + (op.retain || op.insert.length || 1);
    }, 0);
    this.scroll.batchEnd();
    return this.update(delta);
  }

  deleteText(index, length) {
    this.scroll.deleteAt(index, length);
    return this.update(new _quillDelta.default().retain(index).delete(length));
  }

  formatLine(index, length, formats = {}) {
    this.scroll.update();
    Object.keys(formats).forEach(format => {
      if (this.scroll.whitelist != null && !this.scroll.whitelist[format]) return;
      let lines = this.scroll.lines(index, Math.max(length, 1));
      let lengthRemaining = length;
      lines.forEach(line => {
        let lineLength = line.length();

        if (!(line instanceof _code.default)) {
          line.format(format, formats[format]);
        } else {
          let codeIndex = index - line.offset(this.scroll);
          let codeLength = line.newlineIndex(codeIndex + lengthRemaining) - codeIndex + 1;
          line.formatAt(codeIndex, codeLength, format, formats[format]);
        }

        lengthRemaining -= lineLength;
      });
    });
    this.scroll.optimize();
    return this.update(new _quillDelta.default().retain(index).retain(length, (0, _clone.default)(formats)));
  }

  formatText(index, length, formats = {}) {
    Object.keys(formats).forEach(format => {
      this.scroll.formatAt(index, length, format, formats[format]);
    });
    return this.update(new _quillDelta.default().retain(index).retain(length, (0, _clone.default)(formats)));
  }

  getContents(index, length) {
    return this.delta.slice(index, index + length);
  }

  getDelta() {
    return this.scroll.lines().reduce((delta, line) => {
      return delta.concat(line.delta());
    }, new _quillDelta.default());
  }

  getFormat(index, length = 0) {
    let lines = [],
        leaves = [];

    if (length === 0) {
      this.scroll.path(index).forEach(function (path) {
        let [blot] = path;

        if (blot instanceof _block.default) {
          lines.push(blot);
        } else if (blot instanceof _parchment.default.Leaf) {
          leaves.push(blot);
        }
      });
    } else {
      lines = this.scroll.lines(index, length);
      leaves = this.scroll.descendants(_parchment.default.Leaf, index, length);
    }

    let formatsArr = [lines, leaves].map(function (blots) {
      if (blots.length === 0) return {};
      let formats = (0, _block.bubbleFormats)(blots.shift());

      while (Object.keys(formats).length > 0) {
        let blot = blots.shift();
        if (blot == null) return formats;
        formats = combineFormats((0, _block.bubbleFormats)(blot), formats);
      }

      return formats;
    });
    return _extend.default.apply(_extend.default, formatsArr);
  }

  getText(index, length) {
    return this.getContents(index, length).filter(function (op) {
      return typeof op.insert === 'string';
    }).map(function (op) {
      return op.insert;
    }).join('');
  }

  insertEmbed(index, embed, value) {
    this.scroll.insertAt(index, embed, value);
    return this.update(new _quillDelta.default().retain(index).insert({
      [embed]: value
    }));
  }

  insertText(index, text, formats = {}) {
    text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    this.scroll.insertAt(index, text);
    Object.keys(formats).forEach(format => {
      this.scroll.formatAt(index, text.length, format, formats[format]);
    });
    return this.update(new _quillDelta.default().retain(index).insert(text, (0, _clone.default)(formats)));
  }

  isBlank() {
    if (this.scroll.children.length == 0) return true;
    if (this.scroll.children.length > 1) return false;
    let block = this.scroll.children.head;
    if (block.statics.blotName !== _block.default.blotName) return false;
    if (block.children.length > 1) return false;
    return block.children.head instanceof _break.default;
  }

  removeFormat(index, length) {
    let text = this.getText(index, length);
    let [line, offset] = this.scroll.line(index + length);
    let suffixLength = 0,
        suffix = new _quillDelta.default();

    if (line != null) {
      if (!(line instanceof _code.default)) {
        suffixLength = line.length() - offset;
      } else {
        suffixLength = line.newlineIndex(offset) - offset + 1;
      }

      suffix = line.delta().slice(offset, offset + suffixLength - 1).insert('\n');
    }

    let contents = this.getContents(index, length + suffixLength);
    let diff = contents.diff(new _quillDelta.default().insert(text).concat(suffix));
    let delta = new _quillDelta.default().retain(index).concat(diff);
    return this.applyDelta(delta);
  }

  update(change, mutations = [], cursorIndex = undefined) {
    let oldDelta = this.delta;

    if (mutations.length === 1 && mutations[0].type === 'characterData' && mutations[0].target.data.match(ASCII) && _parchment.default.find(mutations[0].target)) {
      // Optimization for character changes
      let textBlot = _parchment.default.find(mutations[0].target);

      let formats = (0, _block.bubbleFormats)(textBlot);
      let index = textBlot.offset(this.scroll);
      let oldValue = mutations[0].oldValue.replace(_cursor.default.CONTENTS, '');
      let oldText = new _quillDelta.default().insert(oldValue);
      let newText = new _quillDelta.default().insert(textBlot.value());
      let diffDelta = new _quillDelta.default().retain(index).concat(oldText.diff(newText, cursorIndex));
      change = diffDelta.reduce(function (delta, op) {
        if (op.insert) {
          return delta.insert(op.insert, formats);
        } else {
          return delta.push(op);
        }
      }, new _quillDelta.default());
      this.delta = oldDelta.compose(change);
    } else {
      this.delta = this.getDelta();

      if (!change || !(0, _deepEqual.default)(oldDelta.compose(change), this.delta)) {
        change = oldDelta.diff(this.delta, cursorIndex);
      }
    }

    return change;
  }

}

function combineFormats(formats, combined) {
  return Object.keys(combined).reduce(function (merged, name) {
    if (formats[name] == null) return merged;

    if (combined[name] === formats[name]) {
      merged[name] = combined[name];
    } else if (Array.isArray(combined[name])) {
      if (combined[name].indexOf(formats[name]) < 0) {
        merged[name] = combined[name].concat([formats[name]]);
      }
    } else {
      merged[name] = [combined[name], formats[name]];
    }

    return merged;
  }, {});
}

function normalizeDelta(delta) {
  return delta.reduce(function (delta, op) {
    if (op.insert === 1) {
      let attributes = (0, _clone.default)(op.attributes);
      delete attributes['image'];
      return delta.insert({
        image: op.attributes.image
      }, attributes);
    }

    if (op.attributes != null && (op.attributes.list === true || op.attributes.bullet === true)) {
      op = (0, _clone.default)(op);

      if (op.attributes.list) {
        op.attributes.list = 'ordered';
      } else {
        op.attributes.list = 'bullet';
        delete op.attributes.bullet;
      }
    }

    if (typeof op.insert === 'string') {
      let text = op.insert.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
      return delta.insert(text, op.attributes);
    }

    return delta.push(op);
  }, new _quillDelta.default());
}

var _default = Editor;
exports.default = _default;
},{"quill-delta":"../node_modules/quill-delta/lib/delta.js","quill-delta/lib/op":"../node_modules/quill-delta/lib/op.js","parchment":"../node_modules/parchment/dist/parchment.js","../formats/code":"../node_modules/quill/formats/code.js","../blots/cursor":"../node_modules/quill/blots/cursor.js","../blots/block":"../node_modules/quill/blots/block.js","../blots/break":"../node_modules/quill/blots/break.js","clone":"../node_modules/clone/clone.js","deep-equal":"../node_modules/deep-equal/index.js","extend":"../node_modules/extend/index.js"}],"../node_modules/quill/node_modules/eventemitter3/index.js":[function(require,module,exports) {
'use strict';

var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @api private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {Mixed} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Boolean} exists Only check if there are listeners.
 * @returns {Array|Boolean}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event, exists) {
  var evt = prefix ? prefix + event : event
    , available = this._events[evt];

  if (exists) return !!available;
  if (!available) return [];
  if (available.fn) return [available.fn];

  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
    ee[i] = available[i].fn;
  }

  return ee;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Remove the listeners of a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {Mixed} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
         listeners.fn === fn
      && (!once || listeners.once)
      && (!context || listeners.context === context)
    ) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
           listeners[i].fn !== fn
        || (once && !listeners[i].once)
        || (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {String|Symbol} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = EventEmitter;
}

},{}],"../node_modules/quill/core/logger.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
let levels = ['error', 'warn', 'log', 'info'];
let level = 'warn';

function debug(method, ...args) {
  if (levels.indexOf(method) <= levels.indexOf(level)) {
    console[method](...args); // eslint-disable-line no-console
  }
}

function namespace(ns) {
  return levels.reduce(function (logger, method) {
    logger[method] = debug.bind(console, method, ns);
    return logger;
  }, {});
}

debug.level = namespace.level = function (newLevel) {
  level = newLevel;
};

var _default = namespace;
exports.default = _default;
},{}],"../node_modules/quill/core/emitter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _eventemitter = _interopRequireDefault(require("eventemitter3"));

var _logger = _interopRequireDefault(require("./logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let debug = (0, _logger.default)('quill:events');
const EVENTS = ['selectionchange', 'mousedown', 'mouseup', 'click'];
EVENTS.forEach(function (eventName) {
  document.addEventListener(eventName, (...args) => {
    [].slice.call(document.querySelectorAll('.ql-container')).forEach(node => {
      // TODO use WeakMap
      if (node.__quill && node.__quill.emitter) {
        node.__quill.emitter.handleDOM(...args);
      }
    });
  });
});

class Emitter extends _eventemitter.default {
  constructor() {
    super();
    this.listeners = {};
    this.on('error', debug.error);
  }

  emit() {
    debug.log.apply(debug, arguments);
    super.emit.apply(this, arguments);
  }

  handleDOM(event, ...args) {
    (this.listeners[event.type] || []).forEach(function ({
      node,
      handler
    }) {
      if (event.target === node || node.contains(event.target)) {
        handler(event, ...args);
      }
    });
  }

  listenDOM(eventName, node, handler) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName].push({
      node,
      handler
    });
  }

}

Emitter.events = {
  EDITOR_CHANGE: 'editor-change',
  SCROLL_BEFORE_UPDATE: 'scroll-before-update',
  SCROLL_OPTIMIZE: 'scroll-optimize',
  SCROLL_UPDATE: 'scroll-update',
  SELECTION_CHANGE: 'selection-change',
  TEXT_CHANGE: 'text-change'
};
Emitter.sources = {
  API: 'api',
  SILENT: 'silent',
  USER: 'user'
};
var _default = Emitter;
exports.default = _default;
},{"eventemitter3":"../node_modules/quill/node_modules/eventemitter3/index.js","./logger":"../node_modules/quill/core/logger.js"}],"../node_modules/quill/core/module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Module {
  constructor(quill, options = {}) {
    this.quill = quill;
    this.options = options;
  }

}

Module.DEFAULTS = {};
var _default = Module;
exports.default = _default;
},{}],"../node_modules/quill/core/selection.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Range = void 0;

var _parchment = _interopRequireDefault(require("parchment"));

var _clone = _interopRequireDefault(require("clone"));

var _deepEqual = _interopRequireDefault(require("deep-equal"));

var _emitter = _interopRequireDefault(require("./emitter"));

var _logger = _interopRequireDefault(require("./logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let debug = (0, _logger.default)('quill:selection');

class Range {
  constructor(index, length = 0) {
    this.index = index;
    this.length = length;
  }

}

exports.Range = Range;

class Selection {
  constructor(scroll, emitter) {
    this.emitter = emitter;
    this.scroll = scroll;
    this.composing = false;
    this.mouseDown = false;
    this.root = this.scroll.domNode;
    this.cursor = _parchment.default.create('cursor', this); // savedRange is last non-null range

    this.lastRange = this.savedRange = new Range(0, 0);
    this.handleComposition();
    this.handleDragging();
    this.emitter.listenDOM('selectionchange', document, () => {
      if (!this.mouseDown) {
        setTimeout(this.update.bind(this, _emitter.default.sources.USER), 1);
      }
    });
    this.emitter.on(_emitter.default.events.EDITOR_CHANGE, (type, delta) => {
      if (type === _emitter.default.events.TEXT_CHANGE && delta.length() > 0) {
        this.update(_emitter.default.sources.SILENT);
      }
    });
    this.emitter.on(_emitter.default.events.SCROLL_BEFORE_UPDATE, () => {
      if (!this.hasFocus()) return;
      let native = this.getNativeRange();
      if (native == null) return;
      if (native.start.node === this.cursor.textNode) return; // cursor.restore() will handle
      // TODO unclear if this has negative side effects

      this.emitter.once(_emitter.default.events.SCROLL_UPDATE, () => {
        try {
          this.setNativeRange(native.start.node, native.start.offset, native.end.node, native.end.offset);
        } catch (ignored) {}
      });
    });
    this.emitter.on(_emitter.default.events.SCROLL_OPTIMIZE, (mutations, context) => {
      if (context.range) {
        const {
          startNode,
          startOffset,
          endNode,
          endOffset
        } = context.range;
        this.setNativeRange(startNode, startOffset, endNode, endOffset);
      }
    });
    this.update(_emitter.default.sources.SILENT);
  }

  handleComposition() {
    this.root.addEventListener('compositionstart', () => {
      this.composing = true;
    });
    this.root.addEventListener('compositionend', () => {
      this.composing = false;

      if (this.cursor.parent) {
        const range = this.cursor.restore();
        if (!range) return;
        setTimeout(() => {
          this.setNativeRange(range.startNode, range.startOffset, range.endNode, range.endOffset);
        }, 1);
      }
    });
  }

  handleDragging() {
    this.emitter.listenDOM('mousedown', document.body, () => {
      this.mouseDown = true;
    });
    this.emitter.listenDOM('mouseup', document.body, () => {
      this.mouseDown = false;
      this.update(_emitter.default.sources.USER);
    });
  }

  focus() {
    if (this.hasFocus()) return;
    this.root.focus();
    this.setRange(this.savedRange);
  }

  format(format, value) {
    if (this.scroll.whitelist != null && !this.scroll.whitelist[format]) return;
    this.scroll.update();
    let nativeRange = this.getNativeRange();
    if (nativeRange == null || !nativeRange.native.collapsed || _parchment.default.query(format, _parchment.default.Scope.BLOCK)) return;

    if (nativeRange.start.node !== this.cursor.textNode) {
      let blot = _parchment.default.find(nativeRange.start.node, false);

      if (blot == null) return; // TODO Give blot ability to not split

      if (blot instanceof _parchment.default.Leaf) {
        let after = blot.split(nativeRange.start.offset);
        blot.parent.insertBefore(this.cursor, after);
      } else {
        blot.insertBefore(this.cursor, nativeRange.start.node); // Should never happen
      }

      this.cursor.attach();
    }

    this.cursor.format(format, value);
    this.scroll.optimize();
    this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length);
    this.update();
  }

  getBounds(index, length = 0) {
    let scrollLength = this.scroll.length();
    index = Math.min(index, scrollLength - 1);
    length = Math.min(index + length, scrollLength - 1) - index;
    let node,
        [leaf, offset] = this.scroll.leaf(index);
    if (leaf == null) return null;
    [node, offset] = leaf.position(offset, true);
    let range = document.createRange();

    if (length > 0) {
      range.setStart(node, offset);
      [leaf, offset] = this.scroll.leaf(index + length);
      if (leaf == null) return null;
      [node, offset] = leaf.position(offset, true);
      range.setEnd(node, offset);
      return range.getBoundingClientRect();
    } else {
      let side = 'left';
      let rect;

      if (node instanceof Text) {
        if (offset < node.data.length) {
          range.setStart(node, offset);
          range.setEnd(node, offset + 1);
        } else {
          range.setStart(node, offset - 1);
          range.setEnd(node, offset);
          side = 'right';
        }

        rect = range.getBoundingClientRect();
      } else {
        rect = leaf.domNode.getBoundingClientRect();
        if (offset > 0) side = 'right';
      }

      return {
        bottom: rect.top + rect.height,
        height: rect.height,
        left: rect[side],
        right: rect[side],
        top: rect.top,
        width: 0
      };
    }
  }

  getNativeRange() {
    let selection = document.getSelection();
    if (selection == null || selection.rangeCount <= 0) return null;
    let nativeRange = selection.getRangeAt(0);
    if (nativeRange == null) return null;
    let range = this.normalizeNative(nativeRange);
    debug.info('getNativeRange', range);
    return range;
  }

  getRange() {
    let normalized = this.getNativeRange();
    if (normalized == null) return [null, null];
    let range = this.normalizedToRange(normalized);
    return [range, normalized];
  }

  hasFocus() {
    return document.activeElement === this.root;
  }

  normalizedToRange(range) {
    let positions = [[range.start.node, range.start.offset]];

    if (!range.native.collapsed) {
      positions.push([range.end.node, range.end.offset]);
    }

    let indexes = positions.map(position => {
      let [node, offset] = position;

      let blot = _parchment.default.find(node, true);

      let index = blot.offset(this.scroll);

      if (offset === 0) {
        return index;
      } else if (blot instanceof _parchment.default.Container) {
        return index + blot.length();
      } else {
        return index + blot.index(node, offset);
      }
    });
    let end = Math.min(Math.max(...indexes), this.scroll.length() - 1);
    let start = Math.min(end, ...indexes);
    return new Range(start, end - start);
  }

  normalizeNative(nativeRange) {
    if (!contains(this.root, nativeRange.startContainer) || !nativeRange.collapsed && !contains(this.root, nativeRange.endContainer)) {
      return null;
    }

    let range = {
      start: {
        node: nativeRange.startContainer,
        offset: nativeRange.startOffset
      },
      end: {
        node: nativeRange.endContainer,
        offset: nativeRange.endOffset
      },
      native: nativeRange
    };
    [range.start, range.end].forEach(function (position) {
      let node = position.node,
          offset = position.offset;

      while (!(node instanceof Text) && node.childNodes.length > 0) {
        if (node.childNodes.length > offset) {
          node = node.childNodes[offset];
          offset = 0;
        } else if (node.childNodes.length === offset) {
          node = node.lastChild;
          offset = node instanceof Text ? node.data.length : node.childNodes.length + 1;
        } else {
          break;
        }
      }

      position.node = node, position.offset = offset;
    });
    return range;
  }

  rangeToNative(range) {
    let indexes = range.collapsed ? [range.index] : [range.index, range.index + range.length];
    let args = [];
    let scrollLength = this.scroll.length();
    indexes.forEach((index, i) => {
      index = Math.min(scrollLength - 1, index);
      let node,
          [leaf, offset] = this.scroll.leaf(index);
      [node, offset] = leaf.position(offset, i !== 0);
      args.push(node, offset);
    });

    if (args.length < 2) {
      args = args.concat(args);
    }

    return args;
  }

  scrollIntoView(scrollingContainer) {
    let range = this.lastRange;
    if (range == null) return;
    let bounds = this.getBounds(range.index, range.length);
    if (bounds == null) return;
    let limit = this.scroll.length() - 1;
    let [first] = this.scroll.line(Math.min(range.index, limit));
    let last = first;

    if (range.length > 0) {
      [last] = this.scroll.line(Math.min(range.index + range.length, limit));
    }

    if (first == null || last == null) return;
    let scrollBounds = scrollingContainer.getBoundingClientRect();

    if (bounds.top < scrollBounds.top) {
      scrollingContainer.scrollTop -= scrollBounds.top - bounds.top;
    } else if (bounds.bottom > scrollBounds.bottom) {
      scrollingContainer.scrollTop += bounds.bottom - scrollBounds.bottom;
    }
  }

  setNativeRange(startNode, startOffset, endNode = startNode, endOffset = startOffset, force = false) {
    debug.info('setNativeRange', startNode, startOffset, endNode, endOffset);

    if (startNode != null && (this.root.parentNode == null || startNode.parentNode == null || endNode.parentNode == null)) {
      return;
    }

    let selection = document.getSelection();
    if (selection == null) return;

    if (startNode != null) {
      if (!this.hasFocus()) this.root.focus();
      let native = (this.getNativeRange() || {}).native;

      if (native == null || force || startNode !== native.startContainer || startOffset !== native.startOffset || endNode !== native.endContainer || endOffset !== native.endOffset) {
        if (startNode.tagName == "BR") {
          startOffset = [].indexOf.call(startNode.parentNode.childNodes, startNode);
          startNode = startNode.parentNode;
        }

        if (endNode.tagName == "BR") {
          endOffset = [].indexOf.call(endNode.parentNode.childNodes, endNode);
          endNode = endNode.parentNode;
        }

        let range = document.createRange();
        range.setStart(startNode, startOffset);
        range.setEnd(endNode, endOffset);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    } else {
      selection.removeAllRanges();
      this.root.blur();
      document.body.focus(); // root.blur() not enough on IE11+Travis+SauceLabs (but not local VMs)
    }
  }

  setRange(range, force = false, source = _emitter.default.sources.API) {
    if (typeof force === 'string') {
      source = force;
      force = false;
    }

    debug.info('setRange', range);

    if (range != null) {
      let args = this.rangeToNative(range);
      this.setNativeRange(...args, force);
    } else {
      this.setNativeRange(null);
    }

    this.update(source);
  }

  update(source = _emitter.default.sources.USER) {
    let oldRange = this.lastRange;
    let [lastRange, nativeRange] = this.getRange();
    this.lastRange = lastRange;

    if (this.lastRange != null) {
      this.savedRange = this.lastRange;
    }

    if (!(0, _deepEqual.default)(oldRange, this.lastRange)) {
      if (!this.composing && nativeRange != null && nativeRange.native.collapsed && nativeRange.start.node !== this.cursor.textNode) {
        this.cursor.restore();
      }

      let args = [_emitter.default.events.SELECTION_CHANGE, (0, _clone.default)(this.lastRange), (0, _clone.default)(oldRange), source];
      this.emitter.emit(_emitter.default.events.EDITOR_CHANGE, ...args);

      if (source !== _emitter.default.sources.SILENT) {
        this.emitter.emit(...args);
      }
    }
  }

}

exports.default = Selection;

function contains(parent, descendant) {
  try {
    // Firefox inserts inaccessible nodes around video elements
    descendant.parentNode;
  } catch (e) {
    return false;
  } // IE11 has bug with Text nodes
  // https://connect.microsoft.com/IE/feedback/details/780874/node-contains-is-incorrect


  if (descendant instanceof Text) {
    descendant = descendant.parentNode;
  }

  return parent.contains(descendant);
}
},{"parchment":"../node_modules/parchment/dist/parchment.js","clone":"../node_modules/clone/clone.js","deep-equal":"../node_modules/deep-equal/index.js","./emitter":"../node_modules/quill/core/emitter.js","./logger":"../node_modules/quill/core/logger.js"}],"../node_modules/quill/core/theme.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Theme {
  constructor(quill, options) {
    this.quill = quill;
    this.options = options;
    this.modules = {};
  }

  init() {
    Object.keys(this.options.modules).forEach(name => {
      if (this.modules[name] == null) {
        this.addModule(name);
      }
    });
  }

  addModule(name) {
    let moduleClass = this.quill.constructor.import(`modules/${name}`);
    this.modules[name] = new moduleClass(this.quill, this.options.modules[name] || {});
    return this.modules[name];
  }

}

Theme.DEFAULTS = {
  modules: {}
};
Theme.themes = {
  'default': Theme
};
var _default = Theme;
exports.default = _default;
},{}],"../node_modules/quill/core/quill.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expandConfig = expandConfig;
exports.overload = overload;
exports.default = void 0;

require("./polyfill");

var _quillDelta = _interopRequireDefault(require("quill-delta"));

var _editor = _interopRequireDefault(require("./editor"));

var _emitter = _interopRequireDefault(require("./emitter"));

var _module = _interopRequireDefault(require("./module"));

var _parchment = _interopRequireDefault(require("parchment"));

var _selection = _interopRequireWildcard(require("./selection"));

var _extend = _interopRequireDefault(require("extend"));

var _logger = _interopRequireDefault(require("./logger"));

var _theme = _interopRequireDefault(require("./theme"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let debug = (0, _logger.default)('quill');

class Quill {
  static debug(limit) {
    if (limit === true) {
      limit = 'log';
    }

    _logger.default.level(limit);
  }

  static find(node) {
    return node.__quill || _parchment.default.find(node);
  }

  static import(name) {
    if (this.imports[name] == null) {
      debug.error(`Cannot import ${name}. Are you sure it was registered?`);
    }

    return this.imports[name];
  }

  static register(path, target, overwrite = false) {
    if (typeof path !== 'string') {
      let name = path.attrName || path.blotName;

      if (typeof name === 'string') {
        // register(Blot | Attributor, overwrite)
        this.register('formats/' + name, path, target);
      } else {
        Object.keys(path).forEach(key => {
          this.register(key, path[key], target);
        });
      }
    } else {
      if (this.imports[path] != null && !overwrite) {
        debug.warn(`Overwriting ${path} with`, target);
      }

      this.imports[path] = target;

      if ((path.startsWith('blots/') || path.startsWith('formats/')) && target.blotName !== 'abstract') {
        _parchment.default.register(target);
      } else if (path.startsWith('modules') && typeof target.register === 'function') {
        target.register();
      }
    }
  }

  constructor(container, options = {}) {
    this.options = expandConfig(container, options);
    this.container = this.options.container;

    if (this.container == null) {
      return debug.error('Invalid Quill container', container);
    }

    if (this.options.debug) {
      Quill.debug(this.options.debug);
    }

    let html = this.container.innerHTML.trim();
    this.container.classList.add('ql-container');
    this.container.innerHTML = '';
    this.container.__quill = this;
    this.root = this.addContainer('ql-editor');
    this.root.classList.add('ql-blank');
    this.root.setAttribute('data-gramm', false);
    this.scrollingContainer = this.options.scrollingContainer || this.root;
    this.emitter = new _emitter.default();
    this.scroll = _parchment.default.create(this.root, {
      emitter: this.emitter,
      whitelist: this.options.formats
    });
    this.editor = new _editor.default(this.scroll);
    this.selection = new _selection.default(this.scroll, this.emitter);
    this.theme = new this.options.theme(this, this.options);
    this.keyboard = this.theme.addModule('keyboard');
    this.clipboard = this.theme.addModule('clipboard');
    this.history = this.theme.addModule('history');
    this.theme.init();
    this.emitter.on(_emitter.default.events.EDITOR_CHANGE, type => {
      if (type === _emitter.default.events.TEXT_CHANGE) {
        this.root.classList.toggle('ql-blank', this.editor.isBlank());
      }
    });
    this.emitter.on(_emitter.default.events.SCROLL_UPDATE, (source, mutations) => {
      let range = this.selection.lastRange;
      let index = range && range.length === 0 ? range.index : undefined;
      modify.call(this, () => {
        return this.editor.update(null, mutations, index);
      }, source);
    });
    let contents = this.clipboard.convert(`<div class='ql-editor' style="white-space: normal;">${html}<p><br></p></div>`);
    this.setContents(contents);
    this.history.clear();

    if (this.options.placeholder) {
      this.root.setAttribute('data-placeholder', this.options.placeholder);
    }

    if (this.options.readOnly) {
      this.disable();
    }
  }

  addContainer(container, refNode = null) {
    if (typeof container === 'string') {
      let className = container;
      container = document.createElement('div');
      container.classList.add(className);
    }

    this.container.insertBefore(container, refNode);
    return container;
  }

  blur() {
    this.selection.setRange(null);
  }

  deleteText(index, length, source) {
    [index, length,, source] = overload(index, length, source);
    return modify.call(this, () => {
      return this.editor.deleteText(index, length);
    }, source, index, -1 * length);
  }

  disable() {
    this.enable(false);
  }

  enable(enabled = true) {
    this.scroll.enable(enabled);
    this.container.classList.toggle('ql-disabled', !enabled);
  }

  focus() {
    let scrollTop = this.scrollingContainer.scrollTop;
    this.selection.focus();
    this.scrollingContainer.scrollTop = scrollTop;
    this.scrollIntoView();
  }

  format(name, value, source = _emitter.default.sources.API) {
    return modify.call(this, () => {
      let range = this.getSelection(true);
      let change = new _quillDelta.default();

      if (range == null) {
        return change;
      } else if (_parchment.default.query(name, _parchment.default.Scope.BLOCK)) {
        change = this.editor.formatLine(range.index, range.length, {
          [name]: value
        });
      } else if (range.length === 0) {
        this.selection.format(name, value);
        return change;
      } else {
        change = this.editor.formatText(range.index, range.length, {
          [name]: value
        });
      }

      this.setSelection(range, _emitter.default.sources.SILENT);
      return change;
    }, source);
  }

  formatLine(index, length, name, value, source) {
    let formats;
    [index, length, formats, source] = overload(index, length, name, value, source);
    return modify.call(this, () => {
      return this.editor.formatLine(index, length, formats);
    }, source, index, 0);
  }

  formatText(index, length, name, value, source) {
    let formats;
    [index, length, formats, source] = overload(index, length, name, value, source);
    return modify.call(this, () => {
      return this.editor.formatText(index, length, formats);
    }, source, index, 0);
  }

  getBounds(index, length = 0) {
    let bounds;

    if (typeof index === 'number') {
      bounds = this.selection.getBounds(index, length);
    } else {
      bounds = this.selection.getBounds(index.index, index.length);
    }

    let containerBounds = this.container.getBoundingClientRect();
    return {
      bottom: bounds.bottom - containerBounds.top,
      height: bounds.height,
      left: bounds.left - containerBounds.left,
      right: bounds.right - containerBounds.left,
      top: bounds.top - containerBounds.top,
      width: bounds.width
    };
  }

  getContents(index = 0, length = this.getLength() - index) {
    [index, length] = overload(index, length);
    return this.editor.getContents(index, length);
  }

  getFormat(index = this.getSelection(true), length = 0) {
    if (typeof index === 'number') {
      return this.editor.getFormat(index, length);
    } else {
      return this.editor.getFormat(index.index, index.length);
    }
  }

  getIndex(blot) {
    return blot.offset(this.scroll);
  }

  getLength() {
    return this.scroll.length();
  }

  getLeaf(index) {
    return this.scroll.leaf(index);
  }

  getLine(index) {
    return this.scroll.line(index);
  }

  getLines(index = 0, length = Number.MAX_VALUE) {
    if (typeof index !== 'number') {
      return this.scroll.lines(index.index, index.length);
    } else {
      return this.scroll.lines(index, length);
    }
  }

  getModule(name) {
    return this.theme.modules[name];
  }

  getSelection(focus = false) {
    if (focus) this.focus();
    this.update(); // Make sure we access getRange with editor in consistent state

    return this.selection.getRange()[0];
  }

  getText(index = 0, length = this.getLength() - index) {
    [index, length] = overload(index, length);
    return this.editor.getText(index, length);
  }

  hasFocus() {
    return this.selection.hasFocus();
  }

  insertEmbed(index, embed, value, source = Quill.sources.API) {
    return modify.call(this, () => {
      return this.editor.insertEmbed(index, embed, value);
    }, source, index);
  }

  insertText(index, text, name, value, source) {
    let formats;
    [index,, formats, source] = overload(index, 0, name, value, source);
    return modify.call(this, () => {
      return this.editor.insertText(index, text, formats);
    }, source, index, text.length);
  }

  isEnabled() {
    return !this.container.classList.contains('ql-disabled');
  }

  off() {
    return this.emitter.off.apply(this.emitter, arguments);
  }

  on() {
    return this.emitter.on.apply(this.emitter, arguments);
  }

  once() {
    return this.emitter.once.apply(this.emitter, arguments);
  }

  pasteHTML(index, html, source) {
    this.clipboard.dangerouslyPasteHTML(index, html, source);
  }

  removeFormat(index, length, source) {
    [index, length,, source] = overload(index, length, source);
    return modify.call(this, () => {
      return this.editor.removeFormat(index, length);
    }, source, index);
  }

  scrollIntoView() {
    this.selection.scrollIntoView(this.scrollingContainer);
  }

  setContents(delta, source = _emitter.default.sources.API) {
    return modify.call(this, () => {
      delta = new _quillDelta.default(delta);
      let length = this.getLength();
      let deleted = this.editor.deleteText(0, length);
      let applied = this.editor.applyDelta(delta);
      let lastOp = applied.ops[applied.ops.length - 1];

      if (lastOp != null && typeof lastOp.insert === 'string' && lastOp.insert[lastOp.insert.length - 1] === '\n') {
        this.editor.deleteText(this.getLength() - 1, 1);
        applied.delete(1);
      }

      let ret = deleted.compose(applied);
      return ret;
    }, source);
  }

  setSelection(index, length, source) {
    if (index == null) {
      this.selection.setRange(null, length || Quill.sources.API);
    } else {
      [index, length,, source] = overload(index, length, source);
      this.selection.setRange(new _selection.Range(index, length), source);

      if (source !== _emitter.default.sources.SILENT) {
        this.selection.scrollIntoView(this.scrollingContainer);
      }
    }
  }

  setText(text, source = _emitter.default.sources.API) {
    let delta = new _quillDelta.default().insert(text);
    return this.setContents(delta, source);
  }

  update(source = _emitter.default.sources.USER) {
    let change = this.scroll.update(source); // Will update selection before selection.update() does if text changes

    this.selection.update(source);
    return change;
  }

  updateContents(delta, source = _emitter.default.sources.API) {
    return modify.call(this, () => {
      delta = new _quillDelta.default(delta);
      return this.editor.applyDelta(delta, source);
    }, source, true);
  }

}

exports.default = Quill;
Quill.DEFAULTS = {
  bounds: null,
  formats: null,
  modules: {},
  placeholder: '',
  readOnly: false,
  scrollingContainer: null,
  strict: true,
  theme: 'default'
};
Quill.events = _emitter.default.events;
Quill.sources = _emitter.default.sources; // eslint-disable-next-line no-undef

Quill.version = typeof QUILL_VERSION === 'undefined' ? 'dev' : QUILL_VERSION;
Quill.imports = {
  'delta': _quillDelta.default,
  'parchment': _parchment.default,
  'core/module': _module.default,
  'core/theme': _theme.default
};

function expandConfig(container, userConfig) {
  userConfig = (0, _extend.default)(true, {
    container: container,
    modules: {
      clipboard: true,
      keyboard: true,
      history: true
    }
  }, userConfig);

  if (!userConfig.theme || userConfig.theme === Quill.DEFAULTS.theme) {
    userConfig.theme = _theme.default;
  } else {
    userConfig.theme = Quill.import(`themes/${userConfig.theme}`);

    if (userConfig.theme == null) {
      throw new Error(`Invalid theme ${userConfig.theme}. Did you register it?`);
    }
  }

  let themeConfig = (0, _extend.default)(true, {}, userConfig.theme.DEFAULTS);
  [themeConfig, userConfig].forEach(function (config) {
    config.modules = config.modules || {};
    Object.keys(config.modules).forEach(function (module) {
      if (config.modules[module] === true) {
        config.modules[module] = {};
      }
    });
  });
  let moduleNames = Object.keys(themeConfig.modules).concat(Object.keys(userConfig.modules));
  let moduleConfig = moduleNames.reduce(function (config, name) {
    let moduleClass = Quill.import(`modules/${name}`);

    if (moduleClass == null) {
      debug.error(`Cannot load ${name} module. Are you sure you registered it?`);
    } else {
      config[name] = moduleClass.DEFAULTS || {};
    }

    return config;
  }, {}); // Special case toolbar shorthand

  if (userConfig.modules != null && userConfig.modules.toolbar && userConfig.modules.toolbar.constructor !== Object) {
    userConfig.modules.toolbar = {
      container: userConfig.modules.toolbar
    };
  }

  userConfig = (0, _extend.default)(true, {}, Quill.DEFAULTS, {
    modules: moduleConfig
  }, themeConfig, userConfig);
  ['bounds', 'container', 'scrollingContainer'].forEach(function (key) {
    if (typeof userConfig[key] === 'string') {
      userConfig[key] = document.querySelector(userConfig[key]);
    }
  });
  userConfig.modules = Object.keys(userConfig.modules).reduce(function (config, name) {
    if (userConfig.modules[name]) {
      config[name] = userConfig.modules[name];
    }

    return config;
  }, {});
  return userConfig;
} // Handle selection preservation and TEXT_CHANGE emission
// common to modification APIs


function modify(modifier, source, index, shift) {
  if (this.options.strict && !this.isEnabled() && source === _emitter.default.sources.USER) {
    return new _quillDelta.default();
  }

  let range = index == null ? null : this.getSelection();
  let oldDelta = this.editor.delta;
  let change = modifier();

  if (range != null) {
    if (index === true) index = range.index;

    if (shift == null) {
      range = shiftRange(range, change, source);
    } else if (shift !== 0) {
      range = shiftRange(range, index, shift, source);
    }

    this.setSelection(range, _emitter.default.sources.SILENT);
  }

  if (change.length() > 0) {
    let args = [_emitter.default.events.TEXT_CHANGE, change, oldDelta, source];
    this.emitter.emit(_emitter.default.events.EDITOR_CHANGE, ...args);

    if (source !== _emitter.default.sources.SILENT) {
      this.emitter.emit(...args);
    }
  }

  return change;
}

function overload(index, length, name, value, source) {
  let formats = {};

  if (typeof index.index === 'number' && typeof index.length === 'number') {
    // Allow for throwaway end (used by insertText/insertEmbed)
    if (typeof length !== 'number') {
      source = value, value = name, name = length, length = index.length, index = index.index;
    } else {
      length = index.length, index = index.index;
    }
  } else if (typeof length !== 'number') {
    source = value, value = name, name = length, length = 0;
  } // Handle format being object, two format name/value strings or excluded


  if (typeof name === 'object') {
    formats = name;
    source = value;
  } else if (typeof name === 'string') {
    if (value != null) {
      formats[name] = value;
    } else {
      source = name;
    }
  } // Handle optional source


  source = source || _emitter.default.sources.API;
  return [index, length, formats, source];
}

function shiftRange(range, index, length, source) {
  if (range == null) return null;
  let start, end;

  if (index instanceof _quillDelta.default) {
    [start, end] = [range.index, range.index + range.length].map(function (pos) {
      return index.transformPosition(pos, source !== _emitter.default.sources.USER);
    });
  } else {
    [start, end] = [range.index, range.index + range.length].map(function (pos) {
      if (pos < index || pos === index && source === _emitter.default.sources.USER) return pos;

      if (length >= 0) {
        return pos + length;
      } else {
        return Math.max(index, pos + length);
      }
    });
  }

  return new _selection.Range(start, end - start);
}
},{"./polyfill":"../node_modules/quill/core/polyfill.js","quill-delta":"../node_modules/quill-delta/lib/delta.js","./editor":"../node_modules/quill/core/editor.js","./emitter":"../node_modules/quill/core/emitter.js","./module":"../node_modules/quill/core/module.js","parchment":"../node_modules/parchment/dist/parchment.js","./selection":"../node_modules/quill/core/selection.js","extend":"../node_modules/extend/index.js","./logger":"../node_modules/quill/core/logger.js","./theme":"../node_modules/quill/core/theme.js"}],"../node_modules/quill/blots/container.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _parchment = _interopRequireDefault(require("parchment"));

var _block = _interopRequireWildcard(require("./block"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Container extends _parchment.default.Container {}

Container.allowedChildren = [_block.default, _block.BlockEmbed, Container];
var _default = Container;
exports.default = _default;
},{"parchment":"../node_modules/parchment/dist/parchment.js","./block":"../node_modules/quill/blots/block.js"}],"../node_modules/quill/blots/embed.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _parchment = _interopRequireDefault(require("parchment"));

var _text = _interopRequireDefault(require("./text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GUARD_TEXT = "\uFEFF";

class Embed extends _parchment.default.Embed {
  constructor(node) {
    super(node);
    this.contentNode = document.createElement('span');
    this.contentNode.setAttribute('contenteditable', false);
    [].slice.call(this.domNode.childNodes).forEach(childNode => {
      this.contentNode.appendChild(childNode);
    });
    this.leftGuard = document.createTextNode(GUARD_TEXT);
    this.rightGuard = document.createTextNode(GUARD_TEXT);
    this.domNode.appendChild(this.leftGuard);
    this.domNode.appendChild(this.contentNode);
    this.domNode.appendChild(this.rightGuard);
  }

  index(node, offset) {
    if (node === this.leftGuard) return 0;
    if (node === this.rightGuard) return 1;
    return super.index(node, offset);
  }

  restore(node) {
    let range, textNode;
    let text = node.data.split(GUARD_TEXT).join('');

    if (node === this.leftGuard) {
      if (this.prev instanceof _text.default) {
        let prevLength = this.prev.length();
        this.prev.insertAt(prevLength, text);
        range = {
          startNode: this.prev.domNode,
          startOffset: prevLength + text.length
        };
      } else {
        textNode = document.createTextNode(text);
        this.parent.insertBefore(_parchment.default.create(textNode), this);
        range = {
          startNode: textNode,
          startOffset: text.length
        };
      }
    } else if (node === this.rightGuard) {
      if (this.next instanceof _text.default) {
        this.next.insertAt(0, text);
        range = {
          startNode: this.next.domNode,
          startOffset: text.length
        };
      } else {
        textNode = document.createTextNode(text);
        this.parent.insertBefore(_parchment.default.create(textNode), this.next);
        range = {
          startNode: textNode,
          startOffset: text.length
        };
      }
    }

    node.data = GUARD_TEXT;
    return range;
  }

  update(mutations, context) {
    mutations.forEach(mutation => {
      if (mutation.type === 'characterData' && (mutation.target === this.leftGuard || mutation.target === this.rightGuard)) {
        let range = this.restore(mutation.target);
        if (range) context.range = range;
      }
    });
  }

}

var _default = Embed;
exports.default = _default;
},{"parchment":"../node_modules/parchment/dist/parchment.js","./text":"../node_modules/quill/blots/text.js"}],"../node_modules/quill/blots/scroll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _parchment = _interopRequireDefault(require("parchment"));

var _emitter = _interopRequireDefault(require("../core/emitter"));

var _block = _interopRequireWildcard(require("./block"));

var _break = _interopRequireDefault(require("./break"));

var _code = _interopRequireDefault(require("../formats/code"));

var _container = _interopRequireDefault(require("./container"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isLine(blot) {
  return blot instanceof _block.default || blot instanceof _block.BlockEmbed;
}

class Scroll extends _parchment.default.Scroll {
  constructor(domNode, config) {
    super(domNode);
    this.emitter = config.emitter;

    if (Array.isArray(config.whitelist)) {
      this.whitelist = config.whitelist.reduce(function (whitelist, format) {
        whitelist[format] = true;
        return whitelist;
      }, {});
    } // Some reason fixes composition issues with character languages in Windows/Chrome, Safari


    this.domNode.addEventListener('DOMNodeInserted', function () {});
    this.optimize();
    this.enable();
  }

  batchStart() {
    this.batch = true;
  }

  batchEnd() {
    this.batch = false;
    this.optimize();
  }

  deleteAt(index, length) {
    let [first, offset] = this.line(index);
    let [last] = this.line(index + length);
    super.deleteAt(index, length);

    if (last != null && first !== last && offset > 0) {
      if (first instanceof _block.BlockEmbed || last instanceof _block.BlockEmbed) {
        this.optimize();
        return;
      }

      if (first instanceof _code.default) {
        let newlineIndex = first.newlineIndex(first.length(), true);

        if (newlineIndex > -1) {
          first = first.split(newlineIndex + 1);

          if (first === last) {
            this.optimize();
            return;
          }
        }
      } else if (last instanceof _code.default) {
        let newlineIndex = last.newlineIndex(0);

        if (newlineIndex > -1) {
          last.split(newlineIndex + 1);
        }
      }

      let ref = last.children.head instanceof _break.default ? null : last.children.head;
      first.moveChildren(last, ref);
      first.remove();
    }

    this.optimize();
  }

  enable(enabled = true) {
    this.domNode.setAttribute('contenteditable', enabled);
  }

  formatAt(index, length, format, value) {
    if (this.whitelist != null && !this.whitelist[format]) return;
    super.formatAt(index, length, format, value);
    this.optimize();
  }

  insertAt(index, value, def) {
    if (def != null && this.whitelist != null && !this.whitelist[value]) return;

    if (index >= this.length()) {
      if (def == null || _parchment.default.query(value, _parchment.default.Scope.BLOCK) == null) {
        let blot = _parchment.default.create(this.statics.defaultChild);

        this.appendChild(blot);

        if (def == null && value.endsWith('\n')) {
          value = value.slice(0, -1);
        }

        blot.insertAt(0, value, def);
      } else {
        let embed = _parchment.default.create(value, def);

        this.appendChild(embed);
      }
    } else {
      super.insertAt(index, value, def);
    }

    this.optimize();
  }

  insertBefore(blot, ref) {
    if (blot.statics.scope === _parchment.default.Scope.INLINE_BLOT) {
      let wrapper = _parchment.default.create(this.statics.defaultChild);

      wrapper.appendChild(blot);
      blot = wrapper;
    }

    super.insertBefore(blot, ref);
  }

  leaf(index) {
    return this.path(index).pop() || [null, -1];
  }

  line(index) {
    if (index === this.length()) {
      return this.line(index - 1);
    }

    return this.descendant(isLine, index);
  }

  lines(index = 0, length = Number.MAX_VALUE) {
    let getLines = (blot, index, length) => {
      let lines = [],
          lengthLeft = length;
      blot.children.forEachAt(index, length, function (child, index, length) {
        if (isLine(child)) {
          lines.push(child);
        } else if (child instanceof _parchment.default.Container) {
          lines = lines.concat(getLines(child, index, lengthLeft));
        }

        lengthLeft -= length;
      });
      return lines;
    };

    return getLines(this, index, length);
  }

  optimize(mutations = [], context = {}) {
    if (this.batch === true) return;
    super.optimize(mutations, context);

    if (mutations.length > 0) {
      this.emitter.emit(_emitter.default.events.SCROLL_OPTIMIZE, mutations, context);
    }
  }

  path(index) {
    return super.path(index).slice(1); // Exclude self
  }

  update(mutations) {
    if (this.batch === true) return;
    let source = _emitter.default.sources.USER;

    if (typeof mutations === 'string') {
      source = mutations;
    }

    if (!Array.isArray(mutations)) {
      mutations = this.observer.takeRecords();
    }

    if (mutations.length > 0) {
      this.emitter.emit(_emitter.default.events.SCROLL_BEFORE_UPDATE, source, mutations);
    }

    super.update(mutations.concat([])); // pass copy

    if (mutations.length > 0) {
      this.emitter.emit(_emitter.default.events.SCROLL_UPDATE, source, mutations);
    }
  }

}

Scroll.blotName = 'scroll';
Scroll.className = 'ql-editor';
Scroll.tagName = 'DIV';
Scroll.defaultChild = 'block';
Scroll.allowedChildren = [_block.default, _block.BlockEmbed, _container.default];
var _default = Scroll;
exports.default = _default;
},{"parchment":"../node_modules/parchment/dist/parchment.js","../core/emitter":"../node_modules/quill/core/emitter.js","./block":"../node_modules/quill/blots/block.js","./break":"../node_modules/quill/blots/break.js","../formats/code":"../node_modules/quill/formats/code.js","./container":"../node_modules/quill/blots/container.js"}],"../node_modules/quill/formats/align.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlignStyle = exports.AlignClass = exports.AlignAttribute = void 0;

var _parchment = _interopRequireDefault(require("parchment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let config = {
  scope: _parchment.default.Scope.BLOCK,
  whitelist: ['right', 'center', 'justify']
};
let AlignAttribute = new _parchment.default.Attributor.Attribute('align', 'align', config);
exports.AlignAttribute = AlignAttribute;
let AlignClass = new _parchment.default.Attributor.Class('align', 'ql-align', config);
exports.AlignClass = AlignClass;
let AlignStyle = new _parchment.default.Attributor.Style('align', 'text-align', config);
exports.AlignStyle = AlignStyle;
},{"parchment":"../node_modules/parchment/dist/parchment.js"}],"../node_modules/quill/formats/color.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorStyle = exports.ColorClass = exports.ColorAttributor = void 0;

var _parchment = _interopRequireDefault(require("parchment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ColorAttributor extends _parchment.default.Attributor.Style {
  value(domNode) {
    let value = super.value(domNode);
    if (!value.startsWith('rgb(')) return value;
    value = value.replace(/^[^\d]+/, '').replace(/[^\d]+$/, '');
    return '#' + value.split(',').map(function (component) {
      return ('00' + parseInt(component).toString(16)).slice(-2);
    }).join('');
  }

}

exports.ColorAttributor = ColorAttributor;
let ColorClass = new _parchment.default.Attributor.Class('color', 'ql-color', {
  scope: _parchment.default.Scope.INLINE
});
exports.ColorClass = ColorClass;
let ColorStyle = new ColorAttributor('color', 'color', {
  scope: _parchment.default.Scope.INLINE
});
exports.ColorStyle = ColorStyle;
},{"parchment":"../node_modules/parchment/dist/parchment.js"}],"../node_modules/quill/formats/background.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackgroundStyle = exports.BackgroundClass = void 0;

var _parchment = _interopRequireDefault(require("parchment"));

var _color = require("./color");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let BackgroundClass = new _parchment.default.Attributor.Class('background', 'ql-bg', {
  scope: _parchment.default.Scope.INLINE
});
exports.BackgroundClass = BackgroundClass;
let BackgroundStyle = new _color.ColorAttributor('background', 'background-color', {
  scope: _parchment.default.Scope.INLINE
});
exports.BackgroundStyle = BackgroundStyle;
},{"parchment":"../node_modules/parchment/dist/parchment.js","./color":"../node_modules/quill/formats/color.js"}],"../node_modules/quill/formats/direction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DirectionStyle = exports.DirectionClass = exports.DirectionAttribute = void 0;

var _parchment = _interopRequireDefault(require("parchment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let config = {
  scope: _parchment.default.Scope.BLOCK,
  whitelist: ['rtl']
};
let DirectionAttribute = new _parchment.default.Attributor.Attribute('direction', 'dir', config);
exports.DirectionAttribute = DirectionAttribute;
let DirectionClass = new _parchment.default.Attributor.Class('direction', 'ql-direction', config);
exports.DirectionClass = DirectionClass;
let DirectionStyle = new _parchment.default.Attributor.Style('direction', 'direction', config);
exports.DirectionStyle = DirectionStyle;
},{"parchment":"../node_modules/parchment/dist/parchment.js"}],"../node_modules/quill/formats/font.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FontClass = exports.FontStyle = void 0;

var _parchment = _interopRequireDefault(require("parchment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let config = {
  scope: _parchment.default.Scope.INLINE,
  whitelist: ['serif', 'monospace']
};
let FontClass = new _parchment.default.Attributor.Class('font', 'ql-font', config);
exports.FontClass = FontClass;

class FontStyleAttributor extends _parchment.default.Attributor.Style {
  value(node) {
    return super.value(node).replace(/["']/g, '');
  }

}

let FontStyle = new FontStyleAttributor('font', 'font-family', config);
exports.FontStyle = FontStyle;
},{"parchment":"../node_modules/parchment/dist/parchment.js"}],"../node_modules/quill/formats/size.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SizeStyle = exports.SizeClass = void 0;

var _parchment = _interopRequireDefault(require("parchment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let SizeClass = new _parchment.default.Attributor.Class('size', 'ql-size', {
  scope: _parchment.default.Scope.INLINE,
  whitelist: ['small', 'large', 'huge']
});
exports.SizeClass = SizeClass;
let SizeStyle = new _parchment.default.Attributor.Style('size', 'font-size', {
  scope: _parchment.default.Scope.INLINE,
  whitelist: ['10px', '18px', '32px']
});
exports.SizeStyle = SizeStyle;
},{"parchment":"../node_modules/parchment/dist/parchment.js"}],"../node_modules/quill/modules/clipboard.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchAttributor = matchAttributor;
exports.matchBlot = matchBlot;
exports.matchNewline = matchNewline;
exports.matchSpacing = matchSpacing;
exports.matchText = matchText;
exports.default = void 0;

var _extend = _interopRequireDefault(require("extend"));

var _quillDelta = _interopRequireDefault(require("quill-delta"));

var _parchment = _interopRequireDefault(require("parchment"));

var _quill = _interopRequireDefault(require("../core/quill"));

var _logger = _interopRequireDefault(require("../core/logger"));

var _module = _interopRequireDefault(require("../core/module"));

var _align = require("../formats/align");

var _background = require("../formats/background");

var _code = _interopRequireDefault(require("../formats/code"));

var _color = require("../formats/color");

var _direction = require("../formats/direction");

var _font = require("../formats/font");

var _size = require("../formats/size");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let debug = (0, _logger.default)('quill:clipboard');
const DOM_KEY = '__ql-matcher';
const CLIPBOARD_CONFIG = [[Node.TEXT_NODE, matchText], [Node.TEXT_NODE, matchNewline], ['br', matchBreak], [Node.ELEMENT_NODE, matchNewline], [Node.ELEMENT_NODE, matchBlot], [Node.ELEMENT_NODE, matchSpacing], [Node.ELEMENT_NODE, matchAttributor], [Node.ELEMENT_NODE, matchStyles], ['li', matchIndent], ['b', matchAlias.bind(matchAlias, 'bold')], ['i', matchAlias.bind(matchAlias, 'italic')], ['style', matchIgnore]];
const ATTRIBUTE_ATTRIBUTORS = [_align.AlignAttribute, _direction.DirectionAttribute].reduce(function (memo, attr) {
  memo[attr.keyName] = attr;
  return memo;
}, {});
const STYLE_ATTRIBUTORS = [_align.AlignStyle, _background.BackgroundStyle, _color.ColorStyle, _direction.DirectionStyle, _font.FontStyle, _size.SizeStyle].reduce(function (memo, attr) {
  memo[attr.keyName] = attr;
  return memo;
}, {});

class Clipboard extends _module.default {
  constructor(quill, options) {
    super(quill, options);
    this.quill.root.addEventListener('paste', this.onPaste.bind(this));
    this.container = this.quill.addContainer('ql-clipboard');
    this.container.setAttribute('contenteditable', true);
    this.container.setAttribute('tabindex', -1);
    this.matchers = [];
    CLIPBOARD_CONFIG.concat(this.options.matchers).forEach(([selector, matcher]) => {
      if (!options.matchVisual && matcher === matchSpacing) return;
      this.addMatcher(selector, matcher);
    });
  }

  addMatcher(selector, matcher) {
    this.matchers.push([selector, matcher]);
  }

  convert(html) {
    if (typeof html === 'string') {
      this.container.innerHTML = html.replace(/\>\r?\n +\</g, '><'); // Remove spaces between tags

      return this.convert();
    }

    const formats = this.quill.getFormat(this.quill.selection.savedRange.index);

    if (formats[_code.default.blotName]) {
      const text = this.container.innerText;
      this.container.innerHTML = '';
      return new _quillDelta.default().insert(text, {
        [_code.default.blotName]: formats[_code.default.blotName]
      });
    }

    let [elementMatchers, textMatchers] = this.prepareMatching();
    let delta = traverse(this.container, elementMatchers, textMatchers); // Remove trailing newline

    if (deltaEndsWith(delta, '\n') && delta.ops[delta.ops.length - 1].attributes == null) {
      delta = delta.compose(new _quillDelta.default().retain(delta.length() - 1).delete(1));
    }

    debug.log('convert', this.container.innerHTML, delta);
    this.container.innerHTML = '';
    return delta;
  }

  dangerouslyPasteHTML(index, html, source = _quill.default.sources.API) {
    if (typeof index === 'string') {
      this.quill.setContents(this.convert(index), html);
      this.quill.setSelection(0, _quill.default.sources.SILENT);
    } else {
      let paste = this.convert(html);
      this.quill.updateContents(new _quillDelta.default().retain(index).concat(paste), source);
      this.quill.setSelection(index + paste.length(), _quill.default.sources.SILENT);
    }
  }

  onPaste(e) {
    if (e.defaultPrevented || !this.quill.isEnabled()) return;
    let range = this.quill.getSelection();
    let delta = new _quillDelta.default().retain(range.index);
    let scrollTop = this.quill.scrollingContainer.scrollTop;
    this.container.focus();
    this.quill.selection.update(_quill.default.sources.SILENT);
    setTimeout(() => {
      delta = delta.concat(this.convert()).delete(range.length);
      this.quill.updateContents(delta, _quill.default.sources.USER); // range.length contributes to delta.length()

      this.quill.setSelection(delta.length() - range.length, _quill.default.sources.SILENT);
      this.quill.scrollingContainer.scrollTop = scrollTop;
      this.quill.focus();
    }, 1);
  }

  prepareMatching() {
    let elementMatchers = [],
        textMatchers = [];
    this.matchers.forEach(pair => {
      let [selector, matcher] = pair;

      switch (selector) {
        case Node.TEXT_NODE:
          textMatchers.push(matcher);
          break;

        case Node.ELEMENT_NODE:
          elementMatchers.push(matcher);
          break;

        default:
          [].forEach.call(this.container.querySelectorAll(selector), node => {
            // TODO use weakmap
            node[DOM_KEY] = node[DOM_KEY] || [];
            node[DOM_KEY].push(matcher);
          });
          break;
      }
    });
    return [elementMatchers, textMatchers];
  }

}

exports.default = Clipboard;
Clipboard.DEFAULTS = {
  matchers: [],
  matchVisual: true
};

function applyFormat(delta, format, value) {
  if (typeof format === 'object') {
    return Object.keys(format).reduce(function (delta, key) {
      return applyFormat(delta, key, format[key]);
    }, delta);
  } else {
    return delta.reduce(function (delta, op) {
      if (op.attributes && op.attributes[format]) {
        return delta.push(op);
      } else {
        return delta.insert(op.insert, (0, _extend.default)({}, {
          [format]: value
        }, op.attributes));
      }
    }, new _quillDelta.default());
  }
}

function computeStyle(node) {
  if (node.nodeType !== Node.ELEMENT_NODE) return {};
  const DOM_KEY = '__ql-computed-style';
  return node[DOM_KEY] || (node[DOM_KEY] = window.getComputedStyle(node));
}

function deltaEndsWith(delta, text) {
  let endText = "";

  for (let i = delta.ops.length - 1; i >= 0 && endText.length < text.length; --i) {
    let op = delta.ops[i];
    if (typeof op.insert !== 'string') break;
    endText = op.insert + endText;
  }

  return endText.slice(-1 * text.length) === text;
}

function isLine(node) {
  if (node.childNodes.length === 0) return false; // Exclude embed blocks

  let style = computeStyle(node);
  return ['block', 'list-item'].indexOf(style.display) > -1;
}

function traverse(node, elementMatchers, textMatchers) {
  // Post-order
  if (node.nodeType === node.TEXT_NODE) {
    return textMatchers.reduce(function (delta, matcher) {
      return matcher(node, delta);
    }, new _quillDelta.default());
  } else if (node.nodeType === node.ELEMENT_NODE) {
    return [].reduce.call(node.childNodes || [], (delta, childNode) => {
      let childrenDelta = traverse(childNode, elementMatchers, textMatchers);

      if (childNode.nodeType === node.ELEMENT_NODE) {
        childrenDelta = elementMatchers.reduce(function (childrenDelta, matcher) {
          return matcher(childNode, childrenDelta);
        }, childrenDelta);
        childrenDelta = (childNode[DOM_KEY] || []).reduce(function (childrenDelta, matcher) {
          return matcher(childNode, childrenDelta);
        }, childrenDelta);
      }

      return delta.concat(childrenDelta);
    }, new _quillDelta.default());
  } else {
    return new _quillDelta.default();
  }
}

function matchAlias(format, node, delta) {
  return applyFormat(delta, format, true);
}

function matchAttributor(node, delta) {
  let attributes = _parchment.default.Attributor.Attribute.keys(node);

  let classes = _parchment.default.Attributor.Class.keys(node);

  let styles = _parchment.default.Attributor.Style.keys(node);

  let formats = {};
  attributes.concat(classes).concat(styles).forEach(name => {
    let attr = _parchment.default.query(name, _parchment.default.Scope.ATTRIBUTE);

    if (attr != null) {
      formats[attr.attrName] = attr.value(node);
      if (formats[attr.attrName]) return;
    }

    attr = ATTRIBUTE_ATTRIBUTORS[name];

    if (attr != null && (attr.attrName === name || attr.keyName === name)) {
      formats[attr.attrName] = attr.value(node) || undefined;
    }

    attr = STYLE_ATTRIBUTORS[name];

    if (attr != null && (attr.attrName === name || attr.keyName === name)) {
      attr = STYLE_ATTRIBUTORS[name];
      formats[attr.attrName] = attr.value(node) || undefined;
    }
  });

  if (Object.keys(formats).length > 0) {
    delta = applyFormat(delta, formats);
  }

  return delta;
}

function matchBlot(node, delta) {
  let match = _parchment.default.query(node);

  if (match == null) return delta;

  if (match.prototype instanceof _parchment.default.Embed) {
    let embed = {};
    let value = match.value(node);

    if (value != null) {
      embed[match.blotName] = value;
      delta = new _quillDelta.default().insert(embed, match.formats(node));
    }
  } else if (typeof match.formats === 'function') {
    delta = applyFormat(delta, match.blotName, match.formats(node));
  }

  return delta;
}

function matchBreak(node, delta) {
  if (!deltaEndsWith(delta, '\n')) {
    delta.insert('\n');
  }

  return delta;
}

function matchIgnore() {
  return new _quillDelta.default();
}

function matchIndent(node, delta) {
  let match = _parchment.default.query(node);

  if (match == null || match.blotName !== 'list-item' || !deltaEndsWith(delta, '\n')) {
    return delta;
  }

  let indent = -1,
      parent = node.parentNode;

  while (!parent.classList.contains('ql-clipboard')) {
    if ((_parchment.default.query(parent) || {}).blotName === 'list') {
      indent += 1;
    }

    parent = parent.parentNode;
  }

  if (indent <= 0) return delta;
  return delta.compose(new _quillDelta.default().retain(delta.length() - 1).retain(1, {
    indent: indent
  }));
}

function matchNewline(node, delta) {
  if (!deltaEndsWith(delta, '\n')) {
    if (isLine(node) || delta.length() > 0 && node.nextSibling && isLine(node.nextSibling)) {
      delta.insert('\n');
    }
  }

  return delta;
}

function matchSpacing(node, delta) {
  if (isLine(node) && node.nextElementSibling != null && !deltaEndsWith(delta, '\n\n')) {
    let nodeHeight = node.offsetHeight + parseFloat(computeStyle(node).marginTop) + parseFloat(computeStyle(node).marginBottom);

    if (node.nextElementSibling.offsetTop > node.offsetTop + nodeHeight * 1.5) {
      delta.insert('\n');
    }
  }

  return delta;
}

function matchStyles(node, delta) {
  let formats = {};
  let style = node.style || {};

  if (style.fontStyle && computeStyle(node).fontStyle === 'italic') {
    formats.italic = true;
  }

  if (style.fontWeight && (computeStyle(node).fontWeight.startsWith('bold') || parseInt(computeStyle(node).fontWeight) >= 700)) {
    formats.bold = true;
  }

  if (Object.keys(formats).length > 0) {
    delta = applyFormat(delta, formats);
  }

  if (parseFloat(style.textIndent || 0) > 0) {
    // Could be 0.5in
    delta = new _quillDelta.default().insert('\t').concat(delta);
  }

  return delta;
}

function matchText(node, delta) {
  let text = node.data; // Word represents empty line with <o:p>&nbsp;</o:p>

  if (node.parentNode.tagName === 'O:P') {
    return delta.insert(text.trim());
  }

  if (text.trim().length === 0 && node.parentNode.classList.contains('ql-clipboard')) {
    return delta;
  }

  if (!computeStyle(node.parentNode).whiteSpace.startsWith('pre')) {
    // eslint-disable-next-line func-style
    let replacer = function (collapse, match) {
      match = match.replace(/[^\u00a0]/g, ''); // \u00a0 is nbsp;

      return match.length < 1 && collapse ? ' ' : match;
    };

    text = text.replace(/\r\n/g, ' ').replace(/\n/g, ' ');
    text = text.replace(/\s\s+/g, replacer.bind(replacer, true)); // collapse whitespace

    if (node.previousSibling == null && isLine(node.parentNode) || node.previousSibling != null && isLine(node.previousSibling)) {
      text = text.replace(/^\s+/, replacer.bind(replacer, false));
    }

    if (node.nextSibling == null && isLine(node.parentNode) || node.nextSibling != null && isLine(node.nextSibling)) {
      text = text.replace(/\s+$/, replacer.bind(replacer, false));
    }
  }

  return delta.insert(text);
}
},{"extend":"../node_modules/extend/index.js","quill-delta":"../node_modules/quill-delta/lib/delta.js","parchment":"../node_modules/parchment/dist/parchment.js","../core/quill":"../node_modules/quill/core/quill.js","../core/logger":"../node_modules/quill/core/logger.js","../core/module":"../node_modules/quill/core/module.js","../formats/align":"../node_modules/quill/formats/align.js","../formats/background":"../node_modules/quill/formats/background.js","../formats/code":"../node_modules/quill/formats/code.js","../formats/color":"../node_modules/quill/formats/color.js","../formats/direction":"../node_modules/quill/formats/direction.js","../formats/font":"../node_modules/quill/formats/font.js","../formats/size":"../node_modules/quill/formats/size.js"}],"../node_modules/quill/modules/history.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLastChangeIndex = getLastChangeIndex;
exports.default = void 0;

var _parchment = _interopRequireDefault(require("parchment"));

var _quill = _interopRequireDefault(require("../core/quill"));

var _module = _interopRequireDefault(require("../core/module"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class History extends _module.default {
  constructor(quill, options) {
    super(quill, options);
    this.lastRecorded = 0;
    this.ignoreChange = false;
    this.clear();
    this.quill.on(_quill.default.events.EDITOR_CHANGE, (eventName, delta, oldDelta, source) => {
      if (eventName !== _quill.default.events.TEXT_CHANGE || this.ignoreChange) return;

      if (!this.options.userOnly || source === _quill.default.sources.USER) {
        this.record(delta, oldDelta);
      } else {
        this.transform(delta);
      }
    });
    this.quill.keyboard.addBinding({
      key: 'Z',
      shortKey: true
    }, this.undo.bind(this));
    this.quill.keyboard.addBinding({
      key: 'Z',
      shortKey: true,
      shiftKey: true
    }, this.redo.bind(this));

    if (/Win/i.test(navigator.platform)) {
      this.quill.keyboard.addBinding({
        key: 'Y',
        shortKey: true
      }, this.redo.bind(this));
    }
  }

  change(source, dest) {
    if (this.stack[source].length === 0) return;
    let delta = this.stack[source].pop();
    this.stack[dest].push(delta);
    this.lastRecorded = 0;
    this.ignoreChange = true;
    this.quill.updateContents(delta[source], _quill.default.sources.USER);
    this.ignoreChange = false;
    let index = getLastChangeIndex(delta[source]);
    this.quill.setSelection(index);
  }

  clear() {
    this.stack = {
      undo: [],
      redo: []
    };
  }

  cutoff() {
    this.lastRecorded = 0;
  }

  record(changeDelta, oldDelta) {
    if (changeDelta.ops.length === 0) return;
    this.stack.redo = [];
    let undoDelta = this.quill.getContents().diff(oldDelta);
    let timestamp = Date.now();

    if (this.lastRecorded + this.options.delay > timestamp && this.stack.undo.length > 0) {
      let delta = this.stack.undo.pop();
      undoDelta = undoDelta.compose(delta.undo);
      changeDelta = delta.redo.compose(changeDelta);
    } else {
      this.lastRecorded = timestamp;
    }

    this.stack.undo.push({
      redo: changeDelta,
      undo: undoDelta
    });

    if (this.stack.undo.length > this.options.maxStack) {
      this.stack.undo.shift();
    }
  }

  redo() {
    this.change('redo', 'undo');
  }

  transform(delta) {
    this.stack.undo.forEach(function (change) {
      change.undo = delta.transform(change.undo, true);
      change.redo = delta.transform(change.redo, true);
    });
    this.stack.redo.forEach(function (change) {
      change.undo = delta.transform(change.undo, true);
      change.redo = delta.transform(change.redo, true);
    });
  }

  undo() {
    this.change('undo', 'redo');
  }

}

exports.default = History;
History.DEFAULTS = {
  delay: 1000,
  maxStack: 100,
  userOnly: false
};

function endsWithNewlineChange(delta) {
  let lastOp = delta.ops[delta.ops.length - 1];
  if (lastOp == null) return false;

  if (lastOp.insert != null) {
    return typeof lastOp.insert === 'string' && lastOp.insert.endsWith('\n');
  }

  if (lastOp.attributes != null) {
    return Object.keys(lastOp.attributes).some(function (attr) {
      return _parchment.default.query(attr, _parchment.default.Scope.BLOCK) != null;
    });
  }

  return false;
}

function getLastChangeIndex(delta) {
  let deleteLength = delta.reduce(function (length, op) {
    length += op.delete || 0;
    return length;
  }, 0);
  let changeIndex = delta.length() - deleteLength;

  if (endsWithNewlineChange(delta)) {
    changeIndex -= 1;
  }

  return changeIndex;
}
},{"parchment":"../node_modules/parchment/dist/parchment.js","../core/quill":"../node_modules/quill/core/quill.js","../core/module":"../node_modules/quill/core/module.js"}],"../node_modules/quill/modules/keyboard.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SHORTKEY = exports.default = void 0;

var _clone = _interopRequireDefault(require("clone"));

var _deepEqual = _interopRequireDefault(require("deep-equal"));

var _extend = _interopRequireDefault(require("extend"));

var _quillDelta = _interopRequireDefault(require("quill-delta"));

var _op = _interopRequireDefault(require("quill-delta/lib/op"));

var _parchment = _interopRequireDefault(require("parchment"));

var _quill = _interopRequireDefault(require("../core/quill"));

var _logger = _interopRequireDefault(require("../core/logger"));

var _module = _interopRequireDefault(require("../core/module"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let debug = (0, _logger.default)('quill:keyboard');
const SHORTKEY = /Mac/i.test(navigator.platform) ? 'metaKey' : 'ctrlKey';
exports.SHORTKEY = SHORTKEY;

class Keyboard extends _module.default {
  static match(evt, binding) {
    binding = normalize(binding);

    if (['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].some(function (key) {
      return !!binding[key] !== evt[key] && binding[key] !== null;
    })) {
      return false;
    }

    return binding.key === (evt.which || evt.keyCode);
  }

  constructor(quill, options) {
    super(quill, options);
    this.bindings = {};
    Object.keys(this.options.bindings).forEach(name => {
      if (name === 'list autofill' && quill.scroll.whitelist != null && !quill.scroll.whitelist['list']) {
        return;
      }

      if (this.options.bindings[name]) {
        this.addBinding(this.options.bindings[name]);
      }
    });
    this.addBinding({
      key: Keyboard.keys.ENTER,
      shiftKey: null
    }, handleEnter);
    this.addBinding({
      key: Keyboard.keys.ENTER,
      metaKey: null,
      ctrlKey: null,
      altKey: null
    }, function () {});

    if (/Firefox/i.test(navigator.userAgent)) {
      // Need to handle delete and backspace for Firefox in the general case #1171
      this.addBinding({
        key: Keyboard.keys.BACKSPACE
      }, {
        collapsed: true
      }, handleBackspace);
      this.addBinding({
        key: Keyboard.keys.DELETE
      }, {
        collapsed: true
      }, handleDelete);
    } else {
      this.addBinding({
        key: Keyboard.keys.BACKSPACE
      }, {
        collapsed: true,
        prefix: /^.?$/
      }, handleBackspace);
      this.addBinding({
        key: Keyboard.keys.DELETE
      }, {
        collapsed: true,
        suffix: /^.?$/
      }, handleDelete);
    }

    this.addBinding({
      key: Keyboard.keys.BACKSPACE
    }, {
      collapsed: false
    }, handleDeleteRange);
    this.addBinding({
      key: Keyboard.keys.DELETE
    }, {
      collapsed: false
    }, handleDeleteRange);
    this.addBinding({
      key: Keyboard.keys.BACKSPACE,
      altKey: null,
      ctrlKey: null,
      metaKey: null,
      shiftKey: null
    }, {
      collapsed: true,
      offset: 0
    }, handleBackspace);
    this.listen();
  }

  addBinding(key, context = {}, handler = {}) {
    let binding = normalize(key);

    if (binding == null || binding.key == null) {
      return debug.warn('Attempted to add invalid keyboard binding', binding);
    }

    if (typeof context === 'function') {
      context = {
        handler: context
      };
    }

    if (typeof handler === 'function') {
      handler = {
        handler: handler
      };
    }

    binding = (0, _extend.default)(binding, context, handler);
    this.bindings[binding.key] = this.bindings[binding.key] || [];
    this.bindings[binding.key].push(binding);
  }

  listen() {
    this.quill.root.addEventListener('keydown', evt => {
      if (evt.defaultPrevented) return;
      let which = evt.which || evt.keyCode;
      let bindings = (this.bindings[which] || []).filter(function (binding) {
        return Keyboard.match(evt, binding);
      });
      if (bindings.length === 0) return;
      let range = this.quill.getSelection();
      if (range == null || !this.quill.hasFocus()) return;
      let [line, offset] = this.quill.getLine(range.index);
      let [leafStart, offsetStart] = this.quill.getLeaf(range.index);
      let [leafEnd, offsetEnd] = range.length === 0 ? [leafStart, offsetStart] : this.quill.getLeaf(range.index + range.length);
      let prefixText = leafStart instanceof _parchment.default.Text ? leafStart.value().slice(0, offsetStart) : '';
      let suffixText = leafEnd instanceof _parchment.default.Text ? leafEnd.value().slice(offsetEnd) : '';
      let curContext = {
        collapsed: range.length === 0,
        empty: range.length === 0 && line.length() <= 1,
        format: this.quill.getFormat(range),
        offset: offset,
        prefix: prefixText,
        suffix: suffixText
      };
      let prevented = bindings.some(binding => {
        if (binding.collapsed != null && binding.collapsed !== curContext.collapsed) return false;
        if (binding.empty != null && binding.empty !== curContext.empty) return false;
        if (binding.offset != null && binding.offset !== curContext.offset) return false;

        if (Array.isArray(binding.format)) {
          // any format is present
          if (binding.format.every(function (name) {
            return curContext.format[name] == null;
          })) {
            return false;
          }
        } else if (typeof binding.format === 'object') {
          // all formats must match
          if (!Object.keys(binding.format).every(function (name) {
            if (binding.format[name] === true) return curContext.format[name] != null;
            if (binding.format[name] === false) return curContext.format[name] == null;
            return (0, _deepEqual.default)(binding.format[name], curContext.format[name]);
          })) {
            return false;
          }
        }

        if (binding.prefix != null && !binding.prefix.test(curContext.prefix)) return false;
        if (binding.suffix != null && !binding.suffix.test(curContext.suffix)) return false;
        return binding.handler.call(this, range, curContext) !== true;
      });

      if (prevented) {
        evt.preventDefault();
      }
    });
  }

}

exports.default = Keyboard;
Keyboard.keys = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  ESCAPE: 27,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  DELETE: 46
};
Keyboard.DEFAULTS = {
  bindings: {
    'bold': makeFormatHandler('bold'),
    'italic': makeFormatHandler('italic'),
    'underline': makeFormatHandler('underline'),
    'indent': {
      // highlight tab or tab at beginning of list, indent or blockquote
      key: Keyboard.keys.TAB,
      format: ['blockquote', 'indent', 'list'],
      handler: function (range, context) {
        if (context.collapsed && context.offset !== 0) return true;
        this.quill.format('indent', '+1', _quill.default.sources.USER);
      }
    },
    'outdent': {
      key: Keyboard.keys.TAB,
      shiftKey: true,
      format: ['blockquote', 'indent', 'list'],
      // highlight tab or tab at beginning of list, indent or blockquote
      handler: function (range, context) {
        if (context.collapsed && context.offset !== 0) return true;
        this.quill.format('indent', '-1', _quill.default.sources.USER);
      }
    },
    'outdent backspace': {
      key: Keyboard.keys.BACKSPACE,
      collapsed: true,
      shiftKey: null,
      metaKey: null,
      ctrlKey: null,
      altKey: null,
      format: ['indent', 'list'],
      offset: 0,
      handler: function (range, context) {
        if (context.format.indent != null) {
          this.quill.format('indent', '-1', _quill.default.sources.USER);
        } else if (context.format.list != null) {
          this.quill.format('list', false, _quill.default.sources.USER);
        }
      }
    },
    'indent code-block': makeCodeBlockHandler(true),
    'outdent code-block': makeCodeBlockHandler(false),
    'remove tab': {
      key: Keyboard.keys.TAB,
      shiftKey: true,
      collapsed: true,
      prefix: /\t$/,
      handler: function (range) {
        this.quill.deleteText(range.index - 1, 1, _quill.default.sources.USER);
      }
    },
    'tab': {
      key: Keyboard.keys.TAB,
      handler: function (range) {
        this.quill.history.cutoff();
        let delta = new _quillDelta.default().retain(range.index).delete(range.length).insert('\t');
        this.quill.updateContents(delta, _quill.default.sources.USER);
        this.quill.history.cutoff();
        this.quill.setSelection(range.index + 1, _quill.default.sources.SILENT);
      }
    },
    'list empty enter': {
      key: Keyboard.keys.ENTER,
      collapsed: true,
      format: ['list'],
      empty: true,
      handler: function (range, context) {
        this.quill.format('list', false, _quill.default.sources.USER);

        if (context.format.indent) {
          this.quill.format('indent', false, _quill.default.sources.USER);
        }
      }
    },
    'checklist enter': {
      key: Keyboard.keys.ENTER,
      collapsed: true,
      format: {
        list: 'checked'
      },
      handler: function (range) {
        let [line, offset] = this.quill.getLine(range.index);
        let formats = (0, _extend.default)({}, line.formats(), {
          list: 'checked'
        });
        let delta = new _quillDelta.default().retain(range.index).insert('\n', formats).retain(line.length() - offset - 1).retain(1, {
          list: 'unchecked'
        });
        this.quill.updateContents(delta, _quill.default.sources.USER);
        this.quill.setSelection(range.index + 1, _quill.default.sources.SILENT);
        this.quill.scrollIntoView();
      }
    },
    'header enter': {
      key: Keyboard.keys.ENTER,
      collapsed: true,
      format: ['header'],
      suffix: /^$/,
      handler: function (range, context) {
        let [line, offset] = this.quill.getLine(range.index);
        let delta = new _quillDelta.default().retain(range.index).insert('\n', context.format).retain(line.length() - offset - 1).retain(1, {
          header: null
        });
        this.quill.updateContents(delta, _quill.default.sources.USER);
        this.quill.setSelection(range.index + 1, _quill.default.sources.SILENT);
        this.quill.scrollIntoView();
      }
    },
    'list autofill': {
      key: ' ',
      collapsed: true,
      format: {
        list: false
      },
      prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
      handler: function (range, context) {
        let length = context.prefix.length;
        let [line, offset] = this.quill.getLine(range.index);
        if (offset > length) return true;
        let value;

        switch (context.prefix.trim()) {
          case '[]':
          case '[ ]':
            value = 'unchecked';
            break;

          case '[x]':
            value = 'checked';
            break;

          case '-':
          case '*':
            value = 'bullet';
            break;

          default:
            value = 'ordered';
        }

        this.quill.insertText(range.index, ' ', _quill.default.sources.USER);
        this.quill.history.cutoff();
        let delta = new _quillDelta.default().retain(range.index - offset).delete(length + 1).retain(line.length() - 2 - offset).retain(1, {
          list: value
        });
        this.quill.updateContents(delta, _quill.default.sources.USER);
        this.quill.history.cutoff();
        this.quill.setSelection(range.index - length, _quill.default.sources.SILENT);
      }
    },
    'code exit': {
      key: Keyboard.keys.ENTER,
      collapsed: true,
      format: ['code-block'],
      prefix: /\n\n$/,
      suffix: /^\s+$/,
      handler: function (range) {
        const [line, offset] = this.quill.getLine(range.index);
        const delta = new _quillDelta.default().retain(range.index + line.length() - offset - 2).retain(1, {
          'code-block': null
        }).delete(1);
        this.quill.updateContents(delta, _quill.default.sources.USER);
      }
    },
    'embed left': makeEmbedArrowHandler(Keyboard.keys.LEFT, false),
    'embed left shift': makeEmbedArrowHandler(Keyboard.keys.LEFT, true),
    'embed right': makeEmbedArrowHandler(Keyboard.keys.RIGHT, false),
    'embed right shift': makeEmbedArrowHandler(Keyboard.keys.RIGHT, true)
  }
};

function makeEmbedArrowHandler(key, shiftKey) {
  const where = key === Keyboard.keys.LEFT ? 'prefix' : 'suffix';
  return {
    key,
    shiftKey,
    altKey: null,
    [where]: /^$/,
    handler: function (range) {
      let index = range.index;

      if (key === Keyboard.keys.RIGHT) {
        index += range.length + 1;
      }

      const [leaf] = this.quill.getLeaf(index);
      if (!(leaf instanceof _parchment.default.Embed)) return true;

      if (key === Keyboard.keys.LEFT) {
        if (shiftKey) {
          this.quill.setSelection(range.index - 1, range.length + 1, _quill.default.sources.USER);
        } else {
          this.quill.setSelection(range.index - 1, _quill.default.sources.USER);
        }
      } else {
        if (shiftKey) {
          this.quill.setSelection(range.index, range.length + 1, _quill.default.sources.USER);
        } else {
          this.quill.setSelection(range.index + range.length + 1, _quill.default.sources.USER);
        }
      }

      return false;
    }
  };
}

function handleBackspace(range, context) {
  if (range.index === 0 || this.quill.getLength() <= 1) return;
  let [line] = this.quill.getLine(range.index);
  let formats = {};

  if (context.offset === 0) {
    let [prev] = this.quill.getLine(range.index - 1);

    if (prev != null && prev.length() > 1) {
      let curFormats = line.formats();
      let prevFormats = this.quill.getFormat(range.index - 1, 1);
      formats = _op.default.attributes.diff(curFormats, prevFormats) || {};
    }
  } // Check for astral symbols


  let length = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(context.prefix) ? 2 : 1;
  this.quill.deleteText(range.index - length, length, _quill.default.sources.USER);

  if (Object.keys(formats).length > 0) {
    this.quill.formatLine(range.index - length, length, formats, _quill.default.sources.USER);
  }

  this.quill.focus();
}

function handleDelete(range, context) {
  // Check for astral symbols
  let length = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(context.suffix) ? 2 : 1;
  if (range.index >= this.quill.getLength() - length) return;
  let formats = {},
      nextLength = 0;
  let [line] = this.quill.getLine(range.index);

  if (context.offset >= line.length() - 1) {
    let [next] = this.quill.getLine(range.index + 1);

    if (next) {
      let curFormats = line.formats();
      let nextFormats = this.quill.getFormat(range.index, 1);
      formats = _op.default.attributes.diff(curFormats, nextFormats) || {};
      nextLength = next.length();
    }
  }

  this.quill.deleteText(range.index, length, _quill.default.sources.USER);

  if (Object.keys(formats).length > 0) {
    this.quill.formatLine(range.index + nextLength - 1, length, formats, _quill.default.sources.USER);
  }
}

function handleDeleteRange(range) {
  let lines = this.quill.getLines(range);
  let formats = {};

  if (lines.length > 1) {
    let firstFormats = lines[0].formats();
    let lastFormats = lines[lines.length - 1].formats();
    formats = _op.default.attributes.diff(lastFormats, firstFormats) || {};
  }

  this.quill.deleteText(range, _quill.default.sources.USER);

  if (Object.keys(formats).length > 0) {
    this.quill.formatLine(range.index, 1, formats, _quill.default.sources.USER);
  }

  this.quill.setSelection(range.index, _quill.default.sources.SILENT);
  this.quill.focus();
}

function handleEnter(range, context) {
  if (range.length > 0) {
    this.quill.scroll.deleteAt(range.index, range.length); // So we do not trigger text-change
  }

  let lineFormats = Object.keys(context.format).reduce(function (lineFormats, format) {
    if (_parchment.default.query(format, _parchment.default.Scope.BLOCK) && !Array.isArray(context.format[format])) {
      lineFormats[format] = context.format[format];
    }

    return lineFormats;
  }, {});
  this.quill.insertText(range.index, '\n', lineFormats, _quill.default.sources.USER); // Earlier scroll.deleteAt might have messed up our selection,
  // so insertText's built in selection preservation is not reliable

  this.quill.setSelection(range.index + 1, _quill.default.sources.SILENT);
  this.quill.focus();
  Object.keys(context.format).forEach(name => {
    if (lineFormats[name] != null) return;
    if (Array.isArray(context.format[name])) return;
    if (name === 'link') return;
    this.quill.format(name, context.format[name], _quill.default.sources.USER);
  });
}

function makeCodeBlockHandler(indent) {
  return {
    key: Keyboard.keys.TAB,
    shiftKey: !indent,
    format: {
      'code-block': true
    },
    handler: function (range) {
      let CodeBlock = _parchment.default.query('code-block');

      let index = range.index,
          length = range.length;
      let [block, offset] = this.quill.scroll.descendant(CodeBlock, index);
      if (block == null) return;
      let scrollIndex = this.quill.getIndex(block);
      let start = block.newlineIndex(offset, true) + 1;
      let end = block.newlineIndex(scrollIndex + offset + length);
      let lines = block.domNode.textContent.slice(start, end).split('\n');
      offset = 0;
      lines.forEach((line, i) => {
        if (indent) {
          block.insertAt(start + offset, CodeBlock.TAB);
          offset += CodeBlock.TAB.length;

          if (i === 0) {
            index += CodeBlock.TAB.length;
          } else {
            length += CodeBlock.TAB.length;
          }
        } else if (line.startsWith(CodeBlock.TAB)) {
          block.deleteAt(start + offset, CodeBlock.TAB.length);
          offset -= CodeBlock.TAB.length;

          if (i === 0) {
            index -= CodeBlock.TAB.length;
          } else {
            length -= CodeBlock.TAB.length;
          }
        }

        offset += line.length + 1;
      });
      this.quill.update(_quill.default.sources.USER);
      this.quill.setSelection(index, length, _quill.default.sources.SILENT);
    }
  };
}

function makeFormatHandler(format) {
  return {
    key: format[0].toUpperCase(),
    shortKey: true,
    handler: function (range, context) {
      this.quill.format(format, !context.format[format], _quill.default.sources.USER);
    }
  };
}

function normalize(binding) {
  if (typeof binding === 'string' || typeof binding === 'number') {
    return normalize({
      key: binding
    });
  }

  if (typeof binding === 'object') {
    binding = (0, _clone.default)(binding, false);
  }

  if (typeof binding.key === 'string') {
    if (Keyboard.keys[binding.key.toUpperCase()] != null) {
      binding.key = Keyboard.keys[binding.key.toUpperCase()];
    } else if (binding.key.length === 1) {
      binding.key = binding.key.toUpperCase().charCodeAt(0);
    } else {
      return null;
    }
  }

  if (binding.shortKey) {
    binding[SHORTKEY] = binding.shortKey;
    delete binding.shortKey;
  }

  return binding;
}
},{"clone":"../node_modules/clone/clone.js","deep-equal":"../node_modules/deep-equal/index.js","extend":"../node_modules/extend/index.js","quill-delta":"../node_modules/quill-delta/lib/delta.js","quill-delta/lib/op":"../node_modules/quill-delta/lib/op.js","parchment":"../node_modules/parchment/dist/parchment.js","../core/quill":"../node_modules/quill/core/quill.js","../core/logger":"../node_modules/quill/core/logger.js","../core/module":"../node_modules/quill/core/module.js"}],"../node_modules/quill/core.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _parchment = _interopRequireDefault(require("parchment"));

var _quill = _interopRequireDefault(require("./core/quill"));

var _block = _interopRequireWildcard(require("./blots/block"));

var _break = _interopRequireDefault(require("./blots/break"));

var _container = _interopRequireDefault(require("./blots/container"));

var _cursor = _interopRequireDefault(require("./blots/cursor"));

var _embed = _interopRequireDefault(require("./blots/embed"));

var _inline = _interopRequireDefault(require("./blots/inline"));

var _scroll = _interopRequireDefault(require("./blots/scroll"));

var _text = _interopRequireDefault(require("./blots/text"));

var _clipboard = _interopRequireDefault(require("./modules/clipboard"));

var _history = _interopRequireDefault(require("./modules/history"));

var _keyboard = _interopRequireDefault(require("./modules/keyboard"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_quill.default.register({
  'blots/block': _block.default,
  'blots/block/embed': _block.BlockEmbed,
  'blots/break': _break.default,
  'blots/container': _container.default,
  'blots/cursor': _cursor.default,
  'blots/embed': _embed.default,
  'blots/inline': _inline.default,
  'blots/scroll': _scroll.default,
  'blots/text': _text.default,
  'modules/clipboard': _clipboard.default,
  'modules/history': _history.default,
  'modules/keyboard': _keyboard.default
});

_parchment.default.register(_block.default, _break.default, _cursor.default, _inline.default, _scroll.default, _text.default);

var _default = _quill.default;
exports.default = _default;
},{"parchment":"../node_modules/parchment/dist/parchment.js","./core/quill":"../node_modules/quill/core/quill.js","./blots/block":"../node_modules/quill/blots/block.js","./blots/break":"../node_modules/quill/blots/break.js","./blots/container":"../node_modules/quill/blots/container.js","./blots/cursor":"../node_modules/quill/blots/cursor.js","./blots/embed":"../node_modules/quill/blots/embed.js","./blots/inline":"../node_modules/quill/blots/inline.js","./blots/scroll":"../node_modules/quill/blots/scroll.js","./blots/text":"../node_modules/quill/blots/text.js","./modules/clipboard":"../node_modules/quill/modules/clipboard.js","./modules/history":"../node_modules/quill/modules/history.js","./modules/keyboard":"../node_modules/quill/modules/keyboard.js"}],"../node_modules/quill/formats/indent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IndentClass = void 0;

var _parchment = _interopRequireDefault(require("parchment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class IdentAttributor extends _parchment.default.Attributor.Class {
  add(node, value) {
    if (value === '+1' || value === '-1') {
      let indent = this.value(node) || 0;
      value = value === '+1' ? indent + 1 : indent - 1;
    }

    if (value === 0) {
      this.remove(node);
      return true;
    } else {
      return super.add(node, value);
    }
  }

  canAdd(node, value) {
    return super.canAdd(node, value) || super.canAdd(node, parseInt(value));
  }

  value(node) {
    return parseInt(super.value(node)) || undefined; // Don't return NaN
  }

}

let IndentClass = new IdentAttributor('indent', 'ql-indent', {
  scope: _parchment.default.Scope.BLOCK,
  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
});
exports.IndentClass = IndentClass;
},{"parchment":"../node_modules/parchment/dist/parchment.js"}],"../node_modules/quill/formats/blockquote.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _block = _interopRequireDefault(require("../blots/block"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Blockquote extends _block.default {}

Blockquote.blotName = 'blockquote';
Blockquote.tagName = 'blockquote';
var _default = Blockquote;
exports.default = _default;
},{"../blots/block":"../node_modules/quill/blots/block.js"}],"../node_modules/quill/formats/header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _block = _interopRequireDefault(require("../blots/block"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Header extends _block.default {
  static formats(domNode) {
    return this.tagName.indexOf(domNode.tagName) + 1;
  }

}

Header.blotName = 'header';
Header.tagName = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
var _default = Header;
exports.default = _default;
},{"../blots/block":"../node_modules/quill/blots/block.js"}],"../node_modules/quill/formats/list.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ListItem = void 0;

var _parchment = _interopRequireDefault(require("parchment"));

var _block = _interopRequireDefault(require("../blots/block"));

var _container = _interopRequireDefault(require("../blots/container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ListItem extends _block.default {
  static formats(domNode) {
    return domNode.tagName === this.tagName ? undefined : super.formats(domNode);
  }

  format(name, value) {
    if (name === List.blotName && !value) {
      this.replaceWith(_parchment.default.create(this.statics.scope));
    } else {
      super.format(name, value);
    }
  }

  remove() {
    if (this.prev == null && this.next == null) {
      this.parent.remove();
    } else {
      super.remove();
    }
  }

  replaceWith(name, value) {
    this.parent.isolate(this.offset(this.parent), this.length());

    if (name === this.parent.statics.blotName) {
      this.parent.replaceWith(name, value);
      return this;
    } else {
      this.parent.unwrap();
      return super.replaceWith(name, value);
    }
  }

}

exports.ListItem = ListItem;
ListItem.blotName = 'list-item';
ListItem.tagName = 'LI';

class List extends _container.default {
  static create(value) {
    let tagName = value === 'ordered' ? 'OL' : 'UL';
    let node = super.create(tagName);

    if (value === 'checked' || value === 'unchecked') {
      node.setAttribute('data-checked', value === 'checked');
    }

    return node;
  }

  static formats(domNode) {
    if (domNode.tagName === 'OL') return 'ordered';

    if (domNode.tagName === 'UL') {
      if (domNode.hasAttribute('data-checked')) {
        return domNode.getAttribute('data-checked') === 'true' ? 'checked' : 'unchecked';
      } else {
        return 'bullet';
      }
    }

    return undefined;
  }

  constructor(domNode) {
    super(domNode);

    const listEventHandler = e => {
      if (e.target.parentNode !== domNode) return;
      let format = this.statics.formats(domNode);

      let blot = _parchment.default.find(e.target);

      if (format === 'checked') {
        blot.format('list', 'unchecked');
      } else if (format === 'unchecked') {
        blot.format('list', 'checked');
      }
    };

    domNode.addEventListener('touchstart', listEventHandler);
    domNode.addEventListener('mousedown', listEventHandler);
  }

  format(name, value) {
    if (this.children.length > 0) {
      this.children.tail.format(name, value);
    }
  }

  formats() {
    // We don't inherit from FormatBlot
    return {
      [this.statics.blotName]: this.statics.formats(this.domNode)
    };
  }

  insertBefore(blot, ref) {
    if (blot instanceof ListItem) {
      super.insertBefore(blot, ref);
    } else {
      let index = ref == null ? this.length() : ref.offset(this);
      let after = this.split(index);
      after.parent.insertBefore(blot, after);
    }
  }

  optimize(context) {
    super.optimize(context);
    let next = this.next;

    if (next != null && next.prev === this && next.statics.blotName === this.statics.blotName && next.domNode.tagName === this.domNode.tagName && next.domNode.getAttribute('data-checked') === this.domNode.getAttribute('data-checked')) {
      next.moveChildren(this);
      next.remove();
    }
  }

  replace(target) {
    if (target.statics.blotName !== this.statics.blotName) {
      let item = _parchment.default.create(this.statics.defaultChild);

      target.moveChildren(item);
      this.appendChild(item);
    }

    super.replace(target);
  }

}

exports.default = List;
List.blotName = 'list';
List.scope = _parchment.default.Scope.BLOCK_BLOT;
List.tagName = ['OL', 'UL'];
List.defaultChild = 'list-item';
List.allowedChildren = [ListItem];
},{"parchment":"../node_modules/parchment/dist/parchment.js","../blots/block":"../node_modules/quill/blots/block.js","../blots/container":"../node_modules/quill/blots/container.js"}],"../node_modules/quill/formats/bold.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inline = _interopRequireDefault(require("../blots/inline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Bold extends _inline.default {
  static create() {
    return super.create();
  }

  static formats() {
    return true;
  }

  optimize(context) {
    super.optimize(context);

    if (this.domNode.tagName !== this.statics.tagName[0]) {
      this.replaceWith(this.statics.blotName);
    }
  }

}

Bold.blotName = 'bold';
Bold.tagName = ['STRONG', 'B'];
var _default = Bold;
exports.default = _default;
},{"../blots/inline":"../node_modules/quill/blots/inline.js"}],"../node_modules/quill/formats/italic.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bold = _interopRequireDefault(require("./bold"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Italic extends _bold.default {}

Italic.blotName = 'italic';
Italic.tagName = ['EM', 'I'];
var _default = Italic;
exports.default = _default;
},{"./bold":"../node_modules/quill/formats/bold.js"}],"../node_modules/quill/formats/link.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sanitize = sanitize;
exports.default = void 0;

var _inline = _interopRequireDefault(require("../blots/inline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Link extends _inline.default {
  static create(value) {
    let node = super.create(value);
    value = this.sanitize(value);
    node.setAttribute('href', value);
    node.setAttribute('rel', 'noopener noreferrer');
    node.setAttribute('target', '_blank');
    return node;
  }

  static formats(domNode) {
    return domNode.getAttribute('href');
  }

  static sanitize(url) {
    return sanitize(url, this.PROTOCOL_WHITELIST) ? url : this.SANITIZED_URL;
  }

  format(name, value) {
    if (name !== this.statics.blotName || !value) return super.format(name, value);
    value = this.constructor.sanitize(value);
    this.domNode.setAttribute('href', value);
  }

}

exports.default = Link;
Link.blotName = 'link';
Link.tagName = 'A';
Link.SANITIZED_URL = 'about:blank';
Link.PROTOCOL_WHITELIST = ['http', 'https', 'mailto', 'tel'];

function sanitize(url, protocols) {
  let anchor = document.createElement('a');
  anchor.href = url;
  let protocol = anchor.href.slice(0, anchor.href.indexOf(':'));
  return protocols.indexOf(protocol) > -1;
}
},{"../blots/inline":"../node_modules/quill/blots/inline.js"}],"../node_modules/quill/formats/script.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inline = _interopRequireDefault(require("../blots/inline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Script extends _inline.default {
  static create(value) {
    if (value === 'super') {
      return document.createElement('sup');
    } else if (value === 'sub') {
      return document.createElement('sub');
    } else {
      return super.create(value);
    }
  }

  static formats(domNode) {
    if (domNode.tagName === 'SUB') return 'sub';
    if (domNode.tagName === 'SUP') return 'super';
    return undefined;
  }

}

Script.blotName = 'script';
Script.tagName = ['SUB', 'SUP'];
var _default = Script;
exports.default = _default;
},{"../blots/inline":"../node_modules/quill/blots/inline.js"}],"../node_modules/quill/formats/strike.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inline = _interopRequireDefault(require("../blots/inline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Strike extends _inline.default {}

Strike.blotName = 'strike';
Strike.tagName = 'S';
var _default = Strike;
exports.default = _default;
},{"../blots/inline":"../node_modules/quill/blots/inline.js"}],"../node_modules/quill/formats/underline.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inline = _interopRequireDefault(require("../blots/inline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Underline extends _inline.default {}

Underline.blotName = 'underline';
Underline.tagName = 'U';
var _default = Underline;
exports.default = _default;
},{"../blots/inline":"../node_modules/quill/blots/inline.js"}],"../node_modules/quill/formats/image.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _parchment = _interopRequireDefault(require("parchment"));

var _link = require("../formats/link");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ATTRIBUTES = ['alt', 'height', 'width'];

class Image extends _parchment.default.Embed {
  static create(value) {
    let node = super.create(value);

    if (typeof value === 'string') {
      node.setAttribute('src', this.sanitize(value));
    }

    return node;
  }

  static formats(domNode) {
    return ATTRIBUTES.reduce(function (formats, attribute) {
      if (domNode.hasAttribute(attribute)) {
        formats[attribute] = domNode.getAttribute(attribute);
      }

      return formats;
    }, {});
  }

  static match(url) {
    return /\.(jpe?g|gif|png)$/.test(url) || /^data:image\/.+;base64/.test(url);
  }

  static sanitize(url) {
    return (0, _link.sanitize)(url, ['http', 'https', 'data']) ? url : '//:0';
  }

  static value(domNode) {
    return domNode.getAttribute('src');
  }

  format(name, value) {
    if (ATTRIBUTES.indexOf(name) > -1) {
      if (value) {
        this.domNode.setAttribute(name, value);
      } else {
        this.domNode.removeAttribute(name);
      }
    } else {
      super.format(name, value);
    }
  }

}

Image.blotName = 'image';
Image.tagName = 'IMG';
var _default = Image;
exports.default = _default;
},{"parchment":"../node_modules/parchment/dist/parchment.js","../formats/link":"../node_modules/quill/formats/link.js"}],"../node_modules/quill/formats/video.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _block = require("../blots/block");

var _link = _interopRequireDefault(require("../formats/link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ATTRIBUTES = ['height', 'width'];

class Video extends _block.BlockEmbed {
  static create(value) {
    let node = super.create(value);
    node.setAttribute('frameborder', '0');
    node.setAttribute('allowfullscreen', true);
    node.setAttribute('src', this.sanitize(value));
    return node;
  }

  static formats(domNode) {
    return ATTRIBUTES.reduce(function (formats, attribute) {
      if (domNode.hasAttribute(attribute)) {
        formats[attribute] = domNode.getAttribute(attribute);
      }

      return formats;
    }, {});
  }

  static sanitize(url) {
    return _link.default.sanitize(url);
  }

  static value(domNode) {
    return domNode.getAttribute('src');
  }

  format(name, value) {
    if (ATTRIBUTES.indexOf(name) > -1) {
      if (value) {
        this.domNode.setAttribute(name, value);
      } else {
        this.domNode.removeAttribute(name);
      }
    } else {
      super.format(name, value);
    }
  }

}

Video.blotName = 'video';
Video.className = 'ql-video';
Video.tagName = 'IFRAME';
var _default = Video;
exports.default = _default;
},{"../blots/block":"../node_modules/quill/blots/block.js","../formats/link":"../node_modules/quill/formats/link.js"}],"../node_modules/quill/modules/formula.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FormulaBlot = void 0;

var _embed = _interopRequireDefault(require("../blots/embed"));

var _quill = _interopRequireDefault(require("../core/quill"));

var _module = _interopRequireDefault(require("../core/module"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FormulaBlot extends _embed.default {
  static create(value) {
    let node = super.create(value);

    if (typeof value === 'string') {
      window.katex.render(value, node, {
        throwOnError: false,
        errorColor: '#f00'
      });
      node.setAttribute('data-value', value);
    }

    return node;
  }

  static value(domNode) {
    return domNode.getAttribute('data-value');
  }

}

exports.FormulaBlot = FormulaBlot;
FormulaBlot.blotName = 'formula';
FormulaBlot.className = 'ql-formula';
FormulaBlot.tagName = 'SPAN';

class Formula extends _module.default {
  static register() {
    _quill.default.register(FormulaBlot, true);
  }

  constructor() {
    super();

    if (window.katex == null) {
      throw new Error('Formula module requires KaTeX.');
    }
  }

}

exports.default = Formula;
},{"../blots/embed":"../node_modules/quill/blots/embed.js","../core/quill":"../node_modules/quill/core/quill.js","../core/module":"../node_modules/quill/core/module.js"}],"../node_modules/quill/modules/syntax.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CodeToken = exports.CodeBlock = void 0;

var _parchment = _interopRequireDefault(require("parchment"));

var _quill = _interopRequireDefault(require("../core/quill"));

var _module = _interopRequireDefault(require("../core/module"));

var _code = _interopRequireDefault(require("../formats/code"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SyntaxCodeBlock extends _code.default {
  replaceWith(block) {
    this.domNode.textContent = this.domNode.textContent;
    this.attach();
    super.replaceWith(block);
  }

  highlight(highlight) {
    let text = this.domNode.textContent;

    if (this.cachedText !== text) {
      if (text.trim().length > 0 || this.cachedText == null) {
        this.domNode.innerHTML = highlight(text);
        this.domNode.normalize();
        this.attach();
      }

      this.cachedText = text;
    }
  }

}

exports.CodeBlock = SyntaxCodeBlock;
SyntaxCodeBlock.className = 'ql-syntax';
let CodeToken = new _parchment.default.Attributor.Class('token', 'hljs', {
  scope: _parchment.default.Scope.INLINE
});
exports.CodeToken = CodeToken;

class Syntax extends _module.default {
  static register() {
    _quill.default.register(CodeToken, true);

    _quill.default.register(SyntaxCodeBlock, true);
  }

  constructor(quill, options) {
    super(quill, options);

    if (typeof this.options.highlight !== 'function') {
      throw new Error('Syntax module requires highlight.js. Please include the library on the page before Quill.');
    }

    let timer = null;
    this.quill.on(_quill.default.events.SCROLL_OPTIMIZE, () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        this.highlight();
        timer = null;
      }, this.options.interval);
    });
    this.highlight();
  }

  highlight() {
    if (this.quill.selection.composing) return;
    this.quill.update(_quill.default.sources.USER);
    let range = this.quill.getSelection();
    this.quill.scroll.descendants(SyntaxCodeBlock).forEach(code => {
      code.highlight(this.options.highlight);
    });
    this.quill.update(_quill.default.sources.SILENT);

    if (range != null) {
      this.quill.setSelection(range, _quill.default.sources.SILENT);
    }
  }

}

exports.default = Syntax;
Syntax.DEFAULTS = {
  highlight: function () {
    if (window.hljs == null) return null;
    return function (text) {
      let result = window.hljs.highlightAuto(text);
      return result.value;
    };
  }(),
  interval: 1000
};
},{"parchment":"../node_modules/parchment/dist/parchment.js","../core/quill":"../node_modules/quill/core/quill.js","../core/module":"../node_modules/quill/core/module.js","../formats/code":"../node_modules/quill/formats/code.js"}],"../node_modules/quill/modules/toolbar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addControls = addControls;
exports.default = void 0;

var _quillDelta = _interopRequireDefault(require("quill-delta"));

var _parchment = _interopRequireDefault(require("parchment"));

var _quill = _interopRequireDefault(require("../core/quill"));

var _logger = _interopRequireDefault(require("../core/logger"));

var _module = _interopRequireDefault(require("../core/module"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let debug = (0, _logger.default)('quill:toolbar');

class Toolbar extends _module.default {
  constructor(quill, options) {
    super(quill, options);

    if (Array.isArray(this.options.container)) {
      let container = document.createElement('div');
      addControls(container, this.options.container);
      quill.container.parentNode.insertBefore(container, quill.container);
      this.container = container;
    } else if (typeof this.options.container === 'string') {
      this.container = document.querySelector(this.options.container);
    } else {
      this.container = this.options.container;
    }

    if (!(this.container instanceof HTMLElement)) {
      return debug.error('Container required for toolbar', this.options);
    }

    this.container.classList.add('ql-toolbar');
    this.controls = [];
    this.handlers = {};
    Object.keys(this.options.handlers).forEach(format => {
      this.addHandler(format, this.options.handlers[format]);
    });
    [].forEach.call(this.container.querySelectorAll('button, select'), input => {
      this.attach(input);
    });
    this.quill.on(_quill.default.events.EDITOR_CHANGE, (type, range) => {
      if (type === _quill.default.events.SELECTION_CHANGE) {
        this.update(range);
      }
    });
    this.quill.on(_quill.default.events.SCROLL_OPTIMIZE, () => {
      let [range] = this.quill.selection.getRange(); // quill.getSelection triggers update

      this.update(range);
    });
  }

  addHandler(format, handler) {
    this.handlers[format] = handler;
  }

  attach(input) {
    let format = [].find.call(input.classList, className => {
      return className.indexOf('ql-') === 0;
    });
    if (!format) return;
    format = format.slice('ql-'.length);

    if (input.tagName === 'BUTTON') {
      input.setAttribute('type', 'button');
    }

    if (this.handlers[format] == null) {
      if (this.quill.scroll.whitelist != null && this.quill.scroll.whitelist[format] == null) {
        debug.warn('ignoring attaching to disabled format', format, input);
        return;
      }

      if (_parchment.default.query(format) == null) {
        debug.warn('ignoring attaching to nonexistent format', format, input);
        return;
      }
    }

    let eventName = input.tagName === 'SELECT' ? 'change' : 'click';
    input.addEventListener(eventName, e => {
      let value;

      if (input.tagName === 'SELECT') {
        if (input.selectedIndex < 0) return;
        let selected = input.options[input.selectedIndex];

        if (selected.hasAttribute('selected')) {
          value = false;
        } else {
          value = selected.value || false;
        }
      } else {
        if (input.classList.contains('ql-active')) {
          value = false;
        } else {
          value = input.value || !input.hasAttribute('value');
        }

        e.preventDefault();
      }

      this.quill.focus();
      let [range] = this.quill.selection.getRange();

      if (this.handlers[format] != null) {
        this.handlers[format].call(this, value);
      } else if (_parchment.default.query(format).prototype instanceof _parchment.default.Embed) {
        value = prompt(`Enter ${format}`);
        if (!value) return;
        this.quill.updateContents(new _quillDelta.default().retain(range.index).delete(range.length).insert({
          [format]: value
        }), _quill.default.sources.USER);
      } else {
        this.quill.format(format, value, _quill.default.sources.USER);
      }

      this.update(range);
    }); // TODO use weakmap

    this.controls.push([format, input]);
  }

  update(range) {
    let formats = range == null ? {} : this.quill.getFormat(range);
    this.controls.forEach(function (pair) {
      let [format, input] = pair;

      if (input.tagName === 'SELECT') {
        let option;

        if (range == null) {
          option = null;
        } else if (formats[format] == null) {
          option = input.querySelector('option[selected]');
        } else if (!Array.isArray(formats[format])) {
          let value = formats[format];

          if (typeof value === 'string') {
            value = value.replace(/\"/g, '\\"');
          }

          option = input.querySelector(`option[value="${value}"]`);
        }

        if (option == null) {
          input.value = ''; // TODO make configurable?

          input.selectedIndex = -1;
        } else {
          option.selected = true;
        }
      } else {
        if (range == null) {
          input.classList.remove('ql-active');
        } else if (input.hasAttribute('value')) {
          // both being null should match (default values)
          // '1' should match with 1 (headers)
          let isActive = formats[format] === input.getAttribute('value') || formats[format] != null && formats[format].toString() === input.getAttribute('value') || formats[format] == null && !input.getAttribute('value');
          input.classList.toggle('ql-active', isActive);
        } else {
          input.classList.toggle('ql-active', formats[format] != null);
        }
      }
    });
  }

}

exports.default = Toolbar;
Toolbar.DEFAULTS = {};

function addButton(container, format, value) {
  let input = document.createElement('button');
  input.setAttribute('type', 'button');
  input.classList.add('ql-' + format);

  if (value != null) {
    input.value = value;
  }

  container.appendChild(input);
}

function addControls(container, groups) {
  if (!Array.isArray(groups[0])) {
    groups = [groups];
  }

  groups.forEach(function (controls) {
    let group = document.createElement('span');
    group.classList.add('ql-formats');
    controls.forEach(function (control) {
      if (typeof control === 'string') {
        addButton(group, control);
      } else {
        let format = Object.keys(control)[0];
        let value = control[format];

        if (Array.isArray(value)) {
          addSelect(group, format, value);
        } else {
          addButton(group, format, value);
        }
      }
    });
    container.appendChild(group);
  });
}

function addSelect(container, format, values) {
  let input = document.createElement('select');
  input.classList.add('ql-' + format);
  values.forEach(function (value) {
    let option = document.createElement('option');

    if (value !== false) {
      option.setAttribute('value', value);
    } else {
      option.setAttribute('selected', 'selected');
    }

    input.appendChild(option);
  });
  container.appendChild(input);
}

Toolbar.DEFAULTS = {
  container: null,
  handlers: {
    clean: function () {
      let range = this.quill.getSelection();
      if (range == null) return;

      if (range.length == 0) {
        let formats = this.quill.getFormat();
        Object.keys(formats).forEach(name => {
          // Clean functionality in existing apps only clean inline formats
          if (_parchment.default.query(name, _parchment.default.Scope.INLINE) != null) {
            this.quill.format(name, false);
          }
        });
      } else {
        this.quill.removeFormat(range, _quill.default.sources.USER);
      }
    },
    direction: function (value) {
      let align = this.quill.getFormat()['align'];

      if (value === 'rtl' && align == null) {
        this.quill.format('align', 'right', _quill.default.sources.USER);
      } else if (!value && align === 'right') {
        this.quill.format('align', false, _quill.default.sources.USER);
      }

      this.quill.format('direction', value, _quill.default.sources.USER);
    },
    indent: function (value) {
      let range = this.quill.getSelection();
      let formats = this.quill.getFormat(range);
      let indent = parseInt(formats.indent || 0);

      if (value === '+1' || value === '-1') {
        let modifier = value === '+1' ? 1 : -1;
        if (formats.direction === 'rtl') modifier *= -1;
        this.quill.format('indent', indent + modifier, _quill.default.sources.USER);
      }
    },
    link: function (value) {
      if (value === true) {
        value = prompt('Enter link URL:');
      }

      this.quill.format('link', value, _quill.default.sources.USER);
    },
    list: function (value) {
      let range = this.quill.getSelection();
      let formats = this.quill.getFormat(range);

      if (value === 'check') {
        if (formats['list'] === 'checked' || formats['list'] === 'unchecked') {
          this.quill.format('list', false, _quill.default.sources.USER);
        } else {
          this.quill.format('list', 'unchecked', _quill.default.sources.USER);
        }
      } else {
        this.quill.format('list', value, _quill.default.sources.USER);
      }
    }
  }
};
},{"quill-delta":"../node_modules/quill-delta/lib/delta.js","parchment":"../node_modules/parchment/dist/parchment.js","../core/quill":"../node_modules/quill/core/quill.js","../core/logger":"../node_modules/quill/core/logger.js","../core/module":"../node_modules/quill/core/module.js"}],"../node_modules/quill/assets/icons/align-left.svg":[function(require,module,exports) {
module.exports = '<svg><path class="ql-stroke" d="M3 9h12M3 14h10M3 4h6"/></svg>'
},{}],"../node_modules/quill/assets/icons/align-center.svg":[function(require,module,exports) {
module.exports = '<svg><path class="ql-stroke" d="M15 9H3M14 14H4M12 4H6"/></svg>'
},{}],"../node_modules/quill/assets/icons/align-right.svg":[function(require,module,exports) {
module.exports = '<svg><path class="ql-stroke" d="M15 9H3M15 14H5M15 4H9"/></svg>'
},{}],"../node_modules/quill/assets/icons/align-justify.svg":[function(require,module,exports) {
module.exports = '<svg><path class="ql-stroke" d="M15 9H3M15 14H3M15 4H3"/></svg>'
},{}],"../node_modules/quill/assets/icons/background.svg":[function(require,module,exports) {
module.exports = '<svg><g class="ql-fill ql-color-label"><path d="M6 6.868V6H5v1h.942L6 6.868zM4 4h1v1H4zM6.817 5H6v1h.38l.437-1zM2 6h1v1H2zM3 5h1v1H3zM4 7h1v1H4zM4 11.439V11H3v1h.755L4 11.439zM2 12h1v1H2zM2 9h1v1H2zM2 15h1v1H2zM4.63 10H4v1h.192l.438-1zM3 8h1v1H3zM10.832 4.2l.168.382V4h-.292a1.948 1.948 0 01.124.2zM7 4.582l.168-.382a1.929 1.929 0 01.124-.2H7v.582zM8 13h-.317l-.351.8a1.933 1.933 0 01-.124.2H8v-1zM12 2h1v1h-1zM11 3h1v1h-1zM9 3H8v.282A1.985 1.985 0 019 3zM2 3h1v1H2zM6 2h1v1H6zM3 2h1v1H3zM5 3h1v1H5zM9 2h1v1H9zM15 14h1v1h-1zM13.447 10.174l.022.051.003.007.336.768H14v-1h-.63l.077.174zM13 7h1v1h-1zM15 5h1v1h-1zM14 6h1v1h-1zM15 8h1v1h-1zM14 9h1v1h-1zM3.775 14H3v1h1v-.686A1.97 1.97 0 013.775 14zM14 3h1v1h-1zM12 6.868V6h-.38l.38.868zM15 2h1v1h-1zM12 5h1v1h-1zM13 4h1v1h-1zM12.933 9H13V8h-.505l.438 1zM9 14h1v1H9zM8 15h1v1H8zM6 14.926V15h1v-.684a1.993 1.993 0 01-1 .61zM5 15h1v1H5zM10.668 13.8l-.351-.8H10v1h.792a1.947 1.947 0 01-.124-.2zM11 15h1v1h-1zM14.332 12.2a1.99 1.99 0 01.166.8H15v-1h-.755zM14 15h1v1h-1zM15 11h1v1h-1z"/></g><path class="ql-stroke" d="M5.5 13L9 5l3.5 8M11.63 11H6.38"/></svg>'
},{}],"../node_modules/quill/assets/icons/blockquote.svg":[function(require,module,exports) {
module.exports = '<svg><path class="ql-fill ql-stroke" d="M4 5h3v3H4zM11 5h3v3h-3z"/><path class="ql-even ql-fill ql-stroke" d="M7 8c0 4.031-3 5-3 5M14 8c0 4.031-3 5-3 5"/></svg>'
},{}],"../node_modules/quill/assets/icons/bold.svg":[function(require,module,exports) {
module.exports = '<svg><path class="ql-stroke" d="M5 4h4.5A2.5 2.5 0 0112 6.5 2.5 2.5 0 019.5 9H5V4zM5 9h5.5a2.5 2.5 0 012.5 2.5 2.5 2.5 0 01-2.5 2.5H5V9z"/></svg>'
},{}],"../node_modules/quill/assets/icons/clean.svg":[function(require,module,exports) {
module.exports = '<svg><path class="ql-stroke" d="M5 3h8M6 12l3.35-9M11 11l4 4M15 11l-4 4"/><rect class="ql-fill" height="1" rx=".5" ry=".5" width="7" x="2" y="14"/></svg>'
},{}],"../node_modules/quill/assets/icons/code.svg":[function(require,module,exports) {
module.exports = '<svg><path class="ql-even ql-stroke" d="M5 7L3 9l2 2M13 7l2 2-2 2"/><path class="ql-stroke" d="M10 5l-2 8"/></svg>'
},{}],"../node_modules/quill/assets/icons/color.svg":[function(require,module,exports) {
module.exports = '<svg><path class="ql-color-label ql-stroke ql-transparent" d="M3 15h12"/><path class="ql-stroke" d="M5.5 11L9 3l3.5 8M11.63 9H6.38"/></svg>'
},{}],"../node_modules/quill/assets/icons/direction-ltr.svg":[function(require,module,exports) {
module.exports = '<svg><path class="ql-stroke ql-fill" d="M3 11l2-2-2-2v4zM15 4h-4"/><path class="ql-fill" d="M11 3a3 3 0 000 6h1V3h-1z"/><path class="ql-fill" d="M11 4h1v11h-1zM13 4h1v11h-1z"/></svg>'
},{}],"../node_modules/quill/assets/icons/direction-rtl.svg":[function(require,module,exports) {
module.exports = '<svg><path class="ql-stroke ql-fill" d="M15 12l-2-2 2-2v4zM9 4H5"/><path class="ql-fill" d="M5 3a3 3 0 000 6h1V3H5z"/><path class="ql-fill" d="M5 4h1v11H5zM7 4h1v11H7z"/></svg>'
},{}],"../node_modules/quill/assets/icons/float-center.svg":[function(require,module,exports) {
module.exports = '<svg><path class="ql-fill" d="M14 16H4a1 1 0 010-2h10a1 1 0 010 2zM14 4H4a1 1 0 010-2h10a1 1 0 010 2z"/><rect class="ql-fill" x="3" y="6" width="12" height="6" rx="1" ry="1"/></svg>'
},{}],"../node_modules/quill/assets/icons/float-full.svg":[function(require,module,exports) {
module.exports = '<svg><path class="ql-fill" d="M13 16H5a1 1 0 010-2h8a1 1 0 010 2zM13 4H5a1 1 0 010-2h8a1 1 0 010 2z"/><rect class="ql-fill" x="2" y="6" width="14" height="6" rx="1" ry="1"/></svg>'
},{}],"../node_modules/quill/assets/icons/float-left.svg":[function(require,module,exports) {
module.exports = '<svg><path class="ql-fill" d="M15 8h-2a1 1 0 010-2h2a1 1 0 010 2zM15 12h-2a1 1 0 010-2h2a1 1 0 010 2zM15 16H5a1 1 0 010-2h10a1 1 0 010 2zM15 4H5a1 1 0 010-2h10a1 1 0 010 2z"/><rect class="ql-fill" x="2" y="6" width="8" height="6" rx="1" ry="1"/></svg>'
},{}],"../node_modules/quill/assets/icons/float-right.svg":[function(require,module,exports) {
module.exports = '<svg><path class="ql-fill" d="M5 8H3a1 1 0 010-2h2a1 1 0 010 2zM5 12H3a1 1 0 010-2h2a1 1 0 010 2zM13 16H3a1 1 0 010-2h10a1 1 0 010 2zM13 4H3a1 1 0 010-2h10a1 1 0 010 2z"/><rect class="ql-fill" x="8" y="6" width="8" height="6" rx="1" ry="1" transform="rotate(-180 12 9)"/></svg>'
},{}],"../node_modules/quill/assets/icons/formula.svg":[function(require,module,exports) {
module.exports = '<svg><path class="ql-fill" d="M11.759 2.482a2.561 2.561 0 00-3.53.607A7.656 7.656 0 006.8 6.2c-.691 2.988-1.525 8.477-2.65 8.727a1.545 1.545 0 00-1.3-.933.922.922 0 00-.85 1.042S1.954 16 4.119 16s3.091-2.691 3.7-5.553c.177-.826.36-1.726.554-2.6L8.775 6.2c.381-1.421.807-2.521 1.306-2.676a1.014 1.014 0 001.02.56.966.966 0 00.658-1.602z"/><rect class="ql-fill" height="1.6" rx=".8" ry=".8" width="5" x="5.15" y="6.2"/><path class="ql-fill" d="M13.663 12.027a1.662 1.662 0 01.266-.276q.193.069.456.138a2.1 2.1 0 00.535.069 1.075 1.075 0 00.767-.3 1.044 1.044 0 00.314-.8.84.84 0 00-.238-.619.8.8 0 00-.594-.239 1.154 1.154 0 00-.781.3 4.607 4.607 0 00-.781 1q-.091.15-.218.346l-.246.38c-.068-.288-.137-.582-.212-.885-.459-1.847-2.494-.984-2.941-.8-.482.2-.353.647-.094.529a.869.869 0 011.281.585c.217.751.377 1.436.527 2.038a5.688 5.688 0 01-.362.467 2.69 2.69 0 01-.264.271q-.221-.08-.471-.147a2.029 2.029 0 00-.522-.066 1.079 1.079 0 00-.768.3 1.058 1.058 0 00-.317.813.82.82 0 00.832.852 1.134 1.134 0 00.787-.3 5.11 5.11 0 00.776-.993q.141-.219.215-.34c.046-.076.122-.194.223-.346a2.786 2.786 0 00.918 1.726 2.582 2.582 0 002.376-.185c.317-.181.212-.565 0-.494a.807.807 0 01-.951-.051 5.159 5.159 0 01-.913-2.446q.224-.314.4-.527z"/></svg>'
},{}],"../node_modules/quill/assets/icons/header.svg":[function(require,module,exports) {
module.exports = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10 4v10a1 1 0 01-2 0v-4H3v4a1 1 0 01-2 0V4a1 1 0 012 0v4h5V4a1 1 0 012 0zm6.068 9.209H14.99v-5.61a.54.54 0 00-.605-.606h-.628a1.011 1.011 0 00-.748.297l-1.364 1.276a.543.543 0 00-.022.859l.286.307a.539.539 0 00.847.034l.1-.088a1.214 1.214 0 00.241-.353h.023s-.012.309-.012.606v3.278h-1.067a.54.54 0 00-.605.605v.44a.54.54 0 00.605.605h4.027a.54.54 0 00.605-.605v-.44a.54.54 0 00-.605-.605z"/></svg>'
},{}],"../node_modules/quill/assets/icons/header-2.svg":[function(require,module,exports) {
module.exports = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.74 13.814v.44a.54.54 0 01-.605.605h-4.28a.584.584 0 01-.649-.605v-.241c0-2.906 3.4-3.422 3.4-4.555a.777.777 0 00-.848-.781 1.177 1.177 0 00-.836.385c-.275.263-.56.374-.858.131l-.429-.34c-.308-.243-.385-.518-.154-.815a2.972 2.972 0 012.454-1.177 2.454 2.454 0 012.684 2.41c0 2.453-3.18 2.926-3.279 3.938h2.795a.54.54 0 01.605.605zM9 3a1 1 0 00-1 1v4H3V4a1 1 0 00-2 0v10a1 1 0 002 0v-4h5v4a1 1 0 002 0V4a1 1 0 00-1-1z"/></svg>'
},{}],"../node_modules/quill/assets/icons/italic.svg":[function(require,module,exports) {
module.exports = '<svg><path class="ql-stroke" d="M7 4h6M5 14h6M8 14l2-10"/></svg>'
},{}],"../node_modules/quill/assets/icons/image.svg":[function(require,module,exports) {
module.exports = '<svg><path class="ql-stroke" d="M3 4h12v10H3z"/><circle class="ql-fill" cx="6" cy="7" r="1"/><path class="ql-even ql-fill" d="M5 12v-1l2-2 1 1 3-3 2 2v3H5"/></svg>'
},{}],"../node_modules/quill/assets/icons/indent.svg":[function(require,module,exports) {
module.exports = '<svg><path class="ql-stroke" d="M3 14h12M3 4h12M9 9h6"/><path class="ql-fill ql-stroke" d="M3 7v4l2-2-2-2"/></svg>'
},{}],"../node_modules/quill/assets/icons/outdent.svg":[function(require,module,exports) {
module.exports = '<svg><path class="ql-stroke" d="M3 14h12M3 4h12M9 9h6M5 7v4L3 9l2-2"/></svg>'
},{}],"../node_modules/quill/assets/icons/link.svg":[function(require,module,exports) {
module.exports = '<svg><path class="ql-stroke" d="M7 7l4 4"/><path class="ql-even ql-stroke" d="M8.9 4.577a3.476 3.476 0 01.36 4.679A3.476 3.476 0 014.577 8.9c-1.392-1.4-2.542-2.5-.36-4.683S7.5 3.185 8.9 4.577z"/><path class="ql-even ql-stroke" d="M13.423 9.1a3.476 3.476 0 00-4.679-.36 3.476 3.476 0 00.36 4.679c1.392 1.392 2.5 2.542 4.679.36s1.032-3.279-.36-4.679z"/></svg>'
},{}],"../node_modules/quill/assets/icons/list-ordered.svg":[function(require,module,exports) {
module.exports = '<svg><path class="ql-stroke" d="M7 4h8M7 9h8M7 14h8"/><path class="ql-stroke ql-thin" d="M2.5 5.5h2"/><path class="ql-fill" d="M3.5 6a.5.5 0 01-.5-.5V3.085l-.276.138A.5.5 0 012.053 3c-.124-.247-.023-.324.224-.447l1-.5A.5.5 0 014 2.5v3a.5.5 0 01-.5.5z"/><path class="ql-stroke ql-thin" d="M4.5 10.5h-2c0-.234 1.85-1.076 1.85-2.234a.959.959 0 00-1.85-.11M2.5 14.846a.959.959 0 001.85-.109.7.7 0 00-.6-.737.688.688 0 00.6-.736.959.959 0 00-1.85-.109"/></svg>'
},{}],"../node_modules/quill/assets/icons/list-bullet.svg":[function(require,module,exports) {
module.exports = '<svg><path class="ql-stroke" d="M6 4h9M6 9h9M6 14h9M3 14"/></svg>'
},{}],"../node_modules/quill/assets/icons/list-check.svg":[function(require,module,exports) {
module.exports = '<svg><path class="ql-stroke" d="M9 4h6M3 4l1 1 2-2M9 14h6M3 14l1 1 2-2M9 9h6M3 9l1 1 2-2"/></svg>'
},{}],"../node_modules/quill/assets/icons/subscript.svg":[function(require,module,exports) {
module.exports = '<svg><path class="ql-fill" d="M15.5 15h-1.639a3.858 3.858 0 001.914-2.975 1.8 1.8 0 00-1.6-1.751 1.921 1.921 0 00-2.154 1.426.5.5 0 10.957.291.914.914 0 011.053-.725.81.81 0 01.744.762c0 1.076-1.17 1.87-1.94 2.43A1.456 1.456 0 0012 15.5a.5.5 0 00.5.5h3a.5.5 0 000-1zM9.65 5.241a1 1 0 00-1.409.108L6 7.964 3.759 5.349a1 1 0 00-1.567 1.243q.023.03.049.057L4.684 9.5l-2.443 2.85a1 1 0 001.469 1.357q.026-.027.049-.057L6 11.036l2.241 2.614a1 1 0 101.567-1.243q-.023-.03-.049-.057L7.316 9.5l2.443-2.849a1 1 0 00-.109-1.41z"/></svg>'
},{}],"../node_modules/quill/assets/icons/superscript.svg":[function(require,module,exports) {
module.exports = '<svg><path class="ql-fill" d="M15.5 7h-1.639a4.015 4.015 0 001.914-2.975 1.8 1.8 0 00-1.6-1.751A1.922 1.922 0 0012.021 3.7a.5.5 0 10.957.291.917.917 0 011.053-.725.81.81 0 01.744.762c0 1.077-1.164 1.925-1.934 2.486A1.423 1.423 0 0012 7.5a.5.5 0 00.5.5h3a.5.5 0 000-1zM9.651 5.241a1 1 0 00-1.41.108L6 7.964 3.759 5.349a1 1 0 10-1.519 1.3L4.683 9.5l-2.442 2.85a1 1 0 101.519 1.3L6 11.036l2.241 2.614a1 1 0 001.519-1.3L7.317 9.5l2.442-2.849a1 1 0 00-.108-1.41z"/></svg>'
},{}],"../node_modules/quill/assets/icons/strike.svg":[function(require,module,exports) {
module.exports = '<svg><path class="ql-stroke ql-thin" d="M15.5 8.5l-13 1"/><path class="ql-fill" d="M9.007 8C6.542 7.791 6 7.519 6 6.5 6 5.792 7.283 5 9 5c1.571 0 2.765.679 2.969 1.309a1 1 0 001.9-.617C13.356 4.106 11.354 3 9 3 6.2 3 4 4.538 4 6.5a3.2 3.2 0 00.5 1.843zM8.984 10c2.473.208 3.016.479 3.016 1.5 0 .708-1.283 1.5-3 1.5-1.571 0-2.765-.679-2.969-1.309a1 1 0 10-1.9.617C4.644 13.894 6.646 15 9 15c2.8 0 5-1.538 5-3.5a3.2 3.2 0 00-.5-1.843z"/></svg>'
},{}],"../node_modules/quill/assets/icons/underline.svg":[function(require,module,exports) {
module.exports = '<svg><path class="ql-stroke" d="M5 3v6a4.012 4.012 0 004 4 4.012 4.012 0 004-4V3"/><rect class="ql-fill" height="1" rx=".5" ry=".5" width="12" x="3" y="15"/></svg>'
},{}],"../node_modules/quill/assets/icons/video.svg":[function(require,module,exports) {
module.exports = '<svg><path class="ql-stroke" d="M3 3h12v12H3z"/><path class="ql-fill" d="M5 3h1v12H5zM12 3h1v12h-1z"/><path class="ql-fill" d="M5 8h8v2H5zM3 5h3v1H3zM3 7h3v1H3zM3 10h3v1H3zM3 12h3v1H3zM12 5h3v1h-3zM12 7h3v1h-3zM12 10h3v1h-3zM12 12h3v1h-3z"/></svg>'
},{}],"../node_modules/quill/ui/icons.js":[function(require,module,exports) {
module.exports = {
  'align': {
    ''        : require('../assets/icons/align-left.svg'),
    'center'  : require('../assets/icons/align-center.svg'),
    'right'   : require('../assets/icons/align-right.svg'),
    'justify' : require('../assets/icons/align-justify.svg')
  },
  'background': require('../assets/icons/background.svg'),
  'blockquote': require('../assets/icons/blockquote.svg'),
  'bold'      : require('../assets/icons/bold.svg'),
  'clean'     : require('../assets/icons/clean.svg'),
  'code'      : require('../assets/icons/code.svg'),
  'code-block': require('../assets/icons/code.svg'),
  'color'     : require('../assets/icons/color.svg'),
  'direction' : {
    ''        : require('../assets/icons/direction-ltr.svg'),
    'rtl'     : require('../assets/icons/direction-rtl.svg')
  },
  'float': {
    'center'  : require('../assets/icons/float-center.svg'),
    'full'    : require('../assets/icons/float-full.svg'),
    'left'    : require('../assets/icons/float-left.svg'),
    'right'   : require('../assets/icons/float-right.svg')
  },
  'formula'   : require('../assets/icons/formula.svg'),
  'header': {
    '1'       : require('../assets/icons/header.svg'),
    '2'       : require('../assets/icons/header-2.svg')
  },
  'italic'    : require('../assets/icons/italic.svg'),
  'image'     : require('../assets/icons/image.svg'),
  'indent': {
    '+1'      : require('../assets/icons/indent.svg'),
    '-1'      : require('../assets/icons/outdent.svg')
  },
  'link'      : require('../assets/icons/link.svg'),
  'list': {
    'ordered' : require('../assets/icons/list-ordered.svg'),
    'bullet'  : require('../assets/icons/list-bullet.svg'),
    'check'   : require('../assets/icons/list-check.svg')
  },
  'script': {
    'sub'     : require('../assets/icons/subscript.svg'),
    'super'   : require('../assets/icons/superscript.svg'),
  },
  'strike'    : require('../assets/icons/strike.svg'),
  'underline' : require('../assets/icons/underline.svg'),
  'video'     : require('../assets/icons/video.svg')
};

},{"../assets/icons/align-left.svg":"../node_modules/quill/assets/icons/align-left.svg","../assets/icons/align-center.svg":"../node_modules/quill/assets/icons/align-center.svg","../assets/icons/align-right.svg":"../node_modules/quill/assets/icons/align-right.svg","../assets/icons/align-justify.svg":"../node_modules/quill/assets/icons/align-justify.svg","../assets/icons/background.svg":"../node_modules/quill/assets/icons/background.svg","../assets/icons/blockquote.svg":"../node_modules/quill/assets/icons/blockquote.svg","../assets/icons/bold.svg":"../node_modules/quill/assets/icons/bold.svg","../assets/icons/clean.svg":"../node_modules/quill/assets/icons/clean.svg","../assets/icons/code.svg":"../node_modules/quill/assets/icons/code.svg","../assets/icons/color.svg":"../node_modules/quill/assets/icons/color.svg","../assets/icons/direction-ltr.svg":"../node_modules/quill/assets/icons/direction-ltr.svg","../assets/icons/direction-rtl.svg":"../node_modules/quill/assets/icons/direction-rtl.svg","../assets/icons/float-center.svg":"../node_modules/quill/assets/icons/float-center.svg","../assets/icons/float-full.svg":"../node_modules/quill/assets/icons/float-full.svg","../assets/icons/float-left.svg":"../node_modules/quill/assets/icons/float-left.svg","../assets/icons/float-right.svg":"../node_modules/quill/assets/icons/float-right.svg","../assets/icons/formula.svg":"../node_modules/quill/assets/icons/formula.svg","../assets/icons/header.svg":"../node_modules/quill/assets/icons/header.svg","../assets/icons/header-2.svg":"../node_modules/quill/assets/icons/header-2.svg","../assets/icons/italic.svg":"../node_modules/quill/assets/icons/italic.svg","../assets/icons/image.svg":"../node_modules/quill/assets/icons/image.svg","../assets/icons/indent.svg":"../node_modules/quill/assets/icons/indent.svg","../assets/icons/outdent.svg":"../node_modules/quill/assets/icons/outdent.svg","../assets/icons/link.svg":"../node_modules/quill/assets/icons/link.svg","../assets/icons/list-ordered.svg":"../node_modules/quill/assets/icons/list-ordered.svg","../assets/icons/list-bullet.svg":"../node_modules/quill/assets/icons/list-bullet.svg","../assets/icons/list-check.svg":"../node_modules/quill/assets/icons/list-check.svg","../assets/icons/subscript.svg":"../node_modules/quill/assets/icons/subscript.svg","../assets/icons/superscript.svg":"../node_modules/quill/assets/icons/superscript.svg","../assets/icons/strike.svg":"../node_modules/quill/assets/icons/strike.svg","../assets/icons/underline.svg":"../node_modules/quill/assets/icons/underline.svg","../assets/icons/video.svg":"../node_modules/quill/assets/icons/video.svg"}],"../node_modules/quill/assets/icons/dropdown.svg":[function(require,module,exports) {
module.exports = '<svg><path class="ql-stroke" d="M7 11l2 2 2-2H7zM7 7l2-2 2 2H7z"/></svg>'
},{}],"../node_modules/quill/ui/picker.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _keyboard = _interopRequireDefault(require("../modules/keyboard"));

var _dropdown = _interopRequireDefault(require("../assets/icons/dropdown.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let optionsCounter = 0;

function toggleAriaAttribute(element, attribute) {
  element.setAttribute(attribute, !(element.getAttribute(attribute) === 'true'));
}

class Picker {
  constructor(select) {
    this.select = select;
    this.container = document.createElement('span');
    this.buildPicker();
    this.select.style.display = 'none';
    this.select.parentNode.insertBefore(this.container, this.select);
    this.label.addEventListener('mousedown', () => {
      this.togglePicker();
    });
    this.label.addEventListener('keydown', event => {
      switch (event.keyCode) {
        // Allows the "Enter" key to open the picker
        case _keyboard.default.keys.ENTER:
          this.togglePicker();
          break;
        // Allows the "Escape" key to close the picker

        case _keyboard.default.keys.ESCAPE:
          this.escape();
          event.preventDefault();
          break;

        default:
      }
    });
    this.select.addEventListener('change', this.update.bind(this));
  }

  togglePicker() {
    this.container.classList.toggle('ql-expanded'); // Toggle aria-expanded and aria-hidden to make the picker accessible

    toggleAriaAttribute(this.label, 'aria-expanded');
    toggleAriaAttribute(this.options, 'aria-hidden');
  }

  buildItem(option) {
    let item = document.createElement('span');
    item.tabIndex = '0';
    item.setAttribute('role', 'button');
    item.classList.add('ql-picker-item');

    if (option.hasAttribute('value')) {
      item.setAttribute('data-value', option.getAttribute('value'));
    }

    if (option.textContent) {
      item.setAttribute('data-label', option.textContent);
    }

    item.addEventListener('click', () => {
      this.selectItem(item, true);
    });
    item.addEventListener('keydown', event => {
      switch (event.keyCode) {
        // Allows the "Enter" key to select an item
        case _keyboard.default.keys.ENTER:
          this.selectItem(item, true);
          event.preventDefault();
          break;
        // Allows the "Escape" key to close the picker

        case _keyboard.default.keys.ESCAPE:
          this.escape();
          event.preventDefault();
          break;

        default:
      }
    });
    return item;
  }

  buildLabel() {
    let label = document.createElement('span');
    label.classList.add('ql-picker-label');
    label.innerHTML = _dropdown.default;
    label.tabIndex = '0';
    label.setAttribute('role', 'button');
    label.setAttribute('aria-expanded', 'false');
    this.container.appendChild(label);
    return label;
  }

  buildOptions() {
    let options = document.createElement('span');
    options.classList.add('ql-picker-options'); // Don't want screen readers to read this until options are visible

    options.setAttribute('aria-hidden', 'true');
    options.tabIndex = '-1'; // Need a unique id for aria-controls

    options.id = `ql-picker-options-${optionsCounter}`;
    optionsCounter += 1;
    this.label.setAttribute('aria-controls', options.id);
    this.options = options;
    [].slice.call(this.select.options).forEach(option => {
      let item = this.buildItem(option);
      options.appendChild(item);

      if (option.selected === true) {
        this.selectItem(item);
      }
    });
    this.container.appendChild(options);
  }

  buildPicker() {
    [].slice.call(this.select.attributes).forEach(item => {
      this.container.setAttribute(item.name, item.value);
    });
    this.container.classList.add('ql-picker');
    this.label = this.buildLabel();
    this.buildOptions();
  }

  escape() {
    // Close menu and return focus to trigger label
    this.close(); // Need setTimeout for accessibility to ensure that the browser executes
    // focus on the next process thread and after any DOM content changes

    setTimeout(() => this.label.focus(), 1);
  }

  close() {
    this.container.classList.remove('ql-expanded');
    this.label.setAttribute('aria-expanded', 'false');
    this.options.setAttribute('aria-hidden', 'true');
  }

  selectItem(item, trigger = false) {
    let selected = this.container.querySelector('.ql-selected');
    if (item === selected) return;

    if (selected != null) {
      selected.classList.remove('ql-selected');
    }

    if (item == null) return;
    item.classList.add('ql-selected');
    this.select.selectedIndex = [].indexOf.call(item.parentNode.children, item);

    if (item.hasAttribute('data-value')) {
      this.label.setAttribute('data-value', item.getAttribute('data-value'));
    } else {
      this.label.removeAttribute('data-value');
    }

    if (item.hasAttribute('data-label')) {
      this.label.setAttribute('data-label', item.getAttribute('data-label'));
    } else {
      this.label.removeAttribute('data-label');
    }

    if (trigger) {
      if (typeof Event === 'function') {
        this.select.dispatchEvent(new Event('change'));
      } else if (typeof Event === 'object') {
        // IE11
        let event = document.createEvent('Event');
        event.initEvent('change', true, true);
        this.select.dispatchEvent(event);
      }

      this.close();
    }
  }

  update() {
    let option;

    if (this.select.selectedIndex > -1) {
      let item = this.container.querySelector('.ql-picker-options').children[this.select.selectedIndex];
      option = this.select.options[this.select.selectedIndex];
      this.selectItem(item);
    } else {
      this.selectItem(null);
    }

    let isActive = option != null && option !== this.select.querySelector('option[selected]');
    this.label.classList.toggle('ql-active', isActive);
  }

}

var _default = Picker;
exports.default = _default;
},{"../modules/keyboard":"../node_modules/quill/modules/keyboard.js","../assets/icons/dropdown.svg":"../node_modules/quill/assets/icons/dropdown.svg"}],"../node_modules/quill/ui/color-picker.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _picker = _interopRequireDefault(require("./picker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ColorPicker extends _picker.default {
  constructor(select, label) {
    super(select);
    this.label.innerHTML = label;
    this.container.classList.add('ql-color-picker');
    [].slice.call(this.container.querySelectorAll('.ql-picker-item'), 0, 7).forEach(function (item) {
      item.classList.add('ql-primary');
    });
  }

  buildItem(option) {
    let item = super.buildItem(option);
    item.style.backgroundColor = option.getAttribute('value') || '';
    return item;
  }

  selectItem(item, trigger) {
    super.selectItem(item, trigger);
    let colorLabel = this.label.querySelector('.ql-color-label');
    let value = item ? item.getAttribute('data-value') || '' : '';

    if (colorLabel) {
      if (colorLabel.tagName === 'line') {
        colorLabel.style.stroke = value;
      } else {
        colorLabel.style.fill = value;
      }
    }
  }

}

var _default = ColorPicker;
exports.default = _default;
},{"./picker":"../node_modules/quill/ui/picker.js"}],"../node_modules/quill/ui/icon-picker.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _picker = _interopRequireDefault(require("./picker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class IconPicker extends _picker.default {
  constructor(select, icons) {
    super(select);
    this.container.classList.add('ql-icon-picker');
    [].forEach.call(this.container.querySelectorAll('.ql-picker-item'), item => {
      item.innerHTML = icons[item.getAttribute('data-value') || ''];
    });
    this.defaultItem = this.container.querySelector('.ql-selected');
    this.selectItem(this.defaultItem);
  }

  selectItem(item, trigger) {
    super.selectItem(item, trigger);
    item = item || this.defaultItem;
    this.label.innerHTML = item.innerHTML;
  }

}

var _default = IconPicker;
exports.default = _default;
},{"./picker":"../node_modules/quill/ui/picker.js"}],"../node_modules/quill/ui/tooltip.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Tooltip {
  constructor(quill, boundsContainer) {
    this.quill = quill;
    this.boundsContainer = boundsContainer || document.body;
    this.root = quill.addContainer('ql-tooltip');
    this.root.innerHTML = this.constructor.TEMPLATE;

    if (this.quill.root === this.quill.scrollingContainer) {
      this.quill.root.addEventListener('scroll', () => {
        this.root.style.marginTop = -1 * this.quill.root.scrollTop + 'px';
      });
    }

    this.hide();
  }

  hide() {
    this.root.classList.add('ql-hidden');
  }

  position(reference) {
    let left = reference.left + reference.width / 2 - this.root.offsetWidth / 2; // root.scrollTop should be 0 if scrollContainer !== root

    let top = reference.bottom + this.quill.root.scrollTop;
    this.root.style.left = left + 'px';
    this.root.style.top = top + 'px';
    this.root.classList.remove('ql-flip');
    let containerBounds = this.boundsContainer.getBoundingClientRect();
    let rootBounds = this.root.getBoundingClientRect();
    let shift = 0;

    if (rootBounds.right > containerBounds.right) {
      shift = containerBounds.right - rootBounds.right;
      this.root.style.left = left + shift + 'px';
    }

    if (rootBounds.left < containerBounds.left) {
      shift = containerBounds.left - rootBounds.left;
      this.root.style.left = left + shift + 'px';
    }

    if (rootBounds.bottom > containerBounds.bottom) {
      let height = rootBounds.bottom - rootBounds.top;
      let verticalShift = reference.bottom - reference.top + height;
      this.root.style.top = top - verticalShift + 'px';
      this.root.classList.add('ql-flip');
    }

    return shift;
  }

  show() {
    this.root.classList.remove('ql-editing');
    this.root.classList.remove('ql-hidden');
  }

}

var _default = Tooltip;
exports.default = _default;
},{}],"../node_modules/quill/themes/base.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BaseTooltip = void 0;

var _extend = _interopRequireDefault(require("extend"));

var _quillDelta = _interopRequireDefault(require("quill-delta"));

var _emitter = _interopRequireDefault(require("../core/emitter"));

var _keyboard = _interopRequireDefault(require("../modules/keyboard"));

var _theme = _interopRequireDefault(require("../core/theme"));

var _colorPicker = _interopRequireDefault(require("../ui/color-picker"));

var _iconPicker = _interopRequireDefault(require("../ui/icon-picker"));

var _picker = _interopRequireDefault(require("../ui/picker"));

var _tooltip = _interopRequireDefault(require("../ui/tooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ALIGNS = [false, 'center', 'right', 'justify'];
const COLORS = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"];
const FONTS = [false, 'serif', 'monospace'];
const HEADERS = ['1', '2', '3', false];
const SIZES = ['small', false, 'large', 'huge'];

class BaseTheme extends _theme.default {
  constructor(quill, options) {
    super(quill, options);

    let listener = e => {
      if (!document.body.contains(quill.root)) {
        return document.body.removeEventListener('click', listener);
      }

      if (this.tooltip != null && !this.tooltip.root.contains(e.target) && document.activeElement !== this.tooltip.textbox && !this.quill.hasFocus()) {
        this.tooltip.hide();
      }

      if (this.pickers != null) {
        this.pickers.forEach(function (picker) {
          if (!picker.container.contains(e.target)) {
            picker.close();
          }
        });
      }
    };

    quill.emitter.listenDOM('click', document.body, listener);
  }

  addModule(name) {
    let module = super.addModule(name);

    if (name === 'toolbar') {
      this.extendToolbar(module);
    }

    return module;
  }

  buildButtons(buttons, icons) {
    buttons.forEach(button => {
      let className = button.getAttribute('class') || '';
      className.split(/\s+/).forEach(name => {
        if (!name.startsWith('ql-')) return;
        name = name.slice('ql-'.length);
        if (icons[name] == null) return;

        if (name === 'direction') {
          button.innerHTML = icons[name][''] + icons[name]['rtl'];
        } else if (typeof icons[name] === 'string') {
          button.innerHTML = icons[name];
        } else {
          let value = button.value || '';

          if (value != null && icons[name][value]) {
            button.innerHTML = icons[name][value];
          }
        }
      });
    });
  }

  buildPickers(selects, icons) {
    this.pickers = selects.map(select => {
      if (select.classList.contains('ql-align')) {
        if (select.querySelector('option') == null) {
          fillSelect(select, ALIGNS);
        }

        return new _iconPicker.default(select, icons.align);
      } else if (select.classList.contains('ql-background') || select.classList.contains('ql-color')) {
        let format = select.classList.contains('ql-background') ? 'background' : 'color';

        if (select.querySelector('option') == null) {
          fillSelect(select, COLORS, format === 'background' ? '#ffffff' : '#000000');
        }

        return new _colorPicker.default(select, icons[format]);
      } else {
        if (select.querySelector('option') == null) {
          if (select.classList.contains('ql-font')) {
            fillSelect(select, FONTS);
          } else if (select.classList.contains('ql-header')) {
            fillSelect(select, HEADERS);
          } else if (select.classList.contains('ql-size')) {
            fillSelect(select, SIZES);
          }
        }

        return new _picker.default(select);
      }
    });

    let update = () => {
      this.pickers.forEach(function (picker) {
        picker.update();
      });
    };

    this.quill.on(_emitter.default.events.EDITOR_CHANGE, update);
  }

}

exports.default = BaseTheme;
BaseTheme.DEFAULTS = (0, _extend.default)(true, {}, _theme.default.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        formula: function () {
          this.quill.theme.tooltip.edit('formula');
        },
        image: function () {
          let fileInput = this.container.querySelector('input.ql-image[type=file]');

          if (fileInput == null) {
            fileInput = document.createElement('input');
            fileInput.setAttribute('type', 'file');
            fileInput.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon');
            fileInput.classList.add('ql-image');
            fileInput.addEventListener('change', () => {
              if (fileInput.files != null && fileInput.files[0] != null) {
                let reader = new FileReader();

                reader.onload = e => {
                  let range = this.quill.getSelection(true);
                  this.quill.updateContents(new _quillDelta.default().retain(range.index).delete(range.length).insert({
                    image: e.target.result
                  }), _emitter.default.sources.USER);
                  this.quill.setSelection(range.index + 1, _emitter.default.sources.SILENT);
                  fileInput.value = "";
                };

                reader.readAsDataURL(fileInput.files[0]);
              }
            });
            this.container.appendChild(fileInput);
          }

          fileInput.click();
        },
        video: function () {
          this.quill.theme.tooltip.edit('video');
        }
      }
    }
  }
});

class BaseTooltip extends _tooltip.default {
  constructor(quill, boundsContainer) {
    super(quill, boundsContainer);
    this.textbox = this.root.querySelector('input[type="text"]');
    this.listen();
  }

  listen() {
    this.textbox.addEventListener('keydown', event => {
      if (_keyboard.default.match(event, 'enter')) {
        this.save();
        event.preventDefault();
      } else if (_keyboard.default.match(event, 'escape')) {
        this.cancel();
        event.preventDefault();
      }
    });
  }

  cancel() {
    this.hide();
  }

  edit(mode = 'link', preview = null) {
    this.root.classList.remove('ql-hidden');
    this.root.classList.add('ql-editing');

    if (preview != null) {
      this.textbox.value = preview;
    } else if (mode !== this.root.getAttribute('data-mode')) {
      this.textbox.value = '';
    }

    this.position(this.quill.getBounds(this.quill.selection.savedRange));
    this.textbox.select();
    this.textbox.setAttribute('placeholder', this.textbox.getAttribute(`data-${mode}`) || '');
    this.root.setAttribute('data-mode', mode);
  }

  restoreFocus() {
    let scrollTop = this.quill.scrollingContainer.scrollTop;
    this.quill.focus();
    this.quill.scrollingContainer.scrollTop = scrollTop;
  }

  save() {
    let value = this.textbox.value;

    switch (this.root.getAttribute('data-mode')) {
      case 'link':
        {
          let scrollTop = this.quill.root.scrollTop;

          if (this.linkRange) {
            this.quill.formatText(this.linkRange, 'link', value, _emitter.default.sources.USER);
            delete this.linkRange;
          } else {
            this.restoreFocus();
            this.quill.format('link', value, _emitter.default.sources.USER);
          }

          this.quill.root.scrollTop = scrollTop;
          break;
        }

      case 'video':
        {
          value = extractVideoUrl(value);
        }
      // eslint-disable-next-line no-fallthrough

      case 'formula':
        {
          if (!value) break;
          let range = this.quill.getSelection(true);

          if (range != null) {
            let index = range.index + range.length;
            this.quill.insertEmbed(index, this.root.getAttribute('data-mode'), value, _emitter.default.sources.USER);

            if (this.root.getAttribute('data-mode') === 'formula') {
              this.quill.insertText(index + 1, ' ', _emitter.default.sources.USER);
            }

            this.quill.setSelection(index + 2, _emitter.default.sources.USER);
          }

          break;
        }

      default:
    }

    this.textbox.value = '';
    this.hide();
  }

}

exports.BaseTooltip = BaseTooltip;

function extractVideoUrl(url) {
  let match = url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);

  if (match) {
    return (match[1] || 'https') + '://www.youtube.com/embed/' + match[2] + '?showinfo=0';
  }

  if (match = url.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) {
    // eslint-disable-line no-cond-assign
    return (match[1] || 'https') + '://player.vimeo.com/video/' + match[2] + '/';
  }

  return url;
}

function fillSelect(select, values, defaultValue = false) {
  values.forEach(function (value) {
    let option = document.createElement('option');

    if (value === defaultValue) {
      option.setAttribute('selected', 'selected');
    } else {
      option.setAttribute('value', value);
    }

    select.appendChild(option);
  });
}
},{"extend":"../node_modules/extend/index.js","quill-delta":"../node_modules/quill-delta/lib/delta.js","../core/emitter":"../node_modules/quill/core/emitter.js","../modules/keyboard":"../node_modules/quill/modules/keyboard.js","../core/theme":"../node_modules/quill/core/theme.js","../ui/color-picker":"../node_modules/quill/ui/color-picker.js","../ui/icon-picker":"../node_modules/quill/ui/icon-picker.js","../ui/picker":"../node_modules/quill/ui/picker.js","../ui/tooltip":"../node_modules/quill/ui/tooltip.js"}],"../node_modules/quill/themes/bubble.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BubbleTooltip = void 0;

var _extend = _interopRequireDefault(require("extend"));

var _emitter = _interopRequireDefault(require("../core/emitter"));

var _base = _interopRequireWildcard(require("./base"));

var _selection = require("../core/selection");

var _icons = _interopRequireDefault(require("../ui/icons"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TOOLBAR_CONFIG = [['bold', 'italic', 'link'], [{
  header: 1
}, {
  header: 2
}, 'blockquote']];

class BubbleTheme extends _base.default {
  constructor(quill, options) {
    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
      options.modules.toolbar.container = TOOLBAR_CONFIG;
    }

    super(quill, options);
    this.quill.container.classList.add('ql-bubble');
  }

  extendToolbar(toolbar) {
    this.tooltip = new BubbleTooltip(this.quill, this.options.bounds);
    this.tooltip.root.appendChild(toolbar.container);
    this.buildButtons([].slice.call(toolbar.container.querySelectorAll('button')), _icons.default);
    this.buildPickers([].slice.call(toolbar.container.querySelectorAll('select')), _icons.default);
  }

}

exports.default = BubbleTheme;
BubbleTheme.DEFAULTS = (0, _extend.default)(true, {}, _base.default.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link: function (value) {
          if (!value) {
            this.quill.format('link', false);
          } else {
            this.quill.theme.tooltip.edit();
          }
        }
      }
    }
  }
});

class BubbleTooltip extends _base.BaseTooltip {
  constructor(quill, bounds) {
    super(quill, bounds);
    this.quill.on(_emitter.default.events.EDITOR_CHANGE, (type, range, oldRange, source) => {
      if (type !== _emitter.default.events.SELECTION_CHANGE) return;

      if (range != null && range.length > 0 && source === _emitter.default.sources.USER) {
        this.show(); // Lock our width so we will expand beyond our offsetParent boundaries

        this.root.style.left = '0px';
        this.root.style.width = '';
        this.root.style.width = this.root.offsetWidth + 'px';
        let lines = this.quill.getLines(range.index, range.length);

        if (lines.length === 1) {
          this.position(this.quill.getBounds(range));
        } else {
          let lastLine = lines[lines.length - 1];
          let index = this.quill.getIndex(lastLine);
          let length = Math.min(lastLine.length() - 1, range.index + range.length - index);
          let bounds = this.quill.getBounds(new _selection.Range(index, length));
          this.position(bounds);
        }
      } else if (document.activeElement !== this.textbox && this.quill.hasFocus()) {
        this.hide();
      }
    });
  }

  listen() {
    super.listen();
    this.root.querySelector('.ql-close').addEventListener('click', () => {
      this.root.classList.remove('ql-editing');
    });
    this.quill.on(_emitter.default.events.SCROLL_OPTIMIZE, () => {
      // Let selection be restored by toolbar handlers before repositioning
      setTimeout(() => {
        if (this.root.classList.contains('ql-hidden')) return;
        let range = this.quill.getSelection();

        if (range != null) {
          this.position(this.quill.getBounds(range));
        }
      }, 1);
    });
  }

  cancel() {
    this.show();
  }

  position(reference) {
    let shift = super.position(reference);
    let arrow = this.root.querySelector('.ql-tooltip-arrow');
    arrow.style.marginLeft = '';
    if (shift === 0) return shift;
    arrow.style.marginLeft = -1 * shift - arrow.offsetWidth / 2 + 'px';
  }

}

exports.BubbleTooltip = BubbleTooltip;
BubbleTooltip.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', '</div>'].join('');
},{"extend":"../node_modules/extend/index.js","../core/emitter":"../node_modules/quill/core/emitter.js","./base":"../node_modules/quill/themes/base.js","../core/selection":"../node_modules/quill/core/selection.js","../ui/icons":"../node_modules/quill/ui/icons.js"}],"../node_modules/quill/themes/snow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extend = _interopRequireDefault(require("extend"));

var _emitter = _interopRequireDefault(require("../core/emitter"));

var _base = _interopRequireWildcard(require("./base"));

var _link = _interopRequireDefault(require("../formats/link"));

var _selection = require("../core/selection");

var _icons = _interopRequireDefault(require("../ui/icons"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TOOLBAR_CONFIG = [[{
  header: ['1', '2', '3', false]
}], ['bold', 'italic', 'underline', 'link'], [{
  list: 'ordered'
}, {
  list: 'bullet'
}], ['clean']];

class SnowTheme extends _base.default {
  constructor(quill, options) {
    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
      options.modules.toolbar.container = TOOLBAR_CONFIG;
    }

    super(quill, options);
    this.quill.container.classList.add('ql-snow');
  }

  extendToolbar(toolbar) {
    toolbar.container.classList.add('ql-snow');
    this.buildButtons([].slice.call(toolbar.container.querySelectorAll('button')), _icons.default);
    this.buildPickers([].slice.call(toolbar.container.querySelectorAll('select')), _icons.default);
    this.tooltip = new SnowTooltip(this.quill, this.options.bounds);

    if (toolbar.container.querySelector('.ql-link')) {
      this.quill.keyboard.addBinding({
        key: 'K',
        shortKey: true
      }, function (range, context) {
        toolbar.handlers['link'].call(toolbar, !context.format.link);
      });
    }
  }

}

SnowTheme.DEFAULTS = (0, _extend.default)(true, {}, _base.default.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link: function (value) {
          if (value) {
            let range = this.quill.getSelection();
            if (range == null || range.length == 0) return;
            let preview = this.quill.getText(range);

            if (/^\S+@\S+\.\S+$/.test(preview) && preview.indexOf('mailto:') !== 0) {
              preview = 'mailto:' + preview;
            }

            let tooltip = this.quill.theme.tooltip;
            tooltip.edit('link', preview);
          } else {
            this.quill.format('link', false);
          }
        }
      }
    }
  }
});

class SnowTooltip extends _base.BaseTooltip {
  constructor(quill, bounds) {
    super(quill, bounds);
    this.preview = this.root.querySelector('a.ql-preview');
  }

  listen() {
    super.listen();
    this.root.querySelector('a.ql-action').addEventListener('click', event => {
      if (this.root.classList.contains('ql-editing')) {
        this.save();
      } else {
        this.edit('link', this.preview.textContent);
      }

      event.preventDefault();
    });
    this.root.querySelector('a.ql-remove').addEventListener('click', event => {
      if (this.linkRange != null) {
        let range = this.linkRange;
        this.restoreFocus();
        this.quill.formatText(range, 'link', false, _emitter.default.sources.USER);
        delete this.linkRange;
      }

      event.preventDefault();
      this.hide();
    });
    this.quill.on(_emitter.default.events.SELECTION_CHANGE, (range, oldRange, source) => {
      if (range == null) return;

      if (range.length === 0 && source === _emitter.default.sources.USER) {
        let [link, offset] = this.quill.scroll.descendant(_link.default, range.index);

        if (link != null) {
          this.linkRange = new _selection.Range(range.index - offset, link.length());

          let preview = _link.default.formats(link.domNode);

          this.preview.textContent = preview;
          this.preview.setAttribute('href', preview);
          this.show();
          this.position(this.quill.getBounds(this.linkRange));
          return;
        }
      } else {
        delete this.linkRange;
      }

      this.hide();
    });
  }

  show() {
    super.show();
    this.root.removeAttribute('data-mode');
  }

}

SnowTooltip.TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join('');
var _default = SnowTheme;
exports.default = _default;
},{"extend":"../node_modules/extend/index.js","../core/emitter":"../node_modules/quill/core/emitter.js","./base":"../node_modules/quill/themes/base.js","../formats/link":"../node_modules/quill/formats/link.js","../core/selection":"../node_modules/quill/core/selection.js","../ui/icons":"../node_modules/quill/ui/icons.js"}],"../node_modules/quill/quill.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = _interopRequireDefault(require("./core"));

var _align = require("./formats/align");

var _direction = require("./formats/direction");

var _indent = require("./formats/indent");

var _blockquote = _interopRequireDefault(require("./formats/blockquote"));

var _header = _interopRequireDefault(require("./formats/header"));

var _list = _interopRequireWildcard(require("./formats/list"));

var _background = require("./formats/background");

var _color = require("./formats/color");

var _font = require("./formats/font");

var _size = require("./formats/size");

var _bold = _interopRequireDefault(require("./formats/bold"));

var _italic = _interopRequireDefault(require("./formats/italic"));

var _link = _interopRequireDefault(require("./formats/link"));

var _script = _interopRequireDefault(require("./formats/script"));

var _strike = _interopRequireDefault(require("./formats/strike"));

var _underline = _interopRequireDefault(require("./formats/underline"));

var _image = _interopRequireDefault(require("./formats/image"));

var _video = _interopRequireDefault(require("./formats/video"));

var _code = _interopRequireWildcard(require("./formats/code"));

var _formula = _interopRequireDefault(require("./modules/formula"));

var _syntax = _interopRequireDefault(require("./modules/syntax"));

var _toolbar = _interopRequireDefault(require("./modules/toolbar"));

var _icons = _interopRequireDefault(require("./ui/icons"));

var _picker = _interopRequireDefault(require("./ui/picker"));

var _colorPicker = _interopRequireDefault(require("./ui/color-picker"));

var _iconPicker = _interopRequireDefault(require("./ui/icon-picker"));

var _tooltip = _interopRequireDefault(require("./ui/tooltip"));

var _bubble = _interopRequireDefault(require("./themes/bubble"));

var _snow = _interopRequireDefault(require("./themes/snow"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_core.default.register({
  'attributors/attribute/direction': _direction.DirectionAttribute,
  'attributors/class/align': _align.AlignClass,
  'attributors/class/background': _background.BackgroundClass,
  'attributors/class/color': _color.ColorClass,
  'attributors/class/direction': _direction.DirectionClass,
  'attributors/class/font': _font.FontClass,
  'attributors/class/size': _size.SizeClass,
  'attributors/style/align': _align.AlignStyle,
  'attributors/style/background': _background.BackgroundStyle,
  'attributors/style/color': _color.ColorStyle,
  'attributors/style/direction': _direction.DirectionStyle,
  'attributors/style/font': _font.FontStyle,
  'attributors/style/size': _size.SizeStyle
}, true);

_core.default.register({
  'formats/align': _align.AlignClass,
  'formats/direction': _direction.DirectionClass,
  'formats/indent': _indent.IndentClass,
  'formats/background': _background.BackgroundStyle,
  'formats/color': _color.ColorStyle,
  'formats/font': _font.FontClass,
  'formats/size': _size.SizeClass,
  'formats/blockquote': _blockquote.default,
  'formats/code-block': _code.default,
  'formats/header': _header.default,
  'formats/list': _list.default,
  'formats/bold': _bold.default,
  'formats/code': _code.Code,
  'formats/italic': _italic.default,
  'formats/link': _link.default,
  'formats/script': _script.default,
  'formats/strike': _strike.default,
  'formats/underline': _underline.default,
  'formats/image': _image.default,
  'formats/video': _video.default,
  'formats/list/item': _list.ListItem,
  'modules/formula': _formula.default,
  'modules/syntax': _syntax.default,
  'modules/toolbar': _toolbar.default,
  'themes/bubble': _bubble.default,
  'themes/snow': _snow.default,
  'ui/icons': _icons.default,
  'ui/picker': _picker.default,
  'ui/icon-picker': _iconPicker.default,
  'ui/color-picker': _colorPicker.default,
  'ui/tooltip': _tooltip.default
}, true);

var _default = _core.default;
exports.default = _default;
},{"./core":"../node_modules/quill/core.js","./formats/align":"../node_modules/quill/formats/align.js","./formats/direction":"../node_modules/quill/formats/direction.js","./formats/indent":"../node_modules/quill/formats/indent.js","./formats/blockquote":"../node_modules/quill/formats/blockquote.js","./formats/header":"../node_modules/quill/formats/header.js","./formats/list":"../node_modules/quill/formats/list.js","./formats/background":"../node_modules/quill/formats/background.js","./formats/color":"../node_modules/quill/formats/color.js","./formats/font":"../node_modules/quill/formats/font.js","./formats/size":"../node_modules/quill/formats/size.js","./formats/bold":"../node_modules/quill/formats/bold.js","./formats/italic":"../node_modules/quill/formats/italic.js","./formats/link":"../node_modules/quill/formats/link.js","./formats/script":"../node_modules/quill/formats/script.js","./formats/strike":"../node_modules/quill/formats/strike.js","./formats/underline":"../node_modules/quill/formats/underline.js","./formats/image":"../node_modules/quill/formats/image.js","./formats/video":"../node_modules/quill/formats/video.js","./formats/code":"../node_modules/quill/formats/code.js","./modules/formula":"../node_modules/quill/modules/formula.js","./modules/syntax":"../node_modules/quill/modules/syntax.js","./modules/toolbar":"../node_modules/quill/modules/toolbar.js","./ui/icons":"../node_modules/quill/ui/icons.js","./ui/picker":"../node_modules/quill/ui/picker.js","./ui/color-picker":"../node_modules/quill/ui/color-picker.js","./ui/icon-picker":"../node_modules/quill/ui/icon-picker.js","./ui/tooltip":"../node_modules/quill/ui/tooltip.js","./themes/bubble":"../node_modules/quill/themes/bubble.js","./themes/snow":"../node_modules/quill/themes/snow.js"}],"../node_modules/quill-magic-url/dist/index.js":[function(require,module,exports) {
var define;
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(window,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=15)}([function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=r(4),i="function"==typeof Symbol&&"symbol"===n(Symbol("foo")),s=Object.prototype.toString,a=Array.prototype.concat,u=Object.defineProperty,p=u&&function(){var t={};try{for(var e in u(t,"x",{enumerable:!1,value:t}),t)return!1;return t.x===t}catch(t){return!1}}(),c=function(t,e,r,n){var o;(!(e in t)||"function"==typeof(o=n)&&"[object Function]"===s.call(o)&&n())&&(p?u(t,e,{configurable:!0,enumerable:!1,value:r,writable:!0}):t[e]=r)},f=function(t,e){var r=arguments.length>2?arguments[2]:{},n=o(e);i&&(n=a.call(n,Object.getOwnPropertySymbols(e)));for(var s=0;s<n.length;s+=1)c(t,n[s],e[n[s]],r[n[s]])};f.supportsDescriptors=!!p,t.exports=f},function(t,e,r){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=r(16),i=r(3),s=r(12),a=r(30),u=String.fromCharCode(0),p=function(t){Array.isArray(t)?this.ops=t:null!=t&&Array.isArray(t.ops)?this.ops=t.ops:this.ops=[]};p.prototype.insert=function(t,e){var r={};return 0===t.length?this:(r.insert=t,null!=e&&"object"===n(e)&&Object.keys(e).length>0&&(r.attributes=e),this.push(r))},p.prototype.delete=function(t){return t<=0?this:this.push({delete:t})},p.prototype.retain=function(t,e){if(t<=0)return this;var r={retain:t};return null!=e&&"object"===n(e)&&Object.keys(e).length>0&&(r.attributes=e),this.push(r)},p.prototype.push=function(t){var e=this.ops.length,r=this.ops[e-1];if(t=s(!0,{},t),"object"===n(r)){if("number"==typeof t.delete&&"number"==typeof r.delete)return this.ops[e-1]={delete:r.delete+t.delete},this;if("number"==typeof r.delete&&null!=t.insert&&(e-=1,"object"!==n(r=this.ops[e-1])))return this.ops.unshift(t),this;if(i(t.attributes,r.attributes)){if("string"==typeof t.insert&&"string"==typeof r.insert)return this.ops[e-1]={insert:r.insert+t.insert},"object"===n(t.attributes)&&(this.ops[e-1].attributes=t.attributes),this;if("number"==typeof t.retain&&"number"==typeof r.retain)return this.ops[e-1]={retain:r.retain+t.retain},"object"===n(t.attributes)&&(this.ops[e-1].attributes=t.attributes),this}}return e===this.ops.length?this.ops.push(t):this.ops.splice(e,0,t),this},p.prototype.chop=function(){var t=this.ops[this.ops.length-1];return t&&t.retain&&!t.attributes&&this.ops.pop(),this},p.prototype.filter=function(t){return this.ops.filter(t)},p.prototype.forEach=function(t){this.ops.forEach(t)},p.prototype.map=function(t){return this.ops.map(t)},p.prototype.partition=function(t){var e=[],r=[];return this.forEach((function(n){(t(n)?e:r).push(n)})),[e,r]},p.prototype.reduce=function(t,e){return this.ops.reduce(t,e)},p.prototype.changeLength=function(){return this.reduce((function(t,e){return e.insert?t+a.length(e):e.delete?t-e.delete:t}),0)},p.prototype.length=function(){return this.reduce((function(t,e){return t+a.length(e)}),0)},p.prototype.slice=function(t,e){t=t||0,"number"!=typeof e&&(e=1/0);for(var r=[],n=a.iterator(this.ops),o=0;o<e&&n.hasNext();){var i;o<t?i=n.next(t-o):(i=n.next(e-o),r.push(i)),o+=a.length(i)}return new p(r)},p.prototype.compose=function(t){var e=a.iterator(this.ops),r=a.iterator(t.ops),n=[],o=r.peek();if(null!=o&&"number"==typeof o.retain&&null==o.attributes){for(var s=o.retain;"insert"===e.peekType()&&e.peekLength()<=s;)s-=e.peekLength(),n.push(e.next());o.retain-s>0&&r.next(o.retain-s)}for(var u=new p(n);e.hasNext()||r.hasNext();)if("insert"===r.peekType())u.push(r.next());else if("delete"===e.peekType())u.push(e.next());else{var c=Math.min(e.peekLength(),r.peekLength()),f=e.next(c),l=r.next(c);if("number"==typeof l.retain){var y={};"number"==typeof f.retain?y.retain=c:y.insert=f.insert;var h=a.attributes.compose(f.attributes,l.attributes,"number"==typeof f.retain);if(h&&(y.attributes=h),u.push(y),!r.hasNext()&&i(u.ops[u.ops.length-1],y)){var b=new p(e.rest());return u.concat(b).chop()}}else"number"==typeof l.delete&&"number"==typeof f.retain&&u.push(l)}return u.chop()},p.prototype.concat=function(t){var e=new p(this.ops.slice());return t.ops.length>0&&(e.push(t.ops[0]),e.ops=e.ops.concat(t.ops.slice(1))),e},p.prototype.diff=function(t,e){if(this.ops===t.ops)return new p;var r=[this,t].map((function(e){return e.map((function(r){if(null!=r.insert)return"string"==typeof r.insert?r.insert:u;throw new Error("diff() called "+(e===t?"on":"with")+" non-document")})).join("")})),n=new p,s=o(r[0],r[1],e),c=a.iterator(this.ops),f=a.iterator(t.ops);return s.forEach((function(t){for(var e=t[1].length;e>0;){var r=0;switch(t[0]){case o.INSERT:r=Math.min(f.peekLength(),e),n.push(f.next(r));break;case o.DELETE:r=Math.min(e,c.peekLength()),c.next(r),n.delete(r);break;case o.EQUAL:r=Math.min(c.peekLength(),f.peekLength(),e);var s=c.next(r),u=f.next(r);i(s.insert,u.insert)?n.retain(r,a.attributes.diff(s.attributes,u.attributes)):n.push(u).delete(r)}e-=r}})),n.chop()},p.prototype.eachLine=function(t,e){e=e||"\n";for(var r=a.iterator(this.ops),n=new p,o=0;r.hasNext();){if("insert"!==r.peekType())return;var i=r.peek(),s=a.length(i)-r.peekLength(),u="string"==typeof i.insert?i.insert.indexOf(e,s)-s:-1;if(u<0)n.push(r.next());else if(u>0)n.push(r.next(u));else{if(!1===t(n,r.next(1).attributes||{},o))return;o+=1,n=new p}}n.length()>0&&t(n,{},o)},p.prototype.transform=function(t,e){if(e=!!e,"number"==typeof t)return this.transformPosition(t,e);for(var r=a.iterator(this.ops),n=a.iterator(t.ops),o=new p;r.hasNext()||n.hasNext();)if("insert"!==r.peekType()||!e&&"insert"===n.peekType())if("insert"===n.peekType())o.push(n.next());else{var i=Math.min(r.peekLength(),n.peekLength()),s=r.next(i),u=n.next(i);if(s.delete)continue;u.delete?o.push(u):o.retain(i,a.attributes.transform(s.attributes,u.attributes,e))}else o.retain(a.length(r.next()));return o.chop()},p.prototype.transformPosition=function(t,e){e=!!e;for(var r=a.iterator(this.ops),n=0;r.hasNext()&&n<=t;){var o=r.peekLength(),i=r.peekType();r.next(),"delete"!==i?("insert"===i&&(n<t||!e)&&(t+=o),n+=o):t-=Math.min(o,t-n)}return t},t.exports=p},function(t,e,r){"use strict";var n=r(20);t.exports=Function.prototype.bind||n},function(t,e,r){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=r(4),i=r(18),s=r(19),a=r(25),u=r(27),p=r(29),c=Date.prototype.getTime;function f(t,e,r){var h=r||{};return!!(h.strict?s(t,e):t===e)||(!t||!e||"object"!==n(t)&&"object"!==n(e)?h.strict?s(t,e):t==e:function(t,e,r){var s,h;if(n(t)!==n(e))return!1;if(l(t)||l(e))return!1;if(t.prototype!==e.prototype)return!1;if(i(t)!==i(e))return!1;var b=a(t),m=a(e);if(b!==m)return!1;if(b||m)return t.source===e.source&&u(t)===u(e);if(p(t)&&p(e))return c.call(t)===c.call(e);var d=y(t),g=y(e);if(d!==g)return!1;if(d||g){if(t.length!==e.length)return!1;for(s=0;s<t.length;s++)if(t[s]!==e[s])return!1;return!0}if(n(t)!==n(e))return!1;try{var v=o(t),S=o(e)}catch(t){return!1}if(v.length!==S.length)return!1;for(v.sort(),S.sort(),s=v.length-1;s>=0;s--)if(v[s]!=S[s])return!1;for(s=v.length-1;s>=0;s--)if(h=v[s],!f(t[h],e[h],r))return!1;return!0}(t,e,h))}function l(t){return null==t}function y(t){return!(!t||"object"!==n(t)||"number"!=typeof t.length)&&("function"==typeof t.copy&&"function"==typeof t.slice&&!(t.length>0&&"number"!=typeof t[0]))}t.exports=f},function(t,e,r){"use strict";var n=Array.prototype.slice,o=r(5),i=Object.keys,s=i?function(t){return i(t)}:r(17),a=Object.keys;s.shim=function(){Object.keys?function(){var t=Object.keys(arguments);return t&&t.length===arguments.length}(1,2)||(Object.keys=function(t){return o(t)?a(n.call(t)):a(t)}):Object.keys=s;return Object.keys||s},t.exports=s},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=Object.prototype.toString;t.exports=function(t){var e=o.call(t),r="[object Arguments]"===e;return r||(r="[object Array]"!==e&&null!==t&&"object"===n(t)&&"number"==typeof t.length&&t.length>=0&&"[object Function]"===o.call(t.callee)),r}},function(t,e,r){"use strict";var n=r(2),o=r(21)("%Function%"),i=o.apply,s=o.call;t.exports=function(){return n.apply(s,arguments)},t.exports.apply=function(){return n.apply(i,arguments)}},function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"===("undefined"==typeof window?"undefined":r(window))&&(n=window)}t.exports=n},function(t,e,r){"use strict";var n=function(t){return t!=t};t.exports=function(t,e){return 0===t&&0===e?1/t==1/e:t===e||!(!n(t)||!n(e))}},function(t,e,r){"use strict";var n=r(8);t.exports=function(){return"function"==typeof Object.is?Object.is:n}},function(t,e,r){"use strict";var n=Object,o=TypeError;t.exports=function(){if(null!=this&&this!==n(this))throw new o("RegExp.prototype.flags getter called on non-object");var t="";return this.global&&(t+="g"),this.ignoreCase&&(t+="i"),this.multiline&&(t+="m"),this.dotAll&&(t+="s"),this.unicode&&(t+="u"),this.sticky&&(t+="y"),t}},function(t,e,r){"use strict";var n=r(10),o=r(0).supportsDescriptors,i=Object.getOwnPropertyDescriptor,s=TypeError;t.exports=function(){if(!o)throw new s("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");if("gim"===/a/gim.flags){var t=i(RegExp.prototype,"flags");if(t&&"function"==typeof t.get&&"boolean"==typeof/a/.dotAll)return t.get}return n}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=Object.prototype.hasOwnProperty,i=Object.prototype.toString,s=Object.defineProperty,a=Object.getOwnPropertyDescriptor,u=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===i.call(t)},p=function(t){if(!t||"[object Object]"!==i.call(t))return!1;var e,r=o.call(t,"constructor"),n=t.constructor&&t.constructor.prototype&&o.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!r&&!n)return!1;for(e in t);return void 0===e||o.call(t,e)},c=function(t,e){s&&"__proto__"===e.name?s(t,e.name,{enumerable:!0,configurable:!0,value:e.newValue,writable:!0}):t[e.name]=e.newValue},f=function(t,e){if("__proto__"===e){if(!o.call(t,e))return;if(a)return a(t,e).value}return t[e]};t.exports=function t(){var e,r,o,i,s,a,l=arguments[0],y=1,h=arguments.length,b=!1;for("boolean"==typeof l&&(b=l,l=arguments[1]||{},y=2),(null==l||"object"!==n(l)&&"function"!=typeof l)&&(l={});y<h;++y)if(null!=(e=arguments[y]))for(r in e)o=f(l,r),l!==(i=f(e,r))&&(b&&i&&(p(i)||(s=u(i)))?(s?(s=!1,a=o&&u(o)?o:[]):a=o&&p(o)?o:{},c(l,{name:r,newValue:t(b,a,i)})):void 0!==i&&c(l,{name:r,newValue:i}));return l}},function(t,e){(function(e){t.exports=e}).call(this,{})},function(t,e,r){"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||a(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}(t,e)||a(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){if(t){if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var p="undefined"==typeof URL?r(31).URL:URL,c=function(t,e){return e.some((function(e){return e instanceof RegExp?e.test(t):e===t}))},f=function(t,e){if(e=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({defaultProtocol:"http:",normalizeProtocol:!0,forceHttp:!1,forceHttps:!1,stripAuthentication:!0,stripHash:!1,stripWWW:!0,removeQueryParameters:[/^utm_\w+/i],removeTrailingSlash:!0,removeDirectoryIndex:!1,sortQueryParameters:!0},e),Reflect.has(e,"normalizeHttps"))throw new Error("options.normalizeHttps is renamed to options.forceHttp");if(Reflect.has(e,"normalizeHttp"))throw new Error("options.normalizeHttp is renamed to options.forceHttps");if(Reflect.has(e,"stripFragment"))throw new Error("options.stripFragment is renamed to options.stripHash");if(t=t.trim(),/^data:/i.test(t))return function(t,e){var r=e.stripHash,n=t.match(/^data:(.*?),(.*?)(?:#(.*))?$/);if(!n)throw new Error("Invalid URL: ".concat(t));var o=n[1].split(";"),a=n[2],u=r?"":n[3],p=!1;"base64"===o[o.length-1]&&(o.pop(),p=!0);var c=(o.shift()||"").toLowerCase(),f=i(o.map((function(t){var e=s(t.split("=").map((function(t){return t.trim()})),2),r=e[0],n=e[1],o=void 0===n?"":n;return"charset"===r&&"us-ascii"===(o=o.toLowerCase())?"":"".concat(r).concat(o?"=".concat(o):"")})).filter(Boolean));return p&&f.push("base64"),(0!==f.length||c&&"text/plain"!==c)&&f.unshift(c),"data:".concat(f.join(";"),",").concat(p?a.trim():a).concat(u?"#".concat(u):"")}(t,e);var r=t.startsWith("//");!r&&/^\.*\//.test(t)||(t=t.replace(/^(?!(?:\w+:)?\/\/)|^\/\//,e.defaultProtocol));var a=new p(t);if(e.forceHttp&&e.forceHttps)throw new Error("The `forceHttp` and `forceHttps` options cannot be used together");if(e.forceHttp&&"https:"===a.protocol&&(a.protocol="http:"),e.forceHttps&&"http:"===a.protocol&&(a.protocol="https:"),e.stripAuthentication&&(a.username="",a.password=""),e.stripHash&&(a.hash=""),a.pathname&&(a.pathname=a.pathname.replace(/((?!:).|^)\/{2,}/g,(function(t,e){return/^(?!\/)/g.test(e)?"".concat(e,"/"):"/"}))),a.pathname&&(a.pathname=decodeURI(a.pathname)),!0===e.removeDirectoryIndex&&(e.removeDirectoryIndex=[/^index\.[a-z]+$/]),Array.isArray(e.removeDirectoryIndex)&&e.removeDirectoryIndex.length>0){var u=a.pathname.split("/"),f=u[u.length-1];c(f,e.removeDirectoryIndex)&&(u=u.slice(0,u.length-1),a.pathname=u.slice(1).join("/")+"/")}if(a.hostname&&(a.hostname=a.hostname.replace(/\.$/,""),e.stripWWW&&/^www\.([a-z\-\d]{2,63})\.([a-z.]{2,5})$/.test(a.hostname)&&(a.hostname=a.hostname.replace(/^www\./,""))),Array.isArray(e.removeQueryParameters))for(var l=0,y=i(a.searchParams.keys());l<y.length;l++){var h=y[l];c(h,e.removeQueryParameters)&&a.searchParams.delete(h)}return e.sortQueryParameters&&a.searchParams.sort(),e.removeTrailingSlash&&(a.pathname=a.pathname.replace(/\/$/,"")),t=a.toString(),!e.removeTrailingSlash&&"/"!==a.pathname||""!==a.hash||(t=t.replace(/\/$/,"")),r&&!e.normalizeProtocol&&(t=t.replace(/^http:\/\//,"//")),e.stripProtocol&&(t=t.replace(/^(?:https?:)?\/\//,"")),t};t.exports=f,t.exports.default=f},function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return h}));var n=r(1),o=r.n(n),i=r(14),s=r.n(i);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var y={globalRegularExpression:/(https?:\/\/|www\.)[\w-\.]+\.[\w-\.]+(\/([\S]+)?)?/gi,urlRegularExpression:/(https?:\/\/|www\.)[\w-\.]+\.[\w-\.]+(\/([\S]+)?)?/i,globalMailRegularExpression:/([\w-\.]+@[\w-\.]+\.[\w-\.]+)/gi,mailRegularExpression:/([\w-\.]+@[\w-\.]+\.[\w-\.]+)/i,normalizeRegularExpression:/(https?:\/\/|www\.)[\S]+/i,normalizeUrlOptions:{stripWWW:!1}},h=function(){function t(e,r){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.quill=e,r=r||{},this.options=c(c({},y),r),this.urlNormalizer=function(t){return n.normalize(t)},this.mailNormalizer=function(t){return"mailto:".concat(t)},this.registerTypeListener(),this.registerPasteListener()}var e,r,n;return e=t,(r=[{key:"registerPasteListener",value:function(){var t=this;this.quill.clipboard.addMatcher(Node.TEXT_NODE,(function(e,r){if("string"==typeof e.data){var n=t.options.globalRegularExpression,i=t.options.globalMailRegularExpression;n.lastIndex=0,i.lastIndex=0;for(var s=new o.a,a=0,u=n.exec(e.data),p=i.exec(e.data),c=function(t,r,n){var o=e.data.substring(a,t.index);s.insert(o);var i=t[0];return s.insert(i,{link:n(i)}),a=r.lastIndex,r.exec(e.data)};null!==u||null!==p;)if(null===u)p=c(p,i,t.mailNormalizer);else if(null===p)u=c(u,n,t.urlNormalizer);else if(p.index<=u.index){for(;null!==u&&u.index<i.lastIndex;)u=n.exec(e.data);p=c(p,i,t.mailNormalizer)}else{for(;null!==p&&p.index<n.lastIndex;)p=i.exec(e.data);u=c(u,n,t.urlNormalizer)}if(a>0){var f=e.data.substring(a);s.insert(f),r.ops=s.ops}return r}}))}},{key:"registerTypeListener",value:function(){var t=this;this.quill.on("text-change",(function(e){var r=e.ops;if(!(!r||r.length<1||r.length>2)){var n=r[r.length-1];n.insert&&"string"==typeof n.insert&&n.insert.match(/\s/)&&t.checkTextForUrl()}}))}},{key:"checkTextForUrl",value:function(){var t=this.quill.getSelection();if(t){var e=a(this.quill.getLeaf(t.index),1)[0];if(e.text&&"a"!==e.parent.domNode.localName){var r=this.quill.getIndex(e),n=e.text.match(this.options.urlRegularExpression),o=e.text.match(this.options.mailRegularExpression);n?this.textToUrl(r+n.index,n[0]):o&&this.textToMail(r+o.index,o[0])}}}},{key:"textToUrl",value:function(t,e){var r=(new o.a).retain(t).retain(e.length,{link:this.urlNormalizer(e)});this.quill.updateContents(r)}},{key:"textToMail",value:function(t,e){var r=(new o.a).retain(t).retain(e.length,{link:this.mailNormalizer(e)});this.quill.updateContents(r)}},{key:"normalize",value:function(t){if(this.options.normalizeRegularExpression.test(t))try{return s()(t,this.options.normalizeUrlOptions)}catch(t){console.error(t)}return t}}])&&l(e.prototype,r),n&&l(e,n),t}();null!=window&&window.Quill&&window.Quill.register("modules/magicUrl",h)},function(t,e){function r(t,e,s){if(t==e)return t?[[0,t]]:[];(s<0||t.length<s)&&(s=null);var u=o(t,e),p=t.substring(0,u);u=i(t=t.substring(u),e=e.substring(u));var c=t.substring(t.length-u),f=function(t,e){var s;if(!t)return[[1,e]];if(!e)return[[-1,t]];var a=t.length>e.length?t:e,u=t.length>e.length?e:t,p=a.indexOf(u);if(-1!=p)return s=[[1,a.substring(0,p)],[0,u],[1,a.substring(p+u.length)]],t.length>e.length&&(s[0][0]=s[2][0]=-1),s;if(1==u.length)return[[-1,t],[1,e]];var c=function(t,e){var r=t.length>e.length?t:e,n=t.length>e.length?e:t;if(r.length<4||2*n.length<r.length)return null;function s(t,e,r){for(var n,s,a,u,p=t.substring(r,r+Math.floor(t.length/4)),c=-1,f="";-1!=(c=e.indexOf(p,c+1));){var l=o(t.substring(r),e.substring(c)),y=i(t.substring(0,r),e.substring(0,c));f.length<y+l&&(f=e.substring(c-y,c)+e.substring(c,c+l),n=t.substring(0,r-y),s=t.substring(r+l),a=e.substring(0,c-y),u=e.substring(c+l))}return 2*f.length>=t.length?[n,s,a,u,f]:null}var a,u,p,c,f,l=s(r,n,Math.ceil(r.length/4)),y=s(r,n,Math.ceil(r.length/2));if(!l&&!y)return null;a=y?l&&l[4].length>y[4].length?l:y:l;t.length>e.length?(u=a[0],p=a[1],c=a[2],f=a[3]):(c=a[0],f=a[1],u=a[2],p=a[3]);var h=a[4];return[u,p,c,f,h]}(t,e);if(c){var f=c[0],l=c[1],y=c[2],h=c[3],b=c[4],m=r(f,y),d=r(l,h);return m.concat([[0,b]],d)}return function(t,e){for(var r=t.length,o=e.length,i=Math.ceil((r+o)/2),s=i,a=2*i,u=new Array(a),p=new Array(a),c=0;c<a;c++)u[c]=-1,p[c]=-1;u[s+1]=0,p[s+1]=0;for(var f=r-o,l=f%2!=0,y=0,h=0,b=0,m=0,d=0;d<i;d++){for(var g=-d+y;g<=d-h;g+=2){for(var v=s+g,S=(A=g==-d||g!=d&&u[v-1]<u[v+1]?u[v+1]:u[v-1]+1)-g;A<r&&S<o&&t.charAt(A)==e.charAt(S);)A++,S++;if(u[v]=A,A>r)h+=2;else if(S>o)y+=2;else if(l){if((x=s+f-g)>=0&&x<a&&-1!=p[x]){var j=r-p[x];if(A>=j)return n(t,e,A,S)}}}for(var w=-d+b;w<=d-m;w+=2){for(var x=s+w,O=(j=w==-d||w!=d&&p[x-1]<p[x+1]?p[x+1]:p[x-1]+1)-w;j<r&&O<o&&t.charAt(r-j-1)==e.charAt(o-O-1);)j++,O++;if(p[x]=j,j>r)m+=2;else if(O>o)b+=2;else if(!l){if((v=s+f-w)>=0&&v<a&&-1!=u[v]){var A=u[v];S=s+A-v;if(A>=(j=r-j))return n(t,e,A,S)}}}}return[[-1,t],[1,e]]}(t,e)}(t=t.substring(0,t.length-u),e=e.substring(0,e.length-u));return p&&f.unshift([0,p]),c&&f.push([0,c]),function t(e){e.push([0,""]);var r,n=0,s=0,a=0,u="",p="";for(;n<e.length;)switch(e[n][0]){case 1:a++,p+=e[n][1],n++;break;case-1:s++,u+=e[n][1],n++;break;case 0:s+a>1?(0!==s&&0!==a&&(0!==(r=o(p,u))&&(n-s-a>0&&0==e[n-s-a-1][0]?e[n-s-a-1][1]+=p.substring(0,r):(e.splice(0,0,[0,p.substring(0,r)]),n++),p=p.substring(r),u=u.substring(r)),0!==(r=i(p,u))&&(e[n][1]=p.substring(p.length-r)+e[n][1],p=p.substring(0,p.length-r),u=u.substring(0,u.length-r))),0===s?e.splice(n-a,s+a,[1,p]):0===a?e.splice(n-s,s+a,[-1,u]):e.splice(n-s-a,s+a,[-1,u],[1,p]),n=n-s-a+(s?1:0)+(a?1:0)+1):0!==n&&0==e[n-1][0]?(e[n-1][1]+=e[n][1],e.splice(n,1)):n++,a=0,s=0,u="",p=""}""===e[e.length-1][1]&&e.pop();var c=!1;n=1;for(;n<e.length-1;)0==e[n-1][0]&&0==e[n+1][0]&&(e[n][1].substring(e[n][1].length-e[n-1][1].length)==e[n-1][1]?(e[n][1]=e[n-1][1]+e[n][1].substring(0,e[n][1].length-e[n-1][1].length),e[n+1][1]=e[n-1][1]+e[n+1][1],e.splice(n-1,1),c=!0):e[n][1].substring(0,e[n+1][1].length)==e[n+1][1]&&(e[n-1][1]+=e[n+1][1],e[n][1]=e[n][1].substring(e[n+1][1].length)+e[n+1][1],e.splice(n+1,1),c=!0)),n++;c&&t(e)}(f),null!=s&&(f=function(t,e){var r=function(t,e){if(0===e)return[0,t];for(var r=0,n=0;n<t.length;n++){var o=t[n];if(-1===o[0]||0===o[0]){var i=r+o[1].length;if(e===i)return[n+1,t];if(e<i){t=t.slice();var s=e-r,a=[o[0],o[1].slice(0,s)],u=[o[0],o[1].slice(s)];return t.splice(n,1,a,u),[n+1,t]}r=i}}throw new Error("cursor_pos is out of bounds!")}(t,e),n=r[1],o=r[0],i=n[o],s=n[o+1];if(null==i)return t;if(0!==i[0])return t;if(null!=s&&i[1]+s[1]===s[1]+i[1])return n.splice(o,2,s,i),a(n,o,2);if(null!=s&&0===s[1].indexOf(i[1])){n.splice(o,2,[s[0],i[1]],[0,i[1]]);var u=s[1].slice(i[1].length);return u.length>0&&n.splice(o+2,0,[s[0],u]),a(n,o,3)}return t}(f,s)),f=function(t){for(var e=!1,r=function(t){return t.charCodeAt(0)>=56320&&t.charCodeAt(0)<=57343},n=2;n<t.length;n+=1)0===t[n-2][0]&&((o=t[n-2][1]).charCodeAt(o.length-1)>=55296&&o.charCodeAt(o.length-1)<=56319)&&-1===t[n-1][0]&&r(t[n-1][1])&&1===t[n][0]&&r(t[n][1])&&(e=!0,t[n-1][1]=t[n-2][1].slice(-1)+t[n-1][1],t[n][1]=t[n-2][1].slice(-1)+t[n][1],t[n-2][1]=t[n-2][1].slice(0,-1));var o;if(!e)return t;var i=[];for(n=0;n<t.length;n+=1)t[n][1].length>0&&i.push(t[n]);return i}(f)}function n(t,e,n,o){var i=t.substring(0,n),s=e.substring(0,o),a=t.substring(n),u=e.substring(o),p=r(i,s),c=r(a,u);return p.concat(c)}function o(t,e){if(!t||!e||t.charAt(0)!=e.charAt(0))return 0;for(var r=0,n=Math.min(t.length,e.length),o=n,i=0;r<o;)t.substring(i,o)==e.substring(i,o)?i=r=o:n=o,o=Math.floor((n-r)/2+r);return o}function i(t,e){if(!t||!e||t.charAt(t.length-1)!=e.charAt(e.length-1))return 0;for(var r=0,n=Math.min(t.length,e.length),o=n,i=0;r<o;)t.substring(t.length-o,t.length-i)==e.substring(e.length-o,e.length-i)?i=r=o:n=o,o=Math.floor((n-r)/2+r);return o}var s=r;function a(t,e,r){for(var n=e+r-1;n>=0&&n>=e-1;n--)if(n+1<t.length){var o=t[n],i=t[n+1];o[0]===i[1]&&t.splice(n,2,[o[0],o[1]+i[1]])}return t}s.INSERT=1,s.DELETE=-1,s.EQUAL=0,t.exports=s},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o;if(!Object.keys){var i=Object.prototype.hasOwnProperty,s=Object.prototype.toString,a=r(5),u=Object.prototype.propertyIsEnumerable,p=!u.call({toString:null},"toString"),c=u.call((function(){}),"prototype"),f=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],l=function(t){var e=t.constructor;return e&&e.prototype===t},y={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},h=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!y["$"+t]&&i.call(window,t)&&null!==window[t]&&"object"===n(window[t]))try{l(window[t])}catch(t){return!0}}catch(t){return!0}return!1}();o=function(t){var e=null!==t&&"object"===n(t),r="[object Function]"===s.call(t),o=a(t),u=e&&"[object String]"===s.call(t),y=[];if(!e&&!r&&!o)throw new TypeError("Object.keys called on a non-object");var b=c&&r;if(u&&t.length>0&&!i.call(t,0))for(var m=0;m<t.length;++m)y.push(String(m));if(o&&t.length>0)for(var d=0;d<t.length;++d)y.push(String(d));else for(var g in t)b&&"prototype"===g||!i.call(t,g)||y.push(String(g));if(p)for(var v=function(t){if("undefined"==typeof window||!h)return l(t);try{return l(t)}catch(t){return!1}}(t),S=0;S<f.length;++S)v&&"constructor"===f[S]||!i.call(t,f[S])||y.push(f[S]);return y}}t.exports=o},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o="function"==typeof Symbol&&"symbol"===n(Symbol.toStringTag),i=Object.prototype.toString,s=function(t){return!(o&&t&&"object"===n(t)&&Symbol.toStringTag in t)&&"[object Arguments]"===i.call(t)},a=function(t){return!!s(t)||null!==t&&"object"===n(t)&&"number"==typeof t.length&&t.length>=0&&"[object Array]"!==i.call(t)&&"[object Function]"===i.call(t.callee)},u=function(){return s(arguments)}();s.isLegacyArguments=a,t.exports=u?s:a},function(t,e,r){"use strict";var n=r(0),o=r(6),i=r(8),s=r(9),a=r(24),u=o(s(),Object);n(u,{getPolyfill:s,implementation:i,shim:a}),t.exports=u},function(t,e,r){"use strict";var n="Function.prototype.bind called on incompatible ",o=Array.prototype.slice,i=Object.prototype.toString;t.exports=function(t){var e=this;if("function"!=typeof e||"[object Function]"!==i.call(e))throw new TypeError(n+e);for(var r,s=o.call(arguments,1),a=function(){if(this instanceof r){var n=e.apply(this,s.concat(o.call(arguments)));return Object(n)===n?n:this}return e.apply(t,s.concat(o.call(arguments)))},u=Math.max(0,e.length-s.length),p=[],c=0;c<u;c++)p.push("$"+c);if(r=Function("binder","return function ("+p.join(",")+"){ return binder.apply(this,arguments); }")(a),e.prototype){var f=function(){};f.prototype=e.prototype,r.prototype=new f,f.prototype=null}return r}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=TypeError,i=Object.getOwnPropertyDescriptor;if(i)try{i({},"")}catch(t){i=null}var s=function(){throw new o},a=i?function(){try{return s}catch(t){try{return i(arguments,"callee").get}catch(t){return s}}}():s,u=r(22)(),p=Object.getPrototypeOf||function(t){return t.__proto__},c=void 0,f="undefined"==typeof Uint8Array?void 0:p(Uint8Array),l={"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?void 0:ArrayBuffer,"%ArrayBufferPrototype%":"undefined"==typeof ArrayBuffer?void 0:ArrayBuffer.prototype,"%ArrayIteratorPrototype%":u?p([][Symbol.iterator]()):void 0,"%ArrayPrototype%":Array.prototype,"%ArrayProto_entries%":Array.prototype.entries,"%ArrayProto_forEach%":Array.prototype.forEach,"%ArrayProto_keys%":Array.prototype.keys,"%ArrayProto_values%":Array.prototype.values,"%AsyncFromSyncIteratorPrototype%":void 0,"%AsyncFunction%":void 0,"%AsyncFunctionPrototype%":void 0,"%AsyncGenerator%":void 0,"%AsyncGeneratorFunction%":void 0,"%AsyncGeneratorPrototype%":void 0,"%AsyncIteratorPrototype%":c&&u&&Symbol.asyncIterator?c[Symbol.asyncIterator]():void 0,"%Atomics%":"undefined"==typeof Atomics?void 0:Atomics,"%Boolean%":Boolean,"%BooleanPrototype%":Boolean.prototype,"%DataView%":"undefined"==typeof DataView?void 0:DataView,"%DataViewPrototype%":"undefined"==typeof DataView?void 0:DataView.prototype,"%Date%":Date,"%DatePrototype%":Date.prototype,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%ErrorPrototype%":Error.prototype,"%eval%":eval,"%EvalError%":EvalError,"%EvalErrorPrototype%":EvalError.prototype,"%Float32Array%":"undefined"==typeof Float32Array?void 0:Float32Array,"%Float32ArrayPrototype%":"undefined"==typeof Float32Array?void 0:Float32Array.prototype,"%Float64Array%":"undefined"==typeof Float64Array?void 0:Float64Array,"%Float64ArrayPrototype%":"undefined"==typeof Float64Array?void 0:Float64Array.prototype,"%Function%":Function,"%FunctionPrototype%":Function.prototype,"%Generator%":void 0,"%GeneratorFunction%":void 0,"%GeneratorPrototype%":void 0,"%Int8Array%":"undefined"==typeof Int8Array?void 0:Int8Array,"%Int8ArrayPrototype%":"undefined"==typeof Int8Array?void 0:Int8Array.prototype,"%Int16Array%":"undefined"==typeof Int16Array?void 0:Int16Array,"%Int16ArrayPrototype%":"undefined"==typeof Int16Array?void 0:Int8Array.prototype,"%Int32Array%":"undefined"==typeof Int32Array?void 0:Int32Array,"%Int32ArrayPrototype%":"undefined"==typeof Int32Array?void 0:Int32Array.prototype,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":u?p(p([][Symbol.iterator]())):void 0,"%JSON%":"object"===("undefined"==typeof JSON?"undefined":n(JSON))?JSON:void 0,"%JSONParse%":"object"===("undefined"==typeof JSON?"undefined":n(JSON))?JSON.parse:void 0,"%Map%":"undefined"==typeof Map?void 0:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&u?p((new Map)[Symbol.iterator]()):void 0,"%MapPrototype%":"undefined"==typeof Map?void 0:Map.prototype,"%Math%":Math,"%Number%":Number,"%NumberPrototype%":Number.prototype,"%Object%":Object,"%ObjectPrototype%":Object.prototype,"%ObjProto_toString%":Object.prototype.toString,"%ObjProto_valueOf%":Object.prototype.valueOf,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?void 0:Promise,"%PromisePrototype%":"undefined"==typeof Promise?void 0:Promise.prototype,"%PromiseProto_then%":"undefined"==typeof Promise?void 0:Promise.prototype.then,"%Promise_all%":"undefined"==typeof Promise?void 0:Promise.all,"%Promise_reject%":"undefined"==typeof Promise?void 0:Promise.reject,"%Promise_resolve%":"undefined"==typeof Promise?void 0:Promise.resolve,"%Proxy%":"undefined"==typeof Proxy?void 0:Proxy,"%RangeError%":RangeError,"%RangeErrorPrototype%":RangeError.prototype,"%ReferenceError%":ReferenceError,"%ReferenceErrorPrototype%":ReferenceError.prototype,"%Reflect%":"undefined"==typeof Reflect?void 0:Reflect,"%RegExp%":RegExp,"%RegExpPrototype%":RegExp.prototype,"%Set%":"undefined"==typeof Set?void 0:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&u?p((new Set)[Symbol.iterator]()):void 0,"%SetPrototype%":"undefined"==typeof Set?void 0:Set.prototype,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?void 0:SharedArrayBuffer,"%SharedArrayBufferPrototype%":"undefined"==typeof SharedArrayBuffer?void 0:SharedArrayBuffer.prototype,"%String%":String,"%StringIteratorPrototype%":u?p(""[Symbol.iterator]()):void 0,"%StringPrototype%":String.prototype,"%Symbol%":u?Symbol:void 0,"%SymbolPrototype%":u?Symbol.prototype:void 0,"%SyntaxError%":SyntaxError,"%SyntaxErrorPrototype%":SyntaxError.prototype,"%ThrowTypeError%":a,"%TypedArray%":f,"%TypedArrayPrototype%":f?f.prototype:void 0,"%TypeError%":o,"%TypeErrorPrototype%":o.prototype,"%Uint8Array%":"undefined"==typeof Uint8Array?void 0:Uint8Array,"%Uint8ArrayPrototype%":"undefined"==typeof Uint8Array?void 0:Uint8Array.prototype,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?void 0:Uint8ClampedArray,"%Uint8ClampedArrayPrototype%":"undefined"==typeof Uint8ClampedArray?void 0:Uint8ClampedArray.prototype,"%Uint16Array%":"undefined"==typeof Uint16Array?void 0:Uint16Array,"%Uint16ArrayPrototype%":"undefined"==typeof Uint16Array?void 0:Uint16Array.prototype,"%Uint32Array%":"undefined"==typeof Uint32Array?void 0:Uint32Array,"%Uint32ArrayPrototype%":"undefined"==typeof Uint32Array?void 0:Uint32Array.prototype,"%URIError%":URIError,"%URIErrorPrototype%":URIError.prototype,"%WeakMap%":"undefined"==typeof WeakMap?void 0:WeakMap,"%WeakMapPrototype%":"undefined"==typeof WeakMap?void 0:WeakMap.prototype,"%WeakSet%":"undefined"==typeof WeakSet?void 0:WeakSet,"%WeakSetPrototype%":"undefined"==typeof WeakSet?void 0:WeakSet.prototype},y=r(2).call(Function.call,String.prototype.replace),h=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,b=/\\(\\)?/g,m=function(t){var e=[];return y(t,h,(function(t,r,n,o){e[e.length]=n?y(o,b,"$1"):r||t})),e},d=function(t,e){if(!(t in l))throw new SyntaxError("intrinsic "+t+" does not exist!");if(void 0===l[t]&&!e)throw new o("intrinsic "+t+" exists, but is not available. Please file an issue!");return l[t]};t.exports=function(t,e){if("string"!=typeof t||0===t.length)throw new TypeError("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof e)throw new TypeError('"allowMissing" argument must be a boolean');for(var r=m(t),n=d("%"+(r.length>0?r[0]:"")+"%",e),s=1;s<r.length;s+=1)if(null!=n)if(i&&s+1>=r.length){var a=i(n,r[s]);if(!e&&!(r[s]in n))throw new o("base intrinsic for "+t+" exists, but the property is not available.");n=a?a.get||a.value:n[r[s]]}else n=n[r[s]];return n}},function(t,e,r){"use strict";(function(e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=e.Symbol,i=r(23);t.exports=function(){return"function"==typeof o&&("function"==typeof Symbol&&("symbol"===n(o("foo"))&&("symbol"===n(Symbol("bar"))&&i())))}}).call(this,r(7))},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"===n(Symbol.iterator))return!0;var t={},e=Symbol("test"),r=Object(e);if("string"==typeof e)return!1;if("[object Symbol]"!==Object.prototype.toString.call(e))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(e in t[e]=42,t)return!1;if("function"==typeof Object.keys&&0!==Object.keys(t).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;var o=Object.getOwnPropertySymbols(t);if(1!==o.length||o[0]!==e)return!1;if(!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var i=Object.getOwnPropertyDescriptor(t,e);if(42!==i.value||!0!==i.enumerable)return!1}return!0}},function(t,e,r){"use strict";var n=r(9),o=r(0);t.exports=function(){var t=n();return o(Object,{is:t},{is:function(){return Object.is!==t}}),t}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=r(26),i=RegExp.prototype.exec,s=Object.getOwnPropertyDescriptor,a=Object.prototype.toString,u="function"==typeof Symbol&&"symbol"===n(Symbol.toStringTag);t.exports=function(t){if(!t||"object"!==n(t))return!1;if(!u)return"[object RegExp]"===a.call(t);var e=s(t,"lastIndex");return!(!e||!o(e,"value"))&&function(t){try{var e=t.lastIndex;return t.lastIndex=0,i.call(t),!0}catch(t){return!1}finally{t.lastIndex=e}}(t)}},function(t,e,r){"use strict";var n=r(2);t.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},function(t,e,r){"use strict";var n=r(0),o=r(6),i=r(10),s=r(11),a=r(28),u=o(i);n(u,{getPolyfill:s,implementation:i,shim:a}),t.exports=u},function(t,e,r){"use strict";var n=r(0).supportsDescriptors,o=r(11),i=Object.getOwnPropertyDescriptor,s=Object.defineProperty,a=TypeError,u=Object.getPrototypeOf,p=/a/;t.exports=function(){if(!n||!u)throw new a("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");var t=o(),e=u(p),r=i(e,"flags");return r&&r.get===t||s(e,"flags",{configurable:!0,enumerable:!1,get:t}),t}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=Date.prototype.getDay,i=Object.prototype.toString,s="function"==typeof Symbol&&"symbol"===n(Symbol.toStringTag);t.exports=function(t){return"object"===n(t)&&null!==t&&(s?function(t){try{return o.call(t),!0}catch(t){return!1}}(t):"[object Date]"===i.call(t))}},function(t,e,r){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=r(3),i=r(12),s={attributes:{compose:function(t,e,r){"object"!==n(t)&&(t={}),"object"!==n(e)&&(e={});var o=i(!0,{},e);for(var s in r||(o=Object.keys(o).reduce((function(t,e){return null!=o[e]&&(t[e]=o[e]),t}),{})),t)void 0!==t[s]&&void 0===e[s]&&(o[s]=t[s]);return Object.keys(o).length>0?o:void 0},diff:function(t,e){"object"!==n(t)&&(t={}),"object"!==n(e)&&(e={});var r=Object.keys(t).concat(Object.keys(e)).reduce((function(r,n){return o(t[n],e[n])||(r[n]=void 0===e[n]?null:e[n]),r}),{});return Object.keys(r).length>0?r:void 0},transform:function(t,e,r){if("object"!==n(t))return e;if("object"===n(e)){if(!r)return e;var o=Object.keys(e).reduce((function(r,n){return void 0===t[n]&&(r[n]=e[n]),r}),{});return Object.keys(o).length>0?o:void 0}}},iterator:function(t){return new a(t)},length:function(t){return"number"==typeof t.delete?t.delete:"number"==typeof t.retain?t.retain:"string"==typeof t.insert?t.insert.length:1}};function a(t){this.ops=t,this.index=0,this.offset=0}a.prototype.hasNext=function(){return this.peekLength()<1/0},a.prototype.next=function(t){t||(t=1/0);var e=this.ops[this.index];if(e){var r=this.offset,n=s.length(e);if(t>=n-r?(t=n-r,this.index+=1,this.offset=0):this.offset+=t,"number"==typeof e.delete)return{delete:t};var o={};return e.attributes&&(o.attributes=e.attributes),"number"==typeof e.retain?o.retain=t:"string"==typeof e.insert?o.insert=e.insert.substr(r,t):o.insert=e.insert,o}return{retain:1/0}},a.prototype.peek=function(){return this.ops[this.index]},a.prototype.peekLength=function(){return this.ops[this.index]?s.length(this.ops[this.index])-this.offset:1/0},a.prototype.peekType=function(){return this.ops[this.index]?"number"==typeof this.ops[this.index].delete?"delete":"number"==typeof this.ops[this.index].retain?"retain":"insert":"retain"},a.prototype.rest=function(){if(this.hasNext()){if(0===this.offset)return this.ops.slice(this.index);var t=this.offset,e=this.index,r=this.next(),n=this.ops.slice(this.index);return this.offset=t,this.index=e,[r].concat(n)}return[]},t.exports=s},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=r(32),i=r(34);function s(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}e.parse=S,e.resolve=function(t,e){return S(t,!1,!0).resolve(e)},e.resolveObject=function(t,e){return t?S(t,!1,!0).resolveObject(e):e},e.format=function(t){i.isString(t)&&(t=S(t));return t instanceof s?t.format():s.prototype.format.call(t)},e.Url=s;var a=/^([a-z0-9.+-]+:)/i,u=/:[0-9]*$/,p=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,c=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),f=["'"].concat(c),l=["%","/","?",";","#"].concat(f),y=["/","?","#"],h=/^[+a-z0-9A-Z_-]{0,63}$/,b=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,m={javascript:!0,"javascript:":!0},d={javascript:!0,"javascript:":!0},g={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},v=r(35);function S(t,e,r){if(t&&i.isObject(t)&&t instanceof s)return t;var n=new s;return n.parse(t,e,r),n}s.prototype.parse=function(t,e,r){if(!i.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+n(t));var s=t.indexOf("?"),u=-1!==s&&s<t.indexOf("#")?"?":"#",c=t.split(u);c[0]=c[0].replace(/\\/g,"/");var S=t=c.join(u);if(S=S.trim(),!r&&1===t.split("#").length){var j=p.exec(S);if(j)return this.path=S,this.href=S,this.pathname=j[1],j[2]?(this.search=j[2],this.query=e?v.parse(this.search.substr(1)):this.search.substr(1)):e&&(this.search="",this.query={}),this}var w=a.exec(S);if(w){var x=(w=w[0]).toLowerCase();this.protocol=x,S=S.substr(w.length)}if(r||w||S.match(/^\/\/[^@\/]+@[^@\/]+/)){var O="//"===S.substr(0,2);!O||w&&d[w]||(S=S.substr(2),this.slashes=!0)}if(!d[w]&&(O||w&&!g[w])){for(var A,P,E=-1,I=0;I<y.length;I++){-1!==(k=S.indexOf(y[I]))&&(-1===E||k<E)&&(E=k)}-1!==(P=-1===E?S.lastIndexOf("@"):S.lastIndexOf("@",E))&&(A=S.slice(0,P),S=S.slice(P+1),this.auth=decodeURIComponent(A)),E=-1;for(I=0;I<l.length;I++){var k;-1!==(k=S.indexOf(l[I]))&&(-1===E||k<E)&&(E=k)}-1===E&&(E=S.length),this.host=S.slice(0,E),S=S.slice(E),this.parseHost(),this.hostname=this.hostname||"";var U="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!U)for(var R=this.hostname.split(/\./),T=(I=0,R.length);I<T;I++){var C=R[I];if(C&&!C.match(h)){for(var N="",F=0,M=C.length;F<M;F++)C.charCodeAt(F)>127?N+="x":N+=C[F];if(!N.match(h)){var D=R.slice(0,I),$=R.slice(I+1),L=C.match(b);L&&(D.push(L[1]),$.unshift(L[2])),$.length&&(S="/"+$.join(".")+S),this.hostname=D.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),U||(this.hostname=o.toASCII(this.hostname));var _=this.port?":"+this.port:"",q=this.hostname||"";this.host=q+_,this.href+=this.host,U&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==S[0]&&(S="/"+S))}if(!m[x])for(I=0,T=f.length;I<T;I++){var z=f[I];if(-1!==S.indexOf(z)){var W=encodeURIComponent(z);W===z&&(W=escape(z)),S=S.split(z).join(W)}}var H=S.indexOf("#");-1!==H&&(this.hash=S.substr(H),S=S.slice(0,H));var B=S.indexOf("?");if(-1!==B?(this.search=S.substr(B),this.query=S.substr(B+1),e&&(this.query=v.parse(this.query)),S=S.slice(0,B)):e&&(this.search="",this.query={}),S&&(this.pathname=S),g[x]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){_=this.pathname||"";var V=this.search||"";this.path=_+V}return this.href=this.format(),this},s.prototype.format=function(){var t=this.auth||"";t&&(t=(t=encodeURIComponent(t)).replace(/%3A/i,":"),t+="@");var e=this.protocol||"",r=this.pathname||"",n=this.hash||"",o=!1,s="";this.host?o=t+this.host:this.hostname&&(o=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(o+=":"+this.port)),this.query&&i.isObject(this.query)&&Object.keys(this.query).length&&(s=v.stringify(this.query));var a=this.search||s&&"?"+s||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||g[e])&&!1!==o?(o="//"+(o||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):o||(o=""),n&&"#"!==n.charAt(0)&&(n="#"+n),a&&"?"!==a.charAt(0)&&(a="?"+a),e+o+(r=r.replace(/[?#]/g,(function(t){return encodeURIComponent(t)})))+(a=a.replace("#","%23"))+n},s.prototype.resolve=function(t){return this.resolveObject(S(t,!1,!0)).format()},s.prototype.resolveObject=function(t){if(i.isString(t)){var e=new s;e.parse(t,!1,!0),t=e}for(var r=new s,n=Object.keys(this),o=0;o<n.length;o++){var a=n[o];r[a]=this[a]}if(r.hash=t.hash,""===t.href)return r.href=r.format(),r;if(t.slashes&&!t.protocol){for(var u=Object.keys(t),p=0;p<u.length;p++){var c=u[p];"protocol"!==c&&(r[c]=t[c])}return g[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(t.protocol&&t.protocol!==r.protocol){if(!g[t.protocol]){for(var f=Object.keys(t),l=0;l<f.length;l++){var y=f[l];r[y]=t[y]}return r.href=r.format(),r}if(r.protocol=t.protocol,t.host||d[t.protocol])r.pathname=t.pathname;else{for(var h=(t.pathname||"").split("/");h.length&&!(t.host=h.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==h[0]&&h.unshift(""),h.length<2&&h.unshift(""),r.pathname=h.join("/")}if(r.search=t.search,r.query=t.query,r.host=t.host||"",r.auth=t.auth,r.hostname=t.hostname||t.host,r.port=t.port,r.pathname||r.search){var b=r.pathname||"",m=r.search||"";r.path=b+m}return r.slashes=r.slashes||t.slashes,r.href=r.format(),r}var v=r.pathname&&"/"===r.pathname.charAt(0),S=t.host||t.pathname&&"/"===t.pathname.charAt(0),j=S||v||r.host&&t.pathname,w=j,x=r.pathname&&r.pathname.split("/")||[],O=(h=t.pathname&&t.pathname.split("/")||[],r.protocol&&!g[r.protocol]);if(O&&(r.hostname="",r.port=null,r.host&&(""===x[0]?x[0]=r.host:x.unshift(r.host)),r.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===h[0]?h[0]=t.host:h.unshift(t.host)),t.host=null),j=j&&(""===h[0]||""===x[0])),S)r.host=t.host||""===t.host?t.host:r.host,r.hostname=t.hostname||""===t.hostname?t.hostname:r.hostname,r.search=t.search,r.query=t.query,x=h;else if(h.length)x||(x=[]),x.pop(),x=x.concat(h),r.search=t.search,r.query=t.query;else if(!i.isNullOrUndefined(t.search)){if(O)r.hostname=r.host=x.shift(),(k=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=k.shift(),r.host=r.hostname=k.shift());return r.search=t.search,r.query=t.query,i.isNull(r.pathname)&&i.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!x.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var A=x.slice(-1)[0],P=(r.host||t.host||x.length>1)&&("."===A||".."===A)||""===A,E=0,I=x.length;I>=0;I--)"."===(A=x[I])?x.splice(I,1):".."===A?(x.splice(I,1),E++):E&&(x.splice(I,1),E--);if(!j&&!w)for(;E--;E)x.unshift("..");!j||""===x[0]||x[0]&&"/"===x[0].charAt(0)||x.unshift(""),P&&"/"!==x.join("/").substr(-1)&&x.push("");var k,U=""===x[0]||x[0]&&"/"===x[0].charAt(0);O&&(r.hostname=r.host=U?"":x.length?x.shift():"",(k=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=k.shift(),r.host=r.hostname=k.shift()));return(j=j||r.host&&x.length)&&!U&&x.unshift(""),x.length?r.pathname=x.join("/"):(r.pathname=null,r.path=null),i.isNull(r.pathname)&&i.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=t.auth||r.auth,r.slashes=r.slashes||t.slashes,r.href=r.format(),r},s.prototype.parseHost=function(){var t=this.host,e=u.exec(t);e&&(":"!==(e=e[0])&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},function(t,e,r){(function(t,n){var o;function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*! https://mths.be/punycode v1.4.1 by @mathias */!function(s){var a="object"==i(e)&&e&&!e.nodeType&&e,u="object"==i(t)&&t&&!t.nodeType&&t,p="object"==(void 0===n?"undefined":i(n))&&n;p.global!==p&&p.window!==p&&p.self!==p||(s=p);var c,f,l=2147483647,y=/^xn--/,h=/[^\x20-\x7E]/,b=/[\x2E\u3002\uFF0E\uFF61]/g,m={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},d=Math.floor,g=String.fromCharCode;function v(t){throw new RangeError(m[t])}function S(t,e){for(var r=t.length,n=[];r--;)n[r]=e(t[r]);return n}function j(t,e){var r=t.split("@"),n="";return r.length>1&&(n=r[0]+"@",t=r[1]),n+S((t=t.replace(b,".")).split("."),e).join(".")}function w(t){for(var e,r,n=[],o=0,i=t.length;o<i;)(e=t.charCodeAt(o++))>=55296&&e<=56319&&o<i?56320==(64512&(r=t.charCodeAt(o++)))?n.push(((1023&e)<<10)+(1023&r)+65536):(n.push(e),o--):n.push(e);return n}function x(t){return S(t,(function(t){var e="";return t>65535&&(e+=g((t-=65536)>>>10&1023|55296),t=56320|1023&t),e+=g(t)})).join("")}function O(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function A(t,e,r){var n=0;for(t=r?d(t/700):t>>1,t+=d(t/e);t>455;n+=36)t=d(t/35);return d(n+36*t/(t+38))}function P(t){var e,r,n,o,i,s,a,u,p,c,f,y=[],h=t.length,b=0,m=128,g=72;for((r=t.lastIndexOf("-"))<0&&(r=0),n=0;n<r;++n)t.charCodeAt(n)>=128&&v("not-basic"),y.push(t.charCodeAt(n));for(o=r>0?r+1:0;o<h;){for(i=b,s=1,a=36;o>=h&&v("invalid-input"),((u=(f=t.charCodeAt(o++))-48<10?f-22:f-65<26?f-65:f-97<26?f-97:36)>=36||u>d((l-b)/s))&&v("overflow"),b+=u*s,!(u<(p=a<=g?1:a>=g+26?26:a-g));a+=36)s>d(l/(c=36-p))&&v("overflow"),s*=c;g=A(b-i,e=y.length+1,0==i),d(b/e)>l-m&&v("overflow"),m+=d(b/e),b%=e,y.splice(b++,0,m)}return x(y)}function E(t){var e,r,n,o,i,s,a,u,p,c,f,y,h,b,m,S=[];for(y=(t=w(t)).length,e=128,r=0,i=72,s=0;s<y;++s)(f=t[s])<128&&S.push(g(f));for(n=o=S.length,o&&S.push("-");n<y;){for(a=l,s=0;s<y;++s)(f=t[s])>=e&&f<a&&(a=f);for(a-e>d((l-r)/(h=n+1))&&v("overflow"),r+=(a-e)*h,e=a,s=0;s<y;++s)if((f=t[s])<e&&++r>l&&v("overflow"),f==e){for(u=r,p=36;!(u<(c=p<=i?1:p>=i+26?26:p-i));p+=36)m=u-c,b=36-c,S.push(g(O(c+m%b,0))),u=d(m/b);S.push(g(O(u,0))),i=A(r,h,n==o),r=0,++n}++r,++e}return S.join("")}if(c={version:"1.4.1",ucs2:{decode:w,encode:x},decode:P,encode:E,toASCII:function(t){return j(t,(function(t){return h.test(t)?"xn--"+E(t):t}))},toUnicode:function(t){return j(t,(function(t){return y.test(t)?P(t.slice(4).toLowerCase()):t}))}},"object"==i(r(13))&&r(13))void 0===(o=function(){return c}.call(e,r,e,t))||(t.exports=o);else if(a&&u)if(t.exports==a)u.exports=c;else for(f in c)c.hasOwnProperty(f)&&(a[f]=c[f]);else s.punycode=c}(this)}).call(this,r(33)(t),r(7))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports={isString:function(t){return"string"==typeof t},isObject:function(t){return"object"===n(t)&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}},function(t,e,r){"use strict";e.decode=e.parse=r(36),e.encode=e.stringify=r(37)},function(t,e,r){"use strict";function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,r,i){e=e||"&",r=r||"=";var s={};if("string"!=typeof t||0===t.length)return s;var a=/\+/g;t=t.split(e);var u=1e3;i&&"number"==typeof i.maxKeys&&(u=i.maxKeys);var p=t.length;u>0&&p>u&&(p=u);for(var c=0;c<p;++c){var f,l,y,h,b=t[c].replace(a,"%20"),m=b.indexOf(r);m>=0?(f=b.substr(0,m),l=b.substr(m+1)):(f=b,l=""),y=decodeURIComponent(f),h=decodeURIComponent(l),n(s,y)?o(s[y])?s[y].push(h):s[y]=[s[y],h]:s[y]=h}return s};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=function(t){switch(n(t)){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,r,u){return e=e||"&",r=r||"=",null===t&&(t=void 0),"object"===n(t)?s(a(t),(function(n){var a=encodeURIComponent(o(n))+r;return i(t[n])?s(t[n],(function(t){return a+encodeURIComponent(o(t))})).join(e):a+encodeURIComponent(o(t[n]))})).join(e):u?encodeURIComponent(o(u))+r+encodeURIComponent(o(t)):""};var i=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function s(t,e){if(t.map)return t.map(e);for(var r=[],n=0;n<t.length;n++)r.push(e(t[n],n));return r}var a=Object.keys||function(t){var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.push(r);return e}}])}));
},{}],"lib/quill.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _quill = _interopRequireDefault(require("quill/quill"));

var _quillMagicUrl = _interopRequireDefault(require("quill-magic-url"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Quill from 'quill/core'
// import { AlignClass, AlignStyle } from 'quill/formats/align'
// import { DirectionAttribute, DirectionClass, DirectionStyle } from 'quill/formats/direction'
// import Indent from 'quill/formats/indent'
// import Blockquote from 'quill/formats/blockquote'
// import Header from 'quill/formats/header'
// import List, { ListItem } from 'quill/formats/list'
// import { BackgroundClass, BackgroundStyle } from 'quill/formats/background'
// import { ColorClass, ColorStyle } from 'quill/formats/color'
// import { FontClass, FontStyle } from 'quill/formats/font'
// import { SizeClass, SizeStyle } from 'quill/formats/size'
// import Bold from 'quill/formats/bold'
// import Italic from 'quill/formats/italic'
// import Link from 'quill/formats/link'
// import Script from 'quill/formats/script'
// import Strike from 'quill/formats/strike'
// import Underline from 'quill/formats/underline'
// import Image from 'quill/formats/image'
// import Video from 'quill/formats/video'
// import CodeBlock, { Code as InlineCode } from 'quill/formats/code'
// import Syntax from 'quill/modules/syntax'
// import Toolbar from 'quill/modules/toolbar'
// import Icons from 'quill/ui/icons'
// import Picker from 'quill/ui/picker'
// import ColorPicker from 'quill/ui/color-picker'
// import IconPicker from 'quill/ui/icon-picker'
// import Tooltip from 'quill/ui/tooltip'
// import SnowTheme from 'quill/themes/snow'
// import MagicUrl from 'quill-magic-url'
// Quill.register(
//   {
//     'attributors/attribute/direction': DirectionAttribute,
//     'attributors/class/align': AlignClass,
//     'attributors/class/background': BackgroundClass,
//     'attributors/class/color': ColorClass,
//     'attributors/class/direction': DirectionClass,
//     'attributors/class/font': FontClass,
//     'attributors/class/size': SizeClass,
//     'attributors/style/align': AlignStyle,
//     'attributors/style/background': BackgroundStyle,
//     'attributors/style/color': ColorStyle,
//     'attributors/style/direction': DirectionStyle,
//     'attributors/style/font': FontStyle,
//     'attributors/style/size': SizeStyle,
//   },
//   true,
// )
// Quill.register(
//   {
//     'formats/align': AlignClass,
//     // 'formats/direction': DirectionClass,
//     // 'formats/indent': Indent,
//     // 'formats/background': BackgroundStyle,
//     // 'formats/color': ColorStyle,
//     // 'formats/font': FontClass,
//     // 'formats/size': SizeClass,
//     // 'formats/blockquote': Blockquote,
//     // 'formats/code-block': CodeBlock,
//     'formats/header': Header,
//     'formats/list': List,
//     'formats/list-item': ListItem,
//     'formats/bold': Bold,
//     // 'formats/code': InlineCode,
//     'formats/italic': Italic,
//     'formats/link': Link,
//     // 'formats/script': Script,
//     'formats/strike': Strike,
//     'formats/underline': Underline,
//     // 'formats/image': Image,
//     // 'formats/video': Video,
//     // 'modules/syntax': Syntax,
//     'modules/toolbar': Toolbar,
//     'themes/snow': SnowTheme,
//     // 'ui/icons': Icons,
//     // 'ui/picker': Picker,
//     // 'ui/icon-picker': IconPicker,
//     // 'ui/color-picker': ColorPicker,
//     // 'ui/tooltip': Tooltip,
//     'modules/magicUrl': MagicUrl,
//   },
//   true,
// );
_quill.default.register('modules/magicUrl', _quillMagicUrl.default);

var _default = _quill.default;
exports.default = _default;
},{"quill/quill":"../node_modules/quill/quill.js","quill-magic-url":"../node_modules/quill-magic-url/dist/index.js"}]},{},["lib/quill.js"], null)
//# sourceMappingURL=/lib/quill.js.map