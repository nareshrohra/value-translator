/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	  'use strict';

	  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(5), __webpack_require__(4), __webpack_require__(19), __webpack_require__(12), __webpack_require__(6), __webpack_require__(11), __webpack_require__(9), __webpack_require__(8), __webpack_require__(13), __webpack_require__(14), __webpack_require__(15), __webpack_require__(16), __webpack_require__(18), __webpack_require__(24), __webpack_require__(1), __webpack_require__(7), __webpack_require__(20), __webpack_require__(17), __webpack_require__(21), __webpack_require__(25), __webpack_require__(26), __webpack_require__(27), __webpack_require__(22), __webpack_require__(2), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (
	  //chain
	  chain, translationChain, circularTranslationChain, recursiveTranslationChain, translationChainElement, magnitudeTranslationChainElement,
	  //formatters
	  numberFormatter, translationResultFormatter,
	  //constants
	  orderOfMagnitudes, tens, numberUnits, timeUnits, distanceUnits, weightUnits,
	  //types
	  magnitude, translationResult, translatorOptions, unit,
	  //translators
	  numberTranslator, timeTranslator, distanceTranslator, weightTranslator, translatorBase,
	  //util
	  validator,
	  //locale
	  locale) {
	    window.vaow = {
	      Chain: chain.Chain,
	      TranslationChain: translationChain.TranslationChain,
	      CircularTranslationChain: circularTranslationChain.CircularTranslationChain,
	      RecursiveTranslationChain: recursiveTranslationChain.RecursiveTranslationChain,
	      TranslationChainElement: translationChainElement.TranslationChainElement,
	      MagnitudeTranslationChainElement: magnitudeTranslationChainElement.MagnitudeTranslationChainElement,

	      NumberFormatter: numberFormatter.NumberFormatter,
	      TranslationResultFormatter: translationResultFormatter.TranslationResultFormatter,

	      constants: {
	        number: {
	          OrderOfMagnitudes: orderOfMagnitudes.OrderOfMagnitudes,
	          Tens: tens.Tens,
	          Units: numberUnits.Units
	        },
	        units: {
	          Time: timeUnits.Time,
	          Distance: distanceUnits.Distance,
	          Weight: weightUnits.Weight
	        }
	      },

	      types: {
	        Magnitude: magnitude.Magnitude,
	        TranslationResult: translationResult.TranslationResult,
	        ElementTranslationResult: translationResult.ElementTranslationResult,
	        OverflowElementTranslationResult: translationResult.OverflowElementTranslationResult,
	        UnderflowElementTranslationResult: translationResult.UnderflowElementTranslationResult,
	        IncompleteElementTranslationResult: translationResult.IncompleteElementTranslationResult,
	        TranslatorOptions: translatorOptions.TranslatorOptions,
	        MagnitudeOptions: translatorOptions.MagnitudeOptions,
	        Unit: unit.Unit
	      },

	      NumberTranslator: numberTranslator.NumberTranslator,
	      TimeTranslator: timeTranslator.TimeTranslator,
	      DistanceTranslator: distanceTranslator.DistanceTranslator,
	      WeightTranslator: weightTranslator.WeightTranslator,
	      TranslatorBase: translatorBase.TranslatorBase,

	      util: {
	        Validator: validator.Validator
	      },

	      locale: locale.Locale
	    };
	  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=index.js.map

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _utilValidator, _locale) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var Magnitude = (function () {
	    function Magnitude(word, value) {
	      _classCallCheck(this, Magnitude);

	      this.validate(word, value);

	      this.word = word;
	      this.value = value;
	    }

	    _createClass(Magnitude, [{
	      key: 'validate',
	      value: function validate(word, value) {
	        if (!_utilValidator.Validator.isDefinedAndNotNull(word)) throw _locale.Locale.Error.InvalidArgWord;

	        if (!_utilValidator.Validator.isPositiveNumber(value)) throw _locale.Locale.Error.InvalidArgPositiveNumberValue;
	      }
	    }, {
	      key: 'getWord',
	      value: function getWord() {
	        return this.word;
	      }
	    }, {
	      key: 'getValue',
	      value: function getValue() {
	        return this.value;
	      }
	    }]);

	    return Magnitude;
	  })();

	  exports.Magnitude = Magnitude;

	  var OrderOfMagnitude = (function (_Magnitude) {
	    _inherits(OrderOfMagnitude, _Magnitude);

	    function OrderOfMagnitude() {
	      _classCallCheck(this, OrderOfMagnitude);

	      _get(Object.getPrototypeOf(OrderOfMagnitude.prototype), 'constructor', this).apply(this, arguments);
	    }

	    return OrderOfMagnitude;
	  })(Magnitude);

	  exports.OrderOfMagnitude = OrderOfMagnitude;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../../core/types/magnitude.js.map

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	  "use strict";

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	  var Validator = (function () {
	    function Validator() {
	      _classCallCheck(this, Validator);
	    }

	    _createClass(Validator, null, [{
	      key: "isDefinedAndNotNull",
	      value: function isDefinedAndNotNull(value) {
	        return typeof value !== "undefined" && value !== null;
	      }
	    }, {
	      key: "isPositiveNumber",
	      value: function isPositiveNumber(value) {
	        return Validator.isDefinedAndNotNull(value) && !isNaN(value) && value >= 0;
	      }
	    }, {
	      key: "isNonZeroPositiveNumber",
	      value: function isNonZeroPositiveNumber(value) {
	        return Validator.isDefinedAndNotNull(value) && !isNaN(value) && value > 0;
	      }
	    }, {
	      key: "isNumber",
	      value: function isNumber(value) {
	        return Validator.isDefinedAndNotNull(value) && !isNaN(value);
	      }
	    }]);

	    return Validator;
	  })();

	  exports.Validator = Validator;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../util/validator.js.map

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var Locale = function Locale() {
	    _classCallCheck(this, Locale);
	  };

	  exports.Locale = Locale;

	  Locale.PositiveExponent = 'e+';
	  Locale.ExponentDisplay = ' x 10^';

	  Locale.Error = {
	    InvalidArgPositiveNumberValue: 'Invalid argument "value". value should be a positive number',
	    InvalidArgPositiveDecimalPoints: 'Invalid argument "decimalPoints". decimalPoints should be a positive number',
	    InvalidArgType: 'Invalid argument for "type"',
	    InvalidArgNumber: 'Invalid argument for "number"',
	    InvalidArgRemainder: 'Invalid argument for "remainder". remainder should be a number',
	    InvalidArgNumberValue: 'Invalid argument for "value". value should be a number',
	    InvalidArgValue: 'Invalid argument for "value"',
	    InvalidArgChainElement: 'Invalid argument for "chainElement"',
	    InvalidArgBase: 'Invalid argument for "base"',
	    InvalidArgNextElement: 'Invalid argument for "nextElement"',
	    InvalidArgFactoredValue: 'Invalid argument for "factoredValue"',
	    InvalidArgNumberDigitValue: 'Invalid argument for "digitValue". value should be a number',
	    InvalidArgUnit: 'Invalid argument for "unit"',
	    InvalidArgUnits: 'Invalid argument for "units"',
	    InvalidArgMagnitude: 'Invalid argument for "magnitude"',
	    InvalidArgMagnitudes: 'Invalid argument for "magnitudes"',
	    InvalidArgOrderOfMagnitude: 'Invalid argument for "orderOfMagnitude"',
	    InvalidArgOrderOfMagnitudes: 'Invalid argument for "orderOfMagnitudes"',
	    InvalidArgTranslationResult: 'Invalid argument for "translationResult"',
	    InvalidArgWord: 'Invalid argument for "word"',
	    InvalidArgElementResult: 'Invalid argument for "elementResult"',
	    ChainEmpty: 'Chain is empty',
	    UnitsMagnitudesNotAdded: 'Units and/or magnitudes are not added'
	  };

	  Locale.Units = {
	    One: 'one',
	    Two: 'two',
	    Three: 'three',
	    Four: 'four',
	    Five: 'five',
	    Six: 'six',
	    Seven: 'seven',
	    Eight: 'eight',
	    Nine: 'nine'
	  };

	  Locale.Tens = {
	    Ten: 'ten',
	    Eleven: 'eleven',
	    Twelve: 'twelve',
	    Thirteen: 'thirteen',
	    Fourteen: 'fourteen',
	    Fifteen: 'fifteen',
	    Sixteen: 'sifteen',
	    Seventeen: 'Seventeen',
	    Eighteen: 'eightteen',
	    Nineteen: 'nineteen',
	    Twenty: 'twenty',
	    Thirty: 'thirty',
	    Fourty: 'fourty',
	    Fifty: 'fifty',
	    Sixty: 'sixty',
	    Seventy: 'seventy',
	    Eighty: 'eighty',
	    Ninety: 'ninety'
	  };

	  Locale.OrderOfMagnitude = {
	    Hundred: 'hundred',
	    Thousand: 'thousand',

	    Million: 'million',
	    Billion: 'billion',
	    Trillion: 'trillion',
	    Quadrillion: 'quadrillion',
	    Quintillion: 'quintillion',

	    Sextillion: 'sextillion',
	    Septillion: 'septillion',
	    Octillion: 'octillion',
	    Nonillion: 'nonillion',
	    Decillion: 'decillion',
	    Undecillion: 'undecillion'
	  };

	  Locale.Time = {
	    Seconds: 'seconds',
	    Minutes: 'minutes',
	    Hours: 'hours',
	    Days: 'days',
	    Months: 'months',
	    Years: 'years',
	    Decades: 'decades',
	    Centuries: 'centuries',
	    Millenium: 'millenium'
	  };

	  Locale.Weight = {
	    Milligrams: 'milligrams',
	    Grams: 'grams',
	    Kilograms: 'kilograms',
	    Quintals: 'quintals',
	    Tons: 'tons'
	  };

	  Locale.Distance = {
	    Millimeters: 'millimeters',
	    Centimeters: 'centimeters',
	    Inches: 'nches',
	    Feets: 'feets',
	    Meters: 'meters',
	    Kilometers: 'kilometers'
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=locale.js.map

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(3), __webpack_require__(5), __webpack_require__(6), __webpack_require__(11), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _utilValidator, _locale, _chain, _translationChainElement, _magnitudeTranslationChainElement, _typesTranslationResult) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var TranslationChain = (function () {
	    function TranslationChain() {
	      _classCallCheck(this, TranslationChain);

	      this.unitChain = new _chain.Chain();
	      this.magnitudeChain = new _chain.Chain();
	      this.orderOfMagnitudeChain = new _chain.Chain();
	      this.result = null;
	    }

	    _createClass(TranslationChain, [{
	      key: 'addUnit',
	      value: function addUnit(unit) {
	        if (_utilValidator.Validator.isDefinedAndNotNull(unit)) {
	          this.unitChain.addChainElement(new _translationChainElement.TranslationChainElement(unit));
	        } else {
	          throw _locale.Locale.Error.InvalidArgUnit;
	        }
	      }
	    }, {
	      key: 'addUnits',
	      value: function addUnits(units) {
	        if (_utilValidator.Validator.isDefinedAndNotNull(units)) {
	          var unitsCount = units.length;
	          for (var i = 0; i < unitsCount; i++) {
	            this.addUnit(units[i]);
	          }
	        } else {
	          throw _locale.Locale.Error.InvalidArgUnits;
	        }
	      }
	    }, {
	      key: 'addMagnitude',
	      value: function addMagnitude(magnitude) {
	        if (_utilValidator.Validator.isDefinedAndNotNull(magnitude)) {
	          this.magnitudeChain.addChainElement(new _magnitudeTranslationChainElement.MagnitudeTranslationChainElement(magnitude));
	        } else {
	          throw _locale.Locale.Error.InvalidArgMagnitude;
	        }
	      }
	    }, {
	      key: 'addMagnitudes',
	      value: function addMagnitudes(magnitudes) {
	        if (_utilValidator.Validator.isDefinedAndNotNull(magnitudes)) {
	          var count = magnitudes.length;
	          for (var i = 0; i < count; i++) {
	            this.addMagnitude(magnitudes[i]);
	          }
	        } else {
	          throw _locale.Locale.Error.InvalidArgMagnitudes;
	        }
	      }
	    }, {
	      key: 'addOrderOfMagnitude',
	      value: function addOrderOfMagnitude(orderOfMagnitude) {
	        if (_utilValidator.Validator.isDefinedAndNotNull(orderOfMagnitude)) {
	          this.orderOfMagnitudeChain.addChainElement(new _translationChainElement.TranslationChainElement(orderOfMagnitude));
	        } else {
	          throw _locale.Locale.Error.InvalidArgOrderOfMagnitude;
	        }
	      }
	    }, {
	      key: 'addOrderOfMagnitudes',
	      value: function addOrderOfMagnitudes(orderOfMagnitudes) {
	        if (_utilValidator.Validator.isDefinedAndNotNull(orderOfMagnitudes)) {
	          var magnitudesCount = orderOfMagnitudes.length;
	          for (var i = 0; i < magnitudesCount; i++) {
	            this.addOrderOfMagnitude(orderOfMagnitudes[i]);
	          }
	        } else {
	          throw _locale.Locale.Error.InvalidArgOrderOfMagnitudes;
	        }
	      }
	    }, {
	      key: 'copyFrom',
	      value: function copyFrom(translationChain) {
	        this.unitChain.empty();
	        this.unitChain.copyFrom(translationChain.unitChain);
	        this.magnitudeChain.empty();
	        this.magnitudeChain.copyFrom(translationChain.magnitudeChain);
	        this.orderOfMagnitudeChain.empty();
	        this.orderOfMagnitudeChain.copyFrom(translationChain.orderOfMagnitudeChain);
	      }
	    }, {
	      key: 'translate',
	      value: function translate(value) {
	        if (_utilValidator.Validator.isPositiveNumber(value)) {
	          if (this.unitChain.isNotEmpty() || this.magnitudeChain.isNotEmpty() || this.orderOfMagnitudeChain.isNotEmpty()) {
	            this.performTranslation(value);
	            return this.result.toString();
	          } else {
	            throw _locale.Locale.Error.UnitsMagnitudesNotAdded;
	          }
	        } else {
	          throw _locale.Locale.Error.InvalidArgPositiveNumberValue;
	        }
	      }
	    }, {
	      key: 'reset',
	      value: function reset(value) {
	        this.result = new _typesTranslationResult.TranslationResult();
	        this.result.setFactoredValue(value);
	      }
	    }, {
	      key: 'performTranslation',
	      value: function performTranslation(value) {
	        this.reset(value);
	        this.continueWithUnitTranslation(value);
	      }
	    }, {
	      key: 'continueWithUnitTranslation',
	      value: function continueWithUnitTranslation(value) {
	        if (this.unitChain.isNotEmpty()) {
	          var result = this.unitChain.translate(value),
	              remainderFromUnitTranslation = 0;
	          if (!result.isUnderflow()) {
	            this.result.applyElementTranslationResultAsUnit(result);
	            remainderFromUnitTranslation = result.getRemainder();
	          } else {
	            this.result.applyElementTranslationResult(result);
	            this.continueWithMagnitudeTranslation(this.result.getFactoredValue());
	          }
	          if (result.isOverflow()) {
	            this.continueWithMagnitudeTranslation(this.result.getFactoredValue());
	            if (remainderFromUnitTranslation > 0) {
	              this.result.setRemainder(remainderFromUnitTranslation);
	            }
	          }
	        } else {
	          this.continueWithMagnitudeTranslation(this.result.getFactoredValue());
	        }
	      }
	    }, {
	      key: 'continueWithMagnitudeTranslation',
	      value: function continueWithMagnitudeTranslation(value) {
	        if (this.magnitudeChain.isNotEmpty()) {
	          var result = this.magnitudeChain.translate(value);
	          if (result.isUnderflow()) {
	            this.result.applyElementTranslationResult(result);
	          } else if (result.isIncomplete()) {
	            this.result.applyElementTranslationResultAsMagnitude(result);
	            this.justDoMagnitudeTranslation(this.result.getRemainder());
	          } else {
	            this.result.applyElementTranslationResultAsMagnitude(result);
	          }
	          if (result.isOverflow()) {
	            this.continueWithOrderOfMagnitudeTranslation(this.result.getFactoredValue());
	          }
	        } else {
	          this.continueWithOrderOfMagnitudeTranslation(this.result.getFactoredValue());
	        }
	      }
	    }, {
	      key: 'justDoMagnitudeTranslation',
	      value: function justDoMagnitudeTranslation(value) {
	        if (this.magnitudeChain.isNotEmpty()) {
	          var result = this.magnitudeChain.translate(value);
	          if (result.isUnderflow()) {
	            this.result.applyElementTranslationResult(result);
	          } else if (result.isIncomplete()) {
	            this.result.applyElementTranslationResultAsMagnitude(result);
	            this.justDoMagnitudeTranslation(this.result.getRemainder());
	          } else {
	            this.result.setRemainder(0);
	            this.result.applyElementTranslationResultAsMagnitude(result);
	          }
	        }
	      }
	    }, {
	      key: 'continueWithOrderOfMagnitudeTranslation',
	      value: function continueWithOrderOfMagnitudeTranslation(value) {
	        if (this.orderOfMagnitudeChain.isNotEmpty()) {
	          var result = this.orderOfMagnitudeChain.translate(value);
	          if (result.isUnderflow()) {
	            this.result.applyElementTranslationResult(result);
	          } else {
	            this.result.applyElementTranslationResultAsOrderOfMagnitude(result);
	          }
	        }
	      }
	    }]);

	    return TranslationChain;
	  })();

	  exports.TranslationChain = TranslationChain;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../../core/chain/translation-chain.js.map

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _utilValidator, _locale) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var Chain = (function () {
	    function Chain() {
	      _classCallCheck(this, Chain);

	      this.setChainStart(null);
	    }

	    _createClass(Chain, [{
	      key: 'isNotEmpty',
	      value: function isNotEmpty() {
	        return this.head !== null;
	      }
	    }, {
	      key: 'getHead',
	      value: function getHead() {
	        return this.head;
	      }
	    }, {
	      key: 'getTail',
	      value: function getTail() {
	        return this.tail;
	      }
	    }, {
	      key: 'setChainStart',
	      value: function setChainStart(firstElement) {
	        this.head = this.tail = firstElement;
	      }
	    }, {
	      key: 'addChainElement',
	      value: function addChainElement(chainElement) {
	        if (_utilValidator.Validator.isDefinedAndNotNull(chainElement)) {
	          if (this.head) {
	            this.appendToChain(chainElement);
	          } else {
	            this.setChainStart(chainElement);
	          }
	        } else {
	          throw _locale.Locale.Error.InvalidArgChainElement;
	        }
	      }
	    }, {
	      key: 'appendToChain',
	      value: function appendToChain(chainElement) {
	        this.tail.setNextElement(chainElement);
	        this.tail = chainElement;
	      }
	    }, {
	      key: 'empty',
	      value: function empty() {
	        var destroy = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

	        this.head = null;
	      }
	    }, {
	      key: 'copyFrom',
	      value: function copyFrom(chain) {
	        var element = chain.head;
	        while (element !== null) {
	          this.addChainElement(element);
	          element = element.nextElement;
	        }
	      }
	    }, {
	      key: 'translate',
	      value: function translate(value) {
	        if (_utilValidator.Validator.isPositiveNumber(value)) {
	          if (this.isNotEmpty()) {
	            return this.head.translate(value);
	          } else {
	            throw _locale.Locale.Error.ChainEmpty;
	          }
	        } else {
	          throw _locale.Locale.Error.InvalidArgPositiveNumberValue;
	        }
	      }
	    }]);

	    return Chain;
	  })();

	  exports.Chain = Chain;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../../core/chain/chain.js.map

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(3), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _utilValidator, _locale, _typesTranslationResult) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var TranslationChainElement = (function () {
	    function TranslationChainElement(base) {
	      _classCallCheck(this, TranslationChainElement);

	      if (_utilValidator.Validator.isDefinedAndNotNull(base)) {
	        this.translationBase = base;
	        this.nextElement = null;
	      } else {
	        throw _locale.Locale.Error.InvalidArgBase;
	      }
	    }

	    _createClass(TranslationChainElement, [{
	      key: 'getValue',
	      value: function getValue() {
	        return this.translationBase.getValue();
	      }
	    }, {
	      key: 'getWord',
	      value: function getWord() {
	        return this.translationBase.getWord();
	      }
	    }, {
	      key: 'setNextElement',
	      value: function setNextElement(nextElement) {
	        if (_utilValidator.Validator.isDefinedAndNotNull(nextElement)) {
	          this.nextElement = nextElement;
	        } else {
	          throw _locale.Locale.Error.InvalidArgNextElement;
	        }
	      }
	    }, {
	      key: 'translate',
	      value: function translate(value) {
	        var result = null;
	        if (value < this.getValue()) {
	          result = new _typesTranslationResult.UnderflowElementTranslationResult();
	          result.setFactoredValue(value);
	          return result;
	        } else if (!this.nextElement) {
	          result = new _typesTranslationResult.OverflowElementTranslationResult(this.getWord());
	          result.setFactoredValue(this.factorWithBase(value));
	          result.setRemainder(this.getRemainderWithBase(value));
	          return result;
	        } else if (value < this.nextElement.getValue()) {
	          result = new _typesTranslationResult.ElementTranslationResult(this.getWord());
	          result.setFactoredValue(this.factorWithBase(value));
	          result.setRemainder(this.getRemainderWithBase(value));
	          return result;
	        } else {
	          return this.nextElement.translate(value);
	        }
	      }
	    }, {
	      key: 'factorWithBase',
	      value: function factorWithBase(value) {
	        var conversionFactor = this.getValue();
	        conversionFactor = conversionFactor > 0 ? conversionFactor : 1;
	        return value / conversionFactor;
	      }
	    }, {
	      key: 'getRemainderWithBase',
	      value: function getRemainderWithBase(value) {
	        var conversionFactor = this.getValue();
	        conversionFactor = conversionFactor > 0 ? conversionFactor : 1;
	        return value % conversionFactor;
	      }
	    }]);

	    return TranslationChainElement;
	  })();

	  exports.TranslationChainElement = TranslationChainElement;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../../core/chain/translation-chain-element.js.map

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(3), __webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _utilValidator, _locale, _formattersTranslationResultFormatter) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var TranslationResultBase = (function () {
	    function TranslationResultBase() {
	      _classCallCheck(this, TranslationResultBase);

	      this._factoredValue = 0;
	      this._remainder = 0;
	    }

	    _createClass(TranslationResultBase, [{
	      key: 'setRemainder',
	      value: function setRemainder(remainder) {
	        if (_utilValidator.Validator.isPositiveNumber(remainder)) {
	          this._remainder = remainder;
	        } else {
	          throw _locale.Locale.Error.InvalidArgRemainder;
	        }
	      }
	    }, {
	      key: 'getRemainder',
	      value: function getRemainder() {
	        return this._remainder;
	      }
	    }, {
	      key: 'setFactoredValue',
	      value: function setFactoredValue(factoredValue) {
	        if (_utilValidator.Validator.isNumber(factoredValue)) {
	          this._factoredValue = factoredValue;
	        } else {
	          throw _locale.Locale.Error.InvalidArgFactoredValue;
	        }
	      }
	    }, {
	      key: 'getFactoredValue',
	      value: function getFactoredValue() {
	        return this._factoredValue;
	      }
	    }]);

	    return TranslationResultBase;
	  })();

	  var TranslationResult = (function (_TranslationResultBase) {
	    _inherits(TranslationResult, _TranslationResultBase);

	    function TranslationResult() {
	      _classCallCheck(this, TranslationResult);

	      _get(Object.getPrototypeOf(TranslationResult.prototype), 'constructor', this).apply(this, arguments);

	      this._unit = null;
	      this._magnitudes = [];
	      this._orderOfMagnitudes = [];
	    }

	    _createClass(TranslationResult, [{
	      key: 'setUnit',
	      value: function setUnit(unit) {
	        if (_utilValidator.Validator.isDefinedAndNotNull(unit)) {
	          this._unit = unit;
	        } else {
	          throw _locale.Locale.Error.InvalidArgUnit;
	        }
	      }
	    }, {
	      key: 'getUnit',
	      value: function getUnit() {
	        return this._unit;
	      }
	    }, {
	      key: 'increaseByMagnitude',
	      value: function increaseByMagnitude(magnitude) {
	        if (_utilValidator.Validator.isDefinedAndNotNull(magnitude)) {
	          if (magnitude !== '') {
	            this._magnitudes.push(magnitude);
	          }
	        } else {
	          throw _locale.Locale.Error.InvalidArgMagnitude;
	        }
	      }
	    }, {
	      key: 'getMagnitudes',
	      value: function getMagnitudes() {
	        return this._magnitudes;
	      }
	    }, {
	      key: 'increaseByOrderOfMagnitude',
	      value: function increaseByOrderOfMagnitude(orderOfMagnitude) {
	        if (_utilValidator.Validator.isDefinedAndNotNull(orderOfMagnitude)) {
	          if (orderOfMagnitude !== '') {
	            this._orderOfMagnitudes.push(orderOfMagnitude);
	          }
	        } else {
	          throw _locale.Locale.Error.InvalidArgOrderOfMagnitude;
	        }
	      }
	    }, {
	      key: 'getOrderOfMagnitudes',
	      value: function getOrderOfMagnitudes() {
	        return this._orderOfMagnitudes;
	      }
	    }, {
	      key: 'applyElementTranslationResult',
	      value: function applyElementTranslationResult(elementResult) {
	        if (_utilValidator.Validator.isDefinedAndNotNull(elementResult)) {
	          var remainder = elementResult.getRemainder(),
	              factoredValue = elementResult.getFactoredValue();
	          if (_utilValidator.Validator.isNonZeroPositiveNumber(remainder)) {
	            this.setRemainder(remainder);
	          }

	          if (_utilValidator.Validator.isNumber(factoredValue)) {
	            this.setFactoredValue(factoredValue);
	          }
	        } else {
	          throw _locale.Locale.Error.InvalidArgElementResult;
	        }
	      }
	    }, {
	      key: 'applyElementTranslationResultAsUnit',
	      value: function applyElementTranslationResultAsUnit(elementResult) {
	        if (_utilValidator.Validator.isDefinedAndNotNull(elementResult)) {
	          this.applyElementTranslationResult(elementResult);
	          this.setUnit(elementResult.getWord());
	        } else {
	          throw _locale.Locale.Error.InvalidArgElementResult;
	        }
	      }
	    }, {
	      key: 'applyElementTranslationResultAsMagnitude',
	      value: function applyElementTranslationResultAsMagnitude(elementResult) {
	        if (_utilValidator.Validator.isDefinedAndNotNull(elementResult)) {
	          this.applyElementTranslationResult(elementResult);
	          this.increaseByMagnitude(elementResult.getWord());
	        } else {
	          throw _locale.Locale.Error.InvalidArgElementResult;
	        }
	      }
	    }, {
	      key: 'applyElementTranslationResultAsOrderOfMagnitude',
	      value: function applyElementTranslationResultAsOrderOfMagnitude(elementResult) {
	        if (_utilValidator.Validator.isDefinedAndNotNull(elementResult)) {
	          this.applyElementTranslationResult(elementResult);
	          this.increaseByOrderOfMagnitude(elementResult.getWord());
	        } else {
	          throw _locale.Locale.Error.InvalidArgElementResult;
	        }
	      }
	    }, {
	      key: 'toString',
	      value: function toString() {
	        return _formattersTranslationResultFormatter.TranslationResultFormatter.format(this);
	      }
	    }]);

	    return TranslationResult;
	  })(TranslationResultBase);

	  exports.TranslationResult = TranslationResult;

	  var ElementTranslationResult = (function (_TranslationResultBase2) {
	    _inherits(ElementTranslationResult, _TranslationResultBase2);

	    function ElementTranslationResult(word) {
	      _classCallCheck(this, ElementTranslationResult);

	      if (_utilValidator.Validator.isDefinedAndNotNull(word)) {
	        _get(Object.getPrototypeOf(ElementTranslationResult.prototype), 'constructor', this).call(this);
	        this._overflow = false;
	        this._underflow = false;
	        this._incomplete = false;
	        this._word = '';
	        this._word = word;
	      } else {
	        throw _locale.Locale.Error.InvalidArgWord;
	      }
	    }

	    _createClass(ElementTranslationResult, [{
	      key: 'getWord',
	      value: function getWord() {
	        return this._word;
	      }
	    }, {
	      key: 'setIncomplete',
	      value: function setIncomplete() {
	        this._incomplete = true;
	      }
	    }, {
	      key: 'isIncomplete',
	      value: function isIncomplete() {
	        return this._incomplete;
	      }
	    }, {
	      key: 'setOverflow',
	      value: function setOverflow() {
	        this._overflow = true;
	      }
	    }, {
	      key: 'isOverflow',
	      value: function isOverflow() {
	        return this._overflow;
	      }
	    }, {
	      key: 'setUnderflow',
	      value: function setUnderflow() {
	        this._underflow = true;
	      }
	    }, {
	      key: 'isUnderflow',
	      value: function isUnderflow() {
	        return this._underflow;
	      }
	    }]);

	    return ElementTranslationResult;
	  })(TranslationResultBase);

	  exports.ElementTranslationResult = ElementTranslationResult;

	  var OverflowElementTranslationResult = (function (_ElementTranslationResult) {
	    _inherits(OverflowElementTranslationResult, _ElementTranslationResult);

	    function OverflowElementTranslationResult(word) {
	      _classCallCheck(this, OverflowElementTranslationResult);

	      _get(Object.getPrototypeOf(OverflowElementTranslationResult.prototype), 'constructor', this).call(this, word || '');
	      this.setOverflow();
	    }

	    return OverflowElementTranslationResult;
	  })(ElementTranslationResult);

	  exports.OverflowElementTranslationResult = OverflowElementTranslationResult;

	  var UnderflowElementTranslationResult = (function (_ElementTranslationResult2) {
	    _inherits(UnderflowElementTranslationResult, _ElementTranslationResult2);

	    function UnderflowElementTranslationResult(word) {
	      _classCallCheck(this, UnderflowElementTranslationResult);

	      _get(Object.getPrototypeOf(UnderflowElementTranslationResult.prototype), 'constructor', this).call(this, word || '');
	      this.setUnderflow();
	    }

	    return UnderflowElementTranslationResult;
	  })(ElementTranslationResult);

	  exports.UnderflowElementTranslationResult = UnderflowElementTranslationResult;

	  var IncompleteElementTranslationResult = (function (_ElementTranslationResult3) {
	    _inherits(IncompleteElementTranslationResult, _ElementTranslationResult3);

	    function IncompleteElementTranslationResult(word) {
	      _classCallCheck(this, IncompleteElementTranslationResult);

	      _get(Object.getPrototypeOf(IncompleteElementTranslationResult.prototype), 'constructor', this).call(this, word || '');
	      this.setIncomplete();
	    }

	    return IncompleteElementTranslationResult;
	  })(ElementTranslationResult);

	  exports.IncompleteElementTranslationResult = IncompleteElementTranslationResult;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../../core/types/translation-result.js.map

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(3), __webpack_require__(2), __webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _locale, _utilValidator, _numberFormatter) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var TranslationResultFormatter = (function () {
	    function TranslationResultFormatter() {
	      _classCallCheck(this, TranslationResultFormatter);
	    }

	    _createClass(TranslationResultFormatter, null, [{
	      key: 'format',
	      value: function format(translationResult) {
	        if (_utilValidator.Validator.isDefinedAndNotNull(translationResult)) {

	          var digitValue = this.getDigitValueString(translationResult),
	              magnitudes = this.getMagnitudesString(translationResult),
	              orderOfMagnitudes = this.getOrderOfMagnitudesString(translationResult),
	              unit = this.getUnitString(translationResult);
	          return [magnitudes === '' ? digitValue : '', magnitudes, orderOfMagnitudes, unit].filter(function (val) {
	            return val;
	          }).join(' ');
	        } else {
	          throw _locale.Locale.Error.InvalidArgTranslationResult;
	        }
	      }
	    }, {
	      key: 'getDigitValueString',
	      value: function getDigitValueString(translationResult) {
	        var digitValue = translationResult.getFactoredValue();
	        return _utilValidator.Validator.isPositiveNumber(digitValue) ? _numberFormatter.NumberFormatter.format(digitValue) : '';
	      }
	    }, {
	      key: 'getUnitString',
	      value: function getUnitString(translationResult) {
	        var unit = translationResult.getUnit();
	        return _utilValidator.Validator.isDefinedAndNotNull(unit) ? unit : '';
	      }
	    }, {
	      key: 'getMagnitudesString',
	      value: function getMagnitudesString(translationResult) {
	        var magnitudes = translationResult.getMagnitudes();
	        return magnitudes.length > 0 ? magnitudes.join(' ') : '';
	      }
	    }, {
	      key: 'getOrderOfMagnitudesString',
	      value: function getOrderOfMagnitudesString(translationResult) {
	        var orderOfMagnitudes = translationResult.getOrderOfMagnitudes();
	        return orderOfMagnitudes.length > 0 ? orderOfMagnitudes.reverse().join(' ') : '';
	      }
	    }]);

	    return TranslationResultFormatter;
	  })();

	  exports.TranslationResultFormatter = TranslationResultFormatter;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../../core/formatters/translation-result-formatter.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(3), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _utilValidator, _locale, _utilMathExtension) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var NumberFormatter = (function () {
	    function NumberFormatter() {
	      _classCallCheck(this, NumberFormatter);
	    }

	    _createClass(NumberFormatter, null, [{
	      key: 'format',
	      value: function format(value) {
	        if (_utilValidator.Validator.isNumber(value)) {
	          var formatStrategy = NumberFormatter.getFormattingStrategy(value);
	          return formatStrategy.format(value);
	        } else {
	          throw _locale.Locale.Error.InvalidArgNumberValue;
	        }
	      }
	    }, {
	      key: 'getFormattingStrategy',
	      value: function getFormattingStrategy(value) {
	        var preFormattedValue = value.toString();
	        var formatStrategy = null;
	        if (preFormattedValue.indexOf(_locale.Locale.PositiveExponent) !== -1) {
	          formatStrategy = new ExponentFormattingStrategy();
	        } else {
	          formatStrategy = new NonExponentFormattingStrategy();
	        }
	        return formatStrategy;
	      }
	    }]);

	    return NumberFormatter;
	  })();

	  exports.NumberFormatter = NumberFormatter;

	  var NonExponentFormattingStrategy = (function () {
	    function NonExponentFormattingStrategy() {
	      _classCallCheck(this, NonExponentFormattingStrategy);

	      this.exponentThreshold = Math.pow(10, 6);
	    }

	    _createClass(NonExponentFormattingStrategy, [{
	      key: 'format',
	      value: function format(value) {
	        if (_utilValidator.Validator.isDefinedAndNotNull(value)) {
	          if (_utilValidator.Validator.isNumber(value)) {
	            if (value < this.exponentThreshold) {
	              return _utilMathExtension.MathExtension.round(value, 2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	            } else {
	              return new ExponentFormattingStrategy().format(value.toExponential());
	            }
	          } else {
	            return value;
	          }
	        } else {
	          throw _locale.Locale.Error.InvalidArgNumberValue;
	        }
	      }
	    }]);

	    return NonExponentFormattingStrategy;
	  })();

	  var ExponentFormattingStrategy = (function () {
	    function ExponentFormattingStrategy() {
	      _classCallCheck(this, ExponentFormattingStrategy);
	    }

	    _createClass(ExponentFormattingStrategy, [{
	      key: 'format',
	      value: function format(value) {
	        var formattedValue = value.toString();
	        var exponentIndex = formattedValue.indexOf(_locale.Locale.PositiveExponent);
	        var exponent = formattedValue.substring(exponentIndex);
	        var mantissa = formattedValue.substring(0, exponentIndex);
	        return _utilMathExtension.MathExtension.round(parseFloat(mantissa), 2).toString() + exponent.replace(_locale.Locale.PositiveExponent, _locale.Locale.ExponentDisplay);
	      }
	    }]);

	    return ExponentFormattingStrategy;
	  })();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../../core/formatters/number-formatter.js.map

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _validator, _locale) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var MathExtension = (function () {
	    function MathExtension() {
	      _classCallCheck(this, MathExtension);
	    }

	    _createClass(MathExtension, null, [{
	      key: 'round',
	      value: function round(number, decimalPoints) {
	        decimalPoints = decimalPoints || 0;

	        if (!_validator.Validator.isNumber(number)) {
	          throw _locale.Locale.Error.InvalidArgNumber;
	        }

	        if (!_validator.Validator.isPositiveNumber(decimalPoints)) {
	          throw _locale.Locale.Error.InvalidArgPositiveDecimalPoints;
	        }
	        return MathExtension._decimalAdjust('round', number, decimalPoints * -1);
	      }

	      //referenced from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
	    }, {
	      key: '_decimalAdjust',
	      value: function _decimalAdjust(type, value, exp) {
	        // If the exp is undefined or zero...
	        if (typeof exp === 'undefined' || +exp === 0) {
	          return Math[type](value);
	        }
	        value = +value;
	        exp = +exp;

	        // If the value is not a number or the exp is not an integer...
	        if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
	          return NaN;
	        }

	        // Shift
	        value = value.toString().split('e');
	        value = Math[type](+(value[0] + 'e' + (value[1] ? +value[1] - exp : -exp)));

	        // Shift back
	        value = value.toString().split('e');
	        return +(value[0] + 'e' + (value[1] ? +value[1] + exp : exp));
	      }
	    }]);

	    return MathExtension;
	  })();

	  exports.MathExtension = MathExtension;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../util/math-extension.js.map

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(3), __webpack_require__(6), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _utilValidator, _locale, _translationChainElement, _typesTranslationResult) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	  var MagnitudeTranslationChainElement = (function (_TranslationChainElement) {
	    _inherits(MagnitudeTranslationChainElement, _TranslationChainElement);

	    function MagnitudeTranslationChainElement() {
	      _classCallCheck(this, MagnitudeTranslationChainElement);

	      _get(Object.getPrototypeOf(MagnitudeTranslationChainElement.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(MagnitudeTranslationChainElement, [{
	      key: 'translate',
	      value: function translate(value) {
	        var result = null;
	        if (value === this.getValue()) {
	          result = new _typesTranslationResult.ElementTranslationResult(this.getWord());
	          return result;
	        } else if (value < this.getValue()) {
	          result = new _typesTranslationResult.UnderflowElementTranslationResult();
	          result.setFactoredValue(value);
	          return result;
	        } else if (!this.nextElement) {
	          result = new _typesTranslationResult.OverflowElementTranslationResult();
	          result.setFactoredValue(value);
	          return result;
	        } else if (value < this.nextElement.getValue()) {
	          result = new _typesTranslationResult.IncompleteElementTranslationResult(this.getWord());
	          result.setRemainder(this.getRemainderWithBase(value));
	          return result;
	        } else {
	          return this.nextElement.translate(value);
	        }
	      }
	    }, {
	      key: 'factorWithCurrentBase',
	      value: function factorWithCurrentBase(value) {
	        var conversionFactor = this.getValue();
	        conversionFactor = conversionFactor > 0 ? conversionFactor : 1;
	        return value / conversionFactor;
	      }
	    }]);

	    return MagnitudeTranslationChainElement;
	  })(_translationChainElement.TranslationChainElement);

	  exports.MagnitudeTranslationChainElement = MagnitudeTranslationChainElement;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../../core/chain/magnitude-translation-chain-element.js.map

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _translationChain) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	  var RecursiveTranslationChain = (function (_TranslationChain) {
	    _inherits(RecursiveTranslationChain, _TranslationChain);

	    function RecursiveTranslationChain(underlyingChain) {
	      _classCallCheck(this, RecursiveTranslationChain);

	      _get(Object.getPrototypeOf(RecursiveTranslationChain.prototype), 'constructor', this).call(this);
	      this._underlyingChain = underlyingChain;
	      this._isUnderlyingChainSetup = false;
	    }

	    _createClass(RecursiveTranslationChain, [{
	      key: 'addUnit',
	      value: function addUnit(unit) {
	        this._isUnderlyingChainSetup = false;
	        _get(Object.getPrototypeOf(RecursiveTranslationChain.prototype), 'addUnit', this).call(this, unit);
	      }
	    }, {
	      key: 'addUnits',
	      value: function addUnits(units) {
	        this._isUnderlyingChainSetup = false;
	        _get(Object.getPrototypeOf(RecursiveTranslationChain.prototype), 'addUnits', this).call(this, units);
	      }
	    }, {
	      key: 'addMagnitude',
	      value: function addMagnitude(magnitude) {
	        this._isUnderlyingChainSetup = false;
	        _get(Object.getPrototypeOf(RecursiveTranslationChain.prototype), 'addMagnitude', this).call(this, magnitude);
	      }
	    }, {
	      key: 'addMagnitudes',
	      value: function addMagnitudes(magnitudes) {
	        this._isUnderlyingChainSetup = false;
	        _get(Object.getPrototypeOf(RecursiveTranslationChain.prototype), 'addMagnitudes', this).call(this, magnitudes);
	      }
	    }, {
	      key: 'addOrderOfMagnitude',
	      value: function addOrderOfMagnitude(orderOfMagnitude) {
	        this._isUnderlyingChainSetup = false;
	        _get(Object.getPrototypeOf(RecursiveTranslationChain.prototype), 'addOrderOfMagnitude', this).call(this, orderOfMagnitude);
	      }
	    }, {
	      key: 'addOrderOfMagnitudes',
	      value: function addOrderOfMagnitudes(orderOfMagnitudes) {
	        this._isUnderlyingChainSetup = false;
	        _get(Object.getPrototypeOf(RecursiveTranslationChain.prototype), 'addOrderOfMagnitudes', this).call(this, orderOfMagnitudes);
	      }
	    }, {
	      key: 'continueWithOrderOfMagnitudeTranslation',
	      value: function continueWithOrderOfMagnitudeTranslation(value) {
	        this._underlyingChain.continueWithOrderOfMagnitudeTranslation(value);
	      }
	    }, {
	      key: 'initializeUnderlyingChain',
	      value: function initializeUnderlyingChain() {
	        if (!this._isUnderlyingChainSetup) {
	          this._underlyingChain.copyFrom(this);
	          this._isUnderlyingChainSetup = true;
	        }
	      }
	    }, {
	      key: 'translate',
	      value: function translate(value) {
	        var startFromMagnitude = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	        this.initializeUnderlyingChain();
	        if (startFromMagnitude) {
	          this._underlyingChain.reset(value);
	          this._underlyingChain.continueWithMagnitudeTranslation(value);
	        } else {
	          this._underlyingChain.translate(value);
	        }
	        var initialResult = this._underlyingChain.result;
	        var result = '';

	        if (initialResult.getFactoredValue() >= 1 && (initialResult.getFactoredValue() !== value || startFromMagnitude == false)) {
	          var factoredValue = Math.floor(initialResult.getFactoredValue());
	          initialResult.setFactoredValue(-1);
	          var factoredValueTranslation = this.translate(factoredValue, true);
	          result = (factoredValueTranslation ? factoredValueTranslation.trim() + ' ' : '') + initialResult.toString();
	        } else {
	          result = initialResult.toString();
	        }

	        if (initialResult.getRemainder() >= 1) {
	          var remainderValueTranslation = this.translate(initialResult.getRemainder());
	          return result + (remainderValueTranslation ? ' ' + remainderValueTranslation.trim() : '');
	        } else {
	          return result;
	        }
	      }
	    }]);

	    return RecursiveTranslationChain;
	  })(_translationChain.TranslationChain);

	  exports.RecursiveTranslationChain = RecursiveTranslationChain;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../../core/chain/recursive-translation-chain.js.map

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(3), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _locale, _typesMagnitude) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var OrderOfMagnitudes = function OrderOfMagnitudes() {
	    _classCallCheck(this, OrderOfMagnitudes);
	  };

	  exports.OrderOfMagnitudes = OrderOfMagnitudes;

	  OrderOfMagnitudes.Hundred = new _typesMagnitude.OrderOfMagnitude(_locale.Locale.OrderOfMagnitude.Hundred, Math.pow(10, 2));
	  OrderOfMagnitudes.Thousand = new _typesMagnitude.OrderOfMagnitude(_locale.Locale.OrderOfMagnitude.Thousand, Math.pow(10, 3));
	  OrderOfMagnitudes.Million = new _typesMagnitude.OrderOfMagnitude(_locale.Locale.OrderOfMagnitude.Million, Math.pow(10, 6));
	  OrderOfMagnitudes.Billion = new _typesMagnitude.OrderOfMagnitude(_locale.Locale.OrderOfMagnitude.Billion, Math.pow(10, 9));
	  OrderOfMagnitudes.Trillion = new _typesMagnitude.OrderOfMagnitude(_locale.Locale.OrderOfMagnitude.Trillion, Math.pow(10, 12));
	  OrderOfMagnitudes.Quadrillion = new _typesMagnitude.OrderOfMagnitude(_locale.Locale.OrderOfMagnitude.Quadrillion, Math.pow(10, 15));
	  OrderOfMagnitudes.Quintillion = new _typesMagnitude.OrderOfMagnitude(_locale.Locale.OrderOfMagnitude.Quintillion, Math.pow(10, 18));
	  OrderOfMagnitudes.Sextillion = new _typesMagnitude.OrderOfMagnitude(_locale.Locale.OrderOfMagnitude.Sextillion, Math.pow(10, 21));
	  OrderOfMagnitudes.Septillion = new _typesMagnitude.OrderOfMagnitude(_locale.Locale.OrderOfMagnitude.Septillion, Math.pow(10, 24));
	  OrderOfMagnitudes.Octillion = new _typesMagnitude.OrderOfMagnitude(_locale.Locale.OrderOfMagnitude.Octillion, Math.pow(10, 27));
	  OrderOfMagnitudes.Nonillion = new _typesMagnitude.OrderOfMagnitude(_locale.Locale.OrderOfMagnitude.Nonillion, Math.pow(10, 30));
	  OrderOfMagnitudes.Decillion = new _typesMagnitude.OrderOfMagnitude(_locale.Locale.OrderOfMagnitude.Decillion, Math.pow(10, 33));
	  OrderOfMagnitudes.Undecillion = new _typesMagnitude.OrderOfMagnitude(_locale.Locale.OrderOfMagnitude.Undecillion, Math.pow(10, 36));

	  OrderOfMagnitudes.VeryLowOrderMagnitudes = [OrderOfMagnitudes.Hundred, OrderOfMagnitudes.Thousand];

	  OrderOfMagnitudes.LowOrderMagnitudes = [OrderOfMagnitudes.Million, OrderOfMagnitudes.Billion, OrderOfMagnitudes.Trillion, OrderOfMagnitudes.Quadrillion, OrderOfMagnitudes.Quintillion];

	  OrderOfMagnitudes.HighOrderMagnitudes = [OrderOfMagnitudes.Sextillion, OrderOfMagnitudes.Septillion, OrderOfMagnitudes.Octillion, OrderOfMagnitudes.Nonillion, OrderOfMagnitudes.Decillion, OrderOfMagnitudes.Undecillion];
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../../../core/constants/number/order-of-magnitudes.js.map

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(3), __webpack_require__(1), __webpack_require__(15)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _locale, _typesMagnitude, _units) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var Tens = function Tens() {
	    _classCallCheck(this, Tens);
	  };

	  exports.Tens = Tens;

	  Tens.Ten = new _typesMagnitude.Magnitude(_locale.Locale.Tens.Ten, 10);
	  Tens.Eleven = new _typesMagnitude.Magnitude(_locale.Locale.Tens.Eleven, 11);
	  Tens.Twelve = new _typesMagnitude.Magnitude(_locale.Locale.Tens.Twelve, 12);
	  Tens.Thirteen = new _typesMagnitude.Magnitude(_locale.Locale.Tens.Thirteen, 13);
	  Tens.Fourteen = new _typesMagnitude.Magnitude(_locale.Locale.Tens.Fourteen, 14);
	  Tens.Fifteen = new _typesMagnitude.Magnitude(_locale.Locale.Tens.Fifteen, 15);
	  Tens.Sixteen = new _typesMagnitude.Magnitude(_locale.Locale.Tens.Sixteen, 16);
	  Tens.Seventeen = new _typesMagnitude.Magnitude(_locale.Locale.Tens.Seventeen, 17);
	  Tens.Eighteen = new _typesMagnitude.Magnitude(_locale.Locale.Tens.Eighteen, 18);
	  Tens.Nineteen = new _typesMagnitude.Magnitude(_locale.Locale.Tens.Nineteen, 19);

	  Tens.Twenty = new _typesMagnitude.Magnitude(_locale.Locale.Tens.Twenty, 20);
	  Tens.Thirty = new _typesMagnitude.Magnitude(_locale.Locale.Tens.Thirty, 30);
	  Tens.Fourty = new _typesMagnitude.Magnitude(_locale.Locale.Tens.Fourty, 40);
	  Tens.Fifty = new _typesMagnitude.Magnitude(_locale.Locale.Tens.Fifty, 50);
	  Tens.Sixty = new _typesMagnitude.Magnitude(_locale.Locale.Tens.Sixty, 60);
	  Tens.Seventy = new _typesMagnitude.Magnitude(_locale.Locale.Tens.Seventy, 70);
	  Tens.Eighty = new _typesMagnitude.Magnitude(_locale.Locale.Tens.Eighty, 80);
	  Tens.Ninety = new _typesMagnitude.Magnitude(_locale.Locale.Tens.Ninety, 90);
	  Tens.NinetyNine = new _typesMagnitude.Magnitude(_locale.Locale.Tens.Ninety + ' ' + _locale.Locale.Units.Nine, 99);

	  Tens.All = [Tens.Ten, Tens.Eleven, Tens.Twelve, Tens.Thirteen, Tens.Fourteen, Tens.Fifteen, Tens.Sixteen, Tens.Seventeen, Tens.Eighteen, Tens.Nineteen, Tens.Twenty, Tens.Thirty, Tens.Fourty, Tens.Fifty, Tens.Sixty, Tens.Seventy, Tens.Eighty, Tens.Ninety, Tens.NinetyNine];
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../../../core/constants/number/tens.js.map

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(3), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _locale, _typesMagnitude) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var Units = function Units() {
	    _classCallCheck(this, Units);
	  };

	  exports.Units = Units;

	  Units.One = new _typesMagnitude.Magnitude(_locale.Locale.Units.One, 1);
	  Units.Two = new _typesMagnitude.Magnitude(_locale.Locale.Units.Two, 2);
	  Units.Three = new _typesMagnitude.Magnitude(_locale.Locale.Units.Three, 3);
	  Units.Four = new _typesMagnitude.Magnitude(_locale.Locale.Units.Four, 4);
	  Units.Five = new _typesMagnitude.Magnitude(_locale.Locale.Units.Five, 5);
	  Units.Six = new _typesMagnitude.Magnitude(_locale.Locale.Units.Six, 6);
	  Units.Seven = new _typesMagnitude.Magnitude(_locale.Locale.Units.Seven, 7);
	  Units.Eight = new _typesMagnitude.Magnitude(_locale.Locale.Units.Eight, 8);
	  Units.Nine = new _typesMagnitude.Magnitude(_locale.Locale.Units.Nine, 9);

	  Units.All = [Units.One, Units.Two, Units.Three, Units.Four, Units.Five, Units.Six, Units.Seven, Units.Eight, Units.Nine];
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../../../core/constants/number/units.js.map

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(3), __webpack_require__(17)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _locale, _typesUnit) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var Time = function Time() {
	    _classCallCheck(this, Time);
	  };

	  exports.Time = Time;

	  Time.Second = new _typesUnit.Unit(_locale.Locale.Time.Seconds, 0);
	  Time.Minute = new _typesUnit.Unit(_locale.Locale.Time.Minutes, 60);
	  Time.Hour = new _typesUnit.Unit(_locale.Locale.Time.Hours, Time.Minute.getValue() * 60);
	  Time.Day = new _typesUnit.Unit(_locale.Locale.Time.Days, Time.Hour.getValue() * 24);
	  Time.Month = new _typesUnit.Unit(_locale.Locale.Time.Months, Time.Day.getValue() * 30.43);
	  Time.Year = new _typesUnit.Unit(_locale.Locale.Time.Years, Time.Day.getValue() * 365.24);
	  Time.Decade = new _typesUnit.Unit(_locale.Locale.Time.Decades, Time.Year.getValue() * 10);
	  Time.Century = new _typesUnit.Unit(_locale.Locale.Time.Centuries, Time.Year.getValue() * 100);
	  Time.Millenium = new _typesUnit.Unit(_locale.Locale.Time.Millenium, Time.Century.getValue() * 10);

	  Time.Default = [Time.Second, Time.Minute, Time.Hour, Time.Day, Time.Month, Time.Year, Time.Century];

	  Time.All = [Time.Second, Time.Minute, Time.Hour, Time.Day, Time.Month, Time.Year, Time.Decade, Time.Century, Time.Millenium];
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../../../core/constants/units/time.js.map

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _utilValidator, _locale) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var Unit = (function () {
	    function Unit(word, value) {
	      _classCallCheck(this, Unit);

	      this.validate(word, value);

	      this.word = word;
	      this.value = value;
	    }

	    _createClass(Unit, [{
	      key: 'validate',
	      value: function validate(word, value) {
	        if (!_utilValidator.Validator.isDefinedAndNotNull(word)) throw _locale.Locale.Error.InvalidArgWord;

	        if (!_utilValidator.Validator.isPositiveNumber(value)) throw _locale.Locale.Error.InvalidArgPositiveNumberValue;
	      }
	    }, {
	      key: 'getWord',
	      value: function getWord() {
	        return this.word;
	      }
	    }, {
	      key: 'getValue',
	      value: function getValue() {
	        return this.value;
	      }
	    }]);

	    return Unit;
	  })();

	  exports.Unit = Unit;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../../core/types/unit.js.map

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(3), __webpack_require__(17)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _locale, _typesUnit) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var Distance = function Distance() {
	    _classCallCheck(this, Distance);
	  };

	  exports.Distance = Distance;

	  Distance.Millimeter = new _typesUnit.Unit(_locale.Locale.Distance.Millimeters, 0);
	  Distance.Centimeter = new _typesUnit.Unit(_locale.Locale.Distance.Centimeters, 10);
	  Distance.Inch = new _typesUnit.Unit(_locale.Locale.Distance.Inches, 25.4);
	  Distance.Feet = new _typesUnit.Unit(_locale.Locale.Distance.Feets, 304.8);
	  Distance.Meter = new _typesUnit.Unit(_locale.Locale.Distance.Meters, 1000);
	  Distance.Kilometer = new _typesUnit.Unit(_locale.Locale.Distance.Kilometers, Distance.Meter.getValue() * 1000);

	  Distance.Default = [Distance.Millimeter, Distance.Meter, Distance.Kilometer];

	  Distance.All = [Distance.Millimeter, Distance.Centimeter, Distance.Inch, Distance.Feet, Distance.Meter, Distance.Kilometer];
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../../../core/constants/units/distance.js.map

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _translationChain) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	  var CircularTranslationChain = (function (_TranslationChain) {
	    _inherits(CircularTranslationChain, _TranslationChain);

	    function CircularTranslationChain() {
	      _classCallCheck(this, CircularTranslationChain);

	      _get(Object.getPrototypeOf(CircularTranslationChain.prototype), 'constructor', this).call(this);
	    }

	    _createClass(CircularTranslationChain, [{
	      key: 'continueWithOrderOfMagnitudeTranslation',
	      value: function continueWithOrderOfMagnitudeTranslation(value) {
	        if (this.orderOfMagnitudeChain.isNotEmpty()) {
	          var result = this.orderOfMagnitudeChain.translate(value);
	          if (result.isUnderflow()) {
	            this.result.applyElementTranslationResult(result);
	          } else if (result.isOverflow()) {
	            this.result.applyElementTranslationResultAsOrderOfMagnitude(result);
	            this.continueWithOrderOfMagnitudeTranslation(this.result.getFactoredValue());
	          } else {
	            this.result.applyElementTranslationResultAsOrderOfMagnitude(result);
	          }
	        }
	      }
	    }]);

	    return CircularTranslationChain;
	  })(_translationChain.TranslationChain);

	  exports.CircularTranslationChain = CircularTranslationChain;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../../core/chain/circular-translation-chain.js.map

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _utilValidator, _locale) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var TranslatorOptions = (function () {
	    function TranslatorOptions(type, magnitudeOptions, translateRecursively) {
	      if (magnitudeOptions === undefined) magnitudeOptions = new MagnitudeOptions();

	      _classCallCheck(this, TranslatorOptions);

	      this._magnitudeOptions = null;
	      this._type = '';
	      this._translateRecursively = false;

	      if (_utilValidator.Validator.isDefinedAndNotNull(type)) {
	        this._type = type;
	        this._magnitudeOptions = magnitudeOptions;
	        this._translateRecursively = translateRecursively;
	      } else {
	        throw _locale.Locale.Error.InvalidArgType;
	      };
	    }

	    _createClass(TranslatorOptions, [{
	      key: 'MagnitudeOptions',
	      set: function set(value) {
	        this._magnitudeOptions = value;
	      },
	      get: function get() {
	        return this._magnitudeOptions;
	      }
	    }, {
	      key: 'Type',
	      set: function set(value) {
	        this._type = value;
	      },
	      get: function get() {
	        return this._type;
	      }
	    }, {
	      key: 'TranslateRecursively',
	      set: function set(value) {
	        this._translateRecursively = value;
	      },
	      get: function get() {
	        return this._translateRecursively;
	      }
	    }]);

	    return TranslatorOptions;
	  })();

	  exports.TranslatorOptions = TranslatorOptions;

	  TranslatorOptions.Type = {
	    Number: 'number',
	    Time: 'time',
	    Weight: 'weight',
	    Distance: 'distance'
	  };

	  var MagnitudeOptions = (function () {
	    function MagnitudeOptions() {
	      _classCallCheck(this, MagnitudeOptions);

	      this._translateMagnitudes = false;
	      this._translateVeryLowOrderOfMagnitudes = false;
	      this._translateLowOrderOfMagnitudes = true;
	      this._translateHighOrderOfMagnitudes = true;
	    }

	    _createClass(MagnitudeOptions, [{
	      key: 'TranslateMagnitudes',
	      set: function set(value) {
	        this._translateMagnitudes = value;
	      },
	      get: function get() {
	        return this._translateMagnitudes;
	      }
	    }, {
	      key: 'TranslateVeryLowOrderOfMagnitudes',
	      set: function set(value) {
	        this._translateVeryLowOrderOfMagnitudes = value;
	      },
	      get: function get() {
	        return this._translateVeryLowOrderOfMagnitudes;
	      }
	    }, {
	      key: 'TranslateLowOrderOfMagnitudes',
	      set: function set(value) {
	        this._translateLowOrderOfMagnitudes = value;
	      },
	      get: function get() {
	        return this._translateLowOrderOfMagnitudes;
	      }
	    }, {
	      key: 'TranslateHighOrderOfMagnitudes',
	      set: function set(value) {
	        this._translateHighOrderOfMagnitudes = value;
	      },
	      get: function get() {
	        return this._translateHighOrderOfMagnitudes;
	      }
	    }]);

	    return MagnitudeOptions;
	  })();

	  exports.MagnitudeOptions = MagnitudeOptions;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//number/time
	//# sourceMappingURL=../../core/types/translator-options.js.map

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(22), __webpack_require__(20)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _translatorBase, _coreTypesTranslatorOptions) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	  var NumberTranslator = (function (_TranslatorBase) {
	    _inherits(NumberTranslator, _TranslatorBase);

	    function NumberTranslator(magnitudeOptions) {
	      var translateRecursively = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	      _classCallCheck(this, NumberTranslator);

	      _get(Object.getPrototypeOf(NumberTranslator.prototype), 'constructor', this).call(this, magnitudeOptions, translateRecursively);
	      this._setType(_coreTypesTranslatorOptions.TranslatorOptions.Type.Number);
	      this.constructChain();
	    }

	    return NumberTranslator;
	  })(_translatorBase.TranslatorBase);

	  exports.NumberTranslator = NumberTranslator;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../translators/number-translator.js.map

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(20), __webpack_require__(23)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _coreTypesTranslatorOptions, _coreChainTranslationChainBuilder) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var TranslatorBase = (function () {
	    function TranslatorBase() {
	      var magnitudeOptions = arguments.length <= 0 || arguments[0] === undefined ? new _coreTypesTranslatorOptions.MagnitudeOptions() : arguments[0];
	      var translateRecursively = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	      _classCallCheck(this, TranslatorBase);

	      this._type = null;

	      this._magnitudeOptions = magnitudeOptions;
	      this._translateRecursively = translateRecursively;
	    }

	    _createClass(TranslatorBase, [{
	      key: '_setType',
	      value: function _setType(type) {
	        this._type = type;
	      }
	    }, {
	      key: 'constructChain',
	      value: function constructChain() {
	        var translatorOptions = new _coreTypesTranslatorOptions.TranslatorOptions(this._type, this._magnitudeOptions, this._translateRecursively);
	        var translationChainBuilder = new _coreChainTranslationChainBuilder.TranslationChainBuilder();
	        this.translationChain = translationChainBuilder.build(translatorOptions);
	      }
	    }, {
	      key: 'translate',
	      value: function translate(value) {
	        return this.translationChain.translate(value);
	      }
	    }]);

	    return TranslatorBase;
	  })();

	  exports.TranslatorBase = TranslatorBase;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../translators/translator-base.js.map

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(15), __webpack_require__(14), __webpack_require__(13), __webpack_require__(16), __webpack_require__(18), __webpack_require__(24), __webpack_require__(19), __webpack_require__(12), __webpack_require__(20)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _utilValidator, _constantsNumberUnits, _constantsNumberTens, _constantsNumberOrderOfMagnitudes, _constantsUnitsTime, _constantsUnitsDistance, _constantsUnitsWeight, _circularTranslationChain, _recursiveTranslationChain, _typesTranslatorOptions) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var TypedUnits = {
	    time: _constantsUnitsTime.Time,
	    weight: _constantsUnitsWeight.Weight,
	    distance: _constantsUnitsDistance.Distance
	  };

	  var TranslationChainBuilder = (function () {
	    function TranslationChainBuilder() {
	      _classCallCheck(this, TranslationChainBuilder);

	      this.translationChain = null;
	    }

	    _createClass(TranslationChainBuilder, [{
	      key: 'build',
	      value: function build(options) {
	        this._translationChain = options.TranslateRecursively ? new _recursiveTranslationChain.RecursiveTranslationChain(new _circularTranslationChain.CircularTranslationChain()) : new _circularTranslationChain.CircularTranslationChain();

	        if (_utilValidator.Validator.isDefinedAndNotNull(TypedUnits[options.Type])) {
	          this._translationChain.addUnits(TypedUnits[options.Type].Default);
	        }

	        this._addMagnitudesAndOrder(options.MagnitudeOptions);

	        return this._translationChain;
	      }
	    }, {
	      key: '_addMagnitudesAndOrder',
	      value: function _addMagnitudesAndOrder(magnitudeOptions) {
	        if (magnitudeOptions.TranslateMagnitudes) {
	          this._addMagnitudes();
	        }

	        if (magnitudeOptions.TranslateVeryLowOrderOfMagnitudes) {
	          this._addVeryLowOrderOfMagnitudes();
	        }

	        if (magnitudeOptions.TranslateLowOrderOfMagnitudes) {
	          this._addLowOrderOfMagnitudes();
	        }

	        if (magnitudeOptions.TranslateHighOrderOfMagnitudes) {
	          this._addHighOrderOfMagnitudes();
	        }
	      }
	    }, {
	      key: '_addMagnitudes',
	      value: function _addMagnitudes(translationChain) {
	        this._translationChain.addMagnitudes(_constantsNumberUnits.Units.All);
	        this._translationChain.addMagnitudes(_constantsNumberTens.Tens.All);
	      }
	    }, {
	      key: '_addVeryLowOrderOfMagnitudes',
	      value: function _addVeryLowOrderOfMagnitudes(translationChain) {
	        this._translationChain.addOrderOfMagnitudes(_constantsNumberOrderOfMagnitudes.OrderOfMagnitudes.VeryLowOrderMagnitudes);
	      }
	    }, {
	      key: '_addLowOrderOfMagnitudes',
	      value: function _addLowOrderOfMagnitudes(translationChain) {
	        this._translationChain.addOrderOfMagnitudes(_constantsNumberOrderOfMagnitudes.OrderOfMagnitudes.LowOrderMagnitudes);
	      }
	    }, {
	      key: '_addHighOrderOfMagnitudes',
	      value: function _addHighOrderOfMagnitudes(translationChain) {
	        this._translationChain.addOrderOfMagnitudes(_constantsNumberOrderOfMagnitudes.OrderOfMagnitudes.HighOrderMagnitudes);
	      }
	    }]);

	    return TranslationChainBuilder;
	  })();

	  exports.TranslationChainBuilder = TranslationChainBuilder;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../../core/chain/translation-chain-builder.js.map

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(3), __webpack_require__(17)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _locale, _typesUnit) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var Weight = function Weight() {
	    _classCallCheck(this, Weight);
	  };

	  exports.Weight = Weight;

	  Weight.Milligram = new _typesUnit.Unit(_locale.Locale.Weight.Milligrams, 0);
	  Weight.Gram = new _typesUnit.Unit(_locale.Locale.Weight.Grams, 1000);
	  Weight.Kilogram = new _typesUnit.Unit(_locale.Locale.Weight.Kilograms, Weight.Gram.getValue() * 1000);
	  Weight.Quintal = new _typesUnit.Unit(_locale.Locale.Weight.Quintals, Weight.Kilogram.getValue() * 100);
	  Weight.Ton = new _typesUnit.Unit(_locale.Locale.Weight.Tons, Weight.Kilogram.getValue() * 1000);

	  Weight.Default = [Weight.Milligram, Weight.Gram, Weight.Kilogram];

	  Weight.All = [Weight.Milligram, Weight.Gram, Weight.Kilogram, Weight.Quintal, Weight.Ton];
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../../../core/constants/units/weight.js.map

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(22), __webpack_require__(20)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _translatorBase, _coreTypesTranslatorOptions) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	  var TimeTranslator = (function (_TranslatorBase) {
	    _inherits(TimeTranslator, _TranslatorBase);

	    function TimeTranslator(magnitudeOptions) {
	      var translateRecursively = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	      _classCallCheck(this, TimeTranslator);

	      _get(Object.getPrototypeOf(TimeTranslator.prototype), 'constructor', this).call(this, magnitudeOptions, translateRecursively);
	      this._setType(_coreTypesTranslatorOptions.TranslatorOptions.Type.Time);
	      this.constructChain();
	    }

	    return TimeTranslator;
	  })(_translatorBase.TranslatorBase);

	  exports.TimeTranslator = TimeTranslator;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../translators/time-translator.js.map

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(22), __webpack_require__(20)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _translatorBase, _coreTypesTranslatorOptions) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	  var DistanceTranslator = (function (_TranslatorBase) {
	    _inherits(DistanceTranslator, _TranslatorBase);

	    function DistanceTranslator(magnitudeOptions) {
	      var translateRecursively = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	      _classCallCheck(this, DistanceTranslator);

	      _get(Object.getPrototypeOf(DistanceTranslator.prototype), 'constructor', this).call(this, magnitudeOptions, translateRecursively);
	      this._setType(_coreTypesTranslatorOptions.TranslatorOptions.Type.Distance);
	      this.constructChain();
	    }

	    return DistanceTranslator;
	  })(_translatorBase.TranslatorBase);

	  exports.DistanceTranslator = DistanceTranslator;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../translators/distance-translator.js.map

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(22), __webpack_require__(20)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _translatorBase, _coreTypesTranslatorOptions) {
	  'use strict';

	  Object.defineProperty(exports, '__esModule', {
	    value: true
	  });

	  var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	  var WeightTranslator = (function (_TranslatorBase) {
	    _inherits(WeightTranslator, _TranslatorBase);

	    function WeightTranslator(magnitudeOptions) {
	      var translateRecursively = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	      _classCallCheck(this, WeightTranslator);

	      _get(Object.getPrototypeOf(WeightTranslator.prototype), 'constructor', this).call(this, magnitudeOptions, translateRecursively);
	      this._setType(_coreTypesTranslatorOptions.TranslatorOptions.Type.Weight);
	      this.constructChain();
	    }

	    return WeightTranslator;
	  })(_translatorBase.TranslatorBase);

	  exports.WeightTranslator = WeightTranslator;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=../translators/weight-translator.js.map

/***/ }
/******/ ]);