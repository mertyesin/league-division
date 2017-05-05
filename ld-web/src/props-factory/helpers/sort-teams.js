"use strict";
function sortTeams(teamStatusList) {
    return teamStatusList.sort(function (a, b) {
        if (a.points === b.points && a.difference === b.difference) {
            return b.goalsFor - a.goalsFor;
        }
        else if (a.points === b.points) {
            return b.difference - a.difference;
        }
        else {
            return b.points - a.points;
        }
    });
}
exports.sortTeams = sortTeams;
//# sourceMappingURL=sort-teams.js.map