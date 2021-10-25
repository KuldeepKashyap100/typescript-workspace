import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResults";
import { Analyser } from "../Summary";


export class WinsAnalysis implements Analyser {
    constructor(public team: string) {}
    run(matches: MatchData[]): string {
        let teamWinCount = 0;

        for (let match of matches) {
            if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
                teamWinCount++;
            } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
                teamWinCount++;
            }
        }

        return `${this.team} won ${teamWinCount} games`;
    }
}