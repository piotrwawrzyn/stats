"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var HtmlReport = /** @class */ (function () {
    function HtmlReport(fileName) {
        this.fileName = fileName;
    }
    HtmlReport.prototype.print = function (report) {
        var htmlCode = "\n      <div>\n        <h1>Analisys Output</h1>\n        <div>" + report + "</div>\n      </div>";
        fs_1.default.writeFileSync(this.fileName, htmlCode);
    };
    return HtmlReport;
}());
exports.HtmlReport = HtmlReport;
