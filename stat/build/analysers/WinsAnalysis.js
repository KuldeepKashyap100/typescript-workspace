"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
var MatchResults_1 = require("../MatchResults");
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(team) {
        this.team = team;
    }
    WinsAnalysis.prototype.run = function (matches) {
        var teamWinCount = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[1] === this.team && match[5] === MatchResults_1.MatchResult.HomeWin) {
                teamWinCount++;
            }
            else if (match[2] === this.team && match[5] === MatchResults_1.MatchResult.AwayWin) {
                teamWinCount++;
            }
        }
        return this.team + " won " + teamWinCount + " games";
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
