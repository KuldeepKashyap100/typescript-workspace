import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResults";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analysers/WinsAnalysis";
import { ConsoleReport } from "./reports/ConsoleReport";
import { HtmlReport } from "./reports/HtmlReport";


// Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader("football.csv");

// // Create an instance of MatchReader and pass in something satisfying
// // the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();

const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

const summary = new Summary(
  new WinsAnalysis("Man United"),
//   new ConsoleReport()
    new HtmlReport()
);
summary.buildAndPrintReport(matchReader.matches);
