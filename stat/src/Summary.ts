import { MatchData } from "./MatchData";


export interface Analyser {
    run(match: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    constructor(public analyser: Analyser, public outputTarget: OutputTarget) {}

    buildAndPrintReport(matches: MatchData[]): void {
        const report = this.analyser.run(matches);
        this.outputTarget.print(report);
    }
}