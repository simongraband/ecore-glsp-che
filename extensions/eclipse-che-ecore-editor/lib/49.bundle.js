(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./node_modules/@theia/filesystem/lib/browser/file-dialog/file-dialog-module.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/lib/browser/file-dialog/file-dialog-module.js ***!
  \**************************************************************************************/
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
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var file_dialog_service_1 = __webpack_require__(/*! ./file-dialog-service */ "./node_modules/@theia/filesystem/lib/browser/file-dialog/file-dialog-service.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(file_dialog_service_1.DefaultFileDialogService).toSelf().inSingletonScope();
    bind(file_dialog_service_1.FileDialogService).toService(file_dialog_service_1.DefaultFileDialogService);
});


/***/ }),

/***/ "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts sync recursive ^\\.\\/.*\\.json$":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts sync ^\.\/.*\.json$ ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./cs-Czech-mac.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/cs-Czech-mac.json",
	"./cs-Czech-pc.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/cs-Czech-pc.json",
	"./da-Danish-mac.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/da-Danish-mac.json",
	"./da-Danish-pc.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/da-Danish-pc.json",
	"./de-German-mac.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/de-German-mac.json",
	"./de-German-pc.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/de-German-pc.json",
	"./de-Swiss_German-mac.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/de-Swiss_German-mac.json",
	"./de-Swiss_German-pc.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/de-Swiss_German-pc.json",
	"./en-British-mac.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/en-British-mac.json",
	"./en-British-pc.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/en-British-pc.json",
	"./en-Colemak-mac.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/en-Colemak-mac.json",
	"./en-Dvorak-mac.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/en-Dvorak-mac.json",
	"./en-Dvorak-pc.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/en-Dvorak-pc.json",
	"./en-Dvorak_Lefthanded-mac.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/en-Dvorak_Lefthanded-mac.json",
	"./en-Dvorak_Lefthanded-pc.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/en-Dvorak_Lefthanded-pc.json",
	"./en-Dvorak_Righthanded-mac.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/en-Dvorak_Righthanded-mac.json",
	"./en-Dvorak_Righthanded-pc.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/en-Dvorak_Righthanded-pc.json",
	"./en-US-mac.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/en-US-mac.json",
	"./en-US-pc.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/en-US-pc.json",
	"./es-Spanish-mac.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/es-Spanish-mac.json",
	"./es-Spanish-pc.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/es-Spanish-pc.json",
	"./fr-Bepo-pc.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/fr-Bepo-pc.json",
	"./fr-Canadian_French-mac.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/fr-Canadian_French-mac.json",
	"./fr-Canadian_French-pc.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/fr-Canadian_French-pc.json",
	"./fr-French-mac.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/fr-French-mac.json",
	"./fr-French-pc.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/fr-French-pc.json",
	"./fr-Swiss_French-mac.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/fr-Swiss_French-mac.json",
	"./fr-Swiss_French-pc.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/fr-Swiss_French-pc.json",
	"./hu-Hungarian-mac.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/hu-Hungarian-mac.json",
	"./hu-Hungarian-pc.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/hu-Hungarian-pc.json",
	"./it-Italian-mac.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/it-Italian-mac.json",
	"./it-Italian-pc.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/it-Italian-pc.json",
	"./nb-Norwegian-mac.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/nb-Norwegian-mac.json",
	"./nb-Norwegian-pc.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/nb-Norwegian-pc.json",
	"./nl-Dutch-mac.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/nl-Dutch-mac.json",
	"./nl-Dutch-pc.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/nl-Dutch-pc.json",
	"./pl-Polish-mac.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/pl-Polish-mac.json",
	"./pl-Polish-pc.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/pl-Polish-pc.json",
	"./pt-Brazilian-mac.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/pt-Brazilian-mac.json",
	"./pt-Portuguese-mac.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/pt-Portuguese-mac.json",
	"./pt-Portuguese-pc.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/pt-Portuguese-pc.json",
	"./ro-Romanian-mac.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/ro-Romanian-mac.json",
	"./ro-Romanian-pc.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/ro-Romanian-pc.json",
	"./sv-Swedish-mac.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/sv-Swedish-mac.json",
	"./sv-Swedish-pc.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/sv-Swedish-pc.json",
	"./tr-Turkish_Q-mac.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/tr-Turkish_Q-mac.json",
	"./tr-Turkish_Q-pc.json": "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts/tr-Turkish_Q-pc.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/@theia/filesystem/node_modules/@theia/core/src/common/keyboard/layouts sync recursive ^\\.\\/.*\\.json$";

/***/ })

}]);
//# sourceMappingURL=49.bundle.js.map