"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var Summary = /** @class */ (function () {
    function Summary(analyser, outputTarget) {
        this.analyser = analyser;
        this.outputTarget = outputTarget;
    }
    Summary.prototype.buildAndPrintReport = function (matches) {
        var report = this.analyser.run(matches);
        this.outputTarget.print(report);
    };
    return Summary;
}());
exports.Summary = Summary;
