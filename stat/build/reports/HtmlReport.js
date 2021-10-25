"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = void 0;
var fs = require("fs");
var HtmlReport = /** @class */ (function () {
    function HtmlReport() {
    }
    HtmlReport.prototype.print = function (report) {
        var htmlReport = "\n            <div>\n                <h1>Report Analysis</h1>\n                <div>" + report + "</div>\n            </div>\n        ";
        fs.writeFileSync("report.html", htmlReport);
    };
    return HtmlReport;
}());
exports.HtmlReport = HtmlReport;
