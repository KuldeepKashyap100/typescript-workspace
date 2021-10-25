"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
require("reflect-metadata");
var Metadatakeys_1 = require("../Metadatakeys");
var use = function (middleware) {
    return function (target, key, desc) {
        var middlewares = Reflect.getMetadata(Metadatakeys_1.MetadataKeys.MIDDLEWARE, target, key) || [];
        Reflect.defineMetadata(Metadatakeys_1.MetadataKeys.MIDDLEWARE, __spreadArray(__spreadArray([], middlewares, true), [middleware], false), target, key);
    };
};
exports.use = use;
