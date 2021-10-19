"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Sorter_1 = require("./Sorter");
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
    }
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            var node = this.head, count = 0;
            while (node) {
                count++;
                node = node.next;
            }
            return count;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.print = function () {
        var node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    };
    LinkedList.prototype.add = function (data) {
        var newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return this;
        }
        var node = this.head;
        while (node.next) {
            node = node.next;
        }
        node.next = newNode;
        return this;
    };
    LinkedList.prototype.at = function (idx) {
        var count = 0, node = this.head;
        while (node) {
            if (count === idx)
                return node;
            count++;
            node = node.next;
        }
        throw new Error("Index out of bounds");
    };
    LinkedList.prototype.compare = function (leftIdx, rightIdx) {
        return this.at(leftIdx).data > this.at(rightIdx).data;
    };
    LinkedList.prototype.swap = function (leftIdx, rightIdx) {
        var _a;
        _a = [this.at(rightIdx).data, this.at(leftIdx).data], this.at(leftIdx).data = _a[0], this.at(rightIdx).data = _a[1];
    };
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;
