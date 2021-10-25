"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var WinsAnalysis_1 = require("./analysers/WinsAnalysis");
var HtmlReport_1 = require("./reports/HtmlReport");
// Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader("football.csv");
// // Create an instance of MatchReader and pass in something satisfying
// // the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
var matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
matchReader.load();
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis("Man United"), 
//   new ConsoleReport()
new HtmlReport_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
