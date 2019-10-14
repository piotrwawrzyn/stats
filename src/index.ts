import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { WinsAnalysis } from './analyzers/WinsAnalisys';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';

const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new HtmlReport('report.html')
);

summary.buildAndPrintReport(matchReader.matches);
