'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = ":root{--tutorial-primary:blue;--tutorial-grayout:#d3d3d3;--tutorial-light:#fff}.foreground{position:relative;z-index:3}";
styleInject(css_248z$2);

var css_248z$1 = ".TutorialButton{background:var(--tutorial-light);border:2px solid var(--tutorial-primary);border-radius:.5rem 0;color:var(--tutorial-primary);cursor:pointer;display:inline-block;font-size:1rem;font-weight:700;line-height:1rem;padding:.5rem 1.5rem;text-align:center;text-decoration:none!important;text-transform:uppercase;transition:.4s cubic-bezier(.77,0,.175,1)}.TutorialButton:hover{background:var(--tutorial-primary);color:var(--tutorial-light);opacity:.5}.TutorialButton.small{font-size:.75rem;padding:.25rem .75rem}.TutorialButton.disabled{background-color:var(--tutorial-light);border:2px solid var(--tutorial-grayout);color:var(--tutorial-grayout);opacity:1;pointer-events:none}.TutorialButton.full{background:var(--tutorial-primary);color:var(--tutorial-light)}.TutorialButton.full:hover{opacity:.5}";
styleInject(css_248z$1);

var css_248z = ".TutorialOverlay{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);height:100%;left:0;position:absolute;right:0;top:0;z-index:2}.HighlightedElement{border:3px solid red;box-sizing:content-box;pointer-events:none;position:absolute;z-index:3}.InfoBox{background-color:#fff;border-radius:6px;box-shadow:1px 1px 5px 0 var(--tutorial-primary);min-height:120px;position:absolute;top:100px;width:clamp(320px,50%,400px);z-index:10}@media screen and (max-width:500px){.InfoBox{left:50%!important;transform:translate(-50%)}}.InfoBox .InfoTitle{align-items:center;display:flex;justify-content:flex-start;padding:1rem calc(56px + 2rem) 0 1rem;text-overflow:ellipsis}.InfoBox .InfoTitle span{color:var(--tutorial-primary);font-size:1.2rem;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.InfoBox .InfoTitle Button{position:absolute;right:1rem}.InfoBox .InfoContent{-ms-overflow-style:none;height:calc(125px - 3rem);margin-top:5px;overflow-y:scroll;padding:1rem;scrollbar-width:none}.InfoBox .InfoContent::-webkit-scrollbar{display:none}.InfoBox .InfoContent p{margin:0}.InfoBox .InfoSteps{padding-left:1rem}.InfoBox .BoxFooter{align-items:center;bottom:1rem;display:flex;height:28px;justify-content:space-between;position:absolute;width:100%}.InfoBox .BoxFooter .ButtonWrapper{padding-right:1rem}.InfoBox .BoxFooter .ButtonWrapper Button:first-child{margin-right:1rem}";
styleInject(css_248z);

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function (method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/******************************************************************************
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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

var Button = function Button(_ref) {
  var children = _ref.children,
    addStyles = _ref.addStyles,
    onClick = _ref.onClick;
  var addClasses = (addStyles === null || addStyles === void 0 ? void 0 : addStyles.length) ? " " + addStyles.join(" ") : "";
  return jsxRuntime.jsx("button", Object.assign({
    className: "TutorialButton" + addClasses,
    onClick: onClick ? onClick : function () {}
  }, {
    children: children
  }));
};

var TutorialOverlay = function TutorialOverlay(_ref) {
  var config = _ref.config,
    closeCallback = _ref.closeCallback;
  var _a, _b;
  var _useState = react.useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    rectStyles = _useState2[0],
    setRectStyles = _useState2[1];
  var _useState3 = react.useState(1),
    _useState4 = _slicedToArray(_useState3, 2),
    step = _useState4[0],
    setStep = _useState4[1];
  var stepRef = react.useRef(1);
  stepRef.current = step;
  var currentElements = react.useRef([]);
  var infoBoxElement = react.useRef(null);
  var overlayElement = react.useRef(null);
  var timeout = react.useRef();
  // Apply selected info box theme to global CSS variable
  setColor(config.infoBoxThemeColor);
  function resetHighlightedElements() {
    console.log("Remove highlighted elements: ", currentElements.current);
    currentElements.current.forEach(function (item) {
      item.element.classList.remove("foreground");
      item.element.style.backgroundColor = item.initialColor;
      console.log("set style", window.getComputedStyle(item.element).backgroundColor);
    });
    currentElements.current = [];
  }
  /**
   * Find elements in the document with specified IDs and apply config style to them.
   * It should be called after each step change.
   * @returns
   */
  function setHighlightedElementPositions() {
    var _a;
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var stepConfig, elementIds, positions, elements, alreadyCalculated;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            console.log("Calculate positions. Step:", stepRef.current);
            stepConfig = config.steps.get(stepRef.current);
            elementIds = stepConfig === null || stepConfig === void 0 ? void 0 : stepConfig.highlightIds;
            if (elementIds) {
              _context.next = 6;
              break;
            }
            console.warn("Missing element ids for step ".concat(stepRef.current));
            return _context.abrupt("return");
          case 6:
            positions = [];
            elements = []; // Check if elements for current step are already set.
            alreadyCalculated = elementIds[0] === ((_a = currentElements.current[0]) === null || _a === void 0 ? void 0 : _a.id);
            if (!alreadyCalculated) {
              //If new elements are found, previous settings should be reset.
              resetHighlightedElements();
            }
            elementIds.forEach(function (id, index) {
              var _a;
              var element = document.getElementById(id);
              if (!element) {
                console.error("Highlighted element with id ".concat(id, " was not found."));
                return;
              }
              if (!alreadyCalculated) {
                var initialBgColor = window.getComputedStyle(element).backgroundColor;
                var backgroundColor = getInheritedBackgroundColor(element);
                // We need initial color when reseting elements. When color is transparent we set it to white
                // for better visibility but after reset we need to revert values.
                elements.push({
                  id: id,
                  element: element,
                  initialColor: initialBgColor
                });
                element.classList.add("foreground");
                element.style.backgroundColor = backgroundColor;
              }
              var selectedElPosition = element.getBoundingClientRect();
              var borderWidth = (_a = config.highlightBoxBorderWidth) !== null && _a !== void 0 ? _a : 3;
              if (selectedElPosition) {
                var position = {
                  id: id,
                  left: selectedElPosition.left + window.pageXOffset - borderWidth,
                  top: selectedElPosition.top + window.pageYOffset - borderWidth,
                  width: selectedElPosition.width,
                  height: selectedElPosition.height,
                  borderColor: config.highlightBoxBorderColor,
                  borderWidth: borderWidth,
                  borderRadius: config.highlightBoxBorderRadius
                };
                positions.push(position);
                //Use position of first element to calculate infoBox
                if (index === 0) {
                  calculateInfoBoxPosition(position, stepConfig.infoBoxAlignment);
                }
              }
            });
            if (currentElements.current.length === 0 || !alreadyCalculated) {
              // Set elements to state if current value is empty or elements are not already assigned.
              // The elements should not be assigned twice, because background colors are altered first time and
              // we dont know how to revert them if initial color is not set correctly.
              currentElements.current = elements;
            }
            setRectStyles(positions);
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
  }
  /**
   * Calculate info box position. It is displayed above or under the element.
   * It depend how much space is left above the element.
   * The box can be aligned center or left baseline of the element.
   * Config also provides box height and vertical margin from the element.
   * @param position Calculated position of first element in the step array.
   * @param alignment Selected alignement of the box.
   */
  function calculateInfoBoxPosition(position, alignment) {
    var _a, _b;
    var boxHeight = (_a = config.infoBoxHeight) !== null && _a !== void 0 ? _a : 200;
    var margin = (_b = config.infoBoxMargin) !== null && _b !== void 0 ? _b : 30;
    //calculate top
    var newBoxTop = position.top - boxHeight - margin;
    //Check if there is enough space.
    if (newBoxTop < 10) {
      //Set info box under the element.
      newBoxTop = position.top + position.height + margin;
    }
    var el = infoBoxElement.current;
    if (el) {
      var newBoxLeft;
      // Calculate left position based on config settings.
      // Config can be set to left or center, center being default.
      if (alignment === "left") {
        newBoxLeft = position.left < 10 ? 10 : position.left;
      } else {
        newBoxLeft = position.left + position.width / 2;
        var halfOfBoxWidth = el.clientWidth / 2;
        newBoxLeft = newBoxLeft - halfOfBoxWidth < 10 ? 10 + halfOfBoxWidth : newBoxLeft;
      }
      el.style.height = boxHeight + "px";
      el.style.top = newBoxTop + "px";
      el.style.left = newBoxLeft + "px";
      el.style.transform = alignment !== "left" ? "translate(-50%)" : "";
      //Get info content element
      var infoContentEl = el.children[0].lastChild;
      if (infoContentEl) {
        // Set infoContent's height to prevent overflow and make it scrollable if
        // text does not fit in.
        infoContentEl.style.height = "calc(".concat(boxHeight, "px - (3rem + 75px))");
      }
      el.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    }
  }
  /**
   * Advance to next step.
   */
  var nextStep = function nextStep() {
    if (step === config.steps.size) {
      console.warn("It is the last step.");
      return;
    }
    setStep(function (oldStep) {
      return oldStep + 1;
    });
  };
  /**
   * Returns to previous step.
   */
  var previousStep = function previousStep() {
    if (step === 1) {
      console.warn("It is already first step.");
      return;
    }
    setStep(function (oldStep) {
      return oldStep - 1;
    });
  };
  /**
   *  Reset step value and fire closeCallback.
   */
  var skip = function skip() {
    setStep(1);
    closeCallback();
  };
  react.useEffect(function () {
    //Every time step value changes it needs to recalculate positions for all elements in new step.
    setHighlightedElementPositions();
  }, [step]);
  react.useEffect(function () {
    // Disable scrolling if it is selected in config.
    if (config.scrollLock) {
      document.body.style.overflow = "hidden";
    }
    if (config.darkerBackground) {
      if (!overlayElement.current) {
        return;
      }
      overlayElement.current.style.backdropFilter = "blur(2px) brightness(0.9)";
    }
    // Initial calculation. Add some timeout to make sure all elements are already loaded.
    setTimeout(function () {
      setHighlightedElementPositions();
    }, 100);
    window.addEventListener("resize", handleResize);
    function handleResize() {
      // Emulating debounce functionality. Take event only after 250ms.
      clearTimeout(timeout.current);
      timeout.current = window.setTimeout(function () {
        console.log("Resized finished. step", stepRef.current);
        setHighlightedElementPositions();
      }, 250);
    }
    return function () {
      document.body.style.overflow = "visible";
      resetHighlightedElements();
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsx("div", {
      className: "TutorialOverlay",
      ref: overlayElement
    }), jsxRuntime.jsxs("div", Object.assign({
      className: "InfoBox",
      ref: infoBoxElement,
      style: {
        boxShadow: config.infoBoxShadow ? "1px 1px 5px -1px var(--tutorial-primary)" : "none"
      }
    }, {
      children: [jsxRuntime.jsxs("div", {
        children: [jsxRuntime.jsxs("div", Object.assign({
          className: "InfoTitle"
        }, {
          children: [jsxRuntime.jsx("span", Object.assign({
            style: {
              color: config.infoBoxThemeColor || ""
            }
          }, {
            children: (_a = config.steps.get(step)) === null || _a === void 0 ? void 0 : _a.title
          })), jsxRuntime.jsx(Button, Object.assign({
            addStyles: ["small", "full"],
            onClick: skip
          }, {
            children: "Skip"
          }))]
        })), jsxRuntime.jsx("div", Object.assign({
          className: "InfoContent"
        }, {
          children: jsxRuntime.jsx("p", {
            children: (_b = config.steps.get(step)) === null || _b === void 0 ? void 0 : _b.info
          })
        }))]
      }), jsxRuntime.jsxs("div", Object.assign({
        className: "BoxFooter"
      }, {
        children: [jsxRuntime.jsx("div", Object.assign({
          className: "InfoSteps"
        }, {
          children: jsxRuntime.jsx("span", {
            children: "".concat(step, " / ").concat(config.steps.size)
          })
        })), jsxRuntime.jsxs("div", Object.assign({
          className: "ButtonWrapper"
        }, {
          children: [jsxRuntime.jsx(Button, Object.assign({
            addStyles: ["small", step === 1 ? "disabled" : ""],
            onClick: previousStep
          }, {
            children: "Previous"
          })), jsxRuntime.jsx(Button, Object.assign({
            addStyles: ["small"],
            onClick: step !== config.steps.size ? nextStep : skip
          }, {
            children: step !== config.steps.size ? "Next" : "Finish"
          }))]
        }))]
      }))]
    })), rectStyles.map(function (style) {
      return jsxRuntime.jsx("div", {
        style: style,
        className: "HighlightedElement"
      }, style.id);
    })]
  });
};
/**
 * Sets a color to a css variable.
 * @param {string} newColor Color value.
 * @param {string} variable CSS variable name
 */
