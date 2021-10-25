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
exports.controller = void 0;
var AppRouter_1 = require("../../AppRouter");
var Metadatakeys_1 = require("../Metadatakeys");
var bodyValidators = function (keys) {
    return function (req, res, next) {
        if (!req.body)
            return res.status(422).send("Invalid request");
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!req.body[key])
                return res.status(422).send("Invalid request");
        }
        next();
    };
};
var controller = function (routePrefix) {
    return function (target) {
        for (var key in target.prototype) {
            var router = AppRouter_1.AppRouter.getInstance();
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata(Metadatakeys_1.MetadataKeys.PATH, target.prototype, key);
            var method = Reflect.getMetadata(Metadatakeys_1.MetadataKeys.METHOD, target.prototype, key);
            var middlewares = Reflect.getMetadata(Metadatakeys_1.MetadataKeys.MIDDLEWARE, target.prototype, key) || [];
            var requiredBodyProps = Reflect.getMetadata(Metadatakeys_1.MetadataKeys.VALIDATOR, target.prototype, key) || [];
            var validator = bodyValidators(requiredBodyProps);
            if (path)
                router[method].apply(router, __spreadArray(__spreadArray([routePrefix + path], middlewares, false), [validator, routeHandler], false));
        }
        ;
    };
};
exports.controller = controller;
