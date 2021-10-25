"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.del = exports.post = exports.put = exports.get = void 0;
require("reflect-metadata");
var Metadatakeys_1 = require("../Metadatakeys");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(Metadatakeys_1.MetadataKeys.PATH, path, target, key);
            Reflect.defineMetadata(Metadatakeys_1.MetadataKeys.METHOD, method, target, key);
        };
    };
}
exports.get = routeBinder("get");
exports.put = routeBinder("put");
exports.post = routeBinder("post");
exports.del = routeBinder("delete");
exports.patch = routeBinder("patch");