function setColor(newColor) {
  var variable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "--tutorial-primary";
  if (!newColor) {
    console.warn("The color to be set to a CSS variable is not defined. Default value is used.");
    return;
  }
  document.documentElement.style.setProperty(variable, newColor);
}
/**
 * Return rgba color value for computed background color of the element.
 * It recursively search for computed value of the parents.
 * It does not return value if the parent's bg color is gradient.
 * Source: https://stackoverflow.com/questions/46336002/how-to-get-computed-background-color-style-inherited-from-parent-element
 * @param {HTMLElement} el
 * @returns {string}
 */
function getInheritedBackgroundColor(el) {
  // get default style for current browser
  var defaultStyle = getDefaultBackground(); // typically "rgba(0, 0, 0, 0)"
  // get computed color for el
  var backgroundColor = window.getComputedStyle(el).backgroundColor;
  var backgroundImage = window.getComputedStyle(el).backgroundImage;
  console.log("backgound image", backgroundImage);
  if (backgroundImage !== "none") {
    //If parent background contains image or gradient it returns transparent.
    return "rgba(0, 0, 0, 0)";
  }
  // if we got a real value, return it. It dismiss values with alpha value.
  if (backgroundColor != defaultStyle && !backgroundColor.includes("rgba")) return backgroundColor;
  // if we've reached the top parent el without getting an explicit color, return default
  if (!el.parentElement) return "white";
  // otherwise, recurse and try again on parent element
  return getInheritedBackgroundColor(el.parentElement);
}
function getDefaultBackground() {
  // have to add to the document in order to use getComputedStyle
  var div = document.createElement("div");
  document.head.appendChild(div);
  var bg = window.getComputedStyle(div).backgroundColor;
  document.head.removeChild(div);
  return bg;
}

exports.TutorialOverlay = TutorialOverlay;
