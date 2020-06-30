(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/browser.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/browser.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.preventNavigation = exports.parseCssTime = exports.parseCssMagnitude = exports.animationFrame = exports.isBasicWasmSupported = exports.isNative = exports.isIPad = exports.isSafari = exports.isChrome = exports.isWebKit = exports.isFirefox = exports.isOpera = exports.isEdgeOrIE = exports.isEdge = exports.isIE = void 0;
var userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : '';
exports.isIE = (userAgent.indexOf('Trident') >= 0);
exports.isEdge = (userAgent.indexOf('Edge/') >= 0);
exports.isEdgeOrIE = exports.isIE || exports.isEdge;
exports.isOpera = (userAgent.indexOf('Opera') >= 0);
exports.isFirefox = (userAgent.indexOf('Firefox') >= 0);
exports.isWebKit = (userAgent.indexOf('AppleWebKit') >= 0);
exports.isChrome = (userAgent.indexOf('Chrome') >= 0);
exports.isSafari = (userAgent.indexOf('Chrome') === -1) && (userAgent.indexOf('Safari') >= 0);
exports.isIPad = (userAgent.indexOf('iPad') >= 0);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports.isNative = typeof window.process !== 'undefined';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports.isBasicWasmSupported = typeof window.WebAssembly !== 'undefined';
/**
 * Resolves after the next animation frame if no parameter is given,
 * or after the given number of animation frames.
 */
function animationFrame(n) {
    if (n === void 0) { n = 1; }
    return new Promise(function (resolve) {
        function frameFunc() {
            if (n <= 0) {
                resolve();
            }
            else {
                n--;
                requestAnimationFrame(frameFunc);
            }
        }
        frameFunc();
    });
}
exports.animationFrame = animationFrame;
function parseCssMagnitude(value, defaultValue) {
    if (value) {
        var parsed = void 0;
        if (value.endsWith('px')) {
            parsed = parseFloat(value.substring(0, value.length - 2));
        }
        else {
            parsed = parseFloat(value);
        }
        if (!isNaN(parsed)) {
            return parsed;
        }
    }
    return defaultValue;
}
exports.parseCssMagnitude = parseCssMagnitude;
function parseCssTime(time, defaultValue) {
    if (time) {
        var parsed = void 0;
        if (time.endsWith('ms')) {
            parsed = parseFloat(time.substring(0, time.length - 2));
        }
        else if (time.endsWith('s')) {
            parsed = parseFloat(time.substring(0, time.length - 1)) * 1000;
        }
        else {
            parsed = parseFloat(time);
        }
        if (!isNaN(parsed)) {
            return parsed;
        }
    }
    return defaultValue;
}
exports.parseCssTime = parseCssTime;
function getMonacoEditorScroll(elem) {
    var linesContent = elem.querySelector('.lines-content');
    var viewLines = elem.querySelector('.view-lines');
    // eslint-disable-next-line no-null/no-null
    if (linesContent === null || viewLines === null) {
        return undefined;
    }
    var linesContentStyle = linesContent.style;
    var elemStyle = elem.style;
    var viewLinesStyle = viewLines.style;
    return {
        left: -parseCssMagnitude(linesContentStyle.left, 0),
        top: -parseCssMagnitude(linesContentStyle.top, 0),
        maxLeft: parseCssMagnitude(viewLinesStyle.width, 0) - parseCssMagnitude(elemStyle.width, 0),
        maxTop: parseCssMagnitude(viewLinesStyle.height, 0) - parseCssMagnitude(elemStyle.height, 0)
    };
}
/**
 * Prevent browser back/forward navigation of a mouse wheel event.
 */
function preventNavigation(event) {
    var currentTarget = event.currentTarget, deltaX = event.deltaX, deltaY = event.deltaY;
    var absDeltaX = Math.abs(deltaX);
    var absDeltaY = Math.abs(deltaY);
    var elem = event.target;
    while (elem && elem !== currentTarget) {
        var scroll_1 = void 0;
        if (elem.classList.contains('monaco-scrollable-element')) {
            scroll_1 = getMonacoEditorScroll(elem);
        }
        else {
            scroll_1 = {
                left: elem.scrollLeft,
                top: elem.scrollTop,
                maxLeft: elem.scrollWidth - elem.clientWidth,
                maxTop: elem.scrollHeight - elem.clientHeight
            };
        }
        if (scroll_1) {
            var scrollH = scroll_1.maxLeft > 0 && (deltaX < 0 && scroll_1.left > 0 || deltaX > 0 && scroll_1.left < scroll_1.maxLeft);
            var scrollV = scroll_1.maxTop > 0 && (deltaY < 0 && scroll_1.top > 0 || deltaY > 0 && scroll_1.top < scroll_1.maxTop);
            if (scrollH && scrollV || scrollH && absDeltaX > absDeltaY || scrollV && absDeltaY > absDeltaX) {
                // The event is consumed by the scrollable child element
                return;
            }
        }
        elem = elem.parentElement;
    }
    event.preventDefault();
    event.stopPropagation();
}
exports.preventNavigation = preventNavigation;


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/endpoint.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/endpoint.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endpoint = void 0;
var uri_1 = __webpack_require__(/*! ../common/uri */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/uri.js");
/**
 * An endpoint provides URLs for http and ws, based on configuration and defaults.
 */
var Endpoint = /** @class */ (function () {
    function Endpoint(options, location) {
        if (options === void 0) { options = {}; }
        if (location === void 0) { location = window.location; }
        this.options = options;
        this.location = location;
    }
    Endpoint.prototype.getWebSocketUrl = function () {
        return new uri_1.default(this.wsScheme + "//" + this.host + this.pathname + this.path);
    };
    Endpoint.prototype.getRestUrl = function () {
        return new uri_1.default(this.httpScheme + "//" + this.host + this.pathname + this.path);
    };
    Object.defineProperty(Endpoint.prototype, "pathname", {
        get: function () {
            if (this.location.protocol === Endpoint.PROTO_FILE) {
                return '';
            }
            if (this.location.pathname === '/') {
                return '';
            }
            if (this.location.pathname.endsWith('/')) {
                return this.location.pathname.substr(0, this.location.pathname.length - 1);
            }
            return this.location.pathname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Endpoint.prototype, "host", {
        get: function () {
            if (this.options.host) {
                return this.options.host;
            }
            if (this.location.host) {
                return this.location.host;
            }
            return 'localhost:' + this.port;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Endpoint.prototype, "port", {
        get: function () {
            return this.getSearchParam('port', '3000');
        },
        enumerable: false,
        configurable: true
    });
    Endpoint.prototype.getSearchParam = function (name, defaultValue) {
        var search = this.location.search;
        if (!search) {
            return defaultValue;
        }
        return search.substr(1).split('&')
            .filter(function (value) { return value.startsWith(name + '='); })
            .map(function (value) {
            var encoded = value.substr(name.length + 1);
            return decodeURIComponent(encoded);
        })[0] || defaultValue;
    };
    Object.defineProperty(Endpoint.prototype, "wsScheme", {
        get: function () {
            if (this.options.wsScheme) {
                return this.options.wsScheme;
            }
            return this.httpScheme === Endpoint.PROTO_HTTPS ? Endpoint.PROTO_WSS : Endpoint.PROTO_WS;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Endpoint.prototype, "httpScheme", {
        /**
         * The HTTP/HTTPS scheme of the endpoint, or the user defined one.
         * See: `Endpoint.Options.httpScheme`.
         */
        get: function () {
            if (this.options.httpScheme) {
                return this.options.httpScheme;
            }
            if (this.location.protocol === Endpoint.PROTO_HTTP ||
                this.location.protocol === Endpoint.PROTO_HTTPS) {
                return this.location.protocol;
            }
            return Endpoint.PROTO_HTTP;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Endpoint.prototype, "path", {
        get: function () {
            if (this.options.path) {
                if (this.options.path.startsWith('/')) {
                    return this.options.path;
                }
                else {
                    return '/' + this.options.path;
                }
            }
            return this.options.path || '';
        },
        enumerable: false,
        configurable: true
    });
    Endpoint.PROTO_HTTPS = 'https:';
    Endpoint.PROTO_HTTP = 'http:';
    Endpoint.PROTO_WS = 'ws:';
    Endpoint.PROTO_WSS = 'wss:';
    Endpoint.PROTO_FILE = 'file:';
    return Endpoint;
}());
exports.Endpoint = Endpoint;
(function (Endpoint) {
    var Options = /** @class */ (function () {
        function Options() {
        }
        return Options;
    }());
    Endpoint.Options = Options;
    // Necessary for running tests with dependency on TS lib on node
    // FIXME figure out how to mock with ts-node
    var Location = /** @class */ (function () {
        function Location() {
        }
        return Location;
    }());
    Endpoint.Location = Location;
})(Endpoint = exports.Endpoint || (exports.Endpoint = {}));
exports.Endpoint = Endpoint;


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/keyboard/keys.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/keyboard/keys.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017-2019 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
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
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeysOrKeyCodes = exports.Key = exports.SpecialCases = exports.KeyModifier = exports.KeyCode = exports.KeySequence = void 0;
var os_1 = __webpack_require__(/*! ../../common/os */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/os.js");
var KeySequence;
(function (KeySequence) {
    function equals(a, b) {
        if (a.length !== b.length) {
            return false;
        }
        for (var i = 0; i < a.length; i++) {
            if (!a[i].equals(b[i])) {
                return false;
            }
        }
        return true;
    }
    KeySequence.equals = equals;
    var CompareResult;
    (function (CompareResult) {
        CompareResult[CompareResult["NONE"] = 0] = "NONE";
        CompareResult[CompareResult["PARTIAL"] = 1] = "PARTIAL";
        CompareResult[CompareResult["SHADOW"] = 2] = "SHADOW";
        CompareResult[CompareResult["FULL"] = 3] = "FULL";
    })(CompareResult = KeySequence.CompareResult || (KeySequence.CompareResult = {}));
    /* Compares two KeySequences, returns:
     * FULL if the KeySequences are the same.
     * PARTIAL if the KeySequence a part of b.
     * SHADOW if the KeySequence b part of a.
     * NONE if the KeySequences are not the same at all.
     */
    function compare(a, b) {
        var first = a;
        var second = b;
        var shadow = false;
        if (b.length < a.length) {
            first = b;
            second = a;
            shadow = true;
        }
        for (var i = 0; i < first.length; i++) {
            if (first[i].equals(second[i]) === false) {
                return KeySequence.CompareResult.NONE;
            }
        }
        if (first.length < second.length) {
            if (shadow === false) {
                return KeySequence.CompareResult.PARTIAL;
            }
            else {
                return KeySequence.CompareResult.SHADOW;
            }
        }
        return KeySequence.CompareResult.FULL;
    }
    KeySequence.compare = compare;
    function parse(keybinding) {
        var e_1, _a;
        var keyCodes = [];
        var rawKeyCodes = keybinding.trim().split(/\s+/g);
        try {
            for (var rawKeyCodes_1 = __values(rawKeyCodes), rawKeyCodes_1_1 = rawKeyCodes_1.next(); !rawKeyCodes_1_1.done; rawKeyCodes_1_1 = rawKeyCodes_1.next()) {
                var rawKeyCode = rawKeyCodes_1_1.value;
                var keyCode = KeyCode.parse(rawKeyCode);
                if (keyCode !== undefined) {
                    keyCodes.push(keyCode);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (rawKeyCodes_1_1 && !rawKeyCodes_1_1.done && (_a = rawKeyCodes_1.return)) _a.call(rawKeyCodes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return keyCodes;
    }
    KeySequence.parse = parse;
})(KeySequence = exports.KeySequence || (exports.KeySequence = {}));
/**
 * Representation of a pressed key combined with key modifiers.
 */
var KeyCode = /** @class */ (function () {
    function KeyCode(schema) {
        var key = schema.key;
        if (key) {
            if (key.code && key.keyCode && key.easyString) {
                this.key = key;
            }
            else if (key.code) {
                this.key = Key.getKey(key.code);
            }
            else if (key.keyCode) {
                this.key = Key.getKey(key.keyCode);
            }
        }
        this.ctrl = !!schema.ctrl;
        this.shift = !!schema.shift;
        this.alt = !!schema.alt;
        this.meta = !!schema.meta;
        this.character = schema.character;
    }
    /**
     * Return true if this KeyCode only contains modifiers.
     */
    KeyCode.prototype.isModifierOnly = function () {
        return this.key === undefined;
    };
    /**
     * Return true if the given KeyCode is equal to this one.
     */
    KeyCode.prototype.equals = function (other) {
        if (this.key && (!other.key || this.key.code !== other.key.code) || !this.key && other.key) {
            return false;
        }
        return this.ctrl === other.ctrl && this.alt === other.alt && this.shift === other.shift && this.meta === other.meta;
    };
    /*
     * Return a keybinding string compatible with the `Keybinding.keybinding` property.
     */
    KeyCode.prototype.toString = function () {
        var result = [];
        if (this.meta) {
            result.push(SpecialCases.META);
        }
        if (this.shift) {
            result.push(Key.SHIFT_LEFT.easyString);
        }
        if (this.alt) {
            result.push(Key.ALT_LEFT.easyString);
        }
        if (this.ctrl) {
            result.push(Key.CONTROL_LEFT.easyString);
        }
        if (this.key) {
            result.push(this.key.easyString);
        }
        return result.join('+');
    };
    /**
     * Create a KeyCode from one of several input types.
     */
    KeyCode.createKeyCode = function (input) {
        if (typeof input === 'string') {
            var parts = input.split('+');
            if (!KeyCode.isModifierString(parts[0])) {
                return KeyCode.createKeyCode({
                    first: Key.getKey(parts[0]),
                    modifiers: parts.slice(1)
                });
            }
            return KeyCode.createKeyCode({ modifiers: parts });
        }
        else if (KeyCode.isKeyboardEvent(input)) {
            var key = KeyCode.toKey(input);
            return new KeyCode({
                key: Key.isModifier(key.code) ? undefined : key,
                meta: os_1.isOSX && input.metaKey,
                shift: input.shiftKey,
                alt: input.altKey,
                ctrl: input.ctrlKey,
                character: KeyCode.toCharacter(input)
            });
        }
        else if (input.first || input.modifiers) {
            var keystroke = input;
            var schema = {
                key: keystroke.first
            };
            if (keystroke.modifiers) {
                if (os_1.isOSX) {
                    schema.meta = keystroke.modifiers.some(function (mod) { return mod === KeyModifier.CtrlCmd; });
                    schema.ctrl = keystroke.modifiers.some(function (mod) { return mod === KeyModifier.MacCtrl; });
                }
                else {
                    schema.meta = false;
                    schema.ctrl = keystroke.modifiers.some(function (mod) { return mod === KeyModifier.CtrlCmd; });
                }
                schema.shift = keystroke.modifiers.some(function (mod) { return mod === KeyModifier.Shift; });
                schema.alt = keystroke.modifiers.some(function (mod) { return mod === KeyModifier.Alt; });
            }
            return new KeyCode(schema);
        }
        else {
            return new KeyCode(input);
        }
    };
    /* Reset the key hashmap, this is for testing purposes.  */
    KeyCode.resetKeyBindings = function () {
        KeyCode.keybindings = {};
    };
    /**
     * Parses a string and returns a KeyCode object.
     * @param keybinding String representation of a keybinding
     */
    KeyCode.parse = function (keybinding) {
        var e_2, _a, e_3, _b;
        if (KeyCode.keybindings[keybinding]) {
            return KeyCode.keybindings[keybinding];
        }
        var schema = {};
        var keys = [];
        var currentKey = '';
        try {
            for (var _c = __values(keybinding.trim().toLowerCase()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var character = _d.value;
                if (currentKey && (character === '-' || character === '+')) {
                    keys.push(currentKey);
                    currentKey = '';
                }
                else if (character !== '+') {
                    currentKey += character;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (currentKey) {
            keys.push(currentKey);
        }
        /* If duplicates i.e ctrl+ctrl+a or alt+alt+b or b+alt+b it is invalid */
        if (keys.length !== new Set(keys).size) {
            throw new Error("Can't parse keybinding " + keybinding + " Duplicate modifiers");
        }
        try {
            for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                var keyString = keys_1_1.value;
                if (SPECIAL_ALIASES[keyString] !== undefined) {
                    keyString = SPECIAL_ALIASES[keyString];
                }
                var key = EASY_TO_KEY[keyString];
                /* meta only works on macOS */
                if (keyString === SpecialCases.META) {
                    if (os_1.isOSX) {
                        schema.meta = true;
                    }
                    else {
                        throw new Error("Can't parse keybinding " + keybinding + " meta is for OSX only");
                    }
                    /* ctrlcmd for M1 keybindings that work on both macOS and other platforms */
                }
                else if (keyString === SpecialCases.CTRLCMD) {
                    if (os_1.isOSX) {
                        schema.meta = true;
                    }
                    else {
                        schema.ctrl = true;
                    }
                }
                else if (Key.isKey(key)) {
                    if (Key.isModifier(key.code)) {
                        if (key.code === Key.CONTROL_LEFT.code || key.code === Key.CONTROL_RIGHT.code) {
                            schema.ctrl = true;
                        }
                        else if (key.code === Key.SHIFT_LEFT.code || key.code === Key.SHIFT_RIGHT.code) {
                            schema.shift = true;
                        }
                        else if (key.code === Key.ALT_LEFT.code || key.code === Key.ALT_RIGHT.code) {
                            schema.alt = true;
                        }
                    }
                    else {
                        schema.key = key;
                    }
                }
                else {
                    throw new Error("Unrecognized key '" + keyString + "' in '" + keybinding + "'");
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (keys_1_1 && !keys_1_1.done && (_b = keys_1.return)) _b.call(keys_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        KeyCode.keybindings[keybinding] = new KeyCode(schema);
        return KeyCode.keybindings[keybinding];
    };
    KeyCode.keybindings = {};
    return KeyCode;
}());
exports.KeyCode = KeyCode;
(function (KeyCode) {
    /*
     * Return true if the string is a modifier M1 to M4.
     */
    function isModifierString(key) {
        return key === KeyModifier.CtrlCmd
            || key === KeyModifier.Shift
            || key === KeyModifier.Alt
            || key === KeyModifier.MacCtrl;
    }
    KeyCode.isModifierString = isModifierString;
    /**
     * Different scopes have different execution environments. This means that they have different built-ins
     * (different global object, different constructors, etc.). This may result in unexpected results. For instance,
     * `[] instanceof window.frames[0].Array` will return `false`, because `Array.prototype !== window.frames[0].Array`
     * and arrays inherit from the former.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
     *
     * Note: just add another check if the current `event.type` checking is insufficient.
     */
    function isKeyboardEvent(event) {
        if (typeof KeyboardEvent === 'undefined') { // This can happen in tests
            return false;
        }
        if (event instanceof KeyboardEvent) {
            return true;
        }
        var type = event.type;
        if (type) {
            return type === 'keypress' || type === 'keydown' || type === 'keyup';
        }
        return false;
    }
    KeyCode.isKeyboardEvent = isKeyboardEvent;
    /**
     * Determine the pressed key of a keyboard event. This key should correspond to the physical key according
     * to a standard US keyboard layout. International keyboard layouts are handled by `KeyboardLayoutService`.
     *
     * `keyIdentifier` is used to access this deprecated field:
     * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyIdentifier
     */
    function toKey(event) {
        var code = event.code;
        if (code) {
            if (os_1.isOSX) {
                // https://github.com/eclipse-theia/theia/issues/4986
                var char = event.key;
                if (code === 'IntlBackslash' && (char === '`' || char === '~')) {
                    return Key.BACKQUOTE;
                }
                else if (code === 'Backquote' && (char === '§' || char === '±')) {
                    return Key.INTL_BACKSLASH;
                }
            }
            // https://github.com/eclipse-theia/theia/issues/7315
            if (code.startsWith('Numpad') && event.key && event.key.length > 1) {
                var k = Key.getKey(event.key);
                if (k) {
                    return k;
                }
            }
            var key = Key.getKey(code);
            if (key) {
                return key;
            }
        }
        // tslint:disable-next-line: deprecation
        var keyCode = event.keyCode;
        if (keyCode) {
            var key = Key.getKey(keyCode);
            if (key) {
                return key;
            }
        }
        var keyIdentifier = event.keyIdentifier;
        if (keyIdentifier) {
            var key = Key.getKey(keyIdentifier);
            if (key) {
                return key;
            }
        }
        throw new Error("Cannot get key code from the keyboard event: " + event + ".");
    }
    KeyCode.toKey = toKey;
    /**
     * Determine the actual printable character that is generated from a pressed key.
     * If the key does not correspond to a printable character, `undefined` is returned.
     * The result may be altered by modifier keys.
     */
    function toCharacter(event) {
        var key = event.key;
        // Use the key property if it contains exactly one unicode character
        if (key && Array.from(key).length === 1) {
            return key;
        }
        var charCode = event.charCode;
        // Use the charCode property if it does not correspond to a unicode control character
        if (charCode && charCode > 0x1f && !(charCode >= 0x80 && charCode <= 0x9f)) {
            return String.fromCharCode(charCode);
        }
        return undefined;
    }
    KeyCode.toCharacter = toCharacter;
})(KeyCode = exports.KeyCode || (exports.KeyCode = {}));
exports.KeyCode = KeyCode;
var KeyModifier;
(function (KeyModifier) {
    /**
     * M1 is the COMMAND key on MacOS X, and the CTRL key on most other platforms.
     */
    KeyModifier["CtrlCmd"] = "M1";
    /**
     * M2 is the SHIFT key.
     */
    KeyModifier["Shift"] = "M2";
    /**
     * M3 is the Option key on MacOS X, and the ALT key on most other platforms.
     */
    KeyModifier["Alt"] = "M3";
    /**
     * M4 is the CTRL key on MacOS X, and is undefined on other platforms.
     */
    KeyModifier["MacCtrl"] = "M4";
})(KeyModifier = exports.KeyModifier || (exports.KeyModifier = {}));
(function (KeyModifier) {
    /**
     * The CTRL key, independently of the platform.
     * _Note:_ In general `KeyModifier.CtrlCmd` should be preferred over this constant.
     */
    KeyModifier.CTRL = os_1.isOSX ? KeyModifier.MacCtrl : KeyModifier.CtrlCmd;
    /**
     * An alias for the SHIFT key (`KeyModifier.Shift`).
     */
    KeyModifier.SHIFT = KeyModifier.Shift;
    /**
     * `true` if the argument represents a modifier. Otherwise, `false`.
     */
    function isModifier(key) {
        if (key) {
            switch (key) {
                case 'M1': // Fall through.
                case 'M2': // Fall through.
                case 'M3': // Fall through.
                case 'M4': return true;
                default: return false;
            }
        }
        return false;
    }
    KeyModifier.isModifier = isModifier;
})(KeyModifier = exports.KeyModifier || (exports.KeyModifier = {}));
var CODE_TO_KEY = {};
var KEY_CODE_TO_KEY = {};
var EASY_TO_KEY = {}; // From 'ctrl' to Key structure
var MODIFIERS = [];
var SPECIAL_ALIASES = {
    'option': 'alt',
    'command': 'meta',
    'cmd': 'meta',
    'return': 'enter',
    'esc': 'escape',
    'mod': 'ctrl',
    'ins': 'insert',
    'del': 'delete',
    'control': 'ctrl',
};
var SpecialCases;
(function (SpecialCases) {
    SpecialCases.META = 'meta';
    SpecialCases.CTRLCMD = 'ctrlcmd';
})(SpecialCases = exports.SpecialCases || (exports.SpecialCases = {}));
var Key;
(function (Key) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function isKey(arg) {
        return typeof arg === 'object' && ('code' in arg) && ('keyCode' in arg);
    }
    Key.isKey = isKey;
    function getKey(arg) {
        if (typeof arg === 'number') {
            return KEY_CODE_TO_KEY[arg];
        }
        else {
            return CODE_TO_KEY[arg];
        }
    }
    Key.getKey = getKey;
    function isModifier(arg) {
        if (typeof arg === 'number') {
            return MODIFIERS.find(function (key) { return key.keyCode === arg; }) !== undefined;
        }
        return MODIFIERS.find(function (key) { return key.code === arg; }) !== undefined;
    }
    Key.isModifier = isModifier;
    function equals(key, keyCode) {
        return !!keyCode.key && key.keyCode === keyCode.key.keyCode;
    }
    Key.equals = equals;
    Key.BACKSPACE = { code: 'Backspace', keyCode: 8, easyString: 'backspace' };
    Key.TAB = { code: 'Tab', keyCode: 9, easyString: 'tab' };
    Key.ENTER = { code: 'Enter', keyCode: 13, easyString: 'enter' };
    Key.ESCAPE = { code: 'Escape', keyCode: 27, easyString: 'escape' };
    Key.SPACE = { code: 'Space', keyCode: 32, easyString: 'space' };
    Key.PAGE_UP = { code: 'PageUp', keyCode: 33, easyString: 'pageup' };
    Key.PAGE_DOWN = { code: 'PageDown', keyCode: 34, easyString: 'pagedown' };
    Key.END = { code: 'End', keyCode: 35, easyString: 'end' };
    Key.HOME = { code: 'Home', keyCode: 36, easyString: 'home' };
    Key.ARROW_LEFT = { code: 'ArrowLeft', keyCode: 37, easyString: 'left' };
    Key.ARROW_UP = { code: 'ArrowUp', keyCode: 38, easyString: 'up' };
    Key.ARROW_RIGHT = { code: 'ArrowRight', keyCode: 39, easyString: 'right' };
    Key.ARROW_DOWN = { code: 'ArrowDown', keyCode: 40, easyString: 'down' };
    Key.INSERT = { code: 'Insert', keyCode: 45, easyString: 'insert' };
    Key.DELETE = { code: 'Delete', keyCode: 46, easyString: 'delete' };
    Key.SHIFT_LEFT = { code: 'ShiftLeft', keyCode: 16, easyString: 'shift' };
    Key.SHIFT_RIGHT = { code: 'ShiftRight', keyCode: 16, easyString: 'shift' };
    Key.CONTROL_LEFT = { code: 'ControlLeft', keyCode: 17, easyString: 'ctrl' };
    Key.CONTROL_RIGHT = { code: 'ControlRight', keyCode: 17, easyString: 'ctrl' };
    Key.ALT_LEFT = { code: 'AltLeft', keyCode: 18, easyString: 'alt' };
    Key.ALT_RIGHT = { code: 'AltRight', keyCode: 18, easyString: 'alt' };
    Key.CAPS_LOCK = { code: 'CapsLock', keyCode: 20, easyString: 'capslock' };
    Key.OS_LEFT = { code: 'OSLeft', keyCode: 91, easyString: 'super' };
    Key.OS_RIGHT = { code: 'OSRight', keyCode: 92, easyString: 'super' };
    Key.DIGIT0 = { code: 'Digit0', keyCode: 48, easyString: '0' };
    Key.DIGIT1 = { code: 'Digit1', keyCode: 49, easyString: '1' };
    Key.DIGIT2 = { code: 'Digit2', keyCode: 50, easyString: '2' };
    Key.DIGIT3 = { code: 'Digit3', keyCode: 51, easyString: '3' };
    Key.DIGIT4 = { code: 'Digit4', keyCode: 52, easyString: '4' };
    Key.DIGIT5 = { code: 'Digit5', keyCode: 53, easyString: '5' };
    Key.DIGIT6 = { code: 'Digit6', keyCode: 54, easyString: '6' };
    Key.DIGIT7 = { code: 'Digit7', keyCode: 55, easyString: '7' };
    Key.DIGIT8 = { code: 'Digit8', keyCode: 56, easyString: '8' };
    Key.DIGIT9 = { code: 'Digit9', keyCode: 57, easyString: '9' };
    Key.KEY_A = { code: 'KeyA', keyCode: 65, easyString: 'a' };
    Key.KEY_B = { code: 'KeyB', keyCode: 66, easyString: 'b' };
    Key.KEY_C = { code: 'KeyC', keyCode: 67, easyString: 'c' };
    Key.KEY_D = { code: 'KeyD', keyCode: 68, easyString: 'd' };
    Key.KEY_E = { code: 'KeyE', keyCode: 69, easyString: 'e' };
    Key.KEY_F = { code: 'KeyF', keyCode: 70, easyString: 'f' };
    Key.KEY_G = { code: 'KeyG', keyCode: 71, easyString: 'g' };
    Key.KEY_H = { code: 'KeyH', keyCode: 72, easyString: 'h' };
    Key.KEY_I = { code: 'KeyI', keyCode: 73, easyString: 'i' };
    Key.KEY_J = { code: 'KeyJ', keyCode: 74, easyString: 'j' };
    Key.KEY_K = { code: 'KeyK', keyCode: 75, easyString: 'k' };
    Key.KEY_L = { code: 'KeyL', keyCode: 76, easyString: 'l' };
    Key.KEY_M = { code: 'KeyM', keyCode: 77, easyString: 'm' };
    Key.KEY_N = { code: 'KeyN', keyCode: 78, easyString: 'n' };
    Key.KEY_O = { code: 'KeyO', keyCode: 79, easyString: 'o' };
    Key.KEY_P = { code: 'KeyP', keyCode: 80, easyString: 'p' };
    Key.KEY_Q = { code: 'KeyQ', keyCode: 81, easyString: 'q' };
    Key.KEY_R = { code: 'KeyR', keyCode: 82, easyString: 'r' };
    Key.KEY_S = { code: 'KeyS', keyCode: 83, easyString: 's' };
    Key.KEY_T = { code: 'KeyT', keyCode: 84, easyString: 't' };
    Key.KEY_U = { code: 'KeyU', keyCode: 85, easyString: 'u' };
    Key.KEY_V = { code: 'KeyV', keyCode: 86, easyString: 'v' };
    Key.KEY_W = { code: 'KeyW', keyCode: 87, easyString: 'w' };
    Key.KEY_X = { code: 'KeyX', keyCode: 88, easyString: 'x' };
    Key.KEY_Y = { code: 'KeyY', keyCode: 89, easyString: 'y' };
    Key.KEY_Z = { code: 'KeyZ', keyCode: 90, easyString: 'z' };
    Key.MULTIPLY = { code: 'NumpadMultiply', keyCode: 106, easyString: 'multiply' };
    Key.ADD = { code: 'NumpadAdd', keyCode: 107, easyString: 'add' };
    Key.DECIMAL = { code: 'NumpadDecimal', keyCode: 108, easyString: 'decimal' };
    Key.SUBTRACT = { code: 'NumpadSubtract', keyCode: 109, easyString: 'subtract' };
    Key.DIVIDE = { code: 'NumpadDivide', keyCode: 111, easyString: 'divide' };
    Key.F1 = { code: 'F1', keyCode: 112, easyString: 'f1' };
    Key.F2 = { code: 'F2', keyCode: 113, easyString: 'f2' };
    Key.F3 = { code: 'F3', keyCode: 114, easyString: 'f3' };
    Key.F4 = { code: 'F4', keyCode: 115, easyString: 'f4' };
    Key.F5 = { code: 'F5', keyCode: 116, easyString: 'f5' };
    Key.F6 = { code: 'F6', keyCode: 117, easyString: 'f6' };
    Key.F7 = { code: 'F7', keyCode: 118, easyString: 'f7' };
    Key.F8 = { code: 'F8', keyCode: 119, easyString: 'f8' };
    Key.F9 = { code: 'F9', keyCode: 120, easyString: 'f9' };
    Key.F10 = { code: 'F10', keyCode: 121, easyString: 'f10' };
    Key.F11 = { code: 'F11', keyCode: 122, easyString: 'f11' };
    Key.F12 = { code: 'F12', keyCode: 123, easyString: 'f12' };
    Key.F13 = { code: 'F13', keyCode: 124, easyString: 'f13' };
    Key.F14 = { code: 'F14', keyCode: 125, easyString: 'f14' };
    Key.F15 = { code: 'F15', keyCode: 126, easyString: 'f15' };
    Key.F16 = { code: 'F16', keyCode: 127, easyString: 'f16' };
    Key.F17 = { code: 'F17', keyCode: 128, easyString: 'f17' };
    Key.F18 = { code: 'F18', keyCode: 129, easyString: 'f18' };
    Key.F19 = { code: 'F19', keyCode: 130, easyString: 'f19' };
    Key.F20 = { code: 'F20', keyCode: 131, easyString: 'f20' };
    Key.F21 = { code: 'F21', keyCode: 132, easyString: 'f21' };
    Key.F22 = { code: 'F22', keyCode: 133, easyString: 'f22' };
    Key.F23 = { code: 'F23', keyCode: 134, easyString: 'f23' };
    Key.F24 = { code: 'F24', keyCode: 135, easyString: 'f24' };
    Key.NUM_LOCK = { code: 'NumLock', keyCode: 144, easyString: 'numlock' };
    Key.SEMICOLON = { code: 'Semicolon', keyCode: 186, easyString: ';' };
    Key.EQUAL = { code: 'Equal', keyCode: 187, easyString: '=' };
    Key.COMMA = { code: 'Comma', keyCode: 188, easyString: ',' };
    Key.MINUS = { code: 'Minus', keyCode: 189, easyString: '-' };
    Key.PERIOD = { code: 'Period', keyCode: 190, easyString: '.' };
    Key.SLASH = { code: 'Slash', keyCode: 191, easyString: '/' };
    Key.BACKQUOTE = { code: 'Backquote', keyCode: 192, easyString: '`' };
    Key.INTL_RO = { code: 'IntlRo', keyCode: 193, easyString: 'intlro' };
    Key.BRACKET_LEFT = { code: 'BracketLeft', keyCode: 219, easyString: '[' };
    Key.BACKSLASH = { code: 'Backslash', keyCode: 220, easyString: '\\' };
    Key.BRACKET_RIGHT = { code: 'BracketRight', keyCode: 221, easyString: ']' };
    Key.QUOTE = { code: 'Quote', keyCode: 222, easyString: '\'' };
    Key.INTL_BACKSLASH = { code: 'IntlBackslash', keyCode: 229, easyString: 'intlbackslash' };
    Key.INTL_YEN = { code: 'IntlYen', keyCode: 255, easyString: 'intlyen' };
    Key.MAX_KEY_CODE = Key.INTL_YEN.keyCode;
})(Key = exports.Key || (exports.Key = {}));
/* -------------------- Initialize the static key mappings -------------------- */
(function () {
    // Set the default key mappings from the constants in the Key namespace
    Object.keys(Key).map(function (prop) { return Reflect.get(Key, prop); }).filter(function (key) { return Key.isKey(key); }).forEach(function (key) {
        CODE_TO_KEY[key.code] = key;
        KEY_CODE_TO_KEY[key.keyCode] = key;
        EASY_TO_KEY[key.easyString] = key;
    });
    // Set additional key mappings
    CODE_TO_KEY['Numpad0'] = Key.DIGIT0;
    KEY_CODE_TO_KEY[96] = Key.DIGIT0;
    CODE_TO_KEY['Numpad1'] = Key.DIGIT1;
    KEY_CODE_TO_KEY[97] = Key.DIGIT1;
    CODE_TO_KEY['Numpad2'] = Key.DIGIT2;
    KEY_CODE_TO_KEY[98] = Key.DIGIT2;
    CODE_TO_KEY['Numpad3'] = Key.DIGIT3;
    KEY_CODE_TO_KEY[99] = Key.DIGIT3;
    CODE_TO_KEY['Numpad4'] = Key.DIGIT4;
    KEY_CODE_TO_KEY[100] = Key.DIGIT4;
    CODE_TO_KEY['Numpad5'] = Key.DIGIT5;
    KEY_CODE_TO_KEY[101] = Key.DIGIT5;
    CODE_TO_KEY['Numpad6'] = Key.DIGIT6;
    KEY_CODE_TO_KEY[102] = Key.DIGIT6;
    CODE_TO_KEY['Numpad7'] = Key.DIGIT7;
    KEY_CODE_TO_KEY[103] = Key.DIGIT7;
    CODE_TO_KEY['Numpad8'] = Key.DIGIT8;
    KEY_CODE_TO_KEY[104] = Key.DIGIT8;
    CODE_TO_KEY['Numpad9'] = Key.DIGIT9;
    KEY_CODE_TO_KEY[105] = Key.DIGIT9;
    CODE_TO_KEY['NumpadEnter'] = Key.ENTER;
    CODE_TO_KEY['NumpadEqual'] = Key.EQUAL;
    CODE_TO_KEY['MetaLeft'] = Key.OS_LEFT; // Chrome, Safari
    KEY_CODE_TO_KEY[224] = Key.OS_LEFT; // Firefox on Mac
    CODE_TO_KEY['MetaRight'] = Key.OS_RIGHT; // Chrome, Safari
    KEY_CODE_TO_KEY[93] = Key.OS_RIGHT; // Chrome, Safari, Edge
    KEY_CODE_TO_KEY[225] = Key.ALT_RIGHT; // Linux
    KEY_CODE_TO_KEY[110] = Key.DECIMAL; // Mac, Windows
    KEY_CODE_TO_KEY[59] = Key.SEMICOLON; // Firefox
    KEY_CODE_TO_KEY[61] = Key.EQUAL; // Firefox
    KEY_CODE_TO_KEY[173] = Key.MINUS; // Firefox
    KEY_CODE_TO_KEY[226] = Key.BACKSLASH; // Chrome, Edge on Windows
    KEY_CODE_TO_KEY[60] = Key.BACKSLASH; // Firefox on Linux
    // Set the modifier keys
    MODIFIERS.push.apply(// Firefox on Linux
    MODIFIERS, __spread([Key.ALT_LEFT, Key.ALT_RIGHT, Key.CONTROL_LEFT, Key.CONTROL_RIGHT, Key.OS_LEFT, Key.OS_RIGHT, Key.SHIFT_LEFT, Key.SHIFT_RIGHT]));
})();
var KeysOrKeyCodes;
(function (KeysOrKeyCodes) {
    KeysOrKeyCodes.toKeyCode = function (keyOrKeyCode) {
        return keyOrKeyCode instanceof KeyCode ? keyOrKeyCode : KeyCode.createKeyCode({ first: keyOrKeyCode });
    };
    KeysOrKeyCodes.toKeyCodes = function (keysOrKeyCodes) {
        if (keysOrKeyCodes instanceof KeyCode) {
            return [keysOrKeyCodes];
        }
        else if (Array.isArray(keysOrKeyCodes)) {
            return keysOrKeyCodes.slice().map(KeysOrKeyCodes.toKeyCode);
        }
        return [KeysOrKeyCodes.toKeyCode(keysOrKeyCodes)];
    };
})(KeysOrKeyCodes = exports.KeysOrKeyCodes || (exports.KeysOrKeyCodes = {}));


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/widgets/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/widgets/index.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./widget */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/widgets/widget.js"), exports);
__exportStar(__webpack_require__(/*! ./react-renderer */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/widgets/react-renderer.js"), exports);
__exportStar(__webpack_require__(/*! ./react-widget */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/widgets/react-widget.js"), exports);


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/widgets/react-renderer.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/widgets/react-renderer.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactRenderer = void 0;
var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
var ReactDOM = __webpack_require__(/*! react-dom */ "../../node_modules/react-dom/index.js");
var ReactRenderer = /** @class */ (function () {
    function ReactRenderer(host) {
        this.host = host || document.createElement('div');
    }
    ReactRenderer.prototype.dispose = function () {
        ReactDOM.unmountComponentAtNode(this.host);
    };
    ReactRenderer.prototype.render = function () {
        ReactDOM.render(React.createElement(React.Fragment, null, this.doRender()), this.host);
    };
    ReactRenderer.prototype.doRender = function () {
        return undefined;
    };
    return ReactRenderer;
}());
exports.ReactRenderer = ReactRenderer;


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/widgets/react-widget.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/widgets/react-widget.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactWidget = void 0;
var ReactDOM = __webpack_require__(/*! react-dom */ "../../node_modules/react-dom/index.js");
var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! ../../common */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/index.js");
var widget_1 = __webpack_require__(/*! ./widget */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/widgets/widget.js");
var widgets_1 = __webpack_require__(/*! @phosphor/widgets */ "../../node_modules/@phosphor/widgets/lib/index.js");
var ReactWidget = /** @class */ (function (_super) {
    __extends(ReactWidget, _super);
    function ReactWidget(options) {
        var _this = _super.call(this, options) || this;
        _this.onRender = new common_1.DisposableCollection();
        _this.scrollOptions = {
            suppressScrollX: true,
            minScrollbarLength: 35,
        };
        _this.toDispose.push(common_1.Disposable.create(function () {
            ReactDOM.unmountComponentAtNode(_this.node);
        }));
        return _this;
    }
    ReactWidget.prototype.onUpdateRequest = function (msg) {
        var _this = this;
        _super.prototype.onUpdateRequest.call(this, msg);
        ReactDOM.render(React.createElement(React.Fragment, null, this.render()), this.node, function () { return _this.onRender.dispose(); });
    };
    ReactWidget = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.unmanaged()),
        __metadata("design:paramtypes", [Object])
    ], ReactWidget);
    return ReactWidget;
}(widget_1.BaseWidget));
exports.ReactWidget = ReactWidget;


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/widgets/widget.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/widgets/widget.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
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
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForHidden = exports.waitForRevealed = exports.waitForClosed = exports.addClipboardListener = exports.addKeyListener = exports.addEventListener = exports.EventListenerObject = exports.createIconButton = exports.setEnabled = exports.BaseWidget = exports.FOCUS_CLASS = exports.SELECTED_CLASS = exports.BUSY_CLASS = exports.COLLAPSED_CLASS = exports.EXPANSION_TOGGLE_CLASS = exports.DISABLED_CLASS = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var widgets_1 = __webpack_require__(/*! @phosphor/widgets */ "../../node_modules/@phosphor/widgets/lib/index.js");
var common_1 = __webpack_require__(/*! ../../common */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/index.js");
var keys_1 = __webpack_require__(/*! ../keyboard/keys */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/browser/keyboard/keys.js");
var perfect_scrollbar_1 = __webpack_require__(/*! perfect-scrollbar */ "../../node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
inversify_1.decorate(inversify_1.injectable(), widgets_1.Widget);
inversify_1.decorate(inversify_1.unmanaged(), widgets_1.Widget, 0);
__exportStar(__webpack_require__(/*! @phosphor/widgets */ "../../node_modules/@phosphor/widgets/lib/index.js"), exports);
__exportStar(__webpack_require__(/*! @phosphor/messaging */ "../../node_modules/@phosphor/messaging/lib/index.js"), exports);
exports.DISABLED_CLASS = 'theia-mod-disabled';
exports.EXPANSION_TOGGLE_CLASS = 'theia-ExpansionToggle';
exports.COLLAPSED_CLASS = 'theia-mod-collapsed';
exports.BUSY_CLASS = 'theia-mod-busy';
exports.SELECTED_CLASS = 'theia-mod-selected';
exports.FOCUS_CLASS = 'theia-mod-focus';
var BaseWidget = /** @class */ (function (_super) {
    __extends(BaseWidget, _super);
    function BaseWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onScrollYReachEndEmitter = new common_1.Emitter();
        _this.onScrollYReachEnd = _this.onScrollYReachEndEmitter.event;
        _this.onScrollUpEmitter = new common_1.Emitter();
        _this.onScrollUp = _this.onScrollUpEmitter.event;
        _this.onDidChangeVisibilityEmitter = new common_1.Emitter();
        _this.onDidChangeVisibility = _this.onDidChangeVisibilityEmitter.event;
        _this.onDidDisposeEmitter = new common_1.Emitter();
        _this.onDidDispose = _this.onDidDisposeEmitter.event;
        _this.toDispose = new common_1.DisposableCollection(_this.onDidDisposeEmitter, common_1.Disposable.create(function () { return _this.onDidDisposeEmitter.fire(); }), _this.onScrollYReachEndEmitter, _this.onScrollUpEmitter, _this.onDidChangeVisibilityEmitter);
        _this.toDisposeOnDetach = new common_1.DisposableCollection();
        return _this;
    }
    BaseWidget.prototype.dispose = function () {
        if (this.isDisposed) {
            return;
        }
        _super.prototype.dispose.call(this);
        this.toDispose.dispose();
    };
    BaseWidget.prototype.onCloseRequest = function (msg) {
        _super.prototype.onCloseRequest.call(this, msg);
        this.dispose();
    };
    BaseWidget.prototype.onBeforeAttach = function (msg) {
        if (this.title.iconClass === '') {
            this.title.iconClass = 'no-icon';
        }
        _super.prototype.onBeforeAttach.call(this, msg);
    };
    BaseWidget.prototype.onAfterDetach = function (msg) {
        if (this.title.iconClass === 'no-icon') {
            this.title.iconClass = '';
        }
        _super.prototype.onAfterDetach.call(this, msg);
    };
    BaseWidget.prototype.onBeforeDetach = function (msg) {
        this.toDisposeOnDetach.dispose();
        _super.prototype.onBeforeDetach.call(this, msg);
    };
    BaseWidget.prototype.onAfterAttach = function (msg) {
        var _this = this;
        _super.prototype.onAfterAttach.call(this, msg);
        if (this.scrollOptions) {
            (function () { return __awaiter(_this, void 0, void 0, function () {
                var container;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getScrollContainer()];
                        case 1:
                            container = _a.sent();
                            container.style.overflow = 'hidden';
                            this.scrollBar = new perfect_scrollbar_1.default(container, this.scrollOptions);
                            this.disableScrollBarFocus(container);
                            this.toDisposeOnDetach.push(addEventListener(container, 'ps-y-reach-end', function () { _this.onScrollYReachEndEmitter.fire(undefined); }));
                            this.toDisposeOnDetach.push(addEventListener(container, 'ps-scroll-up', function () { _this.onScrollUpEmitter.fire(undefined); }));
                            this.toDisposeOnDetach.push(common_1.Disposable.create(function () {
                                if (_this.scrollBar) {
                                    _this.scrollBar.destroy();
                                    _this.scrollBar = undefined;
                                }
                                container.style.overflow = 'initial';
                            }));
                            return [2 /*return*/];
                    }
                });
            }); })();
        }
    };
    BaseWidget.prototype.getScrollContainer = function () {
        return this.node;
    };
    BaseWidget.prototype.disableScrollBarFocus = function (scrollContainer) {
        var e_1, _a;
        try {
            for (var _b = __values([scrollContainer.getElementsByClassName('ps__thumb-x'), scrollContainer.getElementsByClassName('ps__thumb-y')]), _c = _b.next(); !_c.done; _c = _b.next()) {
                var thumbs = _c.value;
                for (var i = 0; i < thumbs.length; i++) {
                    var element = thumbs.item(i);
                    if (element) {
                        element.removeAttribute('tabIndex');
                    }
                }
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
    BaseWidget.prototype.onUpdateRequest = function (msg) {
        _super.prototype.onUpdateRequest.call(this, msg);
        if (this.scrollBar) {
            this.scrollBar.update();
        }
    };
    BaseWidget.prototype.addUpdateListener = function (element, type, useCapture) {
        var _this = this;
        this.addEventListener(element, type, function (e) {
            _this.update();
            e.preventDefault();
        }, useCapture);
    };
    BaseWidget.prototype.addEventListener = function (element, type, listener, useCapture) {
        this.toDisposeOnDetach.push(addEventListener(element, type, listener, useCapture));
    };
    BaseWidget.prototype.addKeyListener = function (element, keysOrKeyCodes, action) {
        var additionalEventTypes = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            additionalEventTypes[_i - 3] = arguments[_i];
        }
        this.toDisposeOnDetach.push(addKeyListener.apply(void 0, __spread([element, keysOrKeyCodes, action], additionalEventTypes)));
    };
    BaseWidget.prototype.addClipboardListener = function (element, type, listener) {
        this.toDisposeOnDetach.push(addClipboardListener(element, type, listener));
    };
    BaseWidget.prototype.setFlag = function (flag) {
        _super.prototype.setFlag.call(this, flag);
        if (flag === widgets_1.Widget.Flag.IsVisible) {
            this.onDidChangeVisibilityEmitter.fire(this.isVisible);
        }
    };
    BaseWidget.prototype.clearFlag = function (flag) {
        _super.prototype.clearFlag.call(this, flag);
        if (flag === widgets_1.Widget.Flag.IsVisible) {
            this.onDidChangeVisibilityEmitter.fire(this.isVisible);
        }
    };
    BaseWidget = __decorate([
        inversify_1.injectable()
    ], BaseWidget);
    return BaseWidget;
}(widgets_1.Widget));
exports.BaseWidget = BaseWidget;
function setEnabled(element, enabled) {
    element.classList.toggle(exports.DISABLED_CLASS, !enabled);
    element.tabIndex = enabled ? 0 : -1;
}
exports.setEnabled = setEnabled;
function createIconButton() {
    var _a;
    var classNames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classNames[_i] = arguments[_i];
    }
    var icon = document.createElement('i');
    (_a = icon.classList).add.apply(_a, __spread(classNames));
    var button = document.createElement('span');
    button.tabIndex = 0;
    button.appendChild(icon);
    return button;
}
exports.createIconButton = createIconButton;
var EventListenerObject;
(function (EventListenerObject) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function is(listener) {
        return !!listener && 'handleEvent' in listener;
    }
    EventListenerObject.is = is;
})(EventListenerObject = exports.EventListenerObject || (exports.EventListenerObject = {}));
function addEventListener(element, type, listener, useCapture) {
    element.addEventListener(type, listener, useCapture);
    return common_1.Disposable.create(function () {
        return element.removeEventListener(type, listener);
    });
}
exports.addEventListener = addEventListener;
function addKeyListener(element, keysOrKeyCodes, action) {
    var e_2, _a;
    var additionalEventTypes = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        additionalEventTypes[_i - 3] = arguments[_i];
    }
    var toDispose = new common_1.DisposableCollection();
    var keyCodePredicate = (function () {
        if (typeof keysOrKeyCodes === 'function') {
            return keysOrKeyCodes;
        }
        else {
            return function (actual) { return keys_1.KeysOrKeyCodes.toKeyCodes(keysOrKeyCodes).some(function (k) { return k.equals(actual); }); };
        }
    })();
    toDispose.push(addEventListener(element, 'keydown', function (e) {
        var kc = keys_1.KeyCode.createKeyCode(e);
        if (keyCodePredicate(kc)) {
            var result = action(e);
            if (typeof result !== 'boolean' || result) {
                e.stopPropagation();
                e.preventDefault();
            }
        }
    }));
    var _loop_1 = function (type) {
        toDispose.push(addEventListener(element, type, function (e) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var event = type['keydown'];
            var result = action(event);
            if (typeof result !== 'boolean' || result) {
                e.stopPropagation();
                e.preventDefault();
            }
        }));
    };
    try {
        for (var additionalEventTypes_1 = __values(additionalEventTypes), additionalEventTypes_1_1 = additionalEventTypes_1.next(); !additionalEventTypes_1_1.done; additionalEventTypes_1_1 = additionalEventTypes_1.next()) {
            var type = additionalEventTypes_1_1.value;
            _loop_1(type);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (additionalEventTypes_1_1 && !additionalEventTypes_1_1.done && (_a = additionalEventTypes_1.return)) _a.call(additionalEventTypes_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return toDispose;
}
exports.addKeyListener = addKeyListener;
function addClipboardListener(element, type, listener) {
    var documentListener = function (e) {
        var activeElement = document.activeElement;
        if (activeElement && element.contains(activeElement)) {
            if (EventListenerObject.is(listener)) {
                listener.handleEvent(e);
            }
            else {
                listener.bind(element)(e);
            }
        }
    };
    document.addEventListener(type, documentListener);
    return common_1.Disposable.create(function () {
        return document.removeEventListener(type, documentListener);
    });
}
exports.addClipboardListener = addClipboardListener;
/**
 * Resolves when the given widget is detached and hidden.
 */
function waitForClosed(widget) {
    return waitForVisible(widget, false, false);
}
exports.waitForClosed = waitForClosed;
/**
 * Resolves when the given widget is attached and visible.
 */
function waitForRevealed(widget) {
    return waitForVisible(widget, true, true);
}
exports.waitForRevealed = waitForRevealed;
/**
 * Resolves when the given widget is hidden regardless of attachment.
 */
function waitForHidden(widget) {
    return waitForVisible(widget, true);
}
exports.waitForHidden = waitForHidden;
function waitForVisible(widget, visible, attached) {
    if ((typeof attached !== 'boolean' || widget.isAttached === attached) &&
        (widget.isVisible === visible || (widget.node.style.visibility !== 'hidden') === visible)) {
        return new Promise(function (resolve) { return window.requestAnimationFrame(function () { return resolve(); }); });
    }
    return new Promise(function (resolve) {
        var waitFor = function () { return window.requestAnimationFrame(function () {
            if ((typeof attached !== 'boolean' || widget.isAttached === attached) &&
                (widget.isVisible === visible || (widget.node.style.visibility !== 'hidden') === visible)) {
                window.requestAnimationFrame(function () { return resolve(); });
            }
            else {
                waitFor();
            }
        }); };
        waitFor();
    });
}


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/uri-command-handler.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/uri-command-handler.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __read = (this && this.__read) || function (o, n) {
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
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UriAwareCommandHandler = void 0;
var selection_1 = __webpack_require__(/*! ../common/selection */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/selection.js");
var uri_1 = __webpack_require__(/*! ./uri */ "./node_modules/@theia/filesystem/node_modules/@theia/core/lib/common/uri.js");
/**
 * @todo Create different classes for single and multi-uris. State can be
 * corrupt if the developer does something like:
 * ```ts
 * new UriAwareCommandHandler<URI[]>(selectionService, handler, { multi: false })
 * ```
 */
var UriAwareCommandHandler = /** @class */ (function () {
    function UriAwareCommandHandler(selectionService, handler, options) {
        this.selectionService = selectionService;
        this.handler = handler;
        this.options = options;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    UriAwareCommandHandler.prototype.getUri = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args && args[0] instanceof uri_1.default) {
            // @ts-ignore we want to always return URIs
            return this.isMulti() ? [args[0]] : args[0];
        }
        var selection = this.selectionService.selection;
        if (!this.isMulti()) {
            return selection_1.UriSelection.getUri(selection);
        }
        var uris = selection_1.UriSelection.getUris(selection);
        return uris;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    UriAwareCommandHandler.prototype.execute = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var uri = this.getUri.apply(this, __spread(args));
        return uri ? (_a = this.handler).execute.apply(_a, __spread([uri], args)) : undefined;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    UriAwareCommandHandler.prototype.isVisible = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var uri = this.getUri.apply(this, __spread(args));
        if (uri) {
            if (this.handler.isVisible) {
                return (_a = this.handler).isVisible.apply(_a, __spread([uri], args));
            }
            return true;
        }
        return false;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    UriAwareCommandHandler.prototype.isEnabled = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var uri = this.getUri.apply(this, __spread(args));
        if (uri) {
            if (this.handler.isEnabled) {
                return (_a = this.handler).isEnabled.apply(_a, __spread([uri], args));
            }
            return true;
        }
        return false;
    };
    UriAwareCommandHandler.prototype.isMulti = function () {
        return this.options && !!this.options.multi;
    };
    return UriAwareCommandHandler;
}());
exports.UriAwareCommandHandler = UriAwareCommandHandler;


/***/ })

}]);
//# sourceMappingURL=3.bundle.js.map